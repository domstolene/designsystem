import{a as i,j as $,F as Z}from"./jsx-runtime-e43ccb36.js";import{r as y}from"./index-1b03fe98.js";import{s as x}from"./ddsReferenceTokens-fe3c594e.js";import{v as ee,s as oe,b as se,e as re,f as F,h as ne,g as te}from"./BaseComponentProps-b46a4458.js";import{u as ie}from"./useFloatPosition-8db71a9f.js";import{O as I,o as D}from"./OverflowMenuItem-62fa7173.js";import{b as _}from"./libraryAdd-dfc2ed03.js";import"./Icon-e72250a3.js";import{s as T}from"./scrollbarStyling-6a0ce14f.js";import{D as ae}from"./Divider-1e1d271f.js";const{container:w,divider:N}=D,ce=x.div`
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
`,P=y.forwardRef((d,E)=>{var M,R;const{anchorRef:u,onClose:r,onToggle:n,isOpen:a=!1,placement:j="bottom-end",items:v,navItems:m,userProps:c,id:C,offset:S=D.offset,className:z,htmlProps:H={},...U}=d,{refs:s,styles:B}=ie(null,{placement:j,offset:S}),K=se(E,s.setFloating);y.useEffect(()=>{u?s.setReference(u.current):s.setReference(null)},[u]),re([(M=s==null?void 0:s.floating)==null?void 0:M.current,(R=s==null?void 0:s.reference)==null?void 0:R.current],()=>{a&&(r&&r(),n&&n())}),F(["Esc","Escape"],()=>{var o;a&&(r&&r(),n&&n(),u&&((o=u.current)==null||o.focus()))}),F(["Tab"],()=>{a&&(r&&r(),n&&n())});const t=[],p=!!v&&v.length>0,l=!!m&&m.length>0,{name:h,...L}=c??{},q=h&&c&&!c.href&&!c.onClick,g=h&&c&&(!!c.href||!!c.onClick);g&&t.push({title:h,...L}),l&&t.push(...m),p&&t.push(...v);const O=t.length>0,[A,G]=ne(t==null?void 0:t.length,!a),e=O?t.map((o,f)=>i("li",{children:i(I,{index:f,focus:A===f&&a,setFocus:G,icon:g&&f===0?_:void 0,...o,onClick:b=>{o.onClick&&o.onClick(b),n&&n(),r&&r()}})},f)):null,J=()=>{if(O){const o=g?0:-1,f=l?o+1:-1,b=l?o+m.length:-1,Y=p?l?b+1:o+1:-1;return $(Z,{children:[g&&i(k,{children:e==null?void 0:e[0]}),l&&i("nav",{children:i(k,{children:e==null?void 0:e.slice(f,b+1)})}),l&&p&&i(le,{color:"primaryLighter"}),p&&i(k,{"aria-label":"kontekstmeny",children:e==null?void 0:e.slice(Y,e.length)})]})}},{style:Q={},...V}=H,W=y.useId(),X={...te(C,z,V,U),ref:K,id:C??`${W}-overflowMenu`,isOpen:a,style:{...Q,...B.floating},"aria-hidden":!a,role:"menu"};return $(ce,{...X,"aria-label":"bruk piltaster for å navigere",children:[q&&i(I,{title:h,icon:_}),J()]})});P.displayName="OverflowMenu";try{P.displayName="OverflowMenu",P.__docgenInfo={description:"",displayName:"OverflowMenu",props:{}}}catch{}export{P as O};
//# sourceMappingURL=OverflowMenu-21b24d70.js.map
