import{a}from"./jsx-runtime-e43ccb36.js";import{r as g}from"./index-1b03fe98.js";import{d as f,s as T,n as y}from"./ddsReferenceTokens-cf345c8b.js";import{g as b}from"./BaseComponentProps-217bcb03.js";import"./Caption-7324954d.js";import"./Heading-a143a4ab.js";import"./Label-e6c412e2.js";import"./Legend-8686145c.js";import"./Link-0af95a08.js";import"./Paragraph-67d8f149.js";import{T as v,a as k}from"./TextOverflowEllipsis-5f7b5b23.js";import{a as x}from"./Typography-37e894bc.js";import{l as s}from"./LocalMessage.tokens-3b4e33fb.js";const{colors:t,borderRadius:E,spacing:n}=f,$="bodySans01",w={border:"1px solid",borderRadius:E.RadiiDdsBorderRadius1Radius,padding:`${n.SizesDdsSpacingLocalX0125} ${n.SizesDdsSpacingLocalX025}`,purpose:{default:{backgroundColor:t.DdsColorNeutralsGray1,borderColor:t.DdsColorNeutralsGray3},success:s.container.purpose.success,danger:s.container.purpose.danger,warning:s.container.purpose.warning,info:s.container.purpose.info}},_={wrapper:w},{wrapper:r}=_,h=T(k)`
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
`,o=g.forwardRef((e,i)=>{const{text:p,purpose:d="default",id:l,className:u,htmlProps:c,...m}=e;return a(h,{...b(l,u,c,m),ref:i,purpose:d,children:a(v,{children:p})})});o.displayName="Tag";try{o.displayName="Tag",o.__docgenInfo={description:"",displayName:"Tag",props:{text:{defaultValue:null,description:"Tekst som vises i `<Tag />.`",name:"text",required:!1,type:{name:"string | undefined"}},purpose:{defaultValue:null,description:"Formål med status eller kategorisering. Påvirker styling.",name:"purpose",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"info"'},{value:'"warning"'},{value:'"danger"'},{value:'"success"'},{value:'"default"'}]}},htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:"HTMLAttributes<HTMLSpanElement> | undefined"}}}}}catch{}export{o as T};
//# sourceMappingURL=Tag-27b00a14.js.map
