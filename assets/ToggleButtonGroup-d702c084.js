import{s as a,C as f,b as x,j as t}from"./focus-visible-17f12d09.js";import{r as T}from"./index-c6dae603.js";import{t as s}from"./ToggleButton-04a551d1.js";import{g as b}from"./BaseComponentProps-bb0d5515.js";import{T as h}from"./Typography-ddbe86f6.js";const B=a.div`
  gap: ${s.group.gap};
  display: flex;
  flex-wrap: wrap;
  ${({direction:o})=>f`
      flex-direction: ${o};
    `}
`,$=a.div`
  display: flex;
  flex-direction: column;
  gap: ${s.container.gap};
`,G=o=>{const{children:p,direction:l="row",label:r,labelId:n,id:i,className:d,htmlProps:g,...c}=o,u=T.useId(),e=n??`${u}-ToggleButtonGroupLabel`,m={direction:l},y={...b(i,d,g,c),role:"group","aria-labelledby":r?e:void 0};return x($,{...y,children:[!!r&&t(h,{as:"span",typographyType:"supportingStyleLabel01",id:e,children:r}),t(B,{...m,children:p})]})};G.displayName="ToggleButtonGroup";export{G as T};
//# sourceMappingURL=ToggleButtonGroup-d702c084.js.map
