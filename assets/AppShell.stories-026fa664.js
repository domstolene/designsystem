import{d as C,s as t,j as c,a as n}from"./focus-visible-8467fd8b.js";import{R as D}from"./storybook-components-dc8c0578.js";import{r as A}from"./index-d47b1f5a.js";import{i as f,H as b,K as V,C as z,Z as _,y as w,D as L}from"./dds-icons-f9255b51.js";import{D as j}from"./Divider-1feea3ff.js";const{colors:i,spacing:d,fontPackages:h,borderRadius:R}=C,T={gap:d.SizesDdsSpacingLocalX05,item:{...h.body_sans_02.base,color:i.DdsColorNeutralsGray1,borderRadius:R.RadiiDdsBorderRadius3Radius,padding:d.SizesDdsSpacingLocalX075,gap:d.SizesDdsSpacingLocalX05,external:{...h.body_sans_01.base},hover:{backgroundColor:i.DdsColorPrimaryDark},active:{color:i.DdsColorNeutralsWhite,backgroundColor:i.DdsColorPrimaryDarker}}},P={padding:"36px 24px",color:i.DdsColorNeutralsWhite,logo:{...h.heading_sans_05.base,fontWeight:700},version:{...h.supportingStyle_tiny_01.base}},W={navigationItems:T,logoAndVersion:P,color:i.DdsColorNeutralsGray1,backgroundColor:i.DdsColorPrimaryBase,gap:d.SizesDdsSpacingLocalX05,dividerColor:i.DdsColorPrimaryLight,padding:d.SizesDdsSpacingLocalX1,width:"264px",mobile:{iconColors:i.DdsColorNeutralsGray3}},O={gap:d.SizesDdsSpacingLocalX1,textColor:i.DdsColorNeutralsGray7,backgroundColor:i.DdsColorPrimaryDarker},I={navigation:W,floatingActionButtons:O},{navigation:B}=I,o=B.navigationItems.item,H=t.div`
  grid-area: icon;
  display: flex;
  align-items: center;
`,X=t.span`
  grid-area: text;
`,$=t.div`
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
    ${$} {
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
`,m=({as:l,active:p,icon:s,external:a,children:v,...S})=>{const u=l??"a";return a?c(G,{as:u,...S,children:[v,n(f,{icon:b,iconSize:"inherit"})]}):c(F,{as:u,...S,className:p?"active":"",children:[n(H,{children:s&&n(f,{icon:s})}),n(X,{children:v}),n($,{children:n(f,{icon:V})})]})};m.displayName="AppShell.NavItem";const{navigation:e}=I,E=t.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: ${e.width};
  padding: ${e.padding};
  color: ${e.color};
  background-color: ${e.backgroundColor};

  position: sticky;
  top: 0;
  left: 0;
`,K=t.div`
  display: flex;
  flex-direction: column;
  color: ${e.logoAndVersion.color};
  padding: ${e.logoAndVersion.padding};
`,M=t.a`
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
`,U=({version:l,internal:p,external:s})=>c(E,{children:[c(K,{children:[n(M,{children:"Lovisa"}),l!==""&&c(Z,{children:["v ",l]})]}),c(q,{children:[A.Children.map(p,a=>a.type!==m?(console.warn("Du bruker en React-komponent som ikke er tillat i AppShell-internal. Du kan kun bruke AppShell.NavItem i AppShell-internal."),null):a),s.length>0&&n(J,{children:n(Q,{})}),A.Children.map(s,(a,v)=>a.type!==m?(console.warn("Du bruker en React-komponent som ikke er tillat i AppShell-external. Du kan kun bruke AppShell.NavItem i AppShell-external."),null):a)]})]}),Y=t.div`
  display: flex;
  flex-direction: row;
`,ee=({children:l,version:p="",navigation:{internal:s=[],external:a=[]}})=>c(Y,{children:[n(U,{version:p,internal:s,external:a}),l]}),r=ee;r.NavItem=m;const ne={title:"dds-components/AppShell",component:r},g=l=>n(D,{title:"AppShell - default",children:n(r,{version:"1.0.0",...l,navigation:{internal:[n(r.NavItem,{active:!0,href:"#",icon:z,children:"Saker"}),n(r.NavItem,{href:"#",icon:_,children:"Oppgaver"}),n(r.NavItem,{href:"#",icon:w,children:"Avgjørelser"}),n(r.NavItem,{href:"#",icon:L,children:"Statistikk"})],external:[n(r.NavItem,{href:"#",external:!0,children:"Saker"}),n(r.NavItem,{href:"#",external:!0,children:"Oppgaver"}),n(r.NavItem,{href:"#",external:!0,children:"Avgjørelser"}),n(r.NavItem,{href:"#",external:!0,children:"Statistikk"})]}})});var y,k,x;g.parameters={...g.parameters,docs:{...(y=g.parameters)==null?void 0:y.docs,source:{originalSource:`(args: ComponentProps<typeof AppShell>) => <StoryTemplate title="AppShell - default">
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
  </StoryTemplate>`,...(x=(k=g.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};const oe=["Default"],se=Object.freeze(Object.defineProperty({__proto__:null,Default:g,__namedExportsOrder:oe,default:ne},Symbol.toStringTag,{value:"Module"}));export{se as A,g as D};
//# sourceMappingURL=AppShell.stories-026fa664.js.map
