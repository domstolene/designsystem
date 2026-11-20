---
'@norges-domstoler/dds-components': patch
---

Fikser feil i `<Tooltip>` der timeout og `scroll`-lytter ikke ble ryddet opp ved unmount (det kunne gi minnelekkasjer eller feil i tester). `<Tooltip keepMounted={false}>` lukkes nå også ved scrolling.
