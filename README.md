# Noodle Plus — Premium Restaurant Website

A responsive React + Vite restaurant website for Noodle Plus — Pan Asian Cuisine.

## Included
- 4 routed pages: Home, Menu, About Us, Visit Us
- Premium dark editorial UI with responsive mobile/tablet/desktop layouts
- Framer Motion page transitions, reveal animations, hover motion and mobile navigation
- Real supplied logo and food/restaurant imagery extracted from the uploaded PDFs
- Menu search, category filters, Veg / Non-Veg filters and menu prices from the supplied menu PDF
- Happy Hours combo section with listed prices
- Zomato, Swiggy, District reservation, Instagram and Google Maps links
- Embedded Google Map
- Firebase email/password sign in + sign up
- Firebase Continue with Google
- Accessible semantic buttons/links, responsive sticky header and mobile Order Online CTA

## Run
```bash
npm install
npm run dev
```

## Firebase setup
1. Create a Firebase project.
2. Enable Authentication → Email/Password and Google.
3. Copy `.env.example` to `.env`.
4. Fill in the Firebase web app credentials.
5. Add your localhost and production domains in Firebase Authentication → Settings → Authorized domains.

## Build
```bash
npm run build
npm run preview
```

## Important
The menu prices are based on the supplied Menu PDF. The original menu pages use multiple price columns for Veg / Paneer / Chicken or Egg / Chicken variants; the UI keeps those values visible in a compact format.
