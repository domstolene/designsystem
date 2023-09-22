import{j as u,a as e}from"./ddsReferenceTokens-f1d35829.js";import{R as l}from"./storybook-components-97b79dd9.js";import{T as t}from"./Tag-f57d0e31.js";const d={title:"dds-components/Tag",component:t,argTypes:{text:{control:"text"}}},r=()=>u(l,{title:"Tag - overview",children:[e(t,{text:"default"}),e(t,{text:"success",purpose:"success"}),e(t,{text:"danger",purpose:"danger"}),e(t,{text:"warning",purpose:"warning"}),e(t,{text:"info",purpose:"info"})]}),a=g=>e(l,{title:"Tag - default",display:"block",children:e(t,{text:"default",...g})});var o,s,n;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`() => <StoryTemplate title="Tag - overview">
    <Tag text="default" />
    <Tag text="success" purpose="success" />
    <Tag text="danger" purpose="danger" />
    <Tag text="warning" purpose="warning" />
    <Tag text="info" purpose="info" />
  </StoryTemplate>`,...(n=(s=r.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var p,c,i;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`(args: TagProps) => <StoryTemplate title="Tag - default" display="block">
    <Tag text="default" {...args} />
  </StoryTemplate>`,...(i=(c=a.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const T=["Overview","Default"],v=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Overview:r,__namedExportsOrder:T,default:d},Symbol.toStringTag,{value:"Module"}));export{v as T};
//# sourceMappingURL=Tag.stories-6dedade5.js.map
