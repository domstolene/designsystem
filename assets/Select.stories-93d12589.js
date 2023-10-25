import{j as C,a as t}from"./jsx-runtime-e43ccb36.js";import{S as a}from"./StoryTemplate-093416fc.js";import{e as m}from"./libraryAdd-72c0bfa3.js";import"./Icon-eb542f51.js";import{S as o,c as G}from"./Select-196b46d8.js";import"./index-1b03fe98.js";import"./ddsReferenceTokens-a28ebf03.js";import"./chunk-HLWAVYOI-0b8d4c76.js";import"./iframe-8b23edcd.js";import"../sb-preview/runtime.js";import"./index-6d191f71.js";import"./index-6fd5a17b.js";import"./index-356e4a49.js";import"./BaseComponentProps-b6ad9f7d.js";import"./hoist-non-react-statics.cjs-6b80b75d.js";import"./floating-ui.dom-a5fd4560.js";import"./Input.styles-97d4f19a.js";import"./Caption-d810b87c.js";import"./TextOverflowEllipsis-6cc9a60a.js";import"./Typography-d13ef156.js";import"./Heading-0c5437bc.js";import"./Label-05114518.js";import"./Legend-9969638c.js";import"./Link-c264ab95.js";import"./Paragraph-88055bd8.js";import"./scrollbarStyling-c2e6e782.js";import"./ScrollableContainer.tokens-fec9d215.js";import"./icon-aa5b86b3.js";import"./renderInputMessage-4f5fcc5d.js";import"./InputMessage-235fa100.js";const ce={title:"dds-components/Select/SingleValue",component:o,argTypes:{label:{control:{type:"text"}},tip:{control:{type:"text"}},errorMessage:{control:{type:"text"}},width:{control:{type:"text"}},placeholder:{control:{type:"text"}},isDisabled:{control:{type:"boolean"}},isClearable:{control:{type:"boolean"}},required:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}},isLoading:{control:{type:"boolean"}}},parameters:{controls:{exclude:["style","className","items","value","defaultValue"]}}},l=G("Alternativ 1","Alternativ 2","Veldig langt alternativ her veldig langt alternativ her","Alternativ 3","Alternativ 4"),P=G("Alternativ 1","Alternativ 2","Veldig langt alternativ her veldig langt alternativ her","Alternativ 3","Alternativ 4","Alternativ 5","Alternativ 6","Alternativ 7"),r=e=>C(a,{title:"Select - overview",gap:"25px",display:"grid",columnsAmount:2,children:[t(o,{...e,label:e.label??"Label",options:l}),t(o,{...e,label:e.label??"Label",required:!0,options:l}),t(o,{...e,label:e.label??"Label",isDisabled:!0,options:l,value:l[3]}),t(o,{...e,label:e.label??"Label",readOnly:!0,options:l,value:l[3]}),t(o,{...e,label:e.label??"Label",icon:m,options:l}),t(o,{...e,label:e.label??"Label",errorMessage:"Dette er en feilmelding",options:l}),t(o,{...e,label:e.label??"Label",tip:"Dette er en hjelpetekst",options:l}),t(o,{...e,label:e.label??"Label",placeholder:"Annerledes placeholder",options:l}),t(o,{...e,label:e.label??"Label",defaultValue:l[0],options:l}),t(o,{...e,label:e.label??"Label",value:l[3],options:l}),t(o,{...e,options:l})]}),i=e=>C(a,{title:"Select - overview sizes",display:"grid",columnsAmount:2,children:[t(o,{...e,componentSize:"medium",options:l}),t(o,{...e,componentSize:"medium",icon:m,options:l}),t(o,{...e,componentSize:"small",options:l}),t(o,{...e,componentSize:"small",icon:m,options:l}),t(o,{...e,componentSize:"tiny",options:l}),t(o,{...e,componentSize:"tiny",icon:m,options:l})]}),n=e=>t(a,{title:"Select - default",children:t(o,{...e,options:l})}),s=e=>t(a,{title:"Select - with groups",children:t(o,{...e,options:[{label:"Gruppe 1",options:[{label:"Alternativ 1",value:"Alternativ 1"},{label:"Alternativ 2",value:"Alternativ 2"}]},{label:"Gruppe 2",options:[{label:"Alternativ 3",value:"Alternativ 3"},{label:"Alternativ 4",value:"Alternativ 4"}]}]})}),p=e=>t(a,{title:"Select - with label",children:t(o,{...e,label:e.label??"Label",options:l})}),c=e=>t(a,{title:"Select - many options",children:t(o,{...e,label:e.label??"Label",options:P})});var b,u,S;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`(args: SingleSelectProps) => {
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
}`,...(S=(u=r.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};var d,v,g;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`(args: SingleSelectProps) => {
  return <StoryTemplate title="Select - overview sizes" display="grid" columnsAmount={2}>
      <Select {...args} componentSize="medium" options={options} />
      <Select {...args} componentSize="medium" icon={CourtIcon} options={options} />
      <Select {...args} componentSize="small" options={options} />
      <Select {...args} componentSize="small" icon={CourtIcon} options={options} />
      <Select {...args} componentSize="tiny" options={options} />
      <Select {...args} componentSize="tiny" icon={CourtIcon} options={options} />
    </StoryTemplate>;
}`,...(g=(v=i.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var y,A,L;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`(args: SingleSelectProps) => {
  return <StoryTemplate title="Select - default">
      <Select {...args} options={options} />
    </StoryTemplate>;
}`,...(L=(A=n.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var h,z,f;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`(args: SingleSelectProps) => {
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
}`,...(I=(D=c.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};const me=["Overview","OverviewSizes","Default","WithGroups","WithLabel","ManyItems"];export{n as Default,c as ManyItems,r as Overview,i as OverviewSizes,s as WithGroups,p as WithLabel,me as __namedExportsOrder,ce as default};
//# sourceMappingURL=Select.stories-93d12589.js.map
