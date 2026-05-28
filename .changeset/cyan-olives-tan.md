---
'@norges-domstoler/dds-design-tokens': patch
---

0-verdier returneres nå uten måleenhet (f.eks. `0` istedenfor `0rem`); dette påvirker design tokens spacing x0 og letter spacing i CSS og JS. I JS betyr dette endring av type fra `string` til `number` i disse samt sletting av token `ddsSpacingX0NumberRem` (som ikke var brukt av konsumenter).
