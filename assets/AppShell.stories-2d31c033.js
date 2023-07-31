import{d as C,s as t,j as c,a as n}from"./focus-visible-8467fd8b.js";import{R as b}from"./storybook-components-76b2a6b1.js";import{r as y}from"./index-d47b1f5a.js";import{i as f,H as D,K as w,C as z,Z as V,y as _,D as L}from"./dds-icons-f9255b51.js";import{D as j}from"./Divider-1feea3ff.js";const{colors:r,spacing:d,fontPackages:h,borderRadius:R}=C,T={gap:d.SizesDdsSpacingLocalX05,item:{...h.body_sans_02.base,color:r.DdsColorNeutralsGray1,borderRadius:R.RadiiDdsBorderRadius3Radius,padding:d.SizesDdsSpacingLocalX075,gap:d.SizesDdsSpacingLocalX05,external:{...h.body_sans_01.base},hover:{backgroundColor:r.DdsColorPrimaryDark},active:{color:r.DdsColorNeutralsWhite,backgroundColor:r.DdsColorPrimaryDarker}}},P={padding:"36px 24px",color:r.DdsColorNeutralsWhite,logo:{...h.heading_sans_05.base,fontWeight:700},version:{...h.supportingStyle_tiny_01.base}},W={navigationItems:T,logoAndVersion:P,color:r.DdsColorNeutralsGray1,backgroundColor:r.DdsColorPrimaryBase,gap:d.SizesDdsSpacingLocalX05,dividerColor:r.DdsColorPrimaryLight,padding:d.SizesDdsSpacingLocalX1,width:"264px",mobile:{iconColors:r.DdsColorNeutralsGray3}},O={gap:d.SizesDdsSpacingLocalX1,textColor:r.DdsColorNeutralsGray7,backgroundColor:r.DdsColorPrimaryDarker},m={navigation:W,floatingActionButtons:O},{navigation:B}=m,o=B.navigationItems.item,H=t.div`
  grid-area: icon;
  display: flex;
  align-items: center;
`,X=t.span`
  grid-area: text;
`,I=t.div`
  display: flex;
  align-items: center;
  opacity: 0;
  grid-area: chevron;
`,N=t.a`
  padding: ${o.padding};
  gap: ${o.gap};
  border-radius: ${o.borderRadius};

  text-decoration: none;
  color: ${o.color};
  font-size: ${o.fontSize};
  font-style: ${o.fontStyle};
  font-family: ${o.fontFamily};
  font-weight: ${o.fontWeight};
  line-height: ${o.lineHeight};
  letter-spacing: ${o.letterSpacing};

  :hover:not(.active) {
    background-color: ${o.hover.backgroundColor};
  }

  &.active {
    color: ${o.active.color};
    background-color: ${o.active.backgroundColor};
  }
`,F=t(N)`
  display: grid;
  align-items: center;
  grid-template-areas: 'icon text chevron';
  grid-template-columns: min-content 1fr min-content;

  :hover {
    ${I} {
      opacity: 1;
    }
  }
`,G=t(N)`
  display: flex;
  flex-direction: row;
  align-items: center;

  font-size: ${o.external.fontSize};
  font-style: ${o.external.fontStyle};
  font-family: ${o.external.fontFamily};
  font-weight: ${o.external.fontWeight};
  line-height: ${o.external.lineHeight};
  letter-spacing: ${o.external.letterSpacing};
`,v=({as:l,active:p,icon:s,external:a,children:S,...u})=>{const A=l??"a";return a?c(G,{as:A,...u,children:[S,n(f,{icon:D,iconSize:"inherit"})]}):c(F,{as:A,...u,className:p?"active":"",children:[n(H,{children:s&&n(f,{icon:s})}),n(X,{children:S}),n(I,{children:n(f,{icon:w})})]})};v.displayName="AppShell.NavItem";const{navigation:e}=m,E=t.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: ${e.width};
  padding: ${e.padding};
  color: ${e.color};
  background-color: ${e.backgroundColor};
  box-sizing: border-box;

  position: sticky;
  top: 0;
  left: 0;
`,M=t.div`
  display: flex;
  flex-direction: column;
  color: ${e.logoAndVersion.color};
  padding: ${e.logoAndVersion.padding};
