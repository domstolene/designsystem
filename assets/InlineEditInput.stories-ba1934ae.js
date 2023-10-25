import{j as r,a as e}from"./jsx-runtime-e43ccb36.js";import{S as c}from"./StoryTemplate-dc809fd5.js";import{T as t}from"./index-6186e4cf.js";import{r as n}from"./index-1b03fe98.js";import{I as a}from"./InlineEditInput-d1b81b48.js";import"./ddsReferenceTokens-baf3ad90.js";import"./chunk-HLWAVYOI-64354447.js";import"./iframe-5a5f529d.js";import"../sb-preview/runtime.js";import"./index-6d191f71.js";import"./index-6fd5a17b.js";import"./index-356e4a49.js";import"./BaseComponentProps-46424d28.js";import"./scrollbarStyling-4847117a.js";import"./ScrollableContainer.tokens-9daa2b8a.js";import"./Caption-1d5aeb22.js";import"./TextOverflowEllipsis-05821fa6.js";import"./Typography-9e3266f4.js";import"./Heading-862bf652.js";import"./Label-5ae0c148.js";import"./Legend-a1cc5017.js";import"./Link-15befa1a.js";import"./Paragraph-53be9306.js";import"./Input.styles-4c4ddd98.js";import"./removeButtonStyling-867d6ba4.js";import"./DescriptionListDesc-164ce8e6.js";import"./libraryAdd-ba36db88.js";import"./Icon-169fc8ae.js";import"./normalize-f756ee4b.js";import"./VisuallyHidden-5e7c9103.js";import"./InlineEdit.utils-63cf848e.js";import"./renderInputMessage-6de68c60.js";import"./InputMessage-a51d5a37.js";const pe={title:"dds-components/InlineEdit/InlineEditInput",component:a,argTypes:{emptiable:{control:{type:"boolean"}},error:{control:{type:"boolean"}},errorMessage:{control:{type:"text"}},width:{control:{type:"text"}}},parameters:{controls:{exclude:["style","className","onFocus","onBlur","onChange","onSetValue","inputRef","children"]}}},i=l=>{const[o,u]=n.useState(""),[d,C]=n.useState("tekst"),[E,g]=n.useState(""),[w,f]=n.useState(""),[R,H]=n.useState("tømbar"),[k,x]=n.useState("uten ikon");return r(c,{title:"InlineEditInput - overview",children:[e(a,{...l,value:o,onSetValue:u}),e(a,{...l,onSetValue:C,value:d}),e(a,{...l,onSetValue:g,value:E,error:!0}),e(a,{...l,onSetValue:f,value:w,errorMessage:"Feilmelding"}),e(a,{...l,onSetValue:H,value:R,emptiable:!0}),e(a,{...l,onSetValue:x,value:k,hideIcon:!0})]})},s=l=>{const[o,u]=n.useState("");return e(c,{title:"InlineEditInput - default",display:"block",children:e(a,{...l,value:o,onSetValue:u})})},p=()=>{const[l,o]=n.useState(),[u,d]=n.useState();return e(c,{title:"InlineEditInput - in table",display:"block",children:e(t.Wrapper,{children:r(t,{children:[e(t.Head,{children:r(t.Row,{type:"head",children:[e(t.Cell,{type:"head",children:"Header"}),e(t.Cell,{type:"head",children:"Header"}),e(t.Cell,{type:"head",children:"Header"})]})}),r(t.Body,{children:[r(t.Row,{children:[e(t.Cell,{children:e(a,{onSetValue:()=>o(l)})}),e(t.Cell,{children:"innhold"}),e(t.Cell,{children:"innhold"})]}),r(t.Row,{children:[e(t.Cell,{children:e(a,{onSetValue:()=>d(u)})}),e(t.Cell,{children:"innhold"}),e(t.Cell,{children:"innhold"})]})]})]})})})};var m,b,S;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`(args: InlineEditInputProps) => {
  const [value, setValue] = useState('');
  const [value2, setValue2] = useState('tekst');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');
  const [value5, setValue5] = useState('tømbar');
  const [value6, setValue6] = useState('uten ikon');
  return <StoryTemplate title="InlineEditInput - overview">
      <InlineEditInput {...args} value={value} onSetValue={setValue} />
      <InlineEditInput {...args} onSetValue={setValue2} value={value2} />
      <InlineEditInput {...args} onSetValue={setValue3} value={value3} error />
      <InlineEditInput {...args} onSetValue={setValue4} value={value4} errorMessage="Feilmelding" />
      <InlineEditInput {...args} onSetValue={setValue5} value={value5} emptiable />
      <InlineEditInput {...args} onSetValue={setValue6} value={value6} hideIcon />
    </StoryTemplate>;
}`,...(S=(b=i.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var v,I,V;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`(args: InlineEditInputProps) => {
  const [value, setValue] = useState('');
  return <StoryTemplate title="InlineEditInput - default" display="block">
      <InlineEditInput {...args} value={value} onSetValue={setValue} />
    </StoryTemplate>;
}`,...(V=(I=s.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var T,h,y;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
  const [value, setValue] = useState();
  const [value2, setValue2] = useState();
  return <StoryTemplate title="InlineEditInput - in table" display="block">
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
                <InlineEditInput onSetValue={() => setValue(value)} />
              </Table.Cell>
              <Table.Cell>innhold</Table.Cell>
              <Table.Cell>innhold</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <InlineEditInput onSetValue={() => setValue2(value2)} />
              </Table.Cell>
              <Table.Cell>innhold</Table.Cell>
              <Table.Cell>innhold</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Table.Wrapper>
    </StoryTemplate>;
}`,...(y=(h=p.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const de=["Overview","Default","InTable"];export{s as Default,p as InTable,i as Overview,de as __namedExportsOrder,pe as default};
//# sourceMappingURL=InlineEditInput.stories-ba1934ae.js.map
