---
'@norges-domstoler/dds-components': major
---

Revamp av `<OverflowMenu>`.

- Fjerner prop `onToggle` i `<OverflowMenuGroup>`. Komponenten blir standardisert og bruke kun `onClose` og `onOpen`.
- Implementerer kontrollert tilstand. `<OverflowMenuGroup>` kan nå ta inn `isOpen` og `setIsOpen` props for bli kontrollert av konsumenten; hvis de ikke settes brukes intern håndtering. Legger også til `isInitiallyOpen`, som forteller om `<OverflowMenu>` vises på første render.
- Fjerner props fra `<OverflowMenu>` som ble satt av forelder: `isOpen`, `anchorRef`, `onClose`, `onToggle`, `id` og implementerer React Context istedet. Vi unngår dermed rotet med props konsumenter ikke "får lov" til å sette. `<OverflowMenuGroup>` er dermed obigatorisk å bruke.
