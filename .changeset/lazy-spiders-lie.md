---
"@norges-domstoler/dds-components": patch
---

`layout`-prop pleide å legge til en flex `<div>` i en celle for å styre layout; det er som regel unødvendig.Fjerner div-en for alle varianter av layout unntatt tekst og ikon. Bruker `text-align` direkte på cellen i de andre variantene.
