import{j as e,a as t,F as m}from"./focus-visible-c2e9b88d.js";import{M as d,C as o,e as s,A as p,P as c}from"./chunk-PCJTTTQV-a67c1498.js";import{p as h,S as k,M as g,F as i}from"./storybook-components-c9cbefc3.js";import{I as u}from"./InternalHeader.stories-7695fb2d.js";import{u as a}from"./index-bda0bad7.js";import"./index-ebeaab24.js";import"./iframe-b2bf83f2.js";import"../sb-preview/runtime.js";import"./index-72bda2b9.js";import"./index-9c09ad76.js";import"./index-d475d2ea.js";import"./index-356e4a49.js";import"./InternalHeader-4409aaba.js";import"./OverflowMenu-04596b71.js";import"./OverflowMenuItem-09e2a28b.js";import"./text-20d7ad40.js";import"./Typography.utils-99dd1e07.js";import"./focusVisible-75802ac7.js";import"./normalize-f756ee4b.js";import"./useCombinedRefs-40b11bb4.js";import"./BaseComponentProps-bb0d5515.js";import"./Icon-819df738.js";import"./visibilityTransition-933c6349.js";import"./scrollbarStyling-a46ac0ea.js";import"./ScrollableContainer.tokens-4d8ec996.js";import"./useFloatPosition-f03daf4a.js";import"./floating-ui.react-dom.esm-92a27cd2.js";import"./floating-ui.dom.browser.min-c4825b7a.js";import"./useRoveFocus-1974dcb0.js";import"./person-eb4bd89d.js";import"./SvgWrapper-cd7fa512.js";import"./selection-fae9d0a8.js";import"./useOnClickOutside-1aed2959.js";import"./useOnKeyDown-4552d984.js";import"./Divider-ed4eb34e.js";import"./menu-35d03998.js";import"./moreVertical-d30e3ebf.js";import"./Typography-9f10a259.js";import"./color-a12930ac.js";import"./Button-2e74127f.js";import"./Button.tokens-a196263c.js";import"./Spinner-deb75053.js";import"./edit-791efced.js";function l(r){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",h3:"h3",ul:"ul",li:"li"},a(),r.components);return t(m,{children:[e(d,{of:u}),`
`,e(n.h1,{id:"internalheader",children:"InternalHeader"}),`
`,e(h,{docsHref:"https://design.domstol.no/987b33f71/p/65cb45-internalheader/b/298c47",figmaHref:"https://www.figma.com/file/ewqSDmkgqDQ5PyOsRp4V5b/?node-id=3431%3A94756",githubHref:"https://github.com/domstolene/designsystem/tree/master/components/src/components/InternalHeader"}),`
`,e(n.h2,{id:"demo",children:"Demo"}),`
`,e(o,{children:e(s,{id:"dds-components-internalheader--default"})}),`
`,e(o,{children:e(s,{id:"dds-components-internalheader--with-navigation-and-context-menu",height:"350px"})}),`
`,e(o,{children:e(s,{id:"dds-components-internalheader--small-screen-with-navigation-and-context-menu",height:"650px"})}),`
`,e(k,{href:`${g}dds-components-internalheader`}),`
`,e(n.h2,{id:"oversikt",children:"Oversikt"}),`
`,t(n.p,{children:[e(n.code,{children:"<InternalHeader />"}),` er ment for å bli brukt som header i alle Lovisa
webapplikasjoner.`]}),`
`,t(n.p,{children:[`Ettersom Lovisa Next kommer på plass
vil `,e(n.code,{children:"<InternalHeader />"}),` også bli videreutviklet til å bli et felles
navigasjonspunkt mellom ulike tjenester og applikasjoner. Lenker ti andre
applikasjoner vil være tilgjengelige ved å trykke på det som i dag er navn på applikasjonen.`]}),`
`,e(n.p,{children:"Komponenten støtter horisontal navigasjon med lenker og en kontekstmeny til høyre som kan inneholde et en lenke eller tekst som viser brukernavnet og en liste med lenker eller knapper. Se detaljer i API."}),`
`,e(n.h2,{id:"bruk-i-koden",children:"Bruk i koden"}),`
`,e(i,{code:`
  import { InternalHeader } from '@norges-domstoler/dds-components';

const navLinks = [
{ title: 'Title', href: '#' },
{ title: 'Title', href: '#' },
]

const user = {
name: 'Name'
}

<InternalHeader
  applicationName="App"
  navigationElements={navLinks}
  userProps={user}
/>
`}),`
`,e(n.h2,{id:"api",children:"API"}),`
`,e(p,{story:c}),`
`,t(n.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",e(n.code,{children:"HTMLAttributes<HTMLDivElement>"}),"-interface i ",e(n.code,{children:"htmlProps"}),"."]}),`
`,e(n.h3,{id:"types",children:"Types"}),`
`,e(i,{code:`
  type NavigationLinkProps = {
  href: string;
  title: string;
  } & AnchorHTMLAttributes<HTMLAnchorElement>;
  `}),`
`,e(i,{code:`
  type ContextMenuElementProps = {
  title: string;
  href?: string;
  icon?: SvgIcon;
  onClick?: () => void;
  } & (
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>
  );

`}),`
`,e(i,{code:`
  type InternaHeaderUserProps = {
  name: string;
  href?: string;
  };

`}),`
`,e(n.h2,{id:"retningslinjer",children:"Retningslinjer"}),`
`,t(n.ul,{children:[`
`,t(n.li,{children:["Bruk ",e(n.code,{children:"<SkipToContent />"}),"-komponenten over ",e(n.code,{children:"<InternalHeader />"})," slik at brukeren kan hoppe rett til innholdet."]}),`
`,t(n.li,{children:["Ikke bruk ",e(n.code,{children:"smallScreen"}),"-prop på store skjermer og så lenge alle navigasjonselementer vises på én linje - navigasjonen skal ikke skjules hvis det er nok plass til å vise den."]}),`
`,e(n.li,{children:"Sørg for at hvert klikkbart element har størrelse på minst 1cmx1cm."}),`
`,t(n.li,{children:["Bruk ",e(n.code,{children:"currentPageHref"})," prop til å markere i navigasjonen hvilken side brukeren er på for å ha en visuell indikator."]}),`
`]})]})}function se(r={}){const{wrapper:n}=Object.assign({},a(),r.components);return n?e(n,Object.assign({},r,{children:e(l,r)})):l(r)}export{se as default};
//# sourceMappingURL=InternalHeader-7470a0ae.js.map
