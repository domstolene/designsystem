import{a as t,j as b}from"./jsx-runtime-e43ccb36.js";import{r as i}from"./index-1b03fe98.js";import"./Caption-7324954d.js";import"./Heading-a143a4ab.js";import"./Label-e6c412e2.js";import"./Legend-8686145c.js";import"./Link-0af95a08.js";import"./Paragraph-67d8f149.js";import"./TextOverflowEllipsis-5f7b5b23.js";import{T as m,a as _}from"./Typography-37e894bc.js";import{d as L,s as c}from"./ddsReferenceTokens-cf345c8b.js";import{_ as I}from"./libraryAdd-792d55f1.js";import{I as T}from"./Icon-96508a26.js";import{g as B}from"./BaseComponentProps-217bcb03.js";import{r as N}from"./removeListStyling-80ec5e55.js";const $=r=>r.href!=null,n=i.forwardRef((r,e)=>{const{children:s,...o}=r;return $(r)?t(m,{htmlProps:o,ref:e,typographyType:"a",children:s}):t(m,{htmlProps:o,ref:e,as:"span",color:"interactive",children:s})});n.displayName="Breadcrumb";try{n.displayName="Breadcrumb",n.__docgenInfo={description:"",displayName:"Breadcrumb",props:{}}}catch{}const{colors:v,spacing:l}=L,S="bodySans02",P={color:v.DdsColorInteractiveBase},x={gap:l.SizesDdsSpacingLocalX05},E={gap:l.SizesDdsSpacingLocalX05},A={list:E,listItem:x,icon:P},{icon:w,list:C,listItem:H}=A,a=c.ol`
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
//# sourceMappingURL=Breadcrumbs-9126cdeb.js.map
