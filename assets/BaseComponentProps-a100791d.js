import{s as u,a as _,j as W,d as m,A as q,b as P}from"./ddsReferenceTokens-647ce456.js";import{r as c}from"./index-ebeaab24.js";const v=u.svg`
  display: inline-block;
  flex-shrink: 0;
  position: relative;
  text-align: center;
  vertical-align: middle;
`,C=u.g`
  transition: transform 0.2s linear;
  transform: ${({isUp:e})=>e?"translateY(3px)":"translateY(0)"};
`,k=u.path`
  transition: transform 0.2s linear;
  transform-origin: 1px 1px;
  transform: ${({isUp:e})=>e?"rotate(-90deg) translateY(0)":"rotate(0) translateY(0)"};
`,b=u.path`
  transition: transform 0.2s linear;
  transform-origin: 7px 1px;
  transform: ${({isUp:e})=>e?"rotate(90deg) translateY(0)":"rotate(0) translateY(0)"};
`;try{v.displayName="SvgChevron",v.__docgenInfo={description:"",displayName:"SvgChevron",props:{isUp:{defaultValue:null,description:"",name:"isUp",required:!1,type:{name:"boolean | undefined"}}}}}catch{}try{C.displayName="SvgChevronlGroup",C.__docgenInfo={description:"",displayName:"SvgChevronlGroup",props:{isUp:{defaultValue:null,description:"",name:"isUp",required:!1,type:{name:"boolean | undefined"}}}}}catch{}try{k.displayName="SvgChevronlLeft",k.__docgenInfo={description:"",displayName:"SvgChevronlLeft",props:{isUp:{defaultValue:null,description:"",name:"isUp",required:!1,type:{name:"boolean | undefined"}}}}}catch{}try{b.displayName="SvgChevronlRight",b.__docgenInfo={description:"",displayName:"SvgChevronlRight",props:{isUp:{defaultValue:null,description:"",name:"isUp",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const X="M 1 0 L 5 4 C 5 4 5 4 5 4 L 4 5 C 4 5 4 5 4 5 C 4 5 4 5 4 5 L 0 1 C 0 1 0 1 0 1 L 1 0 C 1 0 1 0 1 0 C 1 0 1 0 1 0 L 1 0 Z",z="M 3 4 L 7 0 L 8 1 C 8 1 8 1 8 1 L 4 5 L 3 4 C 3 4 3 4 3 4 L 3 4 Z",D=({isUp:e,height:r="5px",width:n="8px"})=>_(v,{viewBox:"0 0 8 5",width:n,height:r,fill:"currentColor",isUp:e,children:W(C,{isUp:e,children:[_(k,{d:X,isUp:e}),_(b,{d:z,isUp:e})]})});try{D.displayName="AnimatedChevronUpDown",D.__docgenInfo={description:"",displayName:"AnimatedChevronUpDown",props:{isUp:{defaultValue:null,description:"",name:"isUp",required:!1,type:{name:"boolean | undefined"}},height:{defaultValue:{value:"5px"},description:"",name:"height",required:!1,type:{name:"Height<string> | undefined"}},width:{defaultValue:{value:"8px"},description:"",name:"width",required:!1,type:{name:"Width<string> | undefined"}}}}}catch{}const{colors:L}=m,Y={color:L.DdsColorNeutralsGray9,backgroundColor:L.DdsColorTertiaryLightest},w=e=>q`
    @media (prefers-reduced-motion: no-preference) {
      transition: visibility 0.4s, opacity 0.2s;
    }
    visibility: ${e?"visible":"hidden"};
    opacity: ${e?1:0};
  `;try{w.displayName="visibilityTransition",w.__docgenInfo={description:"",displayName:"visibilityTransition",props:{}}}catch{}const{colors:Q,borderRadius:Z,font:J}=m,ee={backgroundColor:Q.DdsColorNeutralsWhite,borderRadius:Z.RadiiDdsBorderRadius1Radius,fontFamily:J.DdsFontBodySans01FontFamily},h={paper:ee},{outerShadow:f,border:g}=m,re=e=>{switch(e){case 1:return f.DdsShadow1Onlight;case 2:return f.DdsShadow2Onlight;case 3:return f.DdsShadow3Onlight;case 4:return f.DdsShadow4Onlight}},ne=e=>{switch(e){case"light":return`${g.BordersDdsBorderStyleLightStrokeWeight} solid ${g.BordersDdsBorderStyleLightStroke}`;case"dark":return`${g.BordersDdsBorderStyleDarkStrokeWeight} solid ${g.BordersDdsBorderStyleDarkStroke}`}},I=u.div`
  box-sizing: border-box;
  margin: 0;
  background-color: ${h.paper.backgroundColor};
  font-family: ${h.paper.fontFamily};
  border-radius: ${h.paper.borderRadius};
  &::selection,
  *::selection {
    ${Y}
  }
  ${({elevation:e})=>e&&q`
      box-shadow: ${re(e)};
    `}
  border: ${({border:e})=>e?ne(e):"none"}
`;try{I.displayName="Paper",I.__docgenInfo={description:"",displayName:"Paper",props:{elevation:{defaultValue:null,description:"",name:"elevation",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:"2"},{value:"1"},{value:"3"},{value:"4"}]}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"light"'},{value:'"dark"'}]}}}}}catch{}const te=u.span`
  color: ${m.colors.DdsColorDangerBase};
`,me=()=>_(te,{children:"*"});function T(...e){return c.useCallback(r=>{e.forEach(n=>{typeof n=="function"?n(r):n&&typeof n=="object"&&(n.current=r)})},e)}try{T.displayName="useCombinedRef",T.__docgenInfo={description:`Kombinerer refs for et element.
Eksempel på bruk:
\`\`\`
const MyComponent = forwardRef<HTMLDivElement, Props>((props, ref) => {

 const itemRef = useRef<HTMLDivElement>(null);
 const combinedRef = useCombinedRef(ref, itemRef);

 return <div ref={combinedRef}>innhold</div>
});
\`\`\``,displayName:"useCombinedRef",props:{}}}catch{}const ye=(e,r)=>`${e}-${r}`,R=e=>{const r=e.filter(Boolean);return r.length>0?r.join(" "):void 0};try{R.displayName="spaceSeparatedIdListGenerator",R.__docgenInfo={description:"",displayName:"spaceSeparatedIdListGenerator",props:{}}}catch{}function E(e){const r=e.documentElement.clientWidth;return Math.abs(window.innerWidth-r)}try{E.displayName="getScrollbarSize",E.__docgenInfo={description:"",displayName:"getScrollbarSize",props:{}}}catch{}const fe=(e,r)=>e*.01*r,$=e=>e.charAt(0).toUpperCase()+e.slice(1);try{$.displayName="firstLetterToUpperCase",$.__docgenInfo={description:"",displayName:"firstLetterToUpperCase",props:{}}}catch{}const{colors:a}=m,{textDefault:oe}=P,V=(e,r,n)=>{if(r==="decimal"&&n==="hex8"){const t=Number(e);if(typeof t!="number"||t>1||t<0)return"";const o=Math.round(255*(Math.round(t*100)/100)).toString(16);return o.length===1?"0"+o:o}if(r==="hex8"&&n==="decimal"){const t=new RegExp(/^[0-9a-fA-F]+$/).test(e.toString());return e.toString().length>2||t===!1?"":Math.round(parseInt(e.toString(),16)/256*100)/100}},B=e=>{const r=parseInt(e.slice(1,3),16),n=parseInt(e.slice(3,5),16),t=parseInt(e.slice(5,7),16),o=e.length===9?e.slice(7,9):"ff";return`rgba(${r}, ${n}, ${t}, ${V(o,"hex8","decimal")})`},se=e=>e.replace(/\s/g,"").match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i),M=e=>{const r=se(e),n=(r&&r[4]||"").trim();return r?"#"+(parseInt(r[1])|256).toString(16).slice(1)+(parseInt(r[2])|256).toString(16).slice(1)+(parseInt(r[3])|256).toString(16).slice(1)+V(n,"decimal","hex8"):""},ge=(e,r)=>e.slice(0,5)!=="rgba("||e.slice(-1)!==")"?"":e.replace(/[\d\.]+\)$/g,r.toString()+")"),ae={interactive:a.DdsColorInteractiveBase,primary:a.DdsColorPrimaryBase,danger:a.DdsColorDangerBase,success:a.DdsColorSuccessBase,warning:a.DdsColorWarningBase,onLight:oe.textColor,onDark:a.DdsColorNeutralsWhite,gray1:a.DdsColorNeutralsGray1,gray2:a.DdsColorNeutralsGray2,gray3:a.DdsColorNeutralsGray3,gray4:a.DdsColorNeutralsGray4,gray5:a.DdsColorNeutralsGray5,gray6:a.DdsColorNeutralsGray6,gray7:a.DdsColorNeutralsGray7,gray8:a.DdsColorNeutralsGray8,gray9:a.DdsColorNeutralsGray9},ie=["interactive","primary","danger","success","warning","onLight","onDark","gray1","gray2","gray3","gray4","gray5","gray6","gray7","gray8","gray9"];function S(e){return ie.indexOf(e)!==-1}const F=e=>S(e)?ae[e]:e;try{S.displayName="isTextColor",S.__docgenInfo={description:"",displayName:"isTextColor",props:{}}}catch{}try{B.displayName="hexToRGBA",B.__docgenInfo={description:"",displayName:"hexToRGBA",props:{}}}catch{}try{M.displayName="RGBToHex",M.__docgenInfo={description:"",displayName:"RGBToHex",props:{}}}catch{}try{F.displayName="getTextColor",F.__docgenInfo={description:"",displayName:"getTextColor",props:{}}}catch{}function ce(e){return e&&e.current?e.current.querySelectorAll('a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'):[]}function N(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}function _e(e,r){return new RegExp(`(?:^|[\\s-(])${N(r.toLowerCase())}`).test(e.toLowerCase())}try{N.displayName="escapeRegexCharacters",N.__docgenInfo={description:"",displayName:"escapeRegexCharacters",props:{}}}catch{}function O(e){const r=c.useRef(null);return c.useEffect(()=>{function n(o){if(o.key!=="Tab"||!e||!r.current)return;const s=ce(r),d=s[0],i=s[s.length-1];!o.shiftKey&&document.activeElement===i&&(d.focus(),o.preventDefault()),o.shiftKey&&document.activeElement===d&&(i.focus(),o.preventDefault())}const t=r.current;return t&&e&&(t.focus(),t.addEventListener("keydown",n)),()=>{t==null||t.removeEventListener("keydown",n)}},[e]),r}try{O.displayName="useFocusTrap",O.__docgenInfo={description:`Fanger fokus i en loop inni et element. Typisk bruk:
\`\`\`
const MyComponent = (props) => {

 const componentRef = useFocusTrap<HTMLDivElement>(props.isOpen);

 return props.isOpen ? <div ref={componentRef}><button>click</button></div> : null;

}
\`\`\``,displayName:"useFocusTrap",props:{}}}catch{}const A=(e,r)=>{const[n,t]=c.useState(!1);return c.useEffect(()=>{let o;return e&&!n?t(!0):!e&&n&&(o=setTimeout(()=>t(!1),r)),()=>{clearTimeout(o)}},[r,e,n]),n};try{A.displayName="useMountTransition",A.__docgenInfo={description:`Tillater effekter og animasjoner å bli gjennomført like etter et element blir lagt til eller like før det blir fjernet fra DOM.
Typisk bruk:
\`\`\`
// CSS
.component {
 transition: opacity 0.2s;
 opacity: 0;
}

.transitionedIn.mounted {
 opacity: 1;
}

const MyComponent = (props) => {

const hasTransitionedIn = useMountTransition(props.isMounted, 500);

 return props.isMounted || hasTransitionedIn ? (
 <div
 className={\`component \${hasTransitionedIn && 'transitionedIn'} \${props.isMounted && 'mounted'}\`}
 >
   innhold
 </div>)
: null;

}
\`\`\``,displayName:"useMountTransition",props:{}}}catch{}function G(e,r){c.useEffect(()=>{const n=t=>{const o=Array.isArray(e)?e:[e];let s=t.target;for(;s;){if(o.indexOf(s)!=-1)return;s=s.parentNode}r(t)};return document.addEventListener("mousedown",n),document.addEventListener("touchstart",n),()=>{document.removeEventListener("mousedown",n),document.removeEventListener("touchstart",n)}},[e,r])}try{G.displayName="useOnClickOutside",G.__docgenInfo={description:`Kjører logikk når brukeren klikker utenfor et element, f.eks at elementet fjernes fra DOM.
Typisk bruk:
\`\`\`
const [isOpen, setOpen] = useState(true);
const ref = useRef<HTMLElement>(null);
useOnClickOutside(ref, () => setOpen(false));

return <div ref={ref}>innhold</div>
\`\`\``,displayName:"useOnClickOutside",props:{}}}catch{}const H=(e,r)=>{c.useEffect(()=>{const n=t=>{(Array.isArray(e)?e:[e]).indexOf(t.key)!==-1&&r(t)};return document.addEventListener("keydown",n,!0),()=>{document.removeEventListener("keydown",n,!0)}},[r])};try{H.displayName="useOnKeyDown",H.__docgenInfo={description:`Kjører logikk når en spesifisert tast blir trykt ned.
Typisk bruk:
\`\`\`
const [isOpen, setOpen] = useState(true);
const ref = useRef<HTMLElement>(null);
useOnKeyDown(['Escape', 'Esc'], () => setOpen(false));

return isOpen ? <div>innhold</div> : null;
\`\`\``,displayName:"useOnKeyDown",props:{}}}catch{}const x=e=>e.key!==void 0;function j(e,r,n="column"){const[t,o]=c.useState(-1),s=n==="row"?"ArrowRight":"ArrowDown",d=n==="row"?"ArrowLeft":"ArrowUp",i=c.useCallback(l=>{!e||!x(l)||(r&&o(-1),l.key===s?(l.preventDefault(),o(t===e-1?0:t+1)):l.key===d&&(l.preventDefault(),o(t!==-1?t===0?e-1:t-1:e-1)))},[e,t,o,r]);return c.useEffect(()=>(document.addEventListener("keydown",i,!1),()=>{document.removeEventListener("keydown",i,!1)}),[i]),[t,o]}try{j.displayName="useRoveFocus",j.__docgenInfo={description:`Bytter fokus mellom elementer i en gruppe med piltaster og ikke Tab, og looper fokus i gruppen. Typisk bruk:
\`\`\`
import elements from './elements';
import RoveItem from './RoveItem';

const MyComponent = () => {
 const [focus, setFocus] = useRoveFocus(elements.length);

 return (
 <ul>
   {elements.map((element, index) => (
   <li key={element}>
     <RoveItem index={index} focus={focus === index} setFocus={setFocus}>{element.name}</RoveItem>
   </li>
   ))}
 </ul>)
}
\`\`\``,displayName:"useRoveFocus",props:{}}}catch{}try{x.displayName="isKeyboardEvent",x.__docgenInfo={description:"",displayName:"isKeyboardEvent",props:{}}}catch{}const{breakpoints:y}=m;var p=(e=>(e[e.XSmall=0]="XSmall",e[e.Small=1]="Small",e[e.Medium=2]="Medium",e[e.Large=3]="Large",e[e.XLarge=4]="XLarge",e))(p||{});const de=[[4,`only screen and (min-width: ${y.DdsBreakpointXl})`],[3,`only screen and (min-width: ${y.DdsBreakpointLg})`],[2,`only screen and (min-width: ${y.DdsBreakpointMd})`],[1,`only screen and (min-width: ${y.DdsBreakpointSm})`],[0,`only screen and (min-width: ${y.DdsBreakpointXs})`]],K=function(){const[e,r]=c.useState(3);return c.useEffect(()=>{function n(){for(const[t,o]of de)if(window.matchMedia(o).matches){r(t);return}}return n(),window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),e};try{K.displayName="useScreenSize",K.__docgenInfo={description:`Sjekker skjermstørrelsen basert på brekkpunkter definerte i designsystemet. Eksempel på bruk:
\`\`\`
const MyComponent = () => {
 const screenSize = useScreenSize();
 const isSmallScreen = screenSize === ScreenSize.Small;

 return <div className={isSmallScreen && 'smallDiv'} >innhold</div>
}
\`\`\``,displayName:"useScreenSize",props:{}}}catch{}const U=e=>{switch(e){case p.XLarge:return"xl";case p.Large:return"lg";case p.Medium:return"md";case p.Small:return"sm";case p.XSmall:return"xs"}};try{U.displayName="getLiteralScreenSize",U.__docgenInfo={description:"",displayName:"getLiteralScreenSize",props:{}}}catch{}const le=(...e)=>e.filter(Boolean).join(" "),he=(e,r,n,t)=>{if(typeof r=="string"||t!=null){const{id:o,className:s,...d}=n??{},i=e??o,l=le(r,s);return{...t,...d,...l&&{className:l},...i&&{id:i}}}else{const{id:o,className:s,...d}=r??{},i=e??o;return{...n,...d,...s&&{className:s},...i&&{id:i}}}};export{D as A,I as P,me as R,p as S,F as a,T as b,fe as c,ye as d,G as e,H as f,he as g,j as h,R as i,le as j,O as k,A as l,U as m,ge as n,ce as o,_e as p,Y as s,K as u,w as v};
//# sourceMappingURL=BaseComponentProps-a100791d.js.map
