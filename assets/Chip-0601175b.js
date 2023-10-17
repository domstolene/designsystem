import{j as h,a as i}from"./jsx-runtime-e43ccb36.js";import{r as n}from"./index-1b03fe98.js";import{d as k,s as x}from"./ddsReferenceTokens-f9f5a4e4.js";import{g as T}from"./BaseComponentProps-9c025471.js";import{C as $}from"./libraryAdd-5ac12ed0.js";import"./Icon-1678d620.js";import"./Caption-c3e5a7e9.js";import"./Heading-3c0ada0f.js";import"./Label-56d59f5f.js";import"./Legend-c9e1505c.js";import"./Link-1f045fc3.js";import"./Paragraph-68d1c0c0.js";import{T as S,a as E}from"./TextOverflowEllipsis-1edb8626.js";import{a as L}from"./Typography-e1773316.js";import{B as v}from"./Button-8a98ed6d.js";const{colors:p,spacing:r,borderRadius:D}=k,_="bodySans01",N={gap:r.SizesDdsSpacingLocalX025,padding:`${r.SizesDdsSpacingLocalX0125} ${r.SizesDdsSpacingLocalX025}`,backgroundColor:p.DdsColorNeutralsGray1,border:`1px solid ${p.DdsColorNeutralsGray3}`,borderRadius:D.RadiiDdsBorderRadius1Radius},R={gap:r.SizesDdsSpacingLocalX075},z={container:N,group:R},{container:e}=z,B=x(E)`
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
//# sourceMappingURL=Chip-0601175b.js.map
