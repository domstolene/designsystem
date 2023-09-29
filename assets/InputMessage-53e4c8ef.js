import{d as y,s as f,A as T,j as h,a as n}from"./ddsReferenceTokens-647ce456.js";import{E as v}from"./libraryAdd-35e18a4f.js";import{I as b}from"./Icon-42793503.js";import"./Caption-0ff47cfa.js";import"./Heading-ded557b4.js";import"./Label-b7852367.js";import"./Legend-d58c0461.js";import"./Link-037ca604.js";import"./Paragraph-a74f99d8.js";import"./TextOverflowEllipsis-e3546c5b.js";import{T as k}from"./Typography-d54ea9fd.js";import{r as E}from"./index-ebeaab24.js";import{g as M}from"./BaseComponentProps-a100791d.js";const{colors:a,spacing:o}=y,S={tip:{backgroundColor:a.DdsColorNeutralsWhite},error:{padding:`${o.SizesDdsSpacingLocalX025} ${o.SizesDdsSpacingLocalX05}`,color:a.DdsColorDangerBase,backgroundColor:a.DdsColorDangerLightest,gap:o.SizesDdsSpacingLocalX05}},D={marginTop:o.SizesDdsSpacingLocalX0125},e={message:S,icon:D},I=f.div`
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
//# sourceMappingURL=InputMessage-53e4c8ef.js.map
