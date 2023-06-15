import{j as e,b as r,F as s}from"./focus-visible-17f12d09.js";import{M as p,e as h,f as m,g as a,P as k}from"./index-f5116957.js";import{p as u,S as f,M as g,F as l}from"./storybook-components-54c9cf1b.js";import{T as t}from"./index-43c465b1.js";import{T as b}from"./Tooltip.stories-cc372cf7.js";import{u as c}from"./index-09fac16e.js";import"./index-c6dae603.js";import"./iframe-439f8b57.js";import"../sb-preview/runtime.js";import"./index-519f2600.js";import"./index-eb008d06.js";import"./selection-dced972e.js";import"./scrollbarStyling-27f949d7.js";import"./ScrollableContainer.tokens-3dce5c89.js";import"./Typography.utils-3c68477b.js";import"./focusVisible-bd00be70.js";import"./DescriptionListDesc-7709b81f.js";import"./BaseComponentProps-bb0d5515.js";import"./Icon-a968456f.js";import"./unfoldMore-3c6d2d1a.js";import"./SvgWrapper-0812a1f2.js";import"./chevronUp-e61fcd7c.js";import"./normalize-f756ee4b.js";import"./removeButtonStyling-867d6ba4.js";import"./chevronDown-dd1c1a45.js";import"./idGenerator-c29473b2.js";import"./VisuallyHidden-68635a7d.js";import"./AnimatedChevronUpDown-bc7745fb.js";import"./Paper-19f1cdc7.js";import"./visibilityTransition-86c3da85.js";import"./useFloatPosition-f4d76573.js";import"./floating-ui.react-dom.esm-68eb967a.js";import"./floating-ui.dom.browser.min-bfaefb31.js";import"./useCombinedRefs-764cd8e8.js";import"./useOnKeyDown-77bae070.js";import"./combineHandlers-f6d4455a.js";import"./help-f0c201c1.js";import"./Button-4fdfc19e.js";import"./Button.tokens-82906d32.js";import"./text-20d7ad40.js";import"./Spinner-7298b3ed.js";import"./color-0daeea22.js";function d(i){const o=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",code:"code",h3:"h3",h4:"h4"},c(),i.components);return t||n("Table",!1),t.Body||n("Table.Body",!0),t.Cell||n("Table.Cell",!0),t.Head||n("Table.Head",!0),t.Row||n("Table.Row",!0),t.Wrapper||n("Table.Wrapper",!0),r(s,{children:[e(p,{of:b}),`
`,e(o.h1,{id:"tooltip",children:"Tooltip"}),`
`,e(u,{docsHref:"https://design.domstol.no/987b33f71/p/815808-tooltip/b/93bc8f",figmaHref:"https://www.figma.com/file/ewqSDmkgqDQ5PyOsRp4V5b/?node-id=4985%3A127667",githubHref:"https://github.com/domstolene/designsystem/tree/master/components/src/components/Tooltip"}),`
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
`]})]})}function de(i={}){const{wrapper:o}=Object.assign({},c(),i.components);return o?e(o,Object.assign({},i,{children:e(d,i)})):d(i)}function n(i,o){throw new Error("Expected "+(o?"component":"object")+" `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}export{de as default};
//# sourceMappingURL=Tooltip-5870db39.js.map
