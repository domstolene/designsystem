import{j as x,a as r}from"./jsx-runtime-e43ccb36.js";import{S as a}from"./StoryTemplate-f03f5b44.js";import{I as n,O as o}from"./Icon-56c20d0c.js";const y={title:"dds-components/Icon",component:n,argTypes:{color:{control:{type:"text"}}},parameters:{controls:{exclude:["className"]}}},t=e=>x(a,{title:"Icon - overview",display:"grid",columnsAmount:4,children:[r(n,{...e,iconSize:"inherit",icon:o}),r(n,{...e,iconSize:"small",icon:o}),r(n,{...e,iconSize:"medium",icon:o}),r(n,{...e,iconSize:"large",icon:o})]}),i=e=>r(a,{title:"Icon - default",children:r(n,{...e,icon:o})}),c=e=>r(a,{title:"Icon - inherit",children:x("p",{style:{display:"flex",alignItems:"center",fontSize:"20px"},children:[r(n,{...e,icon:o,iconSize:"inherit"}),"Tekst"]})});var s,l,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`(args: IconProps) => {
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
}`,...(u=(d=i.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var I,S,g;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`(args: IconProps) => {
  return <StoryTemplate title="Icon - inherit">
      <p style={{
      display: 'flex',
      alignItems: 'center',
      fontSize: '20px'
    }}>
        <Icon {...args} icon={OpenExternal} iconSize="inherit" />
        Tekst
      </p>
    </StoryTemplate>;
}`,...(g=(S=c.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};const f=["Overview","Default","Inherit"],T=Object.freeze(Object.defineProperty({__proto__:null,Default:i,Inherit:c,Overview:t,__namedExportsOrder:f,default:y},Symbol.toStringTag,{value:"Module"}));export{T as I};
//# sourceMappingURL=Icon.stories-c3ba1156.js.map
