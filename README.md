# Zhuoheng Ying — GitHub Pages Portfolio

A dependency-free personal academic and engineering portfolio built with HTML, CSS, and JavaScript.

## 1. Customize before publishing

Open `index.html` and search for `TODO` or `YOUR_GITHUB_USERNAME`.

Replace:

- `https://github.com/YOUR_GITHUB_USERNAME`
- Google Scholar URL
- LinkedIn URL
- Any project/publication text that needs updating
- `assets/Zhuoheng_Ying_CV.pdf` whenever your CV changes

## 2. Publish as a personal GitHub Pages site

1. Create a public repository named `<your-github-username>.github.io`.
2. Upload all files in this folder to the repository root.
3. Commit and push to the `main` branch.
4. In the repository Pages settings, publish from the `main` branch and the root folder.
5. Your website will use the address `https://<your-github-username>.github.io/`.

## 3. Command-line upload

```bash
git init
git add .
git commit -m "Create personal portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_GITHUB_USERNAME.github.io.git
git push -u origin main
```

## 4. Local preview

Opening `index.html` directly works. For a local server:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## 5. Recommended repository structure

```text
.
├── index.html
├── style.css
├── script.js
├── 404.html
├── .nojekyll
├── README.md
└── assets/
    └── Zhuoheng_Ying_CV.pdf
```

## Privacy and accuracy checklist

- Do not upload company-confidential test reports or internal regulatory documents.
- Do not publish participant-level research data.
- Verify publication status, author order, and dates before deployment.
- Replace placeholder profile links before adding the website to your CV.
