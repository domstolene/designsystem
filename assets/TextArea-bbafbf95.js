import{d as E,s as z,a as F,j as g}from"./focus-visible-c2e9b88d.js";import{r as t}from"./index-ebeaab24.js";import{d as G}from"./Typography.utils-99dd1e07.js";import{s as x}from"./scrollbarStyling-a46ac0ea.js";import{g as H,r as N}from"./Input.utils-f888acf1.js";import{i as O}from"./Input.tokens-0612e464.js";import{u as P}from"./useCombinedRefs-40b11bb4.js";import{s as V,d as h}from"./idGenerator-c29473b2.js";import{O as W,S as X}from"./Input.styles-0a1e38a8.js";import{L as J}from"./Label-ec3ecd5b.js";const{spacing:K}=E,Q={paddingBottom:K.SizesDdsSpacingLocalX05},U={textarea:Q},Y="320px",{textarea:Z}=U,_=z(X)`
  ${x.webkit}
  ${x.firefox}
  height: auto;
  resize: vertical;
  vertical-align: bottom;
  padding-bottom: ${Z.paddingBottom};
  ${G(O.medium)}
`,ee=t.forwardRef((b,y)=>{const{id:I,value:s,defaultValue:o,onChange:i,errorMessage:a,required:n,disabled:S,tip:d,label:c,"aria-required":l,"aria-describedby":T,className:v,style:A,width:R=Y,...$}=b,q=t.useId(),r=I??`${q}-textArea`,e=t.useRef(null),C=P(y,e),[L,M]=t.useState(H(s,o));t.useEffect(()=>{e&&e.current&&(e.current.style.height=`${e.current.scrollHeight+2}px`)},[L]);const w=f=>{M(f.target.value),i&&i(f)},p=!!a,j=!!c,u=h(r,"tip"),m=h(r,"errorMessage"),k=n||!!l,B={width:R,className:v,style:A},D={ref:C,onChange:w,value:s,defaultValue:o,id:r,disabled:S,hasErrorMessage:p,required:n,"aria-required":l,"aria-describedby":V([d?u:void 0,a?m:void 0,T]),"aria-invalid":p?!0:void 0,...$};return F(W,{...B,children:[j&&g(J,{showRequiredStyling:k,htmlFor:r,children:c}),g(_,{...D,as:"textarea"}),N(d,u,a,m)]})});ee.displayName="TextArea";export{ee as T};
//# sourceMappingURL=TextArea-bbafbf95.js.map
