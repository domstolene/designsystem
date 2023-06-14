import{s as n,C as T,j as t,F as y,b as B}from"./focus-visible-17f12d09.js";import{r as c}from"./index-c6dae603.js";import{l as k}from"./LocalMessage.tokens-daa3b78a.js";import{d as w,e as L}from"./Typography.utils-3c68477b.js";import{s as M}from"./selection-dced972e.js";import{g as I}from"./BaseComponentProps-bb0d5515.js";import{T as P}from"./Typography-ddbe86f6.js";import{C as j}from"./close-bbf4cbe9.js";import{I as F}from"./Icon-a968456f.js";import{B as S}from"./Button-4fdfc19e.js";const v="400px",{container:r,icon:z,purposeVariants:l}=k,G=n.div`
  box-sizing: border-box;
  display: grid;
  grid-template-areas: ${({layout:o,closable:e})=>N(o,e)};
  grid-template-columns: ${({layout:o,closable:e})=>R(o,e)};
  box-shadow: ${r.base.boxShadow};
  border: ${r.base.border};
  border-radius: ${r.base.borderRadius};
  padding: ${r.base.padding};
  gap: ${r.base.gap};
  align-items: center;
  ${w(L,!0)}

  *::selection {
    ${M}
  }
  ${({purpose:o})=>o&&T`
      border-color: ${r.purpose[o].borderColor};
      background-color: ${r.purpose[o].backgroundColor};
    `}
  width: ${({width:o})=>o};
`;function N(o,e){return e?o==="horisontal"?'"icon text closeButton"':'"icon closeButton" "text text"':o==="horisontal"?'"icon text"':'"icon icon" "text text"'}function R(o,e){return e?o==="horisontal"?"min-content 1fr min-content":"1fr min-content":o==="horisontal"?"min-content 1fr":"1fr"}const W=n(F)`
  grid-area: icon;
`,A=n.div`
  grid-area: text;
`,E=n(S)`
  grid-area: closeButton;
  margin: -${r.base.padding} 0;
`,H=c.forwardRef((o,e)=>{const{message:d,purpose:s="info",closable:a,onClose:i,width:p=v,layout:m="horisontal",children:g,id:u,className:f,htmlProps:b,...h}=o,[x,C]=c.useState(!1),$={...I(u,f,b,h),purpose:s,width:p,layout:m,closable:a,ref:e};return x?t(y,{}):B(G,{...$,children:[t(W,{icon:l[s].icon,color:z[s].color}),t(A,{children:g??t(P,{as:"span",children:d})}),a&&t(E,{icon:j,purpose:l[s].closeButtonPurpose,appearance:"borderless",onClick:()=>{C(!0),i&&i()},size:"small","aria-label":"Lukk melding"})]})});H.displayName="LocalMessage";export{H as L};
//# sourceMappingURL=LocalMessage-03c4d58c.js.map
