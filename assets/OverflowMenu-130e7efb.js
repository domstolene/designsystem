import{a,j as $,F as Z}from"./jsx-runtime-e43ccb36.js";import{r as y}from"./index-1b03fe98.js";import{s as x}from"./ddsReferenceTokens-cf345c8b.js";import{v as ee,s as oe,b as re,e as se,f as T,h as ne,g as te}from"./BaseComponentProps-77dc9c6e.js";import{u as ae}from"./useFloatPosition-8239dfed.js";import{O as F,o as N}from"./OverflowMenuItem-4d35f578.js";import{b as I}from"./libraryAdd-1d1f72ea.js";import"./Icon-764411b5.js";import{s as _}from"./scrollbarStyling-5c8dd8e6.js";import{D as ie}from"./Divider-f0fd1e93.js";const{container:w,divider:D}=N,le=x.div`
  box-sizing: border-box;
  z-index: 100;
  overflow-y: auto;
  min-width: 180px;
  max-width: 300px;
  ${({isOpen:u})=>ee(u)}
  border: ${w.border};
  background-color: ${w.backgroundColor};
  border-radius: ${w.borderRadius};

  ${_.webkit}
  ${_.firefox}

  *::selection {
    ${oe}
  }
`,k=x.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
  margin: 0;
`,ce=x(ie)`
  margin-left: ${D.marginLeft};
  margin-right: ${D.marginRight};
`,P=y.forwardRef((u,E)=>{var M,R;const{anchorRef:f,onClose:s,onToggle:n,isOpen:i=!1,placement:j="bottom-end",items:v,navItems:m,userProps:l,id:C,offset:q=N.offset,className:S,htmlProps:V={},...z}=u,{refs:r,styles:A}=ae(null,{placement:j,offset:q}),H=re(E,r.setFloating);y.useEffect(()=>{f?r.setReference(f.current):r.setReference(null)},[f]),se([(M=r==null?void 0:r.floating)==null?void 0:M.current,(R=r==null?void 0:r.reference)==null?void 0:R.current],()=>{i&&(s&&s(),n&&n())}),T(["Esc","Escape"],()=>{var o;i&&(s&&s(),n&&n(),f&&((o=f.current)==null||o.focus()))}),T(["Tab"],()=>{i&&(s&&s(),n&&n())});const t=[],p=!!v&&v.length>0,c=!!m&&m.length>0,{name:h,...U}=l??{},W=h&&l&&!l.href&&!l.onClick,g=h&&l&&(!!l.href||!!l.onClick);g&&t.push({title:h,...U}),c&&t.push(...m),p&&t.push(...v);const O=t.length>0,[B,K]=ne(t==null?void 0:t.length,!i),e=O?t.map((o,d)=>a("li",{children:a(F,{index:d,focus:B===d&&i,setFocus:K,icon:g&&d===0?I:void 0,...o,onClick:b=>{o.onClick&&o.onClick(b),n&&n(),s&&s()}})},d)):null,L=()=>{if(O){const o=g?0:-1,d=c?o+1:-1,b=c?o+m.length:-1,Y=p?c?b+1:o+1:-1;return $(Z,{children:[g&&a(k,{children:e==null?void 0:e[0]}),c&&a("nav",{children:a(k,{children:e==null?void 0:e.slice(d,b+1)})}),c&&p&&a(ce,{color:"primaryLighter"}),p&&a(k,{"aria-label":"kontekstmeny",children:e==null?void 0:e.slice(Y,e.length)})]})}},{style:G={},...J}=V,Q=y.useId(),X={...te(C,S,J,z),ref:H,id:C??`${Q}-overflowMenu`,isOpen:i,style:{...G,...A.floating},"aria-hidden":!i,role:"menu"};return $(le,{...X,"aria-label":"bruk piltaster for å navigere",children:[W&&a(F,{title:h,icon:I}),L()]})});P.displayName="OverflowMenu";try{P.displayName="OverflowMenu",P.__docgenInfo={description:"",displayName:"OverflowMenu",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}}}catch{}export{P as O};
//# sourceMappingURL=OverflowMenu-130e7efb.js.map
