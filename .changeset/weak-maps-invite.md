---
'@norges-domstoler/dds-components': minor
---

Bedre defaults for `<Table.Row>` og `<Table.Cell>` sine `type`-props. Nå er default verdi `"head"` når de er brukt inne i en `<Table.Head>`, og `"body"`/`"data"` ellers. Dette vil for de fleste bety at det ikke lenger er nødvendig å forholde seg til `type`-propen i disse komponentene. Har du en litt mer kompleks tabell hvor header-celler ikke nødvendigvis er brukt inne i en `<Table.Head>`-komponent, kan du fortsatt sette `type`-propen til `"head"` for å få riktig styling.
