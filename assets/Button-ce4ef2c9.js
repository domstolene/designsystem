import{j as q,F as z,a as s}from"./jsx-runtime-e43ccb36.js";import{r as D}from"./index-1b03fe98.js";import"./libraryAdd-1d1f72ea.js";import{I as H}from"./Icon-764411b5.js";import{s as F,g as R}from"./BaseComponentProps-77dc9c6e.js";import{t as M,b as I}from"./Button.tokens-a9a7352b.js";import{s as _,n as t}from"./ddsReferenceTokens-cf345c8b.js";import{n as K}from"./normalize-f756ee4b.js";import"./Caption-956f7c23.js";import"./Heading-1a21ccc8.js";import"./Label-1e45d63d.js";import"./Legend-8f4b1074.js";import"./Link-1d242339.js";import"./Paragraph-6d49c218.js";import"./TextOverflowEllipsis-5f7b5b23.js";import{a as U}from"./Typography-aec60abc.js";import{a as J,f as O}from"./Input.styles-4ebb4961.js";import{S as X}from"./Spinner-b213abf0.js";const{button:{base:G,sizes:l,appearances:r}}=I,Q=(e,o)=>{switch(e){case"filled":case"rounded":return t`
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

  ${({hasIcon:e,hasLabel:o,appearance:n,purpose:a})=>e&&!o&&n==="borderless"&&t`
      &:hover {
        border-color: ${r[n].purpose[a].icon.hover.borderColor};
        box-shadow: ${r[n].purpose[a].icon.hover.boxShadow};
      }
      &:active {
        border-color:: ${r[n].purpose[a].icon.active.borderColor};
        box-shadow: ${r[n].purpose[a].icon.active.boxShadow};
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

  ${({fullWidth:e,hasIcon:o,hasLabel:n,isLoading:a,iconPosition:d})=>e&&(!o||!n||a?t`
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
    ${F}
  }
`,f=_.span`
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
`;try{y.displayName="ButtonWrapper",y.__docgenInfo={description:"",displayName:"ButtonWrapper",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}}}catch{}try{f.displayName="StyledIconWrapperSpan",f.__docgenInfo={description:"",displayName:"StyledIconWrapperSpan",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}}}catch{}try{$.displayName="Label",$.__docgenInfo={description:"",displayName:"Label",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}}}catch{}const{button:{sizes:Y,appearances:Z}}=I,k=D.forwardRef((e,o)=>{const{label:n,children:a,purpose:d="primary",size:u="medium",iconPosition:m="left",appearance:x="filled",href:c,target:w,loading:i=!1,loadingTooltip:C="Lagring pågår",fullWidth:S=!1,icon:b,onClick:V,onFocus:T,onBlur:B,id:j,className:E,htmlProps:W,...N}=e,P=c?"a":"button",g=!!a||!!n,p=!!b,A={...R(j,E,W,N),href:c,as:P,rel:c?"noreferrer noopener":void 0,target:c&&w?w:void 0,ref:o,appearance:x,purpose:d,iconPosition:m,fullWidth:S,hasLabel:g,hasIcon:p,isLoading:i,size:u,onClick:L=>{!i&&V&&V(L)},onFocus:T,onBlur:B},h=!g&&p,v=b&&s(f,{size:u,isHidden:p&&i,justIcon:h,children:s(H,{icon:b,iconSize:"inherit"})});return q(y,{...A,"aria-disabled":i,children:[!h&&q(z,{children:[m==="left"&&v,s($,{isHidden:i,"aria-hidden":i,children:a??n}),m==="right"&&v]}),h&&v,i&&s(f,{size:u,absolutePosition:p||g,children:s(X,{color:Z[x].purpose[d].base.color,size:Y[u].justIcon.icon.fontSize,tooltip:C})})]})});k.displayName="Button";try{k.displayName="Button",k.__docgenInfo={description:"",displayName:"Button",props:{size:{defaultValue:null,description:"Størrelsen på knappen.",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"tiny"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},label:{defaultValue:null,description:"Innhold i knappen. Hvis `children` er definert så blir den prioritert.\n@deprecated Bruk `children` i stedet.",name:"label",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>> | undefined"}},children:{defaultValue:null,description:"Innhold i knappen. Denne blir prioritert over `label`.",name:"children",required:!1,type:{name:"ReactNode"}},purpose:{defaultValue:null,description:"Bestemmer farger basert på formål.",name:"purpose",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"primary"'},{value:'"secondary"'},{value:'"danger"'}]}},iconPosition:{defaultValue:null,description:"Posisjonen til ikonet i forhold til teksten.",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"left"'},{value:'"right"'}]}},appearance:{defaultValue:null,description:"Bestemmer utseende på knappen, bl.a. bakgrunn, border radius og skygger.",name:"appearance",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"filled"'},{value:'"ghost"'},{value:'"rounded"'},{value:'"borderless"'}]}},loading:{defaultValue:null,description:"Indikerer en loading-knapp.",name:"loading",required:!1,type:{name:"boolean | undefined"}},loadingTooltip:{defaultValue:null,description:"Tooltip som vises ved loading.",name:"loadingTooltip",required:!1,type:{name:"string | undefined"}},icon:{defaultValue:null,description:"Ikonet som ligger i knappen.",name:"icon",required:!1,type:{name:"SvgIcon | undefined"}},fullWidth:{defaultValue:null,description:"Knapp med full bredde.",name:"fullWidth",required:!1,type:{name:"boolean | undefined"}},href:{defaultValue:null,description:"URL for knapper som skal brukes som lenke. Knappen blir til et `<a>`-element.",name:"href",required:!1,type:{name:"string | undefined"}},target:{defaultValue:null,description:"Nativt target-attributt som kan spesifiseres når knappen er et `<a>`-element.",name:"target",required:!1,type:{name:"string | undefined"}},htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:'Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick" | "onFocus" | "onBlur" | "type"> | undefined'}}}}}catch{}export{k as B};
//# sourceMappingURL=Button-ce4ef2c9.js.map
