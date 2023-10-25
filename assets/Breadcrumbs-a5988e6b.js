import{a as o,j as b}from"./jsx-runtime-e43ccb36.js";import{r as i}from"./index-1b03fe98.js";import"./Caption-1d5aeb22.js";import"./Heading-862bf652.js";import"./Label-5ae0c148.js";import"./Legend-a1cc5017.js";import"./Link-15befa1a.js";import"./Paragraph-53be9306.js";import"./TextOverflowEllipsis-05821fa6.js";import{T as m,a as u}from"./Typography-9e3266f4.js";import{d as I,s as n}from"./ddsReferenceTokens-baf3ad90.js";import{_ as B}from"./libraryAdd-ba36db88.js";import{I as L}from"./Icon-169fc8ae.js";import{g as N}from"./BaseComponentProps-46424d28.js";import{r as $}from"./removeListStyling-80ec5e55.js";const S=r=>r.href!=null,c=i.forwardRef((r,s)=>{const{children:t,...a}=r;return S(r)?o(m,{htmlProps:a,ref:s,typographyType:"a",children:t}):o(m,{htmlProps:a,ref:s,as:"span",color:"interactive",children:t})});c.displayName="Breadcrumb";try{c.displayName="Breadcrumb",c.__docgenInfo={description:"",displayName:"Breadcrumb",props:{}}}catch{}const{colors:T,spacing:l}=I,v="bodySans02",x={color:T.DdsColorInteractiveBase},P={gap:l.SizesDdsSpacingLocalX05},w={gap:l.SizesDdsSpacingLocalX05},A={list:w,listItem:P,icon:x},{icon:C,list:j,listItem:D}=A,e=n.ol`
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
//# sourceMappingURL=Breadcrumbs-a5988e6b.js.map
