import{a as e,j as t,F as m}from"./jsx-runtime-e43ccb36.js";import{M as p,C as r,b as o,A as d}from"./chunk-HLWAVYOI-1a3dfe52.js";import{C as s,L as c,c as u}from"./StoryTemplate-f63f16be.js";import{S as h}from"./constants-69754a51.js";import{I as f}from"./InlineEdit.stories-57aa22ea.js";import{I}from"./InlineEditTextArea-b8692c8c.js";import{I as g}from"./InlineEditInput-c62fd18c.js";import{u as a}from"./index-2ef8b458.js";import"./index-1b03fe98.js";import"./iframe-25d93a6c.js";import"../sb-preview/runtime.js";import"./index-6d191f71.js";import"./index-6fd5a17b.js";import"./index-356e4a49.js";import"./ddsReferenceTokens-cf345c8b.js";import"./InlineEdit.utils-13ff7258.js";import"./BaseComponentProps-c04e3b0f.js";import"./Input.styles-cd9d8463.js";import"./Caption-c95a25e6.js";import"./TextOverflowEllipsis-a0e35774.js";import"./Typography-8df5b43e.js";import"./Heading-eb094a5f.js";import"./Label-7698c3d3.js";import"./Legend-90ca2ccd.js";import"./Link-a0d6f9b6.js";import"./Paragraph-74ee9681.js";import"./scrollbarStyling-5c8dd8e6.js";import"./ScrollableContainer.tokens-2f8b82e4.js";import"./VisuallyHidden-305031f2.js";import"./libraryAdd-bb03a5d3.js";import"./Icon-feef9230.js";import"./renderInputMessage-5eb10a8a.js";import"./InputMessage-0bc16530.js";function l(i){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",ul:"ul",li:"li",h3:"h3"},a(),i.components);return t(m,{children:[e(p,{of:f}),`
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
//# sourceMappingURL=InlineEdit-26a6a0bb.js.map
