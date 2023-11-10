import{j as D,a as h}from"./jsx-runtime-e43ccb36.js";import{r as t}from"./index-1b03fe98.js";import{d as E,s as z}from"./ddsReferenceTokens-fe3c594e.js";import{b as F,i as G,d as y}from"./BaseComponentProps-b46a4458.js";import"./Caption-a006c5bc.js";import"./Heading-3ac6a2d9.js";import{L as H}from"./Label-60a960ab.js";import"./Legend-bad3d4ec.js";import"./Link-bef7f478.js";import"./Paragraph-f6678e05.js";import"./TextOverflowEllipsis-c2a9fc8f.js";import{a as O}from"./Typography-9d6edb9c.js";import{O as P,i as V,S as W}from"./Input.styles-c3e229ec.js";import{g as X}from"./Input.utils-1d79ab61.js";import{r as J}from"./renderInputMessage-9f8878f3.js";import{s as b}from"./scrollbarStyling-6a0ce14f.js";const{spacing:K}=E,Q={paddingBottom:K.SizesDdsSpacingLocalX05},U={textarea:Q},Y="320px",{textarea:Z}=U,ee=z(W)`
  ${b.webkit}
  ${b.firefox}
  height: auto;
  resize: vertical;
  vertical-align: bottom;
  padding-bottom: ${Z.paddingBottom};
  ${O(V.medium)}
`,s=t.forwardRef((o,T)=>{const{id:I,value:i,defaultValue:n,onChange:d,errorMessage:a,required:c=!1,disabled:S,tip:p,label:l,"aria-required":m=!1,"aria-describedby":v,className:_,style:A,width:$=Y,...q}=o,C=t.useId(),r=I??`${C}-textArea`,e=t.useRef(null),L=F(T,e),[M,R]=t.useState(X(i,n));t.useEffect(()=>{e!=null&&e.current&&(e.current.style.height=`${e.current.scrollHeight+2}px`)},[M]);const w=x=>{R(x.target.value),d&&d(x)},u=!!a,N=!!l,f=y(r,"tip"),g=y(r,"errorMessage"),j=c||!!m,k={width:$,className:_,style:A},B={ref:L,onChange:w,value:i,defaultValue:n,id:r,disabled:S,hasErrorMessage:u,required:c,"aria-required":m,"aria-describedby":G([p?f:void 0,a?g:void 0,v]),"aria-invalid":u?!0:void 0,...q};return D(P,{...k,children:[N&&h(H,{showRequiredStyling:j,htmlFor:r,children:l}),h(ee,{...B,as:"textarea"}),J(p,f,a,g)]})});s.displayName="TextArea";try{s.displayName="TextArea",s.__docgenInfo={description:"",displayName:"TextArea",props:{}}}catch{}export{s as T};
//# sourceMappingURL=TextArea-3e2f5bea.js.map
