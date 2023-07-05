import{a as e}from"./focus-visible-8467fd8b.js";import{C as s}from"./Caption-89a9e04d.js";import{R as l}from"./storybook-components-dc8c0578.js";const c={title:"dds-components/Typography/Caption",component:s,argTypes:{withMargins:{control:{type:"boolean"}},text:{control:{type:"text"}}}},t=n=>{const{text:p,...i}=n;return e(l,{title:"Caption - default",children:e(s,{...i,children:p||"Caption"})})};var o,r,a;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`(args: StoryTProps) => {
  const {
    text,
    ...rest
  } = args;
  return <StoryTemplate title="Caption - default">
      <Caption {...rest}>{text || 'Caption'}</Caption>
    </StoryTemplate>;
}`,...(a=(r=t.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const m=["Default"],f=Object.freeze(Object.defineProperty({__proto__:null,Default:t,__namedExportsOrder:m,default:c},Symbol.toStringTag,{value:"Module"}));export{f as C,t as D};
//# sourceMappingURL=Caption.stories-7b1b759d.js.map
