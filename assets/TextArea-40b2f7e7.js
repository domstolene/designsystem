import{j as D,a as h}from"./jsx-runtime-e43ccb36.js";import{r as t}from"./index-1b03fe98.js";import{d as E,s as z}from"./ddsReferenceTokens-a28ebf03.js";import{b as F,i as G,d as y}from"./BaseComponentProps-5f9a30f8.js";import"./Caption-f392befe.js";import"./Heading-ad44a14c.js";import{L as H}from"./Label-2f40b05d.js";import"./Legend-4a50a7d7.js";import"./Link-53575534.js";import"./Paragraph-ea3f8ca3.js";import"./TextOverflowEllipsis-6cc9a60a.js";import{a as O}from"./Typography-2f5b7ed6.js";import{O as P,i as V,S as W}from"./Input.styles-61cf55a8.js";import{g as X}from"./Input.utils-1d79ab61.js";import{r as J}from"./renderInputMessage-32885c06.js";import{s as b}from"./scrollbarStyling-c2e6e782.js";const{spacing:K}=E,Q={paddingBottom:K.SizesDdsSpacingLocalX05},U={textarea:Q},Y="320px",{textarea:Z}=U,ee=z(W)`
  ${b.webkit}
  ${b.firefox}
  height: auto;
  resize: vertical;
  vertical-align: bottom;
  padding-bottom: ${Z.paddingBottom};
  ${O(V.medium)}
`,s=t.forwardRef((o,T)=>{const{id:I,value:i,defaultValue:n,onChange:d,errorMessage:a,required:c,disabled:S,tip:p,label:l,"aria-required":m,"aria-describedby":v,className:A,style:_,width:R=Y,...$}=o,q=t.useId(),r=I??`${q}-textArea`,e=t.useRef(null),C=F(T,e),[L,M]=t.useState(X(i,n));t.useEffect(()=>{e&&e.current&&(e.current.style.height=`${e.current.scrollHeight+2}px`)},[L]);const w=x=>{M(x.target.value),d&&d(x)},u=!!a,N=!!l,f=y(r,"tip"),g=y(r,"errorMessage"),j=c||!!m,k={width:R,className:A,style:_},B={ref:C,onChange:w,value:i,defaultValue:n,id:r,disabled:S,hasErrorMessage:u,required:c,"aria-required":m,"aria-describedby":G([p?f:void 0,a?g:void 0,v]),"aria-invalid":u?!0:void 0,...$};return D(P,{...k,children:[N&&h(H,{showRequiredStyling:j,htmlFor:r,children:l}),h(ee,{...B,as:"textarea"}),J(p,f,a,g)]})});s.displayName="TextArea";try{s.displayName="TextArea",s.__docgenInfo={description:"",displayName:"TextArea",props:{}}}catch{}export{s as T};
//# sourceMappingURL=TextArea-40b2f7e7.js.map
