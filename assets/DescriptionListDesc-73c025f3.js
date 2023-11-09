import{a as g,j as b}from"./jsx-runtime-e43ccb36.js";import{r as D}from"./index-1b03fe98.js";import{d as h,s as L,n as y}from"./ddsReferenceTokens-fe3c594e.js";import{s as S,g as v}from"./BaseComponentProps-3902fbf1.js";import"./libraryAdd-7ba549de.js";import{I as $}from"./Icon-c6fb2d87.js";const{spacing:r,colors:d}=h,x={appearance:{small:{color:d.DdsColorNeutralsGray7},bold:{color:d.DdsColorNeutralsGray9}},firstOfType:{marginTop:r.SizesDdsSpacingLocalX1}},E={base:{gap:r.SizesDdsSpacingLocalX025,color:d.DdsColorNeutralsGray9},lastChild:{marginBottom:r.SizesDdsSpacingLocalX1}},P={beforeNextTerm:{marginTop:r.SizesDdsSpacingLocalX2},rowDirection:{columnGap:r.SizesDdsSpacingLocalX2}},k={base:{margin:r.SizesDdsSpacingLocalX2}},p={term:x,desc:E,list:P,group:k},{term:_,desc:w,list:T}=p,H=L.dl`
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
`,m=D.forwardRef((e,o)=>{const{appearance:s="bold",direction:t="column",children:i,id:a,className:n,htmlProps:c,...l}=e,N={...v(a,n,c,l),appearance:s,direction:t,ref:o};return g(H,{...N,children:i})});m.displayName="DescriptionList";try{m.displayName="DescriptionList",m.__docgenInfo={description:"",displayName:"DescriptionList",props:{appearance:{defaultValue:null,description:"Påvirker tekst styling.",name:"appearance",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"small"'},{value:'"bold"'}]}},direction:{defaultValue:{value:'"column"'},description:"Setter flex-direction. NB! Fungerer kun ved bruk av `DescriptionListGroup` som barn av `DescriptionList`.",name:"direction",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"row"'},{value:'"column"'}]}},htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:"HTMLAttributes<HTMLDListElement> | undefined"}}}}}catch{}const I=L.dt``,u=D.forwardRef(({children:e,...o},s)=>{const t={ref:s,...o};return g(I,{...t,children:e})});u.displayName="DescriptionListTerm";try{u.displayName="DescriptionListTerm",u.__docgenInfo={description:"",displayName:"DescriptionListTerm",props:{}}}catch{}const M=L.dd`
  margin-inline-start: 0;
  align-items: center;
  display: flex;
  color: ${p.desc.base.color};
  gap: ${p.desc.base.gap};
`,f=D.forwardRef((e,o)=>{const{children:s,icon:t,id:i,className:a,htmlProps:n,...c}=e,l={...v(i,a,n,c),children:s,ref:o};return b(M,{...l,children:[t&&g($,{icon:t})," ",s]})});f.displayName="DescriptionListDesc";try{f.displayName="DescriptionListDesc",f.__docgenInfo={description:"",displayName:"DescriptionListDesc",props:{icon:{defaultValue:null,description:"Ikon som vises ved siden av teksten.",name:"icon",required:!1,type:{name:"SvgIcon | undefined"}},htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:"HTMLAttributes<HTMLElement> | undefined"}}}}}catch{}export{m as D,u as a,f as b,p as d};
//# sourceMappingURL=DescriptionListDesc-73c025f3.js.map
