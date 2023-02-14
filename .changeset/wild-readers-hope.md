---
"@norges-domstoler/dds-components": major
---

## Breaking change

### Hva er endringen?

Gjør `loading`-variant av knapp disabled.

### Hvorfor gjøres endringen?

Denne endringen gjøres for å unngå at handlinger skjer flere ganger.

### Hvordan kan jeg oppdatere?

Endringen krever ingen kodenedringer, men vil potensielt oppleves annerledes for noen brukere da ytterligere klikk på knapper som
fører til asynkrone handlinger vil bli ignorert.
Hvis du mot formoding vil at knappen skal fortsette å ta imot trykk fra bruker så anbefaler vi å heller ta i bruk den normale varianten av knappen.
