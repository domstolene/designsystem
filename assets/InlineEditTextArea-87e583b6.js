import{j as h,a as r}from"./jsx-runtime-e43ccb36.js";import{r as i}from"./index-1b03fe98.js";import{I as _,S as x,i as A,d as M,a as R}from"./InlineEdit.utils-1f5a9952.js";import{b as V,i as C,d as v}from"./BaseComponentProps-b6ad9f7d.js";import{h as T}from"./libraryAdd-72c0bfa3.js";import{I as B}from"./Icon-eb542f51.js";import{r as F}from"./renderInputMessage-4f5fcc5d.js";import{O as w,I as O}from"./Input.styles-97d4f19a.js";const s=i.forwardRef((e,d)=>{const{id:o,error:l,errorMessage:a,isEditing:t,width:u=M,"aria-describedby":p,emptiable:m,hideIcon:n,...f}=e,q=i.useId(),c=o??`${q}-InlineTextArea`,g=!!a,I=v(c,"errorMessage"),b=v(c,"desc"),k=i.useRef(null),S=V(d,k);return h(w,{width:u,children:[h(O,{children:[!t&&!n&&r(_,{onClick:()=>{var y;(y=k.current)==null||y.focus()},children:r(B,{icon:T,iconSize:"small"})}),r(x,{...f,id:c,ref:S,hasErrorMessage:!!l||g,isEditing:t,hideIcon:n,"aria-describedby":C([g?I:void 0,b,p])})]}),A(b,m),F(void 0,void 0,a,I)]})});s.displayName="InlineTextArea";try{s.displayName="InlineTextArea",s.__docgenInfo={description:"",displayName:"InlineTextArea",props:{error:{defaultValue:null,description:"Spesifiserer error state. Hvis `errorMessage` ikke brukes må inputfeltet knyttes med ARIA til en feilmelding som vises andre steder i applikasjonen.",name:"error",required:!1,type:{name:"boolean | undefined"}},errorMessage:{defaultValue:null,description:"Feilmelding. Setter også error state.",name:"errorMessage",required:!1,type:{name:"string | undefined"}},width:{defaultValue:null,description:"Bredde på komponenten.",name:"width",required:!1,type:{name:"Width<0 | (string & {})> | undefined"}},hideIcon:{defaultValue:null,description:"Om redigeringsikonet skal vises.",name:"hideIcon",required:!1,type:{name:"boolean | undefined"}},emptiable:{defaultValue:null,description:"**OBS!** settes automatisk av forelder. Spesifiserer om brukeren kan tømme inputfeltet.",name:"emptiable",required:!1,type:{name:"boolean | undefined"}},isEditing:{defaultValue:null,description:"**OBS!** settes automatisk av forelder. Spesifiserer om komponenten er i redigeringsmodus.",name:"isEditing",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const E=i.forwardRef((e,d)=>{const{onSetValue:o,emptiable:l,value:a,onFocus:t,onChange:u,onBlur:p,...m}=e,n=i.useRef(null),f=V(d,n);return r(R,{onSetValue:o,emptiable:l,inputRef:n,value:a,onFocus:t,onChange:u,onBlur:p,children:r(s,{ref:f,...m})})});try{E.displayName="InlineEditTextArea",E.__docgenInfo={description:"",displayName:"InlineEditTextArea",props:{onFocus:{defaultValue:null,description:"Ekstra callback ved `onFocus`-event.",name:"onFocus",required:!1,type:{name:"(() => void) | undefined"}},onBlur:{defaultValue:null,description:"Ekstra callback ved `onBlur`-event.",name:"onBlur",required:!1,type:{name:"(() => void) | undefined"}},onChange:{defaultValue:null,description:"Ekstra callback ved `onChange`-event.",name:"onChange",required:!1,type:{name:"(() => void) | undefined"}},onSetValue:{defaultValue:null,description:"Callback for når verdien blir lagret.",name:"onSetValue",required:!1,type:{name:"((value: string) => void) | undefined"}},emptiable:{defaultValue:null,description:"Spesifiserer om brukeren kan tømme inputfeltet.",name:"emptiable",required:!1,type:{name:"boolean | undefined"}},width:{defaultValue:null,description:"Bredde på komponenten.",name:"width",required:!1,type:{name:"Width<0 | (string & {})> | undefined"}},error:{defaultValue:null,description:"Spesifiserer error state. Hvis `errorMessage` ikke brukes må inputfeltet knyttes med ARIA til en feilmelding som vises andre steder i applikasjonen.",name:"error",required:!1,type:{name:"boolean | undefined"}},errorMessage:{defaultValue:null,description:"Feilmelding. Setter også error state.",name:"errorMessage",required:!1,type:{name:"string | undefined"}},hideIcon:{defaultValue:null,description:"Om redigeringsikonet skal vises.",name:"hideIcon",required:!1,type:{name:"boolean | undefined"}}}}}catch{}export{E as I};
//# sourceMappingURL=InlineEditTextArea-87e583b6.js.map
