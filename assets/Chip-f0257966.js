import{d as h,s as k,j as x,a as i}from"./ddsReferenceTokens-647ce456.js";import{r as n}from"./index-ebeaab24.js";import{g as T}from"./BaseComponentProps-a100791d.js";import{C as $}from"./libraryAdd-35e18a4f.js";import"./Icon-42793503.js";import"./Caption-0ff47cfa.js";import"./Heading-ded557b4.js";import"./Label-b7852367.js";import"./Legend-d58c0461.js";import"./Link-037ca604.js";import"./Paragraph-a74f99d8.js";import{T as S,a as E}from"./TextOverflowEllipsis-e3546c5b.js";import{a as L}from"./Typography-d54ea9fd.js";import{B as v}from"./Button-f2a6066f.js";const{colors:p,spacing:s,borderRadius:D}=h,_="bodySans01",N={gap:s.SizesDdsSpacingLocalX025,padding:`${s.SizesDdsSpacingLocalX0125} ${s.SizesDdsSpacingLocalX025}`,backgroundColor:p.DdsColorNeutralsGray1,border:`1px solid ${p.DdsColorNeutralsGray3}`,borderRadius:D.RadiiDdsBorderRadius1Radius},R={gap:s.SizesDdsSpacingLocalX075},z={container:N,group:R},{container:e}=z,B=k(E)`
  display: flex;
  align-items: center;
  max-width: 100%;
  gap: ${e.gap};
  padding: ${e.padding};
  border: ${e.border};
  border-radius: ${e.borderRadius};
  background-color: ${e.backgroundColor};
  ${L(_,!0)};
`,o=n.forwardRef((a,d)=>{const{text:r,onClose:t,id:l,className:c,htmlProps:m={},...u}=a,{"aria-label":g,...f}=m,[y,b]=n.useState(!0),C=()=>{b(!1),t&&t()};return y?x(B,{...T(l,c,f,u),ref:d,as:"div",children:[i(S,{children:r}),i(v,{size:"tiny",icon:$,appearance:"borderless",purpose:"secondary",onClick:C,"aria-label":g||`Fjern ${r?`chip ${r}`:"chip"}`})]}):null});o.displayName="Chip";try{o.displayName="Chip",o.__docgenInfo={description:"",displayName:"Chip",props:{text:{defaultValue:null,description:"Teksten som vises i komponenten.",name:"text",required:!1,type:{name:"string | undefined"}},onClose:{defaultValue:null,description:"Ekstra logikk når `<Chip />` lukkes.",name:"onClose",required:!1,type:{name:"(() => void) | undefined"}},htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:"HTMLAttributes<HTMLDivElement> | undefined"}}}}}catch{}export{o as C,z as c};
//# sourceMappingURL=Chip-f0257966.js.map
