import{a as o,j as e}from"./focus-visible-35158c22.js";import{R as y}from"./storybook-components-cc5979ee.js";import{r as P}from"./index-d47b1f5a.js";import{a as E,C as r}from"./Checkbox-a687bc4d.js";import{T as N}from"./dds-typography-e761338c.js";import{a as R,k as A,E as d}from"./dds-core-29d22035.js";import{r as k}from"./renderInputMessage-3a3d5367.js";import{O as z,G as Z}from"./SelectionControl.styles-62366bb1.js";const t=l=>{const{label:f,direction:L="row",errorMessage:n,tip:p,required:D,groupId:M,children:v,id:j,className:q,htmlProps:s={},...S}=l,{"aria-required":u}=s,I=P.useId(),a=M??`${I}-checkboxGroup`,T=!!n,_=D||u,h=d(a,"errorMessage"),c=d(a,"tip"),w={error:T,errorMessageId:n?h:void 0,uniqueGroupId:a,tipId:p?c:void 0};return o(z,{...R(j,q,{...s,"aria-required":u},S),children:[o(N,{as:"span",typographyType:"supportingStyleLabel01",id:a,children:[f," ",_&&e(A,{})]}),k(p,c),e(E.Provider,{value:{...w},children:e(Z,{role:"group","aria-labelledby":a,"aria-describedby":p?c:void 0,direction:L,children:v})}),k(void 0,void 0,n,h)]})};t.displayName="CheckboxGroup";const $={title:"dds-components/Checkbox/CheckboxGroup",component:t,argTypes:{label:{control:{type:"text"}},tip:{control:{type:"text"}},errorMessage:{control:{type:"text"}},required:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}},indeterminate:{control:{type:"boolean"}}},parameters:{controls:{exclude:["style","className"]}}},b=l=>o(y,{title:"CheckboxGroup - overview",display:"grid",columnsAmount:2,children:[o(t,{...l,label:l.label??"Label",children:[e(r,{label:"Option 1"}),e(r,{label:"Option 2"}),e(r,{label:"Option 3"})]}),o(t,{...l,label:l.label??"Label",direction:"column",children:[e(r,{label:"Option 1"}),e(r,{label:"Option 2"}),e(r,{label:"Option 3"})]}),o(t,{...l,label:l.label??"Label",required:!0,children:[e(r,{label:"Option 1"}),e(r,{label:"Option 2"}),e(r,{label:"Option 3"})]}),o(t,{...l,label:l.label??"Label",direction:"column",required:!0,children:[e(r,{label:"Option 1"}),e(r,{label:"Option 2"}),e(r,{label:"Option 3"})]}),o(t,{...l,label:l.label??"Label",tip:"Dette er en hjelpetekst",children:[e(r,{label:"Option 1"}),e(r,{label:"Option 2"}),e(r,{label:"Option 3"})]}),o(t,{...l,label:l.label??"Label",direction:"column",tip:"Dette er en hjelpetekst",children:[e(r,{label:"Option 1"}),e(r,{label:"Option 2"}),e(r,{label:"Option 3"})]}),o(t,{...l,label:l.label??"Label",errorMessage:"Dette er en feilmelding",children:[e(r,{error:!0,label:"Option 1"}),e(r,{error:!0,label:"Option 2"}),e(r,{error:!0,label:"Option 3"})]}),o(t,{...l,label:l.label??"Label",direction:"column",errorMessage:"Dette er en feilmelding",children:[e(r,{error:!0,label:"Option 1"}),e(r,{error:!0,label:"Option 2"}),e(r,{error:!0,label:"Option 3"})]}),o(t,{...l,label:l.label??"Label",tip:"Dette er en hjelpetekst",errorMessage:"Dette er en feilmelding",children:[e(r,{error:!0,label:"Option 1"}),e(r,{error:!0,label:"Option 2"}),e(r,{error:!0,label:"Option 3"})]}),o(t,{...l,label:l.label??"Label",direction:"column",tip:"Dette er en hjelpetekst",errorMessage:"Dette er en feilmelding",children:[e(r,{error:!0,label:"Option 1"}),e(r,{error:!0,label:"Option 2"}),e(r,{error:!0,label:"Option 3"})]})]}),i=l=>e(y,{title:"CheckboxGroup - default",children:o(t,{...l,label:l.label??"Label",children:[e(r,{label:"Option 1"}),e(r,{label:"Option 2"}),e(r,{label:"Option 3"})]})});var x,C,O;b.parameters={...b.parameters,docs:{...(x=b.parameters)==null?void 0:x.docs,source:{originalSource:`(args: CheckboxGroupProps) => {
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
}`,...(G=(g=i.parameters)==null?void 0:g.docs)==null?void 0:G.source}}};const B=["Overview","Default"],X=Object.freeze(Object.defineProperty({__proto__:null,Default:i,Overview:b,__namedExportsOrder:B,default:$},Symbol.toStringTag,{value:"Module"}));export{X as C,i as D};
//# sourceMappingURL=CheckboxGroup.stories-7eda184f.js.map
