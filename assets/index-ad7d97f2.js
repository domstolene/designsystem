import{d as ne,a as ae,s as d,j as i,b as w,C as O,F as ie}from"./focus-visible-17f12d09.js";import{r}from"./index-c6dae603.js";import{d as U}from"./Typography.utils-3c68477b.js";import{r as re}from"./removeListStyling-80ec5e55.js";import{O as ce}from"./OverflowMenuItem-7faee782.js";import{P as le}from"./Paper-19f1cdc7.js";import{v as de}from"./visibilityTransition-86c3da85.js";import{s as G}from"./scrollbarStyling-27f949d7.js";import{T as ge}from"./Typography-ddbe86f6.js";import{u as pe}from"./useRoveFocus-01d68aa4.js";import{g as ue}from"./BaseComponentProps-bb0d5515.js";import{d as H,s as me}from"./idGenerator-c29473b2.js";import{I as Se}from"./Input.styles-b4f9abd1.js";import{S as he}from"./search-90af096b.js";import{I as fe}from"./Icon-a968456f.js";import{B as Y}from"./Button-4fdfc19e.js";import{u as be}from"./useCombinedRefs-764cd8e8.js";import{L as ye}from"./Label-f2e173db.js";import{V as xe}from"./VisuallyHidden-68635a7d.js";import{C as Ce}from"./closeSmall-48b5218e.js";import{r as $e}from"./Input.utils-c0cbaed7.js";import{u as ve}from"./useOnClickOutside-08b83e6f.js";import{u as Ie}from"./useOnKeyDown-77bae070.js";import{s as K}from"./searchFilter-4f5edf43.js";const Z=r.createContext({}),Le=()=>r.useContext(Z),{spacing:s,iconSizes:P,colors:J}=ne,{textDefault:_}=ae,ee={small:"bodySans01",medium:"bodySans02",large:"bodySans04"},De=`${s.SizesDdsSpacingLocalX075NumberPx+P.DdsIconsizeSmallNumberPx+s.SizesDdsSpacingLocalX05NumberPx}px`,ze=`${s.SizesDdsSpacingLocalX075NumberPx+P.DdsIconsizeMediumNumberPx+s.SizesDdsSpacingLocalX05NumberPx}px`,we=`${s.SizesDdsSpacingLocalX075NumberPx+P.DdsIconsizeMediumNumberPx+s.SizesDdsSpacingLocalX05NumberPx}px`,Pe={base:{paddingRight:s.SizesDdsSpacingLocalX25,paddingLeft:s.SizesDdsSpacingLocalX3},sizes:{small:{paddingTop:s.SizesDdsSpacingLocalX05,paddingBottom:s.SizesDdsSpacingLocalX05,paddingLeft:De},medium:{paddingTop:s.SizesDdsSpacingLocalX075,paddingBottom:s.SizesDdsSpacingLocalX075,paddingLeft:ze},large:{paddingTop:s.SizesDdsSpacingLocalX1,paddingBottom:s.SizesDdsSpacingLocalX1,paddingLeft:we}}},ke={gap:s.SizesDdsSpacingLocalX05},Te={gap:s.SizesDdsSpacingLocalX0125},Be={base:{left:s.SizesDdsSpacingLocalX075,color:_.textColor},small:{top:`calc(50% - ${P.DdsIconsizeSmallNumberPx/2}px)`},medium:{top:`calc(50% - ${P.DdsIconsizeMediumNumberPx/2}px)`},large:{top:`calc(50% - ${P.DdsIconsizeMediumNumberPx/2}px)`}},Xe={right:s.SizesDdsSpacingLocalX075,top:"calc(50% - 14px)",color:_.textColor},Ne={marginTop:s.SizesDdsSpacingLocalX025,border:`1px solid ${J.DdsColorInteractiveBase}`,boxShadow:`0 0 0 1px ${J.DdsColorInteractiveBase}`},Re={paddingLeft:s.SizesDdsSpacingLocalX1},W={input:Pe,searchIcon:Be,clearButton:Xe,horisontalContainer:ke,outerContainer:Te,suggestionsContainer:Ne,suggestionsHeader:Re},{suggestionsContainer:M,suggestionsHeader:Ve}=W,Ee=d(le)`
  ${({isHidden:e})=>de(!e)};
  position: absolute;
  top: 100%;
  width: 100%;
  max-height: 300px;
  margin-top: ${M.marginTop};
  border: ${M.border};
  box-shadow: ${M.boxShadow};
  z-index: 80;
  overflow-y: scroll;
  ${G.firefox}
  ${G.webkit}
`,He=d(ce)`
  ${({size:e})=>U(ee[e])}
`,Fe=d.ul`
  ${re}
`,Me=d(ge)`
  padding-left: ${Ve.paddingLeft};
`,j=r.forwardRef((e,l)=>{const{id:g,searchId:p,className:v,htmlProps:I,suggestions:a=[],showSuggestions:S,componentSize:k,onSuggestionClick:T,maxSuggestions:h,...y}=e,u=H(p,"suggestions-header"),[L,o]=pe(a&&a.length,!S),D=h?a==null?void 0:a.slice(h):a,z=i(Fe,{role:"listbox","aria-labelledby":u,children:D.map((C,m)=>i("li",{role:"option",children:i(He,{index:m,focus:L===m&&S,setFocus:o,"aria-label":`søk på ${C}`,onClick:T,title:C,"aria-setsize":D.length,"aria-posinset":m,size:k})},m))}),x=!S;return w(Ee,{...ue(g,v,I,y),ref:l,isHidden:x,"aria-hidden":x,children:[i(Me,{typographyType:"supportingStyleTiny01",forwardedAs:"span",id:u,children:"Søkeforslag"}),z]})});j.displayName="SearchSuggestions";function Ae(e){const l=document.getElementById(e);return l.value="",{target:l,currentTarget:l,bubbles:!0,cancelable:!1,defaultPrevented:!1,eventPhase:0,isTrusted:!1,preventDefault:()=>{},stopPropagation:()=>{},nativeEvent:new Event("input"),persist:()=>{},type:"change",timeStamp:Date.now(),isDefaultPrevented:()=>!1,isPropagationStopped:()=>!1}}const{input:E,outerContainer:Oe,horisontalContainer:We,searchIcon:Q,clearButton:A}=W,je=e=>{switch(e){case"large":return"medium";case"medium":return"medium";case"small":return"small"}},qe=d(Se)`
  &[type='search']::-webkit-search-decoration,
  &[type='search']::-webkit-search-cancel-button,
  &[type='search']::-webkit-search-results-button,
  &[type='search']::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }
  padding-right: ${E.base.paddingRight};

  ${({componentSize:e})=>O`
      padding-top: ${E.sizes[e].paddingTop};
      padding-bottom: ${E.sizes[e].paddingBottom};
      padding-left: ${E.sizes[e].paddingLeft};
      ${U(ee[e])}
    `}
`,Ge=d(fe)`
  position: absolute;
  left: ${Q.base.left};
  color: ${Q.base.color};
  ${({size:e})=>O`
    top: ${W.searchIcon[e].top};
  `}
  z-index: 1;
`,Ke=d(Y)`
  position: absolute;
  right: ${A.right};
  color: ${A.color};
  top: ${A.top};
`,Je=d.div`
  display: flex;
  flex-direction: column;
  gap: ${Oe.gap};
`,Qe=d.div`
  ${e=>e.hasSearchButton&&O`
      display: grid;
      grid-template-columns: 1fr auto;
      gap: ${We.gap};
    `}
`,Ue=d.div`
  position: relative;
  display: flex;
`,se=r.forwardRef(({componentSize:e="medium",buttonProps:l,name:g,label:p,tip:v,id:I,value:a,onChange:S,className:k,style:T,"aria-describedby":h,...y},u)=>{const L=r.useId(),o=I??`${L}-searchInput`,D=!!p,z=H(o,"tip"),x=H(o,"suggestions"),C=H(o,"suggestions-description"),[m,R]=r.useState(!!a),t=Le(),F=t.inputRef?be(t.inputRef,u):u,c=N=>{R(N.target.value!==""),t.onValueChange&&t.onValueChange(N),S&&S(N)},f=()=>{const N=Ae(o);c(N)},B={className:k,style:T},$={...y,ref:F,componentSize:e,name:g,type:"search",id:o,"aria-describedby":me([v?z:void 0,t.suggestions?C:void 0,h]),value:t.inputValue!==void 0?t.inputValue:a,onChange:c,autoComplete:"off"},{label:X,onClick:V,...n}=l||{},b=!!t.suggestions,q=!!l&&!!V;return w(Je,{children:[D&&i(ye,{htmlFor:o,children:p}),w("div",{children:[w(Qe,{hasSearchButton:q,...B,children:[w(Ue,{children:[i(Ge,{icon:he,size:e,iconSize:je(e)}),i(qe,{...$,"aria-autocomplete":b?"list":void 0,"aria-controls":b?x:void 0,"aria-expanded":t.showSuggestions,role:b?"combobox":void 0}),b&&w(ie,{children:[i(j,{id:x,ref:t.suggestionsRef,searchId:o,onSuggestionClick:t.onSugggestionClick,suggestions:t.suggestions,showSuggestions:t.showSuggestions,componentSize:e}),i(xe,{id:C,as:"span",children:"Bla i søkeforslag med piltaster når listen er utvidet."})]}),m&&i(Ke,{icon:Ce,size:"tiny",purpose:"secondary",appearance:"borderless","aria-label":"Tøm",onClick:f})]}),q&&i(Y,{size:e,label:X||"Søk",onClick:V,...n})]}),$e(v,z)]})]})});se.displayName="Search";const te=e=>{const{value:l,data:g,filter:p,queryLength:v=2,onChange:I,onSuggestionSelection:a,children:S}=e,[k,T]=r.useState(l||""),[h,y]=r.useState([]),[u,L]=r.useState(!1),o=()=>u===!0&&L(!1),D=()=>u===!1&&L(!0);r.useEffect(()=>{h.length>0?D():o()},[h]);const z=c=>c.array[0].relevance!==void 0,x=c=>{const f=c.target.value;m(f);let B=[];if(f.length>=v){if(g)if(z(g)){const{sortFunction:$,array:X}=g;B=X.filter(n=>p?p(n.text,f):K(n.text,f)).sort($?(n,b)=>$(n,b):void 0).map(n=>n.text)}else{const{sortFunction:$,array:X}=g;B=X.filter(n=>p?p(n,f):K(n,f)).sort($?(n,b)=>$(n,b):void 0)}y(B)}else y([]);I&&I(c)},C=c=>{y([]),m(c.target.innerText),a&&a(),o()},m=c=>{T(c||"")},R=r.useRef(null),t=r.useRef(null);ve([R.current,t.current],()=>{o()}),Ie("Tab",()=>o());const F={showSuggestions:u,inputRef:R,suggestionsRef:t,suggestions:h,onValueChange:x,inputValue:k,onSugggestionClick:C};return i(Z.Provider,{value:F,children:S})};te.displayName="SearchAutocompleteWrapper";const oe=se;oe.AutocompleteWrapper=te;oe.Suggestions=j;export{oe as S};
//# sourceMappingURL=index-ad7d97f2.js.map
