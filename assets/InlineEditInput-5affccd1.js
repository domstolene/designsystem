import{j as R,a as r}from"./focus-visible-8467fd8b.js";import{r as s}from"./index-d47b1f5a.js";import{I as j,b as w,i as N,d as q,a as C}from"./InlineEdit.utils-99c0a3bd.js";import{S as M,N as V,E as y}from"./dds-core-b89b291f.js";import{i as W,u as k}from"./dds-icons-f9255b51.js";import{r as z}from"./renderInputMessage-6d8b7416.js";import{q as B,E as D}from"./dds-form-9dbc5b3d.js";const S=s.forwardRef((o,a)=>{const{id:t,error:d,errorMessage:n,isEditing:i,width:c=q,"aria-describedby":l,emptiable:u,hideIcon:e,...p}=o,v=s.useId(),f=t??`${v}-InlineInput`,I=!!n,m=!!d||I,h=y(f,"errorMessage"),E=y(f,"desc"),b=s.useRef(null),x=M(a,b);return R(B,{width:c,children:[R(D,{children:[!i&&!e&&r(j,{onClick:()=>{var g;(g=b.current)==null||g.focus()},children:r(W,{icon:k,iconSize:"small"})}),r(w,{...p,id:f,ref:x,hasErrorMessage:m,isEditing:i,hideIcon:e,"aria-describedby":V([I?h:void 0,E,l]),"aria-invalid":m})]}),N(E,u),z(void 0,void 0,n,h)]})});S.displayName="InlineInput";const O=s.forwardRef((o,a)=>{const{onSetValue:t,emptiable:d,value:n,onFocus:i,onChange:c,onBlur:l,...u}=o,e=s.useRef(null),p=M(a,e);return r(C,{onSetValue:t,emptiable:d,inputRef:e,value:n,onFocus:i,onChange:c,onBlur:l,children:r(S,{...u,ref:p})})});export{O as I};
//# sourceMappingURL=InlineEditInput-5affccd1.js.map