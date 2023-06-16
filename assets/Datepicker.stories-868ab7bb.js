import{d as ce,s as pe,A as me,a as k,j as e}from"./focus-visible-c2e9b88d.js";import{R as l}from"./storybook-components-c9cbefc3.js";import{r as T}from"./index-ebeaab24.js";import{O as be,S as ue}from"./Input.styles-0a1e38a8.js";import{L as ye}from"./Label-ec3ecd5b.js";import{s as ke}from"./selection-fae9d0a8.js";import{s as De,d as O}from"./idGenerator-c29473b2.js";import{r as ge}from"./Input.utils-f888acf1.js";const Se=""+new URL("calendar_today-b2d13105.svg",import.meta.url).href,{iconSizes:r,spacing:y,border:M}=ce,fe={base:{sizes:{medium:{height:r.DdsIconsizeMedium,width:r.DdsIconsizeMedium,right:y.SizesDdsSpacingLocalX075},small:{height:r.DdsIconsizeSmall,width:r.DdsIconsizeSmall,right:y.SizesDdsSpacingLocalX075},tiny:{height:r.DdsIconsizeSmall,width:r.DdsIconsizeSmall,right:y.SizesDdsSpacingLocalX075}}},focus:{outline:`${M.BordersDdsBorderFocusInputfieldStroke} solid ${M.BordersDdsBorderFocusInputfieldStrokeWeight}`,outlineOffset:y.SizesDdsSpacingLocalX0125}},o={calendarIndicator:fe},he=pe(ue)`
  &::-webkit-calendar-picker-indicator {
    // Ensure double quotes in url due to svg data URI in image bundle that requires them, as the attributes use single quotes
    background-image: ${`url("${Se}")`};
    position: absolute;
    ${({componentSize:a})=>a&&me`
        right: ${o.calendarIndicator.base.sizes[a].right};
        height: ${o.calendarIndicator.base.sizes[a].height};
        width: ${o.calendarIndicator.base.sizes[a].width};
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
    outline: ${o.calendarIndicator.focus.outline};
    outline-offset: ${o.calendarIndicator.focus.outlineOffset};
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
    ${ke}
  }
