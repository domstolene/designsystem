import{d as p,s as i,j as d,a as o}from"./ddsReferenceTokens-647ce456.js";import{S as m}from"./StoryTemplate-ef3899a2.js";import{r as f}from"./index-ebeaab24.js";import{q as k}from"./libraryAdd-35e18a4f.js";import{I as u}from"./Icon-42793503.js";import"./Caption-9d9a71c0.js";import"./Heading-b4646737.js";import"./Label-470a2743.js";import"./Legend-6fbf6204.js";import"./Link-3e1e1a74.js";import"./Paragraph-ff3eeae6.js";import"./TextOverflowEllipsis-e3546c5b.js";import{T as y}from"./Typography-b6b10a83.js";const{colors:g,spacing:_}=p,B={color:g.DdsColorInteractiveBase},L={gap:_.SizesDdsSpacingLocalX05},c={icon:B,nav:L},S=i("nav")`
  align-items: center;
  display: flex;
  gap: ${c.nav.gap};
`,h=i(u)`
  color: ${c.icon.color};
`,a=f.forwardRef((e,l)=>d(S,{ref:l,children:[o(h,{icon:k,iconSize:"small"}),o(y,{typographyType:"a",href:e.href,children:e.label})]}));a.displayName="BackLink";try{a.displayName="BackLink",a.__docgenInfo={description:"",displayName:"BackLink",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}}}}}catch{}const T={title:"dds-components/BackLink",component:a,argTypes:{label:{control:"text",defaultValue:"Forrige nivå"},href:{control:"text",defaultValue:"/"}}},r=e=>o(m,{title:"BackLink - default",children:o(a,{...e})});var t,n,s;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`(args: BackLinkProps) => <StoryTemplate title="BackLink - default">
    <BackLink {...args} />
  </StoryTemplate>`,...(s=(n=r.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const b=["Default"],$=Object.freeze(Object.defineProperty({__proto__:null,Default:r,__namedExportsOrder:b,default:T},Symbol.toStringTag,{value:"Module"}));export{$ as B,r as D};
//# sourceMappingURL=BackLink.stories-77ee528a.js.map
