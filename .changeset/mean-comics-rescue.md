---
'@norges-domstoler/dds-design-tokens': major
---

Vi endrer hvordan vi bruker og bygger typografi-tokens. Før var alle fontrelaterte egenskaper som fontstørrelse og vekt tilgjengelige som individuelle tokens. Nå følger vi CSS font shorthand property og setter sammen tokens per typografistil. I samme slengen går vi fra størrelser i `px` til `rem`. Tokens som ikke inngår shorthand, som letter-spacing, er uforandret. Se detaljer i [migreringsguiden](https://design.domstol.no/987b33f71/p/36dbb9-v5-til-v6).

```css
/* Før */
--dds-font-heading-sans-01-font-size: 16px;
--dds-font-heading-sans-01-font-weight: 600;
--dds-font-heading-sans-01-font-family: 'IBM Plex Sans';
--dds-font-heading-sans-01-line-height: 1.5em;

/* Etter */
--dds-font-heading-sans-01: 600 1rem/1.5 'IBM Plex Sans';
```
