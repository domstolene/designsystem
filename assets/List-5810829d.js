import{j as e,b as n,F as o}from"./focus-visible-17f12d09.js";import{M as d,e as l,f as m,g as c,P as h}from"./index-cbcf5b87.js";import{p,S as a,M as L,F as f}from"./storybook-components-8785bb6b.js";import{L as u}from"./List.stories-09063d13.js";import{u as s}from"./index-09fac16e.js";import"./index-c6dae603.js";import"./iframe-b00db7cd.js";import"../sb-preview/runtime.js";import"./index-519f2600.js";import"./index-eb008d06.js";import"./ListItem-e7a77951.js";import"./Typography.utils-3c68477b.js";import"./focusVisible-bd00be70.js";import"./selection-dced972e.js";import"./BaseComponentProps-bb0d5515.js";import"./Typography-ddbe86f6.js";import"./color-0daeea22.js";function r(i){const t=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",code:"code",h3:"h3"},s(),i.components);return n(o,{children:[e(d,{of:u}),`
`,e(t.h1,{id:"list",children:"List"}),`
`,e(p,{docsHref:"https://design.domstol.no/987b33f71/p/89ffb5-list/b/685e71",figmaHref:"https://www.figma.com/file/ewqSDmkgqDQ5PyOsRp4V5b/?node-id=3332%3A94240",githubHref:"https://github.com/domstolene/designsystem/tree/master/components/src/components/List"}),`
`,e(t.h2,{id:"demo",children:"Demo"}),`
`,e(l,{children:e(m,{id:"dds-components-list--default"})}),`
`,e(a,{href:`${L}dds-components-list`}),`
`,e(t.h2,{id:"oversikt",children:"Oversikt"}),`
`,e(t.p,{children:"Lister bygges med to subkomponenter som tilsvarer native HTML-elementer:"}),`
`,n(t.ul,{children:[`
`,e(t.li,{children:e(t.code,{children:"<List />"})}),`
`,e(t.li,{children:e(t.code,{children:"<ListItem />"})}),`
`]}),`
`,e(t.h2,{id:"bruk-i-koden",children:"Bruk i koden"}),`
`,e(f,{code:`
  import { List, ListItem } from '@norges-domstoler/dds-components';

<List>
  <ListItem> Item </ListItem>
  <ListItem> Item </ListItem>
</List>
`}),`
`,e(t.h2,{id:"api",children:"API"}),`
`,e(t.h3,{id:"list-1",children:"List"}),`
`,n(t.p,{children:["Tilsvarer ",e(t.code,{children:"<ul>"})," eller ",e(t.code,{children:"<ol>"}),"."]}),`
`,e(c,{story:h}),`
`,n(t.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",e(t.code,{children:"HTMLAttributes<HTMLOListElement>"})," og ",e(t.code,{children:"HTMLAttributes<HTMLUListElement>"}),"-interface i ",e(t.code,{children:"htmlProps"}),"."]}),`
`,e(t.h3,{id:"listitem",children:"ListItem"}),`
`,n(t.p,{children:["Tilsvarer ",e(t.code,{children:"<li>"}),"."]}),`
`,n(t.p,{children:["Det støttes alle native HTML-attributter som er en del av ",e(t.code,{children:"HTMLAttributes<HTMLLiElement>"}),"-interface i ",e(t.code,{children:"htmlProps"}),"."]})]})}function C(i={}){const{wrapper:t}=Object.assign({},s(),i.components);return t?e(t,Object.assign({},i,{children:e(r,i)})):r(i)}export{C as default};
//# sourceMappingURL=List-5810829d.js.map
