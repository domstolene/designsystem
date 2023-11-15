import{j as p,a}from"./jsx-runtime-e43ccb36.js";import{S as m}from"./StoryTemplate-6a95b3b2.js";import{r as d}from"./index-1b03fe98.js";import{d as f,s as i}from"./ddsReferenceTokens-cf345c8b.js";import{q as k}from"./libraryAdd-1d1f72ea.js";import{I as u}from"./Icon-764411b5.js";import"./Caption-956f7c23.js";import"./Heading-1a21ccc8.js";import"./Label-1e45d63d.js";import"./Legend-8f4b1074.js";import"./Link-1d242339.js";import"./Paragraph-6d49c218.js";import"./TextOverflowEllipsis-5f7b5b23.js";import{T as y}from"./Typography-aec60abc.js";const{colors:g,spacing:_}=f,B={color:g.DdsColorInteractiveBase},L={gap:_.SizesDdsSpacingLocalX05},c={icon:B,nav:L},S=i("nav")`
  align-items: center;
  display: flex;
  gap: ${c.nav.gap};
`,h=i(u)`
  color: ${c.icon.color};
`,o=d.forwardRef((e,l)=>p(S,{ref:l,children:[a(h,{icon:k,iconSize:"small"}),a(y,{typographyType:"a",href:e.href,children:e.label})]}));o.displayName="BackLink";try{o.displayName="BackLink",o.__docgenInfo={description:"",displayName:"BackLink",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}}}}}catch{}const T={title:"dds-components/BackLink",component:o,argTypes:{label:{control:"text",defaultValue:"Forrige nivå"},href:{control:"text",defaultValue:"/"}}},r=e=>a(m,{title:"BackLink - default",children:a(o,{...e})});var t,n,s;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`(args: BackLinkProps) => <StoryTemplate title="BackLink - default">
    <BackLink {...args} />
  </StoryTemplate>`,...(s=(n=r.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const b=["Default"],A=Object.freeze(Object.defineProperty({__proto__:null,Default:r,__namedExportsOrder:b,default:T},Symbol.toStringTag,{value:"Module"}));export{A as B,r as D};
//# sourceMappingURL=BackLink.stories-3a6efa8a.js.map
