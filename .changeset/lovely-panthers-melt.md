---
'@norges-domstoler/dds-components': major
---

`secondaryOptions` prop i `<SplitButton>` tar inn `children` istedenfor `title` for å vise tekst i knapper i menyen med sekundære handlinger. På denne måten følger propen samme standard som `primaryAction` prop, samt andre komponenter.

```jsx
//Før
const items = [
  {
    title: 'Sekundær handling',
    onClick: () => null,
  },
];

//Etter
const items = [
  {
    children: 'Sekundær handling',
    onClick: () => null,
  },
];
```
