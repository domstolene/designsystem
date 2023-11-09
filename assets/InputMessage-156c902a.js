import{j as y,a as n}from"./jsx-runtime-e43ccb36.js";import{d as f,s as T,n as h}from"./ddsReferenceTokens-fe3c594e.js";import{E as v}from"./libraryAdd-7ba549de.js";import{I as b}from"./Icon-c6fb2d87.js";import"./Caption-848a816b.js";import"./Heading-9ec1ef64.js";import"./Label-393cff6f.js";import"./Legend-6f4c2491.js";import"./Link-e04d3bba.js";import"./Paragraph-ba6a9c6f.js";import"./TextOverflowEllipsis-c2a9fc8f.js";import{T as k}from"./Typography-dcf6ef21.js";import{r as E}from"./index-1b03fe98.js";import{g as M}from"./BaseComponentProps-3902fbf1.js";const{colors:a,spacing:o}=f,S={tip:{backgroundColor:a.DdsColorNeutralsWhite},error:{padding:`${o.SizesDdsSpacingLocalX025} ${o.SizesDdsSpacingLocalX05}`,color:a.DdsColorDangerBase,backgroundColor:a.DdsColorDangerLightest,gap:o.SizesDdsSpacingLocalX05}},D={marginTop:o.SizesDdsSpacingLocalX0125},e={message:S,icon:D},I=T.div`
  display: flex;
  width: fit-content;
  word-break: break-word;
  max-width: 100%;
  ${({messageType:r})=>r==="error"?h`
          color: ${e.message.error.color};
          background-color: ${e.message.error.backgroundColor};
          padding: ${e.message.error.padding};
          gap: ${e.message.error.gap};
        `:""}
  svg {
    margin-top: ${e.icon.marginTop};
  }
`,t=E.forwardRef((r,p)=>{const{message:m,messageType:i,id:l,className:d,htmlProps:g,...c}=r,u={...M(l,d,g,c),ref:p,messageType:i},s=i==="error";return y(I,{...u,children:[s&&n(b,{icon:v,iconSize:"inherit"}),n(k,{typographyType:s?"supportingStyleLabel01":"supportingStyleHelperText01",as:"span",bold:s?!0:void 0,color:s?e.message.error.color:void 0,children:m})]})});t.displayName="InputMessage";try{t.displayName="InputMessage",t.__docgenInfo={description:"",displayName:"InputMessage",props:{message:{defaultValue:null,description:"Meldingen som vises til brukeren.",name:"message",required:!0,type:{name:"string"}},messageType:{defaultValue:null,description:"Formålet med meldingen. Påvirker styling.",name:"messageType",required:!0,type:{name:"enum",value:[{value:'"error"'},{value:'"tip"'}]}},htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:"HTMLAttributes<HTMLDivElement> | undefined"}}}}}catch{}export{t as I};
//# sourceMappingURL=InputMessage-156c902a.js.map
