import{d as F,s as r,A as $,j as o,a as b}from"./focus-visible-c2e9b88d.js";import{r as l}from"./index-ebeaab24.js";import{O as q}from"./OverflowMenu-04596b71.js";import{s as J}from"./selection-fae9d0a8.js";import{d as K}from"./Typography.utils-99dd1e07.js";import{f as Q}from"./focusVisible-75802ac7.js";import{M as U}from"./menu-35d03998.js";import{M as Y}from"./moreVertical-d30e3ebf.js";import{g as Z}from"./BaseComponentProps-bb0d5515.js";import{T as M}from"./Typography-9f10a259.js";import{B as _}from"./Button-2e74127f.js";const{border:I,colors:a,spacing:n}=F,C=`${I.BordersDdsBorderStyleLightStrokeWeight} ${I.BordersDdsBorderStyleLightStroke} solid `,oo={navLink:"bodySans01"},eo={base:{color:a.DdsColorNeutralsGray9,backgroundColor:a.DdsColorNeutralsWhite,padding:`${n.SizesDdsSpacingLocalX075} ${n.SizesDdsSpacingLocalX15}`},hover:{color:a.DdsColorInteractiveDark},active:{color:a.DdsColorInteractiveDark},current:{color:a.DdsColorInteractiveDarkest,backgroundColor:a.DdsColorPrimaryLightest}},ro={backgroundColor:a.DdsColorNeutralsWhite},no={padding:`${n.SizesDdsSpacingLocalX1} ${n.SizesDdsSpacingLocalX15}`},to={padding:`${n.SizesDdsSpacingLocalX1} ${n.SizesDdsSpacingLocalX15}`,borderRight:C},ao={borderBottom:C,paddingRight:n.SizesDdsSpacingLocalX1,hasContextMenu:{paddingRight:n.SizesDdsSpacingLayoutX4}},io={borderBottom:C},so={right:n.SizesDdsSpacingLocalX075,top:n.SizesDdsSpacingLocalX025},z={navLink:eo,outerContainer:ro,applicationNameWrapper:no,lovisaWrapper:to,banner:ao,navigation:io,contextGroup:so},{outerContainer:co,applicationNameWrapper:lo,lovisaWrapper:N,banner:v,navigation:po,contextGroup:B}=z,go=r.div`
  position: relative;
  *::selection {
    ${J}
  }
  background-color: ${co.backgroundColor};
`,uo=r.div`
  position: relative;
  display: flex;
  align-items: center;
  border-bottom: ${v.borderBottom};
  padding-right: ${v.paddingRight};
  ${({hasContextMenu:e})=>e&&$`
      padding-right: ${v.hasContextMenu.paddingRight};
    `}
`,ho=r.div`
  display: flex;
`,mo=r.div`
  display: flex;
  align-items: center;
  padding: ${lo.padding};
`,bo=r.div`
  padding: ${N.padding};
  border-right: ${N.borderRight};
`,vo=r.nav`
  border-bottom: ${po.borderBottom};
`,$o=r.ul`
  box-sizing: border-box;
  display: flex;
  ${({smallScreen:e})=>e&&$`
      flex-direction: column;
    `}
  list-style-type: none;
  padding: 0;
  margin: 0;
`,Co=r.div`
  position: absolute;
  top: ${B.top};
  right: ${B.right};
`,fo=r(q)`
  max-height: calc(100vh - 110px);
`,{navLink:t}=z,xo=r.a`
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
  ${K(oo.navLink)}
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
`,yo=l.forwardRef(({title:e,isCurrent:i,...d},s)=>{const c={ref:s,isCurrent:i,...d};return o(xo,{...c,"aria-current":i?"page":void 0,children:e})}),So=r.li`
  box-sizing: border-box;
`,ko=l.forwardRef(({children:e,...i},d)=>{const s={ref:d,...i};return o(So,{...s,children:e})}),Lo=e=>{const{applicationDesc:i,applicationName:d,smallScreen:s,navigationElements:c,contextMenuElements:p,currentPageHref:W,userProps:f,onCurrentPageChange:x,id:R,className:P,htmlProps:X,...T}=e,[g,y]=l.useState(!0),[H,O]=l.useState(W),S=l.useRef(null),w=h=>{O(h),x&&x()},E=()=>{y(!g)},G=()=>y(!0),k=!!c&&c.length>0,L=!!p&&p.length>0,u=s&&k,j=k&&!s?o(vo,{"aria-label":"sidenavigasjon",children:o($o,{children:c.map((h,A)=>{const{href:m,...V}=h;return o(ko,{children:o(yo,{href:m,...V,isCurrent:m===H,onClick:()=>w(m)})},A)})})}):null,D=L||!!f||u;return b(go,{...Z(R,P,X,T),children:[o(uo,{hasContextMenu:D,children:b(ho,{children:[o(bo,{children:o(M,{typographyType:"bodySans02",bold:!0,as:"span",children:d})}),o(mo,{children:o(M,{typographyType:"bodySans02",as:"span",children:i})})]})}),j,D&&b(Co,{children:[o(_,{ref:S,icon:u?U:Y,appearance:"borderless",purpose:"secondary",onClick:E,"aria-haspopup":"menu","aria-expanded":g?void 0:!0,"aria-label":"åpne meny"}),o(fo,{isOpen:!g,onClose:G,anchorRef:S,navItems:u?c:void 0,items:L?p:void 0,userProps:f})]})]})};Lo.displayName="InternalHeader";export{Lo as I};
//# sourceMappingURL=InternalHeader-4409aaba.js.map
