import{a as t,j as o,F as m}from"./jsx-runtime-e43ccb36.js";import{M as p,C as s,b as d,A as a,P as l}from"./chunk-HLWAVYOI-3e05d052.js";import{C as c,L as h,c as u}from"./StoryTemplate-6a95b3b2.js";import{S as g}from"./constants-c672c5f8.js";import{S as f}from"./SplitButton.stories-62edb7dc.js";import{u as r}from"./index-2ef8b458.js";import"./index-1b03fe98.js";import"./iframe-32b856a7.js";import"../sb-preview/runtime.js";import"./index-6d191f71.js";import"./index-6fd5a17b.js";import"./index-356e4a49.js";import"./ddsReferenceTokens-cf345c8b.js";import"./libraryAdd-1d1f72ea.js";import"./Icon-764411b5.js";import"./BaseComponentProps-77dc9c6e.js";import"./OverflowMenuGroup-fec72746.js";import"./OverflowMenu-130e7efb.js";import"./useFloatPosition-8239dfed.js";import"./floating-ui.dom-a5fd4560.js";import"./OverflowMenuItem-4d35f578.js";import"./normalize-f756ee4b.js";import"./Caption-956f7c23.js";import"./TextOverflowEllipsis-5f7b5b23.js";import"./Typography-aec60abc.js";import"./Heading-1a21ccc8.js";import"./Label-1e45d63d.js";import"./Legend-8f4b1074.js";import"./Link-1d242339.js";import"./Paragraph-6d49c218.js";import"./scrollbarStyling-5c8dd8e6.js";import"./ScrollableContainer.tokens-2f8b82e4.js";import"./Divider-f0fd1e93.js";import"./Button-ce4ef2c9.js";import"./Button.tokens-a9a7352b.js";import"./Input.styles-4ebb4961.js";import"./Spinner-b213abf0.js";function i(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code"},r(),n.components);return o(m,{children:[t(p,{of:f}),`
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
`,o(e.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",t(e.code,{children:"HTMLAttributes<HTMLDivElement>"}),"-interface i ",t(e.code,{children:"htmlProps"}),"."]})]})}function tt(n={}){const{wrapper:e}=Object.assign({},r(),n.components);return e?t(e,Object.assign({},n,{children:t(i,n)})):i(n)}export{tt as default};
//# sourceMappingURL=SplitButton-6442f312.js.map
