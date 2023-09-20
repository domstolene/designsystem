import{a as t}from"./ddsReferenceTokens-f1d35829.js";import"./Caption-9357365a.js";import"./Heading-d6ad5763.js";import"./Label-e3840bed.js";import{L as s}from"./Legend-24641deb.js";import"./Link-2c33781e.js";import"./Paragraph-b0b97b26.js";import"./Typography-bbaad6ba.js";import{R as i}from"./storybook-components-e6e74b30.js";const m={title:"dds-components/Typography/Legend",component:s,argTypes:{withMargins:{control:{type:"boolean"}},text:{control:{type:"text"}}}},e=a=>{const{text:p,...d}=a;return t(i,{title:"Legend - default",children:t(s,{...d,children:p||"Legend"})})};var r,o,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`(args: StoryTProps) => {
  const {
    text,
    ...rest
  } = args;
  return <StoryTemplate title="Legend - default">
      <Legend {...rest}>{text || 'Legend'}</Legend>
    </StoryTemplate>;
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const l=["Default"],T=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:l,default:m},Symbol.toStringTag,{value:"Module"}));export{T as L};
//# sourceMappingURL=Legend.stories-6d98839c.js.map
