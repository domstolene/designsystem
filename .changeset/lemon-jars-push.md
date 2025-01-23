---
'@norges-domstoler/dds-components': minor
---

Fikser bug der `<Select>` ikke eksporterte `JSX.element`, samt bug der `ref` ikke var støttet. Eksponerer `type SelectForwardRefType<Option, IsMulti extends boolean>` for å sette type ved bruk av `useRef()` (valgfritt).
