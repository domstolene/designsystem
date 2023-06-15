import{d as Z,s as P,C as B,j as a,b as S}from"./focus-visible-17f12d09.js";import{r as L}from"./index-c6dae603.js";import{M as A,C as ee,a as ne,b as ae}from"./moreHorizontal-0ee3fd1e.js";import{S as ie}from"./Select-c190ad10.js";import{B as m}from"./Button-4fdfc19e.js";import{I as se}from"./Icon-a968456f.js";import{g as j}from"./BaseComponentProps-bb0d5515.js";import{T as te}from"./Typography-ddbe86f6.js";import{C as oe}from"./chevronRight-c31ab8dd.js";const D=(e,i)=>{const r=i-e+1;return Array.from({length:r},(x,y)=>y+e)};function re(e,i){const l="truncator";let s;if(e>4){const c=Math.max(1,i<5||e<=7?1:i+1+1>=e?e-4:i>4&&e>7?i-1:1),w=i<5&&e>7?5:i<5&&e<=7?e:i+1+1<e-1?i+1:(i+1+1===e-1,e),C=Math.min(e,w);s=D(c,C);const d=c>2&&e>7,g=e-C>1&&e>7;return d&&g?s=[1,l,...s,l,e]:d&&!g?s=[1,l,...s]:!d&&g&&(s=[...s,l,e]),[...s]}return D(1,e)}const{spacing:T,colors:le}=Z,ce={gap:T.SizesDdsSpacingLocalX075},de={color:le.DdsColorNeutralsGray7},ge={gap:T.SizesDdsSpacingLocalX075},he={gap:T.SizesDdsSpacingLocalX075},pe={outerContainer:ge,indicatorsContainer:he,truncationIcon:de,list:ce},{outerContainer:ue,indicatorsContainer:fe,truncationIcon:me,list:Ce}=pe,E=P.nav`
  display: flex;
  align-items: center;
`,F=P.ol`
  display: grid;
  grid-auto-flow: column;
  gap: ${Ce.gap};
  margin: 0;
  padding: 0;
`,o=P.li`
  display: inline-grid;
  align-content: center;
  ${({isHidden:e})=>e&&B`
      visibility: hidden;
    `}
`,be=P.div`
  display: flex;
  gap: ${ue.gap};
  ${({smallScreen:e})=>e?B`
          flex-direction: column;
          align-items: center;
        `:B`
          justify-content: space-between;
          flex-wrap: wrap;
        `}
`,Se=P.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: ${fe.gap};
`,Pe=L.forwardRef((e,i)=>{const{itemsAmount:r,defaultItemsPerPage:x=10,defaultActivePage:y=1,withPagination:l=!0,withCounter:s,withSelect:c,selectOptions:w=[{label:"10",value:10},{label:"25",value:25},{label:"50",value:50},{label:"Alle",value:r}],smallScreen:C,onChange:d,onSelectOptionChange:g,id:$,className:z,htmlProps:k,...H}=e,[t,X]=L.useState(y),[h,V]=L.useState(x),v=Math.ceil(r/h),G=re(v,t),p=(n,b)=>{b&&X(b),n&&d&&d(n,b)},_=n=>{V(n==null?void 0:n.value),g&&g(n)},q=G.length>0?G.map((n,b)=>{const I=n===t;return a(o,{children:n!=="truncator"?a(m,{label:n.toString(),purpose:I?"primary":"secondary",appearance:I?"filled":"ghost",size:"small",onClick:Y=>{p(Y,n)},"aria-label":I?`Nåværende side (side ${n})`:`Gå til side ${n}`}):a(se,{icon:A,color:me.color})},`pagination-item-${b}`)}):void 0,M=a(m,{purpose:"secondary",appearance:"ghost",size:"small",icon:ae,onClick:n=>{p(n,t-1)},"aria-label":"Gå til forrige siden"}),N=a(m,{purpose:"secondary",appearance:"ghost",size:"small",icon:oe,onClick:n=>{p(n,t+1)},"aria-label":"Gå til neste siden"}),O=!c&&!s&&{...j($,z,k,H)},J={...j($,z,k,H),smallScreen:C},u=t===1,f=t===v,K=l?a(E,{ref:i,"aria-label":"paginering",...O,children:S(F,{children:[a(o,{isHidden:u,"aria-hidden":u,children:M}),q,a(o,{isHidden:f,"aria-hidden":f,children:N})]})}):null,Q=l?a(E,{ref:i,"aria-label":"paginering",...O,children:S(F,{children:[a(o,{isHidden:u,"aria-hidden":u,children:a(m,{purpose:"secondary",appearance:"ghost",size:"small",icon:ee,onClick:n=>{p(n,1)},"aria-label":"Gå til første siden"})}),a(o,{isHidden:u,"aria-hidden":u,children:M}),a(o,{children:a(m,{label:t.toString(),size:"small",onClick:n=>{p(n,t)}})}),a(o,{isHidden:f,"aria-hidden":f,children:N}),a(o,{isHidden:f,"aria-hidden":f,children:a(m,{purpose:"secondary",appearance:"ghost",size:"small",icon:ne,onClick:n=>{p(n,v)},"aria-label":"Gå til siste siden"})})]})}):null,U=t===1?1:t*h-h+1,W=t===v?r:t*h,R=C?Q:K;return!s&&!c?R:S(be,{...J,children:[S(Se,{children:[c&&a(ie,{options:w,isSearchable:!1,width:"88px",defaultValue:{label:h.toString(),value:h},isClearable:!1,onChange:_,"aria-label":"Antall elementer per side"}),s&&S(te,{typographyType:"supportingStyleLabel01",as:"p",children:["Viser ",U,"-",W," av ",r]})]}),R]})});Pe.displayName="Pagination";export{Pe as P};
//# sourceMappingURL=Pagination-f21ee121.js.map
