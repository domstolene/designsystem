import{d as c,s as l,C as g,j as b}from"./focus-visible-17f12d09.js";import{r as S}from"./index-c6dae603.js";import{g as B}from"./BaseComponentProps-bb0d5515.js";const{border:e,spacing:s}=c,D={borderTop:`${e.BordersDdsBorderStyleLightStrokeWeight} solid`,marginTop:s.SizesDdsSpacingLocalX1,marginBottom:s.SizesDdsSpacingLocalX1,color:{primary:{borderColor:e.BordersDdsBorderStyleDarkStroke},primaryLighter:{borderColor:e.BordersDdsBorderStyleLightStroke}}},o={...D},y=l.hr`
  border: 0;
  background-color: transparent;
  border-top: ${o.borderTop};
  margin-top: ${o.marginTop};
  margin-bottom: ${o.marginBottom};
  ${({color:r})=>r&&g`
      border-color: ${o.color[r].borderColor};
    `}
`,k=S.forwardRef((r,t)=>{const{color:d="primary",id:i,className:a,htmlProps:n,...p}=r,m={...B(i,a,n,p),color:d};return b(y,{ref:t,...m})});k.displayName="Divider";export{k as D};
//# sourceMappingURL=Divider-92e35ab0.js.map
