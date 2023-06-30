import{d as y,s as m,A as f,a as g,j as S}from"./focus-visible-8467fd8b.js";import{r as D}from"./index-d47b1f5a.js";import{Q as b,a as $}from"./dds-core-b89b291f.js";import{i as h}from"./dds-icons-57b6044b.js";const{spacing:t,colors:d}=y,x={appearance:{small:{color:d.DdsColorNeutralsGray7},bold:{color:d.DdsColorNeutralsGray9}},firstOfType:{marginTop:t.SizesDdsSpacingLocalX1}},N={base:{gap:t.SizesDdsSpacingLocalX025,color:d.DdsColorNeutralsGray9},lastChild:{marginBottom:t.SizesDdsSpacingLocalX1}},w={beforeNextTerm:{marginTop:t.SizesDdsSpacingLocalX2},rowDirection:{columnGap:t.SizesDdsSpacingLocalX2}},z={base:{margin:t.SizesDdsSpacingLocalX2}},p={term:x,desc:N,list:w,group:z},{term:L,desc:X,list:T}=p,C=m.dl`
  margin: 0;
  *::selection {
    ${b}
  }
  ${({appearance:s})=>s&&f`
      dt {
        color: ${L.appearance[s].color};
        ${s==="bold"&&f`
          font-weight: 600;
        `}
      }
    `}
  display: flex;
  flex-direction: column;
  &:not(:has(> dt):has(> dd)) {
    flex-direction: ${({direction:s="column"})=>s};
  }
  flex-wrap: wrap;
  column-gap: ${T.rowDirection.columnGap};
  row-gap: 0;
  & > dt:first-of-type {
    margin-top: ${L.firstOfType.marginTop};
  }
  & > dd:last-child {
    margin-bottom: ${X.lastChild.marginBottom};
  }
  dd + dt {
    margin-top: ${T.beforeNextTerm.marginTop};
  }
`,G=D.forwardRef((s,i)=>{const{appearance:o="bold",direction:r="column",children:e,id:a,className:c,htmlProps:n,...l}=s,u={...$(a,c,n,l),appearance:o,direction:r,ref:i};return g(C,{...u,children:e})});G.displayName="DescriptionList";const P=m.dt``,j=D.forwardRef(({children:s,...i},o)=>{const r={ref:o,...i};return g(P,{...r,children:s})});j.displayName="DescriptionListTerm";const B=m.dd`
  margin-inline-start: 0;
  align-items: center;
  display: flex;
  color: ${p.desc.base.color};
  gap: ${p.desc.base.gap};
`,R=D.forwardRef((s,i)=>{const{children:o,icon:r,id:e,className:a,htmlProps:c,...n}=s,l={...$(e,a,c,n),children:o,ref:i};return S(B,{...l,children:[r&&g(h,{icon:r})," ",o]})});R.displayName="DescriptionListDesc";export{R as D,G as a,j as b,p as d};
//# sourceMappingURL=DescriptionListDesc-e5aa5366.js.map
