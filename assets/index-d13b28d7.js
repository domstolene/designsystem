import{d as ne,s as p,A as a,j as t,a as C,F as T}from"./focus-visible-35158c22.js";import{r as l}from"./index-d47b1f5a.js";import{Z as le,L as O,E as se,R as ae,v as de,C as ie}from"./dds-core-29d22035.js";import{s as R}from"./scrollbarStyling-1bd29018.js";import{O as ce,E as ue}from"./dds-typography-e761338c.js";import{H as pe,R as be,V}from"./dds-form-b2eacd8d.js";import{D as he,b as fe,a as ge}from"./DescriptionListDesc-aeb60806.js";import{z,D as me,m as ye,Q as Ce}from"./dds-icons-7a922c3a.js";import{V as $e}from"./VisuallyHidden-2839ca90.js";const{font:we,colors:f,border:E,spacing:g,iconSizes:X,borderRadius:Se}=ne,xe={body:{odd:{backgroundColor:f.DdsColorNeutralsWhite},even:{backgroundColor:f.DdsColorNeutralsGray1},hover:{backgroundColor:f.DdsColorInteractiveLightest},selected:{backgroundColor:f.DdsColorInteractiveLightest},mode:{sum:{borderTop:`${E.BordersDdsBorderStyleLightStrokeWeight} solid ${f.DdsColorNeutralsGray4}`,borderBottom:`${E.BordersDdsBorderStyleLightStrokeWeight} solid ${f.DdsColorNeutralsGray4}`,backgroundColor:f.DdsColorNeutralsWhite}},withDividers:{borderBottom:`1px solid ${f.DdsColorNeutralsGray4}`}},head:{extraCompact:{backgroundColor:f.DdsColorNeutralsWhite,fontSize:we.DdsFontBodySans01FontSize}}},ke={density:{normal:{padding:`${g.SizesDdsSpacingLocalX15} ${g.SizesDdsSpacingLocalX075}`},compact:{padding:`${g.SizesDdsSpacingLocalX075}`},extraCompact:{padding:`${g.SizesDdsSpacingLocalX025} ${g.SizesDdsSpacingLocalX05}`}},head:{backgroundColor:f.DdsColorPrimaryLightest},sort:{gap:g.SizesDdsSpacingLocalX05,icon:{marginInlineStart:g.SizesDdsSpacingLocalX05}},layout:{textAndIcon:{gap:g.SizesDdsSpacingLocalX075,marginRight:g.SizesDdsSpacingLocalX075}}},De={height:X.DdsIconsizeMedium,width:X.DdsIconsizeMedium,borderRadius:Se.RadiiDdsBorderRadius1Radius},k={row:xe,cell:ke,collapseButton:De},{cell:Re,row:S}=k,ve=p.table`
  border-spacing: 0;
  border-collapse: collapse;
  *::selection {
    ${le}
  }
  ${R.webkit}
  ${R.firefox}
  ${({density:e})=>a`
      td,
      th {
        padding: ${Re.density[e].padding};
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
`,B=l.forwardRef(({density:e="normal",children:o,...r},n)=>{const s={ref:n,density:e,...r};return t(ve,{...s,children:o})});B.displayName="Table";const j=l.createContext({headerValues:[],definingColumnIndex:[0]}),Te=()=>l.useContext(j),ze=p(B)`
  width: 100%;
  ${({withDividers:e})=>e&&a`
      tr[data-isopencollapsibleheader='true'] {
        border-bottom: none;
      }
    `}
`,A=l.forwardRef((e,o)=>{const{density:r="normal",children:n,isCollapsed:s,headerValues:d,definingColumnIndex:i=[0],...h}=e,c={ref:o,density:r,isCollapsed:s,...h};return t(j.Provider,{value:{isCollapsed:s,headerValues:d,definingColumnIndex:i},children:t(ze,{...c,children:n})})});A.displayName="CollapsibleTable";const Le=p.thead``,H=l.forwardRef(({children:e,...o},r)=>{const n={...o};return t(Le,{ref:r,...n,children:e})});H.displayName="Table.Head";const Be=p.tbody``,G=l.forwardRef(({children:e,...o},r)=>{const n={...o};return t(Be,{ref:r,...n,children:e})});G.displayName="Table.Body";const Ne=p.tfoot``,M=l.forwardRef(({children:e,...o},r)=>{const n={...o};return t(Ne,{ref:r,...n,children:e})});M.displayName="Table.Foot";const{row:$}=k,F=(e,o)=>a`
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
        ${F(o,r)}
      }

      &:nth-of-type(odd) {
        background-color: ${$.body.odd.backgroundColor};
        ${F(o,r)}
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
`,U=l.forwardRef(({type:e="body",mode:o="normal",children:r,...n},s)=>{const d={type:e,mode:o,...n};return t(x,{ref:s,...d,children:r})});U.displayName="Table.Row";const{cell:J}=k,We=e=>{switch(e){case"center":return a`
        justify-content: center;
      `;case"right":return a`
        justify-content: flex-end;
      `;case"text and icon":return a`
        gap: ${J.layout.textAndIcon.gap};
      `;default:case"left":return}},Pe=p.td`
  ${({type:e})=>e==="head"&&a`
      background-color: ${J.head.backgroundColor};
    `}
`,Ie=p.div`
  display: flex;
  align-items: center;
  ${({layout:e})=>We(e)}
`,Ee=e=>{switch(e){case"head":return"th";default:case"data":return"td"}},v=l.forwardRef(({children:e,type:o="data",layout:r="left",collapsibleProps:n,...s},d)=>{const i=Ee(o),{isCollapsibleChild:h}=n||{},c={as:i,type:o,...s};return h?t(he,{children:e}):t(Pe,{ref:d,...c,children:t(Ie,{...{layout:r},children:e})})});v.displayName="Table.Cell";const{collapseButton:L}=k,Xe=p.button`
  ${O}
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
    ${V}
  }
