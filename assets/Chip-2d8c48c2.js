import{d as C,s as $,b as S,j as e}from"./focus-visible-17f12d09.js";import{r as i}from"./index-c6dae603.js";import{d as h}from"./Typography.utils-3c68477b.js";import{T as x,a as T}from"./TextOverflowEllipsis-fe45a86e.js";import{g as D}from"./BaseComponentProps-bb0d5515.js";import{B as L}from"./Button-4fdfc19e.js";import{C as R}from"./close-bbf4cbe9.js";const{colors:n,spacing:o,borderRadius:k}=C,z="bodySans01",B={gap:o.SizesDdsSpacingLocalX025,padding:`${o.SizesDdsSpacingLocalX0125} ${o.SizesDdsSpacingLocalX025}`,backgroundColor:n.DdsColorNeutralsGray1,border:`1px solid ${n.DdsColorNeutralsGray3}`,borderRadius:k.RadiiDdsBorderRadius1Radius},j={gap:o.SizesDdsSpacingLocalX075},w={container:B,group:j},{container:s}=w,N=$(T)`
  display: flex;
  align-items: center;
  max-width: 100%;
  gap: ${s.gap};
  padding: ${s.padding};
  border: ${s.border};
  border-radius: ${s.borderRadius};
  background-color: ${s.backgroundColor};
  ${h(z,!0)};
`,O=i.forwardRef((t,d)=>{const{text:r,onClose:a,id:p,className:c,htmlProps:l={},...g}=t,{"aria-label":m,...u}=l,[b,f]=i.useState(!0),y=()=>{f(!1),a&&a()};return b?S(N,{...D(p,c,u,g),ref:d,as:"div",children:[e(x,{children:r}),e(L,{size:"tiny",icon:R,appearance:"borderless",purpose:"secondary",onClick:y,"aria-label":m||`Fjern ${r?`chip ${r}`:"chip"}`})]}):null});O.displayName="Chip";export{O as C,w as c};
//# sourceMappingURL=Chip-2d8c48c2.js.map
