# Synergy Lab website preview

This repository contains the deployable static copy of the Synergy Lab website. It is intended for previewing and publishing the site with GitHub Pages.

The editable/source repository and this deployment repository have different roles:

- `synergy_website`: source of truth for website edits and generation.
- `synergy_lab_website_test`: browser-ready static files only.

Do not store passwords, API keys, SSH keys, or server credentials in this repository.

## Local preview

Run from the repository root:

```bash
python3 -m http.server 8000
```

Then open <http://127.0.0.1:8000/>. Do not open the HTML through `file://`; the Publications page loads local data with `fetch()` and requires HTTP.

## First GitHub Pages deployment

1. Review the staged files and test the site locally.
2. Commit and push the `main` branch.
3. Open the repository on GitHub and go to **Settings → Pages**.
4. Under **Build and deployment**, choose **GitHub Actions** as the source.
5. Open the **Actions** tab and confirm that **Deploy static content to Pages** succeeds.
6. Open the Pages URL shown by the deployment. It should initially resemble:

   `https://georgia-tech-synergy-lab.github.io/synergy_lab_website_test/`

The included workflow automatically republishes the preview after every push to `main`. It can also be run manually from the Actions tab.

## Production domain later

Do not change the current `synergy.ece.gatech.edu` DNS record while this is still a test site.

After the preview has been reviewed and Georgia Tech approves the hosting change:

1. Add `synergy.ece.gatech.edu` under **Settings → Pages → Custom domain**.
2. Ask the Georgia Tech/ECE DNS administrator to replace the current CampusPress CNAME with the CNAME target required by GitHub Pages.
3. Wait for DNS and HTTPS provisioning to complete.
4. Recheck every page before retiring the WordPress version.

## Runtime contents

- `index.html`: homepage.
- `pages/`: content pages.
- `assets/css/`, `assets/js/`, and `assets/img/`: site presentation and media.
- `assets/scripts/pub_list/`: Publications data loaded at runtime.
- `assets/vendor/`: only the third-party browser files used by the pages.
- `.nojekyll`: prevents Jekyll processing of static asset paths.
