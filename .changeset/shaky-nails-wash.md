---
'@norges-domstoler/dds-design-tokens': patch
---

Design tokens som har verdi 0 (f.eks. `0em`) returnerer nå kun `0` uten måleenhet. I TS-format betyr det i tillegg at typen byttes fra `string` til `number`. Følgende tokens er påvirket og blir `0`:

```
--dds-font-letter-spacing-normal
--dds-spacing-x0
--dds-font-heading-xlarge-letter-spacing
--dds-font-heading-large-letter-spacing
--dds-font-heading-medium-letter-spacing
--dds-font-heading-small-letter-spacing
--dds-font-body-long-large-letter-spacing
--dds-font-body-long-medium-letter-spacing
--dds-font-lead-medium-letter-spacing
--dds-font-code-medium-letter-spacing
--dds-font-body-short-large-letter-spacing
--dds-font-body-short-medium-letter-spacing
```

Disse brukes idag på en måte som er kompatibel med endringen. Dette er dermed ikke en breaking change.
