import{a as n,j as R,F as oe}from"./jsx-runtime-e43ccb36.js";import{r as y}from"./index-1b03fe98.js";import{s as x}from"./ddsReferenceTokens-a28ebf03.js";import{v as se,s as re,b as ne,e as te,f as _,h as ie,g as ae}from"./BaseComponentProps-b6ad9f7d.js";import{u as ce}from"./useFloatPosition-16e51d7b.js";import{O as F,o as E}from"./OverflowMenuItem-7e972be0.js";import{b as T}from"./libraryAdd-72c0bfa3.js";import"./Icon-eb542f51.js";import{s as N}from"./scrollbarStyling-c2e6e782.js";import{D as le}from"./Divider-ffd037d3.js";const{container:w,divider:D}=E,fe=x.div`
  box-sizing: border-box;
  z-index: 100;
  overflow-y: auto;
  min-width: 180px;
  max-width: 300px;
  ${({isOpen:d})=>se(d)}
  border: ${w.border};
  background-color: ${w.backgroundColor};
  border-radius: ${w.borderRadius};

  ${N.webkit}
  ${N.firefox}

  *::selection {
    ${re}
  }
`,k=x.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
  margin: 0;
`,ue=x(le)`
  margin-left: ${D.marginLeft};
  margin-right: ${D.marginRight};
`,P=y.forwardRef((d,j)=>{var M,$;const{anchorRef:u,onClose:s,onToggle:r,isOpen:t=!1,placement:S="bottom-end",items:b,navItems:m,userProps:i,id:C,offset:z=E.offset,className:H,htmlProps:U={},...B}=d,{reference:O,floating:K,refs:c,styles:L}=ce(null,{placement:S,offset:z}),q=ne(j,K);y.useEffect(()=>{O(u?u.current:null)},[u]),te([(M=c==null?void 0:c.floating)==null?void 0:M.current,($=c==null?void 0:c.reference)==null?void 0:$.current],()=>{t&&(s&&s(),r&&r())}),_(["Esc","Escape"],()=>{var o;t&&(s&&s(),r&&r(),u&&((o=u.current)==null||o.focus()))}),_(["Tab"],()=>{t&&(s&&s(),r&&r())});const a=[],p=!!b&&b.length>0,l=!!m&&m.length>0,{name:h,...A}=i||{},G=h&&i&&!i.href&&!i.onClick,g=h&&i&&(!!i.href||!!i.onClick);g&&a.push({title:h,...A}),l&&a.push(...m),p&&a.push(...b);const I=a.length>0,[J,Q]=ie(a&&a.length,!t),e=I?a.map((o,f)=>n("li",{children:n(F,{index:f,focus:J===f&&t,setFocus:Q,icon:g&&f===0?T:void 0,...o,onClick:v=>{o.onClick&&o.onClick(v),r&&r(),s&&s()}})},f)):null,V=()=>{if(I){const o=g?0:-1,f=l?o+1:-1,v=l?o+m.length:-1,ee=p?l?v+1:o+1:-1;return R(oe,{children:[g&&n(k,{children:e==null?void 0:e[0]}),l&&n("nav",{children:n(k,{children:e==null?void 0:e.slice(f,v+1)})}),l&&p&&n(ue,{color:"primaryLighter"}),p&&n(k,{"aria-label":"kontekstmeny",children:e==null?void 0:e.slice(ee,e.length)})]})}},{style:W={},...X}=U,Y=y.useId(),Z={...ae(C,H,X,B),ref:q,id:C??`${Y}-overflowMenu`,isOpen:t,style:{...W,...L.floating},"aria-hidden":!t,role:"menu"};return R(fe,{...Z,"aria-label":"bruk piltaster for å navigere",children:[G&&n(F,{title:h,icon:T}),V()]})});P.displayName="OverflowMenu";try{P.displayName="OverflowMenu",P.__docgenInfo={description:"",displayName:"OverflowMenu",props:{}}}catch{}export{P as O};
//# sourceMappingURL=OverflowMenu-0620d2c9.js.map
