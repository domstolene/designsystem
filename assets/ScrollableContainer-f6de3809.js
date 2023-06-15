import{s as l,j as h,a as y}from"./focus-visible-c2e9b88d.js";import{r as t}from"./index-ebeaab24.js";import{s as L}from"./ScrollableContainer.tokens-4d8ec996.js";import{g as M}from"./BaseComponentProps-bb0d5515.js";import{a as J,f as R}from"./focusVisible-75802ac7.js";const{track:S,thumb:b,minThumbHeightPx:E}=L,K=l.div``,Q=l.div`
  display: block;
  height: 100%;
  position: relative;
  display: grid;
  justify-items: center;
`,U=l.div`
  bottom: 0;
  top: 0;
  position: absolute;
  background-color: ${S.backgroundColor};
  border-radius: ${S.borderRadius};
  width: ${S.width};
`,X=l.div`
  position: absolute;
  background-color: ${b.base.backgroundColor};
  border-radius: ${b.base.borderRadius};
  width: ${b.base.width};
  transition: background-color 0.2s;
  &:hover {
    background-color: ${b.hover.backgroundColor};
  }
`,x=a=>{const{id:f,className:g,htmlProps:p,contentRef:e,...v}=a,c=t.useRef(null),u=t.useRef(null),[i,P]=t.useState(E),[O,j]=t.useState(!0),[I,N]=t.useState(0),k=t.useRef(null),[C,Y]=t.useState(0),[D,V]=t.useState(0),[m,H]=t.useState(!1);function z(o,n){const{clientHeight:r,scrollHeight:s}=o;j(r!==s),P(Math.max(r/s*n,E))}const B=t.useCallback(o=>{if(e&&e.current){const{current:n}=c,{current:r}=e;if(n&&r){const{clientY:s}=o,W=o.target.getBoundingClientRect().top,q=-(i/2),F=(s-W+q)/n.clientHeight,G=Math.floor(F*r.scrollHeight);r.scrollTo({top:G,behavior:"smooth"})}}},[i]),$=t.useCallback(()=>{if(!(e!=null&&e.current)||!c.current||!u.current)return;const{scrollTop:o,scrollHeight:n}=e.current,{clientHeight:r}=c.current;let s=+o/+n*r;s=Math.min(s,r-i),N(s)},[]);t.useEffect(()=>{if(e&&e.current&&c.current){const o=e.current,{clientHeight:n}=c.current;return k.current=new ResizeObserver(()=>{z(o,n)}),k.current.observe(o),o.addEventListener("scroll",$),()=>{var r;(r=k.current)==null||r.unobserve(o),o.removeEventListener("scroll",$)}}},[]);const A=t.useCallback(o=>{Y(o.clientY),e&&e.current&&V(e.current.scrollTop),H(!0)},[]),d=t.useCallback(()=>{m&&H(!1)},[m]),T=t.useCallback(o=>{if(e&&e.current&&m){const{scrollHeight:n,offsetHeight:r}=e.current,s=(o.clientY-C)*(r/i),w=Math.min(D+s,n-r);e.current.scrollTop=w}},[m,C,i]);return t.useEffect(()=>(document.addEventListener("mousemove",T),document.addEventListener("mouseup",d),document.addEventListener("mouseleave",d),()=>{document.removeEventListener("mousemove",T),document.removeEventListener("mouseup",d),document.removeEventListener("mouseleave",d)}),[T,d]),O?h(K,{...M(f,g,p,v),children:y(Q,{children:[h(U,{ref:c,onClick:B}),h(X,{style:{height:i,top:I},ref:u,onMouseDown:A})]})}):null};x.displayName="Scrollbar";const{track:Z,content:_,outerContainer:ee}=L,te=l.div`
  grid-template: auto / 1fr ${Z.width};
  overflow: hidden;
  position: relative;
  display: grid;
  padding: ${ee.padding};
`,oe=l.div`
  height: ${({height:a})=>a};
  overflow: auto;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  padding-right: ${_.paddingRight};
  @media (prefers-reduced-motion: no-preference) {
    transition: ${J};
  }
  :focus-visible,
  .focus-visible {
    outline: ${R.outline};
    outline-offset: ${R.outlineOffset};
  }
`,re=a=>{const{children:f,id:g,className:p,contentHeight:e="90vh",htmlProps:v,...c}=a,u=t.useRef(null);return y(te,{...M(g,p,v,c),children:[h(oe,{height:e,ref:u,tabIndex:0,children:f}),h(x,{contentRef:u})]})};re.displayName="ScrollableContainer";export{re as S,x as a};
//# sourceMappingURL=ScrollableContainer-f6de3809.js.map
