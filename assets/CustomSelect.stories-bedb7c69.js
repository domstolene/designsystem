import{a as t,j as s,F as c}from"./jsx-runtime-e43ccb36.js";import{S as m}from"./StoryTemplate-f03f5b44.js";import{s as l}from"./ddsReferenceTokens-fe3c594e.js";import{S as a,c as d}from"./Select-68318c9c.js";import"./index-1b03fe98.js";import"./chunk-HLWAVYOI-b004f838.js";import"./iframe-0e670e3d.js";import"../sb-preview/runtime.js";import"./index-6d191f71.js";import"./index-6fd5a17b.js";import"./index-356e4a49.js";import"./floating-ui.dom-a5fd4560.js";import"./libraryAdd-37aef24e.js";import"./Icon-56c20d0c.js";import"./BaseComponentProps-3902fbf1.js";import"./Input.styles-d07d27d7.js";import"./Caption-848a816b.js";import"./TextOverflowEllipsis-c2a9fc8f.js";import"./Typography-dcf6ef21.js";import"./Heading-9ec1ef64.js";import"./Label-393cff6f.js";import"./Legend-6f4c2491.js";import"./Link-e04d3bba.js";import"./Paragraph-ba6a9c6f.js";import"./scrollbarStyling-6a0ce14f.js";import"./ScrollableContainer.tokens-f54e5649.js";import"./icon-aa5b86b3.js";import"./renderInputMessage-03137e0e.js";import"./InputMessage-418665bb.js";const U={title:"dds-components/Select/CustomSelect",component:a,argTypes:{label:{control:{type:"text"}},tip:{control:{type:"text"}},errorMessage:{control:{type:"text"}},width:{control:{type:"text"}},placeholder:{control:{type:"text"}},isDisabled:{control:{type:"boolean"}},isClearable:{control:{type:"boolean"}},required:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}},isLoading:{control:{type:"boolean"}}},parameters:{controls:{exclude:["style","className","items","value","defaultValue"]}}},g=d("Alternativ 1","Alternativ 2","Veldig langt alternativ her veldig langt alternativ her","Alternativ 3","Alternativ 4"),r=e=>t(m,{title:"Select - custom element",display:"block",children:t(a,{...e,label:e.label||"Egendefinert styling",options:g,customOptionElement:o=>t(x,{isSelected:o.isSelected,children:o.children}),customSingleValueElement:o=>t(y,{children:o.children})})}),b=l.div`
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
}`,...(p=(n=r.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const W=["Example"];export{r as Example,W as __namedExportsOrder,U as default};
//# sourceMappingURL=CustomSelect.stories-bedb7c69.js.map
