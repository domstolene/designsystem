import{a as F,F as N,d as z,s,A as B,j as H}from"./ddsReferenceTokens-647ce456.js";import{r as t}from"./index-ebeaab24.js";import{f as E,e as T}from"./BaseComponentProps-a100791d.js";import{S as W}from"./Input.styles-115c96a3.js";import{s as v}from"./scrollbarStyling-d0d816c9.js";import{V as D}from"./VisuallyHidden-d3f4e065.js";const d=e=>{const{emptiable:n,value:c,onSetValue:p,onChange:f,onFocus:m,onBlur:g,inputRef:y,children:b}=e,[k,h]=t.useState(c||""),[x,i]=t.useState(!1),q=r=>{h(r.target.value),f&&f()},C=()=>{i(!0),m&&m()},L=r=>{!n&&r.target.value.trim()===""?h(c):p&&p(r.target.value),i(!1),g&&g()},o=()=>{y.current===document.activeElement&&document.activeElement instanceof HTMLElement&&(i(!1),document.activeElement.blur())};E(["Enter"],()=>o()),E(["Escape"],()=>o()),T(y.current,()=>o());const $=t.Children.only(t.isValidElement(b)&&t.cloneElement(b,{onChange:q,onBlur:L,onFocus:C,isEditing:x,value:k,emptiable:n}));return F(N,{children:$})};d.displayName="InlineEdit";try{d.displayName="InlineEdit",d.__docgenInfo={description:"",displayName:"InlineEdit",props:{onSetValue:{defaultValue:null,description:"Callback for når verdien blir lagret.",name:"onSetValue",required:!1,type:{name:"((value: string) => void) | undefined"}},inputRef:{defaultValue:null,description:"Ref til barnet.",name:"inputRef",required:!0,type:{name:"RefObject<HTMLElement>"}},children:{defaultValue:null,description:"Barn (inputelementet).",name:"children",required:!0,type:{name:"ReactNode"}},emptiable:{defaultValue:null,description:"Spesifiserer om brukeren kan tømme inputfeltet.",name:"emptiable",required:!1,type:{name:"boolean | undefined"}},onChange:{defaultValue:null,description:"Ekstra callback ved `onChange`-event.",name:"onChange",required:!1,type:{name:"(() => void) | undefined"}},onFocus:{defaultValue:null,description:"Ekstra callback ved `onFocus`-event.",name:"onFocus",required:!1,type:{name:"(() => void) | undefined"}},onBlur:{defaultValue:null,description:"Ekstra callback ved `onBlur`-event.",name:"onBlur",required:!1,type:{name:"(() => void) | undefined"}}}}}catch{}const{colors:_,spacing:l,fontPackages:w}=z,M={padding:l.SizesDdsSpacingLocalX025,font:w.body_sans_02.base,backgroundColor:"transparent",withIcon:{paddingLeft:l.SizesDdsSpacingLocalX2},hover:{backgroundColor:_.DdsColorInteractiveLightest},focus:{backgroundColor:_.DdsColorNeutralsWhite}},R={top:l.SizesDdsSpacingLocalX05,left:l.SizesDdsSpacingLocalX05},A={inlineEdit:M,iconWrapper:R},{inlineEdit:a,iconWrapper:I}=A,J="140px",u=s(W)`
  border-color: transparent;
  background-color: ${a.backgroundColor};
  padding: ${a.padding};
  ${a.font};
  ${({isEditing:e,hideIcon:n})=>!e&&!n&&B`
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
`,S=s(u)`
  resize: vertical;
  ${v.webkit}
  ${v.firefox}
`,V=s.span`
  position: absolute;
  left: ${I.left};
  top: ${I.top};
  z-index: 1;
  &:hover {
    cursor: text;
  }
`;try{u.displayName="StyledInlineInput",u.__docgenInfo={description:"",displayName:"StyledInlineInput",props:{hideIcon:{defaultValue:null,description:"",name:"hideIcon",required:!1,type:{name:"boolean | undefined"}},componentSize:{defaultValue:null,description:"Størrelse på inputfeltet.",name:"componentSize",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"tiny"'},{value:'"small"'},{value:'"medium"'}]}},prefixLength:{defaultValue:null,description:"",name:"prefixLength",required:!1,type:{name:"number | undefined"}},suffixLength:{defaultValue:null,description:"",name:"suffixLength",required:!1,type:{name:"number | undefined"}},hasErrorMessage:{defaultValue:null,description:"",name:"hasErrorMessage",required:!0,type:{name:"boolean"}},isEditing:{defaultValue:null,description:"",name:"isEditing",required:!1,type:{name:"boolean | undefined"}}}}}catch{}try{S.displayName="StyledInlineTextArea",S.__docgenInfo={description:"",displayName:"StyledInlineTextArea",props:{hideIcon:{defaultValue:null,description:"",name:"hideIcon",required:!1,type:{name:"boolean | undefined"}},componentSize:{defaultValue:null,description:"Størrelse på inputfeltet.",name:"componentSize",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"tiny"'},{value:'"small"'},{value:'"medium"'}]}},prefixLength:{defaultValue:null,description:"",name:"prefixLength",required:!1,type:{name:"number | undefined"}},suffixLength:{defaultValue:null,description:"",name:"suffixLength",required:!1,type:{name:"number | undefined"}},hasErrorMessage:{defaultValue:null,description:"",name:"hasErrorMessage",required:!0,type:{name:"boolean"}},isEditing:{defaultValue:null,description:"",name:"isEditing",required:!1,type:{name:"boolean | undefined"}}}}}catch{}try{V.displayName="IconWrapper",V.__docgenInfo={description:"",displayName:"IconWrapper",props:{}}}catch{}const Q=(e,n)=>H(D,{id:e,as:"span",children:["Escape, Enter eller Tab for å lagre."," ",!n&&"Inputfeltet er ikke tømmbar."]});export{V as I,S,d as a,u as b,J as d,Q as i};
//# sourceMappingURL=InlineEdit.utils-b013c397.js.map
