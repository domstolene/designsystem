import{a as l,j as e}from"./focus-visible-c2e9b88d.js";import{R as y}from"./storybook-components-91f985f3.js";import{r as w}from"./index-ebeaab24.js";import{a as R,C as r}from"./Checkbox-c8113dab.js";import{O as E,G as N}from"./SelectionControl.styles-eecae4b0.js";import{r as d}from"./Input.utils-f888acf1.js";import{d as x}from"./idGenerator-c29473b2.js";import{g as A}from"./BaseComponentProps-bb0d5515.js";import{T as z}from"./Typography-9f10a259.js";import{R as B}from"./RequiredMarker-326a4040.js";const t=o=>{const{label:f,direction:L="row",errorMessage:n,tip:p,required:D,groupId:M,children:v,id:j,className:q,htmlProps:s={},...I}=o,{"aria-required":u}=s,S=w.useId(),a=M??`${S}-checkboxGroup`,T=!!n,P=D||u,h=x(a,"errorMessage"),c=x(a,"tip"),_={error:T,errorMessageId:n?h:void 0,uniqueGroupId:a,tipId:p?c:void 0};return l(E,{...A(j,q,{...s,"aria-required":u},I),children:[l(z,{as:"span",typographyType:"supportingStyleLabel01",id:a,children:[f," ",P&&e(B,{})]}),d(p,c),e(R.Provider,{value:{..._},children:e(N,{role:"group","aria-labelledby":a,"aria-describedby":p?c:void 0,direction:L,children:v})}),d(void 0,void 0,n,h)]})};t.displayName="CheckboxGroup";const H={title:"dds-components/Checkbox/CheckboxGroup",component:t,argTypes:{label:{control:{type:"text"}},tip:{control:{type:"text"}},errorMessage:{control:{type:"text"}},required:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}},indeterminate:{control:{type:"boolean"}}},parameters:{controls:{exclude:["style","className"]}}},b=o=>l(y,{title:"CheckboxGroup - overview",display:"grid",columnsAmount:2,children:[l(t,{...o,label:o.label??"Label",children:[e(r,{label:"Option 1"}),e(r,{label:"Option 2"}),e(r,{label:"Option 3"})]}),l(t,{...o,label:o.label??"Label",direction:"column",children:[e(r,{label:"Option 1"}),e(r,{label:"Option 2"}),e(r,{label:"Option 3"})]}),l(t,{...o,label:o.label??"Label",required:!0,children:[e(r,{label:"Option 1"}),e(r,{label:"Option 2"}),e(r,{label:"Option 3"})]}),l(t,{...o,label:o.label??"Label",direction:"column",required:!0,children:[e(r,{label:"Option 1"}),e(r,{label:"Option 2"}),e(r,{label:"Option 3"})]}),l(t,{...o,label:o.label??"Label",tip:"Dette er en hjelpetekst",children:[e(r,{label:"Option 1"}),e(r,{label:"Option 2"}),e(r,{label:"Option 3"})]}),l(t,{...o,label:o.label??"Label",direction:"column",tip:"Dette er en hjelpetekst",children:[e(r,{label:"Option 1"}),e(r,{label:"Option 2"}),e(r,{label:"Option 3"})]}),l(t,{...o,label:o.label??"Label",errorMessage:"Dette er en feilmelding",children:[e(r,{error:!0,label:"Option 1"}),e(r,{error:!0,label:"Option 2"}),e(r,{error:!0,label:"Option 3"})]}),l(t,{...o,label:o.label??"Label",direction:"column",errorMessage:"Dette er en feilmelding",children:[e(r,{error:!0,label:"Option 1"}),e(r,{error:!0,label:"Option 2"}),e(r,{error:!0,label:"Option 3"})]}),l(t,{...o,label:o.label??"Label",tip:"Dette er en hjelpetekst",errorMessage:"Dette er en feilmelding",children:[e(r,{error:!0,label:"Option 1"}),e(r,{error:!0,label:"Option 2"}),e(r,{error:!0,label:"Option 3"})]}),l(t,{...o,label:o.label??"Label",direction:"column",tip:"Dette er en hjelpetekst",errorMessage:"Dette er en feilmelding",children:[e(r,{error:!0,label:"Option 1"}),e(r,{error:!0,label:"Option 2"}),e(r,{error:!0,label:"Option 3"})]})]}),i=o=>e(y,{title:"CheckboxGroup - default",children:l(t,{...o,label:o.label??"Label",children:[e(r,{label:"Option 1"}),e(r,{label:"Option 2"}),e(r,{label:"Option 3"})]})});var k,C,O;b.parameters={...b.parameters,docs:{...(k=b.parameters)==null?void 0:k.docs,source:{originalSource:`(args: CheckboxGroupProps) => {
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
}`,...(O=(C=b.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var m,g,G;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`(args: CheckboxGroupProps) => {
  return <StoryTemplate title="CheckboxGroup - default">
      <CheckboxGroup {...args} label={args.label ?? 'Label'}>
        <Checkbox label="Option 1" />
        <Checkbox label="Option 2" />
        <Checkbox label="Option 3" />
      </CheckboxGroup>
    </StoryTemplate>;
}`,...(G=(g=i.parameters)==null?void 0:g.docs)==null?void 0:G.source}}};const $=["Overview","Default"],ee=Object.freeze(Object.defineProperty({__proto__:null,Default:i,Overview:b,__namedExportsOrder:$,default:H},Symbol.toStringTag,{value:"Module"}));export{ee as C,i as D};
//# sourceMappingURL=CheckboxGroup.stories-52e5cc40.js.map
