import{a as t,F as C,j as $}from"./jsx-runtime-e43ccb36.js";import{s as a,A as E}from"./ddsReferenceTokens-f9f5a4e4.js";import{r as d}from"./index-1b03fe98.js";import{l as T}from"./LocalMessage.tokens-ae85469e.js";import{C as L}from"./libraryAdd-5ac12ed0.js";import{I as M}from"./Icon-1678d620.js";import"./Caption-6d408196.js";import"./Heading-5f7faa2b.js";import"./Label-9dee7f37.js";import"./Legend-41f9f05c.js";import"./Link-1567bf4e.js";import"./Paragraph-998f64b8.js";import"./TextOverflowEllipsis-1edb8626.js";import{a as B,T as V,d as w}from"./Typography-e857479c.js";import{s as _,g as q}from"./BaseComponentProps-9c025471.js";import{B as P}from"./Button-a19acc61.js";const I="400px",{container:r,icon:F,purposeVariants:u}=T,N=a.div`
  box-sizing: border-box;
  display: grid;
  grid-template-areas: ${({layout:e,closable:o})=>j(e,o)};
  grid-template-columns: ${({layout:e,closable:o})=>A(e,o)};
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
`;function j(e,o){return o?e==="horisontal"?'"icon text closeButton"':'"icon closeButton" "text text"':e==="horisontal"?'"icon text"':'"icon icon" "text text"'}function A(e,o){return o?e==="horisontal"?"min-content 1fr min-content":"1fr min-content":e==="horisontal"?"min-content 1fr":"1fr"}const H=a(M)`
  grid-area: icon;
`,S=a.div`
  grid-area: text;
`,W=a(P)`
  grid-area: closeButton;
  margin: -${r.base.padding} 0;
`,s=d.forwardRef((e,o)=>{const{message:p,purpose:n="info",closable:i,onClose:l,width:m=I,layout:c="horisontal",children:f,id:g,className:b,htmlProps:h,...v}=e,[k,y]=d.useState(!1),x={...q(g,b,h,v),purpose:n,width:m,layout:c,closable:i,ref:o};return k?t(C,{}):$(N,{...x,children:[t(H,{icon:u[n].icon,color:F[n].color}),t(S,{children:f??t(V,{as:"span",children:p})}),i&&t(W,{icon:L,purpose:u[n].closeButtonPurpose,appearance:"borderless",onClick:()=>{y(!0),l&&l()},size:"small","aria-label":"Lukk melding"})]})});s.displayName="LocalMessage";try{s.displayName="LocalMessage",s.__docgenInfo={description:"",displayName:"LocalMessage",props:{message:{defaultValue:null,description:"Meldingen som vises til brukeren. Brukes kun når meldingen er string.",name:"message",required:!1,type:{name:"string | undefined"}},purpose:{defaultValue:null,description:"Formålet med meldingen. Påvirker styling.",name:"purpose",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"danger"'},{value:'"info"'},{value:'"warning"'},{value:'"confidential"'},{value:'"success"'},{value:'"tips"'}]}},closable:{defaultValue:null,description:"Indikerer om meldingen skal være lukkbar.",name:"closable",required:!1,type:{name:"boolean | undefined"}},onClose:{defaultValue:null,description:"Ekstra logikk å kjøre når meldingen lukkes.",name:"onClose",required:!1,type:{name:"(() => void) | undefined"}},layout:{defaultValue:null,description:"Layoutet i komponenten. Ved kompleks innhold anbefales `layout='vertical'`.",name:"layout",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"vertical"'},{value:'"horisontal"'}]}},width:{defaultValue:null,description:"Custom bredde ved behov.",name:"width",required:!1,type:{name:"Width<string> | undefined"}},htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:"HTMLAttributes<HTMLDivElement> | undefined"}}}}}catch{}export{s as L};
//# sourceMappingURL=LocalMessage-7080c0aa.js.map
