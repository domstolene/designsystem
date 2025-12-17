---
'@norges-domstoler/dds-components': major
---

Fjerner delkomponent `<NativeSelectPlaceholder>`. Vi anbefaler å ikke bruke placeholder med mindre det er en god grunn til det, da det fører til utfordringer knyttet til UU. Istedet oppfordrer vi til å inkludere en tom verdi `<option value=""></option>` i `<NativeSelect>` på toppen av valgalternativene.
