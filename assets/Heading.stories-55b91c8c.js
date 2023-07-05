import{j as m,a as e}from"./focus-visible-8467fd8b.js";import{H as n}from"./Heading-cdc0040d.js";import{R as g}from"./storybook-components-dc8c0578.js";const u={title:"dds-components/Typography/Heading",component:n,argTypes:{typographyType:{control:{type:"select"}},withMargins:{control:{type:"boolean"}},text:{control:{type:"text"}}}},r=()=>m(g,{title:"Heading - overview",children:[e(n,{level:1,children:"Heading 1"}),e(n,{level:2,children:"Heading 2"}),e(n,{level:3,children:"Heading 3"}),e(n,{level:4,children:"Heading 4"}),e(n,{level:5,children:"Heading 5"}),e(n,{level:6,children:"Heading 6"})]}),t=H=>{const{text:c,level:p,...v}=H;return e(g,{title:"Heading - default",children:e(n,{...v,level:p||1,children:c||"Heading"})})};var a,l,i;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  return <StoryTemplate title="Heading - overview">
      <Heading level={1}>Heading 1</Heading>
      <Heading level={2}>Heading 2</Heading>
      <Heading level={3}>Heading 3</Heading>
      <Heading level={4}>Heading 4</Heading>
      <Heading level={5}>Heading 5</Heading>
      <Heading level={6}>Heading 6</Heading>
    </StoryTemplate>;
}`,...(i=(l=r.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var d,o,s;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`(args: StoryTProps) => {
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
}`,...(s=(o=t.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const y=["Overview","Default"],x=Object.freeze(Object.defineProperty({__proto__:null,Default:t,Overview:r,__namedExportsOrder:y,default:u},Symbol.toStringTag,{value:"Module"}));export{x as H};
//# sourceMappingURL=Heading.stories-55b91c8c.js.map
