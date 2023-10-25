import{a as o,j as b}from"./jsx-runtime-e43ccb36.js";import{r as i}from"./index-1b03fe98.js";import"./Caption-d810b87c.js";import"./Heading-0c5437bc.js";import"./Label-05114518.js";import"./Legend-9969638c.js";import"./Link-c264ab95.js";import"./Paragraph-88055bd8.js";import"./TextOverflowEllipsis-6cc9a60a.js";import{T as m,a as u}from"./Typography-d13ef156.js";import{d as I,s as n}from"./ddsReferenceTokens-a28ebf03.js";import{_ as B}from"./libraryAdd-72c0bfa3.js";import{I as L}from"./Icon-eb542f51.js";import{g as N}from"./BaseComponentProps-b6ad9f7d.js";import{r as $}from"./removeListStyling-80ec5e55.js";const S=r=>r.href!=null,c=i.forwardRef((r,s)=>{const{children:t,...a}=r;return S(r)?o(m,{htmlProps:a,ref:s,typographyType:"a",children:t}):o(m,{htmlProps:a,ref:s,as:"span",color:"interactive",children:t})});c.displayName="Breadcrumb";try{c.displayName="Breadcrumb",c.__docgenInfo={description:"",displayName:"Breadcrumb",props:{}}}catch{}const{colors:T,spacing:l}=I,v="bodySans02",x={color:T.DdsColorInteractiveBase},P={gap:l.SizesDdsSpacingLocalX05},w={gap:l.SizesDdsSpacingLocalX05},A={list:w,listItem:P,icon:x},{icon:C,list:j,listItem:D}=A,e=n.ol`
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
//# sourceMappingURL=Breadcrumbs-ac825576.js.map
