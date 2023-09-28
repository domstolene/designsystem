import{a as s,d as b,s as n,j as u}from"./ddsReferenceTokens-647ce456.js";import{r as i}from"./index-ebeaab24.js";import"./Caption-9d9a71c0.js";import"./Heading-b4646737.js";import"./Label-470a2743.js";import"./Legend-6fbf6204.js";import"./Link-3e1e1a74.js";import"./Paragraph-ff3eeae6.js";import"./TextOverflowEllipsis-e3546c5b.js";import{T as l,a as I}from"./Typography-b6b10a83.js";import{_ as B}from"./libraryAdd-35e18a4f.js";import{I as L}from"./Icon-42793503.js";import{g as N}from"./BaseComponentProps-a100791d.js";import{r as $}from"./removeListStyling-80ec5e55.js";const S=r=>r.href!=null,c=i.forwardRef((r,o)=>{const{children:t,...a}=r;return S(r)?s(l,{htmlProps:a,ref:o,typographyType:"a",children:t}):s(l,{htmlProps:a,ref:o,as:"span",color:"interactive",children:t})});c.displayName="Breadcrumb";try{c.displayName="Breadcrumb",c.__docgenInfo={description:"",displayName:"Breadcrumb",props:{}}}catch{}const{colors:T,spacing:m}=b,v="bodySans02",x={color:T.DdsColorInteractiveBase},P={gap:m.SizesDdsSpacingLocalX05},w={gap:m.SizesDdsSpacingLocalX05},A={list:w,listItem:P,icon:x},{icon:C,list:j,listItem:D}=A,e=n.ol`
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
//# sourceMappingURL=Breadcrumbs-eefe7e08.js.map
