import{s as a,A as c,d as i,b as S}from"./ddsReferenceTokens-f1d35829.js";import{Q as $}from"./dds-core-c67132cd.js";import{O as f}from"./dds-typography-cc6cb429.js";const N=a.input.withConfig({displayName:"HiddenInput",componentId:"sc-5c659abc-0"})`
  clip: rect(0 0 0 0);
  position: absolute;
  height: 1px;
  width: 1px;
  margin: 0;
`,{colors:n,spacing:e,border:D}=i,{textInput:p}=S,x={medium:"bodySans02",small:"bodySans01",tiny:"supportingStyleTiny01"},B={base:{color:p.input.textColor,borderRadius:p.input.borderRadius,border:`${D.BordersDdsBorderStyleLightStrokeWeight} solid ${n.DdsColorNeutralsGray5}`,borderColor:p.input.borderColor,backgroundColor:n.DdsColorNeutralsWhite,padding:`${e.SizesDdsSpacingLocalX075} ${e.SizesDdsSpacingLocalX1} ${e.SizesDdsSpacingLocalX075} ${e.SizesDdsSpacingLocalX075}`},disabled:{color:n.DdsColorNeutralsGray7,backgroundColor:n.DdsColorNeutralsGray1},readOnly:{backgroundColor:"transparent"},sizes:{medium:{padding:e.SizesDdsSpacingLocalX075},small:{padding:`${e.SizesDdsSpacingLocalX05} ${e.SizesDdsSpacingLocalX075} ${e.SizesDdsSpacingLocalX05} ${e.SizesDdsSpacingLocalX075}`},tiny:{padding:`${e.SizesDdsSpacingLocalX025} ${e.SizesDdsSpacingLocalX05} ${e.SizesDdsSpacingLocalX025} ${e.SizesDdsSpacingLocalX05}`}},affix:{gap:e.SizesDdsSpacingLocalX1NumberPx}},y={gap:e.SizesDdsSpacingLocalX0125},m={input:B,container:y},{colors:u}=i,C={borderColor:u.DdsColorDangerBase,boxShadow:`0 0 0 1px ${u.DdsColorDangerBase}`},{border:t}=i,h={outline:"none",borderColor:t.BordersDdsBorderFocusInputfieldStroke,boxShadow:`0 0 0 2px ${t.BordersDdsBorderFocusInputfieldStroke}`},k={borderColor:t.BordersDdsBorderFocusInputfieldStroke,boxShadow:`0 0 0 2px ${t.BordersDdsBorderFocusInputfieldStroke}`},{border:d,spacing:w}=i,g=w.SizesDdsSpacingLocalX0125,_={outline:`${d.BordersDdsBorderFocusBaseStrokeWeight} ${d.BordersDdsBorderFocusBaseStroke} solid`,outlineOffset:g},R={outline:`${d.BordersDdsBorderFocusOndarkStrokeWeight} ${d.BordersDdsBorderFocusOndarkStroke} solid`,outlineOffset:g},W="outline-offset 0.2s",A={outline:"none",borderColor:d.BordersDdsBorderFocusCardStroke,boxShadow:`inset 0 0 0 1px ${d.BordersDdsBorderFocusCardStroke}`};d.BordersDdsBorderFocusOndarkStroke,`${d.BordersDdsBorderFocusOndarkStroke}`;const T={outline:"none",boxShadow:`inset 0 0 0 2px ${d.BordersDdsBorderFocusCardStroke}`},{border:l,colors:b}=i,G={borderColor:l.BordersDdsBorderFocusInputfieldStroke,boxShadow:`inset 0 0 0 1px ${l.BordersDdsBorderFocusInputfieldStroke}`},I={borderColor:l.BordersDdsBorderFocusInputfieldStroke,boxShadow:`0 0 0 1px ${l.BordersDdsBorderFocusInputfieldStroke}`},z={borderColor:b.DdsColorDangerBase,boxShadow:`0 0 0 1px ${b.DdsColorDangerBase}`},{input:r,container:L}=m,F=a.input.withConfig({displayName:"Input.styles__Input",componentId:"sc-4f607345-0"})`
  position: relative;
  color: ${r.base.color};
  border-radius: ${r.base.borderRadius};
  border: ${r.base.border};
  border-color: ${r.base.borderColor};
  background-color: ${r.base.backgroundColor};
  padding: ${r.base.padding};
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
    ${I}
  }
  &:focus:enabled:read-write,
  &:active:enabled:read-write {
    ${h}
  }
`,E=a(F).withConfig({displayName:"Input.styles__StatefulInput",componentId:"sc-4f607345-1"})`
  -webkit-appearance: textfield;

  padding-left: ${({prefixLength:o,readOnly:s})=>o&&(s?`${o}px !important`:`calc(${r.affix.gap}px + ${o}px) !important`)};
  padding-right: ${({suffixLength:o,readOnly:s})=>o&&(s?`${o}px !important`:`calc(${r.affix.gap}px + ${o}px) !important`)};
  ${({componentSize:o})=>o&&c`
      padding: ${r.sizes[o].padding};
      ${f(x[o])}
    `}

  ${({hasErrorMessage:o})=>o&&c`
      ${C}
      &:hover:enabled:read-write {
        ${z}
      }
      &:focus-within:enabled:read-write,
      &:active:enabled:read-write {
        ${k}
      }
    `}
  &:enabled:read-only {
    border: none;
    outline: none;
    cursor: default;
    background-color: ${r.readOnly.backgroundColor};
    padding-left: 0;
  }
  &:disabled {
    cursor: not-allowed;
    color: ${r.disabled.color};
    background-color: ${r.disabled.backgroundColor};
  }
`,P=a.div.withConfig({displayName:"Input.styles__OuterInputContainer",componentId:"sc-4f607345-2"})`
  position: relative;
  gap: ${L.gap};
  width: ${({width:o})=>o};
`,j=a.div.withConfig({displayName:"Input.styles__InputContainer",componentId:"sc-4f607345-3"})`
  position: relative;
`,q=a.div.withConfig({displayName:"Input.styles__InputAffixContainer",componentId:"sc-4f607345-4"})`
  position: relative;
  display: flex;
  align-items: center;
`;function H(o,s){return typeof o=="string"?o:typeof s=="string"?s:""}export{T as A,x as B,j as E,z as F,q as J,H as K,G as P,A as R,N as T,W as V,R as W,F as X,_,C as h,E as j,h as k,P as q,I as w};
//# sourceMappingURL=dds-form-9b45fc8d.js.map
