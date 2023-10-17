import{j as D,a as g,F as V}from"./jsx-runtime-e43ccb36.js";import{r as n}from"./index-1b03fe98.js";import{r as T}from"./index-6fd5a17b.js";import{d as L,s as k,A as h}from"./ddsReferenceTokens-f9f5a4e4.js";import"./Caption-6d408196.js";import"./Heading-5f7faa2b.js";import"./Label-9dee7f37.js";import"./Legend-41f9f05c.js";import"./Link-1567bf4e.js";import"./Paragraph-998f64b8.js";import"./TextOverflowEllipsis-1edb8626.js";import{T as B}from"./Typography-e857479c.js";import{k as F,b as z,f as H,e as M,l as j,g as X,P as G}from"./BaseComponentProps-9c025471.js";import{C as A}from"./libraryAdd-5ac12ed0.js";import"./Icon-1678d620.js";import{f as W}from"./Input.styles-3d1af983.js";import{S as K}from"./ScrollableContainer-67bc1bdc.js";import{B as U}from"./Button-cdaa071a.js";const{spacing:o}=L,l=o.SizesDdsSpacingLocalX025NumberPx,J=`${l}px`,Q={padding:`${o.SizesDdsSpacingLocalX1NumberPx-l}px ${o.SizesDdsSpacingLocalX1NumberPx-l}px ${o.SizesDdsSpacingLocalX1NumberPx-l}px ${o.SizesDdsSpacingLocalX15NumberPx-l}px`},Y={gap:o.SizesDdsSpacingLocalX1,padding:J},Z={container:Q,contentContainer:Y},{container:ee,contentContainer:q}=Z,re=e=>e==="large"?"800px":e==="medium"?"600px":"400px",ne=k(G)`
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
    max-width: ${re(e)};
  `}

  ${({widthProps:e})=>e&&h`
      ${e}
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
    ${W}
  }
`,ae=k.div`
  display: flex;
  flex-direction: column;
  gap: ${q.gap};
  padding: ${q.padding};
`,te=k.div``,se=k(U)`
  align-self: flex-end;
`,b=n.forwardRef((e,t)=>{const{children:u,onClose:a,header:s,isOpen:r=!1,placement:p="right",parentElement:c=document.body,size:m="small",triggerRef:i,id:y,className:v,htmlProps:x,...w}=e,d=n.useId(),f=y??`${d}-drawer`,E=!!s,S=E?`${f}-header`:void 0,$=F(r),I=z(t,$);H(["Esc","Escape"],()=>{var _;r&&(i&&((_=i.current)==null||_.focus()),a&&a())});const P=[$.current];i&&P.push(i.current),M(P,()=>r&&a&&a());const N=j(r,500),O={...X(f,v,x,w),placement:p,ref:I,isOpen:N&&r,tabIndex:-1,role:"dialog","aria-labelledby":S,size:m},R={id:S};return r||N?T.createPortal(D(ne,{...O,elevation:4,children:[g(K,{children:D(ae,{children:[E&&g(te,{...R,children:typeof s=="string"?g(B,{typographyType:"headingSans03",children:s}):s}),u]})}),g(se,{"data-testid":"drawer-close-btn",size:"small",purpose:"secondary",appearance:"borderless",onClick:a,"aria-label":"Lukk",icon:A})]}),c):null});b.displayName="Drawer";try{b.displayName="Drawer",b.__docgenInfo={description:"",displayName:"Drawer",props:{size:{defaultValue:null,description:"Størrelsen på `<Drawer />`.",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},placement:{defaultValue:null,description:"Plasseringen til `<Drawer />`.",name:"placement",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"left"'},{value:'"right"'}]}},header:{defaultValue:null,description:"Header for `<Drawer />`. Har default styling hvis verdien er en string.",name:"header",required:!1,type:{name:"ReactNode"}},isOpen:{defaultValue:null,description:"Spesifiserer om `<Drawer />` skal legges vises. **OBS!** nødvendig kun hvis `<DrawerGroup />` ikke er i bruk.",name:"isOpen",required:!1,type:{name:"boolean | undefined"}},onClose:{defaultValue:null,description:"Funksjon kjørt ved lukking. **OBS!** nødvendig kun hvis `<DrawerGroup />` ikke er i bruk.",name:"onClose",required:!1,type:{name:"(() => void) | undefined"}},parentElement:{defaultValue:null,description:'Spesifiserer hvilken DOM node `<Drawer />` skal ha som forelder via React portal. Brukes med f.eks `document.getElementById("id")` (skaper ikke ny DOM node).',name:"parentElement",required:!1,type:{name:"HTMLElement | undefined"}},widthProps:{defaultValue:null,description:"Custom props for breddehåndtering ved behov.",name:"widthProps",required:!1,type:{name:"WidthProps | undefined"}},triggerRef:{defaultValue:null,description:"Ref til elementet som åpner `<Drawer />`.  **OBS!** nødvendig kun hvis `<DrawerGroup />` ikke er i bruk.",name:"triggerRef",required:!1,type:{name:"RefObject<HTMLElement> | undefined"}},htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:"HTMLAttributes<HTMLDivElement> | undefined"}}}}}catch{}const C=({children:e,drawerId:t,onOpen:u,onClose:a})=>{const s=n.useId(),r=t??`${s}-drawer`,p=n.useRef(null),[c,m]=n.useState(!0),i=()=>m(!1),y=()=>m(!0),v=()=>{i(),u&&u()},x=()=>{y(),a&&a()},w=n.Children.map(e,(d,f)=>n.isValidElement(d)&&(f===0?n.cloneElement(d,{"aria-haspopup":"dialog","aria-controls":r,"aria-expanded":!c,ref:p,onClick:v}):n.cloneElement(d,{id:r,triggerRef:p,isOpen:!c,onClose:x})));return D(V,{children:[" ",w," "]})};C.displayName="DrawerGroup";try{C.displayName="DrawerGroup",C.__docgenInfo={description:"",displayName:"DrawerGroup",props:{children:{defaultValue:null,description:"Barna til komponenten.",name:"children",required:!0,type:{name:"ReactNode"}},drawerId:{defaultValue:null,description:"`id` til `<Drawer />`.",name:"drawerId",required:!1,type:{name:"string | undefined"}},onOpen:{defaultValue:null,description:"Ekstra logikk som kjøres når `<Drawer />` åpnes.",name:"onOpen",required:!1,type:{name:"(() => void) | undefined"}},onClose:{defaultValue:null,description:"Ekstra logikk som kjøres når `<Drawer />` lukkes.",name:"onClose",required:!1,type:{name:"(() => void) | undefined"}}}}}catch{}export{b as D,C as a};
//# sourceMappingURL=DrawerGroup-62a01630.js.map
