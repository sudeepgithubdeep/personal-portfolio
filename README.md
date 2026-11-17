# Sudeep M K — Portfolio

An exact export of the approved portfolio, ready for GitHub Pages. No installation, build command, API key, database, or server is required.

## Deploy using the GitHub website

1. Extract this ZIP on your computer.
2. Create a new GitHub repository (for example `portfolio`). A public repository works with GitHub Free.
3. In the repository, choose **Add file → Upload files**. Upload the extracted CONTENTS, including the `assets` folder. `index.html` must be at the repository root, not inside another folder. Do not upload the ZIP itself.
4. Commit the files to `main`. Include `.nojekyll`; if your file picker hides it, create an empty file named `.nojekyll` using **Add file → Create new file**.
5. Open **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**, branch **main**, folder **/(root)**, and **Save**.
6. Wait for the Pages deployment to finish, then open the URL shown in Settings → Pages. Use the HTTPS URL.

Official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## What is preserved

- Approved illustrated portrait and responsive orange-and-cream layout.
- 3D name animation, pointer tilt, portrait mood toggle.
- Object detection demo, signal load slider, dashboard metric controls.
- Expandable project descriptions, section navigation, back-to-top links.
- About and Experience heading animations with tap/keyboard replay.
- Contact animations, availability pulse, motion toggle and reduced-motion support.
- Email links, email-copy feedback, printable résumé and browser Save as PDF.

The HTML, CSS, JavaScript, résumé, and active image are copied byte-for-byte from the approved site. Relative asset links work both at a domain root and under a repository path such as `/portfolio/`. Unused historical portrait files and hosting-specific configuration are omitted.

## Hosting differences and dependencies

GitHub Pages serves this portfolio directly; the ChatGPT sign-in gate belongs to the previous host and is not included. Your GitHub Pages portfolio will be publicly viewable. The portfolio itself has no sign-in feature or backend.

Typography uses the same Google Fonts connection as the original. Internet access to Google Fonts is needed for those fonts; browser/system rendering can vary. The project visuals are illustrative demos, not live AI inference or monitoring services.

Copy email requires HTTPS and browser clipboard permission; the existing text fallback remains available if permission is denied. Email links open the visitor's configured mail application. Print/Save as PDF uses the browser print dialog. These behaviors are unchanged.

## Preview locally

From this directory run `python -m http.server 8000`, then open `http://localhost:8000`. The GitHub deployment does not require Python.

## File guide

- `index.html`: portfolio structure and copy
- `style.css`: original styling, responsive rules, and animations
- `app.js`: original interactions
- `resume.html`: printable résumé
- `assets/sudeep-illustrated-portrait.png`: approved portrait
- `.nojekyll`: serve the static files without Jekyll processing

## Verify after deployment

Check the portrait, navigation, portrait mood button, Run detection, signal slider, dashboard tabs, project expansion, heading replay, motion toggle, Copy email, and View résumé. If an old version appears, hard-refresh the page. If assets are missing, ensure the `assets` folder and all files were uploaded at the correct level, with the original filenames.
