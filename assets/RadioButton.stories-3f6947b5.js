import{j as u,a}from"./jsx-runtime-e43ccb36.js";import{S as c}from"./StoryTemplate-093416fc.js";import{R as t}from"./RadioButton-71beef05.js";const m={title:"dds-components/RadioButton/RadioButton",component:t,argTypes:{label:{control:{type:"text"}},error:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}},className:{control:{type:"text"}}}},l=e=>u(c,{title:"Radio button - overview",display:"grid",columnsAmount:2,children:[a(t,{...e,label:e.label||"Default"}),a(t,{...e,label:e.label||"Checked",checked:!0}),a(t,{...e,label:e.label||"Disabled",disabled:!0}),a(t,{...e,label:e.label||"Disabled checked",disabled:!0,checked:!0}),a(t,{...e,label:e.label||"Error",error:!0})]}),o=e=>u(c,{title:"Radio button - default",children:[a(t,{...e,label:e.label??"Label",name:"test"}),a(t,{...e,label:e.label??"Label",name:"test"})]});var r,s,d;l.parameters={...l.parameters,docs:{...(r=l.parameters)==null?void 0:r.docs,source:{originalSource:`(args: RadioButtonProps) => {
  return <StoryTemplate title="Radio button - overview" display="grid" columnsAmount={2}>
      <RadioButton {...args} label={args.label || 'Default'} />
      <RadioButton {...args} label={args.label || 'Checked'} checked />
      <RadioButton {...args} label={args.label || 'Disabled'} disabled />
      <RadioButton {...args} label={args.label || 'Disabled checked'} disabled checked />
      <RadioButton {...args} label={args.label || 'Error'} error />
    </StoryTemplate>;
}`,...(d=(s=l.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var n,i,b;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`(args: RadioButtonProps) => {
  return <StoryTemplate title="Radio button - default">
      <RadioButton {...args} label={args.label ?? 'Label'} name="test" />
      <RadioButton {...args} label={args.label ?? 'Label'} name="test" />
    </StoryTemplate>;
}`,...(b=(i=o.parameters)==null?void 0:i.docs)==null?void 0:b.source}}};const p=["Overview","Default"],f=Object.freeze(Object.defineProperty({__proto__:null,Default:o,Overview:l,__namedExportsOrder:p,default:m},Symbol.toStringTag,{value:"Module"}));export{o as D,f as R};
//# sourceMappingURL=RadioButton.stories-3f6947b5.js.map
