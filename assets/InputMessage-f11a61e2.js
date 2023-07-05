import{d as u,s as S,A as b,j as f,a as n}from"./focus-visible-8467fd8b.js";import{i as h,b as y}from"./dds-icons-f9255b51.js";import{T as D}from"./dds-typography-4e6445f7.js";import{r as k}from"./index-d47b1f5a.js";import{a as T}from"./dds-core-b89b291f.js";const{colors:a,spacing:s}=u,$={tip:{backgroundColor:a.DdsColorNeutralsWhite},error:{padding:`${s.SizesDdsSpacingLocalX025} ${s.SizesDdsSpacingLocalX05}`,color:a.DdsColorDangerBase,backgroundColor:a.DdsColorDangerLightest,gap:s.SizesDdsSpacingLocalX05}},x={marginTop:s.SizesDdsSpacingLocalX0125},r={message:$,icon:x},w=S.div`
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
`,C=k.forwardRef((e,p)=>{const{message:t,messageType:i,id:c,className:g,htmlProps:d,...l}=e,m={...T(c,g,d,l),ref:p,messageType:i},o=i==="error";return f(w,{...m,children:[o&&n(h,{icon:y,iconSize:"inherit"}),n(D,{typographyType:o?"supportingStyleLabel01":"supportingStyleHelperText01",as:"span",bold:o?!0:void 0,color:o?r.message.error.color:void 0,children:t})]})});C.displayName="InputMessage";export{C as I};
//# sourceMappingURL=InputMessage-f11a61e2.js.map
