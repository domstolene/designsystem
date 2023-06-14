import{d as no,s as u,C as a,j as t,b as C,F as T}from"./focus-visible-17f12d09.js";import{r as s}from"./index-c6dae603.js";import{s as so}from"./selection-dced972e.js";import{s as D}from"./scrollbarStyling-27f949d7.js";import{d as lo,e as ao}from"./Typography.utils-3c68477b.js";import{e as io,b as co,c as E}from"./focusVisible-bd00be70.js";import{b as po,a as uo,D as bo}from"./DescriptionListDesc-7709b81f.js";import{U as fo}from"./unfoldMore-3c6d2d1a.js";import{C as ho}from"./chevronUp-e61fcd7c.js";import{n as mo}from"./normalize-f756ee4b.js";import{r as A}from"./removeButtonStyling-867d6ba4.js";import{I as z}from"./Icon-a968456f.js";import{C as go}from"./chevronDown-dd1c1a45.js";import{d as yo,s as Co}from"./idGenerator-c29473b2.js";import{V as $o}from"./VisuallyHidden-68635a7d.js";import{A as wo}from"./AnimatedChevronUpDown-bc7745fb.js";const{font:So,colors:h,border:X,spacing:m,iconSizes:V,borderRadius:xo}=no,ko={body:{odd:{backgroundColor:h.DdsColorNeutralsWhite},even:{backgroundColor:h.DdsColorNeutralsGray1},hover:{backgroundColor:h.DdsColorInteractiveLightest},selected:{backgroundColor:h.DdsColorInteractiveLightest},mode:{sum:{borderTop:`${X.BordersDdsBorderStyleLightStrokeWeight} solid ${h.DdsColorNeutralsGray4}`,borderBottom:`${X.BordersDdsBorderStyleLightStrokeWeight} solid ${h.DdsColorNeutralsGray4}`,backgroundColor:h.DdsColorNeutralsWhite}},withDividers:{borderBottom:`1px solid ${h.DdsColorNeutralsGray4}`}},head:{extraCompact:{backgroundColor:h.DdsColorNeutralsWhite,fontSize:So.DdsFontBodySans01FontSize}}},vo={density:{normal:{padding:`${m.SizesDdsSpacingLocalX15} ${m.SizesDdsSpacingLocalX075}`},compact:{padding:`${m.SizesDdsSpacingLocalX075}`},extraCompact:{padding:`${m.SizesDdsSpacingLocalX025} ${m.SizesDdsSpacingLocalX05}`}},head:{backgroundColor:h.DdsColorPrimaryLightest},sort:{gap:m.SizesDdsSpacingLocalX05,icon:{marginInlineStart:m.SizesDdsSpacingLocalX05}},layout:{textAndIcon:{gap:m.SizesDdsSpacingLocalX075,marginRight:m.SizesDdsSpacingLocalX075}}},Do={height:V.DdsIconsizeMedium,width:V.DdsIconsizeMedium,borderRadius:xo.RadiiDdsBorderRadius1Radius},k={row:ko,cell:vo,collapseButton:Do},{cell:Ro,row:S}=k,To=u.table`
  border-spacing: 0;
  border-collapse: collapse;
  *::selection {
    ${so}
  }
  ${D.webkit}
  ${D.firefox}
  ${({density:o})=>a`
      td,
      th {
        padding: ${Ro.density[o].padding};
      }
    `}
  ${({density:o})=>o==="extraCompact"&&a`
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
  ${({stickyHeader:o})=>o&&a`
      tr[type='head'] {
        th[type='head'] {
          position: sticky;
          top: 0;
          z-index: 50;
        }
      }
    `}
  ${({withDividers:o})=>o&&a`
      tr[type='body'] {
        border-bottom: ${S.body.withDividers.borderBottom};
      }
    `}
