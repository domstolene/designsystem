---
'@norges-domstoler/dds-components': major
---

Gjør `<Button>` komponent polymorf via bruk av `as` prop; det er nå mulig å bruke lenke-komponenter fra rammeverk som Next.js og react-router direkte via `as` prop. Dette betyr også at komponenten ikke vil lenger returnere `<a>` tag hvis `href` prop blir brukt.