`,K=t.a`
  font-size: ${e.logoAndVersion.logo.fontSize};
  font-style: ${e.logoAndVersion.logo.fontStyle};
  font-family: ${e.logoAndVersion.logo.fontFamily};
  font-weight: ${e.logoAndVersion.logo.fontWeight};
  line-height: ${e.logoAndVersion.logo.lineHeight};
  letter-spacing: ${e.logoAndVersion.logo.letterSpacing};
  text-align: middle;
`,Z=t.span`
  font-size: ${e.logoAndVersion.version.fontSize};
  font-style: ${e.logoAndVersion.version.fontStyle};
  font-family: ${e.logoAndVersion.version.fontFamily};
  font-weight: ${e.logoAndVersion.version.fontWeight};
  line-height: ${e.logoAndVersion.version.lineHeight};
  letter-spacing: ${e.logoAndVersion.version.letterSpacing};
`,q=t.nav`
  display: flex;
  flex-direction: column;
  gap: ${e.navigationItems.gap};
`,J=t.div`
  padding-left: ${e.navigationItems.item.padding};
  padding-right: ${e.navigationItems.item.padding};
`,Q=t(j)`
  border-color: ${e.dividerColor};
`,U=({version:l,internal:p,external:s})=>c(E,{children:[c(M,{children:[n(K,{children:"Lovisa"}),l!==""&&c(Z,{children:["v ",l]})]}),c(q,{children:[y.Children.map(p,a=>a.type!==v?(console.warn("Du bruker en React-komponent som ikke er tillat i AppShell-internal. Du kan kun bruke AppShell.NavItem i AppShell-internal."),null):a),s.length>0&&n(J,{children:n(Q,{})}),y.Children.map(s,a=>a.type!==v?(console.warn("Du bruker en React-komponent som ikke er tillat i AppShell-external. Du kan kun bruke AppShell.NavItem i AppShell-external."),null):a)]})]}),Y=t.div`
  display: flex;
  flex-direction: row;
`,ee=t.main`
  min-width: calc(100vw - ${m.navigation.width});
  max-width: calc(100vw - ${m.navigation.width});
`,ne=({children:l,version:p="",navigation:{internal:s=[],external:a=[]}})=>c(Y,{children:[n(U,{version:p,internal:s,external:a}),n(ee,{children:l})]}),i=ne;i.NavItem=v;const oe={title:"dds-components/AppShell",component:i},g=l=>n(b,{title:"AppShell - default",children:n(i,{version:"1.0.0",...l,navigation:{internal:[n(i.NavItem,{active:!0,href:"#",icon:z,children:"Saker"}),n(i.NavItem,{href:"#",icon:V,children:"Oppgaver"}),n(i.NavItem,{href:"#",icon:_,children:"Avgjørelser"}),n(i.NavItem,{href:"#",icon:L,children:"Statistikk"})],external:[n(i.NavItem,{href:"#",external:!0,children:"Saker"}),n(i.NavItem,{href:"#",external:!0,children:"Oppgaver"}),n(i.NavItem,{href:"#",external:!0,children:"Avgjørelser"}),n(i.NavItem,{href:"#",external:!0,children:"Statistikk"})]}})});var k,x,$;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`(args: ComponentProps<typeof AppShell>) => <StoryTemplate title="AppShell - default">
    <AppShell version="1.0.0" {...args} navigation={{
    internal: [<AppShell.NavItem active href="#" icon={FolderIcon}>
            Saker
          </AppShell.NavItem>, <AppShell.NavItem href="#" icon={ChecklistIcon}>
            Oppgaver
          </AppShell.NavItem>, <AppShell.NavItem href="#" icon={GavelIcon}>
            Avgjørelser
          </AppShell.NavItem>, <AppShell.NavItem href="#" icon={BarChartIcon}>
            Statistikk
          </AppShell.NavItem>],
    external: [<AppShell.NavItem href="#" external>
            Saker
          </AppShell.NavItem>, <AppShell.NavItem href="#" external>
            Oppgaver
          </AppShell.NavItem>, <AppShell.NavItem href="#" external>
            Avgjørelser
          </AppShell.NavItem>, <AppShell.NavItem href="#" external>
            Statistikk
          </AppShell.NavItem>]
  }} />
  </StoryTemplate>`,...($=(x=g.parameters)==null?void 0:x.docs)==null?void 0:$.source}}};const te=["Default"],ce=Object.freeze(Object.defineProperty({__proto__:null,Default:g,__namedExportsOrder:te,default:oe},Symbol.toStringTag,{value:"Module"}));export{ce as A,g as D};
//# sourceMappingURL=AppShell.stories-2d31c033.js.map
