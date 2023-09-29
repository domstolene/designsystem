import{d as g,s as f,A as y,a as o}from"./ddsReferenceTokens-647ce456.js";import{r as T}from"./index-ebeaab24.js";import{g as b}from"./BaseComponentProps-a100791d.js";import"./Caption-0ff47cfa.js";import"./Heading-ded557b4.js";import"./Label-b7852367.js";import"./Legend-d58c0461.js";import"./Link-037ca604.js";import"./Paragraph-a74f99d8.js";import{T as v,a as k}from"./TextOverflowEllipsis-e3546c5b.js";import{a as x}from"./Typography-d54ea9fd.js";import{l as s}from"./LocalMessage.tokens-59426b17.js";const{colors:t,borderRadius:E,spacing:n}=g,$="bodySans01",w={border:"1px solid",borderRadius:E.RadiiDdsBorderRadius1Radius,padding:`${n.SizesDdsSpacingLocalX0125} ${n.SizesDdsSpacingLocalX025}`,purpose:{default:{backgroundColor:t.DdsColorNeutralsGray1,borderColor:t.DdsColorNeutralsGray3},success:s.container.purpose.success,danger:s.container.purpose.danger,warning:s.container.purpose.warning,info:s.container.purpose.info}},_={wrapper:w},{wrapper:r}=_,h=f(k)`
  display: inline-flex;
  align-items: center;
  border: ${r.border};
  border-radius: ${r.borderRadius};
  padding: ${r.padding};
  ${x($)}
  ${({purpose:e})=>y`
    background-color: ${r.purpose[e].backgroundColor};
    border-color: ${r.purpose[e].borderColor};
  `}
`,a=T.forwardRef((e,i)=>{const{text:p,purpose:d="default",id:l,className:u,htmlProps:c,...m}=e;return o(h,{...b(l,u,c,m),ref:i,purpose:d,children:o(v,{children:p})})});a.displayName="Tag";try{a.displayName="Tag",a.__docgenInfo={description:"",displayName:"Tag",props:{text:{defaultValue:null,description:"Tekst som vises i `<Tag />.`",name:"text",required:!1,type:{name:"string | undefined"}},purpose:{defaultValue:null,description:"Formål med status eller kategorisering. Påvirker styling.",name:"purpose",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"danger"'},{value:'"info"'},{value:'"warning"'},{value:'"success"'},{value:'"default"'}]}},htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:"HTMLAttributes<HTMLSpanElement> | undefined"}}}}}catch{}export{a as T};
//# sourceMappingURL=Tag-322a7849.js.map
