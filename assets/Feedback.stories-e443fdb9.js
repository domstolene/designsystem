import{s as S,A as ie,d as F,a,j as n}from"./focus-visible-35158c22.js";import{R as o}from"./storybook-components-cc5979ee.js";import{r as u}from"./index-d47b1f5a.js";import{N as ge,k as re}from"./dds-typography-e761338c.js";import{E as me,n as pe,z as ve,U as ke,B as he}from"./dds-icons-7a922c3a.js";import{T as A}from"./Tooltip-60d1a4b4.js";import{B as de}from"./Button-2404c0e2.js";import{S as fe}from"./Spinner-69e9cf92.js";import{T as Le}from"./TextArea-7bdddd1f.js";const se=S.div`
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
`,E=S(de)`
  padding: 0px;
  color: ${F.colors.DdsColorNeutralsGray7};
`,Te=({layout:e,ratingLabel:b,loading:g,thumbUpTooltip:i,thumbDownTooltip:r,handleRatingChange:d})=>a(Fe,{layout:e,children:[n(ge,{children:b}),g?n(fe,{tooltip:"Laster opp tilbakemelding ..."}):a(se,{flexDirection:"row",children:[n(A,{text:i,children:n(E,{htmlProps:{"aria-label":i},icon:me,appearance:"borderless",onClick:()=>d("positive"),size:"large"})}),n(A,{text:r,children:n("div",{children:n(E,{htmlProps:{"aria-label":r},icon:pe,appearance:"borderless",onClick:()=>d("negative"),size:"large"})})})]})]}),ye=S.span`
  display: inline-flex;
  align-items: center;
  gap: ${F.spacing.SizesDdsSpacingLocalX05};
`,Se=({rating:e,feedbackText:b,positiveFeedbackLabel:g,negativeFeedbackLabel:i,ratingSubmittedTitle:r,loading:d,handleSubmit:s,handleFeedbackTextChange:l})=>a(se,{flexDirection:"column",children:[a(ye,{children:[n(ve,{icon:e==="positive"?ke:he,color:F.colors.DdsColorInteractiveBase}),a(re,{children:[r," "]})]}),n(Le,{value:b,onChange:x=>l(x.target.value),label:e==="positive"?g:i,tip:"Ikke send inn personopplysninger eller annen sensitiv informasjon"}),n(de,{label:"Send inn",purpose:"secondary",size:"small",onClick:s,loading:d})]}),t=({layout:e="vertical",ratingLabel:b="Hva syns du om tjenesten?",positiveFeedbackLabel:g="Hva kan vi forbedre? (valgfritt)",negativeFeedbackLabel:i="Hva kan vi forbedre? (valgfritt)",ratingSubmittedTitle:r="Tusen takk! Tilbakemeldingen din hjelper oss å forbedre løsningen",submittedTitle:d="Tusen takk! Tilbakemeldingen din hjelper oss å forbedre løsningen",ratingValue:s,feedbackTextValue:l,thumbUpTooltip:x="Bra",thumbDownTooltip:le="Dårlig",feedbackTextAreaExcluded:j=!1,loading:R=!1,isSubmitted:T,onRating:H,onFeedbackTextChange:V,onSubmit:y})=>{const[C,z]=u.useState(null),[D,w]=u.useState(),[B,M]=u.useState(!1);u.useEffect(()=>{s!==void 0&&z(s)},[s]),u.useEffect(()=>{l!==void 0&&w(l)},[l]),u.useEffect(()=>{T!==void 0&&M(T)},[T]);const ce=c=>{H&&H(c),y&&j&&y(c,""),s===void 0&&z(c)},ue=c=>{V&&V(c),l===void 0&&w(c)},be=()=>{y&&y(C,D??""),T===void 0&&M(!0)};return C===null&&!B?n(Te,{layout:e,ratingLabel:b,loading:R,thumbUpTooltip:x,thumbDownTooltip:le,handleRatingChange:ce}):!j&&!B?n(Se,{rating:C,feedbackText:D,positiveFeedbackLabel:g,negativeFeedbackLabel:i,ratingSubmittedTitle:r,loading:R,handleSubmit:be,handleFeedbackTextChange:ue}):n(re,{children:d})},xe={title:"dds-components/Feedback",component:t,argTypes:{layout:{control:{type:"radio",options:{vertical:"vertical",horizontal:"horizontal"}}},ratingLabel:{control:"text"},ratingValue:{control:{type:"radio",options:{null:null,positive:"positive",negative:"negative"}}},positiveFeedbackLabel:{control:"text"},negativeFeedbackLabel:{control:"text"},feedbackTextValue:{control:"text"},thumbUpTooltip:{control:"text"},thumbDownTooltip:{control:"text"},feedbackTextAreaExcluded:{control:"boolean"},loading:{control:"boolean"},isSubmitted:{control:"boolean"}},parameters:{controls:{exclude:["style","className"]}}},m=e=>n(o,{title:"Feedback - Default",children:n(t,{...e,ratingLabel:e.ratingLabel??"Hva syns du om tjenesten?",onSubmit:void 0,onRating:void 0,onFeedbackTextChange:void 0})}),p=e=>n(o,{title:"Feedback - Horizontal Layout",children:n(t,{...e,ratingLabel:e.ratingLabel??"Hva syns du om tjenesten?",onSubmit:void 0,onRating:void 0,onFeedbackTextChange:void 0,layout:"horizontal"})}),v=e=>n(o,{title:"Feedback - Without Text Area",children:n(t,{...e,ratingLabel:e.ratingLabel??"Hva syns du om tjenesten?",onSubmit:void 0,onRating:void 0,onFeedbackTextChange:void 0,feedbackTextAreaExcluded:!0})}),k=e=>a(o,{title:"Feedback - Custom Labels",children:[n(t,{...e,ratingLabel:"Min egne label",onSubmit:void 0,onRating:void 0,onFeedbackTextChange:void 0}),n("hr",{style:{width:"100%"}}),n(t,{...e,ratingLabel:"Min egne label",onSubmit:void 0,onRating:void 0,onFeedbackTextChange:void 0,positiveFeedbackLabel:"Min egne positive label",ratingValue:"positive"}),n("hr",{style:{width:"100%"}}),n(t,{...e,ratingLabel:"Min egne label",onSubmit:void 0,onRating:void 0,onFeedbackTextChange:void 0,negativeFeedbackLabel:"Min egne negative label",ratingValue:"negative"})]}),h=e=>n(o,{title:"Feedback - Custom Button Tooltips",children:n(t,{...e,ratingLabel:e.ratingLabel??"Hva syns du om tjenesten?",onSubmit:void 0,onRating:void 0,onFeedbackTextChange:void 0,thumbUpTooltip:"Liker",thumbDownTooltip:"Liker ikke"})}),f=e=>a(o,{title:"Feedback - Loading",children:[n(t,{...e,ratingLabel:e.ratingLabel??"Hva syns du om tjenesten?",onSubmit:void 0,onRating:void 0,onFeedbackTextChange:void 0,loading:!0}),n("hr",{style:{width:"100%"}}),n(t,{...e,ratingLabel:e.ratingLabel??"Hva syns du om tjenesten?",onSubmit:void 0,onRating:void 0,onFeedbackTextChange:void 0,ratingValue:"positive",loading:!0})]}),L=e=>a(o,{title:"Feedback - Controlled Component",children:['Komponenten kan også brukes som en "controlled component", altså at verdiene styres helt fra utsiden av komponenten.',n("hr",{style:{width:"100%"}}),"Kontrollert rating:",n(t,{...e,ratingLabel:e.ratingLabel??"Hva syns du om tjenesten?",onSubmit:void 0,onRating:void 0,onFeedbackTextChange:void 0,ratingValue:null}),n(t,{...e,ratingLabel:e.ratingLabel??"Hva syns du om tjenesten?",onSubmit:void 0,onRating:void 0,onFeedbackTextChange:void 0,ratingValue:"positive"}),n(t,{...e,ratingLabel:e.ratingLabel??"Hva syns du om tjenesten?",onSubmit:void 0,onRating:void 0,onFeedbackTextChange:void 0,ratingValue:"negative"}),n("hr",{style:{width:"100%"}}),"Kontrollert tekstfelt:",n(t,{...e,ratingLabel:e.ratingLabel??"Hva syns du om tjenesten?",onSubmit:void 0,onRating:void 0,onFeedbackTextChange:void 0,ratingValue:"positive",feedbackTextValue:"Dette var ekstremt bra; Tommel opp!"}),n("hr",{style:{width:"100%"}}),"Kontrollert at tilbakemelding er sendt inn:",n(t,{...e,ratingLabel:e.ratingLabel??"Hva syns du om tjenesten?",onSubmit:void 0,onRating:void 0,onFeedbackTextChange:void 0,isSubmitted:!0})]});var $,K,_;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`(args: FeedbackProps) => {
  return <StoryTemplate title="Feedback - Default">
      <Feedback {...args} ratingLabel={args.ratingLabel ?? 'Hva syns du om tjenesten?'} onSubmit={undefined} onRating={undefined} onFeedbackTextChange={undefined} />
    </StoryTemplate>;
}`,...(_=(K=m.parameters)==null?void 0:K.docs)==null?void 0:_.source}}};var I,N,O;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`(args: FeedbackProps) => {
  return <StoryTemplate title="Feedback - Horizontal Layout">
      <Feedback {...args} ratingLabel={args.ratingLabel ?? 'Hva syns du om tjenesten?'} onSubmit={undefined} onRating={undefined} onFeedbackTextChange={undefined} layout="horizontal" />
    </StoryTemplate>;
}`,...(O=(N=p.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var U,W,X;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`(args: FeedbackProps) => {
  return <StoryTemplate title="Feedback - Without Text Area">
      <Feedback {...args} ratingLabel={args.ratingLabel ?? 'Hva syns du om tjenesten?'} onSubmit={undefined} onRating={undefined} onFeedbackTextChange={undefined} feedbackTextAreaExcluded />
    </StoryTemplate>;
}`,...(X=(W=v.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var G,P,q;k.parameters={...k.parameters,docs:{...(G=k.parameters)==null?void 0:G.docs,source:{originalSource:`(args: FeedbackProps) => {
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
}`,...(q=(P=k.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};var J,Q,Y;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`(args: FeedbackProps) => {
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
}`,...(oe=(ae=L.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};const Ce=["Default","HorizontalLayout","WithoutTextArea","CustomLabels","CustomButtonTooltips","LoadingState","ControlledComponent"],Ae=Object.freeze(Object.defineProperty({__proto__:null,ControlledComponent:L,CustomButtonTooltips:h,CustomLabels:k,Default:m,HorizontalLayout:p,LoadingState:f,WithoutTextArea:v,__namedExportsOrder:Ce,default:xe},Symbol.toStringTag,{value:"Module"}));export{m as D,Ae as F};
//# sourceMappingURL=Feedback.stories-e443fdb9.js.map
