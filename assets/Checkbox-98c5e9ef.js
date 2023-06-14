import{j as e,b as r,F as h}from"./focus-visible-17f12d09.js";import{M as p,e as t,f as i,g as c}from"./index-c0e0960b.js";import{p as s,S as m,M as a,F as b}from"./storybook-components-b7b7a39c.js";import{D as u,C as k}from"./Checkbox.stories-af036c55.js";import{D as f,C as g}from"./CheckboxGroup.stories-480afce3.js";import{u as d}from"./index-09fac16e.js";import"./index-c6dae603.js";import"./iframe-6efa2ccf.js";import"../sb-preview/runtime.js";import"./index-519f2600.js";import"./index-eb008d06.js";import"./Checkbox-b52e1b33.js";import"./BaseComponentProps-bb0d5515.js";import"./idGenerator-c29473b2.js";import"./SelectionControl.styles-68b3f525.js";import"./SelectionControl.tokens-23591f93.js";import"./hover-cea7b82c.js";import"./danger-18d99756.js";import"./focusVisible-bd00be70.js";import"./HiddenInput-280c3e4e.js";import"./Typography-ddbe86f6.js";import"./Typography.utils-3c68477b.js";import"./selection-dced972e.js";import"./color-0daeea22.js";import"./Input.utils-c0cbaed7.js";import"./InputMessage-ec06a7ed.js";import"./Icon-a968456f.js";import"./error-f74b99a0.js";import"./SvgWrapper-0812a1f2.js";import"./RequiredMarker-e4206fe2.js";function l(n){const o=Object.assign({h1:"h1",h2:"h2",h3:"h3",p:"p",code:"code",ul:"ul",li:"li"},d(),n.components);return r(h,{children:[e(p,{title:"dds-components/Checkbox/Docs"}),`
`,e(o.h1,{id:"checkbox",children:"Checkbox"}),`
`,e(s,{docsHref:"https://design.domstol.no/987b33f71/p/90d68f-checkbox/b/939219",figmaHref:"https://www.figma.com/file/ewqSDmkgqDQ5PyOsRp4V5b/?node-id=155%3A38",githubHref:"https://github.com/domstolene/designsystem/tree/master/components/src/components/Checkbox"}),`
`,e(o.h2,{id:"demo",children:"Demo"}),`
`,e(t,{children:e(i,{of:u})}),`
`,e(t,{children:e(i,{of:f})}),`
`,e(m,{href:`${a}dds-components-checkbox-checkbox`}),`
`,e(o.h2,{id:"bruk-i-koden",children:"Bruk i koden"}),`
`,e(b,{code:`
  import { Checkbox, CheckboxGroup } from '@norges-domstoler/dds-components';

<Checkbox label="Option" />

<CheckboxGroup label="Label">
  <Checkbox label="Option" />
  <Checkbox label="Option" />
</CheckboxGroup>
`}),`
`,e(o.h2,{id:"api",children:"API"}),`
`,e(o.h3,{id:"checkbox-1",children:"Checkbox"}),`
`,e(o.p,{children:"En avkrysningboks."}),`
`,e(c,{of:k}),`
`,r(o.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",e(o.code,{children:"InputHTMLAttributes<HTMLInputElement>"}),"-interface i ",e(o.code,{children:"htmlProps"}),`.
`,e(o.code,{children:"name"}),", ",e(o.code,{children:"checked"}),", ",e(o.code,{children:"defaultChecked"}),", ",e(o.code,{children:"value"}),", ",e(o.code,{children:"defaultValue"}),", ",e(o.code,{children:"onChange"}),", ",e(o.code,{children:"onBlur"})," er tilgjengelige på rotnivå."]}),`
`,e(o.h3,{id:"checkboxgroup",children:"CheckboxGroup"}),`
`,r(o.p,{children:["Wrapper for en ",e(o.code,{children:"<Checkbox />"})," gruppe. Brukes ved flere barn."]}),`
`,e(c,{of:g}),`
`,r(o.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",e(o.code,{children:"HTMLAttributes<HTMLDivElement>"}),"-interface i ",e(o.code,{children:"htmlProps"}),"."]}),`
`,e(o.h2,{id:"retningslinjer",children:"Retningslinjer"}),`
`,r(o.ul,{children:[`
`,r(o.li,{children:["Bruk ",e(o.code,{children:"onChange"}),` slik at brukeren kan få umiddelbar tilbakemelding på deres
input baser på validering.`]}),`
`,e(o.li,{children:"Det kan være lurt å lagre kladd av input i skjemaet brukeren fyller ut."}),`
`]})]})}function K(n={}){const{wrapper:o}=Object.assign({},d(),n.components);return o?e(o,Object.assign({},n,{children:e(l,n)})):l(n)}export{K as default};
//# sourceMappingURL=Checkbox-98c5e9ef.js.map
