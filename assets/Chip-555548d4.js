import{d as f,s as h,a as C,j as e}from"./focus-visible-35158c22.js";import{r as i}from"./index-d47b1f5a.js";import{a as S}from"./dds-core-29d22035.js";import{q as x}from"./dds-icons-7a922c3a.js";import{O as D,w as R,A as k}from"./dds-typography-e761338c.js";import{B as L}from"./Button-2404c0e2.js";const{colors:n,spacing:s,borderRadius:z}=f,j="bodySans01",w={gap:s.SizesDdsSpacingLocalX025,padding:`${s.SizesDdsSpacingLocalX0125} ${s.SizesDdsSpacingLocalX025}`,backgroundColor:n.DdsColorNeutralsGray1,border:`1px solid ${n.DdsColorNeutralsGray3}`,borderRadius:z.RadiiDdsBorderRadius1Radius},B={gap:s.SizesDdsSpacingLocalX075},N={container:w,group:B},{container:a}=N,O=h(k)`
  display: flex;
  align-items: center;
  max-width: 100%;
  gap: ${a.gap};
  padding: ${a.padding};
  border: ${a.border};
  border-radius: ${a.borderRadius};
  background-color: ${a.backgroundColor};
  ${D(j,!0)};
`,T=i.forwardRef((d,t)=>{const{text:o,onClose:r,id:c,className:p,htmlProps:l={},...u}=d,{"aria-label":g,...m}=l,[b,$]=i.useState(!0),y=()=>{$(!1),r&&r()};return b?C(O,{...S(c,p,m,u),ref:t,as:"div",children:[e(R,{children:o}),e(L,{size:"tiny",icon:x,appearance:"borderless",purpose:"secondary",onClick:y,"aria-label":g||`Fjern ${o?`chip ${o}`:"chip"}`})]}):null});T.displayName="Chip";export{T as C,N as c};
//# sourceMappingURL=Chip-555548d4.js.map
