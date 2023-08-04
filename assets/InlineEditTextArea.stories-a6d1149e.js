import{j as r,a as e}from"./ddsReferenceTokens-f1d35829.js";import{R as p}from"./storybook-components-b14ef24f.js";import{T as l}from"./index-9e7a0ef7.js";import{r as n}from"./index-d47b1f5a.js";import{I as a}from"./InlineEditTextArea-edaa4afc.js";import"./chunk-PCJTTTQV-0127294b.js";import"./iframe-3cdea761.js";import"../sb-preview/runtime.js";import"./index-db9ff070.js";import"./index-d475d2ea.js";import"./index-356e4a49.js";import"./focus-visible-bfce03b6.js";import"./dds-core-c67132cd.js";import"./scrollbarStyling-5cc839fb.js";import"./ScrollableContainer.tokens-c202eeaf.js";import"./dds-typography-cc6cb429.js";import"./dds-form-9b45fc8d.js";import"./DescriptionListDesc-559bec8b.js";import"./dds-icons-265d9665.js";import"./VisuallyHidden-15b316c1.js";import"./InlineEdit.utils-1585b266.js";import"./renderInputMessage-d83d5631.js";import"./InputMessage-e040ee1d.js";const ee={title:"dds-components/InlineEdit/InlineEditTextArea",component:a,argTypes:{emptiable:{control:{type:"boolean"}},error:{control:{type:"boolean"}},errorMessage:{control:{type:"text"}},width:{control:{type:"text"}}},parameters:{controls:{exclude:["style","className","onFocus","onBlur","onChange","onSetValue","inputRef","children"]}}},u=t=>{const[o,s]=n.useState(""),[c,y]=n.useState("tekst"),[I,E]=n.useState(""),[A,g]=n.useState(""),[w,f]=n.useState("tømbar"),[R,H]=n.useState("uten ikon");return r(p,{title:"InlineEditTextArea - overview",children:[e(a,{...t,value:o,onSetValue:s}),e(a,{...t,onSetValue:y,value:c}),e(a,{...t,onSetValue:E,value:I,error:!0}),e(a,{...t,onSetValue:g,value:A,errorMessage:"Feilmelding"}),e(a,{...t,onSetValue:f,value:w,emptiable:!0}),e(a,{...t,onSetValue:H,value:R,hideIcon:!0})]})},i=t=>{const[o,s]=n.useState("");return e(p,{title:"InlineEditTextArea - default",display:"block",children:e(a,{...t,value:o,onSetValue:s})})},d=()=>{const[t,o]=n.useState(),[s,c]=n.useState();return e(p,{title:"InlineEditTextArea - in table",display:"block",children:e(l.Wrapper,{children:r(l,{children:[e(l.Head,{children:r(l.Row,{type:"head",children:[e(l.Cell,{type:"head",children:"Header"}),e(l.Cell,{type:"head",children:"Header"}),e(l.Cell,{type:"head",children:"Header"})]})}),r(l.Body,{children:[r(l.Row,{children:[e(l.Cell,{children:e(a,{onSetValue:()=>o(t)})}),e(l.Cell,{children:"innhold"}),e(l.Cell,{children:"innhold"})]}),r(l.Row,{children:[e(l.Cell,{children:e(a,{onSetValue:()=>c(s)})}),e(l.Cell,{children:"innhold"}),e(l.Cell,{children:"innhold"})]})]})]})})})};var T,m,b;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`(args: InlineEditTextAreaProps) => {
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
}`,...(b=(m=u.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var v,S,V;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`(args: InlineEditTextAreaProps) => {
  const [value, setValue] = useState('');
  return <StoryTemplate title="InlineEditTextArea - default" display="block">
      <InlineEditTextArea {...args} value={value} onSetValue={setValue} />
    </StoryTemplate>;
}`,...(V=(S=i.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var h,x,C;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
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
}`,...(C=(x=d.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};const le=["Overview","Default","InTable"];export{i as Default,d as InTable,u as Overview,le as __namedExportsOrder,ee as default};
//# sourceMappingURL=InlineEditTextArea.stories-a6d1149e.js.map
