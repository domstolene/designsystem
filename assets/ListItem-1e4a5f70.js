import{d as y,b as S,s as n,A as l,j as a}from"./focus-visible-c2e9b88d.js";import{r}from"./index-ebeaab24.js";import{d as k}from"./Typography.utils-99dd1e07.js";import{s as v}from"./selection-fae9d0a8.js";import{g as I}from"./BaseComponentProps-bb0d5515.js";const q=""+new URL("jordskifterett_bullet1-9e4ef816.svg",import.meta.url).href,R=""+new URL("lagmannsrett_bullet2-57c13e12.svg",import.meta.url).href,w=""+new URL("tingrett_bullet3-c95c1745.svg",import.meta.url).href,{spacing:t}=y,{textDefault:z}=S,d=`1em + ${t.SizesDdsSpacingLocalX025}`,D=`${t.SizesDdsSpacingLocalX2} - (${d})`,U={base:{margin:`${t.SizesDdsSpacingLocalX1} 0`,color:z.textColor},ol:{paddingLeft:t.SizesDdsSpacingLocalX2},ul:{paddingLeft:`calc(${D})`}},u={lineHeight:"2.5em",ul:{paddingLeft:`calc(${d})`}},x={top:`calc((${u.lineHeight} / 2) - 0.5em )`},c={list:U,listItem:u,bullet:x,spaceLeft:t.SizesDdsSpacingLocalX2},{list:i,listItem:P,bullet:T}=c,X=n.ul`
  margin: ${i.base.margin};
  color: ${i.base.color};
  ul,
  ol {
    margin: 0;
  }
  *::selection {
    ${v}
  }

  ${({typographyType:e})=>e==="inherit"?l`
          font: inherit;
        `:l`
          ${k(e)}
        `}

  ${({listType:e})=>e==="unordered"?l`
          padding-left: ${i.ul.paddingLeft};
          list-style: none;
          li {
            position: relative;
            padding-left: ${P.ul.paddingLeft};
            &:before {
              content: '';
              display: inline-block;
              height: 1em;
              width: 1em;
              position: absolute;
              top: ${T.top};
              left: 0;
              background-size: contain;
              background-repeat: no-repeat;
              // Ensure double quotes in url due to svg data URI in image bundle that requires them, as the attributes use single quotes
              background-image: ${`url("${q}")`};
            }
            ul > li:before {
              // Ensure double quotes in url due to svg data URI in image bundle that requires them, as the attributes use single quotes
              background-image: ${`url("${R}")`};
            }
            ul > li > ul > li:before {
              // Ensure double quotes in url due to svg data URI in image bundle that requires them, as the attributes use single quotes
              background-image: ${`url("${w}")`};
            }
          }
        `:l`
          padding-left: ${i.ol.paddingLeft};
          & > li > ol {
            list-style-type: lower-alpha;
          }
          & > li > ol > li > ol {
            list-style-type: lower-roman;
          }
        `}
`,E=r.forwardRef((e,o)=>{const{listType:s="unordered",typographyType:g="inherit",children:m,id:p,className:f,htmlProps:b,...L}=e,$=s==="ordered"?"ol":"ul",h={...I(p,f,b,L),listType:s,typographyType:g,as:$,ref:o};return a(X,{...h,children:m})});E.displayName="List";const H=n.li`
  line-height: ${c.listItem.lineHeight};
`,j=r.forwardRef(({children:e,...o},s)=>a(H,{ref:s,...o,children:e}));j.displayName="ListItem";export{E as L,j as a};
//# sourceMappingURL=ListItem-1e4a5f70.js.map
