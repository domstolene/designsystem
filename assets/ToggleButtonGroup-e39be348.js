import{j as b,a}from"./jsx-runtime-e43ccb36.js";import{r as T}from"./index-1b03fe98.js";import{s as n,n as v}from"./ddsReferenceTokens-a28ebf03.js";import{g as h}from"./BaseComponentProps-5f9a30f8.js";import"./Caption-f392befe.js";import"./Heading-ad44a14c.js";import"./Label-2f40b05d.js";import"./Legend-4a50a7d7.js";import"./Link-53575534.js";import"./Paragraph-ea3f8ca3.js";import"./TextOverflowEllipsis-6cc9a60a.js";import{T as x}from"./Typography-2f5b7ed6.js";import{t as l}from"./ToggleButton-845dcd25.js";const B=n.div`
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
//# sourceMappingURL=ToggleButtonGroup-e39be348.js.map
