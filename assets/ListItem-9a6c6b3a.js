import{a}from"./jsx-runtime-e43ccb36.js";import{r as d}from"./index-1b03fe98.js";import{d as S,a as _,s as p,n as i}from"./ddsReferenceTokens-cf345c8b.js";import"./Caption-956f7c23.js";import"./Heading-1a21ccc8.js";import"./Label-1e45d63d.js";import"./Legend-8f4b1074.js";import"./Link-1d242339.js";import"./Paragraph-6d49c218.js";import"./TextOverflowEllipsis-5f7b5b23.js";import{a as k}from"./Typography-aec60abc.js";import{s as T,g as I}from"./BaseComponentProps-77dc9c6e.js";const E=""+new URL("jordskifterett_bullet1-9e4ef816.svg",import.meta.url).href,w=""+new URL("lagmannsrett_bullet2-57c13e12.svg",import.meta.url).href,H=""+new URL("tingrett_bullet3-c95c1745.svg",import.meta.url).href,{spacing:t}=S,{textDefault:N}=_,u=`1em + ${t.SizesDdsSpacingLocalX025}`,P=`${t.SizesDdsSpacingLocalX2} - (${u})`,z={base:{margin:`${t.SizesDdsSpacingLocalX1} 0`,color:N.textColor},ol:{paddingLeft:t.SizesDdsSpacingLocalX2},ul:{paddingLeft:`calc(${P})`}},m={lineHeight:"2.5em",ul:{paddingLeft:`calc(${u})`}},D={top:`calc((${m.lineHeight} / 2) - 0.5em )`},c={list:z,listItem:m,bullet:D,spaceLeft:t.SizesDdsSpacingLocalX2},{list:s,listItem:R,bullet:x}=c,M=p.ul`
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
`,o=d.forwardRef((e,r)=>{const{listType:l="unordered",typographyType:g="inherit",children:f,id:y,className:L,htmlProps:b,...$}=e,h=l==="ordered"?"ol":"ul",v={...I(y,L,b,$),listType:l,typographyType:g,as:h,ref:r};return a(M,{...v,children:f})});o.displayName="List";try{o.displayName="List",o.__docgenInfo={description:"",displayName:"List",props:{listType:{defaultValue:null,description:"Spesifiserer om komponenten skal returnere `<ul />` (punktliste) eller `<ol />` (nummerert liste).",name:"listType",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"ordered"'},{value:'"unordered"'}]}},typographyType:{defaultValue:null,description:"Spesifiserer typografi for listen. Komponenten arver i utgangspunktet fra forelder, men hvis forelder stiller ikke med relevant styling  må det velges `TypographyBodyType` som brukes i `<body>` ellers på siden.",name:"typographyType",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"bodySans01"'},{value:'"bodySans02"'},{value:'"bodySans03"'},{value:'"bodySans04"'},{value:'"inherit"'}]}},htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:"HTMLAttributes<HTMLUListElement | HTMLOListElement> | undefined"}}}}}catch{}const U=p.li`
  line-height: ${c.listItem.lineHeight};
`,n=d.forwardRef(({children:e,...r},l)=>a(U,{ref:l,...r,children:e}));n.displayName="ListItem";try{n.displayName="ListItem",n.__docgenInfo={description:"",displayName:"ListItem",props:{}}}catch{}export{o as L,n as a};
//# sourceMappingURL=ListItem-9a6c6b3a.js.map
