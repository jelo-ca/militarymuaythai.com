# Muay Thai Academy International Website

A static marketing site for Muay Thai Academy International that highlights the gym's programs, schedule, contact details, and testimonials.

## Project structure
- `public/index.html` – Main page markup including hero, about, program, schedule, contact form, and testimonial carousel sections.
- `public/css` – Styles split into base (`style.css`), responsive tweaks (`media.css`), and animations (`animations.css`).
- `public/script.js` – JavaScript for the testimonial carousel and contact form submission handling.
- `public/assets` – Images and other static assets.

## Getting started
This site is static and can be viewed by opening `public/index.html` directly in a browser.

For local development with automatic refresh and proper asset paths, run a simple web server from the repository root:

```bash
# Option 1: Python 3 built-in server
cd public
python -m http.server 8000

# Option 2: Node http-server (if installed globally)
cd public
http-server -p 8000
```

Then open [http://localhost:8000](http://localhost:8000) in your browser.

## Key features
- Full-bleed hero with CTA and tagline.
- About section detailing the academy's background.
- Program cards outlining education, training, and development focus areas.
- Weekly class schedule, including specialized training sessions.
- Contact information with a basic form layout.
- Testimonial carousel controls (JS hooks in `public/script.js`).

## Assets and styling
- Custom fonts are loaded via Google Fonts (Metal Mania, Metrophobic, Saira Condensed, Roboto).
- Animation and layout styles are defined in `public/css/animations.css`, `public/css/style.css`, and `public/css/media.css`.

## Contributing
Feel free to open issues or submit pull requests for improvements, bug fixes, or new content.
