---
'@norges-domstoler/dds-components': major
---

`typographyType` prop i `<Typography>`, `<Link>` og `<Paragraph>` splitter verdier for body i body-short og body-long. `<List>` støtter kun verdier for body-long. Se detaljer i [migreringsguiden v21 til v22](https://design.domstol.no/987b33f71/p/16deeb-v21-til-v22). Typene er oppdatert slik:

```ts
type TypographyShortBodyType =
  | 'bodyShortXsmall'
  | 'bodyShortSmall'
  | 'bodyShortMedium'
  | 'bodyShortLarge';

type TypographyLongBodyType =
  | 'bodyLongXsmall'
  | 'bodyLongSmall'
  | 'bodyLongMedium'
  | 'bodyLongLarge';

type TypographyBodyType = TypographyShortBodyType | TypographyLongBodyType;
```
