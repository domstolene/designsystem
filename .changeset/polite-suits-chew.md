---
'@norges-domstoler/dds-components': minor
---

Intern visning av status på opplasting i `<FileUploader>`. Komponenter støtter nå props `fileStatusMap` og `deriveId` som gjør det mulig å sende inn status på hver fil, slik at det kan vises i fillisten. I tillegg kan man sende inn feilmelding ved ikke vellyket opplasting. Det løser også bugen der komponenten viste 'success'-status selv om filen ikke ble lastet opp grunnet feil.
