import{a as t,s as l,j as s,F as c}from"./ddsReferenceTokens-647ce456.js";import{S as m}from"./StoryTemplate-ccc1e3e8.js";import{S as a,c as d}from"./Select-32d03f15.js";import"./index-ebeaab24.js";import"./chunk-PCJTTTQV-961cba5e.js";import"./iframe-1ae61cdb.js";import"../sb-preview/runtime.js";import"./index-72bda2b9.js";import"./index-9c09ad76.js";import"./index-d475d2ea.js";import"./index-356e4a49.js";import"./floating-ui.dom.browser.min-fc8c1a2d.js";import"./libraryAdd-15469728.js";import"./Icon-e6324a43.js";import"./BaseComponentProps-a100791d.js";import"./Input.styles-711330f2.js";import"./Caption-5c254d72.js";import"./TextOverflowEllipsis-e3546c5b.js";import"./Typography-1747463b.js";import"./Heading-dc72d0b9.js";import"./Label-23c96940.js";import"./Legend-dbc3ced6.js";import"./Link-9aff7843.js";import"./Paragraph-3340e0ea.js";import"./scrollbarStyling-d0d816c9.js";import"./ScrollableContainer.tokens-e480b498.js";import"./icon-aa5b86b3.js";import"./renderInputMessage-b6a682b1.js";import"./InputMessage-17176972.js";const U={title:"dds-components/Select/CustomSelect",component:a,argTypes:{label:{control:{type:"text"}},tip:{control:{type:"text"}},errorMessage:{control:{type:"text"}},width:{control:{type:"text"}},placeholder:{control:{type:"text"}},isDisabled:{control:{type:"boolean"}},isClearable:{control:{type:"boolean"}},required:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}},isLoading:{control:{type:"boolean"}}},parameters:{controls:{exclude:["style","className","items","value","defaultValue"]}}},g=d("Alternativ 1","Alternativ 2","Veldig langt alternativ her veldig langt alternativ her","Alternativ 3","Alternativ 4"),r=e=>t(m,{title:"Select - custom element",display:"block",children:t(a,{...e,label:e.label||"Egendefinert styling",options:g,customOptionElement:o=>t(x,{isSelected:o.isSelected,children:o.children}),customSingleValueElement:o=>t(y,{children:o.children})})}),b=l.div`
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
//# sourceMappingURL=CustomSelect.stories-49729aa6.js.map
