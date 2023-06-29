import{s as i,j as h,a as y}from"./focus-visible-35158c22.js";import{r as t}from"./index-d47b1f5a.js";import{a as L}from"./dds-core-29d22035.js";import{s as M}from"./ScrollableContainer.tokens-66d4a31f.js";import{R as G,V as R}from"./dds-form-b2eacd8d.js";const{track:T,thumb:b,minThumbHeightPx:E}=M,J=i.div``,K=i.div`
  display: block;
  height: 100%;
  position: relative;
  display: grid;
  justify-items: center;
`,Q=i.div`
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
`,x=a=>{const{id:f,className:g,htmlProps:p,contentRef:e,...v}=a,c=t.useRef(null),u=t.useRef(null),[l,P]=t.useState(E),[O,j]=t.useState(!0),[I,N]=t.useState(0),k=t.useRef(null),[C,Y]=t.useState(0),[D,z]=t.useState(0),[m,H]=t.useState(!1);function A(o,n){const{clientHeight:r,scrollHeight:s}=o;j(r!==s),P(Math.max(r/s*n,E))}const B=t.useCallback(o=>{if(e&&e.current){const{current:n}=c,{current:r}=e;if(n&&r){const{clientY:s}=o,W=o.target.getBoundingClientRect().top,Z=-(l/2),q=(s-W+Z)/n.clientHeight,F=Math.floor(q*r.scrollHeight);r.scrollTo({top:F,behavior:"smooth"})}}},[l]),$=t.useCallback(()=>{if(!(e!=null&&e.current)||!c.current||!u.current)return;const{scrollTop:o,scrollHeight:n}=e.current,{clientHeight:r}=c.current;let s=+o/+n*r;s=Math.min(s,r-l),N(s)},[]);t.useEffect(()=>{if(e&&e.current&&c.current){const o=e.current,{clientHeight:n}=c.current;return k.current=new ResizeObserver(()=>{A(o,n)}),k.current.observe(o),o.addEventListener("scroll",$),()=>{var r;(r=k.current)==null||r.unobserve(o),o.removeEventListener("scroll",$)}}},[]);const V=t.useCallback(o=>{Y(o.clientY),e&&e.current&&z(e.current.scrollTop),H(!0)},[]),d=t.useCallback(()=>{m&&H(!1)},[m]),S=t.useCallback(o=>{if(e&&e.current&&m){const{scrollHeight:n,offsetHeight:r}=e.current,s=(o.clientY-C)*(r/l),w=Math.min(D+s,n-r);e.current.scrollTop=w}},[m,C,l]);return t.useEffect(()=>(document.addEventListener("mousemove",S),document.addEventListener("mouseup",d),document.addEventListener("mouseleave",d),()=>{document.removeEventListener("mousemove",S),document.removeEventListener("mouseup",d),document.removeEventListener("mouseleave",d)}),[S,d]),O?h(J,{...L(f,g,p,v),children:y(K,{children:[h(Q,{ref:c,onClick:B}),h(U,{style:{height:l,top:I},ref:u,onMouseDown:V})]})}):null};x.displayName="Scrollbar";const{track:X,content:_,outerContainer:ee}=M,te=i.div`
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
  padding-right: ${_.paddingRight};
  @media (prefers-reduced-motion: no-preference) {
    transition: ${G};
  }
  :focus-visible,
  .focus-visible {
    outline: ${R.outline};
    outline-offset: ${R.outlineOffset};
  }
`,re=a=>{const{children:f,id:g,className:p,contentHeight:e="90vh",htmlProps:v,...c}=a,u=t.useRef(null);return y(te,{...L(g,p,v,c),children:[h(oe,{height:e,ref:u,tabIndex:0,children:f}),h(x,{contentRef:u})]})};re.displayName="ScrollableContainer";export{re as S,x as a};
//# sourceMappingURL=ScrollableContainer-da1eb4f4.js.map
