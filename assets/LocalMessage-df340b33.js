import{a as n,F as C,j as $}from"./jsx-runtime-e43ccb36.js";import{s as a,n as E}from"./ddsReferenceTokens-fe3c594e.js";import{r as d}from"./index-1b03fe98.js";import{l as T}from"./LocalMessage.tokens-658ad735.js";import{C as L}from"./libraryAdd-7ba549de.js";import{I as M}from"./Icon-c6fb2d87.js";import"./Caption-848a816b.js";import"./Heading-9ec1ef64.js";import"./Label-393cff6f.js";import"./Legend-6f4c2491.js";import"./Link-e04d3bba.js";import"./Paragraph-ba6a9c6f.js";import"./TextOverflowEllipsis-c2a9fc8f.js";import{a as B,T as V,d as w}from"./Typography-dcf6ef21.js";import{s as _,g as q}from"./BaseComponentProps-3902fbf1.js";import{B as P}from"./Button-b5f31bb8.js";const I="400px",{container:r,icon:F,purposeVariants:u}=T,N=a.div`
  box-sizing: border-box;
  display: grid;
  grid-template-areas: ${({layout:e,closable:o})=>j(e,o)};
  grid-template-columns: ${({layout:e,closable:o})=>H(e,o)};
  box-shadow: ${r.base.boxShadow};
  border: ${r.base.border};
  border-radius: ${r.base.borderRadius};
  padding: ${r.base.padding};
  gap: ${r.base.gap};
  align-items: center;
  ${B(w,!0)}

  *::selection {
    ${_}
  }
  ${({purpose:e})=>e&&E`
      border-color: ${r.purpose[e].borderColor};
      background-color: ${r.purpose[e].backgroundColor};
    `}
  width: ${({width:e})=>e};
`;function j(e,o){return o?e==="horisontal"?'"icon text closeButton"':'"icon closeButton" "text text"':e==="horisontal"?'"icon text"':'"icon icon" "text text"'}function H(e,o){return o?e==="horisontal"?"min-content 1fr min-content":"1fr min-content":e==="horisontal"?"min-content 1fr":"1fr"}const S=a(M)`
  grid-area: icon;
`,W=a.div`
  grid-area: text;
`,z=a(P)`
  grid-area: closeButton;
  margin: -${r.base.padding} 0;
`,s=d.forwardRef((e,o)=>{const{message:p,purpose:t="info",closable:i,onClose:l,width:m=I,layout:c="horisontal",children:f,id:g,className:b,htmlProps:h,...v}=e,[k,y]=d.useState(!1),x={...q(g,b,h,v),purpose:t,width:m,layout:c,closable:i,ref:o};return k?n(C,{}):$(N,{...x,children:[n(S,{icon:u[t].icon,color:F[t].color}),n(W,{children:f??n(V,{as:"span",children:p})}),i&&n(z,{icon:L,purpose:u[t].closeButtonPurpose,appearance:"borderless",onClick:()=>{y(!0),l&&l()},size:"small","aria-label":"Lukk melding"})]})});s.displayName="LocalMessage";try{s.displayName="LocalMessage",s.__docgenInfo={description:"",displayName:"LocalMessage",props:{message:{defaultValue:null,description:"Meldingen som vises til brukeren. Brukes kun når meldingen er string.",name:"message",required:!1,type:{name:"string | undefined"}},purpose:{defaultValue:null,description:"Formålet med meldingen. Påvirker styling.",name:"purpose",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"danger"'},{value:'"info"'},{value:'"warning"'},{value:'"confidential"'},{value:'"success"'},{value:'"tips"'}]}},closable:{defaultValue:null,description:"Indikerer om meldingen skal være lukkbar.",name:"closable",required:!1,type:{name:"boolean | undefined"}},onClose:{defaultValue:null,description:"Ekstra logikk å kjøre når meldingen lukkes.",name:"onClose",required:!1,type:{name:"(() => void) | undefined"}},layout:{defaultValue:null,description:"Layoutet i komponenten. Ved kompleks innhold anbefales `layout='vertical'`.",name:"layout",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"vertical"'},{value:'"horisontal"'}]}},width:{defaultValue:null,description:"Custom bredde ved behov.",name:"width",required:!1,type:{name:"Width<string> | undefined"}},htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:"HTMLAttributes<HTMLDivElement> | undefined"}}}}}catch{}export{s as L};
//# sourceMappingURL=LocalMessage-df340b33.js.map
