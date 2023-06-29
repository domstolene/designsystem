import{d as p,s as c,a as d,j as o}from"./focus-visible-35158c22.js";import{R as m}from"./storybook-components-cc5979ee.js";import{r as k}from"./index-d47b1f5a.js";import{a as f,z as u}from"./dds-icons-7a922c3a.js";import{T as g}from"./dds-typography-e761338c.js";const{colors:y,spacing:B}=p,L={color:y.DdsColorInteractiveBase},S={gap:B.SizesDdsSpacingLocalX05},l={icon:L,nav:S},x=c("nav")`
  align-items: center;
  display: flex;
  gap: ${l.nav.gap};
`,T=c(u)`
  color: ${l.icon.color};
`,t=k.forwardRef((a,i)=>d(x,{ref:i,children:[o(T,{icon:f.ArrowLeftIcon,iconSize:"small"}),o(g,{typographyType:"a",href:a.href,children:a.label})]}));t.displayName="BackLink";const h={title:"dds-components/BackLink",component:t,argTypes:{label:{control:"text",defaultValue:"Forrige nivå"},href:{control:"text",defaultValue:"/"}}},e=a=>o(m,{title:"BackLink - default",children:o(t,{...a})});var r,s,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`(args: BackLinkProps) => <StoryTemplate title="BackLink - default">
    <BackLink {...args} />
  </StoryTemplate>`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const v=["Default"],I=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:v,default:h},Symbol.toStringTag,{value:"Module"}));export{I as B,e as D};
//# sourceMappingURL=BackLink.stories-3df0a431.js.map
