import{s as a,d as v,j as s,b as S}from"./focus-visible-17f12d09.js";import{r as p}from"./index-c6dae603.js";import{r as M}from"./index-eb008d06.js";import{u as R}from"./useMountTransition-ab1b2779.js";import{c as E}from"./color-0daeea22.js";import{s as I}from"./selection-dced972e.js";import{c as X}from"./focusVisible-bd00be70.js";import{u as H}from"./useFocusTrap-754ba609.js";import{u as N}from"./useCombinedRefs-764cd8e8.js";import{u as O}from"./useOnClickOutside-08b83e6f.js";import{u as j}from"./useOnKeyDown-77bae070.js";import{g as w}from"./BaseComponentProps-bb0d5515.js";import{T as Y}from"./Typography-ddbe86f6.js";import{C as A}from"./close-bbf4cbe9.js";import{P as G}from"./Paper-19f1cdc7.js";import{B as V}from"./Button-4fdfc19e.js";import{S as W}from"./ScrollableContainer-339b79b4.js";const F=a.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${E(v.colors.DdsColorNeutralsGray9,.5)};
  overflow-y: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 200;
  opacity: ${({isOpen:o})=>o?1:0};
  @media (prefers-reduced-motion: no-preference) {
    transition: opacity 0.2s;
  }
`,K=o=>o.clientHeight>window.innerHeight;function U(o){if(K(o)){const n=Math.round(window.scrollY);o.style.overflowY="scroll",o.style.position="fixed",o.style.top=`-${n}px`}}function q(o){const n=parseInt(document.body.style.top)||0;o.style.removeProperty("overflow-y"),o.style.removeProperty("position"),o.style.removeProperty("top"),window.scrollTo(0,n*-1)}const{spacing:t}=v,J={padding:`${t.SizesDdsSpacingLocalX1} ${t.SizesDdsSpacingLocalX1} ${t.SizesDdsSpacingLocalX15} ${t.SizesDdsSpacingLocalX15}`},Q={paddingRight:t.SizesDdsSpacingLocalX1,gap:t.SizesDdsSpacingLocalX1},Z={gap:t.SizesDdsSpacingLocalX1},_={container:J,contentContainer:Q,actionsContainer:Z},{container:oo,contentContainer:$}=_,eo=a(G)`
  display: flex;
  flex-direction: column-reverse;
  min-width: 200px;
  padding: ${oo.padding};
  &::selection,
  *::selection {
    ${I}
  }
  :focus-visible,
  &.focus-visible {
    ${X}
  }
`,no=a.div`
  display: grid;
  padding-right: ${$.paddingRight};
  gap: ${$.gap};
`,so=a.div``,to=a(V)`
  align-self: flex-end;
`,ro=p.forwardRef((o,n)=>{const{isOpen:e=!1,parentElement:m=document.body,children:f,header:r,onClose:i,id:c,triggerRef:l,className:d,htmlProps:P,...k}=o,B=p.useId(),g=c??`${B}-modal`,y=`${g}-header`,h=H(e),D=N(n,h),u=()=>{var C;i&&e&&(l&&((C=l.current)==null||C.focus()),i())};p.useEffect(()=>{e?U(document.body):q(document.body)},[e]),O(h.current,()=>u()),j(["Escape","Esc"],()=>u());const b=R(e,200),T={isOpen:b&&e},z={...w(c,d,P,k),ref:D,role:"dialog","aria-modal":!0,"aria-hidden":!e,tabIndex:-1,"aria-labelledby":y,id:g},L={id:y};return e||b?M.createPortal(s(F,{...T,children:S(eo,{...z,elevation:4,children:[S(no,{children:[r&&s(so,{...L,children:typeof r=="string"?s(Y,{typographyType:"headingSans03",children:r}):r}),f]}),i&&s(to,{size:"small",appearance:"borderless",purpose:"secondary",icon:A,onClick:u,"aria-label":"Lukk dialog"})]})}),m):null});ro.displayName="Modal";const x=a.div``,ao=p.forwardRef((o,n)=>{const{children:e,scrollable:m,id:f,className:r,htmlProps:i,height:c,...l}=o,d={...w(f,r,i,l),ref:n};return m?s(x,{...d,children:s(W,{contentHeight:c,children:e})}):s(x,{...d,children:e})});ao.displayName="ModalBody";export{ro as M,ao as a,_ as m};
//# sourceMappingURL=ModalBody-f9de15ce.js.map
