import{j as r,a as e}from"./jsx-runtime-e43ccb36.js";import{S as s}from"./StoryTemplate-63bfa922.js";import{C as t}from"./CheckboxGroup-e2822ca8.js";import{C as l}from"./Checkbox-b9fda706.js";const k={title:"dds-components/Checkbox/CheckboxGroup",component:t,argTypes:{label:{control:{type:"text"}},tip:{control:{type:"text"}},errorMessage:{control:{type:"text"}},required:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}},indeterminate:{control:{type:"boolean"}}},parameters:{controls:{exclude:["style","className"]}}},b=o=>r(s,{title:"CheckboxGroup - overview",display:"grid",columnsAmount:2,children:[r(t,{...o,label:o.label??"Label",children:[e(l,{label:"Option 1"}),e(l,{label:"Option 2"}),e(l,{label:"Option 3"})]}),r(t,{...o,label:o.label??"Label",direction:"column",children:[e(l,{label:"Option 1"}),e(l,{label:"Option 2"}),e(l,{label:"Option 3"})]}),r(t,{...o,label:o.label??"Label",required:!0,children:[e(l,{label:"Option 1"}),e(l,{label:"Option 2"}),e(l,{label:"Option 3"})]}),r(t,{...o,label:o.label??"Label",direction:"column",required:!0,children:[e(l,{label:"Option 1"}),e(l,{label:"Option 2"}),e(l,{label:"Option 3"})]}),r(t,{...o,label:o.label??"Label",tip:"Dette er en hjelpetekst",children:[e(l,{label:"Option 1"}),e(l,{label:"Option 2"}),e(l,{label:"Option 3"})]}),r(t,{...o,label:o.label??"Label",direction:"column",tip:"Dette er en hjelpetekst",children:[e(l,{label:"Option 1"}),e(l,{label:"Option 2"}),e(l,{label:"Option 3"})]}),r(t,{...o,label:o.label??"Label",errorMessage:"Dette er en feilmelding",children:[e(l,{error:!0,label:"Option 1"}),e(l,{error:!0,label:"Option 2"}),e(l,{error:!0,label:"Option 3"})]}),r(t,{...o,label:o.label??"Label",direction:"column",errorMessage:"Dette er en feilmelding",children:[e(l,{error:!0,label:"Option 1"}),e(l,{error:!0,label:"Option 2"}),e(l,{error:!0,label:"Option 3"})]}),r(t,{...o,label:o.label??"Label",tip:"Dette er en hjelpetekst",errorMessage:"Dette er en feilmelding",children:[e(l,{error:!0,label:"Option 1"}),e(l,{error:!0,label:"Option 2"}),e(l,{error:!0,label:"Option 3"})]}),r(t,{...o,label:o.label??"Label",direction:"column",tip:"Dette er en hjelpetekst",errorMessage:"Dette er en feilmelding",children:[e(l,{error:!0,label:"Option 1"}),e(l,{error:!0,label:"Option 2"}),e(l,{error:!0,label:"Option 3"})]})]}),a=o=>e(s,{title:"CheckboxGroup - default",children:r(t,{...o,label:o.label??"Label",children:[e(l,{label:"Option 1"}),e(l,{label:"Option 2"}),e(l,{label:"Option 3"})]})});var n,i,p;b.parameters={...b.parameters,docs:{...(n=b.parameters)==null?void 0:n.docs,source:{originalSource:`(args: CheckboxGroupProps) => {
  return <StoryTemplate title="CheckboxGroup - overview" display="grid" columnsAmount={2}>
      <CheckboxGroup {...args} label={args.label ?? 'Label'}>
        <Checkbox label="Option 1" />
        <Checkbox label="Option 2" />
        <Checkbox label="Option 3" />
      </CheckboxGroup>
      <CheckboxGroup {...args} label={args.label ?? 'Label'} direction="column">
        <Checkbox label="Option 1" />
        <Checkbox label="Option 2" />
        <Checkbox label="Option 3" />
      </CheckboxGroup>
      <CheckboxGroup {...args} label={args.label ?? 'Label'} required>
        <Checkbox label="Option 1" />
        <Checkbox label="Option 2" />
        <Checkbox label="Option 3" />
      </CheckboxGroup>
      <CheckboxGroup {...args} label={args.label ?? 'Label'} direction="column" required>
        <Checkbox label="Option 1" />
        <Checkbox label="Option 2" />
        <Checkbox label="Option 3" />
      </CheckboxGroup>
      <CheckboxGroup {...args} label={args.label ?? 'Label'} tip="Dette er en hjelpetekst">
        <Checkbox label="Option 1" />
        <Checkbox label="Option 2" />
        <Checkbox label="Option 3" />
      </CheckboxGroup>
      <CheckboxGroup {...args} label={args.label ?? 'Label'} direction="column" tip="Dette er en hjelpetekst">
        <Checkbox label="Option 1" />
        <Checkbox label="Option 2" />
        <Checkbox label="Option 3" />
      </CheckboxGroup>
      <CheckboxGroup {...args} label={args.label ?? 'Label'} errorMessage="Dette er en feilmelding">
        <Checkbox error label="Option 1" />
        <Checkbox error label="Option 2" />
        <Checkbox error label="Option 3" />
      </CheckboxGroup>
      <CheckboxGroup {...args} label={args.label ?? 'Label'} direction="column" errorMessage="Dette er en feilmelding">
        <Checkbox error label="Option 1" />
        <Checkbox error label="Option 2" />
        <Checkbox error label="Option 3" />
      </CheckboxGroup>
      <CheckboxGroup {...args} label={args.label ?? 'Label'} tip="Dette er en hjelpetekst" errorMessage="Dette er en feilmelding">
        <Checkbox error label="Option 1" />
        <Checkbox error label="Option 2" />
        <Checkbox error label="Option 3" />
      </CheckboxGroup>
      <CheckboxGroup {...args} label={args.label ?? 'Label'} direction="column" tip="Dette er en hjelpetekst" errorMessage="Dette er en feilmelding">
        <Checkbox error label="Option 1" />
        <Checkbox error label="Option 2" />
        <Checkbox error label="Option 3" />
      </CheckboxGroup>
    </StoryTemplate>;
}`,...(p=(i=b.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var c,h,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`(args: CheckboxGroupProps) => {
  return <StoryTemplate title="CheckboxGroup - default">
      <CheckboxGroup {...args} label={args.label ?? 'Label'}>
        <Checkbox label="Option 1" />
        <Checkbox label="Option 2" />
        <Checkbox label="Option 3" />
      </CheckboxGroup>
    </StoryTemplate>;
}`,...(u=(h=a.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};const x=["Overview","Default"],G=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Overview:b,__namedExportsOrder:x,default:k},Symbol.toStringTag,{value:"Module"}));export{G as C,a as D};
//# sourceMappingURL=CheckboxGroup.stories-31385b3a.js.map
