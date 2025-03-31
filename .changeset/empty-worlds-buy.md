---
'@norges-domstoler/dds-components': minor
---

Fikser bug der `htmlProps`-prop ikke ble satt og setter standardverdien `type='button'` i `<Tab>`. På denne måten vil ikke bytting mellom faner trigge submit hvis `<Tabs>` ligger i `<form>`.
