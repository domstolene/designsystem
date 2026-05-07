---
'@norges-domstoler/dds-components': major
---

Hook `useOnClickOutside` er endret til å ta imot React refs (`type RefObject`) i stedet for direkte DOM-elementer (`type HTMLElement`). Detaljer i [migreringsguiden v22 til v23](https://design.domstol.no/987b33f71/p/08e259-v-22-til-v23).

Bruk før:

```tsx
useOnClickOutside(ref.current, handler);
// med array
useOnClickOutside([ref.current, ref2.current], handler);
```

Bruk nå:

```tsx
useOnClickOutside(ref, handler);
// med array
useOnClickOutside([ref, ref2], handler);
```
