import{s as a,A as x,j as y,a as t}from"./ddsReferenceTokens-f1d35829.js";import{r as b}from"./index-d47b1f5a.js";import{a as T}from"./dds-core-c67132cd.js";import{T as h}from"./dds-typography-cc6cb429.js";import{t as s}from"./ToggleButton-03a0c1a7.js";const $=a.div`
  gap: ${s.group.gap};
  display: flex;
  flex-wrap: wrap;
  ${({direction:o})=>x`
      flex-direction: ${o};
    `}
`,B=a.div`
  display: flex;
  flex-direction: column;
  gap: ${s.container.gap};
`,G=o=>{const{children:p,direction:l="row",label:r,labelId:n,id:i,className:d,htmlProps:c,...g}=o,u=b.useId(),e=n??`${u}-ToggleButtonGroupLabel`,m={direction:l},f={...T(i,d,c,g),role:"group","aria-labelledby":r?e:void 0};return y(B,{...f,children:[!!r&&t(h,{as:"span",typographyType:"supportingStyleLabel01",id:e,children:r}),t($,{...m,children:p})]})};G.displayName="ToggleButtonGroup";export{G as T};
//# sourceMappingURL=ToggleButtonGroup-6c361c56.js.map
