import{d as P,A as W,s as $,j as k,a as c}from"./ddsReferenceTokens-647ce456.js";import{r as l}from"./index-ebeaab24.js";import{c as M,b as X,g as S}from"./BaseComponentProps-a100791d.js";import"./libraryAdd-35e18a4f.js";import{I as H}from"./Icon-42793503.js";import{n as K}from"./normalize-f756ee4b.js";import"./Caption-9d9a71c0.js";import"./Heading-b4646737.js";import"./Label-470a2743.js";import"./Legend-6fbf6204.js";import"./Link-3e1e1a74.js";import"./Paragraph-ff3eeae6.js";import"./TextOverflowEllipsis-e3546c5b.js";import{a as T,f as j}from"./Typography-b6b10a83.js";const{border:z,borderRadius:A,colors:t,spacing:r,fontPackages:B}=P,E="bodySans01",F={base:{color:t.DdsColorNeutralsGray9,textDecoration:"none",backgroundColor:t.DdsColorNeutralsWhite,padding:`${r.SizesDdsSpacingLocalX075} ${r.SizesDdsSpacingLocalX1}`,gap:r.SizesDdsSpacingLocalX025}},G=M(B.body_sans_01.numbers.lineHeightNumber,B.body_sans_01.numbers.fontSizeNumber),V={iconWrapper:{height:`${G}px`},hover:{backgroundColor:t.DdsColorInteractiveLightest},active:{backgroundColor:t.DdsColorInteractiveLightest}},q={border:`${z.BordersDdsBorderStyleLightStrokeWeight} ${z.BordersDdsBorderStyleLightStroke} solid `,backgroundColor:t.DdsColorNeutralsWhite,borderRadius:A.RadiiDdsBorderRadius1Radius},J={marginRight:r.SizesDdsSpacingLocalX15,marginLeft:r.SizesDdsSpacingLocalX15},Q={container:q,element:F,link:V,divider:J,offset:r.SizesDdsSpacingLocalX0125NumberPx},{element:n,link:C}=Q,O=W`
  display: flex;
  box-sizing: border-box;
  color: ${n.base.color};
  text-decoration: ${n.base.textDecoration};
  background-color: ${n.base.backgroundColor};
  padding: ${n.base.padding};
  gap: ${n.base.gap};
  ${T(E)}
`,U=$.span`
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
    background-color: ${C.hover.backgroundColor};
  }
  &:active {
    background-color: ${C.active.backgroundColor};
  }
  &:focus-visible,
  &.focus-visible {
    ${j}
  }
`,y=$.span`
  display: flex;
  align-items: center;
  height: ${C.iconWrapper.height};
`,Y=e=>e.href!==void 0,Z=e=>e.href===void 0&&e.onClick!==void 0,D=l.forwardRef((e,v)=>{const{title:d,icon:x,focus:u,setFocus:g,index:m,id:p,className:f,htmlProps:i={},...h}=e,{onKeyDown:L}=i;let s,a;Y(e)?s=e.href:Z(e)&&(a=e.onClick);const _=l.useRef(null),w=X(v,_);l.useEffect(()=>{var o;u&&((o=_.current)==null||o.focus())},[u]);const I=l.useCallback(()=>{g&&m&&g(m)},[m,g]),R={href:s,onClick:o=>{I(),a&&a(o)},onKeyDown:o=>{I(),L&&L(o)},role:"menuitem",tabIndex:u?0:-1},b=x&&c(H,{iconSize:"inherit",icon:x});return!s&&!a?k(U,{...S(p,f,i,h),ref:v,children:[c(y,{children:b}),d]}):s?k(N,{...S(p,f,i,h),...R,as:"a",ref:w,children:[c(y,{children:b}),d]}):k(N,{...S(p,f,i,h),...R,as:"button",ref:w,children:[c(y,{children:b}),d]})});D.displayName="OverflowMenuItem";try{D.displayName="OverflowMenuItem",D.__docgenInfo={description:"",displayName:"OverflowMenuItem",props:{}}}catch{}export{D as O,Q as o};
//# sourceMappingURL=OverflowMenuItem-5fa82ba8.js.map
