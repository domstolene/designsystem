import{a as o,j as b}from"./jsx-runtime-e43ccb36.js";import{r as i}from"./index-1b03fe98.js";import"./Caption-6d408196.js";import"./Heading-5f7faa2b.js";import"./Label-9dee7f37.js";import"./Legend-41f9f05c.js";import"./Link-1567bf4e.js";import"./Paragraph-998f64b8.js";import"./TextOverflowEllipsis-1edb8626.js";import{T as m,a as u}from"./Typography-e857479c.js";import{d as I,s as n}from"./ddsReferenceTokens-f9f5a4e4.js";import{_ as B}from"./libraryAdd-9af098d3.js";import{I as L}from"./Icon-a656622e.js";import{g as N}from"./BaseComponentProps-9c025471.js";import{r as $}from"./removeListStyling-80ec5e55.js";const S=r=>r.href!=null,c=i.forwardRef((r,s)=>{const{children:t,...a}=r;return S(r)?o(m,{htmlProps:a,ref:s,typographyType:"a",children:t}):o(m,{htmlProps:a,ref:s,as:"span",color:"interactive",children:t})});c.displayName="Breadcrumb";try{c.displayName="Breadcrumb",c.__docgenInfo={description:"",displayName:"Breadcrumb",props:{}}}catch{}const{colors:T,spacing:l}=I,v="bodySans02",x={color:T.DdsColorInteractiveBase},P={gap:l.SizesDdsSpacingLocalX05},w={gap:l.SizesDdsSpacingLocalX05},A={list:w,listItem:P,icon:x},{icon:C,list:j,listItem:D}=A,e=n.ol`
  ${$}
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${j.gap};
`;e.displayName="List";const d=n.li`
  align-items: center;
  display: flex;
  gap: ${D.gap};
  ${u(v)}
`;d.displayName="ListItem";const R=n(L)`
  color: ${C.color};
`,k=i.forwardRef((r,s)=>{const{children:t,id:a,className:y,htmlProps:g,...h}=r,f=i.Children.toArray(t).map((_,p)=>b(d,{children:[p!==0&&o(R,{icon:B}),_]},`breadcrumb-${p}`));return o("nav",{...N(a,y,g,h),ref:s,"aria-label":"brødsmulesti",children:o(e,{children:f})})});k.displayName="Breadcrumbs";try{e.displayName="List",e.__docgenInfo={description:"",displayName:"List",props:{}}}catch{}export{k as B,c as a};
//# sourceMappingURL=Breadcrumbs-5f50ec93.js.map
