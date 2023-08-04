import{a as t,s as r,j as p,F as c}from"./ddsReferenceTokens-f1d35829.js";import{R as m}from"./storybook-components-b14ef24f.js";import{S as a,c as d}from"./Select-19cd100b.js";import"./index-d47b1f5a.js";import"./chunk-PCJTTTQV-0127294b.js";import"./iframe-3cdea761.js";import"../sb-preview/runtime.js";import"./index-db9ff070.js";import"./index-d475d2ea.js";import"./index-356e4a49.js";import"./focus-visible-bfce03b6.js";import"./react-select.esm-f86f6db3.js";import"./dds-core-c67132cd.js";import"./dds-icons-265d9665.js";import"./dds-form-9b45fc8d.js";import"./dds-typography-cc6cb429.js";import"./scrollbarStyling-5cc839fb.js";import"./ScrollableContainer.tokens-c202eeaf.js";import"./icon-aa5b86b3.js";import"./renderInputMessage-d83d5631.js";import"./InputMessage-e040ee1d.js";const $={title:"dds-components/Select/CustomSelect",component:a,argTypes:{label:{control:{type:"text"}},tip:{control:{type:"text"}},errorMessage:{control:{type:"text"}},width:{control:{type:"text"}},placeholder:{control:{type:"text"}},isDisabled:{control:{type:"boolean"}},isClearable:{control:{type:"boolean"}},required:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}},isLoading:{control:{type:"boolean"}}},parameters:{controls:{exclude:["style","className","items","value","defaultValue"]}}},g=d("Alternativ 1","Alternativ 2","Veldig langt alternativ her veldig langt alternativ her","Alternativ 3","Alternativ 4"),l=e=>t(m,{title:"Select - custom element",display:"block",children:t(a,{...e,label:e.label||"Egendefinert styling",options:g,customOptionElement:o=>t(x,{isSelected:o.isSelected,children:o.children}),customSingleValueElement:o=>t(y,{children:o.children})})}),b=r.div`
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
`,y=({children:e})=>p(S,{children:[t(u,{}),t(h,{children:e})]});var i,n,s;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:`(args: SingleSelectProps) => {
  return <StoryTemplate title="Select - custom element" display="block">
      <Select {...args} label={args.label || 'Egendefinert styling'} options={options} customOptionElement={props => <OptionElement isSelected={props.isSelected}>
            {props.children}
          </OptionElement>} customSingleValueElement={props => <SingleElement>{props.children}</SingleElement>} />
    </StoryTemplate>;
}`,...(s=(n=l.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const z=["Example"];export{l as Example,z as __namedExportsOrder,$ as default};
//# sourceMappingURL=CustomSelect.stories-c693b3b0.js.map
