import{j as D,a as g,F as V}from"./jsx-runtime-e43ccb36.js";import{r}from"./index-1b03fe98.js";import{r as T}from"./index-6fd5a17b.js";import{d as L,s as k,n as h}from"./ddsReferenceTokens-fe3c594e.js";import"./Caption-a006c5bc.js";import"./Heading-3ac6a2d9.js";import"./Label-60a960ab.js";import"./Legend-bad3d4ec.js";import"./Link-bef7f478.js";import"./Paragraph-f6678e05.js";import"./TextOverflowEllipsis-c2a9fc8f.js";import{T as B}from"./Typography-9d6edb9c.js";import{k as F,b as z,f as H,e as M,l as j,g as X,P as G}from"./BaseComponentProps-b46a4458.js";import{C as W}from"./libraryAdd-dfc2ed03.js";import"./Icon-e72250a3.js";import{f as A}from"./Input.styles-c3e229ec.js";import{S as K}from"./ScrollableContainer-8c6b2fba.js";import{B as U}from"./Button-7239ff93.js";const{spacing:o}=L,l=o.SizesDdsSpacingLocalX025NumberPx,J=`${l}px`,Q={padding:`${o.SizesDdsSpacingLocalX1NumberPx-l}px ${o.SizesDdsSpacingLocalX1NumberPx-l}px ${o.SizesDdsSpacingLocalX1NumberPx-l}px ${o.SizesDdsSpacingLocalX15NumberPx-l}px`},Y={gap:o.SizesDdsSpacingLocalX1,padding:J},Z={container:Q,contentContainer:Y},{container:ee,contentContainer:q}=Z,ne=e=>e==="large"?"800px":e==="medium"?"600px":"400px",re=k(G)`
  position: fixed;
  top: 0;
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  min-width: 300px;
  z-index: 100;
  padding: ${ee.padding};

  ${({size:e})=>h`
    max-width: ${ne(e)};
  `}

  ${({widthProps:e})=>e&&h`
      min-width: ${e.minWidth};
      max-width: ${e.maxWidth};
      width: ${e.width};
    `}

  ${({placement:e,isOpen:t})=>e==="left"?h`
          left: 0;
          transform: ${t?"translate(0px)":"translateX(-100%)"};
        `:e==="right"?h`
          right: 0;
          transform: ${t?"translate(0px)":"translateX(100%)"};
        `:""}

  @media (prefers-reduced-motion: no-preference) {
    transition: transform 0.5s;
  }

  &:focus-visible,
  &.focus-visible {
    ${A}
  }
`,ae=k.div`
  display: flex;
  flex-direction: column;
  gap: ${q.gap};
  padding: ${q.padding};
`,te=k.div``,ie=k(U)`
  align-self: flex-end;
`,b=r.forwardRef((e,t)=>{const{children:u,onClose:a,header:i,isOpen:n=!1,placement:p="right",parentElement:c=document.body,size:m="small",triggerRef:s,id:y,className:v,htmlProps:x,...w}=e,d=r.useId(),f=y??`${d}-drawer`,E=!!i,S=E?`${f}-header`:void 0,$=F(n),I=z(t,$);H(["Esc","Escape"],()=>{var _;n&&(s&&((_=s.current)==null||_.focus()),a&&a())});const P=[$.current];s&&P.push(s.current),M(P,()=>n&&a&&a());const N=j(n,500),O={...X(f,v,x,w),placement:p,ref:I,isOpen:N&&n,tabIndex:-1,role:"dialog","aria-labelledby":S,size:m},R={id:S};return n||N?T.createPortal(D(re,{...O,elevation:4,children:[g(K,{children:D(ae,{children:[E&&g(te,{...R,children:typeof i=="string"?g(B,{typographyType:"headingSans03",children:i}):i}),u]})}),g(ie,{"data-testid":"drawer-close-btn",size:"small",purpose:"secondary",appearance:"borderless",onClick:a,"aria-label":"Lukk",icon:W})]}),c):null});b.displayName="Drawer";try{b.displayName="Drawer",b.__docgenInfo={description:"",displayName:"Drawer",props:{size:{defaultValue:null,description:"Størrelsen på `<Drawer />`.",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},placement:{defaultValue:null,description:"Plasseringen til `<Drawer />`.",name:"placement",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"left"'},{value:'"right"'}]}},header:{defaultValue:null,description:"Header for `<Drawer />`. Har default styling hvis verdien er en string.",name:"header",required:!1,type:{name:"ReactNode"}},isOpen:{defaultValue:null,description:"Spesifiserer om `<Drawer />` skal legges vises. **OBS!** nødvendig kun hvis `<DrawerGroup />` ikke er i bruk.",name:"isOpen",required:!1,type:{name:"boolean | undefined"}},onClose:{defaultValue:null,description:"Funksjon kjørt ved lukking. **OBS!** nødvendig kun hvis `<DrawerGroup />` ikke er i bruk.",name:"onClose",required:!1,type:{name:"(() => void) | undefined"}},parentElement:{defaultValue:null,description:'Spesifiserer hvilken DOM node `<Drawer />` skal ha som forelder via React portal. Brukes med f.eks `document.getElementById("id")` (skaper ikke ny DOM node).',name:"parentElement",required:!1,type:{name:"HTMLElement | undefined"}},widthProps:{defaultValue:null,description:"Custom props for breddehåndtering ved behov.",name:"widthProps",required:!1,type:{name:"WidthProps | undefined"}},triggerRef:{defaultValue:null,description:"Ref til elementet som åpner `<Drawer />`.  **OBS!** nødvendig kun hvis `<DrawerGroup />` ikke er i bruk.",name:"triggerRef",required:!1,type:{name:"RefObject<HTMLElement> | undefined"}},htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:"HTMLAttributes<HTMLDivElement> | undefined"}}}}}catch{}const C=({children:e,drawerId:t,onOpen:u,onClose:a})=>{const i=r.useId(),n=t??`${i}-drawer`,p=r.useRef(null),[c,m]=r.useState(!0),s=()=>m(!1),y=()=>m(!0),v=()=>{s(),u&&u()},x=()=>{y(),a&&a()},w=r.Children.map(e,(d,f)=>r.isValidElement(d)&&(f===0?r.cloneElement(d,{"aria-haspopup":"dialog","aria-controls":n,"aria-expanded":!c,ref:p,onClick:v}):r.cloneElement(d,{id:n,triggerRef:p,isOpen:!c,onClose:x})));return D(V,{children:[" ",w," "]})};C.displayName="DrawerGroup";try{C.displayName="DrawerGroup",C.__docgenInfo={description:"",displayName:"DrawerGroup",props:{children:{defaultValue:null,description:"Barna til komponenten.",name:"children",required:!0,type:{name:"ReactNode"}},drawerId:{defaultValue:null,description:"`id` til `<Drawer />`.",name:"drawerId",required:!1,type:{name:"string | undefined"}},onOpen:{defaultValue:null,description:"Ekstra logikk som kjøres når `<Drawer />` åpnes.",name:"onOpen",required:!1,type:{name:"(() => void) | undefined"}},onClose:{defaultValue:null,description:"Ekstra logikk som kjøres når `<Drawer />` lukkes.",name:"onClose",required:!1,type:{name:"(() => void) | undefined"}}}}}catch{}export{b as D,C as a};
//# sourceMappingURL=DrawerGroup-359a30ec.js.map
