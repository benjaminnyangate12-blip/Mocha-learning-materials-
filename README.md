# Mocha Learning Materials

A responsive, searchable and installable learning-resource catalogue. The landing page is `index.html`; it is a Progressive Web App (PWA), so Android users can install it from Chrome without an app store package.

## Run locally

Serve the repository over HTTP (service workers do not work from `file://`):

```bash
python3 -m http.server 8080
```

Then open <http://localhost:8080>.

## Publish the website

Enable GitHub Pages for the `main` branch in **Settings → Pages**. Use the generated HTTPS URL. HTTPS is required for PWA installation and service workers.

## Google Play path

This repository provides the installable web app and its Play-ready foundation, but it does **not** publish to Google Play automatically. To release it:

1. Publish the site at a stable HTTPS domain.
2. Add production app icons (192px and 512px) to the manifest and reference them in `manifest.webmanifest`.
3. Wrap the PWA with a Trusted Web Activity (Bubblewrap) or a small Android WebView project.
4. Create and sign an Android App Bundle (`.aab`), then complete the Google Play Console listing, testing, privacy policy and developer verification requirements.

Never include books, past papers or other copyrighted material unless you own it or have permission. The catalogue links to original publishers and open resources instead.

## Adding a resource

Edit the `materials` array in `index.html`. Use a stable original URL and include a clear category and description. Do not copy third-party PDFs into the repository without a licence.
