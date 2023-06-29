import{d as g,s as b,A as m,j as a}from"./focus-visible-35158c22.js";import{r as f}from"./index-d47b1f5a.js";import{a as $}from"./dds-core-29d22035.js";import{O as y,w,A as R}from"./dds-typography-e761338c.js";import{l as s}from"./LocalMessage.tokens-880d6799.js";const{colors:e,borderRadius:T,spacing:d}=g,k="bodySans01",x={border:"1px solid",borderRadius:T.RadiiDdsBorderRadius1Radius,padding:`${d.SizesDdsSpacingLocalX0125} ${d.SizesDdsSpacingLocalX025}`,purpose:{default:{backgroundColor:e.DdsColorNeutralsGray1,borderColor:e.DdsColorNeutralsGray3},success:s.container.purpose.success,danger:s.container.purpose.danger,warning:s.container.purpose.warning,info:s.container.purpose.info}},C={wrapper:x},{wrapper:r}=C,D=b(R)`
  display: inline-flex;
  align-items: center;
  border: ${r.border};
  border-radius: ${r.borderRadius};
  padding: ${r.padding};
  ${y(k)}
  ${({purpose:o})=>m`
    background-color: ${r.purpose[o].backgroundColor};
    border-color: ${r.purpose[o].borderColor};
  `}
`,S=f.forwardRef((o,n)=>{const{text:p,purpose:i="default",id:t,className:c,htmlProps:l,...u}=o;return a(D,{...$(t,c,l,u),ref:n,purpose:i,children:a(w,{children:p})})});S.displayName="Tag";export{S as T};
//# sourceMappingURL=Tag-c3e7521f.js.map
