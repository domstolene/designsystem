import{a as T,j as r}from"./focus-visible-c2e9b88d.js";import{R as j,r as s}from"./index-ebeaab24.js";import{j as H,g as v}from"./BaseComponentProps-bb0d5515.js";import{s as L}from"./idGenerator-c29473b2.js";import{C as R,a as S}from"./SelectionControl.styles-eecae4b0.js";import{H as q}from"./HiddenInput-5633a577.js";import{T as M}from"./Typography-9f10a259.js";const w=j.createContext(null),B=()=>s.useContext(w),D=s.forwardRef((l,m)=>{const{id:c,name:p,label:t,error:o,disabled:n,readOnly:y,indeterminate:a,"aria-describedby":C,className:b,htmlProps:f={},...h}=l,u=s.useId(),i=c??`${u}-checkbox`,e=B(),d=!!t,{style:I,className:x,...g}=f,N={error:o||(e==null?void 0:e.error),disabled:n,indeterminate:a,htmlFor:i,hasLabel:d,className:H(b,x),style:I},P={...v(i,g,h),ref:m,name:p,indeterminate:a,disabled:n,"aria-describedby":L([e==null?void 0:e.tipId,e==null?void 0:e.errorMessageId,C]),"aria-invalid":o||e!=null&&e.error?!0:void 0,"aria-labelledby":e==null?void 0:e.uniqueGroupId,"aria-checked":a?"mixed":void 0,"aria-readonly":y};return T(R,{...N,controlType:"checkbox",children:[r(q,{...P,type:"checkbox","data-indeterminate":a}),r(S,{controlType:"checkbox"}),d&&r(M,{color:"inherit",as:"span",typographyType:"bodySans02",children:t})]})});D.displayName="Checkbox";export{D as C,w as a};
//# sourceMappingURL=Checkbox-c8113dab.js.map
