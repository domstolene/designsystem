import{j as b,a}from"./jsx-runtime-e43ccb36.js";import{r as T}from"./index-1b03fe98.js";import{s as n,n as v}from"./ddsReferenceTokens-cf345c8b.js";import{g as h}from"./BaseComponentProps-c04e3b0f.js";import"./Caption-c95a25e6.js";import"./Heading-eb094a5f.js";import"./Label-7698c3d3.js";import"./Legend-90ca2ccd.js";import"./Link-a0d6f9b6.js";import"./Paragraph-74ee9681.js";import"./TextOverflowEllipsis-a0e35774.js";import{T as x}from"./Typography-8df5b43e.js";import{t as l}from"./ToggleButton-4c69c0d0.js";const B=n.div`
  gap: ${l.group.gap};
  display: flex;
  flex-wrap: wrap;
  ${({direction:e})=>v`
    flex-direction: ${e};
  `}
`,L=n.div`
  display: flex;
  flex-direction: column;
  gap: ${l.container.gap};
`,r=e=>{const{children:i,direction:s="row",label:t,labelId:p,id:u,className:d,htmlProps:m,...g}=e,c=T.useId(),o=p??`${c}-ToggleButtonGroupLabel`,f={direction:s},y={...h(u,d,m,g),role:"group","aria-labelledby":t?o:void 0};return b(L,{...y,children:[!!t&&a(x,{as:"span",typographyType:"supportingStyleLabel01",id:o,children:t}),a(B,{...f,children:i})]})};r.displayName="ToggleButtonGroup";try{r.displayName="ToggleButtonGroup",r.__docgenInfo={description:"",displayName:"ToggleButtonGroup",props:{label:{defaultValue:null,description:"Ledetekst for gruppen.",name:"label",required:!1,type:{name:"string | undefined"}},direction:{defaultValue:null,description:"Retningen barna legger seg i.",name:"direction",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"row"'},{value:'"column"'}]}},labelId:{defaultValue:null,description:"Custom `id` for ledetekst. Blir generert som default for å knytte ledetekst til gruppen.",name:"labelId",required:!1,type:{name:"string | undefined"}},htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:"HTMLAttributes<HTMLDivElement> | undefined"}}}}}catch{}export{r as T};
//# sourceMappingURL=ToggleButtonGroup-4a7ef8d4.js.map
