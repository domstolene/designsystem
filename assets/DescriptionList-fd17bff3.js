import{j as i,a as t,F as d}from"./focus-visible-c2e9b88d.js";import{M as l,C as m,e as D,A as s}from"./chunk-PCJTTTQV-80a74cac.js";import{p as a,S as h,M as L,F as n}from"./storybook-components-045061bd.js";import{D as o,a as k,b as u}from"./DescriptionList.stories-b786f778.js";import{u as p}from"./index-bda0bad7.js";import{D as f}from"./DescriptionListDesc-d92b631c.js";import"./index-ebeaab24.js";import"./iframe-00013f19.js";import"../sb-preview/runtime.js";import"./index-40534236.js";import"./index-9c09ad76.js";import"./call-adc50a8d.js";import"./SvgWrapper-cd7fa512.js";import"./BaseComponentProps-bb0d5515.js";import"./Typography-9f10a259.js";import"./Typography.utils-99dd1e07.js";import"./focusVisible-75802ac7.js";import"./selection-fae9d0a8.js";import"./color-a12930ac.js";import"./Icon-819df738.js";function c(r){const e=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",h3:"h3",h4:"h4"},p(),r.components);return t(d,{children:[i(l,{of:o}),`
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
`,i(s,{of:o}),`
`,t(e.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",i(e.code,{children:"HTMLAttributes<HTMLDListElement>"}),"-interface i ",i(e.code,{children:"htmlProps"}),"."]}),`
`,i(e.h3,{id:"descriptionlistterm",children:"DescriptionListTerm"}),`
`,t(e.p,{children:["Tilsvarer ",i(e.code,{children:"<dt>"}),"."]}),`
`,t(e.p,{children:["Det støttes alle native HTML-attributter som er en del av ",i(e.code,{children:"HTMLAttributes<HTMLElement>"}),"-interface i ",i(e.code,{children:"htmlProps"}),"."]}),`
`,i(e.h3,{id:"descriptionlistdesc",children:"DescriptionListDesc"}),`
`,t(e.p,{children:["Tilsvarer ",i(e.code,{children:"<dd>"}),"."]}),`
`,i(s,{of:f}),`
`,t(e.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",i(e.code,{children:"HTMLAttributes<HTMLElement>"}),"-interface i ",i(e.code,{children:"htmlProps"}),"."]}),`
`,i(e.h3,{id:"descriptionlistgroup",children:"DescriptionListGroup"}),`
`,i(e.p,{children:`En valgfri subkomponent som kan brukes til å gruppere terms
og descriptions. Den kan være relevant for å få til riktig layout, eller wrappe gruppen
til andre formål.`}),`
`,i(s,{of:u}),`
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
  `})]})}function I(r={}){const{wrapper:e}=Object.assign({},p(),r.components);return e?i(e,Object.assign({},r,{children:i(c,r)})):c(r)}export{I as default};
//# sourceMappingURL=DescriptionList-fd17bff3.js.map
