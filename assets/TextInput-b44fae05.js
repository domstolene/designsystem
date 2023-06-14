import{s as a,b as u,d as F,C as d,j as o}from"./focus-visible-17f12d09.js";import{r}from"./index-c6dae603.js";import{T as le}from"./Typography-ddbe86f6.js";import{g as pe}from"./BaseComponentProps-bb0d5515.js";import{I as ue}from"./Icon-a968456f.js";import{S as T,O as fe,a as ge,b as xe}from"./Input.styles-b4f9abd1.js";import{g as me,r as he,a as Ie}from"./Input.utils-c0cbaed7.js";import{s as Se,d as N}from"./idGenerator-c29473b2.js";import{L as be}from"./Label-f2e173db.js";const $e=a(le)`
  margin-left: auto;
`;function ze(e){const{current:s,max:i,id:l,className:f,htmlProps:g,...n}=e,x=r.useId(),b=l??`${x}-characterCounter`;return u($e,{...pe(b,f,g,n),forwardedAs:"div",typographyType:"supportingStyleHelperText01","aria-label":`${s} av ${i} tegn skrevet`,children:[s,"/",i]})}const{colors:Y,spacing:t,iconSizes:C}=F,De={withIcon:{medium:{paddingLeft:`${t.SizesDdsSpacingLocalX075NumberPx+C.DdsIconsizeMediumNumberPx+t.SizesDdsSpacingLocalX05NumberPx}px`},small:{paddingLeft:`${t.SizesDdsSpacingLocalX075NumberPx+C.DdsIconsizeSmallNumberPx+t.SizesDdsSpacingLocalX05NumberPx}px`},tiny:{paddingLeft:`${t.SizesDdsSpacingLocalX05NumberPx+C.DdsIconsizeSmallNumberPx+t.SizesDdsSpacingLocalX025NumberPx}px`}}},Le={border:{color:Y.DdsColorNeutralsGray5}},ye={color:Y.DdsColorNeutralsGray9,sizes:{medium:{top:t.SizesDdsSpacingLocalX075,left:t.SizesDdsSpacingLocalX075},small:{top:t.SizesDdsSpacingLocalX075,left:t.SizesDdsSpacingLocalX075},tiny:{top:t.SizesDdsSpacingLocalX05,left:t.SizesDdsSpacingLocalX05}}},X={input:De,icon:ye,affix:Le},{iconSizes:H}=F,{input:Pe,icon:B}=X,Ne=a.div`
  display: flex;
  justify-content: space-between;
`,Ce=a(ue)`
  position: absolute;
  color: ${B.color};
  ${({size:e,iconSize:s})=>d`
    left: ${B.sizes[e].left};
    ${s==="small"?d`
          top: ${`calc(50% - ${H.DdsIconsizeSmallNumberPx/2}px)`};
        `:d`
          top: ${`calc(50% - ${H.DdsIconsizeMediumNumberPx/2}px)`};
        `}
  `}
  z-index: 1;
`,Te=a(T)`
  ${({componentSize:e,hasIcon:s})=>s&&e&&d`
      padding-left: ${Pe.withIcon[e].paddingLeft};
    `}
`,Xe="320px",ve="210px",Me=(e,s)=>s||(e==="tiny"?ve:Xe),J=a.span`
  position: absolute;
  height: 100%;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  pointer-events: none;
  z-index: 1;
`,We=a(J)`
  left: 0;
  margin-left: 8px;
  padding-right: 8px;
  border-right: 1px solid ${X.affix.border.color};

  ${({readOnly:e})=>e&&d`
      margin-left: 0;
      padding-right: 0.5ch;
      border-right: none;
    `};
`,we=a(J)`
  right: 0;
  margin-right: 8px;
  padding-left: 8px;
  border-left: 1px solid ${X.affix.border.color};

  ${({readOnly:e})=>e&&d`
      margin-right: 0;
      padding-left: 0.5ch;
      border-left: none;
    `};
`,Re=r.forwardRef(({label:e,disabled:s,readOnly:i,errorMessage:l,tip:f,required:g,maxLength:n,onChange:x,id:b,width:K,componentSize:c="medium",type:$="text",withCharacterCounter:v=!0,className:Q,style:U,value:M,defaultValue:W,"aria-required":w,"aria-describedby":Z,icon:R,prefix:m,suffix:h,..._},z)=>{const[V,O]=r.useState(me(M,W)),D=r.useRef(null),L=r.useRef(null),[ee,te]=r.useState(0),[se,ne]=r.useState(0);r.useLayoutEffect(()=>{D.current&&te(D.current.offsetWidth),L.current&&ne(L.current.offsetWidth)},[m,h,i]);const y=E=>{O(E.target.value),x&&x(E)},re=r.useId(),p=b??`${re}-textInput`,I=!!l,j=!!f,ie=!!e,oe=I||j||!!n,A=!!R,ae=!!(m||h),G=N(p,"characterCounter"),k=N(p,"tip"),q=N(p,"errorMessage"),P={id:p,errorMessage:l,hasErrorMessage:I,required:g,disabled:s,readOnly:i,tabIndex:i?-1:0,maxLength:n,value:M,defaultValue:W,"aria-required":w,"aria-describedby":Se([j?k:void 0,I?q:void 0,n&&v?G:void 0,Z]),"aria-invalid":I?!0:void 0,..._},ce={className:Q,style:U,width:Me(c,K)},de=!!(g||w);let S=null;return A?S=u(ge,{children:[o(Ce,{icon:R,iconSize:Ie(c),size:c}),o(Te,{ref:z,onChange:y,type:$,componentSize:c,hasIcon:A,...P})]}):ae&&(S=u(xe,{children:[m&&o(We,{readOnly:i,ref:D,"aria-hidden":!0,children:m}),o(T,{ref:z,onChange:y,type:$,componentSize:c,prefixLength:ee,suffixLength:se,...P}),h&&o(we,{readOnly:i,ref:L,"aria-hidden":!0,children:h})]})),u(fe,{...ce,children:[ie&&o(be,{htmlFor:p,showRequiredStyling:de,children:e}),S||o(T,{ref:z,onChange:y,type:$,componentSize:c,...P}),oe&&u(Ne,{children:[he(f,k,l,q),n&&Number.isInteger(n)&&n>0&&v&&o(ze,{id:G,current:V.length,max:n})]})]})});Re.displayName="TextInput";export{Re as T};
//# sourceMappingURL=TextInput-b44fae05.js.map
