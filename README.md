# Christianah O. Jemiyo Portfolio

This repository contains the local source for a privacy-safe academic and technical portfolio website for Christianah O. Jemiyo.

## Technology Stack

- Astro with TypeScript
- Modern CSS with light and dark themes
- Minimal client-side JavaScript for the theme toggle, mobile navigation, and project filters
- GitHub Actions workflow prepared for GitHub Pages
- No analytics, trackers, advertising scripts, contact form, maps, or third-party font calls

## Local Setup

```bash
npm install
npm run dev
```

Use `npm.cmd` instead of `npm` on Windows PowerShell if script execution policy blocks `npm.ps1`.

## Development Commands

```bash
npm run dev
npm run typecheck
npm run lint
npm run format
npm run test
npm run build
npm run validate:html
npm run check:links
npm run check:privacy
npm run check:all
```

## Folder Structure

```text
src/components/      Reusable Astro components
src/data/            Centralized public content and typed data
src/layouts/         Shared page layout and metadata shell
src/pages/           Static routes
src/styles/          Global design system CSS
src/utils/           Small helper functions
scripts/             Local content, link, and privacy checks
public/              Static public assets
```

## Content Architecture

Editable public content is centralized in `src/data`. Do not add private contact fields, hidden résumé fields, restricted dataset details, or credentials to these files.

To update professional information, edit the relevant file:

- Profile and links: `src/data/profile.ts`
- Research themes: `src/data/research.ts`
- Projects: `src/data/projects.ts`
- Publications and scholarly records: `src/data/publications.ts`
- Experience: `src/data/experience.ts`
- Education: `src/data/education.ts`
- Skills: `src/data/skills.ts`
- Service and memberships: `src/data/service.ts`

## Adding a Project

Add a new item to `src/data/projects.ts` only when the repository is public and the README or documentation supports an accurate description. Do not copy datasets, private screenshots, unpublished results, or restricted details.

## Adding a Publication

Add a publication to `src/data/publications.ts` only after verifying title, author order, venue, year, DOI or permanent URL, and publication type from an authoritative public source where possible.

To associate a preprint with a later publication, add the preprint as a separate `preprint` entry and use `associatedWith` to name the primary record. Do not count the preprint and later publication as unrelated works.

## Adding Presentations and Academic Research Projects

Use the `presentation` category for conference presentations, posters, institutional communications, and similar outputs. Use the `thesis` category for theses and academic research projects. If the status is uncertain, document it in `CONTENT_CHECKLIST.md` instead of presenting it as verified.

## Volunteer Service

Add service items to `src/data/service.ts` only when the role, organization, and year are approved for public display.

## Profile Photograph

The profile photograph should be retrieved from the public GitHub profile or official GitHub avatar URL for `christianahjemiyo`, optimized locally, and saved as:

```text
src/assets/profile-photo.jpg
```

Do not hotlink the avatar from GitHub. Strip metadata before committing the optimized image.

## Redacted Résumé

No résumé PDF is included. A redacted public résumé may be added later only after explicit approval at:

```text
public/documents/Christianah-Jemiyo-Resume.pdf
```

The current résumé page displays: Public résumé available upon request.

## Link and Privacy Checks

Run:

```bash
npm run build
npm run check:links
npm run check:privacy
```

The privacy scan checks source files and generated output for email addresses, North American telephone number patterns, street-address patterns, apartment references, geographic coordinates, private key blocks, credential assignments, contact forms, telephone links, and email links.

## Themes

The site supports light and dark themes through CSS custom properties. The theme toggle stores the visitor's local preference in browser storage and does not send data anywhere.

## GitHub Pages Deployment

The workflow in `.github/workflows/deploy.yml` follows the current Astro GitHub Pages pattern using `withastro/action` and `actions/deploy-pages`.

To publish later:

1. Create or connect the public repository `christianahjemiyo/christianahjemiyo.github.io`.
2. Push the local `main` branch after approval.
3. In GitHub repository settings, open Pages and set the source to GitHub Actions.
4. Confirm the deployment workflow succeeds.

Expected public URL after deployment:

```text
https://christianahjemiyo.github.io
```

## Custom Domain Later

A custom domain can be configured later by adding a public-safe `CNAME` file and configuring the domain in GitHub Pages settings. Do not add a custom domain until DNS ownership and privacy implications are reviewed.
