import{j as c,a as s}from"./jsx-runtime-e43ccb36.js";import{r as i}from"./index-1b03fe98.js";import"./Caption-6d408196.js";import"./Heading-5f7faa2b.js";import{L as ge}from"./Label-9dee7f37.js";import"./Legend-41f9f05c.js";import"./Link-1567bf4e.js";import"./Paragraph-998f64b8.js";import"./TextOverflowEllipsis-1edb8626.js";import{T as he}from"./Typography-e857479c.js";import{g as ye,i as Se,d as N}from"./BaseComponentProps-9c025471.js";import{S as C,O as xe,I as Ie,g as be}from"./Input.styles-3d1af983.js";import{g as ve}from"./Input.utils-1d79ab61.js";import{d as J,s as o,A as u}from"./ddsReferenceTokens-f9f5a4e4.js";import{r as _e}from"./renderInputMessage-949171ed.js";import{g as ke}from"./icon-aa5b86b3.js";import"./libraryAdd-9af098d3.js";import{I as Le}from"./Icon-a656622e.js";const{colors:K,spacing:t,iconSizes:q}=J,ze={withIcon:{medium:{paddingLeft:`${t.SizesDdsSpacingLocalX075NumberPx+q.DdsIconsizeMediumNumberPx+t.SizesDdsSpacingLocalX05NumberPx}px`},small:{paddingLeft:`${t.SizesDdsSpacingLocalX075NumberPx+q.DdsIconsizeSmallNumberPx+t.SizesDdsSpacingLocalX05NumberPx}px`},tiny:{paddingLeft:`${t.SizesDdsSpacingLocalX05NumberPx+q.DdsIconsizeSmallNumberPx+t.SizesDdsSpacingLocalX025NumberPx}px`}}},Ne={border:{color:K.DdsColorNeutralsGray5}},qe={color:K.DdsColorNeutralsGray9,sizes:{medium:{top:t.SizesDdsSpacingLocalX075,left:t.SizesDdsSpacingLocalX075},small:{top:t.SizesDdsSpacingLocalX075,left:t.SizesDdsSpacingLocalX075},tiny:{top:t.SizesDdsSpacingLocalX05,left:t.SizesDdsSpacingLocalX05}}},E={input:ze,icon:qe,affix:Ne},Ce=o(he)`
  margin-left: auto;
`;function $(e){const{current:n,max:a,id:d,className:m,htmlProps:f,...r}=e,g=i.useId(),I=d??`${g}-characterCounter`;return c(Ce,{...ye(I,m,f,r),forwardedAs:"div",typographyType:"supportingStyleHelperText01","aria-label":`${n} av ${a} tegn skrevet`,children:[n,"/",a]})}try{$.displayName="CharCounter",$.__docgenInfo={description:"",displayName:"CharCounter",props:{current:{defaultValue:null,description:"",name:"current",required:!0,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!0,type:{name:"number"}},htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:"HTMLAttributes<HTMLElement> | undefined"}}}}}catch{}const{iconSizes:U}=J,{input:$e,icon:Y}=E,P=o.div`
  display: flex;
  justify-content: space-between;
`,V=o(Le)`
  position: absolute;
  color: ${Y.color};
  ${({size:e,iconSize:n})=>u`
    left: ${Y.sizes[e].left};
    ${n==="small"?u`
          top: ${`calc(50% - ${U.DdsIconsizeSmallNumberPx/2}px)`};
        `:u`
          top: ${`calc(50% - ${U.DdsIconsizeMediumNumberPx/2}px)`};
        `}
  `}
  z-index: 1;
`,T=o(C)`
  ${({componentSize:e,hasIcon:n})=>n&&e&&u`
      padding-left: ${$e.withIcon[e].paddingLeft};
    `}
`;try{P.displayName="MessageContainer",P.__docgenInfo={description:"",displayName:"MessageContainer",props:{}}}catch{}try{V.displayName="StyledIcon",V.__docgenInfo={description:"",displayName:"StyledIcon",props:{htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:"HTMLAttributes<SVGSVGElement> | undefined"}},color:{defaultValue:null,description:"Fargen på ikonet.",name:"color",required:!1,type:{name:"Color | undefined"}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"tiny"'},{value:'"small"'},{value:'"medium"'}]}},icon:{defaultValue:null,description:"Ikonet importert fra `@norges-domstoler/dds-components`.",name:"icon",required:!0,type:{name:"SvgIcon"}},iconSize:{defaultValue:null,description:"Størrelsen på ikonet.",name:"iconSize",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"inherit"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}}}}}catch{}try{T.displayName="StyledInput",T.__docgenInfo={description:"",displayName:"StyledInput",props:{componentSize:{defaultValue:null,description:"Størrelse på inputfeltet.",name:"componentSize",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"tiny"'},{value:'"small"'},{value:'"medium"'}]}},prefixLength:{defaultValue:null,description:"",name:"prefixLength",required:!1,type:{name:"number | undefined"}},suffixLength:{defaultValue:null,description:"",name:"suffixLength",required:!1,type:{name:"number | undefined"}},hasErrorMessage:{defaultValue:null,description:"",name:"hasErrorMessage",required:!0,type:{name:"boolean"}},hasIcon:{defaultValue:null,description:"",name:"hasIcon",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const Pe="320px",Ve="210px",Te=(e,n)=>n||(e==="tiny"?Ve:Pe),O=o.span`
  position: absolute;
  height: 100%;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  pointer-events: none;
  z-index: 1;
`,De=o(O)`
  left: 0;
  margin-left: 8px;
  padding-right: 8px;
  border-right: 1px solid ${E.affix.border.color};

  ${({readOnly:e})=>e&&u`
      margin-left: 0;
      padding-right: 0.5ch;
      border-right: none;
    `};
`,Ee=o(O)`
  right: 0;
  margin-right: 8px;
  padding-left: 8px;
  border-left: 1px solid ${E.affix.border.color};

  ${({readOnly:e})=>e&&u`
      margin-right: 0;
      padding-left: 0.5ch;
      border-left: none;
    `};
`,D=i.forwardRef(({label:e,disabled:n,readOnly:a,errorMessage:d,tip:m,required:f,maxLength:r,onChange:g,id:I,width:Q,componentSize:l="medium",type:b="text",withCharacterCounter:M=!0,className:Z,style:ee,value:X,defaultValue:w,"aria-required":H,"aria-describedby":te,icon:A,prefix:h,suffix:y,...ne},v)=>{const[re,ie]=i.useState(ve(X,w)),_=i.useRef(null),k=i.useRef(null),[ae,se]=i.useState(0),[oe,le]=i.useState(0);i.useLayoutEffect(()=>{_.current&&se(_.current.offsetWidth),k.current&&le(k.current.offsetWidth)},[h,y,a]);const L=R=>{ie(R.target.value),g&&g(R)},ue=i.useId(),p=I??`${ue}-textInput`,S=!!d,F=!!m,de=!!e,pe=S||F||!!r,j=!!A,ce=!!(h||y),G=N(p,"characterCounter"),W=N(p,"tip"),B=N(p,"errorMessage"),z={id:p,errorMessage:d,hasErrorMessage:S,required:f,disabled:n,readOnly:a,tabIndex:a?-1:0,maxLength:r,value:X,defaultValue:w,"aria-required":H,"aria-describedby":Se([F?W:void 0,S?B:void 0,r&&M?G:void 0,te]),"aria-invalid":S?!0:void 0,...ne},me={className:Z,style:ee,width:Te(l,Q)},fe=!!(f||H);let x=null;return j?x=c(Ie,{children:[s(V,{icon:A,iconSize:ke(l),size:l}),s(T,{ref:v,onChange:L,type:b,componentSize:l,hasIcon:j,...z})]}):ce&&(x=c(be,{children:[h&&s(De,{readOnly:a,ref:_,"aria-hidden":!0,children:h}),s(C,{ref:v,onChange:L,type:b,componentSize:l,prefixLength:ae,suffixLength:oe,...z}),y&&s(Ee,{readOnly:a,ref:k,"aria-hidden":!0,children:y})]})),c(xe,{...me,children:[de&&s(ge,{htmlFor:p,showRequiredStyling:fe,children:e}),x||s(C,{ref:v,onChange:L,type:b,componentSize:l,...z}),pe&&c(P,{children:[_e(m,W,d,B),r&&Number.isInteger(r)&&r>0&&M&&s($,{id:G,current:re.length,max:r})]})]})});D.displayName="TextInput";try{D.displayName="TextInput",D.__docgenInfo={description:"",displayName:"TextInput",props:{label:{defaultValue:null,description:"Ledetekst for input.",name:"label",required:!1,type:{name:"string | undefined"}},width:{defaultValue:null,description:"Bredde for inputfeltet.",name:"width",required:!1,type:{name:"string | undefined"}},tip:{defaultValue:null,description:"Hjelpetekst.",name:"tip",required:!1,type:{name:"string | undefined"}},errorMessage:{defaultValue:null,description:"Feilmelding. Setter også error state.",name:"errorMessage",required:!1,type:{name:"string | undefined"}},componentSize:{defaultValue:{value:"medium"},description:"Størrelse på inputfeltet.",name:"componentSize",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"tiny"'},{value:'"small"'},{value:'"medium"'}]}},prefix:{defaultValue:null,description:`Prefiks som vises før inputfeltet.
OBS! Prefiks leses ikke av skjermleser og skal derfor ikke brukes som en erstatter
for en beskrivende label.`,name:"prefix",required:!1,type:{name:"string | undefined"}},withCharacterCounter:{defaultValue:{value:"true"},description:"Spesifiserer om tegntelleren skal vises ved bruk av `maxLength` attributt.",name:"withCharacterCounter",required:!1,type:{name:"boolean | undefined"}},icon:{defaultValue:null,description:"Ikonet som vises i komponenten.",name:"icon",required:!1,type:{name:"SvgIcon | undefined"}},suffix:{defaultValue:null,description:`Suffiks som vises etter inputfeltet.
OBS! Suffiks leses ikke av skjermleser og skal derfor ikke brukes som en erstatter
for en beskrivende label.`,name:"suffix",required:!1,type:{name:"string | undefined"}}}}}catch{}export{D as T};
//# sourceMappingURL=TextInput-1e8f7550.js.map
