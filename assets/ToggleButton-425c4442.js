import{j as p,a as u}from"./jsx-runtime-e43ccb36.js";import{r as g}from"./index-1b03fe98.js";import{d as C,s as m,A as T}from"./ddsReferenceTokens-f9f5a4e4.js";import"./libraryAdd-9af098d3.js";import{I as x}from"./Icon-a656622e.js";import{s as B,g as I}from"./BaseComponentProps-9c025471.js";import"./Caption-6d408196.js";import"./Heading-5f7faa2b.js";import"./Label-9dee7f37.js";import"./Legend-41f9f05c.js";import"./Link-1567bf4e.js";import"./Paragraph-998f64b8.js";import"./TextOverflowEllipsis-1edb8626.js";import{a as S}from"./Typography-e857479c.js";import{a as w,H as r,f as L}from"./Input.styles-3d1af983.js";import{b as _,t as N}from"./Button.tokens-4b98f929.js";import{s as V}from"./SelectionControl.tokens-c223c913.js";const{colors:n,spacing:i}=C,{button:a}=_,{selectionControl:c}=V,z=N.small,D={border:a.base.border,backgroundColor:n.DdsColorNeutralsWhite,color:n.DdsColorNeutralsGray7,gap:i.SizesDdsSpacingLocalX05,borderRadius:a.appearances.rounded.base.borderRadius,padding:a.sizes.small.text.padding,hover:c.hover.base,checked:{...c.checked.base,color:n.DdsColorNeutralsWhite,hover:c.checked.hover}},E={gap:i.SizesDdsSpacingLocalX075},H={gap:i.SizesDdsSpacingLocalX05},P={toggleButton:D,group:E,container:H},{toggleButton:o}=P,t=m.span`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  cursor: pointer;
  width: fit-content;
  border: ${o.border};
  background-color: ${o.backgroundColor};
  color: ${o.color};
  border-radius: ${o.borderRadius};
  padding: ${o.padding};
  ${S(z)}
  @media (prefers-reduced-motion: no-preference) {
    transition: border-color 0.2s, background-color 0.2s, box-shadow 0.2s,
      ${w};
  }

  ${({hasIcon:e})=>e&&T`
      gap: ${o.gap};
    `}

  &::selection,
  *::selection {
    ${B}
  }
  &:hover {
    background-color: ${o.hover.backgroundColor};
    box-shadow: ${o.hover.boxShadow};
    border-color: ${o.hover.borderColor};
  }
`,q=m.label`
  width: fit-content;
  ${r}:checked + ${t} {
    background-color: ${o.checked.backgroundColor};
    border-color: ${o.checked.borderColor};
    color: ${o.checked.color};
  }
  ${r}:checked + ${t}:hover {
    background-color: ${o.checked.hover.backgroundColor};
    border-color: ${o.checked.hover.borderColor};
    box-shadow: ${o.checked.hover.boxShadow};
  }
  ${r}:focus-visible + ${t} {
    ${L}
  }
`,d=g.forwardRef(({id:e,label:b,icon:s,className:h,htmlProps:f,...k},$)=>{const y=g.useId(),l=e??`${y}-toggleButton`,v={...I(l,h,f,k),ref:$,type:"checkbox"};return p(q,{...{htmlFor:l},children:[u(r,{...v}),p(t,{hasIcon:!!s,children:[s&&u(x,{icon:s,iconSize:"inherit"})," ",b]})]})});d.displayName="ToggleButton";try{d.displayName="ToggleButton",d.__docgenInfo={description:"",displayName:"ToggleButton",props:{label:{defaultValue:null,description:"Ledetekst for inputelementet.",name:"label",required:!1,type:{name:"string | undefined"}},icon:{defaultValue:null,description:"Ikon.",name:"icon",required:!1,type:{name:"SvgIcon | undefined"}},htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:'Omit<InputHTMLAttributes<HTMLInputElement>, "defaultChecked" | "defaultValue" | "aria-describedby" | "onBlur" | "onChange" | "name" | "value" | "checked"> | undefined'}}}}}catch{}export{d as T,P as t};
//# sourceMappingURL=ToggleButton-425c4442.js.map
