import{j as t}from"./focus-visible-c2e9b88d.js";import{R as c}from"./storybook-components-91f985f3.js";import{L as s}from"./Label-ec3ecd5b.js";const i={title:"dds-components/Typography/Label",component:s,argTypes:{withMargins:{control:{type:"boolean"}},text:{control:{type:"text"}}}},e=l=>{const{text:n,...p}=l;return t(c,{title:"Label - default",children:t(s,{...p,children:n||"Label"})})};var r,o,a;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`(args: StoryTProps) => {
  const {
    text,
    ...rest
  } = args;
  return <StoryTemplate title="Label - default">
      <Label {...rest}>{text || 'Label'}</Label>
    </StoryTemplate>;
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const m=["Default"],L=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:m,default:i},Symbol.toStringTag,{value:"Module"}));export{L};
//# sourceMappingURL=Label.stories-0885935f.js.map