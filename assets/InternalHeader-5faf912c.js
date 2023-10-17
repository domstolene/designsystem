import{d as ae,s as r,A as D,a as n,j as v}from"./ddsReferenceTokens-ceb64027.js";import{r as p}from"./index-1b03fe98.js";import"./Caption-d066edab.js";import"./Heading-d8600f49.js";import"./Label-10c93eb5.js";import"./Legend-0cba57ca.js";import"./Link-7a88da71.js";import"./Paragraph-5ad16720.js";import"./TextOverflowEllipsis-e584ab25.js";import{a as oe,T}from"./Typography-56baa34a.js";import{s as ie,g as se}from"./BaseComponentProps-d435d0d0.js";import{O as le}from"./OverflowMenu-1c15e1b8.js";import{f as de}from"./Input.styles-82cfcbdb.js";import{f as pe,M as ce}from"./libraryAdd-21442db5.js";import"./Icon-db6dd7fc.js";import{B as ue}from"./Button-2c1b8733.js";const{border:R,colors:o,spacing:t}=ae,P=`${R.BordersDdsBorderStyleLightStrokeWeight} ${R.BordersDdsBorderStyleLightStroke} solid `,me={navLink:"bodySans01"},ge={base:{color:o.DdsColorNeutralsGray9,backgroundColor:o.DdsColorNeutralsWhite,padding:`${t.SizesDdsSpacingLocalX075} ${t.SizesDdsSpacingLocalX15}`},hover:{color:o.DdsColorInteractiveDark},active:{color:o.DdsColorInteractiveDark},current:{color:o.DdsColorInteractiveDarkest,backgroundColor:o.DdsColorPrimaryLightest}},fe={backgroundColor:o.DdsColorNeutralsWhite},ve={padding:`${t.SizesDdsSpacingLocalX1} ${t.SizesDdsSpacingLocalX15}`},ye={padding:`${t.SizesDdsSpacingLocalX1} ${t.SizesDdsSpacingLocalX15}`,borderRight:P},_e={borderBottom:P,paddingRight:t.SizesDdsSpacingLocalX1,hasContextMenu:{paddingRight:t.SizesDdsSpacingLayoutX4}},ke={borderBottom:P},he={right:t.SizesDdsSpacingLocalX075,top:t.SizesDdsSpacingLocalX025},G={navLink:ge,outerContainer:fe,applicationNameWrapper:ve,lovisaWrapper:ye,banner:_e,navigation:ke,contextGroup:he},{outerContainer:be,applicationNameWrapper:Ce,lovisaWrapper:w,banner:y,navigation:Ne,contextGroup:z}=G,_=r.div`
  position: relative;
  *::selection {
    ${ie}
  }
  background-color: ${be.backgroundColor};
`,k=r.div`
  position: relative;
  display: flex;
  align-items: center;
  border-bottom: ${y.borderBottom};
  padding-right: ${y.paddingRight};
  ${({hasContextMenu:e})=>e&&D`
      padding-right: ${y.hasContextMenu.paddingRight};
    `}
`,h=r.div`
  display: flex;
`,b=r.div`
  display: flex;
  align-items: center;
  padding: ${Ce.padding};
`,C=r.div`
  padding: ${w.padding};
  border-right: ${w.borderRight};
`,N=r.nav`
  border-bottom: ${Ne.borderBottom};
`,L=r.ul`
  box-sizing: border-box;
  display: flex;
  ${({smallScreen:e})=>e&&D`
      flex-direction: column;
    `}
  list-style-type: none;
  padding: 0;
  margin: 0;
`,S=r.div`
  position: absolute;
  top: ${z.top};
  right: ${z.right};
`,I=r(le)`
  max-height: calc(100vh - 110px);
`;try{_.displayName="OuterContainer",_.__docgenInfo={description:"",displayName:"OuterContainer",props:{}}}catch{}try{k.displayName="BannerWrapper",k.__docgenInfo={description:"",displayName:"BannerWrapper",props:{hasContextMenu:{defaultValue:null,description:"",name:"hasContextMenu",required:!1,type:{name:"boolean | undefined"}}}}}catch{}try{h.displayName="BannerLeftWrapper",h.__docgenInfo={description:"",displayName:"BannerLeftWrapper",props:{}}}catch{}try{b.displayName="ApplicationNameWrapper",b.__docgenInfo={description:"",displayName:"ApplicationNameWrapper",props:{}}}catch{}try{C.displayName="LovisaWrapper",C.__docgenInfo={description:"",displayName:"LovisaWrapper",props:{}}}catch{}try{N.displayName="Navigation",N.__docgenInfo={description:"",displayName:"Navigation",props:{}}}catch{}try{L.displayName="NavigationList",L.__docgenInfo={description:"",displayName:"NavigationList",props:{smallScreen:{defaultValue:null,description:"Indikerer om versjonen for små skjermer skal vises.",name:"smallScreen",required:!1,type:{name:"boolean | undefined"}}}}}catch{}try{S.displayName="ContextMenuGroup",S.__docgenInfo={description:"",displayName:"ContextMenuGroup",props:{}}}catch{}try{I.displayName="StyledOverflowMenu",I.__docgenInfo={description:"",displayName:"StyledOverflowMenu",props:{onClose:{defaultValue:null,description:"Callback for å lukke menyen. **OBS!** nødvendig kun hvis `<OverflowMenuGroup />` ikke brukes.",name:"onClose",required:!1,type:{name:"(() => void) | undefined"}},htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:"HTMLAttributes<HTMLDivElement> | undefined"}},userProps:{defaultValue:null,description:"Eget element for brukernavn, kan være interaktivt eller statisk. Ligger alltid på toppen av menyen.",name:"userProps",required:!1,type:{name:"UserProps | undefined"}},offset:{defaultValue:null,description:"Avstand fra anchor-elementet i px.",name:"offset",required:!1,type:{name:"number | undefined"}},placement:{defaultValue:null,description:"Plassering av menyen i forhold til anchor-elementet.",name:"placement",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"left"'},{value:'"right"'},{value:'"bottom"'},{value:'"top"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},onToggle:{defaultValue:null,description:"Callback for å toggle menyen. **OBS!** nødvendig kun hvis `<OverflowMenuGroup />` ikke brukes.",name:"onToggle",required:!1,type:{name:"(() => void) | undefined"}},isOpen:{defaultValue:null,description:"Spesifiserer om menyen skal vises. **OBS!** nødvendig kun hvis `<OverflowMenuGroup />` ikke brukes.",name:"isOpen",required:!1,type:{name:"boolean | undefined"}},items:{defaultValue:null,description:"Lenker eller knapper som skal vises i menyen. Støtter ikon i tillegg til tekst.",name:"items",required:!1,type:{name:"OverflowMenuContextItem[] | undefined"}},navItems:{defaultValue:null,description:"Navigasjonslenker, brukes hvis navigasjonen skal ligge i menyen (f.eks. ved liten skjerm o.l.).",name:"navItems",required:!1,type:{name:"OverflowMenuLinkItem[] | undefined"}},anchorRef:{defaultValue:null,description:"Ref til elementet som styrer menyen. **OBS!** nødvendig kun hvis ``<OverflowMenuGroup />` ikke brukes.",name:"anchorRef",required:!1,type:{name:"RefObject<HTMLButtonElement> | undefined"}}}}}catch{}const{navLink:a}=G,x=r.a`
  display: flex;
  align-items: center;
  height: 100%;
  box-sizing: border-box;
  text-decoration: none;
  @media (prefers-reduced-motion: no-preference) {
    transition: background-color 0.2s;
  }
  color: ${a.base.color};
  background-color: ${a.base.backgroundColor};
  padding: ${a.base.padding};
  ${oe(me.navLink)}
  &:hover {
    color: ${a.hover.color};
  }
  &:active {
    color: ${a.active.color};
  }
  &:focus-visible,
  &.focus-visible {
    ${de};
  }
  ${({isCurrent:e})=>e&&D`
      color: ${a.current.color};
      background-color: ${a.current.backgroundColor};
      &:hover {
        color: ${a.current.color};
      }
    `}
`,M=p.forwardRef(({title:e,isCurrent:i,...d},s)=>{const l={ref:s,isCurrent:i,...d};return n(x,{...l,"aria-current":i?"page":void 0,children:e})});try{x.displayName="Link",x.__docgenInfo={description:"",displayName:"Link",props:{isCurrent:{defaultValue:null,description:"",name:"isCurrent",required:!1,type:{name:"boolean | undefined"}}}}}catch{}try{M.displayName="NavigationItem",M.__docgenInfo={description:"",displayName:"NavigationItem",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},isCurrent:{defaultValue:null,description:"",name:"isCurrent",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const Le=r.li`
  box-sizing: border-box;
`,$=p.forwardRef(({children:e,...i},d)=>{const s={ref:d,...i};return n(Le,{...s,children:e})});try{$.displayName="InternalHeaderListItem",$.__docgenInfo={description:"",displayName:"InternalHeaderListItem",props:{}}}catch{}const E=e=>{const{applicationDesc:i,applicationName:d,smallScreen:s,navigationElements:l,contextMenuElements:c,currentPageHref:X,userProps:V,onCurrentPageChange:B,id:A,className:F,htmlProps:U,...J}=e,[u,q]=p.useState(!0),[K,Q]=p.useState(X),O=p.useRef(null),Y=g=>{Q(g),B&&B()},Z=()=>{q(!u)},ee=()=>q(!0),W=!!l&&l.length>0,H=!!c&&c.length>0,m=s&&W,ne=W&&!s?n(N,{"aria-label":"sidenavigasjon",children:n(L,{children:l.map((g,re)=>{const{href:f,...te}=g;return n($,{children:n(M,{href:f,...te,isCurrent:f===K,onClick:()=>Y(f)})},re)})})}):null,j=H||!!V||m;return v(_,{...se(A,F,U,J),children:[n(k,{hasContextMenu:j,children:v(h,{children:[n(C,{children:n(T,{typographyType:"bodySans02",bold:!0,as:"span",children:d})}),n(b,{children:n(T,{typographyType:"bodySans02",as:"span",children:i})})]})}),ne,j&&v(S,{children:[n(ue,{ref:O,icon:m?pe:ce,appearance:"borderless",purpose:"secondary",onClick:Z,"aria-haspopup":"menu","aria-expanded":u?void 0:!0,"aria-label":"åpne meny"}),n(I,{isOpen:!u,onClose:ee,anchorRef:O,navItems:m?l:void 0,items:H?c:void 0,userProps:V})]})]})};E.displayName="InternalHeader";try{E.displayName="InternalHeader",E.__docgenInfo={description:"",displayName:"InternalHeader",props:{applicationName:{defaultValue:null,description:"Navn på applikasjonen.",name:"applicationName",required:!1,type:{name:"string | undefined"}},applicationDesc:{defaultValue:null,description:"Beskrivelse på applikasjonen ellen tittel på en underside. Tilgjengelig fram til Lovisa Next kommer.",name:"applicationDesc",required:!1,type:{name:"string | undefined"}},smallScreen:{defaultValue:null,description:"Indikerer om versjonen for små skjermer skal vises.",name:"smallScreen",required:!1,type:{name:"boolean | undefined"}},userProps:{defaultValue:null,description:"Info om brukeren. Dukker opp som punkt på toppen av kontekstmenyen med tekst oppgitt i name. Blir en lenke hvis href er oppgitt.",name:"userProps",required:!1,type:{name:"InternaHeaderUserProps | undefined"}},navigationElements:{defaultValue:null,description:"Lenker som skal vises i navigasjonsmenyen.",name:"navigationElements",required:!1,type:{name:"NavigationLinkProps[] | undefined"}},contextMenuElements:{defaultValue:null,description:"Lenker eller knapper som skal vises i kontekstmenyen. Støtter ikon i tillegg til tekst.",name:"contextMenuElements",required:!1,type:{name:"ContextMenuElementProps[] | undefined"}},currentPageHref:{defaultValue:null,description:"URL til siden i navigasjonen brukeren er på. Gir highlight til navigasjonselementet i navigationElements med samme URL.",name:"currentPageHref",required:!1,type:{name:"string | undefined"}},onCurrentPageChange:{defaultValue:null,description:"Ekstra logikk som kjøres når currentPage endres.",name:"onCurrentPageChange",required:!1,type:{name:"(() => void) | undefined"}},htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:"HTMLAttributes<HTMLDivElement> | undefined"}}}}}catch{}export{E as I};
//# sourceMappingURL=InternalHeader-5faf912c.js.map
