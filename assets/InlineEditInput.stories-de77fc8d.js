import{j as r,a as e}from"./jsx-runtime-e43ccb36.js";import{S as c}from"./StoryTemplate-f03f5b44.js";import{T as t}from"./index-497312af.js";import{r as n}from"./index-1b03fe98.js";import{I as a}from"./InlineEditInput-b7ab4861.js";import"./ddsReferenceTokens-fe3c594e.js";import"./chunk-HLWAVYOI-b004f838.js";import"./iframe-0e670e3d.js";import"../sb-preview/runtime.js";import"./index-6d191f71.js";import"./index-6fd5a17b.js";import"./index-356e4a49.js";import"./BaseComponentProps-3902fbf1.js";import"./scrollbarStyling-6a0ce14f.js";import"./ScrollableContainer.tokens-f54e5649.js";import"./Caption-848a816b.js";import"./TextOverflowEllipsis-c2a9fc8f.js";import"./Typography-dcf6ef21.js";import"./Heading-9ec1ef64.js";import"./Label-393cff6f.js";import"./Legend-6f4c2491.js";import"./Link-e04d3bba.js";import"./Paragraph-ba6a9c6f.js";import"./Input.styles-d07d27d7.js";import"./removeButtonStyling-867d6ba4.js";import"./DescriptionListDesc-318ca94e.js";import"./libraryAdd-37aef24e.js";import"./Icon-56c20d0c.js";import"./normalize-f756ee4b.js";import"./VisuallyHidden-99534ff4.js";import"./InlineEdit.utils-e5b3ae9c.js";import"./renderInputMessage-03137e0e.js";import"./InputMessage-418665bb.js";const pe={title:"dds-components/InlineEdit/InlineEditInput",component:a,argTypes:{emptiable:{control:{type:"boolean"}},error:{control:{type:"boolean"}},errorMessage:{control:{type:"text"}},width:{control:{type:"text"}}},parameters:{controls:{exclude:["style","className","onFocus","onBlur","onChange","onSetValue","inputRef","children"]}}},i=l=>{const[o,u]=n.useState(""),[d,C]=n.useState("tekst"),[E,g]=n.useState(""),[w,f]=n.useState(""),[R,H]=n.useState("tømbar"),[k,x]=n.useState("uten ikon");return r(c,{title:"InlineEditInput - overview",children:[e(a,{...l,value:o,onSetValue:u}),e(a,{...l,onSetValue:C,value:d}),e(a,{...l,onSetValue:g,value:E,error:!0}),e(a,{...l,onSetValue:f,value:w,errorMessage:"Feilmelding"}),e(a,{...l,onSetValue:H,value:R,emptiable:!0}),e(a,{...l,onSetValue:x,value:k,hideIcon:!0})]})},s=l=>{const[o,u]=n.useState("");return e(c,{title:"InlineEditInput - default",display:"block",children:e(a,{...l,value:o,onSetValue:u})})},p=()=>{const[l,o]=n.useState(),[u,d]=n.useState();return e(c,{title:"InlineEditInput - in table",display:"block",children:e(t.Wrapper,{children:r(t,{children:[e(t.Head,{children:r(t.Row,{type:"head",children:[e(t.Cell,{type:"head",children:"Header"}),e(t.Cell,{type:"head",children:"Header"}),e(t.Cell,{type:"head",children:"Header"})]})}),r(t.Body,{children:[r(t.Row,{children:[e(t.Cell,{children:e(a,{onSetValue:()=>o(l)})}),e(t.Cell,{children:"innhold"}),e(t.Cell,{children:"innhold"})]}),r(t.Row,{children:[e(t.Cell,{children:e(a,{onSetValue:()=>d(u)})}),e(t.Cell,{children:"innhold"}),e(t.Cell,{children:"innhold"})]})]})]})})})};var m,b,S;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`(args: InlineEditInputProps) => {
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
//# sourceMappingURL=InlineEditInput.stories-de77fc8d.js.map
