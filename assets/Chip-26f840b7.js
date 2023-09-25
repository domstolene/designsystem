import{d as h,s as k,j as x,a as i}from"./ddsReferenceTokens-647ce456.js";import{r as n}from"./index-ebeaab24.js";import{g as T}from"./BaseComponentProps-a100791d.js";import{C as $}from"./libraryAdd-4099b973.js";import"./Icon-e6324a43.js";import"./Caption-5c254d72.js";import"./Heading-dc72d0b9.js";import"./Label-23c96940.js";import"./Legend-dbc3ced6.js";import"./Link-9aff7843.js";import"./Paragraph-3340e0ea.js";import{T as S,a as E}from"./TextOverflowEllipsis-e3546c5b.js";import{g as L}from"./Typography-1747463b.js";import{B as v}from"./Button-07f0874b.js";const{colors:p,spacing:s,borderRadius:D}=h,_="bodySans01",N={gap:s.SizesDdsSpacingLocalX025,padding:`${s.SizesDdsSpacingLocalX0125} ${s.SizesDdsSpacingLocalX025}`,backgroundColor:p.DdsColorNeutralsGray1,border:`1px solid ${p.DdsColorNeutralsGray3}`,borderRadius:D.RadiiDdsBorderRadius1Radius},R={gap:s.SizesDdsSpacingLocalX075},z={container:N,group:R},{container:e}=z,B=k(E)`
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
//# sourceMappingURL=Chip-26f840b7.js.map
