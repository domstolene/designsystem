import{j as r,a as i,F as m}from"./focus-visible-c2e9b88d.js";import{M as p,C as s,e as c,A as t,P as h}from"./chunk-PCJTTTQV-80a74cac.js";import{p as a,S as u,M as k,F as n}from"./storybook-components-045061bd.js";import{G as g,a as f}from"./Grid.stories-e22aefc7.js";import{u as l}from"./index-bda0bad7.js";import{L as b}from"./Link-668412b7.js";import"./index-ebeaab24.js";import"./iframe-00013f19.js";import"../sb-preview/runtime.js";import"./index-40534236.js";import"./index-9c09ad76.js";import"./index-08797c9c.js";import"./Typography.utils-99dd1e07.js";import"./focusVisible-75802ac7.js";import"./removeListStyling-80ec5e55.js";import"./OverflowMenuItem-09e2a28b.js";import"./text-20d7ad40.js";import"./normalize-f756ee4b.js";import"./useCombinedRefs-40b11bb4.js";import"./BaseComponentProps-bb0d5515.js";import"./Icon-819df738.js";import"./Paper-12ce52e7.js";import"./selection-fae9d0a8.js";import"./visibilityTransition-933c6349.js";import"./scrollbarStyling-a46ac0ea.js";import"./ScrollableContainer.tokens-4d8ec996.js";import"./Typography-9f10a259.js";import"./color-a12930ac.js";import"./useRoveFocus-1974dcb0.js";import"./idGenerator-c29473b2.js";import"./Input.styles-0a1e38a8.js";import"./Input.tokens-0612e464.js";import"./hover-d616d034.js";import"./danger-157ad055.js";import"./search-6a19762a.js";import"./SvgWrapper-cd7fa512.js";import"./Button-2e74127f.js";import"./Button.tokens-a196263c.js";import"./Spinner-deb75053.js";import"./Label-ec3ecd5b.js";import"./RequiredMarker-326a4040.js";import"./VisuallyHidden-9c195a2c.js";import"./closeSmall-b6c9ae01.js";import"./Input.utils-f888acf1.js";import"./InputMessage-bb06ca10.js";import"./error-e0532677.js";import"./useOnClickOutside-1aed2959.js";import"./useOnKeyDown-4552d984.js";import"./searchFilter-4f5edf43.js";import"./index-022da107.js";import"./DescriptionListDesc-d92b631c.js";import"./unfoldMore-65c30606.js";import"./chevronUp-4c595192.js";import"./removeButtonStyling-867d6ba4.js";import"./chevronDown-41304f61.js";import"./AnimatedChevronUpDown-4430134c.js";import"./useScreenSize-51212f78.js";import"./InternalHeader-4409aaba.js";import"./OverflowMenu-04596b71.js";import"./useFloatPosition-f03daf4a.js";import"./floating-ui.react-dom.esm-92a27cd2.js";import"./floating-ui.dom.browser.min-c4825b7a.js";import"./person-eb4bd89d.js";import"./Divider-ed4eb34e.js";import"./menu-35d03998.js";import"./moreVertical-d30e3ebf.js";import"./plus-bd6c2f17.js";import"./Tag-bf2c5b0d.js";import"./LocalMessage.tokens-3257fe67.js";import"./warning-a3911247.js";import"./TextOverflowEllipsis-947fdf66.js";import"./Pagination-56090bba.js";import"./moreHorizontal-ec3ac42f.js";import"./Select-36441d84.js";import"./check-6e9d4d4d.js";import"./chevronRight-5d1e5886.js";import"./Heading-c9495fe6.js";import"./TextInput-f76f26f2.js";function d(o){const e=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",ul:"ul",li:"li",h3:"h3",h4:"h4"},l(),o.components);return i(m,{children:[r(p,{of:g}),`
`,r(e.h1,{id:"grid",children:"Grid"}),`
`,r(a,{docsHref:"",githubHref:"https://github.com/domstolene/designsystem/tree/master/components/src/components/Grid"}),`
`,r(e.h2,{id:"demo",children:"Demo"}),`
`,r(s,{children:r(c,{id:"dds-components-grid--page-example"})}),`
`,r(u,{href:`${k}dds-components-grid`}),`
`,r(e.h2,{id:"oversikt",children:"Oversikt"}),`
`,i(e.p,{children:[r(e.code,{children:"<Grid>"}),` implementerer grid layout definert i Figma for alle brekkpunkter. Grid i Figma defineres som stiler og er dermed ikke egen komponent.
Les mer om brekkepunkter, grid tokens og hvordan vi bruker det hele i `,r(b,{href:"https://design.domstol.no/987b33f71/p/442cff-grid-og-layout/b/312b16",external:!0,children:"Grid og layout i dokumentasjonen"}),"."]}),`
`,r(e.p,{children:"Grid består av to subkomponenter:"}),`
`,i(e.ul,{children:[`
`,i(e.li,{children:[r(e.code,{children:"<Grid>"})," - en container-komponent for grid children som tar i bruk CSS Grid og definerer antall kolonner og gutters (",r(e.code,{children:"gap"})," i CSS) basert på skjermstørrelse."]}),`
`,i(e.li,{children:[r(e.code,{children:"<GridChild>"})," - en wrapper-komponent for innhold, brukes som barn i ",r(e.code,{children:"<Grid>"}),". Den spesifiserer hvilke deler av grid innholdet skal ta, først og fremst hvilke kolonner."]}),`
`]}),`
`,r(e.h2,{id:"bruk-i-koden",children:"Bruk i koden"}),`
`,r(n,{code:`
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
`,r(t,{story:h}),`
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
`,r(n,{code:`
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
`,r(t,{of:f}),`
`,i(e.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",r(e.code,{children:"HTMLAttributes<HTMLDivElement>"}),"-interface i ",r(e.code,{children:"htmlProps"}),`.
`,r(e.code,{children:"style"})," støtte både på rotnivå og i ",r(e.code,{children:"htmlProps"}),"."]}),`
`,r(e.h4,{id:"types",children:"Types"})]})}function Ye(o={}){const{wrapper:e}=Object.assign({},l(),o.components);return e?r(e,Object.assign({},o,{children:r(d,o)})):d(o)}export{Ye as default};
//# sourceMappingURL=Grid-5023cc3c.js.map
