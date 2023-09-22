import{a as e,j as n,F as s}from"./ddsReferenceTokens-f1d35829.js";import{M as p,C as h,e as a,A as m,P as k}from"./chunk-PCJTTTQV-c281e3f8.js";import{p as u,S as f,M as g,F as l}from"./storybook-components-97b79dd9.js";import{T as t}from"./index-9e7a0ef7.js";import{T as v}from"./Tooltip.stories-31f20e21.js";import{u as c}from"./index-6fa374d0.js";import"./index-d47b1f5a.js";import"./iframe-7f3cecf9.js";import"../sb-preview/runtime.js";import"./index-db9ff070.js";import"./index-d475d2ea.js";import"./index-356e4a49.js";import"./focus-visible-bfce03b6.js";import"./dds-core-c67132cd.js";import"./scrollbarStyling-5cc839fb.js";import"./ScrollableContainer.tokens-c202eeaf.js";import"./dds-typography-cc6cb429.js";import"./dds-form-9b45fc8d.js";import"./DescriptionListDesc-559bec8b.js";import"./dds-icons-265d9665.js";import"./VisuallyHidden-15b316c1.js";import"./Tooltip-8f8a02ef.js";import"./Button-aa30c63f.js";import"./Button.tokens-d278b944.js";import"./Spinner-dd54de98.js";function d(r){const o=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",code:"code",h3:"h3",h4:"h4"},c(),r.components);return t||i("Table",!1),t.Body||i("Table.Body",!0),t.Cell||i("Table.Cell",!0),t.Head||i("Table.Head",!0),t.Row||i("Table.Row",!0),t.Wrapper||i("Table.Wrapper",!0),n(s,{children:[e(p,{of:v}),`
`,e(o.h1,{id:"tooltip",children:"Tooltip"}),`
`,e(u,{docsHref:"https://design.domstol.no/987b33f71/p/815808-tooltip/b/93bc8f",figmaHref:"https://www.figma.com/file/ewqSDmkgqDQ5PyOsRp4V5b/?node-id=4985%3A127667",githubHref:"https://github.com/domstolene/designsystem/tree/main/packages/components/src/components/Tooltip"}),`
`,e(o.h2,{id:"demo",children:"Demo"}),`
`,e(h,{children:e(a,{id:"dds-components-tooltip--default"})}),`
`,e(f,{href:`${g}dds-components-tooltip`}),`
`,e(o.h2,{id:"oversikt",children:"Oversikt"}),`
`,e(o.p,{children:"En tooltip består av:"}),`
`,n(o.ul,{children:[`
`,n(o.li,{children:[e(o.code,{children:"<Tooltip />"}),"- wrapper som håndterer kontroll og rendering av tooltip"]}),`
`,n(o.li,{children:["Valgfritt anchor element som skal være det eneste barnet til ",e(o.code,{children:"<Tooltip />"}),". Det kontrollerer når tooltip vises via tastaturfokus og tooltip plasseres i forhold til dette elementet. Et anchor element er et interaktivt element. ",e(o.code,{children:"<Tooltip />"})," sender enkelte props til anchor-elementet som ikke kan overskrives, som ",e(o.code,{children:"aria-describedby"})," og ",e(o.code,{children:"ref"}),"."]}),`
`]}),`
`,n(o.p,{children:[e(o.code,{children:"<Tooltip />"})," returnerer anchor elementet og en tooltip wrappet i en ",e(o.code,{children:"<div>"}),"."]}),`
`,e(o.h2,{id:"bruk-i-koden",children:"Bruk i koden"}),`
`,e(l,{code:`import { Tooltip, Button } from '@norges-domstoler/dds-components';

<Tooltip text="Tooltip">
  <Button label="tekst" />
</Tooltip>
`}),`
`,e(o.h2,{id:"api",children:"API"}),`
`,e(m,{story:k}),`
`,n(o.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",e(o.code,{children:"HTMLAttributes<HTMLDivElement>"}),"-interface i ",e(o.code,{children:"htmlProps"}),"."]}),`
`,e(o.h3,{id:"events",children:"Events"}),`
`,e(o.p,{children:"Det brukes ulike events til å lukke eller åpne tooltip. For å bruke callback på event som styrer tooltip må den sendes som prop til riktig element. Se oversikt over hvilket element bruker hvilken event:"}),`
`,e(t.Wrapper,{children:n(t,{density:"compact",style:{width:"100%"},children:[e(t.Head,{children:n(t.Row,{type:"head",children:[e(t.Cell,{type:"head",children:"Event"}),e(t.Cell,{type:"head",children:e(o.code,{children:"Tooltip"})}),e(t.Cell,{type:"head",children:"Anchor-element"})]})}),n(t.Body,{children:[n(t.Row,{children:[n(t.Cell,{children:[" ",e(o.code,{children:"onMouseOver"})," "]}),e(t.Cell,{children:" ✅ "}),e(t.Cell,{})]}),n(t.Row,{children:[n(t.Cell,{children:[" ",e(o.code,{children:"onMouseLeave"})]}),e(t.Cell,{children:" ✅ "}),e(t.Cell,{})]}),n(t.Row,{children:[n(t.Cell,{children:[" ",e(o.code,{children:"onFocus"})," "]}),e(t.Cell,{}),e(t.Cell,{children:" ✅ "})]}),n(t.Row,{children:[n(t.Cell,{children:[" ",e(o.code,{children:"onBlur"})," "]}),e(t.Cell,{}),e(t.Cell,{children:" ✅ "})]})]})]})}),`
`,e(o.h4,{id:"eksempel",children:"Eksempel"}),`
`,e(l,{code:`const onFocus = () => { ... } // noe logikk
  const onMouseOver = () => { ... } // noe logikk

<Tooltip text="Tooltip" onMouseOver={onMouseOver}>
  <Button label="tekst" onFocus={onFocus} />
</Tooltip>
`}),`
`,e(o.h2,{id:"retningslinjer",children:"Retningslinjer"}),`
`,n(o.ul,{children:[`
`,n(o.li,{children:[e(o.code,{children:"<Tooltip />"})," brukes kun til kort tekst. Ingen interaktive elementer er tillatt. Sjekk Popover for andre bruksområder."]}),`
`,n(o.li,{children:["Hvis anchor element er et ikon bruk ",e(o.code,{children:"Button"})," med ",e(o.code,{children:"Icon"}),"-prop der det er mulig."]}),`
`,e(o.li,{children:"Husk tilgjengelig ledetekst i anchor element som ikke har synlig tekst i seg."}),`
`,n(o.li,{children:["Sørg for at ",e(o.code,{children:"<Tooltip />"})," brukes konsekvent i løsningen."]}),`
`,n(o.li,{children:["Sørg for at ",e(o.code,{children:"<Tooltip />"})," får riktig plassering i forhold til resten av innholdet og ikke dekker til relatert informasjon."]}),`
`]})]})}function Y(r={}){const{wrapper:o}=Object.assign({},c(),r.components);return o?e(o,Object.assign({},r,{children:e(d,r)})):d(r)}function i(r,o){throw new Error("Expected "+(o?"component":"object")+" `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}export{Y as default};
//# sourceMappingURL=Tooltip-196c90a6.js.map
