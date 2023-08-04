import{j as r,a as e}from"./ddsReferenceTokens-f1d35829.js";import{R as c}from"./storybook-components-b14ef24f.js";import{T as l}from"./index-9e7a0ef7.js";import{r as n}from"./index-d47b1f5a.js";import{I as a}from"./InlineEditInput-9496b891.js";import"./chunk-PCJTTTQV-0127294b.js";import"./iframe-3cdea761.js";import"../sb-preview/runtime.js";import"./index-db9ff070.js";import"./index-d475d2ea.js";import"./index-356e4a49.js";import"./focus-visible-bfce03b6.js";import"./dds-core-c67132cd.js";import"./scrollbarStyling-5cc839fb.js";import"./ScrollableContainer.tokens-c202eeaf.js";import"./dds-typography-cc6cb429.js";import"./dds-form-9b45fc8d.js";import"./DescriptionListDesc-559bec8b.js";import"./dds-icons-265d9665.js";import"./VisuallyHidden-15b316c1.js";import"./InlineEdit.utils-1585b266.js";import"./renderInputMessage-d83d5631.js";import"./InputMessage-e040ee1d.js";const ee={title:"dds-components/InlineEdit/InlineEditInput",component:a,argTypes:{emptiable:{control:{type:"boolean"}},error:{control:{type:"boolean"}},errorMessage:{control:{type:"text"}},width:{control:{type:"text"}}},parameters:{controls:{exclude:["style","className","onFocus","onBlur","onChange","onSetValue","inputRef","children"]}}},s=t=>{const[o,u]=n.useState(""),[d,y]=n.useState("tekst"),[E,g]=n.useState(""),[w,f]=n.useState(""),[R,H]=n.useState("tømbar"),[k,x]=n.useState("uten ikon");return r(c,{title:"InlineEditInput - overview",children:[e(a,{...t,value:o,onSetValue:u}),e(a,{...t,onSetValue:y,value:d}),e(a,{...t,onSetValue:g,value:E,error:!0}),e(a,{...t,onSetValue:f,value:w,errorMessage:"Feilmelding"}),e(a,{...t,onSetValue:H,value:R,emptiable:!0}),e(a,{...t,onSetValue:x,value:k,hideIcon:!0})]})},i=t=>{const[o,u]=n.useState("");return e(c,{title:"InlineEditInput - default",display:"block",children:e(a,{...t,value:o,onSetValue:u})})},p=()=>{const[t,o]=n.useState(),[u,d]=n.useState();return e(c,{title:"InlineEditInput - in table",display:"block",children:e(l.Wrapper,{children:r(l,{children:[e(l.Head,{children:r(l.Row,{type:"head",children:[e(l.Cell,{type:"head",children:"Header"}),e(l.Cell,{type:"head",children:"Header"}),e(l.Cell,{type:"head",children:"Header"})]})}),r(l.Body,{children:[r(l.Row,{children:[e(l.Cell,{children:e(a,{onSetValue:()=>o(t)})}),e(l.Cell,{children:"innhold"}),e(l.Cell,{children:"innhold"})]}),r(l.Row,{children:[e(l.Cell,{children:e(a,{onSetValue:()=>d(u)})}),e(l.Cell,{children:"innhold"}),e(l.Cell,{children:"innhold"})]})]})]})})})};var m,b,v;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`(args: InlineEditInputProps) => {
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
}`,...(v=(b=s.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var I,S,V;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`(args: InlineEditInputProps) => {
  const [value, setValue] = useState('');
  return <StoryTemplate title="InlineEditInput - default" display="block">
      <InlineEditInput {...args} value={value} onSetValue={setValue} />
    </StoryTemplate>;
}`,...(V=(S=i.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var T,h,C;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
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
}`,...(C=(h=p.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};const le=["Overview","Default","InTable"];export{i as Default,p as InTable,s as Overview,le as __namedExportsOrder,ee as default};
//# sourceMappingURL=InlineEditInput.stories-051a5fe1.js.map
