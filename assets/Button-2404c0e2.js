import{s as f,A as t,a as w,F as R,j as l}from"./focus-visible-35158c22.js";import{r as T}from"./index-d47b1f5a.js";import{z as W}from"./dds-icons-7a922c3a.js";import{C as E,Z as H,a as N}from"./dds-core-29d22035.js";import{t as O,b as y}from"./Button.tokens-f807ad1a.js";import{O as Z}from"./dds-typography-e761338c.js";import{R as V,V as q}from"./dds-form-b2eacd8d.js";import{S as G}from"./Spinner-69e9cf92.js";const{button:{base:J,sizes:d,appearances:e}}=y,K=(o,r)=>{switch(o){case"filled":case"rounded":return t`
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
      `}},M=f.button`
  ${E}
  border: ${J.border};
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
      ${V};
  }

  ${({appearance:o,purpose:r})=>t`
      border-radius: ${e[o].base.borderRadius};
      box-shadow: ${e[o].base.boxShadow};
      color: ${e[o].purpose[r].base.color};
      ${K(o,r)}
    `}

  ${({hasIcon:o,hasLabel:r,appearance:s,purpose:n})=>o&&!r&&s==="borderless"&&t`
      &:hover {
        border-color: ${e[s].purpose[n].icon.hover.borderColor};
        box-shadow: ${e[s].purpose[n].icon.hover.boxShadow};
      }
      &:active {
        border-color:: ${e[s].purpose[n].icon.active.borderColor};
        box-shadow: ${e[s].purpose[n].icon.active.boxShadow};
      }
    `}
    ${({hasIcon:o,hasLabel:r,size:s})=>o&&r&&t`
      gap: ${d[s].textAndIcon.gap};
    `}

  ${({size:o,hasLabel:r})=>r?t`
          ${Z(O[o])}
          padding: ${d[o].text.padding};
        `:t`
          font-size: ${d[o].justIcon.icon.fontSize};
          padding: ${d[o].justIcon.icon.padding};
        `}

  ${({fullWidth:o,hasIcon:r,hasLabel:s,isLoading:n,iconPosition:c})=>o&&(!r||!s||n?t`
          justify-content: center;
        `:r&&s&&c==="left"?t`
          justify-content: left;
        `:t`
          justify-content: space-between;
        `)}

  &:focus-visible, &.focus-visible {
    ${q}
  }

  *::selection {
    ${H}
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
      height: ${d[r].justIcon.wrapper.height};
      width: ${d[r].justIcon.wrapper.width};
    `}
`,Q=f.span`
  ${({isHidden:o})=>o&&t`
      visibility: hidden;
    `}
`,{button:{sizes:U,appearances:X}}=y,Y=T.forwardRef((o,r)=>{const{label:s,purpose:n="primary",size:c="medium",iconPosition:h="left",appearance:v="filled",href:a,target:x,loading:i=!1,loadingTooltip:j="Lagring pågår",fullWidth:k=!1,icon:$,onClick:m,onFocus:S,onBlur:I,id:z,className:B,htmlProps:A,...P}=o,D=a?"a":"button",u=!!s,b=!!$,F={...N(z,B,A,P),href:a,label:s,as:D,rel:a?"noreferrer noopener":void 0,target:a&&x?x:void 0,ref:r,appearance:v,purpose:n,iconPosition:h,fullWidth:k,hasLabel:u,hasIcon:b,isLoading:i,size:c,onClick:L=>{!i&&m&&m(L)},onFocus:S,onBlur:I},g=!u&&b,p=$&&l(C,{size:c,isHidden:b&&i,justIcon:g,children:l(W,{icon:$,iconSize:"inherit"})});return w(M,{...F,"aria-disabled":i,children:[!g&&w(R,{children:[h==="left"&&p,l(Q,{isHidden:i,"aria-hidden":i,children:s}),h==="right"&&p]}),g&&p,i&&l(C,{size:c,absolutePosition:b||u,children:l(G,{color:X[v].purpose[n].base.color,size:U[c].justIcon.icon.fontSize,tooltip:j})})]})});Y.displayName="Button";export{Y as B};
//# sourceMappingURL=Button-2404c0e2.js.map
