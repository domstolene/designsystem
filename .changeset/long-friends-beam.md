---
'@norges-domstoler/dds-components': major
---

Potensielt breaking i `<Toggle>`: props `className` og `style` påvirker nå rotelementet , ikke `<input>`. Denne endringen kan være breaking med tanke på styling hos konsumentene.
