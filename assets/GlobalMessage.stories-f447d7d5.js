import{d as _,s as c,C as j,b as p,j as o}from"./focus-visible-17f12d09.js";import{R as m}from"./storybook-components-8785bb6b.js";import{r as f}from"./index-c6dae603.js";import{I as W,W as O}from"./warning-a97f54ff.js";import{E as N}from"./error-f74b99a0.js";import{d as F}from"./Typography.utils-3c68477b.js";import{g as H}from"./BaseComponentProps-bb0d5515.js";import{T as V}from"./Typography-ddbe86f6.js";import{B as q}from"./Button-4fdfc19e.js";import{C as A}from"./close-bbf4cbe9.js";import{I as J}from"./Icon-a968456f.js";const{colors:r,spacing:a}=_,K="bodySans02",Q={borderBottom:"2px solid",padding:`0 ${a.SizesDdsSpacingLocalX1}`,info:{borderColor:r.DdsColorInfoLighter,backgroundColor:r.DdsColorInfoLightest},danger:{borderColor:r.DdsColorDangerLighter,backgroundColor:r.DdsColorDangerLightest},warning:{borderColor:r.DdsColorWarningLighter,backgroundColor:r.DdsColorWarningLightest}},U={paddingRight:a.SizesDdsSpacingLocalX15,paddingTop:a.SizesDdsSpacingLocalX075,paddingBottom:a.SizesDdsSpacingLocalX075,gap:a.SizesDdsSpacingLocalX075,withClosable:{paddingRight:a.SizesDdsSpacingLocalX075}},C={info:{icon:W,closeButtonPurpose:"secondary"},danger:{icon:N,closeButtonPurpose:"danger"},warning:{icon:O,closeButtonPurpose:"secondary"}},Y={container:Q,contentContainer:U,icon:{marginRight:`${a.SizesDdsSpacingLocalX075}`,info:{color:r.DdsColorInfoDarkest},danger:{color:r.DdsColorDangerDarkest},warning:{color:r.DdsColorWarningDarkest}}},{container:g,contentContainer:d,icon:L}=Y,Z=c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  padding: ${g.padding};
  border-bottom: ${g.borderBottom};
  ${F(K,!0)}
  ${({purpose:e})=>e&&j`
      border-color: ${g[e].borderColor};
      background-color: ${g[e].backgroundColor};
    `}
`,ee=c(J)`
  margin-right: ${L.marginRight};
`,oe=c.div`
  display: flex;
  align-items: center;
`,se=c.div`
  display: flex;
  align-items: center;
  padding-top: ${d.paddingTop};
  padding-bottom: ${d.paddingBottom};
  padding-right: ${({closable:e})=>e?d.withClosable.paddingRight:d.paddingRight};
`,s=f.forwardRef((e,$)=>{const{message:k,purpose:i="info",closable:b,onClose:u,children:v,id:x,className:B,htmlProps:I,...P}=e,[z,R]=f.useState(!1),X={...H(x,B,I,P),ref:$,purpose:i};return z?null:p(Z,{...X,children:[p(se,{closable:b,children:[o(ee,{icon:C[i].icon,color:L[i].color}),v??o(V,{as:"span",children:k})]}),o(oe,{children:b&&o(q,{icon:A,purpose:C[i].closeButtonPurpose,appearance:"borderless",onClick:()=>{R(!0),u&&u()},size:"small","aria-label":"Lukk melding"})})]})});s.displayName="GlobalMessage";const re={title:"dds-components/GlobalMessage",component:s,argTypes:{message:{control:{type:"text"}},closable:{control:{type:"boolean"}}}},n=e=>p(m,{title:"GlobalMessage - overview",children:[o(s,{...e,purpose:"info",message:"En tilfeldig melding"}),o(s,{...e,purpose:"warning",message:"En tilfeldig melding"}),o(s,{...e,purpose:"danger",message:"En tilfeldig melding"}),o(s,{...e,purpose:"info",message:"En tilfeldig melding",closable:!0}),o(s,{...e,purpose:"warning",message:"En tilfeldig melding",closable:!0}),o(s,{...e,purpose:"danger",message:"En tilfeldig melding",closable:!0})]}),l=e=>o(m,{title:"GlobalMessage - default",children:o(s,{...e,message:e.message||"En tilfeldig melding"})}),t=e=>o(m,{title:"GlobalMessage - closable",children:o(s,{...e,purpose:e.purpose||"info",message:e.message||"En tilfeldig melding",closable:!0})});var S,h,y;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`(args: GlobalMessageProps) => {
  return <StoryTemplate title="GlobalMessage - overview">
      <GlobalMessage {...args} purpose="info" message="En tilfeldig melding" />
      <GlobalMessage {...args} purpose="warning" message="En tilfeldig melding" />
      <GlobalMessage {...args} purpose="danger" message="En tilfeldig melding" />
      <GlobalMessage {...args} purpose="info" message="En tilfeldig melding" closable />
      <GlobalMessage {...args} purpose="warning" message="En tilfeldig melding" closable />
      <GlobalMessage {...args} purpose="danger" message="En tilfeldig melding" closable />
    </StoryTemplate>;
}`,...(y=(h=n.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var M,D,G;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`(args: GlobalMessageProps) => {
  return <StoryTemplate title="GlobalMessage - default">
      <GlobalMessage {...args} message={args.message || 'En tilfeldig melding'} />
    </StoryTemplate>;
}`,...(G=(D=l.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var E,w,T;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`(args: GlobalMessageProps) => {
  return <StoryTemplate title="GlobalMessage - closable">
      <GlobalMessage {...args} purpose={args.purpose || 'info'} message={args.message || 'En tilfeldig melding'} closable />
    </StoryTemplate>;
}`,...(T=(w=t.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};const ae=["Overview","Default","Closable"],fe=Object.freeze(Object.defineProperty({__proto__:null,Closable:t,Default:l,Overview:n,__namedExportsOrder:ae,default:re},Symbol.toStringTag,{value:"Module"}));export{fe as G};
//# sourceMappingURL=GlobalMessage.stories-f447d7d5.js.map
