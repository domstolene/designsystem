import{s as d,d as t,a as _,n as u}from"./ddsReferenceTokens-fe3c594e.js";import{s as m}from"./BaseComponentProps-b46a4458.js";import"./index-1b03fe98.js";import"./Caption-a006c5bc.js";import"./Heading-3ac6a2d9.js";import"./Label-60a960ab.js";import"./Legend-bad3d4ec.js";import"./Link-bef7f478.js";import"./Paragraph-f6678e05.js";import"./TextOverflowEllipsis-c2a9fc8f.js";import{a as k}from"./Typography-9d6edb9c.js";const b=d.input`
  clip: rect(0 0 0 0);
  position: absolute;
  height: 1px;
  width: 1px;
  margin: 0;
`;try{b.displayName="HiddenInput",b.__docgenInfo={description:"",displayName:"HiddenInput",props:{}}}catch{}const{colors:a,spacing:r,border:I}=t,{textInput:c}=_,x={medium:"bodySans02",small:"bodySans01",tiny:"supportingStyleTiny01"},C={base:{color:c.input.textColor,borderRadius:c.input.borderRadius,border:`${I.BordersDdsBorderStyleLightStrokeWeight} solid ${a.DdsColorNeutralsGray5}`,borderColor:c.input.borderColor,backgroundColor:a.DdsColorNeutralsWhite,padding:`${r.SizesDdsSpacingLocalX075} ${r.SizesDdsSpacingLocalX1} ${r.SizesDdsSpacingLocalX075} ${r.SizesDdsSpacingLocalX075}`},disabled:{color:a.DdsColorNeutralsGray7,backgroundColor:a.DdsColorNeutralsGray1},readOnly:{backgroundColor:"transparent"},sizes:{medium:{padding:r.SizesDdsSpacingLocalX075},small:{padding:`${r.SizesDdsSpacingLocalX05} ${r.SizesDdsSpacingLocalX075} ${r.SizesDdsSpacingLocalX05} ${r.SizesDdsSpacingLocalX075}`},tiny:{padding:`${r.SizesDdsSpacingLocalX025} ${r.SizesDdsSpacingLocalX05} ${r.SizesDdsSpacingLocalX025} ${r.SizesDdsSpacingLocalX05}`}},affix:{gap:r.SizesDdsSpacingLocalX1NumberPx}},h={gap:r.SizesDdsSpacingLocalX0125},w={input:C,container:h},{colors:g}=t,F={borderColor:g.DdsColorDangerBase,boxShadow:`0 0 0 1px ${g.DdsColorDangerBase}`},{border:n}=t,z={outline:"none",borderColor:n.BordersDdsBorderFocusInputfieldStroke,boxShadow:`0 0 0 2px ${n.BordersDdsBorderFocusInputfieldStroke}`},N={borderColor:n.BordersDdsBorderFocusInputfieldStroke,boxShadow:`0 0 0 2px ${n.BordersDdsBorderFocusInputfieldStroke}`},{border:s,spacing:X}=t,B=X.SizesDdsSpacingLocalX0125,J={outline:`${s.BordersDdsBorderFocusBaseStrokeWeight} ${s.BordersDdsBorderFocusBaseStroke} solid`,outlineOffset:B},K={outline:`${s.BordersDdsBorderFocusOndarkStrokeWeight} ${s.BordersDdsBorderFocusOndarkStroke} solid`,outlineOffset:B},M="outline-offset 0.2s",Q={outline:"none",borderColor:s.BordersDdsBorderFocusCardStroke,boxShadow:`inset 0 0 0 1px ${s.BordersDdsBorderFocusCardStroke}`};s.BordersDdsBorderFocusOndarkStroke,`${s.BordersDdsBorderFocusOndarkStroke}`;const U={outline:"none",boxShadow:`inset 0 0 0 2px ${s.BordersDdsBorderFocusCardStroke}`},{border:i,colors:S}=t,Y={borderColor:i.BordersDdsBorderFocusInputfieldStroke,boxShadow:`inset 0 0 0 1px ${i.BordersDdsBorderFocusInputfieldStroke}`},v={borderColor:i.BordersDdsBorderFocusInputfieldStroke,boxShadow:`0 0 0 1px ${i.BordersDdsBorderFocusInputfieldStroke}`},L={borderColor:S.DdsColorDangerBase,boxShadow:`0 0 0 1px ${S.DdsColorDangerBase}`},{input:e,container:O}=w,l=d.input`
  position: relative;
  color: ${e.base.color};
  border-radius: ${e.base.borderRadius};
  border: ${e.base.border};
  border-color: ${e.base.borderColor};
  background-color: ${e.base.backgroundColor};
  padding: ${e.base.padding};
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
    ${m}
  }

  &:hover:enabled:read-write {
    ${v}
  }
  &:focus:enabled:read-write,
  &:active:enabled:read-write {
    ${z}
  }
`,$=d(l)`
  -webkit-appearance: textfield;

  padding-left: ${({prefixLength:o,readOnly:p})=>o&&(p?`${o}px !important`:`calc(${e.affix.gap}px + ${o}px) !important`)};
  padding-right: ${({suffixLength:o,readOnly:p})=>o&&(p?`${o}px !important`:`calc(${e.affix.gap}px + ${o}px) !important`)};
  ${({componentSize:o})=>o&&u`
      padding: ${e.sizes[o].padding};
      ${k(x[o])}
    `}

  ${({hasErrorMessage:o})=>o&&u`
      ${F}
      &:hover:enabled:read-write {
        ${L}
      }
      &:focus-within:enabled:read-write,
      &:active:enabled:read-write {
        ${N}
      }
    `}
  &:enabled:read-only {
    border: none;
    outline: none;
    cursor: default;
    background-color: ${e.readOnly.backgroundColor};
    padding-left: 0;
  }
  &:disabled {
    cursor: not-allowed;
    color: ${e.disabled.color};
    background-color: ${e.disabled.backgroundColor};
  }
`,f=d.div`
  position: relative;
  gap: ${O.gap};
  width: ${({width:o})=>o};
`,y=d.div`
  position: relative;
`,D=d.div`
  position: relative;
  display: flex;
  align-items: center;
`;try{l.displayName="Input",l.__docgenInfo={description:"",displayName:"Input",props:{}}}catch{}try{$.displayName="StatefulInput",$.__docgenInfo={description:"",displayName:"StatefulInput",props:{}}}catch{}try{f.displayName="OuterInputContainer",f.__docgenInfo={description:"",displayName:"OuterInputContainer",props:{}}}catch{}try{y.displayName="InputContainer",y.__docgenInfo={description:"Brukes som container til input og ikon for posisjonering.",displayName:"InputContainer",props:{}}}catch{}try{D.displayName="InputAffixContainer",D.__docgenInfo={description:"",displayName:"InputAffixContainer",props:{}}}catch{}export{b as H,y as I,f as O,$ as S,M as a,Q as b,v as c,F as d,K as e,J as f,D as g,Y as h,x as i,l as j,z as k,L as l,N as m,U as n};
//# sourceMappingURL=Input.styles-c3e229ec.js.map
