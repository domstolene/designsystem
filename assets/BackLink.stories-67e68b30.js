import{j as p,a}from"./jsx-runtime-e43ccb36.js";import{S as m}from"./StoryTemplate-a536eef8.js";import{r as d}from"./index-1b03fe98.js";import{d as f,s as i}from"./ddsReferenceTokens-f9f5a4e4.js";import{q as k}from"./libraryAdd-5ac12ed0.js";import{I as u}from"./Icon-1678d620.js";import"./Caption-6d408196.js";import"./Heading-5f7faa2b.js";import"./Label-9dee7f37.js";import"./Legend-41f9f05c.js";import"./Link-1567bf4e.js";import"./Paragraph-998f64b8.js";import"./TextOverflowEllipsis-1edb8626.js";import{T as y}from"./Typography-e857479c.js";const{colors:g,spacing:_}=f,B={color:g.DdsColorInteractiveBase},L={gap:_.SizesDdsSpacingLocalX05},c={icon:B,nav:L},S=i("nav")`
  align-items: center;
  display: flex;
  gap: ${c.nav.gap};
`,h=i(u)`
  color: ${c.icon.color};
`,o=d.forwardRef((e,l)=>p(S,{ref:l,children:[a(h,{icon:k,iconSize:"small"}),a(y,{typographyType:"a",href:e.href,children:e.label})]}));o.displayName="BackLink";try{o.displayName="BackLink",o.__docgenInfo={description:"",displayName:"BackLink",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}}}}}catch{}const T={title:"dds-components/BackLink",component:o,argTypes:{label:{control:"text",defaultValue:"Forrige nivå"},href:{control:"text",defaultValue:"/"}}},r=e=>a(m,{title:"BackLink - default",children:a(o,{...e})});var t,n,s;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`(args: BackLinkProps) => <StoryTemplate title="BackLink - default">
    <BackLink {...args} />
  </StoryTemplate>`,...(s=(n=r.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const b=["Default"],A=Object.freeze(Object.defineProperty({__proto__:null,Default:r,__namedExportsOrder:b,default:T},Symbol.toStringTag,{value:"Module"}));export{A as B,r as D};
//# sourceMappingURL=BackLink.stories-67e68b30.js.map
