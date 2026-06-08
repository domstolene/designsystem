---
'@norges-domstoler/dds-components': patch
---

Endringer i styling av kalender i `<DatePicker>` ved props `minValue` og `maxValue`:

- Cellene med datoer utenfor rekkevidde er krysset ut og deaktivert.
- Knapper for å bla i måneder forsvinner hvis neste/forrige måned er utenfor rekkevidde.
- Oppdaterer docs: `minValue` og `maxValue` brukes ved logiske begrensninger, som timebestilling tilbake i tid og dødsdato fram i tid; ved vilkårlige begrensninger brukes `isDateUnavailable` istedet, slik at brukeren kan fortsatt bla i utilgjengelige datoer. Detaljer i [tekniske docs](https://design.domstol.no/987b33f71/p/73c4d3-datepicker/b/58909e).
