import{d as L,s,a as n,j as B}from"./ddsReferenceTokens-ceb64027.js";import{r as p}from"./index-1b03fe98.js";import{r as w}from"./index-6fd5a17b.js";import"./Caption-d066edab.js";import"./Heading-d8600f49.js";import"./Label-10c93eb5.js";import"./Legend-0cba57ca.js";import"./Link-7a88da71.js";import"./Paragraph-5ad16720.js";import"./TextOverflowEllipsis-e584ab25.js";import{T as O}from"./Typography-56baa34a.js";import{n as V,s as j,k as q,b as z,e as F,f as X,l as W,g as N,P as U}from"./BaseComponentProps-d435d0d0.js";import{C as A}from"./libraryAdd-931d79ee.js";import"./Icon-72ef85ba.js";import{f as Y}from"./Input.styles-82cfcbdb.js";import{B as G}from"./Button-da201b9b.js";import{S as K}from"./ScrollableContainer-5a7d1ed7.js";const{spacing:a}=L,J={padding:`${a.SizesDdsSpacingLocalX1} ${a.SizesDdsSpacingLocalX1} ${a.SizesDdsSpacingLocalX15} ${a.SizesDdsSpacingLocalX15}`},Q={paddingRight:a.SizesDdsSpacingLocalX1,gap:a.SizesDdsSpacingLocalX1},Z={gap:a.SizesDdsSpacingLocalX1},ee={container:J,contentContainer:Q,actionsContainer:Z},g=s.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${V(L.colors.DdsColorNeutralsGray9,.5)};
  overflow-y: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 200;
  opacity: ${({isOpen:e})=>e?1:0};
  @media (prefers-reduced-motion: no-preference) {
    transition: opacity 0.2s;
  }
`;try{g.displayName="Backdrop",g.__docgenInfo={description:"",displayName:"Backdrop",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}}}}}catch{}const oe=e=>e.clientHeight>window.innerHeight;function h(e){if(oe(e)){const t=Math.round(window.scrollY);e.style.overflowY="scroll",e.style.position="fixed",e.style.top=`-${t}px`}}function m(e){const t=parseInt(document.body.style.top)||0;e.style.removeProperty("overflow-y"),e.style.removeProperty("position"),e.style.removeProperty("top"),window.scrollTo(0,t*-1)}try{h.displayName="handleElementWithBackdropMount",h.__docgenInfo={description:"",displayName:"handleElementWithBackdropMount",props:{}}}catch{}try{m.displayName="handleElementWithBackdropUnmount",m.__docgenInfo={description:"",displayName:"handleElementWithBackdropUnmount",props:{}}}catch{}const{container:te,contentContainer:C}=ee,ne=s(U)`
  display: flex;
  flex-direction: column-reverse;
  min-width: 200px;
  padding: ${te.padding};
  &::selection,
  *::selection {
    ${j}
  }
  :focus-visible,
  &.focus-visible {
    ${Y}
  }
`,ae=s.div`
  display: grid;
  padding-right: ${C.paddingRight};
  gap: ${C.gap};
`,re=s.div``,se=s(G)`
  align-self: flex-end;
`,k=p.forwardRef((e,t)=>{const{isOpen:o=!1,parentElement:u=document.body,children:f,header:r,onClose:i,id:l,triggerRef:d,className:c,htmlProps:x,...P}=e,$=p.useId(),b=l??`${$}-modal`,E=`${b}-header`,v=q(o),D=z(t,v),y=()=>{var S;i&&o&&(d&&((S=d.current)==null||S.focus()),i())};p.useEffect(()=>(o?h(document.body):m(document.body),()=>m(document.body)),[o]),F(v.current,()=>y()),X(["Escape","Esc"],()=>y());const M=W(o,200),H={isOpen:M&&o},R={...N(l,c,x,P),ref:D,role:"dialog","aria-modal":!0,"aria-hidden":!o,tabIndex:-1,"aria-labelledby":E,id:b},I={id:E};return o||M?w.createPortal(n(g,{...H,children:B(ne,{...R,elevation:4,children:[B(ae,{children:[r&&n(re,{...I,children:typeof r=="string"?n(O,{typographyType:"headingSans03",children:r}):r}),f]}),i&&n(se,{size:"small",appearance:"borderless",purpose:"secondary",icon:A,onClick:y,"aria-label":"Lukk dialog"})]})}),u):null});k.displayName="Modal";try{k.displayName="Modal",k.__docgenInfo={description:"",displayName:"Modal",props:{isOpen:{defaultValue:null,description:"Spesifiserer om modal skal vises.",name:"isOpen",required:!1,type:{name:"boolean | undefined"}},onClose:{defaultValue:null,description:"Funksjon kjørt ved lukking; Settes hvis modal skal være lukkbar. Legger en lukkeknapp i hjørnet og kjøres ved Esc-trykk, lukkeknappklikk og museklikk utenfor.",name:"onClose",required:!1,type:{name:"(() => void) | undefined"}},parentElement:{defaultValue:null,description:'Spesifiserer hvilken DOM node `<Modal />` skal ha som forelder via React portal. Brukes med f.eks `document.getElementById("id")` (skaper ikke ny DOM node).',name:"parentElement",required:!1,type:{name:"HTMLElement | undefined"}},header:{defaultValue:null,description:"Tittel/header i modal. Setter `aria-labelledby`.",name:"header",required:!1,type:{name:"ReactNode"}},triggerRef:{defaultValue:null,description:"Ref som brukes til returnering av fokus.",name:"triggerRef",required:!1,type:{name:"RefObject<HTMLElement> | undefined"}},htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:"HTMLAttributes<HTMLDivElement> | undefined"}}}}}catch{}const T=s.div``,_=p.forwardRef((e,t)=>{const{children:o,scrollable:u,id:f,className:r,htmlProps:i,height:l,...d}=e,c={...N(f,r,i,d),ref:t};return u?n(T,{...c,children:n(K,{contentHeight:l,children:o})}):n(T,{...c,children:o})});_.displayName="ModalBody";try{_.displayName="ModalBody",_.__docgenInfo={description:"",displayName:"ModalBody",props:{scrollable:{defaultValue:null,description:"Gjør at innholdet kan scrolles. Det må eventuelt settes (max)bredde og (max)høyde styling på både denne subkomponenten og `<Modal />`.",name:"scrollable",required:!1,type:{name:"boolean | undefined"}},height:{defaultValue:null,description:"Høyde på container.",name:"height",required:!1,type:{name:"Height<0 | (string & {})> | undefined"}},htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:"HTMLAttributes<HTMLDivElement> | undefined"}}}}}catch{}export{_ as M,k as a,ee as m};
//# sourceMappingURL=ModalBody-395a6ac2.js.map
