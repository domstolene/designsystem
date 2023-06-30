import{s as a,A as B,a as t,F as k,j as w}from"./focus-visible-8467fd8b.js";import{r as c}from"./index-d47b1f5a.js";import{l as A}from"./LocalMessage.tokens-c69b11b2.js";import{q as T,i as L}from"./dds-icons-57b6044b.js";import{O as M,T as j,A as P}from"./dds-typography-4e6445f7.js";import{Q as v,a as y}from"./dds-core-b89b291f.js";import{B as z}from"./Button-2e8b5f50.js";const F="400px",{container:r,icon:G,purposeVariants:l}=A,N=a.div`
  box-sizing: border-box;
  display: grid;
  grid-template-areas: ${({layout:o,closable:e})=>O(o,e)};
  grid-template-columns: ${({layout:o,closable:e})=>Q(o,e)};
  box-shadow: ${r.base.boxShadow};
  border: ${r.base.border};
  border-radius: ${r.base.borderRadius};
  padding: ${r.base.padding};
  gap: ${r.base.gap};
  align-items: center;
  ${M(P,!0)}

  *::selection {
    ${v}
  }
  ${({purpose:o})=>o&&B`
      border-color: ${r.purpose[o].borderColor};
      background-color: ${r.purpose[o].backgroundColor};
    `}
  width: ${({width:o})=>o};
`;function O(o,e){return e?o==="horisontal"?'"icon text closeButton"':'"icon closeButton" "text text"':o==="horisontal"?'"icon text"':'"icon icon" "text text"'}function Q(o,e){return e?o==="horisontal"?"min-content 1fr min-content":"1fr min-content":o==="horisontal"?"min-content 1fr":"1fr"}const R=a(L)`
  grid-area: icon;
`,S=a.div`
  grid-area: text;
`,W=a(z)`
  grid-area: closeButton;
  margin: -${r.base.padding} 0;
`,q=c.forwardRef((o,e)=>{const{message:d,purpose:s="info",closable:n,onClose:i,width:p=F,layout:m="horisontal",children:u,id:g,className:f,htmlProps:b,...x}=o,[h,$]=c.useState(!1),C={...y(g,f,b,x),purpose:s,width:p,layout:m,closable:n,ref:e};return h?t(k,{}):w(N,{...C,children:[t(R,{icon:l[s].icon,color:G[s].color}),t(S,{children:u??t(j,{as:"span",children:d})}),n&&t(W,{icon:T,purpose:l[s].closeButtonPurpose,appearance:"borderless",onClick:()=>{$(!0),i&&i()},size:"small","aria-label":"Lukk melding"})]})});q.displayName="LocalMessage";export{q as L};
//# sourceMappingURL=LocalMessage-3f3b5648.js.map
