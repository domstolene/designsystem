import{a}from"./jsx-runtime-e43ccb36.js";import{r as g}from"./index-1b03fe98.js";import{d as f,s as y,A as T}from"./ddsReferenceTokens-baf3ad90.js";import{g as b}from"./BaseComponentProps-46424d28.js";import"./Caption-1d5aeb22.js";import"./Heading-862bf652.js";import"./Label-5ae0c148.js";import"./Legend-a1cc5017.js";import"./Link-15befa1a.js";import"./Paragraph-53be9306.js";import{T as v,a as k}from"./TextOverflowEllipsis-05821fa6.js";import{a as x}from"./Typography-9e3266f4.js";import{l as s}from"./LocalMessage.tokens-16e20a1c.js";const{colors:t,borderRadius:E,spacing:n}=f,$="bodySans01",w={border:"1px solid",borderRadius:E.RadiiDdsBorderRadius1Radius,padding:`${n.SizesDdsSpacingLocalX0125} ${n.SizesDdsSpacingLocalX025}`,purpose:{default:{backgroundColor:t.DdsColorNeutralsGray1,borderColor:t.DdsColorNeutralsGray3},success:s.container.purpose.success,danger:s.container.purpose.danger,warning:s.container.purpose.warning,info:s.container.purpose.info}},_={wrapper:w},{wrapper:r}=_,h=y(k)`
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
//# sourceMappingURL=Tag-052d5806.js.map
