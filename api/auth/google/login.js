const { google } = require("googleapis");

module.exports = async (req, res) => {
  try {
    const oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_REDIRECT_URI
    );

    const scopes = [
      "openid",
      "email",
      "profile",
      "https://www.googleapis.com/auth/gmail.readonly"
    ];

    // Generate a random state for CSRF protection
    const state = require("crypto").randomBytes(16).toString("hex");

    // Store state in session for verification in callback
    if (!req.session) {
      req.session = {};
    }
    req.session.oauthState = state;

    const authorizationUrl = oauth2Client.generateAuthUrl({
      access_type: "offline",
      scope: scopes,
      prompt: "consent",
      state: state
    });

    res.redirect(authorizationUrl);
  } catch (error) {
    console.error("Google login error:", error);
    res.status(500).send("Login initialization failed.");
  }
};
