import{a as n}from"./jsx-runtime-e43ccb36.js";import{r as d}from"./index-1b03fe98.js";import{d as S,a as _,s as p,A as i}from"./ddsReferenceTokens-f9f5a4e4.js";import"./Caption-6d408196.js";import"./Heading-5f7faa2b.js";import"./Label-9dee7f37.js";import"./Legend-41f9f05c.js";import"./Link-1567bf4e.js";import"./Paragraph-998f64b8.js";import"./TextOverflowEllipsis-1edb8626.js";import{a as k}from"./Typography-e857479c.js";import{s as T,g as I}from"./BaseComponentProps-9c025471.js";const E=""+new URL("jordskifterett_bullet1-9e4ef816.svg",import.meta.url).href,w=""+new URL("lagmannsrett_bullet2-57c13e12.svg",import.meta.url).href,H=""+new URL("tingrett_bullet3-c95c1745.svg",import.meta.url).href,{spacing:t}=S,{textDefault:N}=_,u=`1em + ${t.SizesDdsSpacingLocalX025}`,P=`${t.SizesDdsSpacingLocalX2} - (${u})`,z={base:{margin:`${t.SizesDdsSpacingLocalX1} 0`,color:N.textColor},ol:{paddingLeft:t.SizesDdsSpacingLocalX2},ul:{paddingLeft:`calc(${P})`}},m={lineHeight:"2.5em",ul:{paddingLeft:`calc(${u})`}},D={top:`calc((${m.lineHeight} / 2) - 0.5em )`},c={list:z,listItem:m,bullet:D,spaceLeft:t.SizesDdsSpacingLocalX2},{list:s,listItem:R,bullet:x}=c,M=p.ul`
  margin: ${s.base.margin};
  color: ${s.base.color};
  ul,
  ol {
    margin: 0;
  }
  *::selection {
    ${T}
  }

  ${({typographyType:e})=>e==="inherit"?i`
          font: inherit;
        `:i`
          ${k(e)}
        `}

  ${({listType:e})=>e==="unordered"?i`
          padding-left: ${s.ul.paddingLeft};
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
        `:i`
          padding-left: ${s.ol.paddingLeft};
          & > li > ol {
            list-style-type: lower-alpha;
          }
          & > li > ol > li > ol {
            list-style-type: lower-roman;
          }
        `}
`,o=d.forwardRef((e,r)=>{const{listType:l="unordered",typographyType:g="inherit",children:f,id:y,className:L,htmlProps:b,...$}=e,h=l==="ordered"?"ol":"ul",v={...I(y,L,b,$),listType:l,typographyType:g,as:h,ref:r};return n(M,{...v,children:f})});o.displayName="List";try{o.displayName="List",o.__docgenInfo={description:"",displayName:"List",props:{listType:{defaultValue:null,description:"Spesifiserer om komponenten skal returnere `<ul />` (punktliste) eller `<ol />` (nummerert liste).",name:"listType",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"ordered"'},{value:'"unordered"'}]}},typographyType:{defaultValue:null,description:"Spesifiserer typografi for listen. Komponenten arver i utgangspunktet fra forelder, men hvis forelder stiller ikke med relevant styling  må det velges `TypographyBodyType` som brukes i `<body>` ellers på siden.",name:"typographyType",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"inherit"'},{value:'"bodySans01"'},{value:'"bodySans02"'},{value:'"bodySans03"'},{value:'"bodySans04"'}]}},htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:"HTMLAttributes<HTMLUListElement | HTMLOListElement> | undefined"}}}}}catch{}const U=p.li`
  line-height: ${c.listItem.lineHeight};
`,a=d.forwardRef(({children:e,...r},l)=>n(U,{ref:l,...r,children:e}));a.displayName="ListItem";try{a.displayName="ListItem",a.__docgenInfo={description:"",displayName:"ListItem",props:{}}}catch{}export{o as L,a};
//# sourceMappingURL=ListItem-a2d04c8f.js.map
