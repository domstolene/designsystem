import{a as e,j as t,F as d}from"./ddsReferenceTokens-f1d35829.js";import{M as m,C as o,e as s,A as p,P as c}from"./chunk-PCJTTTQV-d633578a.js";import{p as h,S as k,M as g,F as i}from"./storybook-components-eb38b664.js";import{I as u}from"./InternalHeader.stories-e42302f7.js";import{u as a}from"./index-6fa374d0.js";import"./index-d47b1f5a.js";import"./iframe-f31fa69e.js";import"../sb-preview/runtime.js";import"./index-db9ff070.js";import"./index-d475d2ea.js";import"./index-356e4a49.js";import"./focus-visible-bfce03b6.js";import"./dds-icons-265d9665.js";import"./dds-core-c67132cd.js";import"./InternalHeader-f60a6bb4.js";import"./dds-typography-cc6cb429.js";import"./OverflowMenu-c583f668.js";import"./OverflowMenuItem-c1dda316.js";import"./scrollbarStyling-5cc839fb.js";import"./ScrollableContainer.tokens-c202eeaf.js";import"./Divider-1dae9af4.js";import"./dds-form-9b45fc8d.js";import"./Button-aa30c63f.js";import"./Button.tokens-d278b944.js";import"./Spinner-dd54de98.js";function l(r){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",h3:"h3",ul:"ul",li:"li"},a(),r.components);return t(d,{children:[e(m,{of:u}),`
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
`]})]})}function q(r={}){const{wrapper:n}=Object.assign({},a(),r.components);return n?e(n,Object.assign({},r,{children:e(l,r)})):l(r)}export{q as default};
//# sourceMappingURL=InternalHeader-ff11b26e.js.map
