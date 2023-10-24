import{j as V,a as l}from"./jsx-runtime-e43ccb36.js";import{e as c}from"./libraryAdd-9af098d3.js";import"./Icon-a656622e.js";import{S as o}from"./StoryTemplate-a36d369e.js";import{S as i}from"./Select-b21de034.js";import"./index-1b03fe98.js";import"./ddsReferenceTokens-f9f5a4e4.js";import"./BaseComponentProps-9c025471.js";import"./chunk-HLWAVYOI-03a60696.js";import"./iframe-d9c882ff.js";import"../sb-preview/runtime.js";import"./index-6d191f71.js";import"./index-6fd5a17b.js";import"./index-356e4a49.js";import"./floating-ui.dom-a5fd4560.js";import"./Input.styles-3d1af983.js";import"./Caption-6d408196.js";import"./TextOverflowEllipsis-1edb8626.js";import"./Typography-e857479c.js";import"./Heading-5f7faa2b.js";import"./Label-9dee7f37.js";import"./Legend-41f9f05c.js";import"./Link-1567bf4e.js";import"./Paragraph-998f64b8.js";import"./scrollbarStyling-6511712a.js";import"./ScrollableContainer.tokens-17f22553.js";import"./icon-aa5b86b3.js";import"./renderInputMessage-949171ed.js";import"./InputMessage-b51d1fc9.js";const ae={title:"dds-components/Select/MultiSelect",component:i,argTypes:{label:{control:{type:"text"}},tip:{control:{type:"text"}},errorMessage:{control:{type:"text"}},width:{control:{type:"text"}},placeholder:{control:{type:"text"}},isDisabled:{control:{type:"boolean"}},isClearable:{control:{type:"boolean"}},required:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}},isLoading:{control:{type:"boolean"}}},parameters:{controls:{exclude:["style","className","items","value","defaultValue"]}}},t=["Alternativ 1","Alternativ 2","Veldig langt alternativ her veldig langt alternativ her","Alternativ 3","Alternativ 4"].map(e=>({label:e,value:e})),r=e=>V(o,{title:"Multiselect - overview",gap:"25px",display:"grid",columnsAmount:2,children:[l(i,{...e,label:e.label??"Label",options:t,isMulti:!0}),l(i,{...e,label:e.label??"Label",required:!0,options:t,isMulti:!0}),l(i,{...e,label:e.label??"Label",isDisabled:!0,options:t,isMulti:!0}),l(i,{...e,label:e.label??"Label",isDisabled:!0,value:t[0],options:t,isMulti:!0}),l(i,{...e,label:e.label??"Label",readOnly:!0,options:t,isMulti:!0}),l(i,{...e,label:e.label??"Label",readOnly:!0,value:t[0],options:t,isMulti:!0}),l(i,{...e,label:e.label??"Label",errorMessage:"Dette er en feilmelding",options:t,isMulti:!0}),l(i,{...e,label:e.label??"Label",tip:"Dette er en hjelpetekst",options:t,isMulti:!0}),l(i,{...e,label:e.label??"Label",placeholder:"Annerledes placeholder",options:t,isMulti:!0}),l(i,{...e,label:e.label??"Label",defaultValue:t[0],options:t,isMulti:!0}),l(i,{...e,label:e.label??"Label",value:t[3],options:t,isMulti:!0}),l(i,{...e,options:t,isMulti:!0})]}),a=e=>V(o,{title:"MultiSelect - overview sizes",display:"grid",columnsAmount:2,children:[l(i,{...e,options:t,isMulti:!0}),l(i,{...e,options:t,isMulti:!0,icon:c}),l(i,{...e,options:t,isMulti:!0,componentSize:"small"}),l(i,{...e,options:t,isMulti:!0,componentSize:"small",icon:c})]}),s=e=>l(o,{title:"MultiSelect - default",display:"block",children:l(i,{...e,options:t,isMulti:!0})}),n=e=>l(o,{title:"MultiSelect - with label",children:l(i,{...e,label:e.label??"Label",options:t,isMulti:!0})}),p=e=>l(o,{title:"Select - multiselect with value",children:l(i,{...e,label:e.label??"Label",options:t,isMulti:!0,defaultValue:t[0]})}),u=e=>l(o,{title:"Select - multiselect with fit content",children:l(i,{...e,label:e.label??"Label",options:t,isMulti:!0,width:"fit-content",style:{minWidth:"320px"}})});var b,m,S;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`(args: MultiSelectProps) => {
  return <StoryTemplate title="Multiselect - overview" gap="25px" display="grid" columnsAmount={2}>
      <DDSSelect {...args} label={args.label ?? 'Label'} options={options} isMulti />
      <DDSSelect {...args} label={args.label ?? 'Label'} required options={options} isMulti />
      <DDSSelect {...args} label={args.label ?? 'Label'} isDisabled options={options} isMulti />
      <DDSSelect {...args} label={args.label ?? 'Label'} isDisabled value={options[0]} options={options} isMulti />
      <DDSSelect {...args} label={args.label ?? 'Label'} readOnly options={options} isMulti />
      <DDSSelect {...args} label={args.label ?? 'Label'} readOnly value={options[0]} options={options} isMulti />
      <DDSSelect {...args} label={args.label ?? 'Label'} errorMessage="Dette er en feilmelding" options={options} isMulti />
      <DDSSelect {...args} label={args.label ?? 'Label'} tip="Dette er en hjelpetekst" options={options} isMulti />
      <DDSSelect {...args} label={args.label ?? 'Label'} placeholder="Annerledes placeholder" options={options} isMulti />
      <DDSSelect {...args} label={args.label ?? 'Label'} defaultValue={options[0]} options={options} isMulti />
      <DDSSelect {...args} label={args.label ?? 'Label'} value={options[3]} options={options} isMulti />
      <DDSSelect {...args} options={options} isMulti />
    </StoryTemplate>;
}`,...(S=(m=r.parameters)==null?void 0:m.docs)==null?void 0:S.source}}};var d,M,D;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`(args: MultiSelectProps) => {
  return <StoryTemplate title="MultiSelect - overview sizes" display="grid" columnsAmount={2}>
      <DDSSelect {...args} options={options} isMulti />
      <DDSSelect {...args} options={options} isMulti icon={CourtIcon} />
      <DDSSelect {...args} options={options} isMulti componentSize="small" />
      <DDSSelect {...args} options={options} isMulti componentSize="small" icon={CourtIcon} />
    </StoryTemplate>;
}`,...(D=(M=a.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var y,g,v;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`(args: MultiSelectProps) => {
  return <StoryTemplate title="MultiSelect - default" display="block">
      <DDSSelect {...args} options={options} isMulti />
    </StoryTemplate>;
}`,...(v=(g=s.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var h,L,f;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`(args: MultiSelectProps) => {
  return <StoryTemplate title="MultiSelect - with label">
      <DDSSelect {...args} label={args.label ?? 'Label'} options={options} isMulti />
    </StoryTemplate>;
}`,...(f=(L=n.parameters)==null?void 0:L.docs)==null?void 0:f.source}}};var w,x,T;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`(args: MultiSelectProps) => {
  return <StoryTemplate title="Select - multiselect with value">
      <DDSSelect {...args} label={args.label ?? 'Label'} options={options} isMulti defaultValue={options[0]} />
    </StoryTemplate>;
}`,...(T=(x=p.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var A,O,z;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`(args: MultiSelectProps) => {
  return <StoryTemplate title="Select - multiselect with fit content">
      <DDSSelect {...args} label={args.label ?? 'Label'} options={options} isMulti width="fit-content" style={{
      minWidth: '320px'
    }} />
    </StoryTemplate>;
}`,...(z=(O=u.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};const se=["Overview","OverviewSizes","Default","WithLabel","WithDefaultValue","WithFitContent"];export{s as Default,r as Overview,a as OverviewSizes,p as WithDefaultValue,u as WithFitContent,n as WithLabel,se as __namedExportsOrder,ae as default};
//# sourceMappingURL=MultiSelect.stories-641e7a95.js.map
