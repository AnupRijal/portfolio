# Anup Rijal — Portfolio

React portfolio. Same design as the HTML version, now component-based and easy to maintain.

## Project Structure

```
src/
├── data.js              ← ALL your content lives here (update this!)
├── index.css            ← All styles
├── App.jsx              ← Assembles all sections
└── components/
    ├── Cursor.jsx
    ├── Navbar.jsx
    ├── Hero.jsx
    ├── About.jsx
    ├── Publications.jsx
    ├── Experience.jsx
    ├── Projects.jsx
    ├── Skills.jsx
    ├── Certifications.jsx
    ├── Contact.jsx
    └── ScrollReveal.jsx
```

## Setup & Run Locally

```bash
npm install
npm start
```

## Deploy to GitHub Pages

1. In `package.json`, add your homepage:
   ```json
   "homepage": "https://AnupRijal.github.io/portfolio"
   ```

2. Install gh-pages (already in devDependencies):
   ```bash
   npm install
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## Deploy to Vercel (Recommended — Easier)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Click Deploy — done. Auto-deploys on every push.

## Adding Your Photo

Place `hero.png` inside the `public/img/` folder.

## Updating Content

Everything is in `src/data.js` — projects, publications, skills, links. No need to touch any component files.
