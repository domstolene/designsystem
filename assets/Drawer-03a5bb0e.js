import{a as e,j as o,F as m}from"./jsx-runtime-e43ccb36.js";import{M as p,C as l,b as c,A as t}from"./chunk-S4VUQJ4A-ef04515c.js";import{C as h,L as g,c as i}from"./StoryTemplate-a536eef8.js";import{S as u}from"./constants-69754a51.js";import{D as a,a as f}from"./Drawer.stories-43abf1e5.js";import{u as d}from"./index-2ef8b458.js";import{a as w}from"./DrawerGroup-62a01630.js";import"./index-1b03fe98.js";import"./iframe-ddff3556.js";import"../sb-preview/runtime.js";import"./index-4a89c107.js";import"./index-6fd5a17b.js";import"./index-356e4a49.js";import"./ddsReferenceTokens-f9f5a4e4.js";import"./Caption-6d408196.js";import"./BaseComponentProps-9c025471.js";import"./TextOverflowEllipsis-1edb8626.js";import"./Typography-e857479c.js";import"./Heading-5f7faa2b.js";import"./Label-9dee7f37.js";import"./Legend-41f9f05c.js";import"./Link-1567bf4e.js";import"./Paragraph-998f64b8.js";import"./Button-cdaa071a.js";import"./libraryAdd-5ac12ed0.js";import"./Icon-1678d620.js";import"./Button.tokens-4b98f929.js";import"./normalize-f756ee4b.js";import"./Input.styles-3d1af983.js";import"./Spinner-50e72058.js";import"./ScrollableContainer-67bc1bdc.js";import"./ScrollableContainer.tokens-17f22553.js";function s(n){const r=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",h3:"h3"},d(),n.components);return o(m,{children:[e(p,{of:a}),`
`,e(r.h1,{id:"drawer",children:"Drawer"}),`
`,e(h,{docsHref:"https://design.domstol.no/987b33f71/p/79af30-drawer/b/15dc45",figmaHref:"https://www.figma.com/file/ewqSDmkgqDQ5PyOsRp4V5b/?node-id=5023%3A128351",githubHref:"https://github.com/domstolene/designsystem/tree/main/packages/components/src/components/Drawer"}),`
`,e(r.h2,{id:"demo",children:"Demo"}),`
`,e(l,{children:e(c,{of:f})}),`
`,e(g,{href:`${u}dds-components-drawer`}),`
`,e(r.h2,{id:"oversikt",children:"Oversikt"}),`
`,o(r.p,{children:[e(r.code,{children:"<Drawer />"})," er en komponent som vises når et trigger-element interageres med, vanligvis når en knapp trykkes. ",e(r.code,{children:"<Drawer />"})," kan ha valgfritt innhold."]}),`
`,o(r.p,{children:["I tillegg kan det brukes ",e(r.code,{children:"<DrawerGroup />"}),"-subkomponenten som enkelt håndterer lukking og åpning og gir både ",e(r.code,{children:"<Drawer />"})," og trigger-elementet ARIA-attributter. Den skal ha trigger-elementet som første barn og ",e(r.code,{children:"<Drawer />"})," som andre barn. Subkomponenten er valgfri å bruke. Hvis den ikke brukes må oppførsel, referanser og ARIA-attributter håndteres utenfor komponentene på eget ansvar."]}),`
`,e(r.h2,{id:"bruk-i-koden",children:"Bruk i koden"}),`
`,e(i,{code:`
  import { Drawer, DrawerGroup, Button } from '@norges-domstoler/dds-components';

<DrawerGroup>
  <Button label="Åpne" />
  <Drawer header="Tittel">Innhold</Drawer>
</DrawerGroup>
`}),`
`,o(r.h3,{id:"uten-drawergroup-",children:["Uten ",e(r.code,{children:"<DrawerGroup />"})]}),`
`,e(i,{code:`
import { Drawer, Button } from '@norges-domstoler/dds-components';
import { useState, useRef } from 'react';

const [closed, setClosed] = useState(true);
const show = () => setClosed(false);
const close = () => setClosed(true);
const buttonRef = useRef(null);
const id = 'id';

<Button
  label="Åpne"
  onClick={show}
  ref={buttonRef}
  aria-expanded={!closed}
  aria-controls={id}
  aria-haspopup="dialog"
/>
<Drawer
  header="Tittel"
  id={id}
  triggerRef={buttonRef}
  isOpen={!closed}
  onClose={onClose}
>
  Innhold
</Drawer>`}),`
`,e(r.h2,{id:"api",children:"API"}),`
`,e(r.h3,{id:"drawer-1",children:"Drawer"}),`
`,o(r.p,{children:["Hovedkomponenten ",e(r.code,{children:"<Drawer/>"}),"."]}),`
`,e(t,{of:a}),`
`,o(r.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",e(r.code,{children:"HTMLAttributes<HTMLDivElement>"}),"-interface i ",e(r.code,{children:"htmlProps"}),"."]}),`
`,e(r.h3,{id:"drawergroup",children:"DrawerGroup"}),`
`,o(r.p,{children:["En wrapper som håndterer åpning, lukking, ARIA og refs for trigger-elementet og ",e(r.code,{children:"<Drawer />"})," ut av boksen. Den skal ha trigger-elementet som første barn og ",e(r.code,{children:"<Drawer />"})," som andre barn. Valgfri å bruke."]}),`
`,e(t,{of:w})]})}function J(n={}){const{wrapper:r}=Object.assign({},d(),n.components);return r?e(r,Object.assign({},n,{children:e(s,n)})):s(n)}export{J as default};
//# sourceMappingURL=Drawer-03a5bb0e.js.map
