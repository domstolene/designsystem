import{j as c,a as e}from"./jsx-runtime-e43ccb36.js";import{P as t}from"./Paragraph-6d49c218.js";import{S}from"./StoryTemplate-6a95b3b2.js";const P={title:"dds-components/Typography/Paragraph",component:t,argTypes:{typographyType:{control:{type:"select"}},withMargins:{control:{type:"boolean"}},text:{control:{type:"text"}}}},p=o=>{const{text:a,...r}=o;return c(S,{title:"Paragraph - overview",children:[e(t,{...r,typographyType:"bodySans01",children:a||"bodySans01"}),e(t,{...r,typographyType:"bodySans02",children:a||"bodySans02"}),e(t,{...r,typographyType:"bodySans03",children:a||"bodySans03"}),e(t,{...r,typographyType:"bodySans04",children:a||"bodySans04"}),e(t,{...r,typographyType:"leadSans01",children:a||"leadSans01"}),e(t,{...r,typographyType:"leadSans02",children:a||"leadSans02"}),e(t,{...r,typographyType:"leadSans03",children:a||"leadSans03"}),e(t,{...r,typographyType:"leadSans04",children:a||"leadSans04"}),e(t,{...r,typographyType:"leadSans05",children:a||"leadSans05"})]})},s=o=>{const{text:a,...r}=o;return e(S,{title:"Paragraph - default",children:e(t,{...r,children:a||"Paragraph"})})};var y,n,d;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`(args: StoryTProps) => {
  const {
    text,
    ...rest
  } = args;
  return <StoryTemplate title="Paragraph - overview">
      <Paragraph {...rest} typographyType="bodySans01">
        {text || 'bodySans01'}
      </Paragraph>
      <Paragraph {...rest} typographyType="bodySans02">
        {text || 'bodySans02'}
      </Paragraph>
      <Paragraph {...rest} typographyType="bodySans03">
        {text || 'bodySans03'}
      </Paragraph>
      <Paragraph {...rest} typographyType="bodySans04">
        {text || 'bodySans04'}
      </Paragraph>
      <Paragraph {...rest} typographyType="leadSans01">
        {text || 'leadSans01'}
      </Paragraph>
      <Paragraph {...rest} typographyType="leadSans02">
        {text || 'leadSans02'}
      </Paragraph>
      <Paragraph {...rest} typographyType="leadSans03">
        {text || 'leadSans03'}
      </Paragraph>
      <Paragraph {...rest} typographyType="leadSans04">
        {text || 'leadSans04'}
      </Paragraph>
      <Paragraph {...rest} typographyType="leadSans05">
        {text || 'leadSans05'}
      </Paragraph>
    </StoryTemplate>;
}`,...(d=(n=p.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var h,g,l;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`(args: StoryTProps) => {
  const {
    text,
    ...rest
  } = args;
  return <StoryTemplate title="Paragraph - default">
      <Paragraph {...rest}>{text || 'Paragraph'}</Paragraph>
    </StoryTemplate>;
}`,...(l=(g=s.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};const i=["Overview","Default"],x=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Overview:p,__namedExportsOrder:i,default:P},Symbol.toStringTag,{value:"Module"}));export{x as P};
//# sourceMappingURL=Paragraph.stories-7b35a014.js.map
