import{a as r,d as I,s as i,j as h}from"./focus-visible-8467fd8b.js";import{R as x}from"./storybook-components-3257698a.js";import{r as n}from"./index-d47b1f5a.js";import{a as _,i as v}from"./dds-icons-57b6044b.js";import{D as L,a as P}from"./dds-core-b89b291f.js";import{T as m,O as j}from"./dds-typography-4e6445f7.js";const N=e=>e.href!=null,c=n.forwardRef((e,s)=>{const{children:t,...o}=e;return N(e)?r(m,{htmlProps:o,ref:s,typographyType:"a",children:t}):r(m,{htmlProps:o,ref:s,as:"span",color:"interactive",children:t})});c.displayName="Breadcrumb";const{colors:O,spacing:f}=I,w="bodySans02",A={color:O.DdsColorInteractiveBase},C={gap:f.SizesDdsSpacingLocalX05},R={gap:f.SizesDdsSpacingLocalX05},z={list:R,listItem:C,icon:A},{icon:k,list:E,listItem:X}=z,y=i.ol`
  ${L}
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${E.gap};
`;y.displayName="List";const g=i.li`
  align-items: center;
  display: flex;
  gap: ${X.gap};
  ${j(w)}
`;g.displayName="ListItem";const M=i(v)`
  color: ${k.color};
`,d=n.forwardRef((e,s)=>{const{children:t,id:o,className:B,htmlProps:S,...T}=e,$=n.Children.toArray(t).map((D,l)=>h(g,{children:[l!==0&&r(M,{icon:_.ChevronRightIcon}),D]},`breadcrumb-${l}`));return r("nav",{...P(o,B,S,T),ref:s,"aria-label":"brødsmulesti",children:r(y,{children:$})})});d.displayName="Breadcrumbs";const Q={title:"dds-components/Breadcrumbs",component:d},a=e=>r(x,{title:"Breadcrumbs - default",gap:"0",children:h(d,{...e,children:[r(c,{href:"#",children:"Side 1"}),r(c,{href:"#",children:"Side 2"}),r(c,{children:"Side 3"})]})});var p,u,b;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`(args: BreadcrumbsProps) => {
  return <StoryTemplate title="Breadcrumbs - default" gap="0">
      <Breadcrumbs {...args}>
        <Breadcrumb href="#">Side 1</Breadcrumb>
        <Breadcrumb href="#">Side 2</Breadcrumb>
        <Breadcrumb>Side 3</Breadcrumb>
      </Breadcrumbs>
    </StoryTemplate>;
}`,...(b=(u=a.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const q=["Default"],W=Object.freeze(Object.defineProperty({__proto__:null,Default:a,__namedExportsOrder:q,default:Q},Symbol.toStringTag,{value:"Module"}));export{W as B,a as D};
//# sourceMappingURL=Breadcrumbs.stories-90894b78.js.map
