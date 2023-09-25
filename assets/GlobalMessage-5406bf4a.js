import{d as E,s as i,A as I,j as g,a as s}from"./ddsReferenceTokens-647ce456.js";import{r as p}from"./index-ebeaab24.js";import{I as $,E as B,W as M,C as T}from"./libraryAdd-4099b973.js";import{I as x}from"./Icon-e6324a43.js";import"./Caption-5c254d72.js";import"./Heading-dc72d0b9.js";import"./Label-23c96940.js";import"./Legend-dbc3ced6.js";import"./Link-9aff7843.js";import"./Paragraph-3340e0ea.js";import"./TextOverflowEllipsis-e3546c5b.js";import{g as P,T as w}from"./Typography-1747463b.js";import{g as z}from"./BaseComponentProps-a100791d.js";import{B as _}from"./Button-07f0874b.js";const{colors:e,spacing:n}=E,R="bodySans02",X={borderBottom:"2px solid",padding:`0 ${n.SizesDdsSpacingLocalX1}`,info:{borderColor:e.DdsColorInfoLighter,backgroundColor:e.DdsColorInfoLightest},danger:{borderColor:e.DdsColorDangerLighter,backgroundColor:e.DdsColorDangerLightest},warning:{borderColor:e.DdsColorWarningLighter,backgroundColor:e.DdsColorWarningLightest}},V={paddingRight:n.SizesDdsSpacingLocalX15,paddingTop:n.SizesDdsSpacingLocalX075,paddingBottom:n.SizesDdsSpacingLocalX075,gap:n.SizesDdsSpacingLocalX075,withClosable:{paddingRight:n.SizesDdsSpacingLocalX075}},u={info:{icon:$,closeButtonPurpose:"secondary"},danger:{icon:B,closeButtonPurpose:"danger"},warning:{icon:M,closeButtonPurpose:"secondary"}},W={container:X,contentContainer:V,icon:{marginRight:`${n.SizesDdsSpacingLocalX075}`,info:{color:e.DdsColorInfoDarkest},danger:{color:e.DdsColorDangerDarkest},warning:{color:e.DdsColorWarningDarkest}}},{container:a,contentContainer:t,icon:m}=W,j=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  padding: ${a.padding};
  border-bottom: ${a.borderBottom};
  ${P(R,!0)}
  ${({purpose:o})=>o&&I`
      border-color: ${a[o].borderColor};
      background-color: ${a[o].backgroundColor};
    `}
`,q=i(x)`
  margin-right: ${m.marginRight};
`,G=i.div`
  display: flex;
  align-items: center;
`,N=i.div`
  display: flex;
  align-items: center;
  padding-top: ${t.paddingTop};
  padding-bottom: ${t.paddingBottom};
  padding-right: ${({closable:o})=>o?t.withClosable.paddingRight:t.paddingRight};
`,l=p.forwardRef((o,f)=>{const{message:b,purpose:r="info",closable:d,onClose:c,children:C,id:h,className:k,htmlProps:y,...D}=o,[L,S]=p.useState(!1),v={...z(h,k,y,D),ref:f,purpose:r};return L?null:g(j,{...v,children:[g(N,{closable:d,children:[s(q,{icon:u[r].icon,color:m[r].color}),C??s(w,{as:"span",children:b})]}),s(G,{children:d&&s(_,{icon:T,purpose:u[r].closeButtonPurpose,appearance:"borderless",onClick:()=>{S(!0),c&&c()},size:"small","aria-label":"Lukk melding"})})]})});l.displayName="GlobalMessage";try{l.displayName="GlobalMessage",l.__docgenInfo={description:"",displayName:"GlobalMessage",props:{message:{defaultValue:null,description:"Meldingen som vises til brukeren. Brukes kun når meldingen er en `string`.",name:"message",required:!1,type:{name:"string | undefined"}},purpose:{defaultValue:null,description:"Formålet med meldingen. Påvirker styling.",name:"purpose",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"info"'},{value:'"warning"'},{value:'"danger"'}]}},closable:{defaultValue:null,description:"Indikerer om meldingen skal være lukkbar.",name:"closable",required:!1,type:{name:"boolean | undefined"}},onClose:{defaultValue:null,description:"Ekstra logikk å kjøre når meldingen lukkes.",name:"onClose",required:!1,type:{name:"(() => void) | undefined"}},htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:"HTMLAttributes<HTMLDivElement> | undefined"}}}}}catch{}export{l as G};
//# sourceMappingURL=GlobalMessage-5406bf4a.js.map
