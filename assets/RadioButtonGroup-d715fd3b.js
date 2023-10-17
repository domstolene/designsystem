import{j as g,a as t}from"./jsx-runtime-e43ccb36.js";import{r as i}from"./index-1b03fe98.js";import{a as j}from"./RadioButton-5d1fea93.js";import"./Caption-6d408196.js";import"./Heading-5f7faa2b.js";import"./Label-9dee7f37.js";import"./Legend-41f9f05c.js";import"./Link-1567bf4e.js";import"./Paragraph-998f64b8.js";import"./TextOverflowEllipsis-1edb8626.js";import{T as x}from"./Typography-e857479c.js";import{g as P,R as N}from"./BaseComponentProps-9c025471.js";import{c as w}from"./combineHandlers-f6d4455a.js";import{r as c}from"./renderInputMessage-90dd305a.js";import{O as D,G as F}from"./SelectionControl.styles-d08df846.js";const S=(l,v)=>{const{name:b,label:y,groupId:h,errorMessage:a,tip:u,disabled:q,readOnly:k,direction:G="row",value:M,children:E,required:d,onChange:s,id:R,className:V,htmlProps:p={},...I}=l,{"aria-required":m}=p,[C,B]=i.useState(M),T=i.useId(),e=h??`${T}-radioButtonGroup`,L=w(r=>B(r.target.value),r=>s&&s(r,r.target.value)),H=!!a,O=d||m,f=u&&`${e}-tip`,n=a&&`${e}-errorMessage`,_={name:b,disabled:q,error:H,errorMessageId:n,required:d,readOnly:k,value:C,onChange:L};return g(D,{...P(R,V,{...p,"aria-required":m},I),ref:v,children:[g(x,{as:"span",typographyType:"supportingStyleLabel01",id:e,children:[y," ",O&&t(N,{})]}),c(u,f),t(j.Provider,{value:{..._},children:t(F,{role:"radiogroup",direction:G,"aria-labelledby":e,"aria-describedby":f,"aria-errormessage":n,children:E})}),c(void 0,void 0,a,n)]})},o=i.forwardRef(S);o.displayName="RadioButtonGroup";try{o.displayName="RadioButtonGroup",o.__docgenInfo={description:"",displayName:"RadioButtonGroup",props:{name:{defaultValue:null,description:"Gir alle barna `name` prop.",name:"name",required:!1,type:{name:"string | undefined"}},label:{defaultValue:null,description:"Ledetekst for hele gruppen.",name:"label",required:!1,type:{name:"string | undefined"}},onChange:{defaultValue:null,description:"Funksjonen for onChange-event for barna.",name:"onChange",required:!1,type:{name:"((event: ChangeEvent<HTMLInputElement>, value: T | undefined) => void) | undefined"}},required:{defaultValue:null,description:"Legger en markør (*) bak label som indikerer at input er påkrevd. Gjør alle barna påkrevd ved å gi dem `required` prop.",name:"required",required:!1,type:{name:"boolean | undefined"}},errorMessage:{defaultValue:null,description:"Meldingen som vises ved valideringsfeil. Gir alle barna error prop.",name:"errorMessage",required:!1,type:{name:"string | undefined"}},tip:{defaultValue:null,description:"Hjelpetekst for gruppen.",name:"tip",required:!1,type:{name:"string | undefined"}},disabled:{defaultValue:null,description:"Gir alle barna `disabled` prop.",name:"disabled",required:!1,type:{name:"boolean | undefined"}},readOnly:{defaultValue:null,description:"Gir alle barna `readOnly` prop",name:"readOnly",required:!1,type:{name:"boolean | undefined"}},direction:{defaultValue:null,description:"Retningen radioknappene skal gjengis i.",name:"direction",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"row"'},{value:'"column"'}]}},value:{defaultValue:null,description:"Default verdi - en `<RadioButton />` blir forhåndsvalgt. **OBS!** brukes kun når brukeren ikke skal fylle ut selv.",name:"value",required:!1,type:{name:"string | number | undefined"}},groupId:{defaultValue:null,description:"custom id for for gruppen, knytter `label` til gruppen via `aria-label`.",name:"groupId",required:!1,type:{name:"string | undefined"}},htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:'Omit<HTMLAttributes<HTMLDivElement>, "onChange"> | undefined'}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement> | undefined"}}}}}catch{}export{o as R};
//# sourceMappingURL=RadioButtonGroup-d715fd3b.js.map
