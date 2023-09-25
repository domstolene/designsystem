import{a as e,j as r,F as s}from"./ddsReferenceTokens-647ce456.js";import{M as p,C as h,b as m,A as a,P as k}from"./chunk-PCJTTTQV-7e83f80c.js";import{C as u,L as f,c as l}from"./StoryTemplate-eb861f3f.js";import{S as g}from"./constants-69754a51.js";import{T as t}from"./index-7dce1b68.js";import{T as v}from"./Tooltip.stories-a9b7a856.js";import{u as c}from"./index-bda0bad7.js";import"./index-ebeaab24.js";import"./iframe-f82f733c.js";import"../sb-preview/runtime.js";import"./index-72bda2b9.js";import"./index-9c09ad76.js";import"./index-d475d2ea.js";import"./index-356e4a49.js";import"./BaseComponentProps-a100791d.js";import"./scrollbarStyling-d0d816c9.js";import"./ScrollableContainer.tokens-e480b498.js";import"./Caption-5c254d72.js";import"./TextOverflowEllipsis-e3546c5b.js";import"./Typography-1747463b.js";import"./Heading-dc72d0b9.js";import"./Label-23c96940.js";import"./Legend-dbc3ced6.js";import"./Link-9aff7843.js";import"./Paragraph-3340e0ea.js";import"./Input.styles-711330f2.js";import"./removeButtonStyling-867d6ba4.js";import"./DescriptionListDesc-9319d6fe.js";import"./libraryAdd-4099b973.js";import"./Icon-e6324a43.js";import"./normalize-f756ee4b.js";import"./VisuallyHidden-d3f4e065.js";import"./Tooltip-673508ac.js";import"./useFloatPosition-2dd03182.js";import"./floating-ui.dom.browser.min-fc8c1a2d.js";import"./combineHandlers-f6d4455a.js";import"./Button-07f0874b.js";import"./Button.tokens-cb9e169d.js";import"./Spinner-866d56ff.js";function d(i){const o=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",code:"code",h3:"h3",h4:"h4"},c(),i.components);return t||n("Table",!1),t.Body||n("Table.Body",!0),t.Cell||n("Table.Cell",!0),t.Head||n("Table.Head",!0),t.Row||n("Table.Row",!0),t.Wrapper||n("Table.Wrapper",!0),r(s,{children:[e(p,{of:v}),`
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
  <Button label="tekst" />
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
  <Button label="tekst" onFocus={onFocus} />
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
//# sourceMappingURL=Tooltip-6865b37f.js.map
