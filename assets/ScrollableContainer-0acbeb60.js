import{a as e,j as r,F as c}from"./jsx-runtime-e43ccb36.js";import{M as a,C as d,b as m,A as l,P as p}from"./chunk-HLWAVYOI-6f356e5e.js";import{C as h,L as b,c as t}from"./StoryTemplate-6502379c.js";import{S as f}from"./constants-69754a51.js";import{S as g}from"./ScrollableContainer.stories-76cd42f6.js";import{u as s}from"./index-2ef8b458.js";import{a as u}from"./ScrollableContainer-796f47e4.js";import"./index-1b03fe98.js";import"./iframe-457e83b5.js";import"../sb-preview/runtime.js";import"./index-6d191f71.js";import"./index-6fd5a17b.js";import"./index-356e4a49.js";import"./ddsReferenceTokens-a28ebf03.js";import"./Input.styles-97d4f19a.js";import"./BaseComponentProps-b6ad9f7d.js";import"./Caption-d810b87c.js";import"./TextOverflowEllipsis-6cc9a60a.js";import"./Typography-d13ef156.js";import"./Heading-0c5437bc.js";import"./Label-05114518.js";import"./Legend-9969638c.js";import"./Link-c264ab95.js";import"./Paragraph-88055bd8.js";import"./ScrollableContainer.tokens-fec9d215.js";function i(o){const n=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",code:"code",h3:"h3"},s(),o.components);return r(c,{children:[e(a,{of:g}),`
`,e(n.h1,{id:"scrollablecontainer",children:"ScrollableContainer"}),`
`,e(h,{docsHref:"https://design.domstol.no/987b33f71/p/32db9d-scrollbar",figmaHref:"https://www.figma.com/file/ewqSDmkgqDQ5PyOsRp4V5b/DDS-Komponenter?node-id=7963%3A148079",githubHref:"https://github.com/domstolene/designsystem/tree/main/packages/components/src/components/ScrollableContainer"}),`
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
`,e(l,{of:u})]})}function E(o={}){const{wrapper:n}=Object.assign({},s(),o.components);return n?e(n,Object.assign({},o,{children:e(i,o)})):i(o)}export{E as default};
//# sourceMappingURL=ScrollableContainer-0acbeb60.js.map
