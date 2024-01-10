---
'@norges-domstoler/dds-components': major
---

`<Datepicker>` erstattes med `<DatePicker>`(merk stor P i "Picker"). En ny datovelger som skal gi oss bedre fleksibilitet. Den nye datovelgeren garanterer at brukere vil få norsk datoformatering og kalender, selv om enheten de bruker har et annet foretrukket språk.

`<DatePicker>` er basert på Adobe sin `react-aria`-pakke, som bruker `@internationalized/date` sin datoimplementasjon. JavaScript sin innebygde `Date`-klasse er ikke fleksibel nok når det kommer til f.eks. tidssonehåndtering, så vi krever derfor også at dere må ta i bruk denne nye datoimplementasjon. Husk derfor å legge til en avhengighet til `@internationalized/date` i `package.json`-filen din.

Hvis du fortsatt ønsker å bruke JavaScript sin innebygde Date-klasse, så har vi lagt til to nye funksjoner for å transformere fra `@internationalized/date` til JS sin `Date`(`dateValueToNativeDate()`) og vice versa(`nativeDateToDateValue()`). Dette kan være nyttig å ta i bruk når dere migrerer til den nye datovelgeren.

Se [dokumentasjonen](https://design.domstol.no/987b33f71/p/73c4d3-datepicker/b/369590) for mer informasjon om hvordan du bruker den nye datovelgeren.
