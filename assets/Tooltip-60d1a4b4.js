import{d as G,s as i,a as f,j as u}from"./focus-visible-35158c22.js";import{r as e}from"./index-d47b1f5a.js";import{D as J,x as K,$ as Q,S as U,j as Y,B as n,a as _}from"./dds-core-29d22035.js";import{O as ee,E as oe}from"./dds-typography-e761338c.js";const{colors:b,spacing:te}=G,re={padding:`${te.SizesDdsSpacingLocalX075}`},se={border:{fill:b.DdsColorPrimaryLighter},background:{fill:b.DdsColorNeutralsWhite}},x={wrapper:re,svgArrow:se},{wrapper:ne}=x,ie=i.svg`
  width: 36px;
  height: 9px;
`,le=i.div``,ae=i.div`
  width: fit-content;
`,ce=i(J)`
  ${({open:l})=>K(l)}
  width: fit-content;
  position: absolute;
  z-index: 80;
  text-align: center;
  padding: ${ne.padding};
  ${ee(oe)};
`,{svgArrow:T}=x,pe=e.forwardRef((l,y)=>{const{text:L,placement:$="bottom",children:a,tooltipId:I,delay:S=100,style:M,onMouseLeave:A,onMouseOver:O,id:P,className:R,htmlProps:j,...B}=l,D=e.useId(),m=I??`${D}-tooltip`,[r,c]=e.useState(!1),[W,w]=e.useState(!1),[k,z]=e.useState(null),{reference:C,floating:N,styles:h}=Q(k,{placement:$}),t=e.useRef(null),V=U(y,N,t),F=d=>{const[o]=d;o.isIntersecting?w(!0):w(!1)};e.useEffect(()=>{const d={root:null,rootMargin:"0px"},o=t.current,E=new IntersectionObserver(F,d);return o&&E.observe(o),()=>{o&&E.unobserve(o)}},[t]),e.useEffect(()=>(t.current&&window.addEventListener("scroll",()=>{p()}),()=>{t.current&&window.removeEventListener("scroll",()=>{})}),[]);let s;e.useEffect(()=>()=>{clearTimeout(s)},[]),Y(["Escape","Esc"],()=>{r&&c(!1)});const p=()=>{clearTimeout(s),c(!1)},g=()=>{r||(clearTimeout(s),s=setTimeout(()=>c(!0),S))},v=a.props,q=e.Children.only(e.isValidElement(a)&&e.cloneElement(a,{ref:C,onFocus:n(g,v.onFocus),onBlur:n(p,v.onBlur),"aria-describedby":m})),H={..._(P,R,j,B),style:M,onMouseLeave:n(p,A),onMouseOver:n(g,O)},X={id:m,ref:V,role:"tooltip","aria-hidden":!r,open:r&&W,style:{...h.floating}},Z={ref:z,style:h.arrow};return f(ae,{...H,children:[q,f(ce,{...X,elevation:1,border:"light",children:[L,u(le,{...Z,children:f(ie,{children:[u("path",{d:"M16.586 6.586L10 0h16.154a.373.373 0 00-.263.11l-6.477 6.476a2 2 0 01-2.828 0z",fill:T.background.fill}),u("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M26.5.5l-6.732 6.94a2.5 2.5 0 01-3.536 0L9.5.5H11l5.94 6.232a1.5 1.5 0 002.12 0L25 .5h1.5z",fill:T.border.fill})]})})]})]})});pe.displayName="Tooltip";export{pe as T};
//# sourceMappingURL=Tooltip-60d1a4b4.js.map
