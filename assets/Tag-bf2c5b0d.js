import{d as u,s as m,A as f,j as e}from"./focus-visible-c2e9b88d.js";import{r as b}from"./index-ebeaab24.js";import{l as s}from"./LocalMessage.tokens-3257fe67.js";import{d as T}from"./Typography.utils-99dd1e07.js";import{g as y}from"./BaseComponentProps-bb0d5515.js";import{T as $,a as w}from"./TextOverflowEllipsis-947fdf66.js";const{colors:a,borderRadius:x,spacing:d}=u,R="bodySans01",k={border:"1px solid",borderRadius:x.RadiiDdsBorderRadius1Radius,padding:`${d.SizesDdsSpacingLocalX0125} ${d.SizesDdsSpacingLocalX025}`,purpose:{default:{backgroundColor:a.DdsColorNeutralsGray1,borderColor:a.DdsColorNeutralsGray3},success:s.container.purpose.success,danger:s.container.purpose.danger,warning:s.container.purpose.warning,info:s.container.purpose.info}},C={wrapper:k},{wrapper:r}=C,S=m(w)`
  display: inline-flex;
  align-items: center;
  border: ${r.border};
  border-radius: ${r.borderRadius};
  padding: ${r.padding};
  ${T(R)}
  ${({purpose:o})=>f`
    background-color: ${r.purpose[o].backgroundColor};
    border-color: ${r.purpose[o].borderColor};
  `}
`,D=b.forwardRef((o,n)=>{const{text:p,purpose:i="default",id:t,className:l,htmlProps:c,...g}=o;return e(S,{...y(t,l,c,g),ref:n,purpose:i,children:e($,{children:p})})});D.displayName="Tag";export{D as T};
//# sourceMappingURL=Tag-bf2c5b0d.js.map
