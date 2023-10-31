import{a as c}from"./jsx-runtime-e43ccb36.js";import{r as u}from"./index-1b03fe98.js";import{d as g,s as y,n as b}from"./ddsReferenceTokens-a28ebf03.js";import{g as f}from"./BaseComponentProps-5f9a30f8.js";const{border:o,spacing:s}=g,v={borderTop:`${o.BordersDdsBorderStyleLightStrokeWeight} solid`,marginTop:s.SizesDdsSpacingLocalX1,marginBottom:s.SizesDdsSpacingLocalX1,color:{primary:{borderColor:o.BordersDdsBorderStyleDarkStroke},primaryLighter:{borderColor:o.BordersDdsBorderStyleLightStroke}}},e={...v},D=y.hr`
  border: 0;
  background-color: transparent;
  border-top: ${e.borderTop};
  margin-top: ${e.marginTop};
  margin-bottom: ${e.marginBottom};
  ${({color:r})=>r&&b`
      border-color: ${e.color[r].borderColor};
    `}
`,t=u.forwardRef((r,a)=>{const{color:i="primary",id:d,className:n,htmlProps:l,...p}=r,m={...f(d,n,l,p),color:i};return c(D,{ref:a,...m})});t.displayName="Divider";try{t.displayName="Divider",t.__docgenInfo={description:"",displayName:"Divider",props:{color:{defaultValue:null,description:"Farge på horisontal linje.",name:"color",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"primary"'},{value:'"primaryLighter"'}]}},htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:"HTMLAttributes<HTMLHRElement> | undefined"}}}}}catch{}export{t as D};
//# sourceMappingURL=Divider-59c98bdf.js.map
