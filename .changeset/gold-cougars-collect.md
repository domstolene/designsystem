---
'@norges-domstoler/dds-components': major
---

Revamp av `<Popover>`-komponenten.

- Fjerner props `onCloseButtonClick` og `onTriggerClick`, legger til `onOpen` og `onClose` i `<PopoverGroup>`. På denne måten vil konsumentene kunne legge til callbacks basert på status på `<Popover>` uten å henge seg oppi detaljer rundt implementasjonen.
- Implementerer kontrollert tilstand. `<PopoverGroup>` kan nå ta inn `isOpen` og `setIsOpen` for bli kontrollert av konsumenten; hvis de ikke settes brukes intern håndtering. Legger også til `isInitiallyOpen`, som forteller om `<Popover>` vises på første render. Propen var tidligere kalt `isOpen`, så nå skiller vi mellom initial og kontrollert tilstand.
- Bytter navn på `title` prop til `header` i `<Popover>`. Det er mer riktig, og i tillegg unngår vi forvirring der en konsument kan tro at vi mener native HTML `title`.
- Fjerner props fra `<Popover>` som ble satt av forelder: `isOpen`, `anchorElement`, `onClose`, og implementerer React Context istedet. Vi unngår dermed rotet med props konsumenter ikke "får lov" til å sette.
- Fjerner `onCloseButtonClick` fra `<Popover>`. Vi dropper støtte for callback på så detaljert oppførsel; det erstattes med `onOpen` og `onClose` i `<PopoverGroup>`.
