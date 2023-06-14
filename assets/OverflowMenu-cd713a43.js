import{j as e,b as n,F as p}from"./focus-visible-17f12d09.js";import{M as c,e as i,f as s,g as l,P as u}from"./index-c0e0960b.js";import{p as h,S as a,M as f,F as r}from"./storybook-components-b7b7a39c.js";import{O as g}from"./OverflowMenu.stories-1b11e42c.js";import{u as d}from"./index-09fac16e.js";import{O as v}from"./OverflowMenuGroup-46b69d4a.js";import"./index-c6dae603.js";import"./iframe-6efa2ccf.js";import"../sb-preview/runtime.js";import"./index-519f2600.js";import"./index-eb008d06.js";import"./OverflowMenu-5ddbf0b1.js";import"./OverflowMenuItem-7faee782.js";import"./text-20d7ad40.js";import"./Typography.utils-3c68477b.js";import"./focusVisible-bd00be70.js";import"./normalize-f756ee4b.js";import"./useCombinedRefs-764cd8e8.js";import"./BaseComponentProps-bb0d5515.js";import"./Icon-a968456f.js";import"./useRoveFocus-01d68aa4.js";import"./person-f585b587.js";import"./SvgWrapper-0812a1f2.js";import"./visibilityTransition-86c3da85.js";import"./scrollbarStyling-27f949d7.js";import"./ScrollableContainer.tokens-3dce5c89.js";import"./selection-dced972e.js";import"./useFloatPosition-f4d76573.js";import"./floating-ui.react-dom.esm-68eb967a.js";import"./floating-ui.dom.browser.min-bfaefb31.js";import"./useOnClickOutside-08b83e6f.js";import"./useOnKeyDown-77bae070.js";import"./Divider-92e35ab0.js";import"./Button-4fdfc19e.js";import"./Button.tokens-82906d32.js";import"./Spinner-7298b3ed.js";import"./color-0daeea22.js";import"./menu-28e097da.js";import"./plusCircled-2a049c6a.js";function m(t){const o=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",strong:"strong",h3:"h3",h4:"h4"},d(),t.components);return n(p,{children:[e(c,{of:g}),`
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
`,e(l,{of:v})]})}function te(t={}){const{wrapper:o}=Object.assign({},d(),t.components);return o?e(o,Object.assign({},t,{children:e(m,t)})):m(t)}export{te as default};
//# sourceMappingURL=OverflowMenu-cd713a43.js.map
