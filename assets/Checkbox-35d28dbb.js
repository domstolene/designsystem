import{a as e,j as r,F as h}from"./focus-visible-8467fd8b.js";import{M as s,C as t,e as i,A as c}from"./chunk-PCJTTTQV-aabcbb96.js";import{p as a,S as p,M as m,F as b}from"./storybook-components-76b2a6b1.js";import{D as u,C as k}from"./Checkbox.stories-d3c1bc5a.js";import{D as f,C as g}from"./CheckboxGroup.stories-7f063e27.js";import{u as d}from"./index-6fa374d0.js";import"./index-d47b1f5a.js";import"./iframe-59584ab4.js";import"../sb-preview/runtime.js";import"./index-db9ff070.js";import"./index-d475d2ea.js";import"./index-356e4a49.js";import"./Checkbox-91dc5475.js";import"./dds-core-b89b291f.js";import"./dds-typography-4e6445f7.js";import"./SelectionControl.styles-3c02eecd.js";import"./dds-form-9dbc5b3d.js";import"./SelectionControl.tokens-59c4890b.js";import"./renderInputMessage-6d8b7416.js";import"./InputMessage-f11a61e2.js";import"./dds-icons-f9255b51.js";function l(o){const n=Object.assign({h1:"h1",h2:"h2",h3:"h3",p:"p",code:"code",ul:"ul",li:"li"},d(),o.components);return r(h,{children:[e(s,{title:"dds-components/Checkbox/Docs"}),`
`,e(n.h1,{id:"checkbox",children:"Checkbox"}),`
`,e(a,{docsHref:"https://design.domstol.no/987b33f71/p/90d68f-checkbox/b/939219",figmaHref:"https://www.figma.com/file/ewqSDmkgqDQ5PyOsRp4V5b/?node-id=155%3A38",githubHref:"https://github.com/domstolene/designsystem/tree/master/components/src/components/Checkbox"}),`
`,e(n.h2,{id:"demo",children:"Demo"}),`
`,e(t,{children:e(i,{of:u})}),`
`,e(t,{children:e(i,{of:f})}),`
`,e(p,{href:`${m}dds-components-checkbox-checkbox`}),`
`,e(n.h2,{id:"bruk-i-koden",children:"Bruk i koden"}),`
`,e(b,{code:`
  import { Checkbox, CheckboxGroup } from '@norges-domstoler/dds-components';

<Checkbox label="Option" />

<CheckboxGroup label="Label">
  <Checkbox label="Option" />
  <Checkbox label="Option" />
</CheckboxGroup>
`}),`
`,e(n.h2,{id:"api",children:"API"}),`
`,e(n.h3,{id:"checkbox-1",children:"Checkbox"}),`
`,e(n.p,{children:"En avkrysningboks."}),`
`,e(c,{of:k}),`
`,r(n.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",e(n.code,{children:"InputHTMLAttributes<HTMLInputElement>"}),"-interface i ",e(n.code,{children:"htmlProps"}),`.
`,e(n.code,{children:"name"}),", ",e(n.code,{children:"checked"}),", ",e(n.code,{children:"defaultChecked"}),", ",e(n.code,{children:"value"}),", ",e(n.code,{children:"defaultValue"}),", ",e(n.code,{children:"onChange"}),", ",e(n.code,{children:"onBlur"})," er tilgjengelige på rotnivå."]}),`
`,e(n.h3,{id:"checkboxgroup",children:"CheckboxGroup"}),`
`,r(n.p,{children:["Wrapper for en ",e(n.code,{children:"<Checkbox />"})," gruppe. Brukes ved flere barn."]}),`
`,e(c,{of:g}),`
`,r(n.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",e(n.code,{children:"HTMLAttributes<HTMLDivElement>"}),"-interface i ",e(n.code,{children:"htmlProps"}),"."]}),`
`,e(n.h2,{id:"retningslinjer",children:"Retningslinjer"}),`
`,r(n.ul,{children:[`
`,r(n.li,{children:["Bruk ",e(n.code,{children:"onChange"}),` slik at brukeren kan få umiddelbar tilbakemelding på deres
input baser på validering.`]}),`
`,e(n.li,{children:"Det kan være lurt å lagre kladd av input i skjemaet brukeren fyller ut."}),`
`]})]})}function q(o={}){const{wrapper:n}=Object.assign({},d(),o.components);return n?e(n,Object.assign({},o,{children:e(l,o)})):l(o)}export{q as default};
//# sourceMappingURL=Checkbox-35d28dbb.js.map
