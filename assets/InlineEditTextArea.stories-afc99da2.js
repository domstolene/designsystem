import{j as n,a as e}from"./jsx-runtime-e43ccb36.js";import{S as c}from"./StoryTemplate-a536eef8.js";import{T as t}from"./index-f5a22323.js";import{r}from"./index-1b03fe98.js";import{I as a}from"./InlineEditTextArea-fad0d076.js";import"./ddsReferenceTokens-f9f5a4e4.js";import"./chunk-S4VUQJ4A-ef04515c.js";import"./iframe-ddff3556.js";import"../sb-preview/runtime.js";import"./index-4a89c107.js";import"./index-6fd5a17b.js";import"./index-356e4a49.js";import"./BaseComponentProps-9c025471.js";import"./scrollbarStyling-6511712a.js";import"./ScrollableContainer.tokens-17f22553.js";import"./Caption-6d408196.js";import"./TextOverflowEllipsis-1edb8626.js";import"./Typography-e857479c.js";import"./Heading-5f7faa2b.js";import"./Label-9dee7f37.js";import"./Legend-41f9f05c.js";import"./Link-1567bf4e.js";import"./Paragraph-998f64b8.js";import"./Input.styles-3d1af983.js";import"./removeButtonStyling-867d6ba4.js";import"./DescriptionListDesc-d0c82072.js";import"./libraryAdd-5ac12ed0.js";import"./Icon-1678d620.js";import"./normalize-f756ee4b.js";import"./VisuallyHidden-297bf54e.js";import"./InlineEdit.utils-ecfd2753.js";import"./renderInputMessage-90dd305a.js";import"./InputMessage-5d6127f2.js";const de={title:"dds-components/InlineEdit/InlineEditTextArea",component:a,argTypes:{emptiable:{control:{type:"boolean"}},error:{control:{type:"boolean"}},errorMessage:{control:{type:"text"}},width:{control:{type:"text"}}},parameters:{controls:{exclude:["style","className","onFocus","onBlur","onChange","onSetValue","inputRef","children"]}}},s=l=>{const[o,i]=r.useState(""),[p,C]=r.useState("tekst"),[I,E]=r.useState(""),[A,g]=r.useState(""),[w,f]=r.useState("tømbar"),[R,H]=r.useState("uten ikon");return n(c,{title:"InlineEditTextArea - overview",children:[e(a,{...l,value:o,onSetValue:i}),e(a,{...l,onSetValue:C,value:p}),e(a,{...l,onSetValue:E,value:I,error:!0}),e(a,{...l,onSetValue:g,value:A,errorMessage:"Feilmelding"}),e(a,{...l,onSetValue:f,value:w,emptiable:!0}),e(a,{...l,onSetValue:H,value:R,hideIcon:!0})]})},u=l=>{const[o,i]=r.useState("");return e(c,{title:"InlineEditTextArea - default",display:"block",children:e(a,{...l,value:o,onSetValue:i})})},d=()=>{const[l,o]=r.useState(),[i,p]=r.useState();return e(c,{title:"InlineEditTextArea - in table",display:"block",children:e(t.Wrapper,{children:n(t,{children:[e(t.Head,{children:n(t.Row,{type:"head",children:[e(t.Cell,{type:"head",children:"Header"}),e(t.Cell,{type:"head",children:"Header"}),e(t.Cell,{type:"head",children:"Header"})]})}),n(t.Body,{children:[n(t.Row,{children:[e(t.Cell,{children:e(a,{onSetValue:()=>o(l)})}),e(t.Cell,{children:"innhold"}),e(t.Cell,{children:"innhold"})]}),n(t.Row,{children:[e(t.Cell,{children:e(a,{onSetValue:()=>p(i)})}),e(t.Cell,{children:"innhold"}),e(t.Cell,{children:"innhold"})]})]})]})})})};var m,T,b;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`(args: InlineEditTextAreaProps) => {
  const [value, setValue] = useState('');
  const [value2, setValue2] = useState('tekst');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');
  const [value5, setValue5] = useState('tømbar');
  const [value6, setValue6] = useState('uten ikon');
  return <StoryTemplate title="InlineEditTextArea - overview">
      <InlineEditTextArea {...args} value={value} onSetValue={setValue} />
      <InlineEditTextArea {...args} onSetValue={setValue2} value={value2} />
      <InlineEditTextArea {...args} onSetValue={setValue3} value={value3} error />
      <InlineEditTextArea {...args} onSetValue={setValue4} value={value4} errorMessage="Feilmelding" />
      <InlineEditTextArea {...args} onSetValue={setValue5} value={value5} emptiable />
      <InlineEditTextArea {...args} onSetValue={setValue6} value={value6} hideIcon />
    </StoryTemplate>;
}`,...(b=(T=s.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var S,v,V;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`(args: InlineEditTextAreaProps) => {
  const [value, setValue] = useState('');
  return <StoryTemplate title="InlineEditTextArea - default" display="block">
      <InlineEditTextArea {...args} value={value} onSetValue={setValue} />
    </StoryTemplate>;
}`,...(V=(v=u.parameters)==null?void 0:v.docs)==null?void 0:V.source}}};var h,x,y;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  const [value, setValue] = useState();
  const [value2, setValue2] = useState();
  return <StoryTemplate title="InlineEditTextArea - in table" display="block">
      <Table.Wrapper>
        <Table>
          <Table.Head>
            <Table.Row type="head">
              <Table.Cell type="head">Header</Table.Cell>
              <Table.Cell type="head">Header</Table.Cell>
              <Table.Cell type="head">Header</Table.Cell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <InlineEditTextArea onSetValue={() => setValue(value)} />
              </Table.Cell>
              <Table.Cell>innhold</Table.Cell>
              <Table.Cell>innhold</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <InlineEditTextArea onSetValue={() => setValue2(value2)} />
              </Table.Cell>
              <Table.Cell>innhold</Table.Cell>
              <Table.Cell>innhold</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Table.Wrapper>
    </StoryTemplate>;
}`,...(y=(x=d.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const pe=["Overview","Default","InTable"];export{u as Default,d as InTable,s as Overview,pe as __namedExportsOrder,de as default};
//# sourceMappingURL=InlineEditTextArea.stories-afc99da2.js.map
