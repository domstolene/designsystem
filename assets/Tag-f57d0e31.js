import{d as g,s as b,A as m,a}from"./ddsReferenceTokens-f1d35829.js";import{r as f}from"./index-d47b1f5a.js";import{a as $}from"./dds-core-c67132cd.js";import{O as y,j as R,E as T}from"./dds-typography-cc6cb429.js";import{l as s}from"./LocalMessage.tokens-95616232.js";const{colors:e,borderRadius:k,spacing:d}=g,w="bodySans01",x={border:"1px solid",borderRadius:k.RadiiDdsBorderRadius1Radius,padding:`${d.SizesDdsSpacingLocalX0125} ${d.SizesDdsSpacingLocalX025}`,purpose:{default:{backgroundColor:e.DdsColorNeutralsGray1,borderColor:e.DdsColorNeutralsGray3},success:s.container.purpose.success,danger:s.container.purpose.danger,warning:s.container.purpose.warning,info:s.container.purpose.info}},C={wrapper:x},{wrapper:r}=C,D=b(T)`
  display: inline-flex;
  align-items: center;
  border: ${r.border};
  border-radius: ${r.borderRadius};
  padding: ${r.padding};
  ${y(w)}
  ${({purpose:o})=>m`
    background-color: ${r.purpose[o].backgroundColor};
    border-color: ${r.purpose[o].borderColor};
  `}
`,S=f.forwardRef((o,n)=>{const{text:p,purpose:i="default",id:t,className:c,htmlProps:l,...u}=o;return a(D,{...$(t,c,l,u),ref:n,purpose:i,children:a(R,{children:p})})});S.displayName="Tag";export{S as T};
//# sourceMappingURL=Tag-f57d0e31.js.map
