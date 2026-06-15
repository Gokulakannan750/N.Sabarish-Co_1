# N. Sakthivel & Co. — Static Website

A rich, professional, fully responsive static website for N. Sakthivel & Co., a
quality-conscious civil construction firm based in Erode, Tamil Nadu (est. 2002).
No build step, no dependencies — just open `index.html` in a browser.

## Pages
| File | Purpose |
|------|---------|
| `index.html` | Home — hero, stats, about, services, process, projects, testimonials, CTA |
| `about.html` | Company story, mission/vision/values, leadership team, FAQ |
| `services.html` | Detailed service offerings + design-build advantage + process |
| `projects.html` | Filterable portfolio gallery (All / Residential / Commercial / Industrial) |
| `contact.html` | Contact form, info cards, embedded map |

## Structure
```
Constructions/
├── index.html
├── about.html
├── services.html
├── projects.html
├── contact.html
├── css/style.css      # all styling + design tokens + responsive rules
└── js/main.js         # nav, scroll reveal, counters, filters, FAQ, form
```

## Design
- **Palette:** Deep navy (`#0a1626`) · warm amber-gold (`#e9a23b`) · clean off-white (`#faf8f5`) · slate grays
- **Type:** Sora (display) + Inter (body) via Google Fonts
- **Features:** sticky header, animated stat counters, scroll-reveal animations, project filtering, FAQ accordion, mobile hamburger menu, back-to-top button

## Notes
- Photos are loaded from Unsplash CDN, so an internet connection shows imagery; gradients/overlays still look good offline.
- The contact form is front-end only (shows a success message). To make it live, wire the `#contactForm` submit handler in `js/main.js` to a backend or a service like Formspree.
- To customize the brand name, colors or contact details, edit the `:root` tokens in `css/style.css` and the text in each HTML file.
