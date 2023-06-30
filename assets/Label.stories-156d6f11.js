import{j as t}from"./focus-visible-35158c22.js";import{L as s}from"./Label-db038fe7.js";import{R as c}from"./storybook-components-e24cb579.js";const i={title:"dds-components/Typography/Label",component:s,argTypes:{withMargins:{control:{type:"boolean"}},text:{control:{type:"text"}}}},e=l=>{const{text:n,...p}=l;return t(c,{title:"Label - default",children:t(s,{...p,children:n||"Label"})})};var r,o,a;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`(args: StoryTProps) => {
  const {
    text,
    ...rest
  } = args;
  return <StoryTemplate title="Label - default">
      <Label {...rest}>{text || 'Label'}</Label>
    </StoryTemplate>;
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const m=["Default"],L=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:m,default:i},Symbol.toStringTag,{value:"Module"}));export{L};
//# sourceMappingURL=Label.stories-156d6f11.js.map
