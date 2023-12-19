# @norges-domstoler/dds-components

## 13.11.5

### Patch Changes

- 76d0288: Utvide typestøtte for `options`-prop i Select til å støtte vilkårlige typer. Tidligere var det kun tillat med options av typen `{value: T, label: string}`.

## 13.11.4

### Patch Changes

- 4634c63: Samle alle interne pakker tilbake inn i dds-components

## 13.11.3

### Patch Changes

- b4f284e: Fikser bug hvor fokuserbare-elementer i lukkede accordions var fokuserbare.
- 40089c4: Fikser bug med ProgressTracker hvor text zoom førte til at tallene i stegsirklene vokste seg større enn sirklene.

## 13.11.2

### Patch Changes

- d482ef7: Fikser bug hvor Drawer lukket seg når en trykte på clear-knapp i Select.
- Updated dependencies [d482ef7]
  - @norges-domstoler/dds-core@0.2.2
  - @norges-domstoler/dds-form@0.1.8
  - @norges-domstoler/dds-icons@0.2.6
  - @norges-domstoler/dds-typography@0.1.6

## 13.11.1

### Patch Changes

- Updated dependencies [97bc0e3]
  - @norges-domstoler/dds-core@0.2.1
  - @norges-domstoler/dds-form@0.1.7
  - @norges-domstoler/dds-icons@0.2.5
  - @norges-domstoler/dds-typography@0.1.5

## 13.11.0

### Minor Changes

- e2f96277: Legger til `initialFocusRef`-prop til Modal, som lar deg styre hvilket element i modalen som skal fokuseres når modalen åpnes.

### Patch Changes

- Updated dependencies [e2f96277]
  - @norges-domstoler/dds-core@0.2.0
  - @norges-domstoler/dds-form@0.1.6
  - @norges-domstoler/dds-icons@0.2.4
  - @norges-domstoler/dds-typography@0.1.4

## 13.10.5

### Patch Changes

- Updated dependencies [c9e7b6fb]
  - @norges-domstoler/dds-form@0.1.5

## 13.10.4

### Patch Changes

- f21593bb: Bruker mer spesifikk versjon av interne dependencies
- Updated dependencies [f21593bb]
  - @norges-domstoler/development-utils@1.2.2
  - @norges-domstoler/dds-typography@0.1.3
  - @norges-domstoler/dds-design-tokens@3.0.3
  - @norges-domstoler/dds-icons@0.2.3
  - @norges-domstoler/dds-core@0.1.4
  - @norges-domstoler/dds-form@0.1.4

## 13.10.3

### Patch Changes

- 2eced7f0: Fjerner ubrukte dependencies og interne filer
- e9e2da32: Fikser bug hvor åpning av popover førte til av vinduet ble scrollet til toppen av siden.
- Updated dependencies [2eced7f0]
  - @norges-domstoler/dds-core@0.1.3
  - @norges-domstoler/dds-form@0.1.3

## 13.10.2

### Patch Changes

- 19370afa: Fikser bug hvor åpning av modal førte til at vinduet ble scrollet til toppen av siden.
- 8fea35f5: Slutter å videresende styling-props til DOM-en. Tidligere ble alle styling props vi brukte i styled-components videresendt til DOM-en. Disse blir nå filtrert ut for å unngå å ha ugyldige props på DOM-elementer.
- f8c865b5: Bump `@floating-ui/react-dom` til `2.0.4`
- Updated dependencies [8fea35f5]
  - @norges-domstoler/dds-typography@0.1.2
  - @norges-domstoler/dds-icons@0.2.2
  - @norges-domstoler/dds-core@0.1.2
  - @norges-domstoler/dds-form@0.1.2

## 13.10.1

### Patch Changes

