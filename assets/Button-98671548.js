import{j as C,F as H,a as s}from"./jsx-runtime-e43ccb36.js";import{r as F}from"./index-1b03fe98.js";import"./libraryAdd-6466b337.js";import{I as D}from"./Icon-317ea463.js";import{s as R,g as A}from"./BaseComponentProps-5f9a30f8.js";import{t as M,b as S}from"./Button.tokens-48945bc8.js";import{s as _,n as t}from"./ddsReferenceTokens-a28ebf03.js";import{n as K}from"./normalize-f756ee4b.js";import"./Caption-f392befe.js";import"./Heading-ad44a14c.js";import"./Label-2f40b05d.js";import"./Legend-4a50a7d7.js";import"./Link-53575534.js";import"./Paragraph-ea3f8ca3.js";import"./TextOverflowEllipsis-6cc9a60a.js";import{a as U}from"./Typography-2f5b7ed6.js";import{a as J,f as O}from"./Input.styles-61cf55a8.js";import{S as X}from"./Spinner-e224c804.js";const{button:{base:G,sizes:l,appearances:r}}=S,Q=(e,o)=>{switch(e){case"filled":case"rounded":return t`
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
      `;case"ghost":return t`
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
      `;case"borderless":return t`
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
    transition:
      background-color 0.2s,
      text-decoration-color 0.2s,
      box-shadow 0.2s,
      border-color 0.2s,
      color 0.2s,
      ${J};
  }

  ${({appearance:e,purpose:o})=>t`
    border-radius: ${r[e].base.borderRadius};
    box-shadow: ${r[e].base.boxShadow};
    color: ${r[e].purpose[o].base.color};
    ${Q(e,o)}
  `}

  ${({hasIcon:e,hasLabel:o,appearance:n,purpose:i})=>e&&!o&&n==="borderless"&&t`
      &:hover {
        border-color: ${r[n].purpose[i].icon.hover.borderColor};
        box-shadow: ${r[n].purpose[i].icon.hover.boxShadow};
      }
      &:active {
        border-color:: ${r[n].purpose[i].icon.active.borderColor};
        box-shadow: ${r[n].purpose[i].icon.active.boxShadow};
      }
    `}
    ${({hasIcon:e,hasLabel:o,size:n})=>e&&o&&t`
      gap: ${l[n].textAndIcon.gap};
    `}

  ${({size:e,hasLabel:o})=>o?t`
          ${U(M[e])}
          padding: ${l[e].text.padding};
        `:t`
          font-size: ${l[e].justIcon.icon.fontSize};
          padding: ${l[e].justIcon.icon.padding};
        `}

  ${({fullWidth:e,hasIcon:o,hasLabel:n,isLoading:i,iconPosition:d})=>e&&(!o||!n||i?t`
          justify-content: center;
        `:o&&n&&d==="left"?t`
          justify-content: left;
        `:t`
          justify-content: space-between;
        `)}

  &:focus-visible, &.focus-visible {
    ${O}
  }

  *::selection {
    ${R}
  }
`,b=_.span`
  display: flex;
  align-items: center;
  justify-content: center;
  ${({absolutePosition:e})=>e&&t`
      position: absolute;
    `}
  ${({isHidden:e})=>e&&t`
      visibility: hidden;
    `}
  ${({justIcon:e,size:o})=>e&&t`
      height: ${l[o].justIcon.wrapper.height};
      width: ${l[o].justIcon.wrapper.width};
    `}
`,$=_.span`
  ${({isHidden:e})=>e&&t`
      visibility: hidden;
    `}
`;try{y.displayName="ButtonWrapper",y.__docgenInfo={description:"",displayName:"ButtonWrapper",props:{}}}catch{}try{b.displayName="StyledIconWrapperSpan",b.__docgenInfo={description:"",displayName:"StyledIconWrapperSpan",props:{}}}catch{}try{$.displayName="Label",$.__docgenInfo={description:"",displayName:"Label",props:{}}}catch{}const{button:{sizes:Y,appearances:Z}}=S,k=F.forwardRef((e,o)=>{const{label:n,children:i,purpose:d="primary",size:c="medium",iconPosition:m="left",appearance:x="filled",href:u,target:w,loading:a=!1,loadingTooltip:B="Lagring pågår",fullWidth:V=!1,icon:f,onClick:I,onFocus:j,onBlur:E,id:q,className:N,htmlProps:P,...T}=e,L=u?"a":"button",g=!!i||!!n,p=!!f,W={...A(q,N,P,T),href:u,as:L,rel:u?"noreferrer noopener":void 0,target:u&&w?w:void 0,ref:o,appearance:x,purpose:d,iconPosition:m,fullWidth:V,hasLabel:g,hasIcon:p,isLoading:a,size:c,onClick:z=>{!a&&I&&I(z)},onFocus:j,onBlur:E},h=!g&&p,v=f&&s(b,{size:c,isHidden:p&&a,justIcon:h,children:s(D,{icon:f,iconSize:"inherit"})});return C(y,{...W,"aria-disabled":a,children:[!h&&C(H,{children:[m==="left"&&v,s($,{isHidden:a,"aria-hidden":a,children:i??n}),m==="right"&&v]}),h&&v,a&&s(b,{size:c,absolutePosition:p||g,children:s(X,{color:Z[x].purpose[d].base.color,size:Y[c].justIcon.icon.fontSize,tooltip:B})})]})});k.displayName="Button";try{k.displayName="Button",k.__docgenInfo={description:"",displayName:"Button",props:{size:{defaultValue:null,description:"Størrelsen på knappen.",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"tiny"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},label:{defaultValue:null,description:"Innhold i knappen. Hvis `children` er definert så blir den prioritert.\n@deprecated Bruk `children` i stedet.",name:"label",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>> | undefined"}},children:{defaultValue:null,description:"Innhold i knappen. Denne blir prioritert over `label`.",name:"children",required:!1,type:{name:"ReactNode"}},purpose:{defaultValue:null,description:"Bestemmer farger basert på formål.",name:"purpose",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"danger"'},{value:'"primary"'},{value:'"secondary"'}]}},iconPosition:{defaultValue:null,description:"Posisjonen til ikonet i forhold til teksten.",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"left"'},{value:'"right"'}]}},appearance:{defaultValue:null,description:"Bestemmer utseende på knappen, bl.a. bakgrunn, border radius og skygger.",name:"appearance",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"filled"'},{value:'"ghost"'},{value:'"rounded"'},{value:'"borderless"'}]}},loading:{defaultValue:null,description:"Indikerer en loading-knapp.",name:"loading",required:!1,type:{name:"boolean | undefined"}},loadingTooltip:{defaultValue:null,description:"Tooltip som vises ved loading.",name:"loadingTooltip",required:!1,type:{name:"string | undefined"}},icon:{defaultValue:null,description:"Ikonet som ligger i knappen.",name:"icon",required:!1,type:{name:"SvgIcon | undefined"}},fullWidth:{defaultValue:null,description:"Knapp med full bredde.",name:"fullWidth",required:!1,type:{name:"boolean | undefined"}},href:{defaultValue:null,description:"URL for knapper som skal brukes som lenke. Knappen blir til et `<a>`-element.",name:"href",required:!1,type:{name:"string | undefined"}},target:{defaultValue:null,description:"Nativt target-attributt som kan spesifiseres når knappen er et `<a>`-element.",name:"target",required:!1,type:{name:"string | undefined"}},htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:'Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onFocus" | "onBlur" | "onClick" | "type"> | undefined'}}}}}catch{}export{k as B};
//# sourceMappingURL=Button-98671548.js.map
