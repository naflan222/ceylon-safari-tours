# Ceylon Safari Tours

A responsive five-page website for the travel and bike rental business in Tangalle, Sri Lanka.

- Home, Travels, Bike Rentals, About Us, Contact
- Original supplied logo and photography, optimised as WebP
- Mobile navigation and WhatsApp enquiry form
- Phone: +94 76 978 9949
- No database or API keys required

## Deploy on Vercel

Import this repository into Vercel. Select **Other** as the framework preset, leave the build command empty, and set the output directory to `dist`. The repository includes `vercel.json` with the output directory. Deploy from the repository root.

## Edit

Page templates and text live in `build.py`. Run `python3 build.py` to regenerate the five HTML pages after edits. Styling and browser behavior live directly in `dist/styles.css` and `dist/app.js`. Assets are in `dist/assets`.

The enquiry form opens WhatsApp with a prefilled message. The visitor must send the message in WhatsApp; the site does not store submissions or confirm bookings. Rates, bike models, available tours, inclusions, and meeting points are confirmed directly with the business.

Bike imagery is an illustration, not an advertised vehicle. No testimonials, ratings, prices, or availability claims have been invented. The provided Facebook share link is preserved as supplied.

A deployed-domain canonical URL and sitemap can be added after the production address is confirmed.
