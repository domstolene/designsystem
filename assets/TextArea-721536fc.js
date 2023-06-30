import{d as z,s as D,j as H,a as g}from"./focus-visible-8467fd8b.js";import{r as t}from"./index-d47b1f5a.js";import{S as L,N as O,E as x}from"./dds-core-b89b291f.js";import{O as P,M as F}from"./dds-typography-4e6445f7.js";import{K,q as V,j as W,B as X}from"./dds-form-9dbc5b3d.js";import{r as G}from"./renderInputMessage-0780c203.js";import{s as h}from"./scrollbarStyling-b67d8d39.js";const{spacing:J}=z,Q={paddingBottom:J.SizesDdsSpacingLocalX05},U={textarea:Q},Y="320px",{textarea:Z}=U,_=D(W)`
  ${h.webkit}
  ${h.firefox}
  height: auto;
  resize: vertical;
  vertical-align: bottom;
  padding-bottom: ${Z.paddingBottom};
  ${P(X.medium)}
`,ee=t.forwardRef((b,y)=>{const{id:S,value:s,defaultValue:o,onChange:i,errorMessage:a,required:n,disabled:q,tip:d,label:c,"aria-required":l,"aria-describedby":v,className:A,style:M,width:T=Y,...$}=b,I=t.useId(),r=S??`${I}-textArea`,e=t.useRef(null),R=L(y,e),[E,j]=t.useState(K(s,o));t.useEffect(()=>{e&&e.current&&(e.current.style.height=`${e.current.scrollHeight+2}px`)},[E]);const w=f=>{j(f.target.value),i&&i(f)},u=!!a,B=!!c,m=x(r,"tip"),p=x(r,"errorMessage"),N=n||!!l,k={width:T,className:A,style:M},C={ref:R,onChange:w,value:s,defaultValue:o,id:r,disabled:q,hasErrorMessage:u,required:n,"aria-required":l,"aria-describedby":O([d?m:void 0,a?p:void 0,v]),"aria-invalid":u?!0:void 0,...$};return H(V,{...k,children:[B&&g(F,{showRequiredStyling:N,htmlFor:r,children:c}),g(_,{...C,as:"textarea"}),G(d,m,a,p)]})});ee.displayName="TextArea";export{ee as T};
//# sourceMappingURL=TextArea-721536fc.js.map
