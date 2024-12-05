---
'@norges-domstoler/dds-components': patch
---

Fikser `<Spinner>`, `<Icon>` og helper `<AnimatedChevronUpDown>` slik at props `height` og `width` setter høyde og bredde i CSS istedenfor HTML. På denne måten kan man bruke ddsTokens i CSS og ikke bare TS.
