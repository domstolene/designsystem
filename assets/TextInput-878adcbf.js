import{d as B,s as a,a as u,A as d,j as o}from"./focus-visible-35158c22.js";import{r}from"./index-d47b1f5a.js";import{T as le,N as pe}from"./dds-typography-e761338c.js";import{a as ue,R as fe,E as y}from"./dds-core-29d22035.js";import{q as T,M as ge,E as xe,J as me,K as he}from"./dds-form-b2eacd8d.js";import{r as Se}from"./renderInputMessage-3a3d5367.js";import{g as Ie}from"./icon-aa5b86b3.js";import{z as be}from"./dds-icons-7a922c3a.js";const{colors:J,spacing:t,iconSizes:X}=B,$e={withIcon:{medium:{paddingLeft:`${t.SizesDdsSpacingLocalX075NumberPx+X.DdsIconsizeMediumNumberPx+t.SizesDdsSpacingLocalX05NumberPx}px`},small:{paddingLeft:`${t.SizesDdsSpacingLocalX075NumberPx+X.DdsIconsizeSmallNumberPx+t.SizesDdsSpacingLocalX05NumberPx}px`},tiny:{paddingLeft:`${t.SizesDdsSpacingLocalX05NumberPx+X.DdsIconsizeSmallNumberPx+t.SizesDdsSpacingLocalX025NumberPx}px`}}},ze={border:{color:J.DdsColorNeutralsGray5}},De={color:J.DdsColorNeutralsGray9,sizes:{medium:{top:t.SizesDdsSpacingLocalX075,left:t.SizesDdsSpacingLocalX075},small:{top:t.SizesDdsSpacingLocalX075,left:t.SizesDdsSpacingLocalX075},tiny:{top:t.SizesDdsSpacingLocalX05,left:t.SizesDdsSpacingLocalX05}}},C={input:$e,icon:De,affix:ze},Ne=a(le)`
  margin-left: auto;
`;function Le(e){const{current:s,max:i,id:l,className:f,htmlProps:g,...n}=e,x=r.useId(),b=l??`${x}-characterCounter`;return u(Ne,{...ue(b,f,g,n),forwardedAs:"div",typographyType:"supportingStyleHelperText01","aria-label":`${s} av ${i} tegn skrevet`,children:[s,"/",i]})}const{iconSizes:G}=B,{input:Pe,icon:H}=C,ye=a.div`
  display: flex;
  justify-content: space-between;
`,Xe=a(be)`
  position: absolute;
  color: ${H.color};
  ${({size:e,iconSize:s})=>d`
    left: ${H.sizes[e].left};
    ${s==="small"?d`
          top: ${`calc(50% - ${G.DdsIconsizeSmallNumberPx/2}px)`};
        `:d`
          top: ${`calc(50% - ${G.DdsIconsizeMediumNumberPx/2}px)`};
        `}
  `}
  z-index: 1;
`,Te=a(T)`
  ${({componentSize:e,hasIcon:s})=>s&&e&&d`
      padding-left: ${Pe.withIcon[e].paddingLeft};
    `}
`,Ce="320px",ve="210px",Me=(e,s)=>s||(e==="tiny"?ve:Ce),K=a.span`
  position: absolute;
  height: 100%;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  pointer-events: none;
  z-index: 1;
`,Re=a(K)`
  left: 0;
  margin-left: 8px;
  padding-right: 8px;
  border-right: 1px solid ${C.affix.border.color};

  ${({readOnly:e})=>e&&d`
      margin-left: 0;
      padding-right: 0.5ch;
      border-right: none;
    `};
`,Ee=a(K)`
  right: 0;
  margin-right: 8px;
  padding-left: 8px;
  border-left: 1px solid ${C.affix.border.color};

  ${({readOnly:e})=>e&&d`
      margin-right: 0;
      padding-left: 0.5ch;
      border-left: none;
    `};
`,We=r.forwardRef(({label:e,disabled:s,readOnly:i,errorMessage:l,tip:f,required:g,maxLength:n,onChange:x,id:b,width:Y,componentSize:c="medium",type:$="text",withCharacterCounter:v=!0,className:Z,style:Q,value:M,defaultValue:R,"aria-required":E,"aria-describedby":U,icon:W,prefix:m,suffix:h,..._},z)=>{const[V,O]=r.useState(ge(M,R)),D=r.useRef(null),N=r.useRef(null),[ee,te]=r.useState(0),[se,ne]=r.useState(0);r.useLayoutEffect(()=>{D.current&&te(D.current.offsetWidth),N.current&&ne(N.current.offsetWidth)},[m,h,i]);const L=F=>{O(F.target.value),x&&x(F)},re=r.useId(),p=b??`${re}-textInput`,S=!!l,w=!!f,ie=!!e,oe=S||w||!!n,A=!!W,ae=!!(m||h),j=y(p,"characterCounter"),q=y(p,"tip"),k=y(p,"errorMessage"),P={id:p,errorMessage:l,hasErrorMessage:S,required:g,disabled:s,readOnly:i,tabIndex:i?-1:0,maxLength:n,value:M,defaultValue:R,"aria-required":E,"aria-describedby":fe([w?q:void 0,S?k:void 0,n&&v?j:void 0,U]),"aria-invalid":S?!0:void 0,..._},ce={className:Z,style:Q,width:Me(c,Y)},de=!!(g||E);let I=null;return A?I=u(me,{children:[o(Xe,{icon:W,iconSize:Ie(c),size:c}),o(Te,{ref:z,onChange:L,type:$,componentSize:c,hasIcon:A,...P})]}):ae&&(I=u(he,{children:[m&&o(Re,{readOnly:i,ref:D,"aria-hidden":!0,children:m}),o(T,{ref:z,onChange:L,type:$,componentSize:c,prefixLength:ee,suffixLength:se,...P}),h&&o(Ee,{readOnly:i,ref:N,"aria-hidden":!0,children:h})]})),u(xe,{...ce,children:[ie&&o(pe,{htmlFor:p,showRequiredStyling:de,children:e}),I||o(T,{ref:z,onChange:L,type:$,componentSize:c,...P}),oe&&u(ye,{children:[Se(f,q,l,k),n&&Number.isInteger(n)&&n>0&&v&&o(Le,{id:j,current:V.length,max:n})]})]})});We.displayName="TextInput";export{We as T};
//# sourceMappingURL=TextInput-878adcbf.js.map