- b14868fb: Bump react-select til 5.8.0
- abf6e105: Gjør typene til Select mer konkrete. `TOption` trenger nå kun å inneholde feltene `label` og `value`.
- 5ca91f84: Diverse småfikser oppdaget etter strengere eslint-regler
- Updated dependencies [7cb301f8]
- Updated dependencies [5ca91f84]
  - @norges-domstoler/dds-design-tokens@3.0.2
  - @norges-domstoler/development-utils@1.2.1
  - @norges-domstoler/dds-typography@0.1.1
  - @norges-domstoler/dds-icons@0.2.1
  - @norges-domstoler/dds-core@0.1.1
  - @norges-domstoler/dds-form@0.1.1

## 13.10.0

### Minor Changes

- eaff8a3e: Tillat versjon 6 av styled-components i peer dependencies.

### Patch Changes

- 958d5a99: Oppdatere @floating-ui/react-dom til versjon 2
- Updated dependencies [958d5a99]
- Updated dependencies [eaff8a3e]
  - @norges-domstoler/dds-core@0.1.0
  - @norges-domstoler/development-utils@1.2.0
  - @norges-domstoler/dds-typography@0.1.0
  - @norges-domstoler/dds-icons@0.2.0
  - @norges-domstoler/dds-form@0.1.0

## 13.9.0

### Minor Changes

- 2b80dade: Legge til støtte for å bruke `children`-prop på Button istedenfor `label`. Deprecater samtidig `label`, vil bli fjernet neste major.

### Patch Changes

- 029695f1: Fikse feil med designsystemet hvor det ikke fungerte i Next.js page router applikasjoner.
- Updated dependencies [029695f1]
  - @norges-domstoler/dds-core@0.0.8
  - @norges-domstoler/development-utils@1.1.3
  - @norges-domstoler/dds-form@0.0.7
  - @norges-domstoler/dds-icons@0.1.4
  - @norges-domstoler/dds-typography@0.0.7

## 13.8.8

### Patch Changes

- db0c5d72: Bump react-select til 5.7.7

## 13.8.7

### Patch Changes

- b2ae4205: Fikser bug hvor inline SVG-er ikke ble vist frem
- Updated dependencies [b2ae4205]
  - @norges-domstoler/dds-typography@0.0.6
  - @norges-domstoler/dds-icons@0.1.3
  - @norges-domstoler/dds-core@0.0.7
  - @norges-domstoler/dds-form@0.0.6

## 13.8.6

### Patch Changes

- 955c4183: Fikse feilaktig bump av dds-design-tokens
- Updated dependencies [955c4183]
  - @norges-domstoler/dds-typography@0.0.5
  - @norges-domstoler/dds-icons@0.1.2
  - @norges-domstoler/dds-core@0.0.6
  - @norges-domstoler/dds-form@0.0.5

## 13.8.5

### Patch Changes

- 8eb214ef: Bump dependencies
- Updated dependencies [8eb214ef]
  - @norges-domstoler/dds-core@0.0.5
  - @norges-domstoler/development-utils@1.1.2
  - @norges-domstoler/dds-form@0.0.4
  - @norges-domstoler/dds-icons@0.1.1
  - @norges-domstoler/dds-design-tokens@3.0.2
  - @norges-domstoler/dds-typography@0.0.4

## 13.8.4

### Patch Changes

- 6492f01e: Fikse bug hvor typer for @norges-domstoler/dds-icons ikke ble bygd
- Updated dependencies [6492f01e]
  - @norges-domstoler/dds-icons@0.0.4

## 13.8.3

### Patch Changes

- 209f3962: Forenkler byggeprosessen. Burde ikke oppleve noen endringer.
- Updated dependencies [209f3962]
  - @norges-domstoler/development-utils@1.1.1
  - @norges-domstoler/dds-typography@0.0.3
  - @norges-domstoler/dds-icons@0.0.3
  - @norges-domstoler/dds-core@0.0.4
  - @norges-domstoler/dds-form@0.0.3

## 13.8.2

### Patch Changes

- b21f8abe: Fikser størrelse på <Select isMulti componentSize="tiny" /> labels

  Størrelse på value label gjorde at høyde på input container ble større enn andre input komponenter med samme component size

