import{d as y,s as m,A as D,j as g,a as S}from"./focus-visible-c2e9b88d.js";import{r as f}from"./index-ebeaab24.js";import{s as b}from"./selection-fae9d0a8.js";import{g as $}from"./BaseComponentProps-bb0d5515.js";import{I as h}from"./Icon-819df738.js";const{spacing:t,colors:d}=y,x={appearance:{small:{color:d.DdsColorNeutralsGray7},bold:{color:d.DdsColorNeutralsGray9}},firstOfType:{marginTop:t.SizesDdsSpacingLocalX1}},N={base:{gap:t.SizesDdsSpacingLocalX025,color:d.DdsColorNeutralsGray9},lastChild:{marginBottom:t.SizesDdsSpacingLocalX1}},w={beforeNextTerm:{marginTop:t.SizesDdsSpacingLocalX2},rowDirection:{columnGap:t.SizesDdsSpacingLocalX2}},z={base:{margin:t.SizesDdsSpacingLocalX2}},p={term:x,desc:N,list:w,group:z},{term:L,desc:P,list:T}=p,X=m.dl`
  margin: 0;
  *::selection {
    ${b}
  }
  ${({appearance:s})=>s&&D`
      dt {
        color: ${L.appearance[s].color};
        ${s==="bold"&&D`
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
    margin-bottom: ${P.lastChild.marginBottom};
  }
  dd + dt {
    margin-top: ${T.beforeNextTerm.marginTop};
  }
`,C=f.forwardRef((s,i)=>{const{appearance:o="bold",direction:r="column",children:e,id:a,className:c,htmlProps:n,...l}=s,u={...$(a,c,n,l),appearance:o,direction:r,ref:i};return g(X,{...u,children:e})});C.displayName="DescriptionList";const G=m.dt``,B=f.forwardRef(({children:s,...i},o)=>{const r={ref:o,...i};return g(G,{...r,children:s})});B.displayName="DescriptionListTerm";const j=m.dd`
  margin-inline-start: 0;
  align-items: center;
  display: flex;
  color: ${p.desc.base.color};
  gap: ${p.desc.base.gap};
`,R=f.forwardRef((s,i)=>{const{children:o,icon:r,id:e,className:a,htmlProps:c,...n}=s,l={...$(e,a,c,n),children:o,ref:i};return S(j,{...l,children:[r&&g(h,{icon:r})," ",o]})});R.displayName="DescriptionListDesc";export{R as D,C as a,B as b,p as d};
//# sourceMappingURL=DescriptionListDesc-d92b631c.js.map
