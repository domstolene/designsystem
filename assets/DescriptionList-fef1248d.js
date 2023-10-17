import{a as i,j as t,F as d}from"./jsx-runtime-e43ccb36.js";import{M as l,C as m,b as a,A as s}from"./chunk-S4VUQJ4A-ef04515c.js";import{C as D,L as h,c as n}from"./StoryTemplate-a536eef8.js";import{S as L}from"./constants-69754a51.js";import{D as o,a as k}from"./DescriptionList.stories-d26cd46d.js";import{u as p}from"./index-2ef8b458.js";import{b as u}from"./DescriptionListDesc-d0c82072.js";import{D as f}from"./DescriptionListGroup-ca96feee.js";import"./index-1b03fe98.js";import"./iframe-ddff3556.js";import"../sb-preview/runtime.js";import"./index-4a89c107.js";import"./index-6fd5a17b.js";import"./index-356e4a49.js";import"./ddsReferenceTokens-f9f5a4e4.js";import"./Caption-6d408196.js";import"./BaseComponentProps-9c025471.js";import"./TextOverflowEllipsis-1edb8626.js";import"./Typography-e857479c.js";import"./Heading-5f7faa2b.js";import"./Label-9dee7f37.js";import"./Legend-41f9f05c.js";import"./Link-1567bf4e.js";import"./Paragraph-998f64b8.js";import"./libraryAdd-5ac12ed0.js";import"./Icon-1678d620.js";function c(r){const e=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",h3:"h3",h4:"h4"},p(),r.components);return t(d,{children:[i(l,{of:o}),`
`,i(e.h1,{id:"descriptionlist",children:"DescriptionList"}),`
`,i(D,{docsHref:"https://design.domstol.no/987b33f71/p/46584e-descriptionlist/b/304a53",figmaHref:"https://www.figma.com/file/ewqSDmkgqDQ5PyOsRp4V5b/?node-id=3332%3A94241",githubHref:"https://github.com/domstolene/designsystem/tree/main/packages/components/src/components/DescriptionList"}),`
`,i(e.h2,{id:"demo",children:"Demo"}),`
`,i(m,{children:i(a,{of:k})}),`
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
`,i(s,{of:o}),`
`,t(e.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",i(e.code,{children:"HTMLAttributes<HTMLDListElement>"}),"-interface i ",i(e.code,{children:"htmlProps"}),"."]}),`
`,i(e.h3,{id:"descriptionlistterm",children:"DescriptionListTerm"}),`
`,t(e.p,{children:["Tilsvarer ",i(e.code,{children:"<dt>"}),"."]}),`
`,t(e.p,{children:["Det støttes alle native HTML-attributter som er en del av ",i(e.code,{children:"HTMLAttributes<HTMLElement>"}),"-interface i ",i(e.code,{children:"htmlProps"}),"."]}),`
`,i(e.h3,{id:"descriptionlistdesc",children:"DescriptionListDesc"}),`
`,t(e.p,{children:["Tilsvarer ",i(e.code,{children:"<dd>"}),"."]}),`
`,i(s,{of:u}),`
`,t(e.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",i(e.code,{children:"HTMLAttributes<HTMLElement>"}),"-interface i ",i(e.code,{children:"htmlProps"}),"."]}),`
`,i(e.h3,{id:"descriptionlistgroup",children:"DescriptionListGroup"}),`
`,i(e.p,{children:`En valgfri subkomponent som kan brukes til å gruppere terms
og descriptions. Den kan være relevant for å få til riktig layout, eller wrappe gruppen
til andre formål.`}),`
`,i(s,{of:f}),`
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
  `})]})}function Q(r={}){const{wrapper:e}=Object.assign({},p(),r.components);return e?i(e,Object.assign({},r,{children:i(c,r)})):c(r)}export{Q as default};
//# sourceMappingURL=DescriptionList-fef1248d.js.map
