import{s as a,A as C,a as n,F as $,j as E}from"./ddsReferenceTokens-647ce456.js";import{r as d}from"./index-ebeaab24.js";import{l as T}from"./LocalMessage.tokens-c9e32cf4.js";import{C as L}from"./libraryAdd-4099b973.js";import{I as M}from"./Icon-e6324a43.js";import"./Caption-5c254d72.js";import"./Heading-dc72d0b9.js";import"./Label-23c96940.js";import"./Legend-dbc3ced6.js";import"./Link-9aff7843.js";import"./Paragraph-3340e0ea.js";import"./TextOverflowEllipsis-e3546c5b.js";import{g as B,T as V,d as w}from"./Typography-1747463b.js";import{s as _,g as q}from"./BaseComponentProps-a100791d.js";import{B as P}from"./Button-07f0874b.js";const I="400px",{container:r,icon:F,purposeVariants:u}=T,N=a.div`
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
  ${({purpose:e})=>e&&C`
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
`,s=d.forwardRef((e,o)=>{const{message:p,purpose:t="info",closable:i,onClose:l,width:c=I,layout:m="horisontal",children:g,id:f,className:b,htmlProps:h,...v}=e,[k,y]=d.useState(!1),x={...q(f,b,h,v),purpose:t,width:c,layout:m,closable:i,ref:o};return k?n($,{}):E(N,{...x,children:[n(H,{icon:u[t].icon,color:F[t].color}),n(S,{children:g??n(V,{as:"span",children:p})}),i&&n(W,{icon:L,purpose:u[t].closeButtonPurpose,appearance:"borderless",onClick:()=>{y(!0),l&&l()},size:"small","aria-label":"Lukk melding"})]})});s.displayName="LocalMessage";try{s.displayName="LocalMessage",s.__docgenInfo={description:"",displayName:"LocalMessage",props:{message:{defaultValue:null,description:"Meldingen som vises til brukeren. Brukes kun når meldingen er string.",name:"message",required:!1,type:{name:"string | undefined"}},purpose:{defaultValue:null,description:"Formålet med meldingen. Påvirker styling.",name:"purpose",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"confidential"'},{value:'"success"'},{value:'"tips"'}]}},closable:{defaultValue:null,description:"Indikerer om meldingen skal være lukkbar.",name:"closable",required:!1,type:{name:"boolean | undefined"}},onClose:{defaultValue:null,description:"Ekstra logikk å kjøre når meldingen lukkes.",name:"onClose",required:!1,type:{name:"(() => void) | undefined"}},layout:{defaultValue:null,description:"Layoutet i komponenten. Ved kompleks innhold anbefales `layout='vertical'`.",name:"layout",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"vertical"'},{value:'"horisontal"'}]}},width:{defaultValue:null,description:"Custom bredde ved behov.",name:"width",required:!1,type:{name:"Width<string> | undefined"}},htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:"HTMLAttributes<HTMLDivElement> | undefined"}}}}}catch{}export{s as L};
//# sourceMappingURL=LocalMessage-7b9ca217.js.map
