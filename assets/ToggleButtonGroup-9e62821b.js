import{j as b,a}from"./jsx-runtime-e43ccb36.js";import{r as T}from"./index-1b03fe98.js";import{s as l,A as v}from"./ddsReferenceTokens-f9f5a4e4.js";import{g as h}from"./BaseComponentProps-9c025471.js";import"./Caption-c3e5a7e9.js";import"./Heading-3c0ada0f.js";import"./Label-56d59f5f.js";import"./Legend-c9e1505c.js";import"./Link-1f045fc3.js";import"./Paragraph-68d1c0c0.js";import"./TextOverflowEllipsis-1edb8626.js";import{T as x}from"./Typography-e1773316.js";import{t as n}from"./ToggleButton-e3ae0044.js";const B=l.div`
  gap: ${n.group.gap};
  display: flex;
  flex-wrap: wrap;
  ${({direction:e})=>v`
      flex-direction: ${e};
    `}
`,L=l.div`
  display: flex;
  flex-direction: column;
  gap: ${n.container.gap};
`,r=e=>{const{children:i,direction:s="row",label:t,labelId:p,id:d,className:u,htmlProps:m,...g}=e,c=T.useId(),o=p??`${c}-ToggleButtonGroupLabel`,f={direction:s},y={...h(d,u,m,g),role:"group","aria-labelledby":t?o:void 0};return b(L,{...y,children:[!!t&&a(x,{as:"span",typographyType:"supportingStyleLabel01",id:o,children:t}),a(B,{...f,children:i})]})};r.displayName="ToggleButtonGroup";try{r.displayName="ToggleButtonGroup",r.__docgenInfo={description:"",displayName:"ToggleButtonGroup",props:{label:{defaultValue:null,description:"Ledetekst for gruppen.",name:"label",required:!1,type:{name:"string | undefined"}},direction:{defaultValue:null,description:"Retningen barna legger seg i.",name:"direction",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"row"'},{value:'"column"'}]}},labelId:{defaultValue:null,description:"Custom `id` for ledetekst. Blir generert som default for å knytte ledetekst til gruppen.",name:"labelId",required:!1,type:{name:"string | undefined"}},htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:"HTMLAttributes<HTMLDivElement> | undefined"}}}}}catch{}export{r as T};
//# sourceMappingURL=ToggleButtonGroup-9e62821b.js.map
