import{a as e,j as o,F as m}from"./jsx-runtime-e43ccb36.js";import{M as p,C as c,b as l,A as n}from"./chunk-HLWAVYOI-cde08465.js";import{C as h,L as u,c as i}from"./StoryTemplate-73234f44.js";import{S as g}from"./constants-69754a51.js";import{D as s,a as f}from"./Drawer.stories-72f48625.js";import{u as d}from"./index-2ef8b458.js";import{a as w}from"./DrawerGroup-8e275830.js";import"./index-1b03fe98.js";import"./iframe-46bca9bb.js";import"../sb-preview/runtime.js";import"./index-6d191f71.js";import"./index-6fd5a17b.js";import"./index-356e4a49.js";import"./ddsReferenceTokens-a28ebf03.js";import"./Caption-d810b87c.js";import"./BaseComponentProps-b6ad9f7d.js";import"./TextOverflowEllipsis-6cc9a60a.js";import"./Typography-d13ef156.js";import"./Heading-0c5437bc.js";import"./Label-05114518.js";import"./Legend-9969638c.js";import"./Link-c264ab95.js";import"./Paragraph-88055bd8.js";import"./Button-ba8adec5.js";import"./libraryAdd-72c0bfa3.js";import"./Icon-eb542f51.js";import"./Button.tokens-aa4a9c73.js";import"./normalize-f756ee4b.js";import"./Input.styles-97d4f19a.js";import"./Spinner-842be24a.js";import"./ScrollableContainer-796f47e4.js";import"./ScrollableContainer.tokens-fec9d215.js";function a(t){const r=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",h3:"h3"},d(),t.components);return o(m,{children:[e(p,{of:s}),`
`,e(r.h1,{id:"drawer",children:"Drawer"}),`
`,e(h,{docsHref:"https://design.domstol.no/987b33f71/p/79af30-drawer/b/15dc45",figmaHref:"https://www.figma.com/file/ewqSDmkgqDQ5PyOsRp4V5b/?node-id=5023%3A128351",githubHref:"https://github.com/domstolene/designsystem/tree/main/packages/components/src/components/Drawer"}),`
`,e(r.h2,{id:"demo",children:"Demo"}),`
`,e(c,{children:e(l,{of:f})}),`
`,e(u,{href:`${g}dds-components-drawer`}),`
`,e(r.h2,{id:"oversikt",children:"Oversikt"}),`
`,o(r.p,{children:[e(r.code,{children:"<Drawer />"})," er en komponent som vises når et trigger-element interageres med, vanligvis når en knapp trykkes. ",e(r.code,{children:"<Drawer />"})," kan ha valgfritt innhold."]}),`
`,o(r.p,{children:["I tillegg kan det brukes ",e(r.code,{children:"<DrawerGroup />"}),"-subkomponenten som enkelt håndterer lukking og åpning og gir både ",e(r.code,{children:"<Drawer />"})," og trigger-elementet ARIA-attributter. Den skal ha trigger-elementet som første barn og ",e(r.code,{children:"<Drawer />"})," som andre barn. Subkomponenten er valgfri å bruke. Hvis den ikke brukes må oppførsel, referanser og ARIA-attributter håndteres utenfor komponentene på eget ansvar."]}),`
`,e(r.h2,{id:"bruk-i-koden",children:"Bruk i koden"}),`
`,e(i,{code:`
  import { Drawer, DrawerGroup, Button } from '@norges-domstoler/dds-components';

<DrawerGroup>
  <Button>Åpne</Button>
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
  onClick={show}
  ref={buttonRef}
  aria-expanded={!closed}
  aria-controls={id}
  aria-haspopup="dialog"
>
  Åpne
</Button>
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
`,e(n,{of:w})]})}function J(t={}){const{wrapper:r}=Object.assign({},d(),t.components);return r?e(r,Object.assign({},t,{children:e(a,t)})):a(t)}export{J as default};
//# sourceMappingURL=Drawer-0a54f326.js.map
