---
'@norges-domstoler/dds-components': major
---

Fjerner støtte for tekstfarger i camelCase for `color` prop i `<Icon>`, `<Spinner>` og alle typografikomponenter. Vi standardiserer bruk av kebab-case for CSS-props istedet. Denne endringer gjør at aksisterende verdier i camelCase ikke gir feil, men vil ikke referere til farger fra Elsa i CSS. Bruk av camelCase vil dermed knekke kun visuelt og må gåes gjennom manuelt. Se detaljer i [migreringsguide v21 til v22](https://design.domstol.no/987b33f71/p/16deeb-v21-til-v22).
