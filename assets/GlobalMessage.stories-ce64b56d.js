import{j as f,a as s}from"./jsx-runtime-e43ccb36.js";import{S as t}from"./StoryTemplate-999e343c.js";import{G as l}from"./GlobalMessage-2bd4d327.js";const G={title:"dds-components/GlobalMessage",component:l,argTypes:{message:{control:{type:"text"}},closable:{control:{type:"boolean"}}}},a=e=>f(t,{title:"GlobalMessage - overview",children:[s(l,{...e,purpose:"info",message:"En tilfeldig melding"}),s(l,{...e,purpose:"warning",message:"En tilfeldig melding"}),s(l,{...e,purpose:"danger",message:"En tilfeldig melding"}),s(l,{...e,purpose:"info",message:"En tilfeldig melding",closable:!0}),s(l,{...e,purpose:"warning",message:"En tilfeldig melding",closable:!0}),s(l,{...e,purpose:"danger",message:"En tilfeldig melding",closable:!0})]}),o=e=>s(t,{title:"GlobalMessage - default",children:s(l,{...e,message:e.message||"En tilfeldig melding"})}),r=e=>s(t,{title:"GlobalMessage - closable",children:s(l,{...e,purpose:e.purpose||"info",message:e.message||"En tilfeldig melding",closable:!0})});var g,n,i;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`(args: GlobalMessageProps) => {
  return <StoryTemplate title="GlobalMessage - overview">
      <GlobalMessage {...args} purpose="info" message="En tilfeldig melding" />
      <GlobalMessage {...args} purpose="warning" message="En tilfeldig melding" />
      <GlobalMessage {...args} purpose="danger" message="En tilfeldig melding" />
      <GlobalMessage {...args} purpose="info" message="En tilfeldig melding" closable />
      <GlobalMessage {...args} purpose="warning" message="En tilfeldig melding" closable />
      <GlobalMessage {...args} purpose="danger" message="En tilfeldig melding" closable />
    </StoryTemplate>;
}`,...(i=(n=a.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var m,p,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`(args: GlobalMessageProps) => {
  return <StoryTemplate title="GlobalMessage - default">
      <GlobalMessage {...args} message={args.message || 'En tilfeldig melding'} />
    </StoryTemplate>;
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var c,u,b;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`(args: GlobalMessageProps) => {
  return <StoryTemplate title="GlobalMessage - closable">
      <GlobalMessage {...args} purpose={args.purpose || 'info'} message={args.message || 'En tilfeldig melding'} closable />
    </StoryTemplate>;
}`,...(b=(u=r.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const M=["Overview","Default","Closable"],v=Object.freeze(Object.defineProperty({__proto__:null,Closable:r,Default:o,Overview:a,__namedExportsOrder:M,default:G},Symbol.toStringTag,{value:"Module"}));export{v as G};
//# sourceMappingURL=GlobalMessage.stories-ce64b56d.js.map
