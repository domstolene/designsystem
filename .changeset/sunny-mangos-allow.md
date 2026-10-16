---
'@norges-domstoler/dds-components': patch
---

Fikset en feil der verdier sendt til CSS-props i layout-primitiver (f.eks. Box og HStack) kunne bli parset feil som design tokens dersom verdien hadde samme navn som en token.
