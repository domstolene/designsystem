import{a as e,j as t,F as d}from"./ddsReferenceTokens-f1d35829.js";import{M as c,C as r,e as o,A as p}from"./chunk-PCJTTTQV-c281e3f8.js";import{p as m,S as l,M as a,F as u}from"./storybook-components-97b79dd9.js";import{D as f,C}from"./Chip.stories-0974a64f.js";import{D as g,C as b}from"./ChipGroup.stories-57afd476.js";import{u as h}from"./index-6fa374d0.js";import"./index-d47b1f5a.js";import"./iframe-7f3cecf9.js";import"../sb-preview/runtime.js";import"./index-db9ff070.js";import"./index-d475d2ea.js";import"./index-356e4a49.js";import"./focus-visible-bfce03b6.js";import"./Chip-48245d85.js";import"./dds-core-c67132cd.js";import"./dds-icons-265d9665.js";import"./dds-typography-cc6cb429.js";import"./Button-aa30c63f.js";import"./Button.tokens-d278b944.js";import"./dds-form-9b45fc8d.js";import"./Spinner-dd54de98.js";function s(n){const i=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",code:"code",h3:"h3"},h(),n.components);return t(d,{children:[e(c,{title:"dds-components/Chip/Docs"}),`
`,e(i.h1,{id:"chip",children:"Chip"}),`
`,e(m,{docsHref:"https://design.domstol.no/987b33f71/p/54a74c-chip",figmaHref:"https://www.figma.com/file/ewqSDmkgqDQ5PyOsRp4V5b/?node-id=7788%3A148018",githubHref:"https://github.com/domstolene/designsystem/tree/main/packages/components/src/components/Chip"}),`
`,e(i.h2,{id:"demo",children:"Demo"}),`
`,e(r,{children:e(o,{of:f})}),`
`,e(r,{children:e(o,{of:g})}),`
`,e(l,{href:`${a}dds-components-chip-chip`}),`
`,e(i.h2,{id:"oversikt",children:"Oversikt"}),`
`,e(i.p,{children:"Komponenten består av to subkomponenter:"}),`
`,t(i.ul,{children:[`
`,t(i.li,{children:[e(i.code,{children:"<Chip />"})," - hovedkomponenten"]}),`
`,t(i.li,{children:[e(i.code,{children:"<ChipGroup />"})," - en gruppe som rendrer en liste med ",e(i.code,{children:"<Chip />"}),"-barn"]}),`
`]}),`
`,e(i.h2,{id:"bruk-i-koden",children:"Bruk i koden"}),`
`,e(u,{code:`
  import { Chip, ChipGroup } from '@norges-domstoler/dds-components';

<Chip text="text" />

<ChipGroup>
  <Chip text="text" />
</ChipGroup>
`}),`
`,e(i.h2,{id:"api",children:"API"}),`
`,e(i.h3,{id:"chip-1",children:"Chip"}),`
`,e(p,{of:C}),`
`,t(i.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",e(i.code,{children:"HTMLAttributes<HTMLDivElement>"}),"-interface i ",e(i.code,{children:"htmlProps"}),"."]}),`
`,e(i.h3,{id:"chipgroup",children:"ChipGroup"}),`
`,e(p,{of:b}),`
`,t(i.p,{children:["Det støttes alle native HTML-attributter som er en del av ",e(i.code,{children:"HTMLAttributes<HTMLUListElement>"}),"-interface i ",e(i.code,{children:"htmlProps"}),"."]}),`
`,e(i.h2,{id:"retningslinjer",children:"Retningslinjer"}),`
`,t(i.ul,{children:[`
`,t(i.li,{children:["bruk gjerne ",e(i.code,{children:"title"}),"-attributtet for å vise teksten."]}),`
`]})]})}function R(n={}){const{wrapper:i}=Object.assign({},h(),n.components);return i?e(i,Object.assign({},n,{children:e(s,n)})):s(n)}export{R as default};
//# sourceMappingURL=Chip-2061546a.js.map
