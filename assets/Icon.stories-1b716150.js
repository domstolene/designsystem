import{b as g,j as r}from"./focus-visible-17f12d09.js";import{R as a}from"./storybook-components-b7b7a39c.js";import{O as n}from"./openExternal-a1402f29.js";import{I as o}from"./Icon-a968456f.js";import{T as h}from"./Typography-ddbe86f6.js";const T={title:"dds-components/Icon",component:o,argTypes:{color:{control:{type:"text"}}},parameters:{controls:{exclude:["className"]}}},t=e=>g(a,{title:"Icon - overview",display:"grid",columnsAmount:4,children:[r(o,{...e,iconSize:"inherit",icon:n}),r(o,{...e,iconSize:"small",icon:n}),r(o,{...e,iconSize:"medium",icon:n}),r(o,{...e,iconSize:"large",icon:n})]}),i=e=>r(a,{title:"Icon - default",children:r(o,{...e,icon:n})}),c=e=>r(a,{title:"Icon - inherit",children:g(h,{typographyType:"bodySans04",style:{display:"flex",alignItems:"center"},children:[r(o,{...e,icon:n,iconSize:"inherit"}),"Tekst"]})});var s,l,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`(args: IconProps) => {
  return <StoryTemplate title="Icon - overview" display="grid" columnsAmount={4}>
      <Icon {...args} iconSize="inherit" icon={OpenExternal} />
      <Icon {...args} iconSize="small" icon={OpenExternal} />
      <Icon {...args} iconSize="medium" icon={OpenExternal} />
      <Icon {...args} iconSize="large" icon={OpenExternal} />
    </StoryTemplate>;
}`,...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,d,u;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`(args: IconProps) => {
  return <StoryTemplate title="Icon - default">
      <Icon {...args} icon={OpenExternal} />
    </StoryTemplate>;
}`,...(u=(d=i.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var y,I,S;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`(args: IconProps) => {
  return <StoryTemplate title="Icon - inherit">
      <Typography typographyType="bodySans04" style={{
      display: 'flex',
      alignItems: 'center'
    }}>
        <Icon {...args} icon={OpenExternal} iconSize="inherit" />
        Tekst
      </Typography>
    </StoryTemplate>;
}`,...(S=(I=c.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};const x=["Overview","Default","Inherit"],_=Object.freeze(Object.defineProperty({__proto__:null,Default:i,Inherit:c,Overview:t,__namedExportsOrder:x,default:T},Symbol.toStringTag,{value:"Module"}));export{_ as I};
//# sourceMappingURL=Icon.stories-1b716150.js.map
