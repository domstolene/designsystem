import{a as n,j as R,F as oe}from"./jsx-runtime-e43ccb36.js";import{r as y}from"./index-1b03fe98.js";import{s as P}from"./ddsReferenceTokens-baf3ad90.js";import{v as se,s as re,b as ne,e as te,f as _,h as ie,g as ae}from"./BaseComponentProps-46424d28.js";import{u as le}from"./useFloatPosition-ae95f346.js";import{O as F,o as E}from"./OverflowMenuItem-101a1d0b.js";import{b as T}from"./libraryAdd-ba36db88.js";import"./Icon-169fc8ae.js";import{s as N}from"./scrollbarStyling-4847117a.js";import{D as ce}from"./Divider-8c3c7dc7.js";const{container:w,divider:D}=E,fe=P.div`
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
`,O=P.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
  margin: 0;
`,ue=P(ce)`
  margin-left: ${D.marginLeft};
  margin-right: ${D.marginRight};
`,k=y.forwardRef((d,j)=>{var M,$;const{anchorRef:u,onClose:s,onToggle:r,isOpen:t=!1,placement:S="bottom-end",items:v,navItems:m,userProps:i,id:x,offset:z=E.offset,className:H,htmlProps:U={},...q}=d,{reference:C,floating:B,refs:l,styles:K}=le(null,{placement:S,offset:z}),L=ne(j,B);y.useEffect(()=>{C(u?u.current:null)},[u]),te([(M=l==null?void 0:l.floating)==null?void 0:M.current,($=l==null?void 0:l.reference)==null?void 0:$.current],()=>{t&&(s&&s(),r&&r())}),_(["Esc","Escape"],()=>{var o;t&&(s&&s(),r&&r(),u&&((o=u.current)==null||o.focus()))}),_(["Tab"],()=>{t&&(s&&s(),r&&r())});const a=[],p=!!v&&v.length>0,c=!!m&&m.length>0,{name:h,...V}=i||{},A=h&&i&&!i.href&&!i.onClick,g=h&&i&&(!!i.href||!!i.onClick);g&&a.push({title:h,...V}),c&&a.push(...m),p&&a.push(...v);const I=a.length>0,[G,J]=ie(a&&a.length,!t),e=I?a.map((o,f)=>n("li",{children:n(F,{index:f,focus:G===f&&t,setFocus:J,icon:g&&f===0?T:void 0,...o,onClick:b=>{o.onClick&&o.onClick(b),r&&r(),s&&s()}})},f)):null,Q=()=>{if(I){const o=g?0:-1,f=c?o+1:-1,b=c?o+m.length:-1,ee=p?c?b+1:o+1:-1;return R(oe,{children:[g&&n(O,{children:e==null?void 0:e[0]}),c&&n("nav",{children:n(O,{children:e==null?void 0:e.slice(f,b+1)})}),c&&p&&n(ue,{color:"primaryLighter"}),p&&n(O,{"aria-label":"kontekstmeny",children:e==null?void 0:e.slice(ee,e.length)})]})}},{style:W={},...X}=U,Y=y.useId(),Z={...ae(x,H,X,q),ref:L,id:x??`${Y}-overflowMenu`,isOpen:t,style:{...W,...K.floating},"aria-hidden":!t,role:"menu"};return R(fe,{...Z,"aria-label":"bruk piltaster for å navigere",children:[A&&n(F,{title:h,icon:T}),Q()]})});k.displayName="OverflowMenu";try{k.displayName="OverflowMenu",k.__docgenInfo={description:"",displayName:"OverflowMenu",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}}}}}catch{}export{k as O};
//# sourceMappingURL=OverflowMenu-ea73b702.js.map
