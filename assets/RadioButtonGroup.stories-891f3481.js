import{j as u,a as e}from"./jsx-runtime-e43ccb36.js";import{S as d}from"./StoryTemplate-d3d045d5.js";import{r as b}from"./index-1b03fe98.js";import{R as i}from"./RadioButtonGroup-89a93fab.js";import{R as t}from"./RadioButton-22f37084.js";const _={title:"dds-components/RadioButton/RadioButtonGroup",component:i,argTypes:{label:{control:{type:"text"}},errorMessage:{control:{type:"text"}},tip:{control:{type:"text"}},disabled:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}},required:{control:{type:"boolean"}}},parameters:{controls:{exclude:["style","className","onChange","name","value"]}}},p=l=>{const[n,o]=b.useState();return u(d,{title:"Radio button group - overview",display:"grid",columnsAmount:2,children:[u(i,{...l,direction:"row",label:"Label",value:n,name:"test",onChange:(r,a)=>{o(a)},children:[e(t,{label:"Option 1",value:1}),e(t,{label:"Option 2",value:2}),e(t,{label:"Option 3",value:3})]}),u(i,{...l,direction:"column",label:"Label",value:n,name:"test1",onChange:(r,a)=>{o(a)},children:[e(t,{label:"Option 1",value:1}),e(t,{label:"Option 2",value:2}),e(t,{label:"Option 3",value:3})]}),u(i,{...l,tip:"Dette er en hjelpetekst",direction:"row",label:"Label",value:n,name:"test2",onChange:(r,a)=>{o(a)},children:[e(t,{label:"Option 1",value:1}),e(t,{label:"Option 2",value:2}),e(t,{label:"Option 3",value:3})]}),u(i,{...l,tip:"Dette er en hjelpetekst",direction:"column",label:"Label",value:n,name:"test3",onChange:(r,a)=>{o(a)},children:[e(t,{label:"Option 1",value:1}),e(t,{label:"Option 2",value:2}),e(t,{label:"Option 3",value:3})]}),u(i,{...l,errorMessage:"Dette er en feilmelding",direction:"row",label:"Label",value:n,name:"test4",onChange:(r,a)=>{o(a)},children:[e(t,{label:"Option 1",value:1}),e(t,{label:"Option 2",value:2}),e(t,{label:"Option 3",value:3})]}),u(i,{...l,errorMessage:"Dette er en feilmelding",direction:"column",label:"Label",value:n,name:"test5",onChange:(r,a)=>{o(a)},children:[e(t,{label:"Option 1",value:1}),e(t,{label:"Option 2",value:2}),e(t,{label:"Option 3",value:3})]}),u(i,{...l,errorMessage:"Dette er en feilmelding",tip:"Dette er en hjelpetekst",direction:"row",label:"Label",value:n,name:"test6",onChange:(r,a)=>{o(a)},children:[e(t,{label:"Option 1",value:1}),e(t,{label:"Option 2",value:2}),e(t,{label:"Option 3",value:3})]}),u(i,{...l,errorMessage:"Dette er en feilmelding",tip:"Dette er en hjelpetekst",direction:"column",label:"Label",value:n,name:"test7",onChange:(r,a)=>{o(a)},children:[e(t,{label:"Option 1",value:1}),e(t,{label:"Option 2",value:2}),e(t,{label:"Option 3",value:3})]})]})},s=l=>{const[n,o]=b.useState();return e(d,{title:"Radio button group - default",children:u(i,{...l,label:l.label??"Label",value:n,onChange:(r,a)=>{o(a)},children:[e(t,{value:1,label:"Option 1",name:"test"}),e(t,{value:2,label:"Option 2",name:"test"}),e(t,{value:3,label:"Option 3",name:"test"})]})})},v=l=>{const[n,o]=b.useState(2);return e(d,{title:"Radio button group - default value",children:u(i,{...l,label:"Label",value:n,onChange:(r,a)=>{o(a)},children:[e(t,{value:1,label:"Option 1",name:"test"}),e(t,{value:2,label:"Option 2",name:"test"}),e(t,{value:3,label:"Option 3",name:"test"})]})})};var m,c,R;p.parameters={...p.parameters,docs:{...(m=p.parameters)==null?void 0:m.docs,source:{originalSource:`(args: RadioButtonGroupProps<string>) => {
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
}`,...(R=(c=p.parameters)==null?void 0:c.docs)==null?void 0:R.source}}};var O,g,B;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`(args: RadioButtonGroupProps<number>) => {
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
}`,...(B=(g=s.parameters)==null?void 0:g.docs)==null?void 0:B.source}}};var h,f,G;v.parameters={...v.parameters,docs:{...(h=v.parameters)==null?void 0:h.docs,source:{originalSource:`(args: RadioButtonGroupProps<number>) => {
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
}`,...(G=(f=v.parameters)==null?void 0:f.docs)==null?void 0:G.source}}};const C=["Overview","Default","WithDefaultValue"],j=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Overview:p,WithDefaultValue:v,__namedExportsOrder:C,default:_},Symbol.toStringTag,{value:"Module"}));export{s as D,j as R};
//# sourceMappingURL=RadioButtonGroup.stories-891f3481.js.map
