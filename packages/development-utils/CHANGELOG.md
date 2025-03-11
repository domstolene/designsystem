# @norges-domstoler/development-utils

## 2.0.1

### Patch Changes

- c7121a5: Eksporter css-fil for dev-utils

## 2.0.0

### Major Changes

- 39a68f0: Oppgraderer til React 19 med endringer som ikke er kompatible med eldre versjoner. Det er dermed påkrevd med oppgradering til React 19 for konsumentene.

### Minor Changes

- 4f0903e: Bruk css modules istedenfor styled-components for dev-utils

## 1.3.1

### Patch Changes

- 59fdd0e: Tillat react v19 i peer dependency range.

## 1.3.0

### Minor Changes

- 1746e27: Environment banner now supports PROTOTYPE env

### Patch Changes

- ab09bec: Leverer komponenter som klientkomponenter. Dette skal gjøre det enklere å bruke pakken sammen med RSC.

## 1.2.2

### Patch Changes

- f21593bb: Bruker mer spesifikk versjon av interne dependencies

## 1.2.1

### Patch Changes

- 5ca91f84: Diverse småfikser oppdaget etter strengere eslint-regler

## 1.2.0

### Minor Changes

- eaff8a3e: Tillat versjon 6 av styled-components i peer dependencies.

## 1.1.3

### Patch Changes

- 029695f1: Fikse feil med designsystemet hvor det ikke fungerte i Next.js page router applikasjoner.

## 1.1.2

### Patch Changes

- 8eb214ef: Bump dependencies

## 1.1.1

### Patch Changes

- 209f3962: Forenkler byggeprosessen. Burde ikke oppleve noen endringer.

## 1.1.0

### Minor Changes

- 0cd5100d: Eksponerer EnvironmentBanner-komponenten

## 1.0.4

### Patch Changes

- e9de7b1e: Legger til `displayName` på alle komponenter. Dette skal gjøre feilmeldinger knyttet til Elsa-komponenter lettere å lese.

## 1.0.3

### Patch Changes

- 02e499c2: Bruk siste versjon av npm til publishing av pakker

## 1.0.2

### Patch Changes

- 1aeaa4b0: Ta i bruk [npm package provenance](https://github.blog/2023-04-19-introducing-npm-package-provenance/).
  Dette gjør at konsumenter verifiserbart kan sjekke hvor pakkens innhold kommer fra.

## 1.0.1

### Patch Changes

- a1dd3f5e: Fikse bug med miljøbanner hvor den kom bak visse elementer, som f.eks. InternalHeader

## 1.0.0

### Major Changes

- 0dac58b4: Legge til miljøbanner til ny "development-utils"-pakke
