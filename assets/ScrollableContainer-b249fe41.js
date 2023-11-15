import{a as m,j as w}from"./jsx-runtime-e43ccb36.js";import{r as t}from"./index-1b03fe98.js";import{s as a}from"./ddsReferenceTokens-cf345c8b.js";import{g as P}from"./BaseComponentProps-217bcb03.js";import{s as N}from"./ScrollableContainer.tokens-2f8b82e4.js";import{a as G,f as _}from"./Input.styles-9955857c.js";const{track:S,thumb:h,minThumbHeightPx:$}=N,J=a.div``,K=a.div`
  display: block;
  height: 100%;
  position: relative;
  display: grid;
  justify-items: center;
`,Q=a.div`
  bottom: 0;
  top: 0;
  position: absolute;
  background-color: ${S.backgroundColor};
  border-radius: ${S.borderRadius};
  width: ${S.width};
`,X=a.div`
  position: absolute;
  background-color: ${h.base.backgroundColor};
  border-radius: ${h.base.borderRadius};
  width: ${h.base.width};
  transition: background-color 0.2s;
  &:hover {
    background-color: ${h.hover.backgroundColor};
  }
`,b=i=>{const{id:f,className:g,htmlProps:v,contentRef:e,...T}=i,l=t.useRef(null),u=t.useRef(null),[c,R]=t.useState($),[x,V]=t.useState(!0),[D,I]=t.useState(0),k=t.useRef(null),[y,O]=t.useState(0),[j,q]=t.useState(0),[p,C]=t.useState(!1);function Y(o,n){const{clientHeight:r,scrollHeight:s}=o;V(r!==s),R(Math.max(r/s*n,$))}const A=t.useCallback(o=>{if(e!=null&&e.current){const{current:n}=l,{current:r}=e;if(n&&r){const{clientY:s}=o,B=o.target.getBoundingClientRect().top,U=-(c/2),F=(s-B+U)/n.clientHeight,W=Math.floor(F*r.scrollHeight);r.scrollTo({top:W,behavior:"smooth"})}}},[c]),L=t.useCallback(()=>{if(!(e!=null&&e.current)||!l.current||!u.current)return;const{scrollTop:o,scrollHeight:n}=e.current,{clientHeight:r}=l.current;let s=+o/+n*r;s=Math.min(s,r-c),I(s)},[]);t.useEffect(()=>{if(e!=null&&e.current&&l.current){const o=e.current,{clientHeight:n}=l.current;return k.current=new ResizeObserver(()=>{Y(o,n)}),k.current.observe(o),o.addEventListener("scroll",L),()=>{var r;(r=k.current)==null||r.unobserve(o),o.removeEventListener("scroll",L)}}},[]);const z=t.useCallback(o=>{O(o.clientY),e!=null&&e.current&&q(e.current.scrollTop),C(!0)},[]),d=t.useCallback(()=>{p&&C(!1)},[p]),H=t.useCallback(o=>{if(e!=null&&e.current&&p){const{scrollHeight:n,offsetHeight:r}=e.current,s=(o.clientY-y)*(r/c),M=Math.min(j+s,n-r);e.current.scrollTop=M}},[p,y,c]);return t.useEffect(()=>(document.addEventListener("mousemove",H),document.addEventListener("mouseup",d),document.addEventListener("mouseleave",d),()=>{document.removeEventListener("mousemove",H),document.removeEventListener("mouseup",d),document.removeEventListener("mouseleave",d)}),[H,d]),x?m(J,{...P(f,g,v,T),children:w(K,{children:[m(Q,{ref:l,onClick:A}),m(X,{style:{height:c,top:D},ref:u,onMouseDown:z})]})}):null};b.displayName="Scrollbar";try{b.displayName="Scrollbar",b.__docgenInfo={description:"",displayName:"Scrollbar",props:{contentRef:{defaultValue:null,description:"Ref til container med innholdet som skal scrolles.",name:"contentRef",required:!1,type:{name:"RefObject<HTMLDivElement> | undefined"}},htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:"HTMLAttributes<HTMLDivElement> | undefined"}}}}}catch{}const{track:Z,content:ee,outerContainer:te}=N,oe=a.div`
  grid-template: auto / 1fr ${Z.width};
  overflow: hidden;
  position: relative;
  display: grid;
  padding: ${te.padding};
`,re=a.div`
  height: ${({height:i})=>i};
  overflow: auto;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  padding-right: ${ee.paddingRight};
  @media (prefers-reduced-motion: no-preference) {
    transition: ${G};
  }
  :focus-visible,
  .focus-visible {
    outline: ${_.outline};
    outline-offset: ${_.outlineOffset};
  }
`,E=i=>{const{children:f,id:g,className:v,contentHeight:e="90vh",htmlProps:T,...l}=i,u=t.useRef(null);return w(oe,{...P(g,v,T,l),children:[m(re,{height:e,ref:u,tabIndex:0,children:f}),m(b,{contentRef:u})]})};E.displayName="ScrollableContainer";try{E.displayName="ScrollableContainer",E.__docgenInfo={description:"",displayName:"ScrollableContainer",props:{contentHeight:{defaultValue:null,description:"Høyde på innholdscontainer.",name:"contentHeight",required:!1,type:{name:"Height<0 | (string & {})> | undefined"}},htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:"HTMLAttributes<HTMLDivElement> | undefined"}}}}}catch{}export{E as S,b as a};
//# sourceMappingURL=ScrollableContainer-b249fe41.js.map
