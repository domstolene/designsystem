import{s as t,A as a}from"./ddsReferenceTokens-647ce456.js";import{f as s,a as u}from"./Input.styles-711330f2.js";import{s as p}from"./SelectionControl.tokens-57e1bf38.js";const{selectionControl:e,container:n,checkmark:d,groupContainer:b,outerGroupContainer:h}=p,o=t.span`
  position: absolute;
  left: 0;
  box-sizing: border-box;
  border: ${e.base.border};
  border-color: ${e.base.borderColor};
  background-color: ${e.base.backgroundColor};
  border-radius: ${e.base.borderRadius};
  height: ${e.base.height};
  width: ${e.base.width};
  ${({controlType:r})=>r==="radio"&&a`
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
  ${({hasLabel:r})=>r?a`
          padding-left: ${n.withLabel.paddingLeft};
        `:a`
          padding: ${n.noLabel.padding};
        `}

  input ~ ${o} {
    @media (prefers-reduced-motion: no-preference) {
      transition: box-shadow 0.2s, background-color 0.2s, border 0.2s;
    }
  }

  &:focus-within {
    ${s}
    @media (prefers-reduced-motion: no-preference) {
      transition: ${u};
    }
  }

  &:hover input:enabled ~ ${o} {
    background-color: ${e.hover.base.backgroundColor};
    box-shadow: ${e.hover.base.boxShadow};
    border-color: ${e.hover.base.borderColor};
  }

  input:checked:enabled
    ~ ${o},
    input[data-indeterminate='true']
    ~ ${o} {
    border-color: ${e.checked.base.borderColor};
    background-color: ${e.checked.base.backgroundColor};
  }
  &:hover
    input:checked:enabled
    ~ ${o},
    &:hover
    input:enabled[data-indeterminate='true']
    ~ ${o} {
    background-color: ${e.checked.hover.backgroundColor};
    box-shadow: ${e.checked.hover.boxShadow};
    border-color: ${e.checked.hover.borderColor};
  }

  ${({error:r})=>r&&a`
      &:hover input:enabled ~ ${o} {
        background-color: ${e.hover.danger.backgroundColor};
        box-shadow: ${e.hover.danger.boxShadow};
        border-color: ${e.hover.danger.borderColor};
      }
      input
        ~ ${o},
        input:checked:enabled
        ~ ${o},
        &:hover
        input:checked:enabled
        ~ ${o} {
        box-shadow: ${e.danger.boxShadow};
        border-color: ${e.danger.borderColor};
      }
    `}
  input:disabled ~ ${o} {
    ${e.disabled}
  }
  input:checked:disabled
    ~ ${o},
    input:disabled[data-indeterminate='true']
    ~ ${o} {
    background-color: ${e.checked.disabled.backgroundColor};
    border-color: ${e.checked.disabled.borderColor};
  }
  input:checked
    ~ ${o}:after,
    input[data-indeterminate='true']
    ~ ${o}:after {
    display: block;
  }

  ${({disabled:r})=>r&&a`
      cursor: not-allowed;
      color: ${n.disabled.color};
    `}
  ${({controlType:r})=>r==="checkbox"?a`
          ${o}:after {
            border: solid ${d.checkbox.borderColor};

            border-width: 0 1px 1px 0;
            left: 35%;
            top: 10%;
            width: 30%;
            height: 65%;
            transform: rotate(45deg);
          }
          input[data-indeterminate='true'] ~ ${o}:after {
            border-width: 1px 0 0 0;
            left: 25%;
            top: 50%;
            width: 50%;
            height: 1px;
            transform: none;
          }
        `:a`
          ${o}:after {
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
  gap: ${h.gap};
`,c=t.div`
  display: flex;
  ${({direction:r})=>a`
    flex-direction: ${r};
    gap: ${b[r].gap};
  `}
`;try{o.displayName="CustomSelectionControl",o.__docgenInfo={description:"",displayName:"CustomSelectionControl",props:{controlType:{defaultValue:null,description:"",name:"controlType",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"checkbox"'},{value:'"radio"'}]}}}}}catch{}try{i.displayName="Container",i.__docgenInfo={description:"",displayName:"Container",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean | undefined"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean | undefined"}},indeterminate:{defaultValue:null,description:"",name:"indeterminate",required:!1,type:{name:"boolean | undefined"}},hasLabel:{defaultValue:null,description:"",name:"hasLabel",required:!1,type:{name:"boolean | undefined"}},controlType:{defaultValue:null,description:"",name:"controlType",required:!0,type:{name:"enum",value:[{value:'"checkbox"'},{value:'"radio"'}]}}}}}catch{}try{l.displayName="OuterGroupContainer",l.__docgenInfo={description:"",displayName:"OuterGroupContainer",props:{}}}catch{}try{c.displayName="GroupContainer",c.__docgenInfo={description:"",displayName:"GroupContainer",props:{direction:{defaultValue:null,description:"",name:"direction",required:!0,type:{name:"enum",value:[{value:'"row"'},{value:'"column"'}]}}}}}catch{}export{i as C,c as G,l as O,o as a};
//# sourceMappingURL=SelectionControl.styles-beb89cd4.js.map
