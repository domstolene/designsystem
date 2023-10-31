import{a as e,j as r,F as s}from"./jsx-runtime-e43ccb36.js";import{M as p,C as h,b as m,A as a,P as k}from"./chunk-HLWAVYOI-0c9d9149.js";import{C as u,L as f,c as l}from"./StoryTemplate-d3d045d5.js";import{S as g}from"./constants-69754a51.js";import{T as t}from"./index-2040439a.js";import{T as v}from"./Tooltip.stories-f6add40a.js";import{u as c}from"./index-2ef8b458.js";import"./index-1b03fe98.js";import"./iframe-a45876ab.js";import"../sb-preview/runtime.js";import"./index-6d191f71.js";import"./index-6fd5a17b.js";import"./index-356e4a49.js";import"./ddsReferenceTokens-a28ebf03.js";import"./BaseComponentProps-5f9a30f8.js";import"./scrollbarStyling-c2e6e782.js";import"./ScrollableContainer.tokens-fec9d215.js";import"./Caption-f392befe.js";import"./TextOverflowEllipsis-6cc9a60a.js";import"./Typography-2f5b7ed6.js";import"./Heading-ad44a14c.js";import"./Label-2f40b05d.js";import"./Legend-4a50a7d7.js";import"./Link-53575534.js";import"./Paragraph-ea3f8ca3.js";import"./Input.styles-61cf55a8.js";import"./removeButtonStyling-867d6ba4.js";import"./DescriptionListDesc-2468e8cd.js";import"./libraryAdd-923f0275.js";import"./Icon-3ee4d35b.js";import"./normalize-f756ee4b.js";import"./VisuallyHidden-ecf884b0.js";import"./Tooltip-993ad58b.js";import"./useFloatPosition-50e3a2ff.js";import"./floating-ui.dom-a5fd4560.js";import"./combineHandlers-f6d4455a.js";import"./Button-5add3b32.js";import"./Button.tokens-48945bc8.js";import"./Spinner-e224c804.js";function d(i){const o=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",code:"code",h3:"h3",h4:"h4"},c(),i.components);return t||n("Table",!1),t.Body||n("Table.Body",!0),t.Cell||n("Table.Cell",!0),t.Head||n("Table.Head",!0),t.Row||n("Table.Row",!0),t.Wrapper||n("Table.Wrapper",!0),r(s,{children:[e(p,{of:v}),`
`,e(o.h1,{id:"tooltip",children:"Tooltip"}),`
`,e(u,{docsHref:"https://design.domstol.no/987b33f71/p/815808-tooltip/b/93bc8f",figmaHref:"https://www.figma.com/file/ewqSDmkgqDQ5PyOsRp4V5b/?node-id=4985%3A127667",githubHref:"https://github.com/domstolene/designsystem/tree/main/packages/components/src/components/Tooltip"}),`
`,e(o.h2,{id:"demo",children:"Demo"}),`
`,e(h,{children:e(m,{id:"dds-components-tooltip--default"})}),`
`,e(f,{href:`${g}dds-components-tooltip`}),`
`,e(o.h2,{id:"oversikt",children:"Oversikt"}),`
`,e(o.p,{children:"En tooltip består av:"}),`
`,r(o.ul,{children:[`
`,r(o.li,{children:[e(o.code,{children:"<Tooltip />"}),"- wrapper som håndterer kontroll og rendering av tooltip"]}),`
`,r(o.li,{children:["Valgfritt anchor element som skal være det eneste barnet til ",e(o.code,{children:"<Tooltip />"}),". Det kontrollerer når tooltip vises via tastaturfokus og tooltip plasseres i forhold til dette elementet. Et anchor element er et interaktivt element. ",e(o.code,{children:"<Tooltip />"})," sender enkelte props til anchor-elementet som ikke kan overskrives, som ",e(o.code,{children:"aria-describedby"})," og ",e(o.code,{children:"ref"}),"."]}),`
`]}),`
`,r(o.p,{children:[e(o.code,{children:"<Tooltip />"})," returnerer anchor elementet og en tooltip wrappet i en ",e(o.code,{children:"<div>"}),"."]}),`
`,e(o.h2,{id:"bruk-i-koden",children:"Bruk i koden"}),`
`,e(l,{code:`import { Tooltip, Button } from '@norges-domstoler/dds-components';

<Tooltip text="Tooltip">
  <Button>tekst</Button>
</Tooltip>
`}),`
`,e(o.h2,{id:"api",children:"API"}),`
`,e(a,{story:k}),`
`,r(o.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",e(o.code,{children:"HTMLAttributes<HTMLDivElement>"}),"-interface i ",e(o.code,{children:"htmlProps"}),"."]}),`
`,e(o.h3,{id:"events",children:"Events"}),`
`,e(o.p,{children:"Det brukes ulike events til å lukke eller åpne tooltip. For å bruke callback på event som styrer tooltip må den sendes som prop til riktig element. Se oversikt over hvilket element bruker hvilken event:"}),`
`,e(t.Wrapper,{children:r(t,{density:"compact",style:{width:"100%"},children:[e(t.Head,{children:r(t.Row,{type:"head",children:[e(t.Cell,{type:"head",children:"Event"}),e(t.Cell,{type:"head",children:e(o.code,{children:"Tooltip"})}),e(t.Cell,{type:"head",children:"Anchor-element"})]})}),r(t.Body,{children:[r(t.Row,{children:[r(t.Cell,{children:[" ",e(o.code,{children:"onMouseOver"})," "]}),e(t.Cell,{children:" ✅ "}),e(t.Cell,{})]}),r(t.Row,{children:[r(t.Cell,{children:[" ",e(o.code,{children:"onMouseLeave"})]}),e(t.Cell,{children:" ✅ "}),e(t.Cell,{})]}),r(t.Row,{children:[r(t.Cell,{children:[" ",e(o.code,{children:"onFocus"})," "]}),e(t.Cell,{}),e(t.Cell,{children:" ✅ "})]}),r(t.Row,{children:[r(t.Cell,{children:[" ",e(o.code,{children:"onBlur"})," "]}),e(t.Cell,{}),e(t.Cell,{children:" ✅ "})]})]})]})}),`
`,e(o.h4,{id:"eksempel",children:"Eksempel"}),`
`,e(l,{code:`const onFocus = () => { ... } // noe logikk
  const onMouseOver = () => { ... } // noe logikk

<Tooltip text="Tooltip" onMouseOver={onMouseOver}>
  <Button onFocus={onFocus}>tekst</Button>
</Tooltip>
`}),`
`,e(o.h2,{id:"retningslinjer",children:"Retningslinjer"}),`
`,r(o.ul,{children:[`
`,r(o.li,{children:[e(o.code,{children:"<Tooltip />"})," brukes kun til kort tekst. Ingen interaktive elementer er tillatt. Sjekk Popover for andre bruksområder."]}),`
`,r(o.li,{children:["Hvis anchor element er et ikon bruk ",e(o.code,{children:"Button"})," med ",e(o.code,{children:"Icon"}),"-prop der det er mulig."]}),`
`,e(o.li,{children:"Husk tilgjengelig ledetekst i anchor element som ikke har synlig tekst i seg."}),`
`,r(o.li,{children:["Sørg for at ",e(o.code,{children:"<Tooltip />"})," brukes konsekvent i løsningen."]}),`
`,r(o.li,{children:["Sørg for at ",e(o.code,{children:"<Tooltip />"})," får riktig plassering i forhold til resten av innholdet og ikke dekker til relatert informasjon."]}),`
`]})]})}function ie(i={}){const{wrapper:o}=Object.assign({},c(),i.components);return o?e(o,Object.assign({},i,{children:e(d,i)})):d(i)}function n(i,o){throw new Error("Expected "+(o?"component":"object")+" `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}export{ie as default};
//# sourceMappingURL=Tooltip-50026697.js.map