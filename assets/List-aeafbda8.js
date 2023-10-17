import{a as e,j as n,F as s}from"./ddsReferenceTokens-ceb64027.js";import{M as m,C as d,b as l,A as c,P as a}from"./chunk-S4VUQJ4A-98be3270.js";import{C as h,L as p,c as L}from"./StoryTemplate-dc672c6b.js";import{S as f}from"./constants-69754a51.js";import{L as u}from"./List.stories-a81db6d4.js";import{u as o}from"./index-2ef8b458.js";import"./index-1b03fe98.js";import"./iframe-524d0a09.js";import"../sb-preview/runtime.js";import"./index-4a89c107.js";import"./index-6fd5a17b.js";import"./index-356e4a49.js";import"./Caption-d066edab.js";import"./BaseComponentProps-d435d0d0.js";import"./TextOverflowEllipsis-e584ab25.js";import"./Typography-56baa34a.js";import"./Heading-d8600f49.js";import"./Label-10c93eb5.js";import"./Legend-0cba57ca.js";import"./Link-7a88da71.js";import"./Paragraph-5ad16720.js";import"./ListItem-f6ddc08a.js";function r(i){const t=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",code:"code",h3:"h3"},o(),i.components);return n(s,{children:[e(m,{of:u}),`
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
//# sourceMappingURL=List-aeafbda8.js.map
