import{d as ne,b as ae,s as d,j as i,a as w,A as F,F as ie}from"./focus-visible-35158c22.js";import{r}from"./index-d47b1f5a.js";import{X as re}from"./dds-form-b2eacd8d.js";import{D as ce,x as le,w as de,q as ge,a as ue,E as H,S as pe,R as Se,O as he,j as me,X as Z}from"./dds-core-29d22035.js";import{z as fe,R as be,y as xe}from"./dds-icons-7a922c3a.js";import{O as Q,T as ye,N as $e}from"./dds-typography-e761338c.js";import{O as Ce}from"./OverflowMenuItem-9a10104f.js";import{s as G}from"./scrollbarStyling-1bd29018.js";import{r as ve}from"./renderInputMessage-3a3d5367.js";import{B as U}from"./Button-2404c0e2.js";import{V as ze}from"./VisuallyHidden-2839ca90.js";const Y=r.createContext({}),De=()=>r.useContext(Y),{spacing:s,iconSizes:X,colors:J}=ne,{textDefault:_}=ae,ee={small:"bodySans01",medium:"bodySans02",large:"bodySans04"},Le=`${s.SizesDdsSpacingLocalX075NumberPx+X.DdsIconsizeSmallNumberPx+s.SizesDdsSpacingLocalX05NumberPx}px`,Ie=`${s.SizesDdsSpacingLocalX075NumberPx+X.DdsIconsizeMediumNumberPx+s.SizesDdsSpacingLocalX05NumberPx}px`,we=`${s.SizesDdsSpacingLocalX075NumberPx+X.DdsIconsizeMediumNumberPx+s.SizesDdsSpacingLocalX05NumberPx}px`,Xe={base:{paddingRight:s.SizesDdsSpacingLocalX25,paddingLeft:s.SizesDdsSpacingLocalX3},sizes:{small:{paddingTop:s.SizesDdsSpacingLocalX05,paddingBottom:s.SizesDdsSpacingLocalX05,paddingLeft:Le},medium:{paddingTop:s.SizesDdsSpacingLocalX075,paddingBottom:s.SizesDdsSpacingLocalX075,paddingLeft:Ie},large:{paddingTop:s.SizesDdsSpacingLocalX1,paddingBottom:s.SizesDdsSpacingLocalX1,paddingLeft:we}}},Pe={gap:s.SizesDdsSpacingLocalX05},ke={gap:s.SizesDdsSpacingLocalX0125},Be={base:{left:s.SizesDdsSpacingLocalX075,color:_.textColor},small:{top:`calc(50% - ${X.DdsIconsizeSmallNumberPx/2}px)`},medium:{top:`calc(50% - ${X.DdsIconsizeMediumNumberPx/2}px)`},large:{top:`calc(50% - ${X.DdsIconsizeMediumNumberPx/2}px)`}},Te={right:s.SizesDdsSpacingLocalX075,top:"calc(50% - 14px)",color:_.textColor},Ne={marginTop:s.SizesDdsSpacingLocalX025,border:`1px solid ${J.DdsColorInteractiveBase}`,boxShadow:`0 0 0 1px ${J.DdsColorInteractiveBase}`},Re={paddingLeft:s.SizesDdsSpacingLocalX1},j={input:Xe,searchIcon:Be,clearButton:Te,horisontalContainer:Pe,outerContainer:ke,suggestionsContainer:Ne,suggestionsHeader:Re},{suggestionsContainer:M,suggestionsHeader:Ee}=j,Ve=d(ce)`
  ${({isHidden:e})=>le(!e)};
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
`,He=d(Ce)`
  ${({size:e})=>Q(ee[e])}
`,Ae=d.ul`
  ${de}
`,Me=d(ye)`
  padding-left: ${Ee.paddingLeft};
`,q=r.forwardRef((e,l)=>{const{id:g,searchId:u,className:v,htmlProps:z,suggestions:a=[],showSuggestions:h,componentSize:P,onSuggestionClick:k,maxSuggestions:m,...x}=e,p=H(u,"suggestions-header"),[D,o]=ge(a&&a.length,!h),L=m?a==null?void 0:a.slice(m):a,I=i(Ae,{role:"listbox","aria-labelledby":p,children:L.map(($,S)=>i("li",{role:"option",children:i(He,{index:S,focus:D===S&&h,setFocus:o,"aria-label":`søk på ${$}`,onClick:k,title:$,"aria-setsize":L.length,"aria-posinset":S,size:P})},S))}),y=!h;return w(Ve,{...ue(g,v,z,x),ref:l,isHidden:y,"aria-hidden":y,children:[i(Me,{typographyType:"supportingStyleTiny01",forwardedAs:"span",id:p,children:"Søkeforslag"}),I]})});q.displayName="SearchSuggestions";function Oe(e){const l=document.getElementById(e);return l.value="",{target:l,currentTarget:l,bubbles:!0,cancelable:!1,defaultPrevented:!1,eventPhase:0,isTrusted:!1,preventDefault:()=>{},stopPropagation:()=>{},nativeEvent:new Event("input"),persist:()=>{},type:"change",timeStamp:Date.now(),isDefaultPrevented:()=>!1,isPropagationStopped:()=>!1}}const{input:V,outerContainer:Fe,horisontalContainer:je,searchIcon:K,clearButton:O}=j,qe=e=>{switch(e){case"large":return"medium";case"medium":return"medium";case"small":return"small"}},We=d(re)`
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
      ${Q(ee[e])}
    `}
