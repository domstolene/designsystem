import{j as e,a as o,F as p}from"./focus-visible-35158c22.js";import{M as c,C as i,e as s,A as l,P as u}from"./chunk-PCJTTTQV-2606e572.js";import{p as h,S as a,M as f,F as r}from"./storybook-components-e24cb579.js";import{O as g}from"./OverflowMenu.stories-ef6dd376.js";import{u as m}from"./index-6fa374d0.js";import{O as v}from"./OverflowMenuGroup-dedf7b99.js";import"./index-d47b1f5a.js";import"./iframe-43596611.js";import"../sb-preview/runtime.js";import"./index-db9ff070.js";import"./index-d475d2ea.js";import"./index-356e4a49.js";import"./dds-icons-7a922c3a.js";import"./dds-core-29d22035.js";import"./OverflowMenu-7482705f.js";import"./OverflowMenuItem-9a10104f.js";import"./dds-typography-e761338c.js";import"./scrollbarStyling-1bd29018.js";import"./ScrollableContainer.tokens-66d4a31f.js";import"./Divider-982ab6b7.js";import"./Button-2404c0e2.js";import"./Button.tokens-f807ad1a.js";import"./dds-form-b2eacd8d.js";import"./Spinner-69e9cf92.js";function d(t){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",strong:"strong",h3:"h3",h4:"h4"},m(),t.components);return o(p,{children:[e(c,{of:g}),`
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
//# sourceMappingURL=OverflowMenu-cdf30793.js.map
