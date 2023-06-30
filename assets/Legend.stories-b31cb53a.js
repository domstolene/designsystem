import{a as t}from"./focus-visible-8467fd8b.js";import"./Caption-89a9e04d.js";import"./Heading-cdc0040d.js";import"./Label-cf624c4b.js";import{L as s}from"./Legend-d49548e0.js";import"./Link-7189fff9.js";import"./Paragraph-8bf29af3.js";import"./Typography-aacb8cd1.js";import{R as i}from"./storybook-components-3257698a.js";const m={title:"dds-components/Typography/Legend",component:s,argTypes:{withMargins:{control:{type:"boolean"}},text:{control:{type:"text"}}}},e=a=>{const{text:p,...d}=a;return t(i,{title:"Legend - default",children:t(s,{...d,children:p||"Legend"})})};var r,o,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`(args: StoryTProps) => {
  const {
    text,
    ...rest
  } = args;
  return <StoryTemplate title="Legend - default">
      <Legend {...rest}>{text || 'Legend'}</Legend>
    </StoryTemplate>;
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const l=["Default"],T=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:l,default:m},Symbol.toStringTag,{value:"Module"}));export{T as L};
//# sourceMappingURL=Legend.stories-b31cb53a.js.map
