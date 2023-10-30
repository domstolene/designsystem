import{a as t,j as o,F as m}from"./jsx-runtime-e43ccb36.js";import{M as p,C as s,b as d,A as a,P as l}from"./chunk-HLWAVYOI-9ef7c1eb.js";import{C as c,L as h,c as u}from"./StoryTemplate-ebb9e3f3.js";import{S as g}from"./constants-69754a51.js";import{S as f}from"./SplitButton.stories-57cfb12f.js";import{u as r}from"./index-2ef8b458.js";import"./index-1b03fe98.js";import"./iframe-9a99d5d3.js";import"../sb-preview/runtime.js";import"./index-6d191f71.js";import"./index-6fd5a17b.js";import"./index-356e4a49.js";import"./ddsReferenceTokens-a28ebf03.js";import"./libraryAdd-b73abf91.js";import"./Icon-6ccf1bbc.js";import"./BaseComponentProps-b6ad9f7d.js";import"./OverflowMenuGroup-fec72746.js";import"./OverflowMenu-1741deb6.js";import"./useFloatPosition-50e3a2ff.js";import"./floating-ui.dom-a5fd4560.js";import"./OverflowMenuItem-baf26b74.js";import"./normalize-f756ee4b.js";import"./Caption-d810b87c.js";import"./TextOverflowEllipsis-6cc9a60a.js";import"./Typography-d13ef156.js";import"./Heading-0c5437bc.js";import"./Label-05114518.js";import"./Legend-9969638c.js";import"./Link-c264ab95.js";import"./Paragraph-88055bd8.js";import"./scrollbarStyling-c2e6e782.js";import"./ScrollableContainer.tokens-fec9d215.js";import"./Divider-ffd037d3.js";import"./Button-03237364.js";import"./Button.tokens-aa4a9c73.js";import"./Input.styles-6b8ed75e.js";import"./Spinner-842be24a.js";function i(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code"},r(),n.components);return o(m,{children:[t(p,{of:f}),`
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
//# sourceMappingURL=SplitButton-b2e54dcc.js.map
