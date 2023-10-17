import{a as t,s as l,j as s,F as c}from"./ddsReferenceTokens-ceb64027.js";import{S as m}from"./StoryTemplate-dc672c6b.js";import{S as a,c as d}from"./Select-80fcf949.js";import"./index-1b03fe98.js";import"./chunk-S4VUQJ4A-98be3270.js";import"./iframe-524d0a09.js";import"../sb-preview/runtime.js";import"./index-4a89c107.js";import"./index-6fd5a17b.js";import"./index-356e4a49.js";import"./floating-ui.dom-a5fd4560.js";import"./libraryAdd-21442db5.js";import"./Icon-db6dd7fc.js";import"./BaseComponentProps-d435d0d0.js";import"./Input.styles-82cfcbdb.js";import"./Caption-d066edab.js";import"./TextOverflowEllipsis-e584ab25.js";import"./Typography-56baa34a.js";import"./Heading-d8600f49.js";import"./Label-10c93eb5.js";import"./Legend-0cba57ca.js";import"./Link-7a88da71.js";import"./Paragraph-5ad16720.js";import"./scrollbarStyling-ac52fe06.js";import"./ScrollableContainer.tokens-ffb04a93.js";import"./icon-aa5b86b3.js";import"./renderInputMessage-8d6f26ed.js";import"./InputMessage-214038d5.js";const R={title:"dds-components/Select/CustomSelect",component:a,argTypes:{label:{control:{type:"text"}},tip:{control:{type:"text"}},errorMessage:{control:{type:"text"}},width:{control:{type:"text"}},placeholder:{control:{type:"text"}},isDisabled:{control:{type:"boolean"}},isClearable:{control:{type:"boolean"}},required:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}},isLoading:{control:{type:"boolean"}}},parameters:{controls:{exclude:["style","className","items","value","defaultValue"]}}},g=d("Alternativ 1","Alternativ 2","Veldig langt alternativ her veldig langt alternativ her","Alternativ 3","Alternativ 4"),r=e=>t(m,{title:"Select - custom element",display:"block",children:t(a,{...e,label:e.label||"Egendefinert styling",options:g,customOptionElement:o=>t(x,{isSelected:o.isSelected,children:o.children}),customSingleValueElement:o=>t(y,{children:o.children})})}),b=l.div`
  border-radius: 16px;
  background: #bbdefb;
  width: 32px;
  height: 32px;
  min-width: 32px;
  border: ${e=>e.selected&&"2px solid rgba(46, 120, 170, 1)"};
`,u=l.div`
  border-radius: 12px;
  background: #bbdefb;
  width: 24px;
  height: 24px;
  min-width: 24px;
`,x=({isSelected:e,children:o})=>s(c,{children:[t(b,{selected:e}),o]}),S=l.div`
  display: flex;
  gap: 8px;
`,h=l.div`
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,y=({children:e})=>s(S,{children:[t(u,{}),t(h,{children:e})]});var i,n,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`(args: SingleSelectProps) => {
  return <StoryTemplate title="Select - custom element" display="block">
      <Select {...args} label={args.label || 'Egendefinert styling'} options={options} customOptionElement={props => <OptionElement isSelected={props.isSelected}>
            {props.children}
          </OptionElement>} customSingleValueElement={props => <SingleElement>{props.children}</SingleElement>} />
    </StoryTemplate>;
}`,...(p=(n=r.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const U=["Example"];export{r as Example,U as __namedExportsOrder,R as default};
//# sourceMappingURL=CustomSelect.stories-d6c6f287.js.map
