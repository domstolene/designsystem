# @norges-domstoler/dds-components

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
