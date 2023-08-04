import{s as n,a as t,d as M,j as h}from"./ddsReferenceTokens-f1d35829.js";import{r as b}from"./index-d47b1f5a.js";import{i as w,H as K,K as Z,L as q,W as U,C as J,d as Q,q as Y,r as ee,D as te,Z as ne,y as oe,F as ie}from"./dds-icons-265d9665.js";import{B as ae}from"./Button-aa30c63f.js";import{O as re}from"./OverflowMenuGroup-d39ab7ad.js";import{O as le}from"./OverflowMenu-c583f668.js";import{D as se}from"./Divider-1dae9af4.js";function B(e){switch(e){case"TEST":return{background:"#F957A5",text:"#5E032F"};case"AT":return{background:"#2CC3F2",text:"#064B60"};case"KURS":return{background:"#7AB73D",text:"#2B4116"};case"LOKAL":return{background:"#F2D32C",text:"#695B07"}}}const f="2rem",ce=n.div`
  background-color: ${({environment:e})=>B(e).background};
  padding: 8px;
  color: ${({environment:e})=>B(e).text};
  width: 100%;
  height: ${f};
  text-align: center;
  font-weight: bolder;
  letter-spacing: 0.15em;
  z-index: 9999;

  position: ${({position:e})=>e};
  top: 0;
  left: 0;
  right: 0;
`,R=({environment:e,bannerPosition:a="fixed"})=>e==="PROD"?null:t(ce,{environment:e,position:a,children:e});R.displayName="EnvironmentBanner";n.div`
  padding-top: ${f};
  position: relative;
`;const{colors:c,spacing:m,fontPackages:k,borderRadius:_,breakpoints:de}=M,pe={gap:m.SizesDdsSpacingLocalX05,item:{...k.body_sans_02.base,color:c.DdsColorNeutralsGray1,borderRadius:_.RadiiDdsBorderRadius3Radius,padding:m.SizesDdsSpacingLocalX075,gap:m.SizesDdsSpacingLocalX05,external:{...k.body_sans_01.base},hover:{backgroundColor:c.DdsColorPrimaryDark},active:{color:c.DdsColorNeutralsWhite,backgroundColor:c.DdsColorPrimaryDarker}}},ge={padding:"36px 24px",color:c.DdsColorNeutralsWhite,logo:{...k.heading_sans_05.base,fontWeight:700,small:{...k.heading_sans_03.base,fontWeight:600}},version:{...k.supportingStyle_tiny_01.base}},he={padding:m.SizesDdsSpacingLocalX025,height:`calc(${m.SizesDdsSpacingLayoutX3} + 2 * ${m.SizesDdsSpacingLocalX025})`,buttonTextColor:c.DdsColorNeutralsGray3,gap:m.SizesDdsSpacingLocalX025},me={navigationItems:pe,logoAndVersion:ge,topBar:he,color:c.DdsColorNeutralsGray1,backgroundColor:c.DdsColorPrimaryBase,gap:m.SizesDdsSpacingLocalX05,dividerColor:c.DdsColorPrimaryLight,padding:m.SizesDdsSpacingLocalX1,width:"264px",mobile:{breakpoint:de.DdsBreakpointSm,iconColors:c.DdsColorNeutralsGray3}},ve={gap:m.SizesDdsSpacingLocalX1,textColor:c.DdsColorNeutralsGray7,backgroundColor:c.DdsColorNeutralsWhite,borderRadius:_.RadiiDdsBorderRadius3Radius},s={navigation:me,floatingActionButtons:ve},P=b.createContext({isOpen:!1,setOpen:()=>{}}),ue=({children:e})=>{const[a,d]=b.useState(!1);return t(P.Provider,{value:{isOpen:a,setOpen:d},children:e})},j=()=>b.useContext(P),{navigation:fe}=s,i=fe.navigationItems.item,$e=n.div`
  grid-area: icon;
  display: flex;
  align-items: center;
`,xe=n.span`
  grid-area: text;
`,V=n.div`
  display: flex;
  align-items: center;
  opacity: 0;
  grid-area: chevron;
`,E=n.a`
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
`,Se=n(E)`
  display: grid;
  align-items: center;
  grid-template-areas: 'icon text chevron';
  grid-template-columns: min-content 1fr min-content;

  &.active ${V} {
    opacity: 1;
  }
`,be=n(E)`
  display: flex;
  flex-direction: row;
  align-items: center;

  font-size: ${i.external.fontSize};
  font-style: ${i.external.fontStyle};
  font-family: ${i.external.fontFamily};
  font-weight: ${i.external.fontWeight};
  line-height: ${i.external.lineHeight};
  letter-spacing: ${i.external.letterSpacing};
`,I=({as:e,active:a,icon:d,external:$,children:v,onClick:u,...p})=>{const{setOpen:x}=j(),l=e??"a",A=N=>{u==null||u(N),x(!1)};return $?h(be,{as:l,...p,onClick:A,children:[v,t(w,{icon:K,iconSize:"inherit"})]}):h(Se,{as:l,...p,onClick:A,className:[a?"active":"",p.className].join(" "),children:[t($e,{children:d&&t(w,{icon:d})}),t(xe,{children:v}),t(V,{children:t(w,{icon:Z})})]})};I.displayName="AppShell.NavItem";const ye=({type:e,...a})=>{switch(e){case"jordskifterett":return t(Q,{...a});case"tingrett":return t(J,{...a});case"lagmannsrett":return t(U,{...a});case"høyesterett":case void 0:return t(q,{...a})}},{navigation:L}=s,S=e=>e?L.logoAndVersion.logo.small:L.logoAndVersion.logo,W=n.a`
  font-size: ${({small:e})=>S(e).fontSize};
  font-style: ${({small:e})=>S(e).fontStyle};
  font-family: ${({small:e})=>S(e).fontFamily};
  font-weight: ${({small:e})=>S(e).fontWeight};
  line-height: ${({small:e})=>S(e).lineHeight};
  letter-spacing: ${({small:e})=>S(e).letterSpacing};
  text-align: middle;
`,{navigation:r,floatingActionButtons:C}=s,X=n.div`
  display: flex;
  align-items: center;
  gap: ${r.topBar.gap};
`,F=n.div`
  display: flex;
  align-items: center;
  gap: ${r.topBar.gap};
`,D=n(ae).attrs({appearance:"borderless",purpose:"secondary"})`
  color: ${r.topBar.buttonTextColor};
  > :first-child {
    font-size: 1.65rem;
  }
  @media (max-width: ${r.mobile.breakpoint}) {
    border: 0;
    box-shadow: none;
    padding: 12px;
    &:hover,
    &:active {
      color: ${r.topBar.buttonTextColor};
      text-decoration-color: ${r.topBar.buttonTextColor};
      box-shadow: none;
    }
    gap: 0;
  }
`,G=n.span`
  display: none; // Ikke vis tekst på mobil
  width: 0;
`,ke=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${r.topBar.gap};
  width: 100vw;
  height: ${r.topBar.height};
  color: ${r.color};
  background-color: ${r.backgroundColor};
  box-sizing: border-box;
  z-index: 101;

  position: fixed;
  top: ${({environmentBannerActive:e})=>e?f:"0"};
  left: 0;
  right: 0;

  @media (min-width: ${r.mobile.breakpoint}) {
    justify-content: flex-end;
    background-color: transparent;
    margin-left: ${r.width};
    width: calc(100vw - ${r.width});

    pointer-events: none;
    & > * {
      pointer-events: initial;
    }

    ${X} {
      display: none;
    }

    ${F} {
      padding-right: calc(2 * ${r.topBar.gap});
      gap: ${C.gap};
    }

    ${D} {
      background-color: ${C.backgroundColor};
      color: ${C.textColor};
      box-shadow: 8px 16px 32px 0px rgba(0, 0, 0, 0.1);
      border-radius: ${C.borderRadius};

      ${G} {
        display: unset;
      }
    }
  }
