import{j as g,a}from"./jsx-runtime-e43ccb36.js";import{d as E,s as i,A as I}from"./ddsReferenceTokens-f9f5a4e4.js";import{r as p}from"./index-1b03fe98.js";import{I as $,E as B,W as M,C as T}from"./libraryAdd-9af098d3.js";import{I as x}from"./Icon-a656622e.js";import"./Caption-6d408196.js";import"./Heading-5f7faa2b.js";import"./Label-9dee7f37.js";import"./Legend-41f9f05c.js";import"./Link-1567bf4e.js";import"./Paragraph-998f64b8.js";import"./TextOverflowEllipsis-1edb8626.js";import{a as P,T as w}from"./Typography-e857479c.js";import{g as z}from"./BaseComponentProps-9c025471.js";import{B as _}from"./Button-7e6f5e0d.js";const{colors:e,spacing:n}=E,R="bodySans02",X={borderBottom:"2px solid",padding:`0 ${n.SizesDdsSpacingLocalX1}`,info:{borderColor:e.DdsColorInfoLighter,backgroundColor:e.DdsColorInfoLightest},danger:{borderColor:e.DdsColorDangerLighter,backgroundColor:e.DdsColorDangerLightest},warning:{borderColor:e.DdsColorWarningLighter,backgroundColor:e.DdsColorWarningLightest}},V={paddingRight:n.SizesDdsSpacingLocalX15,paddingTop:n.SizesDdsSpacingLocalX075,paddingBottom:n.SizesDdsSpacingLocalX075,gap:n.SizesDdsSpacingLocalX075,withClosable:{paddingRight:n.SizesDdsSpacingLocalX075}},m={info:{icon:$,closeButtonPurpose:"secondary"},danger:{icon:B,closeButtonPurpose:"danger"},warning:{icon:M,closeButtonPurpose:"secondary"}},W={container:X,contentContainer:V,icon:{marginRight:`${n.SizesDdsSpacingLocalX075}`,info:{color:e.DdsColorInfoDarkest},danger:{color:e.DdsColorDangerDarkest},warning:{color:e.DdsColorWarningDarkest}}},{container:s,contentContainer:t,icon:u}=W,j=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  padding: ${s.padding};
  border-bottom: ${s.borderBottom};
  ${P(R,!0)}
  ${({purpose:o})=>o&&I`
      border-color: ${s[o].borderColor};
      background-color: ${s[o].backgroundColor};
    `}
`,q=i(x)`
  margin-right: ${u.marginRight};
`,G=i.div`
  display: flex;
  align-items: center;
`,N=i.div`
  display: flex;
  align-items: center;
  padding-top: ${t.paddingTop};
  padding-bottom: ${t.paddingBottom};
  padding-right: ${({closable:o})=>o?t.withClosable.paddingRight:t.paddingRight};
`,l=p.forwardRef((o,f)=>{const{message:b,purpose:r="info",closable:d,onClose:c,children:C,id:h,className:k,htmlProps:y,...D}=o,[L,S]=p.useState(!1),v={...z(h,k,y,D),ref:f,purpose:r};return L?null:g(j,{...v,children:[g(N,{closable:d,children:[a(q,{icon:m[r].icon,color:u[r].color}),C??a(w,{as:"span",children:b})]}),a(G,{children:d&&a(_,{icon:T,purpose:m[r].closeButtonPurpose,appearance:"borderless",onClick:()=>{S(!0),c&&c()},size:"small","aria-label":"Lukk melding"})})]})});l.displayName="GlobalMessage";try{l.displayName="GlobalMessage",l.__docgenInfo={description:"",displayName:"GlobalMessage",props:{message:{defaultValue:null,description:"Meldingen som vises til brukeren. Brukes kun når meldingen er en `string`.",name:"message",required:!1,type:{name:"string | undefined"}},purpose:{defaultValue:null,description:"Formålet med meldingen. Påvirker styling.",name:"purpose",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"danger"'},{value:'"info"'},{value:'"warning"'}]}},closable:{defaultValue:null,description:"Indikerer om meldingen skal være lukkbar.",name:"closable",required:!1,type:{name:"boolean | undefined"}},onClose:{defaultValue:null,description:"Ekstra logikk å kjøre når meldingen lukkes.",name:"onClose",required:!1,type:{name:"(() => void) | undefined"}},htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:"HTMLAttributes<HTMLDivElement> | undefined"}}}}}catch{}export{l as G};
//# sourceMappingURL=GlobalMessage-df4ea44c.js.map
