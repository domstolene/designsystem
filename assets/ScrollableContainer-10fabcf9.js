import{s as i,a as h,j as y}from"./focus-visible-8467fd8b.js";import{r as t}from"./index-d47b1f5a.js";import{a as L}from"./dds-core-b89b291f.js";import{s as M}from"./ScrollableContainer.tokens-a52bc549.js";import{V as F,_ as R}from"./dds-form-9dbc5b3d.js";const{track:T,thumb:b,minThumbHeightPx:E}=M,G=i.div``,J=i.div`
  display: block;
  height: 100%;
  position: relative;
  display: grid;
  justify-items: center;
`,K=i.div`
  bottom: 0;
  top: 0;
  position: absolute;
  background-color: ${T.backgroundColor};
  border-radius: ${T.borderRadius};
  width: ${T.width};
`,U=i.div`
  position: absolute;
  background-color: ${b.base.backgroundColor};
  border-radius: ${b.base.borderRadius};
  width: ${b.base.width};
  transition: background-color 0.2s;
  &:hover {
    background-color: ${b.hover.backgroundColor};
  }
`,x=a=>{const{id:f,className:g,htmlProps:p,contentRef:e,...v}=a,c=t.useRef(null),u=t.useRef(null),[l,P]=t.useState(E),[O,j]=t.useState(!0),[I,N]=t.useState(0),k=t.useRef(null),[C,Y]=t.useState(0),[D,z]=t.useState(0),[m,H]=t.useState(!1);function A(o,n){const{clientHeight:r,scrollHeight:s}=o;j(r!==s),P(Math.max(r/s*n,E))}const B=t.useCallback(o=>{if(e&&e.current){const{current:n}=c,{current:r}=e;if(n&&r){const{clientY:s}=o,V=o.target.getBoundingClientRect().top,W=-(l/2),_=(s-V+W)/n.clientHeight,q=Math.floor(_*r.scrollHeight);r.scrollTo({top:q,behavior:"smooth"})}}},[l]),$=t.useCallback(()=>{if(!(e!=null&&e.current)||!c.current||!u.current)return;const{scrollTop:o,scrollHeight:n}=e.current,{clientHeight:r}=c.current;let s=+o/+n*r;s=Math.min(s,r-l),N(s)},[]);t.useEffect(()=>{if(e&&e.current&&c.current){const o=e.current,{clientHeight:n}=c.current;return k.current=new ResizeObserver(()=>{A(o,n)}),k.current.observe(o),o.addEventListener("scroll",$),()=>{var r;(r=k.current)==null||r.unobserve(o),o.removeEventListener("scroll",$)}}},[]);const Q=t.useCallback(o=>{Y(o.clientY),e&&e.current&&z(e.current.scrollTop),H(!0)},[]),d=t.useCallback(()=>{m&&H(!1)},[m]),S=t.useCallback(o=>{if(e&&e.current&&m){const{scrollHeight:n,offsetHeight:r}=e.current,s=(o.clientY-C)*(r/l),w=Math.min(D+s,n-r);e.current.scrollTop=w}},[m,C,l]);return t.useEffect(()=>(document.addEventListener("mousemove",S),document.addEventListener("mouseup",d),document.addEventListener("mouseleave",d),()=>{document.removeEventListener("mousemove",S),document.removeEventListener("mouseup",d),document.removeEventListener("mouseleave",d)}),[S,d]),O?h(G,{...L(f,g,p,v),children:y(J,{children:[h(K,{ref:c,onClick:B}),h(U,{style:{height:l,top:I},ref:u,onMouseDown:Q})]})}):null};x.displayName="Scrollbar";const{track:X,content:Z,outerContainer:ee}=M,te=i.div`
  grid-template: auto / 1fr ${X.width};
  overflow: hidden;
  position: relative;
  display: grid;
  padding: ${ee.padding};
`,oe=i.div`
  height: ${({height:a})=>a};
  overflow: auto;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  padding-right: ${Z.paddingRight};
  @media (prefers-reduced-motion: no-preference) {
    transition: ${F};
  }
  :focus-visible,
  .focus-visible {
    outline: ${R.outline};
    outline-offset: ${R.outlineOffset};
  }
`,re=a=>{const{children:f,id:g,className:p,contentHeight:e="90vh",htmlProps:v,...c}=a,u=t.useRef(null);return y(te,{...L(g,p,v,c),children:[h(oe,{height:e,ref:u,tabIndex:0,children:f}),h(x,{contentRef:u})]})};re.displayName="ScrollableContainer";export{re as S,x as a};
//# sourceMappingURL=ScrollableContainer-10fabcf9.js.map
