---
'@norges-domstoler/dds-components': minor
---

Endrer visning av `<Tooltip>`: den viser ikke lenger en pil som peker mot anchor-elementet da rendering av `svg` har vært buggy og tok litt mye plass. Gjør også spacing internt i `<Tooltip>` og fra anchor-elementet mindre. Endringene kan påvirke layout hos konsumenten.
