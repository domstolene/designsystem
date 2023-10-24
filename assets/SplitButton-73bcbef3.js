import{a as t,j as o,F as m}from"./jsx-runtime-e43ccb36.js";import{M as p,C as s,b as d,A as a,P as l}from"./chunk-HLWAVYOI-03a60696.js";import{C as c,L as h,c as u}from"./StoryTemplate-a36d369e.js";import{S as g}from"./constants-69754a51.js";import{S as f}from"./SplitButton.stories-11fc51ba.js";import{u as r}from"./index-2ef8b458.js";import"./index-1b03fe98.js";import"./iframe-d9c882ff.js";import"../sb-preview/runtime.js";import"./index-6d191f71.js";import"./index-6fd5a17b.js";import"./index-356e4a49.js";import"./ddsReferenceTokens-f9f5a4e4.js";import"./libraryAdd-9af098d3.js";import"./Icon-a656622e.js";import"./BaseComponentProps-9c025471.js";import"./OverflowMenuGroup-fec72746.js";import"./OverflowMenu-13b6b056.js";import"./useFloatPosition-da47bd7f.js";import"./floating-ui.dom-a5fd4560.js";import"./OverflowMenuItem-586daf58.js";import"./normalize-f756ee4b.js";import"./Caption-6d408196.js";import"./TextOverflowEllipsis-1edb8626.js";import"./Typography-e857479c.js";import"./Heading-5f7faa2b.js";import"./Label-9dee7f37.js";import"./Legend-41f9f05c.js";import"./Link-1567bf4e.js";import"./Paragraph-998f64b8.js";import"./scrollbarStyling-6511712a.js";import"./ScrollableContainer.tokens-17f22553.js";import"./Divider-c974f361.js";import"./Button-7e6f5e0d.js";import"./Button.tokens-4b98f929.js";import"./Input.styles-3d1af983.js";import"./Spinner-50e72058.js";function i(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code"},r(),n.components);return o(m,{children:[t(p,{of:f}),`
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
//# sourceMappingURL=SplitButton-73bcbef3.js.map
