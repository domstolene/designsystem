import{s as a,A as f,a as x,j as t}from"./focus-visible-c2e9b88d.js";import{r as T}from"./index-ebeaab24.js";import{t as s}from"./ToggleButton-31fac159.js";import{g as b}from"./BaseComponentProps-bb0d5515.js";import{T as h}from"./Typography-9f10a259.js";const B=a.div`
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
//# sourceMappingURL=ToggleButtonGroup-9d654d38.js.map
