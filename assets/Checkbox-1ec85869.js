import{a as e,j as r,F as h}from"./ddsReferenceTokens-ceb64027.js";import{M as s,C as t,b as i,A as c}from"./chunk-S4VUQJ4A-ad672bc2.js";import{C as p,L as a,c as m}from"./StoryTemplate-a2fc1fbf.js";import{S as b}from"./constants-69754a51.js";import{D as u,C as k}from"./Checkbox.stories-e4e00be7.js";import{D as f,C as g}from"./CheckboxGroup.stories-72f84022.js";import{u as d}from"./index-2ef8b458.js";import"./index-1b03fe98.js";import"./iframe-a8fd349f.js";import"../sb-preview/runtime.js";import"./index-4a89c107.js";import"./index-6fd5a17b.js";import"./index-356e4a49.js";import"./Checkbox-a1390961.js";import"./BaseComponentProps-d435d0d0.js";import"./Caption-d066edab.js";import"./TextOverflowEllipsis-e584ab25.js";import"./Typography-56baa34a.js";import"./Heading-d8600f49.js";import"./Label-10c93eb5.js";import"./Legend-0cba57ca.js";import"./Link-7a88da71.js";import"./Paragraph-5ad16720.js";import"./SelectionControl.styles-d57b33ef.js";import"./Input.styles-82cfcbdb.js";import"./SelectionControl.tokens-2517209c.js";import"./CheckboxGroup-8288039d.js";import"./renderInputMessage-f9f6fa34.js";import"./InputMessage-5b25ea30.js";import"./libraryAdd-931d79ee.js";import"./Icon-72ef85ba.js";function l(n){const o=Object.assign({h1:"h1",h2:"h2",h3:"h3",p:"p",code:"code",ul:"ul",li:"li"},d(),n.components);return r(h,{children:[e(s,{title:"dds-components/Checkbox/Docs"}),`
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
`]})]})}function z(n={}){const{wrapper:o}=Object.assign({},d(),n.components);return o?e(o,Object.assign({},n,{children:e(l,n)})):l(n)}export{z as default};
//# sourceMappingURL=Checkbox-1ec85869.js.map
