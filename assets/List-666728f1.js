import{a as e,j as n,F as s}from"./ddsReferenceTokens-647ce456.js";import{M as m,C as d,b as l,A as c,P as a}from"./chunk-S4VUQJ4A-45bcf0b3.js";import{C as h,L as p,c as L}from"./StoryTemplate-40ed0c91.js";import{S as f}from"./constants-69754a51.js";import{L as u}from"./List.stories-0b83260d.js";import{u as o}from"./index-bda0bad7.js";import"./index-ebeaab24.js";import"./iframe-04aa59bd.js";import"../sb-preview/runtime.js";import"./index-72bda2b9.js";import"./index-9c09ad76.js";import"./index-356e4a49.js";import"./Caption-0ff47cfa.js";import"./BaseComponentProps-a100791d.js";import"./TextOverflowEllipsis-e3546c5b.js";import"./Typography-d54ea9fd.js";import"./Heading-ded557b4.js";import"./Label-b7852367.js";import"./Legend-d58c0461.js";import"./Link-037ca604.js";import"./Paragraph-a74f99d8.js";import"./ListItem-baacdcac.js";function r(i){const t=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",code:"code",h3:"h3"},o(),i.components);return n(s,{children:[e(m,{of:u}),`
`,e(t.h1,{id:"list",children:"List"}),`
`,e(h,{docsHref:"https://design.domstol.no/987b33f71/p/89ffb5-list/b/685e71",figmaHref:"https://www.figma.com/file/ewqSDmkgqDQ5PyOsRp4V5b/?node-id=3332%3A94240",githubHref:"https://github.com/domstolene/designsystem/tree/main/packages/components/src/components/List"}),`
`,e(t.h2,{id:"demo",children:"Demo"}),`
`,e(d,{children:e(l,{id:"dds-components-list--default"})}),`
`,e(p,{href:`${f}dds-components-list`}),`
`,e(t.h2,{id:"oversikt",children:"Oversikt"}),`
`,e(t.p,{children:"Lister bygges med to subkomponenter som tilsvarer native HTML-elementer:"}),`
`,n(t.ul,{children:[`
`,e(t.li,{children:e(t.code,{children:"<List />"})}),`
`,e(t.li,{children:e(t.code,{children:"<ListItem />"})}),`
`]}),`
`,e(t.h2,{id:"bruk-i-koden",children:"Bruk i koden"}),`
`,e(L,{code:`
  import { List, ListItem } from '@norges-domstoler/dds-components';

<List>
  <ListItem> Item </ListItem>
  <ListItem> Item </ListItem>
</List>
`}),`
`,e(t.h2,{id:"api",children:"API"}),`
`,e(t.h3,{id:"list-1",children:"List"}),`
`,n(t.p,{children:["Tilsvarer ",e(t.code,{children:"<ul>"})," eller ",e(t.code,{children:"<ol>"}),"."]}),`
`,e(c,{story:a}),`
`,n(t.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",e(t.code,{children:"HTMLAttributes<HTMLOListElement>"})," og ",e(t.code,{children:"HTMLAttributes<HTMLUListElement>"}),"-interface i ",e(t.code,{children:"htmlProps"}),"."]}),`
`,e(t.h3,{id:"listitem",children:"ListItem"}),`
`,n(t.p,{children:["Tilsvarer ",e(t.code,{children:"<li>"}),"."]}),`
`,n(t.p,{children:["Det støttes alle native HTML-attributter som er en del av ",e(t.code,{children:"HTMLAttributes<HTMLLiElement>"}),"-interface i ",e(t.code,{children:"htmlProps"}),"."]})]})}function Y(i={}){const{wrapper:t}=Object.assign({},o(),i.components);return t?e(t,Object.assign({},i,{children:e(r,i)})):r(i)}export{Y as default};
//# sourceMappingURL=List-666728f1.js.map
