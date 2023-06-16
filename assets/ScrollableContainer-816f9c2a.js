import{j as e,a as r,F as c}from"./focus-visible-c2e9b88d.js";import{M as a,C as d,e as m,A as l,P as p}from"./chunk-PCJTTTQV-a67c1498.js";import{p as h,S as b,M as f,F as t}from"./storybook-components-c9cbefc3.js";import{S as g}from"./ScrollableContainer.stories-85e879e2.js";import{u as s}from"./index-bda0bad7.js";import{a as u}from"./ScrollableContainer-f6de3809.js";import"./index-ebeaab24.js";import"./iframe-b2bf83f2.js";import"../sb-preview/runtime.js";import"./index-72bda2b9.js";import"./index-9c09ad76.js";import"./index-d475d2ea.js";import"./index-356e4a49.js";import"./focusVisible-75802ac7.js";import"./ScrollableContainer.tokens-4d8ec996.js";import"./BaseComponentProps-bb0d5515.js";function i(o){const n=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",code:"code",h3:"h3"},s(),o.components);return r(c,{children:[e(a,{of:g}),`
`,e(n.h1,{id:"scrollablecontainer",children:"ScrollableContainer"}),`
`,e(h,{docsHref:"https://design.domstol.no/987b33f71/p/32db9d-scrollbar",figmaHref:"https://www.figma.com/file/ewqSDmkgqDQ5PyOsRp4V5b/DDS-Komponenter?node-id=7963%3A148079",githubHref:"https://github.com/domstolene/designsystem/tree/master/components/src/components/ScrollableContainer"}),`
`,e(n.h2,{id:"demo",children:"Demo"}),`
`,e(d,{children:e(m,{id:"dds-components-scrollablecontainer--default"})}),`
`,e(b,{href:`${f}dds-components-scrollablecontainer`}),`
`,e(n.h2,{id:"oversikt",children:"Oversikt"}),`
`,e(n.p,{children:"To subkomponenter er tilgjengelige:"}),`
`,r(n.ul,{children:[`
`,r(n.li,{children:[e(n.code,{children:"ScrollableContainer"})," - hovedkomponenten; en wrapper for innhold som skal scrolles. Håndterer scrolling og fokus ut av boksen."]}),`
`,r(n.li,{children:[e(n.code,{children:"Scrollbar"})," - selve scrollbaren som brukes i ",e(n.code,{children:"ScrollableContainer"}),". Håndterer scrolling når knyttet til elementet som skal scrolles. Kan brukes alene og håndtere plassering av scrollbaren og styling av innholdselementet selv."]}),`
`]}),`
`,e(n.h2,{id:"bruk-i-koden",children:"Bruk i koden"}),`
`,e(n.h3,{id:"vanlig-bruk",children:"Vanlig bruk"}),`
`,e(t,{code:`import { ScrollableContainer } from '@norges-domstoler/dds-components';

<ScrollableContainer>
  <p>lang tekst</p>
  <p>lang tekst</p>
</ScrollableContainer>

`}),`
`,r(n.h3,{id:"kun-med-scrollbar",children:["Kun med ",e(n.code,{children:"<Scrollbar>"})]}),`
`,r(n.p,{children:["Ved bruk av kun ",e(n.code,{children:"<Scrollbar/>"})," må man håndtere styling av containere, kobling til innholdet, plasseringen av ",e(n.code,{children:"<Scrollbar/>"})," og fokus."]}),`
`,e(t,{code:`import { Scrollbar, focusVisible } from '@norges-domstoler/dds-components';
  import { useRef } from 'React';
  import styled fromf 'styled-components';

const containerStyle = {
display: 'grid',
gridTemplate: 'auto / 1fr 20px',
overflow: 'hidden'
};

const Content = styled.div\`
height: 500px;
overflow: auto;
scrollbar-width: none;
::-webkit-scrollbar {
display: none;
}
:focus-visible {
\${focusVisible}
}
\`;

const contentRef = useRef();

<div style={containerStyle}>
  <Content tabIndex={0}>
    <p>lang tekst</p>
    <p>lang tekst</p>
  </Content>
  <Scrollbar />
</div>
`}),`
`,e(n.h2,{id:"api",children:"API"}),`
`,e(n.h2,{id:"scrollablecontainer-1",children:"ScrollableContainer"}),`
`,e(n.p,{children:"Hovedkomponenten for scrollbar innhold."}),`
`,e(l,{story:p}),`
`,e(n.h2,{id:"scrollbar",children:"Scrollbar"}),`
`,e(n.p,{children:"Alenestående scrollbar til mer custom bruk."}),`
`,e(l,{of:u})]})}function T(o={}){const{wrapper:n}=Object.assign({},s(),o.components);return n?e(n,Object.assign({},o,{children:e(i,o)})):i(o)}export{T as default};
//# sourceMappingURL=ScrollableContainer-816f9c2a.js.map
