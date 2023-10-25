import{j as F,a as k}from"./jsx-runtime-e43ccb36.js";import{r as I}from"./index-1b03fe98.js";import{s as j,i as C,d as w}from"./BaseComponentProps-b6ad9f7d.js";import"./Caption-d810b87c.js";import"./Heading-0c5437bc.js";import{L as E}from"./Label-05114518.js";import"./Legend-9969638c.js";import"./Link-c264ab95.js";import"./Paragraph-88055bd8.js";import"./TextOverflowEllipsis-6cc9a60a.js";import"./Typography-d13ef156.js";import{d as W,s as X,n as N}from"./ddsReferenceTokens-a28ebf03.js";import{O,S as P}from"./Input.styles-97d4f19a.js";import{r as T}from"./renderInputMessage-4f5fcc5d.js";const G=""+new URL("calendar_today-b2d13105.svg",import.meta.url).href,{iconSizes:i,spacing:r,border:y}=W,R={base:{sizes:{medium:{height:i.DdsIconsizeMedium,width:i.DdsIconsizeMedium,right:r.SizesDdsSpacingLocalX075},small:{height:i.DdsIconsizeSmall,width:i.DdsIconsizeSmall,right:r.SizesDdsSpacingLocalX075},tiny:{height:i.DdsIconsizeSmall,width:i.DdsIconsizeSmall,right:r.SizesDdsSpacingLocalX075}}},focus:{outline:`${y.BordersDdsBorderFocusInputfieldStroke} solid ${y.BordersDdsBorderFocusInputfieldStrokeWeight}`,outlineOffset:r.SizesDdsSpacingLocalX0125}},a={calendarIndicator:R},A=X(P)`
  &::-webkit-calendar-picker-indicator {
    background-image: ${`url('${G}')`};
    position: absolute;
    ${({componentSize:e})=>e&&N`
        right: ${a.calendarIndicator.base.sizes[e].right};
        height: ${a.calendarIndicator.base.sizes[e].height};
        width: ${a.calendarIndicator.base.sizes[e].width};
      `}
    margin-left: 0px;
    padding: 0;
    top: 50%;
    transform: translate(0, -50%);
    box-sizing: border-box;
  }

  &::-webkit-datetime-edit-fields-wrapper {
    padding: 0;
  }

  &::-webkit-calendar-picker-indicator:focus-visible {
    outline: ${a.calendarIndicator.focus.outline};
    outline-offset: ${a.calendarIndicator.focus.outlineOffset};
  }

  &::-webkit-inner-spin-button {
    display: none;
  }

  @media (prefers-reduced-motion: no-preference) {
    ::-webkit-datetime-edit-day-field,
    ::-webkit-datetime-edit-month-field,
    ::-webkit-datetime-edit-year-field,
    ::-webkit-datetime-edit-hour-field,
    ::-webkit-datetime-edit-minute-field {
      transition: 0.2s;
    }
  }

  &::-webkit-datetime-edit-day-field:focus,
  &::-webkit-datetime-edit-month-field:focus,
  &::-webkit-datetime-edit-year-field:focus,
  &::-webkit-datetime-edit-hour-field:focus,
  &::-webkit-datetime-edit-minute-field:focus {
    ${j}
  }
`,s=I.forwardRef(({id:e,type:t="date",required:o,readOnly:l,disabled:v,label:u,width:c,errorMessage:n,tip:p,style:S,className:D,componentSize:m="medium",max:x,"aria-required":f,"aria-describedby":z,...$},L)=>{const _=I.useId(),d=e??`${_}-datepickerInput`,q=c||U(t,m),M=!!u,g=!!n,B=!!(o||f),h=w(d,"errorMessage"),b=w(d,"tip"),V={id:d,hasErrorMessage:g,ref:L,readOnly:l,tabIndex:l?-1:0,required:o,disabled:v,componentSize:m,type:t,"aria-describedby":C([p?b:void 0,n?h:void 0,z]),"aria-required":f,"aria-invalid":g?!0:void 0,max:J(t,x),...$};return F(O,{...{width:q,style:S,className:D},children:[M&&k(E,{htmlFor:d,showRequiredStyling:B,children:u}),k(A,{...V}),T(p,b,n,h)]})});s.displayName="Datepicker";const H={date:{medium:"160px",small:"140px",tiny:"125px"},"datetime-local":{medium:"200px",small:"180px",tiny:"150px"}},U=(e,t)=>H[e][t],J=(e,t)=>{if(t!==void 0)return t;if(e==="datetime-local")return"9999-12-31T23:59";if(e==="date")return"9999-12-31"};try{s.displayName="Datepicker",s.__docgenInfo={description:"",displayName:"Datepicker",props:{label:{defaultValue:null,description:"Ledetekst for input.",name:"label",required:!1,type:{name:"string | undefined"}},width:{defaultValue:null,description:"Bredde for inputfeltet.",name:"width",required:!1,type:{name:"string | undefined"}},errorMessage:{defaultValue:null,description:"Feilmelding. Setter også error state.",name:"errorMessage",required:!1,type:{name:"string | undefined"}},tip:{defaultValue:null,description:"Hjelpetekst.",name:"tip",required:!1,type:{name:"string | undefined"}},componentSize:{defaultValue:{value:"medium"},description:"Størrelse på inputfeltet.",name:"componentSize",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"tiny"'},{value:'"small"'},{value:'"medium"'}]}},type:{defaultValue:{value:"date"},description:"Angi dato-input med eller uten klokkeslett.",name:"type",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"date"'},{value:'"datetime-local"'}]}}}}}catch{}export{s as D};
//# sourceMappingURL=Datepicker-d9c0fffc.js.map
