import{d as ne,s as p,A as a,a as t,j as C,F as T}from"./focus-visible-8467fd8b.js";import{r as l}from"./index-d47b1f5a.js";import{Q as le,w as F,E as se,N as ae,C as de,b as ie}from"./dds-core-b89b291f.js";import{s as v}from"./scrollbarStyling-b67d8d39.js";import{O as ce,A as ue}from"./dds-typography-4e6445f7.js";import{A as pe,V as be,_ as O}from"./dds-form-9dbc5b3d.js";import{D as he,b as fe,a as ge}from"./DescriptionListDesc-e5aa5366.js";import{i as z,D as ye,n as me,Q as Ce}from"./dds-icons-57b6044b.js";import{V as $e}from"./VisuallyHidden-0fcd4355.js";const{font:we,colors:f,border:X,spacing:g,iconSizes:A,borderRadius:Se}=ne,xe={body:{odd:{backgroundColor:f.DdsColorNeutralsWhite},even:{backgroundColor:f.DdsColorNeutralsGray1},hover:{backgroundColor:f.DdsColorInteractiveLightest},selected:{backgroundColor:f.DdsColorInteractiveLightest},mode:{sum:{borderTop:`${X.BordersDdsBorderStyleLightStrokeWeight} solid ${f.DdsColorNeutralsGray4}`,borderBottom:`${X.BordersDdsBorderStyleLightStrokeWeight} solid ${f.DdsColorNeutralsGray4}`,backgroundColor:f.DdsColorNeutralsWhite}},withDividers:{borderBottom:`1px solid ${f.DdsColorNeutralsGray4}`}},head:{extraCompact:{backgroundColor:f.DdsColorNeutralsWhite,fontSize:we.DdsFontBodySans01FontSize}}},ke={density:{normal:{padding:`${g.SizesDdsSpacingLocalX15} ${g.SizesDdsSpacingLocalX075}`},compact:{padding:`${g.SizesDdsSpacingLocalX075}`},extraCompact:{padding:`${g.SizesDdsSpacingLocalX025} ${g.SizesDdsSpacingLocalX05}`}},head:{backgroundColor:f.DdsColorPrimaryLightest},sort:{gap:g.SizesDdsSpacingLocalX05,icon:{marginInlineStart:g.SizesDdsSpacingLocalX05}},layout:{textAndIcon:{gap:g.SizesDdsSpacingLocalX075,marginRight:g.SizesDdsSpacingLocalX075}}},De={height:A.DdsIconsizeMedium,width:A.DdsIconsizeMedium,borderRadius:Se.RadiiDdsBorderRadius1Radius},k={row:xe,cell:ke,collapseButton:De},{cell:ve,row:S}=k,Re=p.table`
  border-spacing: 0;
  border-collapse: collapse;
  *::selection {
    ${le}
  }
  ${v.webkit}
  ${v.firefox}
  ${({density:e})=>a`
      td,
      th {
        padding: ${ve.density[e].padding};
      }
    `}
  ${({density:e})=>e==="extraCompact"&&a`
      th {
        background-color: ${S.head.extraCompact.backgroundColor};
        font-size: ${S.head.extraCompact.fontSize};
      }
      tr[type='body'] {
        &:nth-of-type(even) {
          background-color: ${S.body.odd.backgroundColor};
        }
        &:nth-of-type(odd) {
          background-color: ${S.body.even.backgroundColor};
        }
      }
    `}
  ${({stickyHeader:e})=>e&&a`
      tr[type='head'] {
        th[type='head'] {
          position: sticky;
          top: 0;
          z-index: 50;
        }
      }
    `}
  ${({withDividers:e})=>e&&a`
      tr[type='body'] {
        border-bottom: ${S.body.withDividers.borderBottom};
      }
    `}
`,B=l.forwardRef(({density:e="normal",children:o,...r},n)=>{const s={ref:n,density:e,...r};return t(Re,{...s,children:o})});B.displayName="Table";const V=l.createContext({headerValues:[],definingColumnIndex:[0]}),Te=()=>l.useContext(V),ze=p(B)`
  width: 100%;
  ${({withDividers:e})=>e&&a`
      tr[data-isopencollapsibleheader='true'] {
        border-bottom: none;
      }
    `}
`,j=l.forwardRef((e,o)=>{const{density:r="normal",children:n,isCollapsed:s,headerValues:d,definingColumnIndex:i=[0],...h}=e,c={ref:o,density:r,isCollapsed:s,...h};return t(V.Provider,{value:{isCollapsed:s,headerValues:d,definingColumnIndex:i},children:t(ze,{...c,children:n})})});j.displayName="CollapsibleTable";const Le=p.thead``,H=l.forwardRef(({children:e,...o},r)=>{const n={...o};return t(Le,{ref:r,...n,children:e})});H.displayName="Table.Head";const Be=p.tbody``,G=l.forwardRef(({children:e,...o},r)=>{const n={...o};return t(Be,{ref:r,...n,children:e})});G.displayName="Table.Body";const Ne=p.tfoot``,Q=l.forwardRef(({children:e,...o},r)=>{const n={...o};return t(Ne,{ref:r,...n,children:e})});Q.displayName="Table.Foot";const{row:$}=k,E=(e,o)=>a`
    ${e==="sum"&&a`
      font-weight: 600;
      border-top: ${$.body.mode.sum.borderTop};
      border-bottom: ${$.body.mode.sum.borderBottom};
      background-color: ${$.body.mode.sum.backgroundColor};
    `}
    ${o&&a`
      background-color: ${$.body.selected.backgroundColor};
    `}
  `,x=p.tr`
  @media (prefers-reduced-motion: no-preference) {
    transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
  }

  ${ce(ue,!0)}

  ${({type:e})=>e==="head"&&a`
      font-weight: 600;
      text-align: left;
    `}
  ${({type:e,mode:o,selected:r,hoverable:n})=>e==="body"&&a`
      &:nth-of-type(even) {
        background-color: ${$.body.even.backgroundColor};
        ${E(o,r)}
      }

      &:nth-of-type(odd) {
        background-color: ${$.body.odd.backgroundColor};
        ${E(o,r)}
      }

      ${n&&a`
        &:hover {
          background-color: ${$.body.hover.backgroundColor};
        }
      `}
      &:focus-visible, &.focus-visible {
        ${pe}
      }
    `}
`,M=l.forwardRef(({type:e="body",mode:o="normal",children:r,...n},s)=>{const d={type:e,mode:o,...n};return t(x,{ref:s,...d,children:r})});M.displayName="Table.Row";const{cell:U}=k,We=e=>{switch(e){case"center":return a`
        justify-content: center;
      `;case"right":return a`
        justify-content: flex-end;
      `;case"text and icon":return a`
        gap: ${U.layout.textAndIcon.gap};
      `;default:case"left":return}},Pe=p.td`
  ${({type:e})=>e==="head"&&a`
      background-color: ${U.head.backgroundColor};
    `}
`,Ie=p.div`
  display: flex;
  align-items: center;
  ${({layout:e})=>We(e)}
`,Xe=e=>{switch(e){case"head":return"th";default:case"data":return"td"}},R=l.forwardRef(({children:e,type:o="data",layout:r="left",collapsibleProps:n,...s},d)=>{const i=Xe(o),{isCollapsibleChild:h}=n||{},c={as:i,type:o,...s};return h?t(he,{children:e}):t(Pe,{ref:d,...c,children:t(Ie,{...{layout:r},children:e})})});R.displayName="Table.Cell";const{collapseButton:L}=k,Ae=p.button`
  ${F}
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${be};
  border-radius: ${L.borderRadius};
  height: ${L.height};
  width: ${L.width};
  &:focus-visible {
    ${O}
  }
`,Ee=p(R)`
  & > div {
    display: block;
  }
`,J=l.forwardRef(({type:e="body",mode:o="normal",children:r,...n},s)=>{const d={type:e,mode:o,...n},{isCollapsed:i,headerValues:h,definingColumnIndex:c}=Te(),[u,N]=l.useState(!0);l.useEffect(()=>{!i&&N(!0)},[i]);const W=h.filter((m,b)=>c.indexOf(b)===-1),D=l.Children.toArray(r),K=D.filter((m,b)=>c.indexOf(b)===-1),Y="collapsibleRow",P=[],w=i&&W.length>0?K.map(function(m,b){const re=se(Y,b.toString());return P.push(re),C(l.Fragment,{children:[t(fe,{children:W[b].content}),l.isValidElement(m)&&l.cloneElement(m,{collapsibleProps:{isCollapsibleChild:!0}})]},`DL-${b}`)}):null,Z=w&&w.length>0?t(x,{type:"body",children:t(Ee,{colSpan:c.length+1,children:t(ge,{children:w})})}):null,I=D.slice().filter((m,b)=>c.indexOf(b)>-1).sort((m,b)=>c.indexOf(D.indexOf(m))-c.indexOf(D.indexOf(b))),ee=()=>e!=="head"||!i?null:t(x,{ref:s,...d,children:C(T,{children:[I,C(y.Cell,{type:"head",layout:"center",children:["Utvid",t($e,{as:"span",children:"raden"})]})]})}),oe=ae(P),te=()=>e!=="body"||!i?null:C(x,{ref:s,...d,"data-isopencollapsibleheader":!u&&!0,children:[I,t(y.Cell,{children:t(Ae,{onClick:()=>N(!u),"aria-expanded":!u,"aria-controls":oe,children:t(de,{isUp:!u,height:"7.5px",width:"12px"})})})]});return i&&w&&w.length>0?C(T,{children:[ee(),e==="body"&&C(T,{children:[te(),u?null:Z]})]}):t(x,{ref:s,...d,children:r})});J.displayName="CollapsibleTable.Row";const{cell:Fe}=k,Oe=p.button`
  ${ie}
  user-select: text;
  ${F}
  display: flex;
  align-items: center;
  gap: ${Fe.sort.gap};
  &:focus-visible {
    ${O}
  }
`,Ve=(e,o)=>!e||!o?t(z,{icon:ye,iconSize:"inherit"}):o==="ascending"?t(z,{icon:me,iconSize:"inherit"}):t(z,{icon:Ce,iconSize:"inherit"}),_=l.forwardRef(({isSorted:e,sortOrder:o,onClick:r,children:n,...s},d)=>t(R,{ref:d,type:"head","aria-sort":e&&o?o:void 0,...s,children:C(Oe,{onClick:r,"aria-description":"Aktiver for å endre sorteringsrekkefølge",children:[n," ",Ve(e,o)]})}));_.displayName="Table.SortCell";const je=p.div`
  ${({overflowX:e})=>e&&a`
      overflow-x: auto;
    `}
  ${v.webkit}
  ${v.firefox}
`,q=({children:e,...o})=>{const[r,n]=l.useState(!1),[s,d]=l.useState(window.innerWidth);function i(u){return u.offsetWidth<u.scrollWidth}const h=l.useRef(null);l.useEffect(()=>{if(h&&h.current&&i(h.current)){n(!0);return}n(!1)},[s]),l.useEffect(()=>{function u(){d(window.innerWidth)}return window.addEventListener("resize",u),()=>window.removeEventListener("resize",u)});const c={ref:h,overflowX:r,...o};return t(je,{...c,children:e})};q.displayName="Table.Wrapper";const y=B;y.Wrapper=q;y.Head=H;y.Body=G;y.Cell=R;y.SortCell=_;y.Row=M;y.Foot=Q;const He=j;He.Row=J;export{He as C,y as T};
//# sourceMappingURL=index-7dba5727.js.map
