import{d as p,s as i,j as d,a as o}from"./ddsReferenceTokens-647ce456.js";import{S as m}from"./StoryTemplate-28ced27f.js";import{r as f}from"./index-ebeaab24.js";import{q as k}from"./libraryAdd-1e72c15a.js";import{I as u}from"./Icon-42793503.js";import"./Caption-5c254d72.js";import"./Heading-dc72d0b9.js";import"./Label-23c96940.js";import"./Legend-dbc3ced6.js";import"./Link-9aff7843.js";import"./Paragraph-3340e0ea.js";import"./TextOverflowEllipsis-e3546c5b.js";import{T as y}from"./Typography-1747463b.js";const{colors:g,spacing:_}=p,B={color:g.DdsColorInteractiveBase},L={gap:_.SizesDdsSpacingLocalX05},c={icon:B,nav:L},S=i("nav")`
  align-items: center;
  display: flex;
  gap: ${c.nav.gap};
`,h=i(u)`
  color: ${c.icon.color};
`,a=f.forwardRef((e,l)=>d(S,{ref:l,children:[o(h,{icon:k,iconSize:"small"}),o(y,{typographyType:"a",href:e.href,children:e.label})]}));a.displayName="BackLink";try{a.displayName="BackLink",a.__docgenInfo={description:"",displayName:"BackLink",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}}}}}catch{}const T={title:"dds-components/BackLink",component:a,argTypes:{label:{control:"text",defaultValue:"Forrige nivå"},href:{control:"text",defaultValue:"/"}}},r=e=>o(m,{title:"BackLink - default",children:o(a,{...e})});var t,n,s;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`(args: BackLinkProps) => <StoryTemplate title="BackLink - default">
    <BackLink {...args} />
  </StoryTemplate>`,...(s=(n=r.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const b=["Default"],$=Object.freeze(Object.defineProperty({__proto__:null,Default:r,__namedExportsOrder:b,default:T},Symbol.toStringTag,{value:"Module"}));export{$ as B,r as D};
//# sourceMappingURL=BackLink.stories-5a344a83.js.map
