import{a as r,j as y}from"./jsx-runtime-e43ccb36.js";import{r as d}from"./index-1b03fe98.js";import"./Caption-d810b87c.js";import"./Heading-0c5437bc.js";import"./Label-05114518.js";import"./Legend-9969638c.js";import"./Link-c264ab95.js";import"./Paragraph-88055bd8.js";import"./TextOverflowEllipsis-6cc9a60a.js";import{a as te,T}from"./Typography-d13ef156.js";import{d as ae,s as n,n as E}from"./ddsReferenceTokens-a28ebf03.js";import{s as ie,g as se}from"./BaseComponentProps-b6ad9f7d.js";import{O as pe}from"./OverflowMenu-0620d2c9.js";import{f as le}from"./Input.styles-97d4f19a.js";import{f as de,M as ce}from"./libraryAdd-72c0bfa3.js";import"./Icon-eb542f51.js";import{B as ue}from"./Button-ba8adec5.js";const{border:q,colors:a,spacing:o}=ae,P=`${q.BordersDdsBorderStyleLightStrokeWeight} ${q.BordersDdsBorderStyleLightStroke} solid `,me={navLink:"bodySans01"},ge={base:{color:a.DdsColorNeutralsGray9,backgroundColor:a.DdsColorNeutralsWhite,padding:`${o.SizesDdsSpacingLocalX075} ${o.SizesDdsSpacingLocalX15}`},hover:{color:a.DdsColorInteractiveDark},active:{color:a.DdsColorInteractiveDark},current:{color:a.DdsColorInteractiveDarkest,backgroundColor:a.DdsColorPrimaryLightest}},_e={backgroundColor:a.DdsColorNeutralsWhite},ye={padding:`${o.SizesDdsSpacingLocalX1} ${o.SizesDdsSpacingLocalX15}`},fe={padding:`${o.SizesDdsSpacingLocalX1} ${o.SizesDdsSpacingLocalX15}`,borderRight:P},he={borderBottom:P,paddingRight:o.SizesDdsSpacingLocalX1,hasContextMenu:{paddingRight:o.SizesDdsSpacingLayoutX4}},ve={borderBottom:P},ke={right:o.SizesDdsSpacingLocalX075,top:o.SizesDdsSpacingLocalX025},G={navLink:ge,outerContainer:_e,applicationNameWrapper:ye,lovisaWrapper:fe,banner:he,navigation:ve,contextGroup:ke},{outerContainer:be,applicationNameWrapper:Ne,lovisaWrapper:O,banner:f,navigation:Ce,contextGroup:X}=G,h=n.div`
  position: relative;
  *::selection {
    ${ie}
  }
  background-color: ${be.backgroundColor};
`,v=n.div`
  position: relative;
  display: flex;
  align-items: center;
  border-bottom: ${f.borderBottom};
  padding-right: ${f.paddingRight};
  ${({hasContextMenu:e})=>e&&E`
      padding-right: ${f.hasContextMenu.paddingRight};
    `}
`,k=n.div`
  display: flex;
`,b=n.div`
  display: flex;
  align-items: center;
  padding: ${Ne.padding};
`,N=n.div`
  padding: ${O.padding};
  border-right: ${O.borderRight};
`,C=n.nav`
  border-bottom: ${Ce.borderBottom};
`,L=n.ul`
  box-sizing: border-box;
  display: flex;
  ${({smallScreen:e})=>e&&E`
      flex-direction: column;
    `}
  list-style-type: none;
  padding: 0;
  margin: 0;
`,x=n.div`
  position: absolute;
  top: ${X.top};
  right: ${X.right};
`,I=n(pe)`
  max-height: calc(100vh - 110px);
`;try{h.displayName="OuterContainer",h.__docgenInfo={description:"",displayName:"OuterContainer",props:{}}}catch{}try{v.displayName="BannerWrapper",v.__docgenInfo={description:"",displayName:"BannerWrapper",props:{}}}catch{}try{k.displayName="BannerLeftWrapper",k.__docgenInfo={description:"",displayName:"BannerLeftWrapper",props:{}}}catch{}try{b.displayName="ApplicationNameWrapper",b.__docgenInfo={description:"",displayName:"ApplicationNameWrapper",props:{}}}catch{}try{N.displayName="LovisaWrapper",N.__docgenInfo={description:"",displayName:"LovisaWrapper",props:{}}}catch{}try{C.displayName="Navigation",C.__docgenInfo={description:"",displayName:"Navigation",props:{}}}catch{}try{L.displayName="NavigationList",L.__docgenInfo={description:"",displayName:"NavigationList",props:{}}}catch{}try{x.displayName="ContextMenuGroup",x.__docgenInfo={description:"",displayName:"ContextMenuGroup",props:{}}}catch{}try{I.displayName="StyledOverflowMenu",I.__docgenInfo={description:"",displayName:"StyledOverflowMenu",props:{}}}catch{}const{navLink:t}=G,$=n.a`
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
  ${({isCurrent:e})=>e&&E`
      color: ${t.current.color};
      background-color: ${t.current.backgroundColor};
      &:hover {
        color: ${t.current.color};
      }
    `}
`,S=d.forwardRef(({title:e,isCurrent:i,...l},s)=>{const p={ref:s,isCurrent:i,...l};return r($,{...p,"aria-current":i?"page":void 0,children:e})});try{$.displayName="Link",$.__docgenInfo={description:"",displayName:"Link",props:{}}}catch{}try{S.displayName="NavigationItem",S.__docgenInfo={description:"",displayName:"NavigationItem",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},isCurrent:{defaultValue:null,description:"",name:"isCurrent",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const Le=n.li`
  box-sizing: border-box;
`,D=d.forwardRef(({children:e,...i},l)=>{const s={ref:l,...i};return r(Le,{...s,children:e})});try{D.displayName="InternalHeaderListItem",D.__docgenInfo={description:"",displayName:"InternalHeaderListItem",props:{}}}catch{}const M=e=>{const{applicationDesc:i,applicationName:l,smallScreen:s,navigationElements:p,contextMenuElements:c,currentPageHref:w,userProps:W,onCurrentPageChange:B,id:A,className:U,htmlProps:F,...J}=e,[u,H]=d.useState(!0),[K,Q]=d.useState(w),j=d.useRef(null),Y=g=>{Q(g),B&&B()},Z=()=>{H(!u)},ee=()=>H(!0),z=!!p&&p.length>0,R=!!c&&c.length>0,m=s&&z,re=z&&!s?r(C,{"aria-label":"sidenavigasjon",children:r(L,{children:p.map((g,ne)=>{const{href:_,...oe}=g;return r(D,{children:r(S,{href:_,...oe,isCurrent:_===K,onClick:()=>Y(_)})},ne)})})}):null,V=R||!!W||m;return y(h,{...se(A,U,F,J),children:[r(v,{hasContextMenu:V,children:y(k,{children:[r(N,{children:r(T,{typographyType:"bodySans02",bold:!0,as:"span",children:l})}),r(b,{children:r(T,{typographyType:"bodySans02",as:"span",children:i})})]})}),re,V&&y(x,{children:[r(ue,{ref:j,icon:m?de:ce,appearance:"borderless",purpose:"secondary",onClick:Z,"aria-haspopup":"menu","aria-expanded":u?void 0:!0,"aria-label":"åpne meny"}),r(I,{isOpen:!u,onClose:ee,anchorRef:j,navItems:m?p:void 0,items:R?c:void 0,userProps:W})]})]})};M.displayName="InternalHeader";try{M.displayName="InternalHeader",M.__docgenInfo={description:"",displayName:"InternalHeader",props:{applicationName:{defaultValue:null,description:"Navn på applikasjonen.",name:"applicationName",required:!1,type:{name:"string | undefined"}},applicationDesc:{defaultValue:null,description:"Beskrivelse på applikasjonen ellen tittel på en underside. Tilgjengelig fram til Lovisa Next kommer.",name:"applicationDesc",required:!1,type:{name:"string | undefined"}},smallScreen:{defaultValue:null,description:"Indikerer om versjonen for små skjermer skal vises.",name:"smallScreen",required:!1,type:{name:"boolean | undefined"}},userProps:{defaultValue:null,description:"Info om brukeren. Dukker opp som punkt på toppen av kontekstmenyen med tekst oppgitt i name. Blir en lenke hvis href er oppgitt.",name:"userProps",required:!1,type:{name:"InternaHeaderUserProps | undefined"}},navigationElements:{defaultValue:null,description:"Lenker som skal vises i navigasjonsmenyen.",name:"navigationElements",required:!1,type:{name:"NavigationLinkProps[] | undefined"}},contextMenuElements:{defaultValue:null,description:"Lenker eller knapper som skal vises i kontekstmenyen. Støtter ikon i tillegg til tekst.",name:"contextMenuElements",required:!1,type:{name:"ContextMenuElementProps[] | undefined"}},currentPageHref:{defaultValue:null,description:"URL til siden i navigasjonen brukeren er på. Gir highlight til navigasjonselementet i navigationElements med samme URL.",name:"currentPageHref",required:!1,type:{name:"string | undefined"}},onCurrentPageChange:{defaultValue:null,description:"Ekstra logikk som kjøres når currentPage endres.",name:"onCurrentPageChange",required:!1,type:{name:"(() => void) | undefined"}},htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:"HTMLAttributes<HTMLDivElement> | undefined"}}}}}catch{}export{M as I};
//# sourceMappingURL=InternalHeader-d7eb3ae4.js.map
