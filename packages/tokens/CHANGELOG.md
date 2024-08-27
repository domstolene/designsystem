# @norges-domstoler/dds-design-tokens

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
