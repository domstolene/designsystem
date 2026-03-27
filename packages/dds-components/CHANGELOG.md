# @norges-domstoler/dds-components

## 22.7.1

(2026-03-27)

### Patch Changes

- 790519f: Reduserer top-padding til ErrorSummary komponenten.
- e061852: Fjerner `fit-height` fra button for å unngå ulike knapphøyde i ulike nettlesere.
- cd5fddb: Justerer typografistilen i nedtrekksliste i `<Select>` til å følge størrelsen på komponenten.

## 22.7.0

(2026-03-25)

### Minor Changes

- 979ab8c: `<CookieBanner>` fanger nå tastaturfokus i en løkke, slik at brukeren ikke kan fokusere elementer bak komponenten ellers på nettsiden. Dette for å oppfylle UU-krav om synlig fokus.
- 827d810: Støtte for ulike formål i `<ToggleBar>` med prop `purpose`. Den tar inn `'primary'` eller `'secondary'` med standardverdi `'primary'`. Styling er den samme hvis standerdverdien brukes.

### Patch Changes

- 9d5137d: Justerer på størrelser i `<List>`. Listeelementer har nå:
  - samme linjehøyde som `body-long`-typografi
  - margin på bunnen får ekstra luft mellom elementene

- 7ea9b45: Oppdater minsteversjon for @internationalized/date peer dependency.
- 3d23cad: Endrer farge på skillelinjer i `<Table>` til `dds-color-border-subtle`.
- 0ec66bb: Legger til manglende samiske oversettelser.

## 22.6.0

(2026-03-18)

### Minor Changes

- 4358d88: Støtte for intern visning av status på opplasting og støtte for gjenntatt oplastning ved feil i `<FileUploader>`. Dette løser også bugen der komponenten viste 'success'-status så lenge filen var gyldig. Komponenter støtter nye props som brukes sammen:
  - `fileStatusMap` - gjør det mulig å sende inn status på opplasting av hver fil, slik at det kan vises i fillisten.
  - `deriveId` - funksjon som genererer id for hver fil i `fileStatusMap`.
  - `onRetry` - funksjon som lar brukeren prøve å laste opp filen på nytt ved status `'error'`.

## 22.5.0

(2026-03-13)

### Minor Changes

- 5f15b0e: Legger til `withStripes`-prop i `<Table>` som gjør det mulig å skru av vekselende bakgrunnsfarge på tabellrader.
- 7d2493d: Ny prop i `<Toggle>`: `variant`. Den aksepterer verdier `'default'` og `'themeMode'`. `'default'` er standardverdien og komponenten i denne varianten er uendret. `'themeMode'` brukes når `<Toggle>` styrer mellom lys og mørk modus, der `checked` tilsvarer mørk modus.

### Patch Changes

- 7d2493d: Oppdaterer readOnly-ikon i `<Toggle>` til `LockFilledIcon`, slik at den er i tråd med andre inputkomponenter.
- 7d2493d: Fikser bug der `<Toggle>` ikke kunne settes til `disabled` ved `isLoading="true"`.
- ed94b95: Fikser bug der `useAccordion()` hook ikke var eksponert.

## 22.4.1

(2026-02-25)

### Patch Changes

- f835685: Legger til `isAnchor`-prop i `<Link>`-komponenten som overstyrer hvorvidt polymorfe komponenter skal få anchor-attributter som `rel` og `target`.

## 22.4.0

(2026-02-19)

### Minor Changes

- 18019c7: Nye ikoner:
  - `CircleIcon` og `CircleFilledIcon`. Kan brukes til å indikere status og notifikasjoner, f.eks. ulest melding.
  - `PaperPlaneIcon`. Brukes til sending.

### Patch Changes

- d15fffd: Utbedrer layout i `<Feedback>`, slik at tooltip legger seg riktig i forhold til tommel ned-knappen.
- d676af7: Sett font-styling for OverflowMenu
- e3a9461: Forhindrer at ugyldig custom attributt `iconState` settes på svg-elementet.
- dbd098d: Migrerer alle komponenter fra hardkodede verdier til å bruke nye motion design tokens.

## 22.3.0

(2026-02-13)

### Minor Changes

- 7b59bc3: Ny komponent: `<ErrorSummary>`. Brukes for å oppsummere feil brukeren må rette oppi før de kan gå videre, f.eks. sende inn skjema.
- 2208c89: Nytt ikon: `LockFilledIcon`. Bytter til dette ikonet i `readOnly` variant av alle inputkomponenter.
- c4c1a02: Nytt ikon: `FloppyDiskIcon`. Kan brukes som lagringsikon.

## 22.2.0

(2026-02-09)

### Minor Changes

- 04e9309: Standardiserer styling i `<DatePicker>` med andre inputkomponenter, og enkelte CSS-kasser har virking på en annen `<div>` i strukturen. Komponenten ser likt ut, men uforventede visuelle endringer kan oppstå ved custom styling hos konsumenten.

### Patch Changes

- 04e9309: Justerer på spacing mellom tekst og ikon i xsmall-variant i alle inputkomponenter.

## 22.1.0

(2026-02-02)

### Minor Changes

- f834766: Migrerer alle ikoner til nytt ikonsett Lucide. De er funksjonelt uforandret, men vil se annerledes ut.
- f834766: Nye ikoner: `BriefcaseIcon`, `BuildingIcon`, `GroupIcon`, `RowsIcon`, `PanelLeftIcon`, `EditAltIcon`, `LocationOffIcon`, `FlagIcon`, `FlagFilledIcon`, `SunIcon`, `MoonIcon`, `SupportIcon`, `NotebookPenIcon`, `MapIcon`, `StickyNoteIcon`.

### Patch Changes

- 1902686: Fikser bug der `type DdsTheme` ike ble eksponert til konsumentene.
- f834766: Fikser typos i ikonnavn `FullscreenExitIcon` og `StarHalfFilledIcon`; ikonene var ikke brukt av noen.
- f834766: Justerer på `AnimatedChevronUpDown` så den passer inn med nye ikonsettet.
- 0fb5fc4: Fikser bug der font i `<DatePicker>` dato og `<TimePicker>` tidspunkt ikke var monospace.

## 22.0.0

(2026-01-23)

### Major Changes

- 346e039: Deler opp `widthProps` i `<Drawer>` til å være individuelle props istedet: `width`, `max-width`, `min-width`.
- c2c25e7: Potensielt breaking i `<OverflowMenu>`:
  - Fjerner støtte for `aria-disabled`, da den er relevant kun internt ved bruk av `loading` tilstand. Konsumentene har ikke brukt `aria-disabled`, men lokale typings kan være nødvendige å oppdatere.
  - Fjerner støtte for `as` prop i alle delkomponenter for menyelementer i `<OverflowMenu>`; den skulle brukes kun intern og ikke bli eksponert til konsumentene.

