import{d as y,b as S,s as a,A as l,a as n}from"./ddsReferenceTokens-f1d35829.js";import{r}from"./index-d47b1f5a.js";import{O as k}from"./dds-typography-cc6cb429.js";import{Q as v,a as I}from"./dds-core-c67132cd.js";const q=""+new URL("jordskifterett_bullet1-9e4ef816.svg",import.meta.url).href,R=""+new URL("lagmannsrett_bullet2-57c13e12.svg",import.meta.url).href,w=""+new URL("tingrett_bullet3-c95c1745.svg",import.meta.url).href,{spacing:t}=y,{textDefault:z}=S,u=`1em + ${t.SizesDdsSpacingLocalX025}`,D=`${t.SizesDdsSpacingLocalX2} - (${u})`,U={base:{margin:`${t.SizesDdsSpacingLocalX1} 0`,color:z.textColor},ol:{paddingLeft:t.SizesDdsSpacingLocalX2},ul:{paddingLeft:`calc(${D})`}},d={lineHeight:"2.5em",ul:{paddingLeft:`calc(${u})`}},x={top:`calc((${d.lineHeight} / 2) - 0.5em )`},c={list:U,listItem:d,bullet:x,spaceLeft:t.SizesDdsSpacingLocalX2},{list:i,listItem:X,bullet:E}=c,P=a.ul`
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
            padding-left: ${X.ul.paddingLeft};
            &:before {
              content: '';
              display: inline-block;
              height: 1em;
              width: 1em;
              position: absolute;
              top: ${E.top};
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
`,T=r.forwardRef((e,o)=>{const{listType:s="unordered",typographyType:g="inherit",children:m,id:p,className:b,htmlProps:f,...L}=e,$=s==="ordered"?"ol":"ul",h={...I(p,b,f,L),listType:s,typographyType:g,as:$,ref:o};return n(P,{...h,children:m})});T.displayName="List";const H=a.li`
  line-height: ${c.listItem.lineHeight};
`,N=r.forwardRef(({children:e,...o},s)=>n(H,{ref:s,...o,children:e}));N.displayName="ListItem";export{T as L,N as a};
//# sourceMappingURL=ListItem-455b60fe.js.map
