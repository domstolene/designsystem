import{j as y,a as n}from"./jsx-runtime-e43ccb36.js";import{d as f,s as T,A as h}from"./ddsReferenceTokens-f9f5a4e4.js";import{E as v}from"./libraryAdd-5ac12ed0.js";import{I as b}from"./Icon-1678d620.js";import"./Caption-c3e5a7e9.js";import"./Heading-3c0ada0f.js";import"./Label-56d59f5f.js";import"./Legend-c9e1505c.js";import"./Link-1f045fc3.js";import"./Paragraph-68d1c0c0.js";import"./TextOverflowEllipsis-1edb8626.js";import{T as k}from"./Typography-e1773316.js";import{r as E}from"./index-1b03fe98.js";import{g as M}from"./BaseComponentProps-9c025471.js";const{colors:a,spacing:o}=f,S={tip:{backgroundColor:a.DdsColorNeutralsWhite},error:{padding:`${o.SizesDdsSpacingLocalX025} ${o.SizesDdsSpacingLocalX05}`,color:a.DdsColorDangerBase,backgroundColor:a.DdsColorDangerLightest,gap:o.SizesDdsSpacingLocalX05}},D={marginTop:o.SizesDdsSpacingLocalX0125},e={message:S,icon:D},I=T.div`
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
`,t=E.forwardRef((r,p)=>{const{message:l,messageType:i,id:m,className:d,htmlProps:g,...c}=r,u={...M(m,d,g,c),ref:p,messageType:i},s=i==="error";return y(I,{...u,children:[s&&n(b,{icon:v,iconSize:"inherit"}),n(k,{typographyType:s?"supportingStyleLabel01":"supportingStyleHelperText01",as:"span",bold:s?!0:void 0,color:s?e.message.error.color:void 0,children:l})]})});t.displayName="InputMessage";try{t.displayName="InputMessage",t.__docgenInfo={description:"",displayName:"InputMessage",props:{message:{defaultValue:null,description:"Meldingen som vises til brukeren.",name:"message",required:!0,type:{name:"string"}},messageType:{defaultValue:null,description:"Formålet med meldingen. Påvirker styling.",name:"messageType",required:!0,type:{name:"enum",value:[{value:'"error"'},{value:'"tip"'}]}},htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:"HTMLAttributes<HTMLDivElement> | undefined"}}}}}catch{}export{t as I};
//# sourceMappingURL=InputMessage-94e65cc6.js.map
