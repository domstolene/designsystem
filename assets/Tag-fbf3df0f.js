import{a}from"./jsx-runtime-e43ccb36.js";import{r as g}from"./index-1b03fe98.js";import{d as f,s as y,A as T}from"./ddsReferenceTokens-f9f5a4e4.js";import{g as b}from"./BaseComponentProps-9c025471.js";import"./Caption-6d408196.js";import"./Heading-5f7faa2b.js";import"./Label-9dee7f37.js";import"./Legend-41f9f05c.js";import"./Link-1567bf4e.js";import"./Paragraph-998f64b8.js";import{T as v,a as k}from"./TextOverflowEllipsis-1edb8626.js";import{a as x}from"./Typography-e857479c.js";import{l as s}from"./LocalMessage.tokens-ae85469e.js";const{colors:t,borderRadius:E,spacing:n}=f,$="bodySans01",w={border:"1px solid",borderRadius:E.RadiiDdsBorderRadius1Radius,padding:`${n.SizesDdsSpacingLocalX0125} ${n.SizesDdsSpacingLocalX025}`,purpose:{default:{backgroundColor:t.DdsColorNeutralsGray1,borderColor:t.DdsColorNeutralsGray3},success:s.container.purpose.success,danger:s.container.purpose.danger,warning:s.container.purpose.warning,info:s.container.purpose.info}},_={wrapper:w},{wrapper:r}=_,h=y(k)`
  display: inline-flex;
  align-items: center;
  border: ${r.border};
  border-radius: ${r.borderRadius};
  padding: ${r.padding};
  ${x($)}
  ${({purpose:e})=>T`
    background-color: ${r.purpose[e].backgroundColor};
    border-color: ${r.purpose[e].borderColor};
  `}
`,o=g.forwardRef((e,i)=>{const{text:p,purpose:d="default",id:l,className:u,htmlProps:c,...m}=e;return a(h,{...b(l,u,c,m),ref:i,purpose:d,children:a(v,{children:p})})});o.displayName="Tag";try{o.displayName="Tag",o.__docgenInfo={description:"",displayName:"Tag",props:{text:{defaultValue:null,description:"Tekst som vises i `<Tag />.`",name:"text",required:!1,type:{name:"string | undefined"}},purpose:{defaultValue:null,description:"Formål med status eller kategorisering. Påvirker styling.",name:"purpose",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"danger"'},{value:'"info"'},{value:'"warning"'},{value:'"success"'},{value:'"default"'}]}},htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:"HTMLAttributes<HTMLSpanElement> | undefined"}}}}}catch{}export{o as T};
//# sourceMappingURL=Tag-fbf3df0f.js.map
