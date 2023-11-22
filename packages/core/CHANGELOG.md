# @norges-domstoler/dds-core

## 0.1.2

### Patch Changes

- 8fea35f5: Slutter å videresende styling-props til DOM-en. Tidligere ble alle styling props vi brukte i styled-components videresendt til DOM-en. Disse blir nå filtrert ut for å unngå å ha ugyldige props på DOM-elementer.

## 0.1.1

### Patch Changes

- 5ca91f84: Diverse småfikser oppdaget etter strengere eslint-regler
- Updated dependencies [7cb301f8]
- Updated dependencies [5ca91f84]
  - @norges-domstoler/dds-design-tokens@3.0.2

## 0.1.0

### Minor Changes

- eaff8a3e: Tillat versjon 6 av styled-components i peer dependencies.

### Patch Changes

- 958d5a99: Oppdatere @floating-ui/react-dom til versjon 2

## 0.0.8

### Patch Changes

- 029695f1: Fikse feil med designsystemet hvor det ikke fungerte i Next.js page router applikasjoner.

## 0.0.7

### Patch Changes

- b2ae4205: Fikser bug hvor inline SVG-er ikke ble vist frem

## 0.0.6

### Patch Changes

- 955c4183: Fikse feilaktig bump av dds-design-tokens

## 0.0.5

### Patch Changes

- 8eb214ef: Bump dependencies
- Updated dependencies [8eb214ef]
  - @norges-domstoler/dds-design-tokens@3.0.2

## 0.0.4

### Patch Changes

- 209f3962: Forenkler byggeprosessen. Burde ikke oppleve noen endringer.

## 0.0.3

### Patch Changes

- 71ddaa08: Legger til experimental component AppShell. Bør ikke tas i bruk enda, breaking changes kan skje uten forvarsel utenfor major-versjon

## 0.0.2

### Patch Changes

- 12f50368: Publiser internpakker. Ikke meningen å ta disse i bruk av eksterne enda.

## 0.0.1

### Patch Changes

- b904c66a: Intern endring.
  Flytter en del fellesfunksjonalitet ut av dds-components inn i nye mindre interne pakker.
  Som konsument skal du ikke merke noe til denne endringen.
