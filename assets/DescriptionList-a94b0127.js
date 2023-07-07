import{a as i,j as t,F as d}from"./focus-visible-8467fd8b.js";import{M as l,C as m,e as D,A as r}from"./chunk-PCJTTTQV-2c75a859.js";import{p as a,S as h,M as L,F as n}from"./storybook-components-e4c55958.js";import{D as o,a as k,b as u}from"./DescriptionList.stories-73b7e194.js";import{u as p}from"./index-6fa374d0.js";import{D as f}from"./DescriptionListDesc-2a15a900.js";import"./index-d47b1f5a.js";import"./iframe-d6f86d24.js";import"../sb-preview/runtime.js";import"./index-db9ff070.js";import"./index-d475d2ea.js";import"./index-356e4a49.js";import"./dds-typography-4e6445f7.js";import"./dds-core-b89b291f.js";import"./dds-icons-f9255b51.js";function c(s){const e=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",h3:"h3",h4:"h4"},p(),s.components);return t(d,{children:[i(l,{of:o}),`
`,i(e.h1,{id:"descriptionlist",children:"DescriptionList"}),`
`,i(a,{docsHref:"https://design.domstol.no/987b33f71/p/46584e-descriptionlist/b/304a53",figmaHref:"https://www.figma.com/file/ewqSDmkgqDQ5PyOsRp4V5b/?node-id=3332%3A94241",githubHref:"https://github.com/domstolene/designsystem/tree/master/components/src/components/DescriptionList"}),`
`,i(e.h2,{id:"demo",children:"Demo"}),`
`,i(m,{children:i(D,{of:k})}),`
`,i(h,{href:`${L}dds-components-descriptionlist`}),`
`,i(e.h2,{id:"oversikt",children:"Oversikt"}),`
`,t(e.p,{children:["Beskrivelseslister bygges med styled versjoner av native HTML elementer og et wrapper-subkomponent ved behov. Disse styled komponentene er ",i(e.code,{children:"<DescriptionList />"})," og dens subkomponenter: ",i(e.code,{children:"<DescriptionListTerm />"}),", ",i(e.code,{children:"<DescriptionListDesc />"})," og ",i(e.code,{children:"<DescriptionListGroup />"}),"."]}),`
`,i(e.h2,{id:"bruk-i-koden",children:"Bruk i koden"}),`
`,i(n,{code:`
  import {
  DescriptionList,
  DescriptionListDesc,
  DescriptionListTerm
  } from '@norges-domstoler/dds-components';

<DescriptionList>
  <DescriptionListTerm>Uttrykk</DescriptionListTerm>
  <DescriptionListDesc>Beskrivelse</DescriptionListDesc>
  <DescriptionListTerm>Uttrykk</DescriptionListTerm>
  <DescriptionListDesc>Beskrivelse</DescriptionListDesc>
</DescriptionList>
`}),`
`,i(e.h2,{id:"api",children:"API"}),`
`,i(e.h3,{id:"descriptionlist-1",children:"DescriptionList"}),`
`,t(e.p,{children:["Tilsvarer ",i(e.code,{children:"<dl>"}),"."]}),`
`,i(r,{of:o}),`
`,t(e.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",i(e.code,{children:"HTMLAttributes<HTMLDListElement>"}),"-interface i ",i(e.code,{children:"htmlProps"}),"."]}),`
`,i(e.h3,{id:"descriptionlistterm",children:"DescriptionListTerm"}),`
`,t(e.p,{children:["Tilsvarer ",i(e.code,{children:"<dt>"}),"."]}),`
`,t(e.p,{children:["Det støttes alle native HTML-attributter som er en del av ",i(e.code,{children:"HTMLAttributes<HTMLElement>"}),"-interface i ",i(e.code,{children:"htmlProps"}),"."]}),`
`,i(e.h3,{id:"descriptionlistdesc",children:"DescriptionListDesc"}),`
`,t(e.p,{children:["Tilsvarer ",i(e.code,{children:"<dd>"}),"."]}),`
`,i(r,{of:f}),`
`,t(e.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",i(e.code,{children:"HTMLAttributes<HTMLElement>"}),"-interface i ",i(e.code,{children:"htmlProps"}),"."]}),`
`,i(e.h3,{id:"descriptionlistgroup",children:"DescriptionListGroup"}),`
`,i(e.p,{children:`En valgfri subkomponent som kan brukes til å gruppere terms
og descriptions. Den kan være relevant for å få til riktig layout, eller wrappe gruppen
til andre formål.`}),`
`,i(r,{of:u}),`
`,t(e.p,{children:["Det støttes alle native HTML-attributter som er en del av ",i(e.code,{children:"HTMLAttributes<HTMLDivElement>"}),"-interface i ",i(e.code,{children:"htmlProps"}),"."]}),`
`,i(e.h4,{id:"eksempler",children:"Eksempler"}),`
`,t(e.p,{children:[`Hvis beskrivelseslisten skal legge seg over flere kolonner
på en spesifikk måte kan man sette `,i(e.code,{children:'direction="row"'})," på DescriptionList-elementet."]}),`
`,i(n,{code:`
  <DescriptionList direction="row">
  <DescriptionListGroup>
   <DescriptionListTerm>Uttrykk</DescriptionListTerm>
   <DescriptionListDesc>Beskrivelse</DescriptionListDesc>
   <DescriptionListDesc>Beskrivelse</DescriptionListDesc>
  </DescriptionListGroup>
  <DescriptionListGroup>
   <DescriptionListTerm>Uttrykk</DescriptionListTerm>
   <DescriptionListDesc>Beskrivelse</DescriptionListDesc>
  </DescriptionListGroup>
  {/* ...flere grupper */}
  </DescriptionList>
  `})]})}function O(s={}){const{wrapper:e}=Object.assign({},p(),s.components);return e?i(e,Object.assign({},s,{children:i(c,s)})):c(s)}export{O as default};
//# sourceMappingURL=DescriptionList-a94b0127.js.map