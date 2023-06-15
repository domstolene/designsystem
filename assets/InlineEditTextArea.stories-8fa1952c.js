import{a as n,j as e}from"./focus-visible-c2e9b88d.js";import{R as c}from"./storybook-components-045061bd.js";import{T as t}from"./index-022da107.js";import{r}from"./index-ebeaab24.js";import{I as a}from"./InlineEditTextArea-7476a349.js";import"./chunk-PCJTTTQV-80a74cac.js";import"./iframe-00013f19.js";import"../sb-preview/runtime.js";import"./index-40534236.js";import"./index-9c09ad76.js";import"./selection-fae9d0a8.js";import"./scrollbarStyling-a46ac0ea.js";import"./ScrollableContainer.tokens-4d8ec996.js";import"./Typography.utils-99dd1e07.js";import"./focusVisible-75802ac7.js";import"./DescriptionListDesc-d92b631c.js";import"./BaseComponentProps-bb0d5515.js";import"./Icon-819df738.js";import"./unfoldMore-65c30606.js";import"./SvgWrapper-cd7fa512.js";import"./chevronUp-4c595192.js";import"./normalize-f756ee4b.js";import"./removeButtonStyling-867d6ba4.js";import"./chevronDown-41304f61.js";import"./idGenerator-c29473b2.js";import"./VisuallyHidden-9c195a2c.js";import"./AnimatedChevronUpDown-4430134c.js";import"./InlineEdit.utils-9a44654a.js";import"./useOnKeyDown-4552d984.js";import"./useOnClickOutside-1aed2959.js";import"./Input.styles-0a1e38a8.js";import"./Input.tokens-0612e464.js";import"./hover-d616d034.js";import"./danger-157ad055.js";import"./edit-791efced.js";import"./useCombinedRefs-40b11bb4.js";import"./Input.utils-f888acf1.js";import"./InputMessage-bb06ca10.js";import"./error-e0532677.js";import"./Typography-9f10a259.js";import"./color-a12930ac.js";const Ve={title:"dds-components/InlineEdit/InlineEditTextArea",component:a,argTypes:{emptiable:{control:{type:"boolean"}},error:{control:{type:"boolean"}},errorMessage:{control:{type:"text"}},width:{control:{type:"text"}}},parameters:{controls:{exclude:["style","className","onFocus","onBlur","onChange","onSetValue","inputRef","children"]}}},s=l=>{const[o,i]=r.useState(""),[p,y]=r.useState("tekst"),[I,E]=r.useState(""),[A,g]=r.useState(""),[w,f]=r.useState("tømbar"),[R,H]=r.useState("uten ikon");return n(c,{title:"InlineEditTextArea - overview",children:[e(a,{...l,value:o,onSetValue:i}),e(a,{...l,onSetValue:y,value:p}),e(a,{...l,onSetValue:E,value:I,error:!0}),e(a,{...l,onSetValue:g,value:A,errorMessage:"Feilmelding"}),e(a,{...l,onSetValue:f,value:w,emptiable:!0}),e(a,{...l,onSetValue:H,value:R,hideIcon:!0})]})},u=l=>{const[o,i]=r.useState("");return e(c,{title:"InlineEditTextArea - default",display:"block",children:e(a,{...l,value:o,onSetValue:i})})},d=()=>{const[l,o]=r.useState(),[i,p]=r.useState();return e(c,{title:"InlineEditTextArea - in table",display:"block",children:e(t.Wrapper,{children:n(t,{children:[e(t.Head,{children:n(t.Row,{type:"head",children:[e(t.Cell,{type:"head",children:"Header"}),e(t.Cell,{type:"head",children:"Header"}),e(t.Cell,{type:"head",children:"Header"})]})}),n(t.Body,{children:[n(t.Row,{children:[e(t.Cell,{children:e(a,{onSetValue:()=>o(l)})}),e(t.Cell,{children:"innhold"}),e(t.Cell,{children:"innhold"})]}),n(t.Row,{children:[e(t.Cell,{children:e(a,{onSetValue:()=>p(i)})}),e(t.Cell,{children:"innhold"}),e(t.Cell,{children:"innhold"})]})]})]})})})};var m,T,b;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`(args: InlineEditTextAreaProps) => {
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
}`,...(b=(T=s.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var v,S,V;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`(args: InlineEditTextAreaProps) => {
  const [value, setValue] = useState('');
  return <StoryTemplate title="InlineEditTextArea - default" display="block">
      <InlineEditTextArea {...args} value={value} onSetValue={setValue} />
    </StoryTemplate>;
}`,...(V=(S=u.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var h,x,C;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
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
}`,...(C=(x=d.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};const he=["Overview","Default","InTable"];export{u as Default,d as InTable,s as Overview,he as __namedExportsOrder,Ve as default};
//# sourceMappingURL=InlineEditTextArea.stories-8fa1952c.js.map
