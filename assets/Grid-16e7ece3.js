import{a as r,j as i,F as m}from"./jsx-runtime-e43ccb36.js";import{M as s,C as p,b as c,A as o,P as h}from"./chunk-HLWAVYOI-0c9d9149.js";import{C as a,L as u,c as t}from"./StoryTemplate-d3d045d5.js";import{S as k}from"./constants-69754a51.js";import"./Caption-f392befe.js";import"./Heading-ad44a14c.js";import"./Label-2f40b05d.js";import"./Legend-4a50a7d7.js";import{L as g}from"./Link-53575534.js";import"./Paragraph-ea3f8ca3.js";import"./TextOverflowEllipsis-6cc9a60a.js";import"./Typography-2f5b7ed6.js";import{G as f}from"./Grid.stories-75bec4b5.js";import{u as l}from"./index-2ef8b458.js";import{a as b}from"./GridChild-e74432f0.js";import"./index-1b03fe98.js";import"./iframe-a45876ab.js";import"../sb-preview/runtime.js";import"./index-6d191f71.js";import"./index-6fd5a17b.js";import"./index-356e4a49.js";import"./ddsReferenceTokens-a28ebf03.js";import"./BaseComponentProps-5f9a30f8.js";import"./libraryAdd-923f0275.js";import"./Icon-3ee4d35b.js";import"./index-638e8f98.js";import"./Input.styles-61cf55a8.js";import"./renderInputMessage-32885c06.js";import"./InputMessage-b4a4d5d6.js";import"./removeListStyling-80ec5e55.js";import"./OverflowMenuItem-ec58b342.js";import"./normalize-f756ee4b.js";import"./scrollbarStyling-c2e6e782.js";import"./ScrollableContainer.tokens-fec9d215.js";import"./VisuallyHidden-ecf884b0.js";import"./Button-5add3b32.js";import"./Button.tokens-48945bc8.js";import"./Spinner-e224c804.js";import"./index-2040439a.js";import"./removeButtonStyling-867d6ba4.js";import"./DescriptionListDesc-2468e8cd.js";import"./InternalHeader-5dbe774c.js";import"./OverflowMenu-693bdf90.js";import"./useFloatPosition-50e3a2ff.js";import"./floating-ui.dom-a5fd4560.js";import"./Divider-59c98bdf.js";import"./Tag-451d8b54.js";import"./LocalMessage.tokens-0571432d.js";import"./Pagination-411e3656.js";import"./Select-f213cdba.js";import"./hoist-non-react-statics.cjs-6b80b75d.js";import"./icon-aa5b86b3.js";import"./TextInput-7e0b695b.js";import"./Input.utils-1d79ab61.js";function d(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",ul:"ul",li:"li",h3:"h3",h4:"h4"},l(),n.components);return i(m,{children:[r(s,{of:f}),`
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
`,r(e.h4,{id:"types",children:"Types"})]})}function ve(n={}){const{wrapper:e}=Object.assign({},l(),n.components);return e?r(e,Object.assign({},n,{children:r(d,n)})):d(n)}export{ve as default};
//# sourceMappingURL=Grid-16e7ece3.js.map
