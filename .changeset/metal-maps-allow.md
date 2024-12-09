---
'@norges-domstoler/dds-components': major
---

Implementerer theming med to temaer: Core (for fagsystemer o.l.) og Public (for nettsider som domstol.no og enkelte innloggingssystemer som aktørportalen). Grunnet denne endringen er det nødvendig å wrappe din applikasjon i ny komponent `<ThemeProvider>` for å bruke Elsa komponenter. Se detaljer i [migreringsguiden](https://design.domstol.no/987b33f71/p/233a8b-v17-til-v18).
