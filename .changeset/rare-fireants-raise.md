---
'@norges-domstoler/dds-components': minor
---

Dropdown i `<Select>` blir rendret som et barn av `<div>`-en som returnerer selve komponenten, istedenfor `body`. På denne måten slipper vi å forholde oss til problemer med SSR, og den oppfører seg i tråd med andre komponenter som utløser en flate.