- 3a709ab: Endrer støttede verdier for `elevation` prop i `<Paper>` fra: `1`, `2`, `3`, `4` til: `small`, `medium`, `large`.
- 826c597: `typographyType` prop i `<Typography>`, `<Link>` og `<Paragraph>` splitter verdier for body i body-short og body-long. `<List>` støtter kun verdier for body-long. Se detaljer i [migreringsguiden v21 til v22](https://design.domstol.no/987b33f71/p/16deeb-v21-til-v22). Typene er oppdatert slik:

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

- 364c8f1: Gjør `<Button>` komponent polymorf via bruk av `as` prop; det er nå mulig å bruke lenke-komponenter fra rammeverk som Next.js og react-router direkte via `as` prop. Dette betyr også at komponenten ikke vil lenger returnere `<a>` tag hvis kun `href` prop blir brukt; `as` prop må brukes i tillegg.
- 3efc865: Endringer i `<Accordion>` og `<CardExpandable>`: `isExpanded` prop brukes nå til kontrollert tilstand. For å sette initiell ukontrollert tilstand brukes ny prop `isInitiallyExpanded`.
- d34fa2a: Implementerer dark mode. `theme` prop i `<ThemeProvider>` og `<DdsProvider>` vil dermed støtte kun nye verdier: `'core-light'`, `'core-dark'`, `'public-light'`, `'public-dark'`. `'core-light'` er default. Se detaljer i [migreringsguide v21 til v22](https://design.domstol.no/987b33f71/p/16deeb-v21-til-v22).
- 4f337cf: Fjerner enkelte ikoner. Se detaljer i [migreringsguiden v21 til v22](https://design.domstol.no/987b33f71/p/16deeb-v21-til-v22).
- c2c25e7: Potensielt breaking i `<Toggle>`: props `className` og `style` påvirker nå rotelementet , ikke `<input>`. Denne endringen kan være breaking med tanke på styling hos konsumentene.
- 4f98a17: Fjerner støtte for props `text` og `message` på tvers av komponenter; støtter kun `children` istedet. Se detaljer i [migreringsguide v21 til v22](https://design.domstol.no/987b33f71/p/16deeb-v21-til-v22).
- 082283a: Fjerner støtte for tekstfarger i camelCase for `color` prop i `<Icon>`, `<Spinner>` og alle typografikomponenter. Vi standardiserer bruk av kebab-case for CSS-props istedet. Denne endringer gjør at aksisterende verdier i camelCase ikke gir feil, men vil ikke referere til farger fra Elsa i CSS. Bruk av camelCase vil dermed knekke kun visuelt og må gåes gjennom manuelt. Se detaljer i [migreringsguide v21 til v22](https://design.domstol.no/987b33f71/p/16deeb-v21-til-v22).
- 272f309: Fjerner `<ThemeProvider>` fra eksponering og gjør `<DdsProvider>` påkrevd istedet. På denne måten samler vi alle globale providers fra Elsa under én eksponert provider.
- bc87d17: Fjerner delkomponent `<NativeSelectPlaceholder>`. Vi anbefaler å ikke bruke placeholder med mindre det er en god grunn til det, da det fører til utfordringer knyttet til UU. Istedet oppfordrer vi til å inkludere en tom verdi `<option value=""></option>` i `<NativeSelect>` på toppen av valgalternativene.
- 346e039: Endringer i `htmlProps` prop (som støttes i de fleste komponenter), se [detaljer i migreringsguide v21 til v22](https://design.domstol.no/987b33f71/p/16deeb-v21-til-v22):
  - `style` prop flyttes ut av `htmlProps` til roten. I tillegg blir `className` og `id` ikke lengre støttet både på roten og i `htmlProps`.
  - Fikser bug der alle HTML-attributter var støttet både under `htmlProps` og på roten. Alle HTML-attributter (med individuelle unntak spesifisert i dokumentasjonen for hver komponent) støttes nå kun under `htmlProps`. Denne endringen fører til mye strengere typings og krever at konsumentene sjekker om HTML-attributter settes riktig i alle komponenter som støtter `htmlProps`.
  - `<Contrast>` defineres nå som layout primitive; den bruker `<Box>` under panseret og støtter samme props. Det betyr at den bruker nå `htmlProps` som andre komponenter, med props `style`, `className`, `id` og `as` på roten.
  - `aria-label` prop er nå støttet på roten av `<Button>`.

### Minor Changes

- d34fa2a: Utvider støtte i `color` prop i typografikomponentene, `<Spinner>`, `<Icon>` og `<InlineButton>` til verdier `'text-on-primary-default'`, `'text-on-primary-medium'`, `'text-on-primary-subtle'`, `'text-on-primary-strong'`, `'text-on-secondary-default'`, `'text-on-secondary-medium'`, `'text-on-secondary-subtle'`, `'text-on-secondary-strong'`, `'text-on-tertiary-default'`, `'text-on-tertiary-medium'`, `'text-on-tertiary-subtle'`, `'text-on-tertiary-strong'`, `'text-on-data-default'`, `'text-on-data-subtle'`.
- 826c597: Utvider `iconSize` prop i `<Icon>` til å støtte verdi `'component'`. Denne brukes når ikone står ved siden av tekst i en knapp, header i trekkspill o.l.
- d34fa2a: Endrer visning av `<Tooltip>`: den viser ikke lenger en pil som peker mot anchor-elementet da rendering av `svg` har vært buggy og tok litt mye plass. Gjør også spacing internt i `<Tooltip>` og fra anchor-elementet mindre. Endringene kan påvirke layout hos konsumenten.
- 346e039: `height` prop i `<ModalBody>` er utvidet til å være responsiv (støtter verdier per brekkpunkt).
- 346e039: Ny responsiv prop `textAlign` i `<DetailListDesc>`. Den tillater å sømløst stille innhold etter behov, f.eks. knapper til høyre.
- d34fa2a: Støtte for verdien `'surface-default'` i `background` prop i `<Paper>`.
- 0c9bd97: Støtte for `iconState` prop i `<Icon>` og `<Button>` for animerte ikoner. Hvis ikonet satt i `icon` prop støtter animasjon via states vil `iconState` prop bli støttet med dedikerte verdier for det spesifikke ikonet.
- c2c25e7: Ny delkomponent i `<OverflowMenu>`: `<OverflowMenuToggle>`. Den brukes til `<Toggle>` i menyen, som styring mellom lys/mørk modus. Den støtter samme props som `<Toggle>`.
- 0c9bd97: Nytt ikon: `<AnimatedChevronUpDownIcon>`. Støtter samme props som alle andre ikoner, men kan animeres opp/ned via `iconState` prop i tillegg, f.eks: `<Icon icon={AnimatedChevronUpDownIcon} iconState="up" />`.
- 826c597: Endrer nesting i HTML i `<AccordionHeader>` og `<CardExpandableHeader>` slik at chevron kan arve størrelse fra overskriftsteksten. Kan påvirke spacing og layout hos konsumenten på en uforutsigbar måte.
- 346e039: `height` prop i `<ModalBody>` er utvidet til å være responsiv (støtter verdier per brekkpunkt).

### Patch Changes

- d34fa2a: All tekst i `<CookieBanner>` får riktig farge ut av boksen. Hvis du brukte f.eks. `color` prop i `<Link>` kan du fjerne det.
- 346e039: Fikser bug der `disabled` prop under `htmlProps` ikke fungerte i `<Button>`.
- aae9817: Gjør trykkeflaten i kalenderknapp i `<DatePicker>` større slik at den er mer synlig på hover ved mørk modus.
- ac2cbf8: Exporterer useTheme fra ThemeProvider
- 0c9bd97: Utbedrer og standardiserer styling på animert chevron i `<Select>`, `<CollapsibleRow>`, `<AccordionHeader>` og `<CardExpandableHeader>`.
- 631c8c7: Standardisering av styling i dropdown; oppdaterer spacing og størrelser på tekst og ikon i dropdown i `<OverflowMenu>`, `<Select>` og `<SearchAutocompleteWrapper>`. Tekst i dropdown har fast stil for listeelementene (`dds-font-body-medium`) og header (`dds-icon-size-small`) uansett størrelse på selve komponenten og tema.
- cd5d976: Fikser spacing/størrelser i chip for multivalue i `<Select>` som gjorde komponenten høyere enn andre inputkomponenter.
- 631c8c7: Styling-endringer i `<Select>`:
  - Valgt alternativ får en bakgrunnsfarge i dropdown slik at det er mer synlig.
  - Endrer bakgrunnsfarge for alternativ i dropdown på hover til `dds-color-surface-hover-subtle`.
  - Når et alternativ velges i `<Select isMulti>` forsvinner det ikke fra dropdown; den blir markert som i vanlig `<Select>`.
  - Chip som viser valgt verdi i `<Select isMulti>` får bedre spacing og bakgrunnsfarge på hover i lukkeknapp.

- 17665ad: Oppdaterer tekstfarge i `<Card appearance="filled">` til `dds-color-text-on-primary-subtle`, slik at vi sørger for riktig kontrast på bakgrunn med brand-farge.
- 178b07a: Gir chip med valgt verdi i `<Select isMulti>` bedre spacing og border ved tilstandene `isDisabled` og `readOnly` for bedre lesbarhet.
- 826c597: Endrer design på lukkeknapp i `<Chip>`.
- 631c8c7: - `<OverflowMenu>` bruker skygge `dds-shadow-2`.
- 826c597: Oppdaterer alle komponenter til å bruke nye typografistiler `dds-font-body-short-<størrelse>` og `dds-font-body-long-<størrelse>` internt. Vil påvirke linjehøyde i de fleste komponenter.
- 346e039: Fikser bug der layout prop `wordBreak` ikke var satt opp riktig i layout primitives.

## 21.20.0

(2025-11-17)

### Minor Changes

- 4e4d14b: Utvider `initialFiles`, `value` og `onChange` props til å støtte filer fra server med `type RemoteFile`: `{ name: string; url: string; }`.
- 948ef0c: Nytt icon: `SectionIcon`.

### Patch Changes

- 4e4d14b: `<FileUploader>` returnerer forhåndsvisningslenker for opplastede filer istedenfor statisk filnavn. Hvis filen kommer fra serveren er brukes `url` prop fra fila som lenke. Hvis filen ble lastet opp av brukeren genereres midlertidig URL i klienten.

## 21.19.1

(2025-11-14)

### Patch Changes

- f4706c3: Endre headerstørrelse for OverflowMenuHeader

## 21.19.0

(2025-11-12)

### Minor Changes

- 89e6516: Støtte for `icon` prop i `<NativeSelect>`.
- d0035ef: Støtte for nye props i `<InputMessage>`: `margin`, `marginInline` og `marginBlock`. Gjør layout lettere for komponenten ved custom bruk.
- d0035ef: Ny responsiv prop: `wordBreak`. Tilsvarer CSS `word-break`. Støttes på alle layout primitives unntatt `<ShowHide>`.
- d0035ef: Legger på spacing mellom komponent og `<InputMessage>` i alle komponenter som støtter `errorMessage` prop. Dette grunnet bruk av `dds-border-radius-surface` på alle hjørner i `<InputMessage>`. Kan påvirke layout hos konsumenten.

### Patch Changes

- d0035ef: Endrer `border-radius` på `<InputMessage>` til `dds-border-radius-surface` på alle hjørner.
- d0035ef: Knytter hjelpetekst og feilmelding til spin buttons med `aria-describedby` i `<DatePicker>` og `<TimePicker>` for bedre UU.
- 89e6516: Standardiserer og justerer på spacing mellom ikon/knapp og tekst på tvers av interaktive komponenter: `<Button>`, `<ToggleButton>`, `<ToggleRadio>`, `<TextInput>`, `<TimePicker>`, `<DatePicker>`, `<Select>`, `<NativeSelect>`, `<Search>`, `<Tab>`.

## 21.18.0

(2025-11-07)

### Minor Changes

- c26c717: Ny komponent: `<FormSummary>`. Brukes til oppsummering av skjema med flere steg.
- c26c717: Tillater bruk av `children` og gjør `message` prop valgfri i `<InputMessage>`. Komponenten blir standardisert til å bruke kun `children` istedenfor `message` ved neste major versjon.
- 8d5f148: Støtte for nytt språk: nordsamisk. Språket settes via `language` prop i `<DdsProvider>`.

### Patch Changes

- 8d5f148: Fikser bug der unødvendig default tekst for en prop overskrev oversettelsene i `<PhoneInput>`, `<Pagination>`, `<FileUploader>`, `<Feedback>` og `<Button>`.
- 8d5f148: Fikser bug der falsy verdier for klassenavn resulterte i `class=""` i DOM.
- 8d5f148: Gjør `ratingLabel` prop i `<Feedback>` ikke påkrevd. Hvis verdien ikke er oppgitt bruker komponenten default tekst.
- 8d5f148: Legger til manglende oversettelser i `<Pagination>`, `<Search>` og `<FileUploader>`.
- 8d5f148: Fikser bug som satt unødvendig HTML attributt `aria-hidden="false"` på `<span>` i `<Button>`.

## 21.17.2

(2025-10-29)

### Patch Changes

- ac9879a: Utbedrer oversettelser i `<Button>`, `<ProgressTracker>` og `<FavStar>`.

## 21.17.1

(2025-10-24)

### Patch Changes

- 61075f7: Setter format på tidspunkt til å alltid være norsk i `<TimePicker>`. Dette inkluderer ledende 0.
- 390a70b: - Retter `BaseComponentProps` slik at props definert på komponenter overstyrer, og ikke kombineres med, props fra underliggende element; dette gir riktig signatur for f.eks. `CardExpandable.onChange`.

## 21.17.0

(2025-10-17)

### Minor Changes

- ad89a8d: Redesign av `<Spinner>`: den bruker en animasjon av elementer som symboliserer ulike typer domstoler, slik det er definert i designmanualen.
- 33aa93f: Nytt ikon: `ScaleIcon`.

### Patch Changes

- ad89a8d: Fikser spacing for ikonet/spinner i `<Toggle>`.
- ad89a8d: Fikser bug der verdier for deprecated HTML attributt `color` var støttet i tillegg til `color` prop i `<Spinner>`.
- 95579d5: Endrer tilgjengelig navn i `<CookieBanner>` til å bruke headertekst via `aria-labelledby` prop. Implementasjonen er dermed i tråd med andre komponenter som stiller med ny flate (`<Modal>`, `<Drawer>` osv.).

## 21.16.0

(2025-10-10)

### Minor Changes

- 793775e: Støtte for `afterLabelContent` prop i `<Label>` og komponenter som bruker den: `<TextInput>`, `<TextArea>`, `<DatePicker>`, `<TimePicker>`, `<PhoneInput>`, `<Select>`, `<NativeSelect>`, `<FileUploader>` og `<InputStepper>`. Tillater å sømløst legge ekstra innhold etter ledetekst, som f.eks. en knapp som viser utfyllende info.
- 793775e: Støtte for `icon` prop for enestående ikon i `<InlineButton>`. Sørger for riktig visning av ikonet som sendes inn.
- 01487e9: Støtte for polymorfi via `as` prop i `<Link>` og `<BackLink>`. Brukes ved klient-side ruting og lignende.

### Patch Changes

- 2f77a3b: Fikser bug der man kunne submitte med loading `<Button>`; gjør den `disabled` ved `loading`.

## 21.15.0

(2025-10-03)

### Minor Changes

- 472cf4b: `<Pagination>` støtter nå kontrollert state via den nye `activePage`-propen.

### Patch Changes

- 2007856: Gjør select i `<Pagination>` bredere slik at lenge alternativer får plass.
- 80d91e2: Justerer størrelsen og spacing til ikonet til det valgte alternativet i dropdown i `<Select>`.
- 2007856: Legger til console warning for når verdien til `defaultItemsPerPage` prop ikke er inkludert i `selectOptions` prop i `<Pagination>`.

## 21.14.0

(2025-09-26)

### Minor Changes

- b6e754c: Støtte for locale i `<DatePicker>` og `<TimePicker>` - språk hentes fra `<DdsProvider>`, bruker 'nb-NO' som standard. Tar hånd om oversettelser mens datoformatet alltid er norsk.
- 91eac1a: Implementerer ordentlig støtte for `disabled` og `readOnly` props i `<FileUploader>`.
- 91eac1a: Utvider `background` prop i `<Paper>` til å støtte `'surface-field-disabled'`.

### Patch Changes

- 9c3479b: Oppdaterer navn på enkelte land i `<PhoneInput>`.
- d74d9a8: Fikser styling i `<InputStepper>` ved `disabled` og `readOnly`.
- c9c5841: Utbedrer programmatisk ledetekst i `<ProgressTrackerItem>`.
- 91eac1a: Fikser manglende interne oversettelser i `<FileUploader>`.

## 21.13.0

(2025-09-16)

### Minor Changes

- 967f69a: Endrer effekten av `withMargins` prop i `<Label>`. Den får ikke lenger margin `1em` topp og bunn, men `dds-spacing-x0-125` kun bunn. Kan resultere i endringer i layout.

### Patch Changes

- 1dc6d0c: Utbedrer animasjon i `<Toggle>`.
- 967f69a: Standardiserer spacing mellom ledetekst og input på tvers av komponenter. Påvirker `<TextInput>`, `<TextArea>`, `<DatePicker>`, `<TimePicker>`, `<Select>`, `<NativeSelect>`, `<CheckboxGroup>`, `<RadioButtonGroup>`, `<ToggleButtonGroup>`, `<ProgressBar>`, `<Search>`, `<FileUploader>`, `<InputStepper>`, `<PhoneInput>`.
- 967f69a: Utbedrer usynlige ledetekster i knapper i `<InputStepper>`.
- bd5fd6f: Fikser spacing i `<DetailList>` i variant for mindre skjermer.

## 21.12.0

(2025-09-04)

### Minor Changes

- 11625ab: Støtte for `color` prop i `<InlineButton>`. Fungerer som i typografikomponenter; støtter alle tekstfarger fra `@dds-design-tokens` i kebab-case, eller custom.

### Patch Changes

- 5775979: Fikser bug der man ikke kunne skrive ledende 0 i `<DatePicker>` for dag og måned.
- 6bd63d9: Sett `type` til `"button"` for ClearButton i `<DatePicker>`, `<Search>` og `<NativeSelect>`.
- 44b60e6: Fikser spacing mellom tekst og ikon i `<TextInput>`.
- 37c9e84: Endrer farge på standard tekst i `<ProgressTracker>`. Fjerner custom lenke-styling og gjenbruker standard.
- 44b60e6: Fikser bug der affikser overlappet med tekst i `<TextInput>`.

## 21.11.0

(2025-08-29)

### Minor Changes

- f2fe011: Støtte for `clearable` prop i `<DatePicker>`. Angir om brukeren kan tømme verdi (inkludert delvis verdi) med en tømmeknapp.

### Patch Changes

- f2fe011: Fikser spacing i `<DatePicker>` og `<TimePicker>` mellom elementer og i kalenderknapp.
- f2fe011: Bytter til monospace font i `<DatePicker>` slik at tegn har samme bredde og bredden på hele komponenten ikke hopper.
- f2fe011: Fikser manglende oversettelse i `<Search>`.
- f2fe011: Fikser bug der `<NativeSelect>` fikk tømmeknapp selv om komponenten var `disabled` eller `readOnly`.
- 5bf1aed: Justerer på `<Caption>` slik at den er venstrejustert over tabell, og ikke sentrert.

## 21.10.0

(2025-08-26)

### Minor Changes

- 48f2a7d: Støtte for resposive props i `<Tabs>`-delkomponenter: `padding`, `paddingInline` og `paddingBlock` i `TabPanels`; `padding` i `<TabPanel>` med default som fra før av. Gir mer fleksibilitet med tanke på spacing rundt innholdet.

### Patch Changes

- 4dc36fe: Fikser feil størrelse på tømmeknapp i `<NativeSelect>` og ulik ikon-spacing i `<NativeSelect>` og `<Select>`.

## 21.9.2 (2025-08-21)

### Patch Changes

- 22c1de8: Fikser bug der redigeringsikonet var plassert feil i `<InlineEditTextArea>`.
- ad3c1c4: Fikser bug der `width` prop i `<Tabs>` hadde ingen effekt.
- bd3cf8e: Fikser plasseringen på bullet i `<List>`.
- d78c546: Fikser bug der verdier for deprecated HTML attributt `color` var støttet i tillegg til `color` prop i `<Divider>`.
- a39e5f2: Fikser feil der `<Select>`-komponenten kunne miste fokus dersom noen av propertyene endret seg mens den var åpnet.

## 21.9.1 (2025-08-14)

### Patch Changes

- 3e61d81: Fikser hydreringsfeil i `<Select>`-komponent

## 21.9.0 (2025-08-12)

### Minor Changes

- c273b21: Utbedrer oppførselen til `width` prop i input-komponenter; Hvis bredde settes kun på enkelte brekkpunkter vil resterende brekkpunkter få default bredde definert i komponenten. Før fikk utelatte brekkpunkter ingen definert bredde, og dermed utforutsigbar bredde. Kan potensielt føre til endringer i layout. Påvirker komponentene `<TextInput>`, `<Select>`, `<PhoneInput>`, `<ProgressBar>`, `<NativeSelect>`, `<TextArea>`, `<DatePicker>`, `<TimePicker>`.

## 21.8.0 (2025-08-01)

### Minor Changes

- 1de6a0c: Ny prop i `<Tooltip>`: `keepMounted`. Tillater å rendre komponenten når den skal vises, uten at den er alltid i DOM. Har `true` som default.
- e83f386: Eksponerer enkelte hooks: `useCallbackRef()`, `useControllableState()`.
- 9d4d12a: Støtte for `clearable` prop i `<NativeSelect>`; brukeren kan trykke en knapp til å sette komponenten til tom verdi. Krever at første `<option>` har `value=""`.

### Patch Changes

- b559af7: Fikser størrelse på spinner i `<Button>` ved loading-tilstand.
- 9d4d12a: Fikser bug der styling fra `<PhoneInput>` påvirket `<select>` element globalt.
- 9d4d12a: `<InlineEditSelect>` får pointer-musepeker ved hover.
- a640ceb: Bytter bakgrunnsfarge i `<EmptyContent>` fra `dds-surface-sublte` til `dds-surface-medium` slik at komponenten er synlig på `dds-surface-subtle` bakgrunn.
- a640ceb: Fikser bug der beskrivelsestekst i `<EmptyContent>` ikke fikk riktig farge.
- 2726702: `<Input>` helper og tilhørende types er ikke lengre eksponert; ser ikke ut som om noen har brukt den, og den egner seg kun til intern bruk. Endringen er dermed ikke breaking.
- a640ceb: Setter border radius til `dds-border-radius-surface` i `<EmptyContent>`.
- 2726702: Gjør `initiallyExpanded` prop ikke påkrevd i `useAccordion`, da den allerede bruker default `false`.
- 9d4d12a: Refaktorerte `<InlineEdit>` slik at edit-ikonet ikke bruker en ekstra `<span>` wrapper.
- 2726702: `<CharCounter>` helper er ikke lengre eksponert; ser ikke ut som om noen har brukt den, og den egner seg kun til intern bruk. Endringen er dermed ikke breaking.
- d5d042e: Fikser bug der `<Card cardType="navigation">` var et inline element.

## 21.7.0 (2025-07-04)

### Minor Changes

- 0284211: Ny komponent: `<InlineEditSelect>`. Den er en del av [InlineEdit](https://design.domstol.no/987b33f71/p/767867-inlineedit)-komponentgruppen og returnerer nativ `<select>`.

### Patch Changes

- 0284211: Fikser styling for border ved valideringsfeil i `<InlineEdit>`-komponenter.
- 0284211: Justerer på størrelse på tømmeknapp i `<Search>`

## 21.6.1 (2025-06-23)

### Patch Changes

- e63e899: Fikser en bug der `<Select>` lukket dropdown når options endret seg dynamisk.
- 673a168: `<TextArea>` bli mindre når brukeren fjerner tekst; før endret størrelsen seg kun når brukeren skrev mer tekst, nå endres størrelsen i begge tilfeller.

## 21.6.0 (2025-06-20)

### Minor Changes

- ff7a6eb: Intern støtte for i18n i komponenter via ny provider, med støtte for språkene `'nb'`, `'no'`, `'nn'` og `'en'`,. Gjelder statiske, hovedsakelig usynlige tekster for UU/skjermleser, men også noen synlige. Bruker `'nb'` som default inntil videre, og vil dermed ikke føre til noen endringer hos konsumenter i denne release. Default blir fjernet i neste major release, med påkrevd bruk av `<DdsProvider>`.
- ff7a6eb: Ny komponent: `<DdsProvider>`. Slår sammen `<LanguageProvider>` og `<ThemeProvider>`. Blir påkrevd å bruke i neste major release istedenfor `<ThemeProvider>`; må ikke brukes enda grunnet default språk inntil videre.

### Patch Changes

- ff7a6eb: Utbedrer noen statiske usynlige ledetekster og beskrivelser for UU/skjermleser.

## 21.5.1 (2025-06-10)

### Patch Changes

- dffe29a: Fikser bug der `<Checkbox>` fikk indeterminate-styling selv om `indeterminate` prop var satt til `false`.

## 21.5.0 (2025-06-06)

### Minor Changes

- 9239dcd: Ny prop i `<CookieBanner>`: `collapsedBreakpoint`. Brukes til sammentrukket versjon på siden med detaljer om informasjonskapsler. Se detaljer i retningslinjer.

### Patch Changes

- 3286f86: Fikser bug der `<DatePicker>` ikke ble påvirket av `width` prop.

## 21.4.0 (2025-06-04)

### Minor Changes

- f6728a8: Støtte for `color` prop i typografikomponenter: `<Caption>`, `<Heading>`, `<Label>`, `<Legend>`, `<Link>`, `<Paragraph>`. Den støtter både valgfri string og fargenavn for tekst og ikon fra våre design tokens; når kebab-case fargenavn brukes settes CSS klasse for den fargen, ellers brukes inline CSS. Farger som ikke er paret med en bakgrunnsfarge (f.eks. `text-subtle`, men ikke `text-on-notification`) blir automatisk invertert i `<Contrast>`-komponenten.
- f6728a8: `color` prop i `<Typography>` utvides til å støtte fargenavn i kebab-case, slik at props som refererer til CSS-variabler standardiseres på tvers av biblioteket; camelCase blir deprecated og ikke støttet på sikt.
- 1ae0ef3: Utvider `<VisuallyHidden>` sin `as` prop til å støtte valgfritt element. Propen er ikke lenger påkrevd og komponenten returnerer `<span>` som default.

### Patch Changes

- d8a80a9: Fikser bug der `<Toggle>`, `<RadioButton>` og `<Checkbox>` fikk read-only styling ved `readOnly="false"`.
- f6728a8: Fikser bug der `color` prop i `<Typography>` støttet depracated nativ HTML `color`-attributt, og konsumenten fikk dermed ikke tooltip med mulige verdier i kodeeditor.

## 21.3.1

### Patch Changes (2025-06-02)

- 183df0f: Hover styling overskriver nå error-styling i `Checkbox>` og `<RadioButton>`.
- 183df0f: Små justeringer i styling i `<SelectableCard>`: selected-bakgrunn ved `checked`, ingen ramme ved `disabled`/`readOnly` kombinert med `checked`, disabled-bakgrunn i selection control ved `disabled`/`readOnly`.
- c3bbf05: Fikser bug deg border mellom knappene i `<SplitButton>` fikk feil farge på hover.

## 21.3.0 (2025-05-23)

### Minor Changes

- 0f3ffcd: Ny delkomponent og variant: `<CardSelectable>` med `<CardSelectableGroup>`. Bruker `<Card>` styling og returnerer enten en avkrysningboks eller radioknapp; oppførselen er stort sett samme som `<RadioButton>` `<Checkbox>` og deres grupper.
- efd0882: Støtte for async funksjonkall med `onClickAsync` prop i `<OverflowMenuButton>`, slik at menyen er fortsatt åpen under loading.

### Patch Changes

- 0f3ffcd: Fikser bug i `<Checkbox>` og `<RadioButton>` der padding for komponent uten ledetekst ble satt selv om `children` prop ble brukt.
- 0f3ffcd: Fikser bug der `<RadioButton>` sin `<input>` ikke fikk `aria-readonly` attributt ved `readOnly` prop.
- 0f3ffcd: Oppdaterer border-farge i disabled `<Checkbox>` og `<RadioButton>` til `dds-color-border-subtle`.

## 21.2.2 (2025-05-16)

### Patch Changes

- f5e447f: Fikser bug der `<DatePicker>` kalender manglet spacing og dager kunne bleede utover boksen. Justerer også på spacing over og under ukedager.
- 7d8904d: SplitButton: Sett `type="button"` for å hindre at skjema submittes når knapp for å åpne liste med flere valg trykkes

## 21.2.1 (2025-05-07)

### Patch Changes

- 25dc142: Bedre UU i `<ProgressTracker>`: `<nav>` wrapper for navigasjon, fikser bug der egen `aria-label` ikke var støttet, bedre default `aria-label`, bedre usynlig knappetekst for skjermleser, fikser ugyldig HTML.
- d5b92da: Fikser bug der `<RadioButton>` ikke fikk layout styling.

## 21.2.0 (2025-05-06)

### Minor Changes

- 54fa9b9: Støtte for horisontal `<ProgressTracker>` via ny prop: `direction`. Komponenten er fortsatt vertikal som default.
- 2fa60d9: Støtte for å skjule søkeikon i `<Search>` via `showIcon` prop.
- 2fa60d9: Fjerner unødvendig nøstet `<div>` i`<Search>` når søkeknappen ikke er der og justerer på avstander. Kan påvirke layout.

### Patch Changes

- d24e64a: Endrer layout i `LocalMessage` slik at ikon legger seg på toppen ved flere linjer med tekst. Fikser andre små feil som avstander og størrelse på lukkeknapp.

## 21.1.0

### Minor Changes

- d9cb50c: Støtte for responsiv `width` prop i `<Search>`.

### Patch Changes

- d591d35: Fikser bug der `<DetailList>` viste versjonen for liten skjerm samtidig som standard.

## 21.0.0

### Major Changes

- b09e10b: Fjerner types `MaxWidthGrid`, `RowGapGrid` og `ColumnGapGrid` i `<Grid>`; disse brukes istedet på tvers av layout primitives.
- 80da191: Endrer hvordan `width` prop fungerer i `<PhoneInput>` og `<InputStepper>`. Den setter bredde for hele input-gruppen, og ikke bare inputfeltet. Se detaljer i [migreringsguiden v20 til v21](https://design.domstol.no/987b33f71/p/88e4c8-v20-til-v21).
- b09e10b: Endrer verdi `'onInverse'` til `'on-inverse'` for `color` prop i `<Divider>`.
- b09e10b: Endrer navnet på `type ScreenSizeLiteral` til `Breakpoint`
- b09e10b: Bytter navn på type `StackSpacing` til `SpacingScale`, og tar den i bruk på tvers av layout primitives.
- b09e10b: Bytter navn på props i `<HStack>` og `<VStack>`: `align` -> `alignItems`, `justify` -> `justifyContent`.
- b09e10b: Revamper komponenter `<VStack>`, `<HStack>`, `<Grid>` og `<Paper>` i samsvar med layout primitives-standarden inkludert polymorfi, utvidet støtte for CSS props og responsiv skjuling. Se detaljer i [migreringsguiden v20 til v21](https://design.domstol.no/987b33f71/p/88e4c8-v20-til-v21).
- 80da191: Endrer hvordan enkelte props fungerer i `<NativeSelect>`; `className` og `style` settes nå på rotcontainer, mens `width` settes på kontainer for `<select>` og chevronikonet. På denne måten er det likt på tvers av inputkomponenter og fleksibelt.

### Minor Changes

- b09e10b: Legger til nye layout primitives: `<Box>` og `<ShowHide>`. Se detaljer i [migreringsguiden v20 til v21](https://design.domstol.no/987b33f71/p/88e4c8-v20-til-v21).
- 80da191: Utvider `width` og `height` props til å støtte responsive verdier i `<Skeleton>`. Se detaljer i [migreringsguiden v20 til v21](https://design.domstol.no/987b33f71/p/88e4c8-v20-til-v21).
- b09e10b: Ny hook: `useWindowResize()`. Brukes for funksjonalitet som kjøres når brukeren endrer vindusstørrelse.
- 80da191: Utvider `widthProps` prop til å støtte responsive verdier i `<Drawer>`. Se detaljer i [migreringsguiden v20 til v21](https://design.domstol.no/987b33f71/p/88e4c8-v20-til-v21).
- 80da191: Utvider `width` prop til å støtte responsive verdier i følgende komponenter: `<FileUploader>`, `<TextInput>`, `<TextArea>`, `<NativeSelect>`, `<Select>`, `<ProgressBar>`, `<DatePicker>`, `<InlineEditInput>`, `<InlineEditTextArea>`, `<LocalMessage>`, `<ToggleBar>`, `<PhoneInput>`, `<InputStepper>`. Se detaljer i [migreringsguiden v20 til v21](https://design.domstol.no/987b33f71/p/88e4c8-v20-til-v21).
- ab90914: Ny prop i `<Legend>`: `typoghraphyType`. Den støtter typografistilier for overskrifter. Brukes når komponenten trenger størrelsen tilpasset etter overskriftshierarki ellers på siden.
- f054b3e: Justerer på layout for Modal og Drawer. Gjør header sticky, og flytter header opp på linje med lukke-knapp for å redusere spacing i toppen.
- e780239: Ny komponent: `<CookieBanner>`. Brukes til samtykkebanner for informasjonskapsler.
- b09e10b: Legger til `<FieldsetGroup>` delkomponent som bruker riktig spacing og layout ut av boksen.
- 80da191: Utvider `sizeProps` prop til å støtte responsive verdier i `<Popover>`. Se detaljer i [migreringsguiden v20 til v21](https://design.domstol.no/987b33f71/p/88e4c8-v20-til-v21).
- 1e48bbb: Ny prop `smallScreenBreakpoint` i `<DetailList>`. Den gjør om rader (`<DetailListRow>`) til kolonner.

### Patch Changes

- 80da191: Fikser bug der `<NativeSelect>` ikke støttet prosentverdi for `width` prop.
- 7b4d48a: Tegnteller plasseres nå under inpufeltet til høyre i `<TextInput>` og `<TextArea>`. Hvis det blir for lite plass til feilmelding eller hjelpetekst vurder å gjøre inputfeltet bredere.
- ab90914: Fjerner fast spacing på bunnen i `<Legend>` ved bruk av `withMargins` prop; den arver nå spacing fra valgt typografistil.

## 20.2.0

### Minor Changes

- 41260b3: Legger til optional property `portal`, default `false`, som angir om popover skal rendre i portal eller ikke.
- 957771e: Støtte for props `loading` og `loadingTooltip` i `<OverflowMenuButton>`.

## 20.1.0

### Minor Changes

- 69fd7a3: Fikser bug der `htmlProps`-prop ikke ble satt og setter standardverdien `type='button'` i `<Tab>`. På denne måten vil ikke bytting mellom faner trigge submit hvis `<Tabs>` ligger i `<form>`.

## 20.0.0

### Major Changes

- 9d7a491: Oppgradering til React 19: Fjerner `forwardRef` fra alle komponenter og bruker `ref` as prop istedet.
- 39a68f0: Oppgraderer til React 19 med endringer som ikke er kompatible med eldre versjoner. Det er dermed påkrevd med oppgradering til React 19 for konsumentene.

### Patch Changes

- 68990df: Fikser bug i `<InputStepper>` der readOnly-attributtet ikke faktisk førte til at feltet ble readOnly
- 4e5a795: Fikser bug der `<Drawer>` fikk border.

## 19.2.0

### Minor Changes

- 2c76b83: Støtte for kontrollert `<Popover>` uten `<PopoverGroup>` for corner cases.

## 19.1.0

### Minor Changes

- 80f3ab9: Støtte for `onClick` prop for individuelle `<Tab>` delkomponenter i `<Tabs>`.
- 5b4902e: Ny komponent `<InputStepper>` som brukes til å øke eller minke verdien i inputfelt ved å klikke på knapper.
- b8f4430: Støtte for `size` prop i `<Tabs>` med `'medium'` og `'small'`. Bruker `'small'` som default. Justerer også på spacing i begge variantene.

### Patch Changes

- d16972c: Fikser bug der åpning av kalender i `<DatePicker>` satt unødvendig styling på `body`.

## 19.0.0

### Major Changes

- 3ced0b0: Endrer navn på prop `title` til `headerText`, og `titleHeadingLevel` til `headerHeadingLevel` i `<EmptyContent>`. På denne måten unngår vi forvirring med nativ HTML `title` og standardiserer navngiving.
- 2c0cfd7: Revamp av `<Popover>`-komponenten.
  - Fjerner props `onCloseButtonClick` og `onTriggerClick`, legger til `onOpen` og `onClose` i `<PopoverGroup>`. På denne måten vil konsumentene kunne legge til callbacks basert på status på `<Popover>` uten å henge seg oppi detaljer rundt implementasjonen.
  - Implementerer kontrollert tilstand. `<PopoverGroup>` kan nå ta inn `isOpen` og `setIsOpen` for å bli kontrollert av konsumenten; hvis de ikke settes brukes intern håndtering. Legger også til `isInitiallyOpen`, som forteller om `<Popover>` vises på første render. Propen var tidligere kalt `isOpen`, så nå skiller vi mellom initial og kontrollert tilstand.
  - Bytter navn på `title` prop til `header` i `<Popover>`. Det er mer riktig, og i tillegg unngår vi forvirring der en konsument kan tro at vi mener native HTML `title`.
  - Fjerner props fra `<Popover>` som ble satt av forelder: `isOpen`, `anchorElement`, `onClose`, og implementerer React Context istedet. Vi unngår dermed rotet med props konsumenter ikke "får lov" til å sette.
  - Fjerner `onCloseButtonClick` fra `<Popover>`. Vi dropper støtte for callback på så detaljert oppførsel; det erstattes med `onOpen` og `onClose` i `<PopoverGroup>`.

- 3ced0b0: Revamp av `<OverflowMenu>`.
  - Fjerner prop `onToggle` i `<OverflowMenuGroup>`. Komponenten blir standardisert og bruke kun `onClose` og `onOpen`.
  - Implementerer kontrollert tilstand. `<OverflowMenuGroup>` kan nå ta inn `isOpen` og `setIsOpen` props for bli kontrollert av konsumenten; hvis de ikke settes brukes intern håndtering. Legger også til `isInitiallyOpen`, som forteller om `<OverflowMenu>` vises på første render.
  - Fjerner props fra `<OverflowMenu>` som ble satt av forelder: `isOpen`, `anchorRef`, `onClose`, `onToggle`, `id` og implementerer React Context istedet. Vi unngår dermed rotet med props konsumenter ikke "får lov" til å sette. `<OverflowMenuGroup>` er dermed obigatorisk å bruke.

- 3ced0b0: Revamp av `<Drawer>`.
  - Implementerer kontrollert tilstand. `<DrawerGroup>` kan nå ta inn `isOpen` og `setIsOpen` props for bli kontrollert av konsumenten; hvis de ikke settes brukes intern håndtering. Legger også til `isInitiallyOpen`, som forteller om `<Drawer>` vises på første render.
  - Fjerner props fra `<Drawer>` som ble satt av forelder: `isOpen`, `triggerRef`, `onClose`, `id` og implementerer React Context istedet. Vi unngår dermed rotet med props konsumenter ikke "får lov" til å sette. `<DrawerGroup>` er dermed obigatorisk å bruke.

### Minor Changes

- 8f0f2d9: Støtte for "Legg til fane"-knapp i `<Tabs>` via `addTabButtonProps` prop.
- 2b65802: Støtte for `smallScreenBreakpoint` prop i `<DatePicker>`; viser versjon for liten skjerm (kalender i modal) ved oppgitt brekkpunkt.

## 18.3.0

### Minor Changes

- 2e48b80: Legger til `purpose`-prop i `<OverflowMenuListItemBaseProps>` som gir støtte for bruk av `danger`-farge på `<OverflowMenuButton>`, `<OverflowMenuLink>` og `<OverflowMenuSpan>`
- 02e6910: Legger til ny variant av `<ToggleButton />`. Denne finnes nå i to størrelser `small` (default) og `xsmall`

### Patch Changes

- bc8eb1a: Tar i bruk nye z-index tokens i alle komponenter.
  - @norges-domstoler/development-utils@1.3.1

## 18.2.0

### Minor Changes

- e484707: Fikser bug der `<Select>` ikke eksporterte `JSX.element`, samt bug der `ref` ikke var støttet. Eksponerer `type SelectForwardRefType<Option, IsMulti extends boolean>` for å sette type ved bruk av `useRef()` (valgfritt).
- 37537d5: Legg til noWrap-argument i useRoveFocus hook som sørger for at indeksen til det fokuserte elementet ikke wrapper når den oppdateres
- 0f52707: Ny komponent: `<Toggle>`. Brukes til å umiddelbart slå noe av eller på.

### Patch Changes

- daf1d9b: Fjerner referanse til `window` i `<TableWrapper>` slik at den fungerer med SSR.
- d624097: Knytter label til `input` i `<FileUploader>`.
  - @norges-domstoler/development-utils@1.3.1

## 18.1.0

### Minor Changes

- 58a2a9c: Støtte for `defaultValue` prop i `<RadioButtonGroup>`, slik at man kan bruke ukontrollert state med initiell verdi.

## 18.0.0

### Major Changes

- 32d88e6: Bytter navn fra `<CardAccordion>` til `<CardExpandable>`. Se detaljer i [migreringsguiden](https://design.domstol.no/987b33f71/p/233a8b-v17-til-v18).
- c43b709: Bytter navn på størrelsesvariant `tiny` til `xsmall` på tvers av komponenter. Se detaljer i [migreringsguiden](https://design.domstol.no/987b33f71/p/233a8b-v17-til-v18).
- 6232a2a: Endringer i typer for typografi, samt komponenter som bruker typografi-relaterte props. `TypographyBodyType`, `TypographyHeadingType`, `TypographyLeadType` endrer verdier, typen `TypographySupportingType` fjernes, og `LabelTypografiType` bytter navn til `TypographyLabelType`. De nye typene er:

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

- 1fe2d59: Endrer prop `density` til `size` med t-skjortestørrelser i `<Table>` og `<DetailList>`. Nye propen påvirker både tetthet og tekststørrelse. Default størrelse er nå `medium`, som tilsvarer gamle `compact`. Se detaljer i [migreringsguiden](https://design.domstol.no/987b33f71/p/233a8b-v17-til-v18).
- 6232a2a: Implementerer theming med to temaer: Core (for fagsystemer o.l.) og Public (for nettsider som domstol.no og enkelte innloggingssystemer som aktørportalen). Grunnet denne endringen er det nødvendig å wrappe din applikasjon i ny komponent `<ThemeProvider>` for å bruke Elsa komponenter. Se detaljer i [migreringsguiden](https://design.domstol.no/987b33f71/p/233a8b-v17-til-v18).
- 6232a2a: Ny komponent: `<ThemeProvider>`. Den brukes som wrapper for applikasjonen for å gi alle komponentene all styling og riktig tema. Se detaljer i [migreringsguiden](https://design.domstol.no/987b33f71/p/233a8b-v17-til-v18).

### Minor Changes

- 8ebc554: `<Drawer>`, `<Modal>` og dropdown i `<Select>` blir rendret i `<div>` generert av `<ThemeProvider>` som default, istedenfor `document.body`, grunnet theming-endringer og utfordringer rundt SSR. Se detaljer i [migreringsguiden](https://design.domstol.no/987b33f71/p/233a8b-v17-til-v18).
- 5c60316: Nytt ikon: Jordskiftesak.
- 6232a2a: Fjerner default `placeholder` i `<Select>`, da [det anbefales å ikke bruke det](https://www.w3.org/WAI/GL/low-vision-a11y-tf/wiki/Placeholder_Research). Det er fortsatt mulig å sette egen ved behov.

### Patch Changes

- 6232a2a: Migrerer alle komponenter til å bruke nye design tokens.
- 6232a2a: Endrer default `width` i `<DatePicker>` og `<TimePicker>` til å være `fit-content`. Grunnet theming kan teksten bli bredere, og siden default `width` ble før satt i `px` ble spacing til høyre for lite. Med `fit-content` tar komponenten den plassen den trenger; siden bredden på dato- og tid-input er statisk, ingenting vil "hoppe". Ingen endringer i hvordan custom bredde settes.
- 386cef0: Fikser `<Spinner>`, `<Icon>` og helper `<AnimatedChevronUpDown>` slik at props `height` og `width` setter høyde og bredde i CSS istedenfor HTML. På denne måten kan man bruke ddsTokens i CSS og ikke bare TS.
- 386cef0: Fjerner en rekke ubrukte og utdaterte styling helpers i JS. Migrerer resterende til å bruke CSS tokens, og ikke TS-konstanter (`focusVisible`, `scrollbarStyling`).
- 386cef0: Fikser bug i `<TextInput>` der inputtekst overlappet med affiks ved `readOnly`.
- 56192c6: Fikser bug der `<ToggleBar>` og `<Feedback>` rendret `<label>` for tekster som ikke er semantiske ledetekster.
  - @norges-domstoler/development-utils@1.3.1

## 17.7.0

### Minor Changes

- 6d12eaa: Støtte for `onClick` prop på `BackLink` for lettere bruk i Next.js. `href` skal brukes samtidig slik at komponenten er fortsatt en semantisk lenke.

### Patch Changes

- 3c8fa95: Popover - legger til prop `returnFocusOnBlur` med standard verdi `true` for å angi om fokus skal returnes ved blur
- 74fbd84: Fikser border i `<SplitButton>`slik at den ikke blir gjennomsiktig på en side ved `:active` state.

## 17.6.0

### Minor Changes

- 06f249d: Støtte for `showWeekNumbers` prop i `<DatePicker>` som styrer visning av ukenumre. `true` som default.

### Patch Changes

- 6cc2ccc: Endrer farge på border i `<Card>` til `var(--dds-color-border-subtle)`.
- 35f5917: Fikser størrelse på ikoner i `<Feedback>`.
- 9c61c3d: Flytter chevron i `<AccordionHeader>` til venstre for teksten. Dette sørger for at brukeren forstår at hele headeren er klikkbar, samt vet hva tilstanden på komponenten er ved zoom og o.l.
- a364ae0: Hvis prop `label` ikke settes i `<CheckboxGroup>`, blir dens `<span>` ikke rendret.

## 17.5.4

### Patch Changes

- 349bca7: Fikser høyde i `<NativeSelect>`.
- 75ff95f: Setter makshøyde for Modal
- 1cbc7bb: Setter default bredde på minste varianten av `<Select>` til å følge `<TextInput>`.
- c629974: Fikser alfabetisk sortering i `<PhoneInput>`
- 5e5445f: Setter `border-radius` i `<Drawer>` til 0, da flata tar hele viewport-høyden.
- 422c64a: Oversetter landsnavn i `<PhoneInput>` til norsk
- 40dc145: Legger `--dds-border-radius-surface` på nedre hjørner i `<InputMessage>`.

## 17.5.3

### Patch Changes

- e17356f: Setter animasjonstiden i `<Drawer>` til 200ms.
- be2cacb: Legger til støtte for åpning av modal fra drawer med backdrop.

## 17.5.2

### Patch Changes

- 59fdd0e: Tillat react v19 i peer dependency range.
- Updated dependencies [59fdd0e]
  - @norges-domstoler/development-utils@1.3.1

## 17.5.1

### Patch Changes

- e49d4a5: Fikser `border-radius` i `<Card cardType="expandable">` ved hover.
- b08087d: Fikser bug der `border-radius` prop var påkrevd i `<Skeleton>`.

## 17.5.0

### Minor Changes

- d4efe6b: Ny komponent: `<PhoneInput>`. Består av en nedtrekksliste med landkoder og `<input type="tel">`. Brukes når det kan forventes numre fra andre land.

### Patch Changes

- d4efe6b: Fjerner støtte for native HTML `<input>`-attributter i `type NativeSelectProps`. Oppførselen er den samme, men det var problemer med typings i props som `onChange`, da slik prop var både av type `ChangeEventHandler<HTMLInputElement>` og `ChangeEventHandler<HTMLSelectElement>`.

## 17.4.0

### Minor Changes

- 71b89d8: Ny komponent: `<ProgressBar>`. Den kan brukes til å vise progresjon av en prosess,rendering, nedlasting eller opplasting.
- 247261c: Legger til støtte for `withBackdrop` prop i `<Drawer>`. Den returnerer variant med backdrop.

### Patch Changes

- c8a936b: Fikser farge på ikon i knappene i `<Feedback>`.
- 056feeb: Setter farge på border i `<ToggleButton>` til `--dds-color-border-default`.
- 3461f4a: Utbedrer spacing i `<ToggleButton>`.
- 15a3922: Setter linjehøyde for `<ListItem>` til `--dds-font-lineheight-list` (istedenfor hardkodet verdi).

## 17.3.1

### Patch Changes

- a15ab26: Setter fast høyde på kalender-popover i `<DatePicker>`. På denne måten har den forutsigbar størrelse, og innholdet hopper ikke når antall uker i måneden forandrer seg.
- 322a3c1: Setter `role="progressbar"` i `<Spinner>` for bedre bruk med assisterende teknologi.
- 675ddd0: Fikser bug der border i trykt inn knapp i `<ButtonGroup>` hadde feil farge.

## 17.3.0

### Minor Changes

- cbced1e: Ny komponent: Accordion. I motsetning til `<CardAccordion>` (som skal bytte navn), brukes den i grupper og andre kontekster der man ikke skal ha `<Card>`.
- 9089c9c: Ny komponent: `<Contrast>`. Den har en invertert bakgrunnsfarge som default og setter invertert farge på tekst ut av boksen(i Elsa-komponenter og unstyled tekst).
- cbced1e: Ny hook: `useAccordion`. Den kan brukes når man vil ha accordion-oppførsel, men ikke den faktiske `<Accordion>`-komponenten. Hooken håndterer oppførsel og universell utforming.

### Patch Changes

- 2aa7a10: Endrer CSS `border-radius` i `<Card>` til `--dds-border-radius-surface`.

## 17.2.2

### Patch Changes

- 3b29379: Fikser bug der `<Caption withMargins="true">` la seg inni tabellen istedenfor over.
- a98e44e: Sett unik key på SecondaryActions i SplitButton

## 17.2.1

### Patch Changes

- 764add5: Fikser bug som gjorde at `style` ikke var støttet for `<Grid as="div">`.
- 17e32b9: Fikser bug der `onClick` i `ProgressTrackerItem` ikke var valgfri.
- 198fa2b: Fikser bug der `<BackLink>` ikke fikk `text-decoration-color: transparent;` på hover i Safari.

## 17.2.0

### Minor Changes

- ec8e454: Ny komponent: `<DetailList>` med tilhørende subkomponenter. Den returnerer `<dl>`, `<dt>` og `<dd>`. Komponenten brukes til å vise informasjon på en ryddig måte, der den første cellen i raden er et uttrykk eller ledetekst (term). Resterende celler i raden innheholder detaljer om dette utrykket, eller relevante lenker og knapper.

### Patch Changes

- ed199bc: Fikser bug som gjorde at `<Popover>` ikke fikk klassenavn satt via `className` prop.
- e090f1e: Fikser bug der `<ProgressTrackerItem>` ikke støttet `onClick` eller native HTML attributter.

## 17.1.0

### Minor Changes

- d0ec42b: Ny komponent: `<Skeleton>`. Brukes ved innlastning av innhold.
- 489de56: Utvider type for `buttonProps`-prop i `<Search>`. Nå kan den også ta inn `icon` og `loadingTooltip`.

### Patch Changes

- 32afd9e: Fikser bakgrunnsfarge i rader i `<Table density="extraCompact">`.
- 48e90c4: Standardiserer ikonplassering på tvers av input-komponenter via absolutt posisjonering, slik at den ikke påvirker høyden på komponenten.
- 48e90c4: Fikser feil høyde i `<Select componentSize="small">` og gjør indikator-ikonene mindre.

## 17.0.0

### Major Changes

- 2a6d1aa: Endrer navn på props i `<InternalHeader>`: `userProps` til `user`, `navigationElements` til `navItems` og `contextMenuElements` til `contextMenuItems`. Dette standardiserer navngiginv på tvers av komponenter.

  I tillegg endrer vi de samme props; de tar inn `children` istedenfor `title` eller `name` for å vise tekst i elementer i menyen og lenker. På denne måten følger props samme standard som andre komponenter.

  ```jsx
  //Før
  const items = [
    {
      title: 'Sekundær handling',
      onClick: () => null,
    },
  ];

  const user = [
    {
      name: 'Navn Navnesen',
      href: '/',
    },
  ];

  //Etter
  const items = [
    {
      children: 'Sekundær handling',
      onClick: () => null,
    },
  ];
  const user = [
    {
      children: 'Navn Navnesen',
      href: '/',
    },
  ];
  ```

- 4b6b7f1: Prop `smallScreen` i komponentene `<Breadcrumbs>`, `<InternalHeader>` og `<Pagination>` gjøres om til `smallScreenBreakpoint`; den tar inn navn på et brekkpunkt og gjør komponenten responsiv, slik at versjonen for liten skjerm vises ved oppgitte brekkpunket og nedover vha kun CSS.
- 5b9d734: `secondaryOptions` prop i `<SplitButton>` tar inn `children` istedenfor `title` for å vise tekst i knapper i menyen med sekundære handlinger. På denne måten følger propen samme standard som `primaryAction` prop, samt andre komponenter.

  ```jsx
  //Før
  const items = [
    {
      title: 'Sekundær handling',
      onClick: () => null,
    },
  ];

  //Etter
  const items = [
    {
      children: 'Sekundær handling',
      onClick: () => null,
    },
  ];
  ```

- 5b9d734: Fjerner deprecated props `items`, `navItems` og `userProps` i `<OverflowMenu>`. Menyen kan bygges kun med dedikerte subkomponenter.
- d9663cb: Oppdaterer alle komponenter til å bruke nye tokens fra @norges-domstoler/dds-design-tokens.

### Minor Changes

- 706a4c8: Ny komponent: `<Footer>`. Den kommer med en rekke subkomponenter for fleksibilitet og konsekvent layout på tvers av løsninger. Les detaljer i dokumentasjon.
- 9a6d70e: Ny prop i `<Grid>`: `columnGap`. Tillater å sette CSS `column-gap` per brekkepunkt.

### Patch Changes

- 211a754: Fikser typos i navn på typografiklasser og variabler.
- 7bfc734: Oppdaterer `border-radius` i komponenter til semantisk.
- 191b79e: Fikser en bug der `helper-text-01`, `placeholder-text-01`, `placeholder-text-02` og `placeholder-text-03` ikke fikk riktig styling.
- b5cdfe6: Justerer på offset og tykkelse på underlinje i `<Link>`
- cd557e0: Fjerner skygge i `<LocalMessage>`
- efa62bd: Justerer på spacing i `<Button size="tiny">`
- 784c27c: Fjernet bakgrunnsfarge på tip
  - @norges-domstoler/development-utils@1.3.0

## 16.3.0

### Minor Changes

- a9dcfbd: Utvider typen til `message` i `EmptyContent` til `ReactNode`, slik at den kan støtte variert innhold og ikke kun `string`.
- ea9ecd7: Legger til støtte for å bygge `<OverflowMenu>` med subkomponenter (lenke, knapp, divider, header) som barn. Dette gjør `<OverflowMenu>` sitt bruksområde mer generelt.

  Før:

  ```jsx
  <OverflowMenu
    userProps={{
      name: 'Agata',
      href: '/min-profil',
    }}
    navItems={[
      {
        title: 'Saker',
        href: '/saker',
      }
      {
        title: 'Oppgaver',
        href: '/oppgaver',
      }
    ]}
  />
  ```

  Nå:

  ```jsx
  <OverflowMenu>
    <nav>
      <OverflowMenuList>
        <OverflowMenuLink href="/min-profil" icon={PersonIcon}>
          Agata
        </OverflowMenuLink>
        <OverflowMenuLink href="/saker">Saker</OverflowMenuLink>
        <OverflowMenuLink href="/oppgaver">Oppgaver</OverflowMenuLink>
      </OverflowMenuList>
    </nav>
  </OverflowMenu>
  ```

### Patch Changes

- bd1edde: Oppdaterer svg-koden til Webex-ikonet.
- 3fc7f94: Default tittel/header i `<Drawer>`, `<Modal>` og `<Popover>` returnerer nå `<h2>`, slik at overskriftshierarkiet opprettholdes uansett kontekst. På denne måten unngår vi problemer rundt universell utforming.
- ed4cde1: Setter `display: block;` i CSS for `<Card cardType="navigation">`, da den returnerer `<a>` og er i utganspunktet et inline-element.
  - @norges-domstoler/development-utils@1.3.0

## 16.2.0

### Minor Changes

- 18eff04: Endringer i oppførsel og utseende i input-komponenter ved `readOnly`. Tidligere var `readOnly` komponenter som ikke støttet nativ `readonly` satt til `disabled`. I tillegg gjorde styling ved `readOnly` at feltet så ut som statisk tekst. Dette stemmer ikke med hvordan nativ `readonly` input skal oppføre seg og se ut, spesielt da deaktiverte felt ikke får sendt sin verdi sammen med skjema. Komponentene `<TextInput>` og `<TextArea>` får ny styling ved `readOnly`; komponentene `<Select>`, `<NativeSelect>`, `<RadioButton>`, `<Checkbox>`, `<DatePicker>` og `<TimePicker>` får ny styling OG ny oppørsel. De blir ikke satt til `disabled`, istedet er det umulig for brukeren å endre verdien mens de kan fortsatt få fokus.

### Patch Changes

- 18eff04: Visuelle endringer i ikonene `LockIcon` og `LockOpenIcon`.
- 4709a71: Sett riktig DOM property clipRule og fillRule for GuardianIcon
- 18eff04: Oppdaterer styling ved `disabled` i input-komponenter.
- d40990f: Fix typo in text-color variable name for Input and DateInput components

## 16.1.0

### Minor Changes

- a9b8e0a: Støtte for å vise tegnteller i `<TextArea>` ved bruk av `maxLength` prop. Inkluderer støtte for `withCharacterCounter` prop for å kunne slå av visning av tegnteller.
- fe7207c: Legger til nytt ikon: Webex
- efb396e: Ny komponent: `<NativeSelect />`. Brukes når det trengs nativ `<select>` istedenfor komponenten `<Select>` som er custom bygd.

### Patch Changes

- 46bb2e6: `width`-prop i `<TextInput>`, `<TextArea>`, `<TimePicker>` og `<DatePicker>` påvirker nå kun selve inputfeltet. Det betyr at hele komponenten tar den bredden den får tilgjengelig. Ledetekst, feilmeding og hjelpetekst kan bli bredere enn inputfeltet.
- dd399a5: Fikser spacing i `<Search>` og at den tar 100% bredde.
- 58ca006: Fikser bug som satt feil bredde i `<TextInput>` ved bruk av ikon og suffiks.
- e28a096: Styling-justeringer i `<FileUploader>` (border-radius, ikon, typografi, spacing, border).
- 9eaa27c: Legger til skygge i `<OverflowMenu>`

## 16.0.0

### Major Changes

- 78d01ed: > **TLDR;** Fjern bruk av `/dist/styles/fontStyles.css` og `/dist/styles/selection.css` og erstatt med `/index.css`.

  Samler alle CSS exports inn i én fil, `index.css`.
  Denne filen vil inneholde alle stiler som er nødvendige for å bruke komponentene i designsystemet.

  Hvis du tidligere har importert CSS-filer fra `@norges-domstoler/dds-components`, f.eks. `@norges-domstoler/dds-components/dist/styles/fontStyles.css` eller `@norges-domstoler/dds-components/dist/styles/selection.css` må du nå fjerne disse og i stedet importere `@norges-domstoler/dds-components/index.css`.

  ```diff
  - @norges-domstoler/dds-components/dist/styles/fontStyles.css
  - @norges-domstoler/dds-components/dist/styles/selection.css
  + @norges-domstoler/dds-components/index.css
  ```

  Vi inkluderer nå også automatisk `@norges-domstoler/dds-design-tokens/dist/css/dds-tokens.css` gjennom `index.css`, så du kan også fjerne imports av den hvis du har det.

  Bakgrunnen til denne endringen er at vi vil migrere designsystemet bort fra `styled-components`.
  `styled-components` genererer CSS ved run-time.
  Dette har en del negative konsekvenser som
  - dårligere ytelse,
  - kompliserer SSR oppsett, og,
  - setter en [begrensning på bruk av moderne React-funksjonalitet som Streaming SSR](https://github.com/styled-components/styled-components/issues/3658).

- 85a18f0: Type `TextColor` for prop `color` i `<Typography>` og `<Spinner>` støtter ikke verdier for base fargetokens som `'interactive'` og `'gray9'` lenger. Istedet bruker vi semantiske fargetokens for tekst og ikon. Se [migreringsguiden](https://design.domstol.no/987b33f71/p/97ffbb-v15-til-v16) for detaljer. Standard verdier for `color` CSS property er støttet som før.
- b6a2b23: Flytter `<AppShell>`-komponent ut fra dds-components til egen pakke.
- 62882b4: Endrer variantene for color i `<Divider>` fra `'primary'` og `'primaryLighter'` til `'default'`, `'subtle'` og `'onInverse'`, slik at de følger navngiving på semantiske tokens.
- 23bffd9: - Oppdaterer alle komponenter til å bruke CSS modules istedenfor styled-components. Det vil gi oss bl.a. bedre performance, lettere styling override, og kompatibilitet med server components. Denne oppgraderingen betyr at det ikke brukes en CSS-in-JS-løsning lenger, og det kan påvirke hvordan komponentene oppleves hos konsumenter.
  - `<Button>` støtter ikke `label`-prop lenger, da den er deprecated. Bruk `children` i stedet.
  - `<Button>` ble redesignet og simplifisert, da det ikke trengs så mange varianter. Den støtter ikke `appearance`-prop lenger. Det støttes kun `purpose`-prop med følgende verdier: `'primary'`, `'secondary'`, `'tertiary'`, `'danger'`. Hvordan koden skal oppdateres avhenger av kontekst; for eksempel, en gammel lukkeknapp brukte `<Button purpose="secondary" appearance="borderless">`, den byttes til `<Button purpose="tertiary">`.
  - `<Typography>` støtter ikke `interactionProps`-prop lenger. Du kan overskrive styling for `:hover` og `:active` med egen CSS-kode i stedet.
  - `<LocalMessage>` støtter ikke `purpose="confidential"` lenger, da den ikke ble brukt.
  - `<Card>` endrer navn på `color`-prop til `appearance` for standardisering på tvers av komponenter. Endrer også navn på typen brukt av propen fra `CardColor` til `CardAppearance` Fjerner variantene `color="filledDark"` og `color="strokeDark"`, og begrenser til kun verdier `"filled"` og `"border"`. Dette for å fjerne lite brukte/unødvendige varianter.
  - `<CardAccordionBody>` støtter ikke `paddingTop`-prop lenger. Bruk `padding`-prop eller egen CSS-kode i stedet.
  - Byttet navn på ikoner: `Thumbdown`, `Thumbup`, `ThumbdownFilled`, `ThumbupFilled`, `HourglassBottom`, `HourglassTop`, `HourglassEmpty`, `HourglassDisabled`, `HourglassFull` til: `ThumbDownIcon`, `ThumbUpIcon`, `ThumbDownFilledIcon`, `ThumbUpFilledIcon`, `HourglassBottomIcon`, `HourglassTopIcon`, `HourglassEmptyIcon`, `HourglassDisabledIcon`, `HourglassFullIcon`. Dette slik at navngivning følger samme mønster som andre ikoner. For å migrere legg på 'Icon' på slutten av importert ikon.
  - `<Tag>` støtter ikke `strong`-prop lenger. I stedet brukes `appearance`-prop for å standardisere propnavn på tvers av komponenter. Støttede verdier er `'default'` eller `'strong'`, for å standardisere navngivning av visuelt uttrykk.
  - `<DescriptionList>` sin `appearance`-prop støtter ikke verdiene `'bold'` og `'small'` lenger. I stedet brukes `'default'` eller `'subtle'`, for å bedre beskrive utseende og standardisere navngivning av visuelt uttrykk.

- 7b0ffd8: `<ScrollableContainer>`-komponenten og `<Scrollbar>` blir fjernet, da de ikke brukes og er problematiske med tanke på UU. Istedenfor bruk CSS med fargetoken for scrollbar eller `scrollbarStyling.tsx` til styling.

### Minor Changes

- 23bffd9: - Støtte for alle HTML-attributter for `<div>` i `<FileUploader>`.
  - Støtte for alle HTML-attributter for `<div>` i `<SplitButton>`.
  - Eksporterer `type SearchButtonProps` fra `<Search>`, slik at den er lett tilgjengelig for konsumenter.

- 85a18f0: Utvider type for `color`-prop i `<Icon>` til å støtte semantiske fargetokens via type `TextColor`, i tillegg til standard verdier for `color` CSS property. Se [migreringsguiden](https://design.domstol.no/987b33f71/p/97ffbb-v15-til-v16) for detaljer.
- d8caa5a: Legger til prop, `textAreaTip`, i `<Feedback>`-komponenten som kan brukes for å sette tip-teksten på tekstfeltet på kommenteringssteget.
- 6efecde: Ny farge å velge mellom via `color`-prop i `<Icon>`, `<Typography>` og `<Spinner>`: `'textOnNotification'`.
- 62882b4: Ny prop `withVisited` i `<Link>`. Den kan settes til `true` hvis styling for besøkt lenke skal vises.
- 0eb9d94: Legger til manglende props for labels i FileUploader
- 8c24388: Fjerner `styled-components` dependency fra `dds-components`. Den kan fjernes hos konsumentene. `app-shell` og `development-utils` bruker den fortsatt foreløpig.

### Patch Changes

- 1ad72df: Støtte for `data-testid` i `<Select />` for lettere testing. Legger `data-testid` + suffiks `'control'` på control-div.
- 23bffd9: - Oppdaterer border styling i `<FileUploader>`.
  - Oppdaterer spacing i `<OverflowMenu>`.
  - Legger til skygge i `<DatePicker>` popover.
  - Endrer `:active` styling i `<Button>` til at knapper ser ut til å bli trykt på.

- c91f9e1: Bruker `<h2>` istedenfor `<h5>` som default for tittel i `<EmptyContent>`. På denne måten vil den ikke bryte UU uansett oversiktshierarki.
- c91f9e1: Mindre justeringer på spacing, farger og ikonstørrelser i en rekke komponenter.
- b769743: Endrer fokusmarkering i `<Checkbox />` og `<RadioButton />` til å markere kun inputelementet, ikke ledetekst. Fokusmarkeringen settes ikke ved museklikk, kun tastaturfokus.
- 3e86ffc: Layout justteringer: spacing i `<ToggleBar>` og `display: inline-flex;` i `<Chip>`
- fcaba07: Fjerner hover og active-styling i `<Button />` ved `loading`.
- Updated dependencies [ab09bec]
- Updated dependencies [62882b4]
- Updated dependencies [62882b4]
- Updated dependencies [0eceeea]
- Updated dependencies [62882b4]
- Updated dependencies [62882b4]
- Updated dependencies [1746e27]
- Updated dependencies [62882b4]
- Updated dependencies [62882b4]
- Updated dependencies [62882b4]
- Updated dependencies [6efecde]
- Updated dependencies [62882b4]
  - @norges-domstoler/development-utils@1.3.0
  - @norges-domstoler/dds-design-tokens@5.0.0

## 15.9.1

### Patch Changes

- 3455fd9: Fjerner unødvendig `aria-label` fra enkelte komponenter
- ca45b49: Fikser skjev markør i `<Checkbox />`

## 15.9.0

### Minor Changes

- bca6aeb: Ny komponent: `<ButtonGroup />`. Brukes til gruppering av flere relaterte `<Button />`.
- a5d3917: Compound components i fungerer ikke i server components; disse er nå tilgjengelige som vanlige komponenter i tillegg til compound. Dette gjelder komponentene under `<Table />`, `<ProgressTracker />` og `<Search />`. Eksempel på syntaks: `<Table.Head />` => `<TableHead />`.

## 15.8.0

### Minor Changes

- ecdbd99: Roten får `id` istedenfor `<input>` i `<FileUploader />`. Filopplasteren er en kompleks komponent, og det kan være relevant å lett få taket i alle barna. De får id som er id på rot + suffix: `<input>` har `id-input`, `<label>` har `id-label`, `<button>` har `id-button`.

### Patch Changes

- 6f46253: Oppdaterer og standariserer fokusmarkering på tvers av komponenter. Det blir en dobbel fokusring, en lys og en mørk, slik at den fungerer på både mørke og lyse bakgrunn. Da slipper man å reversere fargen for bedre kontrast.
- ecdbd99: Mer støtte for skjermleser i `<FileUploader />`

## 15.7.1

### Patch Changes

- 450eccf: Markerer alle komponenter som client components

## 15.7.0

### Minor Changes

- 8f038bb: Ny prop `hideFileList` i `<FileUploader />`. Brukes hvis man lager custom filliste og skal skjule den som er i komponenten.

### Patch Changes

- d080d03: Fikser kontrast i `<InputMessage />`
- 86b46dd: Eksporter styling for Grid
- 999ed9e: `layout`-prop pleide å legge til en flex `<div>` i en celle for å styre layout; det er som regel unødvendig.Fjerner div-en for alle varianter av layout unntatt tekst og ikon. Bruker `text-align` direkte på cellen i de andre variantene.
- 821d255: Fikser spacing for `smallScreen` versjon av `<InternalHeader />`, slik at den tar mindre plass.

## 15.6.0

### Minor Changes

- 4112489: Ny komponent: `<Fieldset />`. Brukes til gruppering av inputfelt i skjema. Brukes sammen med `<Legend />`.
- 29d6c04: Nye ikoner: `GuardianIcon` og `PowerOfAttorneyIcon`

### Patch Changes

- 4112489: Fjerner padding fra `<Legend />`.

## 15.5.0

### Minor Changes

- 5075eab: Legger til ny komponent: `<InlineButton/>`. Den ser ut som en lenke og brukes i mengdetekst.
- 12e556f: Automatisk skalering av stiler `headingSans04`-`headingSans08` i `<Heading />`. På skjerm under 600px skal komponenten automatisk bruke en typografistil ett steg mindre. Eksempel: hvis `headingSans08` er valgt skal det automatisk bli `headingSans07` på mindre skjerm. En mer rutinert system blir implementert når vi har semantiske tokens på plass, f.eks. dedikert stil med skalering for <h4> i alle Lovisa-apper.

### Patch Changes

- 9488da4: Fikser språkfeil i DatePicker hvor den tekstlige representasjonen for måned i kalenderen fortsatt brukte språket til nettleseren
- 4bf7732: Fikser at ikon som vises `<Link external />` ikke overlapper med annet innhold

## 15.4.1

### Patch Changes

- ade4158: Justerer spacing i `<Chip />`.
- dfed172: Fikser at museklikk på knapper for å bla i måneder i `<Datepicker />` ikke skal lukke kalender i Safari.
  - Fikser også at museklikk inne i kalenderen ikke lukker den (for alle nettlesere).

- 0147de5: Fikser at `<FileUploader>` sin `accept`-prop kastet feil ved bruk av ESM-bygg.

## 15.4.0

### Minor Changes

- 5cc9092: Støtte for prop `applicationNameHref` som gjør appnavnet til en lenke til hjemmesiden i `<InternalHeader />`.

### Patch Changes

- fe471c1: Fjerner `disabled` prop i `<TimePicker />`, da det er `isDisabled` som er støttet.
- 1270247: Oppdaterer default styling i `<Heading />` for nivåene 2, 3, 4 og 5.
  - Stilen på overskriften vil forandre seg der det brukes default og nivå 2-5, f.eks. `<Heading level={3}>`. Hvis nye default ikke passer må `typogaphyType` prop brukes for å få den ønskede stilen.

- 65f4bbf: Fikser slik at brukeren ikke markerer tekst når de blar i måneder i `<DatePicker />`.

## 15.3.0

### Minor Changes

- d4f4193: Støtte for `smallScreen` i `<Breadcrumbs />` med trunkering av barn og `<OverflowMenu />`.
- c2294b2: Eksporterer følgene types fra `<FileUploader />`: `FileUploaderAccept`, `FileList` og `FileUploaderProps` slik at konsumenter kan importere de i sine løsninger.

### Patch Changes

- d4f4193: Justerer avstander og ikonstørrelse i `<Breadcrumbs />`.

## 15.2.1

### Patch Changes

- f34ba7a: Fikser feil hvor `<OverflowMenu>`, `<Tabs>` og `<Search.AutocompleteWrapper>` blokkerte andre elementer fra å bruke piltastene.
- 1731bf8: Fikser spacing og trykkeflate i `<BackLink />`.

## 15.2.0

### Minor Changes

- dacce3b: Legger til helpSimple-ikon
- 58dabc7: Støtte for `withDragAndDrop` attributt i `<FileUploader />` som viser komponenten uten drop-sone.

### Patch Changes

- 81c559c: Fikser state styling i `<ProgressTacker />`
- c604ef7: Fikser trykkeflaten i `<FavStar />` som er mindre enn den synlige flaten, og animerer bakgrunnsfargen på ikonet.

## 15.1.0

### Minor Changes

- 063ca48: Legger til `strong` variant av `<Tag />` for alle `purpose`. Den har sterkere visuelt uttrykk.

### Patch Changes

- 063ca48: Justerer på avstandene i `<Tag />`
- 063ca48: Endrer farge på ramme i `<Tag />` og `<LocalMessage />` slik at de er like.

## 15.0.1

### Patch Changes

- c2aa1a9: Fikser støtte for `aria-label` og `aria-labelledby` i `<ToggleRadio />`
- ee8bd68: Fikser spacing i `<InternalHeader />`, og skjuler separator hvis hverken navigasjon eller kontekstmeny finnes
- d9e133c: Fikser at Drawer havnet under AppShell sin flytende profilknapp.

## 15.0.0

### Major Changes

- f050214: Legger til X-ikon, sletter Twitter-ikon. Twitter-ikonet skal ikke brukes lenger. Sentrerer også Flickr-ikon.

### Minor Changes

- 672072a: Legger til støtte for `disabled` og `readOnly` i `CheckboxGroup`. Standariserer styling av disse tilstandene på tvers av selection controls.
- de2e4ff: Støtte for `headingLevel` i `EmptyContent`. Grunnet krav for UU skal overskriftsnivået på tittel følge hierarkiet, og konsumenter skal sette det selv når default ikke passer.

### Patch Changes

- 97b57e8: Fjerner `defaultWidth` fra `LocalMessage` da den ikke skal ha hardkodet bredde. Legger på litt padding i innhold for bedre avstand.

## 14.6.1

### Patch Changes

- 413848e: Fikset top spacing for readonly felt
- 4e21f82: Fjernet fokusstyling i read-only inputfelt

## 14.6.0

### Minor Changes

- b249a81: `<InternalHeader>` har fått utseendet justert. Før havnet menypunkter på egen linje, under resten av `<InternalHeader>`-innholdet. Nå ligger alt på samme linje.

### Patch Changes

- d860626: Fikser bug i input og textarea hvor disabled og read-only varianter hadde hover-effekt
- 85d0946: Bump @floating-ui/react-dom til 2.0.8
- d175bd8: Fikser at valgt element i nedtrekksmenyen til Select forsvinner.

## 14.5.1

### Patch Changes

- 0500104: Fikser feil hvor Select sin nedtrekksmeny ikke vistes i Drawer og Modal.
- 56bdad6: Bump @floating-ui/react fra 2.0.5 til 2.0.6

## 14.5.0

### Minor Changes

- 65eeeb2: Legger til støtte for å bruke `children` istedenfor `text`-prop'en i `<Tag>`. Dette gjøres for å være mer konsistent i bruk med våre andre komponentener. `children` tar prioritet over `text`.
- abfae62: Legger til mulighet for å få `<Tag>` med ikon. Vi har valgt ut de riktige ikonene til hver tag-"purpose" så du trenger ikke tenke på mer enn om du vil vise ikonet. Du gjør ikonet synlig gjennom den nye `withIcon`-prop'en.

### Patch Changes

- 4c751f1: Bedre fokusmarkering på `<Card>`.
- 546edf8: Fikser bug i byggepipeline som førte til at "tomme" pakker ble publisert
- Updated dependencies [546edf8]
  - @norges-domstoler/dds-design-tokens@4.0.2

## 14.4.0

### Minor Changes

- 032fab6: Ny komponent `<FavStar>`, som kan brukes for favorisering

### Patch Changes

- 67ac145: Fikset en styling feil som gjorde at `<DatePicker>` med label var `1px` lavere enn `<TextInput>`.
- Updated dependencies [8d85f05]
  - @norges-domstoler/dds-design-tokens@4.0.1

## 14.3.1

### Patch Changes

- 71b5649: Fikser bug i `<Select>` hvor nedtrekksmenyen ble skjult om den gikk utenfor forelder med `overflow: hidden`

## 14.3.0

### Minor Changes

- a0f9d17: Legger til støtte for å enklere overstyre bredden på `<DatePicker>` og `<TimePicker>` gjennom ny `width`-prop. Denne fungerer likt som på den gamle `<Datepicker>`-komponenten.
- 1e8ef24: Bedre defaults for `<Table.Row>` og `<Table.Cell>` sine `type`-props. Nå er default verdi `"head"` når de er brukt inne i en `<Table.Head>`, og `"body"`/`"data"` ellers. Dette vil for de fleste bety at det ikke lenger er nødvendig å forholde seg til `type`-propen i disse komponentene. Har du en litt mer kompleks tabell hvor header-celler ikke nødvendigvis er brukt inne i en `<Table.Head>`-komponent, kan du fortsatt sette `type`-propen til `"head"` for å få riktig styling.

## 14.2.0

### Minor Changes

- d2233d5: Legger til util-funksjonene `nativeDateToCalendarDate`, `nativeDateToTime` og `calendarDateToNativeDate` for å løse problemer folk hadde med transformeringsfunksjonene som kom ut sammen med den nye `DatePicker`-en. De andre funksjonene ga `DateValue`, som ikke er støttet av `DatePicker`. Den krever `CalendarDate` som `value`.

## 14.1.0

### Minor Changes

- 74b19ad: Legger til støtte for å styre bredden til Tabs gjennom en ny `width`-prop på `<Tab>`-komponenten. Her er det støtte for alle de samme enhetene som du ville brukt i `grid-template-columns`. Default verdi er som før, `1fr`.

  Eksempel:

  ```jsx
  <Tabs>
    <TabList>
      <Tab width="max-content">Tab 1</Tab>
      <Tab width="8rem">Tab 2</Tab>
      <Tab width="1fr">Tab 3</Tab>
    </TabList>
    <TabPanels>...</TabPanels>
  </Tabs>
  ```

### Patch Changes

- 2321638: Fikser bug med Time- og DatePicker hvor style-prop ikke fungerte

## 14.0.0

### Major Changes

- 40c538c: Oppgrader `@norges-domstoler/dds-design-tokens` til versjon 4
- e14504d: Ny `<DatePicker>`-komponent som erstatter den gamle `<Datepicker>`-komponenten.
  Se [migreringsguide](https://design.domstol.no/987b33f71/p/886994-v13-til-v14) for mer informasjon.

### Minor Changes

- 177c7d2: Ny `<TimePicker>`-komponent! I den gamle datovelgeren så var det støtte for å plukke både tid og dato sammen, noe som ikke er støttet i den nye datovelgeren. Vi anbefaler istedet å separere dato- og tidsvelging og vi introduserer derfor denne tidsvelgeren. Likt som i `<DatePicker>` så bruker denne komponenten også Adobe sin `@internationalized/date`, så husk å legge til en avhengighet til den når du oppdaterer.

### Patch Changes

- 56a8638: Fikse bug med Feedback-komponenten hvor det valgfrie kommentarfeltet som dukker opp ble midtstilt.
- 70d2961: Fikse bug med AppShell sin meny, hvor lenkene i menyen hadde hover-effekt kun på teksten, ikke hele elementet.
- fa2a848: Bump @floating-ui/react-dom til 2.0.5
- Updated dependencies [cc6cbc7]
  - @norges-domstoler/dds-design-tokens@4.0.0

## 13.13.0

### Minor Changes

- 0193878: Legge til Flickr-ikon.

## 13.12.0

### Minor Changes

- 0541191: Legg til støtte for egendefinert tittel i AppShell

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
