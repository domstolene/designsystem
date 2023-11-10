import{j as u,a as l}from"./jsx-runtime-e43ccb36.js";import{S as b}from"./StoryTemplate-1f1a752a.js";import{C as r}from"./Checkbox-e14fc543.js";const x={title:"dds-components/Checkbox/Checkbox",component:r,argTypes:{label:{control:{type:"text"}},error:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}},indeterminate:{control:{type:"boolean"}}},parameters:{controls:{exclude:["style","className"]}}},a=e=>u(b,{title:"Checkbox - overview",display:"grid",children:[l(r,{...e,label:e.label||"Default"}),l(r,{...e,label:e.label||"Checked",checked:!0}),l(r,{...e,label:e.label||"Indeterminate",indeterminate:!0}),l(r,{...e,label:e.label||"Disabled",disabled:!0}),l(r,{...e,label:e.label||"Disabled checked",disabled:!0,checked:!0}),l(r,{...e,label:e.label||"Disabled indeterminate",disabled:!0,indeterminate:!0}),l(r,{...e,label:e.label||"Error",error:!0}),l(r,{...e,label:e.label||"Error checked",error:!0,checked:!0}),l(r,{...e})]}),t=e=>l(b,{title:"Checkbox - default",display:"block",children:l(r,{...e})}),o=e=>l(b,{title:"Checkbox - with label",display:"block",children:l(r,{...e,label:e.label??"Label"})});var c,s,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`(args: CheckboxProps) => {
  return <StoryTemplate title="Checkbox - overview" display="grid">
      <Checkbox {...args} label={args.label || 'Default'} />
      <Checkbox {...args} label={args.label || 'Checked'} checked />
      <Checkbox {...args} label={args.label || 'Indeterminate'} indeterminate />
      <Checkbox {...args} label={args.label || 'Disabled'} disabled />
      <Checkbox {...args} label={args.label || 'Disabled checked'} disabled checked />
      <Checkbox {...args} label={args.label || 'Disabled indeterminate'} disabled indeterminate />
      <Checkbox {...args} label={args.label || 'Error'} error />
      <Checkbox {...args} label={args.label || 'Error checked'} error checked />
      <Checkbox {...args} />
    </StoryTemplate>;
}`,...(d=(s=a.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var i,n,h;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`(args: CheckboxProps) => {
  return <StoryTemplate title="Checkbox - default" display="block">
      <Checkbox {...args} />
    </StoryTemplate>;
}`,...(h=(n=t.parameters)==null?void 0:n.docs)==null?void 0:h.source}}};var p,k,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`(args: CheckboxProps) => {
  return <StoryTemplate title="Checkbox - with label" display="block">
      <Checkbox {...args} label={args.label ?? 'Label'} />
    </StoryTemplate>;
}`,...(m=(k=o.parameters)==null?void 0:k.docs)==null?void 0:m.source}}};const C=["Overview","Default","WithLabel"],f=Object.freeze(Object.defineProperty({__proto__:null,Default:t,Overview:a,WithLabel:o,__namedExportsOrder:C,default:x},Symbol.toStringTag,{value:"Module"}));export{f as C,t as D};
//# sourceMappingURL=Checkbox.stories-e05ce94c.js.map
