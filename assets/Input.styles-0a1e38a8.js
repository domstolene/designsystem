import{s as a,A as t}from"./focus-visible-c2e9b88d.js";import{f as n,i as d,a as i,b as s}from"./Input.tokens-0612e464.js";import{d as p}from"./Typography.utils-99dd1e07.js";import{h as l,a as c}from"./hover-d616d034.js";import{d as b}from"./danger-157ad055.js";import{s as u}from"./selection-fae9d0a8.js";const{input:o,container:$}=s,f=a.input`
  position: relative;
  color: ${o.base.color};
  border-radius: ${o.base.borderRadius};
  border: ${o.base.border};
  border-color: ${o.base.borderColor};
  background-color: ${o.base.backgroundColor};
  padding: ${o.base.padding};
  width: 100%;
  margin: 0;
  box-sizing: border-box;
  box-shadow: none;
  @media (prefers-reduced-motion: no-preference) {
    transition: box-shadow 0.2s, border-color 0.2s, background-color 0.2s;
  }
  &[type='text'],
  &[type='password'],
  &[type='number'],
  &[type='tel'],
  &[type='date'],
  &[type='url'],
  &[type='email'],
  &[type='search'],
  &[type='datetime-local'] {
    -webkit-appearance: none;
  }
  &::selection {
    ${u}
  }

  &:hover:enabled:read-write {
    ${l}
  }
  &:focus:enabled:read-write,
  &:active:enabled:read-write {
    ${n}
  }
`,I=a(f)`
  -webkit-appearance: textfield;

  padding-left: ${({prefixLength:e,readOnly:r})=>e&&(r?`${e}px !important`:`calc(${o.affix.gap}px + ${e}px) !important`)};
  padding-right: ${({suffixLength:e,readOnly:r})=>e&&(r?`${e}px !important`:`calc(${o.affix.gap}px + ${e}px) !important`)};
  ${({componentSize:e})=>e&&t`
      padding: ${o.sizes[e].padding};
      ${p(d[e])}
    `}

  ${({hasErrorMessage:e})=>e&&t`
      ${b}
      &:hover:enabled:read-write {
        ${c}
      }
      &:focus:enabled:read-write,
      &:active:enabled:read-write {
        ${i}
      }
    `}
  &:enabled:read-only {
    border: none;
    outline: none;
    cursor: default;
    background-color: ${o.readOnly.backgroundColor};
    padding-left: 0;
  }
  &:disabled {
    cursor: not-allowed;
    color: ${o.disabled.color};
    background-color: ${o.disabled.backgroundColor};
  }
`,k=a.div`
  position: relative;
  gap: ${$.gap};
  width: ${({width:e})=>e};
`,h=a.div`
  position: relative;
`,C=a.div`
  position: relative;
  display: flex;
  align-items: center;
`;export{h as I,k as O,I as S,C as a,f as b};
//# sourceMappingURL=Input.styles-0a1e38a8.js.map
