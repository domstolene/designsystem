import{a as r,j as n,F as c}from"./jsx-runtime-e43ccb36.js";import{M as l,C as s,b as h,A as o}from"./chunk-HLWAVYOI-0c9d9149.js";import{C as m,L as p,c as k}from"./StoryTemplate-d3d045d5.js";import{S as g}from"./constants-69754a51.js";import{C as b,D as i,a as f,b as C}from"./Card.stories-836fa44f.js";import{u as t}from"./index-2ef8b458.js";import"./index-1b03fe98.js";import"./iframe-a45876ab.js";import"../sb-preview/runtime.js";import"./index-6d191f71.js";import"./index-6fd5a17b.js";import"./index-356e4a49.js";import"./ddsReferenceTokens-a28ebf03.js";import"./Caption-f392befe.js";import"./BaseComponentProps-5f9a30f8.js";import"./TextOverflowEllipsis-6cc9a60a.js";import"./Typography-2f5b7ed6.js";import"./Heading-ad44a14c.js";import"./Label-2f40b05d.js";import"./Legend-4a50a7d7.js";import"./Link-53575534.js";import"./Paragraph-ea3f8ca3.js";import"./normalize-f756ee4b.js";import"./removeButtonStyling-867d6ba4.js";import"./Card-ff478dfd.js";import"./Input.styles-61cf55a8.js";import"./DescriptionListDesc-2468e8cd.js";import"./libraryAdd-923f0275.js";import"./Icon-3ee4d35b.js";import"./Divider-59c98bdf.js";function a(d){const e=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",ul:"ul",li:"li",strong:"strong",em:"em",a:"a",h3:"h3"},t(),d.components);return n(c,{children:[r(l,{of:b}),`
`,r(e.h1,{id:"card",children:"Card"}),`
`,r(m,{docsHref:"https://design.domstol.no/987b33f71/p/0822fe-card/b/79dd5d",figmaHref:"https://www.figma.com/file/ewqSDmkgqDQ5PyOsRp4V5b/?node-id=3421%3A94375",githubHref:"https://github.com/domstolene/designsystem/tree/main/packages/components/src/components/Card"}),`
`,r(e.h2,{id:"demo",children:"Demo"}),`
`,r(s,{children:r(h,{of:i})}),`
`,r(p,{href:`${g}dds-components-card`}),`
`,r(e.h2,{id:"oversikt",children:"Oversikt"}),`
`,n(e.p,{children:[r(e.code,{children:"<Card />"})," er en fleksibel komponent som kan ha stort sett valgfritt innhold."]}),`
`,n(e.p,{children:["Det finnes følgene typer ",r(e.code,{children:"<Card />"}),":"]}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[r(e.strong,{children:"info"}),": statisk wrapper; innholdet er valgfritt, inkludert interaktive elementer."]}),`
`,n(e.li,{children:[r(e.strong,{children:"navigation"}),": gjør ",r(e.code,{children:"<Card />"})," klikkbart og rendrer en lenke. Skal ikke inneholde interaktive elementer."]}),`
`,n(e.li,{children:[r(e.strong,{children:"expandable"}),": brukes når ",r(e.code,{children:"<Card />"})," skal ha en tittel og ekspanderbart panel. Ved expandable Card skal subkomponentene ",r(e.code,{children:"<CardAccordion />"}),", ",r(e.code,{children:"<CardAccordionHeader />"})," og ",r(e.code,{children:"<CardAccordionBody />"})," brukes. En gruppe med expandable Cards skal legges i en ",r(e.code,{children:"<div>"})," container."]}),`
`,n(e.li,{children:[n(e.strong,{children:["selectable ",r(e.em,{children:"(kommer)"})]}),": en ",r(e.code,{children:"<Card />"}),` som kan bli valgt vha. en radioknapp eller checkbox.
`,r(e.code,{children:"<Card />"})," får typen via cardType-prop (se ",r(e.a,{href:"#card",children:"Card API"}),"). Ved expandable skal i tillegg brukes ",r(e.code,{children:"<CardAccordion />"}),"-subkomponenter."]}),`
`]}),`
`,r(e.h2,{id:"bruk-i-koden",children:"Bruk i koden"}),`
`,r(k,{code:`
  import {
  Card,
  CardAccordion,
  CardAccordionBody,
  CardAccordionHeader
  } from '@norges-domstoler/dds-components';

<Card cardType="info"> Content </Card>

<Card cardType="expandable">
  <CardAccordion>
    <CardAccordionHeader>Title</CardAccordionHeader>
    <CardAccordionBody>Body</CardAccordionBody>
  </CardAccordion>
</Card>
`}),`
`,r(e.h2,{id:"api",children:"API"}),`
`,n(e.h3,{id:"-card",children:[r("a",{id:"card"})," Card"]}),`
`,n(e.p,{children:["Wrapper for innhold i et kort. Bruk design-tokens for spacing og annet styling der relevant. Har default typografi. Ved bruk av ",r(e.code,{children:"<Typography />"})," som barn må du sørge for å bruke ",r(e.code,{children:"color='onDark'"})," på mørk bakgrunn."]}),`
`,r(o,{of:i}),`
`,n(e.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",r(e.code,{children:"HTMLAttributes<HTMLDivElement>"})," eller ",r(e.code,{children:"AnchorHTMLAttributes<HTMLAnchorElement>"}),"-interface i ",r(e.code,{children:"htmlProps"}),"."]}),`
`,r(e.h3,{id:"cardaccordion",children:"CardAccordion"}),`
`,n(e.p,{children:["En container for CardAccordion-subkomponenter som håndterer utviding, sammentrukking og ARIA-attributter av subkomponentene. Den skal ha ",r(e.code,{children:"<Card cardType='expandable' />"})," som forelder og ",r(e.code,{children:"<CardAccordionHeader />"})," som første barn og ",r(e.code,{children:"<CardAccordionBody />"})," som andre barn."]}),`
`,n(e.p,{children:["En gruppe med expandable ",r(e.code,{children:"<Card cardType='expandable' />"})," skal legges i en ",r(e.code,{children:"<div>"})," container."]}),`
`,r(o,{of:f}),`
`,r(e.h3,{id:"cardaccordionheader",children:"CardAccordionHeader"}),`
`,n(e.p,{children:["Header i ",r(e.code,{children:"<CardAccordion />"}),". Skal brukes som første barn og den får automatisk riktig id fra ",r(e.code,{children:"<CardAccordion />"}),". Komponenten har default typografi som kan bli overskrevet ved å bruke ",r(e.code,{children:"<Typography />"})," som barneelement."]}),`
`,n(e.p,{children:["Det støttes alle native HTML-attributter som er en del av ",r(e.code,{children:"HTMLAttributes<HTMLDivElement>"}),"-interface i ",r(e.code,{children:"htmlProps"}),"."]}),`
`,r(e.h3,{id:"cardaccordionbody",children:"CardAccordionBody"}),`
`,n(e.p,{children:["Body i ",r(e.code,{children:"<CardAccordion />"}),". Skal brukes som andre barn og den får automatisk riktig ",r(e.code,{children:"id"})," fra ",r(e.code,{children:"<CardAccordion />"}),". Komponenten har default typografi som kan bli overskrevet ved å bruke ",r(e.code,{children:"<Typography />"})," som barneelement(er)."]}),`
`,r(o,{of:C}),`
`,n(e.p,{children:["Det støttes alle native HTML-attributter som er en del av ",r(e.code,{children:"HTMLAttributes<HTMLDivElement>"}),"-interface i ",r(e.code,{children:"htmlProps"}),"."]})]})}function Y(d={}){const{wrapper:e}=Object.assign({},t(),d.components);return e?r(e,Object.assign({},d,{children:r(a,d)})):a(d)}export{Y as default};
//# sourceMappingURL=Card-6592e27e.js.map
