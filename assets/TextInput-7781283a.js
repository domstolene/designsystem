import{j as c,a as s}from"./jsx-runtime-e43ccb36.js";import{r as a}from"./index-1b03fe98.js";import"./Caption-956f7c23.js";import"./Heading-1a21ccc8.js";import{L as ge}from"./Label-1e45d63d.js";import"./Legend-8f4b1074.js";import"./Link-1d242339.js";import"./Paragraph-6d49c218.js";import"./TextOverflowEllipsis-5f7b5b23.js";import{T as he}from"./Typography-aec60abc.js";import{g as ye,i as xe,d as L}from"./BaseComponentProps-77dc9c6e.js";import{S as $,O as Ie,I as Se,g as be}from"./Input.styles-4ebb4961.js";import{g as _e}from"./Input.utils-1d79ab61.js";import{d as J,s as o,n as l}from"./ddsReferenceTokens-cf345c8b.js";import{r as ve}from"./renderInputMessage-6c0b2de9.js";import{g as ke}from"./icon-aa5b86b3.js";import"./libraryAdd-1d1f72ea.js";import{I as Te}from"./Icon-764411b5.js";const{colors:K,spacing:t,iconSizes:q}=J,Ne={withIcon:{medium:{paddingLeft:`${t.SizesDdsSpacingLocalX075NumberPx+q.DdsIconsizeMediumNumberPx+t.SizesDdsSpacingLocalX05NumberPx}px`},small:{paddingLeft:`${t.SizesDdsSpacingLocalX075NumberPx+q.DdsIconsizeSmallNumberPx+t.SizesDdsSpacingLocalX05NumberPx}px`},tiny:{paddingLeft:`${t.SizesDdsSpacingLocalX05NumberPx+q.DdsIconsizeSmallNumberPx+t.SizesDdsSpacingLocalX025NumberPx}px`}}},Le={border:{color:K.DdsColorNeutralsGray5}},qe={color:K.DdsColorNeutralsGray9,sizes:{medium:{top:t.SizesDdsSpacingLocalX075,left:t.SizesDdsSpacingLocalX075},small:{top:t.SizesDdsSpacingLocalX075,left:t.SizesDdsSpacingLocalX075},tiny:{top:t.SizesDdsSpacingLocalX05,left:t.SizesDdsSpacingLocalX05}}},w={input:Ne,icon:qe,affix:Le},$e=o(he)`
  margin-left: auto;
`;function z(e){const{current:r,max:i,id:u,className:f,htmlProps:m,...n}=e,g=a.useId(),S=u??`${g}-characterCounter`;return c($e,{...ye(S,f,m,n),forwardedAs:"div",typographyType:"supportingStyleHelperText01","aria-label":`${r} av ${i} tegn skrevet`,children:[r,"/",i]})}try{z.displayName="CharCounter",z.__docgenInfo={description:"",displayName:"CharCounter",props:{current:{defaultValue:null,description:"",name:"current",required:!0,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!0,type:{name:"number"}},htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:"HTMLAttributes<HTMLElement> | undefined"}}}}}catch{}const{iconSizes:U}=J,{input:ze,icon:Y}=w,C=o.div`
  display: flex;
  justify-content: space-between;
`,D=o(Te)`
  position: absolute;
  color: ${Y.color};
  ${({size:e,iconSize:r})=>l`
    left: ${Y.sizes[e].left};
    ${r==="small"?l`
          top: ${`calc(50% - ${U.DdsIconsizeSmallNumberPx/2}px)`};
        `:l`
          top: ${`calc(50% - ${U.DdsIconsizeMediumNumberPx/2}px)`};
        `}
  `}
  z-index: 1;
`,P=o($)`
  ${({componentSize:e,hasIcon:r})=>r&&e&&l`
      padding-left: ${ze.withIcon[e].paddingLeft};
    `}
`;try{C.displayName="MessageContainer",C.__docgenInfo={description:"",displayName:"MessageContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}}}catch{}try{D.displayName="StyledIcon",D.__docgenInfo={description:"",displayName:"StyledIcon",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}}}catch{}try{P.displayName="StyledInput",P.__docgenInfo={description:"",displayName:"StyledInput",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}}}catch{}const Ce="320px",De="210px",Pe=(e,r)=>r||(e==="tiny"?De:Ce),O=o.span`
  position: absolute;
  height: 100%;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  pointer-events: none;
  z-index: 1;
`,Ve=o(O)`
  left: 0;
  margin-left: 8px;
  padding-right: 8px;
  border-right: 1px solid ${w.affix.border.color};

  ${({readOnly:e})=>e&&l`
      margin-left: 0;
      padding-right: 0.5ch;
      border-right: none;
    `};
`,we=o(O)`
  right: 0;
  margin-right: 8px;
  padding-left: 8px;
  border-left: 1px solid ${w.affix.border.color};

  ${({readOnly:e})=>e&&l`
      margin-right: 0;
      padding-left: 0.5ch;
      border-left: none;
    `};
`,V=a.forwardRef(({label:e,disabled:r,readOnly:i,errorMessage:u,tip:f,required:m,maxLength:n,onChange:g,id:S,width:Q,componentSize:d="medium",type:b="text",withCharacterCounter:M=!0,className:Z,style:ee,value:W,defaultValue:X,"aria-required":A,"aria-describedby":te,icon:E,prefix:h,suffix:y,...re},_)=>{const[ne,ae]=a.useState(_e(W,X)),v=a.useRef(null),k=a.useRef(null),[ie,se]=a.useState(0),[oe,de]=a.useState(0);a.useLayoutEffect(()=>{v.current&&se(v.current.offsetWidth),k.current&&de(k.current.offsetWidth)},[h,y,i]);const T=G=>{ae(G.target.value),g&&g(G)},le=a.useId(),p=S??`${le}-textInput`,x=!!u,j=!!f,ue=!!e,pe=x||j||!!n,H=!!E,ce=!!(h??y),B=L(p,"characterCounter"),F=L(p,"tip"),R=L(p,"errorMessage"),N={id:p,errorMessage:u,hasErrorMessage:x,required:m,disabled:r,readOnly:i,tabIndex:i?-1:0,maxLength:n,value:W,defaultValue:X,"aria-required":A,"aria-describedby":xe([j?F:void 0,x?R:void 0,n&&M?B:void 0,te]),"aria-invalid":x?!0:void 0,...re},fe={className:Z,style:ee,width:Pe(d,Q)},me=!!(m||A);let I=null;return H?I=c(Se,{children:[s(D,{icon:E,iconSize:ke(d),size:d}),s(P,{ref:_,onChange:T,type:b,componentSize:d,hasIcon:H,...N})]}):ce&&(I=c(be,{children:[h&&s(Ve,{readOnly:i,ref:v,"aria-hidden":!0,children:h}),s($,{ref:_,onChange:T,type:b,componentSize:d,prefixLength:ie,suffixLength:oe,...N}),y&&s(we,{readOnly:i,ref:k,"aria-hidden":!0,children:y})]})),c(Ie,{...fe,children:[ue&&s(ge,{htmlFor:p,showRequiredStyling:me,children:e}),I||s($,{ref:_,onChange:T,type:b,componentSize:d,...N}),pe&&c(C,{children:[ve(f,F,u,R),n&&Number.isInteger(n)&&n>0&&M&&s(z,{id:B,current:ne.length,max:n})]})]})});V.displayName="TextInput";try{V.displayName="TextInput",V.__docgenInfo={description:"",displayName:"TextInput",props:{label:{defaultValue:null,description:"Ledetekst for input.",name:"label",required:!1,type:{name:"string | undefined"}},width:{defaultValue:null,description:"Bredde for inputfeltet.",name:"width",required:!1,type:{name:"string | undefined"}},tip:{defaultValue:null,description:"Hjelpetekst.",name:"tip",required:!1,type:{name:"string | undefined"}},errorMessage:{defaultValue:null,description:"Feilmelding. Setter også error state.",name:"errorMessage",required:!1,type:{name:"string | undefined"}},componentSize:{defaultValue:{value:"medium"},description:"Størrelse på inputfeltet.",name:"componentSize",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"tiny"'},{value:'"small"'},{value:'"medium"'}]}},prefix:{defaultValue:null,description:`Prefiks som vises før inputfeltet.
OBS! Prefiks leses ikke av skjermleser og skal derfor ikke brukes som en erstatter
for en beskrivende label.`,name:"prefix",required:!1,type:{name:"string | undefined"}},withCharacterCounter:{defaultValue:{value:"true"},description:"Spesifiserer om tegntelleren skal vises ved bruk av `maxLength` attributt.",name:"withCharacterCounter",required:!1,type:{name:"boolean | undefined"}},icon:{defaultValue:null,description:"Ikonet som vises i komponenten.",name:"icon",required:!1,type:{name:"SvgIcon | undefined"}},suffix:{defaultValue:null,description:`Suffiks som vises etter inputfeltet.
OBS! Suffiks leses ikke av skjermleser og skal derfor ikke brukes som en erstatter
for en beskrivende label.`,name:"suffix",required:!1,type:{name:"string | undefined"}}}}}catch{}export{V as T};
//# sourceMappingURL=TextInput-7781283a.js.map
