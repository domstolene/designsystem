import{a as f,j as z}from"./jsx-runtime-e43ccb36.js";import{s as u,d as m,n as P,a as Y}from"./ddsReferenceTokens-fe3c594e.js";import{r as c}from"./index-1b03fe98.js";const v=u.svg`
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
`;try{v.displayName="SvgChevron",v.__docgenInfo={description:"",displayName:"SvgChevron",props:{}}}catch{}try{C.displayName="SvgChevronlGroup",C.__docgenInfo={description:"",displayName:"SvgChevronlGroup",props:{}}}catch{}try{k.displayName="SvgChevronlLeft",k.__docgenInfo={description:"",displayName:"SvgChevronlLeft",props:{}}}catch{}try{b.displayName="SvgChevronlRight",b.__docgenInfo={description:"",displayName:"SvgChevronlRight",props:{}}}catch{}const q="M 1 0 L 5 4 C 5 4 5 4 5 4 L 4 5 C 4 5 4 5 4 5 C 4 5 4 5 4 5 L 0 1 C 0 1 0 1 0 1 L 1 0 C 1 0 1 0 1 0 C 1 0 1 0 1 0 L 1 0 Z",U="M 3 4 L 7 0 L 8 1 C 8 1 8 1 8 1 L 4 5 L 3 4 C 3 4 3 4 3 4 L 3 4 Z",D=({isUp:e,height:r="5px",width:t="8px"})=>f(v,{viewBox:"0 0 8 5",width:t,height:r,fill:"currentColor",isUp:e,children:z(C,{isUp:e,children:[f(k,{d:q,isUp:e}),f(b,{d:U,isUp:e})]})});try{D.displayName="AnimatedChevronUpDown",D.__docgenInfo={description:"",displayName:"AnimatedChevronUpDown",props:{isUp:{defaultValue:null,description:"",name:"isUp",required:!1,type:{name:"boolean | undefined"}},height:{defaultValue:{value:"5px"},description:"",name:"height",required:!1,type:{name:"Height<string> | undefined"}},width:{defaultValue:{value:"8px"},description:"",name:"width",required:!1,type:{name:"Width<string> | undefined"}}}}}catch{}const{colors:L}=m,V={color:L.DdsColorNeutralsGray9,backgroundColor:L.DdsColorTertiaryLightest},w=e=>P`
    @media (prefers-reduced-motion: no-preference) {
      transition:
        visibility 0.4s,
        opacity 0.2s;
    }
    visibility: ${e?"visible":"hidden"};
    opacity: ${e?1:0};
  `;try{w.displayName="visibilityTransition",w.__docgenInfo={description:"",displayName:"visibilityTransition",props:{}}}catch{}const{colors:Q,borderRadius:Z,font:J}=m,ee={backgroundColor:Q.DdsColorNeutralsWhite,borderRadius:Z.RadiiDdsBorderRadius1Radius,fontFamily:J.DdsFontBodySans01FontFamily},h={paper:ee},{outerShadow:_,border:g}=m,re=e=>{switch(e){case 1:return _.DdsShadow1Onlight;case 2:return _.DdsShadow2Onlight;case 3:return _.DdsShadow3Onlight;case 4:return _.DdsShadow4Onlight}},te=e=>{switch(e){case"light":return`${g.BordersDdsBorderStyleLightStrokeWeight} solid ${g.BordersDdsBorderStyleLightStroke}`;case"dark":return`${g.BordersDdsBorderStyleDarkStrokeWeight} solid ${g.BordersDdsBorderStyleDarkStroke}`}},I=u.div`
  box-sizing: border-box;
  margin: 0;
  background-color: ${h.paper.backgroundColor};
  font-family: ${h.paper.fontFamily};
  border-radius: ${h.paper.borderRadius};
  &::selection,
  *::selection {
    ${V}
  }
  ${({elevation:e})=>e&&P`
      box-shadow: ${re(e)};
    `}
  border: ${({border:e})=>e?te(e):"none"}
`;try{I.displayName="Paper",I.__docgenInfo={description:"",displayName:"Paper",props:{}}}catch{}const ne=u.span`
  color: ${m.colors.DdsColorDangerBase};
`,ye=()=>f(ne,{children:"*"});function T(...e){return c.useCallback(r=>{e.forEach(t=>{typeof t=="function"?t(r):t&&typeof t=="object"&&(t.current=r)})},e)}try{T.displayName="useCombinedRef",T.__docgenInfo={description:`Kombinerer refs for et element.
Eksempel på bruk:
\`\`\`
const MyComponent = forwardRef<HTMLDivElement, Props>((props, ref) => {

 const itemRef = useRef<HTMLDivElement>(null);
 const combinedRef = useCombinedRef(ref, itemRef);

 return <div ref={combinedRef}>innhold</div>
});
\`\`\``,displayName:"useCombinedRef",props:{}}}catch{}const _e=(e,r)=>`${e}-${r}`,R=e=>{const r=e.filter(Boolean);return r.length>0?r.join(" "):void 0};try{R.displayName="spaceSeparatedIdListGenerator",R.__docgenInfo={description:"",displayName:"spaceSeparatedIdListGenerator",props:{}}}catch{}function E(e){const r=e.documentElement.clientWidth;return Math.abs(window.innerWidth-r)}try{E.displayName="getScrollbarSize",E.__docgenInfo={description:"",displayName:"getScrollbarSize",props:{}}}catch{}const ge=(e,r)=>e*.01*r,$=e=>e.charAt(0).toUpperCase()+e.slice(1);try{$.displayName="firstLetterToUpperCase",$.__docgenInfo={description:"",displayName:"firstLetterToUpperCase",props:{}}}catch{}const{colors:a}=m,{textDefault:oe}=Y,X=(e,r,t)=>{if(r==="decimal"&&t==="hex8"){const n=Number(e);if(typeof n!="number"||n>1||n<0)return"";const o=Math.round(255*(Math.round(n*100)/100)).toString(16);return o.length===1?"0"+o:o}if(r==="hex8"&&t==="decimal"){const n=new RegExp(/^[0-9a-fA-F]+$/).test(e.toString());return e.toString().length>2||n===!1?"":Math.round(parseInt(e.toString(),16)/256*100)/100}},B=e=>{const r=parseInt(e.slice(1,3),16),t=parseInt(e.slice(3,5),16),n=parseInt(e.slice(5,7),16),o=e.length===9?e.slice(7,9):"ff";return`rgba(${r}, ${t}, ${n}, ${X(o,"hex8","decimal")})`},se=e=>e.replace(/\s/g,"").match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i),M=e=>{const r=se(e),t=((r==null?void 0:r[4])??"").trim();return r?"#"+(parseInt(r[1])|256).toString(16).slice(1)+(parseInt(r[2])|256).toString(16).slice(1)+(parseInt(r[3])|256).toString(16).slice(1)+X(t,"decimal","hex8"):""},fe=(e,r)=>!e.startsWith("rgba(")||!e.endsWith(")")?"":e.replace(/[\d.]+\)$/g,r.toString()+")"),ae={interactive:a.DdsColorInteractiveBase,primary:a.DdsColorPrimaryBase,danger:a.DdsColorDangerBase,success:a.DdsColorSuccessBase,warning:a.DdsColorWarningBase,onLight:oe.textColor,onDark:a.DdsColorNeutralsWhite,gray1:a.DdsColorNeutralsGray1,gray2:a.DdsColorNeutralsGray2,gray3:a.DdsColorNeutralsGray3,gray4:a.DdsColorNeutralsGray4,gray5:a.DdsColorNeutralsGray5,gray6:a.DdsColorNeutralsGray6,gray7:a.DdsColorNeutralsGray7,gray8:a.DdsColorNeutralsGray8,gray9:a.DdsColorNeutralsGray9},ie=["interactive","primary","danger","success","warning","onLight","onDark","gray1","gray2","gray3","gray4","gray5","gray6","gray7","gray8","gray9"];function S(e){return ie.indexOf(e)!==-1}const F=e=>S(e)?ae[e]:e;try{S.displayName="isTextColor",S.__docgenInfo={description:"",displayName:"isTextColor",props:{}}}catch{}try{B.displayName="hexToRGBA",B.__docgenInfo={description:"",displayName:"hexToRGBA",props:{}}}catch{}try{M.displayName="RGBToHex",M.__docgenInfo={description:"",displayName:"RGBToHex",props:{}}}catch{}try{F.displayName="getTextColor",F.__docgenInfo={description:"",displayName:"getTextColor",props:{}}}catch{}function ce(e){return e&&e.current?e.current.querySelectorAll('a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'):[]}function N(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}function he(e,r){return new RegExp(`(?:^|[\\s-(])${N(r.toLowerCase())}`).test(e.toLowerCase())}try{N.displayName="escapeRegexCharacters",N.__docgenInfo={description:"",displayName:"escapeRegexCharacters",props:{}}}catch{}function O(e){const r=c.useRef(null);return c.useEffect(()=>{function t(o){if(o.key!=="Tab"||!e||!r.current)return;const s=ce(r),d=s[0],i=s[s.length-1];!o.shiftKey&&document.activeElement===i&&(d.focus(),o.preventDefault()),o.shiftKey&&document.activeElement===d&&(i.focus(),o.preventDefault())}const n=r.current;return n&&e&&(n.focus(),n.addEventListener("keydown",t)),()=>{n==null||n.removeEventListener("keydown",t)}},[e]),r}try{O.displayName="useFocusTrap",O.__docgenInfo={description:`Fanger fokus i en loop inni et element. Typisk bruk:
\`\`\`
const MyComponent = (props) => {

 const componentRef = useFocusTrap<HTMLDivElement>(props.isOpen);

 return props.isOpen ? <div ref={componentRef}><button>click</button></div> : null;

}
\`\`\``,displayName:"useFocusTrap",props:{}}}catch{}const G=(e,r)=>{const[t,n]=c.useState(!1);return c.useEffect(()=>{let o;return e&&!t?n(!0):!e&&t&&(o=setTimeout(()=>n(!1),r)),()=>{clearTimeout(o)}},[r,e,t]),t};try{G.displayName="useMountTransition",G.__docgenInfo={description:`Tillater effekter og animasjoner å bli gjennomført like etter et element blir lagt til eller like før det blir fjernet fra DOM.
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
\`\`\``,displayName:"useMountTransition",props:{}}}catch{}function A(e,r){c.useEffect(()=>{const t=n=>{const o=Array.isArray(e)?e:[e];let s=n.target;for(;s;){if(o.indexOf(s)!=-1)return;s=s.parentNode}r(n)};return document.addEventListener("mousedown",t),document.addEventListener("touchstart",t),()=>{document.removeEventListener("mousedown",t),document.removeEventListener("touchstart",t)}},[e,r])}try{A.displayName="useOnClickOutside",A.__docgenInfo={description:`Kjører logikk når brukeren klikker utenfor et element, f.eks at elementet fjernes fra DOM.
Typisk bruk:
\`\`\`
const [isOpen, setOpen] = useState(true);
const ref = useRef<HTMLElement>(null);
useOnClickOutside(ref, () => setOpen(false));

return <div ref={ref}>innhold</div>
\`\`\``,displayName:"useOnClickOutside",props:{}}}catch{}const H=(e,r)=>{c.useEffect(()=>{const t=n=>{(Array.isArray(e)?e:[e]).indexOf(n.key)!==-1&&r(n)};return document.addEventListener("keydown",t,!0),()=>{document.removeEventListener("keydown",t,!0)}},[r])};try{H.displayName="useOnKeyDown",H.__docgenInfo={description:`Kjører logikk når en spesifisert tast blir trykt ned.
Typisk bruk:
\`\`\`
const [isOpen, setOpen] = useState(true);
const ref = useRef<HTMLElement>(null);
useOnKeyDown(['Escape', 'Esc'], () => setOpen(false));

return isOpen ? <div>innhold</div> : null;
\`\`\``,displayName:"useOnKeyDown",props:{}}}catch{}const x=e=>e.key!==void 0;function j(e,r,t="column"){const[n,o]=c.useState(-1),s=t==="row"?"ArrowRight":"ArrowDown",d=t==="row"?"ArrowLeft":"ArrowUp",i=c.useCallback(l=>{!e||!x(l)||(r&&o(-1),l.key===s?(l.preventDefault(),o(n===e-1?0:n+1)):l.key===d&&(l.preventDefault(),o(n!==-1?n===0?e-1:n-1:e-1)))},[e,n,o,r]);return c.useEffect(()=>(document.addEventListener("keydown",i,!1),()=>{document.removeEventListener("keydown",i,!1)}),[i]),[n,o]}try{j.displayName="useRoveFocus",j.__docgenInfo={description:`Bytter fokus mellom elementer i en gruppe med piltaster og ikke Tab, og looper fokus i gruppen. Typisk bruk:
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
\`\`\``,displayName:"useRoveFocus",props:{}}}catch{}try{x.displayName="isKeyboardEvent",x.__docgenInfo={description:"",displayName:"isKeyboardEvent",props:{}}}catch{}const{breakpoints:y}=m;var p=(e=>(e[e.XSmall=0]="XSmall",e[e.Small=1]="Small",e[e.Medium=2]="Medium",e[e.Large=3]="Large",e[e.XLarge=4]="XLarge",e))(p||{});const de=[[4,`only screen and (min-width: ${y.DdsBreakpointXl})`],[3,`only screen and (min-width: ${y.DdsBreakpointLg})`],[2,`only screen and (min-width: ${y.DdsBreakpointMd})`],[1,`only screen and (min-width: ${y.DdsBreakpointSm})`],[0,`only screen and (min-width: ${y.DdsBreakpointXs})`]],K=function(){const[e,r]=c.useState(3);return c.useEffect(()=>{function t(){for(const[n,o]of de)if(window.matchMedia(o).matches){r(n);return}}return t(),window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[]),e};try{K.displayName="useScreenSize",K.__docgenInfo={description:`Sjekker skjermstørrelsen basert på brekkpunkter definerte i designsystemet. Eksempel på bruk:
\`\`\`
const MyComponent = () => {
 const screenSize = useScreenSize();
 const isSmallScreen = screenSize === ScreenSize.Small;

 return <div className={isSmallScreen && 'smallDiv'} >innhold</div>
}
\`\`\``,displayName:"useScreenSize",props:{}}}catch{}const W=e=>{switch(e){case p.XLarge:return"xl";case p.Large:return"lg";case p.Medium:return"md";case p.Small:return"sm";case p.XSmall:return"xs"}};try{W.displayName="getLiteralScreenSize",W.__docgenInfo={description:"",displayName:"getLiteralScreenSize",props:{}}}catch{}const le=(...e)=>e.filter(Boolean).join(" "),ve=(e,r,t,n)=>{if(typeof r=="string"||n!=null){const{id:o,className:s,...d}=t??{},i=e??o,l=le(r,s);return{...n,...d,...l&&{className:l},...i&&{id:i}}}else{const{id:o,className:s,...d}=r??{},i=e??o;return{...t,...d,...s&&{className:s},...i&&{id:i}}}};export{D as A,I as P,ye as R,p as S,F as a,T as b,ge as c,_e as d,A as e,H as f,ve as g,j as h,R as i,le as j,O as k,G as l,W as m,fe as n,ce as o,he as p,V as s,K as u,w as v};
//# sourceMappingURL=BaseComponentProps-b46a4458.js.map
