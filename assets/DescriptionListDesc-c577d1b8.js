import{d as b,s as g,A as y,a as D,j as h}from"./ddsReferenceTokens-647ce456.js";import{r as L}from"./index-ebeaab24.js";import{s as S,g as v}from"./BaseComponentProps-a100791d.js";import"./libraryAdd-15469728.js";import{I as $}from"./Icon-e6324a43.js";const{spacing:r,colors:d}=b,x={appearance:{small:{color:d.DdsColorNeutralsGray7},bold:{color:d.DdsColorNeutralsGray9}},firstOfType:{marginTop:r.SizesDdsSpacingLocalX1}},E={base:{gap:r.SizesDdsSpacingLocalX025,color:d.DdsColorNeutralsGray9},lastChild:{marginBottom:r.SizesDdsSpacingLocalX1}},P={beforeNextTerm:{marginTop:r.SizesDdsSpacingLocalX2},rowDirection:{columnGap:r.SizesDdsSpacingLocalX2}},k={base:{margin:r.SizesDdsSpacingLocalX2}},p={term:x,desc:E,list:P,group:k},{term:_,desc:w,list:T}=p,H=g.dl`
  margin: 0;
  *::selection {
    ${S}
  }
  ${({appearance:e})=>e&&y`
      dt {
        color: ${_.appearance[e].color};
        ${e==="bold"&&y`
          font-weight: 600;
        `}
      }
    `}
  display: flex;
  flex-direction: column;
  &:not(:has(> dt):has(> dd)) {
    flex-direction: ${({direction:e="column"})=>e};
  }
  flex-wrap: wrap;
  column-gap: ${T.rowDirection.columnGap};
  row-gap: 0;
  & > dt:first-of-type {
    margin-top: ${_.firstOfType.marginTop};
  }
  & > dd:last-child {
    margin-bottom: ${w.lastChild.marginBottom};
  }
  dd + dt {
    margin-top: ${T.beforeNextTerm.marginTop};
  }
`,m=L.forwardRef((e,i)=>{const{appearance:s="bold",direction:t="column",children:o,id:a,className:n,htmlProps:c,...l}=e,N={...v(a,n,c,l),appearance:s,direction:t,ref:i};return D(H,{...N,children:o})});m.displayName="DescriptionList";try{m.displayName="DescriptionList",m.__docgenInfo={description:"",displayName:"DescriptionList",props:{appearance:{defaultValue:null,description:"Påvirker tekst styling.",name:"appearance",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"small"'},{value:'"bold"'}]}},direction:{defaultValue:{value:'"column"'},description:"Setter flex-direction. NB! Fungerer kun ved bruk av `DescriptionListGroup` som barn av `DescriptionList`.",name:"direction",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"row"'},{value:'"column"'}]}},htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:"HTMLAttributes<HTMLDListElement> | undefined"}}}}}catch{}const I=g.dt``,u=L.forwardRef(({children:e,...i},s)=>{const t={ref:s,...i};return D(I,{...t,children:e})});u.displayName="DescriptionListTerm";try{u.displayName="DescriptionListTerm",u.__docgenInfo={description:"",displayName:"DescriptionListTerm",props:{}}}catch{}const M=g.dd`
  margin-inline-start: 0;
  align-items: center;
  display: flex;
  color: ${p.desc.base.color};
  gap: ${p.desc.base.gap};
`,f=L.forwardRef((e,i)=>{const{children:s,icon:t,id:o,className:a,htmlProps:n,...c}=e,l={...v(o,a,n,c),children:s,ref:i};return h(M,{...l,children:[t&&D($,{icon:t})," ",s]})});f.displayName="DescriptionListDesc";try{f.displayName="DescriptionListDesc",f.__docgenInfo={description:"",displayName:"DescriptionListDesc",props:{icon:{defaultValue:null,description:"Ikon som vises ved siden av teksten.",name:"icon",required:!1,type:{name:"SvgIcon | undefined"}},htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:"HTMLAttributes<HTMLElement> | undefined"}}}}}catch{}export{m as D,u as a,f as b,p as d};
//# sourceMappingURL=DescriptionListDesc-c577d1b8.js.map
