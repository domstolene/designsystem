import{s as A,A as s,j as S}from"./focus-visible-c2e9b88d.js";import{r as b}from"./index-ebeaab24.js";import{g as k,t as g,a as P,b as L,c as j}from"./Typography.utils-99dd1e07.js";import{s as u}from"./selection-fae9d0a8.js";import{g as E}from"./color-a12930ac.js";import{g as H}from"./BaseComponentProps-bb0d5515.js";const M=A.p`
  user-select: text;
  &::selection,
  *::selection {
    ${u}
  }

  ${({typographyType:e,externalLink:o,interactionProps:t})=>e==="a"?s`
          ${k(o,t)}
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

  color: ${({color:e})=>E(e)};

  ${({typographyType:e,as:o,withMargins:t})=>P(e,o,t)}

  ${({bold:e,italic:o,underline:t})=>L(e,o,t)};
`,N=e=>e.typographyType==="a",w=b.forwardRef((e,o)=>{const{typographyType:t="bodySans02",as:l,children:c,style:i,id:m,className:h,htmlProps:d={},...$}=e,{style:f,...T}=d,r=l||j(t);let p,y,n;if(N(e)){const{externalLink:a,target:x}=e;p=r==="a"?"noopener noreferer":void 0,y=r!=="a"?void 0:a?"_blank":x,n=r==="a"&&a?a:void 0}const v={...H(m,h,T,$),typographyType:t,as:r,style:{...f,...i},rel:p,target:y,externalLink:n};return S(M,{ref:o,...v,children:c})});w.displayName="Typography";export{w as T};
//# sourceMappingURL=Typography-9f10a259.js.map
