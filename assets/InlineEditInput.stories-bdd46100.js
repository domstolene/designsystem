import{j as r,a as e}from"./ddsReferenceTokens-647ce456.js";import{S as c}from"./StoryTemplate-1d63849e.js";import{T as t}from"./index-9f954475.js";import{r as n}from"./index-ebeaab24.js";import{I as a}from"./InlineEditInput-46fb3c5f.js";import"./chunk-S4VUQJ4A-a3a44c7b.js";import"./iframe-c30bd5c4.js";import"../sb-preview/runtime.js";import"./index-72bda2b9.js";import"./index-9c09ad76.js";import"./index-356e4a49.js";import"./BaseComponentProps-a100791d.js";import"./scrollbarStyling-d0d816c9.js";import"./ScrollableContainer.tokens-e480b498.js";import"./Caption-0ff47cfa.js";import"./TextOverflowEllipsis-e3546c5b.js";import"./Typography-d54ea9fd.js";import"./Heading-ded557b4.js";import"./Label-b7852367.js";import"./Legend-d58c0461.js";import"./Link-037ca604.js";import"./Paragraph-a74f99d8.js";import"./Input.styles-115c96a3.js";import"./removeButtonStyling-867d6ba4.js";import"./DescriptionListDesc-5189b0e0.js";import"./libraryAdd-35e18a4f.js";import"./Icon-42793503.js";import"./normalize-f756ee4b.js";import"./VisuallyHidden-d3f4e065.js";import"./InlineEdit.utils-9b0aa001.js";import"./renderInputMessage-cc09d168.js";import"./InputMessage-53e4c8ef.js";const se={title:"dds-components/InlineEdit/InlineEditInput",component:a,argTypes:{emptiable:{control:{type:"boolean"}},error:{control:{type:"boolean"}},errorMessage:{control:{type:"text"}},width:{control:{type:"text"}}},parameters:{controls:{exclude:["style","className","onFocus","onBlur","onChange","onSetValue","inputRef","children"]}}},i=l=>{const[o,u]=n.useState(""),[d,C]=n.useState("tekst"),[E,g]=n.useState(""),[w,f]=n.useState(""),[R,H]=n.useState("tømbar"),[k,x]=n.useState("uten ikon");return r(c,{title:"InlineEditInput - overview",children:[e(a,{...l,value:o,onSetValue:u}),e(a,{...l,onSetValue:C,value:d}),e(a,{...l,onSetValue:g,value:E,error:!0}),e(a,{...l,onSetValue:f,value:w,errorMessage:"Feilmelding"}),e(a,{...l,onSetValue:H,value:R,emptiable:!0}),e(a,{...l,onSetValue:x,value:k,hideIcon:!0})]})},s=l=>{const[o,u]=n.useState("");return e(c,{title:"InlineEditInput - default",display:"block",children:e(a,{...l,value:o,onSetValue:u})})},p=()=>{const[l,o]=n.useState(),[u,d]=n.useState();return e(c,{title:"InlineEditInput - in table",display:"block",children:e(t.Wrapper,{children:r(t,{children:[e(t.Head,{children:r(t.Row,{type:"head",children:[e(t.Cell,{type:"head",children:"Header"}),e(t.Cell,{type:"head",children:"Header"}),e(t.Cell,{type:"head",children:"Header"})]})}),r(t.Body,{children:[r(t.Row,{children:[e(t.Cell,{children:e(a,{onSetValue:()=>o(l)})}),e(t.Cell,{children:"innhold"}),e(t.Cell,{children:"innhold"})]}),r(t.Row,{children:[e(t.Cell,{children:e(a,{onSetValue:()=>d(u)})}),e(t.Cell,{children:"innhold"}),e(t.Cell,{children:"innhold"})]})]})]})})})};var m,b,S;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`(args: InlineEditInputProps) => {
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
}`,...(y=(h=p.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const pe=["Overview","Default","InTable"];export{s as Default,p as InTable,i as Overview,pe as __namedExportsOrder,se as default};
//# sourceMappingURL=InlineEditInput.stories-bdd46100.js.map
