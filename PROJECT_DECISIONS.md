# Project Decisions

## Technology Decisions

- Astro was selected for a static, maintainable GitHub Pages site with low client-side JavaScript.
- TypeScript data files centralize public content and provide a strict public-content boundary.
- System fonts are used to avoid third-party font requests.
- No analytics, trackers, contact-form services, maps, or advertising scripts are used.

## Visual Decisions

- The design uses a warm academic palette with teal, copper, muted blue, and neutral surfaces.
- Light and dark themes are implemented with CSS custom properties.
- Data-inspired grid and line elements provide visual identity without animation-heavy effects.
- Cards use restrained 8px-radius styling and are limited to repeated entries and framed content.

## Privacy Decisions

- Private contact channels are not stored, hidden, or commented in source files.
- The résumé page does not link to a PDF until an approved redacted PDF is provided.
- The contact page includes only verified public professional platforms.
- LinkedIn was excluded pending approval because public search text exposed details beyond the approved prompt.
- Public-source pages that expose contact details are used only for bibliographic verification; those contact details are not copied.

## Content-Verification Decisions

- Approved prompt content is treated as the authoritative professional foundation.
- GitHub projects are selected only from public repositories owned by `christianahjemiyo`.
- Repositories with insufficient documentation or potential course-material concerns are excluded and documented in `CONTENT_CHECKLIST.md`.

## Publication-Classification Decisions

- Publisher, DOI, PubMed/PMC, arXiv, and institutional records are preferred over Google Scholar for bibliographic metadata.
- Preprints are linked to their later versions instead of counted as unrelated publications.
- Presentations and research communications are separated from journal articles.
- The 2014 AIMS project is excluded until an official or otherwise reliable public record is found.

## Accessibility Decisions

- Pages use semantic landmarks, a skip link, keyboard-accessible navigation, visible focus states, and descriptive link text.
- Theme switching and mobile navigation use buttons with ARIA state updates.
- Project filters use `aria-pressed` and do not rely on hover.
- Reduced-motion preferences are respected.

## Deployment Decisions

- GitHub Pages is configured locally with a workflow but not activated or pushed.
- The workflow builds pull requests without deploying and deploys only from `main` pushes after GitHub Pages is enabled.
- Astro `site` is set to `https://christianahjemiyo.github.io` with no base path because the required repository is a user Pages repository.
