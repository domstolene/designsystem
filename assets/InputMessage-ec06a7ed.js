import{d as u,s as y,C as S,b as f,j as n}from"./focus-visible-17f12d09.js";import{r as h}from"./index-c6dae603.js";import{I as T}from"./Icon-a968456f.js";import{E as b}from"./error-f74b99a0.js";import{T as D}from"./Typography-ddbe86f6.js";import{g as k}from"./BaseComponentProps-bb0d5515.js";const{colors:a,spacing:s}=u,C={tip:{backgroundColor:a.DdsColorNeutralsWhite},error:{padding:`${s.SizesDdsSpacingLocalX025} ${s.SizesDdsSpacingLocalX05}`,color:a.DdsColorDangerBase,backgroundColor:a.DdsColorDangerLightest,gap:s.SizesDdsSpacingLocalX05}},$={marginTop:s.SizesDdsSpacingLocalX0125},r={message:C,icon:$},x=y.div`
  display: flex;
  width: fit-content;
  word-break: break-word;
  max-width: 100%;
  ${({messageType:e})=>e==="error"?S`
          color: ${r.message.error.color};
          background-color: ${r.message.error.backgroundColor};
          padding: ${r.message.error.padding};
          gap: ${r.message.error.gap};
        `:""}
  svg {
    margin-top: ${r.icon.marginTop};
  }
`,I=h.forwardRef((e,i)=>{const{message:t,messageType:p,id:c,className:g,htmlProps:d,...l}=e,m={...k(c,g,d,l),ref:i,messageType:p},o=p==="error";return f(x,{...m,children:[o&&n(T,{icon:b,iconSize:"inherit"}),n(D,{typographyType:o?"supportingStyleLabel01":"supportingStyleHelperText01",as:"span",bold:o?!0:void 0,color:o?r.message.error.color:void 0,children:t})]})});I.displayName="InputMessage";export{I};
//# sourceMappingURL=InputMessage-ec06a7ed.js.map
