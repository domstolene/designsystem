import{d as p,s as i,j as d,a as o}from"./ddsReferenceTokens-ceb64027.js";import{S as m}from"./StoryTemplate-a2fc1fbf.js";import{r as f}from"./index-1b03fe98.js";import{q as k}from"./libraryAdd-931d79ee.js";import{I as u}from"./Icon-72ef85ba.js";import"./Caption-d066edab.js";import"./Heading-d8600f49.js";import"./Label-10c93eb5.js";import"./Legend-0cba57ca.js";import"./Link-7a88da71.js";import"./Paragraph-5ad16720.js";import"./TextOverflowEllipsis-e584ab25.js";import{T as y}from"./Typography-56baa34a.js";const{colors:g,spacing:_}=p,B={color:g.DdsColorInteractiveBase},L={gap:_.SizesDdsSpacingLocalX05},c={icon:B,nav:L},S=i("nav")`
  align-items: center;
  display: flex;
  gap: ${c.nav.gap};
`,h=i(u)`
  color: ${c.icon.color};
`,a=f.forwardRef((e,l)=>d(S,{ref:l,children:[o(h,{icon:k,iconSize:"small"}),o(y,{typographyType:"a",href:e.href,children:e.label})]}));a.displayName="BackLink";try{a.displayName="BackLink",a.__docgenInfo={description:"",displayName:"BackLink",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}}}}}catch{}const T={title:"dds-components/BackLink",component:a,argTypes:{label:{control:"text",defaultValue:"Forrige nivå"},href:{control:"text",defaultValue:"/"}}},r=e=>o(m,{title:"BackLink - default",children:o(a,{...e})});var t,n,s;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`(args: BackLinkProps) => <StoryTemplate title="BackLink - default">
    <BackLink {...args} />
  </StoryTemplate>`,...(s=(n=r.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const b=["Default"],$=Object.freeze(Object.defineProperty({__proto__:null,Default:r,__namedExportsOrder:b,default:T},Symbol.toStringTag,{value:"Module"}));export{$ as B,r as D};
//# sourceMappingURL=BackLink.stories-e5c6f16b.js.map
