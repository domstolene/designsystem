import{j as e,a as n,F as p}from"./focus-visible-c2e9b88d.js";import{M as c,C as i,e as s,A as l,P as u}from"./chunk-PCJTTTQV-a67c1498.js";import{p as h,S as a,M as f,F as r}from"./storybook-components-c9cbefc3.js";import{O as g}from"./OverflowMenu.stories-cbebe6a6.js";import{u as d}from"./index-bda0bad7.js";import{O as v}from"./OverflowMenuGroup-b288a120.js";import"./index-ebeaab24.js";import"./iframe-b2bf83f2.js";import"../sb-preview/runtime.js";import"./index-72bda2b9.js";import"./index-9c09ad76.js";import"./index-d475d2ea.js";import"./index-356e4a49.js";import"./OverflowMenu-04596b71.js";import"./OverflowMenuItem-09e2a28b.js";import"./text-20d7ad40.js";import"./Typography.utils-99dd1e07.js";import"./focusVisible-75802ac7.js";import"./normalize-f756ee4b.js";import"./useCombinedRefs-40b11bb4.js";import"./BaseComponentProps-bb0d5515.js";import"./Icon-819df738.js";import"./visibilityTransition-933c6349.js";import"./scrollbarStyling-a46ac0ea.js";import"./ScrollableContainer.tokens-4d8ec996.js";import"./useFloatPosition-f03daf4a.js";import"./floating-ui.react-dom.esm-92a27cd2.js";import"./floating-ui.dom.browser.min-c4825b7a.js";import"./useRoveFocus-1974dcb0.js";import"./person-eb4bd89d.js";import"./SvgWrapper-cd7fa512.js";import"./selection-fae9d0a8.js";import"./useOnClickOutside-1aed2959.js";import"./useOnKeyDown-4552d984.js";import"./Divider-ed4eb34e.js";import"./Button-2e74127f.js";import"./Button.tokens-a196263c.js";import"./Spinner-deb75053.js";import"./color-a12930ac.js";import"./menu-35d03998.js";import"./plusCircled-05259c8d.js";function m(t){const o=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",strong:"strong",h3:"h3",h4:"h4"},d(),t.components);return n(p,{children:[e(c,{of:g}),`
`,e(o.h1,{id:"overflowmenu",children:"OverflowMenu"}),`
`,e(h,{docsHref:"https://design.domstol.no/987b33f71/p/76d235-overflowmenu/b/5650fd",figmaHref:"https://www.figma.com/file/ewqSDmkgqDQ5PyOsRp4V5b/?node-id=5773%3A159680",githubHref:"https://github.com/domstolene/designsystem/tree/master/components/src/components/OverflowMenu"}),`
`,e(o.h2,{id:"demo",children:"Demo"}),`
`,e(i,{children:e(s,{id:"dds-components-overflowmenu--default",height:"400px"})}),`
`,e(i,{children:e(s,{id:"dds-components-overflowmenu--with-navigation",height:"600px"})}),`
`,e(i,{children:e(s,{id:"dds-components-overflowmenu--with-interactive-user",height:"450px"})}),`
`,e(a,{href:`${f}dds-components-overflowmenu`}),`
`,e(o.h2,{id:"oversikt",children:"Oversikt"}),`
`,n(o.p,{children:[e(o.code,{children:"<OverflowMenu />"})," er en komponent som viser og skjuler en liste med handlinger og/eller lenker når brukeren trykker på en knapp. ",e(o.code,{children:"<OverflowMenu />"})," plasseres i forhold til knappen, som kalles anchor-element. ",e(o.strong,{children:"OBS!"})," Anchor-elementet er ikke en del av komponenten, men den knyttes til ",e(o.code,{children:"<OverflowMenu />"})," via props (se API)."]}),`
`,n(o.p,{children:["For at typisk logikk ved åpning, lukking, refs og ARIA-attributter skal håndteres ut av boksen bruk ",e(o.code,{children:"<OverflowMenuGroup />"}),"-subkomponent. Den er ikke obligatorisk å bruke, men oppførsel og UU må da håndteres på eget ansvar."]}),`
`,e(o.h2,{id:"bruk-i-koden",children:"Bruk i koden"}),`
`,e(r,{code:`import { OverflowMenu, OverflowMenuGroup, Button } from '@norges-domstoler/dds-components';

const items = [
{ title: 'handling', onClick: () => {} }
];

<OverflowMenuGroup>
  <Button label="Åpne meny" />
  <OverflowMenu items={items} />
</OverflowMenuGroup>
`}),`
`,n(o.h3,{id:"uten-overflowmenugroup-",children:["Uten ",e(o.code,{children:"<OverflowMenuGroup />"})]}),`
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
`,e(o.h2,{id:"api",children:"API"}),`
`,e(o.h3,{id:"overflowmenu-1",children:"OverflowMenu"}),`
`,n(o.p,{children:["Hovedkomponenten ",e(o.code,{children:"<OverflowMenu/>"}),"."]}),`
`,e(l,{story:u}),`
`,n(o.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",e(o.code,{children:"HTMLAttributes<HTMLDivElement>"}),"-interface i ",e(o.code,{children:"htmlProps"}),"."]}),`
`,e(o.h4,{id:"types",children:"Types"}),`
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
`,e(o.h3,{id:"overflowmenugroup",children:"OverflowMenuGroup"}),`
`,n(o.p,{children:["En wrapper som håndterer åpning, lukking, ARIA og refs for trigger-elementet og ",e(o.code,{children:"<OverflowMenu />"})," ut av boksen. Den skal ha anchor-elementet som første barn og ",e(o.code,{children:"<OverflowMenu />"})," som andre barn. Ikke obligatorisk, men da må oppførsel osv. håndteres utenfor komponenten."]}),`
`,e(l,{of:v})]})}function ie(t={}){const{wrapper:o}=Object.assign({},d(),t.components);return o?e(o,Object.assign({},t,{children:e(m,t)})):m(t)}export{ie as default};
//# sourceMappingURL=OverflowMenu-5a1ea1d6.js.map
