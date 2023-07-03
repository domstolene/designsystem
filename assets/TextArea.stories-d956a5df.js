import{j as x,a as r}from"./focus-visible-8467fd8b.js";import{R as o}from"./storybook-components-2ff4719e.js";import{T as a}from"./TextArea-721536fc.js";const v={title:"dds-components/TextArea",component:a,argTypes:{label:{control:{type:"text"}},tip:{control:{type:"text"}},errorMessage:{control:{type:"text"}},width:{control:{type:"text"}},required:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}}},parameters:{controls:{exclude:["style","className"]}}},l=e=>x(o,{title:"Textrea - overview",display:"grid",columnsAmount:2,children:[r(a,{...e,label:e.label??"Label"}),r(a,{...e}),r(a,{...e,label:e.label??"Label",required:!0,value:"Påkrevd"}),r(a,{...e,required:!0,value:"Påkrevd"}),r(a,{...e,label:e.label??"Label",disabled:!0,value:"Disabled"}),r(a,{...e,disabled:!0,value:"Disabled"}),r(a,{...e,label:e.label??"Label",readOnly:!0,value:"Readonly"}),r(a,{...e,readOnly:!0,value:"Readonly"}),r(a,{...e,label:e.label??"Label",errorMessage:e.errorMessage||"Dette er en feilmelding ved valideringsfeil"}),r(a,{...e,errorMessage:e.errorMessage||"Dette er en feilmelding ved valideringsfeil"}),r(a,{...e,label:e.label??"Label",tip:e.tip||"Dette er en hjelpetekst"}),r(a,{...e,tip:e.tip||"Dette er en hjelpetekst"})]}),t=e=>r(o,{title:"TextArea - default",display:"block",children:r(a,{...e})}),s=e=>r(o,{title:"TextArea - with label",children:r(a,{...e,label:e.label??"Label"})});var i,d,n;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:`(args: TextAreaProps) => {
  return <StoryTemplate title="Textrea - overview" display="grid" columnsAmount={2}>
      <TextArea {...args} label={args.label ?? 'Label'} />
      <TextArea {...args} />
      <TextArea {...args} label={args.label ?? 'Label'} required value="Påkrevd" />
      <TextArea {...args} required value="Påkrevd" />
      <TextArea {...args} label={args.label ?? 'Label'} disabled value="Disabled" />
      <TextArea {...args} disabled value="Disabled" />
      <TextArea {...args} label={args.label ?? 'Label'} readOnly value="Readonly" />
      <TextArea {...args} readOnly value="Readonly" />
      <TextArea {...args} label={args.label ?? 'Label'} errorMessage={args.errorMessage || 'Dette er en feilmelding ved valideringsfeil'} />
      <TextArea {...args} errorMessage={args.errorMessage || 'Dette er en feilmelding ved valideringsfeil'} />
      <TextArea {...args} label={args.label ?? 'Label'} tip={args.tip || 'Dette er en hjelpetekst'} />
      <TextArea {...args} tip={args.tip || 'Dette er en hjelpetekst'} />
    </StoryTemplate>;
}`,...(n=(d=l.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};var b,p,u;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`(args: TextAreaProps) => {
  return <StoryTemplate title="TextArea - default" display="block">
      <TextArea {...args} />
    </StoryTemplate>;
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var c,m,T;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`(args: TextAreaProps) => {
  return <StoryTemplate title="TextArea - with label">
      <TextArea {...args} label={args.label ?? 'Label'} />
    </StoryTemplate>;
}`,...(T=(m=s.parameters)==null?void 0:m.docs)==null?void 0:T.source}}};const g=["Overview","Default","WithLabel"],L=Object.freeze(Object.defineProperty({__proto__:null,Default:t,Overview:l,WithLabel:s,__namedExportsOrder:g,default:v},Symbol.toStringTag,{value:"Module"}));export{L as T};
//# sourceMappingURL=TextArea.stories-d956a5df.js.map
