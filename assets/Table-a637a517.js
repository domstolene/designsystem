import{a as l,j as n,F as p}from"./jsx-runtime-e43ccb36.js";import{M as h,C as i,b as o,A as t,P as m}from"./chunk-HLWAVYOI-cde08465.js";import{T as a,C as d}from"./index-ce6bd898.js";import{C as T,L as g,c as C}from"./StoryTemplate-73234f44.js";import{S as f}from"./constants-69754a51.js";import{T as u}from"./Table.stories-b9043948.js";import{u as b}from"./index-2ef8b458.js";import{T as s}from"./Tag-f6a10b74.js";import"./index-1b03fe98.js";import"./iframe-46bca9bb.js";import"../sb-preview/runtime.js";import"./index-6d191f71.js";import"./index-6fd5a17b.js";import"./index-356e4a49.js";import"./ddsReferenceTokens-a28ebf03.js";import"./BaseComponentProps-b6ad9f7d.js";import"./scrollbarStyling-c2e6e782.js";import"./ScrollableContainer.tokens-fec9d215.js";import"./Caption-d810b87c.js";import"./TextOverflowEllipsis-6cc9a60a.js";import"./Typography-d13ef156.js";import"./Heading-0c5437bc.js";import"./Label-05114518.js";import"./Legend-9969638c.js";import"./Link-c264ab95.js";import"./Paragraph-88055bd8.js";import"./Input.styles-97d4f19a.js";import"./removeButtonStyling-867d6ba4.js";import"./DescriptionListDesc-a1f8265e.js";import"./libraryAdd-72c0bfa3.js";import"./Icon-eb542f51.js";import"./normalize-f756ee4b.js";import"./VisuallyHidden-e3800c53.js";import"./tableData-67b3b250.js";import"./Checkbox-c33ff1bf.js";import"./SelectionControl.styles-cff04831.js";import"./SelectionControl.tokens-35db2359.js";import"./ScrollableContainer-796f47e4.js";import"./Button-ba8adec5.js";import"./Button.tokens-aa4a9c73.js";import"./Spinner-842be24a.js";import"./LocalMessage.tokens-cfdb2440.js";function c(r){const e=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",code:"code",h3:"h3",strong:"strong"},b(),r.components);return n(p,{children:[l(h,{of:u}),`
`,l(e.h1,{id:"table",children:"Table"}),`
`,l(T,{docsHref:"https://design.domstol.no/987b33f71/p/559cc8-table/b/73973d",figmaHref:"https://www.figma.com/file/ewqSDmkgqDQ5PyOsRp4V5b/?node-id=1347%3A0",githubHref:"https://github.com/domstolene/designsystem/tree/main/packages/components/src/components/Table"}),`
`,l(e.h2,{id:"demo",children:"Demo"}),`
`,l(i,{children:l(o,{id:"dds-components-table-table--default"})}),`
`,l(i,{children:l(o,{id:"dds-components-table-collapsibletable-beta--single-defining-column"})}),`
`,l(i,{children:l(o,{id:"dds-components-table-collapsibletable-beta--multiple-defining-columns"})}),`
`,l(g,{href:`${f}dds-components-table`}),`
`,l(e.h2,{id:"oversikt",children:"Oversikt"}),`
`,l(e.p,{children:"Tabeller bygges ved å bruke styled versjoner av native HTML elementer. Disse komponentene er:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[l(e.code,{children:"<Table.Wrapper />"})," - wrapper for tabell."]}),`
`,n(e.li,{children:[l(e.code,{children:"<Table />"})," - selve tabellen."]}),`
`,n(e.li,{children:["Subkomponenter: ",l(e.code,{children:"<Table.Head />"}),", ",l(e.code,{children:"<Table.Body />"}),", ",l(e.code,{children:"<Table.Foot />"}),", ",l(e.code,{children:"<Table.Row />"}),", ",l(e.code,{children:"<Table.Cell />"}),", ",l(e.code,{children:"<Table.SortCell />"}),"."]}),`
`,n(e.li,{children:["BETA - variant av tabell som kan kollapses, med tilhørende rad-komponent: ",l(e.code,{children:"<CollapsibleTable />"})," og ",l(e.code,{children:"<CollapsibleTable.Row>"}),"."]}),`
`]}),`
`,l(e.p,{children:"Enkelte subkomponenter har props for å sørge for riktig styling og oppførsel, mens andre har kun native props, som forklart i API."}),`
`,l(e.h2,{id:"bruk-i-koden",children:"Bruk i koden"}),`
`,l(C,{code:`import { Table } from '@norges-domstoler/dds-components';

<Table.Wrapper>
  <Table>
    <Table.Head>
      <Table.Row type="head">
        <Table.Cell type="head">Navn</Table.Cell>
        <Table.Cell type="head">Rolle</Table.Cell>
      </Table.Row>
    </Table.Head>
    <Table.Body>
      <Table.Row>
        <Table.Cell>Sandra Lovsetter</Table.Cell>
        <Table.Cell>Admin</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Marie Bjerke</Table.Cell>
        <Table.Cell>Admin</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
</Table.Wrapper>

//Collapsible - beta

const headerValues = [
{
key: 'navn',
content: 'Navn',
},
{
key: 'rolle',
content: 'Rolle',
}
]

<CollapsibleTable>
  <Table.Head>
    <CollapsibleTable.Row type="head" headerValues={headerValues}>
      <Table.Cell type="head">{headerValues[0].content}</Table.Cell>
      <Table.Cell type="head">{headerValues[1].content}</Table.Cell>
    </CollapsibleTable.Row>
  </Table.Head>
  <Table.Body>
    <CollapsibleTable.Row>
      <Table.Cell>Sandra Lovsetter</Table.Cell>
      <Table.Cell>Admin</Table.Cell>
    </CollapsibleTable.Row>
    <CollapsibleTable.Row>
      <Table.Cell>Marie Bjerke</Table.Cell>
      <Table.Cell>Admin</Table.Cell>
    </CollapsibleTable.Row>
  </Table.Body>
</CollapsibleTable>
`}),`
`,l(e.h2,{id:"api",children:"API"}),`
`,l(e.h3,{id:"tablewrapper",children:"Table.Wrapper"}),`
`,l(e.p,{children:"En wrapper som sørger for at tabellen får scrolling når den ikke får plass i bredden."}),`
`,n(e.p,{children:["Støtter alle native HTML-attributter som er en del av ",l(e.code,{children:"HTMLAttributes<HTMLDivElement>"}),"-interface."]}),`
`,l(e.h3,{id:"table-1",children:"Table"}),`
`,n(e.p,{children:["Tilsvarer ",l(e.code,{children:"<table>"}),"."]}),`
`,l(t,{story:m}),`
`,n(e.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",l(e.code,{children:"HTMLAttributes<HTMLTableElement>"}),"-interface."]}),`
`,l(e.h3,{id:"tablebody",children:"Table.Body"}),`
`,n(e.p,{children:["Tilsvarer ",l(e.code,{children:"<tbody>"}),"."]}),`
`,n(e.p,{children:["Støtter alle native HTML-attributter som er en del av ",l(e.code,{children:"HTMLAttributes<HTMLTableSectionElement>"}),"-interface."]}),`
`,l(e.h3,{id:"tablehead",children:"Table.Head"}),`
`,n(e.p,{children:["Tilsvarer ",l(e.code,{children:"<thead>"}),"."]}),`
`,n(e.p,{children:["Støtter alle native HTML-attributter som er en del av ",l(e.code,{children:"HTMLAttributes<HTMLTableSectionElement>"}),"-interface."]}),`
`,l(e.h3,{id:"tablefoot",children:"Table.Foot"}),`
`,n(e.p,{children:["Tilsvarer ",l(e.code,{children:"<tfoot>"}),"."]}),`
`,n(e.p,{children:["Støtter alle native HTML-attributter som er en del av ",l(e.code,{children:"HTMLAttributes<HTMLTableSectionElement>"}),"-interface."]}),`
`,l(e.h3,{id:"tablerow",children:"Table.Row"}),`
`,n(e.p,{children:["Tilsvarer ",l(e.code,{children:"<tr>"}),"."]}),`
`,l(t,{of:a.Row}),`
`,n(e.p,{children:["Støtter alle native HTML-attributter som er en del av ",l(e.code,{children:"HTMLAttributes<HTMLTableSectionElement>"}),"-interface."]}),`
`,l(e.h3,{id:"tablecell",children:"Table.Cell"}),`
`,n(e.p,{children:["Tilsvarer ",l(e.code,{children:"<th>"})," eller ",l(e.code,{children:"<td>"}),"."]}),`
`,l(t,{of:a.Cell}),`
`,n(e.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",l(e.code,{children:"HTMLAttributes<HTMLTableDataCellElement>"})," og ",l(e.code,{children:"HTMLAttributes<HTMLTableHeaderCellElement>"}),"-interface."]}),`
`,l(e.h3,{id:"tablesortcell",children:"Table.SortCell"}),`
`,n(e.p,{children:["Et styled ",l(e.code,{children:"<Cell type='head'>"}),"-element som brukes som ",l(e.code,{children:"<th>"})," i sorteringskolonner. ",l(e.strong,{children:"OBS!"})," komponenten stiller kun med styling og ikoner, sortering implementeres i de respektive løsningene."]}),`
`,l(t,{of:a.SortCell}),`
`,n(e.p,{children:["I tillegg støttes ",l(e.code,{children:"<Cell>"}),"-props, bortsett fra ",l(e.code,{children:"type"})," da den er satt til ",l(e.code,{children:"'head'"}),"."]}),`
`,n(e.h3,{id:"collapsibletable-",children:["CollapsibleTable ",l(s,{text:"BETA",purpose:"warning"})]}),`
`,n(e.p,{children:["En variant av ",l(e.code,{children:"<Table>"}),` som kan kollapse deler av hver rad.
Konsumenten må bestemme en eller flere såkalte definerende kolonner - kolonner som vises til enhver tid som i vanlig tabell, mens reseterende kolonner kan kollapse.
Det legges en kolonne til høyre som inneholder en knapp til utviding av raden.
Resterende innhold blir kollapset og vises ved hjelp av `,l(e.code,{children:"<DescriptionList>"}),"."]}),`
`,n(e.p,{children:["Det må brukes ",l(e.code,{children:"<CollapsibleTable.Row>"})," istedenfor ",l(e.code,{children:"<Table.Row>"}),` for riktig oppførsel.
Kollapset tilstand brukes som mobilversjon.`]}),`
`,n(e.p,{children:["Rekkefølgen på definerende kolonner følger rekkefølgen i ",l(e.code,{children:"definingColumnIndex"}),"."]}),`
`,l(t,{of:d}),`
`,n(e.h3,{id:"collapsibletablerow-",children:["CollapsibleTable.Row ",l(s,{text:"BETA",purpose:"warning"})]}),`
`,n(e.p,{children:["En variant av ",l(e.code,{children:"<Table.Row>"})," som brukes med ",l(e.code,{children:"<CollapsibleTable>"}),". Den håndterer kollapsing."]}),`
`,l(t,{of:d.Row}),`
`,l(e.h2,{id:"retningslinjer",children:"Retningslinjer"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["Bruk ",l(e.code,{children:"<Table.Foot>"})," som footer i tabellen ved summering av verdier i en kolonne eller lignende."]}),`
`]})]})}function de(r={}){const{wrapper:e}=Object.assign({},b(),r.components);return e?l(e,Object.assign({},r,{children:l(c,r)})):c(r)}export{de as default};
//# sourceMappingURL=Table-a637a517.js.map
