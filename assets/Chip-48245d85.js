import{d as f,s as h,j as C,a as e}from"./ddsReferenceTokens-f1d35829.js";import{r as i}from"./index-d47b1f5a.js";import{a as S}from"./dds-core-c67132cd.js";import{q as x}from"./dds-icons-265d9665.js";import{O as D,j as R,E as j}from"./dds-typography-cc6cb429.js";import{B as k}from"./Button-aa30c63f.js";const{colors:n,spacing:s,borderRadius:L}=f,z="bodySans01",B={gap:s.SizesDdsSpacingLocalX025,padding:`${s.SizesDdsSpacingLocalX0125} ${s.SizesDdsSpacingLocalX025}`,backgroundColor:n.DdsColorNeutralsGray1,border:`1px solid ${n.DdsColorNeutralsGray3}`,borderRadius:L.RadiiDdsBorderRadius1Radius},N={gap:s.SizesDdsSpacingLocalX075},O={container:B,group:N},{container:a}=O,T=h(j)`
  display: flex;
  align-items: center;
  max-width: 100%;
  gap: ${a.gap};
  padding: ${a.padding};
  border: ${a.border};
  border-radius: ${a.borderRadius};
  background-color: ${a.backgroundColor};
  ${D(z,!0)};
`,X=i.forwardRef((d,t)=>{const{text:o,onClose:r,id:c,className:p,htmlProps:l={},...u}=d,{"aria-label":g,...m}=l,[b,$]=i.useState(!0),y=()=>{$(!1),r&&r()};return b?C(T,{...S(c,p,m,u),ref:t,as:"div",children:[e(R,{children:o}),e(k,{size:"tiny",icon:x,appearance:"borderless",purpose:"secondary",onClick:y,"aria-label":g||`Fjern ${o?`chip ${o}`:"chip"}`})]}):null});X.displayName="Chip";export{X as C,O as c};
//# sourceMappingURL=Chip-48245d85.js.map
