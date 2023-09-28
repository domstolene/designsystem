import{d as Y,a as n,s as t,j as p,F as Z}from"./ddsReferenceTokens-647ce456.js";import{r as x}from"./index-ebeaab24.js";import{_ as ee,b as ne,aF as te,bm as ae,J as re,C as oe,f as ie,aq as le,Q as se,au as de,s as pe}from"./libraryAdd-35e18a4f.js";import{I as w,O as ce}from"./Icon-42793503.js";import{B as ue}from"./Button-09f75747.js";import{O as me}from"./OverflowMenuGroup-f2dacde7.js";import{O as ge}from"./OverflowMenu-9c02bbdc.js";import{D as ve}from"./Divider-97c7888f.js";const{colors:c,spacing:g,fontPackages:_,borderRadius:X,breakpoints:he}=Y,fe={gap:g.SizesDdsSpacingLocalX05,item:{..._.body_sans_02.base,color:c.DdsColorNeutralsGray1,borderRadius:X.RadiiDdsBorderRadius3Radius,padding:g.SizesDdsSpacingLocalX075,gap:g.SizesDdsSpacingLocalX05,external:{..._.body_sans_01.base},hover:{backgroundColor:c.DdsColorPrimaryDark},active:{color:c.DdsColorNeutralsWhite,backgroundColor:c.DdsColorPrimaryDarker}}},ye={padding:"36px 24px",color:c.DdsColorNeutralsWhite,logo:{..._.heading_sans_05.base,fontWeight:700,small:{..._.heading_sans_03.base,fontWeight:600}},version:{..._.supportingStyle_tiny_01.base}},be={padding:g.SizesDdsSpacingLocalX025,height:`calc(${g.SizesDdsSpacingLayoutX3} + 2 * ${g.SizesDdsSpacingLocalX025})`,buttonTextColor:c.DdsColorNeutralsGray3,gap:g.SizesDdsSpacingLocalX025},Se={navigationItems:fe,logoAndVersion:ye,topBar:be,color:c.DdsColorNeutralsGray1,backgroundColor:c.DdsColorPrimaryBase,gap:g.SizesDdsSpacingLocalX05,dividerColor:c.DdsColorPrimaryLight,padding:g.SizesDdsSpacingLocalX1,width:"264px",mobile:{breakpoint:he.DdsBreakpointSm,iconColors:c.DdsColorNeutralsGray3}},xe={gap:g.SizesDdsSpacingLocalX1,textColor:c.DdsColorNeutralsGray7,backgroundColor:c.DdsColorNeutralsWhite,borderRadius:X.RadiiDdsBorderRadius3Radius},d={navigation:Se,floatingActionButtons:xe},G=x.createContext({isOpen:!1,setOpen:()=>{}}),V=({children:e})=>{const[r,l]=x.useState(!1);return n(G.Provider,{value:{isOpen:r,setOpen:l},children:e})},W=()=>x.useContext(G);try{V.displayName="AppShellContextProvider",V.__docgenInfo={description:"",displayName:"AppShellContextProvider",props:{}}}catch{}const{navigation:ke}=d,o=ke.navigationItems.item,_e=t.div`
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

  font-size: ${o.external.fontSize};
  font-style: ${o.external.fontStyle};
  font-family: ${o.external.fontFamily};
  font-weight: ${o.external.fontWeight};
  line-height: ${o.external.lineHeight};
  letter-spacing: ${o.external.letterSpacing};
`,A=({as:e,active:r,icon:l,external:y,children:v,onClick:h,...u})=>{const{setOpen:b}=W(),s=e??"a",I=D=>{h==null||h(D),b(!1)};return y?p(Ne,{as:s,...u,onClick:I,children:[v,n(w,{icon:ce,iconSize:"inherit"})]}):p(Ie,{as:s,...u,onClick:I,className:[r?"active":"",u.className].join(" "),children:[n(_e,{children:l&&n(w,{icon:l})}),n($e,{children:v}),n(K,{children:n(w,{icon:ee})})]})};A.displayName="AppShell.NavItem";try{AppShell.NavItem.displayName="AppShell.NavItem",AppShell.NavItem.__docgenInfo={description:"",displayName:"AppShell.NavItem",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"As | undefined"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"SvgIcon | undefined"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean | undefined"}},external:{defaultValue:null,description:"",name:"external",required:!1,type:{name:"boolean | undefined"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler | undefined"}}}}}catch{}function q(e){switch(e){case"TEST":return{background:"#F957A5",text:"#5E032F"};case"AT":return{background:"#2CC3F2",text:"#064B60"};case"KURS":return{background:"#7AB73D",text:"#2B4116"};case"LOKAL":return{background:"#F2D32C",text:"#695B07"}}}const f="2rem",Ae=t.div`
  background-color: ${({environment:e})=>q(e).background};
  padding: 8px;
  color: ${({environment:e})=>q(e).text};
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
`,$=({environment:e,bannerPosition:r="fixed"})=>e==="PROD"?null:n(Ae,{environment:e,position:r,children:e});$.displayName="EnvironmentBanner";try{$.displayName="EnvironmentBanner",$.__docgenInfo={description:"",displayName:"EnvironmentBanner",props:{environment:{defaultValue:null,description:`Miljøet som applikasjonen kjører i.
Hvis miljøet er PROD, vises ikke banneren.`,name:"environment",required:!0,type:{name:"enum",value:[{value:'"LOKAL"'},{value:'"TEST"'},{value:'"AT"'},{value:'"KURS"'},{value:'"PROD"'}]}},bannerPosition:{defaultValue:{value:"fixed"},description:"",name:"bannerPosition",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"absolute"'},{value:'"fixed"'}]}}}}}catch{}const Ce=t.div`
  padding-top: ${f};
  position: relative;
`,O=({environment:e,children:r,bannerPosition:l="fixed"})=>e==="PROD"?n(Z,{children:r}):p(Ce,{children:[n($,{environment:e,bannerPosition:l}),r]});O.displayName="EnvironmentBannerProvider";try{O.displayName="EnvironmentBannerProvider",O.__docgenInfo={description:"Viser et banner med miljøet applikasjonen kjører i.",displayName:"EnvironmentBannerProvider",props:{environment:{defaultValue:null,description:`Miljøet som applikasjonen kjører i.
Hvis miljøet er PROD, vises ikke banneren.`,name:"environment",required:!0,type:{name:"enum",value:[{value:'"LOKAL"'},{value:'"TEST"'},{value:'"AT"'},{value:'"KURS"'},{value:'"PROD"'}]}},children:{defaultValue:null,description:"Applikasjonskoden din.",name:"children",required:!0,type:{name:"ReactNode"}},bannerPosition:{defaultValue:{value:"fixed"},description:"",name:"bannerPosition",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"absolute"'},{value:'"fixed"'}]}}}}}catch{}const E=({type:e,...r})=>{switch(e){case"jordskifterett":return n(re,{...r});case"tingrett":return n(ae,{...r});case"lagmannsrett":return n(te,{...r});case"høyesterett":case void 0:return n(ne,{...r})}};try{E.displayName="EmbeteIcon",E.__docgenInfo={description:"",displayName:"EmbeteIcon",props:{type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"jordskifterett"'},{value:'"tingrett"'},{value:'"lagmannsrett"'},{value:'"høyesterett"'}]}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | undefined"}}}}}catch{}const{navigation:j}=d,S=e=>e?j.logoAndVersion.logo.small:j.logoAndVersion.logo,C=t.a`
  font-size: ${({small:e})=>S(e).fontSize};
  font-style: ${({small:e})=>S(e).fontStyle};
  font-family: ${({small:e})=>S(e).fontFamily};
  font-weight: ${({small:e})=>S(e).fontWeight};
  line-height: ${({small:e})=>S(e).lineHeight};
  letter-spacing: ${({small:e})=>S(e).letterSpacing};
  text-align: middle;
`;try{C.displayName="NavigationLogo",C.__docgenInfo={description:"",displayName:"NavigationLogo",props:{small:{defaultValue:null,description:"",name:"small",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const{navigation:i,floatingActionButtons:N}=d,U=t.div`
  display: flex;
  align-items: center;
  gap: ${i.topBar.gap};
`,J=t.div`
  display: flex;
  align-items: center;
  gap: ${i.topBar.gap};
`,P=t(ue).attrs({appearance:"borderless",purpose:"secondary"})`
  color: ${i.topBar.buttonTextColor};
  > :first-child {
    font-size: 1.65rem;
  }
  @media (max-width: ${i.mobile.breakpoint}) {
    border: 0;
    box-shadow: none;
    padding: 12px;
    &:hover,
    &:active {
      color: ${i.topBar.buttonTextColor};
      text-decoration-color: ${i.topBar.buttonTextColor};
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
  gap: ${i.topBar.gap};
  width: 100vw;
  height: ${i.topBar.height};
  color: ${i.color};
  background-color: ${i.backgroundColor};
  box-sizing: border-box;
  z-index: 101;

  position: fixed;
  top: ${({environmentBannerActive:e})=>e?f:"0"};
  left: 0;
  right: 0;

  @media (min-width: ${i.mobile.breakpoint}) {
    justify-content: flex-end;
    background-color: transparent;
    margin-left: ${i.width};
    width: calc(100vw - ${i.width});

    pointer-events: none;
    & > * {
      pointer-events: initial;
    }

    ${U} {
      display: none;
    }

    ${J} {
      padding-right: calc(2 * ${i.topBar.gap});
      gap: ${N.gap};
    }

    ${P} {
      background-color: ${N.backgroundColor};
      color: ${N.textColor};
      box-shadow: 8px 16px 32px 0px rgba(0, 0, 0, 0.1);
      border-radius: ${N.borderRadius};

      ${Q} {
        display: unset;
      }
    }
  }
`,R=({user:e,userMenuItems:r,isNavigationOpen:l,onNavigationOpenChange:y,environmentBannerActive:v})=>p(Be,{environmentBannerActive:v,children:[p(U,{children:[n(P,{icon:l?oe:ie,onClick:()=>y(!l)}),n(C,{small:!0,children:"Lovisa"})]}),n(J,{children:p(me,{children:[n(P,{icon:u=>n(E,{...u,type:e.embete.type}),label:n(Q,{children:e.name})}),n(ge,{items:r})]})})]});try{R.displayName="TopBar",R.__docgenInfo={description:"",displayName:"TopBar",props:{user:{defaultValue:null,description:"",name:"user",required:!0,type:{name:"User"}},userMenuItems:{defaultValue:null,description:"",name:"userMenuItems",required:!1,type:{name:"OverflowMenuContextItem[] | undefined"}},isNavigationOpen:{defaultValue:null,description:"",name:"isNavigationOpen",required:!0,type:{name:"boolean"}},onNavigationOpenChange:{defaultValue:null,description:"",name:"onNavigationOpenChange",required:!0,type:{name:"(isOpen: boolean) => void"}},environmentBannerActive:{defaultValue:null,description:"",name:"environmentBannerActive",required:!0,type:{name:"boolean"}}}}}catch{}const{navigation:a}=d,De=t.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - ${a.topBar.height});
  width: 100vw;
  padding: ${a.padding};
  color: ${a.color};
  background-color: ${a.backgroundColor};
  box-sizing: border-box;

  position: fixed;
  top: ${({environmentBannerActive:e})=>e?`calc(${f} + ${a.topBar.height})`:a.topBar.height};
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;

  transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
  transform: translateX(${({isOpen:e})=>e?"0":"-100%"});
  opacity: ${({isOpen:e})=>e?"1":"0"};

  @media (min-width: ${a.mobile.breakpoint}) {
    height: ${({environmentBannerActive:e})=>e?`calc(100vh - ${f})`:"100vh"};
    top: ${({environmentBannerActive:e})=>e?f:0};
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
`,L=t.nav`
  display: flex;
  flex-direction: column;
  gap: ${a.navigationItems.gap};
`,Oe=t.div`
  padding-left: ${a.navigationItems.item.padding};
  padding-right: ${a.navigationItems.item.padding};
`,Ee=t(ve)`
  border-color: ${a.dividerColor};
`,T=({version:e,user:r,userMenuItems:l,internal:y,external:v,environmentBannerActive:h})=>{const{isOpen:u,setOpen:b}=W();return x.useEffect(()=>{const s=I=>{I.key==="o"&&b(D=>!D)};return window.addEventListener("keypress",s),()=>window.removeEventListener("keypress",s)}),p("div",{children:[n(R,{user:r,userMenuItems:l,isNavigationOpen:u,onNavigationOpenChange:s=>b(s),environmentBannerActive:h}),p(De,{isOpen:u,environmentBannerActive:h,children:[p(we,{children:[n(C,{children:"Lovisa"}),e!==""&&p(Ve,{children:["v ",e]})]}),p(L,{children:[x.Children.map(y,s=>s.type!==A?(console.warn("Du bruker en React-komponent som ikke er tillat i AppShell-internal. Du kan kun bruke AppShell.NavItem i AppShell-internal."),null):s),v.length>0&&n(Oe,{children:n(Ee,{})}),x.Children.map(v,s=>s.type!==A?(console.warn("Du bruker en React-komponent som ikke er tillat i AppShell-external. Du kan kun bruke AppShell.NavItem i AppShell-external."),null):s)]})]})]})};try{L.displayName="NavigationItems",L.__docgenInfo={description:"",displayName:"NavigationItems",props:{}}}catch{}try{T.displayName="Navigation",T.__docgenInfo={description:"",displayName:"Navigation",props:{version:{defaultValue:null,description:"",name:"version",required:!0,type:{name:"string"}},internal:{defaultValue:null,description:"",name:"internal",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>[]"}},external:{defaultValue:null,description:"",name:"external",required:!0,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>[]"}},user:{defaultValue:null,description:"",name:"user",required:!0,type:{name:"User"}},userMenuItems:{defaultValue:null,description:"",name:"userMenuItems",required:!1,type:{name:"OverflowMenuContextItem[] | undefined"}},environmentBannerActive:{defaultValue:null,description:"",name:"environmentBannerActive",required:!0,type:{name:"boolean"}}}}}catch{}const Pe=t.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${d.navigation.mobile.breakpoint}) {
    flex-direction: row;
  }
`,Re=t.main`
  min-height: calc(100vh - ${d.navigation.topBar.height});
  margin-top: ${({environmentBannerActive:e})=>e?`calc(${f} + ${d.navigation.topBar.height})`:d.navigation.topBar.height};
  @media (min-width: ${d.navigation.mobile.breakpoint}) {
    min-height: unset;
    margin-top: ${({environmentBannerActive:e})=>e?f:0};
    margin-left: ${d.navigation.width};
    min-width: calc(100vw - ${d.navigation.width});
    max-width: calc(100vw - ${d.navigation.width});
  }
`,B=({children:e,version:r="",navigation:{internal:l=[],external:y=[]},user:v,userMenuItems:h,environment:u="PROD"})=>{const b=u!=="PROD";return n(V,{children:p(Pe,{children:[n($,{environment:u}),n(T,{user:v,userMenuItems:h,version:r,internal:l,external:y,environmentBannerActive:b}),n(Re,{environmentBannerActive:b,children:e})]})})};B.displayName="AppShell";try{B.displayName="AppShell",B.__docgenInfo={description:"",displayName:"AppShell",props:{version:{defaultValue:{value:""},description:"Versjon på appen på formatet 0.0.0",name:"version",required:!1,type:{name:"string | undefined"}},navigation:{defaultValue:null,description:"",name:"navigation",required:!0,type:{name:"AppShellNavigationProps"}},user:{defaultValue:null,description:"Den innloggede brukeren.",name:"user",required:!0,type:{name:"User"}},userMenuItems:{defaultValue:null,description:'Menyvalg som skal vises i OverflowMenu knyttet til "bruker"-knappen.',name:"userMenuItems",required:!1,type:{name:"OverflowMenuContextItem[] | undefined"}},environment:{defaultValue:{value:"PROD"},description:'`environment` brukes for å  vise en banner øverst i appen som viser hvilket miljø du er i.\nNår environment er undefined eller `"PROD"` så vises ikke banneret.',name:"environment",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"LOKAL"'},{value:'"TEST"'},{value:'"AT"'},{value:'"KURS"'},{value:'"PROD"'}]}}}}}catch{}const m=B;m.NavItem=A;const Le={title:"dds-components/AppShell",component:m},k=e=>n(m,{version:"1.0.0",user:{embete:{name:"Borgarting Lagmannsrett",type:"høyesterett"},name:"Kari Nordmann"},environment:"PROD",userMenuItems:[{title:"Bytt embete"},{title:"Logg ut"}],navigation:{internal:[n(m.NavItem,{active:!0,href:"#",icon:le,children:"Saker"}),n(m.NavItem,{href:"#",icon:se,children:"Oppgaver"}),n(m.NavItem,{href:"#",icon:de,children:"Avgjørelser"}),n(m.NavItem,{href:"#",icon:pe,children:"Statistikk"})],external:[n(m.NavItem,{href:"#",external:!0,children:"Saker"}),n(m.NavItem,{href:"#",external:!0,children:"Oppgaver"}),n(m.NavItem,{href:"#",external:!0,children:"Avgjørelser"}),n(m.NavItem,{href:"#",external:!0,children:"Statistikk"})]},...e});var z,F,M;k.parameters={...k.parameters,docs:{...(z=k.parameters)==null?void 0:z.docs,source:{originalSource:`(args: Partial<ComponentProps<typeof AppShell>>) => <AppShell version="1.0.0" user={{
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
}} {...args} />`,...(M=(F=k.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};const Te=["Default"],Ke=Object.freeze(Object.defineProperty({__proto__:null,Default:k,__namedExportsOrder:Te,default:Le},Symbol.toStringTag,{value:"Module"}));export{Ke as A,k as D};
//# sourceMappingURL=AppShell.stories-f6f3f35a.js.map
