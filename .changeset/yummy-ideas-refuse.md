---
'@norges-domstoler/dds-components': patch
---

`<FileUploader>` returnerer forhåndsvisningslenker for opplastede filer istedenfor statisk filnavn. Hvis filen kommer fra serveren er brukes `url` prop fra fila som lenke. Hvis filen ble lastet opp av brukeren genereres midlertidig URL i klienten.
