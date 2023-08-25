import{a as e,j as n,F as l}from"./ddsReferenceTokens-f1d35829.js";import{M as m,C as c,e as p,A as t}from"./chunk-PCJTTTQV-d633578a.js";import{p as h,S as g,M as u,F as i}from"./storybook-components-eb38b664.js";import{D as s,a as f,b as w}from"./Drawer.stories-df11097a.js";import{u as d}from"./index-6fa374d0.js";import"./index-d47b1f5a.js";import"./iframe-f31fa69e.js";import"../sb-preview/runtime.js";import"./index-db9ff070.js";import"./index-d475d2ea.js";import"./index-356e4a49.js";import"./focus-visible-bfce03b6.js";import"./dds-typography-cc6cb429.js";import"./dds-core-c67132cd.js";import"./dds-icons-265d9665.js";import"./dds-form-9b45fc8d.js";import"./ScrollableContainer-c51c141e.js";import"./ScrollableContainer.tokens-c202eeaf.js";import"./Button-aa30c63f.js";import"./Button.tokens-d278b944.js";import"./Spinner-dd54de98.js";function a(o){const r=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",h3:"h3"},d(),o.components);return n(l,{children:[e(m,{of:s}),`
`,e(r.h1,{id:"drawer",children:"Drawer"}),`
`,e(h,{docsHref:"https://design.domstol.no/987b33f71/p/79af30-drawer/b/15dc45",figmaHref:"https://www.figma.com/file/ewqSDmkgqDQ5PyOsRp4V5b/?node-id=5023%3A128351",githubHref:"https://github.com/domstolene/designsystem/tree/master/components/src/components/Drawer"}),`
`,e(r.h2,{id:"demo",children:"Demo"}),`
`,e(c,{children:e(p,{of:f})}),`
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
`,e(t,{of:w})]})}function X(o={}){const{wrapper:r}=Object.assign({},d(),o.components);return r?e(r,Object.assign({},o,{children:e(a,o)})):a(o)}export{X as default};
//# sourceMappingURL=Drawer-d0759f37.js.map
