# Portfolio response policy

`vercel.json` applies the response headers to every route. The production build serves its theme initializer from `/theme-init.js`, so scripts can be limited to the same origin without allowing inline scripts or eval.

The CSP permits Google Fonts stylesheet and font endpoints, and the existing FormSubmit contact endpoint. Images and media remain local, with data/blob images allowed for generated artwork and downloads. Inline styles remain permitted because React animations and variant previews set element styles dynamically. Objects, embedding, inline event handlers, and unapproved script or fetch origins are blocked.

`X-Frame-Options: DENY` accompanies `frame-ancestors 'none'`. The policy also sets `nosniff`, a strict-origin-when-cross-origin referrer policy, and disables unused camera, microphone, geolocation, payment and USB features. HTTPS/HSTS remains managed by the Vercel host.

Browser verification uses the actual built pages with the same headers: theme initialization, Google Fonts, the CV, all screenshot steps, packaging-dialog dismissal, and mobile layout. The contact POST is intercepted to verify that the CSP permits the request and the UI handles success without sending a test email. A deliberate inline script is blocked. Production response headers and the real public routes are checked after deployment.
