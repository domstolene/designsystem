import{d as S,b as _,s as n,A as s,a as d}from"./ddsReferenceTokens-ceb64027.js";import{r as p}from"./index-1b03fe98.js";import"./Caption-d066edab.js";import"./Heading-d8600f49.js";import"./Label-10c93eb5.js";import"./Legend-0cba57ca.js";import"./Link-7a88da71.js";import"./Paragraph-5ad16720.js";import"./TextOverflowEllipsis-e584ab25.js";import{a as k}from"./Typography-56baa34a.js";import{s as T,g as I}from"./BaseComponentProps-d435d0d0.js";const E=""+new URL("jordskifterett_bullet1-9e4ef816.svg",import.meta.url).href,w=""+new URL("lagmannsrett_bullet2-57c13e12.svg",import.meta.url).href,H=""+new URL("tingrett_bullet3-c95c1745.svg",import.meta.url).href,{spacing:t}=S,{textDefault:N}=_,u=`1em + ${t.SizesDdsSpacingLocalX025}`,P=`${t.SizesDdsSpacingLocalX2} - (${u})`,z={base:{margin:`${t.SizesDdsSpacingLocalX1} 0`,color:N.textColor},ol:{paddingLeft:t.SizesDdsSpacingLocalX2},ul:{paddingLeft:`calc(${P})`}},m={lineHeight:"2.5em",ul:{paddingLeft:`calc(${u})`}},D={top:`calc((${m.lineHeight} / 2) - 0.5em )`},c={list:z,listItem:m,bullet:D,spaceLeft:t.SizesDdsSpacingLocalX2},{list:i,listItem:R,bullet:x}=c,M=n.ul`
  margin: ${i.base.margin};
  color: ${i.base.color};
  ul,
  ol {
    margin: 0;
  }
  *::selection {
    ${T}
  }

  ${({typographyType:e})=>e==="inherit"?s`
          font: inherit;
        `:s`
          ${k(e)}
        `}

  ${({listType:e})=>e==="unordered"?s`
          padding-left: ${i.ul.paddingLeft};
          list-style: none;
          li {
            position: relative;
            padding-left: ${R.ul.paddingLeft};
            &:before {
              content: '';
              display: inline-block;
              height: 1em;
              width: 1em;
              position: absolute;
              top: ${x.top};
              left: 0;
              background-size: contain;
              background-repeat: no-repeat;
              background-image: ${`url('${E}')`};
            }
            ul > li:before {
              background-image: ${`url('${w}')`};
            }
            ul > li > ul > li:before {
              background-image: ${`url('${H}')`};
            }
          }
        `:s`
          padding-left: ${i.ol.paddingLeft};
          & > li > ol {
            list-style-type: lower-alpha;
          }
          & > li > ol > li > ol {
            list-style-type: lower-roman;
          }
        `}
`,o=p.forwardRef((e,r)=>{const{listType:l="unordered",typographyType:g="inherit",children:f,id:y,className:L,htmlProps:b,...$}=e,h=l==="ordered"?"ol":"ul",v={...I(y,L,b,$),listType:l,typographyType:g,as:h,ref:r};return d(M,{...v,children:f})});o.displayName="List";try{o.displayName="List",o.__docgenInfo={description:"",displayName:"List",props:{listType:{defaultValue:null,description:"Spesifiserer om komponenten skal returnere `<ul />` (punktliste) eller `<ol />` (nummerert liste).",name:"listType",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"ordered"'},{value:'"unordered"'}]}},typographyType:{defaultValue:null,description:"Spesifiserer typografi for listen. Komponenten arver i utgangspunktet fra forelder, men hvis forelder stiller ikke med relevant styling  må det velges `TypographyBodyType` som brukes i `<body>` ellers på siden.",name:"typographyType",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"bodySans01"'},{value:'"bodySans02"'},{value:'"bodySans03"'},{value:'"bodySans04"'},{value:'"inherit"'}]}},htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:"HTMLAttributes<HTMLUListElement | HTMLOListElement> | undefined"}}}}}catch{}const U=n.li`
  line-height: ${c.listItem.lineHeight};
`,a=p.forwardRef(({children:e,...r},l)=>d(U,{ref:l,...r,children:e}));a.displayName="ListItem";try{a.displayName="ListItem",a.__docgenInfo={description:"",displayName:"ListItem",props:{}}}catch{}export{o as L,a};
//# sourceMappingURL=ListItem-7673aa22.js.map
