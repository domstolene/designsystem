import{a as e,j as o,F as p}from"./focus-visible-8467fd8b.js";import{M as c,C as i,e as s,A as l,P as u}from"./chunk-PCJTTTQV-467a2d71.js";import{p as h,S as a,M as f,F as r}from"./storybook-components-2ff4719e.js";import{O as g}from"./OverflowMenu.stories-ee2753b2.js";import{u as m}from"./index-6fa374d0.js";import{O as v}from"./OverflowMenuGroup-e99a7a28.js";import"./index-d47b1f5a.js";import"./iframe-529b7994.js";import"../sb-preview/runtime.js";import"./index-db9ff070.js";import"./index-d475d2ea.js";import"./index-356e4a49.js";import"./dds-icons-57b6044b.js";import"./dds-core-b89b291f.js";import"./OverflowMenu-0fe3a207.js";import"./OverflowMenuItem-4b0b5e49.js";import"./dds-typography-4e6445f7.js";import"./scrollbarStyling-b67d8d39.js";import"./ScrollableContainer.tokens-a52bc549.js";import"./Divider-1feea3ff.js";import"./Button-2e8b5f50.js";import"./Button.tokens-f3dda1de.js";import"./dds-form-9dbc5b3d.js";import"./Spinner-28eec8a8.js";function d(t){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",strong:"strong",h3:"h3",h4:"h4"},m(),t.components);return o(p,{children:[e(c,{of:g}),`
`,e(n.h1,{id:"overflowmenu",children:"OverflowMenu"}),`
`,e(h,{docsHref:"https://design.domstol.no/987b33f71/p/76d235-overflowmenu/b/5650fd",figmaHref:"https://www.figma.com/file/ewqSDmkgqDQ5PyOsRp4V5b/?node-id=5773%3A159680",githubHref:"https://github.com/domstolene/designsystem/tree/master/components/src/components/OverflowMenu"}),`
`,e(n.h2,{id:"demo",children:"Demo"}),`
`,e(i,{children:e(s,{id:"dds-components-overflowmenu--default",height:"400px"})}),`
`,e(i,{children:e(s,{id:"dds-components-overflowmenu--with-navigation",height:"600px"})}),`
`,e(i,{children:e(s,{id:"dds-components-overflowmenu--with-interactive-user",height:"450px"})}),`
`,e(a,{href:`${f}dds-components-overflowmenu`}),`
`,e(n.h2,{id:"oversikt",children:"Oversikt"}),`
`,o(n.p,{children:[e(n.code,{children:"<OverflowMenu />"})," er en komponent som viser og skjuler en liste med handlinger og/eller lenker når brukeren trykker på en knapp. ",e(n.code,{children:"<OverflowMenu />"})," plasseres i forhold til knappen, som kalles anchor-element. ",e(n.strong,{children:"OBS!"})," Anchor-elementet er ikke en del av komponenten, men den knyttes til ",e(n.code,{children:"<OverflowMenu />"})," via props (se API)."]}),`
`,o(n.p,{children:["For at typisk logikk ved åpning, lukking, refs og ARIA-attributter skal håndteres ut av boksen bruk ",e(n.code,{children:"<OverflowMenuGroup />"}),"-subkomponent. Den er ikke obligatorisk å bruke, men oppførsel og UU må da håndteres på eget ansvar."]}),`
`,e(n.h2,{id:"bruk-i-koden",children:"Bruk i koden"}),`
`,e(r,{code:`import { OverflowMenu, OverflowMenuGroup, Button } from '@norges-domstoler/dds-components';

const items = [
{ title: 'handling', onClick: () => {} }
];

<OverflowMenuGroup>
  <Button label="Åpne meny" />
  <OverflowMenu items={items} />
</OverflowMenuGroup>
`}),`
`,o(n.h3,{id:"uten-overflowmenugroup-",children:["Uten ",e(n.code,{children:"<OverflowMenuGroup />"})]}),`
`,e(r,{code:`
  import { OverflowMenu, Button } from '@norges-domstoler/dds-components';
  import { useState, useRef } from 'react';

const [isClosed, setIsClosed] = useState(true);
const toggle = () => setIsClosed(!isClosed);
const close = () => setIsClosed(true);
const buttonRef = userRef(null);
const id = 'id';

const items = [
{ title: 'handling', onClick: () => {} }
];

<Button
  label="Åpne meny"
  ref={buttonRef}
  aria-haspopup="menu"
  aria-expanded={!isClosed ? true : undefined}
  aria-controls={id}
/>
<OverflowMenu
  isOpen={!isClosed}
  onClose={close}
  anchorRef={buttonRef}
  items={items}
  id={id}
/>
`}),`
`,e(n.h2,{id:"api",children:"API"}),`
`,e(n.h3,{id:"overflowmenu-1",children:"OverflowMenu"}),`
`,o(n.p,{children:["Hovedkomponenten ",e(n.code,{children:"<OverflowMenu/>"}),"."]}),`
`,e(l,{story:u}),`
`,o(n.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",e(n.code,{children:"HTMLAttributes<HTMLDivElement>"}),"-interface i ",e(n.code,{children:"htmlProps"}),"."]}),`
`,e(n.h4,{id:"types",children:"Types"}),`
`,e(r,{code:`
  export type OverflowMenuContextItem = {
  title: string,
  icon?: SvgIcon,
  } & (
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>
  );

`}),`
`,e(r,{code:`
  export type OverflowMenuNavItem = {
  title: string,
  icon?: SvgIcon
  } & AnchorHTMLAttributes<HTMLAnchorElement>;

`}),`
`,e(r,{code:`
  export type UserProps = {
  name: string,
  href?: string
  } & (
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>
  );

`}),`
`,e(n.h3,{id:"overflowmenugroup",children:"OverflowMenuGroup"}),`
`,o(n.p,{children:["En wrapper som håndterer åpning, lukking, ARIA og refs for trigger-elementet og ",e(n.code,{children:"<OverflowMenu />"})," ut av boksen. Den skal ha anchor-elementet som første barn og ",e(n.code,{children:"<OverflowMenu />"})," som andre barn. Ikke obligatorisk, men da må oppførsel osv. håndteres utenfor komponenten."]}),`
`,e(l,{of:v})]})}function _(t={}){const{wrapper:n}=Object.assign({},m(),t.components);return n?e(n,Object.assign({},t,{children:e(d,t)})):d(t)}export{_ as default};
//# sourceMappingURL=OverflowMenu-a0082bec.js.map
