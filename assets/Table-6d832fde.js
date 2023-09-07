import{a as l,j as n,F as p}from"./ddsReferenceTokens-f1d35829.js";import{M as h,C as i,e as a,A as t,P as T}from"./chunk-PCJTTTQV-6c404da6.js";import{T as o,C as d}from"./index-9e7a0ef7.js";import{p as m,S as g,M as f,F as C}from"./storybook-components-be8d83b8.js";import{T as u}from"./Table.stories-7eba2a00.js";import{u as b}from"./index-6fa374d0.js";import{T as s}from"./Tag-f57d0e31.js";import"./index-d47b1f5a.js";import"./iframe-e2c2ba07.js";import"../sb-preview/runtime.js";import"./index-db9ff070.js";import"./index-d475d2ea.js";import"./index-356e4a49.js";import"./dds-core-c67132cd.js";import"./scrollbarStyling-5cc839fb.js";import"./ScrollableContainer.tokens-c202eeaf.js";import"./dds-typography-cc6cb429.js";import"./dds-form-9b45fc8d.js";import"./DescriptionListDesc-559bec8b.js";import"./dds-icons-265d9665.js";import"./VisuallyHidden-15b316c1.js";import"./focus-visible-bfce03b6.js";import"./tableData-67b3b250.js";import"./Checkbox-98b116ee.js";import"./SelectionControl.styles-f9aa62b6.js";import"./SelectionControl.tokens-06edacdf.js";import"./ScrollableContainer-c51c141e.js";import"./Button-aa30c63f.js";import"./Button.tokens-d278b944.js";import"./Spinner-dd54de98.js";import"./LocalMessage.tokens-95616232.js";function c(r){const e=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",code:"code",h3:"h3",strong:"strong"},b(),r.components);return n(p,{children:[l(h,{of:u}),`
`,l(e.h1,{id:"table",children:"Table"}),`
`,l(m,{docsHref:"https://design.domstol.no/987b33f71/p/559cc8-table/b/73973d",figmaHref:"https://www.figma.com/file/ewqSDmkgqDQ5PyOsRp4V5b/?node-id=1347%3A0",githubHref:"https://github.com/domstolene/designsystem/tree/master/packages/components/src/components/Table"}),`
`,l(e.h2,{id:"demo",children:"Demo"}),`
`,l(i,{children:l(a,{id:"dds-components-table-table--default"})}),`
`,l(i,{children:l(a,{id:"dds-components-table-collapsibletable-beta--single-defining-column"})}),`
`,l(i,{children:l(a,{id:"dds-components-table-collapsibletable-beta--multiple-defining-columns"})}),`
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
`,l(t,{story:T}),`
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
`,l(t,{of:o.Row}),`
`,n(e.p,{children:["Støtter alle native HTML-attributter som er en del av ",l(e.code,{children:"HTMLAttributes<HTMLTableSectionElement>"}),"-interface."]}),`
`,l(e.h3,{id:"tablecell",children:"Table.Cell"}),`
`,n(e.p,{children:["Tilsvarer ",l(e.code,{children:"<th>"})," eller ",l(e.code,{children:"<td>"}),"."]}),`
`,l(t,{of:o.Cell}),`
`,n(e.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",l(e.code,{children:"HTMLAttributes<HTMLTableDataCellElement>"})," og ",l(e.code,{children:"HTMLAttributes<HTMLTableHeaderCellElement>"}),"-interface."]}),`
`,l(e.h3,{id:"tablesortcell",children:"Table.SortCell"}),`
`,n(e.p,{children:["Et styled ",l(e.code,{children:"<Cell type='head'>"}),"-element som brukes som ",l(e.code,{children:"<th>"})," i sorteringskolonner. ",l(e.strong,{children:"OBS!"})," komponenten stiller kun med styling og ikoner, sortering implementeres i de respektive løsningene."]}),`
`,l(t,{of:o.SortCell}),`
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
`]})]})}function J(r={}){const{wrapper:e}=Object.assign({},b(),r.components);return e?l(e,Object.assign({},r,{children:l(c,r)})):c(r)}export{J as default};
//# sourceMappingURL=Table-6d832fde.js.map
