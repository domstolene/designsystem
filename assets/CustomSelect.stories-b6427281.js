import{j as t,s as l,a as s,F as m}from"./focus-visible-c2e9b88d.js";import{R as c}from"./storybook-components-91f985f3.js";import{S as a,c as d}from"./Select-1043e626.js";import"./index-ebeaab24.js";import"./chunk-PCJTTTQV-8e0a624c.js";import"./iframe-f298dfc5.js";import"../sb-preview/runtime.js";import"./index-72bda2b9.js";import"./index-9c09ad76.js";import"./index-d475d2ea.js";import"./index-356e4a49.js";import"./floating-ui.dom.browser.min-c4825b7a.js";import"./Input.tokens-0612e464.js";import"./Typography.utils-99dd1e07.js";import"./focusVisible-75802ac7.js";import"./selection-fae9d0a8.js";import"./danger-157ad055.js";import"./hover-d616d034.js";import"./Icon-819df738.js";import"./BaseComponentProps-bb0d5515.js";import"./scrollbarStyling-a46ac0ea.js";import"./ScrollableContainer.tokens-4d8ec996.js";import"./Input.utils-f888acf1.js";import"./InputMessage-bb06ca10.js";import"./error-e0532677.js";import"./SvgWrapper-cd7fa512.js";import"./Typography-9f10a259.js";import"./color-a12930ac.js";import"./searchFilter-4f5edf43.js";import"./check-6e9d4d4d.js";import"./closeSmall-b6c9ae01.js";import"./chevronDown-41304f61.js";import"./idGenerator-c29473b2.js";import"./Label-ec3ecd5b.js";import"./RequiredMarker-326a4040.js";const te={title:"dds-components/Select/CustomSelect",component:a,argTypes:{label:{control:{type:"text"}},tip:{control:{type:"text"}},errorMessage:{control:{type:"text"}},width:{control:{type:"text"}},placeholder:{control:{type:"text"}},isDisabled:{control:{type:"boolean"}},isClearable:{control:{type:"boolean"}},required:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}},isLoading:{control:{type:"boolean"}}},parameters:{controls:{exclude:["style","className","items","value","defaultValue"]}}},g=d("Alternativ 1","Alternativ 2","Veldig langt alternativ her veldig langt alternativ her","Alternativ 3","Alternativ 4"),r=e=>t(c,{title:"Select - custom element",display:"block",children:t(a,{...e,label:e.label||"Egendefinert styling",options:g,customOptionElement:o=>t(x,{isSelected:o.isSelected,children:o.children}),customSingleValueElement:o=>t(y,{children:o.children})})}),b=l.div`
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
}`,...(p=(n=r.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const oe=["Example"];export{r as Example,oe as __namedExportsOrder,te as default};
//# sourceMappingURL=CustomSelect.stories-b6427281.js.map
