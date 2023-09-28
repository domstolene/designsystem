import{d as E,s as F,A as j,j as C,a as k}from"./ddsReferenceTokens-647ce456.js";import{r as I}from"./index-ebeaab24.js";import{s as W,i as X,d as w}from"./BaseComponentProps-a100791d.js";import"./Caption-5c254d72.js";import"./Heading-dc72d0b9.js";import{L as A}from"./Label-23c96940.js";import"./Legend-dbc3ced6.js";import"./Link-9aff7843.js";import"./Paragraph-3340e0ea.js";import"./TextOverflowEllipsis-e3546c5b.js";import"./Typography-1747463b.js";import{O as N,S as O}from"./Input.styles-711330f2.js";import{r as P}from"./renderInputMessage-b6a682b1.js";const R=""+new URL("calendar_today-b2d13105.svg",import.meta.url).href,{iconSizes:i,spacing:r,border:y}=E,T={base:{sizes:{medium:{height:i.DdsIconsizeMedium,width:i.DdsIconsizeMedium,right:r.SizesDdsSpacingLocalX075},small:{height:i.DdsIconsizeSmall,width:i.DdsIconsizeSmall,right:r.SizesDdsSpacingLocalX075},tiny:{height:i.DdsIconsizeSmall,width:i.DdsIconsizeSmall,right:r.SizesDdsSpacingLocalX075}}},focus:{outline:`${y.BordersDdsBorderFocusInputfieldStroke} solid ${y.BordersDdsBorderFocusInputfieldStrokeWeight}`,outlineOffset:r.SizesDdsSpacingLocalX0125}},a={calendarIndicator:T},G=F(O)`
  &::-webkit-calendar-picker-indicator {
    // Ensure double quotes in url due to svg data URI in image bundle that requires them, as the attributes use single quotes
    background-image: ${`url("${R}")`};
    position: absolute;
    ${({componentSize:e})=>e&&j`
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
`,n=I.forwardRef(({id:e,type:t="date",required:o,readOnly:l,disabled:v,label:u,width:c,errorMessage:s,tip:p,style:S,className:D,componentSize:m="medium",max:x,"aria-required":f,"aria-describedby":z,...$},q)=>{const L=I.useId(),d=e??`${L}-datepickerInput`,_=c||H(t,m),M=!!u,g=!!s,B=!!(o||f),h=w(d,"errorMessage"),b=w(d,"tip"),V={id:d,hasErrorMessage:g,ref:q,readOnly:l,tabIndex:l?-1:0,required:o,disabled:v,componentSize:m,type:t,"aria-describedby":X([p?b:void 0,s?h:void 0,z]),"aria-required":f,"aria-invalid":g?!0:void 0,max:J(t,x),...$};return C(N,{...{width:_,style:S,className:D},children:[M&&k(A,{htmlFor:d,showRequiredStyling:B,children:u}),k(G,{...V}),P(p,b,s,h)]})});n.displayName="Datepicker";const U={date:{medium:"160px",small:"140px",tiny:"125px"},["datetime-local"]:{medium:"200px",small:"180px",tiny:"150px"}},H=(e,t)=>U[e][t],J=(e,t)=>{if(t!==void 0)return t;if(e==="datetime-local")return"9999-12-31T23:59";if(e==="date")return"9999-12-31"};try{n.displayName="Datepicker",n.__docgenInfo={description:"",displayName:"Datepicker",props:{width:{defaultValue:null,description:"Bredde for inputfeltet.",name:"width",required:!1,type:{name:"string | undefined"}},label:{defaultValue:null,description:"Ledetekst for input.",name:"label",required:!1,type:{name:"string | undefined"}},componentSize:{defaultValue:{value:"medium"},description:"Størrelse på inputfeltet.",name:"componentSize",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"tiny"'},{value:'"small"'},{value:'"medium"'}]}},errorMessage:{defaultValue:null,description:"Feilmelding. Setter også error state.",name:"errorMessage",required:!1,type:{name:"string | undefined"}},tip:{defaultValue:null,description:"Hjelpetekst.",name:"tip",required:!1,type:{name:"string | undefined"}},type:{defaultValue:{value:"date"},description:"Angi dato-input med eller uten klokkeslett.",name:"type",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"date"'},{value:'"datetime-local"'}]}}}}}catch{}export{n as D};
//# sourceMappingURL=Datepicker-63ab881c.js.map
