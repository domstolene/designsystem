import{s as f,A as t,j as w,F as T,a as l}from"./focus-visible-8467fd8b.js";import{r as W}from"./index-d47b1f5a.js";import{i as E}from"./dds-icons-57b6044b.js";import{b as H,Q as N,a as O}from"./dds-core-b89b291f.js";import{t as Q,b as y}from"./Button.tokens-f3dda1de.js";import{O as R}from"./dds-typography-4e6445f7.js";import{V,_}from"./dds-form-9dbc5b3d.js";import{S as q}from"./Spinner-28eec8a8.js";const{button:{base:G,sizes:d,appearances:e}}=y,J=(o,r)=>{switch(o){case"filled":case"rounded":return t`
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
      `}},K=f.button`
  ${H}
  border: ${G.border};
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
      ${J(o,r)}
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
      gap: ${d[s].textAndIcon.gap};
    `}

  ${({size:o,hasLabel:r})=>r?t`
          ${R(Q[o])}
          padding: ${d[o].text.padding};
        `:t`
          font-size: ${d[o].justIcon.icon.fontSize};
          padding: ${d[o].justIcon.icon.padding};
        `}

  ${({fullWidth:o,hasIcon:r,hasLabel:s,isLoading:i,iconPosition:c})=>o&&(!r||!s||i?t`
          justify-content: center;
        `:r&&s&&c==="left"?t`
          justify-content: left;
        `:t`
          justify-content: space-between;
        `)}

  &:focus-visible, &.focus-visible {
    ${_}
  }

  *::selection {
    ${N}
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
`,M=f.span`
  ${({isHidden:o})=>o&&t`
      visibility: hidden;
    `}
`,{button:{sizes:U,appearances:X}}=y,Y=W.forwardRef((o,r)=>{const{label:s,purpose:i="primary",size:c="medium",iconPosition:h="left",appearance:v="filled",href:a,target:x,loading:n=!1,loadingTooltip:j="Lagring pågår",fullWidth:k=!1,icon:$,onClick:m,onFocus:S,onBlur:I,id:B,className:z,htmlProps:A,...P}=o,D=a?"a":"button",u=!!s,b=!!$,F={...O(B,z,A,P),href:a,label:s,as:D,rel:a?"noreferrer noopener":void 0,target:a&&x?x:void 0,ref:r,appearance:v,purpose:i,iconPosition:h,fullWidth:k,hasLabel:u,hasIcon:b,isLoading:n,size:c,onClick:L=>{!n&&m&&m(L)},onFocus:S,onBlur:I},g=!u&&b,p=$&&l(C,{size:c,isHidden:b&&n,justIcon:g,children:l(E,{icon:$,iconSize:"inherit"})});return w(K,{...F,"aria-disabled":n,children:[!g&&w(T,{children:[h==="left"&&p,l(M,{isHidden:n,"aria-hidden":n,children:s}),h==="right"&&p]}),g&&p,n&&l(C,{size:c,absolutePosition:b||u,children:l(q,{color:X[v].purpose[i].base.color,size:U[c].justIcon.icon.fontSize,tooltip:j})})]})});Y.displayName="Button";export{Y as B};
//# sourceMappingURL=Button-2e8b5f50.js.map
