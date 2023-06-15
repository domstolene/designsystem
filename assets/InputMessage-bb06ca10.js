import{d as u,s as y,A as S,a as f,j as n}from"./focus-visible-c2e9b88d.js";import{r as h}from"./index-ebeaab24.js";import{I as T}from"./Icon-819df738.js";import{E as D}from"./error-e0532677.js";import{T as b}from"./Typography-9f10a259.js";import{g as k}from"./BaseComponentProps-bb0d5515.js";const{colors:a,spacing:s}=u,$={tip:{backgroundColor:a.DdsColorNeutralsWhite},error:{padding:`${s.SizesDdsSpacingLocalX025} ${s.SizesDdsSpacingLocalX05}`,color:a.DdsColorDangerBase,backgroundColor:a.DdsColorDangerLightest,gap:s.SizesDdsSpacingLocalX05}},x={marginTop:s.SizesDdsSpacingLocalX0125},r={message:$,icon:x},I=y.div`
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
`,L=h.forwardRef((e,i)=>{const{message:t,messageType:p,id:c,className:g,htmlProps:d,...l}=e,m={...k(c,g,d,l),ref:i,messageType:p},o=p==="error";return f(I,{...m,children:[o&&n(T,{icon:D,iconSize:"inherit"}),n(b,{typographyType:o?"supportingStyleLabel01":"supportingStyleHelperText01",as:"span",bold:o?!0:void 0,color:o?r.message.error.color:void 0,children:t})]})});L.displayName="InputMessage";export{L as I};
//# sourceMappingURL=InputMessage-bb06ca10.js.map
