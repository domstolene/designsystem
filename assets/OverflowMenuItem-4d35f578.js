import{j as k,a as c}from"./jsx-runtime-e43ccb36.js";import{r as l}from"./index-1b03fe98.js";import{d as W,n as P,s as D}from"./ddsReferenceTokens-cf345c8b.js";import{c as T,b as M,g as y}from"./BaseComponentProps-77dc9c6e.js";import"./libraryAdd-1d1f72ea.js";import{I as X}from"./Icon-764411b5.js";import{n as H}from"./normalize-f756ee4b.js";import"./Caption-956f7c23.js";import"./Heading-1a21ccc8.js";import"./Label-1e45d63d.js";import"./Legend-8f4b1074.js";import"./Link-1d242339.js";import"./Paragraph-6d49c218.js";import"./TextOverflowEllipsis-5f7b5b23.js";import{a as K,f as V}from"./Typography-aec60abc.js";const{border:z,borderRadius:j,colors:t,spacing:n,fontPackages:B}=W,q="bodySans01",A={base:{color:t.DdsColorNeutralsGray9,textDecoration:"none",backgroundColor:t.DdsColorNeutralsWhite,padding:`${n.SizesDdsSpacingLocalX075} ${n.SizesDdsSpacingLocalX1}`,gap:n.SizesDdsSpacingLocalX025}},E=T(B.body_sans_01.numbers.lineHeightNumber,B.body_sans_01.numbers.fontSizeNumber),F={iconWrapper:{height:`${E}px`},hover:{backgroundColor:t.DdsColorInteractiveLightest},active:{backgroundColor:t.DdsColorInteractiveLightest}},G={border:`${z.BordersDdsBorderStyleLightStrokeWeight} ${z.BordersDdsBorderStyleLightStroke} solid `,backgroundColor:t.DdsColorNeutralsWhite,borderRadius:j.RadiiDdsBorderRadius1Radius},J={marginRight:n.SizesDdsSpacingLocalX15,marginLeft:n.SizesDdsSpacingLocalX15},Q={container:G,element:A,link:F,divider:J,offset:n.SizesDdsSpacingLocalX0125NumberPx},{element:r,link:v}=Q,O=P`
  display: flex;
  box-sizing: border-box;
  color: ${r.base.color};
  text-decoration: ${r.base.textDecoration};
  background-color: ${r.base.backgroundColor};
  padding: ${r.base.padding};
  gap: ${r.base.gap};
  ${K(q)}
`,U=D.span`
  ${O}
`,N=D.a`
  ${H}
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
    background-color: ${v.hover.backgroundColor};
  }
  &:active {
    background-color: ${v.active.backgroundColor};
  }
  &:focus-visible,
  &.focus-visible {
    ${V}
  }
`,S=D.span`
  display: flex;
  align-items: center;
  height: ${v.iconWrapper.height};
`,Y=e=>e.href!==void 0,Z=e=>e.href===void 0&&e.onClick!==void 0,C=l.forwardRef((e,$)=>{const{title:d,icon:x,focus:u,setFocus:m,index:f,id:p,className:g,htmlProps:i={},...h}=e,{onKeyDown:L}=i;let s,a;Y(e)?s=e.href:Z(e)&&(a=e.onClick);const w=l.useRef(null),_=M($,w);l.useEffect(()=>{var o;u&&((o=w.current)==null||o.focus())},[u]);const I=l.useCallback(()=>{m&&f&&m(f)},[f,m]),R={href:s,onClick:o=>{I(),a&&a(o)},onKeyDown:o=>{I(),L&&L(o)},role:"menuitem",tabIndex:u?0:-1},b=x&&c(X,{iconSize:"inherit",icon:x});return!s&&!a?k(U,{...y(p,g,i,h),ref:$,children:[c(S,{children:b}),d]}):s?k(N,{...y(p,g,i,h),...R,as:"a",ref:_,children:[c(S,{children:b}),d]}):k(N,{...y(p,g,i,h),...R,as:"button",ref:_,children:[c(S,{children:b}),d]})});C.displayName="OverflowMenuItem";try{C.displayName="OverflowMenuItem",C.__docgenInfo={description:"",displayName:"OverflowMenuItem",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}}}catch{}export{C as O,Q as o};
//# sourceMappingURL=OverflowMenuItem-4d35f578.js.map
