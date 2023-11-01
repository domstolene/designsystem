import{s as n,n as a}from"./ddsReferenceTokens-fe3c594e.js";import{f as s,a as b}from"./Input.styles-d07d27d7.js";import{s as p}from"./SelectionControl.tokens-6dad7fff.js";const{selectionControl:o,container:t,checkmark:d,groupContainer:u,outerGroupContainer:h}=p,e=n.span`
  position: absolute;
  left: 0;
  box-sizing: border-box;
  border: ${o.base.border};
  border-color: ${o.base.borderColor};
  background-color: ${o.base.backgroundColor};
  border-radius: ${o.base.borderRadius};
  height: ${o.base.height};
  width: ${o.base.width};
  ${({controlType:r})=>r==="radio"&&a`
      border-radius: 50%;
    `}
  &:after {
    content: '';
    position: absolute;
    display: none;
  }
`,i=n.label`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  width: fit-content;
  color: ${t.color};
  ${({hasLabel:r})=>r?a`
          padding-left: ${t.withLabel.paddingLeft};
        `:a`
          padding: ${t.noLabel.padding};
        `}

  input ~ ${e} {
    @media (prefers-reduced-motion: no-preference) {
      transition:
        box-shadow 0.2s,
        background-color 0.2s,
        border 0.2s;
    }
  }

  &:focus-within {
    ${s}
    @media (prefers-reduced-motion: no-preference) {
      transition: ${b};
    }
  }

  &:hover input:enabled ~ ${e} {
    background-color: ${o.hover.base.backgroundColor};
    box-shadow: ${o.hover.base.boxShadow};
    border-color: ${o.hover.base.borderColor};
  }

  input:checked:enabled
    ~ ${e},
    input[data-indeterminate='true']
    ~ ${e} {
    border-color: ${o.checked.base.borderColor};
    background-color: ${o.checked.base.backgroundColor};
  }
  &:hover
    input:checked:enabled
    ~ ${e},
    &:hover
    input:enabled[data-indeterminate='true']
    ~ ${e} {
    background-color: ${o.checked.hover.backgroundColor};
    box-shadow: ${o.checked.hover.boxShadow};
    border-color: ${o.checked.hover.borderColor};
  }

  ${({error:r})=>r&&a`
      &:hover input:enabled ~ ${e} {
        background-color: ${o.hover.danger.backgroundColor};
        box-shadow: ${o.hover.danger.boxShadow};
        border-color: ${o.hover.danger.borderColor};
      }
      input
        ~ ${e},
        input:checked:enabled
        ~ ${e},
        &:hover
        input:checked:enabled
        ~ ${e} {
        box-shadow: ${o.danger.boxShadow};
        border-color: ${o.danger.borderColor};
      }
    `}
  input:disabled ~ ${e} {
    ${o.disabled}
  }
  input:checked:disabled
    ~ ${e},
    input:disabled[data-indeterminate='true']
    ~ ${e} {
    background-color: ${o.checked.disabled.backgroundColor};
    border-color: ${o.checked.disabled.borderColor};
  }
  input:checked
    ~ ${e}:after,
    input[data-indeterminate='true']
    ~ ${e}:after {
    display: block;
  }

  ${({disabled:r})=>r&&a`
      cursor: not-allowed;
      color: ${t.disabled.color};
    `}
  ${({controlType:r})=>r==="checkbox"?a`
          ${e}:after {
            border: solid ${d.checkbox.borderColor};

            border-width: 0 1px 1px 0;
            left: 35%;
            top: 10%;
            width: 30%;
            height: 65%;
            transform: rotate(45deg);
          }
          input[data-indeterminate='true'] ~ ${e}:after {
            border-width: 1px 0 0 0;
            left: 25%;
            top: 50%;
            width: 50%;
            height: 1px;
            transform: none;
          }
        `:a`
          ${e}:after {
            border-radius: 50%;
            background-color: ${d.radio.backgroundColor};
            width: ${d.radio.width};
            height: ${d.radio.height};
            left: ${d.radio.left};
            top: ${d.radio.top};
          }
        `}
`,c=n.div`
  display: flex;
  flex-direction: column;
  gap: ${h.gap};
`,l=n.div`
  display: flex;
  ${({direction:r})=>a`
    flex-direction: ${r};
    gap: ${u[r].gap};
  `}
`;try{e.displayName="CustomSelectionControl",e.__docgenInfo={description:"",displayName:"CustomSelectionControl",props:{}}}catch{}try{i.displayName="Container",i.__docgenInfo={description:"",displayName:"Container",props:{}}}catch{}try{c.displayName="OuterGroupContainer",c.__docgenInfo={description:"",displayName:"OuterGroupContainer",props:{}}}catch{}try{l.displayName="GroupContainer",l.__docgenInfo={description:"",displayName:"GroupContainer",props:{}}}catch{}export{i as C,l as G,c as O,e as a};
//# sourceMappingURL=SelectionControl.styles-8b2cd5b5.js.map
