import{s as $,a as n,j as M,F as ee}from"./ddsReferenceTokens-f1d35829.js";import{r as y}from"./index-d47b1f5a.js";import{L as oe,Q as re,$ as se,S as ne,_ as te,O as R,Y as ae,a as ie}from"./dds-core-c67132cd.js";import{O as F,o as T}from"./OverflowMenuItem-c1dda316.js";import{L as S}from"./dds-icons-265d9665.js";import{s as E}from"./scrollbarStyling-5cc839fb.js";import{D as le}from"./Divider-1dae9af4.js";const{container:k,divider:L}=T,ce=$.div`
  box-sizing: border-box;
  z-index: 100;
  overflow-y: auto;
  min-width: 180px;
  max-width: 300px;
  ${({isOpen:b})=>oe(b)}
  border: ${k.border};
  background-color: ${k.backgroundColor};
  border-radius: ${k.borderRadius};

  ${E.webkit}
  ${E.firefox}

  *::selection {
    ${re}
  }
`,x=$.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
  margin: 0;
`,fe=$(le)`
  margin-left: ${L.marginLeft};
  margin-right: ${L.marginRight};
`,de=y.forwardRef((b,j)=>{var O,I;const{anchorRef:d,onClose:r,onToggle:s,isOpen:t=!1,placement:D="bottom-end",items:v,navItems:m,userProps:a,id:w,offset:N=T.offset,className:z,htmlProps:Q={},...U}=b,{reference:C,floating:Y,refs:l,styles:_}=se(null,{placement:D,offset:N}),H=ne(j,Y);y.useEffect(()=>{C(d?d.current:null)},[d]),te([(O=l==null?void 0:l.floating)==null?void 0:O.current,(I=l==null?void 0:l.reference)==null?void 0:I.current],()=>{t&&(r&&r(),s&&s())}),R(["Esc","Escape"],()=>{var o;t&&(r&&r(),s&&s(),d&&((o=d.current)==null||o.focus()))}),R(["Tab"],()=>{t&&(r&&r(),s&&s())});const i=[],u=!!v&&v.length>0,c=!!m&&m.length>0,{name:h,...q}=a||{},A=h&&a&&!a.href&&!a.onClick,p=h&&a&&(!!a.href||!!a.onClick);p&&i.push({title:h,...q}),c&&i.push(...m),u&&i.push(...v);const P=i.length>0,[B,G]=ae(i&&i.length,!t),e=P?i.map((o,f)=>n("li",{children:n(F,{index:f,focus:B===f&&t,setFocus:G,icon:p&&f===0?S:void 0,...o,onClick:g=>{o.onClick&&o.onClick(g),s&&s(),r&&r()}})},f)):null,J=()=>{if(P){const o=p?0:-1,f=c?o+1:-1,g=c?o+m.length:-1,Z=u?c?g+1:o+1:-1;return M(ee,{children:[p&&n(x,{children:e==null?void 0:e[0]}),c&&n("nav",{children:n(x,{children:e==null?void 0:e.slice(f,g+1)})}),c&&u&&n(fe,{color:"primaryLighter"}),u&&n(x,{"aria-label":"kontekstmeny",children:e==null?void 0:e.slice(Z,e.length)})]})}},{style:K={},...V}=Q,W=y.useId(),X={...ie(w,z,V,U),ref:H,id:w??`${W}-overflowMenu`,isOpen:t,style:{...K,..._.floating},"aria-hidden":!t,role:"menu"};return M(ce,{...X,"aria-label":"bruk piltaster for å navigere",children:[A&&n(F,{title:h,icon:S}),J()]})});de.displayName="OverflowMenu";export{de as O};
//# sourceMappingURL=OverflowMenu-c583f668.js.map
