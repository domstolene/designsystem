import{s as $,j as n,a as M,F as ee}from"./focus-visible-35158c22.js";import{r as x}from"./index-d47b1f5a.js";import{x as oe,Z as re,$ as se,S as ne,O as te,j as R,q as ae,a as ie}from"./dds-core-29d22035.js";import{O as j,o as T}from"./OverflowMenuItem-9a10104f.js";import{L as F}from"./dds-icons-7a922c3a.js";import{s as S}from"./scrollbarStyling-1bd29018.js";import{D as le}from"./Divider-982ab6b7.js";const{container:y,divider:E}=T,ce=$.div`
  box-sizing: border-box;
  z-index: 100;
  overflow-y: auto;
  min-width: 180px;
  max-width: 300px;
  ${({isOpen:b})=>oe(b)}
  border: ${y.border};
  background-color: ${y.backgroundColor};
  border-radius: ${y.borderRadius};

  ${S.webkit}
  ${S.firefox}

  *::selection {
    ${re}
  }
`,k=$.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
  margin: 0;
`,fe=$(le)`
  margin-left: ${E.marginLeft};
  margin-right: ${E.marginRight};
`,de=x.forwardRef((b,D)=>{var O,I;const{anchorRef:d,onClose:r,onToggle:s,isOpen:t=!1,placement:N="bottom-end",items:v,navItems:m,userProps:a,id:w,offset:q=T.offset,className:z,htmlProps:L={},...U}=b,{reference:C,floating:Z,refs:l,styles:H}=se(null,{placement:N,offset:q}),A=ne(D,Z);x.useEffect(()=>{C(d?d.current:null)},[d]),te([(O=l==null?void 0:l.floating)==null?void 0:O.current,(I=l==null?void 0:l.reference)==null?void 0:I.current],()=>{t&&(r&&r(),s&&s())}),R(["Esc","Escape"],()=>{var o;t&&(r&&r(),s&&s(),d&&((o=d.current)==null||o.focus()))}),R(["Tab"],()=>{t&&(r&&r(),s&&s())});const i=[],u=!!v&&v.length>0,c=!!m&&m.length>0,{name:h,...B}=a||{},G=h&&a&&!a.href&&!a.onClick,p=h&&a&&(!!a.href||!!a.onClick);p&&i.push({title:h,...B}),c&&i.push(...m),u&&i.push(...v);const P=i.length>0,[J,K]=ae(i&&i.length,!t),e=P?i.map((o,f)=>n("li",{children:n(j,{index:f,focus:J===f&&t,setFocus:K,icon:p&&f===0?F:void 0,...o,onClick:g=>{o.onClick&&o.onClick(g),s&&s(),r&&r()}})},f)):null,Q=()=>{if(P){const o=p?0:-1,f=c?o+1:-1,g=c?o+m.length:-1,_=u?c?g+1:o+1:-1;return M(ee,{children:[p&&n(k,{children:e==null?void 0:e[0]}),c&&n("nav",{children:n(k,{children:e==null?void 0:e.slice(f,g+1)})}),c&&u&&n(fe,{color:"primaryLighter"}),u&&n(k,{"aria-label":"kontekstmeny",children:e==null?void 0:e.slice(_,e.length)})]})}},{style:V={},...W}=L,X=x.useId(),Y={...ie(w,z,W,U),ref:A,id:w??`${X}-overflowMenu`,isOpen:t,style:{...V,...H.floating},"aria-hidden":!t,role:"menu"};return M(ce,{...Y,"aria-label":"bruk piltaster for å navigere",children:[G&&n(j,{title:h,icon:F}),Q()]})});de.displayName="OverflowMenu";export{de as O};
//# sourceMappingURL=OverflowMenu-7482705f.js.map
