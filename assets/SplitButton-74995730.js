import{a as t,j as o,F as m}from"./ddsReferenceTokens-647ce456.js";import{M as p,C as s,b as d,A as a,P as l}from"./chunk-S4VUQJ4A-45bcf0b3.js";import{C as c,L as h,c as u}from"./StoryTemplate-40ed0c91.js";import{S as g}from"./constants-69754a51.js";import{S as f}from"./SplitButton.stories-826a4391.js";import{u as r}from"./index-bda0bad7.js";import"./index-ebeaab24.js";import"./iframe-04aa59bd.js";import"../sb-preview/runtime.js";import"./index-72bda2b9.js";import"./index-9c09ad76.js";import"./index-356e4a49.js";import"./libraryAdd-35e18a4f.js";import"./Icon-42793503.js";import"./BaseComponentProps-a100791d.js";import"./OverflowMenuGroup-f2dacde7.js";import"./OverflowMenu-0fcf8b66.js";import"./useFloatPosition-16b5a301.js";import"./floating-ui.dom-a5fd4560.js";import"./OverflowMenuItem-1c31de12.js";import"./normalize-f756ee4b.js";import"./Caption-0ff47cfa.js";import"./TextOverflowEllipsis-e3546c5b.js";import"./Typography-d54ea9fd.js";import"./Heading-ded557b4.js";import"./Label-b7852367.js";import"./Legend-d58c0461.js";import"./Link-037ca604.js";import"./Paragraph-a74f99d8.js";import"./scrollbarStyling-d0d816c9.js";import"./ScrollableContainer.tokens-e480b498.js";import"./Divider-97c7888f.js";import"./Button-f2a6066f.js";import"./Button.tokens-cb9e169d.js";import"./Input.styles-115c96a3.js";import"./Spinner-866d56ff.js";function i(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code"},r(),n.components);return o(m,{children:[t(p,{of:f}),`
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
//# sourceMappingURL=SplitButton-74995730.js.map
