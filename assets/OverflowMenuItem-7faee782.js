import{d as P,C as W,s as $,b as k,j as c}from"./focus-visible-17f12d09.js";import{r as l}from"./index-c6dae603.js";import{c as X}from"./text-20d7ad40.js";import{d as H}from"./Typography.utils-3c68477b.js";import{n as K}from"./normalize-f756ee4b.js";import{a as M}from"./focusVisible-bd00be70.js";import{u as T}from"./useCombinedRefs-764cd8e8.js";import{g as S}from"./BaseComponentProps-bb0d5515.js";import{I as _}from"./Icon-a968456f.js";const{border:w,borderRadius:j,colors:s,spacing:n,fontPackages:I}=P,E="bodySans01",F={base:{color:s.DdsColorNeutralsGray9,textDecoration:"none",backgroundColor:s.DdsColorNeutralsWhite,padding:`${n.SizesDdsSpacingLocalX075} ${n.SizesDdsSpacingLocalX1}`,gap:n.SizesDdsSpacingLocalX025}},A=X(I.body_sans_01.numbers.lineHeightNumber,I.body_sans_01.numbers.fontSizeNumber),G={iconWrapper:{height:`${A}px`},hover:{backgroundColor:s.DdsColorInteractiveLightest},active:{backgroundColor:s.DdsColorInteractiveLightest}},V={border:`${w.BordersDdsBorderStyleLightStrokeWeight} ${w.BordersDdsBorderStyleLightStroke} solid `,backgroundColor:s.DdsColorNeutralsWhite,borderRadius:j.RadiiDdsBorderRadius1Radius},q={marginRight:n.SizesDdsSpacingLocalX15,marginLeft:n.SizesDdsSpacingLocalX15},J={container:V,element:F,link:G,divider:q,offset:n.SizesDdsSpacingLocalX0125NumberPx},{element:r,link:D}=J,O=W`
  display: flex;
  box-sizing: border-box;
  color: ${r.base.color};
  text-decoration: ${r.base.textDecoration};
  background-color: ${r.base.backgroundColor};
  padding: ${r.base.padding};
  gap: ${r.base.gap};
  ${H(E)}
`,Q=$.span`
  ${O}
`,N=$.a`
  ${K}
  text-align: left;
  user-select: text;
  border: none;
  cursor: pointer;
  outline: inherit;
  width: 100%;
  ${O}
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
    ${M}
  }
`,C=$.span`
  display: flex;
  align-items: center;
  height: ${D.iconWrapper.height};
`,U=e=>e.href!==void 0,Y=e=>e.href===void 0&&e.onClick!==void 0,Z=l.forwardRef((e,y)=>{const{title:d,icon:v,focus:u,setFocus:g,index:f,id:m,className:h,htmlProps:t={},...b}=e,{onKeyDown:x}=t;let i,a;U(e)?i=e.href:Y(e)&&(a=e.onClick);const L=l.useRef(null),R=T(y,L);l.useEffect(()=>{var o;u&&((o=L.current)==null||o.focus())},[u]);const z=l.useCallback(()=>{g&&f&&g(f)},[f,g]),B={href:i,onClick:o=>{z(),a&&a(o)},onKeyDown:o=>{z(),x&&x(o)},role:"menuitem",tabIndex:u?0:-1},p=v&&c(_,{iconSize:"inherit",icon:v});return!i&&!a?k(Q,{...S(m,h,t,b),ref:y,children:[c(C,{children:p}),d]}):i?k(N,{...S(m,h,t,b),...B,as:"a",ref:R,children:[c(C,{children:p}),d]}):k(N,{...S(m,h,t,b),...B,as:"button",ref:R,children:[c(C,{children:p}),d]})});Z.displayName="OverflowMenuItem";export{Z as O,J as o};
//# sourceMappingURL=OverflowMenuItem-7faee782.js.map
