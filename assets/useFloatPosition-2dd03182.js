import{B as _,g as D,V as v,L as B,A as T,O as $}from"./floating-ui.dom.browser.min-fc8c1a2d.js";import{r as o}from"./index-ebeaab24.js";import{r as q}from"./index-9c09ad76.js";import{d as z}from"./ddsReferenceTokens-647ce456.js";const N=e=>{const{element:t,padding:r}=e;function n(s){return Object.prototype.hasOwnProperty.call(s,"current")}return{name:"arrow",options:e,fn(s){return n(t)?t.current!=null?D({element:t.current,padding:r}).fn(s):{}:t?D({element:t,padding:r}).fn(s):{}}}};var M=typeof document<"u"?o.useLayoutEffect:o.useEffect;function O(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let r,n,s;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(r=e.length,r!=t.length)return!1;for(n=r;n--!==0;)if(!O(e[n],t[n]))return!1;return!0}if(s=Object.keys(e),r=s.length,r!==Object.keys(t).length)return!1;for(n=r;n--!==0;)if(!Object.prototype.hasOwnProperty.call(t,s[n]))return!1;for(n=r;n--!==0;){const c=s[n];if(!(c==="_owner"&&e.$$typeof)&&!O(e[c],t[c]))return!1}return!0}return e!==e&&t!==t}function j(e){const t=o.useRef(e);return M(()=>{t.current=e}),t}function V(e){e===void 0&&(e={});const{placement:t="bottom",strategy:r="absolute",middleware:n=[],platform:s,whileElementsMounted:c,open:w}=e,[m,R]=o.useState({x:null,y:null,strategy:r,placement:t,middlewareData:{},isPositioned:!1}),[d,P]=o.useState(n);O(d,n)||P(n);const u=o.useRef(null),l=o.useRef(null),i=o.useRef(m),p=j(c),g=j(s),[a,F]=o.useState(null),[y,L]=o.useState(null),x=o.useCallback(f=>{u.current!==f&&(u.current=f,F(f))},[]),S=o.useCallback(f=>{l.current!==f&&(l.current=f,L(f))},[]),h=o.useCallback(()=>{if(!u.current||!l.current)return;const f={placement:t,strategy:r,middleware:d};g.current&&(f.platform=g.current),_(u.current,l.current,f).then(C=>{const k={...C,isPositioned:!0};b.current&&!O(i.current,k)&&(i.current=k,q.flushSync(()=>{R(k)}))})},[d,t,r,g]);M(()=>{w===!1&&i.current.isPositioned&&(i.current.isPositioned=!1,R(f=>({...f,isPositioned:!1})))},[w]);const b=o.useRef(!1);M(()=>(b.current=!0,()=>{b.current=!1}),[]),M(()=>{if(a&&y){if(p.current)return p.current(a,y,h);h()}},[a,y,h,p]);const E=o.useMemo(()=>({reference:u,floating:l,setReference:x,setFloating:S}),[x,S]),A=o.useMemo(()=>({reference:a,floating:y}),[a,y]);return o.useMemo(()=>({...m,update:h,refs:E,elements:A,reference:x,floating:S}),[m,h,E,A,x,S])}const X=z.spacing.SizesDdsSpacingLocalX05NumberPx,U=(e,t={})=>{const{animationFrame:r=!0,offset:n=X,placement:s="bottom"}=t,c=[B(n),T(),$(),...e?[N({element:e})]:[]],{x:w,y:m,reference:R,floating:d,strategy:P,middlewareData:u,placement:l,refs:i}=V({placement:s,middleware:c,whileElementsMounted:(p,g,a)=>v(p,g,a,{animationFrame:r})});return{reference:R,floating:d,refs:i,styles:{floating:{position:P,top:m??"",left:w??""},arrow:u.arrow?G(P,l,u.arrow):void 0}}};function G(e,t,r){const n=H(t),s={top:"-15px",bottom:"-15px",right:"-21px",left:"-21px"}[n],c={top:"rotate(180deg)",right:"rotate(-90deg)",bottom:"",left:"rotate(90deg)"}[n];return{position:e,top:(r==null?void 0:r.y)??"",left:(r==null?void 0:r.x)??"",[n]:s,transform:c}}function H(e){switch(e){case"top":case"top-start":case"top-end":return"bottom";case"bottom":case"bottom-start":case"bottom-end":return"top";case"left":case"left-start":case"left-end":return"right";case"right":case"right-start":case"right-end":return"left"}}export{U as u};
//# sourceMappingURL=useFloatPosition-2dd03182.js.map