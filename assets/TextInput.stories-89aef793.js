import{b as d,j as t}from"./focus-visible-17f12d09.js";import{R as r}from"./storybook-components-b7b7a39c.js";import{M as u}from"./mail-a5298260.js";import{L as O}from"./LocalMessage-03c4d58c.js";import{T as l}from"./TextInput-b44fae05.js";const q={title:"dds-components/TextInput",component:l,argTypes:{label:{control:{type:"text"}},tip:{control:{type:"text"}},errorMessage:{control:{type:"text"}},width:{control:{type:"text"}},required:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}},prefix:{control:{type:"text"}},suffix:{control:{type:"text"}}},parameters:{controls:{exclude:["style","className"]}}},a=e=>d(r,{title:"TextInput - overview",display:"grid",columnsAmount:2,style:{alignItems:"end"},children:[t(l,{...e,label:e.label??"Label"}),t(l,{...e}),t(l,{...e,label:e.label??"Label",required:!0,value:"Påkrevd inputfelt"}),t(l,{...e,required:!0,value:"Påkrevd inputfelt"}),t(l,{...e,"aria-required":!0,label:e.label??"Label",value:"Påkrevd inputfelt med aria-required"}),t(l,{...e,"aria-required":!0,value:"Påkrevd inputfelt med aria-required"}),t(l,{...e,label:e.label??"Label",disabled:!0,value:"Disabled inputfelt"}),t(l,{...e,disabled:!0,value:"Disabled inputfelt"}),t(l,{...e,label:e.label??"Label",readOnly:!0,value:"Readonly inputfelt"}),t(l,{...e,readOnly:!0,value:"Readonly inputfelt"}),t(l,{...e,label:e.label??"Label",errorMessage:e.errorMessage||"Dette er en feilmelding ved valideringsfeil"}),t(l,{...e,errorMessage:e.errorMessage||"Dette er en feilmelding ved valideringsfeil"}),t(l,{...e,label:e.label??"Label",tip:e.tip||"Dette er en hjelpetekst"}),t(l,{...e,tip:e.tip||"Dette er en hjelpetekst"}),t(l,{...e,label:e.label??"Label",autoComplete:"off",tip:e.tip||"Dette er en hjelpetekst med en tegnteller",maxLength:20}),t(l,{...e,tip:e.tip||"Dette er en hjelpetekst med en tegnteller",maxLength:20}),t(l,{...e,icon:u,label:e.label??"Label"}),t(l,{...e,icon:u}),t(l,{...e,prefix:"Prefix"}),t(l,{...e,suffix:"Suffix"})]}),n=()=>d(r,{title:"TextInput - overview sizes",display:"grid",columnsAmount:2,children:[t(l,{label:"Label"}),t(l,{label:"Label",icon:u}),t(l,{label:"Label",componentSize:"small"}),t(l,{label:"Label",componentSize:"small",icon:u}),t(l,{label:"Label",componentSize:"tiny"}),t(l,{label:"Label",componentSize:"tiny",icon:u})]}),i=e=>t(r,{title:"TextInput - default",children:t(l,{...e})}),s=e=>t(r,{title:"TextInput - with label",children:t(l,{...e,label:e.label??"Label"})}),o=e=>t(r,{title:"TextInput - with character count",children:t(l,{...e,maxLength:25,label:e.label??"Label"})}),p=e=>d(r,{title:"TextInput - With affixes",display:"grid",columnsAmount:1,children:[d(O,{purpose:"tips",children:[t("strong",{children:"OBS!"})," Skjermleser leser ikke opp affixes. Husk derfor å inkludere en tilstrekkelig beskrivende label i tillegg."]}),t(l,{...e,prefix:"Prefix",label:"Med prefix"}),t(l,{...e,suffix:"Suffix",label:"Med suffix"}),t(l,{...e,prefix:"Prefix",suffix:"Suffix",label:"Med prefix og suffix"})]});var b,x,c;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`(args: TextInputProps) => {
  return <StoryTemplate title="TextInput - overview" display="grid" columnsAmount={2} style={{
    alignItems: 'end'
  }}>
      <TextInput {...args} label={args.label ?? 'Label'} />
      <TextInput {...args} />
      <TextInput {...args} label={args.label ?? 'Label'} required value="Påkrevd inputfelt" />
      <TextInput {...args} required value="Påkrevd inputfelt" />
      <TextInput {...args} aria-required label={args.label ?? 'Label'} value="Påkrevd inputfelt med aria-required" />
      <TextInput {...args} aria-required value="Påkrevd inputfelt med aria-required" />
      <TextInput {...args} label={args.label ?? 'Label'} disabled value="Disabled inputfelt" />
      <TextInput {...args} disabled value="Disabled inputfelt" />
      <TextInput {...args} label={args.label ?? 'Label'} readOnly value="Readonly inputfelt" />
      <TextInput {...args} readOnly value="Readonly inputfelt" />
      <TextInput {...args} label={args.label ?? 'Label'} errorMessage={args.errorMessage || 'Dette er en feilmelding ved valideringsfeil'} />
      <TextInput {...args} errorMessage={args.errorMessage || 'Dette er en feilmelding ved valideringsfeil'} />
      <TextInput {...args} label={args.label ?? 'Label'} tip={args.tip || 'Dette er en hjelpetekst'} />
      <TextInput {...args} tip={args.tip || 'Dette er en hjelpetekst'} />
      <TextInput {...args} label={args.label ?? 'Label'} autoComplete="off" tip={args.tip || 'Dette er en hjelpetekst med en tegnteller'} maxLength={20} />
      <TextInput {...args} tip={args.tip || 'Dette er en hjelpetekst med en tegnteller'} maxLength={20} />
      <TextInput {...args} icon={MailIcon} label={args.label ?? 'Label'} />
      <TextInput {...args} icon={MailIcon} />
      <TextInput {...args} prefix="Prefix" />
      <TextInput {...args} suffix="Suffix" />
    </StoryTemplate>;
}`,...(c=(x=a.parameters)==null?void 0:x.docs)==null?void 0:c.source}}};var f,m,T;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`() => <StoryTemplate title="TextInput - overview sizes" display="grid" columnsAmount={2}>
    <TextInput label="Label" />
    <TextInput label="Label" icon={MailIcon} />
    <TextInput label="Label" componentSize="small" />
    <TextInput label="Label" componentSize="small" icon={MailIcon} />
    <TextInput label="Label" componentSize="tiny" />
    <TextInput label="Label" componentSize="tiny" icon={MailIcon} />
  </StoryTemplate>`,...(T=(m=n.parameters)==null?void 0:m.docs)==null?void 0:T.source}}};var g,I,v;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`(args: TextInputProps) => {
  return <StoryTemplate title="TextInput - default">
      <TextInput {...args} />
    </StoryTemplate>;
}`,...(v=(I=i.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};var y,L,S;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`(args: TextInputProps) => {
  return <StoryTemplate title="TextInput - with label">
      <TextInput {...args} label={args.label ?? 'Label'} />
    </StoryTemplate>;
}`,...(S=(L=s.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var h,k,M;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`(args: TextInputProps) => {
  return <StoryTemplate title="TextInput - with character count">
      <TextInput {...args} maxLength={25} label={args.label ?? 'Label'} />
    </StoryTemplate>;
}`,...(M=(k=o.parameters)==null?void 0:k.docs)==null?void 0:M.source}}};var P,D,j;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`(args: TextInputProps) => <StoryTemplate title="TextInput - With affixes" display="grid" columnsAmount={1}>
    <LocalMessage purpose="tips">
      <strong>OBS!</strong> Skjermleser leser ikke opp affixes. Husk derfor å
      inkludere en tilstrekkelig beskrivende label i tillegg.
    </LocalMessage>
    <TextInput {...args} prefix="Prefix" label="Med prefix" />
    <TextInput {...args} suffix="Suffix" label="Med suffix" />
    <TextInput {...args} prefix="Prefix" suffix="Suffix" label="Med prefix og suffix" />
  </StoryTemplate>`,...(j=(D=p.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};const w=["TextInputOverview","TextInputOverviewSizes","Default","WithLabel","WithCharacterCount","TextInputAffixes"],R=Object.freeze(Object.defineProperty({__proto__:null,Default:i,TextInputAffixes:p,TextInputOverview:a,TextInputOverviewSizes:n,WithCharacterCount:o,WithLabel:s,__namedExportsOrder:w,default:q},Symbol.toStringTag,{value:"Module"}));export{R as T};
//# sourceMappingURL=TextInput.stories-89aef793.js.map
