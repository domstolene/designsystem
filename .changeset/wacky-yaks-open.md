---
'@norges-domstoler/dds-components': patch
---

Fikser feil håndtering av roving fokus i komponenter som bruker det, samt oppdaterer docs. Endret til riktig oppførsel:

- `<Tabs>`: implementasjon med initiell fokus på hele fanelisten fulgte ikke standard WAI-ARIA APG mønster. Skjermleser kunne dermed ikke lese informasjonen til riktig tidspunkt. Endret slik at `Tab` tast gir fokus til første elementet i fanelisten istedet.
- `<OverflowMenu>`: endrer til at når menyknappen trykkes og menyen åpnes får første elementet fokus med en gang. Dette følger standard WAI-ARIA APG.
- `<SearchSuggestions>`: fikser roller slik at skjermleser kan bytte fra browse-modus til fokus-modus og forslagene kan velges. Fikser også at fokus returneres til inputfeltet ved `Tab+Shift`, og at et forslag blir valgt og fokus returnert til inputfeltet ved `Space`.
