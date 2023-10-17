import{a as r,j as i,F as m}from"./jsx-runtime-e43ccb36.js";import{M as s,C as p,b as c,A as o,P as h}from"./chunk-S4VUQJ4A-ef04515c.js";import{C as a,L as u,c as t}from"./StoryTemplate-a536eef8.js";import{S as k}from"./constants-69754a51.js";import"./Caption-6d408196.js";import"./Heading-5f7faa2b.js";import"./Label-9dee7f37.js";import"./Legend-41f9f05c.js";import{L as g}from"./Link-1567bf4e.js";import"./Paragraph-998f64b8.js";import"./TextOverflowEllipsis-1edb8626.js";import"./Typography-e857479c.js";import{G as f}from"./Grid.stories-d945e2a9.js";import{u as l}from"./index-2ef8b458.js";import{a as b}from"./GridChild-c231c6be.js";import"./index-1b03fe98.js";import"./iframe-ddff3556.js";import"../sb-preview/runtime.js";import"./index-4a89c107.js";import"./index-6fd5a17b.js";import"./index-356e4a49.js";import"./ddsReferenceTokens-f9f5a4e4.js";import"./BaseComponentProps-9c025471.js";import"./libraryAdd-5ac12ed0.js";import"./Icon-1678d620.js";import"./index-0e6476f6.js";import"./Input.styles-3d1af983.js";import"./renderInputMessage-90dd305a.js";import"./InputMessage-5d6127f2.js";import"./removeListStyling-80ec5e55.js";import"./OverflowMenuItem-8cecaf24.js";import"./normalize-f756ee4b.js";import"./scrollbarStyling-6511712a.js";import"./ScrollableContainer.tokens-17f22553.js";import"./VisuallyHidden-297bf54e.js";import"./Button-cdaa071a.js";import"./Button.tokens-4b98f929.js";import"./Spinner-50e72058.js";import"./index-f5a22323.js";import"./removeButtonStyling-867d6ba4.js";import"./DescriptionListDesc-d0c82072.js";import"./InternalHeader-aceb2464.js";import"./OverflowMenu-7f813a56.js";import"./useFloatPosition-da47bd7f.js";import"./floating-ui.dom-a5fd4560.js";import"./Divider-c974f361.js";import"./Tag-fbf3df0f.js";import"./LocalMessage.tokens-ae85469e.js";import"./Pagination-877ffd6b.js";import"./Select-dfefc6f8.js";import"./icon-aa5b86b3.js";import"./TextInput-509534b4.js";import"./Input.utils-1d79ab61.js";function d(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",ul:"ul",li:"li",h3:"h3",h4:"h4"},l(),n.components);return i(m,{children:[r(s,{of:f}),`
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
`,r(e.h4,{id:"types",children:"Types"})]})}function be(n={}){const{wrapper:e}=Object.assign({},l(),n.components);return e?r(e,Object.assign({},n,{children:r(d,n)})):d(n)}export{be as default};
//# sourceMappingURL=Grid-693593f6.js.map
