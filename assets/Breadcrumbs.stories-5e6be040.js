import{j as r,d as L,s as i,a as h}from"./focus-visible-c2e9b88d.js";import{R as v}from"./storybook-components-91f985f3.js";import{r as n}from"./index-ebeaab24.js";import{r as x}from"./removeListStyling-80ec5e55.js";import{d as P}from"./Typography.utils-99dd1e07.js";import{C as _}from"./chevronRight-5d1e5886.js";import{g as D}from"./BaseComponentProps-bb0d5515.js";import{I as j}from"./Icon-819df738.js";import{T as m}from"./Typography-9f10a259.js";const C=e=>e.href!=null,c=n.forwardRef((e,t)=>{const{children:a,...o}=e;return C(e)?r(m,{htmlProps:o,ref:t,typographyType:"a",children:a}):r(m,{htmlProps:o,ref:t,as:"span",color:"interactive",children:a})});c.displayName="Breadcrumb";const{colors:N,spacing:f}=L,w="bodySans02",A={color:N.DdsColorInteractiveBase},R={gap:f.SizesDdsSpacingLocalX05},z={gap:f.SizesDdsSpacingLocalX05},O={list:z,listItem:R,icon:A},{icon:k,list:E,listItem:M}=O,g=i.ol`
  ${x}
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${E.gap};
`;g.displayName="List";const y=i.li`
  align-items: center;
  display: flex;
  gap: ${M.gap};
  ${P(w)}
`;y.displayName="ListItem";const X=i(j)`
  color: ${k.color};
`,d=n.forwardRef((e,t)=>{const{children:a,id:o,className:B,htmlProps:S,...T}=e,I=n.Children.toArray(a).map(($,l)=>h(y,{children:[l!==0&&r(X,{icon:_}),$]},`breadcrumb-${l}`));return r("nav",{...D(o,B,S,T),ref:t,"aria-label":"brødsmulesti",children:r(g,{children:I})})});d.displayName="Breadcrumbs";const F={title:"dds-components/Breadcrumbs",component:d},s=e=>r(v,{title:"Breadcrumbs - default",gap:"0",children:h(d,{...e,children:[r(c,{href:"#",children:"Side 1"}),r(c,{href:"#",children:"Side 2"}),r(c,{children:"Side 3"})]})});var p,u,b;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`(args: BreadcrumbsProps) => {
  return <StoryTemplate title="Breadcrumbs - default" gap="0">
      <Breadcrumbs {...args}>
        <Breadcrumb href="#">Side 1</Breadcrumb>
        <Breadcrumb href="#">Side 2</Breadcrumb>
        <Breadcrumb>Side 3</Breadcrumb>
      </Breadcrumbs>
    </StoryTemplate>;
}`,...(b=(u=s.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const H=["Default"],rr=Object.freeze(Object.defineProperty({__proto__:null,Default:s,__namedExportsOrder:H,default:F},Symbol.toStringTag,{value:"Module"}));export{rr as B,s as D};
//# sourceMappingURL=Breadcrumbs.stories-5e6be040.js.map