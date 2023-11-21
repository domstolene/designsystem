---
'@norges-domstoler/dds-components': patch
'@norges-domstoler/dds-typography': patch
'@norges-domstoler/dds-icons': patch
'@norges-domstoler/dds-core': patch
'@norges-domstoler/dds-form': patch
---

Slutter å videresende styling-props til DOM-en. Tidligere ble alle styling props vi brukte i styled-components videresendt til DOM-en. Disse blir nå filtrert ut for å unngå å ha ugyldige props på DOM-elementer.
