import{d as W,s as n,j as c,a as e}from"./ddsReferenceTokens-f1d35829.js";import{r as x}from"./index-d47b1f5a.js";import{i as A,H as X,K as G,L as P,W as E,C as F,d as H,q as M,r as K,D as Z,Z as q,y as J,F as Q}from"./dds-icons-265d9665.js";import{B as U}from"./Button-aa30c63f.js";import{O as Y}from"./OverflowMenuGroup-d39ab7ad.js";import{O as ee}from"./OverflowMenu-c583f668.js";import{D as te}from"./Divider-1dae9af4.js";const{colors:l,spacing:g,fontPackages:b,borderRadius:B,breakpoints:oe}=W,ne={gap:g.SizesDdsSpacingLocalX05,item:{...b.body_sans_02.base,color:l.DdsColorNeutralsGray1,borderRadius:B.RadiiDdsBorderRadius3Radius,padding:g.SizesDdsSpacingLocalX075,gap:g.SizesDdsSpacingLocalX05,external:{...b.body_sans_01.base},hover:{backgroundColor:l.DdsColorPrimaryDark},active:{color:l.DdsColorNeutralsWhite,backgroundColor:l.DdsColorPrimaryDarker}}},ie={padding:"36px 24px",color:l.DdsColorNeutralsWhite,logo:{...b.heading_sans_05.base,fontWeight:700,small:{...b.heading_sans_03.base,fontWeight:600}},version:{...b.supportingStyle_tiny_01.base}},ae={padding:g.SizesDdsSpacingLocalX025,height:`calc(${g.SizesDdsSpacingLayoutX3} + 2 * ${g.SizesDdsSpacingLocalX025})`,buttonTextColor:l.DdsColorNeutralsGray3,gap:g.SizesDdsSpacingLocalX025},re={navigationItems:ne,logoAndVersion:ie,topBar:ae,color:l.DdsColorNeutralsGray1,backgroundColor:l.DdsColorPrimaryBase,gap:g.SizesDdsSpacingLocalX05,dividerColor:l.DdsColorPrimaryLight,padding:g.SizesDdsSpacingLocalX1,width:"264px",mobile:{breakpoint:oe.DdsBreakpointSm,iconColors:l.DdsColorNeutralsGray3}},le={gap:g.SizesDdsSpacingLocalX1,textColor:l.DdsColorNeutralsGray7,backgroundColor:l.DdsColorNeutralsWhite,borderRadius:B.RadiiDdsBorderRadius3Radius},p={navigation:re,floatingActionButtons:le},{navigation:se}=p,i=se.navigationItems.item,ce=n.div`
  grid-area: icon;
  display: flex;
  align-items: center;
`,de=n.span`
  grid-area: text;
`,z=n.div`
  display: flex;
  align-items: center;
  opacity: 0;
  grid-area: chevron;
`,L=n.a`
  padding: ${i.padding};
  gap: ${i.gap};
  border-radius: ${i.borderRadius};

  text-decoration: none;
  color: ${i.color};
  font-size: ${i.fontSize};
  font-style: ${i.fontStyle};
  font-family: ${i.fontFamily};
  font-weight: ${i.fontWeight};
  line-height: ${i.lineHeight};
  letter-spacing: ${i.letterSpacing};

  :hover:not(.active) {
    background-color: ${i.hover.backgroundColor};
  }

  &.active {
    color: ${i.active.color};
    background-color: ${i.active.backgroundColor};
  }
`,pe=n(L)`
  display: grid;
  align-items: center;
  grid-template-areas: 'icon text chevron';
  grid-template-columns: min-content 1fr min-content;

  &.active ${z} {
    opacity: 1;
  }
`,ge=n(L)`
  display: flex;
  flex-direction: row;
  align-items: center;

  font-size: ${i.external.fontSize};
  font-style: ${i.external.fontStyle};
  font-family: ${i.external.fontFamily};
  font-weight: ${i.external.fontWeight};
  line-height: ${i.external.lineHeight};
  letter-spacing: ${i.external.letterSpacing};
`,k=({as:t,active:r,icon:h,external:u,children:v,...m})=>{const $=t??"a";return u?c(ge,{as:$,...m,children:[v,e(A,{icon:X,iconSize:"inherit"})]}):c(pe,{as:$,...m,className:r?"active":"",children:[e(ce,{children:h&&e(A,{icon:h})}),e(de,{children:v}),e(z,{children:e(A,{icon:G})})]})};k.displayName="AppShell.NavItem";const he=({type:t,...r})=>{switch(t){case"jordskifterett":return e(H,{...r});case"tingrett":return e(F,{...r});case"lagmannsrett":return e(E,{...r});case"høyesterett":case void 0:return e(P,{...r})}},{navigation:N}=p,f=t=>t?N.logoAndVersion.logo.small:N.logoAndVersion.logo,_=n.a`
  font-size: ${({small:t})=>f(t).fontSize};
  font-style: ${({small:t})=>f(t).fontStyle};
  font-family: ${({small:t})=>f(t).fontFamily};
  font-weight: ${({small:t})=>f(t).fontWeight};
  line-height: ${({small:t})=>f(t).lineHeight};
  letter-spacing: ${({small:t})=>f(t).letterSpacing};
  text-align: middle;
`,{navigation:a,floatingActionButtons:y}=p,T=n.div`
  display: flex;
  align-items: center;
  gap: ${a.topBar.gap};
`,O=n.div`
  display: flex;
  align-items: center;
  gap: ${a.topBar.gap};
`,I=n(U).attrs({appearance:"borderless",purpose:"secondary"})`
  color: ${a.topBar.buttonTextColor};
  > :first-child {
    font-size: 1.65rem;
  }
  @media (max-width: ${a.mobile.breakpoint}) {
    border: 0;
    box-shadow: none;
    padding: 12px;
    &:hover,
    &:active {
      color: ${a.topBar.buttonTextColor};
      text-decoration-color: ${a.topBar.buttonTextColor};
      box-shadow: none;
    }
    gap: 0;
  }
`,j=n.span`
  display: none; // Ikke vis tekst på mobil
  width: 0;
`,me=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${a.topBar.gap};
  width: 100vw;
  height: ${a.topBar.height};
  color: ${a.color};
  background-color: ${a.backgroundColor};
  box-sizing: border-box;
  z-index: 101;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  @media (min-width: ${a.mobile.breakpoint}) {
    justify-content: flex-end;
    background-color: transparent;
    margin-left: ${a.width};
    width: calc(100vw - ${a.width});

    ${T} {
      display: none;
    }

    ${O} {
      padding-right: calc(2 * ${a.topBar.gap});
      gap: ${y.gap};
    }

    ${I} {
      background-color: ${y.backgroundColor};
      color: ${y.textColor};
      box-shadow: 8px 16px 32px 0px rgba(0, 0, 0, 0.1);
      border-radius: ${y.borderRadius};

      ${j} {
        display: unset;
      }
    }
  }
