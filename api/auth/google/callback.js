const { google } = require("googleapis");

const escapeHtml = (value = "") =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");

module.exports = async (req, res) => {
  try {
    const { code, state } = req.query;

    if (!code) {
      return res.status(400).send("Authorization was cancelled.");
    }

    if (!req.session || !req.session.oauthState || state !== req.session.oauthState) {
      return res.status(400).send("Invalid authentication request.");
    }

    delete req.session.oauthState;

    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_REDIRECT_URI
    );

    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    const oauth2 = google.oauth2({
      auth: oauth2Client,
      version: "v2",
    });

    const { data: user } = await oauth2.userinfo.get();

    req.session.user = {
      id: user.id,
      email: user.email,
      name: user.name,
      picture: user.picture,
      verified_email: user.verified_email,
    };

    req.session.tokens = {
      accessToken: tokens.access_token,
      refreshToken: tokens.refresh_token,
      expiryDate: tokens.expiry_date,
    };

    const name = escapeHtml(user.name || "User");
    const email = escapeHtml(user.email || "");
    const picture = escapeHtml(user.picture || "");

    return res.send(`
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Welcome to Mocha Learning</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 50px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            margin: 0;
            min-height: 100vh;
          }

          .card {
            max-width: 500px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            padding: 40px 30px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
          }

          img {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            object-fit: cover;
            border: 3px solid #667eea;
          }

          h1 {
            color: #333;
          }

          h2 {
            color: #4f46e5;
          }

          p {
            color: #555;
          }

          .success {
            margin-top: 20px;
            background: #e8f5e9;
            color: #2e7d32;
            border-radius: 8px;
            padding: 12px;
            font-weight: bold;
          }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>Welcome to Mocha Learning</h1>
          ${picture ? `<img src="${picture}" alt="Profile picture" />` : ""}
          <h2>${name}</h2>
          <p>Email: ${email}</p>
          <div class="success">Google authorization completed successfully.</div>
        </div>
      </body>
      </html>
    `);
  } catch (error) {
    console.error("Google OAuth callback error:", error);
    return res.status(500).send("Authentication failed.");
  }
};
