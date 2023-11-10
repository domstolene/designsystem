import{j as F,a as k}from"./jsx-runtime-e43ccb36.js";import{r as I}from"./index-1b03fe98.js";import{s as j,i as C,d as w}from"./BaseComponentProps-b46a4458.js";import"./Caption-a006c5bc.js";import"./Heading-3ac6a2d9.js";import{L as E}from"./Label-60a960ab.js";import"./Legend-bad3d4ec.js";import"./Link-bef7f478.js";import"./Paragraph-f6678e05.js";import"./TextOverflowEllipsis-c2a9fc8f.js";import"./Typography-9d6edb9c.js";import{d as W,s as X,n as N}from"./ddsReferenceTokens-fe3c594e.js";import{O,S as P}from"./Input.styles-c3e229ec.js";import{r as R}from"./renderInputMessage-9f8878f3.js";const T=""+new URL("calendar_today-b2d13105.svg",import.meta.url).href,{iconSizes:i,spacing:r,border:y}=W,G={base:{sizes:{medium:{height:i.DdsIconsizeMedium,width:i.DdsIconsizeMedium,right:r.SizesDdsSpacingLocalX075},small:{height:i.DdsIconsizeSmall,width:i.DdsIconsizeSmall,right:r.SizesDdsSpacingLocalX075},tiny:{height:i.DdsIconsizeSmall,width:i.DdsIconsizeSmall,right:r.SizesDdsSpacingLocalX075}}},focus:{outline:`${y.BordersDdsBorderFocusInputfieldStroke} solid ${y.BordersDdsBorderFocusInputfieldStrokeWeight}`,outlineOffset:r.SizesDdsSpacingLocalX0125}},a={calendarIndicator:G},A=X(P)`
  &::-webkit-calendar-picker-indicator {
    background-image: ${`url('${T}')`};
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
`,s=I.forwardRef(({id:e,type:t="date",required:o=!1,readOnly:l=!1,disabled:S=!1,label:u,width:c,errorMessage:n,tip:p,style:v,className:D,componentSize:m="medium",max:x,"aria-required":f=!1,"aria-describedby":z,...$},L)=>{const q=I.useId(),d=e??`${q}-datepickerInput`,_=c||U(t,m),M=!!u,g=!!n,B=o||f,h=w(d,"errorMessage"),b=w(d,"tip"),V={id:d,hasErrorMessage:g,ref:L,readOnly:l,tabIndex:l?-1:0,required:o,disabled:S,componentSize:m,type:t,"aria-describedby":C([p?b:void 0,n?h:void 0,z]),"aria-required":f,"aria-invalid":g?!0:void 0,max:J(t,x),...$};return F(O,{...{width:_,style:v,className:D},children:[M&&k(E,{htmlFor:d,showRequiredStyling:!!B,children:u}),k(A,{...V}),R(p,b,n,h)]})});s.displayName="Datepicker";const H={date:{medium:"160px",small:"140px",tiny:"125px"},"datetime-local":{medium:"200px",small:"180px",tiny:"150px"}},U=(e,t)=>H[e][t],J=(e,t)=>{if(t!==void 0)return t;if(e==="datetime-local")return"9999-12-31T23:59";if(e==="date")return"9999-12-31"};try{s.displayName="Datepicker",s.__docgenInfo={description:"",displayName:"Datepicker",props:{label:{defaultValue:null,description:"Ledetekst for input.",name:"label",required:!1,type:{name:"string | undefined"}},width:{defaultValue:null,description:"Bredde for inputfeltet.",name:"width",required:!1,type:{name:"string | undefined"}},errorMessage:{defaultValue:null,description:"Feilmelding. Setter også error state.",name:"errorMessage",required:!1,type:{name:"string | undefined"}},tip:{defaultValue:null,description:"Hjelpetekst.",name:"tip",required:!1,type:{name:"string | undefined"}},componentSize:{defaultValue:{value:"medium"},description:"Størrelse på inputfeltet.",name:"componentSize",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"tiny"'},{value:'"small"'},{value:'"medium"'}]}},type:{defaultValue:{value:"date"},description:"Angi dato-input med eller uten klokkeslett.",name:"type",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"date"'},{value:'"datetime-local"'}]}}}}}catch{}export{s as D};
//# sourceMappingURL=Datepicker-4bc83e7a.js.map
