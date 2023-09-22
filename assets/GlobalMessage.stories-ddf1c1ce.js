import{d as _,s as c,A as j,j as p,a as o}from"./ddsReferenceTokens-f1d35829.js";import{R as m}from"./storybook-components-97b79dd9.js";import{r as f}from"./index-d47b1f5a.js";import{N as I,b as N,X as W,q as A,i as q}from"./dds-icons-265d9665.js";import{O as Q,T as V}from"./dds-typography-cc6cb429.js";import{a as F}from"./dds-core-c67132cd.js";import{B as H}from"./Button-aa30c63f.js";const{colors:a,spacing:r}=_,J="bodySans02",K={borderBottom:"2px solid",padding:`0 ${r.SizesDdsSpacingLocalX1}`,info:{borderColor:a.DdsColorInfoLighter,backgroundColor:a.DdsColorInfoLightest},danger:{borderColor:a.DdsColorDangerLighter,backgroundColor:a.DdsColorDangerLightest},warning:{borderColor:a.DdsColorWarningLighter,backgroundColor:a.DdsColorWarningLightest}},U={paddingRight:r.SizesDdsSpacingLocalX15,paddingTop:r.SizesDdsSpacingLocalX075,paddingBottom:r.SizesDdsSpacingLocalX075,gap:r.SizesDdsSpacingLocalX075,withClosable:{paddingRight:r.SizesDdsSpacingLocalX075}},C={info:{icon:I,closeButtonPurpose:"secondary"},danger:{icon:N,closeButtonPurpose:"danger"},warning:{icon:W,closeButtonPurpose:"secondary"}},Y={container:K,contentContainer:U,icon:{marginRight:`${r.SizesDdsSpacingLocalX075}`,info:{color:a.DdsColorInfoDarkest},danger:{color:a.DdsColorDangerDarkest},warning:{color:a.DdsColorWarningDarkest}}},{container:g,contentContainer:d,icon:T}=Y,Z=c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  padding: ${g.padding};
  border-bottom: ${g.borderBottom};
  ${Q(J,!0)}
  ${({purpose:e})=>e&&j`
      border-color: ${g[e].borderColor};
      background-color: ${g[e].backgroundColor};
    `}
`,ee=c(q)`
  margin-right: ${T.marginRight};
`,oe=c.div`
  display: flex;
  align-items: center;
`,se=c.div`
  display: flex;
  align-items: center;
  padding-top: ${d.paddingTop};
  padding-bottom: ${d.paddingBottom};
  padding-right: ${({closable:e})=>e?d.withClosable.paddingRight:d.paddingRight};
`,s=f.forwardRef((e,$)=>{const{message:k,purpose:i="info",closable:b,onClose:u,children:v,id:x,className:B,htmlProps:z,...P}=e,[X,R]=f.useState(!1),O={...F(x,B,z,P),ref:$,purpose:i};return X?null:p(Z,{...O,children:[p(se,{closable:b,children:[o(ee,{icon:C[i].icon,color:T[i].color}),v??o(V,{as:"span",children:k})]}),o(oe,{children:b&&o(H,{icon:A,purpose:C[i].closeButtonPurpose,appearance:"borderless",onClick:()=>{R(!0),u&&u()},size:"small","aria-label":"Lukk melding"})})]})});s.displayName="GlobalMessage";const ae={title:"dds-components/GlobalMessage",component:s,argTypes:{message:{control:{type:"text"}},closable:{control:{type:"boolean"}}}},n=e=>p(m,{title:"GlobalMessage - overview",children:[o(s,{...e,purpose:"info",message:"En tilfeldig melding"}),o(s,{...e,purpose:"warning",message:"En tilfeldig melding"}),o(s,{...e,purpose:"danger",message:"En tilfeldig melding"}),o(s,{...e,purpose:"info",message:"En tilfeldig melding",closable:!0}),o(s,{...e,purpose:"warning",message:"En tilfeldig melding",closable:!0}),o(s,{...e,purpose:"danger",message:"En tilfeldig melding",closable:!0})]}),l=e=>o(m,{title:"GlobalMessage - default",children:o(s,{...e,message:e.message||"En tilfeldig melding"})}),t=e=>o(m,{title:"GlobalMessage - closable",children:o(s,{...e,purpose:e.purpose||"info",message:e.message||"En tilfeldig melding",closable:!0})});var S,h,M;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`(args: GlobalMessageProps) => {
  return <StoryTemplate title="GlobalMessage - overview">
      <GlobalMessage {...args} purpose="info" message="En tilfeldig melding" />
      <GlobalMessage {...args} purpose="warning" message="En tilfeldig melding" />
      <GlobalMessage {...args} purpose="danger" message="En tilfeldig melding" />
      <GlobalMessage {...args} purpose="info" message="En tilfeldig melding" closable />
      <GlobalMessage {...args} purpose="warning" message="En tilfeldig melding" closable />
      <GlobalMessage {...args} purpose="danger" message="En tilfeldig melding" closable />
    </StoryTemplate>;
}`,...(M=(h=n.parameters)==null?void 0:h.docs)==null?void 0:M.source}}};var D,y,G;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`(args: GlobalMessageProps) => {
  return <StoryTemplate title="GlobalMessage - default">
      <GlobalMessage {...args} message={args.message || 'En tilfeldig melding'} />
    </StoryTemplate>;
}`,...(G=(y=l.parameters)==null?void 0:y.docs)==null?void 0:G.source}}};var E,w,L;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`(args: GlobalMessageProps) => {
  return <StoryTemplate title="GlobalMessage - closable">
      <GlobalMessage {...args} purpose={args.purpose || 'info'} message={args.message || 'En tilfeldig melding'} closable />
    </StoryTemplate>;
}`,...(L=(w=t.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};const re=["Overview","Default","Closable"],pe=Object.freeze(Object.defineProperty({__proto__:null,Closable:t,Default:l,Overview:n,__namedExportsOrder:re,default:ae},Symbol.toStringTag,{value:"Module"}));export{pe as G};
//# sourceMappingURL=GlobalMessage.stories-ddf1c1ce.js.map
