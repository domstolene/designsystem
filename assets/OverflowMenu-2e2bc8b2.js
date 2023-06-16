import{s as w,j as n,a as M,F as oo}from"./focus-visible-c2e9b88d.js";import{r as y}from"./index-ebeaab24.js";import{O as R,o as j}from"./OverflowMenuItem-09e2a28b.js";import{u as eo}from"./useRoveFocus-1974dcb0.js";import{P as F}from"./person-eb4bd89d.js";import{v as ro}from"./visibilityTransition-933c6349.js";import{s as T}from"./scrollbarStyling-a46ac0ea.js";import{s as so}from"./selection-fae9d0a8.js";import{u as no}from"./useFloatPosition-f03daf4a.js";import{u as to}from"./useCombinedRefs-40b11bb4.js";import{u as io}from"./useOnClickOutside-1aed2959.js";import{u as D}from"./useOnKeyDown-4552d984.js";import{g as ao}from"./BaseComponentProps-bb0d5515.js";import{D as lo}from"./Divider-ed4eb34e.js";const{container:P,divider:E}=j,co=w.div`
  box-sizing: border-box;
  z-index: 100;
  overflow-y: auto;
  min-width: 180px;
  max-width: 300px;
  ${({isOpen:v})=>ro(v)}
  border: ${P.border};
  background-color: ${P.backgroundColor};
  border-radius: ${P.borderRadius};

  ${T.webkit}
  ${T.firefox}

  *::selection {
    ${so}
  }
`,k=w.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
  margin: 0;
`,mo=w(lo)`
  margin-left: ${E.marginLeft};
  margin-right: ${E.marginRight};
`,fo=y.forwardRef((v,N)=>{var $,I;const{anchorRef:f,onClose:r,onToggle:s,isOpen:t=!1,placement:S="bottom-end",items:b,navItems:u,userProps:i,id:x,offset:z=j.offset,className:H,htmlProps:U={},...B}=v,{reference:C,floating:K,refs:l,styles:L}=no(null,{placement:S,offset:z}),q=to(N,K);y.useEffect(()=>{C(f?f.current:null)},[f]),io([($=l==null?void 0:l.floating)==null?void 0:$.current,(I=l==null?void 0:l.reference)==null?void 0:I.current],()=>{t&&(r&&r(),s&&s())}),D(["Esc","Escape"],()=>{var e;t&&(r&&r(),s&&s(),f&&((e=f.current)==null||e.focus()))}),D(["Tab"],()=>{t&&(r&&r(),s&&s())});const a=[],d=!!b&&b.length>0,c=!!u&&u.length>0,{name:p,...A}=i||{},G=p&&i&&!i.href&&!i.onClick,h=p&&i&&(!!i.href||!!i.onClick);h&&a.push({title:p,...A}),c&&a.push(...u),d&&a.push(...b);const O=a.length>0,[J,Q]=eo(a&&a.length,!t),o=O?a.map((e,m)=>n("li",{children:n(R,{index:m,focus:J===m&&t,setFocus:Q,icon:h&&m===0?F:void 0,...e,onClick:g=>{e.onClick&&e.onClick(g),s&&s(),r&&r()}})},m)):null,V=()=>{if(O){const e=h?0:-1,m=c?e+1:-1,g=c?e+u.length:-1,_=d?c?g+1:e+1:-1;return M(oo,{children:[h&&n(k,{children:o==null?void 0:o[0]}),c&&n("nav",{children:n(k,{children:o==null?void 0:o.slice(m,g+1)})}),c&&d&&n(mo,{color:"primaryLighter"}),d&&n(k,{"aria-label":"kontekstmeny",children:o==null?void 0:o.slice(_,o.length)})]})}},{style:W={},...X}=U,Y=y.useId(),Z={...ao(x,H,X,B),ref:q,id:x??`${Y}-overflowMenu`,isOpen:t,style:{...W,...L.floating},"aria-hidden":!t,role:"menu"};return M(co,{...Z,"aria-label":"bruk piltaster for å navigere",children:[G&&n(R,{title:p,icon:F}),V()]})});fo.displayName="OverflowMenu";export{fo as O};
//# sourceMappingURL=OverflowMenu-2e2bc8b2.js.map
