import{d as _,s as c,A as j,a as p,j as o}from"./focus-visible-c2e9b88d.js";import{R as m}from"./storybook-components-c9cbefc3.js";import{r as f}from"./index-ebeaab24.js";import{I as W,W as O}from"./warning-a3911247.js";import{E as A}from"./error-e0532677.js";import{d as N}from"./Typography.utils-99dd1e07.js";import{g as F}from"./BaseComponentProps-bb0d5515.js";import{T as H}from"./Typography-9f10a259.js";import{B as V}from"./Button-2e74127f.js";import{C as q}from"./close-10bf9508.js";import{I as J}from"./Icon-819df738.js";const{colors:a,spacing:r}=_,K="bodySans02",Q={borderBottom:"2px solid",padding:`0 ${r.SizesDdsSpacingLocalX1}`,info:{borderColor:a.DdsColorInfoLighter,backgroundColor:a.DdsColorInfoLightest},danger:{borderColor:a.DdsColorDangerLighter,backgroundColor:a.DdsColorDangerLightest},warning:{borderColor:a.DdsColorWarningLighter,backgroundColor:a.DdsColorWarningLightest}},U={paddingRight:r.SizesDdsSpacingLocalX15,paddingTop:r.SizesDdsSpacingLocalX075,paddingBottom:r.SizesDdsSpacingLocalX075,gap:r.SizesDdsSpacingLocalX075,withClosable:{paddingRight:r.SizesDdsSpacingLocalX075}},C={info:{icon:W,closeButtonPurpose:"secondary"},danger:{icon:A,closeButtonPurpose:"danger"},warning:{icon:O,closeButtonPurpose:"secondary"}},Y={container:Q,contentContainer:U,icon:{marginRight:`${r.SizesDdsSpacingLocalX075}`,info:{color:a.DdsColorInfoDarkest},danger:{color:a.DdsColorDangerDarkest},warning:{color:a.DdsColorWarningDarkest}}},{container:g,contentContainer:d,icon:L}=Y,Z=c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  padding: ${g.padding};
  border-bottom: ${g.borderBottom};
  ${N(K,!0)}
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
`,s=f.forwardRef((e,$)=>{const{message:k,purpose:i="info",closable:b,onClose:u,children:v,id:x,className:B,htmlProps:I,...P}=e,[z,R]=f.useState(!1),X={...F(x,B,I,P),ref:$,purpose:i};return z?null:p(Z,{...X,children:[p(se,{closable:b,children:[o(ee,{icon:C[i].icon,color:L[i].color}),v??o(H,{as:"span",children:k})]}),o(oe,{children:b&&o(V,{icon:q,purpose:C[i].closeButtonPurpose,appearance:"borderless",onClick:()=>{R(!0),u&&u()},size:"small","aria-label":"Lukk melding"})})]})});s.displayName="GlobalMessage";const ae={title:"dds-components/GlobalMessage",component:s,argTypes:{message:{control:{type:"text"}},closable:{control:{type:"boolean"}}}},n=e=>p(m,{title:"GlobalMessage - overview",children:[o(s,{...e,purpose:"info",message:"En tilfeldig melding"}),o(s,{...e,purpose:"warning",message:"En tilfeldig melding"}),o(s,{...e,purpose:"danger",message:"En tilfeldig melding"}),o(s,{...e,purpose:"info",message:"En tilfeldig melding",closable:!0}),o(s,{...e,purpose:"warning",message:"En tilfeldig melding",closable:!0}),o(s,{...e,purpose:"danger",message:"En tilfeldig melding",closable:!0})]}),l=e=>o(m,{title:"GlobalMessage - default",children:o(s,{...e,message:e.message||"En tilfeldig melding"})}),t=e=>o(m,{title:"GlobalMessage - closable",children:o(s,{...e,purpose:e.purpose||"info",message:e.message||"En tilfeldig melding",closable:!0})});var S,h,y;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`(args: GlobalMessageProps) => {
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
}`,...(T=(w=t.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};const re=["Overview","Default","Closable"],fe=Object.freeze(Object.defineProperty({__proto__:null,Closable:t,Default:l,Overview:n,__namedExportsOrder:re,default:ae},Symbol.toStringTag,{value:"Module"}));export{fe as G};
//# sourceMappingURL=GlobalMessage.stories-553c3ee5.js.map
