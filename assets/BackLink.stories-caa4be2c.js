import{d as p,s as c,j as d,a as o}from"./ddsReferenceTokens-f1d35829.js";import{R as m}from"./storybook-components-be8d83b8.js";import{r as k}from"./index-d47b1f5a.js";import{a as f,i as u}from"./dds-icons-265d9665.js";import{T as g}from"./dds-typography-cc6cb429.js";const{colors:y,spacing:B}=p,L={color:y.DdsColorInteractiveBase},S={gap:B.SizesDdsSpacingLocalX05},i={icon:L,nav:S},x=c("nav")`
  align-items: center;
  display: flex;
  gap: ${i.nav.gap};
`,T=c(u)`
  color: ${i.icon.color};
`,t=k.forwardRef((a,l)=>d(x,{ref:l,children:[o(T,{icon:f.ArrowLeftIcon,iconSize:"small"}),o(g,{typographyType:"a",href:a.href,children:a.label})]}));t.displayName="BackLink";const h={title:"dds-components/BackLink",component:t,argTypes:{label:{control:"text",defaultValue:"Forrige nivå"},href:{control:"text",defaultValue:"/"}}},e=a=>o(m,{title:"BackLink - default",children:o(t,{...a})});var r,s,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`(args: BackLinkProps) => <StoryTemplate title="BackLink - default">
    <BackLink {...args} />
  </StoryTemplate>`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const v=["Default"],I=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:v,default:h},Symbol.toStringTag,{value:"Module"}));export{I as B,e as D};
//# sourceMappingURL=BackLink.stories-caa4be2c.js.map
