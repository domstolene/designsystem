import{d as P,A as W,s as $,j as k,a as c}from"./focus-visible-8467fd8b.js";import{r as l}from"./index-d47b1f5a.js";import{R as X,b as K,S as _,a as S}from"./dds-core-b89b291f.js";import{i as j}from"./dds-icons-f9255b51.js";import{O as A,S as E}from"./dds-typography-4e6445f7.js";const{border:O,borderRadius:M,colors:s,spacing:n,fontPackages:B}=P,T="bodySans01",H={base:{color:s.DdsColorNeutralsGray9,textDecoration:"none",backgroundColor:s.DdsColorNeutralsWhite,padding:`${n.SizesDdsSpacingLocalX075} ${n.SizesDdsSpacingLocalX1}`,gap:n.SizesDdsSpacingLocalX025}},F=X(B.body_sans_01.numbers.lineHeightNumber,B.body_sans_01.numbers.fontSizeNumber),G={iconWrapper:{height:`${F}px`},hover:{backgroundColor:s.DdsColorInteractiveLightest},active:{backgroundColor:s.DdsColorInteractiveLightest}},Q={border:`${O.BordersDdsBorderStyleLightStrokeWeight} ${O.BordersDdsBorderStyleLightStroke} solid `,backgroundColor:s.DdsColorNeutralsWhite,borderRadius:M.RadiiDdsBorderRadius1Radius},q={marginRight:n.SizesDdsSpacingLocalX15,marginLeft:n.SizesDdsSpacingLocalX15},J={container:Q,element:H,link:G,divider:q,offset:n.SizesDdsSpacingLocalX0125NumberPx},{element:r,link:D}=J,I=W`
  display: flex;
  box-sizing: border-box;
  color: ${r.base.color};
  text-decoration: ${r.base.textDecoration};
  background-color: ${r.base.backgroundColor};
  padding: ${r.base.padding};
  gap: ${r.base.gap};
  ${A(T)}
`,U=$.span`
  ${I}
`,N=$.a`
  ${K}
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
    background-color: ${D.hover.backgroundColor};
  }
  &:active {
    background-color: ${D.active.backgroundColor};
  }
  &:focus-visible,
  &.focus-visible {
    ${E}
  }
`,C=$.span`
  display: flex;
  align-items: center;
  height: ${D.iconWrapper.height};
`,V=e=>e.href!==void 0,Y=e=>e.href===void 0&&e.onClick!==void 0,Z=l.forwardRef((e,v)=>{const{title:d,icon:x,focus:u,setFocus:g,index:b,id:f,className:h,htmlProps:i={},...m}=e,{onKeyDown:y}=i;let t,a;V(e)?t=e.href:Y(e)&&(a=e.onClick);const L=l.useRef(null),R=_(v,L);l.useEffect(()=>{var o;u&&((o=L.current)==null||o.focus())},[u]);const w=l.useCallback(()=>{g&&b&&g(b)},[b,g]),z={href:t,onClick:o=>{w(),a&&a(o)},onKeyDown:o=>{w(),y&&y(o)},role:"menuitem",tabIndex:u?0:-1},p=x&&c(j,{iconSize:"inherit",icon:x});return!t&&!a?k(U,{...S(f,h,i,m),ref:v,children:[c(C,{children:p}),d]}):t?k(N,{...S(f,h,i,m),...z,as:"a",ref:R,children:[c(C,{children:p}),d]}):k(N,{...S(f,h,i,m),...z,as:"button",ref:R,children:[c(C,{children:p}),d]})});Z.displayName="OverflowMenuItem";export{Z as O,J as o};
//# sourceMappingURL=OverflowMenuItem-5d18c7ac.js.map
