# Personal portfolio website

This repository contains the source code for Zhuoheng Ying's GitHub Pages website.

The public homepage is `index.html`. This README is only repository documentation and is not used as the website homepage.

## Update links

Edit `site-config.js`:

```js
window.SITE_CONFIG = {
  github: "https://github.com/your-username",
  scholar: "https://scholar.google.com/citations?user=...",
  linkedin: "https://www.linkedin.com/in/..."
};
```

Leave a value empty to hide that link. When deployed to `username.github.io`, the GitHub profile URL is inferred automatically.

## Update CV and portrait

Replace these files while keeping the same filenames:

- `assets/Zhuoheng_Ying_CV.pdf`
- `assets/profile.jpg`

## Deploy

Create a public repository named `your-username.github.io`, upload the contents of this folder to the repository root, and enable GitHub Pages from the `main` branch.

```bash
git init
git add .
git commit -m "Build personal portfolio website"
git branch -M main
git remote add origin https://github.com/your-username/your-username.github.io.git
git push -u origin main
```

## Local preview

```bash
python -m http.server 8000
```

Open `http://localhost:8000`.
