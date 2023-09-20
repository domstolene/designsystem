import{j as u,a as e}from"./ddsReferenceTokens-f1d35829.js";import{R}from"./storybook-components-e6e74b30.js";import{r as s}from"./index-d47b1f5a.js";import{a as K,R as t}from"./RadioButton-78bca4c9.js";import{T as U}from"./dds-typography-cc6cb429.js";import{a as X,k as Y,B as Z}from"./dds-core-c67132cd.js";import{r as C}from"./renderInputMessage-d83d5631.js";import{O as ee,G as te}from"./SelectionControl.styles-f9aa62b6.js";const ae=(n,o)=>{const{name:l,label:i,groupId:a,errorMessage:m,tip:O,disabled:x,readOnly:T,direction:I="row",value:q,children:P,required:B,onChange:h,id:E,className:N,htmlProps:G={},...$}=n,{"aria-required":f}=G,[A,W]=s.useState(q),z=s.useId(),b=a??`${z}-radioButtonGroup`,Q=Z(c=>W(c.target.value),c=>h&&h(c,c.target.value)),F=!!m,H=B||f,y=O&&`${b}-tip`,g=m&&`${b}-errorMessage`,J={name:l,disabled:x,error:F,errorMessageId:g,required:B,readOnly:T,value:A,onChange:Q};return u(ee,{...X(E,N,{...G,"aria-required":f},$),ref:o,children:[u(U,{as:"span",typographyType:"supportingStyleLabel01",id:b,children:[i," ",H&&e(Y,{})]}),C(O,y),e(K.Provider,{value:{...J},children:e(te,{role:"radiogroup",direction:I,"aria-labelledby":b,"aria-describedby":y,"aria-errormessage":g,children:P})}),C(void 0,void 0,m,g)]})},r=s.forwardRef(ae);r.displayName="RadioButtonGroup";const ne={title:"dds-components/RadioButton/RadioButtonGroup",component:r,argTypes:{label:{control:{type:"text"}},errorMessage:{control:{type:"text"}},tip:{control:{type:"text"}},disabled:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}},required:{control:{type:"boolean"}}},parameters:{controls:{exclude:["style","className","onChange","name","value"]}}},p=n=>{const[o,l]=s.useState();return u(R,{title:"Radio button group - overview",display:"grid",columnsAmount:2,children:[u(r,{...n,direction:"row",label:"Label",value:o,name:"test",onChange:(i,a)=>{l(a)},children:[e(t,{label:"Option 1",value:1}),e(t,{label:"Option 2",value:2}),e(t,{label:"Option 3",value:3})]}),u(r,{...n,direction:"column",label:"Label",value:o,name:"test1",onChange:(i,a)=>{l(a)},children:[e(t,{label:"Option 1",value:1}),e(t,{label:"Option 2",value:2}),e(t,{label:"Option 3",value:3})]}),u(r,{...n,tip:"Dette er en hjelpetekst",direction:"row",label:"Label",value:o,name:"test2",onChange:(i,a)=>{l(a)},children:[e(t,{label:"Option 1",value:1}),e(t,{label:"Option 2",value:2}),e(t,{label:"Option 3",value:3})]}),u(r,{...n,tip:"Dette er en hjelpetekst",direction:"column",label:"Label",value:o,name:"test3",onChange:(i,a)=>{l(a)},children:[e(t,{label:"Option 1",value:1}),e(t,{label:"Option 2",value:2}),e(t,{label:"Option 3",value:3})]}),u(r,{...n,errorMessage:"Dette er en feilmelding",direction:"row",label:"Label",value:o,name:"test4",onChange:(i,a)=>{l(a)},children:[e(t,{label:"Option 1",value:1}),e(t,{label:"Option 2",value:2}),e(t,{label:"Option 3",value:3})]}),u(r,{...n,errorMessage:"Dette er en feilmelding",direction:"column",label:"Label",value:o,name:"test5",onChange:(i,a)=>{l(a)},children:[e(t,{label:"Option 1",value:1}),e(t,{label:"Option 2",value:2}),e(t,{label:"Option 3",value:3})]}),u(r,{...n,errorMessage:"Dette er en feilmelding",tip:"Dette er en hjelpetekst",direction:"row",label:"Label",value:o,name:"test6",onChange:(i,a)=>{l(a)},children:[e(t,{label:"Option 1",value:1}),e(t,{label:"Option 2",value:2}),e(t,{label:"Option 3",value:3})]}),u(r,{...n,errorMessage:"Dette er en feilmelding",tip:"Dette er en hjelpetekst",direction:"column",label:"Label",value:o,name:"test7",onChange:(i,a)=>{l(a)},children:[e(t,{label:"Option 1",value:1}),e(t,{label:"Option 2",value:2}),e(t,{label:"Option 3",value:3})]})]})},d=n=>{const[o,l]=s.useState();return e(R,{title:"Radio button group - default",children:u(r,{...n,label:n.label??"Label",value:o,onChange:(i,a)=>{l(a)},children:[e(t,{value:1,label:"Option 1",name:"test"}),e(t,{value:2,label:"Option 2",name:"test"}),e(t,{value:3,label:"Option 3",name:"test"})]})})},v=n=>{const[o,l]=s.useState(2);return e(R,{title:"Radio button group - default value",children:u(r,{...n,label:"Label",value:o,onChange:(i,a)=>{l(a)},children:[e(t,{value:1,label:"Option 1",name:"test"}),e(t,{value:2,label:"Option 2",name:"test"}),e(t,{value:3,label:"Option 3",name:"test"})]})})};var _,D,L;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`(args: RadioButtonGroupProps<string>) => {
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
}`,...(L=(D=p.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var S,V,M;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`(args: RadioButtonGroupProps<number>) => {
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
}`,...(M=(V=d.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var w,j,k;v.parameters={...v.parameters,docs:{...(w=v.parameters)==null?void 0:w.docs,source:{originalSource:`(args: RadioButtonGroupProps<number>) => {
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
}`,...(k=(j=v.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};const oe=["Overview","Default","WithDefaultValue"],be=Object.freeze(Object.defineProperty({__proto__:null,Default:d,Overview:p,WithDefaultValue:v,__namedExportsOrder:oe,default:ne},Symbol.toStringTag,{value:"Module"}));export{d as D,be as R};
//# sourceMappingURL=RadioButtonGroup.stories-749c15ae.js.map
