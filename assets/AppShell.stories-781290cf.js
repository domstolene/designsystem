import{a as n,j as p,F as Y}from"./jsx-runtime-e43ccb36.js";import{d as Z,s as t}from"./ddsReferenceTokens-cf345c8b.js";import{r as x}from"./index-1b03fe98.js";import{_ as ee,b as ne,aF as te,bm as ae,J as re,C as ie,f as oe,aq as le,Q as se,au as de,s as pe}from"./libraryAdd-792d55f1.js";import{I as w,O as ce}from"./Icon-96508a26.js";import{B as ue}from"./Button-8ec36c15.js";import{O as me}from"./OverflowMenuGroup-fec72746.js";import{O as ge}from"./OverflowMenu-ff562f79.js";import{D as ve}from"./Divider-153b4808.js";const{colors:c,spacing:g,fontPackages:_,borderRadius:W,breakpoints:fe}=Z,he={gap:g.SizesDdsSpacingLocalX05,item:{..._.body_sans_02.base,color:c.DdsColorNeutralsGray1,borderRadius:W.RadiiDdsBorderRadius3Radius,padding:g.SizesDdsSpacingLocalX075,gap:g.SizesDdsSpacingLocalX05,external:{..._.body_sans_01.base},hover:{backgroundColor:c.DdsColorPrimaryDark},active:{color:c.DdsColorNeutralsWhite,backgroundColor:c.DdsColorPrimaryDarker}}},ye={padding:"36px 24px",color:c.DdsColorNeutralsWhite,logo:{..._.heading_sans_05.base,fontWeight:700,small:{..._.heading_sans_03.base,fontWeight:600}},version:{..._.supportingStyle_tiny_01.base}},be={padding:g.SizesDdsSpacingLocalX025,height:`calc(${g.SizesDdsSpacingLayoutX3} + 2 * ${g.SizesDdsSpacingLocalX025})`,buttonTextColor:c.DdsColorNeutralsGray3,gap:g.SizesDdsSpacingLocalX025},Se={navigationItems:he,logoAndVersion:ye,topBar:be,color:c.DdsColorNeutralsGray1,backgroundColor:c.DdsColorPrimaryBase,gap:g.SizesDdsSpacingLocalX05,dividerColor:c.DdsColorPrimaryLight,padding:g.SizesDdsSpacingLocalX1,width:"264px",mobile:{breakpoint:fe.DdsBreakpointSm,iconColors:c.DdsColorNeutralsGray3}},xe={gap:g.SizesDdsSpacingLocalX1,textColor:c.DdsColorNeutralsGray7,backgroundColor:c.DdsColorNeutralsWhite,borderRadius:W.RadiiDdsBorderRadius3Radius},d={navigation:Se,floatingActionButtons:xe},X=x.createContext({isOpen:!1,setOpen:()=>{}}),V=({children:e})=>{const[r,l]=x.useState(!1);return n(X.Provider,{value:{isOpen:r,setOpen:l},children:e})},G=()=>x.useContext(X);try{V.displayName="AppShellContextProvider",V.__docgenInfo={description:"",displayName:"AppShellContextProvider",props:{}}}catch{}const{navigation:ke}=d,i=ke.navigationItems.item,_e=t.div`
  grid-area: icon;
  display: flex;
  align-items: center;
`,$e=t.span`
  grid-area: text;
`,K=t.div`
  display: flex;
  align-items: center;
  opacity: 0;
  grid-area: chevron;
`,H=t.a`
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
`,Ie=t(H)`
  display: grid;
  align-items: center;
  grid-template-areas: 'icon text chevron';
  grid-template-columns: min-content 1fr min-content;

  &.active ${K} {
    opacity: 1;
  }
`,Ne=t(H)`
  display: flex;
  flex-direction: row;
  align-items: center;

  font-size: ${i.external.fontSize};
  font-style: ${i.external.fontStyle};
  font-family: ${i.external.fontFamily};
  font-weight: ${i.external.fontWeight};
  line-height: ${i.external.lineHeight};
  letter-spacing: ${i.external.letterSpacing};
`,A=({as:e,active:r,icon:l,external:y,children:v,onClick:f,...u})=>{const{setOpen:b}=G(),s=e??"a",I=D=>{f==null||f(D),b(!1)};return y?p(Ne,{as:s,...u,onClick:I,children:[v,n(w,{icon:ce,iconSize:"inherit"})]}):p(Ie,{as:s,...u,onClick:I,className:[r?"active":"",u.className].join(" "),children:[n(_e,{children:l&&n(w,{icon:l})}),n($e,{children:v}),n(K,{children:n(w,{icon:ee})})]})};A.displayName="AppShell.NavItem";try{AppShell.NavItem.displayName="AppShell.NavItem",AppShell.NavItem.__docgenInfo={description:"",displayName:"AppShell.NavItem",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"As | undefined"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"SvgIcon | undefined"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean | undefined"}},external:{defaultValue:null,description:"",name:"external",required:!1,type:{name:"boolean | undefined"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler | undefined"}}}}}catch{}function L(e){switch(e){case"TEST":return{background:"#F957A5",text:"#5E032F"};case"AT":return{background:"#2CC3F2",text:"#064B60"};case"KURS":return{background:"#7AB73D",text:"#2B4116"};case"LOKAL":return{background:"#F2D32C",text:"#695B07"}}}const h="2rem",Ae=t.div`
  background-color: ${({environment:e})=>L(e).background};
  padding: 8px;
  color: ${({environment:e})=>L(e).text};
  width: 100%;
  height: ${h};
  text-align: center;
  font-weight: bolder;
  letter-spacing: 0.15em;
  z-index: 9999;

  position: ${({position:e})=>e};
  top: 0;
  left: 0;
  right: 0;
`,$=({environment:e,bannerPosition:r="fixed"})=>e==="PROD"?null:n(Ae,{environment:e,position:r,children:e});$.displayName="EnvironmentBanner";try{$.displayName="EnvironmentBanner",$.__docgenInfo={description:"",displayName:"EnvironmentBanner",props:{environment:{defaultValue:null,description:`Miljøet som applikasjonen kjører i.
Hvis miljøet er PROD, vises ikke banneren.`,name:"environment",required:!0,type:{name:"enum",value:[{value:'"LOKAL"'},{value:'"TEST"'},{value:'"AT"'},{value:'"KURS"'},{value:'"PROD"'}]}},bannerPosition:{defaultValue:{value:"fixed"},description:"",name:"bannerPosition",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"absolute"'},{value:'"fixed"'}]}}}}}catch{}const Ce=t.div`
  padding-top: ${h};
  position: relative;
`,O=({environment:e,children:r,bannerPosition:l="fixed"})=>e==="PROD"?n(Y,{children:r}):p(Ce,{children:[n($,{environment:e,bannerPosition:l}),r]});O.displayName="EnvironmentBannerProvider";try{O.displayName="EnvironmentBannerProvider",O.__docgenInfo={description:"Viser et banner med miljøet applikasjonen kjører i.",displayName:"EnvironmentBannerProvider",props:{environment:{defaultValue:null,description:`Miljøet som applikasjonen kjører i.
Hvis miljøet er PROD, vises ikke banneren.`,name:"environment",required:!0,type:{name:"enum",value:[{value:'"LOKAL"'},{value:'"TEST"'},{value:'"AT"'},{value:'"KURS"'},{value:'"PROD"'}]}},children:{defaultValue:null,description:"Applikasjonskoden din.",name:"children",required:!0,type:{name:"ReactNode"}},bannerPosition:{defaultValue:{value:"fixed"},description:"",name:"bannerPosition",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"absolute"'},{value:'"fixed"'}]}}}}}catch{}const T=({type:e,...r})=>{switch(e){case"jordskifterett":return n(re,{...r});case"tingrett":return n(ae,{...r});case"lagmannsrett":return n(te,{...r});case"høyesterett":case void 0:return n(ne,{...r})}};try{T.displayName="EmbeteIcon",T.__docgenInfo={description:"",displayName:"EmbeteIcon",props:{type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"jordskifterett"'},{value:'"tingrett"'},{value:'"lagmannsrett"'},{value:'"høyesterett"'}]}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | undefined"}}}}}catch{}const{navigation:j}=d,S=e=>e?j.logoAndVersion.logo.small:j.logoAndVersion.logo,C=t.a`
  font-size: ${({small:e})=>S(e).fontSize};
  font-style: ${({small:e})=>S(e).fontStyle};
  font-family: ${({small:e})=>S(e).fontFamily};
  font-weight: ${({small:e})=>S(e).fontWeight};
  line-height: ${({small:e})=>S(e).lineHeight};
  letter-spacing: ${({small:e})=>S(e).letterSpacing};
  text-align: middle;
`;try{C.displayName="NavigationLogo",C.__docgenInfo={description:"",displayName:"NavigationLogo",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}}}catch{}const{navigation:o,floatingActionButtons:N}=d,U=t.div`
  display: flex;
  align-items: center;
  gap: ${o.topBar.gap};
`,J=t.div`
  display: flex;
  align-items: center;
  gap: ${o.topBar.gap};
`,E=t(ue).attrs({appearance:"borderless",purpose:"secondary"})`
  color: ${o.topBar.buttonTextColor};
  > :first-child {
    font-size: 1.65rem;
  }
  @media (max-width: ${o.mobile.breakpoint}) {
    border: 0;
    box-shadow: none;
    padding: 12px;
    &:hover,
    &:active {
      color: ${o.topBar.buttonTextColor};
      text-decoration-color: ${o.topBar.buttonTextColor};
      box-shadow: none;
    }
    gap: 0;
  }
`,Q=t.span`
  display: none; // Ikke vis tekst på mobil
  width: 0;
`,Be=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${o.topBar.gap};
  width: 100vw;
  height: ${o.topBar.height};
  color: ${o.color};
  background-color: ${o.backgroundColor};
  box-sizing: border-box;
  z-index: 101;

  position: fixed;
  top: ${({environmentBannerActive:e})=>e?h:"0"};
  left: 0;
  right: 0;

  @media (min-width: ${o.mobile.breakpoint}) {
    justify-content: flex-end;
    background-color: transparent;
    margin-left: ${o.width};
    width: calc(100vw - ${o.width});

    pointer-events: none;
    & > * {
      pointer-events: initial;
    }

    ${U} {
      display: none;
    }

    ${J} {
      padding-right: calc(2 * ${o.topBar.gap});
      gap: ${N.gap};
    }

    ${E} {
      background-color: ${N.backgroundColor};
      color: ${N.textColor};
      box-shadow: 8px 16px 32px 0px rgba(0, 0, 0, 0.1);
      border-radius: ${N.borderRadius};

      ${Q} {
        display: unset;
      }
    }
  }
`,P=({user:e,userMenuItems:r,isNavigationOpen:l,onNavigationOpenChange:y,environmentBannerActive:v})=>p(Be,{environmentBannerActive:v,children:[p(U,{children:[n(E,{icon:l?ie:oe,onClick:()=>y(!l)}),n(C,{small:!0,children:"Lovisa"})]}),n(J,{children:p(me,{children:[n(E,{icon:u=>n(T,{...u,type:e.embete.type}),label:n(Q,{children:e.name})}),n(ge,{items:r})]})})]});try{P.displayName="TopBar",P.__docgenInfo={description:"",displayName:"TopBar",props:{user:{defaultValue:null,description:"",name:"user",required:!0,type:{name:"User"}},userMenuItems:{defaultValue:null,description:"",name:"userMenuItems",required:!1,type:{name:"OverflowMenuContextItem[] | undefined"}},isNavigationOpen:{defaultValue:null,description:"",name:"isNavigationOpen",required:!0,type:{name:"boolean"}},onNavigationOpenChange:{defaultValue:null,description:"",name:"onNavigationOpenChange",required:!0,type:{name:"(isOpen: boolean) => void"}},environmentBannerActive:{defaultValue:null,description:"",name:"environmentBannerActive",required:!0,type:{name:"boolean"}}}}}catch{}const{navigation:a}=d,De=t.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - ${a.topBar.height});
  width: 100vw;
  padding: ${a.padding};
  color: ${a.color};
  background-color: ${a.backgroundColor};
  box-sizing: border-box;

  position: fixed;
  top: ${({environmentBannerActive:e})=>e?`calc(${h} + ${a.topBar.height})`:a.topBar.height};
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;

  transition:
    transform 0.2s ease-in-out,
    opacity 0.2s ease-in-out;
  transform: translateX(${({isOpen:e})=>e?"0":"-100%"});
  opacity: ${({isOpen:e})=>e?"1":"0"};

  @media (min-width: ${a.mobile.breakpoint}) {
    height: ${({environmentBannerActive:e})=>e?`calc(100vh - ${h})`:"100vh"};
    top: ${({environmentBannerActive:e})=>e?h:0};
    width: ${a.width};
    position: fixed;

    transform: translateX(0);
    opacity: 1;
  }
`,we=t.div`
  display: none;

  @media (min-width: ${a.mobile.breakpoint}) {
    display: flex;
    flex-direction: column;
    color: ${a.logoAndVersion.color};
    padding: ${a.logoAndVersion.padding};
  }
`,Ve=t.span`
  font-size: ${a.logoAndVersion.version.fontSize};
  font-style: ${a.logoAndVersion.version.fontStyle};
  font-family: ${a.logoAndVersion.version.fontFamily};
  font-weight: ${a.logoAndVersion.version.fontWeight};
  line-height: ${a.logoAndVersion.version.lineHeight};
  letter-spacing: ${a.logoAndVersion.version.letterSpacing};
`,R=t.nav`
  display: flex;
  flex-direction: column;
  gap: ${a.navigationItems.gap};
`,Oe=t.div`
  padding-left: ${a.navigationItems.item.padding};
  padding-right: ${a.navigationItems.item.padding};
`,Te=t(ve)`
  border-color: ${a.dividerColor};
`,q=({version:e,user:r,userMenuItems:l,internal:y,external:v,environmentBannerActive:f})=>{const{isOpen:u,setOpen:b}=G();return x.useEffect(()=>{const s=I=>{I.key==="o"&&b(D=>!D)};return window.addEventListener("keypress",s),()=>window.removeEventListener("keypress",s)}),p("div",{children:[n(P,{user:r,userMenuItems:l,isNavigationOpen:u,onNavigationOpenChange:s=>b(s),environmentBannerActive:f}),p(De,{isOpen:u,environmentBannerActive:f,children:[p(we,{children:[n(C,{children:"Lovisa"}),e!==""&&p(Ve,{children:["v ",e]})]}),p(R,{children:[x.Children.map(y,s=>s.type!==A?(console.warn("Du bruker en React-komponent som ikke er tillat i AppShell-internal. Du kan kun bruke AppShell.NavItem i AppShell-internal."),null):s),v.length>0&&n(Oe,{children:n(Te,{})}),x.Children.map(v,s=>s.type!==A?(console.warn("Du bruker en React-komponent som ikke er tillat i AppShell-external. Du kan kun bruke AppShell.NavItem i AppShell-external."),null):s)]})]})]})};try{R.displayName="NavigationItems",R.__docgenInfo={description:"",displayName:"NavigationItems",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}}}catch{}try{q.displayName="Navigation",q.__docgenInfo={description:"",displayName:"Navigation",props:{version:{defaultValue:null,description:"",name:"version",required:!0,type:{name:"string"}},internal:{defaultValue:null,description:"",name:"internal",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>[]"}},external:{defaultValue:null,description:"",name:"external",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>[]"}},user:{defaultValue:null,description:"",name:"user",required:!0,type:{name:"User"}},userMenuItems:{defaultValue:null,description:"",name:"userMenuItems",required:!1,type:{name:"OverflowMenuContextItem[] | undefined"}},environmentBannerActive:{defaultValue:null,description:"",name:"environmentBannerActive",required:!0,type:{name:"boolean"}}}}}catch{}const Ee=t.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${d.navigation.mobile.breakpoint}) {
    flex-direction: row;
  }
`,Pe=t.main`
  min-height: calc(100vh - ${d.navigation.topBar.height});
  margin-top: ${({environmentBannerActive:e})=>e?`calc(${h} + ${d.navigation.topBar.height})`:d.navigation.topBar.height};
  @media (min-width: ${d.navigation.mobile.breakpoint}) {
    min-height: unset;
    margin-top: ${({environmentBannerActive:e})=>e?h:0};
    margin-left: ${d.navigation.width};
    min-width: calc(100vw - ${d.navigation.width});
    max-width: calc(100vw - ${d.navigation.width});
  }
`,B=({children:e,version:r="",navigation:{internal:l=[],external:y=[]},user:v,userMenuItems:f,environment:u="PROD"})=>{const b=u!=="PROD";return n(V,{children:p(Ee,{children:[n($,{environment:u}),n(q,{user:v,userMenuItems:f,version:r,internal:l,external:y,environmentBannerActive:b}),n(Pe,{environmentBannerActive:b,children:e})]})})};B.displayName="AppShell";try{B.displayName="AppShell",B.__docgenInfo={description:"",displayName:"AppShell",props:{version:{defaultValue:{value:""},description:"Versjon på appen på formatet 0.0.0",name:"version",required:!1,type:{name:"string | undefined"}},navigation:{defaultValue:null,description:"",name:"navigation",required:!0,type:{name:"AppShellNavigationProps"}},user:{defaultValue:null,description:"Den innloggede brukeren.",name:"user",required:!0,type:{name:"User"}},userMenuItems:{defaultValue:null,description:'Menyvalg som skal vises i OverflowMenu knyttet til "bruker"-knappen.',name:"userMenuItems",required:!1,type:{name:"OverflowMenuContextItem[] | undefined"}},environment:{defaultValue:{value:"PROD"},description:'`environment` brukes for å  vise en banner øverst i appen som viser hvilket miljø du er i.\nNår environment er undefined eller `"PROD"` så vises ikke banneret.',name:"environment",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"LOKAL"'},{value:'"TEST"'},{value:'"AT"'},{value:'"KURS"'},{value:'"PROD"'}]}}}}}catch{}const m=B;m.NavItem=A;const Re={title:"dds-components/AppShell",component:m},k=e=>n(m,{version:"1.0.0",user:{embete:{name:"Borgarting Lagmannsrett",type:"høyesterett"},name:"Kari Nordmann"},environment:"PROD",userMenuItems:[{title:"Bytt embete"},{title:"Logg ut"}],navigation:{internal:[n(m.NavItem,{active:!0,href:"#",icon:le,children:"Saker"}),n(m.NavItem,{href:"#",icon:se,children:"Oppgaver"}),n(m.NavItem,{href:"#",icon:de,children:"Avgjørelser"}),n(m.NavItem,{href:"#",icon:pe,children:"Statistikk"})],external:[n(m.NavItem,{href:"#",external:!0,children:"Saker"}),n(m.NavItem,{href:"#",external:!0,children:"Oppgaver"}),n(m.NavItem,{href:"#",external:!0,children:"Avgjørelser"}),n(m.NavItem,{href:"#",external:!0,children:"Statistikk"})]},...e});var z,F,M;k.parameters={...k.parameters,docs:{...(z=k.parameters)==null?void 0:z.docs,source:{originalSource:`(args: Partial<ComponentProps<typeof AppShell>>) => <AppShell version="1.0.0" user={{
  embete: {
    name: 'Borgarting Lagmannsrett',
    type: 'høyesterett'
  },
  name: 'Kari Nordmann'
}} environment="PROD" userMenuItems={[{
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
}} {...args} />`,...(M=(F=k.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};const qe=["Default"],He=Object.freeze(Object.defineProperty({__proto__:null,Default:k,__namedExportsOrder:qe,default:Re},Symbol.toStringTag,{value:"Module"}));export{He as A,k as D};
//# sourceMappingURL=AppShell.stories-781290cf.js.map
