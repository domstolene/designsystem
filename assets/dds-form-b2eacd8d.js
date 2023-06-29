import{s as a,A as c,d as i,b as S}from"./focus-visible-35158c22.js";import{Z as $}from"./dds-core-29d22035.js";import{O as D}from"./dds-typography-e761338c.js";const N=a.input`
  clip: rect(0 0 0 0);
  position: absolute;
  height: 1px;
  width: 1px;
  margin: 0;
`,{colors:n,spacing:r,border:B}=i,{textInput:p}=S,x={medium:"bodySans02",small:"bodySans01",tiny:"supportingStyleTiny01"},f={base:{color:p.input.textColor,borderRadius:p.input.borderRadius,border:`${B.BordersDdsBorderStyleLightStrokeWeight} solid ${n.DdsColorNeutralsGray5}`,borderColor:p.input.borderColor,backgroundColor:n.DdsColorNeutralsWhite,padding:`${r.SizesDdsSpacingLocalX075} ${r.SizesDdsSpacingLocalX1} ${r.SizesDdsSpacingLocalX075} ${r.SizesDdsSpacingLocalX075}`},disabled:{color:n.DdsColorNeutralsGray7,backgroundColor:n.DdsColorNeutralsGray1},readOnly:{backgroundColor:"transparent"},sizes:{medium:{padding:r.SizesDdsSpacingLocalX075},small:{padding:`${r.SizesDdsSpacingLocalX05} ${r.SizesDdsSpacingLocalX075} ${r.SizesDdsSpacingLocalX05} ${r.SizesDdsSpacingLocalX075}`},tiny:{padding:`${r.SizesDdsSpacingLocalX025} ${r.SizesDdsSpacingLocalX05} ${r.SizesDdsSpacingLocalX025} ${r.SizesDdsSpacingLocalX05}`}},affix:{gap:r.SizesDdsSpacingLocalX1NumberPx}},k={gap:r.SizesDdsSpacingLocalX0125},h={input:f,container:k},{colors:u}=i,C={borderColor:u.DdsColorDangerBase,boxShadow:`0 0 0 1px ${u.DdsColorDangerBase}`},{border:t}=i,y={outline:"none",borderColor:t.BordersDdsBorderFocusInputfieldStroke,boxShadow:`0 0 0 2px ${t.BordersDdsBorderFocusInputfieldStroke}`},m={borderColor:t.BordersDdsBorderFocusInputfieldStroke,boxShadow:`0 0 0 2px ${t.BordersDdsBorderFocusInputfieldStroke}`},{border:d,spacing:w}=i,g=w.SizesDdsSpacingLocalX0125,R={outline:`${d.BordersDdsBorderFocusBaseStrokeWeight} ${d.BordersDdsBorderFocusBaseStroke} solid`,outlineOffset:g},W={outline:`${d.BordersDdsBorderFocusOndarkStrokeWeight} ${d.BordersDdsBorderFocusOndarkStroke} solid`,outlineOffset:g},G="outline-offset 0.2s",T={outline:"none",borderColor:d.BordersDdsBorderFocusCardStroke,boxShadow:`inset 0 0 0 1px ${d.BordersDdsBorderFocusCardStroke}`};d.BordersDdsBorderFocusOndarkStroke,`${d.BordersDdsBorderFocusOndarkStroke}`;const A={outline:"none",boxShadow:`inset 0 0 0 2px ${d.BordersDdsBorderFocusCardStroke}`},{border:l,colors:b}=i,E={borderColor:l.BordersDdsBorderFocusInputfieldStroke,boxShadow:`inset 0 0 0 1px ${l.BordersDdsBorderFocusInputfieldStroke}`},z={borderColor:l.BordersDdsBorderFocusInputfieldStroke,boxShadow:`0 0 0 1px ${l.BordersDdsBorderFocusInputfieldStroke}`},L={borderColor:b.DdsColorDangerBase,boxShadow:`0 0 0 1px ${b.DdsColorDangerBase}`},{input:e,container:F}=h,X=a.input`
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
    transition: box-shadow 0.2s, border-color 0.2s, background-color 0.2s;
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
    ${$}
  }

  &:hover:enabled:read-write {
    ${z}
  }
  &:focus:enabled:read-write,
  &:active:enabled:read-write {
    ${y}
  }
`,M=a(X)`
  -webkit-appearance: textfield;

  padding-left: ${({prefixLength:o,readOnly:s})=>o&&(s?`${o}px !important`:`calc(${e.affix.gap}px + ${o}px) !important`)};
  padding-right: ${({suffixLength:o,readOnly:s})=>o&&(s?`${o}px !important`:`calc(${e.affix.gap}px + ${o}px) !important`)};
  ${({componentSize:o})=>o&&c`
      padding: ${e.sizes[o].padding};
      ${D(x[o])}
    `}

  ${({hasErrorMessage:o})=>o&&c`
      ${C}
      &:hover:enabled:read-write {
        ${L}
      }
      &:focus-within:enabled:read-write,
      &:active:enabled:read-write {
        ${m}
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
`,j=a.div`
  position: relative;
  gap: ${F.gap};
  width: ${({width:o})=>o};
`,q=a.div`
  position: relative;
`,H=a.div`
  position: relative;
  display: flex;
  align-items: center;
`;function J(o,s){return typeof o=="string"?o:typeof s=="string"?s:""}export{C,j as E,L as F,T as G,A as H,z as I,q as J,H as K,J as M,W as N,G as R,R as V,N as W,X,x as f,E as j,M as q,y};
//# sourceMappingURL=dds-form-b2eacd8d.js.map
