import{r as t}from"./index-ebeaab24.js";import{d as o}from"./focus-visible-c2e9b88d.js";const{breakpoints:n}=o;var d=(e=>(e[e.XSmall=0]="XSmall",e[e.Small=1]="Small",e[e.Medium=2]="Medium",e[e.Large=3]="Large",e[e.XLarge=4]="XLarge",e))(d||{});const m=[[4,`only screen and (min-width: ${n.DdsBreakpointXl})`],[3,`only screen and (min-width: ${n.DdsBreakpointLg})`],[2,`only screen and (min-width: ${n.DdsBreakpointMd})`],[1,`only screen and (min-width: ${n.DdsBreakpointSm})`],[0,`only screen and (min-width: ${n.DdsBreakpointXs})`]],c=function(){const[e,r]=t.useState(3);return t.useEffect(()=>{function s(){for(const[a,i]of m)if(window.matchMedia(i).matches){r(a);return}}return s(),window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[]),e};export{d as S,c as u};
//# sourceMappingURL=useScreenSize-51212f78.js.map