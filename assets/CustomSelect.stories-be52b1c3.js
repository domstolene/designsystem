import{j as t,s as r,a as p,F as c}from"./focus-visible-35158c22.js";import{R as d}from"./storybook-components-e24cb579.js";import{S as a,c as m}from"./Select-da5723e9.js";import"./index-d47b1f5a.js";import"./chunk-PCJTTTQV-2606e572.js";import"./iframe-43596611.js";import"../sb-preview/runtime.js";import"./index-db9ff070.js";import"./index-d475d2ea.js";import"./index-356e4a49.js";import"./dds-core-29d22035.js";import"./dds-icons-7a922c3a.js";import"./dds-form-b2eacd8d.js";import"./dds-typography-e761338c.js";import"./scrollbarStyling-1bd29018.js";import"./ScrollableContainer.tokens-66d4a31f.js";import"./icon-aa5b86b3.js";import"./renderInputMessage-3a3d5367.js";import"./InputMessage-7bbeab57.js";const P={title:"dds-components/Select/CustomSelect",component:a,argTypes:{label:{control:{type:"text"}},tip:{control:{type:"text"}},errorMessage:{control:{type:"text"}},width:{control:{type:"text"}},placeholder:{control:{type:"text"}},isDisabled:{control:{type:"boolean"}},isClearable:{control:{type:"boolean"}},required:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}},isLoading:{control:{type:"boolean"}}},parameters:{controls:{exclude:["style","className","items","value","defaultValue"]}}},g=m("Alternativ 1","Alternativ 2","Veldig langt alternativ her veldig langt alternativ her","Alternativ 3","Alternativ 4"),l=e=>t(d,{title:"Select - custom element",display:"block",children:t(a,{...e,label:e.label||"Egendefinert styling",options:g,customOptionElement:o=>t(x,{isSelected:o.isSelected,children:o.children}),customSingleValueElement:o=>t(y,{children:o.children})})}),b=r.div`
  border-radius: 16px;
  background: #bbdefb;
  width: 32px;
  height: 32px;
  min-width: 32px;
  border: ${e=>e.selected&&"2px solid rgba(46, 120, 170, 1)"};
`,u=r.div`
  border-radius: 12px;
  background: #bbdefb;
  width: 24px;
  height: 24px;
  min-width: 24px;
`,x=({isSelected:e,children:o})=>p(c,{children:[t(b,{selected:e}),o]}),S=r.div`
  display: flex;
  gap: 8px;
`,h=r.div`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,y=({children:e})=>p(S,{children:[t(u,{}),t(h,{children:e})]});var n,i,s;l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:`(args: SingleSelectProps) => {
  return <StoryTemplate title="Select - custom element" display="block">
      <Select {...args} label={args.label || 'Egendefinert styling'} options={options} customOptionElement={props => <OptionElement isSelected={props.isSelected}>
            {props.children}
          </OptionElement>} customSingleValueElement={props => <SingleElement>{props.children}</SingleElement>} />
    </StoryTemplate>;
}`,...(s=(i=l.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const R=["Example"];export{l as Example,R as __namedExportsOrder,P as default};
//# sourceMappingURL=CustomSelect.stories-be52b1c3.js.map
