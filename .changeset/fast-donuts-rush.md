---
'@norges-domstoler/development-utils': major
'@norges-domstoler/dds-components': major
---

Migrerer bundler fra `tsup` til `tsdown`. Som konsekvens vil navn på CSS-klassene i `index.css` endre seg. Disse CSS-klassene er interne og bør ikke refereres til direkte; hvis det likevel gjøres i din løsning se [dds-components migreringsguiden v23 til v24](https://design.domstol.no/987b33f71/p/04eb89-v23-til-v24).