`,Fe=p(v)`
  & > div {
    display: block;
  }
`,Q=l.forwardRef(({type:e="body",mode:o="normal",children:r,...n},s)=>{const d={type:e,mode:o,...n},{isCollapsed:i,headerValues:h,definingColumnIndex:c}=Te(),[u,N]=l.useState(!0);l.useEffect(()=>{!i&&N(!0)},[i]);const W=h.filter((y,b)=>c.indexOf(b)===-1),D=l.Children.toArray(r),K=D.filter((y,b)=>c.indexOf(b)===-1),Y="collapsibleRow",P=[],w=i&&W.length>0?K.map(function(y,b){const re=se(Y,b.toString());return P.push(re),C(l.Fragment,{children:[t(fe,{children:W[b].content}),l.isValidElement(y)&&l.cloneElement(y,{collapsibleProps:{isCollapsibleChild:!0}})]},`DL-${b}`)}):null,_=w&&w.length>0?t(x,{type:"body",children:t(Fe,{colSpan:c.length+1,children:t(ge,{children:w})})}):null,I=D.slice().filter((y,b)=>c.indexOf(b)>-1).sort((y,b)=>c.indexOf(D.indexOf(y))-c.indexOf(D.indexOf(b))),ee=()=>e!=="head"||!i?null:t(x,{ref:s,...d,children:C(T,{children:[I,C(m.Cell,{type:"head",layout:"center",children:["Utvid",t($e,{as:"span",children:"raden"})]})]})}),oe=ae(P),te=()=>e!=="body"||!i?null:C(x,{ref:s,...d,"data-isopencollapsibleheader":!u&&!0,children:[I,t(m.Cell,{children:t(Xe,{onClick:()=>N(!u),"aria-expanded":!u,"aria-controls":oe,children:t(de,{isUp:!u,height:"7.5px",width:"12px"})})})]});return i&&w&&w.length>0?C(T,{children:[ee(),e==="body"&&C(T,{children:[te(),u?null:_]})]}):t(x,{ref:s,...d,children:r})});Q.displayName="CollapsibleTable.Row";const{cell:Oe}=k,Ve=p.button`
  ${ie}
  user-select: text;
  ${O}
  display: flex;
  align-items: center;
  gap: ${Oe.sort.gap};
  &:focus-visible {
    ${V}
  }
`,je=(e,o)=>!e||!o?t(z,{icon:me,iconSize:"inherit"}):o==="ascending"?t(z,{icon:ye,iconSize:"inherit"}):t(z,{icon:Ce,iconSize:"inherit"}),Z=l.forwardRef(({isSorted:e,sortOrder:o,onClick:r,children:n,...s},d)=>t(v,{ref:d,type:"head","aria-sort":e&&o?o:void 0,...s,children:C(Ve,{onClick:r,"aria-description":"Aktiver for å endre sorteringsrekkefølge",children:[n," ",je(e,o)]})}));Z.displayName="Table.SortCell";const Ae=p.div`
  ${({overflowX:e})=>e&&a`
      overflow-x: auto;
    `}
  ${R.webkit}
  ${R.firefox}
`,q=({children:e,...o})=>{const[r,n]=l.useState(!1),[s,d]=l.useState(window.innerWidth);function i(u){return u.offsetWidth<u.scrollWidth}const h=l.useRef(null);l.useEffect(()=>{if(h&&h.current&&i(h.current)){n(!0);return}n(!1)},[s]),l.useEffect(()=>{function u(){d(window.innerWidth)}return window.addEventListener("resize",u),()=>window.removeEventListener("resize",u)});const c={ref:h,overflowX:r,...o};return t(Ae,{...c,children:e})};q.displayName="Table.Wrapper";const m=B;m.Wrapper=q;m.Head=H;m.Body=G;m.Cell=v;m.SortCell=Z;m.Row=U;m.Foot=M;const He=A;He.Row=Q;export{He as C,m as T};
//# sourceMappingURL=index-d13b28d7.js.map
