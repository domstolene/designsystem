---
'@norges-domstoler/dds-components': patch
---

Fikser hvordan `indeterminate` prop håndteres i `<Checkbox>`. Den setter nå `indeterminate` DOM property for inputeelementet, istedenfor å påvirke `aria-checked`. Disse props er uanhengige av hverandre og skal ikke blandes, slik at skjermlesere får riktig informasjon. Fikser også bug der read-only oppførsel ikke fungerte ved `onChange` event.
