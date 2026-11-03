---
'@norges-domstoler/dds-components': patch
---

Fikser UU-bug der `<RadioButton>` fikk `aria-readonly` attributt ved bruk av `raedOnly` prop. `aria-readonly` er ikke støttet på `<input type="radio">`, det settes `aria-disabled` istedet.
