import{j as t,b as o,F as m}from"./focus-visible-17f12d09.js";import{M as p,e as s,f as d,g as l,P as a}from"./index-c0e0960b.js";import{p as c,S as h,M as u,F as g}from"./storybook-components-b7b7a39c.js";import{S as f}from"./SplitButton.stories-fb5a2a72.js";import{u as i}from"./index-09fac16e.js";import"./index-c6dae603.js";import"./iframe-6efa2ccf.js";import"../sb-preview/runtime.js";import"./index-519f2600.js";import"./index-eb008d06.js";import"./OverflowMenuGroup-46b69d4a.js";import"./chevronUp-e61fcd7c.js";import"./SvgWrapper-0812a1f2.js";import"./chevronDown-dd1c1a45.js";import"./OverflowMenu-5ddbf0b1.js";import"./OverflowMenuItem-7faee782.js";import"./text-20d7ad40.js";import"./Typography.utils-3c68477b.js";import"./focusVisible-bd00be70.js";import"./normalize-f756ee4b.js";import"./useCombinedRefs-764cd8e8.js";import"./BaseComponentProps-bb0d5515.js";import"./Icon-a968456f.js";import"./useRoveFocus-01d68aa4.js";import"./person-f585b587.js";import"./visibilityTransition-86c3da85.js";import"./scrollbarStyling-27f949d7.js";import"./ScrollableContainer.tokens-3dce5c89.js";import"./selection-dced972e.js";import"./useFloatPosition-f4d76573.js";import"./floating-ui.react-dom.esm-68eb967a.js";import"./floating-ui.dom.browser.min-bfaefb31.js";import"./useOnClickOutside-08b83e6f.js";import"./useOnKeyDown-77bae070.js";import"./Divider-92e35ab0.js";import"./Button-4fdfc19e.js";import"./Button.tokens-82906d32.js";import"./Spinner-7298b3ed.js";import"./color-0daeea22.js";import"./plusCircled-2a049c6a.js";function r(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code"},i(),n.components);return o(m,{children:[t(p,{of:f}),`
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
`,o(e.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",t(e.code,{children:"HTMLAttributes<HTMLDivElement>"}),"-interface i ",t(e.code,{children:"htmlProps"}),"."]})]})}function ot(n={}){const{wrapper:e}=Object.assign({},i(),n.components);return e?t(e,Object.assign({},n,{children:t(r,n)})):r(n)}export{ot as default};
//# sourceMappingURL=SplitButton-75987f1c.js.map
