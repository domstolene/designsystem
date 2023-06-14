import{s as o,b as y,j as n,d as u}from"./focus-visible-17f12d09.js";import{R as k,r as g}from"./index-c6dae603.js";import{g as x}from"./color-0daeea22.js";import{g as I}from"./BaseComponentProps-bb0d5515.js";const S=o.svg`
  display: block;
  width: ${({size:e})=>e};
  height: ${({size:e})=>e};
  stroke-dasharray: 90, 150;
  animation: rotate 1.5s linear infinite;
  animation-delay: ${({outerAnimationDelay:e})=>e}ms;

  @media (prefers-reduced-motion: no-preference) {
    animation: rotate 2s linear infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`,$=o.circle`
  stroke: ${({color:e})=>e&&x(e)};
  stroke-linecap: round;

  @media (prefers-reduced-motion: no-preference) {
    animation: dash 1.5s ease-in-out infinite;
    animation-delay: ${({innerAnimationDelay:e})=>e}ms;

    @keyframes dash {
      0% {
        stroke-dasharray: 1, 150;
        stroke-dashoffset: 0;
      }
      50% {
        stroke-dasharray: 90, 150;
        stroke-dashoffset: -35;
      }
      100% {
        stroke-dasharray: 90, 150;
        stroke-dashoffset: -124;
      }
    }
  }
`;function P(e){const{size:a=u.iconSizes.DdsIconsizeMedium,color:i="interactive",tooltip:r="Innlasting pågår",id:d,className:c,htmlProps:l,...m}=e,s=k.useRef(Date.now()),p=-(s.current%2e3),f=-(s.current%1500),t=`${g.useId()}-spinnerTitle`,h={...I(d,c,l,m),outerAnimationDelay:p,size:a};return y(S,{viewBox:"0 0 50 50",role:"img","aria-labelledby":t,...h,children:[r&&n("title",{id:t,children:r}),n($,{...{innerAnimationDelay:f,color:i},cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"4"})]})}P.displayName="Spinner";export{P as S};
//# sourceMappingURL=Spinner-7298b3ed.js.map
