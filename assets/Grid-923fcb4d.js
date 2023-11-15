import{a as r,j as i,F as m}from"./jsx-runtime-e43ccb36.js";import{M as s,C as p,b as c,A as o,P as h}from"./chunk-HLWAVYOI-adac57c3.js";import{C as a,L as u,c as t}from"./StoryTemplate-b1805fe5.js";import{S as k}from"./constants-c672c5f8.js";import"./Caption-7324954d.js";import"./Heading-a143a4ab.js";import"./Label-e6c412e2.js";import"./Legend-8686145c.js";import{L as g}from"./Link-0af95a08.js";import"./Paragraph-67d8f149.js";import"./TextOverflowEllipsis-5f7b5b23.js";import"./Typography-37e894bc.js";import{G as f}from"./Grid.stories-914c47c5.js";import{u as l}from"./index-2ef8b458.js";import{a as b}from"./GridChild-05f5542b.js";import"./index-1b03fe98.js";import"./iframe-7f7b0921.js";import"../sb-preview/runtime.js";import"./index-6d191f71.js";import"./index-6fd5a17b.js";import"./index-356e4a49.js";import"./ddsReferenceTokens-cf345c8b.js";import"./BaseComponentProps-217bcb03.js";import"./libraryAdd-792d55f1.js";import"./Icon-96508a26.js";import"./index-3bc1e8a0.js";import"./Input.styles-9955857c.js";import"./renderInputMessage-babbca0c.js";import"./InputMessage-7ae8a63a.js";import"./removeListStyling-80ec5e55.js";import"./OverflowMenuItem-c5ed6593.js";import"./normalize-f756ee4b.js";import"./scrollbarStyling-5c8dd8e6.js";import"./ScrollableContainer.tokens-2f8b82e4.js";import"./VisuallyHidden-d23941f1.js";import"./Button-8ec36c15.js";import"./Button.tokens-a4431843.js";import"./Spinner-3b81cc2b.js";import"./index-0c36c15b.js";import"./removeButtonStyling-867d6ba4.js";import"./DescriptionListDesc-d234126c.js";import"./InternalHeader-cb60af76.js";import"./OverflowMenu-ff562f79.js";import"./useFloatPosition-8239dfed.js";import"./floating-ui.dom-a5fd4560.js";import"./Divider-153b4808.js";import"./Tag-27b00a14.js";import"./LocalMessage.tokens-3b4e33fb.js";import"./Pagination-289c0cb7.js";import"./Select-85d6008f.js";import"./icon-aa5b86b3.js";import"./TextInput-5eaab68b.js";import"./Input.utils-1d79ab61.js";function d(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",ul:"ul",li:"li",h3:"h3",h4:"h4"},l(),n.components);return i(m,{children:[r(s,{of:f}),`
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
//# sourceMappingURL=Grid-923fcb4d.js.map
