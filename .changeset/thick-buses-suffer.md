---
'@norges-domstoler/dds-components': minor
---

Legger til støtte for å styre bredden til Tabs gjennom en ny `width`-prop på `<Tab>`-komponenten. Her er det støtte for alle de samme enhetene som du ville brukt i `grid-template-columns`. Default verdi er som før, `1fr`.

Eksempel:

```jsx
<Tabs>
  <TabList>
    <Tab width="max-content">Tab 1</Tab>
    <Tab width="8rem">Tab 2</Tab>
    <Tab width="1fr">Tab 3</Tab>
  </TabList>
  <TabPanels>...</TabPanels>
</Tabs>
```