`,Ae=({user:e,userMenuItems:a,isNavigationOpen:d,onNavigationOpenChange:$,environmentBannerActive:v})=>h(ke,{environmentBannerActive:v,children:[h(X,{children:[t(D,{icon:d?Y:ee,onClick:()=>$(!d)}),t(W,{small:!0,children:"Lovisa"})]}),t(F,{children:h(re,{children:[t(D,{icon:p=>t(ye,{...p,type:e.embete.type}),label:t(G,{children:e.name})}),t(le,{items:a})]})})]}),{navigation:o}=s,Ce=n.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - ${o.topBar.height});
  width: 100vw;
  padding: ${o.padding};
  color: ${o.color};
  background-color: ${o.backgroundColor};
  box-sizing: border-box;

  position: fixed;
  top: ${({environmentBannerActive:e})=>e?`calc(${f} + ${o.topBar.height})`:o.topBar.height};
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;

  transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
  transform: translateX(${({isOpen:e})=>e?"0":"-100%"});
  opacity: ${({isOpen:e})=>e?"1":"0"};

  @media (min-width: ${o.mobile.breakpoint}) {
    height: ${({environmentBannerActive:e})=>e?`calc(100vh - ${f})`:"100vh"};
    top: ${({environmentBannerActive:e})=>e?f:0};
    width: ${o.width};
    position: fixed;

    transform: translateX(0);
    opacity: 1;
  }
`,Ie=n.div`
  display: none;

  @media (min-width: ${o.mobile.breakpoint}) {
    display: flex;
    flex-direction: column;
    color: ${o.logoAndVersion.color};
    padding: ${o.logoAndVersion.padding};
  }
`,Ne=n.span`
  font-size: ${o.logoAndVersion.version.fontSize};
  font-style: ${o.logoAndVersion.version.fontStyle};
  font-family: ${o.logoAndVersion.version.fontFamily};
  font-weight: ${o.logoAndVersion.version.fontWeight};
  line-height: ${o.logoAndVersion.version.lineHeight};
  letter-spacing: ${o.logoAndVersion.version.letterSpacing};
`,we=n.nav`
  display: flex;
  flex-direction: column;
  gap: ${o.navigationItems.gap};
`,De=n.div`
  padding-left: ${o.navigationItems.item.padding};
  padding-right: ${o.navigationItems.item.padding};
`,Be=n(se)`
  border-color: ${o.dividerColor};
`,Le=({version:e,user:a,userMenuItems:d,internal:$,external:v,environmentBannerActive:u})=>{const{isOpen:p,setOpen:x}=j();return b.useEffect(()=>{const l=A=>{A.key==="o"&&x(N=>!N)};return window.addEventListener("keypress",l),()=>window.removeEventListener("keypress",l)}),h("div",{children:[t(Ae,{user:a,userMenuItems:d,isNavigationOpen:p,onNavigationOpenChange:l=>x(l),environmentBannerActive:u}),h(Ce,{isOpen:p,environmentBannerActive:u,children:[h(Ie,{children:[t(W,{children:"Lovisa"}),e!==""&&h(Ne,{children:["v ",e]})]}),h(we,{children:[b.Children.map($,l=>l.type!==I?(console.warn("Du bruker en React-komponent som ikke er tillat i AppShell-internal. Du kan kun bruke AppShell.NavItem i AppShell-internal."),null):l),v.length>0&&t(De,{children:t(Be,{})}),b.Children.map(v,l=>l.type!==I?(console.warn("Du bruker en React-komponent som ikke er tillat i AppShell-external. Du kan kun bruke AppShell.NavItem i AppShell-external."),null):l)]})]})]})},ze=n.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${s.navigation.mobile.breakpoint}) {
    flex-direction: row;
  }
