---
'@norges-domstoler/dds-components': major
---

Potensielt breaking i `<OverflowMenu>`:

- Fjerner støtte for `aria-disabled`, da den er relevant kun internt ved bruk av `loading` tilstand. Konsumentene har ikke brukt `aria-disabled`, men lokale typings kan være nødvendige å oppdatere.
- Fjerner støtte for `as` prop i alle delkomponenter for menyelementer i `<OverflowMenu>`; den skulle brukes kun intern og ikke bli eksponert til konsumentene.
