import{a as r,j as e}from"./focus-visible-c2e9b88d.js";import{R as c}from"./storybook-components-045061bd.js";import{T as t}from"./index-022da107.js";import{r as n}from"./index-ebeaab24.js";import{I as a}from"./InlineEditInput-84cbd842.js";import"./chunk-PCJTTTQV-80a74cac.js";import"./iframe-00013f19.js";import"../sb-preview/runtime.js";import"./index-40534236.js";import"./index-9c09ad76.js";import"./selection-fae9d0a8.js";import"./scrollbarStyling-a46ac0ea.js";import"./ScrollableContainer.tokens-4d8ec996.js";import"./Typography.utils-99dd1e07.js";import"./focusVisible-75802ac7.js";import"./DescriptionListDesc-d92b631c.js";import"./BaseComponentProps-bb0d5515.js";import"./Icon-819df738.js";import"./unfoldMore-65c30606.js";import"./SvgWrapper-cd7fa512.js";import"./chevronUp-4c595192.js";import"./normalize-f756ee4b.js";import"./removeButtonStyling-867d6ba4.js";import"./chevronDown-41304f61.js";import"./idGenerator-c29473b2.js";import"./VisuallyHidden-9c195a2c.js";import"./AnimatedChevronUpDown-4430134c.js";import"./InlineEdit.utils-9a44654a.js";import"./useOnKeyDown-4552d984.js";import"./useOnClickOutside-1aed2959.js";import"./Input.styles-0a1e38a8.js";import"./Input.tokens-0612e464.js";import"./hover-d616d034.js";import"./danger-157ad055.js";import"./useCombinedRefs-40b11bb4.js";import"./edit-791efced.js";import"./Input.utils-f888acf1.js";import"./InputMessage-bb06ca10.js";import"./error-e0532677.js";import"./Typography-9f10a259.js";import"./color-a12930ac.js";const Ve={title:"dds-components/InlineEdit/InlineEditInput",component:a,argTypes:{emptiable:{control:{type:"boolean"}},error:{control:{type:"boolean"}},errorMessage:{control:{type:"text"}},width:{control:{type:"text"}}},parameters:{controls:{exclude:["style","className","onFocus","onBlur","onChange","onSetValue","inputRef","children"]}}},i=l=>{const[o,u]=n.useState(""),[d,y]=n.useState("tekst"),[E,g]=n.useState(""),[w,f]=n.useState(""),[R,H]=n.useState("tømbar"),[k,x]=n.useState("uten ikon");return r(c,{title:"InlineEditInput - overview",children:[e(a,{...l,value:o,onSetValue:u}),e(a,{...l,onSetValue:y,value:d}),e(a,{...l,onSetValue:g,value:E,error:!0}),e(a,{...l,onSetValue:f,value:w,errorMessage:"Feilmelding"}),e(a,{...l,onSetValue:H,value:R,emptiable:!0}),e(a,{...l,onSetValue:x,value:k,hideIcon:!0})]})},s=l=>{const[o,u]=n.useState("");return e(c,{title:"InlineEditInput - default",display:"block",children:e(a,{...l,value:o,onSetValue:u})})},p=()=>{const[l,o]=n.useState(),[u,d]=n.useState();return e(c,{title:"InlineEditInput - in table",display:"block",children:e(t.Wrapper,{children:r(t,{children:[e(t.Head,{children:r(t.Row,{type:"head",children:[e(t.Cell,{type:"head",children:"Header"}),e(t.Cell,{type:"head",children:"Header"}),e(t.Cell,{type:"head",children:"Header"})]})}),r(t.Body,{children:[r(t.Row,{children:[e(t.Cell,{children:e(a,{onSetValue:()=>o(l)})}),e(t.Cell,{children:"innhold"}),e(t.Cell,{children:"innhold"})]}),r(t.Row,{children:[e(t.Cell,{children:e(a,{onSetValue:()=>d(u)})}),e(t.Cell,{children:"innhold"}),e(t.Cell,{children:"innhold"})]})]})]})})})};var m,b,v;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`(args: InlineEditInputProps) => {
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
}`,...(v=(b=i.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var I,S,V;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`(args: InlineEditInputProps) => {
  const [value, setValue] = useState('');
  return <StoryTemplate title="InlineEditInput - default" display="block">
      <InlineEditInput {...args} value={value} onSetValue={setValue} />
    </StoryTemplate>;
}`,...(V=(S=s.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var T,h,C;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`() => {
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
}`,...(C=(h=p.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};const Te=["Overview","Default","InTable"];export{s as Default,p as InTable,i as Overview,Te as __namedExportsOrder,Ve as default};
//# sourceMappingURL=InlineEditInput.stories-435f8ffe.js.map
