import{d as P,A as W,s as D,a as k,j as c}from"./focus-visible-35158c22.js";import{r as l}from"./index-d47b1f5a.js";import{A as X,C as A,S as K,a as S}from"./dds-core-29d22035.js";import{z as _}from"./dds-icons-7a922c3a.js";import{O as j,S as E}from"./dds-typography-e761338c.js";const{border:O,borderRadius:M,colors:s,spacing:n,fontPackages:B}=P,T="bodySans01",H={base:{color:s.DdsColorNeutralsGray9,textDecoration:"none",backgroundColor:s.DdsColorNeutralsWhite,padding:`${n.SizesDdsSpacingLocalX075} ${n.SizesDdsSpacingLocalX1}`,gap:n.SizesDdsSpacingLocalX025}},F=X(B.body_sans_01.numbers.lineHeightNumber,B.body_sans_01.numbers.fontSizeNumber),G={iconWrapper:{height:`${F}px`},hover:{backgroundColor:s.DdsColorInteractiveLightest},active:{backgroundColor:s.DdsColorInteractiveLightest}},Z={border:`${O.BordersDdsBorderStyleLightStrokeWeight} ${O.BordersDdsBorderStyleLightStroke} solid `,backgroundColor:s.DdsColorNeutralsWhite,borderRadius:M.RadiiDdsBorderRadius1Radius},q={marginRight:n.SizesDdsSpacingLocalX15,marginLeft:n.SizesDdsSpacingLocalX15},J={container:Z,element:H,link:G,divider:q,offset:n.SizesDdsSpacingLocalX0125NumberPx},{element:r,link:$}=J,I=W`
  display: flex;
  box-sizing: border-box;
  color: ${r.base.color};
  text-decoration: ${r.base.textDecoration};
  background-color: ${r.base.backgroundColor};
  padding: ${r.base.padding};
  gap: ${r.base.gap};
  ${j(T)}
`,Q=D.span`
  ${I}
`,N=D.a`
  ${A}
  text-align: left;
  user-select: text;
  border: none;
  cursor: pointer;
  outline: inherit;
  width: 100%;
  ${I}
  @media (prefers-reduced-motion: no-preference) {
    transition: background-color 0.2s;
  }
  &:hover {
    background-color: ${$.hover.backgroundColor};
  }
  &:active {
    background-color: ${$.active.backgroundColor};
  }
  &:focus-visible,
  &.focus-visible {
    ${E}
  }
`,C=D.span`
  display: flex;
  align-items: center;
  height: ${$.iconWrapper.height};
`,U=e=>e.href!==void 0,V=e=>e.href===void 0&&e.onClick!==void 0,Y=l.forwardRef((e,v)=>{const{title:d,icon:x,focus:u,setFocus:g,index:f,id:h,className:b,htmlProps:t={},...m}=e,{onKeyDown:y}=t;let i,a;U(e)?i=e.href:V(e)&&(a=e.onClick);const L=l.useRef(null),z=K(v,L);l.useEffect(()=>{var o;u&&((o=L.current)==null||o.focus())},[u]);const R=l.useCallback(()=>{g&&f&&g(f)},[f,g]),w={href:i,onClick:o=>{R(),a&&a(o)},onKeyDown:o=>{R(),y&&y(o)},role:"menuitem",tabIndex:u?0:-1},p=x&&c(_,{iconSize:"inherit",icon:x});return!i&&!a?k(Q,{...S(h,b,t,m),ref:v,children:[c(C,{children:p}),d]}):i?k(N,{...S(h,b,t,m),...w,as:"a",ref:z,children:[c(C,{children:p}),d]}):k(N,{...S(h,b,t,m),...w,as:"button",ref:z,children:[c(C,{children:p}),d]})});Y.displayName="OverflowMenuItem";export{Y as O,J as o};
//# sourceMappingURL=OverflowMenuItem-9a10104f.js.map
