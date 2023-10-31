import{a as g}from"./jsx-runtime-e43ccb36.js";import{r as m}from"./index-1b03fe98.js";import{g as h}from"./BaseComponentProps-b6ad9f7d.js";import"./TextOverflowEllipsis-6cc9a60a.js";import{T as y}from"./Typography-d13ef156.js";const f=e=>`h${e}`,c=e=>{switch(e){case"h1":return"headingSans06";case"h2":return"headingSans05";case"h3":return"headingSans04";case"h4":return"headingSans03";case"h5":return"headingSans02";case"h6":return"headingSans01";default:return"headingSans06"}},a=m.forwardRef((e,r)=>{const{id:i,className:s,htmlProps:l,children:u,typographyType:n,level:p,...d}=e,t=f(p),o={...h(i,s,l,d),typographyType:n||c(t),as:t,ref:r};return g(y,{...o,children:u})});a.displayName="Heading";try{a.displayName="Heading",a.__docgenInfo={description:"",displayName:"Heading",props:{level:{defaultValue:null,description:"Nivå på overskriften. Komponenten returnerer HTML heading element med dette nivået med default styling.",name:"level",required:!0,type:{name:"enum",value:[{value:"2"},{value:"1"},{value:"3"},{value:"4"},{value:"5"},{value:"6"}]}},typographyType:{defaultValue:null,description:"Spesifiserer typografistil basert på utvalget for HTML heading elementer.",name:"typographyType",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"headingSans01"'},{value:'"headingSans02"'},{value:'"headingSans03"'},{value:'"headingSans04"'},{value:'"headingSans05"'},{value:'"headingSans06"'},{value:'"headingSans07"'},{value:'"headingSans08"'}]}},withMargins:{defaultValue:null,description:"Spesifiserer om tekstelementet skal ha spacing definert i Elsa. Brukes hovedsakelig i artikler og lignende. **OBS!** har forskjellig virkning på ulike typografityper. `body` og `lead`-typer får margin på bunnen, `heading`-typer får margin på bunnen og padding på toppen mens `supportingStyles` får margin topp og bunn.",name:"withMargins",required:!1,type:{name:"boolean | undefined"}},htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:"HTMLAttributes<HTMLHeadingElement> | undefined"}}}}}catch{}export{a as H};
//# sourceMappingURL=Heading-0c5437bc.js.map