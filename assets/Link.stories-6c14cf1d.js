import{j as L,a as n}from"./ddsReferenceTokens-f1d35829.js";import{L as a}from"./Link-2c33781e.js";import{R as f}from"./storybook-components-6981d325.js";const u={title:"dds-components/Typography/Link",component:a,argTypes:{typographyType:{control:{type:"select"}},withMargins:{control:{type:"boolean"}},text:{control:{type:"text"}},href:{control:{type:"text"}}}},t=i=>{const{text:r,href:o,...s}=i;return L(f,{title:"Link - default",children:[n(a,{...s,href:o||"https://www.domstol.no",children:r||"Link"}),n(a,{...s,external:!0,href:o||"https://www.domstol.no",children:r||"Link"})]})},e=i=>{const{text:r,href:o,...s}=i;return n(f,{title:"Link - default",children:n(a,{...s,href:o||"https://www.domstol.no",children:r||"Link"})})};var l,p,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`(args: StoryTProps) => {
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
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var d,h,m;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`(args: StoryTProps) => {
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
}`,...(m=(h=e.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};const w=["Overview","Default"],g=Object.freeze(Object.defineProperty({__proto__:null,Default:e,Overview:t,__namedExportsOrder:w,default:u},Symbol.toStringTag,{value:"Module"}));export{g as L};
//# sourceMappingURL=Link.stories-6c14cf1d.js.map
