# Christianah O. Jemiyo Portfolio Website

This repository hosts the source code for Christianah O. Jemiyo's academic and technical portfolio website.

Live site: https://christianahjemiyo.github.io

## About

The website presents a public, privacy-safe professional profile for Christianah O. Jemiyo, including research interests, selected scholarly work, public technical projects, education, professional experience, service, and skills.

The content is written for academic collaborators, research institutions, data science and artificial intelligence professionals, public health researchers, students, and professional contacts.

## Technology

- Astro with TypeScript
- Modern CSS with responsive light and dark themes
- Minimal client-side JavaScript for navigation, theme switching, and project filtering
- GitHub Actions deployment to GitHub Pages
- System fonts and local assets

## Privacy

This site is intentionally privacy-conscious. It does not include personal email addresses, telephone numbers, residential addresses, contact forms, maps, analytics, advertising scripts, private datasets, original resume files, or credentials.

Public contact is limited to verified professional platforms.

## Repository Structure

```text
src/components/      Reusable Astro components
src/data/            Centralized public content and typed data
src/layouts/         Shared page layout and metadata shell
src/pages/           Static routes
src/styles/          Global design system CSS
src/utils/           Small helper functions
scripts/             Local content, link, and privacy checks
public/              Static public assets
docs/                Maintainer documentation
```

## Local Development

```bash
npm install
npm run dev
```

On Windows PowerShell, use `npm.cmd` if script execution policy blocks `npm.ps1`.

## Quality Checks

```bash
npm run check:all
```

The full check runs linting, formatting verification, content checks, Astro type checking, production build, generated HTML validation, local link checks, and privacy scanning.

## Deployment

The site is deployed to GitHub Pages through the workflow in `.github/workflows/deploy.yml`. Pushes to `main` trigger a production build and deployment through GitHub Actions.

Expected public URL:

```text
https://christianahjemiyo.github.io
```

## Maintenance

Maintainer guidance for content updates, publication verification, privacy checks, profile-photo handling, and future resume handling is documented in `docs/MAINTENANCE.md`.
