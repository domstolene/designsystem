import{s as P,a as r,j as R,F as oe}from"./ddsReferenceTokens-647ce456.js";import{r as y}from"./index-ebeaab24.js";import{v as se,s as ne,b as re,e as te,f as _,h as ie,g as ae}from"./BaseComponentProps-a100791d.js";import{u as le}from"./useFloatPosition-16b5a301.js";import{O as F,o as E}from"./OverflowMenuItem-1c31de12.js";import{b as T}from"./libraryAdd-35e18a4f.js";import"./Icon-42793503.js";import{s as N}from"./scrollbarStyling-d0d816c9.js";import{D as ce}from"./Divider-97c7888f.js";const{container:w,divider:D}=E,ue=P.div`
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
    ${ne}
  }
`,O=P.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
  margin: 0;
`,fe=P(ce)`
  margin-left: ${D.marginLeft};
  margin-right: ${D.marginRight};
`,k=y.forwardRef((d,j)=>{var M,$;const{anchorRef:f,onClose:s,onToggle:n,isOpen:t=!1,placement:S="bottom-end",items:v,navItems:m,userProps:i,id:x,offset:z=E.offset,className:H,htmlProps:U={},...q}=d,{reference:C,floating:B,refs:l,styles:K}=le(null,{placement:S,offset:z}),L=re(j,B);y.useEffect(()=>{C(f?f.current:null)},[f]),te([(M=l==null?void 0:l.floating)==null?void 0:M.current,($=l==null?void 0:l.reference)==null?void 0:$.current],()=>{t&&(s&&s(),n&&n())}),_(["Esc","Escape"],()=>{var o;t&&(s&&s(),n&&n(),f&&((o=f.current)==null||o.focus()))}),_(["Tab"],()=>{t&&(s&&s(),n&&n())});const a=[],p=!!v&&v.length>0,c=!!m&&m.length>0,{name:h,...V}=i||{},A=h&&i&&!i.href&&!i.onClick,g=h&&i&&(!!i.href||!!i.onClick);g&&a.push({title:h,...V}),c&&a.push(...m),p&&a.push(...v);const I=a.length>0,[G,J]=ie(a&&a.length,!t),e=I?a.map((o,u)=>r("li",{children:r(F,{index:u,focus:G===u&&t,setFocus:J,icon:g&&u===0?T:void 0,...o,onClick:b=>{o.onClick&&o.onClick(b),n&&n(),s&&s()}})},u)):null,Q=()=>{if(I){const o=g?0:-1,u=c?o+1:-1,b=c?o+m.length:-1,ee=p?c?b+1:o+1:-1;return R(oe,{children:[g&&r(O,{children:e==null?void 0:e[0]}),c&&r("nav",{children:r(O,{children:e==null?void 0:e.slice(u,b+1)})}),c&&p&&r(fe,{color:"primaryLighter"}),p&&r(O,{"aria-label":"kontekstmeny",children:e==null?void 0:e.slice(ee,e.length)})]})}},{style:W={},...X}=U,Y=y.useId(),Z={...ae(x,H,X,q),ref:L,id:x??`${Y}-overflowMenu`,isOpen:t,style:{...W,...K.floating},"aria-hidden":!t,role:"menu"};return R(ue,{...Z,"aria-label":"bruk piltaster for å navigere",children:[A&&r(F,{title:h,icon:T}),Q()]})});k.displayName="OverflowMenu";try{k.displayName="OverflowMenu",k.__docgenInfo={description:"",displayName:"OverflowMenu",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}}}}}catch{}export{k as O};
//# sourceMappingURL=OverflowMenu-0fcf8b66.js.map
