import{j as e,b as t,F as d}from"./focus-visible-17f12d09.js";import{M as m,e as r,f as o,g as k,P as a}from"./index-f5116957.js";import{p,S as h,M as u,F as c}from"./storybook-components-54c9cf1b.js";import{V as f,D as g}from"./VisuallyHidden.stories-3c35bb3b.js";import{u as l}from"./index-09fac16e.js";import"./index-c6dae603.js";import"./iframe-439f8b57.js";import"../sb-preview/runtime.js";import"./index-519f2600.js";import"./index-eb008d06.js";import"./index-43c465b1.js";import"./selection-dced972e.js";import"./scrollbarStyling-27f949d7.js";import"./ScrollableContainer.tokens-3dce5c89.js";import"./Typography.utils-3c68477b.js";import"./focusVisible-bd00be70.js";import"./DescriptionListDesc-7709b81f.js";import"./BaseComponentProps-bb0d5515.js";import"./Icon-a968456f.js";import"./unfoldMore-3c6d2d1a.js";import"./SvgWrapper-0812a1f2.js";import"./chevronUp-e61fcd7c.js";import"./normalize-f756ee4b.js";import"./removeButtonStyling-867d6ba4.js";import"./chevronDown-dd1c1a45.js";import"./idGenerator-c29473b2.js";import"./VisuallyHidden-68635a7d.js";import"./AnimatedChevronUpDown-bc7745fb.js";import"./Typography-ddbe86f6.js";import"./color-0daeea22.js";import"./Button-4fdfc19e.js";import"./Button.tokens-82906d32.js";import"./text-20d7ad40.js";import"./Spinner-7298b3ed.js";function s(i){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",ul:"ul",li:"li",h3:"h3"},l(),i.components);return t(d,{children:[e(m,{of:f}),`
`,e(n.h1,{id:"visuallyhidden",children:"VisuallyHidden"}),`
`,e(p,{docsHref:"https://design.domstol.no/987b33f71/v/0/p/53c59b-visuallyhidden",githubHref:"https://github.com/domstolene/designsystem/tree/master/components/src/components/VisuallyHidden"}),`
`,e(n.h2,{id:"introduksjon",children:"Introduksjon"}),`
`,t(n.p,{children:[e(n.code,{children:"<VisuallyHidden />"})," er en code-only komponent som ikke har en tilsvarende Figma komponent. Den brukes til å gi kontekst og ekstra informasjon til brukere som benytter seg av assisterende verktøy, primært skjermlesere."]}),`
`,e(n.h2,{id:"demo",children:"Demo"}),`
`,e(r,{children:e(o,{of:g})}),`
`,e(h,{href:`${u}dds-components-visuallyhidden`}),`
`,e(n.h2,{id:"bruk-i-koden",children:"Bruk i koden"}),`
`,e(c,{code:`import { VisuallyHidden } from '@norges-domstoler/dds-components';

<VisuallyHidden as="span"> Denne teksten er usynlig. </VisuallyHidden>
`}),`
`,e(n.h2,{id:"api",children:"API"}),`
`,e(k,{story:a}),`
`,e(n.h2,{id:"retningslinjer",children:"Retningslinjer"}),`
`,t(n.ul,{children:[`
`,e(n.li,{children:"Bruk komponenten til å vise supplerende informasjon når relasjoner og konteksten formidles visuelt."}),`
`,e(n.li,{children:"Pass på at informasjonen lest opp ikke er unødvendig repetert."}),`
`,e(n.li,{children:"Ikke bruk komponenten til å skjule interaktive elementer."}),`
`,e(n.li,{children:"Ikke bruk komponenten til å midlertidig skjule innhold som kan bli synlig for seende brukere."}),`
`,e(n.li,{children:"Test med en skjermleser om informasjonen og konteksten formidles til brukeren."}),`
`]}),`
`,e(n.h2,{id:"eksempler",children:"Eksempler"}),`
`,e(n.h3,{id:"kodete-tekst-i-tabellheader",children:"Kodete tekst i tabellheader"}),`
`,e(n.p,{children:"Hvis en kolonne i en tabell inneholder kun interaktivt og visuelt selvforklarende innhold (knapper o.l.) er det ofte ikke relevant å ha en synlig tekst i headeren. Da er det relevant å inkludere en visuelt skjult tekst istedet."}),`
`,e(r,{children:e(o,{id:"dds-components-visuallyhidden--table-buttons"})}),`
`,e(n.h3,{id:"lenketekst",children:"Lenketekst"}),`
`,e(n.p,{children:"Lenketekst kan være selvforklarende i en visuell kontekst som for eksempel en tekstmengde. Den kan likevel være mangelfull for assisterende teknologi. Supplerende usynling lenketekst kan hjelpe med å forstå konteksten."}),`
`,e(r,{children:e(o,{id:"dds-components-visuallyhidden--link"})})]})}function W(i={}){const{wrapper:n}=Object.assign({},l(),i.components);return n?e(n,Object.assign({},i,{children:e(s,i)})):s(i)}export{W as default};
//# sourceMappingURL=VisuallyHidden-ebac9b8a.js.map
