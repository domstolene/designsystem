---
'@norges-domstoler/dds-components': patch
---

Fjerner støtte for native HTML `<input>`-attributter i `type NativeSelectProps`. Oppførselen er den samme, men det var problemer med typings i props som `onChange`, da slik prop var både av type `ChangeEventHandler<HTMLInputElement>` og `ChangeEventHandler<HTMLSelectElement>`.
