import{a as l,j as v,F as D}from"./jsx-runtime-e43ccb36.js";import{r as n}from"./index-1b03fe98.js";import{d as re,s as p,n as d}from"./ddsReferenceTokens-cf345c8b.js";import{s as ne,d as te,i as de,A as ie}from"./BaseComponentProps-217bcb03.js";import{s as x}from"./scrollbarStyling-5c8dd8e6.js";import"./Caption-7324954d.js";import"./Heading-a143a4ab.js";import"./Label-e6c412e2.js";import"./Legend-8686145c.js";import"./Link-0af95a08.js";import"./Paragraph-67d8f149.js";import"./TextOverflowEllipsis-5f7b5b23.js";import{a as se,d as ce}from"./Typography-37e894bc.js";import{k as ue,a as pe,f as F}from"./Input.styles-9955857c.js";import{r as H}from"./removeButtonStyling-867d6ba4.js";import{b as me,a as fe,D as be}from"./DescriptionListDesc-d234126c.js";import{bs as ye,R as he,$ as ge}from"./libraryAdd-792d55f1.js";import{I as N}from"./Icon-96508a26.js";import{n as ve}from"./normalize-f756ee4b.js";import{V as Ce}from"./VisuallyHidden-d23941f1.js";const{font:ke,colors:b,border:W,spacing:y,iconSizes:E,borderRadius:_e}=re,we={body:{odd:{backgroundColor:b.DdsColorNeutralsWhite},even:{backgroundColor:b.DdsColorNeutralsGray1},hover:{backgroundColor:b.DdsColorInteractiveLightest},selected:{backgroundColor:b.DdsColorInteractiveLightest},mode:{sum:{borderTop:`${W.BordersDdsBorderStyleLightStrokeWeight} solid ${b.DdsColorNeutralsGray4}`,borderBottom:`${W.BordersDdsBorderStyleLightStrokeWeight} solid ${b.DdsColorNeutralsGray4}`,backgroundColor:b.DdsColorNeutralsWhite}},withDividers:{borderBottom:`1px solid ${b.DdsColorNeutralsGray4}`}},head:{extraCompact:{backgroundColor:b.DdsColorNeutralsWhite,fontSize:ke.DdsFontBodySans01FontSize}}},Se={density:{normal:{padding:`${y.SizesDdsSpacingLocalX15} ${y.SizesDdsSpacingLocalX075}`},compact:{padding:`${y.SizesDdsSpacingLocalX075}`},extraCompact:{padding:`${y.SizesDdsSpacingLocalX025} ${y.SizesDdsSpacingLocalX05}`}},head:{backgroundColor:b.DdsColorPrimaryLightest},sort:{gap:y.SizesDdsSpacingLocalX05,icon:{marginInlineStart:y.SizesDdsSpacingLocalX05}},layout:{textAndIcon:{gap:y.SizesDdsSpacingLocalX075,marginRight:y.SizesDdsSpacingLocalX075}}},Te={height:E.DdsIconsizeMedium,width:E.DdsIconsizeMedium,borderRadius:_e.RadiiDdsBorderRadius1Radius},T={row:we,cell:Se,collapseButton:Te},{cell:$e,row:w}=T,xe=p.table`
  border-spacing: 0;
  border-collapse: collapse;
  *::selection {
    ${ne}
  }
  ${x.webkit}
  ${x.firefox}
  ${({density:e})=>d`
    td,
    th {
      padding: ${$e.density[e].padding};
    }
  `}
  ${({density:e})=>e==="extraCompact"&&d`
      th {
        background-color: ${w.head.extraCompact.backgroundColor};
        font-size: ${w.head.extraCompact.fontSize};
      }
      tr[type='body'] {
        &:nth-of-type(even) {
          background-color: ${w.body.odd.backgroundColor};
        }
        &:nth-of-type(odd) {
          background-color: ${w.body.even.backgroundColor};
        }
      }
    `}
  ${({stickyHeader:e})=>e&&d`
      tr[type='head'] {
        th[type='head'] {
          position: sticky;
          top: 0;
          z-index: 50;
        }
      }
    `}
  ${({withDividers:e})=>e&&d`
      tr[type='body'] {
        border-bottom: ${w.body.withDividers.borderBottom};
      }
    `}
`,S=n.forwardRef(({density:e="normal",children:o,...a},r)=>{const t={ref:r,density:e,...a};return l(xe,{...t,children:o})});S.displayName="Table";try{S.displayName="Table",S.__docgenInfo={description:"",displayName:"Table",props:{density:{defaultValue:{value:"normal"},description:"Spesifiserer hvor romslige cellene i tabellen skal være.",name:"density",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"normal"'},{value:'"compact"'},{value:'"extraCompact"'}]}},stickyHeader:{defaultValue:null,description:"Spesifiserer om cellene i `<Head>` skal bli sticky ved scrolling.",name:"stickyHeader",required:!1,type:{name:"boolean | undefined"}},withDividers:{defaultValue:null,description:"Legger skillelinjer mellom radene.",name:"withDividers",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const j=n.createContext({headerValues:[],definingColumnIndex:[0]}),Ve=()=>n.useContext(j),Re=p(S)`
  width: 100%;
  ${({withDividers:e})=>e&&d`
      tr[data-isopencollapsibleheader='true'] {
        border-bottom: none;
      }
    `}
`,V=n.forwardRef((e,o)=>{const{density:a="normal",children:r,isCollapsed:t,headerValues:i,definingColumnIndex:s=[0],...m}=e,c={ref:o,density:a,isCollapsed:t,...m};return l(j.Provider,{value:{isCollapsed:t,headerValues:i,definingColumnIndex:s},children:l(Re,{...c,children:r})})});V.displayName="CollapsibleTable";try{V.displayName="CollapsibleTable",V.__docgenInfo={description:"",displayName:"CollapsibleTable",props:{isCollapsed:{defaultValue:null,description:"Om tabellen skal kollapse.",name:"isCollapsed",required:!1,type:{name:"boolean | undefined"}},headerValues:{defaultValue:null,description:"Innhold i headere (`content`) og deres `key`. `headerValues.content` må være den samme som faktisk innhold i `<Table.Cell type='head'>`.",name:"headerValues",required:!0,type:{name:"HeaderValues"}},definingColumnIndex:{defaultValue:{value:"[0]"},description:"Indeksen(e) til kolonnen(e) som skal synes når tabellen er kollapset. Rekkefølgen i array avgjør rekkefølgen i render.",name:"definingColumnIndex",required:!1,type:{name:"number[] | undefined"}},density:{defaultValue:null,description:"Spesifiserer hvor romslige cellene i tabellen skal være.",name:"density",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"normal"'},{value:'"compact"'},{value:'"extraCompact"'}]}},stickyHeader:{defaultValue:null,description:"Spesifiserer om cellene i `<Head>` skal bli sticky ved scrolling.",name:"stickyHeader",required:!1,type:{name:"boolean | undefined"}},withDividers:{defaultValue:null,description:"Legger skillelinjer mellom radene.",name:"withDividers",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const De=p.thead``,X=n.forwardRef(({children:e,...o},a)=>{const r={...o};return l(De,{ref:a,...r,children:e})});X.displayName="Table.Head";try{Table.Head.displayName="Table.Head",Table.Head.__docgenInfo={description:"",displayName:"Table.Head",props:{}}}catch{}const Ne=p.tbody``,O=n.forwardRef(({children:e,...o},a)=>{const r={...o};return l(Ne,{ref:a,...r,children:e})});O.displayName="Table.Body";try{Table.Body.displayName="Table.Body",Table.Body.__docgenInfo={description:"",displayName:"Table.Body",props:{}}}catch{}const Ie=p.tfoot``,A=n.forwardRef(({children:e,...o},a)=>{const r={...o};return l(Ie,{ref:a,...r,children:e})});A.displayName="Table.Foot";try{Table.Foot.displayName="Table.Foot",Table.Foot.__docgenInfo={description:"",displayName:"Table.Foot",props:{}}}catch{}const{row:C}=T,P=(e,o)=>d`
    ${e==="sum"&&d`
      font-weight: 600;
      border-top: ${C.body.mode.sum.borderTop};
      border-bottom: ${C.body.mode.sum.borderBottom};
      background-color: ${C.body.mode.sum.backgroundColor};
    `}
    ${o&&d`
      background-color: ${C.body.selected.backgroundColor};
    `}
  `,k=p.tr`
  @media (prefers-reduced-motion: no-preference) {
    transition:
      background-color 0.2s,
      border-color 0.2s,
      box-shadow 0.2s;
  }

  ${se(ce,!0)}

  ${({type:e})=>e==="head"&&d`
      font-weight: 600;
      text-align: left;
    `}
  ${({type:e,mode:o,selected:a,hoverable:r})=>e==="body"&&d`
      &:nth-of-type(even) {
        background-color: ${C.body.even.backgroundColor};
        ${P(o,a)}
      }

      &:nth-of-type(odd) {
        background-color: ${C.body.odd.backgroundColor};
        ${P(o,a)}
      }

      ${r&&d`
        &:hover {
          background-color: ${C.body.hover.backgroundColor};
        }
      `}
      &:focus-visible, &.focus-visible {
        ${ue}
      }
    `}
`;try{k.displayName="StyledRow",k.__docgenInfo={description:"",displayName:"StyledRow",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}}}catch{}const M=n.forwardRef(({type:e="body",mode:o="normal",children:a,...r},t)=>{const i={type:e,mode:o,...r};return l(k,{ref:t,...i,children:a})});M.displayName="Table.Row";try{Table.Row.displayName="Table.Row",Table.Row.__docgenInfo={description:"",displayName:"Table.Row",props:{type:{defaultValue:{value:"body"},description:"Spesifiserer om raden skal brukes i `<head>` eller `<body>`-seksjonen.",name:"type",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"body"'},{value:'"head"'}]}},mode:{defaultValue:{value:"normal"},description:"Custom modus for rader som har ytterligere semantisk betydning (f.eks. summeringsrad), definerer kun styling. Ved bruk av sum må `<Cell>` med tall i høyrestilles vha layout prop.",name:"mode",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"normal"'},{value:'"sum"'}]}},selected:{defaultValue:null,description:"Spesifiserer om raden har blitt valgt/markert.",name:"selected",required:!1,type:{name:"boolean | undefined"}},hoverable:{defaultValue:null,description:"Spesifiserer om raden skal ha hover styling. Brukes hovedsakelig på klikkbare rader.",name:"hoverable",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const{cell:G}=T,Be=e=>{switch(e){case"center":return d`
        justify-content: center;
      `;case"right":return d`
        justify-content: flex-end;
      `;case"text and icon":return d`
        gap: ${G.layout.textAndIcon.gap};
      `;default:case"left":return}},Le=p.td`
  ${({type:e})=>e==="head"&&d`
      background-color: ${G.head.backgroundColor};
    `}
`,qe=p.div`
  display: flex;
  align-items: center;
  ${({layout:e})=>Be(e)}
`,ze=e=>{switch(e){case"head":return"th";default:case"data":return"td"}},R=n.forwardRef(({children:e,type:o="data",layout:a="left",collapsibleProps:r,...t},i)=>{const s=ze(o),{isCollapsibleChild:m}=r??{},c={as:s,type:o,...t};return m?l(me,{children:e}):l(Le,{ref:i,...c,children:l(qe,{...{layout:a},children:e})})});R.displayName="Table.Cell";try{Table.Cell.displayName="Table.Cell",Table.Cell.__docgenInfo={description:"",displayName:"Table.Cell",props:{type:{defaultValue:{value:"data"},description:"Type celle. Returnerer enten `<td>` eller `<th>`.",name:"type",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"data"'},{value:'"head"'}]}},layout:{defaultValue:{value:"left"},description:"Layout av innholdet i cellen. 'tekst and icon' legger `gap` mellom barna og andre barnet i cellen.",name:"layout",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"left"'},{value:'"right"'},{value:'"center"'},{value:'"text and icon"'}]}},collapsibleProps:{defaultValue:null,description:"Props ved bruk av `<CollapsibleRow>`. **OBS!** settes automatisk av forelder.",name:"collapsibleProps",required:!1,type:{name:"CollapsibleProps | undefined"}}}}}catch{}const{collapseButton:I}=T,We=p.button`
  ${H}
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${pe};
  border-radius: ${I.borderRadius};
  height: ${I.height};
  width: ${I.width};
  &:focus-visible {
    ${F}
  }
`,Ee=p(R)`
  & > div {
    display: block;
  }
`,U=n.forwardRef(({type:e="body",mode:o="normal",children:a,...r},t)=>{const i={type:e,mode:o,...r},{isCollapsed:s,headerValues:m,definingColumnIndex:c}=Ve(),[u,B]=n.useState(!0);n.useEffect(()=>{!s&&B(!0)},[s]);const L=m.filter((g,f)=>c.indexOf(f)===-1),$=n.Children.toArray(a),Q=$.filter((g,f)=>c.indexOf(f)===-1),Y="collapsibleRow",q=[],_=s&&L.length>0?Q.map(function(g,f){const ae=te(Y,f.toString());return q.push(ae),v(n.Fragment,{children:[l(fe,{children:L[f].content}),n.isValidElement(g)&&n.cloneElement(g,{collapsibleProps:{isCollapsibleChild:!0}})]},`DL-${f}`)}):null,Z=_&&_.length>0?l(k,{type:"body",children:l(Ee,{colSpan:c.length+1,children:l(be,{children:_})})}):null,z=$.slice().filter((g,f)=>c.indexOf(f)>-1).sort((g,f)=>c.indexOf($.indexOf(g))-c.indexOf($.indexOf(f))),ee=()=>e!=="head"||!s?null:l(k,{ref:t,...i,children:v(D,{children:[z,v(h.Cell,{type:"head",layout:"center",children:["Utvid",l(Ce,{as:"span",children:"raden"})]})]})}),oe=de(q),le=()=>e!=="body"||!s?null:v(k,{ref:t,...i,"data-isopencollapsibleheader":!u&&!0,children:[z,l(h.Cell,{children:l(We,{onClick:()=>B(!u),"aria-expanded":!u,"aria-controls":oe,children:l(ie,{isUp:!u,height:"7.5px",width:"12px"})})})]});return s&&_&&_.length>0?v(D,{children:[ee(),e==="body"&&v(D,{children:[le(),u?null:Z]})]}):l(k,{ref:t,...i,children:a})});U.displayName="CollapsibleTable.Row";try{CollapsibleTable.Row.displayName="CollapsibleTable.Row",CollapsibleTable.Row.__docgenInfo={description:"",displayName:"CollapsibleTable.Row",props:{type:{defaultValue:{value:"body"},description:"Spesifiserer om raden skal brukes i `<head>` eller `<body>`-seksjonen.",name:"type",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"body"'},{value:'"head"'}]}},mode:{defaultValue:{value:"normal"},description:"Custom modus for rader som har ytterligere semantisk betydning (f.eks. summeringsrad), definerer kun styling. Ved bruk av sum må `<Cell>` med tall i høyrestilles vha layout prop.",name:"mode",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"normal"'},{value:'"sum"'}]}},selected:{defaultValue:null,description:"Spesifiserer om raden har blitt valgt/markert.",name:"selected",required:!1,type:{name:"boolean | undefined"}},hoverable:{defaultValue:null,description:"Spesifiserer om raden skal ha hover styling. Brukes hovedsakelig på klikkbare rader.",name:"hoverable",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const{cell:Pe}=T,Fe=p.button`
  ${ve}
  user-select: text;
  ${H}
  display: flex;
  align-items: center;
  gap: ${Pe.sort.gap};
  &:focus-visible {
    ${F}
  }
`,He=(e,o)=>!e||!o?l(N,{icon:ye,iconSize:"inherit"}):o==="ascending"?l(N,{icon:he,iconSize:"inherit"}):l(N,{icon:ge,iconSize:"inherit"}),J=n.forwardRef(({isSorted:e,sortOrder:o,onClick:a,children:r,...t},i)=>l(R,{ref:i,type:"head","aria-sort":e&&o?o:void 0,...t,children:v(Fe,{onClick:a,"aria-description":"Aktiver for å endre sorteringsrekkefølge",children:[r," ",He(e,o)]})}));J.displayName="Table.SortCell";try{Table.SortCell.displayName="Table.SortCell",Table.SortCell.__docgenInfo={description:"",displayName:"Table.SortCell",props:{isSorted:{defaultValue:null,description:"Spesifiserer om kolonnen er sortert.",name:"isSorted",required:!1,type:{name:"boolean | undefined"}},sortOrder:{defaultValue:null,description:"Sorteringsrekkefølge i kolonnen. Avgjør hvilket ikon skal vises i cellen.",name:"sortOrder",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"ascending"'},{value:'"descending"'}]}},onClick:{defaultValue:null,description:"onClick-funksjon for sortering og annen logikk.",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void) & MouseEventHandler<HTMLTableCellElement>"}},layout:{defaultValue:null,description:"Layout av innholdet i cellen. 'tekst and icon' legger `gap` mellom barna og andre barnet i cellen.",name:"layout",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"left"'},{value:'"right"'},{value:'"center"'},{value:'"text and icon"'}]}},collapsibleProps:{defaultValue:null,description:"Props ved bruk av `<CollapsibleRow>`. **OBS!** settes automatisk av forelder.",name:"collapsibleProps",required:!1,type:{name:"CollapsibleProps | undefined"}}}}}catch{}const je=p.div`
  ${({overflowX:e})=>e&&d`
      overflow-x: auto;
    `}
  ${x.webkit}
  ${x.firefox}
`,K=({children:e,...o})=>{const[a,r]=n.useState(!1),[t,i]=n.useState(window.innerWidth);function s(u){return u.offsetWidth<u.scrollWidth}const m=n.useRef(null);n.useEffect(()=>{if(m!=null&&m.current&&s(m.current)){r(!0);return}r(!1)},[t]),n.useEffect(()=>{function u(){i(window.innerWidth)}return window.addEventListener("resize",u),()=>window.removeEventListener("resize",u)});const c={ref:m,overflowX:a,...o};return l(je,{...c,children:e})};K.displayName="Table.Wrapper";try{Table.Wrapper.displayName="Table.Wrapper",Table.Wrapper.__docgenInfo={description:"",displayName:"Table.Wrapper",props:{}}}catch{}const h=S;h.Wrapper=K;h.Head=X;h.Body=O;h.Cell=R;h.SortCell=J;h.Row=M;h.Foot=A;const Xe=V;Xe.Row=U;export{Xe as C,h as T};
//# sourceMappingURL=index-0c36c15b.js.map
