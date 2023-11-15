import{j as b,a}from"./jsx-runtime-e43ccb36.js";import{r as T}from"./index-1b03fe98.js";import{s as n,n as v}from"./ddsReferenceTokens-cf345c8b.js";import{g as h}from"./BaseComponentProps-217bcb03.js";import"./Caption-7324954d.js";import"./Heading-a143a4ab.js";import"./Label-e6c412e2.js";import"./Legend-8686145c.js";import"./Link-0af95a08.js";import"./Paragraph-67d8f149.js";import"./TextOverflowEllipsis-5f7b5b23.js";import{T as x}from"./Typography-37e894bc.js";import{t as l}from"./ToggleButton-ae3b2695.js";const B=n.div`
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
//# sourceMappingURL=ToggleButtonGroup-93297d84.js.map
