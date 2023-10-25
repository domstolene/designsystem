import{j as L,a as n}from"./jsx-runtime-e43ccb36.js";import{L as a}from"./Link-c264ab95.js";import{S as f}from"./StoryTemplate-6502379c.js";const u={title:"dds-components/Typography/Link",component:a,argTypes:{typographyType:{control:{type:"select"}},withMargins:{control:{type:"boolean"}},text:{control:{type:"text"}},href:{control:{type:"text"}}}},t=i=>{const{text:r,href:o,...s}=i;return L(f,{title:"Link - default",children:[n(a,{...s,href:o||"https://www.domstol.no",children:r||"Link"}),n(a,{...s,external:!0,href:o||"https://www.domstol.no",children:r||"Link"})]})},e=i=>{const{text:r,href:o,...s}=i;return n(f,{title:"Link - default",children:n(a,{...s,href:o||"https://www.domstol.no",children:r||"Link"})})};var l,p,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`(args: StoryTProps) => {
  const {
    text,
    href,
    ...rest
  } = args;
  return <StoryTemplate title="Link - default">
      <Link {...rest} href={href || 'https://www.domstol.no'}>
        {text || 'Link'}
      </Link>
      <Link {...rest} external href={href || 'https://www.domstol.no'}>
        {text || 'Link'}
      </Link>
    </StoryTemplate>;
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var m,d,h;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`(args: StoryTProps) => {
  const {
    text,
    href,
    ...rest
  } = args;
  return <StoryTemplate title="Link - default">
      <Link {...rest} href={href || 'https://www.domstol.no'}>
        {text || 'Link'}
      </Link>
    </StoryTemplate>;
}`,...(h=(d=e.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};const w=["Overview","Default"],S=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Overview:t,__namedExportsOrder:w,default:u},Symbol.toStringTag,{value:"Module"}));export{S as L};
//# sourceMappingURL=Link.stories-31bce028.js.map
