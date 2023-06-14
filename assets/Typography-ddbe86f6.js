import{s as S,C as s,j as b}from"./focus-visible-17f12d09.js";import{r as k}from"./index-c6dae603.js";import{g as P,t as g,a as A,b as L,c as C}from"./Typography.utils-3c68477b.js";import{s as j}from"./selection-dced972e.js";import{g as u}from"./color-0daeea22.js";import{g as E}from"./BaseComponentProps-bb0d5515.js";const H=S.p`
  user-select: text;
  &::selection,
  *::selection {
    ${j}
  }

  ${({typographyType:e,externalLink:o,interactionProps:t})=>e==="a"?s`
          ${P(o,t)}
        `:s`
          color: ${g.typographyType[e].base.color};
          ${g.typographyType[e].base.font};
        `}

  ${({interactionProps:e})=>e&&e.hover&&s`
      &:hover {
        ${e.hover}
      }
    `}
      ${({interactionProps:e})=>e&&e.active&&s`
      &:active {
        ${e.active}
      }
    `}

  color: ${({color:e})=>u(e)};

  ${({typographyType:e,as:o,withMargins:t})=>A(e,o,t)}

  ${({bold:e,italic:o,underline:t})=>L(e,o,t)};
`,M=e=>e.typographyType==="a",N=k.forwardRef((e,o)=>{const{typographyType:t="bodySans02",as:l,children:c,style:i,id:m,className:h,htmlProps:d={},...$}=e,{style:f,...T}=d,r=l||C(t);let p,y,n;if(M(e)){const{externalLink:a,target:x}=e;p=r==="a"?"noopener noreferer":void 0,y=r!=="a"?void 0:a?"_blank":x,n=r==="a"&&a?a:void 0}const v={...E(m,h,T,$),typographyType:t,as:r,style:{...f,...i},rel:p,target:y,externalLink:n};return b(H,{ref:o,...v,children:c})});N.displayName="Typography";export{N as T};
//# sourceMappingURL=Typography-ddbe86f6.js.map
