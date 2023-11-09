import{a as e,j as t,F as d}from"./jsx-runtime-e43ccb36.js";import{M as m,C as o,b as s,A as p,P as c}from"./chunk-HLWAVYOI-d94c8297.js";import{C as h,L as k,c as i}from"./StoryTemplate-2c894fa9.js";import{S as g}from"./constants-69754a51.js";import{I as u}from"./InternalHeader.stories-cb442d08.js";import{u as a}from"./index-2ef8b458.js";import"./index-1b03fe98.js";import"./iframe-c122ca0a.js";import"../sb-preview/runtime.js";import"./index-6d191f71.js";import"./index-6fd5a17b.js";import"./index-356e4a49.js";import"./ddsReferenceTokens-fe3c594e.js";import"./libraryAdd-7ba549de.js";import"./Icon-c6fb2d87.js";import"./BaseComponentProps-3902fbf1.js";import"./InternalHeader-835a583d.js";import"./Caption-848a816b.js";import"./TextOverflowEllipsis-c2a9fc8f.js";import"./Typography-dcf6ef21.js";import"./Heading-9ec1ef64.js";import"./Label-393cff6f.js";import"./Legend-6f4c2491.js";import"./Link-e04d3bba.js";import"./Paragraph-ba6a9c6f.js";import"./OverflowMenu-374e1cad.js";import"./useFloatPosition-8db71a9f.js";import"./floating-ui.dom-a5fd4560.js";import"./OverflowMenuItem-9acaf021.js";import"./normalize-f756ee4b.js";import"./scrollbarStyling-6a0ce14f.js";import"./ScrollableContainer.tokens-f54e5649.js";import"./Divider-f7fee4bc.js";import"./Input.styles-d07d27d7.js";import"./Button-b5f31bb8.js";import"./Button.tokens-f8b78db5.js";import"./Spinner-e13fbfa7.js";function l(r){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",h3:"h3",ul:"ul",li:"li"},a(),r.components);return t(d,{children:[e(m,{of:u}),`
`,e(n.h1,{id:"internalheader",children:"InternalHeader"}),`
`,e(h,{docsHref:"https://design.domstol.no/987b33f71/p/65cb45-internalheader/b/298c47",figmaHref:"https://www.figma.com/file/ewqSDmkgqDQ5PyOsRp4V5b/?node-id=3431%3A94756",githubHref:"https://github.com/domstolene/designsystem/tree/main/packages/components/src/components/InternalHeader"}),`
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
`]})]})}function ee(r={}){const{wrapper:n}=Object.assign({},a(),r.components);return n?e(n,Object.assign({},r,{children:e(l,r)})):l(r)}export{ee as default};
//# sourceMappingURL=InternalHeader-3a8eb25e.js.map
