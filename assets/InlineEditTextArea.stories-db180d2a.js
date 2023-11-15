import{j as n,a as e}from"./jsx-runtime-e43ccb36.js";import{S as c}from"./StoryTemplate-b1805fe5.js";import{T as t}from"./index-0c36c15b.js";import{r}from"./index-1b03fe98.js";import{I as a}from"./InlineEditTextArea-03f4482f.js";import"./ddsReferenceTokens-cf345c8b.js";import"./chunk-HLWAVYOI-adac57c3.js";import"./iframe-7f7b0921.js";import"../sb-preview/runtime.js";import"./index-6d191f71.js";import"./index-6fd5a17b.js";import"./index-356e4a49.js";import"./BaseComponentProps-217bcb03.js";import"./scrollbarStyling-5c8dd8e6.js";import"./ScrollableContainer.tokens-2f8b82e4.js";import"./Caption-7324954d.js";import"./TextOverflowEllipsis-5f7b5b23.js";import"./Typography-37e894bc.js";import"./Heading-a143a4ab.js";import"./Label-e6c412e2.js";import"./Legend-8686145c.js";import"./Link-0af95a08.js";import"./Paragraph-67d8f149.js";import"./Input.styles-9955857c.js";import"./removeButtonStyling-867d6ba4.js";import"./DescriptionListDesc-d234126c.js";import"./libraryAdd-792d55f1.js";import"./Icon-96508a26.js";import"./normalize-f756ee4b.js";import"./VisuallyHidden-d23941f1.js";import"./InlineEdit.utils-4b78e69c.js";import"./renderInputMessage-babbca0c.js";import"./InputMessage-7ae8a63a.js";const de={title:"dds-components/InlineEdit/InlineEditTextArea",component:a,argTypes:{emptiable:{control:{type:"boolean"}},error:{control:{type:"boolean"}},errorMessage:{control:{type:"text"}},width:{control:{type:"text"}}},parameters:{controls:{exclude:["style","className","onFocus","onBlur","onChange","onSetValue","inputRef","children"]}}},s=l=>{const[o,i]=r.useState(""),[p,C]=r.useState("tekst"),[I,E]=r.useState(""),[A,g]=r.useState(""),[w,f]=r.useState("tømbar"),[R,H]=r.useState("uten ikon");return n(c,{title:"InlineEditTextArea - overview",children:[e(a,{...l,value:o,onSetValue:i}),e(a,{...l,onSetValue:C,value:p}),e(a,{...l,onSetValue:E,value:I,error:!0}),e(a,{...l,onSetValue:g,value:A,errorMessage:"Feilmelding"}),e(a,{...l,onSetValue:f,value:w,emptiable:!0}),e(a,{...l,onSetValue:H,value:R,hideIcon:!0})]})},u=l=>{const[o,i]=r.useState("");return e(c,{title:"InlineEditTextArea - default",display:"block",children:e(a,{...l,value:o,onSetValue:i})})},d=()=>{const[l,o]=r.useState(),[i,p]=r.useState();return e(c,{title:"InlineEditTextArea - in table",display:"block",children:e(t.Wrapper,{children:n(t,{children:[e(t.Head,{children:n(t.Row,{type:"head",children:[e(t.Cell,{type:"head",children:"Header"}),e(t.Cell,{type:"head",children:"Header"}),e(t.Cell,{type:"head",children:"Header"})]})}),n(t.Body,{children:[n(t.Row,{children:[e(t.Cell,{children:e(a,{onSetValue:()=>o(l)})}),e(t.Cell,{children:"innhold"}),e(t.Cell,{children:"innhold"})]}),n(t.Row,{children:[e(t.Cell,{children:e(a,{onSetValue:()=>p(i)})}),e(t.Cell,{children:"innhold"}),e(t.Cell,{children:"innhold"})]})]})]})})})};var m,T,b;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`(args: InlineEditTextAreaProps) => {
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
//# sourceMappingURL=InlineEditTextArea.stories-db180d2a.js.map
