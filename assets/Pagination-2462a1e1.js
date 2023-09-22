import{d as Z,s as P,A as I,a,j as b}from"./ddsReferenceTokens-f1d35829.js";import{r as B}from"./index-d47b1f5a.js";import{T as A}from"./dds-typography-cc6cb429.js";import{i as ee,g as ne,h as ae,G as ie,J as se,K as te}from"./dds-icons-265d9665.js";import{a as D}from"./dds-core-c67132cd.js";import{S as re}from"./Select-cf95274e.js";import{B as m}from"./Button-aa30c63f.js";const E=(e,i)=>{const o=i-e+1;return Array.from({length:o},(w,y)=>y+e)};function oe(e,i){const l="truncator";let s;if(e>4){const c=Math.max(1,i<5||e<=7?1:i+1+1>=e?e-4:i>4&&e>7?i-1:1),v=i<5&&e>7?5:i<5&&e<=7?e:i+1+1<e-1?i+1:(i+1+1===e-1,e),C=Math.min(e,v);s=E(c,C);const d=c>2&&e>7,g=e-C>1&&e>7;return d&&g?s=[1,l,...s,l,e]:d&&!g?s=[1,l,...s]:!d&&g&&(s=[...s,l,e]),[...s]}return E(1,e)}const{spacing:L,colors:le}=Z,ce={gap:L.SizesDdsSpacingLocalX075},de={color:le.DdsColorNeutralsGray7},ge={gap:L.SizesDdsSpacingLocalX075},he={gap:L.SizesDdsSpacingLocalX075},pe={outerContainer:ge,indicatorsContainer:he,truncationIcon:de,list:ce},{outerContainer:ue,indicatorsContainer:fe,truncationIcon:me,list:Ce}=pe,M=P.nav`
  display: flex;
  align-items: center;
`,X=P.ol`
  display: grid;
  grid-auto-flow: column;
  gap: ${Ce.gap};
  margin: 0;
  padding: 0;
`,r=P.li`
  display: inline-grid;
  align-content: center;
  ${({isHidden:e})=>e&&I`
      visibility: hidden;
    `}
`,Se=P.div`
  display: flex;
  gap: ${ue.gap};
  ${({smallScreen:e})=>e?I`
          flex-direction: column;
          align-items: center;
        `:I`
          justify-content: space-between;
          flex-wrap: wrap;
        `}
`,be=P.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: ${fe.gap};
`,Pe=B.forwardRef((e,i)=>{const{itemsAmount:o,defaultItemsPerPage:w=10,defaultActivePage:y=1,withPagination:l=!0,withCounter:s,withSelect:c,selectOptions:v=[{label:"10",value:10},{label:"25",value:25},{label:"50",value:50},{label:"Alle",value:o}],smallScreen:C,onChange:d,onSelectOptionChange:g,id:T,className:z,htmlProps:k,...G}=e,[t,F]=B.useState(y),[h,V]=B.useState(w),x=Math.ceil(o/h),H=oe(x,t),p=(n,S)=>{S&&F(S),n&&d&&d(n,S)},_=n=>{V(n==null?void 0:n.value),g&&g(n)},J=H.length>0?H.map((n,S)=>{const $=n===t;return a(r,{children:n!=="truncator"?a(m,{label:n.toString(),purpose:$?"primary":"secondary",appearance:$?"filled":"ghost",size:"small",onClick:Y=>{p(Y,n)},"aria-label":$?`Nåværende side (side ${n})`:`Gå til side ${n}`}):a(ee,{icon:ne,color:me.color})},`pagination-item-${S}`)}):void 0,N=a(m,{purpose:"secondary",appearance:"ghost",size:"small",icon:se,onClick:n=>{p(n,t-1)},"aria-label":"Gå til forrige siden"}),O=a(m,{purpose:"secondary",appearance:"ghost",size:"small",icon:te,onClick:n=>{p(n,t+1)},"aria-label":"Gå til neste siden"}),R=!c&&!s&&{...D(T,z,k,G)},K={...D(T,z,k,G),smallScreen:C},u=t===1,f=t===x,Q=l?a(M,{ref:i,"aria-label":"paginering",...R,children:b(X,{children:[a(r,{isHidden:u,"aria-hidden":u,children:N}),J,a(r,{isHidden:f,"aria-hidden":f,children:O})]})}):null,q=l?a(M,{ref:i,"aria-label":"paginering",...R,children:b(X,{children:[a(r,{isHidden:u,"aria-hidden":u,children:a(m,{purpose:"secondary",appearance:"ghost",size:"small",icon:ae,onClick:n=>{p(n,1)},"aria-label":"Gå til første siden"})}),a(r,{isHidden:u,"aria-hidden":u,children:N}),a(r,{children:a(m,{label:t.toString(),size:"small",onClick:n=>{p(n,t)}})}),a(r,{isHidden:f,"aria-hidden":f,children:O}),a(r,{isHidden:f,"aria-hidden":f,children:a(m,{purpose:"secondary",appearance:"ghost",size:"small",icon:ie,onClick:n=>{p(n,x)},"aria-label":"Gå til siste siden"})})]})}):null,U=t===1?1:t*h-h+1,W=t===x?o:t*h,j=C?q:Q;return!s&&!c?j:b(Se,{...K,children:[b(be,{children:[c&&a(re,{options:v,isSearchable:!1,width:"88px",defaultValue:{label:h.toString(),value:h},isClearable:!1,onChange:_,"aria-label":"Antall elementer per side"}),s&&b(A,{typographyType:"supportingStyleLabel01",as:"p",children:["Viser ",U,"-",W," av ",o]})]}),j]})});Pe.displayName="Pagination";export{Pe as P};
//# sourceMappingURL=Pagination-2462a1e1.js.map
