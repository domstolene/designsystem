import{a as r,j as e}from"./focus-visible-c2e9b88d.js";import{R}from"./storybook-components-91f985f3.js";import{r as s}from"./index-ebeaab24.js";import{a as Q,R as t}from"./RadioButton-9014ee19.js";import{O as U,G as X}from"./SelectionControl.styles-eecae4b0.js";import{g as Y}from"./BaseComponentProps-bb0d5515.js";import{T as Z}from"./Typography-9f10a259.js";import{R as ee}from"./RequiredMarker-326a4040.js";import{r as C}from"./Input.utils-f888acf1.js";import{c as te}from"./combineHandlers-f6d4455a.js";const ae=(n,o)=>{const{name:l,label:i,groupId:a,errorMessage:m,tip:O,disabled:x,readOnly:k,direction:q="row",value:I,children:P,required:B,onChange:h,id:E,className:N,htmlProps:G={},...$}=n,{"aria-required":f}=G,[A,H]=s.useState(I),W=s.useId(),b=a??`${W}-radioButtonGroup`,z=te(c=>H(c.target.value),c=>h&&h(c,c.target.value)),F=!!m,J=B||f,y=O&&`${b}-tip`,g=m&&`${b}-errorMessage`,K={name:l,disabled:x,error:F,errorMessageId:g,required:B,readOnly:k,value:A,onChange:z};return r(U,{...Y(E,N,{...G,"aria-required":f},$),ref:o,children:[r(Z,{as:"span",typographyType:"supportingStyleLabel01",id:b,children:[i," ",J&&e(ee,{})]}),C(O,y),e(Q.Provider,{value:{...K},children:e(X,{role:"radiogroup",direction:q,"aria-labelledby":b,"aria-describedby":y,"aria-errormessage":g,children:P})}),C(void 0,void 0,m,g)]})},u=s.forwardRef(ae);u.displayName="RadioButtonGroup";const ne={title:"dds-components/RadioButton/RadioButtonGroup",component:u,argTypes:{label:{control:{type:"text"}},errorMessage:{control:{type:"text"}},tip:{control:{type:"text"}},disabled:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}},required:{control:{type:"boolean"}}},parameters:{controls:{exclude:["style","className","onChange","name","value"]}}},p=n=>{const[o,l]=s.useState();return r(R,{title:"Radio button group - overview",display:"grid",columnsAmount:2,children:[r(u,{...n,direction:"row",label:"Label",value:o,name:"test",onChange:(i,a)=>{l(a)},children:[e(t,{label:"Option 1",value:1}),e(t,{label:"Option 2",value:2}),e(t,{label:"Option 3",value:3})]}),r(u,{...n,direction:"column",label:"Label",value:o,name:"test1",onChange:(i,a)=>{l(a)},children:[e(t,{label:"Option 1",value:1}),e(t,{label:"Option 2",value:2}),e(t,{label:"Option 3",value:3})]}),r(u,{...n,tip:"Dette er en hjelpetekst",direction:"row",label:"Label",value:o,name:"test2",onChange:(i,a)=>{l(a)},children:[e(t,{label:"Option 1",value:1}),e(t,{label:"Option 2",value:2}),e(t,{label:"Option 3",value:3})]}),r(u,{...n,tip:"Dette er en hjelpetekst",direction:"column",label:"Label",value:o,name:"test3",onChange:(i,a)=>{l(a)},children:[e(t,{label:"Option 1",value:1}),e(t,{label:"Option 2",value:2}),e(t,{label:"Option 3",value:3})]}),r(u,{...n,errorMessage:"Dette er en feilmelding",direction:"row",label:"Label",value:o,name:"test4",onChange:(i,a)=>{l(a)},children:[e(t,{label:"Option 1",value:1}),e(t,{label:"Option 2",value:2}),e(t,{label:"Option 3",value:3})]}),r(u,{...n,errorMessage:"Dette er en feilmelding",direction:"column",label:"Label",value:o,name:"test5",onChange:(i,a)=>{l(a)},children:[e(t,{label:"Option 1",value:1}),e(t,{label:"Option 2",value:2}),e(t,{label:"Option 3",value:3})]}),r(u,{...n,errorMessage:"Dette er en feilmelding",tip:"Dette er en hjelpetekst",direction:"row",label:"Label",value:o,name:"test6",onChange:(i,a)=>{l(a)},children:[e(t,{label:"Option 1",value:1}),e(t,{label:"Option 2",value:2}),e(t,{label:"Option 3",value:3})]}),r(u,{...n,errorMessage:"Dette er en feilmelding",tip:"Dette er en hjelpetekst",direction:"column",label:"Label",value:o,name:"test7",onChange:(i,a)=>{l(a)},children:[e(t,{label:"Option 1",value:1}),e(t,{label:"Option 2",value:2}),e(t,{label:"Option 3",value:3})]})]})},d=n=>{const[o,l]=s.useState();return e(R,{title:"Radio button group - default",children:r(u,{...n,label:n.label??"Label",value:o,onChange:(i,a)=>{l(a)},children:[e(t,{value:1,label:"Option 1",name:"test"}),e(t,{value:2,label:"Option 2",name:"test"}),e(t,{value:3,label:"Option 3",name:"test"})]})})},v=n=>{const[o,l]=s.useState(2);return e(R,{title:"Radio button group - default value",children:r(u,{...n,label:"Label",value:o,onChange:(i,a)=>{l(a)},children:[e(t,{value:1,label:"Option 1",name:"test"}),e(t,{value:2,label:"Option 2",name:"test"}),e(t,{value:3,label:"Option 3",name:"test"})]})})};var _,L,D;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`(args: RadioButtonGroupProps<string>) => {
  const [value, setValue] = useState<number | undefined>();
  return <StoryTemplate title="Radio button group - overview" display="grid" columnsAmount={2}>
      <RadioButtonGroup {...args} direction="row" label="Label" value={value} name="test" onChange={(_event, value) => {
      setValue(value);
    }}>
        <RadioButton label="Option 1" value={1} />
        <RadioButton label="Option 2" value={2} />
        <RadioButton label="Option 3" value={3} />
      </RadioButtonGroup>
      <RadioButtonGroup {...args} direction="column" label="Label" value={value} name="test1" onChange={(_event, value) => {
      setValue(value);
    }}>
        <RadioButton label="Option 1" value={1} />
        <RadioButton label="Option 2" value={2} />
        <RadioButton label="Option 3" value={3} />
      </RadioButtonGroup>
      <RadioButtonGroup {...args} tip="Dette er en hjelpetekst" direction="row" label="Label" value={value} name="test2" onChange={(_event, value) => {
      setValue(value);
    }}>
        <RadioButton label="Option 1" value={1} />
        <RadioButton label="Option 2" value={2} />
        <RadioButton label="Option 3" value={3} />
      </RadioButtonGroup>
      <RadioButtonGroup {...args} tip="Dette er en hjelpetekst" direction="column" label="Label" value={value} name="test3" onChange={(_event, value) => {
      setValue(value);
    }}>
        <RadioButton label="Option 1" value={1} />
        <RadioButton label="Option 2" value={2} />
        <RadioButton label="Option 3" value={3} />
      </RadioButtonGroup>
      <RadioButtonGroup {...args} errorMessage="Dette er en feilmelding" direction="row" label="Label" value={value} name="test4" onChange={(_event, value) => {
      setValue(value);
    }}>
        <RadioButton label="Option 1" value={1} />
        <RadioButton label="Option 2" value={2} />
        <RadioButton label="Option 3" value={3} />
      </RadioButtonGroup>
      <RadioButtonGroup {...args} errorMessage="Dette er en feilmelding" direction="column" label="Label" value={value} name="test5" onChange={(_event, value) => {
      setValue(value);
    }}>
        <RadioButton label="Option 1" value={1} />
        <RadioButton label="Option 2" value={2} />
        <RadioButton label="Option 3" value={3} />
      </RadioButtonGroup>
      <RadioButtonGroup {...args} errorMessage="Dette er en feilmelding" tip="Dette er en hjelpetekst" direction="row" label="Label" value={value} name="test6" onChange={(_event, value) => {
      setValue(value);
    }}>
        <RadioButton label="Option 1" value={1} />
        <RadioButton label="Option 2" value={2} />
        <RadioButton label="Option 3" value={3} />
      </RadioButtonGroup>
      <RadioButtonGroup {...args} errorMessage="Dette er en feilmelding" tip="Dette er en hjelpetekst" direction="column" label="Label" value={value} name="test7" onChange={(_event, value) => {
      setValue(value);
    }}>
        <RadioButton label="Option 1" value={1} />
        <RadioButton label="Option 2" value={2} />
        <RadioButton label="Option 3" value={3} />
      </RadioButtonGroup>
    </StoryTemplate>;
}`,...(D=(L=p.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var S,V,M;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`(args: RadioButtonGroupProps<number>) => {
  const [value, setValue] = useState<number | undefined>();
  return <StoryTemplate title="Radio button group - default">
      <RadioButtonGroup {...args} label={args.label ?? 'Label'} value={value} onChange={(_event, value) => {
      setValue(value);
    }}>
        <RadioButton value={1} label="Option 1" name="test" />
        <RadioButton value={2} label="Option 2" name="test" />
        <RadioButton value={3} label="Option 3" name="test" />
      </RadioButtonGroup>
    </StoryTemplate>;
}`,...(M=(V=d.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var w,j,T;v.parameters={...v.parameters,docs:{...(w=v.parameters)==null?void 0:w.docs,source:{originalSource:`(args: RadioButtonGroupProps<number>) => {
  const [value, setValue] = useState<number | undefined>(2);
  return <StoryTemplate title="Radio button group - default value">
      <RadioButtonGroup {...args} label="Label" value={value} onChange={(_event, value) => {
      setValue(value);
    }}>
        <RadioButton value={1} label="Option 1" name="test" />
        <RadioButton value={2} label="Option 2" name="test" />
        <RadioButton value={3} label="Option 3" name="test" />
      </RadioButtonGroup>
    </StoryTemplate>;
}`,...(T=(j=v.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};const oe=["Overview","Default","WithDefaultValue"],me=Object.freeze(Object.defineProperty({__proto__:null,Default:d,Overview:p,WithDefaultValue:v,__namedExportsOrder:oe,default:ne},Symbol.toStringTag,{value:"Module"}));export{d as D,me as R};
//# sourceMappingURL=RadioButtonGroup.stories-c3cc4f5b.js.map
