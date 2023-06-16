import{d as U,s as Y,a as P,j as r}from"./focus-visible-c2e9b88d.js";import{R as p}from"./storybook-components-c9cbefc3.js";import{r as l}from"./index-ebeaab24.js";import{d as Z}from"./Typography.utils-99dd1e07.js";import{s as h}from"./scrollbarStyling-a46ac0ea.js";import{u as ee}from"./useCombinedRefs-40b11bb4.js";import{g as re,r as te}from"./Input.utils-f888acf1.js";import{s as ae,d as S}from"./idGenerator-c29473b2.js";import{O as le,S as se}from"./Input.styles-0a1e38a8.js";import{L as oe}from"./Label-ec3ecd5b.js";import{i as ie}from"./Input.tokens-0612e464.js";const{spacing:ne}=U,de={paddingBottom:ne.SizesDdsSpacingLocalX05},pe={textarea:de},ce="320px",{textarea:ue}=pe,be=Y(se)`
  ${h.webkit}
  ${h.firefox}
  height: auto;
  resize: vertical;
  vertical-align: bottom;
  padding-bottom: ${ue.paddingBottom};
  ${Z(ie.medium)}
`,t=l.forwardRef((e,j)=>{const{id:_,value:c,defaultValue:u,onChange:b,errorMessage:d,required:m,disabled:$,tip:g,label:x,"aria-required":y,"aria-describedby":C,className:E,style:z,width:B=ce,...N}=e,W=l.useId(),n=_??`${W}-textArea`,a=l.useRef(null),F=ee(j,a),[G,H]=l.useState(re(c,u));l.useEffect(()=>{a&&a.current&&(a.current.style.height=`${a.current.scrollHeight+2}px`)},[G]);const V=A=>{H(A.target.value),b&&b(A)},T=!!d,X=!!x,f=S(n,"tip"),v=S(n,"errorMessage"),J=m||!!y,K={width:B,className:E,style:z},Q={ref:F,onChange:V,value:c,defaultValue:u,id:n,disabled:$,hasErrorMessage:T,required:m,"aria-required":y,"aria-describedby":ae([g?f:void 0,d?v:void 0,C]),"aria-invalid":T?!0:void 0,...N};return P(le,{...K,children:[X&&r(oe,{showRequiredStyling:J,htmlFor:n,children:x}),r(be,{...Q,as:"textarea"}),te(g,f,d,v)]})});t.displayName="TextArea";const me={title:"dds-components/TextArea",component:t,argTypes:{label:{control:{type:"text"}},tip:{control:{type:"text"}},errorMessage:{control:{type:"text"}},width:{control:{type:"text"}},required:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}}},parameters:{controls:{exclude:["style","className"]}}},s=e=>P(p,{title:"Textrea - overview",display:"grid",columnsAmount:2,children:[r(t,{...e,label:e.label??"Label"}),r(t,{...e}),r(t,{...e,label:e.label??"Label",required:!0,value:"Påkrevd"}),r(t,{...e,required:!0,value:"Påkrevd"}),r(t,{...e,label:e.label??"Label",disabled:!0,value:"Disabled"}),r(t,{...e,disabled:!0,value:"Disabled"}),r(t,{...e,label:e.label??"Label",readOnly:!0,value:"Readonly"}),r(t,{...e,readOnly:!0,value:"Readonly"}),r(t,{...e,label:e.label??"Label",errorMessage:e.errorMessage||"Dette er en feilmelding ved valideringsfeil"}),r(t,{...e,errorMessage:e.errorMessage||"Dette er en feilmelding ved valideringsfeil"}),r(t,{...e,label:e.label??"Label",tip:e.tip||"Dette er en hjelpetekst"}),r(t,{...e,tip:e.tip||"Dette er en hjelpetekst"})]}),o=e=>r(p,{title:"TextArea - default",display:"block",children:r(t,{...e})}),i=e=>r(p,{title:"TextArea - with label",children:r(t,{...e,label:e.label??"Label"})});var L,D,M;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`(args: TextAreaProps) => {
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
}`,...(M=(D=s.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var k,O,R;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`(args: TextAreaProps) => {
  return <StoryTemplate title="TextArea - default" display="block">
      <TextArea {...args} />
    </StoryTemplate>;
}`,...(R=(O=o.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var q,w,I;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`(args: TextAreaProps) => {
  return <StoryTemplate title="TextArea - with label">
      <TextArea {...args} label={args.label ?? 'Label'} />
    </StoryTemplate>;
}`,...(I=(w=i.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};const ge=["Overview","Default","WithLabel"],ke=Object.freeze(Object.defineProperty({__proto__:null,Default:o,Overview:s,WithLabel:i,__namedExportsOrder:ge,default:me},Symbol.toStringTag,{value:"Module"}));export{ke as T};
//# sourceMappingURL=TextArea.stories-f03c89e7.js.map
