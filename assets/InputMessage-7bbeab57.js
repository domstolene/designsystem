import{d as u,s as S,A as b,a as f,j as n}from"./focus-visible-35158c22.js";import{z as h,b as y}from"./dds-icons-7a922c3a.js";import{T as D}from"./dds-typography-e761338c.js";import{r as k}from"./index-d47b1f5a.js";import{a as T}from"./dds-core-29d22035.js";const{colors:a,spacing:s}=u,$={tip:{backgroundColor:a.DdsColorNeutralsWhite},error:{padding:`${s.SizesDdsSpacingLocalX025} ${s.SizesDdsSpacingLocalX05}`,color:a.DdsColorDangerBase,backgroundColor:a.DdsColorDangerLightest,gap:s.SizesDdsSpacingLocalX05}},x={marginTop:s.SizesDdsSpacingLocalX0125},r={message:$,icon:x},z=S.div`
  display: flex;
  width: fit-content;
  word-break: break-word;
  max-width: 100%;
  ${({messageType:e})=>e==="error"?b`
          color: ${r.message.error.color};
          background-color: ${r.message.error.backgroundColor};
          padding: ${r.message.error.padding};
          gap: ${r.message.error.gap};
        `:""}
  svg {
    margin-top: ${r.icon.marginTop};
  }
`,w=k.forwardRef((e,p)=>{const{message:t,messageType:i,id:c,className:g,htmlProps:d,...l}=e,m={...T(c,g,d,l),ref:p,messageType:i},o=i==="error";return f(z,{...m,children:[o&&n(h,{icon:y,iconSize:"inherit"}),n(D,{typographyType:o?"supportingStyleLabel01":"supportingStyleHelperText01",as:"span",bold:o?!0:void 0,color:o?r.message.error.color:void 0,children:t})]})});w.displayName="InputMessage";export{w as I};
//# sourceMappingURL=InputMessage-7bbeab57.js.map
