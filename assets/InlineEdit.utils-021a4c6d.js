import{a as L,F as B,j as H}from"./jsx-runtime-e43ccb36.js";import{r as a}from"./index-1b03fe98.js";import{f as E,e as T}from"./BaseComponentProps-b46a4458.js";import{d as W,s as c,n as q}from"./ddsReferenceTokens-fe3c594e.js";import{S as D}from"./Input.styles-c3e229ec.js";import{s as h}from"./scrollbarStyling-6a0ce14f.js";import{V as w}from"./VisuallyHidden-5eb64410.js";const s=e=>{const{emptiable:n,value:u,onSetValue:p,onChange:f,onFocus:m,onBlur:g,inputRef:y,children:b}=e,[C,_]=a.useState(u??""),[V,i]=a.useState(!1),x=o=>{_(o.target.value),f&&f()},$=()=>{i(!0),m&&m()},N=o=>{!n&&o.target.value.trim()===""?_(u):p&&p(o.target.value),i(!1),g&&g()},l=()=>{y.current===document.activeElement&&document.activeElement instanceof HTMLElement&&(i(!1),document.activeElement.blur())};E(["Enter"],()=>l()),E(["Escape"],()=>l()),T(y.current,()=>l());const F=a.Children.only(a.isValidElement(b)&&a.cloneElement(b,{onChange:x,onBlur:N,onFocus:$,isEditing:V,value:C,emptiable:n}));return L(B,{children:F})};s.displayName="InlineEdit";try{s.displayName="InlineEdit",s.__docgenInfo={description:"",displayName:"InlineEdit",props:{onSetValue:{defaultValue:null,description:"Callback for når verdien blir lagret.",name:"onSetValue",required:!1,type:{name:"((value: string) => void) | undefined"}},inputRef:{defaultValue:null,description:"Ref til barnet.",name:"inputRef",required:!0,type:{name:"RefObject<HTMLElement>"}},children:{defaultValue:null,description:"Barn (inputelementet).",name:"children",required:!0,type:{name:"ReactNode"}},emptiable:{defaultValue:null,description:"Spesifiserer om brukeren kan tømme inputfeltet.",name:"emptiable",required:!1,type:{name:"boolean | undefined"}},onChange:{defaultValue:null,description:"Ekstra callback ved `onChange`-event.",name:"onChange",required:!1,type:{name:"(() => void) | undefined"}},onFocus:{defaultValue:null,description:"Ekstra callback ved `onFocus`-event.",name:"onFocus",required:!1,type:{name:"(() => void) | undefined"}},onBlur:{defaultValue:null,description:"Ekstra callback ved `onBlur`-event.",name:"onBlur",required:!1,type:{name:"(() => void) | undefined"}}}}}catch{}const{colors:I,spacing:r,fontPackages:z}=W,R={padding:r.SizesDdsSpacingLocalX025,font:z.body_sans_02.base,backgroundColor:"transparent",withIcon:{paddingLeft:r.SizesDdsSpacingLocalX2},hover:{backgroundColor:I.DdsColorInteractiveLightest},focus:{backgroundColor:I.DdsColorNeutralsWhite}},j={top:r.SizesDdsSpacingLocalX05,left:r.SizesDdsSpacingLocalX05},O={inlineEdit:R,iconWrapper:j},{inlineEdit:t,iconWrapper:v}=O,Q="140px",d=c(D)`
  border-color: transparent;
  background-color: ${t.backgroundColor};
  padding: ${t.padding};
  ${t.font};
  ${({isEditing:e,hideIcon:n})=>!e&&!n&&q`
      padding-left: ${t.withIcon.paddingLeft};
    `}

  &:hover:enabled:read-write:not(:focus) {
    background-color: ${t.hover.backgroundColor};
    border-color: transparent;
    box-shadow: none;
  }
  &:focus {
    background-color: ${t.focus.backgroundColor};
  }
`,k=c(d).attrs({as:"textarea"})`
  resize: vertical;
  ${h.webkit}
  ${h.firefox}
`,S=c.span`
  position: absolute;
  left: ${v.left};
  top: ${v.top};
  z-index: 1;
  &:hover {
    cursor: text;
  }
`;try{d.displayName="StyledInlineInput",d.__docgenInfo={description:"",displayName:"StyledInlineInput",props:{}}}catch{}try{k.displayName="StyledInlineTextArea",k.__docgenInfo={description:"",displayName:"StyledInlineTextArea",props:{}}}catch{}try{S.displayName="IconWrapper",S.__docgenInfo={description:"",displayName:"IconWrapper",props:{}}}catch{}const U=(e,n)=>H(w,{id:e,as:"span",children:["Escape, Enter eller Tab for å lagre."," ",!n&&"Inputfeltet er ikke tømmbar."]});export{S as I,k as S,s as a,d as b,Q as d,U as i};
//# sourceMappingURL=InlineEdit.utils-021a4c6d.js.map
