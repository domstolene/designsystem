import{s as a,A as x,j as y,a as t}from"./focus-visible-8467fd8b.js";import{r as b}from"./index-d47b1f5a.js";import{a as T}from"./dds-core-b89b291f.js";import{T as h}from"./dds-typography-4e6445f7.js";import{t as s}from"./ToggleButton-1b0ebe6d.js";const $=a.div`
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
//# sourceMappingURL=ToggleButtonGroup-ec7b7cba.js.map
