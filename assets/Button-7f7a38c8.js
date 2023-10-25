import{j as I,F as W,a as s}from"./jsx-runtime-e43ccb36.js";import{r as A}from"./index-1b03fe98.js";import"./libraryAdd-ba36db88.js";import{I as F}from"./Icon-169fc8ae.js";import{s as D,g as R}from"./BaseComponentProps-46424d28.js";import{t as M,b as w}from"./Button.tokens-33bf137d.js";import{s as _,A as n}from"./ddsReferenceTokens-baf3ad90.js";import{n as K}from"./normalize-f756ee4b.js";import"./Caption-1d5aeb22.js";import"./Heading-862bf652.js";import"./Label-5ae0c148.js";import"./Legend-a1cc5017.js";import"./Link-15befa1a.js";import"./Paragraph-53be9306.js";import"./TextOverflowEllipsis-05821fa6.js";import{a as U}from"./Typography-9e3266f4.js";import{a as J,f as O}from"./Input.styles-4c4ddd98.js";import{S as X}from"./Spinner-657d5c3d.js";const{button:{base:G,sizes:i,appearances:r}}=w,Q=(e,o)=>{switch(e){case"filled":case"rounded":return n`
        background-color: ${r[e].purpose[o].base.backgroundColor};
        border-color: ${r[e].purpose[o].base.borderColor};
        &:hover {
          background-color: ${r[e].purpose[o].hover.backgroundColor};
          border-color: ${r[e].purpose[o].hover.borderColor};
        }
        &:active {
          background-color: ${r[e].purpose[o].active.backgroundColor};
          border-color: ${r[e].purpose[o].active.borderColor};
        }
      `;case"ghost":return n`
        background-color: ${r.ghost.base.backgroundColor};
        border-color: ${r.ghost.purpose[o].base.borderColor};
        &:hover {
          color: ${r.ghost.purpose[o].hover.color};
          border-color: ${r.ghost.purpose[o].hover.borderColor};
          box-shadow: ${r.ghost.purpose[o].hover.boxShadow};
        }
        &:active {
          color: ${r.ghost.purpose[o].active.color};
          border-color: ${r.ghost.purpose[o].active.borderColor};
          box-shadow: ${r.ghost.purpose[o].active.boxShadow};
        }
      `;case"borderless":return n`
        background-color: ${r.borderless.base.backgroundColor};
        border-color: ${r.borderless.base.borderColor};
        text-decoration: ${r.borderless.base.textDecoration};
        text-decoration-color: ${r.borderless.base.textDecorationColor};
        &:hover {
          color: ${r.borderless.purpose[o].hover.color};
          text-decoration-color: ${r.borderless.purpose[o].hover.textDecorationColor};
        }
        &:active {
          color: ${r.borderless.purpose[o].active.color};
          text-decoration-color: ${r.borderless.purpose[o].active.textDecorationColor};
        }
      `}},y=_.button`
  ${K}
  border: ${G.border};
  user-select: text;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  width: ${({fullWidth:e})=>e?"100%":"fit-content"};
  cursor: ${({isLoading:e})=>e?"not-allowed":"pointer"};
  box-shadow: none;
  text-decoration: none;

  @media (prefers-reduced-motion: no-preference) {
    transition: background-color 0.2s, text-decoration-color 0.2s,
      box-shadow 0.2s, border-color 0.2s, color 0.2s,
      ${J};
  }

  ${({appearance:e,purpose:o})=>n`
      border-radius: ${r[e].base.borderRadius};
      box-shadow: ${r[e].base.boxShadow};
      color: ${r[e].purpose[o].base.color};
      ${Q(e,o)}
    `}

  ${({hasIcon:e,hasLabel:o,appearance:t,purpose:a})=>e&&!o&&t==="borderless"&&n`
      &:hover {
        border-color: ${r[t].purpose[a].icon.hover.borderColor};
        box-shadow: ${r[t].purpose[a].icon.hover.boxShadow};
      }
      &:active {
        border-color:: ${r[t].purpose[a].icon.active.borderColor};
        box-shadow: ${r[t].purpose[a].icon.active.boxShadow};
      }
    `}
    ${({hasIcon:e,hasLabel:o,size:t})=>e&&o&&n`
      gap: ${i[t].textAndIcon.gap};
    `}

  ${({size:e,hasLabel:o})=>o?n`
          ${U(M[e])}
          padding: ${i[e].text.padding};
        `:n`
          font-size: ${i[e].justIcon.icon.fontSize};
          padding: ${i[e].justIcon.icon.padding};
        `}

  ${({fullWidth:e,hasIcon:o,hasLabel:t,isLoading:a,iconPosition:d})=>e&&(!o||!t||a?n`
          justify-content: center;
        `:o&&t&&d==="left"?n`
          justify-content: left;
        `:n`
          justify-content: space-between;
        `)}

  &:focus-visible, &.focus-visible {
    ${O}
  }

  *::selection {
    ${D}
  }
`,m=_.span`
  display: flex;
  align-items: center;
  justify-content: center;
  ${({absolutePosition:e})=>e&&n`
      position: absolute;
    `}
  ${({isHidden:e})=>e&&n`
      visibility: hidden;
    `}
  ${({justIcon:e,size:o})=>e&&n`
      height: ${i[o].justIcon.wrapper.height};
      width: ${i[o].justIcon.wrapper.width};
    `}
`,$=_.span`
  ${({isHidden:e})=>e&&n`
      visibility: hidden;
    `}
`;try{y.displayName="ButtonWrapper",y.__docgenInfo={description:"",displayName:"ButtonWrapper",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"tiny"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},purpose:{defaultValue:null,description:"",name:"purpose",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"danger"'}]}},iconPosition:{defaultValue:null,description:"",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"left"'},{value:'"right"'}]}},appearance:{defaultValue:null,description:"",name:"appearance",required:!0,type:{name:"enum",value:[{value:'"filled"'},{value:'"ghost"'},{value:'"rounded"'},{value:'"borderless"'}]}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!0,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!0,type:{name:"boolean"}},hasIcon:{defaultValue:null,description:"",name:"hasIcon",required:!0,type:{name:"boolean"}},hasLabel:{defaultValue:null,description:"",name:"hasLabel",required:!0,type:{name:"boolean"}}}}}catch{}try{m.displayName="StyledIconWrapperSpan",m.__docgenInfo={description:"",displayName:"StyledIconWrapperSpan",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"tiny"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},iconPosition:{defaultValue:null,description:"",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"left"'},{value:'"right"'}]}},absolutePosition:{defaultValue:null,description:"",name:"absolutePosition",required:!1,type:{name:"boolean | undefined"}},isHidden:{defaultValue:null,description:"",name:"isHidden",required:!1,type:{name:"boolean | undefined"}},justIcon:{defaultValue:null,description:"",name:"justIcon",required:!1,type:{name:"boolean | undefined"}}}}}catch{}try{$.displayName="Label",$.__docgenInfo={description:"",displayName:"Label",props:{isHidden:{defaultValue:null,description:"",name:"isHidden",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const{button:{sizes:Y,appearances:Z}}=w,k=A.forwardRef((e,o)=>{const{label:t,children:a,purpose:d="primary",size:u="medium",iconPosition:f="left",appearance:x="filled",href:c,target:V,loading:l=!1,loadingTooltip:C="Lagring pågår",fullWidth:S=!1,icon:b,onClick:q,onFocus:B,onBlur:j,id:P,className:E,htmlProps:L,...N}=e,z=c?"a":"button",g=!!a||!!t,p=!!b,H={...R(P,E,L,N),href:c,as:z,rel:c?"noreferrer noopener":void 0,target:c&&V?V:void 0,ref:o,appearance:x,purpose:d,iconPosition:f,fullWidth:S,hasLabel:g,hasIcon:p,isLoading:l,size:u,onClick:T=>{!l&&q&&q(T)},onFocus:B,onBlur:j},v=!g&&p,h=b&&s(m,{size:u,isHidden:p&&l,justIcon:v,children:s(F,{icon:b,iconSize:"inherit"})});return I(y,{...H,"aria-disabled":l,children:[!v&&I(W,{children:[f==="left"&&h,s($,{isHidden:l,"aria-hidden":l,children:a??t}),f==="right"&&h]}),v&&h,l&&s(m,{size:u,absolutePosition:p||g,children:s(X,{color:Z[x].purpose[d].base.color,size:Y[u].justIcon.icon.fontSize,tooltip:C})})]})});k.displayName="Button";try{k.displayName="Button",k.__docgenInfo={description:"",displayName:"Button",props:{size:{defaultValue:null,description:"Størrelsen på knappen.",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"tiny"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},label:{defaultValue:null,description:"Innhold i knappen. Hvis `children` er definert så blir den prioritert.\n@deprecated Bruk `children` i stedet.",name:"label",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>> | undefined"}},children:{defaultValue:null,description:"Innhold i knappen. Denne blir prioritert over `label`.",name:"children",required:!1,type:{name:"ReactNode"}},purpose:{defaultValue:null,description:"Bestemmer farger basert på formål.",name:"purpose",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"primary"'},{value:'"secondary"'},{value:'"danger"'}]}},iconPosition:{defaultValue:null,description:"Posisjonen til ikonet i forhold til teksten.",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"left"'},{value:'"right"'}]}},appearance:{defaultValue:null,description:"Bestemmer utseende på knappen, bl.a. bakgrunn, border radius og skygger.",name:"appearance",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"filled"'},{value:'"ghost"'},{value:'"rounded"'},{value:'"borderless"'}]}},loading:{defaultValue:null,description:"Indikerer en loading-knapp.",name:"loading",required:!1,type:{name:"boolean | undefined"}},loadingTooltip:{defaultValue:null,description:"Tooltip som vises ved loading.",name:"loadingTooltip",required:!1,type:{name:"string | undefined"}},icon:{defaultValue:null,description:"Ikonet som ligger i knappen.",name:"icon",required:!1,type:{name:"SvgIcon | undefined"}},fullWidth:{defaultValue:null,description:"Knapp med full bredde.",name:"fullWidth",required:!1,type:{name:"boolean | undefined"}},href:{defaultValue:null,description:"URL for knapper som skal brukes som lenke. Knappen blir til et `<a>`-element.",name:"href",required:!1,type:{name:"string | undefined"}},target:{defaultValue:null,description:"Nativt target-attributt som kan spesifiseres når knappen er et `<a>`-element.",name:"target",required:!1,type:{name:"string | undefined"}},htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:'Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick" | "onFocus" | "onBlur" | "type"> | undefined'}}}}}catch{}export{k as B};
//# sourceMappingURL=Button-7f7a38c8.js.map
