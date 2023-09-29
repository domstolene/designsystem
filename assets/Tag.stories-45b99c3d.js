import{j as u,a as e}from"./ddsReferenceTokens-647ce456.js";import{S as i}from"./StoryTemplate-1d63849e.js";import{T as t}from"./Tag-322a7849.js";const d={title:"dds-components/Tag",component:t,argTypes:{text:{control:"text"}}},r=()=>u(i,{title:"Tag - overview",children:[e(t,{text:"default"}),e(t,{text:"success",purpose:"success"}),e(t,{text:"danger",purpose:"danger"}),e(t,{text:"warning",purpose:"warning"}),e(t,{text:"info",purpose:"info"})]}),a=g=>e(i,{title:"Tag - default",display:"block",children:e(t,{text:"default",...g})});var o,s,n;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`() => <StoryTemplate title="Tag - overview">
    <Tag text="default" />
    <Tag text="success" purpose="success" />
    <Tag text="danger" purpose="danger" />
    <Tag text="warning" purpose="warning" />
    <Tag text="info" purpose="info" />
  </StoryTemplate>`,...(n=(s=r.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var p,c,l;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`(args: TagProps) => <StoryTemplate title="Tag - default" display="block">
    <Tag text="default" {...args} />
  </StoryTemplate>`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const T=["Overview","Default"],S=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Overview:r,__namedExportsOrder:T,default:d},Symbol.toStringTag,{value:"Module"}));export{S as T};
//# sourceMappingURL=Tag.stories-45b99c3d.js.map
