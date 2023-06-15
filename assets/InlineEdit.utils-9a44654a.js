import{j as L,F as D,d as H,s as l,A as V,a as w}from"./focus-visible-c2e9b88d.js";import{r as t}from"./index-ebeaab24.js";import{u as E}from"./useOnKeyDown-4552d984.js";import{u as z}from"./useOnClickOutside-1aed2959.js";import{S as W}from"./Input.styles-0a1e38a8.js";import{s as h}from"./scrollbarStyling-a46ac0ea.js";import{V as F}from"./VisuallyHidden-9c195a2c.js";const T=o=>{const{emptiable:e,value:c,onSetValue:d,onChange:u,onFocus:p,onBlur:g,inputRef:f,children:m}=o,[v,b]=t.useState(c||""),[C,s]=t.useState(!1),I=a=>{b(a.target.value),u&&u()},$=()=>{s(!0),p&&p()},x=a=>{!e&&a.target.value.trim()===""?b(c):d&&d(a.target.value),s(!1),g&&g()},i=()=>{f.current===document.activeElement&&document.activeElement instanceof HTMLElement&&(s(!1),document.activeElement.blur())};E(["Enter"],()=>i()),E(["Escape"],()=>i()),z(f.current,()=>i());const y=t.Children.only(t.isValidElement(m)&&t.cloneElement(m,{onChange:I,onBlur:x,onFocus:$,isEditing:C,value:v,emptiable:e}));return L(D,{children:y})};T.displayName="InlineEdit";const{colors:S,spacing:r,fontPackages:B}=H,X={padding:r.SizesDdsSpacingLocalX025,font:B.body_sans_02.base,backgroundColor:"transparent",withIcon:{paddingLeft:r.SizesDdsSpacingLocalX2},hover:{backgroundColor:S.DdsColorInteractiveLightest},focus:{backgroundColor:S.DdsColorNeutralsWhite}},j={top:r.SizesDdsSpacingLocalX05,left:r.SizesDdsSpacingLocalX05},A={inlineEdit:X,iconWrapper:j},{inlineEdit:n,iconWrapper:k}=A,G="140px",O=l(W)`
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
`,J=l(O)`
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
`,U=(o,e)=>w(F,{id:o,as:"span",children:["Escape, Enter eller Tab for å lagre."," ",!e&&"Inputfeltet er ikke tømmbar."]});export{Q as I,J as S,T as a,O as b,G as d,U as i};
//# sourceMappingURL=InlineEdit.utils-9a44654a.js.map
