import{j as V,a as l}from"./focus-visible-8467fd8b.js";import{t as c}from"./dds-icons-f9255b51.js";import{R as o}from"./storybook-components-dc8c0578.js";import{S as i}from"./Select-9eec5f23.js";import"./index-d47b1f5a.js";import"./dds-core-b89b291f.js";import"./chunk-PCJTTTQV-784d8e4f.js";import"./iframe-35f96930.js";import"../sb-preview/runtime.js";import"./index-db9ff070.js";import"./index-d475d2ea.js";import"./index-356e4a49.js";import"./react-select.esm-312dd9ff.js";import"./dds-form-9dbc5b3d.js";import"./dds-typography-4e6445f7.js";import"./scrollbarStyling-b67d8d39.js";import"./ScrollableContainer.tokens-a52bc549.js";import"./icon-aa5b86b3.js";import"./renderInputMessage-6d8b7416.js";import"./InputMessage-f11a61e2.js";const Y={title:"dds-components/Select/MultiSelect",component:i,argTypes:{label:{control:{type:"text"}},tip:{control:{type:"text"}},errorMessage:{control:{type:"text"}},width:{control:{type:"text"}},placeholder:{control:{type:"text"}},isDisabled:{control:{type:"boolean"}},isClearable:{control:{type:"boolean"}},required:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}},isLoading:{control:{type:"boolean"}}},parameters:{controls:{exclude:["style","className","items","value","defaultValue"]}}},t=["Alternativ 1","Alternativ 2","Veldig langt alternativ her veldig langt alternativ her","Alternativ 3","Alternativ 4"].map(e=>({label:e,value:e})),a=e=>V(o,{title:"Multiselect - overview",gap:"25px",display:"grid",columnsAmount:2,children:[l(i,{...e,label:e.label??"Label",options:t,isMulti:!0}),l(i,{...e,label:e.label??"Label",required:!0,options:t,isMulti:!0}),l(i,{...e,label:e.label??"Label",isDisabled:!0,options:t,isMulti:!0}),l(i,{...e,label:e.label??"Label",isDisabled:!0,value:t[0],options:t,isMulti:!0}),l(i,{...e,label:e.label??"Label",readOnly:!0,options:t,isMulti:!0}),l(i,{...e,label:e.label??"Label",readOnly:!0,value:t[0],options:t,isMulti:!0}),l(i,{...e,label:e.label??"Label",errorMessage:"Dette er en feilmelding",options:t,isMulti:!0}),l(i,{...e,label:e.label??"Label",tip:"Dette er en hjelpetekst",options:t,isMulti:!0}),l(i,{...e,label:e.label??"Label",placeholder:"Annerledes placeholder",options:t,isMulti:!0}),l(i,{...e,label:e.label??"Label",defaultValue:t[0],options:t,isMulti:!0}),l(i,{...e,label:e.label??"Label",value:t[3],options:t,isMulti:!0}),l(i,{...e,options:t,isMulti:!0})]}),r=e=>V(o,{title:"MultiSelect - overview sizes",display:"grid",columnsAmount:2,children:[l(i,{...e,options:t,isMulti:!0}),l(i,{...e,options:t,isMulti:!0,icon:c}),l(i,{...e,options:t,isMulti:!0,componentSize:"small"}),l(i,{...e,options:t,isMulti:!0,componentSize:"small",icon:c})]}),s=e=>l(o,{title:"MultiSelect - default",display:"block",children:l(i,{...e,options:t,isMulti:!0})}),n=e=>l(o,{title:"MultiSelect - with label",children:l(i,{...e,label:e.label??"Label",options:t,isMulti:!0})}),u=e=>l(o,{title:"Select - multiselect with value",children:l(i,{...e,label:e.label??"Label",options:t,isMulti:!0,defaultValue:t[0]})}),p=e=>l(o,{title:"Select - multiselect with fit content",children:l(i,{...e,label:e.label??"Label",options:t,isMulti:!0,width:"fit-content",style:{minWidth:"320px"}})});var b,m,S;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`(args: MultiSelectProps) => {
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
}`,...(S=(m=a.parameters)==null?void 0:m.docs)==null?void 0:S.source}}};var d,M,D;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`(args: MultiSelectProps) => {
  return <StoryTemplate title="MultiSelect - overview sizes" display="grid" columnsAmount={2}>
      <DDSSelect {...args} options={options} isMulti />
      <DDSSelect {...args} options={options} isMulti icon={CourtIcon} />
      <DDSSelect {...args} options={options} isMulti componentSize="small" />
      <DDSSelect {...args} options={options} isMulti componentSize="small" icon={CourtIcon} />
    </StoryTemplate>;
}`,...(D=(M=r.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var y,g,v;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`(args: MultiSelectProps) => {
  return <StoryTemplate title="MultiSelect - default" display="block">
      <DDSSelect {...args} options={options} isMulti />
    </StoryTemplate>;
}`,...(v=(g=s.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var h,L,f;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`(args: MultiSelectProps) => {
  return <StoryTemplate title="MultiSelect - with label">
      <DDSSelect {...args} label={args.label ?? 'Label'} options={options} isMulti />
    </StoryTemplate>;
}`,...(f=(L=n.parameters)==null?void 0:L.docs)==null?void 0:f.source}}};var w,x,T;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`(args: MultiSelectProps) => {
  return <StoryTemplate title="Select - multiselect with value">
      <DDSSelect {...args} label={args.label ?? 'Label'} options={options} isMulti defaultValue={options[0]} />
    </StoryTemplate>;
}`,...(T=(x=u.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var A,O,z;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`(args: MultiSelectProps) => {
  return <StoryTemplate title="Select - multiselect with fit content">
      <DDSSelect {...args} label={args.label ?? 'Label'} options={options} isMulti width="fit-content" style={{
      minWidth: '320px'
    }} />
    </StoryTemplate>;
}`,...(z=(O=p.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};const Z=["Overview","OverviewSizes","Default","WithLabel","WithDefaultValue","WithFitContent"];export{s as Default,a as Overview,r as OverviewSizes,u as WithDefaultValue,p as WithFitContent,n as WithLabel,Z as __namedExportsOrder,Y as default};
//# sourceMappingURL=MultiSelect.stories-726ede32.js.map
