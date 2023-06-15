import{s as r,j as n,a as e}from"./focus-visible-c2e9b88d.js";const s=r.svg`
  display: inline-block;
  flex-shrink: 0;
  position: relative;
  text-align: center;
  vertical-align: middle;
`,i=r.g`
  transition: transform 0.2s linear;
  transform: ${({isUp:t})=>t?"translateY(3px)":"translateY(0)"};
`,l=r.path`
  transition: transform 0.2s linear;
  transform-origin: 1px 1px;
  transform: ${({isUp:t})=>t?"rotate(-90deg) translateY(0)":"rotate(0) translateY(0)"};
`,v=r.path`
  transition: transform 0.2s linear;
  transform-origin: 7px 1px;
  transform: ${({isUp:t})=>t?"rotate(90deg) translateY(0)":"rotate(0) translateY(0)"};
`,g="M 1 0 L 5 4 C 5 4 5 4 5 4 L 4 5 C 4 5 4 5 4 5 C 4 5 4 5 4 5 L 0 1 C 0 1 0 1 0 1 L 1 0 C 1 0 1 0 1 0 C 1 0 1 0 1 0 L 1 0 Z",h="M 3 4 L 7 0 L 8 1 C 8 1 8 1 8 1 L 4 5 L 3 4 C 3 4 3 4 3 4 L 3 4 Z",c=({isUp:t,height:a="5px",width:o="8px"})=>n(s,{viewBox:"0 0 8 5",width:o,height:a,fill:"currentColor",isUp:t,children:e(i,{isUp:t,children:[n(l,{d:g,isUp:t}),n(v,{d:h,isUp:t})]})});export{c as A};
//# sourceMappingURL=AnimatedChevronUpDown-4430134c.js.map
