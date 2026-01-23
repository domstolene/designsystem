# @norges-domstoler/dds-design-tokens

## 9.0.0

(2026-01-23)

### Major Changes

- 826c597: Endringer i typografistilene `dds-font-body-<størrelse>`:
  - De splittes i `dds-font-body-short-<størrelse>` og `dds-font-body-long-<størrelse>`. `short` varianten er ment til bruk for tekster som ikke tar flere linjer, som knappetekst, tekst i inputfelt o.l. `long` er ment for artikler og andre tekster som kan være lengre.

- d34fa2a: Implementerer dark mode og splitter alle temaer i variantene `light` og `dark`. Dette kan føre til uforutsigbare endringer i farger hvis design tokens ikke brukes riktig fra før av. Detaljer i [migreringsguiden v8 til v9](https://design.domstol.no/987b33f71/p/236941-v8-til-v9).
- 3a709ab: Endringer i design tokens for shadows. Detaljer i [migreringsguiden v8 til v9](https://design.domstol.no/987b33f71/p/236941-v8-til-v9).
- 826c597: Endrer navn på alle `dds-icon-size` design tokens til `dds-size-icon` slik at de følger standarden for navngiving, f.eks. `dds-size-icon-small`.

### Minor Changes

- d34fa2a: Nye design tokens:
  - `dds-color-text-on-primary-default`; Brukes på `dds-color-brand-primary-default`.
  - `dds-color-text-on-primary-subtle`; Brukes på `dds-color-brand-primary-subtle`.
  - `dds-color-text-on-primary-medium`; Brukes på `dds-color-brand-primary-medium`.
  - `dds-color-text-on-primary-strong`; Brukes på `dds-color-brand-primary-strong`.
  - `dds-color-text-on-secondary-default`; Brukes på `dds-color-brand-secondary-default`.
  - `dds-color-text-on-secondary-subtle`; Brukes på `dds-color-brand-secondary-subtle`.
  - `dds-color-text-on-secondary-medium`; Brukes på `dds-color-brand-secondary-medium`.
  - `dds-color-text-on-secondary-strong`; Brukes på `dds-color-brand-secondary-strong`.
  - `dds-color-text-on-tertiary-default`; Brukes på `dds-color-brand-tertiary-default`.
  - `dds-color-text-on-tertiary-subtle`; Brukes på `dds-color-brand-tertiary-subtle`.
  - `dds-color-text-on-tertiary-medium`; Brukes på `dds-color-brand-tertiary-medium`.
  - `dds-color-text-on-tertiary-strong`; Brukes på `dds-color-brand-tertiary-strong`.
  - `dds-color-text-on-data-default`; Brukes på alle `data`-fargene with `default` mod.
  - `dds-color-text-on-data-subtle`; Brukes på alle `data`-fargene with `subtle` mod.

- 826c597: Ny token: `dds-size-icon-component`. Brukes når ikonet står ved siden av kort tekst typisk i en komponent, som knapp eller inpputfelt. Verdien er relatert til tekststørrelsen.
- 9f6bc86: Justerer på fargene for datavisualisering. Det anbefales å dobbeltsjekke at fargene brukes riktig samt ser riktig ut i kontekst hos konsumentene.

### Patch Changes

- a97cbd6: Tilpasser verdier i design tokens `dds-color-text-danger`, `dds-color-text-requiredfield` og `dds-color-icon-danger` i dark mode for bedre kontrast.
- 826c597: Justerer på verdier i base design tokens `dds-font-lineheight` og endrer deres bruk i Elsa: `x1` brukes på mengetekst og artikler, mens `x2` brukes i komponenter og overskrifter. Kan påvirke spacing hos konsumenten på en uforutsigbar måte.
- 4dcf1c3: Utbedrer farge i design tokens `dds-border-default`, `-sublte` og `-danger` i core-dark og public-dark.

## 8.0.2

### Patch Changes

- 064033f: Endringer i skalering av fontstørrelse på mindre skjermer.
  - Core tema: Kun xxlarge som blir skalert ned.
  - Public tema: xxlarge og xlarge blir skalert ned.

## 8.0.1

### Patch Changes

- 30b40cc: Justerer på basetoken `dds-color-base-gray-100` for bedre kontrast; Påvirker semantisk token `dds-color-surface-medium`.

## 8.0.0

### Major Changes

- 2ad29a8: Endringer i palett for tertiary-fargene. Disse kan se helt annerledes ut og bruken må sjekkes. Se detaljer i [migreringsguiden v7 til v8](https://design.domstol.no/987b33f71/p/063d12-v7-til-v8).

### Minor Changes

- 2ad29a8: Nye farger for detavisualisering, både semantiske og base som ka brukes fritt. Se detaljer i [migreringsguiden v7 til v8](https://design.domstol.no/987b33f71/p/063d12-v7-til-v8).

### Patch Changes

- 2ad29a8: Små justeringer på en del grå fargetokens, som `dds-color-bg-subtle`, `dds-color-surface-medium` m.m., for bedre kontraster.
- 2ad29a8: Metning på enkelte farger justeres.
- 03aac33: Justerer på token for linjehøyde i lister fra 2.5 til 2.

## 7.3.0

### Minor Changes

- ef5e73e: Legger til token for semi-bold font weight.

### Patch Changes

- 37be771: Justert typografistiler for public theme heading size medium-xxsmall.
- 9997ed1: Fjerner ubrukte font size tokens.

## 7.2.0

### Minor Changes

- bc8eb1a: Ny tokentype og nye tokens: z-index. Brukes på elementer som legger seg over innhold. Med tokens definerer vi hierarki for når slike elementer dukker opp samtidig. Se oversikten i [Elsa Storybook](https://domstolene.github.io/designsystem/?path=/story/dds-design-tokens-tokens--z-index).

## 7.1.0

### Minor Changes

- 99688a9: Legger til to nye semantiske tokens for farger: `dds-color-text-danger` og `dds-color-icon-danger`.

## 7.0.0

### Major Changes

- 6232a2a: Fjerner base-tokens for farger og border-radius; bruk semantiske tokens hvis du ikke har migrert enda. Se detaljer i [migreringsguiden](https://design.domstol.no/987b33f71/p/039508-v6-til-v7).
- 8f004b0: Fjerner JS-konstanter for letter spacing som returneret bare tall. De er ikke veldig nyttige og det holder med originale verdier som er i `em`.
- 6232a2a: Endrer typografi-tokens til nye semantiske; de bruker nå T-skjortestørrelser istedenfor tall for å beskrive fontstørrelse, og utvalget er mer begrenset per tema. Se detaljer i [migreringsguiden](https://design.domstol.no/987b33f71/p/039508-v6-til-v7).
- 6232a2a: Endrer systemet på tokens, slik at de kommer i to temaer: Core (for fagsystemer o.l.) og Public (for nettsider som domstol.no og enkelte innloggingssystemer som Aktørportalen, Pressetjenesten m.m).Det påvirker spesielt hvordan TS-tokens brukes. Se detaljer i [migreringsguiden](https://design.domstol.no/987b33f71/p/039508-v6-til-v7).

### Minor Changes

- 6232a2a: Setter fallback font direkte i `--dds-font-family-sans` token; Den har verdi `'IBM Plex Sans', Arial, sans-serif`. Dette forplanter seg i alle typografi tokens som tilsvarer CSS `font` rule.
- 6232a2a: Endrer verdier til eksporterte SCSS-variabler til å peke til CSS-variabler. Se detaljer i [migreringsguiden](https://design.domstol.no/987b33f71/p/039508-v6-til-v7).

### Patch Changes

- 8ebc554: Endrer fontstørrelse i enkelte font tokens til `clamp()` funksjon. Se detaljer i [migreringsguiden](https://design.domstol.no/987b33f71/p/039508-v6-til-v7).

## 6.0.1

### Patch Changes

- 6da57b7: Fikser et problem hvor CommonJS-filer ble brukt ved ESModule-import.

## 6.0.0

### Major Changes

- d9663cb: Navn på tokens i ddsTokens.ts begynner nå med liten forbokstav, altså `dds` istedenfor `Dds`. Se detaljer i [migreringsguiden](https://design.domstol.no/987b33f71/p/36dbb9-v5-til-v6).
- d9663cb: Fjerner typografi-tokens irrelevante for utvikling: `text-case`, `text-decoration`, `paragraph-indent` og `font-stretch`. Se detaljer i [migreringsguiden](https://design.domstol.no/987b33f71/p/36dbb9-v5-til-v6).
- d9663cb: Skygge-tokens har ikke `onlight` suffiks i navnet lenger. Se detaljer i [migreringsguiden](https://design.domstol.no/987b33f71/p/36dbb9-v5-til-v6).
- 04b222c: Fjerner `fontPackages.js`, `ddsBaseTokens.js`, `ddsReferenceTokens.js`, `colors.css`, `borderRadius.css`, `breakpoints.css`, `font.css`, `grid.css`, `iconSize.css`, `outershadow.css`, `spacing.css`, `colors.scss`, `borderRadius.scss`, `breakpoints.scss`, `font.scss`, `grid.scss`, `iconSize.scss`, `outershadow.scss`, `spacing.scss` fra eksporterte tokens; beholder kun `ddsTokens.js`, `ddsTokens.css`,og `ddsTokens.scss`. På denne måten er strukturen lettere å vedlikeholde, og konsumenter slipper å forholde seg til flere filer og implementasjoner. Se detaljer i [migreringsguiden](https://design.domstol.no/987b33f71/p/36dbb9-v5-til-v6).
- d9663cb: Vi endrer hvordan vi bruker og bygger typografi-tokens. Før var alle fontrelaterte egenskaper som fontstørrelse og vekt tilgjengelige som individuelle tokens. Nå følger vi CSS font shorthand property og setter sammen tokens per typografistil. I samme slengen går vi fra størrelser i `px` til `rem`. Tokens som ikke inngår shorthand, som letter-spacing, er uforandret. Se detaljer i [migreringsguiden](https://design.domstol.no/987b33f71/p/36dbb9-v5-til-v6).

  ```css
  /* Før */
  --dds-font-heading-sans-01-font-size: 16px;
  --dds-font-heading-sans-01-font-weight: 600;
  --dds-font-heading-sans-01-font-family: 'IBM Plex Sans';
  --dds-font-heading-sans-01-line-height: 1.5em;

  /* Etter */
  --dds-font-heading-sans-01: 600 1rem/1.5 'IBM Plex Sans';
  ```

### Minor Changes

- 303055e: Legger til semantiske border-radius tokens. Se detaljer i migreringsguiden.
- 24dd134: Ny semantisk fargetoken: `dds-color-text-action-visited-on-inverse`. Brukes til besøkte lenker på reversert bakgrunn.

## 5.1.0

### Minor Changes

- 2cdc84f: Ny token for "skeleton" bakgrunn: `dds-color-surface-skeleton`.

### Patch Changes

- 25b1306: Endrer farge for `dds-color-primary-brand-medium` til en som er mørkere.

## 5.0.0

### Major Changes

- 62882b4: Endrer syntaks på navngiving av tokens med bokstav ved siden av tall i CSS og SCSS. Før hadde vi alltid bindestrek mellom bokstav og tall, f.eks. `…gray-9`, `…spacing-x-0-5`. I stedet skal vi ha `…gray9` og `…spacing-x0-5`, slik at det blir likt Figma i de tilfellene der det ikke finnes et tegn mellom bokstav og tall.
- 62882b4: Legger til semantiske tokens for farger. De refererer til basetokens og bruker semantisk navngiving. I neste major versjon blir basetokens for farger fjernet. Se detaljer i [migreringsguiden](https://design.domstol.no/987b33f71/p/89864a-v4-til-v5).
- 62882b4: Legger til ny måte å importere tokens på fra `dds-design-tokens`. Alle tokens kan importeres fra felles fil per språk: `ddsTokens.css/ts/scss`. Gamle måten med å importere kategoriserte tokens fra f.eks. `colors.css` blir fjernet i neste major versjon.
- 62882b4: Fjerner innershadow-tokens, da de ikke brukes.
- 62882b4: - Fjerner borders-tokens, da de er utdaterte og brukes ikke. For farger bruk semantiske fargetokens.
- 62882b4: Fjerner tokens for padding-top i headings som var på formatet `spacing-dds-spacing-padding-top-heading-sans-01-top`. Erstatter de med én token med relativ verdi, felles for alle overskrifter: `dds-spacing-padding-top-heading`.
- 62882b4: Simplifisering i navngiving på enkelte tokentyper. Tokens som hadde prefiks før "dds" har den ikke lenger. Det gjelder "spacing", "sizes" og "radii". Border radius-tokens har ikke mer tekst i navnet etter tallet. Se detaljer i [migreringsguiden](https://design.domstol.no/987b33f71/p/89864a-v4-til-v5).
- 6efecde: Oppdaterer semantiske fargetokens for notifikasjoner. Istedenfor `icon-notification` har vi `text-on-notification` og `surface-notification`.
- 62882b4: Fjerner tokens for border radius i individuelle hjørner vi ikke bruker, som `radii-dds-border-radius-1-radii-top-left`.

### Minor Changes

- 0eceeea: Legger til semantiske fargetokens for strong-variant av alle brand-farger.

## 4.0.2

### Patch Changes

- 546edf8: Fikser bug i byggepipeline som førte til at "tomme" pakker ble publisert

## 4.0.1

### Patch Changes

- 8d85f05: Det er blitt gjort små justeringer på interactive-fargene for å få bedre kontrast mellom seg. Noen av fargekombinasjonene som var brukt hadde ikke tilstrekkelig kontrast til å oppfylle kontrastkrav.

## 4.0.0

### Major Changes

- cc6cbc7: Vi har slått sammen local og layout spacing tokens til å være en og samme greie.
  Se [migreringsguide](https://design.domstol.no/987b33f71/p/612e32-v3-til-v4) for mer info.

## 3.0.3

### Patch Changes

- f21593bb: Bruker mer spesifikk versjon av interne dependencies

## 3.0.2

### Patch Changes

- 7cb301f8: Forbedre typene til font packages
- 5ca91f84: Diverse småfikser oppdaget etter strengere eslint-regler
