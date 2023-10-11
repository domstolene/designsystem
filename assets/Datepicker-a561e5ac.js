import{d as F,s as j,A as C,j as E,a as k}from"./ddsReferenceTokens-ceb64027.js";import{r as I}from"./index-1b03fe98.js";import{s as W,i as X,d as w}from"./BaseComponentProps-d435d0d0.js";import"./Caption-d066edab.js";import"./Heading-d8600f49.js";import{L as A}from"./Label-10c93eb5.js";import"./Legend-0cba57ca.js";import"./Link-7a88da71.js";import"./Paragraph-5ad16720.js";import"./TextOverflowEllipsis-e584ab25.js";import"./Typography-56baa34a.js";import{O as N,S as O}from"./Input.styles-82cfcbdb.js";import{r as P}from"./renderInputMessage-f9f6fa34.js";const T=""+new URL("calendar_today-b2d13105.svg",import.meta.url).href,{iconSizes:i,spacing:r,border:y}=F,G={base:{sizes:{medium:{height:i.DdsIconsizeMedium,width:i.DdsIconsizeMedium,right:r.SizesDdsSpacingLocalX075},small:{height:i.DdsIconsizeSmall,width:i.DdsIconsizeSmall,right:r.SizesDdsSpacingLocalX075},tiny:{height:i.DdsIconsizeSmall,width:i.DdsIconsizeSmall,right:r.SizesDdsSpacingLocalX075}}},focus:{outline:`${y.BordersDdsBorderFocusInputfieldStroke} solid ${y.BordersDdsBorderFocusInputfieldStrokeWeight}`,outlineOffset:r.SizesDdsSpacingLocalX0125}},a={calendarIndicator:G},R=j(O)`
  &::-webkit-calendar-picker-indicator {
    background-image: ${`url('${T}')`};
    position: absolute;
    ${({componentSize:e})=>e&&C`
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
    ${W}
  }
`,s=I.forwardRef(({id:e,type:t="date",required:o,readOnly:l,disabled:v,label:u,width:c,errorMessage:n,tip:p,style:S,className:D,componentSize:m="medium",max:x,"aria-required":f,"aria-describedby":z,...$},L)=>{const _=I.useId(),d=e??`${_}-datepickerInput`,q=c||U(t,m),M=!!u,g=!!n,B=!!(o||f),h=w(d,"errorMessage"),b=w(d,"tip"),V={id:d,hasErrorMessage:g,ref:L,readOnly:l,tabIndex:l?-1:0,required:o,disabled:v,componentSize:m,type:t,"aria-describedby":X([p?b:void 0,n?h:void 0,z]),"aria-required":f,"aria-invalid":g?!0:void 0,max:J(t,x),...$};return E(N,{...{width:q,style:S,className:D},children:[M&&k(A,{htmlFor:d,showRequiredStyling:B,children:u}),k(R,{...V}),P(p,b,n,h)]})});s.displayName="Datepicker";const H={date:{medium:"160px",small:"140px",tiny:"125px"},"datetime-local":{medium:"200px",small:"180px",tiny:"150px"}},U=(e,t)=>H[e][t],J=(e,t)=>{if(t!==void 0)return t;if(e==="datetime-local")return"9999-12-31T23:59";if(e==="date")return"9999-12-31"};try{s.displayName="Datepicker",s.__docgenInfo={description:"",displayName:"Datepicker",props:{label:{defaultValue:null,description:"Ledetekst for input.",name:"label",required:!1,type:{name:"string | undefined"}},width:{defaultValue:null,description:"Bredde for inputfeltet.",name:"width",required:!1,type:{name:"string | undefined"}},errorMessage:{defaultValue:null,description:"Feilmelding. Setter også error state.",name:"errorMessage",required:!1,type:{name:"string | undefined"}},tip:{defaultValue:null,description:"Hjelpetekst.",name:"tip",required:!1,type:{name:"string | undefined"}},componentSize:{defaultValue:{value:"medium"},description:"Størrelse på inputfeltet.",name:"componentSize",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"tiny"'},{value:'"small"'},{value:'"medium"'}]}},type:{defaultValue:{value:"date"},description:"Angi dato-input med eller uten klokkeslett.",name:"type",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"date"'},{value:'"datetime-local"'}]}}}}}catch{}export{s as D};
//# sourceMappingURL=Datepicker-a561e5ac.js.map
