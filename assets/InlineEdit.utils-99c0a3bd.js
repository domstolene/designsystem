import{a as L,F as H,d as V,s as l,A as z,j as D}from"./focus-visible-8467fd8b.js";import{r as t}from"./index-d47b1f5a.js";import{O as E,_ as W}from"./dds-core-b89b291f.js";import{j as w}from"./dds-form-9dbc5b3d.js";import{s as h}from"./scrollbarStyling-b67d8d39.js";import{V as F}from"./VisuallyHidden-0fcd4355.js";const T=o=>{const{emptiable:e,value:c,onSetValue:d,onChange:u,onFocus:p,onBlur:g,inputRef:f,children:m}=o,[v,b]=t.useState(c||""),[C,s]=t.useState(!1),$=a=>{b(a.target.value),u&&u()},I=()=>{s(!0),p&&p()},x=a=>{!e&&a.target.value.trim()===""?b(c):d&&d(a.target.value),s(!1),g&&g()},i=()=>{f.current===document.activeElement&&document.activeElement instanceof HTMLElement&&(s(!1),document.activeElement.blur())};E(["Enter"],()=>i()),E(["Escape"],()=>i()),W(f.current,()=>i());const y=t.Children.only(t.isValidElement(m)&&t.cloneElement(m,{onChange:$,onBlur:x,onFocus:I,isEditing:C,value:v,emptiable:e}));return L(H,{children:y})};T.displayName="InlineEdit";const{colors:k,spacing:r,fontPackages:j}=V,B={padding:r.SizesDdsSpacingLocalX025,font:j.body_sans_02.base,backgroundColor:"transparent",withIcon:{paddingLeft:r.SizesDdsSpacingLocalX2},hover:{backgroundColor:k.DdsColorInteractiveLightest},focus:{backgroundColor:k.DdsColorNeutralsWhite}},X={top:r.SizesDdsSpacingLocalX05,left:r.SizesDdsSpacingLocalX05},_={inlineEdit:B,iconWrapper:X},{inlineEdit:n,iconWrapper:S}=_,G="140px",A=l(w)`
  border-color: transparent;
  background-color: ${n.backgroundColor};
  padding: ${n.padding};
  ${n.font};
  ${({isEditing:o,hideIcon:e})=>!o&&!e&&z`
      padding-left: ${n.withIcon.paddingLeft};
    `}

  &:hover:enabled:read-write:not(:focus) {
    background-color: ${n.hover.backgroundColor};
    border-color: transparent;
    box-shadow: none;
  }
  &:focus {
    background-color: ${n.focus.backgroundColor};
  }
`,J=l(A)`
  resize: vertical;
  ${h.webkit}
  ${h.firefox}
`,K=l.span`
  position: absolute;
  left: ${S.left};
  top: ${S.top};
  z-index: 1;
  &:hover {
    cursor: text;
  }
`,Q=(o,e)=>D(F,{id:o,as:"span",children:["Escape, Enter eller Tab for å lagre."," ",!e&&"Inputfeltet er ikke tømmbar."]});export{K as I,J as S,T as a,A as b,G as d,Q as i};
//# sourceMappingURL=InlineEdit.utils-99c0a3bd.js.map
