import{j as h,a as i}from"./jsx-runtime-e43ccb36.js";import{r as n}from"./index-1b03fe98.js";import{d as k,s as x}from"./ddsReferenceTokens-fe3c594e.js";import{g as T}from"./BaseComponentProps-3902fbf1.js";import{C as $}from"./libraryAdd-7ba549de.js";import"./Icon-c6fb2d87.js";import"./Caption-848a816b.js";import"./Heading-9ec1ef64.js";import"./Label-393cff6f.js";import"./Legend-6f4c2491.js";import"./Link-e04d3bba.js";import"./Paragraph-ba6a9c6f.js";import{T as S,a as E}from"./TextOverflowEllipsis-c2a9fc8f.js";import{a as L}from"./Typography-dcf6ef21.js";import{B as v}from"./Button-b5f31bb8.js";const{colors:p,spacing:r,borderRadius:D}=k,_="bodySans01",N={gap:r.SizesDdsSpacingLocalX025,padding:`${r.SizesDdsSpacingLocalX0125} ${r.SizesDdsSpacingLocalX025}`,backgroundColor:p.DdsColorNeutralsGray1,border:`1px solid ${p.DdsColorNeutralsGray3}`,borderRadius:D.RadiiDdsBorderRadius1Radius},R={gap:r.SizesDdsSpacingLocalX075},z={container:N,group:R},{container:e}=z,B=x(E)`
  display: flex;
  align-items: center;
  max-width: 100%;
  gap: ${e.gap};
  padding: ${e.padding};
  border: ${e.border};
  border-radius: ${e.borderRadius};
  background-color: ${e.backgroundColor};
  ${L(_,!0)};
`,o=n.forwardRef((a,d)=>{const{text:s,onClose:t,id:l,className:c,htmlProps:m={},...u}=a,{"aria-label":g,...f}=m,[y,b]=n.useState(!0),C=()=>{b(!1),t&&t()};return y?h(B,{...T(l,c,f,u),ref:d,as:"div",children:[i(S,{children:s}),i(v,{size:"tiny",icon:$,appearance:"borderless",purpose:"secondary",onClick:C,"aria-label":g||`Fjern ${s?`chip ${s}`:"chip"}`})]}):null});o.displayName="Chip";try{o.displayName="Chip",o.__docgenInfo={description:"",displayName:"Chip",props:{text:{defaultValue:null,description:"Teksten som vises i komponenten.",name:"text",required:!1,type:{name:"string | undefined"}},onClose:{defaultValue:null,description:"Ekstra logikk når `<Chip />` lukkes.",name:"onClose",required:!1,type:{name:"(() => void) | undefined"}},htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:"HTMLAttributes<HTMLDivElement> | undefined"}}}}}catch{}export{o as C,z as c};
//# sourceMappingURL=Chip-aa449300.js.map
