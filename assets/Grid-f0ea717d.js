import{a as r,j as i,F as m}from"./ddsReferenceTokens-647ce456.js";import{M as s,C as p,b as c,A as o,P as h}from"./chunk-S4VUQJ4A-c34dda98.js";import{C as a,L as u,c as t}from"./StoryTemplate-2a43fd02.js";import{S as k}from"./constants-69754a51.js";import"./Caption-9d9a71c0.js";import"./Heading-b4646737.js";import"./Label-470a2743.js";import"./Legend-6fbf6204.js";import{L as g}from"./Link-3e1e1a74.js";import"./Paragraph-ff3eeae6.js";import"./TextOverflowEllipsis-e3546c5b.js";import"./Typography-b6b10a83.js";import{G as f}from"./Grid.stories-6ee4ce0e.js";import{u as l}from"./index-bda0bad7.js";import{a as b}from"./GridChild-3a6cdb3d.js";import"./index-ebeaab24.js";import"./iframe-552ab5ea.js";import"../sb-preview/runtime.js";import"./index-72bda2b9.js";import"./index-9c09ad76.js";import"./index-356e4a49.js";import"./BaseComponentProps-a100791d.js";import"./libraryAdd-35e18a4f.js";import"./Icon-42793503.js";import"./index-28dc7627.js";import"./Input.styles-01f05292.js";import"./renderInputMessage-a200bcaf.js";import"./InputMessage-cba0217e.js";import"./removeListStyling-80ec5e55.js";import"./OverflowMenuItem-5fa82ba8.js";import"./normalize-f756ee4b.js";import"./scrollbarStyling-d0d816c9.js";import"./ScrollableContainer.tokens-e480b498.js";import"./VisuallyHidden-d3f4e065.js";import"./Button-09f75747.js";import"./Button.tokens-cb9e169d.js";import"./Spinner-866d56ff.js";import"./index-dcdaa05f.js";import"./removeButtonStyling-867d6ba4.js";import"./DescriptionListDesc-5189b0e0.js";import"./InternalHeader-77f4e812.js";import"./OverflowMenu-9c02bbdc.js";import"./useFloatPosition-16b5a301.js";import"./floating-ui.dom-a5fd4560.js";import"./Divider-97c7888f.js";import"./Tag-65e252d8.js";import"./LocalMessage.tokens-59426b17.js";import"./Pagination-1e92ac36.js";import"./Select-f3aa82d3.js";import"./icon-aa5b86b3.js";import"./TextInput-122ebd36.js";import"./Input.utils-1d79ab61.js";function d(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",ul:"ul",li:"li",h3:"h3",h4:"h4"},l(),n.components);return i(m,{children:[r(s,{of:f}),`
`,r(e.h1,{id:"grid",children:"Grid"}),`
`,r(a,{docsHref:"",githubHref:"https://github.com/domstolene/designsystem/tree/main/packages/components/src/components/Grid"}),`
`,r(e.h2,{id:"demo",children:"Demo"}),`
`,r(p,{children:r(c,{id:"dds-components-grid--page-example"})}),`
`,r(u,{href:`${k}dds-components-grid`}),`
`,r(e.h2,{id:"oversikt",children:"Oversikt"}),`
`,i(e.p,{children:[r(e.code,{children:"<Grid>"}),` implementerer grid layout definert i Figma for alle brekkpunkter. Grid i Figma defineres som stiler og er dermed ikke egen komponent.
Les mer om brekkepunkter, grid tokens og hvordan vi bruker det hele i `,r(g,{href:"https://design.domstol.no/987b33f71/p/442cff-grid-og-layout/b/312b16",external:!0,children:"Grid og layout i dokumentasjonen"}),"."]}),`
`,r(e.p,{children:"Grid består av to subkomponenter:"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[r(e.code,{children:"<Grid>"})," - en container-komponent for grid children som tar i bruk CSS Grid og definerer antall kolonner og gutters (",r(e.code,{children:"gap"})," i CSS) basert på skjermstørrelse."]}),`
`,i(e.li,{children:[r(e.code,{children:"<GridChild>"})," - en wrapper-komponent for innhold, brukes som barn i ",r(e.code,{children:"<Grid>"}),". Den spesifiserer hvilke deler av grid innholdet skal ta, først og fremst hvilke kolonner."]}),`
`]}),`
`,r(e.h2,{id:"bruk-i-koden",children:"Bruk i koden"}),`
`,r(t,{code:`
  import { Grid, GridChild } from '@norges-domstoler/dds-components';

<Grid as="div">
  <GridChild columnsOccupied="all">innhold</GridChild>
  <GridChild
    columnsOccupied={{
      xs: '1/-1',
      sm: '1/7',
      md: '1/11',
      lg: '1/11',
      xl: '1/9',
    }}
  >
    innhold
  </GridChild>
  <GridChild
    columnsOccupied={{
      xs: '1/-1',
      sm: '7/9',
      md: '11/13',
      lg: '11/13',
      xl: '8/13',
    }}
  >
    innhold
  </GridChild>
</Grid>
`}),`
`,r(e.h2,{id:"api",children:"API"}),`
`,r(e.h3,{id:"grid-1",children:"Grid"}),`
`,i(e.p,{children:["En container-komponent for ",r(e.code,{children:"<GridChild>"})," barn. Den håndterer grid layout basert på skjermstørrelse med hensyn til brekkpunkter."]}),`
`,r(o,{story:h}),`
`,i(e.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",r(e.code,{children:"HTMLAttributes<HTMLDivElement>"}),"-interface eller ",r(e.code,{children:"HTMLAttributes<HTMLFormElement>"}),"-interface i ",r(e.code,{children:"htmlProps"}),`.
`,r(e.code,{children:"style"})," støtte både på rotnivå og i ",r(e.code,{children:"htmlProps"}),"."]}),`
`,r(e.h3,{id:"gridchild",children:"GridChild"}),`
`,r(e.p,{children:"En wrapper-component som håndterer hvor mange kolonner innhold skal ta, i tillegg til eventuelle andre CSS grid spesifikasjoner og styling."}),`
`,r(e.h4,{id:"bruk",children:"Bruk"}),`
`,i(e.p,{children:[r(e.code,{children:"<GridChild>"})," bruker prop ",r(e.code,{children:"columnsOccupied"}),` til å bestemme hvilke kolonner innholdet skal okkupere.
Det tillates to typer verdi:`]}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:["Relativ, som gjør det enkelt å bruke en andel av totale antallet kolonner uansett brekkpunkt. F.eks. ",r(e.code,{children:"'all'"})," som tar alle kolonner og ",r(e.code,{children:"'firstHalf'"})," som tar første halvparten."]}),`
`,i(e.li,{children:["Et objekt med CSS ",r(e.code,{children:"grid-column"})," verdier for hvert brekkepunkt (xs, sm, md, lg, xl). Her kan man spesifisere verdier som er gyldige for ",r(e.code,{children:"grid-column"}),", vanligvis på formen ",r(e.code,{children:"<start-kolonne> / <slutt-kolonne>"}),". Du trenger å vite hvor mange kolonner er tilgjengelige for hvert brekkpunkt for å oppgi riktige verdier."]}),`
`]}),`
`,r(e.p,{children:"Typespesifikasjonen er som følger:"}),`
`,r(t,{code:`
  type RelativeColumnsOccupied = 'all' | 'firstHalf' | 'secondHalf';
  type GridColumnPerScreenSize = {
  xs: Property.GridColumn;
  sm: Property.GridColumn;
  md: Property.GridColumn;
  lg: Property.GridColumn;
  xl: Property.GridColumn;
  };

type ColumnsOccupied = RelativeColumnsOccupied | GridColumnPerScreenSize;
`}),`
`,r(e.h4,{id:"props",children:"Props"}),`
`,r(o,{of:b}),`
`,i(e.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",r(e.code,{children:"HTMLAttributes<HTMLDivElement>"}),"-interface i ",r(e.code,{children:"htmlProps"}),`.
`,r(e.code,{children:"style"})," støtte både på rotnivå og i ",r(e.code,{children:"htmlProps"}),"."]}),`
`,r(e.h4,{id:"types",children:"Types"})]})}function fe(n={}){const{wrapper:e}=Object.assign({},l(),n.components);return e?r(e,Object.assign({},n,{children:r(d,n)})):d(n)}export{fe as default};
//# sourceMappingURL=Grid-f0ea717d.js.map
