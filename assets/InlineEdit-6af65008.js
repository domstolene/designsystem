import{a as e,j as t,F as s}from"./focus-visible-8467fd8b.js";import{M as c,C as r,e as o,A as d}from"./chunk-PCJTTTQV-2c75a859.js";import{p,S as m,M as h,F as u}from"./storybook-components-e4c55958.js";import{I as f}from"./InlineEdit.stories-9cebcf07.js";import{I}from"./InlineEditTextArea-e41bea26.js";import{I as g}from"./InlineEditInput-5affccd1.js";import{u as a}from"./index-6fa374d0.js";import"./index-d47b1f5a.js";import"./iframe-d6f86d24.js";import"../sb-preview/runtime.js";import"./index-db9ff070.js";import"./index-d475d2ea.js";import"./index-356e4a49.js";import"./InlineEdit.utils-99c0a3bd.js";import"./dds-core-b89b291f.js";import"./dds-form-9dbc5b3d.js";import"./dds-typography-4e6445f7.js";import"./scrollbarStyling-b67d8d39.js";import"./ScrollableContainer.tokens-a52bc549.js";import"./VisuallyHidden-0fcd4355.js";import"./dds-icons-f9255b51.js";import"./renderInputMessage-6d8b7416.js";import"./InputMessage-f11a61e2.js";function l(i){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",ul:"ul",li:"li",h3:"h3"},a(),i.components);return t(s,{children:[e(c,{of:f}),`
`,e(n.h1,{id:"inlineedit",children:"InlineEdit"}),`
`,e(p,{docsHref:"https://design.domstol.no/987b33f71/p/767867-inlineedit",githubHref:"https://github.com/domstolene/designsystem/tree/master/components/src/components/InlineEdit",figmaHref:"https://www.figma.com/file/ewqSDmkgqDQ5PyOsRp4V5b/DDS-Komponenter?node-id=9005%3A150044"}),`
`,e(n.h2,{id:"demo",children:"Demo"}),`
`,e(r,{children:e(o,{id:"dds-components-inlineedit-inlineeditinput--default"})}),`
`,e(r,{children:e(o,{id:"dds-components-inlineedit-inlineedittextarea--default"})}),`
`,e(m,{href:`${h}dds-components-inlineedit`}),`
`,e(n.h2,{id:"oversikt",children:"Oversikt"}),`
`,t(n.p,{children:[e(n.code,{children:"<InlineEdit>"}),"-komponentene håndterer inline redigering, f.eks i tabeller. Vi har følgende komponenter:"]}),`
`,t(n.ul,{children:[`
`,t(n.li,{children:[e(n.code,{children:"<InlineEditInput />"})," - returnerer ",e(n.code,{children:"<input>"}),"."]}),`
`,t(n.li,{children:[e(n.code,{children:"<InlineEditTextArea />"})," - returnerer ",e(n.code,{children:"<textarea>"}),"."]}),`
`]}),`
`,e(n.h2,{id:"bruk-i-koden",children:"Bruk i koden"}),`
`,e(u,{code:`import { InlineEditInput, InlineEditTextArea } fra '@norges-domstoler/dds-components';

const [value, setValue] = useState('');

<InlineEditInput value={value} onSetValue={setValue} />
<InlineEditTextArea value={value} onSetValue={setValue} />

`}),`
`,e(n.h2,{id:"api",children:"API"}),`
`,e(n.h3,{id:"inlineedittextarea",children:"InlineEditTextArea"}),`
`,t(n.p,{children:["Inputfeltet. Returnerer ",e(n.code,{children:"<textarea>"}),"."]}),`
`,e(d,{of:I}),`
`,t(n.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",e(n.code,{children:"TextareaHTMLAttributes<HTMLTextAreaElement>"}),"-interface."]}),`
`,e(n.h3,{id:"inlineeditinput",children:"InlineEditInput"}),`
`,t(n.p,{children:["Inputfeltet. Returnerer ",e(n.code,{children:"<input>"}),"."]}),`
`,e(d,{of:g}),`
`,t(n.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",e(n.code,{children:"InputHTMLAttributes<HTMLInputElement>"}),"-interface."]})]})}function _(i={}){const{wrapper:n}=Object.assign({},a(),i.components);return n?e(n,Object.assign({},i,{children:e(l,i)})):l(i)}export{_ as default};
//# sourceMappingURL=InlineEdit-6af65008.js.map