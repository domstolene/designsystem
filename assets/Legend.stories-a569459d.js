import{j as t}from"./focus-visible-17f12d09.js";import{R as p}from"./storybook-components-8785bb6b.js";import{L as s}from"./Legend-0a5b031f.js";const c={title:"dds-components/Typography/Legend",component:s,argTypes:{withMargins:{control:{type:"boolean"}},text:{control:{type:"text"}}}},e=a=>{const{text:d,...l}=a;return t(p,{title:"Legend - default",children:t(s,{...l,children:d||"Legend"})})};var r,o,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`(args: StoryTProps) => {
  const {
    text,
    ...rest
  } = args;
  return <StoryTemplate title="Legend - default">
      <Legend {...rest}>{text || 'Legend'}</Legend>
    </StoryTemplate>;
}`,...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const g=["Default"],L=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:g,default:c},Symbol.toStringTag,{value:"Module"}));export{L};
//# sourceMappingURL=Legend.stories-a569459d.js.map
