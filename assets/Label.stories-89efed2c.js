import{a as t}from"./ddsReferenceTokens-647ce456.js";import{L as s}from"./Label-b7852367.js";import{S as c}from"./StoryTemplate-40ed0c91.js";const m={title:"dds-components/Typography/Label",component:s,argTypes:{withMargins:{control:{type:"boolean"}},text:{control:{type:"text"}}}},e=l=>{const{text:n,...p}=l;return t(c,{title:"Label - default",children:t(s,{...p,children:n||"Label"})})};var r,o,a;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`(args: StoryTProps) => {
  const {
    text,
    ...rest
  } = args;
  return <StoryTemplate title="Label - default">
      <Label {...rest}>{text || 'Label'}</Label>
    </StoryTemplate>;
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const i=["Default"],L=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:i,default:m},Symbol.toStringTag,{value:"Module"}));export{L};
//# sourceMappingURL=Label.stories-89efed2c.js.map
