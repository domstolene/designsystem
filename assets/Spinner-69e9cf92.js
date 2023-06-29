import{s as a,a as y,j as n,d as u}from"./focus-visible-35158c22.js";import{R as k,r as g}from"./index-d47b1f5a.js";import{P as x,a as I}from"./dds-core-29d22035.js";const P=a.svg`
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
`,S=a.circle`
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
`;function $(e){const{size:i=u.iconSizes.DdsIconsizeMedium,color:o="interactive",tooltip:r="Innlasting pågår",id:d,className:c,htmlProps:l,...m}=e,s=k.useRef(Date.now()),p=-(s.current%2e3),f=-(s.current%1500),t=`${g.useId()}-spinnerTitle`,h={...I(d,c,l,m),outerAnimationDelay:p,size:i};return y(P,{viewBox:"0 0 50 50",role:"img","aria-labelledby":t,...h,children:[r&&n("title",{id:t,children:r}),n(S,{...{innerAnimationDelay:f,color:o},cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"4"})]})}$.displayName="Spinner";export{$ as S};
//# sourceMappingURL=Spinner-69e9cf92.js.map
