import{d as c,s as u,A as g,a as y}from"./ddsReferenceTokens-ceb64027.js";import{r as b}from"./index-1b03fe98.js";import{g as v}from"./BaseComponentProps-d435d0d0.js";const{border:o,spacing:s}=c,f={borderTop:`${o.BordersDdsBorderStyleLightStrokeWeight} solid`,marginTop:s.SizesDdsSpacingLocalX1,marginBottom:s.SizesDdsSpacingLocalX1,color:{primary:{borderColor:o.BordersDdsBorderStyleDarkStroke},primaryLighter:{borderColor:o.BordersDdsBorderStyleLightStroke}}},e={...f},D=u.hr`
  border: 0;
  background-color: transparent;
  border-top: ${e.borderTop};
  margin-top: ${e.marginTop};
  margin-bottom: ${e.marginBottom};
  ${({color:r})=>r&&g`
      border-color: ${e.color[r].borderColor};
    `}
`,t=b.forwardRef((r,a)=>{const{color:i="primary",id:d,className:n,htmlProps:l,...p}=r,m={...v(d,n,l,p),color:i};return y(D,{ref:a,...m})});t.displayName="Divider";try{t.displayName="Divider",t.__docgenInfo={description:"",displayName:"Divider",props:{color:{defaultValue:null,description:"Farge på horisontal linje.",name:"color",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"primary"'},{value:'"primaryLighter"'}]}},htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:"HTMLAttributes<HTMLHRElement> | undefined"}}}}}catch{}export{t as D};
//# sourceMappingURL=Divider-d499a68f.js.map
