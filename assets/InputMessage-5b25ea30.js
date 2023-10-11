import{d as y,s as f,A as T,j as h,a as n}from"./ddsReferenceTokens-ceb64027.js";import{E as v}from"./libraryAdd-931d79ee.js";import{I as b}from"./Icon-72ef85ba.js";import"./Caption-d066edab.js";import"./Heading-d8600f49.js";import"./Label-10c93eb5.js";import"./Legend-0cba57ca.js";import"./Link-7a88da71.js";import"./Paragraph-5ad16720.js";import"./TextOverflowEllipsis-e584ab25.js";import{T as k}from"./Typography-56baa34a.js";import{r as E}from"./index-1b03fe98.js";import{g as M}from"./BaseComponentProps-d435d0d0.js";const{colors:a,spacing:o}=y,S={tip:{backgroundColor:a.DdsColorNeutralsWhite},error:{padding:`${o.SizesDdsSpacingLocalX025} ${o.SizesDdsSpacingLocalX05}`,color:a.DdsColorDangerBase,backgroundColor:a.DdsColorDangerLightest,gap:o.SizesDdsSpacingLocalX05}},D={marginTop:o.SizesDdsSpacingLocalX0125},e={message:S,icon:D},I=f.div`
  display: flex;
  width: fit-content;
  word-break: break-word;
  max-width: 100%;
  ${({messageType:r})=>r==="error"?T`
          color: ${e.message.error.color};
          background-color: ${e.message.error.backgroundColor};
          padding: ${e.message.error.padding};
          gap: ${e.message.error.gap};
        `:""}
  svg {
    margin-top: ${e.icon.marginTop};
  }
`,t=E.forwardRef((r,p)=>{const{message:l,messageType:i,id:m,className:d,htmlProps:g,...c}=r,u={...M(m,d,g,c),ref:p,messageType:i},s=i==="error";return h(I,{...u,children:[s&&n(b,{icon:v,iconSize:"inherit"}),n(k,{typographyType:s?"supportingStyleLabel01":"supportingStyleHelperText01",as:"span",bold:s?!0:void 0,color:s?e.message.error.color:void 0,children:l})]})});t.displayName="InputMessage";try{t.displayName="InputMessage",t.__docgenInfo={description:"",displayName:"InputMessage",props:{message:{defaultValue:null,description:"Meldingen som vises til brukeren.",name:"message",required:!0,type:{name:"string"}},messageType:{defaultValue:null,description:"Formålet med meldingen. Påvirker styling.",name:"messageType",required:!0,type:{name:"enum",value:[{value:'"error"'},{value:'"tip"'}]}},htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:"HTMLAttributes<HTMLDivElement> | undefined"}}}}}catch{}export{t as I};
//# sourceMappingURL=InputMessage-5b25ea30.js.map
