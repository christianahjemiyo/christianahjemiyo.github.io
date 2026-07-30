# Content Checklist

## Missing Content

- Approved redacted résumé PDF is not provided. The site displays: Public résumé available upon request.
- Project screenshots are not included yet. Public repositories were reviewed for image assets, but no screenshots were copied into this site.
- LinkedIn is not included because the public search result exposed additional profile details beyond the approved prompt. Add only after user approval.

## Unverified Professional Claims

- No unverified job titles, awards, grades, supervisors, committee members, funding details, or expected graduation date were added.
- No claim of professor, physician, clinician, principal investigator, or senior engineer status was added.

## Unverified Publication Details

- The 2014 AIMS project, "Two-component Mixture Regression Models for Longitudinal Count Data with Application to Dental Caries Indices," was not included on the public site because an official institutional record was not located during this build.
- The Stellenbosch thesis record is included with a user-confirmed authorship note and public full-text source, but an official institutional repository URL should be added when located.
- The SACEMA Quarterly research communication is included from a public full-text record, but the original SACEMA page was not located.

## Publication-Classification Uncertainties

- "Addressing Disparities in Cardiovascular Disease in Women and Minority Populations" is included as a journal article. DOI was not found, and peer-review status was not independently verified beyond the journal archive/PDF.
- The AMIA cancer-vaccine-adjuvant paper is classified as a conference proceedings paper, not a journal article.
- The arXiv records are associated manuscripts, not separate unrelated publications.
- The SDSU Data Science Symposium PPI record is classified as a poster presentation and related to the later Bioinformatics Advances article.

## Duplicate or Related Scholarly Records

- The 2023 arXiv PPI preprint is linked as the earlier version of the 2024 Bioinformatics Advances article.
- The 2025 arXiv cancer-vaccine-adjuvant preprint is linked as the associated preprint for the AMIA proceedings paper.
- The 2024 SDSU PPI poster is treated as a related presentation, not as a separate journal article.

## Missing Project Documentation

- All-of-Us-Project was excluded because the public README is too brief and the topic may involve controlled health-data workflows.
- Exercises-for-Data-Visualization-Course was excluded pending confirmation that course-study materials are appropriate for public portfolio presentation.
- agent-mastery was excluded because the public README does not provide enough detail for an accurate project entry.

## Links Awaiting Approval

- LinkedIn link awaiting user approval before inclusion.
- No Calendly or scheduling link is included.
- No email or telephone contact link is included.

## Information Intentionally Excluded for Privacy

- Telephone numbers
- Email addresses
- Residential addresses and precise residential location
- Personal résumé file
- Private documents and private datasets
- Credentials, tokens, passwords, private keys, and repository secrets
- Private repository names or private repository content
- Contact forms, maps, and calendar booking links

## Redacted Résumé Instructions

When an explicitly approved redacted résumé is available, save it as `public/documents/Christianah-Jemiyo-Resume.pdf`, add a public link on `src/pages/resume.astro`, and rerun `npm run check:all` before committing.
