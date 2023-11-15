import{a as e,j as n,F as p}from"./jsx-runtime-e43ccb36.js";import{M as c,C as i,b as s,A as l,P as u}from"./chunk-HLWAVYOI-3e05d052.js";import{C as a,L as h,c as r}from"./StoryTemplate-6a95b3b2.js";import{S as f}from"./constants-c672c5f8.js";import{O as g}from"./OverflowMenu.stories-ec174a1a.js";import{u as d}from"./index-2ef8b458.js";import{O as v}from"./OverflowMenuGroup-fec72746.js";import"./index-1b03fe98.js";import"./iframe-32b856a7.js";import"../sb-preview/runtime.js";import"./index-6d191f71.js";import"./index-6fd5a17b.js";import"./index-356e4a49.js";import"./ddsReferenceTokens-cf345c8b.js";import"./libraryAdd-1d1f72ea.js";import"./Icon-764411b5.js";import"./BaseComponentProps-77dc9c6e.js";import"./OverflowMenu-130e7efb.js";import"./useFloatPosition-8239dfed.js";import"./floating-ui.dom-a5fd4560.js";import"./OverflowMenuItem-4d35f578.js";import"./normalize-f756ee4b.js";import"./Caption-956f7c23.js";import"./TextOverflowEllipsis-5f7b5b23.js";import"./Typography-aec60abc.js";import"./Heading-1a21ccc8.js";import"./Label-1e45d63d.js";import"./Legend-8f4b1074.js";import"./Link-1d242339.js";import"./Paragraph-6d49c218.js";import"./scrollbarStyling-5c8dd8e6.js";import"./ScrollableContainer.tokens-2f8b82e4.js";import"./Divider-f0fd1e93.js";import"./Button-ce4ef2c9.js";import"./Button.tokens-a9a7352b.js";import"./Input.styles-4ebb4961.js";import"./Spinner-b213abf0.js";function m(t){const o=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",strong:"strong",h3:"h3",h4:"h4"},d(),t.components);return n(p,{children:[e(c,{of:g}),`
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
  <Button>Åpne meny</Button>
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
  ref={buttonRef}
  aria-haspopup="menu"
  aria-expanded={!isClosed ? true : undefined}
  aria-controls={id}
>
  Åpne meny
</Button>
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
`,e(l,{of:v})]})}function oe(t={}){const{wrapper:o}=Object.assign({},d(),t.components);return o?e(o,Object.assign({},t,{children:e(m,t)})):m(t)}export{oe as default};
//# sourceMappingURL=OverflowMenu-4442d674.js.map
