import{j as e,a as r,F as h}from"./focus-visible-35158c22.js";import{M as s,C as t,e as i,A as c}from"./chunk-PCJTTTQV-2606e572.js";import{p as a,S as p,M as m,F as b}from"./storybook-components-e24cb579.js";import{D as u,C as k}from"./Checkbox.stories-6dcf81e3.js";import{D as f,C as g}from"./CheckboxGroup.stories-1921a76f.js";import{u as d}from"./index-6fa374d0.js";import"./index-d47b1f5a.js";import"./iframe-43596611.js";import"../sb-preview/runtime.js";import"./index-db9ff070.js";import"./index-d475d2ea.js";import"./index-356e4a49.js";import"./Checkbox-a687bc4d.js";import"./dds-core-29d22035.js";import"./dds-typography-e761338c.js";import"./SelectionControl.styles-62366bb1.js";import"./dds-form-b2eacd8d.js";import"./SelectionControl.tokens-868e91dc.js";import"./renderInputMessage-3a3d5367.js";import"./InputMessage-7bbeab57.js";import"./dds-icons-7a922c3a.js";function l(o){const n=Object.assign({h1:"h1",h2:"h2",h3:"h3",p:"p",code:"code",ul:"ul",li:"li"},d(),o.components);return r(h,{children:[e(s,{title:"dds-components/Checkbox/Docs"}),`
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
//# sourceMappingURL=Checkbox-3f861348.js.map
