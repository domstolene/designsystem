import{a as s,d as b,s as n,j as u}from"./ddsReferenceTokens-ceb64027.js";import{r as i}from"./index-1b03fe98.js";import"./Caption-d066edab.js";import"./Heading-d8600f49.js";import"./Label-10c93eb5.js";import"./Legend-0cba57ca.js";import"./Link-7a88da71.js";import"./Paragraph-5ad16720.js";import"./TextOverflowEllipsis-e584ab25.js";import{T as l,a as I}from"./Typography-56baa34a.js";import{_ as B}from"./libraryAdd-931d79ee.js";import{I as L}from"./Icon-72ef85ba.js";import{g as N}from"./BaseComponentProps-d435d0d0.js";import{r as $}from"./removeListStyling-80ec5e55.js";const S=r=>r.href!=null,c=i.forwardRef((r,o)=>{const{children:t,...a}=r;return S(r)?s(l,{htmlProps:a,ref:o,typographyType:"a",children:t}):s(l,{htmlProps:a,ref:o,as:"span",color:"interactive",children:t})});c.displayName="Breadcrumb";try{c.displayName="Breadcrumb",c.__docgenInfo={description:"",displayName:"Breadcrumb",props:{}}}catch{}const{colors:T,spacing:m}=b,v="bodySans02",x={color:T.DdsColorInteractiveBase},P={gap:m.SizesDdsSpacingLocalX05},w={gap:m.SizesDdsSpacingLocalX05},A={list:w,listItem:P,icon:x},{icon:C,list:j,listItem:D}=A,e=n.ol`
  ${$}
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${j.gap};
`;e.displayName="List";const d=n.li`
  align-items: center;
  display: flex;
  gap: ${D.gap};
  ${I(v)}
`;d.displayName="ListItem";const R=n(L)`
  color: ${C.color};
`,k=i.forwardRef((r,o)=>{const{children:t,id:a,className:y,htmlProps:g,...h}=r,f=i.Children.toArray(t).map((_,p)=>u(d,{children:[p!==0&&s(R,{icon:B}),_]},`breadcrumb-${p}`));return s("nav",{...N(a,y,g,h),ref:o,"aria-label":"brødsmulesti",children:s(e,{children:f})})});k.displayName="Breadcrumbs";try{e.displayName="List",e.__docgenInfo={description:"",displayName:"List",props:{}}}catch{}export{k as B,c as a};
//# sourceMappingURL=Breadcrumbs-a3a08f54.js.map
