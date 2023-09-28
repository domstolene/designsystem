import{a as t,j as o,F as m}from"./ddsReferenceTokens-647ce456.js";import{M as p,C as s,b as d,A as a,P as l}from"./chunk-S4VUQJ4A-c34dda98.js";import{C as c,L as h,c as u}from"./StoryTemplate-2a43fd02.js";import{S as g}from"./constants-69754a51.js";import{S as f}from"./SplitButton.stories-32df89ae.js";import{u as r}from"./index-bda0bad7.js";import"./index-ebeaab24.js";import"./iframe-552ab5ea.js";import"../sb-preview/runtime.js";import"./index-72bda2b9.js";import"./index-9c09ad76.js";import"./index-356e4a49.js";import"./libraryAdd-35e18a4f.js";import"./Icon-42793503.js";import"./BaseComponentProps-a100791d.js";import"./OverflowMenuGroup-f2dacde7.js";import"./OverflowMenu-9c02bbdc.js";import"./useFloatPosition-16b5a301.js";import"./floating-ui.dom-a5fd4560.js";import"./OverflowMenuItem-5fa82ba8.js";import"./normalize-f756ee4b.js";import"./Caption-9d9a71c0.js";import"./TextOverflowEllipsis-e3546c5b.js";import"./Typography-b6b10a83.js";import"./Heading-b4646737.js";import"./Label-470a2743.js";import"./Legend-6fbf6204.js";import"./Link-3e1e1a74.js";import"./Paragraph-ff3eeae6.js";import"./scrollbarStyling-d0d816c9.js";import"./ScrollableContainer.tokens-e480b498.js";import"./Divider-97c7888f.js";import"./Button-09f75747.js";import"./Button.tokens-cb9e169d.js";import"./Input.styles-01f05292.js";import"./Spinner-866d56ff.js";function i(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code"},r(),n.components);return o(m,{children:[t(p,{of:f}),`
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
//# sourceMappingURL=SplitButton-f57e776e.js.map
