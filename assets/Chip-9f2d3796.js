import{j as h,a as i}from"./jsx-runtime-e43ccb36.js";import{r as n}from"./index-1b03fe98.js";import{d as k,s as x}from"./ddsReferenceTokens-cf345c8b.js";import{g as T}from"./BaseComponentProps-c04e3b0f.js";import{C as $}from"./libraryAdd-bb03a5d3.js";import"./Icon-feef9230.js";import"./Caption-c95a25e6.js";import"./Heading-eb094a5f.js";import"./Label-7698c3d3.js";import"./Legend-90ca2ccd.js";import"./Link-a0d6f9b6.js";import"./Paragraph-74ee9681.js";import{T as S,a as E}from"./TextOverflowEllipsis-a0e35774.js";import{a as L}from"./Typography-8df5b43e.js";import{B as v}from"./Button-db658d75.js";const{colors:p,spacing:r,borderRadius:D}=k,_="bodySans01",N={gap:r.SizesDdsSpacingLocalX025,padding:`${r.SizesDdsSpacingLocalX0125} ${r.SizesDdsSpacingLocalX025}`,backgroundColor:p.DdsColorNeutralsGray1,border:`1px solid ${p.DdsColorNeutralsGray3}`,borderRadius:D.RadiiDdsBorderRadius1Radius},R={gap:r.SizesDdsSpacingLocalX075},z={container:N,group:R},{container:e}=z,B=x(E)`
  display: flex;
  align-items: center;
  max-width: 100%;
  gap: ${e.gap};
  padding: ${e.padding};
  border: ${e.border};
  border-radius: ${e.borderRadius};
  background-color: ${e.backgroundColor};
  ${L(_,!0)};
`,o=n.forwardRef((a,d)=>{const{text:s,onClose:t,id:l,className:c,htmlProps:m={},...u}=a,{"aria-label":g,...f}=m,[y,b]=n.useState(!0),C=()=>{b(!1),t&&t()};return y?h(B,{...T(l,c,f,u),ref:d,as:"div",children:[i(S,{children:s}),i(v,{size:"tiny",icon:$,appearance:"borderless",purpose:"secondary",onClick:C,"aria-label":g??`Fjern ${s?`chip ${s}`:"chip"}`})]}):null});o.displayName="Chip";try{o.displayName="Chip",o.__docgenInfo={description:"",displayName:"Chip",props:{text:{defaultValue:null,description:"Teksten som vises i komponenten.",name:"text",required:!1,type:{name:"string | undefined"}},onClose:{defaultValue:null,description:"Ekstra logikk når `<Chip />` lukkes.",name:"onClose",required:!1,type:{name:"(() => void) | undefined"}},htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:"HTMLAttributes<HTMLDivElement> | undefined"}}}}}catch{}export{o as C,z as c};
//# sourceMappingURL=Chip-9f2d3796.js.map
