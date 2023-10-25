import{a as o,j as v,F as D}from"./jsx-runtime-e43ccb36.js";import{r as n}from"./index-1b03fe98.js";import{d as re,s as p,A as d}from"./ddsReferenceTokens-baf3ad90.js";import{s as ne,d as te,i as de,A as ie}from"./BaseComponentProps-46424d28.js";import{s as x}from"./scrollbarStyling-4847117a.js";import"./Caption-1d5aeb22.js";import"./Heading-862bf652.js";import"./Label-5ae0c148.js";import"./Legend-a1cc5017.js";import"./Link-15befa1a.js";import"./Paragraph-53be9306.js";import"./TextOverflowEllipsis-05821fa6.js";import{a as se,d as ue}from"./Typography-9e3266f4.js";import{k as ce,a as pe,f as W}from"./Input.styles-4c4ddd98.js";import{r as H}from"./removeButtonStyling-867d6ba4.js";import{b as me,a as fe,D as be}from"./DescriptionListDesc-164ce8e6.js";import{bs as ye,R as he,$ as ge}from"./libraryAdd-ba36db88.js";import{I as N}from"./Icon-169fc8ae.js";import{n as ve}from"./normalize-f756ee4b.js";import{V as Ce}from"./VisuallyHidden-5e7c9103.js";const{font:ke,colors:b,border:E,spacing:y,iconSizes:P,borderRadius:_e}=re,we={body:{odd:{backgroundColor:b.DdsColorNeutralsWhite},even:{backgroundColor:b.DdsColorNeutralsGray1},hover:{backgroundColor:b.DdsColorInteractiveLightest},selected:{backgroundColor:b.DdsColorInteractiveLightest},mode:{sum:{borderTop:`${E.BordersDdsBorderStyleLightStrokeWeight} solid ${b.DdsColorNeutralsGray4}`,borderBottom:`${E.BordersDdsBorderStyleLightStrokeWeight} solid ${b.DdsColorNeutralsGray4}`,backgroundColor:b.DdsColorNeutralsWhite}},withDividers:{borderBottom:`1px solid ${b.DdsColorNeutralsGray4}`}},head:{extraCompact:{backgroundColor:b.DdsColorNeutralsWhite,fontSize:ke.DdsFontBodySans01FontSize}}},Se={density:{normal:{padding:`${y.SizesDdsSpacingLocalX15} ${y.SizesDdsSpacingLocalX075}`},compact:{padding:`${y.SizesDdsSpacingLocalX075}`},extraCompact:{padding:`${y.SizesDdsSpacingLocalX025} ${y.SizesDdsSpacingLocalX05}`}},head:{backgroundColor:b.DdsColorPrimaryLightest},sort:{gap:y.SizesDdsSpacingLocalX05,icon:{marginInlineStart:y.SizesDdsSpacingLocalX05}},layout:{textAndIcon:{gap:y.SizesDdsSpacingLocalX075,marginRight:y.SizesDdsSpacingLocalX075}}},Te={height:P.DdsIconsizeMedium,width:P.DdsIconsizeMedium,borderRadius:_e.RadiiDdsBorderRadius1Radius},T={row:we,cell:Se,collapseButton:Te},{cell:$e,row:w}=T,xe=p.table`
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
`,S=n.forwardRef(({density:e="normal",children:l,...a},r)=>{const t={ref:r,density:e,...a};return o(xe,{...t,children:l})});S.displayName="Table";try{S.displayName="Table",S.__docgenInfo={description:"",displayName:"Table",props:{density:{defaultValue:{value:"normal"},description:"Spesifiserer hvor romslige cellene i tabellen skal være.",name:"density",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"normal"'},{value:'"compact"'},{value:'"extraCompact"'}]}},stickyHeader:{defaultValue:null,description:"Spesifiserer om cellene i `<Head>` skal bli sticky ved scrolling.",name:"stickyHeader",required:!1,type:{name:"boolean | undefined"}},withDividers:{defaultValue:null,description:"Legger skillelinjer mellom radene.",name:"withDividers",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const j=n.createContext({headerValues:[],definingColumnIndex:[0]}),Re=()=>n.useContext(j),Ve=p(S)`
  width: 100%;
  ${({withDividers:e})=>e&&d`
      tr[data-isopencollapsibleheader='true'] {
        border-bottom: none;
      }
    `}
`,R=n.forwardRef((e,l)=>{const{density:a="normal",children:r,isCollapsed:t,headerValues:i,definingColumnIndex:s=[0],...f}=e,u={ref:l,density:a,isCollapsed:t,...f};return o(j.Provider,{value:{isCollapsed:t,headerValues:i,definingColumnIndex:s},children:o(Ve,{...u,children:r})})});R.displayName="CollapsibleTable";try{R.displayName="CollapsibleTable",R.__docgenInfo={description:"",displayName:"CollapsibleTable",props:{isCollapsed:{defaultValue:null,description:"Om tabellen skal kollapse.",name:"isCollapsed",required:!1,type:{name:"boolean | undefined"}},headerValues:{defaultValue:null,description:"Innhold i headere (`content`) og deres `key`. `headerValues.content` må være den samme som faktisk innhold i `<Table.Cell type='head'>`.",name:"headerValues",required:!0,type:{name:"HeaderValues"}},definingColumnIndex:{defaultValue:{value:"[0]"},description:"Indeksen(e) til kolonnen(e) som skal synes når tabellen er kollapset. Rekkefølgen i array avgjør rekkefølgen i render.",name:"definingColumnIndex",required:!1,type:{name:"number[] | undefined"}},density:{defaultValue:null,description:"Spesifiserer hvor romslige cellene i tabellen skal være.",name:"density",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"normal"'},{value:'"compact"'},{value:'"extraCompact"'}]}},stickyHeader:{defaultValue:null,description:"Spesifiserer om cellene i `<Head>` skal bli sticky ved scrolling.",name:"stickyHeader",required:!1,type:{name:"boolean | undefined"}},withDividers:{defaultValue:null,description:"Legger skillelinjer mellom radene.",name:"withDividers",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const De=p.thead``,X=n.forwardRef(({children:e,...l},a)=>{const r={...l};return o(De,{ref:a,...r,children:e})});X.displayName="Table.Head";try{Table.Head.displayName="Table.Head",Table.Head.__docgenInfo={description:"",displayName:"Table.Head",props:{}}}catch{}const Ne=p.tbody``,O=n.forwardRef(({children:e,...l},a)=>{const r={...l};return o(Ne,{ref:a,...r,children:e})});O.displayName="Table.Body";try{Table.Body.displayName="Table.Body",Table.Body.__docgenInfo={description:"",displayName:"Table.Body",props:{}}}catch{}const Ie=p.tfoot``,A=n.forwardRef(({children:e,...l},a)=>{const r={...l};return o(Ie,{ref:a,...r,children:e})});A.displayName="Table.Foot";try{Table.Foot.displayName="Table.Foot",Table.Foot.__docgenInfo={description:"",displayName:"Table.Foot",props:{}}}catch{}const{row:C}=T,F=(e,l)=>d`
    ${e==="sum"&&d`
      font-weight: 600;
      border-top: ${C.body.mode.sum.borderTop};
      border-bottom: ${C.body.mode.sum.borderBottom};
      background-color: ${C.body.mode.sum.backgroundColor};
    `}
    ${l&&d`
      background-color: ${C.body.selected.backgroundColor};
    `}
  `,k=p.tr`
  @media (prefers-reduced-motion: no-preference) {
    transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
  }

  ${se(ue,!0)}

  ${({type:e})=>e==="head"&&d`
      font-weight: 600;
      text-align: left;
    `}
  ${({type:e,mode:l,selected:a,hoverable:r})=>e==="body"&&d`
      &:nth-of-type(even) {
        background-color: ${C.body.even.backgroundColor};
        ${F(l,a)}
      }

      &:nth-of-type(odd) {
        background-color: ${C.body.odd.backgroundColor};
        ${F(l,a)}
      }

      ${r&&d`
        &:hover {
          background-color: ${C.body.hover.backgroundColor};
        }
      `}
      &:focus-visible, &.focus-visible {
        ${ce}
      }
    `}
`;try{k.displayName="StyledRow",k.__docgenInfo={description:"",displayName:"StyledRow",props:{type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"body"'},{value:'"head"'}]}},mode:{defaultValue:null,description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"normal"'},{value:'"sum"'}]}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"boolean | undefined"}},hoverable:{defaultValue:null,description:"",name:"hoverable",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const M=n.forwardRef(({type:e="body",mode:l="normal",children:a,...r},t)=>{const i={type:e,mode:l,...r};return o(k,{ref:t,...i,children:a})});M.displayName="Table.Row";try{Table.Row.displayName="Table.Row",Table.Row.__docgenInfo={description:"",displayName:"Table.Row",props:{type:{defaultValue:{value:"body"},description:"Spesifiserer om raden skal brukes i `<head>` eller `<body>`-seksjonen.",name:"type",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"body"'},{value:'"head"'}]}},mode:{defaultValue:{value:"normal"},description:"Custom modus for rader som har ytterligere semantisk betydning (f.eks. summeringsrad), definerer kun styling. Ved bruk av sum må `<Cell>` med tall i høyrestilles vha layout prop.",name:"mode",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"normal"'},{value:'"sum"'}]}},selected:{defaultValue:null,description:"Spesifiserer om raden har blitt valgt/markert.",name:"selected",required:!1,type:{name:"boolean | undefined"}},hoverable:{defaultValue:null,description:"Spesifiserer om raden skal ha hover styling. Brukes hovedsakelig på klikkbare rader.",name:"hoverable",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const{cell:G}=T,Be=e=>{switch(e){case"center":return d`
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
`,ze=e=>{switch(e){case"head":return"th";default:case"data":return"td"}},V=n.forwardRef(({children:e,type:l="data",layout:a="left",collapsibleProps:r,...t},i)=>{const s=ze(l),{isCollapsibleChild:f}=r||{},u={as:s,type:l,...t};return f?o(me,{children:e}):o(Le,{ref:i,...u,children:o(qe,{...{layout:a},children:e})})});V.displayName="Table.Cell";try{Table.Cell.displayName="Table.Cell",Table.Cell.__docgenInfo={description:"",displayName:"Table.Cell",props:{type:{defaultValue:{value:"data"},description:"Type celle. Returnerer enten `<td>` eller `<th>`.",name:"type",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"data"'},{value:'"head"'}]}},layout:{defaultValue:{value:"left"},description:"Layout av innholdet i cellen. 'tekst and icon' legger `gap` mellom barna og andre barnet i cellen.",name:"layout",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"left"'},{value:'"right"'},{value:'"center"'},{value:'"text and icon"'}]}},collapsibleProps:{defaultValue:null,description:"Props ved bruk av `<CollapsibleRow>`. **OBS!** settes automatisk av forelder.",name:"collapsibleProps",required:!1,type:{name:"CollapsibleProps | undefined"}}}}}catch{}const{collapseButton:I}=T,Ee=p.button`
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
    ${W}
  }
`,Pe=p(V)`
  & > div {
    display: block;
  }
`,U=n.forwardRef(({type:e="body",mode:l="normal",children:a,...r},t)=>{const i={type:e,mode:l,...r},{isCollapsed:s,headerValues:f,definingColumnIndex:u}=Re(),[c,B]=n.useState(!0);n.useEffect(()=>{!s&&B(!0)},[s]);const L=f.filter((g,m)=>u.indexOf(m)===-1),$=n.Children.toArray(a),Q=$.filter((g,m)=>u.indexOf(m)===-1),Y="collapsibleRow",q=[],_=s&&L.length>0?Q.map(function(g,m){const ae=te(Y,m.toString());return q.push(ae),v(n.Fragment,{children:[o(fe,{children:L[m].content}),n.isValidElement(g)&&n.cloneElement(g,{collapsibleProps:{isCollapsibleChild:!0}})]},`DL-${m}`)}):null,Z=_&&_.length>0?o(k,{type:"body",children:o(Pe,{colSpan:u.length+1,children:o(be,{children:_})})}):null,z=$.slice().filter((g,m)=>u.indexOf(m)>-1).sort((g,m)=>u.indexOf($.indexOf(g))-u.indexOf($.indexOf(m))),ee=()=>e!=="head"||!s?null:o(k,{ref:t,...i,children:v(D,{children:[z,v(h.Cell,{type:"head",layout:"center",children:["Utvid",o(Ce,{as:"span",children:"raden"})]})]})}),le=de(q),oe=()=>e!=="body"||!s?null:v(k,{ref:t,...i,"data-isopencollapsibleheader":!c&&!0,children:[z,o(h.Cell,{children:o(Ee,{onClick:()=>B(!c),"aria-expanded":!c,"aria-controls":le,children:o(ie,{isUp:!c,height:"7.5px",width:"12px"})})})]});return s&&_&&_.length>0?v(D,{children:[ee(),e==="body"&&v(D,{children:[oe(),c?null:Z]})]}):o(k,{ref:t,...i,children:a})});U.displayName="CollapsibleTable.Row";try{CollapsibleTable.Row.displayName="CollapsibleTable.Row",CollapsibleTable.Row.__docgenInfo={description:"",displayName:"CollapsibleTable.Row",props:{type:{defaultValue:{value:"body"},description:"Spesifiserer om raden skal brukes i `<head>` eller `<body>`-seksjonen.",name:"type",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"body"'},{value:'"head"'}]}},mode:{defaultValue:{value:"normal"},description:"Custom modus for rader som har ytterligere semantisk betydning (f.eks. summeringsrad), definerer kun styling. Ved bruk av sum må `<Cell>` med tall i høyrestilles vha layout prop.",name:"mode",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"normal"'},{value:'"sum"'}]}},selected:{defaultValue:null,description:"Spesifiserer om raden har blitt valgt/markert.",name:"selected",required:!1,type:{name:"boolean | undefined"}},hoverable:{defaultValue:null,description:"Spesifiserer om raden skal ha hover styling. Brukes hovedsakelig på klikkbare rader.",name:"hoverable",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const{cell:Fe}=T,We=p.button`
  ${ve}
  user-select: text;
  ${H}
  display: flex;
  align-items: center;
  gap: ${Fe.sort.gap};
  &:focus-visible {
    ${W}
  }
`,He=(e,l)=>!e||!l?o(N,{icon:ye,iconSize:"inherit"}):l==="ascending"?o(N,{icon:he,iconSize:"inherit"}):o(N,{icon:ge,iconSize:"inherit"}),J=n.forwardRef(({isSorted:e,sortOrder:l,onClick:a,children:r,...t},i)=>o(V,{ref:i,type:"head","aria-sort":e&&l?l:void 0,...t,children:v(We,{onClick:a,"aria-description":"Aktiver for å endre sorteringsrekkefølge",children:[r," ",He(e,l)]})}));J.displayName="Table.SortCell";try{Table.SortCell.displayName="Table.SortCell",Table.SortCell.__docgenInfo={description:"",displayName:"Table.SortCell",props:{isSorted:{defaultValue:null,description:"Spesifiserer om kolonnen er sortert.",name:"isSorted",required:!1,type:{name:"boolean | undefined"}},sortOrder:{defaultValue:null,description:"Sorteringsrekkefølge i kolonnen. Avgjør hvilket ikon skal vises i cellen.",name:"sortOrder",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"ascending"'},{value:'"descending"'}]}},onClick:{defaultValue:null,description:"onClick-funksjon for sortering og annen logikk.",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void) & MouseEventHandler<HTMLTableCellElement>"}},layout:{defaultValue:null,description:"Layout av innholdet i cellen. 'tekst and icon' legger `gap` mellom barna og andre barnet i cellen.",name:"layout",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"left"'},{value:'"right"'},{value:'"center"'},{value:'"text and icon"'}]}},collapsibleProps:{defaultValue:null,description:"Props ved bruk av `<CollapsibleRow>`. **OBS!** settes automatisk av forelder.",name:"collapsibleProps",required:!1,type:{name:"CollapsibleProps | undefined"}}}}}catch{}const je=p.div`
  ${({overflowX:e})=>e&&d`
      overflow-x: auto;
    `}
  ${x.webkit}
  ${x.firefox}
`,K=({children:e,...l})=>{const[a,r]=n.useState(!1),[t,i]=n.useState(window.innerWidth);function s(c){return c.offsetWidth<c.scrollWidth}const f=n.useRef(null);n.useEffect(()=>{if(f&&f.current&&s(f.current)){r(!0);return}r(!1)},[t]),n.useEffect(()=>{function c(){i(window.innerWidth)}return window.addEventListener("resize",c),()=>window.removeEventListener("resize",c)});const u={ref:f,overflowX:a,...l};return o(je,{...u,children:e})};K.displayName="Table.Wrapper";try{Table.Wrapper.displayName="Table.Wrapper",Table.Wrapper.__docgenInfo={description:"",displayName:"Table.Wrapper",props:{}}}catch{}const h=S;h.Wrapper=K;h.Head=X;h.Body=O;h.Cell=V;h.SortCell=J;h.Row=M;h.Foot=A;const Xe=R;Xe.Row=U;export{Xe as C,h as T};
//# sourceMappingURL=index-6186e4cf.js.map