`,ve=({user:t,userMenuItems:r,isNavigationOpen:h,onNavigationOpenChange:u})=>c(me,{children:[c(T,{children:[e(I,{icon:h?M:K,onClick:()=>u(!h)}),e(_,{small:!0,children:"Lovisa"})]}),e(O,{children:c(Y,{children:[e(I,{icon:m=>e(he,{...m,type:t.embete.type}),label:e(j,{children:t.name})}),e(ee,{items:r})]})})]}),{navigation:o}=p,ue=n.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - ${o.topBar.height});
  width: 100vw;
  padding: ${o.padding};
  color: ${o.color};
  background-color: ${o.backgroundColor};
  box-sizing: border-box;

  position: fixed;
  top: ${o.topBar.height};
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;

  transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
  transform: translateX(${({isOpen:t})=>t?"0":"-100%"});
  opacity: ${({isOpen:t})=>t?"1":"0"};

  @media (min-width: ${o.mobile.breakpoint}) {
    height: 100vh;
    top: 0;
    width: ${o.width};
    position: sticky;

    transform: translateX(0);
    opacity: 1;
  }
`,fe=n.div`
  display: none;

  @media (min-width: ${o.mobile.breakpoint}) {
    display: flex;
    flex-direction: column;
    color: ${o.logoAndVersion.color};
    padding: ${o.logoAndVersion.padding};
  }
`,$e=n.span`
  font-size: ${o.logoAndVersion.version.fontSize};
  font-style: ${o.logoAndVersion.version.fontStyle};
  font-family: ${o.logoAndVersion.version.fontFamily};
  font-weight: ${o.logoAndVersion.version.fontWeight};
  line-height: ${o.logoAndVersion.version.lineHeight};
  letter-spacing: ${o.logoAndVersion.version.letterSpacing};
`,Se=n.nav`
  display: flex;
  flex-direction: column;
  gap: ${o.navigationItems.gap};
`,be=n.div`
  padding-left: ${o.navigationItems.item.padding};
  padding-right: ${o.navigationItems.item.padding};
`,xe=n(te)`
  border-color: ${o.dividerColor};
`,ye=({version:t,user:r,userMenuItems:h,internal:u,external:v})=>{const[m,$]=x.useState(!1);return x.useEffect(()=>{const d=R=>{R.key==="o"&&$(V=>!V)};return window.addEventListener("keypress",d),()=>window.removeEventListener("keypress",d)}),c("div",{children:[e(ve,{user:r,userMenuItems:h,isNavigationOpen:m,onNavigationOpenChange:d=>$(d)}),c(ue,{isOpen:m,children:[c(fe,{children:[e(_,{children:"Lovisa"}),t!==""&&c($e,{children:["v ",t]})]}),c(Se,{children:[x.Children.map(u,d=>d.type!==k?(console.warn("Du bruker en React-komponent som ikke er tillat i AppShell-internal. Du kan kun bruke AppShell.NavItem i AppShell-internal."),null):d),v.length>0&&e(be,{children:e(xe,{})}),x.Children.map(v,d=>d.type!==k?(console.warn("Du bruker en React-komponent som ikke er tillat i AppShell-external. Du kan kun bruke AppShell.NavItem i AppShell-external."),null):d)]})]})]})},ke=n.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${p.navigation.mobile.breakpoint}) {
    flex-direction: row;
  }
