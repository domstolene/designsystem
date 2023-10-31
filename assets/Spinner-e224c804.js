import{j as h,a as i}from"./jsx-runtime-e43ccb36.js";import{R as g,r as k}from"./index-1b03fe98.js";import{s as a,d as S}from"./ddsReferenceTokens-a28ebf03.js";import{a as v,g as E}from"./BaseComponentProps-5f9a30f8.js";const T=a.svg`
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
`,_=a.circle`
  stroke: ${({color:e})=>e&&v(e)};
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
`;function t(e){const{size:o=S.iconSizes.DdsIconsizeMedium,color:d="interactive",tooltip:r="Innlasting pågår",id:l,className:p,htmlProps:c,...m}=e,n=g.useRef(Date.now()),u=-(n.current%2e3),f=-(n.current%1500),s=`${k.useId()}-spinnerTitle`,y={...E(l,p,c,m),outerAnimationDelay:u,size:o};return h(T,{viewBox:"0 0 50 50",role:"img","aria-labelledby":s,...y,children:[r&&i("title",{id:s,children:r}),i(_,{...{innerAnimationDelay:f,color:d},cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"4"})]})}t.displayName="Spinner";try{t.displayName="Spinner",t.__docgenInfo={description:"",displayName:"Spinner",props:{color:{defaultValue:null,description:"Farge på spinneren.",name:"color",required:!1,type:{name:"string | (string & {}) | undefined"}},size:{defaultValue:null,description:"Størrelse; Setter høyde og bredde på spinneren.",name:"size",required:!1,type:{name:"Width<string> | undefined"}},tooltip:{defaultValue:null,description:"Tekst som vises ved hover.",name:"tooltip",required:!1,type:{name:"string | undefined"}},htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:"HTMLAttributes<SVGElement> | undefined"}}}}}catch{}export{t as S};
//# sourceMappingURL=Spinner-e224c804.js.map
