---
'@norges-domstoler/dds-components': minor
---

Utvider `color` prop i `<Icon>` til å støtte semantiske fargetokens for branding. Den nye typen er:

```ts
type IconColor =
  // ...samme farger som i TextColor...
  // Nye:
  | 'brand-primary-default'
  | 'brand-primary-strong'
  | 'brand-primary-medium'
  | 'brand-primary-subtle'
  | 'brand-secondary-default'
  | 'brand-secondary-strong'
  | 'brand-secondary-medium'
  | 'brand-secondary-subtle'
  | 'brand-tertiary-default'
  | 'brand-tertiary-strong'
  | 'brand-tertiary-medium'
  | 'brand-tertiary-subtle';
```
