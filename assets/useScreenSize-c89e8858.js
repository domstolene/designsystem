import{_ as d,g as v}from"./LocalMessage.tokens-238b79f3.js";import{r as c}from"./index-c6dae603.js";import{d as L}from"./focus-visible-17f12d09.js";var a=L.breakpoints,r;(function(e){e[e.XSmall=0]="XSmall",e[e.Small=1]="Small",e[e.Medium=2]="Medium",e[e.Large=3]="Large",e[e.XLarge=4]="XLarge"})(r||(r={}));var g=[[r.XLarge,"only screen and (min-width: ".concat(a.DdsBreakpointXl,")")],[r.Large,"only screen and (min-width: ".concat(a.DdsBreakpointLg,")")],[r.Medium,"only screen and (min-width: ".concat(a.DdsBreakpointMd,")")],[r.Small,"only screen and (min-width: ".concat(a.DdsBreakpointSm,")")],[r.XSmall,"only screen and (min-width: ".concat(a.DdsBreakpointXs,")")]],X=function(){var m=c.useState(r.Large),s=d(m,2),l=s[0],u=s[1];return c.useEffect(function(){function t(){var n=v(g),o;try{for(n.s();!(o=n.n()).done;){var i=d(o.value,2),f=i[0],p=i[1];if(window.matchMedia(p).matches){u(f);return}}}catch(w){n.e(w)}finally{n.f()}}return t(),window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}},[]),l};export{r as S,X as u};
//# sourceMappingURL=useScreenSize-c89e8858.js.map
