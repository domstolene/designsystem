import{j as r,d as x,s as i,a as h}from"./focus-visible-35158c22.js";import{R as _}from"./storybook-components-e24cb579.js";import{r as n}from"./index-d47b1f5a.js";import{a as v,z as w}from"./dds-icons-7a922c3a.js";import{w as D,a as L}from"./dds-core-29d22035.js";import{T as m,O as P}from"./dds-typography-e761338c.js";const j=e=>e.href!=null,c=n.forwardRef((e,s)=>{const{children:t,...o}=e;return j(e)?r(m,{htmlProps:o,ref:s,typographyType:"a",children:t}):r(m,{htmlProps:o,ref:s,as:"span",color:"interactive",children:t})});c.displayName="Breadcrumb";const{colors:z,spacing:f}=x,N="bodySans02",O={color:z.DdsColorInteractiveBase},A={gap:f.SizesDdsSpacingLocalX05},C={gap:f.SizesDdsSpacingLocalX05},R={list:C,listItem:A,icon:O},{icon:k,list:E,listItem:X}=R,y=i.ol`
  ${D}
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${E.gap};
`;y.displayName="List";const g=i.li`
  align-items: center;
  display: flex;
  gap: ${X.gap};
  ${P(N)}
`;g.displayName="ListItem";const M=i(w)`
  color: ${k.color};
`,d=n.forwardRef((e,s)=>{const{children:t,id:o,className:B,htmlProps:S,...T}=e,$=n.Children.toArray(t).map((I,l)=>h(g,{children:[l!==0&&r(M,{icon:v.ChevronRightIcon}),I]},`breadcrumb-${l}`));return r("nav",{...L(o,B,S,T),ref:s,"aria-label":"brødsmulesti",children:r(y,{children:$})})});d.displayName="Breadcrumbs";const Z={title:"dds-components/Breadcrumbs",component:d},a=e=>r(_,{title:"Breadcrumbs - default",gap:"0",children:h(d,{...e,children:[r(c,{href:"#",children:"Side 1"}),r(c,{href:"#",children:"Side 2"}),r(c,{children:"Side 3"})]})});var p,u,b;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`(args: BreadcrumbsProps) => {
  return <StoryTemplate title="Breadcrumbs - default" gap="0">
      <Breadcrumbs {...args}>
        <Breadcrumb href="#">Side 1</Breadcrumb>
        <Breadcrumb href="#">Side 2</Breadcrumb>
        <Breadcrumb>Side 3</Breadcrumb>
      </Breadcrumbs>
    </StoryTemplate>;
}`,...(b=(u=a.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const q=["Default"],V=Object.freeze(Object.defineProperty({__proto__:null,Default:a,__namedExportsOrder:q,default:Z},Symbol.toStringTag,{value:"Module"}));export{V as B,a as D};
//# sourceMappingURL=Breadcrumbs.stories-d17a7639.js.map
