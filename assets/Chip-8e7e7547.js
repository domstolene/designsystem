import{a as e,j as i,F as c}from"./ddsReferenceTokens-ceb64027.js";import{M as h,C as o,b as r,A as p}from"./chunk-S4VUQJ4A-98be3270.js";import{C as d,L as l,c as a}from"./StoryTemplate-dc672c6b.js";import{S as u}from"./constants-69754a51.js";import{D as f,C}from"./Chip.stories-df667e2d.js";import{D as g,C as b}from"./ChipGroup.stories-ff337ba5.js";import{u as m}from"./index-2ef8b458.js";import"./index-1b03fe98.js";import"./iframe-524d0a09.js";import"../sb-preview/runtime.js";import"./index-4a89c107.js";import"./index-6fd5a17b.js";import"./index-356e4a49.js";import"./Chip-8252dd51.js";import"./BaseComponentProps-d435d0d0.js";import"./libraryAdd-21442db5.js";import"./Icon-db6dd7fc.js";import"./Caption-d066edab.js";import"./TextOverflowEllipsis-e584ab25.js";import"./Typography-56baa34a.js";import"./Heading-d8600f49.js";import"./Label-10c93eb5.js";import"./Legend-0cba57ca.js";import"./Link-7a88da71.js";import"./Paragraph-5ad16720.js";import"./Button-2c1b8733.js";import"./Button.tokens-be477cbd.js";import"./normalize-f756ee4b.js";import"./Input.styles-82cfcbdb.js";import"./Spinner-250d1fa4.js";import"./removeListStyling-80ec5e55.js";function s(n){const t=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",code:"code",h3:"h3"},m(),n.components);return i(c,{children:[e(h,{title:"dds-components/Chip/Docs"}),`
`,e(t.h1,{id:"chip",children:"Chip"}),`
`,e(d,{docsHref:"https://design.domstol.no/987b33f71/p/54a74c-chip",figmaHref:"https://www.figma.com/file/ewqSDmkgqDQ5PyOsRp4V5b/?node-id=7788%3A148018",githubHref:"https://github.com/domstolene/designsystem/tree/main/packages/components/src/components/Chip"}),`
`,e(t.h2,{id:"demo",children:"Demo"}),`
`,e(o,{children:e(r,{of:f})}),`
`,e(o,{children:e(r,{of:g})}),`
`,e(l,{href:`${u}dds-components-chip-chip`}),`
`,e(t.h2,{id:"oversikt",children:"Oversikt"}),`
`,e(t.p,{children:"Komponenten består av to subkomponenter:"}),`
`,i(t.ul,{children:[`
`,i(t.li,{children:[e(t.code,{children:"<Chip />"})," - hovedkomponenten"]}),`
`,i(t.li,{children:[e(t.code,{children:"<ChipGroup />"})," - en gruppe som rendrer en liste med ",e(t.code,{children:"<Chip />"}),"-barn"]}),`
`]}),`
`,e(t.h2,{id:"bruk-i-koden",children:"Bruk i koden"}),`
`,e(a,{code:`
  import { Chip, ChipGroup } from '@norges-domstoler/dds-components';

<Chip text="text" />

<ChipGroup>
  <Chip text="text" />
</ChipGroup>
`}),`
`,e(t.h2,{id:"api",children:"API"}),`
`,e(t.h3,{id:"chip-1",children:"Chip"}),`
`,e(p,{of:C}),`
`,i(t.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",e(t.code,{children:"HTMLAttributes<HTMLDivElement>"}),"-interface i ",e(t.code,{children:"htmlProps"}),"."]}),`
`,e(t.h3,{id:"chipgroup",children:"ChipGroup"}),`
`,e(p,{of:b}),`
`,i(t.p,{children:["Det støttes alle native HTML-attributter som er en del av ",e(t.code,{children:"HTMLAttributes<HTMLUListElement>"}),"-interface i ",e(t.code,{children:"htmlProps"}),"."]}),`
`,e(t.h2,{id:"retningslinjer",children:"Retningslinjer"}),`
`,i(t.ul,{children:[`
`,i(t.li,{children:["bruk gjerne ",e(t.code,{children:"title"}),"-attributtet for å vise teksten."]}),`
`]})]})}function z(n={}){const{wrapper:t}=Object.assign({},m(),n.components);return t?e(t,Object.assign({},n,{children:e(s,n)})):s(n)}export{z as default};
//# sourceMappingURL=Chip-8e7e7547.js.map
