import{j as D,a as h}from"./jsx-runtime-e43ccb36.js";import{r as t}from"./index-1b03fe98.js";import{d as E,s as z}from"./ddsReferenceTokens-cf345c8b.js";import{b as F,i as G,d as y}from"./BaseComponentProps-c04e3b0f.js";import"./Caption-c95a25e6.js";import"./Heading-eb094a5f.js";import{L as H}from"./Label-7698c3d3.js";import"./Legend-90ca2ccd.js";import"./Link-a0d6f9b6.js";import"./Paragraph-74ee9681.js";import"./TextOverflowEllipsis-a0e35774.js";import{a as O}from"./Typography-8df5b43e.js";import{O as P,i as V,S as W}from"./Input.styles-cd9d8463.js";import{g as X}from"./Input.utils-1d79ab61.js";import{r as J}from"./renderInputMessage-5eb10a8a.js";import{s as b}from"./scrollbarStyling-5c8dd8e6.js";const{spacing:K}=E,Q={paddingBottom:K.SizesDdsSpacingLocalX05},U={textarea:Q},Y="320px",{textarea:Z}=U,ee=z(W)`
  ${b.webkit}
  ${b.firefox}
  height: auto;
  resize: vertical;
  vertical-align: bottom;
  padding-bottom: ${Z.paddingBottom};
  ${O(V.medium)}
`,s=t.forwardRef((o,T)=>{const{id:I,value:i,defaultValue:n,onChange:d,errorMessage:a,required:c=!1,disabled:S,tip:p,label:l,"aria-required":m=!1,"aria-describedby":v,className:_,style:A,width:$=Y,...q}=o,C=t.useId(),r=I??`${C}-textArea`,e=t.useRef(null),L=F(T,e),[M,R]=t.useState(X(i,n));t.useEffect(()=>{e!=null&&e.current&&(e.current.style.height=`${e.current.scrollHeight+2}px`)},[M]);const w=x=>{R(x.target.value),d&&d(x)},u=!!a,N=!!l,f=y(r,"tip"),g=y(r,"errorMessage"),j=c||!!m,k={width:$,className:_,style:A},B={ref:L,onChange:w,value:i,defaultValue:n,id:r,disabled:S,hasErrorMessage:u,required:c,"aria-required":m,"aria-describedby":G([p?f:void 0,a?g:void 0,v]),"aria-invalid":u?!0:void 0,...q};return D(P,{...k,children:[N&&h(H,{showRequiredStyling:j,htmlFor:r,children:l}),h(ee,{...B,as:"textarea"}),J(p,f,a,g)]})});s.displayName="TextArea";try{s.displayName="TextArea",s.__docgenInfo={description:"",displayName:"TextArea",props:{}}}catch{}export{s as T};
//# sourceMappingURL=TextArea-56f2049e.js.map