`,Ze=d(fe)`
  position: absolute;
  left: ${K.base.left};
  color: ${K.base.color};
  ${({size:e})=>F`
    top: ${j.searchIcon[e].top};
  `}
  z-index: 1;
`,Ge=d(U)`
  position: absolute;
  right: ${O.right};
  color: ${O.color};
  top: ${O.top};
`,Je=d.div`
  display: flex;
  flex-direction: column;
  gap: ${Fe.gap};
`,Ke=d.div`
  ${e=>e.hasSearchButton&&F`
      display: grid;
      grid-template-columns: 1fr auto;
      gap: ${je.gap};
    `}
`,Qe=d.div`
  position: relative;
  display: flex;
`,se=r.forwardRef(({componentSize:e="medium",buttonProps:l,name:g,label:u,tip:v,id:z,value:a,onChange:h,className:P,style:k,"aria-describedby":m,...x},p)=>{const D=r.useId(),o=z??`${D}-searchInput`,L=!!u,I=H(o,"tip"),y=H(o,"suggestions"),$=H(o,"suggestions-description"),[S,R]=r.useState(!!a),t=De(),A=t.inputRef?pe(t.inputRef,p):p,c=N=>{R(N.target.value!==""),t.onValueChange&&t.onValueChange(N),h&&h(N)},f=()=>{const N=Oe(o);c(N)},B={className:P,style:k},C={...x,ref:A,componentSize:e,name:g,type:"search",id:o,"aria-describedby":Se([v?I:void 0,t.suggestions?$:void 0,m]),value:t.inputValue!==void 0?t.inputValue:a,onChange:c,autoComplete:"off"},{label:T,onClick:E,...n}=l||{},b=!!t.suggestions,W=!!l&&!!E;return w(Je,{children:[L&&i($e,{htmlFor:o,children:u}),w("div",{children:[w(Ke,{hasSearchButton:W,...B,children:[w(Qe,{children:[i(Ze,{icon:be,size:e,iconSize:qe(e)}),i(We,{...C,"aria-autocomplete":b?"list":void 0,"aria-controls":b?y:void 0,"aria-expanded":t.showSuggestions,role:b?"combobox":void 0}),b&&w(ie,{children:[i(q,{id:y,ref:t.suggestionsRef,searchId:o,onSuggestionClick:t.onSugggestionClick,suggestions:t.suggestions,showSuggestions:t.showSuggestions,componentSize:e}),i(ze,{id:$,as:"span",children:"Bla i søkeforslag med piltaster når listen er utvidet."})]}),S&&i(Ge,{icon:xe,size:"tiny",purpose:"secondary",appearance:"borderless","aria-label":"Tøm",onClick:f})]}),W&&i(U,{size:e,label:T||"Søk",onClick:E,...n})]}),ve(v,I)]})]})});se.displayName="Search";const te=e=>{const{value:l,data:g,filter:u,queryLength:v=2,onChange:z,onSuggestionSelection:a,children:h}=e,[P,k]=r.useState(l||""),[m,x]=r.useState([]),[p,D]=r.useState(!1),o=()=>p===!0&&D(!1),L=()=>p===!1&&D(!0);r.useEffect(()=>{m.length>0?L():o()},[m]);const I=c=>c.array[0].relevance!==void 0,y=c=>{const f=c.target.value;S(f);let B=[];if(f.length>=v){if(g)if(I(g)){const{sortFunction:C,array:T}=g;B=T.filter(n=>u?u(n.text,f):Z(n.text,f)).sort(C?(n,b)=>C(n,b):void 0).map(n=>n.text)}else{const{sortFunction:C,array:T}=g;B=T.filter(n=>u?u(n,f):Z(n,f)).sort(C?(n,b)=>C(n,b):void 0)}x(B)}else x([]);z&&z(c)},$=c=>{x([]),S(c.target.innerText),a&&a(),o()},S=c=>{k(c||"")},R=r.useRef(null),t=r.useRef(null);he([R.current,t.current],()=>{o()}),me("Tab",()=>o());const A={showSuggestions:p,inputRef:R,suggestionsRef:t,suggestions:m,onValueChange:y,inputValue:P,onSugggestionClick:$};return i(Y.Provider,{value:A,children:h})};te.displayName="SearchAutocompleteWrapper";const oe=se;oe.AutocompleteWrapper=te;oe.Suggestions=q;export{oe as S};
//# sourceMappingURL=index-6e89d6a9.js.map
