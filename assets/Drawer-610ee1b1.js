import{a as e,j as n,F as l}from"./focus-visible-8467fd8b.js";import{M as c,C as m,e as p,A as t}from"./chunk-PCJTTTQV-aabcbb96.js";import{p as h,S as g,M as u,F as i}from"./storybook-components-76b2a6b1.js";import{D as s,a as f,b as w}from"./Drawer.stories-a41f1c25.js";import{u as d}from"./index-6fa374d0.js";import"./index-d47b1f5a.js";import"./iframe-59584ab4.js";import"../sb-preview/runtime.js";import"./index-db9ff070.js";import"./index-d475d2ea.js";import"./index-356e4a49.js";import"./dds-typography-4e6445f7.js";import"./dds-core-b89b291f.js";import"./dds-icons-f9255b51.js";import"./dds-form-9dbc5b3d.js";import"./ScrollableContainer-10fabcf9.js";import"./ScrollableContainer.tokens-a52bc549.js";import"./Button-ca35c045.js";import"./Button.tokens-f3dda1de.js";import"./Spinner-28eec8a8.js";function a(o){const r=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",h3:"h3"},d(),o.components);return n(l,{children:[e(c,{of:s}),`
`,e(r.h1,{id:"drawer",children:"Drawer"}),`
`,e(h,{docsHref:"https://design.domstol.no/987b33f71/p/79af30-drawer/b/15dc45",figmaHref:"https://www.figma.com/file/ewqSDmkgqDQ5PyOsRp4V5b/?node-id=5023%3A128351",githubHref:"https://github.com/domstolene/designsystem/tree/master/components/src/components/Drawer"}),`
`,e(r.h2,{id:"demo",children:"Demo"}),`
`,e(m,{children:e(p,{of:f})}),`
`,e(g,{href:`${u}dds-components-drawer`}),`
`,e(r.h2,{id:"oversikt",children:"Oversikt"}),`
`,n(r.p,{children:[e(r.code,{children:"<Drawer />"})," er en komponent som vises når et trigger-element interageres med, vanligvis når en knapp trykkes. ",e(r.code,{children:"<Drawer />"})," kan ha valgfritt innhold."]}),`
`,n(r.p,{children:["I tillegg kan det brukes ",e(r.code,{children:"<DrawerGroup />"}),"-subkomponenten som enkelt håndterer lukking og åpning og gir både ",e(r.code,{children:"<Drawer />"})," og trigger-elementet ARIA-attributter. Den skal ha trigger-elementet som første barn og ",e(r.code,{children:"<Drawer />"})," som andre barn. Subkomponenten er valgfri å bruke. Hvis den ikke brukes må oppførsel, referanser og ARIA-attributter håndteres utenfor komponentene på eget ansvar."]}),`
`,e(r.h2,{id:"bruk-i-koden",children:"Bruk i koden"}),`
`,e(i,{code:`
  import { Drawer, DrawerGroup, Button } from '@norges-domstoler/dds-components';

<DrawerGroup>
  <Button label="Åpne" />
  <Drawer header="Tittel">Innhold</Drawer>
</DrawerGroup>
`}),`
`,n(r.h3,{id:"uten-drawergroup-",children:["Uten ",e(r.code,{children:"<DrawerGroup />"})]}),`
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
`,n(r.p,{children:["Hovedkomponenten ",e(r.code,{children:"<Drawer/>"}),"."]}),`
`,e(t,{of:s}),`
`,n(r.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",e(r.code,{children:"HTMLAttributes<HTMLDivElement>"}),"-interface i ",e(r.code,{children:"htmlProps"}),"."]}),`
`,e(r.h3,{id:"drawergroup",children:"DrawerGroup"}),`
`,n(r.p,{children:["En wrapper som håndterer åpning, lukking, ARIA og refs for trigger-elementet og ",e(r.code,{children:"<Drawer />"})," ut av boksen. Den skal ha trigger-elementet som første barn og ",e(r.code,{children:"<Drawer />"})," som andre barn. Valgfri å bruke."]}),`
`,e(t,{of:w})]})}function P(o={}){const{wrapper:r}=Object.assign({},d(),o.components);return r?e(r,Object.assign({},o,{children:e(a,o)})):a(o)}export{P as default};
//# sourceMappingURL=Drawer-610ee1b1.js.map
