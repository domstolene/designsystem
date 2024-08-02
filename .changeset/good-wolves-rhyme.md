---
'@norges-domstoler/dds-design-tokens': major
---

Fjerner `fontPackages.js`, `ddsBaseTokens.js`, `ddsReferenceTokens.js`, `colors.css`, `borderRadius.css`, `breakpoints.css`, `font.css`, `grid.css`, `iconSize.css`, `outershadow.css`, `spacing.css`, `colors.scss`, `borderRadius.scss`, `breakpoints.scss`, `font.scss`, `grid.scss`, `iconSize.scss`, `outershadow.scss`, `spacing.scss` fra eksporterte tokens; beholder kun `ddsTokens.js`, `ddsTokens.css`,og `ddsTokens.scss`. På denne måten er strukturen lettere å vedlikeholde, og konsumenter slipper å forholde seg til flere filer og implementasjoner. Se detaljer i [migreringsguiden](https://design.domstol.no/987b33f71/p/36dbb9-v5-til-v6).
