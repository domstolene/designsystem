import{s as a,d as n,a as h,n as c}from"./ddsReferenceTokens-cf345c8b.js";import{s as B}from"./BaseComponentProps-217bcb03.js";import"./index-1b03fe98.js";import"./Caption-7324954d.js";import"./Heading-a143a4ab.js";import"./Label-e6c412e2.js";import"./Legend-8686145c.js";import"./Link-0af95a08.js";import"./Paragraph-67d8f149.js";import"./TextOverflowEllipsis-5f7b5b23.js";import{a as _}from"./Typography-37e894bc.js";const f=a.input`
  clip: rect(0 0 0 0);
  position: absolute;
  height: 1px;
  width: 1px;
  margin: 0;
`;try{f.displayName="HiddenInput",f.__docgenInfo={description:"",displayName:"HiddenInput",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}}}catch{}const{colors:t,spacing:r,border:k}=n,{textInput:p}=h,I={medium:"bodySans02",small:"bodySans01",tiny:"supportingStyleTiny01"},x={base:{color:p.input.textColor,borderRadius:p.input.borderRadius,border:`${k.BordersDdsBorderStyleLightStrokeWeight} solid ${t.DdsColorNeutralsGray5}`,borderColor:p.input.borderColor,backgroundColor:t.DdsColorNeutralsWhite,padding:`${r.SizesDdsSpacingLocalX075} ${r.SizesDdsSpacingLocalX1} ${r.SizesDdsSpacingLocalX075} ${r.SizesDdsSpacingLocalX075}`},disabled:{color:t.DdsColorNeutralsGray7,backgroundColor:t.DdsColorNeutralsGray1},readOnly:{backgroundColor:"transparent"},sizes:{medium:{padding:r.SizesDdsSpacingLocalX075},small:{padding:`${r.SizesDdsSpacingLocalX05} ${r.SizesDdsSpacingLocalX075} ${r.SizesDdsSpacingLocalX05} ${r.SizesDdsSpacingLocalX075}`},tiny:{padding:`${r.SizesDdsSpacingLocalX025} ${r.SizesDdsSpacingLocalX05} ${r.SizesDdsSpacingLocalX025} ${r.SizesDdsSpacingLocalX05}`}},affix:{gap:r.SizesDdsSpacingLocalX1NumberPx}},C={gap:r.SizesDdsSpacingLocalX0125},w={input:x,container:C},{colors:m}=n,v={borderColor:m.DdsColorDangerBase,boxShadow:`0 0 0 1px ${m.DdsColorDangerBase}`},{border:s}=n,T={outline:"none",borderColor:s.BordersDdsBorderFocusInputfieldStroke,boxShadow:`0 0 0 2px ${s.BordersDdsBorderFocusInputfieldStroke}`},V={borderColor:s.BordersDdsBorderFocusInputfieldStroke,boxShadow:`0 0 0 2px ${s.BordersDdsBorderFocusInputfieldStroke}`},{border:d,spacing:q}=n,D=q.SizesDdsSpacingLocalX0125,J={outline:`${d.BordersDdsBorderFocusBaseStrokeWeight} ${d.BordersDdsBorderFocusBaseStroke} solid`,outlineOffset:D},K={outline:`${d.BordersDdsBorderFocusOndarkStrokeWeight} ${d.BordersDdsBorderFocusOndarkStroke} solid`,outlineOffset:D},M="outline-offset 0.2s",Q={outline:"none",borderColor:d.BordersDdsBorderFocusCardStroke,boxShadow:`inset 0 0 0 1px ${d.BordersDdsBorderFocusCardStroke}`};d.BordersDdsBorderFocusOndarkStroke,`${d.BordersDdsBorderFocusOndarkStroke}`;const U={outline:"none",boxShadow:`inset 0 0 0 2px ${d.BordersDdsBorderFocusCardStroke}`},{border:i,colors:b}=n,Y={borderColor:i.BordersDdsBorderFocusInputfieldStroke,boxShadow:`inset 0 0 0 1px ${i.BordersDdsBorderFocusInputfieldStroke}`},F={borderColor:i.BordersDdsBorderFocusInputfieldStroke,boxShadow:`0 0 0 1px ${i.BordersDdsBorderFocusInputfieldStroke}`},W={borderColor:b.DdsColorDangerBase,boxShadow:`0 0 0 1px ${b.DdsColorDangerBase}`},{input:o,container:z}=w,u=a.input`
  position: relative;
  color: ${o.base.color};
  border-radius: ${o.base.borderRadius};
  border: ${o.base.border};
  border-color: ${o.base.borderColor};
  background-color: ${o.base.backgroundColor};
  padding: ${o.base.padding};
  width: 100%;
  margin: 0;
  box-sizing: border-box;
  box-shadow: none;
  @media (prefers-reduced-motion: no-preference) {
    transition:
      box-shadow 0.2s,
      border-color 0.2s,
      background-color 0.2s;
  }
  &[type='text'],
  &[type='password'],
  &[type='number'],
  &[type='tel'],
  &[type='date'],
  &[type='url'],
  &[type='email'],
  &[type='search'],
  &[type='datetime-local'] {
    -webkit-appearance: none;
  }
  &::selection {
    ${B}
  }

  &:hover:enabled:read-write {
    ${F}
  }
  &:focus:enabled:read-write,
  &:active:enabled:read-write {
    ${T}
  }
`,g=a(u)`
  -webkit-appearance: textfield;

  padding-left: ${({prefixLength:e,readOnly:l})=>e&&(l?`${e}px !important`:`calc(${o.affix.gap}px + ${e}px) !important`)};
  padding-right: ${({suffixLength:e,readOnly:l})=>e&&(l?`${e}px !important`:`calc(${o.affix.gap}px + ${e}px) !important`)};
  ${({componentSize:e})=>e&&c`
      padding: ${o.sizes[e].padding};
      ${_(I[e])}
    `}

  ${({hasErrorMessage:e})=>e&&c`
      ${v}
      &:hover:enabled:read-write {
        ${W}
      }
      &:focus-within:enabled:read-write,
      &:active:enabled:read-write {
        ${V}
      }
    `}
  &:enabled:read-only {
    border: none;
    outline: none;
    cursor: default;
    background-color: ${o.readOnly.backgroundColor};
    padding-left: 0;
  }
  &:disabled {
    cursor: not-allowed;
    color: ${o.disabled.color};
    background-color: ${o.disabled.backgroundColor};
  }
`,y=a.div`
  position: relative;
  gap: ${z.gap};
  width: ${({width:e})=>e};
`,S=a.div`
  position: relative;
`,$=a.div`
  position: relative;
  display: flex;
  align-items: center;
`;try{u.displayName="Input",u.__docgenInfo={description:"",displayName:"Input",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}}}catch{}try{g.displayName="StatefulInput",g.__docgenInfo={description:"",displayName:"StatefulInput",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}}}catch{}try{y.displayName="OuterInputContainer",y.__docgenInfo={description:"",displayName:"OuterInputContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}}}catch{}try{S.displayName="InputContainer",S.__docgenInfo={description:"Brukes som container til input og ikon for posisjonering.",displayName:"InputContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}}}catch{}try{$.displayName="InputAffixContainer",$.__docgenInfo={description:"",displayName:"InputAffixContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}}}catch{}export{f as H,S as I,y as O,g as S,M as a,Q as b,F as c,v as d,K as e,J as f,$ as g,Y as h,I as i,u as j,U as k,T as l,W as m,V as n};
//# sourceMappingURL=Input.styles-9955857c.js.map
