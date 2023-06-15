import{d as c,s as l,A as g,j as b}from"./focus-visible-c2e9b88d.js";import{r as S}from"./index-ebeaab24.js";import{g as B}from"./BaseComponentProps-bb0d5515.js";const{border:e,spacing:s}=c,D={borderTop:`${e.BordersDdsBorderStyleLightStrokeWeight} solid`,marginTop:s.SizesDdsSpacingLocalX1,marginBottom:s.SizesDdsSpacingLocalX1,color:{primary:{borderColor:e.BordersDdsBorderStyleDarkStroke},primaryLighter:{borderColor:e.BordersDdsBorderStyleLightStroke}}},o={...D},y=l.hr`
  border: 0;
  background-color: transparent;
  border-top: ${o.borderTop};
  margin-top: ${o.marginTop};
  margin-bottom: ${o.marginBottom};
  ${({color:r})=>r&&g`
      border-color: ${o.color[r].borderColor};
    `}
`,k=S.forwardRef((r,t)=>{const{color:d="primary",id:i,className:a,htmlProps:n,...p}=r,m={...B(i,a,n,p),color:d};return b(y,{ref:t,...m})});k.displayName="Divider";export{k as D};
//# sourceMappingURL=Divider-ed4eb34e.js.map
