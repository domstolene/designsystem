import{d as c,s as l,A as g,a as b}from"./ddsReferenceTokens-f1d35829.js";import{r as S}from"./index-d47b1f5a.js";import{a as D}from"./dds-core-c67132cd.js";const{border:e,spacing:s}=c,y={borderTop:`${e.BordersDdsBorderStyleLightStrokeWeight} solid`,marginTop:s.SizesDdsSpacingLocalX1,marginBottom:s.SizesDdsSpacingLocalX1,color:{primary:{borderColor:e.BordersDdsBorderStyleDarkStroke},primaryLighter:{borderColor:e.BordersDdsBorderStyleLightStroke}}},o={...y},B=l.hr`
  border: 0;
  background-color: transparent;
  border-top: ${o.borderTop};
  margin-top: ${o.marginTop};
  margin-bottom: ${o.marginBottom};
  ${({color:r})=>r&&g`
      border-color: ${o.color[r].borderColor};
    `}
`,k=S.forwardRef((r,t)=>{const{color:d="primary",id:i,className:a,htmlProps:n,...m}=r,p={...D(i,a,n,m),color:d};return b(B,{ref:t,...p})});k.displayName="Divider";export{k as D};
//# sourceMappingURL=Divider-1dae9af4.js.map