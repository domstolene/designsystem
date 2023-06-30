import{d as x,s as h,A as v,j as l,a as g}from"./focus-visible-8467fd8b.js";import{r as b}from"./index-d47b1f5a.js";import{i as y}from"./dds-icons-57b6044b.js";import{Q as T,a as w}from"./dds-core-b89b291f.js";import{O as S}from"./dds-typography-4e6445f7.js";import{V as B,T as r,_ as z}from"./dds-form-9dbc5b3d.js";import{b as D,t as I}from"./Button.tokens-f3dda1de.js";import{s as N}from"./SelectionControl.tokens-59c4890b.js";const{colors:c,spacing:d}=x,{button:n}=D,{selectionControl:a}=N,R=I.small,j={border:n.base.border,backgroundColor:c.DdsColorNeutralsWhite,color:c.DdsColorNeutralsGray7,gap:d.SizesDdsSpacingLocalX05,borderRadius:n.appearances.rounded.base.borderRadius,padding:n.sizes.small.text.padding,hover:a.hover.base,checked:{...a.checked.base,color:c.DdsColorNeutralsWhite,hover:a.checked.hover}},L={gap:d.SizesDdsSpacingLocalX075},P={gap:d.SizesDdsSpacingLocalX05},X={toggleButton:j,group:L,container:P},{toggleButton:o}=X,e=h.span`
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
  ${S(R)}
  @media (prefers-reduced-motion: no-preference) {
    transition: border-color 0.2s, background-color 0.2s, box-shadow 0.2s,
      ${B};
  }

  ${({hasIcon:s})=>s&&v`
      gap: ${o.gap};
    `}

  &::selection,
  *::selection {
    ${T}
  }
  &:hover {
    background-color: ${o.hover.backgroundColor};
    box-shadow: ${o.hover.boxShadow};
    border-color: ${o.hover.borderColor};
  }
`,A=h.label`
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
    ${z}
  }
`,O=b.forwardRef(({id:s,label:p,icon:t,className:u,htmlProps:$,...k},m)=>{const f=b.useId(),i=s??`${f}-toggleButton`,C={...w(i,u,$,k),ref:m,type:"checkbox"};return l(A,{...{htmlFor:i},children:[g(r,{...C}),l(e,{hasIcon:!!t,children:[t&&g(y,{icon:t,iconSize:"inherit"})," ",p]})]})});O.displayName="ToggleButton";export{O as T,X as t};
//# sourceMappingURL=ToggleButton-1b0ebe6d.js.map
