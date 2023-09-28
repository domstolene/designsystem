import{s as k,A as n,j as q,F as W,a as d}from"./ddsReferenceTokens-647ce456.js";import{r as H}from"./index-ebeaab24.js";import"./libraryAdd-15469728.js";import{I as A}from"./Icon-e6324a43.js";import{s as F,g as D}from"./BaseComponentProps-a100791d.js";import{t as M,b as I}from"./Button.tokens-cb9e169d.js";import{n as R}from"./normalize-f756ee4b.js";import"./Caption-5c254d72.js";import"./Heading-dc72d0b9.js";import"./Label-23c96940.js";import"./Legend-dbc3ced6.js";import"./Link-9aff7843.js";import"./Paragraph-3340e0ea.js";import"./TextOverflowEllipsis-e3546c5b.js";import{g as K}from"./Typography-1747463b.js";import{a as U,f as J}from"./Input.styles-711330f2.js";import{S as O}from"./Spinner-866d56ff.js";const{button:{base:X,sizes:s,appearances:r}}=I,G=(e,o)=>{switch(e){case"filled":case"rounded":return n`
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
      `}},h=k.button`
  ${R}
  border: ${X.border};
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
      ${U};
  }

  ${({appearance:e,purpose:o})=>n`
      border-radius: ${r[e].base.borderRadius};
      box-shadow: ${r[e].base.boxShadow};
      color: ${r[e].purpose[o].base.color};
      ${G(e,o)}
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
      gap: ${s[t].textAndIcon.gap};
    `}

  ${({size:e,hasLabel:o})=>o?n`
          ${K(M[e])}
          padding: ${s[e].text.padding};
        `:n`
          font-size: ${s[e].justIcon.icon.fontSize};
          padding: ${s[e].justIcon.icon.padding};
        `}

  ${({fullWidth:e,hasIcon:o,hasLabel:t,isLoading:a,iconPosition:i})=>e&&(!o||!t||a?n`
          justify-content: center;
        `:o&&t&&i==="left"?n`
          justify-content: left;
        `:n`
          justify-content: space-between;
        `)}

  &:focus-visible, &.focus-visible {
    ${J}
  }

  *::selection {
    ${F}
  }
`,p=k.span`
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
      height: ${s[o].justIcon.wrapper.height};
      width: ${s[o].justIcon.wrapper.width};
    `}
`,y=k.span`
  ${({isHidden:e})=>e&&n`
      visibility: hidden;
    `}
`;try{h.displayName="ButtonWrapper",h.__docgenInfo={description:"",displayName:"ButtonWrapper",props:{purpose:{defaultValue:null,description:"",name:"purpose",required:!0,type:{name:"enum",value:[{value:'"danger"'},{value:'"primary"'},{value:'"secondary"'}]}},size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"tiny"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},iconPosition:{defaultValue:null,description:"",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"left"'},{value:'"right"'}]}},appearance:{defaultValue:null,description:"",name:"appearance",required:!0,type:{name:"enum",value:[{value:'"filled"'},{value:'"ghost"'},{value:'"rounded"'},{value:'"borderless"'}]}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!0,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!0,type:{name:"boolean"}},hasIcon:{defaultValue:null,description:"",name:"hasIcon",required:!0,type:{name:"boolean"}},hasLabel:{defaultValue:null,description:"",name:"hasLabel",required:!0,type:{name:"boolean"}}}}}catch{}try{p.displayName="StyledIconWrapperSpan",p.__docgenInfo={description:"",displayName:"StyledIconWrapperSpan",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"tiny"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},iconPosition:{defaultValue:null,description:"",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"left"'},{value:'"right"'}]}},absolutePosition:{defaultValue:null,description:"",name:"absolutePosition",required:!1,type:{name:"boolean | undefined"}},isHidden:{defaultValue:null,description:"",name:"isHidden",required:!1,type:{name:"boolean | undefined"}},justIcon:{defaultValue:null,description:"",name:"justIcon",required:!1,type:{name:"boolean | undefined"}}}}}catch{}try{y.displayName="Label",y.__docgenInfo={description:"",displayName:"Label",props:{isHidden:{defaultValue:null,description:"",name:"isHidden",required:!1,type:{name:"boolean | undefined"}}}}}catch{}const{button:{sizes:Q,appearances:Y}}=I,$=H.forwardRef((e,o)=>{const{label:t,purpose:a="primary",size:i="medium",iconPosition:m="left",appearance:_="filled",href:u,target:x,loading:l=!1,loadingTooltip:w="Lagring pågår",fullWidth:C=!1,icon:f,onClick:V,onFocus:S,onBlur:j,id:B,className:P,htmlProps:E,...L}=e,z=u?"a":"button",b=!!t,c=!!f,N={...D(B,P,E,L),href:u,label:t,as:z,rel:u?"noreferrer noopener":void 0,target:u&&x?x:void 0,ref:o,appearance:_,purpose:a,iconPosition:m,fullWidth:C,hasLabel:b,hasIcon:c,isLoading:l,size:i,onClick:T=>{!l&&V&&V(T)},onFocus:S,onBlur:j},g=!b&&c,v=f&&d(p,{size:i,isHidden:c&&l,justIcon:g,children:d(A,{icon:f,iconSize:"inherit"})});return q(h,{...N,"aria-disabled":l,children:[!g&&q(W,{children:[m==="left"&&v,d(y,{isHidden:l,"aria-hidden":l,children:t}),m==="right"&&v]}),g&&v,l&&d(p,{size:i,absolutePosition:c||b,children:d(O,{color:Y[_].purpose[a].base.color,size:Q[i].justIcon.icon.fontSize,tooltip:w})})]})});$.displayName="Button";try{$.displayName="Button",$.__docgenInfo={description:"",displayName:"Button",props:{size:{defaultValue:null,description:"Størrelsen på knappen.",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"tiny"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},label:{defaultValue:null,description:"Tekst i knappen.",name:"label",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>> | undefined"}},purpose:{defaultValue:null,description:"Bestemmer farger basert på formål.",name:"purpose",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"danger"'},{value:'"primary"'},{value:'"secondary"'}]}},iconPosition:{defaultValue:null,description:"Posisjonen til ikonet i forhold til teksten.",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"left"'},{value:'"right"'}]}},appearance:{defaultValue:null,description:"Bestemmer utseende på knappen, bl.a. bakgrunn, border radius og skygger.",name:"appearance",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"filled"'},{value:'"ghost"'},{value:'"rounded"'},{value:'"borderless"'}]}},loading:{defaultValue:null,description:"Indikerer en loading-knapp.",name:"loading",required:!1,type:{name:"boolean | undefined"}},loadingTooltip:{defaultValue:null,description:"Tooltip som vises ved loading.",name:"loadingTooltip",required:!1,type:{name:"string | undefined"}},icon:{defaultValue:null,description:"Ikonet som ligger i knappen.",name:"icon",required:!1,type:{name:"SvgIcon | undefined"}},fullWidth:{defaultValue:null,description:"Knapp med full bredde.",name:"fullWidth",required:!1,type:{name:"boolean | undefined"}},href:{defaultValue:null,description:"URL for knapper som skal brukes som lenke. Knappen blir til et `<a>`-element.",name:"href",required:!1,type:{name:"string | undefined"}},target:{defaultValue:null,description:"Nativt target-attributt som kan spesifiseres når knappen er et `<a>`-element.",name:"target",required:!1,type:{name:"string | undefined"}},htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:'Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onFocus" | "onBlur" | "onClick" | "type"> | undefined'}}}}}catch{}export{$ as B};
//# sourceMappingURL=Button-c6f32940.js.map
