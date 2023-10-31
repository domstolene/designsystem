import{j as c,a as t}from"./jsx-runtime-e43ccb36.js";import{S as m}from"./StoryTemplate-d3d045d5.js";import{r as o}from"./index-1b03fe98.js";import{I as d}from"./InlineEditTextArea-40288b29.js";import{I as s}from"./InlineEditInput-4fc24b19.js";const v={title:"dds-components/InlineEdit",component:s,argTypes:{emptiable:{control:{type:"boolean"}},error:{control:{type:"boolean"}},errorMessage:{control:{type:"text"}},width:{control:{type:"text"}}},parameters:{controls:{exclude:["style","className","onFocus","onBlur","onChange","onSetValue","inputRef","children"]}}},e=()=>{const[l,i]=o.useState(""),[u,p]=o.useState("");return c(m,{title:"InlineEdit - overview input types",children:[t(s,{value:l,onSetValue:i}),t(d,{value:u,onSetValue:p})]})};var r,n,a;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`() => {
  const [value, setValue] = useState('');
  const [value2, setValue2] = useState('');
  return <StoryTemplate title="InlineEdit - overview input types">
      <InlineEditInput value={value} onSetValue={setValue} />
      <InlineEditTextArea value={value2} onSetValue={setValue2} />
    </StoryTemplate>;
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const S=["OverviewInputTypes"],f=Object.freeze(Object.defineProperty({__proto__:null,OverviewInputTypes:e,__namedExportsOrder:S,default:v},Symbol.toStringTag,{value:"Module"}));export{f as I};
//# sourceMappingURL=InlineEdit.stories-bb45c81b.js.map
