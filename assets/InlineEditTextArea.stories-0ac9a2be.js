import{j as n,a as e}from"./ddsReferenceTokens-647ce456.js";import{S as c}from"./StoryTemplate-eb861f3f.js";import{T as t}from"./index-7dce1b68.js";import{r}from"./index-ebeaab24.js";import{I as a}from"./InlineEditTextArea-e2ae9928.js";import"./chunk-PCJTTTQV-7e83f80c.js";import"./iframe-f82f733c.js";import"../sb-preview/runtime.js";import"./index-72bda2b9.js";import"./index-9c09ad76.js";import"./index-d475d2ea.js";import"./index-356e4a49.js";import"./BaseComponentProps-a100791d.js";import"./scrollbarStyling-d0d816c9.js";import"./ScrollableContainer.tokens-e480b498.js";import"./Caption-5c254d72.js";import"./TextOverflowEllipsis-e3546c5b.js";import"./Typography-1747463b.js";import"./Heading-dc72d0b9.js";import"./Label-23c96940.js";import"./Legend-dbc3ced6.js";import"./Link-9aff7843.js";import"./Paragraph-3340e0ea.js";import"./Input.styles-711330f2.js";import"./removeButtonStyling-867d6ba4.js";import"./DescriptionListDesc-9319d6fe.js";import"./libraryAdd-4099b973.js";import"./Icon-e6324a43.js";import"./normalize-f756ee4b.js";import"./VisuallyHidden-d3f4e065.js";import"./InlineEdit.utils-b625f59c.js";import"./renderInputMessage-8f4e569a.js";import"./InputMessage-9d3ae479.js";const de={title:"dds-components/InlineEdit/InlineEditTextArea",component:a,argTypes:{emptiable:{control:{type:"boolean"}},error:{control:{type:"boolean"}},errorMessage:{control:{type:"text"}},width:{control:{type:"text"}}},parameters:{controls:{exclude:["style","className","onFocus","onBlur","onChange","onSetValue","inputRef","children"]}}},s=l=>{const[o,i]=r.useState(""),[p,C]=r.useState("tekst"),[I,E]=r.useState(""),[A,g]=r.useState(""),[w,f]=r.useState("tømbar"),[R,H]=r.useState("uten ikon");return n(c,{title:"InlineEditTextArea - overview",children:[e(a,{...l,value:o,onSetValue:i}),e(a,{...l,onSetValue:C,value:p}),e(a,{...l,onSetValue:E,value:I,error:!0}),e(a,{...l,onSetValue:g,value:A,errorMessage:"Feilmelding"}),e(a,{...l,onSetValue:f,value:w,emptiable:!0}),e(a,{...l,onSetValue:H,value:R,hideIcon:!0})]})},u=l=>{const[o,i]=r.useState("");return e(c,{title:"InlineEditTextArea - default",display:"block",children:e(a,{...l,value:o,onSetValue:i})})},d=()=>{const[l,o]=r.useState(),[i,p]=r.useState();return e(c,{title:"InlineEditTextArea - in table",display:"block",children:e(t.Wrapper,{children:n(t,{children:[e(t.Head,{children:n(t.Row,{type:"head",children:[e(t.Cell,{type:"head",children:"Header"}),e(t.Cell,{type:"head",children:"Header"}),e(t.Cell,{type:"head",children:"Header"})]})}),n(t.Body,{children:[n(t.Row,{children:[e(t.Cell,{children:e(a,{onSetValue:()=>o(l)})}),e(t.Cell,{children:"innhold"}),e(t.Cell,{children:"innhold"})]}),n(t.Row,{children:[e(t.Cell,{children:e(a,{onSetValue:()=>p(i)})}),e(t.Cell,{children:"innhold"}),e(t.Cell,{children:"innhold"})]})]})]})})})};var m,T,b;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`(args: InlineEditTextAreaProps) => {
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
//# sourceMappingURL=InlineEditTextArea.stories-0ac9a2be.js.map
