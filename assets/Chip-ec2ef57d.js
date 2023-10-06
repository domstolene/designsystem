import{a as e,j as i,F as c}from"./ddsReferenceTokens-647ce456.js";import{M as h,C as o,b as r,A as p}from"./chunk-S4VUQJ4A-80f24beb.js";import{C as d,L as l,c as a}from"./StoryTemplate-a06893d1.js";import{S as u}from"./constants-69754a51.js";import{D as f,C}from"./Chip.stories-260873b8.js";import{D as g,C as b}from"./ChipGroup.stories-36e1218a.js";import{u as m}from"./index-bda0bad7.js";import"./index-ebeaab24.js";import"./iframe-c84e3ef2.js";import"../sb-preview/runtime.js";import"./index-72bda2b9.js";import"./index-9c09ad76.js";import"./index-356e4a49.js";import"./Chip-f0257966.js";import"./BaseComponentProps-a100791d.js";import"./libraryAdd-35e18a4f.js";import"./Icon-42793503.js";import"./Caption-0ff47cfa.js";import"./TextOverflowEllipsis-e3546c5b.js";import"./Typography-d54ea9fd.js";import"./Heading-ded557b4.js";import"./Label-b7852367.js";import"./Legend-d58c0461.js";import"./Link-037ca604.js";import"./Paragraph-a74f99d8.js";import"./Button-f2a6066f.js";import"./Button.tokens-cb9e169d.js";import"./normalize-f756ee4b.js";import"./Input.styles-115c96a3.js";import"./Spinner-866d56ff.js";import"./removeListStyling-80ec5e55.js";function s(n){const t=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",code:"code",h3:"h3"},m(),n.components);return i(c,{children:[e(h,{title:"dds-components/Chip/Docs"}),`
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
//# sourceMappingURL=Chip-ec2ef57d.js.map
