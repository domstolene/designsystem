import{j as t,a as o,F as m}from"./focus-visible-c2e9b88d.js";import{M as p,C as s,e as d,A as l,P as a}from"./chunk-PCJTTTQV-a67c1498.js";import{p as c,S as h,M as u,F as g}from"./storybook-components-c9cbefc3.js";import{S as f}from"./SplitButton.stories-a8516f3c.js";import{u as i}from"./index-bda0bad7.js";import"./index-ebeaab24.js";import"./iframe-b2bf83f2.js";import"../sb-preview/runtime.js";import"./index-72bda2b9.js";import"./index-9c09ad76.js";import"./index-d475d2ea.js";import"./index-356e4a49.js";import"./OverflowMenuGroup-b288a120.js";import"./chevronUp-4c595192.js";import"./SvgWrapper-cd7fa512.js";import"./chevronDown-41304f61.js";import"./OverflowMenu-04596b71.js";import"./OverflowMenuItem-09e2a28b.js";import"./text-20d7ad40.js";import"./Typography.utils-99dd1e07.js";import"./focusVisible-75802ac7.js";import"./normalize-f756ee4b.js";import"./useCombinedRefs-40b11bb4.js";import"./BaseComponentProps-bb0d5515.js";import"./Icon-819df738.js";import"./visibilityTransition-933c6349.js";import"./scrollbarStyling-a46ac0ea.js";import"./ScrollableContainer.tokens-4d8ec996.js";import"./useFloatPosition-f03daf4a.js";import"./floating-ui.react-dom.esm-92a27cd2.js";import"./floating-ui.dom.browser.min-c4825b7a.js";import"./useRoveFocus-1974dcb0.js";import"./person-eb4bd89d.js";import"./selection-fae9d0a8.js";import"./useOnClickOutside-1aed2959.js";import"./useOnKeyDown-4552d984.js";import"./Divider-ed4eb34e.js";import"./Button-2e74127f.js";import"./Button.tokens-a196263c.js";import"./Spinner-deb75053.js";import"./color-a12930ac.js";import"./plusCircled-05259c8d.js";function r(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code"},i(),n.components);return o(m,{children:[t(p,{of:f}),`
`,t(e.h1,{id:"splitbutton",children:"SplitButton"}),`
`,t(c,{docsHref:"https://design.domstol.no/987b33f71/p/1868a2-splitbutton",githubHref:"https://github.com/domstolene/designsystem/tree/master/components/src/components/SplitButton",figmaHref:"https://www.figma.com/file/ewqSDmkgqDQ5PyOsRp4V5b/DDS-Komponenter?node-id=155%3A37"}),`
`,t(e.h2,{id:"demo",children:"Demo"}),`
`,t(s,{children:t(d,{id:"dds-components-splitbutton--default",height:"380px"})}),`
`,t(h,{href:`${u}dds-components-splitbutton`}),`
`,t(e.h2,{id:"oversikt",children:"Oversikt"}),`
`,o(e.p,{children:[t(e.code,{children:"<SplitButton />"}),` er en todelt knapp som skal brukes ved flere relaterte handlinger, der den ene er mest vanlig.
Komponenten består av to knapper: én for den primære handlingen, og én for å åpne en meny med sekundære handlinger.
Når menyen åpnes og en handling velges blir den umiddelbart gjennomført.
`,t(e.code,{children:"<SplitButton />"})," er dermed en fusjon med en knapp og meny."]}),`
`,t(e.h2,{id:"bruk-i-koden",children:"Bruk i koden"}),`
`,t(g,{code:`import { SplitButton } from '@norges-domstoler/dds-components';

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
`,t(l,{story:a}),`
`,o(e.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",t(e.code,{children:"HTMLAttributes<HTMLDivElement>"}),"-interface i ",t(e.code,{children:"htmlProps"}),"."]})]})}function it(n={}){const{wrapper:e}=Object.assign({},i(),n.components);return e?t(e,Object.assign({},n,{children:t(r,n)})):r(n)}export{it as default};
//# sourceMappingURL=SplitButton-cb7ccfc4.js.map
