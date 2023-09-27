import{a as e,j as t,F as d}from"./ddsReferenceTokens-647ce456.js";import{M as l,C as c,b as p,A as a,P as m}from"./chunk-PCJTTTQV-53147d3e.js";import{C as h,c as k}from"./StoryTemplate-aaf2c38c.js";import{S as g}from"./constants-69754a51.js";import{L as r}from"./Link-9aff7843.js";import{L as f}from"./Link.stories-0abc68ee.js";import{u as s}from"./index-bda0bad7.js";import"./index-ebeaab24.js";import"./iframe-765586b9.js";import"../sb-preview/runtime.js";import"./index-72bda2b9.js";import"./index-9c09ad76.js";import"./index-d475d2ea.js";import"./index-356e4a49.js";import"./BaseComponentProps-a100791d.js";import"./TextOverflowEllipsis-e3546c5b.js";import"./Typography-1747463b.js";function i(o){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",ul:"ul",li:"li"},s(),o.components);return t(d,{children:[e(l,{of:f}),`
`,e(n.h1,{id:"link",children:"Link"}),`
`,e(h,{docsHref:"https://design.domstol.no/987b33f71/p/3718e2-typography",githubHref:"https://github.com/domstolene/designsystem/tree/main/packages/components/src/components/Typography/Link"}),`
`,e(n.h2,{id:"demo",children:"Demo"}),`
`,e(c,{children:e(p,{id:"dds-components-typography-link--default"})}),`
`,t(n.p,{children:["Se stories med kontrollere i ",e(r,{external:!0,href:`${g}dds-components-typography`,children:"Storybook"}),"."]}),`
`,e(n.h2,{id:"introduksjon",children:"Introduksjon"}),`
`,t(n.p,{children:[e(n.code,{children:"<Link />"})," er en komponent som tilsvarer ",e(n.code,{children:"<a>"})," HTML tag. Den arver font-relatert styling. Når arvet styling skal overskrives brukes oversikten over typografistiler definert i ",e(r,{external:!0,href:"https://design.domstol.no/987b33f71/p/63b944-typografi/b/21516f",children:"Typografi | Stiler og bruk"})," (se API)."]}),`
`,e(n.h2,{id:"bruk-i-koden",children:"Bruk i koden"}),`
`,e(k,{code:`import { Link } from '@norges-domstoler/dds-components';

<Link href="https://domstol.no">Link</Link>`}),`
`,e(n.h2,{id:"api",children:"API"}),`
`,e(a,{story:m}),`
`,t(n.p,{children:[`I tillegg støttes native HTML-attributter som er en del av
`,e(n.code,{children:"AnchorHTMLAttributes<HTMLAnchorElement>"}),`-interface.
`,e(n.code,{children:"style"}),"-prop kan settes både på toppnivå og i ",e(n.code,{children:"htmlProps"}),`, og blir slått
sammen av komponenten. `,e(n.code,{children:"onClick"}),", ",e(n.code,{children:"href"})," og ",e(n.code,{children:"target"})," støttes på toppnivå."]}),`
`,e(n.h2,{id:"retningslinjer",children:"Retningslinjer"}),`
`,t(n.ul,{children:[`
`,t(n.li,{children:["En lenke trenger ha ",e(n.code,{children:"href"})," prop for assisterende teknologi skal tolke elementet riktig."]}),`
`,t(n.li,{children:["Komponenten brukes kun til sematiske ",e(n.code,{children:"<a>"}),"-elementer."]}),`
`]})]})}function _(o={}){const{wrapper:n}=Object.assign({},s(),o.components);return n?e(n,Object.assign({},o,{children:e(i,o)})):i(o)}export{_ as default};
//# sourceMappingURL=Link-3b6dfb24.js.map