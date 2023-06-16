import{d as G,s as i,a as f,j as u}from"./focus-visible-c2e9b88d.js";import{r as e}from"./index-ebeaab24.js";import{d as J,e as Q}from"./Typography.utils-99dd1e07.js";import{v as U}from"./visibilityTransition-933c6349.js";import{P as Y}from"./Paper-12ce52e7.js";import{u as Z}from"./useFloatPosition-f03daf4a.js";import{c as n}from"./combineHandlers-f6d4455a.js";import{u as _}from"./useCombinedRefs-40b11bb4.js";import{u as ee}from"./useOnKeyDown-4552d984.js";import{g as oe}from"./BaseComponentProps-bb0d5515.js";const{colors:y,spacing:te}=G,re={padding:`${te.SizesDdsSpacingLocalX075}`},se={border:{fill:y.DdsColorPrimaryLighter},background:{fill:y.DdsColorNeutralsWhite}},E={wrapper:re,svgArrow:se},{wrapper:ne}=E,ie=i.svg`
  width: 36px;
  height: 9px;
`,le=i.div``,ae=i.div`
  width: fit-content;
`,ce=i(Y)`
  ${({open:l})=>U(l)}
  width: fit-content;
  position: absolute;
  z-index: 80;
  text-align: center;
  padding: ${ne.padding};
  ${J(Q)};
`,{svgArrow:T}=E,pe=e.forwardRef((l,x)=>{const{text:L,placement:P="bottom",children:a,tooltipId:I,delay:M=100,style:R,onMouseLeave:S,onMouseOver:$,id:A,className:C,htmlProps:O,...W}=l,k=e.useId(),m=I??`${k}-tooltip`,[r,c]=e.useState(!1),[z,g]=e.useState(!1),[B,D]=e.useState(null),{reference:F,floating:N,styles:w}=Z(B,{placement:P}),t=e.useRef(null),V=_(x,N,t),j=d=>{const[o]=d;o.isIntersecting?g(!0):g(!1)};e.useEffect(()=>{const d={root:null,rootMargin:"0px"},o=t.current,b=new IntersectionObserver(j,d);return o&&b.observe(o),()=>{o&&b.unobserve(o)}},[t]),e.useEffect(()=>(t.current&&window.addEventListener("scroll",()=>{p()}),()=>{t.current&&window.removeEventListener("scroll",()=>{})}),[]);let s;e.useEffect(()=>()=>{clearTimeout(s)},[]),ee(["Escape","Esc"],()=>{r&&c(!1)});const p=()=>{clearTimeout(s),c(!1)},h=()=>{r||(clearTimeout(s),s=setTimeout(()=>c(!0),M))},v=a.props,H=e.Children.only(e.isValidElement(a)&&e.cloneElement(a,{ref:F,onFocus:n(h,v.onFocus),onBlur:n(p,v.onBlur),"aria-describedby":m})),q={...oe(A,C,O,W),style:R,onMouseLeave:n(p,S),onMouseOver:n(h,$)},K={id:m,ref:V,role:"tooltip","aria-hidden":!r,open:r&&z,style:{...w.floating}},X={ref:D,style:w.arrow};return f(ae,{...q,children:[H,f(ce,{...K,elevation:1,border:"light",children:[L,u(le,{...X,children:f(ie,{children:[u("path",{d:"M16.586 6.586L10 0h16.154a.373.373 0 00-.263.11l-6.477 6.476a2 2 0 01-2.828 0z",fill:T.background.fill}),u("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M26.5.5l-6.732 6.94a2.5 2.5 0 01-3.536 0L9.5.5H11l5.94 6.232a1.5 1.5 0 002.12 0L25 .5h1.5z",fill:T.border.fill})]})})]})]})});pe.displayName="Tooltip";export{pe as T};
//# sourceMappingURL=Tooltip-e0c2208d.js.map
