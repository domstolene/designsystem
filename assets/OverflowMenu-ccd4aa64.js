import{a as t,j as R,F as Z}from"./jsx-runtime-e43ccb36.js";import{r as y}from"./index-1b03fe98.js";import{s as x}from"./ddsReferenceTokens-a28ebf03.js";import{v as ee,s as oe,b as se,e as re,f as $,h as ne,g as te}from"./BaseComponentProps-5f9a30f8.js";import{u as ie}from"./useFloatPosition-50e3a2ff.js";import{O as F,o as D}from"./OverflowMenuItem-6489ab66.js";import{b as _}from"./libraryAdd-6466b337.js";import"./Icon-317ea463.js";import{s as T}from"./scrollbarStyling-c2e6e782.js";import{D as ae}from"./Divider-59c98bdf.js";const{container:w,divider:N}=D,ce=x.div`
  box-sizing: border-box;
  z-index: 100;
  overflow-y: auto;
  min-width: 180px;
  max-width: 300px;
  ${({isOpen:d})=>ee(d)}
  border: ${w.border};
  background-color: ${w.backgroundColor};
  border-radius: ${w.borderRadius};

  ${T.webkit}
  ${T.firefox}

  *::selection {
    ${oe}
  }
`,k=x.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
  margin: 0;
`,le=x(ae)`
  margin-left: ${N.marginLeft};
  margin-right: ${N.marginRight};
`,P=y.forwardRef((d,E)=>{var I,M;const{anchorRef:u,onClose:r,onToggle:n,isOpen:i=!1,placement:j="bottom-end",items:b,navItems:m,userProps:a,id:C,offset:S=D.offset,className:z,htmlProps:H={},...U}=d,{refs:s,styles:B}=ie(null,{placement:j,offset:S}),K=se(E,s.setFloating);y.useEffect(()=>{u?s.setReference(u.current):s.setReference(null)},[u]),re([(I=s==null?void 0:s.floating)==null?void 0:I.current,(M=s==null?void 0:s.reference)==null?void 0:M.current],()=>{i&&(r&&r(),n&&n())}),$(["Esc","Escape"],()=>{var o;i&&(r&&r(),n&&n(),u&&((o=u.current)==null||o.focus()))}),$(["Tab"],()=>{i&&(r&&r(),n&&n())});const c=[],p=!!b&&b.length>0,l=!!m&&m.length>0,{name:h,...L}=a||{},q=h&&a&&!a.href&&!a.onClick,g=h&&a&&(!!a.href||!!a.onClick);g&&c.push({title:h,...L}),l&&c.push(...m),p&&c.push(...b);const O=c.length>0,[A,G]=ne(c&&c.length,!i),e=O?c.map((o,f)=>t("li",{children:t(F,{index:f,focus:A===f&&i,setFocus:G,icon:g&&f===0?_:void 0,...o,onClick:v=>{o.onClick&&o.onClick(v),n&&n(),r&&r()}})},f)):null,J=()=>{if(O){const o=g?0:-1,f=l?o+1:-1,v=l?o+m.length:-1,Y=p?l?v+1:o+1:-1;return R(Z,{children:[g&&t(k,{children:e==null?void 0:e[0]}),l&&t("nav",{children:t(k,{children:e==null?void 0:e.slice(f,v+1)})}),l&&p&&t(le,{color:"primaryLighter"}),p&&t(k,{"aria-label":"kontekstmeny",children:e==null?void 0:e.slice(Y,e.length)})]})}},{style:Q={},...V}=H,W=y.useId(),X={...te(C,z,V,U),ref:K,id:C??`${W}-overflowMenu`,isOpen:i,style:{...Q,...B.floating},"aria-hidden":!i,role:"menu"};return R(ce,{...X,"aria-label":"bruk piltaster for å navigere",children:[q&&t(F,{title:h,icon:_}),J()]})});P.displayName="OverflowMenu";try{P.displayName="OverflowMenu",P.__docgenInfo={description:"",displayName:"OverflowMenu",props:{}}}catch{}export{P as O};
//# sourceMappingURL=OverflowMenu-ccd4aa64.js.map
