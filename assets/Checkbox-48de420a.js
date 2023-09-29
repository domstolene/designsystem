import{a as e,j as r,F as h}from"./ddsReferenceTokens-647ce456.js";import{M as s,C as t,b as i,A as c}from"./chunk-S4VUQJ4A-a3a44c7b.js";import{C as p,L as a,c as m}from"./StoryTemplate-1d63849e.js";import{S as b}from"./constants-69754a51.js";import{D as u,C as k}from"./Checkbox.stories-37f47aed.js";import{D as f,C as g}from"./CheckboxGroup.stories-f9aa53aa.js";import{u as d}from"./index-bda0bad7.js";import"./index-ebeaab24.js";import"./iframe-c30bd5c4.js";import"../sb-preview/runtime.js";import"./index-72bda2b9.js";import"./index-9c09ad76.js";import"./index-356e4a49.js";import"./Checkbox-9b783ae7.js";import"./BaseComponentProps-a100791d.js";import"./Caption-0ff47cfa.js";import"./TextOverflowEllipsis-e3546c5b.js";import"./Typography-d54ea9fd.js";import"./Heading-ded557b4.js";import"./Label-b7852367.js";import"./Legend-d58c0461.js";import"./Link-037ca604.js";import"./Paragraph-a74f99d8.js";import"./SelectionControl.styles-15780012.js";import"./Input.styles-115c96a3.js";import"./SelectionControl.tokens-e5dfef0c.js";import"./CheckboxGroup-bac79c69.js";import"./renderInputMessage-cc09d168.js";import"./InputMessage-53e4c8ef.js";import"./libraryAdd-35e18a4f.js";import"./Icon-42793503.js";function l(n){const o=Object.assign({h1:"h1",h2:"h2",h3:"h3",p:"p",code:"code",ul:"ul",li:"li"},d(),n.components);return r(h,{children:[e(s,{title:"dds-components/Checkbox/Docs"}),`
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
//# sourceMappingURL=Checkbox-48de420a.js.map
