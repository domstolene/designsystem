import{a as e,j as t,F as s}from"./ddsReferenceTokens-647ce456.js";import{M as m,C as r,b as o,A as d}from"./chunk-S4VUQJ4A-45bcf0b3.js";import{C as p,L as c,c as u}from"./StoryTemplate-40ed0c91.js";import{S as h}from"./constants-69754a51.js";import{I as f}from"./InlineEdit.stories-2e4b626c.js";import{I}from"./InlineEditTextArea-2a8c8304.js";import{I as g}from"./InlineEditInput-6a017733.js";import{u as a}from"./index-bda0bad7.js";import"./index-ebeaab24.js";import"./iframe-04aa59bd.js";import"../sb-preview/runtime.js";import"./index-72bda2b9.js";import"./index-9c09ad76.js";import"./index-356e4a49.js";import"./InlineEdit.utils-b013c397.js";import"./BaseComponentProps-a100791d.js";import"./Input.styles-115c96a3.js";import"./Caption-0ff47cfa.js";import"./TextOverflowEllipsis-e3546c5b.js";import"./Typography-d54ea9fd.js";import"./Heading-ded557b4.js";import"./Label-b7852367.js";import"./Legend-d58c0461.js";import"./Link-037ca604.js";import"./Paragraph-a74f99d8.js";import"./scrollbarStyling-d0d816c9.js";import"./ScrollableContainer.tokens-e480b498.js";import"./VisuallyHidden-d3f4e065.js";import"./libraryAdd-35e18a4f.js";import"./Icon-42793503.js";import"./renderInputMessage-cc09d168.js";import"./InputMessage-53e4c8ef.js";function l(i){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",ul:"ul",li:"li",h3:"h3"},a(),i.components);return t(s,{children:[e(m,{of:f}),`
`,e(n.h1,{id:"inlineedit",children:"InlineEdit"}),`
`,e(p,{docsHref:"https://design.domstol.no/987b33f71/p/767867-inlineedit",githubHref:"https://github.com/domstolene/designsystem/tree/main/packages/components/src/components/InlineEdit",figmaHref:"https://www.figma.com/file/ewqSDmkgqDQ5PyOsRp4V5b/DDS-Komponenter?node-id=9005%3A150044"}),`
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
`,t(n.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",e(n.code,{children:"InputHTMLAttributes<HTMLInputElement>"}),"-interface."]})]})}function z(i={}){const{wrapper:n}=Object.assign({},a(),i.components);return n?e(n,Object.assign({},i,{children:e(l,i)})):l(i)}export{z as default};
//# sourceMappingURL=InlineEdit-4ba1324e.js.map
