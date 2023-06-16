import{s as S,A as ie,d as F,a,j as n}from"./focus-visible-c2e9b88d.js";import{R as o}from"./storybook-components-91f985f3.js";import{r as c}from"./index-ebeaab24.js";import{T as A}from"./Tooltip-e0c2208d.js";import{T as ge,a as me,b as pe,c as ve}from"./thumbupFilled-2b521268.js";import{B as re}from"./Button-2e74127f.js";import{L as ke}from"./Label-ec3ecd5b.js";import{S as he}from"./Spinner-deb75053.js";import{P as de}from"./Paragraph-9257de5a.js";import{T as fe}from"./TextArea-bbafbf95.js";import{I as Le}from"./Icon-819df738.js";const le=S.div`
  display: flex;
  ${({flexDirection:e})=>ie`
    flex-direction: ${e};
    gap: ${F.spacing.SizesDdsSpacingLocalX1};
  `};
`,Fe=S.div`
  display: flex;
  gap: ${F.spacing.SizesDdsSpacingLocalX1};
  ${({layout:e})=>ie`
    flex-direction: ${e==="horizontal"?"row":"column"};
    align-items: ${e==="horizontal"?"center":"start"};
  `}
`,$=S(re)`
  padding: 0px;
  color: ${F.colors.DdsColorNeutralsGray7};
`,Te=({layout:e,ratingLabel:b,loading:g,thumbUpTooltip:i,thumbDownTooltip:r,handleRatingChange:d})=>a(Fe,{layout:e,children:[n(ke,{children:b}),g?n(he,{tooltip:"Laster opp tilbakemelding ..."}):a(le,{flexDirection:"row",children:[n(A,{text:i,children:n($,{htmlProps:{"aria-label":i},icon:ge,appearance:"borderless",onClick:()=>d("positive"),size:"large"})}),n(A,{text:r,children:n("div",{children:n($,{htmlProps:{"aria-label":r},icon:me,appearance:"borderless",onClick:()=>d("negative"),size:"large"})})})]})]}),ye=S.span`
  display: inline-flex;
  align-items: center;
  gap: ${F.spacing.SizesDdsSpacingLocalX05};
`,Se=({rating:e,feedbackText:b,positiveFeedbackLabel:g,negativeFeedbackLabel:i,ratingSubmittedTitle:r,loading:d,handleSubmit:l,handleFeedbackTextChange:s})=>a(le,{flexDirection:"column",children:[a(ye,{children:[n(Le,{icon:e==="positive"?pe:ve,color:F.colors.DdsColorInteractiveBase}),a(de,{children:[r," "]})]}),n(fe,{value:b,onChange:x=>s(x.target.value),label:e==="positive"?g:i,tip:"Ikke send inn personopplysninger eller annen sensitiv informasjon"}),n(re,{label:"Send inn",purpose:"secondary",size:"small",onClick:l,loading:d})]}),t=({layout:e="vertical",ratingLabel:b="Hva syns du om tjenesten?",positiveFeedbackLabel:g="Hva kan vi forbedre? (valgfritt)",negativeFeedbackLabel:i="Hva kan vi forbedre? (valgfritt)",ratingSubmittedTitle:r="Tusen takk! Tilbakemeldingen din hjelper oss å forbedre løsningen",submittedTitle:d="Tusen takk! Tilbakemeldingen din hjelper oss å forbedre løsningen",ratingValue:l,feedbackTextValue:s,thumbUpTooltip:x="Bra",thumbDownTooltip:se="Dårlig",feedbackTextAreaExcluded:j=!1,loading:R=!1,isSubmitted:T,onRating:H,onFeedbackTextChange:V,onSubmit:y})=>{const[C,z]=c.useState(null),[D,w]=c.useState(),[M,B]=c.useState(!1);c.useEffect(()=>{l!==void 0&&z(l)},[l]),c.useEffect(()=>{s!==void 0&&w(s)},[s]),c.useEffect(()=>{T!==void 0&&B(T)},[T]);const ue=u=>{H&&H(u),y&&j&&y(u,""),l===void 0&&z(u)},ce=u=>{V&&V(u),s===void 0&&w(u)},be=()=>{y&&y(C,D??""),T===void 0&&B(!0)};return C===null&&!M?n(Te,{layout:e,ratingLabel:b,loading:R,thumbUpTooltip:x,thumbDownTooltip:se,handleRatingChange:ue}):!j&&!M?n(Se,{rating:C,feedbackText:D,positiveFeedbackLabel:g,negativeFeedbackLabel:i,ratingSubmittedTitle:r,loading:R,handleSubmit:be,handleFeedbackTextChange:ce}):n(de,{children:d})},xe={title:"dds-components/Feedback",component:t,argTypes:{layout:{control:{type:"radio",options:{vertical:"vertical",horizontal:"horizontal"}}},ratingLabel:{control:"text"},ratingValue:{control:{type:"radio",options:{null:null,positive:"positive",negative:"negative"}}},positiveFeedbackLabel:{control:"text"},negativeFeedbackLabel:{control:"text"},feedbackTextValue:{control:"text"},thumbUpTooltip:{control:"text"},thumbDownTooltip:{control:"text"},feedbackTextAreaExcluded:{control:"boolean"},loading:{control:"boolean"},isSubmitted:{control:"boolean"}},parameters:{controls:{exclude:["style","className"]}}},m=e=>n(o,{title:"Feedback - Default",children:n(t,{...e,ratingLabel:e.ratingLabel??"Hva syns du om tjenesten?",onSubmit:void 0,onRating:void 0,onFeedbackTextChange:void 0})}),p=e=>n(o,{title:"Feedback - Horizontal Layout",children:n(t,{...e,ratingLabel:e.ratingLabel??"Hva syns du om tjenesten?",onSubmit:void 0,onRating:void 0,onFeedbackTextChange:void 0,layout:"horizontal"})}),v=e=>n(o,{title:"Feedback - Without Text Area",children:n(t,{...e,ratingLabel:e.ratingLabel??"Hva syns du om tjenesten?",onSubmit:void 0,onRating:void 0,onFeedbackTextChange:void 0,feedbackTextAreaExcluded:!0})}),k=e=>a(o,{title:"Feedback - Custom Labels",children:[n(t,{...e,ratingLabel:"Min egne label",onSubmit:void 0,onRating:void 0,onFeedbackTextChange:void 0}),n("hr",{style:{width:"100%"}}),n(t,{...e,ratingLabel:"Min egne label",onSubmit:void 0,onRating:void 0,onFeedbackTextChange:void 0,positiveFeedbackLabel:"Min egne positive label",ratingValue:"positive"}),n("hr",{style:{width:"100%"}}),n(t,{...e,ratingLabel:"Min egne label",onSubmit:void 0,onRating:void 0,onFeedbackTextChange:void 0,negativeFeedbackLabel:"Min egne negative label",ratingValue:"negative"})]}),h=e=>n(o,{title:"Feedback - Custom Button Tooltips",children:n(t,{...e,ratingLabel:e.ratingLabel??"Hva syns du om tjenesten?",onSubmit:void 0,onRating:void 0,onFeedbackTextChange:void 0,thumbUpTooltip:"Liker",thumbDownTooltip:"Liker ikke"})}),f=e=>a(o,{title:"Feedback - Loading",children:[n(t,{...e,ratingLabel:e.ratingLabel??"Hva syns du om tjenesten?",onSubmit:void 0,onRating:void 0,onFeedbackTextChange:void 0,loading:!0}),n("hr",{style:{width:"100%"}}),n(t,{...e,ratingLabel:e.ratingLabel??"Hva syns du om tjenesten?",onSubmit:void 0,onRating:void 0,onFeedbackTextChange:void 0,ratingValue:"positive",loading:!0})]}),L=e=>a(o,{title:"Feedback - Controlled Component",children:['Komponenten kan også brukes som en "controlled component", altså at verdiene styres helt fra utsiden av komponenten.',n("hr",{style:{width:"100%"}}),"Kontrollert rating:",n(t,{...e,ratingLabel:e.ratingLabel??"Hva syns du om tjenesten?",onSubmit:void 0,onRating:void 0,onFeedbackTextChange:void 0,ratingValue:null}),n(t,{...e,ratingLabel:e.ratingLabel??"Hva syns du om tjenesten?",onSubmit:void 0,onRating:void 0,onFeedbackTextChange:void 0,ratingValue:"positive"}),n(t,{...e,ratingLabel:e.ratingLabel??"Hva syns du om tjenesten?",onSubmit:void 0,onRating:void 0,onFeedbackTextChange:void 0,ratingValue:"negative"}),n("hr",{style:{width:"100%"}}),"Kontrollert tekstfelt:",n(t,{...e,ratingLabel:e.ratingLabel??"Hva syns du om tjenesten?",onSubmit:void 0,onRating:void 0,onFeedbackTextChange:void 0,ratingValue:"positive",feedbackTextValue:"Dette var ekstremt bra; Tommel opp!"}),n("hr",{style:{width:"100%"}}),"Kontrollert at tilbakemelding er sendt inn:",n(t,{...e,ratingLabel:e.ratingLabel??"Hva syns du om tjenesten?",onSubmit:void 0,onRating:void 0,onFeedbackTextChange:void 0,isSubmitted:!0})]});var K,E,_;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`(args: FeedbackProps) => {
  return <StoryTemplate title="Feedback - Default">
      <Feedback {...args} ratingLabel={args.ratingLabel ?? 'Hva syns du om tjenesten?'} onSubmit={undefined} onRating={undefined} onFeedbackTextChange={undefined} />
    </StoryTemplate>;
}`,...(_=(E=m.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var I,W,O;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`(args: FeedbackProps) => {
  return <StoryTemplate title="Feedback - Horizontal Layout">
      <Feedback {...args} ratingLabel={args.ratingLabel ?? 'Hva syns du om tjenesten?'} onSubmit={undefined} onRating={undefined} onFeedbackTextChange={undefined} layout="horizontal" />
    </StoryTemplate>;
}`,...(O=(W=p.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};var P,X,N;v.parameters={...v.parameters,docs:{...(P=v.parameters)==null?void 0:P.docs,source:{originalSource:`(args: FeedbackProps) => {
  return <StoryTemplate title="Feedback - Without Text Area">
      <Feedback {...args} ratingLabel={args.ratingLabel ?? 'Hva syns du om tjenesten?'} onSubmit={undefined} onRating={undefined} onFeedbackTextChange={undefined} feedbackTextAreaExcluded />
    </StoryTemplate>;
}`,...(N=(X=v.parameters)==null?void 0:X.docs)==null?void 0:N.source}}};var U,G,q;k.parameters={...k.parameters,docs:{...(U=k.parameters)==null?void 0:U.docs,source:{originalSource:`(args: FeedbackProps) => {
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
}`,...(q=(G=k.parameters)==null?void 0:G.docs)==null?void 0:q.source}}};var J,Q,Y;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`(args: FeedbackProps) => {
  return <StoryTemplate title="Feedback - Custom Button Tooltips">
      <Feedback {...args} ratingLabel={args.ratingLabel ?? 'Hva syns du om tjenesten?'} onSubmit={undefined} onRating={undefined} onFeedbackTextChange={undefined} thumbUpTooltip={'Liker'} thumbDownTooltip={'Liker ikke'} />
    </StoryTemplate>;
}`,...(Y=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,ee,ne;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`(args: FeedbackProps) => {
  return <StoryTemplate title="Feedback - Loading">
      <Feedback {...args} ratingLabel={args.ratingLabel ?? 'Hva syns du om tjenesten?'} onSubmit={undefined} onRating={undefined} onFeedbackTextChange={undefined} loading />
      <hr style={{
      width: '100%'
    }} />
      <Feedback {...args} ratingLabel={args.ratingLabel ?? 'Hva syns du om tjenesten?'} onSubmit={undefined} onRating={undefined} onFeedbackTextChange={undefined} ratingValue="positive" loading />
    </StoryTemplate>;
}`,...(ne=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var te,ae,oe;L.parameters={...L.parameters,docs:{...(te=L.parameters)==null?void 0:te.docs,source:{originalSource:`(args: FeedbackProps) => {
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
}`,...(oe=(ae=L.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};const Ce=["Default","HorizontalLayout","WithoutTextArea","CustomLabels","CustomButtonTooltips","LoadingState","ControlledComponent"],Ke=Object.freeze(Object.defineProperty({__proto__:null,ControlledComponent:L,CustomButtonTooltips:h,CustomLabels:k,Default:m,HorizontalLayout:p,LoadingState:f,WithoutTextArea:v,__namedExportsOrder:Ce,default:xe},Symbol.toStringTag,{value:"Module"}));export{m as D,Ke as F};
//# sourceMappingURL=Feedback.stories-8a5c8b76.js.map
