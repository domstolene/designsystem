import{a as e,j as r,F as h}from"./jsx-runtime-e43ccb36.js";import{M as s,C as t,b as i,A as c}from"./chunk-HLWAVYOI-3e05d052.js";import{C as p,L as a,c as m}from"./StoryTemplate-6a95b3b2.js";import{S as b}from"./constants-c672c5f8.js";import{D as u,C as k}from"./Checkbox.stories-ee93d678.js";import{D as f,C as g}from"./CheckboxGroup.stories-5e44d93b.js";import{u as d}from"./index-2ef8b458.js";import"./index-1b03fe98.js";import"./iframe-32b856a7.js";import"../sb-preview/runtime.js";import"./index-6d191f71.js";import"./index-6fd5a17b.js";import"./index-356e4a49.js";import"./ddsReferenceTokens-cf345c8b.js";import"./Checkbox-51f24ad0.js";import"./BaseComponentProps-77dc9c6e.js";import"./Caption-956f7c23.js";import"./TextOverflowEllipsis-5f7b5b23.js";import"./Typography-aec60abc.js";import"./Heading-1a21ccc8.js";import"./Label-1e45d63d.js";import"./Legend-8f4b1074.js";import"./Link-1d242339.js";import"./Paragraph-6d49c218.js";import"./SelectionControl.styles-84fdbed6.js";import"./Input.styles-4ebb4961.js";import"./SelectionControl.tokens-2c806e25.js";import"./CheckboxGroup-d06a085b.js";import"./renderInputMessage-6c0b2de9.js";import"./InputMessage-8b65ffa3.js";import"./libraryAdd-1d1f72ea.js";import"./Icon-764411b5.js";function l(n){const o=Object.assign({h1:"h1",h2:"h2",h3:"h3",p:"p",code:"code",ul:"ul",li:"li"},d(),n.components);return r(h,{children:[e(s,{title:"dds-components/Checkbox/Docs"}),`
`,e(o.h1,{id:"checkbox",children:"Checkbox"}),`
`,e(p,{docsHref:"https://design.domstol.no/987b33f71/p/90d68f-checkbox/b/939219",figmaHref:"https://www.figma.com/file/ewqSDmkgqDQ5PyOsRp4V5b/?node-id=155%3A38",githubHref:"https://github.com/domstolene/designsystem/tree/main/packages/components/src/components/Checkbox"}),`
`,e(o.h2,{id:"demo",children:"Demo"}),`
`,e(t,{children:e(i,{of:u})}),`
`,e(t,{children:e(i,{of:f})}),`
`,e(a,{href:`${b}dds-components-checkbox-checkbox`}),`
`,e(o.h2,{id:"bruk-i-koden",children:"Bruk i koden"}),`
`,e(m,{code:`
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
`]})]})}function J(n={}){const{wrapper:o}=Object.assign({},d(),n.components);return o?e(o,Object.assign({},n,{children:e(l,n)})):l(n)}export{J as default};
//# sourceMappingURL=Checkbox-8c361769.js.map
