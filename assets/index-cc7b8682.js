import{a as i,j as z,F as ae}from"./jsx-runtime-e43ccb36.js";import{v as oe,h as ie,g as re,d as M,P as le,b as ue,i as de,e as ce,f as pe,p as K}from"./BaseComponentProps-b46a4458.js";import{r}from"./index-1b03fe98.js";import{j as ge}from"./Input.styles-c3e229ec.js";import{bb as me,a1 as fe}from"./libraryAdd-dfc2ed03.js";import{I as Se}from"./Icon-e72250a3.js";import"./Caption-a006c5bc.js";import"./Heading-3ac6a2d9.js";import{L as he}from"./Label-60a960ab.js";import"./Legend-bad3d4ec.js";import"./Link-bef7f478.js";import"./Paragraph-f6678e05.js";import"./TextOverflowEllipsis-c2a9fc8f.js";import{a as Y,T as ye}from"./Typography-9d6edb9c.js";import{d as be,a as ve,s as d,n as O}from"./ddsReferenceTokens-fe3c594e.js";import{r as ke}from"./renderInputMessage-9f8878f3.js";import{r as Ce}from"./removeListStyling-80ec5e55.js";import{O as xe}from"./OverflowMenuItem-62fa7173.js";import{s as U}from"./scrollbarStyling-6a0ce14f.js";import{V as Ie}from"./VisuallyHidden-5eb64410.js";import{B as Z}from"./Button-7239ff93.js";const ee=r.createContext({}),Le=()=>r.useContext(ee),{spacing:t,iconSizes:P,colors:J}=be,{textDefault:te}=ve,ne={small:"bodySans01",medium:"bodySans02",large:"bodySans04"},$e=`${t.SizesDdsSpacingLocalX075NumberPx+P.DdsIconsizeSmallNumberPx+t.SizesDdsSpacingLocalX05NumberPx}px`,De=`${t.SizesDdsSpacingLocalX075NumberPx+P.DdsIconsizeMediumNumberPx+t.SizesDdsSpacingLocalX05NumberPx}px`,ze=`${t.SizesDdsSpacingLocalX075NumberPx+P.DdsIconsizeMediumNumberPx+t.SizesDdsSpacingLocalX05NumberPx}px`,Pe={base:{paddingRight:t.SizesDdsSpacingLocalX25,paddingLeft:t.SizesDdsSpacingLocalX3},sizes:{small:{paddingTop:t.SizesDdsSpacingLocalX05,paddingBottom:t.SizesDdsSpacingLocalX05,paddingLeft:$e},medium:{paddingTop:t.SizesDdsSpacingLocalX075,paddingBottom:t.SizesDdsSpacingLocalX075,paddingLeft:De},large:{paddingTop:t.SizesDdsSpacingLocalX1,paddingBottom:t.SizesDdsSpacingLocalX1,paddingLeft:ze}}},Ee={gap:t.SizesDdsSpacingLocalX05},Ve={gap:t.SizesDdsSpacingLocalX0125},we={base:{left:t.SizesDdsSpacingLocalX075,color:te.textColor},small:{top:`calc(50% - ${P.DdsIconsizeSmallNumberPx/2}px)`},medium:{top:`calc(50% - ${P.DdsIconsizeMediumNumberPx/2}px)`},large:{top:`calc(50% - ${P.DdsIconsizeMediumNumberPx/2}px)`}},Te={right:t.SizesDdsSpacingLocalX075,top:"calc(50% - 14px)",color:te.textColor},qe={marginTop:t.SizesDdsSpacingLocalX025,border:`1px solid ${J.DdsColorInteractiveBase}`,boxShadow:`0 0 0 1px ${J.DdsColorInteractiveBase}`},Ne={paddingLeft:t.SizesDdsSpacingLocalX1},W={input:Pe,searchIcon:we,clearButton:Te,horisontalContainer:Ee,outerContainer:Ve,suggestionsContainer:qe,suggestionsHeader:Ne};function _e(e){const u=document.getElementById(e);return u.value="",{target:u,currentTarget:u,bubbles:!0,cancelable:!1,defaultPrevented:!1,eventPhase:0,isTrusted:!1,preventDefault:()=>{},stopPropagation:()=>{},nativeEvent:new Event("input"),persist:()=>{},type:"change",timeStamp:Date.now(),isDefaultPrevented:()=>!1,isPropagationStopped:()=>!1}}const{suggestionsContainer:A,suggestionsHeader:Be}=W,Xe=d(le)`
  ${({isHidden:e})=>oe(!e)};
  position: absolute;
  top: 100%;
  width: 100%;
  max-height: 300px;
  margin-top: ${A.marginTop};
  border: ${A.border};
  box-shadow: ${A.boxShadow};
  z-index: 80;
  overflow-y: scroll;
  ${U.firefox}
  ${U.webkit}
`,Me=d(xe)`
  ${({size:e})=>e&&Y(ne[e])}
`,Fe=d.ul`
  ${Ce}
`,Re=d(ye)`
  padding-left: ${Be.paddingLeft};
`,N=r.forwardRef((e,u)=>{const{id:c,searchId:p,className:x,htmlProps:I,suggestions:a=[],showSuggestions:f,componentSize:E,onSuggestionClick:V,maxSuggestions:S,...b}=e,g=M(p,"suggestions-header"),[L,s]=ie(a==null?void 0:a.length,!f),$=S?a==null?void 0:a.slice(S):a,D=i(Fe,{role:"listbox","aria-labelledby":g,children:$.map((k,m)=>i("li",{role:"option",children:i(Me,{index:m,focus:L===m&&f,setFocus:s,"aria-label":`søk på ${k}`,onClick:V,title:k,"aria-setsize":$.length,"aria-posinset":m,size:E})},m))}),v=!f;return z(Xe,{...re(c,x,I,b),ref:u,isHidden:v,"aria-hidden":v,children:[i(Re,{typographyType:"supportingStyleTiny01",forwardedAs:"span",id:g,children:"Søkeforslag"}),D]})});N.displayName="SearchSuggestions";try{N.displayName="SearchSuggestions",N.__docgenInfo={description:"",displayName:"SearchSuggestions",props:{componentSize:{defaultValue:null,description:"Størrelsen på komponenten.",name:"componentSize",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},suggestions:{defaultValue:null,description:"Forslag som vises i listen.",name:"suggestions",required:!1,type:{name:"string[] | undefined"}},showSuggestions:{defaultValue:null,description:"Om listen skal vises.",name:"showSuggestions",required:!1,type:{name:"boolean | undefined"}},onSuggestionClick:{defaultValue:null,description:"Callback når et forslag blir valgt, inkludert søkefunksjon.",name:"onSuggestionClick",required:!1,type:{name:"((e: MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined"}},maxSuggestions:{defaultValue:null,description:"Maks antall forslag vist i listen.",name:"maxSuggestions",required:!1,type:{name:"number | undefined"}},searchId:{defaultValue:null,description:"Id til `<Search>`.",name:"searchId",required:!0,type:{name:"string"}},htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:"HTMLAttributes<HTMLDivElement> | undefined"}}}}}catch{}const{input:X,outerContainer:He,horisontalContainer:Ae,searchIcon:Q,clearButton:j}=W,je=e=>{switch(e){case"large":return"medium";case"medium":return"medium";case"small":return"small"}},Oe=d(ge)`
  &[type='search']::-webkit-search-decoration,
  &[type='search']::-webkit-search-cancel-button,
  &[type='search']::-webkit-search-results-button,
  &[type='search']::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }
  padding-right: ${X.base.paddingRight};

  ${({componentSize:e})=>O`
    padding-top: ${X.sizes[e].paddingTop};
    padding-bottom: ${X.sizes[e].paddingBottom};
    padding-left: ${X.sizes[e].paddingLeft};
    ${Y(ne[e])}
  `}
`,We=d(Se)`
  position: absolute;
  left: ${Q.base.left};
  color: ${Q.base.color};
  ${({size:e})=>O`
    top: ${W.searchIcon[e].top};
  `}
  z-index: 1;
`,Ge=d(Z)`
  position: absolute;
  right: ${j.right};
  color: ${j.color};
  top: ${j.top};
`,Ke=d.div`
  display: flex;
  flex-direction: column;
  gap: ${He.gap};
`,Ue=d.div`
  ${e=>e.hasSearchButton&&O`
      display: grid;
      grid-template-columns: 1fr auto;
      gap: ${Ae.gap};
    `}
`,Je=d.div`
  position: relative;
  display: flex;
`,F=r.forwardRef(({componentSize:e="medium",buttonProps:u,name:c,label:p,tip:x,id:I,value:a,onChange:f,className:E,style:V,"aria-describedby":S,...b},g)=>{const L=r.useId(),s=I??`${L}-searchInput`,$=!!p,D=M(s,"tip"),v=M(s,"suggestions"),k=M(s,"suggestions-description"),[m,_]=r.useState(!!a),n=Le(),H=n.inputRef?ue(n.inputRef,g):g,l=q=>{_(q.target.value!==""),n.onValueChange&&n.onValueChange(q),f&&f(q)},h=()=>{const q=_e(s);l(q)},w={className:E,style:V},C={...b,ref:H,componentSize:e,name:c,type:"search",id:s,"aria-describedby":de([x?D:void 0,n.suggestions?k:void 0,S]),value:n.inputValue??a,onChange:l,autoComplete:"off"},{label:T,onClick:B,...o}=u??{},y=!!n.suggestions,G=!!u&&!!B;return z(Ke,{children:[$&&i(he,{htmlFor:s,children:p}),z("div",{children:[z(Ue,{hasSearchButton:G,...w,children:[z(Je,{children:[i(We,{icon:me,size:e,iconSize:je(e)}),i(Oe,{...C,"aria-autocomplete":y?"list":void 0,"aria-controls":y?v:void 0,"aria-expanded":n.showSuggestions,role:y?"combobox":void 0}),y&&z(ae,{children:[i(N,{id:v,ref:n.suggestionsRef,searchId:s,onSuggestionClick:n.onSugggestionClick,suggestions:n.suggestions,showSuggestions:n.showSuggestions,componentSize:e}),i(Ie,{id:k,as:"span",children:"Bla i søkeforslag med piltaster når listen er utvidet."})]}),m&&i(Ge,{icon:fe,size:"tiny",purpose:"secondary",appearance:"borderless","aria-label":"Tøm",onClick:h})]}),G&&i(Z,{size:e,onClick:B,...o,children:T??"Søk"})]}),ke(x,D)]})]})});F.displayName="Search";try{F.displayName="Search",F.__docgenInfo={description:"",displayName:"Search",props:{label:{defaultValue:null,description:"Ledetekst for input.",name:"label",required:!1,type:{name:"string | undefined"}},tip:{defaultValue:null,description:"Hjelpetekst.",name:"tip",required:!1,type:{name:"string | undefined"}},componentSize:{defaultValue:{value:"medium"},description:"Størrelsen på komponenten.",name:"componentSize",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},buttonProps:{defaultValue:null,description:"Props for søkeknappen.",name:"buttonProps",required:!1,type:{name:"ButtonProps | undefined"}}}}}catch{}const R=e=>{const{value:u,data:c,filter:p,queryLength:x=2,onChange:I,onSuggestionSelection:a,children:f}=e,[E,V]=r.useState(u??""),[S,b]=r.useState([]),[g,L]=r.useState(!1),s=()=>g===!0&&L(!1),$=()=>g===!1&&L(!0);r.useEffect(()=>{S.length>0?$():s()},[S]);const D=l=>l.array[0].relevance!==void 0,v=l=>{const h=l.target.value;m(h);let w=[];if(h.length>=x){if(c)if(D(c)){const{sortFunction:C,array:T}=c;w=T.filter(o=>p?p(o.text,h):K(o.text,h)).sort(C?(o,y)=>C(o,y):void 0).map(o=>o.text)}else{const{sortFunction:C,array:T}=c;w=T.filter(o=>p?p(o,h):K(o,h)).sort(C?(o,y)=>C(o,y):void 0)}b(w)}else b([]);I&&I(l)},k=l=>{b([]),m(l.target.innerText),a&&a(),s()},m=l=>{V(l??"")},_=r.useRef(null),n=r.useRef(null);ce([_.current,n.current],()=>{s()}),pe("Tab",()=>s());const H={showSuggestions:g,inputRef:_,suggestionsRef:n,suggestions:S,onValueChange:v,inputValue:E,onSugggestionClick:k};return i(ee.Provider,{value:H,children:f})};R.displayName="SearchAutocompleteWrapper";try{R.displayName="SearchAutocompleteWrapper",R.__docgenInfo={description:"",displayName:"SearchAutocompleteWrapper",props:{data:{defaultValue:null,description:"Array med data som kan søkes på og eventuelt tilhørende sorteringsfunksjon. Array kan bestå av elementer av typen `string`  eller objekter med vekt og tekst.",name:"data",required:!1,type:{name:"SearchData | WeightedSearchData | undefined"}},onChange:{defaultValue:null,description:"Ekstra callback ved `onChange` i `<Search>`.",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => void) | undefined"}},onSuggestionSelection:{defaultValue:null,description:"Callback når et forslag blir valgt, inkludert søkefunksjon.",name:"onSuggestionSelection",required:!1,type:{name:"(() => void) | undefined"}},filter:{defaultValue:null,description:"Custom filter for forslag.",name:"filter",required:!1,type:{name:"((sugestion: string, query: string) => boolean) | undefined"}},queryLength:{defaultValue:null,description:"Minst lengde på query når forslag skal vises.",name:"queryLength",required:!1,type:{name:"number | undefined"}},children:{defaultValue:null,description:"Barnet til komponenten (`<Search />`).",name:"children",required:!1,type:{name:"ReactNode"}},value:{defaultValue:null,description:"Initielle `value` i `<Search>`.",name:"value",required:!1,type:{name:"string | undefined"}}}}}catch{}const se=F;se.AutocompleteWrapper=R;se.Suggestions=N;export{se as S};
//# sourceMappingURL=index-cc7b8682.js.map
