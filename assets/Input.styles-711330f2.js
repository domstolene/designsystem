import{s,d as n,b as B,A as u}from"./ddsReferenceTokens-647ce456.js";import{s as _}from"./BaseComponentProps-a100791d.js";import"./index-ebeaab24.js";import"./Caption-5c254d72.js";import"./Heading-dc72d0b9.js";import"./Label-23c96940.js";import"./Legend-dbc3ced6.js";import"./Link-9aff7843.js";import"./Paragraph-3340e0ea.js";import"./TextOverflowEllipsis-e3546c5b.js";import{g as h}from"./Typography-1747463b.js";const g=s.input`
  clip: rect(0 0 0 0);
  position: absolute;
  height: 1px;
  width: 1px;
  margin: 0;
`;try{g.displayName="HiddenInput",g.__docgenInfo={description:"",displayName:"HiddenInput",props:{}}}catch{}const{colors:a,spacing:o,border:x}=n,{textInput:p}=B,k={medium:"bodySans02",small:"bodySans01",tiny:"supportingStyleTiny01"},I={base:{color:p.input.textColor,borderRadius:p.input.borderRadius,border:`${x.BordersDdsBorderStyleLightStrokeWeight} solid ${a.DdsColorNeutralsGray5}`,borderColor:p.input.borderColor,backgroundColor:a.DdsColorNeutralsWhite,padding:`${o.SizesDdsSpacingLocalX075} ${o.SizesDdsSpacingLocalX1} ${o.SizesDdsSpacingLocalX075} ${o.SizesDdsSpacingLocalX075}`},disabled:{color:a.DdsColorNeutralsGray7,backgroundColor:a.DdsColorNeutralsGray1},readOnly:{backgroundColor:"transparent"},sizes:{medium:{padding:o.SizesDdsSpacingLocalX075},small:{padding:`${o.SizesDdsSpacingLocalX05} ${o.SizesDdsSpacingLocalX075} ${o.SizesDdsSpacingLocalX05} ${o.SizesDdsSpacingLocalX075}`},tiny:{padding:`${o.SizesDdsSpacingLocalX025} ${o.SizesDdsSpacingLocalX05} ${o.SizesDdsSpacingLocalX025} ${o.SizesDdsSpacingLocalX05}`}},affix:{gap:o.SizesDdsSpacingLocalX1NumberPx}},C={gap:o.SizesDdsSpacingLocalX0125},w={input:I,container:C},{colors:b}=n,v={borderColor:b.DdsColorDangerBase,boxShadow:`0 0 0 1px ${b.DdsColorDangerBase}`},{border:t}=n,z={outline:"none",borderColor:t.BordersDdsBorderFocusInputfieldStroke,boxShadow:`0 0 0 2px ${t.BordersDdsBorderFocusInputfieldStroke}`},F={borderColor:t.BordersDdsBorderFocusInputfieldStroke,boxShadow:`0 0 0 2px ${t.BordersDdsBorderFocusInputfieldStroke}`},{border:d,spacing:L}=n,D=L.SizesDdsSpacingLocalX0125,P={outline:`${d.BordersDdsBorderFocusBaseStrokeWeight} ${d.BordersDdsBorderFocusBaseStroke} solid`,outlineOffset:D},J={outline:`${d.BordersDdsBorderFocusOndarkStrokeWeight} ${d.BordersDdsBorderFocusOndarkStroke} solid`,outlineOffset:D},K="outline-offset 0.2s",Q={outline:"none",borderColor:d.BordersDdsBorderFocusCardStroke,boxShadow:`inset 0 0 0 1px ${d.BordersDdsBorderFocusCardStroke}`};d.BordersDdsBorderFocusOndarkStroke,`${d.BordersDdsBorderFocusOndarkStroke}`;const U={outline:"none",boxShadow:`inset 0 0 0 2px ${d.BordersDdsBorderFocusCardStroke}`},{border:i,colors:f}=n,Y={borderColor:i.BordersDdsBorderFocusInputfieldStroke,boxShadow:`inset 0 0 0 1px ${i.BordersDdsBorderFocusInputfieldStroke}`},N={borderColor:i.BordersDdsBorderFocusInputfieldStroke,boxShadow:`0 0 0 1px ${i.BordersDdsBorderFocusInputfieldStroke}`},X={borderColor:f.DdsColorDangerBase,boxShadow:`0 0 0 1px ${f.DdsColorDangerBase}`},{input:r,container:O}=w,c=s.input`
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
    ${_}
  }

  &:hover:enabled:read-write {
    ${N}
  }
  &:focus:enabled:read-write,
  &:active:enabled:read-write {
    ${z}
  }
`,S=s(c)`
  -webkit-appearance: textfield;

  padding-left: ${({prefixLength:e,readOnly:l})=>e&&(l?`${e}px !important`:`calc(${r.affix.gap}px + ${e}px) !important`)};
  padding-right: ${({suffixLength:e,readOnly:l})=>e&&(l?`${e}px !important`:`calc(${r.affix.gap}px + ${e}px) !important`)};
  ${({componentSize:e})=>e&&u`
      padding: ${r.sizes[e].padding};
      ${h(k[e])}
    `}

  ${({hasErrorMessage:e})=>e&&u`
      ${v}
      &:hover:enabled:read-write {
        ${X}
      }
      &:focus-within:enabled:read-write,
      &:active:enabled:read-write {
        ${F}
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
`,m=s.div`
  position: relative;
  gap: ${O.gap};
  width: ${({width:e})=>e};
`,$=s.div`
  position: relative;
`,y=s.div`
  position: relative;
  display: flex;
  align-items: center;
`;try{c.displayName="Input",c.__docgenInfo={description:"",displayName:"Input",props:{}}}catch{}try{S.displayName="StatefulInput",S.__docgenInfo={description:"",displayName:"StatefulInput",props:{componentSize:{defaultValue:null,description:"Størrelse på inputfeltet.",name:"componentSize",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"tiny"'},{value:'"small"'},{value:'"medium"'}]}},prefixLength:{defaultValue:null,description:"",name:"prefixLength",required:!1,type:{name:"number | undefined"}},suffixLength:{defaultValue:null,description:"",name:"suffixLength",required:!1,type:{name:"number | undefined"}},hasErrorMessage:{defaultValue:null,description:"",name:"hasErrorMessage",required:!0,type:{name:"boolean"}}}}}catch{}try{m.displayName="OuterInputContainer",m.__docgenInfo={description:"",displayName:"OuterInputContainer",props:{width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"Width<0 | (string & {})> | undefined"}}}}}catch{}try{$.displayName="InputContainer",$.__docgenInfo={description:"Brukes som container til input og ikon for posisjonering.",displayName:"InputContainer",props:{}}}catch{}try{y.displayName="InputAffixContainer",y.__docgenInfo={description:"",displayName:"InputAffixContainer",props:{}}}catch{}export{g as H,$ as I,m as O,S,K as a,Q as b,N as c,v as d,J as e,P as f,y as g,Y as h,k as i,c as j,U as k,X as l,z as m};
//# sourceMappingURL=Input.styles-711330f2.js.map
