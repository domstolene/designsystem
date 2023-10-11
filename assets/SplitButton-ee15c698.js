import{a as t,j as o,F as m}from"./ddsReferenceTokens-ceb64027.js";import{M as p,C as s,b as d,A as a,P as l}from"./chunk-S4VUQJ4A-ad672bc2.js";import{C as c,L as h,c as u}from"./StoryTemplate-a2fc1fbf.js";import{S as g}from"./constants-69754a51.js";import{S as f}from"./SplitButton.stories-5b345515.js";import{u as r}from"./index-2ef8b458.js";import"./index-1b03fe98.js";import"./iframe-a8fd349f.js";import"../sb-preview/runtime.js";import"./index-4a89c107.js";import"./index-6fd5a17b.js";import"./index-356e4a49.js";import"./libraryAdd-931d79ee.js";import"./Icon-72ef85ba.js";import"./BaseComponentProps-d435d0d0.js";import"./OverflowMenuGroup-db34324f.js";import"./OverflowMenu-8a9c8cee.js";import"./useFloatPosition-f5da9dbf.js";import"./floating-ui.dom-a5fd4560.js";import"./OverflowMenuItem-63502423.js";import"./normalize-f756ee4b.js";import"./Caption-d066edab.js";import"./TextOverflowEllipsis-e584ab25.js";import"./Typography-56baa34a.js";import"./Heading-d8600f49.js";import"./Label-10c93eb5.js";import"./Legend-0cba57ca.js";import"./Link-7a88da71.js";import"./Paragraph-5ad16720.js";import"./scrollbarStyling-ac52fe06.js";import"./ScrollableContainer.tokens-ffb04a93.js";import"./Divider-d499a68f.js";import"./Button-da201b9b.js";import"./Button.tokens-be477cbd.js";import"./Input.styles-82cfcbdb.js";import"./Spinner-250d1fa4.js";function i(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code"},r(),n.components);return o(m,{children:[t(p,{of:f}),`
`,t(e.h1,{id:"splitbutton",children:"SplitButton"}),`
`,t(c,{docsHref:"https://design.domstol.no/987b33f71/p/1868a2-splitbutton",githubHref:"https://github.com/domstolene/designsystem/tree/main/packages/components/src/components/SplitButton",figmaHref:"https://www.figma.com/file/ewqSDmkgqDQ5PyOsRp4V5b/DDS-Komponenter?node-id=155%3A37"}),`
`,t(e.h2,{id:"demo",children:"Demo"}),`
`,t(s,{children:t(d,{id:"dds-components-splitbutton--default",height:"380px"})}),`
`,t(h,{href:`${g}dds-components-splitbutton`}),`
`,t(e.h2,{id:"oversikt",children:"Oversikt"}),`
`,o(e.p,{children:[t(e.code,{children:"<SplitButton />"}),` er en todelt knapp som skal brukes ved flere relaterte handlinger, der den ene er mest vanlig.
Komponenten består av to knapper: én for den primære handlingen, og én for å åpne en meny med sekundære handlinger.
Når menyen åpnes og en handling velges blir den umiddelbart gjennomført.
`,t(e.code,{children:"<SplitButton />"})," er dermed en fusjon med en knapp og meny."]}),`
`,t(e.h2,{id:"bruk-i-koden",children:"Bruk i koden"}),`
`,t(u,{code:`import { SplitButton } from '@norges-domstoler/dds-components';

const items = [{
title: 'Sekundær handling',
onClick: () => {},
}];

<SplitButton
  primaryAction={{ label: 'Label', onClick: () => {} }}
  secondaryActions={items}
/>
`}),`
`,t(e.h2,{id:"api",children:"API"}),`
`,t(a,{story:l}),`
`,o(e.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",t(e.code,{children:"HTMLAttributes<HTMLDivElement>"}),"-interface i ",t(e.code,{children:"htmlProps"}),"."]})]})}function Z(n={}){const{wrapper:e}=Object.assign({},r(),n.components);return e?t(e,Object.assign({},n,{children:t(i,n)})):i(n)}export{Z as default};
//# sourceMappingURL=SplitButton-ee15c698.js.map
