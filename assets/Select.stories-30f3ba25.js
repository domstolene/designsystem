import{a as I,j as t}from"./focus-visible-c2e9b88d.js";import{R as r}from"./storybook-components-c9cbefc3.js";import{S as o,c as G}from"./Select-36e1d96b.js";import{C as m}from"./court-656a1b1a.js";import"./index-ebeaab24.js";import"./chunk-PCJTTTQV-a67c1498.js";import"./iframe-b2bf83f2.js";import"../sb-preview/runtime.js";import"./index-72bda2b9.js";import"./index-9c09ad76.js";import"./index-d475d2ea.js";import"./index-356e4a49.js";import"./floating-ui.dom.browser.min-c4825b7a.js";import"./Input.tokens-0612e464.js";import"./Typography.utils-99dd1e07.js";import"./focusVisible-75802ac7.js";import"./selection-fae9d0a8.js";import"./danger-157ad055.js";import"./hover-d616d034.js";import"./Icon-819df738.js";import"./BaseComponentProps-bb0d5515.js";import"./scrollbarStyling-a46ac0ea.js";import"./ScrollableContainer.tokens-4d8ec996.js";import"./Input.utils-f888acf1.js";import"./InputMessage-bb06ca10.js";import"./error-e0532677.js";import"./SvgWrapper-cd7fa512.js";import"./Typography-9f10a259.js";import"./color-a12930ac.js";import"./searchFilter-4f5edf43.js";import"./check-6e9d4d4d.js";import"./closeSmall-b6c9ae01.js";import"./chevronDown-41304f61.js";import"./idGenerator-c29473b2.js";import"./Label-ec3ecd5b.js";import"./RequiredMarker-326a4040.js";const ve={title:"dds-components/Select/SingleValue",component:o,argTypes:{label:{control:{type:"text"}},tip:{control:{type:"text"}},errorMessage:{control:{type:"text"}},width:{control:{type:"text"}},placeholder:{control:{type:"text"}},isDisabled:{control:{type:"boolean"}},isClearable:{control:{type:"boolean"}},required:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}},isLoading:{control:{type:"boolean"}}},parameters:{controls:{exclude:["style","className","items","value","defaultValue"]}}},l=G("Alternativ 1","Alternativ 2","Veldig langt alternativ her veldig langt alternativ her","Alternativ 3","Alternativ 4"),P=G("Alternativ 1","Alternativ 2","Veldig langt alternativ her veldig langt alternativ her","Alternativ 3","Alternativ 4","Alternativ 5","Alternativ 6","Alternativ 7"),a=e=>I(r,{title:"Select - overview",gap:"25px",display:"grid",columnsAmount:2,children:[t(o,{...e,label:e.label??"Label",options:l}),t(o,{...e,label:e.label??"Label",required:!0,options:l}),t(o,{...e,label:e.label??"Label",isDisabled:!0,options:l,value:l[3]}),t(o,{...e,label:e.label??"Label",readOnly:!0,options:l,value:l[3]}),t(o,{...e,label:e.label??"Label",icon:m,options:l}),t(o,{...e,label:e.label??"Label",errorMessage:"Dette er en feilmelding",options:l}),t(o,{...e,label:e.label??"Label",tip:"Dette er en hjelpetekst",options:l}),t(o,{...e,label:e.label??"Label",placeholder:"Annerledes placeholder",options:l}),t(o,{...e,label:e.label??"Label",defaultValue:l[0],options:l}),t(o,{...e,label:e.label??"Label",value:l[3],options:l}),t(o,{...e,options:l})]}),i=e=>I(r,{title:"Select - overview sizes",display:"grid",columnsAmount:2,children:[t(o,{...e,componentSize:"medium",options:l}),t(o,{...e,componentSize:"medium",icon:m,options:l}),t(o,{...e,componentSize:"small",options:l}),t(o,{...e,componentSize:"small",icon:m,options:l}),t(o,{...e,componentSize:"tiny",options:l}),t(o,{...e,componentSize:"tiny",icon:m,options:l})]}),n=e=>t(r,{title:"Select - default",children:t(o,{...e,options:l})}),s=e=>t(r,{title:"Select - with groups",children:t(o,{...e,options:[{label:"Gruppe 1",options:[{label:"Alternativ 1",value:"Alternativ 1"},{label:"Alternativ 2",value:"Alternativ 2"}]},{label:"Gruppe 2",options:[{label:"Alternativ 3",value:"Alternativ 3"},{label:"Alternativ 4",value:"Alternativ 4"}]}]})}),p=e=>t(r,{title:"Select - with label",children:t(o,{...e,label:e.label??"Label",options:l})}),c=e=>t(r,{title:"Select - many options",children:t(o,{...e,label:e.label??"Label",options:P})});var b,u,S;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`(args: SingleSelectProps) => {
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
}`,...(S=(u=a.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};var d,v,g;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`(args: SingleSelectProps) => {
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
}`,...(f=(z=s.parameters)==null?void 0:z.docs)==null?void 0:f.source}}};var w,O,T;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`(args: SingleSelectProps) => {
  return <StoryTemplate title="Select - with label">
      <Select {...args} label={args.label ?? 'Label'} options={options} />
    </StoryTemplate>;
}`,...(T=(O=p.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var x,D,C;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`(args: SingleSelectProps) => {
  return <StoryTemplate title="Select - many options">
      <Select {...args} label={args.label ?? 'Label'} options={optionsLong} />
    </StoryTemplate>;
}`,...(C=(D=c.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};const ge=["Overview","OverviewSizes","Default","WithGroups","WithLabel","ManyItems"];export{n as Default,c as ManyItems,a as Overview,i as OverviewSizes,s as WithGroups,p as WithLabel,ge as __namedExportsOrder,ve as default};
//# sourceMappingURL=Select.stories-30f3ba25.js.map
