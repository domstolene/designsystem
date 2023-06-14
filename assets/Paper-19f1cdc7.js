import{d,s as t,C as a}from"./focus-visible-17f12d09.js";import{s as n}from"./selection-dced972e.js";const{colors:i,borderRadius:l,font:c}=d,h={backgroundColor:i.DdsColorNeutralsWhite,borderRadius:l.RadiiDdsBorderRadius1Radius,fontFamily:c.DdsFontBodySans01FontFamily},s={paper:h},{outerShadow:o,border:e}=d,u=r=>{switch(r){case 1:return o.DdsShadow1Onlight;case 2:return o.DdsShadow2Onlight;case 3:return o.DdsShadow3Onlight;case 4:return o.DdsShadow4Onlight}},g=r=>{switch(r){case"light":return`${e.BordersDdsBorderStyleLightStrokeWeight} solid ${e.BordersDdsBorderStyleLightStroke}`;case"dark":return`${e.BordersDdsBorderStyleDarkStrokeWeight} solid ${e.BordersDdsBorderStyleDarkStroke}`}},b=t.div`
  box-sizing: border-box;
  margin: 0;
  background-color: ${s.paper.backgroundColor};
  font-family: ${s.paper.fontFamily};
  border-radius: ${s.paper.borderRadius};
  &::selection,
  *::selection {
    ${n}
  }
  ${({elevation:r})=>r&&a`
      box-shadow: ${u(r)};
    `}
  border: ${({border:r})=>r?g(r):"none"}
`;export{b as P};
//# sourceMappingURL=Paper-19f1cdc7.js.map
