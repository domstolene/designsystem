import{d as ne,b as ae,s as d,a as i,j as w,A as F,F as ie}from"./focus-visible-8467fd8b.js";import{x as re,L as ce,D as le,Y as de,a as ge,E as M,S as ue,N as pe,_ as Se,O as me,W as Y}from"./dds-core-b89b291f.js";import{X as he}from"./dds-form-9dbc5b3d.js";import{i as fe,R as be,m as xe}from"./dds-icons-f9255b51.js";import{O as J,T as ye,M as $e}from"./dds-typography-4e6445f7.js";import{r}from"./index-d47b1f5a.js";import{r as Ce}from"./renderInputMessage-6d8b7416.js";import{O as ve}from"./OverflowMenuItem-5d18c7ac.js";import{s as _}from"./scrollbarStyling-b67d8d39.js";import{B as K}from"./Button-ca35c045.js";import{V as Le}from"./VisuallyHidden-0fcd4355.js";const U=r.createContext({}),De=()=>r.useContext(U),{spacing:s,iconSizes:P,colors:Q}=ne,{textDefault:Z}=ae,ee={small:"bodySans01",medium:"bodySans02",large:"bodySans04"},ze=`${s.SizesDdsSpacingLocalX075NumberPx+P.DdsIconsizeSmallNumberPx+s.SizesDdsSpacingLocalX05NumberPx}px`,Ie=`${s.SizesDdsSpacingLocalX075NumberPx+P.DdsIconsizeMediumNumberPx+s.SizesDdsSpacingLocalX05NumberPx}px`,we=`${s.SizesDdsSpacingLocalX075NumberPx+P.DdsIconsizeMediumNumberPx+s.SizesDdsSpacingLocalX05NumberPx}px`,Pe={base:{paddingRight:s.SizesDdsSpacingLocalX25,paddingLeft:s.SizesDdsSpacingLocalX3},sizes:{small:{paddingTop:s.SizesDdsSpacingLocalX05,paddingBottom:s.SizesDdsSpacingLocalX05,paddingLeft:ze},medium:{paddingTop:s.SizesDdsSpacingLocalX075,paddingBottom:s.SizesDdsSpacingLocalX075,paddingLeft:Ie},large:{paddingTop:s.SizesDdsSpacingLocalX1,paddingBottom:s.SizesDdsSpacingLocalX1,paddingLeft:we}}},Xe={gap:s.SizesDdsSpacingLocalX05},ke={gap:s.SizesDdsSpacingLocalX0125},Be={base:{left:s.SizesDdsSpacingLocalX075,color:Z.textColor},small:{top:`calc(50% - ${P.DdsIconsizeSmallNumberPx/2}px)`},medium:{top:`calc(50% - ${P.DdsIconsizeMediumNumberPx/2}px)`},large:{top:`calc(50% - ${P.DdsIconsizeMediumNumberPx/2}px)`}},Te={right:s.SizesDdsSpacingLocalX075,top:"calc(50% - 14px)",color:Z.textColor},Ne={marginTop:s.SizesDdsSpacingLocalX025,border:`1px solid ${Q.DdsColorInteractiveBase}`,boxShadow:`0 0 0 1px ${Q.DdsColorInteractiveBase}`},Re={paddingLeft:s.SizesDdsSpacingLocalX1},W={input:Pe,searchIcon:Be,clearButton:Te,horisontalContainer:Xe,outerContainer:ke,suggestionsContainer:Ne,suggestionsHeader:Re};function Ee(e){const l=document.getElementById(e);return l.value="",{target:l,currentTarget:l,bubbles:!0,cancelable:!1,defaultPrevented:!1,eventPhase:0,isTrusted:!1,preventDefault:()=>{},stopPropagation:()=>{},nativeEvent:new Event("input"),persist:()=>{},type:"change",timeStamp:Date.now(),isDefaultPrevented:()=>!1,isPropagationStopped:()=>!1}}const{suggestionsContainer:A,suggestionsHeader:Ve}=W,Me=d(re)`
  ${({isHidden:e})=>ce(!e)};
  position: absolute;
  top: 100%;
  width: 100%;
  max-height: 300px;
  margin-top: ${A.marginTop};
  border: ${A.border};
  box-shadow: ${A.boxShadow};
  z-index: 80;
  overflow-y: scroll;
  ${_.firefox}
  ${_.webkit}
`,He=d(ve)`
  ${({size:e})=>J(ee[e])}
`,Ae=d.ul`
  ${le}
`,Oe=d(ye)`
  padding-left: ${Ve.paddingLeft};
`,j=r.forwardRef((e,l)=>{const{id:g,searchId:u,className:v,htmlProps:L,suggestions:a=[],showSuggestions:m,componentSize:X,onSuggestionClick:k,maxSuggestions:h,...x}=e,p=M(u,"suggestions-header"),[D,o]=de(a&&a.length,!m),z=h?a==null?void 0:a.slice(h):a,I=i(Ae,{role:"listbox","aria-labelledby":p,children:z.map(($,S)=>i("li",{role:"option",children:i(He,{index:S,focus:D===S&&m,setFocus:o,"aria-label":`søk på ${$}`,onClick:k,title:$,"aria-setsize":z.length,"aria-posinset":S,size:X})},S))}),y=!m;return w(Me,{...ge(g,v,L,x),ref:l,isHidden:y,"aria-hidden":y,children:[i(Oe,{typographyType:"supportingStyleTiny01",forwardedAs:"span",id:p,children:"Søkeforslag"}),I]})});j.displayName="SearchSuggestions";const{input:V,outerContainer:Fe,horisontalContainer:We,searchIcon:G,clearButton:O}=W,je=e=>{switch(e){case"large":return"medium";case"medium":return"medium";case"small":return"small"}},qe=d(he)`
  &[type='search']::-webkit-search-decoration,
  &[type='search']::-webkit-search-cancel-button,
  &[type='search']::-webkit-search-results-button,
  &[type='search']::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }
  padding-right: ${V.base.paddingRight};

  ${({componentSize:e})=>F`
      padding-top: ${V.sizes[e].paddingTop};
      padding-bottom: ${V.sizes[e].paddingBottom};
      padding-left: ${V.sizes[e].paddingLeft};
      ${J(ee[e])}
    `}
`,Ye=d(fe)`
  position: absolute;
  left: ${G.base.left};
  color: ${G.base.color};
  ${({size:e})=>F`
    top: ${W.searchIcon[e].top};
  `}
  z-index: 1;
`,_e=d(K)`
  position: absolute;
  right: ${O.right};
  color: ${O.color};
  top: ${O.top};
`,Qe=d.div`
  display: flex;
  flex-direction: column;
  gap: ${Fe.gap};
`,Ge=d.div`
  ${e=>e.hasSearchButton&&F`
      display: grid;
      grid-template-columns: 1fr auto;
      gap: ${We.gap};
    `}
`,Je=d.div`
  position: relative;
  display: flex;
`,se=r.forwardRef(({componentSize:e="medium",buttonProps:l,name:g,label:u,tip:v,id:L,value:a,onChange:m,className:X,style:k,"aria-describedby":h,...x},p)=>{const D=r.useId(),o=L??`${D}-searchInput`,z=!!u,I=M(o,"tip"),y=M(o,"suggestions"),$=M(o,"suggestions-description"),[S,R]=r.useState(!!a),t=De(),H=t.inputRef?ue(t.inputRef,p):p,c=N=>{R(N.target.value!==""),t.onValueChange&&t.onValueChange(N),m&&m(N)},f=()=>{const N=Ee(o);c(N)},B={className:X,style:k},C={...x,ref:H,componentSize:e,name:g,type:"search",id:o,"aria-describedby":pe([v?I:void 0,t.suggestions?$:void 0,h]),value:t.inputValue!==void 0?t.inputValue:a,onChange:c,autoComplete:"off"},{label:T,onClick:E,...n}=l||{},b=!!t.suggestions,q=!!l&&!!E;return w(Qe,{children:[z&&i($e,{htmlFor:o,children:u}),w("div",{children:[w(Ge,{hasSearchButton:q,...B,children:[w(Je,{children:[i(Ye,{icon:be,size:e,iconSize:je(e)}),i(qe,{...C,"aria-autocomplete":b?"list":void 0,"aria-controls":b?y:void 0,"aria-expanded":t.showSuggestions,role:b?"combobox":void 0}),b&&w(ie,{children:[i(j,{id:y,ref:t.suggestionsRef,searchId:o,onSuggestionClick:t.onSugggestionClick,suggestions:t.suggestions,showSuggestions:t.showSuggestions,componentSize:e}),i(Le,{id:$,as:"span",children:"Bla i søkeforslag med piltaster når listen er utvidet."})]}),S&&i(_e,{icon:xe,size:"tiny",purpose:"secondary",appearance:"borderless","aria-label":"Tøm",onClick:f})]}),q&&i(K,{size:e,label:T||"Søk",onClick:E,...n})]}),Ce(v,I)]})]})});se.displayName="Search";const te=e=>{const{value:l,data:g,filter:u,queryLength:v=2,onChange:L,onSuggestionSelection:a,children:m}=e,[X,k]=r.useState(l||""),[h,x]=r.useState([]),[p,D]=r.useState(!1),o=()=>p===!0&&D(!1),z=()=>p===!1&&D(!0);r.useEffect(()=>{h.length>0?z():o()},[h]);const I=c=>c.array[0].relevance!==void 0,y=c=>{const f=c.target.value;S(f);let B=[];if(f.length>=v){if(g)if(I(g)){const{sortFunction:C,array:T}=g;B=T.filter(n=>u?u(n.text,f):Y(n.text,f)).sort(C?(n,b)=>C(n,b):void 0).map(n=>n.text)}else{const{sortFunction:C,array:T}=g;B=T.filter(n=>u?u(n,f):Y(n,f)).sort(C?(n,b)=>C(n,b):void 0)}x(B)}else x([]);L&&L(c)},$=c=>{x([]),S(c.target.innerText),a&&a(),o()},S=c=>{k(c||"")},R=r.useRef(null),t=r.useRef(null);Se([R.current,t.current],()=>{o()}),me("Tab",()=>o());const H={showSuggestions:p,inputRef:R,suggestionsRef:t,suggestions:h,onValueChange:y,inputValue:X,onSugggestionClick:$};return i(U.Provider,{value:H,children:m})};te.displayName="SearchAutocompleteWrapper";const oe=se;oe.AutocompleteWrapper=te;oe.Suggestions=j;export{oe as S};
//# sourceMappingURL=index-c988e8d8.js.map
