import{a as e,j as t,F as d}from"./focus-visible-8467fd8b.js";import{M as l,C as c,e as p,A as a,P as h}from"./chunk-PCJTTTQV-784d8e4f.js";import{p as m,M as k,F as g}from"./storybook-components-dc8c0578.js";import{L as o}from"./Link-7189fff9.js";import{L as f}from"./Link.stories-552baf20.js";import{u as s}from"./index-6fa374d0.js";import"./index-d47b1f5a.js";import"./iframe-35f96930.js";import"../sb-preview/runtime.js";import"./index-db9ff070.js";import"./index-d475d2ea.js";import"./index-356e4a49.js";import"./dds-core-b89b291f.js";import"./Typography-aacb8cd1.js";function i(r){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",ul:"ul",li:"li"},s(),r.components);return t(d,{children:[e(l,{of:f}),`
`,e(n.h1,{id:"link",children:"Link"}),`
`,e(m,{docsHref:"https://design.domstol.no/987b33f71/p/3718e2-typography",githubHref:"https://github.com/domstolene/designsystem/tree/master/components/src/components/Typography/Link"}),`
`,e(n.h2,{id:"demo",children:"Demo"}),`
`,e(c,{children:e(p,{id:"dds-components-typography-link--default"})}),`
`,t(n.p,{children:["Se stories med kontrollere i ",e(o,{external:!0,href:`${k}dds-components-typography`,children:"Storybook"}),"."]}),`
`,e(n.h2,{id:"introduksjon",children:"Introduksjon"}),`
`,t(n.p,{children:[e(n.code,{children:"<Link />"})," er en komponent som tilsvarer ",e(n.code,{children:"<a>"})," HTML tag. Den arver font-relatert styling. Når arvet styling skal overskrives brukes oversikten over typografistiler definert i ",e(o,{external:!0,href:"https://design.domstol.no/987b33f71/p/63b944-typografi/b/21516f",children:"Typografi | Stiler og bruk"})," (se API)."]}),`
`,e(n.h2,{id:"bruk-i-koden",children:"Bruk i koden"}),`
`,e(g,{code:`import { Link } from '@norges-domstoler/dds-components';

<Link href="https://domstol.no">Link</Link>`}),`
`,e(n.h2,{id:"api",children:"API"}),`
`,e(a,{story:h}),`
`,t(n.p,{children:[`I tillegg støttes native HTML-attributter som er en del av
`,e(n.code,{children:"AnchorHTMLAttributes<HTMLAnchorElement>"}),`-interface.
`,e(n.code,{children:"style"}),"-prop kan settes både på toppnivå og i ",e(n.code,{children:"htmlProps"}),`, og blir slått
sammen av komponenten. `,e(n.code,{children:"onClick"}),", ",e(n.code,{children:"href"})," og ",e(n.code,{children:"target"})," støttes på toppnivå."]}),`
`,e(n.h2,{id:"retningslinjer",children:"Retningslinjer"}),`
`,t(n.ul,{children:[`
`,t(n.li,{children:["En lenke trenger ha ",e(n.code,{children:"href"})," prop for assisterende teknologi skal tolke elementet riktig."]}),`
`,t(n.li,{children:["Komponenten brukes kun til sematiske ",e(n.code,{children:"<a>"}),"-elementer."]}),`
`]})]})}function I(r={}){const{wrapper:n}=Object.assign({},s(),r.components);return n?e(n,Object.assign({},r,{children:e(i,r)})):i(r)}export{I as default};
//# sourceMappingURL=Link-64d20ab1.js.map
