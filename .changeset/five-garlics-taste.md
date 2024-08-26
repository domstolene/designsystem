---
'@norges-domstoler/dds-components': major
---

Endrer navn på props i `<InternalHeader>`: `userProps` til `user`, `navigationElements` til `navItems` og `contextMenuElements` til `contextMenuItems`. Dette standardiserer navngiginv på tvers av komponenter.

I tillegg endrer vi de samme props; de tar inn `children` istedenfor `title` eller `name` for å vise tekst i elementer i menyen og lenker. På denne måten følger props samme standard som andre komponenter.

```jsx
//Før
const items = [
  {
    title: 'Sekundær handling',
    onClick: () => null,
  },
];

const user = [
  {
    name: 'Navn Navnesen',
    href: '/',
  },
];

//Etter
const items = [
  {
    children: 'Sekundær handling',
    onClick: () => null,
  },
];
const user = [
  {
    children: 'Navn Navnesen',
    href: '/',
  },
];
```
