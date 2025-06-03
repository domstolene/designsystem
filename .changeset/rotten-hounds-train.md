---
'@norges-domstoler/dds-components': minor
---

Støtte for `color` prop i typografikomponenter: `<Caption>`, `<Heading>`, `<Label>`, `<Legend>`, `<Link>`, `<Paragraph>`. Den støtter både valgfri string og fargenavn for tekst og ikon fra våre design tokens; når kebab-case fargenavn brukes settes CSS klasse for den fargen, ellers brukes inline CSS. Farger som ikke er paret med en bakgrunnsfarge (f.eks. `text-subtle`, men ikke `text-on-notification`) blir automatisk invertert i `<Contrast>`-komponenten.
