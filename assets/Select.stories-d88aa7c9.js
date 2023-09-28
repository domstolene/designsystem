import{j as C,a as t}from"./ddsReferenceTokens-647ce456.js";import{S as a}from"./StoryTemplate-28ced27f.js";import{g as m}from"./libraryAdd-1e72c15a.js";import"./Icon-42793503.js";import{S as o,c as G}from"./Select-bd136e51.js";import"./index-ebeaab24.js";import"./chunk-PCJTTTQV-8db1789a.js";import"./iframe-017103ac.js";import"../sb-preview/runtime.js";import"./index-72bda2b9.js";import"./index-9c09ad76.js";import"./index-d475d2ea.js";import"./index-356e4a49.js";import"./BaseComponentProps-a100791d.js";import"./floating-ui.dom.browser.min-fc8c1a2d.js";import"./Input.styles-711330f2.js";import"./Caption-5c254d72.js";import"./TextOverflowEllipsis-e3546c5b.js";import"./Typography-1747463b.js";import"./Heading-dc72d0b9.js";import"./Label-23c96940.js";import"./Legend-dbc3ced6.js";import"./Link-9aff7843.js";import"./Paragraph-3340e0ea.js";import"./scrollbarStyling-d0d816c9.js";import"./ScrollableContainer.tokens-e480b498.js";import"./icon-aa5b86b3.js";import"./renderInputMessage-b74800a1.js";import"./InputMessage-bda02b29.js";const pe={title:"dds-components/Select/SingleValue",component:o,argTypes:{label:{control:{type:"text"}},tip:{control:{type:"text"}},errorMessage:{control:{type:"text"}},width:{control:{type:"text"}},placeholder:{control:{type:"text"}},isDisabled:{control:{type:"boolean"}},isClearable:{control:{type:"boolean"}},required:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}},isLoading:{control:{type:"boolean"}}},parameters:{controls:{exclude:["style","className","items","value","defaultValue"]}}},l=G("Alternativ 1","Alternativ 2","Veldig langt alternativ her veldig langt alternativ her","Alternativ 3","Alternativ 4"),P=G("Alternativ 1","Alternativ 2","Veldig langt alternativ her veldig langt alternativ her","Alternativ 3","Alternativ 4","Alternativ 5","Alternativ 6","Alternativ 7"),r=e=>C(a,{title:"Select - overview",gap:"25px",display:"grid",columnsAmount:2,children:[t(o,{...e,label:e.label??"Label",options:l}),t(o,{...e,label:e.label??"Label",required:!0,options:l}),t(o,{...e,label:e.label??"Label",isDisabled:!0,options:l,value:l[3]}),t(o,{...e,label:e.label??"Label",readOnly:!0,options:l,value:l[3]}),t(o,{...e,label:e.label??"Label",icon:m,options:l}),t(o,{...e,label:e.label??"Label",errorMessage:"Dette er en feilmelding",options:l}),t(o,{...e,label:e.label??"Label",tip:"Dette er en hjelpetekst",options:l}),t(o,{...e,label:e.label??"Label",placeholder:"Annerledes placeholder",options:l}),t(o,{...e,label:e.label??"Label",defaultValue:l[0],options:l}),t(o,{...e,label:e.label??"Label",value:l[3],options:l}),t(o,{...e,options:l})]}),n=e=>C(a,{title:"Select - overview sizes",display:"grid",columnsAmount:2,children:[t(o,{...e,componentSize:"medium",options:l}),t(o,{...e,componentSize:"medium",icon:m,options:l}),t(o,{...e,componentSize:"small",options:l}),t(o,{...e,componentSize:"small",icon:m,options:l}),t(o,{...e,componentSize:"tiny",options:l}),t(o,{...e,componentSize:"tiny",icon:m,options:l})]}),i=e=>t(a,{title:"Select - default",children:t(o,{...e,options:l})}),s=e=>t(a,{title:"Select - with groups",children:t(o,{...e,options:[{label:"Gruppe 1",options:[{label:"Alternativ 1",value:"Alternativ 1"},{label:"Alternativ 2",value:"Alternativ 2"}]},{label:"Gruppe 2",options:[{label:"Alternativ 3",value:"Alternativ 3"},{label:"Alternativ 4",value:"Alternativ 4"}]}]})}),p=e=>t(a,{title:"Select - with label",children:t(o,{...e,label:e.label??"Label",options:l})}),c=e=>t(a,{title:"Select - many options",children:t(o,{...e,label:e.label??"Label",options:P})});var b,u,S;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`(args: SingleSelectProps) => {
  return <StoryTemplate title="Select - overview" gap="25px" display="grid" columnsAmount={2}>
      <Select {...args} label={args.label ?? 'Label'} options={options} />
      <Select {...args} label={args.label ?? 'Label'} required options={options} />
      <Select {...args} label={args.label ?? 'Label'} isDisabled options={options} value={options[3]} />
      <Select {...args} label={args.label ?? 'Label'} readOnly options={options} value={options[3]} />
      <Select {...args} label={args.label ?? 'Label'} icon={CourtIcon} options={options} />
      <Select {...args} label={args.label ?? 'Label'} errorMessage="Dette er en feilmelding" options={options} />
      <Select {...args} label={args.label ?? 'Label'} tip="Dette er en hjelpetekst" options={options} />
      <Select {...args} label={args.label ?? 'Label'} placeholder="Annerledes placeholder" options={options} />
      <Select {...args} label={args.label ?? 'Label'} defaultValue={options[0]} options={options} />
      <Select {...args} label={args.label ?? 'Label'} value={options[3]} options={options} />
      <Select {...args} options={options} />
    </StoryTemplate>;
}`,...(S=(u=r.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};var d,v,g;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`(args: SingleSelectProps) => {
  return <StoryTemplate title="Select - overview sizes" display="grid" columnsAmount={2}>
      <Select {...args} componentSize="medium" options={options} />
      <Select {...args} componentSize="medium" icon={CourtIcon} options={options} />
      <Select {...args} componentSize="small" options={options} />
      <Select {...args} componentSize="small" icon={CourtIcon} options={options} />
      <Select {...args} componentSize="tiny" options={options} />
      <Select {...args} componentSize="tiny" icon={CourtIcon} options={options} />
    </StoryTemplate>;
}`,...(g=(v=n.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var y,A,L;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`(args: SingleSelectProps) => {
  return <StoryTemplate title="Select - default">
      <Select {...args} options={options} />
    </StoryTemplate>;
}`,...(L=(A=i.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var h,z,f;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`(args: SingleSelectProps) => {
  const groupedOptions = [{
    label: 'Gruppe 1',
    options: [{
      label: 'Alternativ 1',
      value: 'Alternativ 1'
    }, {
      label: 'Alternativ 2',
      value: 'Alternativ 2'
    }]
  }, {
    label: 'Gruppe 2',
    options: [{
      label: 'Alternativ 3',
      value: 'Alternativ 3'
    }, {
      label: 'Alternativ 4',
      value: 'Alternativ 4'
    }]
  }];
  return <StoryTemplate title="Select - with groups">
      <Select {...args} options={groupedOptions} />
    </StoryTemplate>;
}`,...(f=(z=s.parameters)==null?void 0:z.docs)==null?void 0:f.source}}};var T,w,O;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`(args: SingleSelectProps) => {
  return <StoryTemplate title="Select - with label">
      <Select {...args} label={args.label ?? 'Label'} options={options} />
    </StoryTemplate>;
}`,...(O=(w=p.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};var x,D,I;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`(args: SingleSelectProps) => {
  return <StoryTemplate title="Select - many options">
      <Select {...args} label={args.label ?? 'Label'} options={optionsLong} />
    </StoryTemplate>;
}`,...(I=(D=c.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};const ce=["Overview","OverviewSizes","Default","WithGroups","WithLabel","ManyItems"];export{i as Default,c as ManyItems,r as Overview,n as OverviewSizes,s as WithGroups,p as WithLabel,ce as __namedExportsOrder,pe as default};
//# sourceMappingURL=Select.stories-d88aa7c9.js.map
