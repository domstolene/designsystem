import{a as t,j as o,F as m}from"./jsx-runtime-e43ccb36.js";import{M as p,C as s,b as d,A as a,P as l}from"./chunk-HLWAVYOI-64354447.js";import{C as c,L as h,c as u}from"./StoryTemplate-dc809fd5.js";import{S as g}from"./constants-69754a51.js";import{S as f}from"./SplitButton.stories-e3c0d043.js";import{u as r}from"./index-2ef8b458.js";import"./index-1b03fe98.js";import"./iframe-5a5f529d.js";import"../sb-preview/runtime.js";import"./index-6d191f71.js";import"./index-6fd5a17b.js";import"./index-356e4a49.js";import"./ddsReferenceTokens-baf3ad90.js";import"./libraryAdd-ba36db88.js";import"./Icon-169fc8ae.js";import"./BaseComponentProps-46424d28.js";import"./OverflowMenuGroup-fec72746.js";import"./OverflowMenu-ea73b702.js";import"./useFloatPosition-ae95f346.js";import"./floating-ui.dom-a5fd4560.js";import"./OverflowMenuItem-101a1d0b.js";import"./normalize-f756ee4b.js";import"./Caption-1d5aeb22.js";import"./TextOverflowEllipsis-05821fa6.js";import"./Typography-9e3266f4.js";import"./Heading-862bf652.js";import"./Label-5ae0c148.js";import"./Legend-a1cc5017.js";import"./Link-15befa1a.js";import"./Paragraph-53be9306.js";import"./scrollbarStyling-4847117a.js";import"./ScrollableContainer.tokens-9daa2b8a.js";import"./Divider-8c3c7dc7.js";import"./Button-7f7a38c8.js";import"./Button.tokens-33bf137d.js";import"./Input.styles-4c4ddd98.js";import"./Spinner-657d5c3d.js";function i(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code"},r(),n.components);return o(m,{children:[t(p,{of:f}),`
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
//# sourceMappingURL=SplitButton-1f532e3c.js.map