`,Ae=n.main`
  min-height: calc(100vh - ${p.navigation.topBar.height});
  margin-top: ${p.navigation.topBar.height};
  @media (min-width: ${p.navigation.mobile.breakpoint}) {
    min-height: unset;
    margin-top: 0;
    min-width: calc(100vw - ${p.navigation.width});
    max-width: calc(100vw - ${p.navigation.width});
  }
`,Ie=({children:t,version:r="",navigation:{internal:h=[],external:u=[]},user:v,userMenuItems:m})=>c(ke,{children:[e(ye,{user:v,userMenuItems:m,version:r,internal:h,external:u}),e(Ae,{children:t})]}),s=Ie;s.NavItem=k;const Ne={title:"dds-components/AppShell",component:s},S=t=>e(s,{version:"1.0.0",user:{embete:{name:"Borgarting Lagmannsrett",type:"høyesterett"},name:"Kari Nordmann"},userMenuItems:[{title:"Bytt embete"},{title:"Logg ut"}],navigation:{internal:[e(s.NavItem,{active:!0,href:"#",icon:Z,children:"Saker"}),e(s.NavItem,{href:"#",icon:q,children:"Oppgaver"}),e(s.NavItem,{href:"#",icon:J,children:"Avgjørelser"}),e(s.NavItem,{href:"#",icon:Q,children:"Statistikk"})],external:[e(s.NavItem,{href:"#",external:!0,children:"Saker"}),e(s.NavItem,{href:"#",external:!0,children:"Oppgaver"}),e(s.NavItem,{href:"#",external:!0,children:"Avgjørelser"}),e(s.NavItem,{href:"#",external:!0,children:"Statistikk"})]},...t});var C,w,D;S.parameters={...S.parameters,docs:{...(C=S.parameters)==null?void 0:C.docs,source:{originalSource:`(args: Partial<ComponentProps<typeof AppShell>>) => <AppShell version="1.0.0" user={{
  embete: {
    name: 'Borgarting Lagmannsrett',
    type: 'høyesterett'
  },
  name: 'Kari Nordmann'
}} userMenuItems={[{
  title: 'Bytt embete'
}, {
  title: 'Logg ut'
}]} navigation={{
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
}} {...args} />`,...(D=(w=S.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};const Ce=["Default"],Oe=Object.freeze(Object.defineProperty({__proto__:null,Default:S,__namedExportsOrder:Ce,default:Ne},Symbol.toStringTag,{value:"Module"}));export{Oe as A,S as D};
//# sourceMappingURL=AppShell.stories-7dcd267c.js.map
