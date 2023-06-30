import{d as B,s as a,j as u,A as d,a as o}from"./focus-visible-8467fd8b.js";import{r as n}from"./index-d47b1f5a.js";import{T as le,M as pe}from"./dds-typography-4e6445f7.js";import{a as ue,N as fe,E as y}from"./dds-core-b89b291f.js";import{j as T,K as ge,q as xe,E as me,J as he}from"./dds-form-9dbc5b3d.js";import{r as Se}from"./renderInputMessage-0780c203.js";import{g as Ie}from"./icon-aa5b86b3.js";import{i as be}from"./dds-icons-57b6044b.js";const{colors:J,spacing:t,iconSizes:X}=B,$e={withIcon:{medium:{paddingLeft:`${t.SizesDdsSpacingLocalX075NumberPx+X.DdsIconsizeMediumNumberPx+t.SizesDdsSpacingLocalX05NumberPx}px`},small:{paddingLeft:`${t.SizesDdsSpacingLocalX075NumberPx+X.DdsIconsizeSmallNumberPx+t.SizesDdsSpacingLocalX05NumberPx}px`},tiny:{paddingLeft:`${t.SizesDdsSpacingLocalX05NumberPx+X.DdsIconsizeSmallNumberPx+t.SizesDdsSpacingLocalX025NumberPx}px`}}},ze={border:{color:J.DdsColorNeutralsGray5}},De={color:J.DdsColorNeutralsGray9,sizes:{medium:{top:t.SizesDdsSpacingLocalX075,left:t.SizesDdsSpacingLocalX075},small:{top:t.SizesDdsSpacingLocalX075,left:t.SizesDdsSpacingLocalX075},tiny:{top:t.SizesDdsSpacingLocalX05,left:t.SizesDdsSpacingLocalX05}}},C={input:$e,icon:De,affix:ze},Ne=a(le)`
  margin-left: auto;
`;function Le(e){const{current:s,max:r,id:l,className:f,htmlProps:g,...i}=e,x=n.useId(),b=l??`${x}-characterCounter`;return u(Ne,{...ue(b,f,g,i),forwardedAs:"div",typographyType:"supportingStyleHelperText01","aria-label":`${s} av ${r} tegn skrevet`,children:[s,"/",r]})}const{iconSizes:G}=B,{input:Pe,icon:H}=C,ye=a.div`
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
`,Ee=a(K)`
  left: 0;
  margin-left: 8px;
  padding-right: 8px;
  border-right: 1px solid ${C.affix.border.color};

  ${({readOnly:e})=>e&&d`
      margin-left: 0;
      padding-right: 0.5ch;
      border-right: none;
    `};
`,We=a(K)`
  right: 0;
  margin-right: 8px;
  padding-left: 8px;
  border-left: 1px solid ${C.affix.border.color};

  ${({readOnly:e})=>e&&d`
      margin-right: 0;
      padding-left: 0.5ch;
      border-left: none;
    `};
`,je=n.forwardRef(({label:e,disabled:s,readOnly:r,errorMessage:l,tip:f,required:g,maxLength:i,onChange:x,id:b,width:Q,componentSize:c="medium",type:$="text",withCharacterCounter:v=!0,className:Y,style:U,value:M,defaultValue:E,"aria-required":W,"aria-describedby":Z,icon:j,prefix:m,suffix:h,..._},z)=>{const[V,O]=n.useState(ge(M,E)),D=n.useRef(null),N=n.useRef(null),[ee,te]=n.useState(0),[se,ie]=n.useState(0);n.useLayoutEffect(()=>{D.current&&te(D.current.offsetWidth),N.current&&ie(N.current.offsetWidth)},[m,h,r]);const L=F=>{O(F.target.value),x&&x(F)},ne=n.useId(),p=b??`${ne}-textInput`,S=!!l,w=!!f,re=!!e,oe=S||w||!!i,A=!!j,ae=!!(m||h),R=y(p,"characterCounter"),q=y(p,"tip"),k=y(p,"errorMessage"),P={id:p,errorMessage:l,hasErrorMessage:S,required:g,disabled:s,readOnly:r,tabIndex:r?-1:0,maxLength:i,value:M,defaultValue:E,"aria-required":W,"aria-describedby":fe([w?q:void 0,S?k:void 0,i&&v?R:void 0,Z]),"aria-invalid":S?!0:void 0,..._},ce={className:Y,style:U,width:Me(c,Q)},de=!!(g||W);let I=null;return A?I=u(me,{children:[o(Xe,{icon:j,iconSize:Ie(c),size:c}),o(Te,{ref:z,onChange:L,type:$,componentSize:c,hasIcon:A,...P})]}):ae&&(I=u(he,{children:[m&&o(Ee,{readOnly:r,ref:D,"aria-hidden":!0,children:m}),o(T,{ref:z,onChange:L,type:$,componentSize:c,prefixLength:ee,suffixLength:se,...P}),h&&o(We,{readOnly:r,ref:N,"aria-hidden":!0,children:h})]})),u(xe,{...ce,children:[re&&o(pe,{htmlFor:p,showRequiredStyling:de,children:e}),I||o(T,{ref:z,onChange:L,type:$,componentSize:c,...P}),oe&&u(ye,{children:[Se(f,q,l,k),i&&Number.isInteger(i)&&i>0&&v&&o(Le,{id:R,current:V.length,max:i})]})]})});je.displayName="TextInput";export{je as T};
//# sourceMappingURL=TextInput-ea6cec48.js.map
