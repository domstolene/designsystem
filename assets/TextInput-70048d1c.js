import{j as c,a}from"./jsx-runtime-e43ccb36.js";import{r as s}from"./index-1b03fe98.js";import"./Caption-d810b87c.js";import"./Heading-0c5437bc.js";import{L as ge}from"./Label-05114518.js";import"./Legend-9969638c.js";import"./Link-c264ab95.js";import"./Paragraph-88055bd8.js";import"./TextOverflowEllipsis-6cc9a60a.js";import{T as he}from"./Typography-d13ef156.js";import{g as xe,i as ye,d as $}from"./BaseComponentProps-b6ad9f7d.js";import{S as C,O as Ie,I as Se,g as be}from"./Input.styles-6b8ed75e.js";import{g as _e}from"./Input.utils-1d79ab61.js";import{d as J,s as o,n as l}from"./ddsReferenceTokens-a28ebf03.js";import{r as ve}from"./renderInputMessage-71ef93cb.js";import{g as ke}from"./icon-aa5b86b3.js";import"./libraryAdd-b73abf91.js";import{I as Ne}from"./Icon-6ccf1bbc.js";const{colors:K,spacing:t,iconSizes:z}=J,Le={withIcon:{medium:{paddingLeft:`${t.SizesDdsSpacingLocalX075NumberPx+z.DdsIconsizeMediumNumberPx+t.SizesDdsSpacingLocalX05NumberPx}px`},small:{paddingLeft:`${t.SizesDdsSpacingLocalX075NumberPx+z.DdsIconsizeSmallNumberPx+t.SizesDdsSpacingLocalX05NumberPx}px`},tiny:{paddingLeft:`${t.SizesDdsSpacingLocalX05NumberPx+z.DdsIconsizeSmallNumberPx+t.SizesDdsSpacingLocalX025NumberPx}px`}}},$e={border:{color:K.DdsColorNeutralsGray5}},ze={color:K.DdsColorNeutralsGray9,sizes:{medium:{top:t.SizesDdsSpacingLocalX075,left:t.SizesDdsSpacingLocalX075},small:{top:t.SizesDdsSpacingLocalX075,left:t.SizesDdsSpacingLocalX075},tiny:{top:t.SizesDdsSpacingLocalX05,left:t.SizesDdsSpacingLocalX05}}},X={input:Le,icon:ze,affix:$e},Ce=o(he)`
  margin-left: auto;
`;function P(e){const{current:r,max:i,id:u,className:f,htmlProps:m,...n}=e,g=s.useId(),S=u??`${g}-characterCounter`;return c(Ce,{...xe(S,f,m,n),forwardedAs:"div",typographyType:"supportingStyleHelperText01","aria-label":`${r} av ${i} tegn skrevet`,children:[r,"/",i]})}try{P.displayName="CharCounter",P.__docgenInfo={description:"",displayName:"CharCounter",props:{current:{defaultValue:null,description:"",name:"current",required:!0,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!0,type:{name:"number"}},htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:"HTMLAttributes<HTMLElement> | undefined"}}}}}catch{}const{iconSizes:U}=J,{input:Pe,icon:Y}=X,D=o.div`
  display: flex;
  justify-content: space-between;
`,T=o(Ne)`
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
`,q=o(C)`
  ${({componentSize:e,hasIcon:r})=>r&&e&&l`
      padding-left: ${Pe.withIcon[e].paddingLeft};
    `}
`;try{D.displayName="MessageContainer",D.__docgenInfo={description:"",displayName:"MessageContainer",props:{}}}catch{}try{T.displayName="StyledIcon",T.__docgenInfo={description:"",displayName:"StyledIcon",props:{}}}catch{}try{q.displayName="StyledInput",q.__docgenInfo={description:"",displayName:"StyledInput",props:{}}}catch{}const De="320px",Te="210px",qe=(e,r)=>r||(e==="tiny"?Te:De),O=o.span`
  position: absolute;
  height: 100%;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  pointer-events: none;
  z-index: 1;
`,Me=o(O)`
  left: 0;
  margin-left: 8px;
  padding-right: 8px;
  border-right: 1px solid ${X.affix.border.color};

  ${({readOnly:e})=>e&&l`
      margin-left: 0;
      padding-right: 0.5ch;
      border-right: none;
    `};
`,Xe=o(O)`
  right: 0;
  margin-right: 8px;
  padding-left: 8px;
  border-left: 1px solid ${X.affix.border.color};

  ${({readOnly:e})=>e&&l`
      margin-right: 0;
      padding-left: 0.5ch;
      border-left: none;
    `};
`,M=s.forwardRef(({label:e,disabled:r,readOnly:i,errorMessage:u,tip:f,required:m,maxLength:n,onChange:g,id:S,width:Q,componentSize:d="medium",type:b="text",withCharacterCounter:V=!0,className:Z,style:ee,value:E,defaultValue:w,"aria-required":j,"aria-describedby":te,icon:H,prefix:h,suffix:x,...re},_)=>{const[ne,se]=s.useState(_e(E,w)),v=s.useRef(null),k=s.useRef(null),[ie,ae]=s.useState(0),[oe,de]=s.useState(0);s.useLayoutEffect(()=>{v.current&&ae(v.current.offsetWidth),k.current&&de(k.current.offsetWidth)},[h,x,i]);const N=G=>{se(G.target.value),g&&g(G)},le=s.useId(),p=S??`${le}-textInput`,y=!!u,W=!!f,ue=!!e,pe=y||W||!!n,A=!!H,ce=!!(h||x),B=$(p,"characterCounter"),F=$(p,"tip"),R=$(p,"errorMessage"),L={id:p,errorMessage:u,hasErrorMessage:y,required:m,disabled:r,readOnly:i,tabIndex:i?-1:0,maxLength:n,value:E,defaultValue:w,"aria-required":j,"aria-describedby":ye([W?F:void 0,y?R:void 0,n&&V?B:void 0,te]),"aria-invalid":y?!0:void 0,...re},fe={className:Z,style:ee,width:qe(d,Q)},me=!!(m||j);let I=null;return A?I=c(Se,{children:[a(T,{icon:H,iconSize:ke(d),size:d}),a(q,{ref:_,onChange:N,type:b,componentSize:d,hasIcon:A,...L})]}):ce&&(I=c(be,{children:[h&&a(Me,{readOnly:i,ref:v,"aria-hidden":!0,children:h}),a(C,{ref:_,onChange:N,type:b,componentSize:d,prefixLength:ie,suffixLength:oe,...L}),x&&a(Xe,{readOnly:i,ref:k,"aria-hidden":!0,children:x})]})),c(Ie,{...fe,children:[ue&&a(ge,{htmlFor:p,showRequiredStyling:me,children:e}),I||a(C,{ref:_,onChange:N,type:b,componentSize:d,...L}),pe&&c(D,{children:[ve(f,F,u,R),n&&Number.isInteger(n)&&n>0&&V&&a(P,{id:B,current:ne.length,max:n})]})]})});M.displayName="TextInput";try{M.displayName="TextInput",M.__docgenInfo={description:"",displayName:"TextInput",props:{label:{defaultValue:null,description:"Ledetekst for input.",name:"label",required:!1,type:{name:"string | undefined"}},width:{defaultValue:null,description:"Bredde for inputfeltet.",name:"width",required:!1,type:{name:"string | undefined"}},tip:{defaultValue:null,description:"Hjelpetekst.",name:"tip",required:!1,type:{name:"string | undefined"}},errorMessage:{defaultValue:null,description:"Feilmelding. Setter også error state.",name:"errorMessage",required:!1,type:{name:"string | undefined"}},componentSize:{defaultValue:{value:"medium"},description:"Størrelse på inputfeltet.",name:"componentSize",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"tiny"'},{value:'"small"'},{value:'"medium"'}]}},prefix:{defaultValue:null,description:`Prefiks som vises før inputfeltet.
OBS! Prefiks leses ikke av skjermleser og skal derfor ikke brukes som en erstatter
for en beskrivende label.`,name:"prefix",required:!1,type:{name:"string | undefined"}},withCharacterCounter:{defaultValue:{value:"true"},description:"Spesifiserer om tegntelleren skal vises ved bruk av `maxLength` attributt.",name:"withCharacterCounter",required:!1,type:{name:"boolean | undefined"}},icon:{defaultValue:null,description:"Ikonet som vises i komponenten.",name:"icon",required:!1,type:{name:"SvgIcon | undefined"}},suffix:{defaultValue:null,description:`Suffiks som vises etter inputfeltet.
OBS! Suffiks leses ikke av skjermleser og skal derfor ikke brukes som en erstatter
for en beskrivende label.`,name:"suffix",required:!1,type:{name:"string | undefined"}}}}}catch{}export{M as T};
//# sourceMappingURL=TextInput-70048d1c.js.map
