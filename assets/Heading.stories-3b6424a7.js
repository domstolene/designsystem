import{j as m,a as e}from"./jsx-runtime-e43ccb36.js";import{H as t}from"./Heading-a143a4ab.js";import{S as g}from"./StoryTemplate-b1805fe5.js";const u={title:"dds-components/Typography/Heading",component:t,argTypes:{typographyType:{control:{type:"select"}},withMargins:{control:{type:"boolean"}},text:{control:{type:"text"}}}},r=()=>m(g,{title:"Heading - overview",children:[e(t,{level:1,children:"Heading 1"}),e(t,{level:2,children:"Heading 2"}),e(t,{level:3,children:"Heading 3"}),e(t,{level:4,children:"Heading 4"}),e(t,{level:5,children:"Heading 5"}),e(t,{level:6,children:"Heading 6"})]}),a=H=>{const{text:c,level:p,...v}=H;return e(g,{title:"Heading - default",children:e(t,{...v,level:p||1,children:c||"Heading"})})};var n,l,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`() => {
  return <StoryTemplate title="Heading - overview">
      <Heading level={1}>Heading 1</Heading>
      <Heading level={2}>Heading 2</Heading>
      <Heading level={3}>Heading 3</Heading>
      <Heading level={4}>Heading 4</Heading>
      <Heading level={5}>Heading 5</Heading>
      <Heading level={6}>Heading 6</Heading>
    </StoryTemplate>;
}`,...(i=(l=r.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var d,o,s;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`(args: StoryTProps) => {
  const {
    text,
    level,
    ...rest
  } = args;
  return <StoryTemplate title="Heading - default">
      <Heading {...rest} level={level || 1}>
        {text || 'Heading'}
      </Heading>
    </StoryTemplate>;
}`,...(s=(o=a.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const y=["Overview","Default"],T=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Overview:r,__namedExportsOrder:y,default:u},Symbol.toStringTag,{value:"Module"}));export{T as H};
//# sourceMappingURL=Heading.stories-3b6424a7.js.map
