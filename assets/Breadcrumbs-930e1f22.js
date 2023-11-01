import{a as o,j as b}from"./jsx-runtime-e43ccb36.js";import{r as i}from"./index-1b03fe98.js";import"./Caption-848a816b.js";import"./Heading-9ec1ef64.js";import"./Label-393cff6f.js";import"./Legend-6f4c2491.js";import"./Link-e04d3bba.js";import"./Paragraph-ba6a9c6f.js";import"./TextOverflowEllipsis-c2a9fc8f.js";import{T as m,a as u}from"./Typography-dcf6ef21.js";import{d as I,s as n}from"./ddsReferenceTokens-fe3c594e.js";import{_ as B}from"./libraryAdd-37aef24e.js";import{I as L}from"./Icon-56c20d0c.js";import{g as N}from"./BaseComponentProps-3902fbf1.js";import{r as $}from"./removeListStyling-80ec5e55.js";const S=r=>r.href!=null,c=i.forwardRef((r,s)=>{const{children:t,...a}=r;return S(r)?o(m,{htmlProps:a,ref:s,typographyType:"a",children:t}):o(m,{htmlProps:a,ref:s,as:"span",color:"interactive",children:t})});c.displayName="Breadcrumb";try{c.displayName="Breadcrumb",c.__docgenInfo={description:"",displayName:"Breadcrumb",props:{}}}catch{}const{colors:T,spacing:l}=I,v="bodySans02",x={color:T.DdsColorInteractiveBase},P={gap:l.SizesDdsSpacingLocalX05},w={gap:l.SizesDdsSpacingLocalX05},A={list:w,listItem:P,icon:x},{icon:C,list:j,listItem:D}=A,e=n.ol`
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
`,k=i.forwardRef((r,s)=>{const{children:t,id:a,className:y,htmlProps:g,...h}=r,f=i.Children.toArray(t).map((_,p)=>b(d,{children:[p!==0&&o(R,{icon:B}),_]},`breadcrumb-${p}`));return o("nav",{...N(a,y,g,h),ref:s,"aria-label":"brødsmulesti",children:o(e,{children:f})})});k.displayName="Breadcrumbs";try{e.displayName="List",e.__docgenInfo={description:"",displayName:"List",props:{}}}catch{}export{c as B,k as a};
//# sourceMappingURL=Breadcrumbs-930e1f22.js.map
