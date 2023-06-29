import{d as x,s as h,A as v,a as i,j as g}from"./focus-visible-35158c22.js";import{r as b}from"./index-d47b1f5a.js";import{z as y}from"./dds-icons-7a922c3a.js";import{Z as w,a as S}from"./dds-core-29d22035.js";import{O as T}from"./dds-typography-e761338c.js";import{R as z,W as r,V as B}from"./dds-form-b2eacd8d.js";import{b as D,t as R}from"./Button.tokens-f807ad1a.js";import{s as I}from"./SelectionControl.tokens-868e91dc.js";const{colors:c,spacing:d}=x,{button:n}=D,{selectionControl:a}=I,N=R.small,j={border:n.base.border,backgroundColor:c.DdsColorNeutralsWhite,color:c.DdsColorNeutralsGray7,gap:d.SizesDdsSpacingLocalX05,borderRadius:n.appearances.rounded.base.borderRadius,padding:n.sizes.small.text.padding,hover:a.hover.base,checked:{...a.checked.base,color:c.DdsColorNeutralsWhite,hover:a.checked.hover}},L={gap:d.SizesDdsSpacingLocalX075},P={gap:d.SizesDdsSpacingLocalX05},W={toggleButton:j,group:L,container:P},{toggleButton:o}=W,e=h.span`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  cursor: pointer;
  width: fit-content;
  border: ${o.border};
  background-color: ${o.backgroundColor};
  color: ${o.color};
  border-radius: ${o.borderRadius};
  padding: ${o.padding};
  ${T(N)}
  @media (prefers-reduced-motion: no-preference) {
    transition: border-color 0.2s, background-color 0.2s, box-shadow 0.2s,
      ${z};
  }

  ${({hasIcon:s})=>s&&v`
      gap: ${o.gap};
    `}

  &::selection,
  *::selection {
    ${w}
  }
  &:hover {
    background-color: ${o.hover.backgroundColor};
    box-shadow: ${o.hover.boxShadow};
    border-color: ${o.hover.borderColor};
  }
`,X=h.label`
  width: fit-content;
  ${r}:checked + ${e} {
    background-color: ${o.checked.backgroundColor};
    border-color: ${o.checked.borderColor};
    color: ${o.checked.color};
  }
  ${r}:checked + ${e}:hover {
    background-color: ${o.checked.hover.backgroundColor};
    border-color: ${o.checked.hover.borderColor};
    box-shadow: ${o.checked.hover.boxShadow};
  }
  ${r}:focus-visible + ${e} {
    ${B}
  }
`,A=b.forwardRef(({id:s,label:p,icon:t,className:u,htmlProps:$,...k},m)=>{const f=b.useId(),l=s??`${f}-toggleButton`,C={...S(l,u,$,k),ref:m,type:"checkbox"};return i(X,{...{htmlFor:l},children:[g(r,{...C}),i(e,{hasIcon:!!t,children:[t&&g(y,{icon:t,iconSize:"inherit"})," ",p]})]})});A.displayName="ToggleButton";export{A as T,W as t};
//# sourceMappingURL=ToggleButton-19bf5834.js.map
