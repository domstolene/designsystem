import{s as l,A as b,j as T,a}from"./ddsReferenceTokens-647ce456.js";import{r as v}from"./index-ebeaab24.js";import{g as h}from"./BaseComponentProps-a100791d.js";import"./Caption-5c254d72.js";import"./Heading-dc72d0b9.js";import"./Label-23c96940.js";import"./Legend-dbc3ced6.js";import"./Link-9aff7843.js";import"./Paragraph-3340e0ea.js";import"./TextOverflowEllipsis-e3546c5b.js";import{T as x}from"./Typography-1747463b.js";import{t as n}from"./ToggleButton-f08c27cc.js";const B=l.div`
  gap: ${n.group.gap};
  display: flex;
  flex-wrap: wrap;
  ${({direction:e})=>b`
      flex-direction: ${e};
    `}
`,L=l.div`
  display: flex;
  flex-direction: column;
  gap: ${n.container.gap};
`,r=e=>{const{children:s,direction:i="row",label:t,labelId:p,id:d,className:u,htmlProps:m,...g}=e,c=v.useId(),o=p??`${c}-ToggleButtonGroupLabel`,f={direction:i},y={...h(d,u,m,g),role:"group","aria-labelledby":t?o:void 0};return T(L,{...y,children:[!!t&&a(x,{as:"span",typographyType:"supportingStyleLabel01",id:o,children:t}),a(B,{...f,children:s})]})};r.displayName="ToggleButtonGroup";try{r.displayName="ToggleButtonGroup",r.__docgenInfo={description:"",displayName:"ToggleButtonGroup",props:{label:{defaultValue:null,description:"Ledetekst for gruppen.",name:"label",required:!1,type:{name:"string | undefined"}},direction:{defaultValue:null,description:"Retningen barna legger seg i.",name:"direction",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"row"'},{value:'"column"'}]}},labelId:{defaultValue:null,description:"Custom `id` for ledetekst. Blir generert som default for å knytte ledetekst til gruppen.",name:"labelId",required:!1,type:{name:"string | undefined"}},htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:"HTMLAttributes<HTMLDivElement> | undefined"}}}}}catch{}export{r as T};
//# sourceMappingURL=ToggleButtonGroup-09fed0ab.js.map
