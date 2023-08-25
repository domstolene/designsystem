import{a as e,j as t,F as d}from"./ddsReferenceTokens-f1d35829.js";import{M as m,C as r,e as o,A as k,P as a}from"./chunk-PCJTTTQV-d633578a.js";import{p,S as h,M as u,F as c}from"./storybook-components-eb38b664.js";import{V as f,D as g}from"./VisuallyHidden.stories-e1c602c0.js";import{u as l}from"./index-6fa374d0.js";import"./index-d47b1f5a.js";import"./iframe-f31fa69e.js";import"../sb-preview/runtime.js";import"./index-db9ff070.js";import"./index-d475d2ea.js";import"./index-356e4a49.js";import"./focus-visible-bfce03b6.js";import"./dds-typography-cc6cb429.js";import"./dds-core-c67132cd.js";import"./index-9e7a0ef7.js";import"./scrollbarStyling-5cc839fb.js";import"./ScrollableContainer.tokens-c202eeaf.js";import"./dds-form-9b45fc8d.js";import"./DescriptionListDesc-559bec8b.js";import"./dds-icons-265d9665.js";import"./VisuallyHidden-15b316c1.js";import"./Button-aa30c63f.js";import"./Button.tokens-d278b944.js";import"./Spinner-dd54de98.js";function s(i){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",ul:"ul",li:"li",h3:"h3"},l(),i.components);return t(d,{children:[e(m,{of:f}),`
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
`,e(r,{children:e(o,{id:"dds-components-visuallyhidden--link"})})]})}function E(i={}){const{wrapper:n}=Object.assign({},l(),i.components);return n?e(n,Object.assign({},i,{children:e(s,i)})):s(i)}export{E as default};
//# sourceMappingURL=VisuallyHidden-6a5d789e.js.map
