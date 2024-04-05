---
'@norges-domstoler/dds-components': major
---

> **TLDR;** Fjern bruk av `/dist/styles/fontStyles.css` og `/dist/styles/selection.css` og erstatt med `/index.css`.

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
