# Muhammad Mehdi personal website

React + Vite site. All text lives in `src/data.js`; the GRACE chart data is `src/grace_series.json`.

## Run it on your computer
1. Install Node.js (version 20 or newer) from https://nodejs.org
2. In this folder run:
   npm install
   npm run dev
3. Open the address it prints (usually http://localhost:5173).

## Publish on GitHub Pages (free)
1. On GitHub, create a new public repository named exactly: muhammad-mehdi12.github.io
2. Upload everything in this folder to that repository (including the hidden `.github` folder), or use:
   git init
   git add .
   git commit -m "Personal website"
   git branch -M main
   git remote add origin https://github.com/muhammad-mehdi12/muhammad-mehdi12.github.io.git
   git push -u origin main
3. In the repository go to Settings > Pages > Build and deployment > Source, and choose "GitHub Actions".
4. Wait 1-2 minutes. The site will be live at https://muhammad-mehdi12.github.io

Your existing project pages (carbonscope-tx, demography-atlas) keep working, because they live in their own repositories.

## Update content
Edit `src/data.js` (text, projects, manuscripts) and replace `public/Muhammad_Mehdi_CV.pdf` or `public/photo.png`. Push to GitHub and the site rebuilds automatically.
