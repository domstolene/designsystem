import{a as t}from"./ddsReferenceTokens-ceb64027.js";import"./Caption-d066edab.js";import"./Heading-d8600f49.js";import"./Label-10c93eb5.js";import{L as n}from"./Legend-0cba57ca.js";import"./Link-7a88da71.js";import"./Paragraph-5ad16720.js";import"./TextOverflowEllipsis-e584ab25.js";import"./Typography-56baa34a.js";import{S as m}from"./StoryTemplate-dc672c6b.js";const i={title:"dds-components/Typography/Legend",component:n,argTypes:{withMargins:{control:{type:"boolean"}},text:{control:{type:"text"}}}},e=a=>{const{text:p,...d}=a;return t(m,{title:"Legend - default",children:t(n,{...d,children:p||"Legend"})})};var r,o,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`(args: StoryTProps) => {
  const {
    text,
    ...rest
  } = args;
  return <StoryTemplate title="Legend - default">
      <Legend {...rest}>{text || 'Legend'}</Legend>
    </StoryTemplate>;
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const l=["Default"],b=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:l,default:i},Symbol.toStringTag,{value:"Module"}));export{b as L};
//# sourceMappingURL=Legend.stories-acc54b7e.js.map
