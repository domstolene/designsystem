import{a as t,j as b}from"./jsx-runtime-e43ccb36.js";import{r as i}from"./index-1b03fe98.js";import"./Caption-c95a25e6.js";import"./Heading-eb094a5f.js";import"./Label-7698c3d3.js";import"./Legend-90ca2ccd.js";import"./Link-a0d6f9b6.js";import"./Paragraph-74ee9681.js";import"./TextOverflowEllipsis-a0e35774.js";import{T as m,a as _}from"./Typography-8df5b43e.js";import{d as L,s as c}from"./ddsReferenceTokens-cf345c8b.js";import{_ as I}from"./libraryAdd-bb03a5d3.js";import{I as T}from"./Icon-feef9230.js";import{g as B}from"./BaseComponentProps-c04e3b0f.js";import{r as N}from"./removeListStyling-80ec5e55.js";const $=r=>r.href!=null,n=i.forwardRef((r,e)=>{const{children:s,...o}=r;return $(r)?t(m,{htmlProps:o,ref:e,typographyType:"a",children:s}):t(m,{htmlProps:o,ref:e,as:"span",color:"interactive",children:s})});n.displayName="Breadcrumb";try{n.displayName="Breadcrumb",n.__docgenInfo={description:"",displayName:"Breadcrumb",props:{}}}catch{}const{colors:v,spacing:l}=L,S="bodySans02",P={color:v.DdsColorInteractiveBase},x={gap:l.SizesDdsSpacingLocalX05},E={gap:l.SizesDdsSpacingLocalX05},A={list:E,listItem:x,icon:P},{icon:w,list:C,listItem:H}=A,a=c.ol`
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
//# sourceMappingURL=Breadcrumbs-4db62cde.js.map
