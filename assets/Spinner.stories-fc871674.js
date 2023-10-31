import{j as S,a as r}from"./jsx-runtime-e43ccb36.js";import{S as d}from"./StoryTemplate-fe1f5a61.js";import{d as m}from"./ddsReferenceTokens-a28ebf03.js";import{S as o}from"./Spinner-842be24a.js";const g={title:"dds-components/Spinner",component:o,argTypes:{color:{control:{type:"text"}},size:{control:{type:"text"}},tooltip:{control:{type:"text"},defaultValue:"Innlasting pågår"}}},n=e=>S(d,{title:"Spinner - overview",display:"grid",columnsAmount:4,gap:"30px",children:[r(o,{...e}),r(o,{...e,size:"60px",tooltip:"Egendefinert melding"}),r(o,{...e,color:"gray4"}),r(o,{...e,color:"gray4",size:"60px"}),r(o,{...e,color:"success"}),r(o,{...e,color:"success",size:"60px"}),r(o,{...e,color:"gray7"}),r(o,{...e,color:"gray7",size:"60px"})]}),s=e=>r(d,{title:"Spinner - default",children:r(o,{...e,size:e.size||m.iconSizes.DdsIconsizeMedium,color:e.color||"interactive"})});var t,i,p;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`(args: SpinnerProps) => <StoryTemplate title="Spinner - overview" display="grid" columnsAmount={4} gap="30px">
    <Spinner {...args} />
    <Spinner {...args} size="60px" tooltip="Egendefinert melding" />
    <Spinner {...args} color="gray4" />
    <Spinner {...args} color="gray4" size="60px" />
    <Spinner {...args} color="success" />
    <Spinner {...args} color="success" size="60px" />
    <Spinner {...args} color="gray7" />
    <Spinner {...args} color="gray7" size="60px" />
  </StoryTemplate>`,...(p=(i=n.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var a,c,l;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`(args: SpinnerProps) => <StoryTemplate title="Spinner - default">
    <Spinner {...args} size={args.size || ddsBaseTokens.iconSizes.DdsIconsizeMedium} color={args.color || 'interactive'} />
  </StoryTemplate>`,...(l=(c=s.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const u=["Overview","Default"],v=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Overview:n,__namedExportsOrder:u,default:g},Symbol.toStringTag,{value:"Module"}));export{v as S};
//# sourceMappingURL=Spinner.stories-fc871674.js.map