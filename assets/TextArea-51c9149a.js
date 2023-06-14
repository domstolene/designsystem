import{d as E,s as z,b as F,j as g}from"./focus-visible-17f12d09.js";import{r as t}from"./index-c6dae603.js";import{d as G}from"./Typography.utils-3c68477b.js";import{s as x}from"./scrollbarStyling-27f949d7.js";import{g as H,r as N}from"./Input.utils-c0cbaed7.js";import{i as O}from"./Input.tokens-b59eb2e2.js";import{u as P}from"./useCombinedRefs-764cd8e8.js";import{s as V,d as h}from"./idGenerator-c29473b2.js";import{O as W,S as X}from"./Input.styles-b4f9abd1.js";import{L as J}from"./Label-f2e173db.js";const{spacing:K}=E,Q={paddingBottom:K.SizesDdsSpacingLocalX05},U={textarea:Q},Y="320px",{textarea:Z}=U,_=z(X)`
  ${x.webkit}
  ${x.firefox}
  height: auto;
  resize: vertical;
  vertical-align: bottom;
  padding-bottom: ${Z.paddingBottom};
  ${G(O.medium)}
`,ee=t.forwardRef((b,y)=>{const{id:I,value:s,defaultValue:o,onChange:i,errorMessage:a,required:n,disabled:S,tip:d,label:c,"aria-required":l,"aria-describedby":T,className:v,style:A,width:R=Y,...$}=b,q=t.useId(),r=I??`${q}-textArea`,e=t.useRef(null),C=P(y,e),[L,M]=t.useState(H(s,o));t.useEffect(()=>{e&&e.current&&(e.current.style.height=`${e.current.scrollHeight+2}px`)},[L]);const w=f=>{M(f.target.value),i&&i(f)},p=!!a,j=!!c,u=h(r,"tip"),m=h(r,"errorMessage"),k=n||!!l,B={width:R,className:v,style:A},D={ref:C,onChange:w,value:s,defaultValue:o,id:r,disabled:S,hasErrorMessage:p,required:n,"aria-required":l,"aria-describedby":V([d?u:void 0,a?m:void 0,T]),"aria-invalid":p?!0:void 0,...$};return F(W,{...B,children:[j&&g(J,{showRequiredStyling:k,htmlFor:r,children:c}),g(_,{...D,as:"textarea"}),N(d,u,a,m)]})});ee.displayName="TextArea";export{ee as T};
//# sourceMappingURL=TextArea-51c9149a.js.map
