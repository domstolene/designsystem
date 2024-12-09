---
'@norges-domstoler/dds-components': minor
---

`<Drawer>`, `<Modal>` og dropdown i `<Select>` blir rendret i `<div>` generert av `<ThemeProvider>` som default, istedenfor `document.body`, grunnet theming-endringer og utfordringer rundt SSR. Se detaljer i [migreringsguiden](https://design.domstol.no/987b33f71/p/233a8b-v17-til-v18).
