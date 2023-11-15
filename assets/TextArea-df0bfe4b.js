import{j as k,a as x}from"./jsx-runtime-e43ccb36.js";import{r as t}from"./index-1b03fe98.js";import{d as B,s as E}from"./ddsReferenceTokens-cf345c8b.js";import{b as W,i as z,d as y}from"./BaseComponentProps-217bcb03.js";import"./Caption-7324954d.js";import"./Heading-a143a4ab.js";import{L as F}from"./Label-e6c412e2.js";import"./Legend-8686145c.js";import"./Link-0af95a08.js";import"./Paragraph-67d8f149.js";import"./TextOverflowEllipsis-5f7b5b23.js";import{a as G}from"./Typography-37e894bc.js";import{O as H,i as O,S as P}from"./Input.styles-9955857c.js";import{g as X}from"./Input.utils-1d79ab61.js";import{r as J}from"./renderInputMessage-babbca0c.js";import{s as b}from"./scrollbarStyling-5c8dd8e6.js";const{spacing:K}=B,Q={paddingBottom:K.SizesDdsSpacingLocalX05},U={textarea:Q},Y="320px",{textarea:Z}=U,ee=E(P)`
  ${b.webkit}
  ${b.firefox}
  height: auto;
  resize: vertical;
  vertical-align: bottom;
  padding-bottom: ${Z.paddingBottom};
  ${G(O.medium)}
`,s=t.forwardRef((o,T)=>{const{id:v,value:i,defaultValue:n,onChange:d,errorMessage:a,required:l=!1,disabled:I,tip:p,label:c,"aria-required":u=!1,"aria-describedby":S,className:q,style:A,width:_=Y,...$}=o,w=t.useId(),r=v??`${w}-textArea`,e=t.useRef(null),C=W(T,e),[L,M]=t.useState(X(i,n));t.useEffect(()=>{e!=null&&e.current&&(e.current.style.height=`${e.current.scrollHeight+2}px`)},[L]);const R=h=>{M(h.target.value),d&&d(h)},m=!!a,D=!!c,f=y(r,"tip"),g=y(r,"errorMessage"),N=l||!!u,V={width:_,className:q,style:A},j={ref:C,onChange:R,value:i,defaultValue:n,id:r,disabled:I,hasErrorMessage:m,required:l,"aria-required":u,"aria-describedby":z([p?f:void 0,a?g:void 0,S]),"aria-invalid":m?!0:void 0,...$};return k(H,{...V,children:[D&&x(F,{showRequiredStyling:N,htmlFor:r,children:c}),x(ee,{...j,as:"textarea"}),J(p,f,a,g)]})});s.displayName="TextArea";try{s.displayName="TextArea",s.__docgenInfo={description:"",displayName:"TextArea",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}}}catch{}export{s as T};
//# sourceMappingURL=TextArea-df0bfe4b.js.map
