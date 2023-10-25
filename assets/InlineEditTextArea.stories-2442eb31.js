import{j as n,a as e}from"./jsx-runtime-e43ccb36.js";import{S as c}from"./StoryTemplate-dc809fd5.js";import{T as t}from"./index-6186e4cf.js";import{r}from"./index-1b03fe98.js";import{I as a}from"./InlineEditTextArea-a1853092.js";import"./ddsReferenceTokens-baf3ad90.js";import"./chunk-HLWAVYOI-64354447.js";import"./iframe-5a5f529d.js";import"../sb-preview/runtime.js";import"./index-6d191f71.js";import"./index-6fd5a17b.js";import"./index-356e4a49.js";import"./BaseComponentProps-46424d28.js";import"./scrollbarStyling-4847117a.js";import"./ScrollableContainer.tokens-9daa2b8a.js";import"./Caption-1d5aeb22.js";import"./TextOverflowEllipsis-05821fa6.js";import"./Typography-9e3266f4.js";import"./Heading-862bf652.js";import"./Label-5ae0c148.js";import"./Legend-a1cc5017.js";import"./Link-15befa1a.js";import"./Paragraph-53be9306.js";import"./Input.styles-4c4ddd98.js";import"./removeButtonStyling-867d6ba4.js";import"./DescriptionListDesc-164ce8e6.js";import"./libraryAdd-ba36db88.js";import"./Icon-169fc8ae.js";import"./normalize-f756ee4b.js";import"./VisuallyHidden-5e7c9103.js";import"./InlineEdit.utils-63cf848e.js";import"./renderInputMessage-6de68c60.js";import"./InputMessage-a51d5a37.js";const de={title:"dds-components/InlineEdit/InlineEditTextArea",component:a,argTypes:{emptiable:{control:{type:"boolean"}},error:{control:{type:"boolean"}},errorMessage:{control:{type:"text"}},width:{control:{type:"text"}}},parameters:{controls:{exclude:["style","className","onFocus","onBlur","onChange","onSetValue","inputRef","children"]}}},s=l=>{const[o,i]=r.useState(""),[p,C]=r.useState("tekst"),[I,E]=r.useState(""),[A,g]=r.useState(""),[w,f]=r.useState("tømbar"),[R,H]=r.useState("uten ikon");return n(c,{title:"InlineEditTextArea - overview",children:[e(a,{...l,value:o,onSetValue:i}),e(a,{...l,onSetValue:C,value:p}),e(a,{...l,onSetValue:E,value:I,error:!0}),e(a,{...l,onSetValue:g,value:A,errorMessage:"Feilmelding"}),e(a,{...l,onSetValue:f,value:w,emptiable:!0}),e(a,{...l,onSetValue:H,value:R,hideIcon:!0})]})},u=l=>{const[o,i]=r.useState("");return e(c,{title:"InlineEditTextArea - default",display:"block",children:e(a,{...l,value:o,onSetValue:i})})},d=()=>{const[l,o]=r.useState(),[i,p]=r.useState();return e(c,{title:"InlineEditTextArea - in table",display:"block",children:e(t.Wrapper,{children:n(t,{children:[e(t.Head,{children:n(t.Row,{type:"head",children:[e(t.Cell,{type:"head",children:"Header"}),e(t.Cell,{type:"head",children:"Header"}),e(t.Cell,{type:"head",children:"Header"})]})}),n(t.Body,{children:[n(t.Row,{children:[e(t.Cell,{children:e(a,{onSetValue:()=>o(l)})}),e(t.Cell,{children:"innhold"}),e(t.Cell,{children:"innhold"})]}),n(t.Row,{children:[e(t.Cell,{children:e(a,{onSetValue:()=>p(i)})}),e(t.Cell,{children:"innhold"}),e(t.Cell,{children:"innhold"})]})]})]})})})};var m,T,b;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`(args: InlineEditTextAreaProps) => {
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
//# sourceMappingURL=InlineEditTextArea.stories-2442eb31.js.map
