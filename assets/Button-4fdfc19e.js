import{s as f,C as t,b as w,F as A,j as d}from"./focus-visible-17f12d09.js";import{r as H}from"./index-c6dae603.js";import{t as V,b as y}from"./Button.tokens-82906d32.js";import{d as W}from"./Typography.utils-3c68477b.js";import{n as E}from"./normalize-f756ee4b.js";import{b as N,c as R}from"./focusVisible-bd00be70.js";import{s as M}from"./selection-dced972e.js";import{S as q}from"./Spinner-7298b3ed.js";import{g as G}from"./BaseComponentProps-bb0d5515.js";import{I as J}from"./Icon-a968456f.js";const{button:{base:K,sizes:l,appearances:e}}=y,O=(o,r)=>{switch(o){case"filled":case"rounded":return t`
        background-color: ${e[o].purpose[r].base.backgroundColor};
        border-color: ${e[o].purpose[r].base.borderColor};
        &:hover {
          background-color: ${e[o].purpose[r].hover.backgroundColor};
          border-color: ${e[o].purpose[r].hover.borderColor};
        }
        &:active {
          background-color: ${e[o].purpose[r].active.backgroundColor};
          border-color: ${e[o].purpose[r].active.borderColor};
        }
      `;case"ghost":return t`
        background-color: ${e.ghost.base.backgroundColor};
        border-color: ${e.ghost.purpose[r].base.borderColor};
        &:hover {
          color: ${e.ghost.purpose[r].hover.color};
          border-color: ${e.ghost.purpose[r].hover.borderColor};
          box-shadow: ${e.ghost.purpose[r].hover.boxShadow};
        }
        &:active {
          color: ${e.ghost.purpose[r].active.color};
          border-color: ${e.ghost.purpose[r].active.borderColor};
          box-shadow: ${e.ghost.purpose[r].active.boxShadow};
        }
      `;case"borderless":return t`
        background-color: ${e.borderless.base.backgroundColor};
        border-color: ${e.borderless.base.borderColor};
        text-decoration: ${e.borderless.base.textDecoration};
        text-decoration-color: ${e.borderless.base.textDecorationColor};
        &:hover {
          color: ${e.borderless.purpose[r].hover.color};
          text-decoration-color: ${e.borderless.purpose[r].hover.textDecorationColor};
        }
        &:active {
          color: ${e.borderless.purpose[r].active.color};
          text-decoration-color: ${e.borderless.purpose[r].active.textDecorationColor};
        }
      `}},Q=f.button`
  ${E}
  border: ${K.border};
  user-select: text;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  width: ${({fullWidth:o})=>o?"100%":"fit-content"};
  cursor: ${({isLoading:o})=>o?"not-allowed":"pointer"};
  box-shadow: none;
  text-decoration: none;

  @media (prefers-reduced-motion: no-preference) {
    transition: background-color 0.2s, text-decoration-color 0.2s,
      box-shadow 0.2s, border-color 0.2s, color 0.2s,
      ${N};
  }

  ${({appearance:o,purpose:r})=>t`
      border-radius: ${e[o].base.borderRadius};
      box-shadow: ${e[o].base.boxShadow};
      color: ${e[o].purpose[r].base.color};
      ${O(o,r)}
    `}

  ${({hasIcon:o,hasLabel:r,appearance:s,purpose:i})=>o&&!r&&s==="borderless"&&t`
      &:hover {
        border-color: ${e[s].purpose[i].icon.hover.borderColor};
        box-shadow: ${e[s].purpose[i].icon.hover.boxShadow};
      }
      &:active {
        border-color:: ${e[s].purpose[i].icon.active.borderColor};
        box-shadow: ${e[s].purpose[i].icon.active.boxShadow};
      }
    `}
    ${({hasIcon:o,hasLabel:r,size:s})=>o&&r&&t`
      gap: ${l[s].textAndIcon.gap};
    `}

  ${({size:o,hasLabel:r})=>r?t`
          ${W(V[o])}
          padding: ${l[o].text.padding};
        `:t`
          font-size: ${l[o].justIcon.icon.fontSize};
          padding: ${l[o].justIcon.icon.padding};
        `}

  ${({fullWidth:o,hasIcon:r,hasLabel:s,isLoading:i,iconPosition:c})=>o&&(!r||!s||i?t`
          justify-content: center;
        `:r&&s&&c==="left"?t`
          justify-content: left;
        `:t`
          justify-content: space-between;
        `)}

  &:focus-visible, &.focus-visible {
    ${R}
  }

  *::selection {
    ${M}
  }
`,C=f.span`
  display: flex;
  align-items: center;
  justify-content: center;
  ${({absolutePosition:o})=>o&&t`
      position: absolute;
    `}
  ${({isHidden:o})=>o&&t`
      visibility: hidden;
    `}
  ${({justIcon:o,size:r})=>o&&t`
      height: ${l[r].justIcon.wrapper.height};
      width: ${l[r].justIcon.wrapper.width};
    `}
`,U=f.span`
  ${({isHidden:o})=>o&&t`
      visibility: hidden;
    `}
`,{button:{sizes:X,appearances:Y}}=y,Z=H.forwardRef((o,r)=>{const{label:s,purpose:i="primary",size:c="medium",iconPosition:h="left",appearance:m="filled",href:a,target:v,loading:n=!1,loadingTooltip:j="Lagring pågår",fullWidth:k=!1,icon:u,onClick:x,onFocus:S,onBlur:I,id:B,className:z,htmlProps:P,...T}=o,D=a?"a":"button",$=!!s,b=!!u,F={...G(B,z,P,T),href:a,label:s,as:D,rel:a?"noreferrer noopener":void 0,target:a&&v?v:void 0,ref:r,appearance:m,purpose:i,iconPosition:h,fullWidth:k,hasLabel:$,hasIcon:b,isLoading:n,size:c,onClick:L=>{!n&&x&&x(L)},onFocus:S,onBlur:I},g=!$&&b,p=u&&d(C,{size:c,isHidden:b&&n,justIcon:g,children:d(J,{icon:u,iconSize:"inherit"})});return w(Q,{...F,"aria-disabled":n,children:[!g&&w(A,{children:[h==="left"&&p,d(U,{isHidden:n,"aria-hidden":n,children:s}),h==="right"&&p]}),g&&p,n&&d(C,{size:c,absolutePosition:b||$,children:d(q,{color:Y[m].purpose[i].base.color,size:X[c].justIcon.icon.fontSize,tooltip:j})})]})});Z.displayName="Button";export{Z as B};
//# sourceMappingURL=Button-4fdfc19e.js.map
