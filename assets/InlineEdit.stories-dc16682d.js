import{a as c,j as t}from"./focus-visible-35158c22.js";import{R as d}from"./storybook-components-cc5979ee.js";import{r as o}from"./index-d47b1f5a.js";import{I as m}from"./InlineEditTextArea-83e36ee7.js";import{I as s}from"./InlineEditInput-a42b7b8a.js";const v={title:"dds-components/InlineEdit",component:s,argTypes:{emptiable:{control:{type:"boolean"}},error:{control:{type:"boolean"}},errorMessage:{control:{type:"text"}},width:{control:{type:"text"}}},parameters:{controls:{exclude:["style","className","onFocus","onBlur","onChange","onSetValue","inputRef","children"]}}},e=()=>{const[l,i]=o.useState(""),[u,p]=o.useState("");return c(d,{title:"InlineEdit - overview input types",children:[t(s,{value:l,onSetValue:i}),t(m,{value:u,onSetValue:p})]})};var r,n,a;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  const [value, setValue] = useState('');
  const [value2, setValue2] = useState('');
  return <StoryTemplate title="InlineEdit - overview input types">
      <InlineEditInput value={value} onSetValue={setValue} />
      <InlineEditTextArea value={value2} onSetValue={setValue2} />
    </StoryTemplate>;
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const I=["OverviewInputTypes"],f=Object.freeze(Object.defineProperty({__proto__:null,OverviewInputTypes:e,__namedExportsOrder:I,default:v},Symbol.toStringTag,{value:"Module"}));export{f as I};
//# sourceMappingURL=InlineEdit.stories-dc16682d.js.map
