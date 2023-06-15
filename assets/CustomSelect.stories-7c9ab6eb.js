import{j as t,s as l,b as s,F as m}from"./focus-visible-17f12d09.js";import{R as c}from"./storybook-components-54c9cf1b.js";import{S as a,c as d}from"./Select-ca65e30f.js";import"./index-c6dae603.js";import"./index-f5116957.js";import"./iframe-439f8b57.js";import"../sb-preview/runtime.js";import"./index-519f2600.js";import"./index-eb008d06.js";import"./floating-ui.dom.browser.min-bfaefb31.js";import"./Input.tokens-b59eb2e2.js";import"./Typography.utils-3c68477b.js";import"./focusVisible-bd00be70.js";import"./selection-dced972e.js";import"./danger-18d99756.js";import"./hover-cea7b82c.js";import"./Icon-a968456f.js";import"./BaseComponentProps-bb0d5515.js";import"./scrollbarStyling-27f949d7.js";import"./ScrollableContainer.tokens-3dce5c89.js";import"./Input.utils-c0cbaed7.js";import"./InputMessage-ec06a7ed.js";import"./error-f74b99a0.js";import"./SvgWrapper-0812a1f2.js";import"./Typography-ddbe86f6.js";import"./color-0daeea22.js";import"./searchFilter-4f5edf43.js";import"./check-2d158827.js";import"./closeSmall-48b5218e.js";import"./chevronDown-dd1c1a45.js";import"./idGenerator-c29473b2.js";import"./Label-f2e173db.js";import"./RequiredMarker-e4206fe2.js";const Z={title:"dds-components/Select/CustomSelect",component:a,argTypes:{label:{control:{type:"text"}},tip:{control:{type:"text"}},errorMessage:{control:{type:"text"}},width:{control:{type:"text"}},placeholder:{control:{type:"text"}},isDisabled:{control:{type:"boolean"}},isClearable:{control:{type:"boolean"}},required:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}},isLoading:{control:{type:"boolean"}}},parameters:{controls:{exclude:["style","className","items","value","defaultValue"]}}},g=d("Alternativ 1","Alternativ 2","Veldig langt alternativ her veldig langt alternativ her","Alternativ 3","Alternativ 4"),r=e=>t(c,{title:"Select - custom element",display:"block",children:t(a,{...e,label:e.label||"Egendefinert styling",options:g,customOptionElement:o=>t(x,{isSelected:o.isSelected,children:o.children}),customSingleValueElement:o=>t(y,{children:o.children})})}),b=l.div`
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
`,x=({isSelected:e,children:o})=>s(m,{children:[t(b,{selected:e}),o]}),S=l.div`
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
}`,...(p=(n=r.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const ee=["Example"];export{r as Example,ee as __namedExportsOrder,Z as default};
//# sourceMappingURL=CustomSelect.stories-7c9ab6eb.js.map
