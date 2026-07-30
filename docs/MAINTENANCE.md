# Portfolio Maintenance Guide

This guide keeps update instructions separate from the public-facing repository overview.

## Content Boundary

Editable public content is centralized in `src/data`. Do not add private contact fields, hidden resume fields, restricted dataset details, credentials, private repository information, or unpublished research findings to public source files.

Primary content files:

- Profile and links: `src/data/profile.ts`
- Research themes: `src/data/research.ts`
- Projects: `src/data/projects.ts`
- Publications and scholarly records: `src/data/publications.ts`
- Experience: `src/data/experience.ts`
- Education: `src/data/education.ts`
- Skills: `src/data/skills.ts`
- Service and memberships: `src/data/service.ts`

## Updating Professional Information

Use only approved public information. Do not add grades, awards, supervisors, committee members, expected graduation dates, job titles, contact details, or other personal information unless Christianah explicitly approves the exact public wording.

## Adding a Project

Add a project to `src/data/projects.ts` only when the repository is public and its README or documentation supports an accurate description.

Do not copy datasets, private screenshots, unpublished results, restricted details, or private repository names into the site.

If documentation is insufficient, leave the project out of the site and document the gap in `CONTENT_CHECKLIST.md`.

## Adding a Publication

Add a publication to `src/data/publications.ts` only after verifying title, author order, venue, year, DOI or permanent URL, and publication type from an authoritative public source where possible.

Preferred verification sources include publisher pages, DOI records, PubMed, PMC, arXiv, institutional repositories, university libraries, and official conference proceedings.

Do not rely on Google Scholar alone for DOI values, author order, peer-review status, volume, issue, article number, page range, or publication type.

## Associating a Preprint

When a preprint is associated with a later journal article or proceedings paper, keep the later version as the primary record and add the preprint as an associated manuscript using `associatedWith`.

Do not count a preprint and its later version as unrelated publications.

## Presentations and Academic Research Projects

Use the `presentation` category for conference presentations, posters, institutional communications, and similar outputs.

Use the `thesis` category for theses and academic research projects.

If the status is uncertain, document the uncertainty in `CONTENT_CHECKLIST.md` instead of presenting the record as verified.

## Volunteer Service

Add service items to `src/data/service.ts` only when the role, organization, and year are approved for public display.

Do not include applicant information, reviewer comments, scores, selection decisions, private organizer details, or unapproved service claims.

## Profile Photograph

The profile photograph should be retrieved only from the public GitHub profile or official GitHub avatar URL for `christianahjemiyo`, optimized locally, and saved as:

```text
src/assets/profile-photo.jpg
```

Do not hotlink the image from GitHub. Strip metadata before committing the optimized image.

The optimization helper is:

```bash
node scripts/optimize-profile-photo.mjs
```

## Resume Handling

No resume PDF is currently included. The live resume page displays:

```text
Public resume available upon request.
```

A redacted public resume can be added later only after explicit approval. The approved future path is:

```text
public/documents/Christianah-Jemiyo-Resume.pdf
```

Do not create a fake resume PDF, empty download button, or placeholder PDF.

## Link and Privacy Checks

Run the full validation suite before committing and pushing:

```bash
npm run check:all
```

The privacy scan checks source files and generated output for email-address patterns, North American telephone-number patterns, street-address patterns, apartment references, geographic-coordinate patterns, private-key blocks, credential assignments, contact forms, telephone links, and email links.

## Deployment

The GitHub Actions workflow builds and deploys the site to GitHub Pages from `main`.

After a content change is committed and pushed, confirm the workflow succeeds:

```bash
gh run list --repo christianahjemiyo/christianahjemiyo.github.io --limit 3
```

The public site should remain available at:

```text
https://christianahjemiyo.github.io
```

## Custom Domain

A custom domain can be configured later by adding a public-safe `CNAME` file and configuring the domain in GitHub Pages settings. Review DNS ownership and privacy implications before making that change.
