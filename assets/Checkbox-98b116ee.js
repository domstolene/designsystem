import{j as g,a}from"./ddsReferenceTokens-f1d35829.js";import{R as j,r as s}from"./index-d47b1f5a.js";import{f as v,a as R,N as q}from"./dds-core-c67132cd.js";import{T as S}from"./dds-typography-cc6cb429.js";import{C as $,a as w}from"./SelectionControl.styles-f9aa62b6.js";import{T as D}from"./dds-form-9b45fc8d.js";const E=j.createContext(null),F=()=>s.useContext(E),H=s.forwardRef((l,m)=>{const{id:c,name:p,label:t,error:o,disabled:n,readOnly:y,indeterminate:r,"aria-describedby":C,className:b,htmlProps:f={},...h}=l,u=s.useId(),i=c??`${u}-checkbox`,e=F(),d=!!t,{style:x,className:N,...I}=f,T={error:o||(e==null?void 0:e.error),disabled:n,indeterminate:r,htmlFor:i,hasLabel:d,className:v(b,N),style:x},P={...R(i,I,h),ref:m,name:p,indeterminate:r,disabled:n,"aria-describedby":q([e==null?void 0:e.tipId,e==null?void 0:e.errorMessageId,C]),"aria-invalid":o||e!=null&&e.error?!0:void 0,"aria-labelledby":e==null?void 0:e.uniqueGroupId,"aria-checked":r?"mixed":void 0,"aria-readonly":y};return g($,{...T,controlType:"checkbox",children:[a(D,{...P,type:"checkbox","data-indeterminate":r}),a(w,{controlType:"checkbox"}),d&&a(S,{color:"inherit",as:"span",typographyType:"bodySans02",children:t})]})});H.displayName="Checkbox";export{H as C,E as a};
//# sourceMappingURL=Checkbox-98b116ee.js.map