`,Te=n.main`
  min-height: calc(100vh - ${s.navigation.topBar.height});
  margin-top: ${({environmentBannerActive:e})=>e?`calc(${f} + ${s.navigation.topBar.height})`:s.navigation.topBar.height};
  @media (min-width: ${s.navigation.mobile.breakpoint}) {
    min-height: unset;
    margin-top: ${({environmentBannerActive:e})=>e?f:0};
    margin-left: ${s.navigation.width};
    min-width: calc(100vw - ${s.navigation.width});
    max-width: calc(100vw - ${s.navigation.width});
  }
`,H=({children:e,version:a="",navigation:{internal:d=[],external:$=[]},user:v,userMenuItems:u,environment:p="PROD"})=>{const x=p!=="PROD";return t(ue,{children:h(ze,{children:[t(R,{environment:p}),t(Le,{user:v,userMenuItems:u,version:a,internal:d,external:$,environmentBannerActive:x}),t(Te,{environmentBannerActive:x,children:e})]})})};H.displayName="AppShell";const g=H;g.NavItem=I;const Oe={title:"dds-components/AppShell",component:g},y=e=>t(g,{version:"1.0.0",user:{embete:{name:"Borgarting Lagmannsrett",type:"høyesterett"},name:"Kari Nordmann"},environment:"TEST",userMenuItems:[{title:"Bytt embete"},{title:"Logg ut"}],navigation:{internal:[t(g.NavItem,{active:!0,href:"#",icon:te,children:"Saker"}),t(g.NavItem,{href:"#",icon:ne,children:"Oppgaver"}),t(g.NavItem,{href:"#",icon:oe,children:"Avgjørelser"}),t(g.NavItem,{href:"#",icon:ie,children:"Statistikk"})],external:[t(g.NavItem,{href:"#",external:!0,children:"Saker"}),t(g.NavItem,{href:"#",external:!0,children:"Oppgaver"}),t(g.NavItem,{href:"#",external:!0,children:"Avgjørelser"}),t(g.NavItem,{href:"#",external:!0,children:"Statistikk"})]},...e});var z,T,O;y.parameters={...y.parameters,docs:{...(z=y.parameters)==null?void 0:z.docs,source:{originalSource:`(args: Partial<ComponentProps<typeof AppShell>>) => <AppShell version="1.0.0" user={{
  embete: {
    name: 'Borgarting Lagmannsrett',
    type: 'høyesterett'
  },
  name: 'Kari Nordmann'
}} environment="TEST" userMenuItems={[{
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
}} {...args} />`,...(O=(T=y.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};const Re=["Default"],Fe=Object.freeze(Object.defineProperty({__proto__:null,Default:y,__namedExportsOrder:Re,default:Oe},Symbol.toStringTag,{value:"Module"}));export{Fe as A,y as D};
//# sourceMappingURL=AppShell.stories-22118420.js.map
