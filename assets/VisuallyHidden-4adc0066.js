import{a as e,j as t,F as d}from"./ddsReferenceTokens-647ce456.js";import{M as m,C as r,b as o,A as a,P as k}from"./chunk-PCJTTTQV-8db1789a.js";import{C as p,L as h,c}from"./StoryTemplate-28ced27f.js";import{S as u}from"./constants-69754a51.js";import{V as f,D as g}from"./VisuallyHidden.stories-0c97c864.js";import{u as l}from"./index-bda0bad7.js";import"./index-ebeaab24.js";import"./iframe-017103ac.js";import"../sb-preview/runtime.js";import"./index-72bda2b9.js";import"./index-9c09ad76.js";import"./index-d475d2ea.js";import"./index-356e4a49.js";import"./Caption-5c254d72.js";import"./BaseComponentProps-a100791d.js";import"./TextOverflowEllipsis-e3546c5b.js";import"./Typography-1747463b.js";import"./Heading-dc72d0b9.js";import"./Label-23c96940.js";import"./Legend-dbc3ced6.js";import"./Link-9aff7843.js";import"./Paragraph-3340e0ea.js";import"./index-745fcfac.js";import"./scrollbarStyling-d0d816c9.js";import"./ScrollableContainer.tokens-e480b498.js";import"./Input.styles-711330f2.js";import"./removeButtonStyling-867d6ba4.js";import"./DescriptionListDesc-852a2528.js";import"./libraryAdd-1e72c15a.js";import"./Icon-42793503.js";import"./normalize-f756ee4b.js";import"./VisuallyHidden-d3f4e065.js";import"./Button-86a288bf.js";import"./Button.tokens-cb9e169d.js";import"./Spinner-866d56ff.js";function s(i){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",ul:"ul",li:"li",h3:"h3"},l(),i.components);return t(d,{children:[e(m,{of:f}),`
`,e(n.h1,{id:"visuallyhidden",children:"VisuallyHidden"}),`
`,e(p,{docsHref:"https://design.domstol.no/987b33f71/v/0/p/53c59b-visuallyhidden",githubHref:"https://github.com/domstolene/designsystem/tree/main/packages/components/src/components/VisuallyHidden"}),`
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
`,e(a,{story:k}),`
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
`,e(r,{children:e(o,{id:"dds-components-visuallyhidden--link"})})]})}function Z(i={}){const{wrapper:n}=Object.assign({},l(),i.components);return n?e(n,Object.assign({},i,{children:e(s,i)})):s(i)}export{Z as default};
//# sourceMappingURL=VisuallyHidden-4adc0066.js.map
