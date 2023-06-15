import{j as e,a as o,F as m}from"./focus-visible-c2e9b88d.js";import{M as p,C as l,e as c,A as n}from"./chunk-PCJTTTQV-80a74cac.js";import{p as h,S as g,M as u,F as i}from"./storybook-components-045061bd.js";import{D as s,a as f,b as w}from"./Drawer.stories-47ce21e9.js";import{u as d}from"./index-bda0bad7.js";import"./index-ebeaab24.js";import"./iframe-00013f19.js";import"../sb-preview/runtime.js";import"./index-40534236.js";import"./index-9c09ad76.js";import"./useFocusTrap-2bd22ca5.js";import"./useMountTransition-15033165.js";import"./useCombinedRefs-40b11bb4.js";import"./useOnKeyDown-4552d984.js";import"./useOnClickOutside-1aed2959.js";import"./ScrollableContainer-f6de3809.js";import"./ScrollableContainer.tokens-4d8ec996.js";import"./BaseComponentProps-bb0d5515.js";import"./focusVisible-75802ac7.js";import"./Paper-12ce52e7.js";import"./selection-fae9d0a8.js";import"./Typography-9f10a259.js";import"./Typography.utils-99dd1e07.js";import"./color-a12930ac.js";import"./close-10bf9508.js";import"./SvgWrapper-cd7fa512.js";import"./Button-2e74127f.js";import"./Button.tokens-a196263c.js";import"./text-20d7ad40.js";import"./normalize-f756ee4b.js";import"./Spinner-deb75053.js";import"./Icon-819df738.js";function a(t){const r=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",h3:"h3"},d(),t.components);return o(m,{children:[e(p,{of:s}),`
`,e(r.h1,{id:"drawer",children:"Drawer"}),`
`,e(h,{docsHref:"https://design.domstol.no/987b33f71/p/79af30-drawer/b/15dc45",figmaHref:"https://www.figma.com/file/ewqSDmkgqDQ5PyOsRp4V5b/?node-id=5023%3A128351",githubHref:"https://github.com/domstolene/designsystem/tree/master/components/src/components/Drawer"}),`
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
`,e(n,{of:s}),`
`,o(r.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",e(r.code,{children:"HTMLAttributes<HTMLDivElement>"}),"-interface i ",e(r.code,{children:"htmlProps"}),"."]}),`
`,e(r.h3,{id:"drawergroup",children:"DrawerGroup"}),`
`,o(r.p,{children:["En wrapper som håndterer åpning, lukking, ARIA og refs for trigger-elementet og ",e(r.code,{children:"<Drawer />"})," ut av boksen. Den skal ha trigger-elementet som første barn og ",e(r.code,{children:"<Drawer />"})," som andre barn. Valgfri å bruke."]}),`
`,e(n,{of:w})]})}function N(t={}){const{wrapper:r}=Object.assign({},d(),t.components);return r?e(r,Object.assign({},t,{children:e(a,t)})):a(t)}export{N as default};
//# sourceMappingURL=Drawer-c6df57d1.js.map
