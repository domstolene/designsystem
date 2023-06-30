import{j as t}from"./focus-visible-35158c22.js";import"./Caption-75086338.js";import"./Heading-0c6b7f25.js";import"./Label-db038fe7.js";import{L as s}from"./Legend-1f85ed70.js";import"./Link-cf025b87.js";import"./Paragraph-09ef6580.js";import"./Typography-b2d6daf2.js";import{R as i}from"./storybook-components-e24cb579.js";const m={title:"dds-components/Typography/Legend",component:s,argTypes:{withMargins:{control:{type:"boolean"}},text:{control:{type:"text"}}}},e=a=>{const{text:p,...d}=a;return t(i,{title:"Legend - default",children:t(s,{...d,children:p||"Legend"})})};var r,o,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`(args: StoryTProps) => {
  const {
    text,
    ...rest
  } = args;
  return <StoryTemplate title="Legend - default">
      <Legend {...rest}>{text || 'Legend'}</Legend>
    </StoryTemplate>;
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const l=["Default"],T=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:l,default:m},Symbol.toStringTag,{value:"Module"}));export{T as L};
//# sourceMappingURL=Legend.stories-0092831e.js.map