`,B=s.forwardRef(({density:o="normal",children:e,...r},n)=>{const l={ref:n,density:o,...r};return t(To,{...l,children:e})});B.displayName="Table";const j=s.createContext({headerValues:[],definingColumnIndex:[0]}),zo=()=>s.useContext(j),Lo=u(B)`
  width: 100%;
  ${({withDividers:o})=>o&&a`
      tr[data-isopencollapsibleheader='true'] {
        border-bottom: none;
      }
    `}
`,G=s.forwardRef((o,e)=>{const{density:r="normal",children:n,isCollapsed:l,headerValues:i,definingColumnIndex:d=[0],...f}=o,c={ref:e,density:r,isCollapsed:l,...f};return t(j.Provider,{value:{isCollapsed:l,headerValues:i,definingColumnIndex:d},children:t(Lo,{...c,children:n})})});G.displayName="CollapsibleTable";const Bo=u.thead``,H=s.forwardRef(({children:o,...e},r)=>{const n={...e};return t(Bo,{ref:r,...n,children:o})});H.displayName="Table.Head";const Io=u.tbody``,O=s.forwardRef(({children:o,...e},r)=>{const n={...e};return t(Io,{ref:r,...n,children:o})});O.displayName="Table.Body";const No=u.tfoot``,U=s.forwardRef(({children:o,...e},r)=>{const n={...e};return t(No,{ref:r,...n,children:o})});U.displayName="Table.Foot";const{row:$}=k,F=(o,e)=>a`
    ${o==="sum"&&a`
      font-weight: 600;
      border-top: ${$.body.mode.sum.borderTop};
      border-bottom: ${$.body.mode.sum.borderBottom};
      background-color: ${$.body.mode.sum.backgroundColor};
    `}
    ${e&&a`
      background-color: ${$.body.selected.backgroundColor};
    `}
  `,x=u.tr`
  @media (prefers-reduced-motion: no-preference) {
    transition: background-color 0.2s, border-color 0.2s, box-shadow 0.2s;
  }

  ${lo(ao,!0)}

  ${({type:o})=>o==="head"&&a`
      font-weight: 600;
      text-align: left;
    `}
  ${({type:o,mode:e,selected:r,hoverable:n})=>o==="body"&&a`
      &:nth-of-type(even) {
        background-color: ${$.body.even.backgroundColor};
        ${F(e,r)}
      }

      &:nth-of-type(odd) {
        background-color: ${$.body.odd.backgroundColor};
        ${F(e,r)}
      }

      ${n&&a`
        &:hover {
          background-color: ${$.body.hover.backgroundColor};
        }
      `}
      &:focus-visible, &.focus-visible {
        ${io}
      }
    `}
`,M=s.forwardRef(({type:o="body",mode:e="normal",children:r,...n},l)=>{const i={type:o,mode:e,...n};return t(x,{ref:l,...i,children:r})});M.displayName="Table.Row";const{cell:q}=k,Wo=o=>{switch(o){case"center":return a`
        justify-content: center;
      `;case"right":return a`
        justify-content: flex-end;
      `;case"text and icon":return a`
        gap: ${q.layout.textAndIcon.gap};
      `;default:case"left":return}},Po=u.td`
  ${({type:o})=>o==="head"&&a`
      background-color: ${q.head.backgroundColor};
    `}
`,Xo=u.div`
  display: flex;
  align-items: center;
  ${({layout:o})=>Wo(o)}
`,Vo=o=>{switch(o){case"head":return"th";default:case"data":return"td"}},R=s.forwardRef(({children:o,type:e="data",layout:r="left",collapsibleProps:n,...l},i)=>{const d=Vo(e),{isCollapsibleChild:f}=n||{},c={as:d,type:e,...l};return f?t(po,{children:o}):t(Po,{ref:i,...c,children:t(Xo,{...{layout:r},children:o})})});R.displayName="Table.Cell";const{collapseButton:L}=k,Fo=u.button`
  ${A}
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${co};
  border-radius: ${L.borderRadius};
  height: ${L.height};
  width: ${L.width};
  &:focus-visible {
    ${E}
  }
