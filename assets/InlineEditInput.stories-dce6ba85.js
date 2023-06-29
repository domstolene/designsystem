import{a as r,j as e}from"./focus-visible-35158c22.js";import{R as c}from"./storybook-components-cc5979ee.js";import{T as l}from"./index-d13b28d7.js";import{r as n}from"./index-d47b1f5a.js";import{I as a}from"./InlineEditInput-a42b7b8a.js";import"./chunk-PCJTTTQV-321daf3b.js";import"./iframe-6f267a68.js";import"../sb-preview/runtime.js";import"./index-db9ff070.js";import"./index-d475d2ea.js";import"./index-356e4a49.js";import"./dds-core-29d22035.js";import"./scrollbarStyling-1bd29018.js";import"./ScrollableContainer.tokens-66d4a31f.js";import"./dds-typography-e761338c.js";import"./dds-form-b2eacd8d.js";import"./DescriptionListDesc-aeb60806.js";import"./dds-icons-7a922c3a.js";import"./VisuallyHidden-2839ca90.js";import"./InlineEdit.utils-2fe64ec0.js";import"./renderInputMessage-3a3d5367.js";import"./InputMessage-7bbeab57.js";const $={title:"dds-components/InlineEdit/InlineEditInput",component:a,argTypes:{emptiable:{control:{type:"boolean"}},error:{control:{type:"boolean"}},errorMessage:{control:{type:"text"}},width:{control:{type:"text"}}},parameters:{controls:{exclude:["style","className","onFocus","onBlur","onChange","onSetValue","inputRef","children"]}}},s=t=>{const[o,u]=n.useState(""),[p,y]=n.useState("tekst"),[E,g]=n.useState(""),[w,f]=n.useState(""),[R,H]=n.useState("tømbar"),[k,x]=n.useState("uten ikon");return r(c,{title:"InlineEditInput - overview",children:[e(a,{...t,value:o,onSetValue:u}),e(a,{...t,onSetValue:y,value:p}),e(a,{...t,onSetValue:g,value:E,error:!0}),e(a,{...t,onSetValue:f,value:w,errorMessage:"Feilmelding"}),e(a,{...t,onSetValue:H,value:R,emptiable:!0}),e(a,{...t,onSetValue:x,value:k,hideIcon:!0})]})},i=t=>{const[o,u]=n.useState("");return e(c,{title:"InlineEditInput - default",display:"block",children:e(a,{...t,value:o,onSetValue:u})})},d=()=>{const[t,o]=n.useState(),[u,p]=n.useState();return e(c,{title:"InlineEditInput - in table",display:"block",children:e(l.Wrapper,{children:r(l,{children:[e(l.Head,{children:r(l.Row,{type:"head",children:[e(l.Cell,{type:"head",children:"Header"}),e(l.Cell,{type:"head",children:"Header"}),e(l.Cell,{type:"head",children:"Header"})]})}),r(l.Body,{children:[r(l.Row,{children:[e(l.Cell,{children:e(a,{onSetValue:()=>o(t)})}),e(l.Cell,{children:"innhold"}),e(l.Cell,{children:"innhold"})]}),r(l.Row,{children:[e(l.Cell,{children:e(a,{onSetValue:()=>p(u)})}),e(l.Cell,{children:"innhold"}),e(l.Cell,{children:"innhold"})]})]})]})})})};var m,b,v;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`(args: InlineEditInputProps) => {
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
}`,...(V=(S=i.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var T,h,C;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
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
}`,...(C=(h=d.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};const ee=["Overview","Default","InTable"];export{i as Default,d as InTable,s as Overview,ee as __namedExportsOrder,$ as default};
//# sourceMappingURL=InlineEditInput.stories-dce6ba85.js.map