## 13.8.1

### Patch Changes

- 5b272f1e: Fikser UX bug hvor miljøbanner kræsjet med meny i AppShell
- Updated dependencies [0cd5100d]
  - @norges-domstoler/development-utils@1.1.0

## 13.8.0

### Minor Changes

- 6a92e3c5: Legger til AppShell-komponent. Denne vil bli brukt som en wrapper rundt nye applikasjoner for å få felles meny, o.l.

## 13.7.0

### Minor Changes

- a13990db: Legger til secondary-type på buttonProps for Search-komponent

## 13.6.4

### Patch Changes

- 12a0ea97: Fikser feil med AppShell navigasjon hvor den krympet når hovedinnholdet ble for bredt

## 13.6.3

### Patch Changes

- 71ddaa08: Legger til experimental component AppShell. Bør ikke tas i bruk enda, breaking changes kan skje uten forvarsel utenfor major-versjon
- Updated dependencies [71ddaa08]
  - @norges-domstoler/dds-core@0.0.3

## 13.6.2

### Patch Changes

- 62c2e09d: Fikser bug hvor unmounting av Modal ikke fjernet scroll-lock

## 13.6.1

### Patch Changes

- b904c66a: Intern endring.
  Flytter en del fellesfunksjonalitet ut av dds-components inn i nye mindre interne pakker.
  Som konsument skal du ikke merke noe til denne endringen.
- Updated dependencies [b904c66a]
  - @norges-domstoler/dds-typography@0.0.1
  - @norges-domstoler/dds-icons@0.0.1
  - @norges-domstoler/dds-core@0.0.1
  - @norges-domstoler/dds-form@0.0.1

## 13.6.0

### Minor Changes

- 7f0ed07e: Oppretter komponent for å gi tilbakemeldinger

## 13.5.0

### Minor Changes

- 96b76033: Legger til nye ikoner

  - AgreementIcon
  - CaringIcon
  - PayoutIcon

### Patch Changes

- 9fd004bd: Oppdater dependencies

## 13.4.0

### Minor Changes

- 48090b12: Legger til ny størrelse, `medium`, til Drawer

### Patch Changes

- e9de7b1e: Legger til `displayName` på alle komponenter. Dette skal gjøre feilmeldinger knyttet til Elsa-komponenter lettere å lese.
- c12ec87d: Fjern deprecated tilde-prefix i css-import i selection.css

## 13.3.0

### Minor Changes

- 53587ff3: Legg til ny type density extraCompact i Table

## 13.2.0

### Minor Changes

- e3cdac52: Lagt inn nye ikoner

  - StarHalfFilled
  - Thumbup
  - ThumbupFilled
  - Thumbdown
  - ThumbdownFilled
  - HourglassTop
  - HourglassBottom
  - HourglassFull
  - HourglassEmpty
  - HourglassDisabled

## 13.1.1

### Patch Changes

- 603b38be: Fikse feil i TextInput hvor endring i prefix/suffix ikke endret bredden til prefix/suffix

## 13.1.0

### Minor Changes

- 744f8055: Legger til støtte for prefix og suffix i TextInput

## 13.0.3

### Patch Changes

- 2042b74f: Fjerner overstyring av fontstørrelse for DescriptionList

## 13.0.2

### Patch Changes

- fe27f514: Gjør padding konsistent mellom select og multi-select

## 13.0.1

### Patch Changes

- 232e62fa: Bruk csstype for align og justify i Stack for å få med alle muligheter.

## 13.0.0

### Major Changes

- 735adcbc: Fjern non-clickable versjon av ProgressTracker.
  Dette gjøres for at ProgressTracker skal ha mer konsistent oppførsel påtvers av applikasjoner.
  Trenger du at et steg ikke skal væreinteragerbart anbefaler vi å heller bruke `disabled`-prop.

  De aller fleste vil bare trenge å fjerne `clickable`-proppen fra ProgressTracker-komponenten for at den skal fungere som før.

### Minor Changes

