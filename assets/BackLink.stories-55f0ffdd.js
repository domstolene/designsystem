import{j as p,a}from"./jsx-runtime-e43ccb36.js";import{S as m}from"./StoryTemplate-927617b9.js";import{r as d}from"./index-1b03fe98.js";import{d as f,s as i}from"./ddsReferenceTokens-fe3c594e.js";import{q as k}from"./libraryAdd-7dde1b65.js";import{I as u}from"./Icon-23caff97.js";import"./Caption-a006c5bc.js";import"./Heading-3ac6a2d9.js";import"./Label-60a960ab.js";import"./Legend-bad3d4ec.js";import"./Link-bef7f478.js";import"./Paragraph-f6678e05.js";import"./TextOverflowEllipsis-c2a9fc8f.js";import{T as y}from"./Typography-9d6edb9c.js";const{colors:g,spacing:_}=f,B={color:g.DdsColorInteractiveBase},L={gap:_.SizesDdsSpacingLocalX05},c={icon:B,nav:L},S=i("nav")`
  align-items: center;
  display: flex;
  gap: ${c.nav.gap};
`,h=i(u)`
  color: ${c.icon.color};
`,o=d.forwardRef((e,l)=>p(S,{ref:l,children:[a(h,{icon:k,iconSize:"small"}),a(y,{typographyType:"a",href:e.href,children:e.label})]}));o.displayName="BackLink";try{o.displayName="BackLink",o.__docgenInfo={description:"",displayName:"BackLink",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}}}}}catch{}const T={title:"dds-components/BackLink",component:o,argTypes:{label:{control:"text",defaultValue:"Forrige nivå"},href:{control:"text",defaultValue:"/"}}},r=e=>a(m,{title:"BackLink - default",children:a(o,{...e})});var t,n,s;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`(args: BackLinkProps) => <StoryTemplate title="BackLink - default">
    <BackLink {...args} />
  </StoryTemplate>`,...(s=(n=r.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const b=["Default"],A=Object.freeze(Object.defineProperty({__proto__:null,Default:r,__namedExportsOrder:b,default:T},Symbol.toStringTag,{value:"Module"}));export{A as B,r as D};
//# sourceMappingURL=BackLink.stories-55f0ffdd.js.map
