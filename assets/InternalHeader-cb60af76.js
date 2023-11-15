import{a,j as y}from"./jsx-runtime-e43ccb36.js";import{r as p}from"./index-1b03fe98.js";import"./Caption-7324954d.js";import"./Heading-a143a4ab.js";import"./Label-e6c412e2.js";import"./Legend-8686145c.js";import"./Link-0af95a08.js";import"./Paragraph-67d8f149.js";import"./TextOverflowEllipsis-5f7b5b23.js";import{a as te,T as H}from"./Typography-37e894bc.js";import{d as ie,s as n,n as $}from"./ddsReferenceTokens-cf345c8b.js";import{s as oe,g as de}from"./BaseComponentProps-217bcb03.js";import{O as se}from"./OverflowMenu-ff562f79.js";import{f as le}from"./Input.styles-9955857c.js";import{f as pe,M as ue}from"./libraryAdd-792d55f1.js";import"./Icon-96508a26.js";import{B as ce}from"./Button-8ec36c15.js";const{border:j,colors:i,spacing:r}=ie,S=`${j.BordersDdsBorderStyleLightStrokeWeight} ${j.BordersDdsBorderStyleLightStroke} solid `,me={navLink:"bodySans01"},fe={base:{color:i.DdsColorNeutralsGray9,backgroundColor:i.DdsColorNeutralsWhite,padding:`${r.SizesDdsSpacingLocalX075} ${r.SizesDdsSpacingLocalX15}`},hover:{color:i.DdsColorInteractiveDark},active:{color:i.DdsColorInteractiveDark},current:{color:i.DdsColorInteractiveDarkest,backgroundColor:i.DdsColorPrimaryLightest}},ge={backgroundColor:i.DdsColorNeutralsWhite},ye={padding:`${r.SizesDdsSpacingLocalX1} ${r.SizesDdsSpacingLocalX15}`},he={padding:`${r.SizesDdsSpacingLocalX1} ${r.SizesDdsSpacingLocalX15}`,borderRight:S},_e={borderBottom:S,paddingRight:r.SizesDdsSpacingLocalX1,hasContextMenu:{paddingRight:r.SizesDdsSpacingLayoutX4}},ve={borderBottom:S},be={right:r.SizesDdsSpacingLocalX075,top:r.SizesDdsSpacingLocalX025},O={navLink:fe,outerContainer:ge,applicationNameWrapper:ye,lovisaWrapper:he,banner:_e,navigation:ve,contextGroup:be},{outerContainer:ke,applicationNameWrapper:Ne,lovisaWrapper:z,banner:h,navigation:Ce,contextGroup:R}=O,_=n.div`
  position: relative;
  *::selection {
    ${oe}
  }
  background-color: ${ke.backgroundColor};
`,v=n.div`
  position: relative;
  display: flex;
  align-items: center;
  border-bottom: ${h.borderBottom};
  padding-right: ${h.paddingRight};
  ${({hasContextMenu:e})=>e&&$`
      padding-right: ${h.hasContextMenu.paddingRight};
    `}
`,b=n.div`
  display: flex;
`,k=n.div`
  display: flex;
  align-items: center;
  padding: ${Ne.padding};
`,N=n.div`
  padding: ${z.padding};
  border-right: ${z.borderRight};
`,C=n.nav`
  border-bottom: ${Ce.borderBottom};
`,L=n.ul`
  box-sizing: border-box;
  display: flex;
  ${({smallScreen:e})=>e&&$`
      flex-direction: column;
    `}
  list-style-type: none;
  padding: 0;
  margin: 0;
`,V=n.div`
  position: absolute;
  top: ${R.top};
  right: ${R.right};
`,T=n(se)`
  max-height: calc(100vh - 110px);
`;try{_.displayName="OuterContainer",_.__docgenInfo={description:"",displayName:"OuterContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}}}catch{}try{v.displayName="BannerWrapper",v.__docgenInfo={description:"",displayName:"BannerWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}}}catch{}try{b.displayName="BannerLeftWrapper",b.__docgenInfo={description:"",displayName:"BannerLeftWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}}}catch{}try{k.displayName="ApplicationNameWrapper",k.__docgenInfo={description:"",displayName:"ApplicationNameWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}}}catch{}try{N.displayName="LovisaWrapper",N.__docgenInfo={description:"",displayName:"LovisaWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}}}catch{}try{C.displayName="Navigation",C.__docgenInfo={description:"",displayName:"Navigation",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}}}catch{}try{L.displayName="NavigationList",L.__docgenInfo={description:"",displayName:"NavigationList",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}}}catch{}try{V.displayName="ContextMenuGroup",V.__docgenInfo={description:"",displayName:"ContextMenuGroup",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}}}catch{}try{T.displayName="StyledOverflowMenu",T.__docgenInfo={description:"",displayName:"StyledOverflowMenu",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}}}catch{}const{navLink:t}=O,q=n.a`
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
  ${te(me.navLink)}
  &:hover {
    color: ${t.hover.color};
  }
  &:active {
    color: ${t.active.color};
  }
  &:focus-visible,
  &.focus-visible {
    ${le};
  }
  ${({isCurrent:e})=>e&&$`
      color: ${t.current.color};
      background-color: ${t.current.backgroundColor};
      &:hover {
        color: ${t.current.color};
      }
    `}
`,W=p.forwardRef(({title:e,isCurrent:o,...l},d)=>{const s={ref:d,isCurrent:o,...l};return a(q,{...s,"aria-current":o?"page":void 0,children:e})});try{q.displayName="Link",q.__docgenInfo={description:"",displayName:"Link",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}}}catch{}try{W.displayName="NavigationItem",W.__docgenInfo={description:"",displayName:"NavigationItem",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},isCurrent:{defaultValue:null,description:"",name:"isCurrent",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const Le=n.li`
  box-sizing: border-box;
`,x=p.forwardRef(({children:e,...o},l)=>{const d={ref:l,...o};return a(Le,{...d,children:e})});try{x.displayName="InternalHeaderListItem",x.__docgenInfo={description:"",displayName:"InternalHeaderListItem",props:{}}}catch{}const I=e=>{const{applicationDesc:o,applicationName:l,smallScreen:d,navigationElements:s,contextMenuElements:u,currentPageHref:X,userProps:D,onCurrentPageChange:w,id:G,className:U,htmlProps:F,...J}=e,[c,M]=p.useState(!0),[K,Q]=p.useState(X),A=p.useRef(null),Y=f=>{Q(f),w&&w()},Z=()=>{M(!c)},ee=()=>M(!0),E=!!s&&s.length>0,P=!!u&&u.length>0,m=d&&E,ae=E&&!d?a(C,{"aria-label":"sidenavigasjon",children:a(L,{children:s.map((f,ne)=>{const{href:g,...re}=f;return a(x,{children:a(W,{href:g,...re,isCurrent:g===K,onClick:()=>Y(g)})},ne)})})}):null,B=P||!!D||m;return y(_,{...de(G,U,F,J),children:[a(v,{hasContextMenu:B,children:y(b,{children:[a(N,{children:a(H,{typographyType:"bodySans02",bold:!0,as:"span",children:l})}),a(k,{children:a(H,{typographyType:"bodySans02",as:"span",children:o})})]})}),ae,B&&y(V,{children:[a(ce,{ref:A,icon:m?pe:ue,appearance:"borderless",purpose:"secondary",onClick:Z,"aria-haspopup":"menu","aria-expanded":c?void 0:!0,"aria-label":"åpne meny"}),a(T,{isOpen:!c,onClose:ee,anchorRef:A,navItems:m?s:void 0,items:P?u:void 0,userProps:D})]})]})};I.displayName="InternalHeader";try{I.displayName="InternalHeader",I.__docgenInfo={description:"",displayName:"InternalHeader",props:{applicationName:{defaultValue:null,description:"Navn på applikasjonen.",name:"applicationName",required:!1,type:{name:"string | undefined"}},applicationDesc:{defaultValue:null,description:"Beskrivelse på applikasjonen ellen tittel på en underside. Tilgjengelig fram til Lovisa Next kommer.",name:"applicationDesc",required:!1,type:{name:"string | undefined"}},smallScreen:{defaultValue:null,description:"Indikerer om versjonen for små skjermer skal vises.",name:"smallScreen",required:!1,type:{name:"boolean | undefined"}},userProps:{defaultValue:null,description:"Info om brukeren. Dukker opp som punkt på toppen av kontekstmenyen med tekst oppgitt i name. Blir en lenke hvis href er oppgitt.",name:"userProps",required:!1,type:{name:"InternaHeaderUserProps | undefined"}},navigationElements:{defaultValue:null,description:"Lenker som skal vises i navigasjonsmenyen.",name:"navigationElements",required:!1,type:{name:"NavigationLinkProps[] | undefined"}},contextMenuElements:{defaultValue:null,description:"Lenker eller knapper som skal vises i kontekstmenyen. Støtter ikon i tillegg til tekst.",name:"contextMenuElements",required:!1,type:{name:"ContextMenuElementProps[] | undefined"}},currentPageHref:{defaultValue:null,description:"URL til siden i navigasjonen brukeren er på. Gir highlight til navigasjonselementet i navigationElements med samme URL.",name:"currentPageHref",required:!1,type:{name:"string | undefined"}},onCurrentPageChange:{defaultValue:null,description:"Ekstra logikk som kjøres når currentPage endres.",name:"onCurrentPageChange",required:!1,type:{name:"(() => void) | undefined"}},htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:"HTMLAttributes<HTMLDivElement> | undefined"}}}}}catch{}export{I};
//# sourceMappingURL=InternalHeader-cb60af76.js.map
