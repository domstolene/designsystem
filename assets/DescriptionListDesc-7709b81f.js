import{d as b,s as m,C as D,j as g,b as y}from"./focus-visible-17f12d09.js";import{r as f}from"./index-c6dae603.js";import{s as S}from"./selection-dced972e.js";import{g as $}from"./BaseComponentProps-bb0d5515.js";import{I as h}from"./Icon-a968456f.js";const{spacing:t,colors:d}=b,x={appearance:{small:{color:d.DdsColorNeutralsGray7},bold:{color:d.DdsColorNeutralsGray9}},firstOfType:{marginTop:t.SizesDdsSpacingLocalX1}},N={base:{gap:t.SizesDdsSpacingLocalX025,color:d.DdsColorNeutralsGray9},lastChild:{marginBottom:t.SizesDdsSpacingLocalX1}},w={beforeNextTerm:{marginTop:t.SizesDdsSpacingLocalX2},rowDirection:{columnGap:t.SizesDdsSpacingLocalX2}},C={base:{margin:t.SizesDdsSpacingLocalX2}},p={term:x,desc:N,list:w,group:C},{term:L,desc:z,list:T}=p,P=m.dl`
  margin: 0;
  *::selection {
    ${S}
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
    margin-bottom: ${z.lastChild.marginBottom};
  }
  dd + dt {
    margin-top: ${T.beforeNextTerm.marginTop};
  }
`,X=f.forwardRef((s,i)=>{const{appearance:o="bold",direction:r="column",children:e,id:a,className:c,htmlProps:n,...l}=s,u={...$(a,c,n,l),appearance:o,direction:r,ref:i};return g(P,{...u,children:e})});X.displayName="DescriptionList";const G=m.dt``,B=f.forwardRef(({children:s,...i},o)=>{const r={ref:o,...i};return g(G,{...r,children:s})});B.displayName="DescriptionListTerm";const j=m.dd`
  margin-inline-start: 0;
  align-items: center;
  display: flex;
  color: ${p.desc.base.color};
  gap: ${p.desc.base.gap};
`,R=f.forwardRef((s,i)=>{const{children:o,icon:r,id:e,className:a,htmlProps:c,...n}=s,l={...$(e,a,c,n),children:o,ref:i};return y(j,{...l,children:[r&&g(h,{icon:r})," ",o]})});R.displayName="DescriptionListDesc";export{X as D,B as a,R as b,p as d};
//# sourceMappingURL=DescriptionListDesc-7709b81f.js.map
