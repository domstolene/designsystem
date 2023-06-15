import{d as x,s as b,A as v,a as l,j as g}from"./focus-visible-c2e9b88d.js";import{r as p}from"./index-ebeaab24.js";import{b as y,t as T}from"./Button.tokens-a196263c.js";import{s as S}from"./SelectionControl.tokens-d2ad3e9d.js";import{d as w}from"./Typography.utils-99dd1e07.js";import{a as B,f as I}from"./focusVisible-75802ac7.js";import{s as z}from"./selection-fae9d0a8.js";import{H as r}from"./HiddenInput-5633a577.js";import{g as D}from"./BaseComponentProps-bb0d5515.js";import{I as L}from"./Icon-819df738.js";const{colors:c,spacing:d}=x,{button:n}=y,{selectionControl:a}=S,N=T.small,P={border:n.base.border,backgroundColor:c.DdsColorNeutralsWhite,color:c.DdsColorNeutralsGray7,gap:d.SizesDdsSpacingLocalX05,borderRadius:n.appearances.rounded.base.borderRadius,padding:n.sizes.small.text.padding,hover:a.hover.base,checked:{...a.checked.base,color:c.DdsColorNeutralsWhite,hover:a.checked.hover}},R={gap:d.SizesDdsSpacingLocalX075},j={gap:d.SizesDdsSpacingLocalX05},H={toggleButton:P,group:R,container:j},{toggleButton:o}=H,e=b.span`
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
`,V=b.label`
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
`,X=p.forwardRef(({id:s,label:h,icon:t,className:u,htmlProps:$,...m},k)=>{const f=p.useId(),i=s??`${f}-toggleButton`,C={...D(i,u,$,m),ref:k,type:"checkbox"};return l(V,{...{htmlFor:i},children:[g(r,{...C}),l(e,{hasIcon:!!t,children:[t&&g(L,{icon:t,iconSize:"inherit"})," ",h]})]})});X.displayName="ToggleButton";export{X as T,H as t};
//# sourceMappingURL=ToggleButton-31fac159.js.map
