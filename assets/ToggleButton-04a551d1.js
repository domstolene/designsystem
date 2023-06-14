import{d as x,s as p,C as v,b as l,j as g}from"./focus-visible-17f12d09.js";import{r as b}from"./index-c6dae603.js";import{b as y,t as T}from"./Button.tokens-82906d32.js";import{s as S}from"./SelectionControl.tokens-23591f93.js";import{d as w}from"./Typography.utils-3c68477b.js";import{b as B,c as I}from"./focusVisible-bd00be70.js";import{s as z}from"./selection-dced972e.js";import{H as r}from"./HiddenInput-280c3e4e.js";import{g as D}from"./BaseComponentProps-bb0d5515.js";import{I as L}from"./Icon-a968456f.js";const{colors:c,spacing:d}=x,{button:n}=y,{selectionControl:a}=S,N=T.small,P={border:n.base.border,backgroundColor:c.DdsColorNeutralsWhite,color:c.DdsColorNeutralsGray7,gap:d.SizesDdsSpacingLocalX05,borderRadius:n.appearances.rounded.base.borderRadius,padding:n.sizes.small.text.padding,hover:a.hover.base,checked:{...a.checked.base,color:c.DdsColorNeutralsWhite,hover:a.checked.hover}},R={gap:d.SizesDdsSpacingLocalX075},j={gap:d.SizesDdsSpacingLocalX05},H={toggleButton:P,group:R,container:j},{toggleButton:o}=H,e=p.span`
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
  ${w(N)}
  @media (prefers-reduced-motion: no-preference) {
    transition: border-color 0.2s, background-color 0.2s, box-shadow 0.2s,
      ${B};
  }

  ${({hasIcon:s})=>s&&v`
      gap: ${o.gap};
    `}

  &::selection,
  *::selection {
    ${z}
  }
  &:hover {
    background-color: ${o.hover.backgroundColor};
    box-shadow: ${o.hover.boxShadow};
    border-color: ${o.hover.borderColor};
  }
`,V=p.label`
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
    ${I}
  }
`,X=b.forwardRef(({id:s,label:h,icon:t,className:u,htmlProps:$,...m},k)=>{const f=b.useId(),i=s??`${f}-toggleButton`,C={...D(i,u,$,m),ref:k,type:"checkbox"};return l(V,{...{htmlFor:i},children:[g(r,{...C}),l(e,{hasIcon:!!t,children:[t&&g(L,{icon:t,iconSize:"inherit"})," ",h]})]})});X.displayName="ToggleButton";export{X as T,H as t};
//# sourceMappingURL=ToggleButton-04a551d1.js.map