- 5916d4df: Legger til nullstilling av søkefelt
- 45d2024e: Legger til tooltip på Spinner-komponenten. Beholder samme default tooltip-tekst: "Innlasting pågår".

### Patch Changes

- 0f517fa3: Bump react-select fra 5.7.0 til 5.7.2
- 6b1e53c5: Gjør padding i LocalMessage mer konsistent på tvers av layouts

## 12.1.3

### Patch Changes

- f7be56dd: Fjern default verdier for padding og gap i Stack-komponentene

## 12.1.2

### Patch Changes

- 02e499c2: Bruk siste versjon av npm til publishing av pakker

## 12.1.1

### Patch Changes

- 1aeaa4b0: Ta i bruk [npm package provenance](https://github.blog/2023-04-19-introducing-npm-package-provenance/).
  Dette gjør at konsumenter verifiserbart kan sjekke hvor pakkens innhold kommer fra.

## 12.1.0

### Minor Changes

- b0cc61c4: Legger til padding prop for Stack-komponentene

### Patch Changes

- 9d4f3ed0: Setter type='button' for CardAccordionHeader slik at den ikke påvirker forms.

## 12.0.0

### Major Changes

- e451bf8b: Fjerne deprecated `FormGenerator`-kopmonent fra @norges-domstoler/dds-components. `PageGenerator`-komponenten i @norges-domstoler/dds-page-generator skal brukes i stedet.
- 8d91d37c: Skiller ut smallScreen-varianten av Breadcrumbs i en egen variant kalt BackLink

## 11.3.2

### Patch Changes

- 82339ae4: Eksporter type DrawerGroupProps

## 11.3.1

### Patch Changes

- f0e24282: Eksporterer EmptyContent fra designsystemet
- b03c8284: Endre alle `peerDependencies` til å være mer føyelig i hvilke versjoner vi tillater.

## 11.3.0

### Minor Changes

- f8a9776a: Legger til value-prop på FileUploader, slik at man kan bruke den som en kontrollert komponent

## 11.2.0

### Minor Changes

- f4adb526: Eksporter getBaseHTMLProps og ScreenSize utils fra `@norges-domstoler/dds-components`

### Patch Changes

- 03f759b2: Bump @floating-ui/react-dom from 1.2.1 to 1.3.0
- 1aa3cf44: Bump @babel/core fra 7.20.12 til 7.21.0

## 11.1.1

### Patch Changes

- 7f9dc603: Muliggjør innhold med dynamisk størrelse i CardAccordion

## 11.1.0

### Minor Changes

- d968c80c: Legg til optional properties "direction" i DescriptionList, "minWidth" og "maxWidth" i DescriptionListGroup

### Patch Changes

- f704ed25: Fjerner bakgrunnsfarge for InputMessage av typen 'tip'

## 11.0.0

### Major Changes

- 11f95667: ## Breaking change

  ### Hva er endringen?

  Gjør `loading`-variant av knapp disabled.

  ### Hvorfor gjøres endringen?

  Denne endringen gjøres for å unngå at handlinger skjer flere ganger.

  ### Hvordan kan jeg oppdatere?

  Endringen krever ingen kodenedringer, men vil potensielt oppleves annerledes for noen brukere da ytterligere klikk på knapper som
  fører til asynkrone handlinger vil bli ignorert.
  Hvis du mot formoding vil at knappen skal fortsette å ta imot trykk fra bruker så anbefaler vi å heller ta i bruk den normale varianten av knappen.

## 10.7.0

### Minor Changes

- d7e91ea7: ELSA1-223 Legger til EmptyContent for tom tilstand i applikasjonen.

## 10.6.0

### Minor Changes

- 8236e843: Åpner opp for overstyring av CardAccordion.

  Lagt til nye props (alle optional):

  - `CardAccordionHeader`: `padding`, `typographyType`, `bold`
  - `CardAccordionBody`: `padding`

## 10.5.0

### Minor Changes

- 00a367e9: Nye chevron ikoner
