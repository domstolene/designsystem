---
"@norges-domstoler/dds-components": major
---

Fjern non-clickable versjon av ProgressTracker.
Dette gjøres for at ProgressTracker skal ha mer konsistent oppførsel påtvers av applikasjoner.
Trenger du at et steg ikke skal væreinteragerbart anbefaler vi å heller bruke `disabled`-prop.

De aller fleste vil bare trenge å fjerne `clickable`-proppen fra ProgressTracker-komponenten for at den skal fungere som før.
