import{s as n,A as T,j as t,F as y,a as B}from"./focus-visible-c2e9b88d.js";import{r as c}from"./index-ebeaab24.js";import{l as k}from"./LocalMessage.tokens-3257fe67.js";import{d as w,e as L}from"./Typography.utils-99dd1e07.js";import{s as M}from"./selection-fae9d0a8.js";import{g as I}from"./BaseComponentProps-bb0d5515.js";import{T as P}from"./Typography-9f10a259.js";import{C as j}from"./close-10bf9508.js";import{I as A}from"./Icon-819df738.js";import{B as F}from"./Button-2e74127f.js";const S="400px",{container:r,icon:v,purposeVariants:l}=k,z=n.div`
  box-sizing: border-box;
  display: grid;
  grid-template-areas: ${({layout:o,closable:e})=>G(o,e)};
  grid-template-columns: ${({layout:o,closable:e})=>N(o,e)};
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
`;function G(o,e){return e?o==="horisontal"?'"icon text closeButton"':'"icon closeButton" "text text"':o==="horisontal"?'"icon text"':'"icon icon" "text text"'}function N(o,e){return e?o==="horisontal"?"min-content 1fr min-content":"1fr min-content":o==="horisontal"?"min-content 1fr":"1fr"}const R=n(A)`
  grid-area: icon;
`,W=n.div`
  grid-area: text;
`,E=n(F)`
  grid-area: closeButton;
  margin: -${r.base.padding} 0;
`,H=c.forwardRef((o,e)=>{const{message:d,purpose:s="info",closable:a,onClose:i,width:p=S,layout:m="horisontal",children:g,id:u,className:f,htmlProps:b,...h}=o,[x,$]=c.useState(!1),C={...I(u,f,b,h),purpose:s,width:p,layout:m,closable:a,ref:e};return x?t(y,{}):B(z,{...C,children:[t(R,{icon:l[s].icon,color:v[s].color}),t(W,{children:g??t(P,{as:"span",children:d})}),a&&t(E,{icon:j,purpose:l[s].closeButtonPurpose,appearance:"borderless",onClick:()=>{$(!0),i&&i()},size:"small","aria-label":"Lukk melding"})]})});H.displayName="LocalMessage";export{H as L};
//# sourceMappingURL=LocalMessage-c4d46669.js.map
