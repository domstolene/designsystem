import{d as S,b as _,s as n,A as l,a as u}from"./ddsReferenceTokens-647ce456.js";import{r as d}from"./index-ebeaab24.js";import"./Caption-5c254d72.js";import"./Heading-dc72d0b9.js";import"./Label-23c96940.js";import"./Legend-dbc3ced6.js";import"./Link-9aff7843.js";import"./Paragraph-3340e0ea.js";import"./TextOverflowEllipsis-e3546c5b.js";import{g as k}from"./Typography-1747463b.js";import{s as T,g as I}from"./BaseComponentProps-a100791d.js";const q=""+new URL("jordskifterett_bullet1-9e4ef816.svg",import.meta.url).href,E=""+new URL("lagmannsrett_bullet2-57c13e12.svg",import.meta.url).href,R=""+new URL("tingrett_bullet3-c95c1745.svg",import.meta.url).href,{spacing:t}=S,{textDefault:w}=_,p=`1em + ${t.SizesDdsSpacingLocalX025}`,H=`${t.SizesDdsSpacingLocalX2} - (${p})`,N={base:{margin:`${t.SizesDdsSpacingLocalX1} 0`,color:w.textColor},ol:{paddingLeft:t.SizesDdsSpacingLocalX2},ul:{paddingLeft:`calc(${H})`}},m={lineHeight:"2.5em",ul:{paddingLeft:`calc(${p})`}},U={top:`calc((${m.lineHeight} / 2) - 0.5em )`},c={list:N,listItem:m,bullet:U,spaceLeft:t.SizesDdsSpacingLocalX2},{list:i,listItem:P,bullet:z}=c,D=n.ul`
  margin: ${i.base.margin};
  color: ${i.base.color};
  ul,
  ol {
    margin: 0;
  }
  *::selection {
    ${T}
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
              top: ${z.top};
              left: 0;
              background-size: contain;
              background-repeat: no-repeat;
              // Ensure double quotes in url due to svg data URI in image bundle that requires them, as the attributes use single quotes
              background-image: ${`url("${q}")`};
            }
            ul > li:before {
              // Ensure double quotes in url due to svg data URI in image bundle that requires them, as the attributes use single quotes
              background-image: ${`url("${E}")`};
            }
            ul > li > ul > li:before {
              // Ensure double quotes in url due to svg data URI in image bundle that requires them, as the attributes use single quotes
              background-image: ${`url("${R}")`};
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
`,a=d.forwardRef((e,r)=>{const{listType:s="unordered",typographyType:g="inherit",children:f,id:y,className:b,htmlProps:L,...h}=e,v=s==="ordered"?"ol":"ul",$={...I(y,b,L,h),listType:s,typographyType:g,as:v,ref:r};return u(D,{...$,children:f})});a.displayName="List";try{a.displayName="List",a.__docgenInfo={description:"",displayName:"List",props:{listType:{defaultValue:null,description:"Spesifiserer om komponenten skal returnere `<ul />` (punktliste) eller `<ol />` (nummerert liste).",name:"listType",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"ordered"'},{value:'"unordered"'}]}},typographyType:{defaultValue:null,description:"Spesifiserer typografi for listen. Komponenten arver i utgangspunktet fra forelder, men hvis forelder stiller ikke med relevant styling  må det velges `TypographyBodyType` som brukes i `<body>` ellers på siden.",name:"typographyType",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"bodySans01"'},{value:'"bodySans02"'},{value:'"bodySans03"'},{value:'"bodySans04"'},{value:'"inherit"'}]}},htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:"HTMLAttributes<HTMLUListElement | HTMLOListElement> | undefined"}}}}}catch{}const x=n.li`
  line-height: ${c.listItem.lineHeight};
`,o=d.forwardRef(({children:e,...r},s)=>u(x,{ref:s,...r,children:e}));o.displayName="ListItem";try{o.displayName="ListItem",o.__docgenInfo={description:"",displayName:"ListItem",props:{}}}catch{}export{a as L,o as a};
//# sourceMappingURL=ListItem-f73e8ae0.js.map
