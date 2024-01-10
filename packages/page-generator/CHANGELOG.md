# @norges-domstoler/dds-page-generator

## 2.7.11

### Patch Changes

- Updated dependencies [0193878]
  - @norges-domstoler/dds-components@13.13.0

## 2.7.10

### Patch Changes

- Updated dependencies [0541191]
  - @norges-domstoler/dds-components@13.12.0

## 2.7.9

### Patch Changes

- Updated dependencies [76d0288]
  - @norges-domstoler/dds-components@13.11.5

## 2.7.8

### Patch Changes

- 4634c63: Samle alle interne pakker tilbake inn i dds-components
- Updated dependencies [4634c63]
  - @norges-domstoler/dds-components@13.11.4

## 2.7.7

### Patch Changes

- Updated dependencies [b4f284e]
- Updated dependencies [40089c4]
  - @norges-domstoler/dds-components@13.11.3

## 2.7.6

### Patch Changes

- Updated dependencies [d482ef7]
  - @norges-domstoler/dds-components@13.11.2
  - @norges-domstoler/dds-typography@0.1.6

## 2.7.5

### Patch Changes

- @norges-domstoler/dds-components@13.11.1
- @norges-domstoler/dds-typography@0.1.5

## 2.7.4

### Patch Changes

- Updated dependencies [e2f96277]
  - @norges-domstoler/dds-components@13.11.0
  - @norges-domstoler/dds-typography@0.1.4

## 2.7.3

### Patch Changes

- @norges-domstoler/dds-components@13.10.5

## 2.7.2

### Patch Changes

- f21593bb: Bruker mer spesifikk versjon av interne dependencies
- Updated dependencies [f21593bb]
  - @norges-domstoler/dds-components@13.10.4
  - @norges-domstoler/dds-typography@0.1.3
  - @norges-domstoler/dds-design-tokens@3.0.3

## 2.7.1

### Patch Changes

- abf6e105: Gjør typene til Select mer konkrete. `TOption` trenger nå kun å inneholde feltene `label` og `value`.
- 5ca91f84: Diverse småfikser oppdaget etter strengere eslint-regler
- Updated dependencies [7cb301f8]
- Updated dependencies [b14868fb]
- Updated dependencies [abf6e105]
- Updated dependencies [5ca91f84]
  - @norges-domstoler/dds-design-tokens@3.0.2
  - @norges-domstoler/dds-components@13.10.1
  - @norges-domstoler/dds-typography@0.1.1

## 2.7.0

### Minor Changes

- eaff8a3e: Tillat versjon 6 av styled-components i peer dependencies.

### Patch Changes

- Updated dependencies [958d5a99]
- Updated dependencies [eaff8a3e]
  - @norges-domstoler/dds-components@13.10.0
  - @norges-domstoler/dds-typography@0.1.0

## 2.6.1

### Patch Changes

- 029695f1: Fikse feil med designsystemet hvor det ikke fungerte i Next.js page router applikasjoner.
- Updated dependencies [029695f1]
- Updated dependencies [2b80dade]
  - @norges-domstoler/dds-components@13.9.0
  - @norges-domstoler/dds-typography@0.0.7

## 2.6.0

### Minor Changes

- 630a4fbc: Add TextArea to PageGenerator

### Patch Changes

- Updated dependencies [db0c5d72]
  - @norges-domstoler/dds-components@13.8.8

## 2.5.3

### Patch Changes

- 8eb214ef: Bump dependencies
- Updated dependencies [8eb214ef]
  - @norges-domstoler/dds-components@13.8.5
  - @norges-domstoler/dds-design-tokens@3.0.2
  - @norges-domstoler/dds-typography@0.0.4

## 2.5.2

### Patch Changes

- 209f3962: Forenkler byggeprosessen. Burde ikke oppleve noen endringer.
- Updated dependencies [209f3962]
  - @norges-domstoler/dds-components@13.8.3
  - @norges-domstoler/dds-typography@0.0.3

## 2.5.1

### Patch Changes

- 74c80136: Legg til manglende nullsjekk for obj når det sjekkes for validations

## 2.5.0

### Minor Changes