`,Eo=u(R)`
  & > div {
    display: block;
  }
`,J=s.forwardRef(({type:o="body",mode:e="normal",children:r,...n},l)=>{const i={type:o,mode:e,...n},{isCollapsed:d,headerValues:f,definingColumnIndex:c}=zo(),[p,I]=s.useState(!0);s.useEffect(()=>{!d&&I(!0)},[d]);const N=f.filter((y,b)=>c.indexOf(b)===-1),v=s.Children.toArray(r),Y=v.filter((y,b)=>c.indexOf(b)===-1),Z="collapsibleRow",W=[],w=d&&N.length>0?Y.map(function(y,b){const ro=yo(Z,b.toString());return W.push(ro),C(s.Fragment,{children:[t(uo,{children:N[b].content}),s.isValidElement(y)&&s.cloneElement(y,{collapsibleProps:{isCollapsibleChild:!0}})]},`DL-${b}`)}):null,_=w&&w.length>0?t(x,{type:"body",children:t(Eo,{colSpan:c.length+1,children:t(bo,{children:w})})}):null,P=v.slice().filter((y,b)=>c.indexOf(b)>-1).sort((y,b)=>c.indexOf(v.indexOf(y))-c.indexOf(v.indexOf(b))),oo=()=>o!=="head"||!d?null:t(x,{ref:l,...i,children:C(T,{children:[P,C(g.Cell,{type:"head",layout:"center",children:["Utvid",t($o,{as:"span",children:"raden"})]})]})}),eo=Co(W),to=()=>o!=="body"||!d?null:C(x,{ref:l,...i,"data-isopencollapsibleheader":!p&&!0,children:[P,t(g.Cell,{children:t(Fo,{onClick:()=>I(!p),"aria-expanded":!p,"aria-controls":eo,children:t(wo,{isUp:!p,height:"7.5px",width:"12px"})})})]});return d&&w&&w.length>0?C(T,{children:[oo(),o==="body"&&C(T,{children:[to(),p?null:_]})]}):t(x,{ref:l,...i,children:r})});J.displayName="CollapsibleTable.Row";const{cell:Ao}=k,jo=u.button`
  ${mo}
  user-select: text;
  ${A}
  display: flex;
  align-items: center;
  gap: ${Ao.sort.gap};
  &:focus-visible {
    ${E}
  }
`,Go=(o,e)=>!o||!e?t(z,{icon:fo,iconSize:"inherit"}):e==="ascending"?t(z,{icon:go,iconSize:"inherit"}):t(z,{icon:ho,iconSize:"inherit"}),K=s.forwardRef(({isSorted:o,sortOrder:e,onClick:r,children:n,...l},i)=>t(R,{ref:i,type:"head","aria-sort":o&&e?e:void 0,...l,children:C(jo,{onClick:r,"aria-description":"Aktiver for å endre sorteringsrekkefølge",children:[n," ",Go(o,e)]})}));K.displayName="Table.SortCell";const Ho=u.div`
  ${({overflowX:o})=>o&&a`
      overflow-x: auto;
    `}
  ${D.webkit}
  ${D.firefox}
`,Q=({children:o,...e})=>{const[r,n]=s.useState(!1),[l,i]=s.useState(window.innerWidth);function d(p){return p.offsetWidth<p.scrollWidth}const f=s.useRef(null);s.useEffect(()=>{if(f&&f.current&&d(f.current)){n(!0);return}n(!1)},[l]),s.useEffect(()=>{function p(){i(window.innerWidth)}return window.addEventListener("resize",p),()=>window.removeEventListener("resize",p)});const c={ref:f,overflowX:r,...e};return t(Ho,{...c,children:o})};Q.displayName="Table.Wrapper";const g=B;g.Wrapper=Q;g.Head=H;g.Body=O;g.Cell=R;g.SortCell=K;g.Row=M;g.Foot=U;const Oo=G;Oo.Row=J;export{Oo as C,g as T};
//# sourceMappingURL=index-43c465b1.js.map
