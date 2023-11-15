import{s as t,n as a}from"./ddsReferenceTokens-cf345c8b.js";import{f as c,a as u}from"./Input.styles-4ebb4961.js";import{s as p}from"./SelectionControl.tokens-2c806e25.js";const{selectionControl:e,container:n,checkmark:d,groupContainer:b,outerGroupContainer:f}=p,r=t.span`
  position: absolute;
  left: 0;
  box-sizing: border-box;
  border: ${e.base.border};
  border-color: ${e.base.borderColor};
  background-color: ${e.base.backgroundColor};
  border-radius: ${e.base.borderRadius};
  height: ${e.base.height};
  width: ${e.base.width};
  ${({controlType:o})=>o==="radio"&&a`
      border-radius: 50%;
    `}
  &:after {
    content: '';
    position: absolute;
    display: none;
  }
`,i=t.label`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  width: fit-content;
  color: ${n.color};
  ${({hasLabel:o})=>o?a`
          padding-left: ${n.withLabel.paddingLeft};
        `:a`
          padding: ${n.noLabel.padding};
        `}

  input ~ ${r} {
    @media (prefers-reduced-motion: no-preference) {
      transition:
        box-shadow 0.2s,
        background-color 0.2s,
        border 0.2s;
    }
  }

  &:focus-within {
    ${c}
    @media (prefers-reduced-motion: no-preference) {
      transition: ${u};
    }
  }

  &:hover input:enabled ~ ${r} {
    background-color: ${e.hover.base.backgroundColor};
    box-shadow: ${e.hover.base.boxShadow};
    border-color: ${e.hover.base.borderColor};
  }

  input:checked:enabled
    ~ ${r},
    input[data-indeterminate='true']
    ~ ${r} {
    border-color: ${e.checked.base.borderColor};
    background-color: ${e.checked.base.backgroundColor};
  }
  &:hover
    input:checked:enabled
    ~ ${r},
    &:hover
    input:enabled[data-indeterminate='true']
    ~ ${r} {
    background-color: ${e.checked.hover.backgroundColor};
    box-shadow: ${e.checked.hover.boxShadow};
    border-color: ${e.checked.hover.borderColor};
  }

  ${({error:o})=>o&&a`
      &:hover input:enabled ~ ${r} {
        background-color: ${e.hover.danger.backgroundColor};
        box-shadow: ${e.hover.danger.boxShadow};
        border-color: ${e.hover.danger.borderColor};
      }
      input
        ~ ${r},
        input:checked:enabled
        ~ ${r},
        &:hover
        input:checked:enabled
        ~ ${r} {
        box-shadow: ${e.danger.boxShadow};
        border-color: ${e.danger.borderColor};
      }
    `}
  input:disabled ~ ${r} {
    ${e.disabled}
  }
  input:checked:disabled
    ~ ${r},
    input:disabled[data-indeterminate='true']
    ~ ${r} {
    background-color: ${e.checked.disabled.backgroundColor};
    border-color: ${e.checked.disabled.borderColor};
  }
  input:checked
    ~ ${r}:after,
    input[data-indeterminate='true']
    ~ ${r}:after {
    display: block;
  }

  ${({disabled:o})=>o&&a`
      cursor: not-allowed;
      color: ${n.disabled.color};
    `}
  ${({controlType:o})=>o==="checkbox"?a`
          ${r}:after {
            border: solid ${d.checkbox.borderColor};

            border-width: 0 1px 1px 0;
            left: 35%;
            top: 10%;
            width: 30%;
            height: 65%;
            transform: rotate(45deg);
          }
          input[data-indeterminate='true'] ~ ${r}:after {
            border-width: 1px 0 0 0;
            left: 25%;
            top: 50%;
            width: 50%;
            height: 1px;
            transform: none;
          }
        `:a`
          ${r}:after {
            border-radius: 50%;
            background-color: ${d.radio.backgroundColor};
            width: ${d.radio.width};
            height: ${d.radio.height};
            left: ${d.radio.left};
            top: ${d.radio.top};
          }
        `}
`,l=t.div`
  display: flex;
  flex-direction: column;
  gap: ${f.gap};
`,s=t.div`
  display: flex;
  ${({direction:o})=>a`
    flex-direction: ${o};
    gap: ${b[o].gap};
  `}
`;try{r.displayName="CustomSelectionControl",r.__docgenInfo={description:"",displayName:"CustomSelectionControl",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}}}catch{}try{i.displayName="Container",i.__docgenInfo={description:"",displayName:"Container",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}}}catch{}try{l.displayName="OuterGroupContainer",l.__docgenInfo={description:"",displayName:"OuterGroupContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}}}catch{}try{s.displayName="GroupContainer",s.__docgenInfo={description:"",displayName:"GroupContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}}}catch{}export{i as C,s as G,l as O,r as a};
//# sourceMappingURL=SelectionControl.styles-84fdbed6.js.map
