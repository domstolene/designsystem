import{a as t,j as b}from"./jsx-runtime-e43ccb36.js";import{r as i}from"./index-1b03fe98.js";import"./Caption-a006c5bc.js";import"./Heading-3ac6a2d9.js";import"./Label-60a960ab.js";import"./Legend-bad3d4ec.js";import"./Link-bef7f478.js";import"./Paragraph-f6678e05.js";import"./TextOverflowEllipsis-c2a9fc8f.js";import{T as m,a as _}from"./Typography-9d6edb9c.js";import{d as L,s as c}from"./ddsReferenceTokens-fe3c594e.js";import{_ as I}from"./libraryAdd-dfc2ed03.js";import{I as T}from"./Icon-e72250a3.js";import{g as B}from"./BaseComponentProps-b46a4458.js";import{r as N}from"./removeListStyling-80ec5e55.js";const $=r=>r.href!=null,n=i.forwardRef((r,e)=>{const{children:s,...o}=r;return $(r)?t(m,{htmlProps:o,ref:e,typographyType:"a",children:s}):t(m,{htmlProps:o,ref:e,as:"span",color:"interactive",children:s})});n.displayName="Breadcrumb";try{n.displayName="Breadcrumb",n.__docgenInfo={description:"",displayName:"Breadcrumb",props:{}}}catch{}const{colors:v,spacing:l}=L,S="bodySans02",P={color:v.DdsColorInteractiveBase},x={gap:l.SizesDdsSpacingLocalX05},E={gap:l.SizesDdsSpacingLocalX05},A={list:E,listItem:x,icon:P},{icon:w,list:C,listItem:H}=A,a=c.ol`
  ${N}
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${C.gap};
`;a.displayName="List";const d=c.li`
  align-items: center;
  display: flex;
  gap: ${H.gap};
  ${_(S)}
`;d.displayName="ListItem";const M=c(T)`
  color: ${w.color};
`,j=i.forwardRef((r,e)=>{const{children:s,id:o,className:y,htmlProps:g,...u}=r,h=i.Children.toArray(s).map((f,p)=>b(d,{children:[p!==0&&t(M,{icon:I}),f]},`breadcrumb-${p}`));return t("nav",{...B(o,y,g,u),ref:e,"aria-label":"brødsmulesti",children:t(a,{children:h})})});j.displayName="Breadcrumbs";try{a.displayName="List",a.__docgenInfo={description:"",displayName:"List",props:{htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:"HTMLAttributes<HTMLElement> | undefined"}}}}}catch{}export{n as B,j as a};
//# sourceMappingURL=Breadcrumbs-9a488e6b.js.map
