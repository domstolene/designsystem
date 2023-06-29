import{d as V,s as n,A as $,j as o,a as b}from"./focus-visible-35158c22.js";import{r as l}from"./index-d47b1f5a.js";import{O as q,T as N}from"./dds-typography-e761338c.js";import{Z as F,a as J}from"./dds-core-29d22035.js";import{O as K}from"./OverflowMenu-7482705f.js";import{V as Q}from"./dds-form-b2eacd8d.js";import{t as U,o as Y}from"./dds-icons-7a922c3a.js";import{B as _}from"./Button-2404c0e2.js";const{border:z,colors:a,spacing:r}=V,C=`${z.BordersDdsBorderStyleLightStrokeWeight} ${z.BordersDdsBorderStyleLightStroke} solid `,oo={navLink:"bodySans01"},eo={base:{color:a.DdsColorNeutralsGray9,backgroundColor:a.DdsColorNeutralsWhite,padding:`${r.SizesDdsSpacingLocalX075} ${r.SizesDdsSpacingLocalX15}`},hover:{color:a.DdsColorInteractiveDark},active:{color:a.DdsColorInteractiveDark},current:{color:a.DdsColorInteractiveDarkest,backgroundColor:a.DdsColorPrimaryLightest}},no={backgroundColor:a.DdsColorNeutralsWhite},ro={padding:`${r.SizesDdsSpacingLocalX1} ${r.SizesDdsSpacingLocalX15}`},to={padding:`${r.SizesDdsSpacingLocalX1} ${r.SizesDdsSpacingLocalX15}`,borderRight:C},ao={borderBottom:C,paddingRight:r.SizesDdsSpacingLocalX1,hasContextMenu:{paddingRight:r.SizesDdsSpacingLayoutX4}},io={borderBottom:C},so={right:r.SizesDdsSpacingLocalX075,top:r.SizesDdsSpacingLocalX025},M={navLink:eo,outerContainer:no,applicationNameWrapper:ro,lovisaWrapper:to,banner:ao,navigation:io,contextGroup:so},{outerContainer:co,applicationNameWrapper:lo,lovisaWrapper:B,banner:v,navigation:po,contextGroup:I}=M,go=n.div`
  position: relative;
  *::selection {
    ${F}
  }
  background-color: ${co.backgroundColor};
`,uo=n.div`
  position: relative;
  display: flex;
  align-items: center;
  border-bottom: ${v.borderBottom};
  padding-right: ${v.paddingRight};
  ${({hasContextMenu:e})=>e&&$`
      padding-right: ${v.hasContextMenu.paddingRight};
    `}
`,ho=n.div`
  display: flex;
`,mo=n.div`
  display: flex;
  align-items: center;
  padding: ${lo.padding};
`,bo=n.div`
  padding: ${B.padding};
  border-right: ${B.borderRight};
`,vo=n.nav`
  border-bottom: ${po.borderBottom};
`,$o=n.ul`
  box-sizing: border-box;
  display: flex;
  ${({smallScreen:e})=>e&&$`
      flex-direction: column;
    `}
  list-style-type: none;
  padding: 0;
  margin: 0;
`,Co=n.div`
  position: absolute;
  top: ${I.top};
  right: ${I.right};
`,xo=n(K)`
  max-height: calc(100vh - 110px);
`,{navLink:t}=M,fo=n.a`
  display: flex;
  align-items: center;
  height: 100%;
  box-sizing: border-box;
  text-decoration: none;
  @media (prefers-reduced-motion: no-preference) {
    transition: background-color 0.2s;
  }
  color: ${t.base.color};
  background-color: ${t.base.backgroundColor};
  padding: ${t.base.padding};
  ${q(oo.navLink)}
  &:hover {
    color: ${t.hover.color};
  }
  &:active {
    color: ${t.active.color};
  }
  &:focus-visible,
  &.focus-visible {
    ${Q};
  }
  ${({isCurrent:e})=>e&&$`
      color: ${t.current.color};
      background-color: ${t.current.backgroundColor};
      &:hover {
        color: ${t.current.color};
      }
    `}
`,So=l.forwardRef(({title:e,isCurrent:i,...d},s)=>{const c={ref:s,isCurrent:i,...d};return o(fo,{...c,"aria-current":i?"page":void 0,children:e})}),yo=n.li`
  box-sizing: border-box;
`,ko=l.forwardRef(({children:e,...i},d)=>{const s={ref:d,...i};return o(yo,{...s,children:e})}),Lo=e=>{const{applicationDesc:i,applicationName:d,smallScreen:s,navigationElements:c,contextMenuElements:p,currentPageHref:W,userProps:x,onCurrentPageChange:f,id:R,className:X,htmlProps:P,...O}=e,[g,S]=l.useState(!0),[T,w]=l.useState(W),y=l.useRef(null),E=h=>{w(h),f&&f()},G=()=>{S(!g)},H=()=>S(!0),k=!!c&&c.length>0,L=!!p&&p.length>0,u=s&&k,j=k&&!s?o(vo,{"aria-label":"sidenavigasjon",children:o($o,{children:c.map((h,A)=>{const{href:m,...Z}=h;return o(ko,{children:o(So,{href:m,...Z,isCurrent:m===T,onClick:()=>E(m)})},A)})})}):null,D=L||!!x||u;return b(go,{...J(R,X,P,O),children:[o(uo,{hasContextMenu:D,children:b(ho,{children:[o(bo,{children:o(N,{typographyType:"bodySans02",bold:!0,as:"span",children:d})}),o(mo,{children:o(N,{typographyType:"bodySans02",as:"span",children:i})})]})}),j,D&&b(Co,{children:[o(_,{ref:y,icon:u?U:Y,appearance:"borderless",purpose:"secondary",onClick:G,"aria-haspopup":"menu","aria-expanded":g?void 0:!0,"aria-label":"åpne meny"}),o(xo,{isOpen:!g,onClose:H,anchorRef:y,navItems:u?c:void 0,items:L?p:void 0,userProps:x})]})]})};Lo.displayName="InternalHeader";export{Lo as I};
//# sourceMappingURL=InternalHeader-82073577.js.map
