import{j as r,a as e}from"./jsx-runtime-e43ccb36.js";import{S as c}from"./StoryTemplate-d3d045d5.js";import{T as t}from"./index-2040439a.js";import{r as n}from"./index-1b03fe98.js";import{I as a}from"./InlineEditInput-4fc24b19.js";import"./ddsReferenceTokens-a28ebf03.js";import"./chunk-HLWAVYOI-0c9d9149.js";import"./iframe-a45876ab.js";import"../sb-preview/runtime.js";import"./index-6d191f71.js";import"./index-6fd5a17b.js";import"./index-356e4a49.js";import"./BaseComponentProps-5f9a30f8.js";import"./scrollbarStyling-c2e6e782.js";import"./ScrollableContainer.tokens-fec9d215.js";import"./Caption-f392befe.js";import"./TextOverflowEllipsis-6cc9a60a.js";import"./Typography-2f5b7ed6.js";import"./Heading-ad44a14c.js";import"./Label-2f40b05d.js";import"./Legend-4a50a7d7.js";import"./Link-53575534.js";import"./Paragraph-ea3f8ca3.js";import"./Input.styles-61cf55a8.js";import"./removeButtonStyling-867d6ba4.js";import"./DescriptionListDesc-2468e8cd.js";import"./libraryAdd-923f0275.js";import"./Icon-3ee4d35b.js";import"./normalize-f756ee4b.js";import"./VisuallyHidden-ecf884b0.js";import"./InlineEdit.utils-25fe50b7.js";import"./renderInputMessage-32885c06.js";import"./InputMessage-b4a4d5d6.js";const pe={title:"dds-components/InlineEdit/InlineEditInput",component:a,argTypes:{emptiable:{control:{type:"boolean"}},error:{control:{type:"boolean"}},errorMessage:{control:{type:"text"}},width:{control:{type:"text"}}},parameters:{controls:{exclude:["style","className","onFocus","onBlur","onChange","onSetValue","inputRef","children"]}}},i=l=>{const[o,u]=n.useState(""),[d,C]=n.useState("tekst"),[E,g]=n.useState(""),[w,f]=n.useState(""),[R,H]=n.useState("tømbar"),[k,x]=n.useState("uten ikon");return r(c,{title:"InlineEditInput - overview",children:[e(a,{...l,value:o,onSetValue:u}),e(a,{...l,onSetValue:C,value:d}),e(a,{...l,onSetValue:g,value:E,error:!0}),e(a,{...l,onSetValue:f,value:w,errorMessage:"Feilmelding"}),e(a,{...l,onSetValue:H,value:R,emptiable:!0}),e(a,{...l,onSetValue:x,value:k,hideIcon:!0})]})},s=l=>{const[o,u]=n.useState("");return e(c,{title:"InlineEditInput - default",display:"block",children:e(a,{...l,value:o,onSetValue:u})})},p=()=>{const[l,o]=n.useState(),[u,d]=n.useState();return e(c,{title:"InlineEditInput - in table",display:"block",children:e(t.Wrapper,{children:r(t,{children:[e(t.Head,{children:r(t.Row,{type:"head",children:[e(t.Cell,{type:"head",children:"Header"}),e(t.Cell,{type:"head",children:"Header"}),e(t.Cell,{type:"head",children:"Header"})]})}),r(t.Body,{children:[r(t.Row,{children:[e(t.Cell,{children:e(a,{onSetValue:()=>o(l)})}),e(t.Cell,{children:"innhold"}),e(t.Cell,{children:"innhold"})]}),r(t.Row,{children:[e(t.Cell,{children:e(a,{onSetValue:()=>d(u)})}),e(t.Cell,{children:"innhold"}),e(t.Cell,{children:"innhold"})]})]})]})})})};var m,b,S;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`(args: InlineEditInputProps) => {
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
//# sourceMappingURL=InlineEditInput.stories-60055357.js.map
