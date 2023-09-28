import{a as t}from"./ddsReferenceTokens-647ce456.js";import"./Caption-5c254d72.js";import"./Heading-dc72d0b9.js";import"./Label-23c96940.js";import{L as n}from"./Legend-dbc3ced6.js";import"./Link-9aff7843.js";import"./Paragraph-3340e0ea.js";import"./TextOverflowEllipsis-e3546c5b.js";import"./Typography-1747463b.js";import{S as m}from"./StoryTemplate-28ced27f.js";const i={title:"dds-components/Typography/Legend",component:n,argTypes:{withMargins:{control:{type:"boolean"}},text:{control:{type:"text"}}}},e=a=>{const{text:p,...d}=a;return t(m,{title:"Legend - default",children:t(n,{...d,children:p||"Legend"})})};var r,o,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`(args: StoryTProps) => {
  const {
    text,
    ...rest
  } = args;
  return <StoryTemplate title="Legend - default">
      <Legend {...rest}>{text || 'Legend'}</Legend>
    </StoryTemplate>;
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const l=["Default"],b=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:l,default:i},Symbol.toStringTag,{value:"Module"}));export{b as L};
//# sourceMappingURL=Legend.stories-9608a6f0.js.map
