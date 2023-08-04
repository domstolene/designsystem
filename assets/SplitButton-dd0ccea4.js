import{a as e,j as o,F as s}from"./ddsReferenceTokens-f1d35829.js";import{M as m,C as p,e as d,A as l,P as a}from"./chunk-PCJTTTQV-0127294b.js";import{p as c,S as h,M as u,F as g}from"./storybook-components-b14ef24f.js";import{S as f}from"./SplitButton.stories-af647ef5.js";import{u as i}from"./index-6fa374d0.js";import"./index-d47b1f5a.js";import"./iframe-3cdea761.js";import"../sb-preview/runtime.js";import"./index-db9ff070.js";import"./index-d475d2ea.js";import"./index-356e4a49.js";import"./focus-visible-bfce03b6.js";import"./dds-icons-265d9665.js";import"./dds-core-c67132cd.js";import"./OverflowMenuGroup-d39ab7ad.js";import"./OverflowMenu-c583f668.js";import"./OverflowMenuItem-c1dda316.js";import"./dds-typography-cc6cb429.js";import"./scrollbarStyling-5cc839fb.js";import"./ScrollableContainer.tokens-c202eeaf.js";import"./Divider-1dae9af4.js";import"./Button-aa30c63f.js";import"./Button.tokens-d278b944.js";import"./dds-form-9b45fc8d.js";import"./Spinner-dd54de98.js";function r(n){const t=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code"},i(),n.components);return o(s,{children:[e(m,{of:f}),`
`,e(t.h1,{id:"splitbutton",children:"SplitButton"}),`
`,e(c,{docsHref:"https://design.domstol.no/987b33f71/p/1868a2-splitbutton",githubHref:"https://github.com/domstolene/designsystem/tree/master/components/src/components/SplitButton",figmaHref:"https://www.figma.com/file/ewqSDmkgqDQ5PyOsRp4V5b/DDS-Komponenter?node-id=155%3A37"}),`
`,e(t.h2,{id:"demo",children:"Demo"}),`
`,e(p,{children:e(d,{id:"dds-components-splitbutton--default",height:"380px"})}),`
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
`,o(t.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",e(t.code,{children:"HTMLAttributes<HTMLDivElement>"}),"-interface i ",e(t.code,{children:"htmlProps"}),"."]})]})}function Y(n={}){const{wrapper:t}=Object.assign({},i(),n.components);return t?e(t,Object.assign({},n,{children:e(r,n)})):r(n)}export{Y as default};
//# sourceMappingURL=SplitButton-dd0ccea4.js.map
