import{d as p,s as c,b as d,j as a}from"./focus-visible-17f12d09.js";import{R as m}from"./storybook-components-54c9cf1b.js";import{r as f}from"./index-c6dae603.js";import{A as k}from"./arrowLeft-e5d8ed37.js";import{T as u}from"./Typography-ddbe86f6.js";import{I as g}from"./Icon-a968456f.js";const{colors:y,spacing:B}=p,L={color:y.DdsColorInteractiveBase},S={gap:B.SizesDdsSpacingLocalX05},i={icon:L,nav:S},T=c("nav")`
  align-items: center;
  display: flex;
  gap: ${i.nav.gap};
`,h=c(g)`
  color: ${i.icon.color};
`,r=f.forwardRef((o,l)=>d(T,{ref:l,children:[a(h,{icon:k,iconSize:"small"}),a(u,{typographyType:"a",href:o.href,children:o.label})]}));r.displayName="BackLink";const x={title:"dds-components/BackLink",component:r,argTypes:{label:{control:"text",defaultValue:"Forrige nivå"},href:{control:"text",defaultValue:"/"}}},e=o=>a(m,{title:"BackLink - default",children:a(r,{...o})});var t,s,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`(args: BackLinkProps) => <StoryTemplate title="BackLink - default">
    <BackLink {...args} />
  </StoryTemplate>`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const b=["Default"],O=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:b,default:x},Symbol.toStringTag,{value:"Module"}));export{O as B,e as D};
//# sourceMappingURL=BackLink.stories-171b2374.js.map
