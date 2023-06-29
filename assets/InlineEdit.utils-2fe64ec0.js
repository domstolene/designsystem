import{j as L,F as H,d as V,s as l,A as z,a as D}from"./focus-visible-35158c22.js";import{r as t}from"./index-d47b1f5a.js";import{j as E,O as W}from"./dds-core-29d22035.js";import{q as j}from"./dds-form-b2eacd8d.js";import{s as h}from"./scrollbarStyling-1bd29018.js";import{V as w}from"./VisuallyHidden-2839ca90.js";const F=o=>{const{emptiable:e,value:c,onSetValue:d,onChange:u,onFocus:p,onBlur:g,inputRef:f,children:m}=o,[v,b]=t.useState(c||""),[C,s]=t.useState(!1),$=a=>{b(a.target.value),u&&u()},I=()=>{s(!0),p&&p()},x=a=>{!e&&a.target.value.trim()===""?b(c):d&&d(a.target.value),s(!1),g&&g()},i=()=>{f.current===document.activeElement&&document.activeElement instanceof HTMLElement&&(s(!1),document.activeElement.blur())};E(["Enter"],()=>i()),E(["Escape"],()=>i()),W(f.current,()=>i());const y=t.Children.only(t.isValidElement(m)&&t.cloneElement(m,{onChange:$,onBlur:x,onFocus:I,isEditing:C,value:v,emptiable:e}));return L(H,{children:y})};F.displayName="InlineEdit";const{colors:k,spacing:r,fontPackages:T}=V,B={padding:r.SizesDdsSpacingLocalX025,font:T.body_sans_02.base,backgroundColor:"transparent",withIcon:{paddingLeft:r.SizesDdsSpacingLocalX2},hover:{backgroundColor:k.DdsColorInteractiveLightest},focus:{backgroundColor:k.DdsColorNeutralsWhite}},X={top:r.SizesDdsSpacingLocalX05,left:r.SizesDdsSpacingLocalX05},A={inlineEdit:B,iconWrapper:X},{inlineEdit:n,iconWrapper:S}=A,G="140px",N=l(j)`
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
`,J=l(N)`
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
`,Q=(o,e)=>D(w,{id:o,as:"span",children:["Escape, Enter eller Tab for å lagre."," ",!e&&"Inputfeltet er ikke tømmbar."]});export{K as I,J as S,F as a,N as b,G as d,Q as i};
//# sourceMappingURL=InlineEdit.utils-2fe64ec0.js.map
