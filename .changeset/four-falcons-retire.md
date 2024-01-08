---
'@norges-domstoler/dds-components': minor
---

Ny `<TimePicker>`-komponent! I den gamle datovelgeren så var det støtte for å plukke både tid og dato sammen, noe som ikke er støttet i den nye datovelgeren. Vi anbefaler istedet å separere dato- og tidsvelging og vi introduserer derfor denne tidsvelgeren. Likt som i `<DatePicker>` så bruker denne komponenten også Adobe sin `@internationalized/date`, så husk å legge til en avhengighet til den når du oppdaterer.
