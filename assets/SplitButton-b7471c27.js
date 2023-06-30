import{j as e,a as o,F as s}from"./focus-visible-35158c22.js";import{M as m,C as d,e as p,A as l,P as a}from"./chunk-PCJTTTQV-2606e572.js";import{p as c,S as h,M as u,F as g}from"./storybook-components-e24cb579.js";import{S as f}from"./SplitButton.stories-6a1b5415.js";import{u as i}from"./index-6fa374d0.js";import"./index-d47b1f5a.js";import"./iframe-43596611.js";import"../sb-preview/runtime.js";import"./index-db9ff070.js";import"./index-d475d2ea.js";import"./index-356e4a49.js";import"./dds-icons-7a922c3a.js";import"./dds-core-29d22035.js";import"./OverflowMenuGroup-dedf7b99.js";import"./OverflowMenu-7482705f.js";import"./OverflowMenuItem-9a10104f.js";import"./dds-typography-e761338c.js";import"./scrollbarStyling-1bd29018.js";import"./ScrollableContainer.tokens-66d4a31f.js";import"./Divider-982ab6b7.js";import"./Button-2404c0e2.js";import"./Button.tokens-f807ad1a.js";import"./dds-form-b2eacd8d.js";import"./Spinner-69e9cf92.js";function r(n){const t=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code"},i(),n.components);return o(s,{children:[e(m,{of:f}),`
`,e(t.h1,{id:"splitbutton",children:"SplitButton"}),`
`,e(c,{docsHref:"https://design.domstol.no/987b33f71/p/1868a2-splitbutton",githubHref:"https://github.com/domstolene/designsystem/tree/master/components/src/components/SplitButton",figmaHref:"https://www.figma.com/file/ewqSDmkgqDQ5PyOsRp4V5b/DDS-Komponenter?node-id=155%3A37"}),`
`,e(t.h2,{id:"demo",children:"Demo"}),`
`,e(d,{children:e(p,{id:"dds-components-splitbutton--default",height:"380px"})}),`
`,e(h,{href:`${u}dds-components-splitbutton`}),`
`,e(t.h2,{id:"oversikt",children:"Oversikt"}),`
`,o(t.p,{children:[e(t.code,{children:"<SplitButton />"}),` er en todelt knapp som skal brukes ved flere relaterte handlinger, der den ene er mest vanlig.
Komponenten består av to knapper: én for den primære handlingen, og én for å åpne en meny med sekundære handlinger.
Når menyen åpnes og en handling velges blir den umiddelbart gjennomført.
`,e(t.code,{children:"<SplitButton />"})," er dermed en fusjon med en knapp og meny."]}),`
`,e(t.h2,{id:"bruk-i-koden",children:"Bruk i koden"}),`
`,e(g,{code:`import { SplitButton } from '@norges-domstoler/dds-components';

const items = [{
title: 'Sekundær handling',
onClick: () => {},
}];

<SplitButton
  primaryAction={{ label: 'Label', onClick: () => {} }}
  secondaryActions={items}
/>
`}),`
`,e(t.h2,{id:"api",children:"API"}),`
`,e(l,{story:a}),`
`,o(t.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",e(t.code,{children:"HTMLAttributes<HTMLDivElement>"}),"-interface i ",e(t.code,{children:"htmlProps"}),"."]})]})}function K(n={}){const{wrapper:t}=Object.assign({},i(),n.components);return t?e(t,Object.assign({},n,{children:e(r,n)})):r(n)}export{K as default};
//# sourceMappingURL=SplitButton-b7471c27.js.map
