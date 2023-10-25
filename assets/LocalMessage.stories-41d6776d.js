import{j as c,a as s}from"./jsx-runtime-e43ccb36.js";import{S as p}from"./StoryTemplate-6502379c.js";import"./Caption-d810b87c.js";import"./Heading-0c5437bc.js";import"./Label-05114518.js";import"./Legend-9969638c.js";import"./Link-c264ab95.js";import"./Paragraph-88055bd8.js";import"./TextOverflowEllipsis-6cc9a60a.js";import{T as i}from"./Typography-d13ef156.js";import{L as a}from"./LocalMessage-91b004b6.js";import{L as v,a as n}from"./ListItem-48f19796.js";const w={title:"dds-components/LocalMessage",component:a,argTypes:{message:{control:{type:"text"},defaultValue:"En tilfeldig melding"},width:{control:{type:"text"}},closable:{control:{type:"boolean"}}}},o=e=>c(p,{title:"LocalMessage - overview",children:[s(a,{...e,purpose:"info"}),s(a,{...e,purpose:"warning"}),s(a,{...e,purpose:"danger"}),s(a,{...e,purpose:"confidential"}),s(a,{...e,purpose:"success"}),s(a,{...e,purpose:"tips"}),s(a,{...e,layout:"vertical"}),s(a,{...e,purpose:"info",closable:!0}),s(a,{...e,purpose:"warning",closable:!0}),s(a,{...e,purpose:"danger",closable:!0}),s(a,{...e,purpose:"confidential",closable:!0}),s(a,{...e,purpose:"success",closable:!0}),s(a,{...e,purpose:"tips",closable:!0}),s(a,{...e,layout:"vertical",closable:!0})]}),r=e=>s(p,{title:"LocalMessage - default",children:s(a,{...e,message:e.message})}),t=e=>s(p,{title:"LocalMessage - closable",children:s(a,{...e,purpose:e.purpose,message:e.message,closable:!0})}),l=e=>s(p,{title:"LocalMessage - complex content",children:c(a,{...e,purpose:e.purpose,layout:"vertical",closable:!0,children:[s(i,{typographyType:"headingSans03",withMargins:!0,children:"Dette er en viktig melding"}),s(i,{withMargins:!0,children:"Meldingen har en liste i seg:"}),c(v,{children:[s(n,{children:"Noe her"}),s(n,{children:"Og også her"}),s(n,{children:"Og litt mer info her"})]})]})});var g,u,m;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`(args: LocalMessageProps) => {
  return <StoryTemplate title="LocalMessage - overview">
      <LocalMessage {...args} purpose="info" />
      <LocalMessage {...args} purpose="warning" />
      <LocalMessage {...args} purpose="danger" />
      <LocalMessage {...args} purpose="confidential" />
      <LocalMessage {...args} purpose="success" />
      <LocalMessage {...args} purpose="tips" />
      <LocalMessage {...args} layout="vertical" />
      <LocalMessage {...args} purpose="info" closable />
      <LocalMessage {...args} purpose="warning" closable />
      <LocalMessage {...args} purpose="danger" closable />
      <LocalMessage {...args} purpose="confidential" closable />
      <LocalMessage {...args} purpose="success" closable />
      <LocalMessage {...args} purpose="tips" closable />
      <LocalMessage {...args} layout="vertical" closable />
    </StoryTemplate>;
}`,...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var d,L,M;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`(args: LocalMessageProps) => {
  return <StoryTemplate title="LocalMessage - default">
      <LocalMessage {...args} message={args.message} />
    </StoryTemplate>;
}`,...(M=(L=r.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var y,h,b;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`(args: LocalMessageProps) => {
  return <StoryTemplate title="LocalMessage - closable">
      <LocalMessage {...args} purpose={args.purpose} message={args.message} closable />
    </StoryTemplate>;
}`,...(b=(h=t.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var f,S,T;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`(args: LocalMessageProps) => {
  return <StoryTemplate title="LocalMessage - complex content">
      <LocalMessage {...args} purpose={args.purpose} layout="vertical" closable>
        <Typography typographyType="headingSans03" withMargins>
          Dette er en viktig melding
        </Typography>
        <Typography withMargins>Meldingen har en liste i seg:</Typography>
        <List>
          <ListItem>Noe her</ListItem>
          <ListItem>Og også her</ListItem>
          <ListItem>Og litt mer info her</ListItem>
        </List>
      </LocalMessage>
    </StoryTemplate>;
}`,...(T=(S=l.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};const x=["Overview","Default","Closable","ComplexContent"],q=Object.freeze(Object.defineProperty({__proto__:null,Closable:t,ComplexContent:l,Default:r,Overview:o,__namedExportsOrder:x,default:w},Symbol.toStringTag,{value:"Module"}));export{q as L};
//# sourceMappingURL=LocalMessage.stories-41d6776d.js.map
