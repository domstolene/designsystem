import{d as ce,s as pe,A as me,j as k,a as e}from"./ddsReferenceTokens-f1d35829.js";import{R as l}from"./storybook-components-6981d325.js";import{r as I}from"./index-d47b1f5a.js";import{Q as be,N as ue,E as O}from"./dds-core-c67132cd.js";import{M as ye}from"./dds-typography-cc6cb429.js";import{q as ke,j as De}from"./dds-form-9b45fc8d.js";import{r as ge}from"./renderInputMessage-d83d5631.js";const Se=""+new URL("calendar_today-b2d13105.svg",import.meta.url).href,{iconSizes:r,spacing:y,border:M}=ce,he={base:{sizes:{medium:{height:r.DdsIconsizeMedium,width:r.DdsIconsizeMedium,right:y.SizesDdsSpacingLocalX075},small:{height:r.DdsIconsizeSmall,width:r.DdsIconsizeSmall,right:y.SizesDdsSpacingLocalX075},tiny:{height:r.DdsIconsizeSmall,width:r.DdsIconsizeSmall,right:y.SizesDdsSpacingLocalX075}}},focus:{outline:`${M.BordersDdsBorderFocusInputfieldStroke} solid ${M.BordersDdsBorderFocusInputfieldStrokeWeight}`,outlineOffset:y.SizesDdsSpacingLocalX0125}},o={calendarIndicator:he},fe=pe(De)`
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
    ${be}
  }
`,t=I.forwardRef(({id:a,type:i="date",required:g,readOnly:S,disabled:Y,label:h,width:f,errorMessage:D,tip:L,style:Z,className:ee,componentSize:z="medium",max:te,"aria-required":w,"aria-describedby":ae,...ie},le)=>{const re=I.useId(),u=a??`${re}-datepickerInput`,oe=f||ze(i,z),se=!!h,v=!!D,ne=!!(g||w),x=O(u,"errorMessage"),T=O(u,"tip"),de={id:u,hasErrorMessage:v,ref:le,readOnly:S,tabIndex:S?-1:0,required:g,disabled:Y,componentSize:z,type:i,"aria-describedby":ue([L?T:void 0,D?x:void 0,ae]),"aria-required":w,"aria-invalid":v?!0:void 0,max:we(i,te),...ie};return k(ke,{...{width:oe,style:Z,className:ee},children:[se&&e(ye,{htmlFor:u,showRequiredStyling:ne,children:h}),e(fe,{...de}),ge(L,T,D,x)]})});t.displayName="Datepicker";const Le={date:{medium:"160px",small:"140px",tiny:"125px"},["datetime-local"]:{medium:"200px",small:"180px",tiny:"150px"}},ze=(a,i)=>Le[a][i],we=(a,i)=>{if(i!==void 0)return i;if(a==="datetime-local")return"9999-12-31T23:59";if(a==="date")return"9999-12-31"},ve={title:"dds-components/Datepicker",component:t,argTypes:{label:{control:{type:"text"}},tip:{control:{type:"text"}},errorMessage:{control:{type:"text"}},width:{control:{type:"text"}},required:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}}}},s=()=>k(l,{display:"grid",columnsAmount:2,title:"Datepicker - date overview",children:[e(t,{label:"Label"}),e(t,{}),e(t,{label:"Label",disabled:!0}),e(t,{disabled:!0}),e(t,{label:"Label",readOnly:!0}),e(t,{readOnly:!0}),e(t,{label:"Label",errorMessage:"Feilmelding"}),e(t,{errorMessage:"Feilmelding"}),e(t,{label:"Label",tip:"Hjelpetekst"}),e(t,{tip:"Hjelpetekst"}),e(t,{label:"Label",min:"2021-11-11",max:"2021-12-11"}),e(t,{min:"2021-11-11",max:"2021-12-11"})]}),n=()=>k(l,{display:"grid",columnsAmount:2,title:"Datepicker - datetime overview",children:[e(t,{type:"datetime-local",label:"Label"}),e(t,{type:"datetime-local"}),e(t,{type:"datetime-local",label:"Label",disabled:!0}),e(t,{type:"datetime-local",disabled:!0}),e(t,{type:"datetime-local",label:"Label",readOnly:!0}),e(t,{type:"datetime-local",readOnly:!0}),e(t,{type:"datetime-local",label:"Label",errorMessage:"Feilmelding"}),e(t,{type:"datetime-local",errorMessage:"Feilmelding"}),e(t,{type:"datetime-local",label:"Label",tip:"Hjelpetekst"}),e(t,{type:"datetime-local",tip:"Hjelpetekst"}),e(t,{type:"datetime-local",label:"Label",min:"2021-11-11T00:00",max:"2021-12-11T23:59"}),e(t,{type:"datetime-local",min:"2021-11-11T00:00",max:"2021-12-11T23:59"})]}),d=()=>k(l,{display:"grid",columnsAmount:2,title:"Datepicker - sizes overview",children:[e(t,{label:"Label",componentSize:"medium"}),e(t,{componentSize:"medium"}),e(t,{label:"Label",componentSize:"small"}),e(t,{componentSize:"small"}),e(t,{label:"Label",componentSize:"tiny"}),e(t,{componentSize:"tiny"}),e(t,{type:"datetime-local",label:"Label",componentSize:"medium"}),e(t,{type:"datetime-local",componentSize:"medium"}),e(t,{type:"datetime-local",label:"Label",componentSize:"small"}),e(t,{type:"datetime-local",componentSize:"small"}),e(t,{type:"datetime-local",label:"Label",componentSize:"tiny"}),e(t,{type:"datetime-local",componentSize:"tiny"})]}),c=a=>e(l,{title:"Datepicker - default",children:e(t,{...a})}),p=a=>e(l,{title:"Datepicker - with label",children:e(t,{...a,label:a.label??"Label"})}),m=a=>e(l,{title:"Datepicker - datetime",children:e(t,{...a,type:"datetime-local"})}),b=a=>e(l,{title:"Datepicker - datetime with label",children:e(t,{...a,type:"datetime-local",label:a.label??"Label"})});var j,$,F;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`() => <StoryTemplate display="grid" columnsAmount={2} title="Datepicker - date overview">
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
  </StoryTemplate>`,...(q=(_=d.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var E,B,R;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`(args: DatepickerProps) => <StoryTemplate title="Datepicker - default">
    <Datepicker {...args} />
  </StoryTemplate>`,...(R=(B=c.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var X,C,N;p.parameters={...p.parameters,docs:{...(X=p.parameters)==null?void 0:X.docs,source:{originalSource:`(args: DatepickerProps) => <StoryTemplate title="Datepicker - with label">
    <Datepicker {...args} label={args.label ?? 'Label'} />
  </StoryTemplate>`,...(N=(C=p.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var U,Q,G;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`(args: DatepickerProps) => <StoryTemplate title="Datepicker - datetime">
    <Datepicker {...args} type="datetime-local" />
  </StoryTemplate>`,...(G=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:G.source}}};var J,K,V;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`(args: DatepickerProps) => <StoryTemplate title="Datepicker - datetime with label">
    <Datepicker {...args} type="datetime-local" label={args.label ?? 'Label'} />
  </StoryTemplate>`,...(V=(K=b.parameters)==null?void 0:K.docs)==null?void 0:V.source}}};const xe=["OverviewDate","OverviewDatetime","OverviewSizes","Default","WithLabel","Datetime","DatetimeWithLabel"],Ae=Object.freeze(Object.defineProperty({__proto__:null,Datetime:m,DatetimeWithLabel:b,Default:c,OverviewDate:s,OverviewDatetime:n,OverviewSizes:d,WithLabel:p,__namedExportsOrder:xe,default:ve},Symbol.toStringTag,{value:"Module"}));export{Ae as D,p as W,c as a,m as b,b as c};
//# sourceMappingURL=Datepicker.stories-3c358e00.js.map
