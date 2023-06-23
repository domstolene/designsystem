import{s as n,A as d}from"./focus-visible-c2e9b88d.js";import{s as i}from"./SelectionControl.tokens-d2ad3e9d.js";import{f as c,a as l}from"./focusVisible-75802ac7.js";const{selectionControl:o,container:t,checkmark:a,groupContainer:b,outerGroupContainer:s}=i,e=n.span`
  position: absolute;
  left: 0;
  box-sizing: border-box;
  border: ${o.base.border};
  border-color: ${o.base.borderColor};
  background-color: ${o.base.backgroundColor};
  border-radius: ${o.base.borderRadius};
  height: ${o.base.height};
  width: ${o.base.width};
  ${({controlType:r})=>r==="radio"&&d`
      border-radius: 50%;
    `}
  &:after {
    content: '';
    position: absolute;
    display: none;
  }
`,p=n.label`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  width: fit-content;
  color: ${t.color};
  ${({hasLabel:r})=>r?d`
          padding-left: ${t.withLabel.paddingLeft};
        `:d`
          padding: ${t.noLabel.padding};
        `}

  input ~ ${e} {
    @media (prefers-reduced-motion: no-preference) {
      transition: box-shadow 0.2s, background-color 0.2s, border 0.2s;
    }
  }

  &:focus-within {
    ${c}
    @media (prefers-reduced-motion: no-preference) {
      transition: ${l};
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

  ${({error:r})=>r&&d`
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

  ${({disabled:r})=>r&&d`
      cursor: not-allowed;
      color: ${t.disabled.color};
    `}
  ${({controlType:r})=>r==="checkbox"?d`
          ${e}:after {
            border: solid ${a.checkbox.borderColor};

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
        `:d`
          ${e}:after {
            border-radius: 50%;
            background-color: ${a.radio.backgroundColor};
            width: ${a.radio.width};
            height: ${a.radio.height};
            left: ${a.radio.left};
            top: ${a.radio.top};
          }
        `}
`,g=n.div`
  display: flex;
  flex-direction: column;
  gap: ${s.gap};
`,k=n.div`
  display: flex;
  ${({direction:r})=>d`
    flex-direction: ${r};
    gap: ${b[r].gap};
  `}
`;export{p as C,k as G,g as O,e as a};
//# sourceMappingURL=SelectionControl.styles-eecae4b0.js.map