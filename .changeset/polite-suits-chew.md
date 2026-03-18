---
'@norges-domstoler/dds-components': minor
---

Støtte for intern visning av status på opplasting og støtte for gjenntatt oplastning ved feil i `<FileUploader>`. Dette løser også bugen der komponenten viste 'success'-status så lenge filen var gyldig. Komponenter støtter nye props som brukes sammen:

- `fileStatusMap` - gjør det mulig å sende inn status på opplasting av hver fil, slik at det kan vises i fillisten.
- `deriveId` - funksjon som genererer id for hver fil i `fileStatusMap`.
- `onRetry` - funksjon som lar brukeren prøve å laste opp filen på nytt ved status `'error'`.