- 18ff827d: Legg til validering for TextInput i PageGenerator

## 2.4.0

### Minor Changes

- 68f1c88c: Legg til støtte for children for CardField i PageGenerator
- b225f163: Legg til støtte for ComponentProps for ButtonField i PageGenerator

## 2.3.0

### Minor Changes

- f0383c23: Legg til støtte for HStack og VStack i PageGenerator

### Patch Changes

- e9de7b1e: Legger til `displayName` på alle komponenter. Dette skal gjøre feilmeldinger knyttet til Elsa-komponenter lettere å lese.
- 57652c2e: Fix(section-generator): Fjern rowType fra rest for å unngå feilmelding i konsoll-loggen
- Updated dependencies [48090b12]
- Updated dependencies [e9de7b1e]
- Updated dependencies [c12ec87d]
  - @norges-domstoler/dds-components@13.4.0

## 2.2.5

### Patch Changes

- Updated dependencies [0f517fa3]
- Updated dependencies [735adcbc]
- Updated dependencies [6b1e53c5]
- Updated dependencies [5916d4df]
- Updated dependencies [45d2024e]
  - @norges-domstoler/dds-components@13.0.0

## 2.2.4

### Patch Changes

- a39e72b0: Fix: Returner hele option-elementet når selectOnChange trigges i PageGenerator og SectionGenerator
- Updated dependencies [f7be56dd]
  - @norges-domstoler/dds-components@12.1.3

## 2.2.3

### Patch Changes

- 02e499c2: Bruk siste versjon av npm til publishing av pakker
- Updated dependencies [02e499c2]
  - @norges-domstoler/dds-components@12.1.2

## 2.2.2

### Patch Changes

- 1aeaa4b0: Ta i bruk [npm package provenance](https://github.blog/2023-04-19-introducing-npm-package-provenance/).
  Dette gjør at konsumenter verifiserbart kan sjekke hvor pakkens innhold kommer fra.
- Updated dependencies [1aeaa4b0]
  - @norges-domstoler/dds-components@12.1.1

## 2.2.1

### Patch Changes

- Updated dependencies [e451bf8b]
- Updated dependencies [8d91d37c]
  - @norges-domstoler/dds-components@12.0.0

## 2.2.0

### Minor Changes

- 99fe4ac2: Legg til støtte for å bruke Drawer og DrawerGroup i dds-page-generator

### Patch Changes

- Updated dependencies [82339ae4]
  - @norges-domstoler/dds-components@11.3.2

## 2.1.1

### Patch Changes

- 21fb7cf8: Fix: Legg til type HTMLElement inn i typen for SectionGeneratorRow

## 2.1.0

### Minor Changes

- 1a11adc4: Legg til ny type SectionGeneratorRow

### Patch Changes

- fa29cd1e: Fjern nødvendighet for peerDependencies på andre designsystempakker
- b03c8284: Endre alle `peerDependencies` til å være mer føyelig i hvilke versjoner vi tillater.
- Updated dependencies [f0e24282]
- Updated dependencies [b03c8284]
  - @norges-domstoler/dds-components@11.3.1

## 2.0.0

### Minor Changes

- 887bfa76: Legg til støtte for å skjule PageGeneratorRow

### Patch Changes

- Updated dependencies [f8a9776a]
  - @norges-domstoler/dds-components@11.3.0

## 1.1.1

### Patch Changes

- 81b0a1f1: SectionGenerator: Legg til manglende key på React.Fragment

## 1.1.0

### Minor Changes

- 6c1f5af5: Legg til støtte for React.Fragment som wrapper-element for SectionGenerator

### Patch Changes

- 0525dc53: Gjør react, react-dom og styled-components til eksterne dependencies sånn at disse ikke blir inkludert i bygget. Dette vil fikse "invalid hook call"-feilen

## 1.0.0

### Patch Changes

- f4adb526: Legg til ny pakke PageGenerator `@norges-domstoler/dds-page-generator`
- Updated dependencies [03f759b2]
- Updated dependencies [f4adb526]
- Updated dependencies [1aa3cf44]
  - @norges-domstoler/dds-components@11.2.0
