import{j as V,a as l}from"./ddsReferenceTokens-647ce456.js";import{e as c}from"./libraryAdd-35e18a4f.js";import"./Icon-42793503.js";import{S as o}from"./StoryTemplate-40ed0c91.js";import{S as i}from"./Select-13da1d91.js";import"./index-ebeaab24.js";import"./BaseComponentProps-a100791d.js";import"./chunk-S4VUQJ4A-45bcf0b3.js";import"./iframe-04aa59bd.js";import"../sb-preview/runtime.js";import"./index-72bda2b9.js";import"./index-9c09ad76.js";import"./index-356e4a49.js";import"./floating-ui.dom-a5fd4560.js";import"./Input.styles-115c96a3.js";import"./Caption-0ff47cfa.js";import"./TextOverflowEllipsis-e3546c5b.js";import"./Typography-d54ea9fd.js";import"./Heading-ded557b4.js";import"./Label-b7852367.js";import"./Legend-d58c0461.js";import"./Link-037ca604.js";import"./Paragraph-a74f99d8.js";import"./scrollbarStyling-d0d816c9.js";import"./ScrollableContainer.tokens-e480b498.js";import"./icon-aa5b86b3.js";import"./renderInputMessage-cc09d168.js";import"./InputMessage-53e4c8ef.js";const re={title:"dds-components/Select/MultiSelect",component:i,argTypes:{label:{control:{type:"text"}},tip:{control:{type:"text"}},errorMessage:{control:{type:"text"}},width:{control:{type:"text"}},placeholder:{control:{type:"text"}},isDisabled:{control:{type:"boolean"}},isClearable:{control:{type:"boolean"}},required:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}},isLoading:{control:{type:"boolean"}}},parameters:{controls:{exclude:["style","className","items","value","defaultValue"]}}},t=["Alternativ 1","Alternativ 2","Veldig langt alternativ her veldig langt alternativ her","Alternativ 3","Alternativ 4"].map(e=>({label:e,value:e})),r=e=>V(o,{title:"Multiselect - overview",gap:"25px",display:"grid",columnsAmount:2,children:[l(i,{...e,label:e.label??"Label",options:t,isMulti:!0}),l(i,{...e,label:e.label??"Label",required:!0,options:t,isMulti:!0}),l(i,{...e,label:e.label??"Label",isDisabled:!0,options:t,isMulti:!0}),l(i,{...e,label:e.label??"Label",isDisabled:!0,value:t[0],options:t,isMulti:!0}),l(i,{...e,label:e.label??"Label",readOnly:!0,options:t,isMulti:!0}),l(i,{...e,label:e.label??"Label",readOnly:!0,value:t[0],options:t,isMulti:!0}),l(i,{...e,label:e.label??"Label",errorMessage:"Dette er en feilmelding",options:t,isMulti:!0}),l(i,{...e,label:e.label??"Label",tip:"Dette er en hjelpetekst",options:t,isMulti:!0}),l(i,{...e,label:e.label??"Label",placeholder:"Annerledes placeholder",options:t,isMulti:!0}),l(i,{...e,label:e.label??"Label",defaultValue:t[0],options:t,isMulti:!0}),l(i,{...e,label:e.label??"Label",value:t[3],options:t,isMulti:!0}),l(i,{...e,options:t,isMulti:!0})]}),a=e=>V(o,{title:"MultiSelect - overview sizes",display:"grid",columnsAmount:2,children:[l(i,{...e,options:t,isMulti:!0}),l(i,{...e,options:t,isMulti:!0,icon:c}),l(i,{...e,options:t,isMulti:!0,componentSize:"small"}),l(i,{...e,options:t,isMulti:!0,componentSize:"small",icon:c})]}),s=e=>l(o,{title:"MultiSelect - default",display:"block",children:l(i,{...e,options:t,isMulti:!0})}),n=e=>l(o,{title:"MultiSelect - with label",children:l(i,{...e,label:e.label??"Label",options:t,isMulti:!0})}),p=e=>l(o,{title:"Select - multiselect with value",children:l(i,{...e,label:e.label??"Label",options:t,isMulti:!0,defaultValue:t[0]})}),u=e=>l(o,{title:"Select - multiselect with fit content",children:l(i,{...e,label:e.label??"Label",options:t,isMulti:!0,width:"fit-content",style:{minWidth:"320px"}})});var b,m,S;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`(args: MultiSelectProps) => {
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
}`,...(z=(O=u.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};const ae=["Overview","OverviewSizes","Default","WithLabel","WithDefaultValue","WithFitContent"];export{s as Default,r as Overview,a as OverviewSizes,p as WithDefaultValue,u as WithFitContent,n as WithLabel,ae as __namedExportsOrder,re as default};
//# sourceMappingURL=MultiSelect.stories-d44ca464.js.map
