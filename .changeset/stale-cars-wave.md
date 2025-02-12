---
'@norges-domstoler/dds-components': major
---

Revamp av `<Drawer>`.

- Implementerer kontrollert tilstand. `<DrawerGroup>` kan nå ta inn `isOpen` og `setIsOpen` props for bli kontrollert av konsumenten; hvis de ikke settes brukes intern håndtering. Legger også til `isInitiallyOpen`, som forteller om `<Drawer>` vises på første render.
- Fjerner props fra `<Drawer>` som ble satt av forelder: `isOpen`, `triggerRef`, `onClose`, `id` og implementerer React Context istedet. Vi unngår dermed rotet med props konsumenter ikke "får lov" til å sette. `<DrawerGroup>` er dermed obigatorisk å bruke.
