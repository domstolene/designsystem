import{s as a,A as B,j as t,F as k,a as w}from"./focus-visible-35158c22.js";import{r as c}from"./index-d47b1f5a.js";import{l as T}from"./LocalMessage.tokens-880d6799.js";import{q as z,z as L}from"./dds-icons-7a922c3a.js";import{O as M,T as j,E as A}from"./dds-typography-e761338c.js";import{Z as E,a as P}from"./dds-core-29d22035.js";import{B as v}from"./Button-2404c0e2.js";const y="400px",{container:r,icon:F,purposeVariants:l}=T,G=a.div`
  box-sizing: border-box;
  display: grid;
  grid-template-areas: ${({layout:o,closable:e})=>N(o,e)};
  grid-template-columns: ${({layout:o,closable:e})=>O(o,e)};
  box-shadow: ${r.base.boxShadow};
  border: ${r.base.border};
  border-radius: ${r.base.borderRadius};
  padding: ${r.base.padding};
  gap: ${r.base.gap};
  align-items: center;
  ${M(A,!0)}

  *::selection {
    ${E}
  }
  ${({purpose:o})=>o&&B`
      border-color: ${r.purpose[o].borderColor};
      background-color: ${r.purpose[o].backgroundColor};
    `}
  width: ${({width:o})=>o};
`;function N(o,e){return e?o==="horisontal"?'"icon text closeButton"':'"icon closeButton" "text text"':o==="horisontal"?'"icon text"':'"icon icon" "text text"'}function O(o,e){return e?o==="horisontal"?"min-content 1fr min-content":"1fr min-content":o==="horisontal"?"min-content 1fr":"1fr"}const R=a(L)`
  grid-area: icon;
`,S=a.div`
  grid-area: text;
`,W=a(v)`
  grid-area: closeButton;
  margin: -${r.base.padding} 0;
`,Z=c.forwardRef((o,e)=>{const{message:d,purpose:s="info",closable:n,onClose:i,width:p=y,layout:m="horisontal",children:u,id:g,className:f,htmlProps:b,...x}=o,[h,$]=c.useState(!1),C={...P(g,f,b,x),purpose:s,width:p,layout:m,closable:n,ref:e};return h?t(k,{}):w(G,{...C,children:[t(R,{icon:l[s].icon,color:F[s].color}),t(S,{children:u??t(j,{as:"span",children:d})}),n&&t(W,{icon:z,purpose:l[s].closeButtonPurpose,appearance:"borderless",onClick:()=>{$(!0),i&&i()},size:"small","aria-label":"Lukk melding"})]})});Z.displayName="LocalMessage";export{Z as L};
//# sourceMappingURL=LocalMessage-2af31815.js.map
