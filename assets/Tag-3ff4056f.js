import{d as u,s as m,C as f,j as e}from"./focus-visible-17f12d09.js";import{r as b}from"./index-c6dae603.js";import{l as s}from"./LocalMessage.tokens-daa3b78a.js";import{d as T}from"./Typography.utils-3c68477b.js";import{g as y}from"./BaseComponentProps-bb0d5515.js";import{T as $,a as w}from"./TextOverflowEllipsis-fe45a86e.js";const{colors:a,borderRadius:x,spacing:d}=u,C="bodySans01",R={border:"1px solid",borderRadius:x.RadiiDdsBorderRadius1Radius,padding:`${d.SizesDdsSpacingLocalX0125} ${d.SizesDdsSpacingLocalX025}`,purpose:{default:{backgroundColor:a.DdsColorNeutralsGray1,borderColor:a.DdsColorNeutralsGray3},success:s.container.purpose.success,danger:s.container.purpose.danger,warning:s.container.purpose.warning,info:s.container.purpose.info}},k={wrapper:R},{wrapper:r}=k,S=m(w)`
  display: inline-flex;
  align-items: center;
  border: ${r.border};
  border-radius: ${r.borderRadius};
  padding: ${r.padding};
  ${T(C)}
  ${({purpose:o})=>f`
    background-color: ${r.purpose[o].backgroundColor};
    border-color: ${r.purpose[o].borderColor};
  `}
`,D=b.forwardRef((o,n)=>{const{text:p,purpose:i="default",id:t,className:l,htmlProps:c,...g}=o;return e(S,{...y(t,l,c,g),ref:n,purpose:i,children:e($,{children:p})})});D.displayName="Tag";export{D as T};
//# sourceMappingURL=Tag-3ff4056f.js.map
