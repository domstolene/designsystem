import{d as z,s as D,a as H,j as g}from"./focus-visible-35158c22.js";import{r as t}from"./index-d47b1f5a.js";import{S as L,R as O,E as x}from"./dds-core-29d22035.js";import{O as P,N as F}from"./dds-typography-e761338c.js";import{M as V,E as W,q as X,f as G}from"./dds-form-b2eacd8d.js";import{r as J}from"./renderInputMessage-3a3d5367.js";import{s as h}from"./scrollbarStyling-1bd29018.js";const{spacing:K}=z,Q={paddingBottom:K.SizesDdsSpacingLocalX05},U={textarea:Q},Y="320px",{textarea:Z}=U,_=D(X)`
  ${h.webkit}
  ${h.firefox}
  height: auto;
  resize: vertical;
  vertical-align: bottom;
  padding-bottom: ${Z.paddingBottom};
  ${P(G.medium)}
`,ee=t.forwardRef((b,y)=>{const{id:R,value:s,defaultValue:o,onChange:i,errorMessage:a,required:n,disabled:S,tip:d,label:c,"aria-required":l,"aria-describedby":q,className:v,style:A,width:T=Y,...$}=b,E=t.useId(),r=R??`${E}-textArea`,e=t.useRef(null),I=L(y,e),[M,w]=t.useState(V(s,o));t.useEffect(()=>{e&&e.current&&(e.current.style.height=`${e.current.scrollHeight+2}px`)},[M]);const N=f=>{w(f.target.value),i&&i(f)},u=!!a,j=!!c,m=x(r,"tip"),p=x(r,"errorMessage"),k=n||!!l,B={width:T,className:v,style:A},C={ref:I,onChange:N,value:s,defaultValue:o,id:r,disabled:S,hasErrorMessage:u,required:n,"aria-required":l,"aria-describedby":O([d?m:void 0,a?p:void 0,q]),"aria-invalid":u?!0:void 0,...$};return H(W,{...B,children:[j&&g(F,{showRequiredStyling:k,htmlFor:r,children:c}),g(_,{...C,as:"textarea"}),J(d,m,a,p)]})});ee.displayName="TextArea";export{ee as T};
//# sourceMappingURL=TextArea-7bdddd1f.js.map
