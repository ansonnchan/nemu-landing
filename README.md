# nemu landing

The public landing page for [nemu](https://github.com/ansonnchan/nemu), a quiet, privacy-first activity journal for macOS.

## Local preview

The site is static and has no runtime secrets or environment variables.

```sh
python3 -m http.server 4173
```

Open <http://localhost:4173>.

## Deploy

Import this repository into Vercel and keep the default static-site settings. No build command or output-directory override is required.

The functional dashboard remains hosted separately on CloudFront because its browser session and API intentionally share one origin.
