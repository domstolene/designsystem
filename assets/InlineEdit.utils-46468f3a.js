import{a as $,F as w,j as N}from"./jsx-runtime-e43ccb36.js";import{r as t}from"./index-1b03fe98.js";import{f as _,e as D}from"./BaseComponentProps-77dc9c6e.js";import{d as A,s as u,n as F}from"./ddsReferenceTokens-cf345c8b.js";import{S as L}from"./Input.styles-4ebb4961.js";import{s as v}from"./scrollbarStyling-5c8dd8e6.js";import{V as B}from"./VisuallyHidden-30328d1d.js";const d=e=>{const{emptiable:n,value:c,onSetValue:p,onChange:f,onFocus:m,onBlur:g,inputRef:y,children:b}=e,[S,h]=t.useState(c??""),[C,o]=t.useState(!1),T=r=>{h(r.target.value),f&&f()},q=()=>{o(!0),m&&m()},x=r=>{!n&&r.target.value.trim()===""?h(c):p&&p(r.target.value),o(!1),g&&g()},i=()=>{y.current===document.activeElement&&document.activeElement instanceof HTMLElement&&(o(!1),document.activeElement.blur())};_(["Enter"],()=>i()),_(["Escape"],()=>i()),D(y.current,()=>i());const W=t.Children.only(t.isValidElement(b)&&t.cloneElement(b,{onChange:T,onBlur:x,onFocus:q,isEditing:C,value:S,emptiable:n}));return $(w,{children:W})};d.displayName="InlineEdit";try{d.displayName="InlineEdit",d.__docgenInfo={description:"",displayName:"InlineEdit",props:{onSetValue:{defaultValue:null,description:"Callback for når verdien blir lagret.",name:"onSetValue",required:!1,type:{name:"((value: string) => void) | undefined"}},inputRef:{defaultValue:null,description:"Ref til barnet.",name:"inputRef",required:!0,type:{name:"RefObject<HTMLElement>"}},children:{defaultValue:null,description:"Barn (inputelementet).",name:"children",required:!0,type:{name:"ReactNode"}},emptiable:{defaultValue:null,description:"Spesifiserer om brukeren kan tømme inputfeltet.",name:"emptiable",required:!1,type:{name:"boolean | undefined"}},onChange:{defaultValue:null,description:"Ekstra callback ved `onChange`-event.",name:"onChange",required:!1,type:{name:"(() => void) | undefined"}},onFocus:{defaultValue:null,description:"Ekstra callback ved `onFocus`-event.",name:"onFocus",required:!1,type:{name:"(() => void) | undefined"}},onBlur:{defaultValue:null,description:"Ekstra callback ved `onBlur`-event.",name:"onBlur",required:!1,type:{name:"(() => void) | undefined"}}}}}catch{}const{colors:E,spacing:l,fontPackages:H}=A,z={padding:l.SizesDdsSpacingLocalX025,font:H.body_sans_02.base,backgroundColor:"transparent",withIcon:{paddingLeft:l.SizesDdsSpacingLocalX2},hover:{backgroundColor:E.DdsColorInteractiveLightest},focus:{backgroundColor:E.DdsColorNeutralsWhite}},R={top:l.SizesDdsSpacingLocalX05,left:l.SizesDdsSpacingLocalX05},j={inlineEdit:z,iconWrapper:R},{inlineEdit:a,iconWrapper:I}=j,Q="140px",s=u(L)`
  border-color: transparent;
  background-color: ${a.backgroundColor};
  padding: ${a.padding};
  ${a.font};
  ${({isEditing:e,hideIcon:n})=>!e&&!n&&F`
      padding-left: ${a.withIcon.paddingLeft};
    `}

  &:hover:enabled:read-write:not(:focus) {
    background-color: ${a.hover.backgroundColor};
    border-color: transparent;
    box-shadow: none;
  }
  &:focus {
    background-color: ${a.focus.backgroundColor};
  }
`,k=u(s).attrs({as:"textarea"})`
  resize: vertical;
  ${v.webkit}
  ${v.firefox}
`,V=u.span`
  position: absolute;
  left: ${I.left};
  top: ${I.top};
  z-index: 1;
  &:hover {
    cursor: text;
  }
`;try{s.displayName="StyledInlineInput",s.__docgenInfo={description:"",displayName:"StyledInlineInput",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}}}catch{}try{k.displayName="StyledInlineTextArea",k.__docgenInfo={description:"",displayName:"StyledInlineTextArea",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}}}catch{}try{V.displayName="IconWrapper",V.__docgenInfo={description:"",displayName:"IconWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}}}catch{}const U=(e,n)=>N(B,{id:e,as:"span",children:["Escape, Enter eller Tab for å lagre."," ",!n&&"Inputfeltet er ikke tømmbar."]});export{V as I,k as S,d as a,s as b,Q as d,U as i};
//# sourceMappingURL=InlineEdit.utils-46468f3a.js.map
