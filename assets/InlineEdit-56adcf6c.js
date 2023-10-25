import{a as e,j as t,F as m}from"./jsx-runtime-e43ccb36.js";import{M as p,C as r,b as o,A as d}from"./chunk-HLWAVYOI-64354447.js";import{C as s,L as c,c as u}from"./StoryTemplate-dc809fd5.js";import{S as h}from"./constants-69754a51.js";import{I as f}from"./InlineEdit.stories-e871880c.js";import{I}from"./InlineEditTextArea-a1853092.js";import{I as g}from"./InlineEditInput-d1b81b48.js";import{u as a}from"./index-2ef8b458.js";import"./index-1b03fe98.js";import"./iframe-5a5f529d.js";import"../sb-preview/runtime.js";import"./index-6d191f71.js";import"./index-6fd5a17b.js";import"./index-356e4a49.js";import"./ddsReferenceTokens-baf3ad90.js";import"./InlineEdit.utils-63cf848e.js";import"./BaseComponentProps-46424d28.js";import"./Input.styles-4c4ddd98.js";import"./Caption-1d5aeb22.js";import"./TextOverflowEllipsis-05821fa6.js";import"./Typography-9e3266f4.js";import"./Heading-862bf652.js";import"./Label-5ae0c148.js";import"./Legend-a1cc5017.js";import"./Link-15befa1a.js";import"./Paragraph-53be9306.js";import"./scrollbarStyling-4847117a.js";import"./ScrollableContainer.tokens-9daa2b8a.js";import"./VisuallyHidden-5e7c9103.js";import"./libraryAdd-ba36db88.js";import"./Icon-169fc8ae.js";import"./renderInputMessage-6de68c60.js";import"./InputMessage-a51d5a37.js";function l(i){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",ul:"ul",li:"li",h3:"h3"},a(),i.components);return t(m,{children:[e(p,{of:f}),`
`,e(n.h1,{id:"inlineedit",children:"InlineEdit"}),`
`,e(s,{docsHref:"https://design.domstol.no/987b33f71/p/767867-inlineedit",githubHref:"https://github.com/domstolene/designsystem/tree/main/packages/components/src/components/InlineEdit",figmaHref:"https://www.figma.com/file/ewqSDmkgqDQ5PyOsRp4V5b/DDS-Komponenter?node-id=9005%3A150044"}),`
`,e(n.h2,{id:"demo",children:"Demo"}),`
`,e(r,{children:e(o,{id:"dds-components-inlineedit-inlineeditinput--default"})}),`
`,e(r,{children:e(o,{id:"dds-components-inlineedit-inlineedittextarea--default"})}),`
`,e(c,{href:`${h}dds-components-inlineedit`}),`
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
`,t(n.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",e(n.code,{children:"InputHTMLAttributes<HTMLInputElement>"}),"-interface."]})]})}function J(i={}){const{wrapper:n}=Object.assign({},a(),i.components);return n?e(n,Object.assign({},i,{children:e(l,i)})):l(i)}export{J as default};
//# sourceMappingURL=InlineEdit-56adcf6c.js.map
