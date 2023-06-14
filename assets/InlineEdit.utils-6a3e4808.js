import{j as L,F as D,d as H,s as l,C as V,b as w}from"./focus-visible-17f12d09.js";import{r as t}from"./index-c6dae603.js";import{u as E}from"./useOnKeyDown-77bae070.js";import{u as z}from"./useOnClickOutside-08b83e6f.js";import{S as W}from"./Input.styles-b4f9abd1.js";import{s as h}from"./scrollbarStyling-27f949d7.js";import{V as F}from"./VisuallyHidden-68635a7d.js";const T=o=>{const{emptiable:e,value:c,onSetValue:d,onChange:u,onFocus:p,onBlur:g,inputRef:f,children:m}=o,[C,b]=t.useState(c||""),[v,s]=t.useState(!1),I=a=>{b(a.target.value),u&&u()},$=()=>{s(!0),p&&p()},x=a=>{!e&&a.target.value.trim()===""?b(c):d&&d(a.target.value),s(!1),g&&g()},i=()=>{f.current===document.activeElement&&document.activeElement instanceof HTMLElement&&(s(!1),document.activeElement.blur())};E(["Enter"],()=>i()),E(["Escape"],()=>i()),z(f.current,()=>i());const y=t.Children.only(t.isValidElement(m)&&t.cloneElement(m,{onChange:I,onBlur:x,onFocus:$,isEditing:v,value:C,emptiable:e}));return L(D,{children:y})};T.displayName="InlineEdit";const{colors:S,spacing:r,fontPackages:B}=H,X={padding:r.SizesDdsSpacingLocalX025,font:B.body_sans_02.base,backgroundColor:"transparent",withIcon:{paddingLeft:r.SizesDdsSpacingLocalX2},hover:{backgroundColor:S.DdsColorInteractiveLightest},focus:{backgroundColor:S.DdsColorNeutralsWhite}},j={top:r.SizesDdsSpacingLocalX05,left:r.SizesDdsSpacingLocalX05},O={inlineEdit:X,iconWrapper:j},{inlineEdit:n,iconWrapper:k}=O,G="140px",N=l(W)`
  border-color: transparent;
  background-color: ${n.backgroundColor};
  padding: ${n.padding};
  ${n.font};
  ${({isEditing:o,hideIcon:e})=>!o&&!e&&V`
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
`,J=l(N)`
  resize: vertical;
  ${h.webkit}
  ${h.firefox}
`,Q=l.span`
  position: absolute;
  left: ${k.left};
  top: ${k.top};
  z-index: 1;
  &:hover {
    cursor: text;
  }
`,U=(o,e)=>w(F,{id:o,as:"span",children:["Escape, Enter eller Tab for å lagre."," ",!e&&"Inputfeltet er ikke tømmbar."]});export{Q as I,J as S,T as a,N as b,G as d,U as i};
//# sourceMappingURL=InlineEdit.utils-6a3e4808.js.map
