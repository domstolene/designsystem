import{d as G,s as i,j as f,a as u}from"./ddsReferenceTokens-f1d35829.js";import{r as e}from"./index-d47b1f5a.js";import{x as J,L as K,$ as U,S as Y,O as Z,B as n,a as _}from"./dds-core-c67132cd.js";import{O as ee,A as oe}from"./dds-typography-cc6cb429.js";const{colors:E,spacing:te}=G,re={padding:`${te.SizesDdsSpacingLocalX075}`},se={border:{fill:E.DdsColorPrimaryLighter},background:{fill:E.DdsColorNeutralsWhite}},x={wrapper:re,svgArrow:se},{wrapper:ne}=x,ie=i.svg`
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
`,{svgArrow:T}=x,pe=e.forwardRef((l,y)=>{const{text:L,placement:$="bottom",children:a,tooltipId:A,delay:I=100,style:O,onMouseLeave:S,onMouseOver:M,id:P,className:R,htmlProps:B,...W}=l,k=e.useId(),m=A??`${k}-tooltip`,[r,c]=e.useState(!1),[z,w]=e.useState(!1),[C,N]=e.useState(null),{reference:V,floating:j,styles:h}=U(C,{placement:$}),t=e.useRef(null),D=Y(y,j,t),F=d=>{const[o]=d;o.isIntersecting?w(!0):w(!1)};e.useEffect(()=>{const d={root:null,rootMargin:"0px"},o=t.current,b=new IntersectionObserver(F,d);return o&&b.observe(o),()=>{o&&b.unobserve(o)}},[t]),e.useEffect(()=>(t.current&&window.addEventListener("scroll",()=>{p()}),()=>{t.current&&window.removeEventListener("scroll",()=>{})}),[]);let s;e.useEffect(()=>()=>{clearTimeout(s)},[]),Z(["Escape","Esc"],()=>{r&&c(!1)});const p=()=>{clearTimeout(s),c(!1)},g=()=>{r||(clearTimeout(s),s=setTimeout(()=>c(!0),I))},v=a.props,q=e.Children.only(e.isValidElement(a)&&e.cloneElement(a,{ref:V,onFocus:n(g,v.onFocus),onBlur:n(p,v.onBlur),"aria-describedby":m})),H={..._(P,R,B,W),style:O,onMouseLeave:n(p,S),onMouseOver:n(g,M)},Q={id:m,ref:D,role:"tooltip","aria-hidden":!r,open:r&&z,style:{...h.floating}},X={ref:N,style:h.arrow};return f(ae,{...H,children:[q,f(ce,{...Q,elevation:1,border:"light",children:[L,u(le,{...X,children:f(ie,{children:[u("path",{d:"M16.586 6.586L10 0h16.154a.373.373 0 00-.263.11l-6.477 6.476a2 2 0 01-2.828 0z",fill:T.background.fill}),u("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M26.5.5l-6.732 6.94a2.5 2.5 0 01-3.536 0L9.5.5H11l5.94 6.232a1.5 1.5 0 002.12 0L25 .5h1.5z",fill:T.border.fill})]})})]})]})});pe.displayName="Tooltip";export{pe as T};
//# sourceMappingURL=Tooltip-8f8a02ef.js.map
