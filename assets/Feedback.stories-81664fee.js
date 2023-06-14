import{s as T,C as oe,d as f,b as i,j as n}from"./focus-visible-17f12d09.js";import{R as r}from"./storybook-components-b7b7a39c.js";import{r as s}from"./index-c6dae603.js";import{T as B}from"./Tooltip-1acc099c.js";import{T as ce,a as be,b as ge,c as me}from"./thumbupFilled-a8e1a5e6.js";import{B as ie}from"./Button-4fdfc19e.js";import{L as pe}from"./Label-f2e173db.js";import{S as ve}from"./Spinner-7298b3ed.js";import{P as re}from"./Paragraph-0668154f.js";import{T as ke}from"./TextArea-51c9149a.js";import{I as he}from"./Icon-a968456f.js";const de=T.div`
  display: flex;
  ${({flexDirection:e})=>oe`
    flex-direction: ${e};
    gap: ${f.spacing.SizesDdsSpacingLocalX1};
  `};
`,fe=T.div`
  display: flex;
  gap: ${f.spacing.SizesDdsSpacingLocalX1};
  ${({layout:e})=>oe`
    flex-direction: ${e==="horizontal"?"row":"column"};
    align-items: center;
  `}
`,K=T(ie)`
  padding: 0px;
  color: ${f.colors.DdsColorNeutralsGray7};
`,Le=({layout:e,ratingLabel:u,loading:c,thumbUpTooltip:d,thumbDownTooltip:a,handleRatingChange:o})=>i(fe,{layout:e,children:[n(pe,{children:u}),c?n(ve,{tooltip:"Laster opp tilbakemelding ..."}):i(de,{flexDirection:"row",children:[n(B,{text:d,children:n(K,{htmlProps:{"aria-label":d},icon:ce,appearance:"borderless",onClick:()=>o("positive"),size:"large"})}),n(B,{text:a,children:n("div",{children:n(K,{htmlProps:{"aria-label":a},icon:be,appearance:"borderless",onClick:()=>o("negative"),size:"large"})})})]})]}),Fe=T.span`
  display: inline-flex;
  align-items: center;
  gap: ${f.spacing.SizesDdsSpacingLocalX05};
`,Te=({rating:e,feedbackText:u,positiveFeedbackLabel:c,negativeFeedbackLabel:d,loading:a,handleSubmit:o,handleFeedbackTextChange:y})=>i(de,{flexDirection:"column",children:[i(Fe,{children:[n(he,{icon:e==="positive"?ge:me,color:f.colors.DdsColorInteractiveBase}),n(re,{children:"Tusen takk! Tilbakemeldingen din hjelper oss å forbedre løsningen"})]}),n(ke,{value:u,onChange:S=>y(S.target.value),label:e==="positive"?c:d,tip:"Ikke send inn personopplysninger eller annen sensitiv informasjon"}),n(ie,{label:"Send inn",purpose:"secondary",size:"small",onClick:o,loading:a})]}),t=({layout:e="vertical",ratingLabel:u="Hva syns du om tjenesten?",positiveFeedbackLabel:c="Hva kan vi forbedre? (valgfritt)",negativeFeedbackLabel:d="Hva kan vi forbedre? (valgfritt)",ratingValue:a,feedbackTextValue:o,thumbUpTooltip:y="Bra",thumbDownTooltip:S="Dårlig",feedbackTextAreaExcluded:C=!1,loading:j=!1,isSubmitted:L,onRating:R,onFeedbackTextChange:H,onSubmit:F})=>{const[x,V]=s.useState(null),[D,z]=s.useState(),[w,M]=s.useState(!1);s.useEffect(()=>{a!==void 0&&V(a)},[a]),s.useEffect(()=>{o!==void 0&&z(o)},[o]),s.useEffect(()=>{L!==void 0&&M(L)},[L]);const le=l=>{R&&R(l),F&&C&&F(l,""),a===void 0&&V(l)},se=l=>{H&&H(l),o===void 0&&z(l)},ue=()=>{F&&F(x,D??""),L===void 0&&M(!0)};return x===null&&!w?n(Le,{layout:e,ratingLabel:u,loading:j,thumbUpTooltip:y,thumbDownTooltip:S,handleRatingChange:le}):!C&&!w?n(Te,{rating:x,feedbackText:D,positiveFeedbackLabel:c,negativeFeedbackLabel:d,loading:j,handleSubmit:ue,handleFeedbackTextChange:se}):n(re,{children:"Tusen takk! Tilbakemeldingen din hjelper oss å forbedre løsningen"})},ye={title:"dds-components/Feedback",component:t,argTypes:{layout:{control:{type:"radio",options:{vertical:"vertical",horizontal:"horizontal"}}},ratingLabel:{control:"text"},ratingValue:{control:{type:"radio",options:{null:null,positive:"positive",negative:"negative"}}},positiveFeedbackLabel:{control:"text"},negativeFeedbackLabel:{control:"text"},feedbackTextValue:{control:"text"},thumbUpTooltip:{control:"text"},thumbDownTooltip:{control:"text"},feedbackTextAreaExcluded:{control:"boolean"},loading:{control:"boolean"},isSubmitted:{control:"boolean"}},parameters:{controls:{exclude:["style","className"]}}},b=e=>n(r,{title:"Feedback - Default",children:n(t,{...e,ratingLabel:e.ratingLabel??"Hva syns du om tjenesten?",onSubmit:void 0,onRating:void 0,onFeedbackTextChange:void 0})}),g=e=>n(r,{title:"Feedback - Horizontal Layout",children:n(t,{...e,ratingLabel:e.ratingLabel??"Hva syns du om tjenesten?",onSubmit:void 0,onRating:void 0,onFeedbackTextChange:void 0,layout:"horizontal"})}),m=e=>n(r,{title:"Feedback - Without Text Area",children:n(t,{...e,ratingLabel:e.ratingLabel??"Hva syns du om tjenesten?",onSubmit:void 0,onRating:void 0,onFeedbackTextChange:void 0,feedbackTextAreaExcluded:!0})}),p=e=>i(r,{title:"Feedback - Custom Labels",children:[n(t,{...e,ratingLabel:"Min egne label",onSubmit:void 0,onRating:void 0,onFeedbackTextChange:void 0}),n("hr",{style:{width:"100%"}}),n(t,{...e,ratingLabel:"Min egne label",onSubmit:void 0,onRating:void 0,onFeedbackTextChange:void 0,positiveFeedbackLabel:"Min egne positive label",ratingValue:"positive"}),n("hr",{style:{width:"100%"}}),n(t,{...e,ratingLabel:"Min egne label",onSubmit:void 0,onRating:void 0,onFeedbackTextChange:void 0,negativeFeedbackLabel:"Min egne negative label",ratingValue:"negative"})]}),v=e=>n(r,{title:"Feedback - Custom Button Tooltips",children:n(t,{...e,ratingLabel:e.ratingLabel??"Hva syns du om tjenesten?",onSubmit:void 0,onRating:void 0,onFeedbackTextChange:void 0,thumbUpTooltip:"Liker",thumbDownTooltip:"Liker ikke"})}),k=e=>i(r,{title:"Feedback - Loading",children:[n(t,{...e,ratingLabel:e.ratingLabel??"Hva syns du om tjenesten?",onSubmit:void 0,onRating:void 0,onFeedbackTextChange:void 0,loading:!0}),n("hr",{style:{width:"100%"}}),n(t,{...e,ratingLabel:e.ratingLabel??"Hva syns du om tjenesten?",onSubmit:void 0,onRating:void 0,onFeedbackTextChange:void 0,ratingValue:"positive",loading:!0})]}),h=e=>i(r,{title:"Feedback - Controlled Component",children:['Komponenten kan også brukes som en "controlled component", altså at verdiene styres helt fra utsiden av komponenten.',n("hr",{style:{width:"100%"}}),"Kontrollert rating:",n(t,{...e,ratingLabel:e.ratingLabel??"Hva syns du om tjenesten?",onSubmit:void 0,onRating:void 0,onFeedbackTextChange:void 0,ratingValue:null}),n(t,{...e,ratingLabel:e.ratingLabel??"Hva syns du om tjenesten?",onSubmit:void 0,onRating:void 0,onFeedbackTextChange:void 0,ratingValue:"positive"}),n(t,{...e,ratingLabel:e.ratingLabel??"Hva syns du om tjenesten?",onSubmit:void 0,onRating:void 0,onFeedbackTextChange:void 0,ratingValue:"negative"}),n("hr",{style:{width:"100%"}}),"Kontrollert tekstfelt:",n(t,{...e,ratingLabel:e.ratingLabel??"Hva syns du om tjenesten?",onSubmit:void 0,onRating:void 0,onFeedbackTextChange:void 0,ratingValue:"positive",feedbackTextValue:"Dette var ekstremt bra; Tommel opp!"}),n("hr",{style:{width:"100%"}}),"Kontrollert at tilbakemelding er sendt inn:",n(t,{...e,ratingLabel:e.ratingLabel??"Hva syns du om tjenesten?",onSubmit:void 0,onRating:void 0,onFeedbackTextChange:void 0,isSubmitted:!0})]});var $,A,E;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`(args: FeedbackProps) => {
  return <StoryTemplate title="Feedback - Default">
      <Feedback {...args} ratingLabel={args.ratingLabel ?? 'Hva syns du om tjenesten?'} onSubmit={undefined} onRating={undefined} onFeedbackTextChange={undefined} />
    </StoryTemplate>;
}`,...(E=(A=b.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var _,I,W;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`(args: FeedbackProps) => {
  return <StoryTemplate title="Feedback - Horizontal Layout">
      <Feedback {...args} ratingLabel={args.ratingLabel ?? 'Hva syns du om tjenesten?'} onSubmit={undefined} onRating={undefined} onFeedbackTextChange={undefined} layout="horizontal" />
    </StoryTemplate>;
}`,...(W=(I=g.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var O,P,X;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`(args: FeedbackProps) => {
  return <StoryTemplate title="Feedback - Without Text Area">
      <Feedback {...args} ratingLabel={args.ratingLabel ?? 'Hva syns du om tjenesten?'} onSubmit={undefined} onRating={undefined} onFeedbackTextChange={undefined} feedbackTextAreaExcluded />
    </StoryTemplate>;
}`,...(X=(P=m.parameters)==null?void 0:P.docs)==null?void 0:X.source}}};var N,U,G;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`(args: FeedbackProps) => {
  return <StoryTemplate title="Feedback - Custom Labels">
      <Feedback {...args} ratingLabel={'Min egne label'} onSubmit={undefined} onRating={undefined} onFeedbackTextChange={undefined} />
      <hr style={{
      width: '100%'
    }} />
      <Feedback {...args} ratingLabel={'Min egne label'} onSubmit={undefined} onRating={undefined} onFeedbackTextChange={undefined} positiveFeedbackLabel={'Min egne positive label'} ratingValue="positive" />
      <hr style={{
      width: '100%'
    }} />
      <Feedback {...args} ratingLabel={'Min egne label'} onSubmit={undefined} onRating={undefined} onFeedbackTextChange={undefined} negativeFeedbackLabel={'Min egne negative label'} ratingValue="negative" />
    </StoryTemplate>;
}`,...(G=(U=p.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var q,J,Q;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`(args: FeedbackProps) => {
  return <StoryTemplate title="Feedback - Custom Button Tooltips">
      <Feedback {...args} ratingLabel={args.ratingLabel ?? 'Hva syns du om tjenesten?'} onSubmit={undefined} onRating={undefined} onFeedbackTextChange={undefined} thumbUpTooltip={'Liker'} thumbDownTooltip={'Liker ikke'} />
    </StoryTemplate>;
}`,...(Q=(J=v.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var Y,Z,ee;k.parameters={...k.parameters,docs:{...(Y=k.parameters)==null?void 0:Y.docs,source:{originalSource:`(args: FeedbackProps) => {
  return <StoryTemplate title="Feedback - Loading">
      <Feedback {...args} ratingLabel={args.ratingLabel ?? 'Hva syns du om tjenesten?'} onSubmit={undefined} onRating={undefined} onFeedbackTextChange={undefined} loading />
      <hr style={{
      width: '100%'
    }} />
      <Feedback {...args} ratingLabel={args.ratingLabel ?? 'Hva syns du om tjenesten?'} onSubmit={undefined} onRating={undefined} onFeedbackTextChange={undefined} ratingValue="positive" loading />
    </StoryTemplate>;
}`,...(ee=(Z=k.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ne,te,ae;h.parameters={...h.parameters,docs:{...(ne=h.parameters)==null?void 0:ne.docs,source:{originalSource:`(args: FeedbackProps) => {
  return <StoryTemplate title="Feedback - Controlled Component">
      Komponenten kan også brukes som en "controlled component", altså at
      verdiene styres helt fra utsiden av komponenten.
      <hr style={{
      width: '100%'
    }} />
      Kontrollert rating:
      <Feedback {...args} ratingLabel={args.ratingLabel ?? 'Hva syns du om tjenesten?'} onSubmit={undefined} onRating={undefined} onFeedbackTextChange={undefined} ratingValue={null} />
      <Feedback {...args} ratingLabel={args.ratingLabel ?? 'Hva syns du om tjenesten?'} onSubmit={undefined} onRating={undefined} onFeedbackTextChange={undefined} ratingValue="positive" />
      <Feedback {...args} ratingLabel={args.ratingLabel ?? 'Hva syns du om tjenesten?'} onSubmit={undefined} onRating={undefined} onFeedbackTextChange={undefined} ratingValue="negative" />
      <hr style={{
      width: '100%'
    }} />
      Kontrollert tekstfelt:
      <Feedback {...args} ratingLabel={args.ratingLabel ?? 'Hva syns du om tjenesten?'} onSubmit={undefined} onRating={undefined} onFeedbackTextChange={undefined} ratingValue="positive" feedbackTextValue="Dette var ekstremt bra; Tommel opp!" />
      <hr style={{
      width: '100%'
    }} />
      Kontrollert at tilbakemelding er sendt inn:
      <Feedback {...args} ratingLabel={args.ratingLabel ?? 'Hva syns du om tjenesten?'} onSubmit={undefined} onRating={undefined} onFeedbackTextChange={undefined} isSubmitted />
    </StoryTemplate>;
}`,...(ae=(te=h.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};const Se=["Default","HorizontalLayout","WithoutTextArea","CustomLabels","CustomButtonTooltips","LoadingState","ControlledComponent"],Ke=Object.freeze(Object.defineProperty({__proto__:null,ControlledComponent:h,CustomButtonTooltips:v,CustomLabels:p,Default:b,HorizontalLayout:g,LoadingState:k,WithoutTextArea:m,__namedExportsOrder:Se,default:ye},Symbol.toStringTag,{value:"Module"}));export{b as D,Ke as F};
//# sourceMappingURL=Feedback.stories-81664fee.js.map