`,t=T.forwardRef(({id:a,type:i="date",required:g,readOnly:S,disabled:Y,label:f,width:h,errorMessage:D,tip:L,style:Z,className:ee,componentSize:z="medium",max:te,"aria-required":w,"aria-describedby":ae,...ie},le)=>{const re=T.useId(),u=a??`${re}-datepickerInput`,oe=h||ze(i,z),se=!!f,v=!!D,ne=!!(g||w),I=O(u,"errorMessage"),x=O(u,"tip"),de={id:u,hasErrorMessage:v,ref:le,readOnly:S,tabIndex:S?-1:0,required:g,disabled:Y,componentSize:z,type:i,"aria-describedby":De([L?x:void 0,D?I:void 0,ae]),"aria-required":w,"aria-invalid":v?!0:void 0,max:we(i,te),...ie};return k(be,{...{width:oe,style:Z,className:ee},children:[se&&e(ye,{htmlFor:u,showRequiredStyling:ne,children:f}),e(he,{...de}),ge(L,x,D,I)]})});t.displayName="Datepicker";const Le={date:{medium:"160px",small:"140px",tiny:"125px"},["datetime-local"]:{medium:"200px",small:"180px",tiny:"150px"}},ze=(a,i)=>Le[a][i],we=(a,i)=>{if(i!==void 0)return i;if(a==="datetime-local")return"9999-12-31T23:59";if(a==="date")return"9999-12-31"},ve={title:"dds-components/Datepicker",component:t,argTypes:{label:{control:{type:"text"}},tip:{control:{type:"text"}},errorMessage:{control:{type:"text"}},width:{control:{type:"text"}},required:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}}}},s=()=>k(l,{display:"grid",columnsAmount:2,title:"Datepicker - date overview",children:[e(t,{label:"Label"}),e(t,{}),e(t,{label:"Label",disabled:!0}),e(t,{disabled:!0}),e(t,{label:"Label",readOnly:!0}),e(t,{readOnly:!0}),e(t,{label:"Label",errorMessage:"Feilmelding"}),e(t,{errorMessage:"Feilmelding"}),e(t,{label:"Label",tip:"Hjelpetekst"}),e(t,{tip:"Hjelpetekst"}),e(t,{label:"Label",min:"2021-11-11",max:"2021-12-11"}),e(t,{min:"2021-11-11",max:"2021-12-11"})]}),n=()=>k(l,{display:"grid",columnsAmount:2,title:"Datepicker - datetime overview",children:[e(t,{type:"datetime-local",label:"Label"}),e(t,{type:"datetime-local"}),e(t,{type:"datetime-local",label:"Label",disabled:!0}),e(t,{type:"datetime-local",disabled:!0}),e(t,{type:"datetime-local",label:"Label",readOnly:!0}),e(t,{type:"datetime-local",readOnly:!0}),e(t,{type:"datetime-local",label:"Label",errorMessage:"Feilmelding"}),e(t,{type:"datetime-local",errorMessage:"Feilmelding"}),e(t,{type:"datetime-local",label:"Label",tip:"Hjelpetekst"}),e(t,{type:"datetime-local",tip:"Hjelpetekst"}),e(t,{type:"datetime-local",label:"Label",min:"2021-11-11T00:00",max:"2021-12-11T23:59"}),e(t,{type:"datetime-local",min:"2021-11-11T00:00",max:"2021-12-11T23:59"})]}),d=()=>k(l,{display:"grid",columnsAmount:2,title:"Datepicker - sizes overview",children:[e(t,{label:"Label",componentSize:"medium"}),e(t,{componentSize:"medium"}),e(t,{label:"Label",componentSize:"small"}),e(t,{componentSize:"small"}),e(t,{label:"Label",componentSize:"tiny"}),e(t,{componentSize:"tiny"}),e(t,{type:"datetime-local",label:"Label",componentSize:"medium"}),e(t,{type:"datetime-local",componentSize:"medium"}),e(t,{type:"datetime-local",label:"Label",componentSize:"small"}),e(t,{type:"datetime-local",componentSize:"small"}),e(t,{type:"datetime-local",label:"Label",componentSize:"tiny"}),e(t,{type:"datetime-local",componentSize:"tiny"})]}),c=a=>e(l,{title:"Datepicker - default",children:e(t,{...a})}),p=a=>e(l,{title:"Datepicker - with label",children:e(t,{...a,label:a.label??"Label"})}),m=a=>e(l,{title:"Datepicker - datetime",children:e(t,{...a,type:"datetime-local"})}),b=a=>e(l,{title:"Datepicker - datetime with label",children:e(t,{...a,type:"datetime-local",label:a.label??"Label"})});var j,$,F;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`() => <StoryTemplate display="grid" columnsAmount={2} title="Datepicker - date overview">
    <Datepicker label="Label" />
    <Datepicker />
    <Datepicker label="Label" disabled />
    <Datepicker disabled />
    <Datepicker label="Label" readOnly />
    <Datepicker readOnly />
    <Datepicker label="Label" errorMessage="Feilmelding" />
    <Datepicker errorMessage="Feilmelding" />
    <Datepicker label="Label" tip="Hjelpetekst" />
    <Datepicker tip="Hjelpetekst" />
    <Datepicker label="Label" min="2021-11-11" max="2021-12-11" />
    <Datepicker min="2021-11-11" max="2021-12-11" />
  </StoryTemplate>`,...(F=($=s.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};var W,A,H;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`() => <StoryTemplate display="grid" columnsAmount={2} title="Datepicker - datetime overview">
    <Datepicker type="datetime-local" label="Label" />
    <Datepicker type="datetime-local" />
    <Datepicker type="datetime-local" label="Label" disabled />
    <Datepicker type="datetime-local" disabled />
    <Datepicker type="datetime-local" label="Label" readOnly />
    <Datepicker type="datetime-local" readOnly />
    <Datepicker type="datetime-local" label="Label" errorMessage="Feilmelding" />
    <Datepicker type="datetime-local" errorMessage="Feilmelding" />
    <Datepicker type="datetime-local" label="Label" tip="Hjelpetekst" />
    <Datepicker type="datetime-local" tip="Hjelpetekst" />
    <Datepicker type="datetime-local" label="Label" min="2021-11-11T00:00" max="2021-12-11T23:59" />
    <Datepicker type="datetime-local" min="2021-11-11T00:00" max="2021-12-11T23:59" />
  </StoryTemplate>`,...(H=(A=n.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var P,_,q;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`() => <StoryTemplate display="grid" columnsAmount={2} title="Datepicker - sizes overview">
    <Datepicker label="Label" componentSize="medium" />
    <Datepicker componentSize="medium" />
    <Datepicker label="Label" componentSize="small" />
    <Datepicker componentSize="small" />
    <Datepicker label="Label" componentSize="tiny" />
    <Datepicker componentSize="tiny" />
    <Datepicker type="datetime-local" label="Label" componentSize="medium" />
    <Datepicker type="datetime-local" componentSize="medium" />
    <Datepicker type="datetime-local" label="Label" componentSize="small" />
    <Datepicker type="datetime-local" componentSize="small" />
    <Datepicker type="datetime-local" label="Label" componentSize="tiny" />
    <Datepicker type="datetime-local" componentSize="tiny" />
  </StoryTemplate>`,...(q=(_=d.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var B,C,E;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`(args: DatepickerProps) => <StoryTemplate title="Datepicker - default">
    <Datepicker {...args} />
  </StoryTemplate>`,...(E=(C=c.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var R,X,G;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`(args: DatepickerProps) => <StoryTemplate title="Datepicker - with label">
    <Datepicker {...args} label={args.label ?? 'Label'} />
  </StoryTemplate>`,...(G=(X=p.parameters)==null?void 0:X.docs)==null?void 0:G.source}}};var U,N,J;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`(args: DatepickerProps) => <StoryTemplate title="Datepicker - datetime">
    <Datepicker {...args} type="datetime-local" />
  </StoryTemplate>`,...(J=(N=m.parameters)==null?void 0:N.docs)==null?void 0:J.source}}};var K,Q,V;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`(args: DatepickerProps) => <StoryTemplate title="Datepicker - datetime with label">
    <Datepicker {...args} type="datetime-local" label={args.label ?? 'Label'} />
  </StoryTemplate>`,...(V=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};const Ie=["OverviewDate","OverviewDatetime","OverviewSizes","Default","WithLabel","Datetime","DatetimeWithLabel"],He=Object.freeze(Object.defineProperty({__proto__:null,Datetime:m,DatetimeWithLabel:b,Default:c,OverviewDate:s,OverviewDatetime:n,OverviewSizes:d,WithLabel:p,__namedExportsOrder:Ie,default:ve},Symbol.toStringTag,{value:"Module"}));export{He as D,p as W,c as a,m as b,b as c};
//# sourceMappingURL=Datepicker.stories-868ab7bb.js.map
