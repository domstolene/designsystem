---
'@norges-domstoler/dds-components': minor
---

Legger til `portal` og `parentElement` props/funksjonalitet i `OverflowMenu.tsx` for å unngå klipping. `portal` gjør at menyen rendres i body, og `parentElement` gjør at menyen rendres i det elementet som er satt som parentElement. Default verdi for `portal=true`, og default verdi for `parentElement=themeProviderRef`. Hvis `portal=true`, vil `parentElement` bli ignorert. Hvis `portal=false`, vil `parentElement` bli brukt hvis det er satt, ellers vil menyen rendres i det elementet som `OverflowMenu.tsx` er plassert i.
