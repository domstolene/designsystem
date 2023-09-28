import{a as e,j as n,F as p}from"./ddsReferenceTokens-647ce456.js";import{M as c,C as i,b as s,A as l,P as u}from"./chunk-S4VUQJ4A-c34dda98.js";import{C as a,L as h,c as r}from"./StoryTemplate-2a43fd02.js";import{S as f}from"./constants-69754a51.js";import{O as g}from"./OverflowMenu.stories-f3c51571.js";import{u as d}from"./index-bda0bad7.js";import{O as v}from"./OverflowMenuGroup-f2dacde7.js";import"./index-ebeaab24.js";import"./iframe-552ab5ea.js";import"../sb-preview/runtime.js";import"./index-72bda2b9.js";import"./index-9c09ad76.js";import"./index-356e4a49.js";import"./libraryAdd-35e18a4f.js";import"./Icon-42793503.js";import"./BaseComponentProps-a100791d.js";import"./OverflowMenu-9c02bbdc.js";import"./useFloatPosition-16b5a301.js";import"./floating-ui.dom-a5fd4560.js";import"./OverflowMenuItem-5fa82ba8.js";import"./normalize-f756ee4b.js";import"./Caption-9d9a71c0.js";import"./TextOverflowEllipsis-e3546c5b.js";import"./Typography-b6b10a83.js";import"./Heading-b4646737.js";import"./Label-470a2743.js";import"./Legend-6fbf6204.js";import"./Link-3e1e1a74.js";import"./Paragraph-ff3eeae6.js";import"./scrollbarStyling-d0d816c9.js";import"./ScrollableContainer.tokens-e480b498.js";import"./Divider-97c7888f.js";import"./Button-09f75747.js";import"./Button.tokens-cb9e169d.js";import"./Input.styles-01f05292.js";import"./Spinner-866d56ff.js";function m(t){const o=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",strong:"strong",h3:"h3",h4:"h4"},d(),t.components);return n(p,{children:[e(c,{of:g}),`
`,e(o.h1,{id:"overflowmenu",children:"OverflowMenu"}),`
`,e(a,{docsHref:"https://design.domstol.no/987b33f71/p/76d235-overflowmenu/b/5650fd",figmaHref:"https://www.figma.com/file/ewqSDmkgqDQ5PyOsRp4V5b/?node-id=5773%3A159680",githubHref:"https://github.com/domstolene/designsystem/tree/main/packages/components/src/components/OverflowMenu"}),`
`,e(o.h2,{id:"demo",children:"Demo"}),`
`,e(i,{children:e(s,{id:"dds-components-overflowmenu--default",height:"400px"})}),`
`,e(i,{children:e(s,{id:"dds-components-overflowmenu--with-navigation",height:"600px"})}),`
`,e(i,{children:e(s,{id:"dds-components-overflowmenu--with-interactive-user",height:"450px"})}),`
`,e(h,{href:`${f}dds-components-overflowmenu`}),`
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
`,e(l,{of:v})]})}function ee(t={}){const{wrapper:o}=Object.assign({},d(),t.components);return o?e(o,Object.assign({},t,{children:e(m,t)})):m(t)}export{ee as default};
//# sourceMappingURL=OverflowMenu-43f263ad.js.map
