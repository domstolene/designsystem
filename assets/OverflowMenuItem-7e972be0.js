import{j as k,a as c}from"./jsx-runtime-e43ccb36.js";import{r as l}from"./index-1b03fe98.js";import{d as P,n as W,s as $}from"./ddsReferenceTokens-a28ebf03.js";import{c as M,b as X,g as S}from"./BaseComponentProps-b6ad9f7d.js";import"./libraryAdd-72c0bfa3.js";import{I as H}from"./Icon-eb542f51.js";import{n as K}from"./normalize-f756ee4b.js";import"./Caption-d810b87c.js";import"./Heading-0c5437bc.js";import"./Label-05114518.js";import"./Legend-9969638c.js";import"./Link-c264ab95.js";import"./Paragraph-88055bd8.js";import"./TextOverflowEllipsis-6cc9a60a.js";import{a as T,f as j}from"./Typography-d13ef156.js";const{border:z,borderRadius:E,colors:t,spacing:r,fontPackages:B}=P,F="bodySans01",A={base:{color:t.DdsColorNeutralsGray9,textDecoration:"none",backgroundColor:t.DdsColorNeutralsWhite,padding:`${r.SizesDdsSpacingLocalX075} ${r.SizesDdsSpacingLocalX1}`,gap:r.SizesDdsSpacingLocalX025}},G=M(B.body_sans_01.numbers.lineHeightNumber,B.body_sans_01.numbers.fontSizeNumber),V={iconWrapper:{height:`${G}px`},hover:{backgroundColor:t.DdsColorInteractiveLightest},active:{backgroundColor:t.DdsColorInteractiveLightest}},q={border:`${z.BordersDdsBorderStyleLightStrokeWeight} ${z.BordersDdsBorderStyleLightStroke} solid `,backgroundColor:t.DdsColorNeutralsWhite,borderRadius:E.RadiiDdsBorderRadius1Radius},J={marginRight:r.SizesDdsSpacingLocalX15,marginLeft:r.SizesDdsSpacingLocalX15},Q={container:q,element:A,link:V,divider:J,offset:r.SizesDdsSpacingLocalX0125NumberPx},{element:n,link:C}=Q,O=W`
  display: flex;
  box-sizing: border-box;
  color: ${n.base.color};
  text-decoration: ${n.base.textDecoration};
  background-color: ${n.base.backgroundColor};
  padding: ${n.base.padding};
  gap: ${n.base.gap};
  ${T(F)}
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
`,Y=e=>e.href!==void 0,Z=e=>e.href===void 0&&e.onClick!==void 0,D=l.forwardRef((e,v)=>{const{title:d,icon:x,focus:m,setFocus:u,index:p,id:g,className:f,htmlProps:i={},...h}=e,{onKeyDown:L}=i;let s,a;Y(e)?s=e.href:Z(e)&&(a=e.onClick);const _=l.useRef(null),w=X(v,_);l.useEffect(()=>{var o;m&&((o=_.current)==null||o.focus())},[m]);const I=l.useCallback(()=>{u&&p&&u(p)},[p,u]),R={href:s,onClick:o=>{I(),a&&a(o)},onKeyDown:o=>{I(),L&&L(o)},role:"menuitem",tabIndex:m?0:-1},b=x&&c(H,{iconSize:"inherit",icon:x});return!s&&!a?k(U,{...S(g,f,i,h),ref:v,children:[c(y,{children:b}),d]}):s?k(N,{...S(g,f,i,h),...R,as:"a",ref:w,children:[c(y,{children:b}),d]}):k(N,{...S(g,f,i,h),...R,as:"button",ref:w,children:[c(y,{children:b}),d]})});D.displayName="OverflowMenuItem";try{D.displayName="OverflowMenuItem",D.__docgenInfo={description:"",displayName:"OverflowMenuItem",props:{}}}catch{}export{D as O,Q as o};
//# sourceMappingURL=OverflowMenuItem-7e972be0.js.map