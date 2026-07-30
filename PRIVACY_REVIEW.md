# Privacy Review

## Approved for Publication

- Preferred professional name
- Approved professional summary
- Approved education
- Approved experience
- Approved skills
- Approved service and memberships
- Verified public GitHub, Google Scholar, and ORCID links
- Verified publication citations
- Selected public GitHub project summaries

## Deliberately Excluded

- Telephone numbers
- Email addresses
- Home or street address
- Precise residential location
- Original résumé
- Private documents
- Private datasets
- Authentication credentials
- Private repository information
- Contact forms, maps, and scheduling links

## Files Scanned

- Source files under `src`
- Static public files under `public`
- Local verification scripts under `scripts`
- Documentation files
- Generated output under `dist` after build

## Search Patterns Used

- Email-address pattern
- North American telephone-number pattern
- Street-address pattern
- Apartment-reference pattern
- Geographic-coordinate pattern
- Private-key block pattern
- Credential-assignment pattern
- Contact-form pattern
- Telephone-link pattern
- Email-link pattern

## Potential Risks Found

- Some external source pages contain contact details or extra profile details. These values were not copied into the site.
- LinkedIn was verified as a public profile link from GitHub but not included because public preview text exposed details beyond the approved prompt.
- ORCID was included after public API review showed no public email records.

## Corrections Made

- No private contact fields were created in public data files.
- No résumé PDF was created.
- No contact form, map, analytics script, or scheduling link was added.

## Final Privacy Status

Passed final source and generated-output privacy scan with `npm run check:privacy`.

No telephone number, email address, residential address, contact form, map, résumé PDF, private repository information, private dataset, or credential pattern was found in the scanned source files or generated output.
