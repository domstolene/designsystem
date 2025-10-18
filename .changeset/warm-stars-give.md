---
'@norges-domstoler/dds-components': patch
---

- Retter `BaseComponentProps` slik at props definert på komponenter overstyrer, og ikke kombineres med, props fra underliggende element; dette gir riktig signatur for f.eks. `CardExpandable.onChange`.
