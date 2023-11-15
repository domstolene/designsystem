import{a as i,j as t,F as d}from"./jsx-runtime-e43ccb36.js";import{M as l,C as m,b as a,A as s}from"./chunk-HLWAVYOI-3e05d052.js";import{C as D,L as h,c as n}from"./StoryTemplate-6a95b3b2.js";import{S as L}from"./constants-c672c5f8.js";import{D as o,a as k}from"./DescriptionList.stories-491d1f8c.js";import{u as p}from"./index-2ef8b458.js";import{b as u}from"./DescriptionListDesc-6697ef8f.js";import{D as f}from"./DescriptionListGroup-69e1b8a9.js";import"./index-1b03fe98.js";import"./iframe-32b856a7.js";import"../sb-preview/runtime.js";import"./index-6d191f71.js";import"./index-6fd5a17b.js";import"./index-356e4a49.js";import"./ddsReferenceTokens-cf345c8b.js";import"./Caption-956f7c23.js";import"./BaseComponentProps-77dc9c6e.js";import"./TextOverflowEllipsis-5f7b5b23.js";import"./Typography-aec60abc.js";import"./Heading-1a21ccc8.js";import"./Label-1e45d63d.js";import"./Legend-8f4b1074.js";import"./Link-1d242339.js";import"./Paragraph-6d49c218.js";import"./libraryAdd-1d1f72ea.js";import"./Icon-764411b5.js";function c(r){const e=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",h3:"h3",h4:"h4"},p(),r.components);return t(d,{children:[i(l,{of:o}),`
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
//# sourceMappingURL=DescriptionList-105ba038.js.map
