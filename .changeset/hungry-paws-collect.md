---
'@norges-domstoler/dds-components': major
---

Endringer i typer for typografi, samt komponenter som bruker typografi-relaterte props. `TypographyBodyType`, `TypographyHeadingType`, `TypographyLeadType` endrer verdier, typen `TypographySupportingType` fjernes, og `LabelTypografiType` bytter navn til `TypographyLabelType`. De nye typene er:

```ts
type TypographyBodyType =
  | 'bodyXsmall'
  | 'bodySmall'
  | 'bodyMedium'
  | 'bodyLarge';
type TypographyHeadingType =
  | 'headingXxsmall'
  | 'headingXsmall'
  | 'headingSmall'
  | 'headingMedium'
  | 'headingLarge'
  | 'headingXlarge'
  | 'headingXxlarge';
type TypographyLeadType = 'leadMedium';
type TypographyLabelType = 'labelMedium';
```

Komponenter som endrer mulige verdier for props som følge av denne endringen: `AccordionHeader`, `Heading`, `Link`, `List`, `Paragraph` og `Typography`. Se detaljer i [migreringsguiden](https://design.domstol.no/987b33f71/p/233a8b-v17-til-v18).
