import{j as e,a as n,F as m}from"./focus-visible-c2e9b88d.js";import{M as a,C as r,e as o,A as d}from"./chunk-PCJTTTQV-8e0a624c.js";import{p as s,S as c,M as h,F as u}from"./storybook-components-91f985f3.js";import{I as f}from"./InlineEdit.stories-88722bcf.js";import{I}from"./InlineEditTextArea-7476a349.js";import{I as g}from"./InlineEditInput-84cbd842.js";import{u as p}from"./index-bda0bad7.js";import"./index-ebeaab24.js";import"./iframe-f298dfc5.js";import"../sb-preview/runtime.js";import"./index-72bda2b9.js";import"./index-9c09ad76.js";import"./index-d475d2ea.js";import"./index-356e4a49.js";import"./InlineEdit.utils-9a44654a.js";import"./useOnKeyDown-4552d984.js";import"./useOnClickOutside-1aed2959.js";import"./Input.styles-0a1e38a8.js";import"./Input.tokens-0612e464.js";import"./Typography.utils-99dd1e07.js";import"./focusVisible-75802ac7.js";import"./hover-d616d034.js";import"./danger-157ad055.js";import"./selection-fae9d0a8.js";import"./scrollbarStyling-a46ac0ea.js";import"./ScrollableContainer.tokens-4d8ec996.js";import"./VisuallyHidden-9c195a2c.js";import"./BaseComponentProps-bb0d5515.js";import"./edit-791efced.js";import"./SvgWrapper-cd7fa512.js";import"./useCombinedRefs-40b11bb4.js";import"./Icon-819df738.js";import"./idGenerator-c29473b2.js";import"./Input.utils-f888acf1.js";import"./InputMessage-bb06ca10.js";import"./error-e0532677.js";import"./Typography-9f10a259.js";import"./color-a12930ac.js";function l(i){const t=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",ul:"ul",li:"li",h3:"h3"},p(),i.components);return n(m,{children:[e(a,{of:f}),`
`,e(t.h1,{id:"inlineedit",children:"InlineEdit"}),`
`,e(s,{docsHref:"https://design.domstol.no/987b33f71/p/767867-inlineedit",githubHref:"https://github.com/domstolene/designsystem/tree/master/components/src/components/InlineEdit",figmaHref:"https://www.figma.com/file/ewqSDmkgqDQ5PyOsRp4V5b/DDS-Komponenter?node-id=9005%3A150044"}),`
`,e(t.h2,{id:"demo",children:"Demo"}),`
`,e(r,{children:e(o,{id:"dds-components-inlineedit-inlineeditinput--default"})}),`
`,e(r,{children:e(o,{id:"dds-components-inlineedit-inlineedittextarea--default"})}),`
`,e(c,{href:`${h}dds-components-inlineedit`}),`
`,e(t.h2,{id:"oversikt",children:"Oversikt"}),`
`,n(t.p,{children:[e(t.code,{children:"<InlineEdit>"}),"-komponentene håndterer inline redigering, f.eks i tabeller. Vi har følgende komponenter:"]}),`
`,n(t.ul,{children:[`
`,n(t.li,{children:[e(t.code,{children:"<InlineEditInput />"})," - returnerer ",e(t.code,{children:"<input>"}),"."]}),`
`,n(t.li,{children:[e(t.code,{children:"<InlineEditTextArea />"})," - returnerer ",e(t.code,{children:"<textarea>"}),"."]}),`
`]}),`
`,e(t.h2,{id:"bruk-i-koden",children:"Bruk i koden"}),`
`,e(u,{code:`import { InlineEditInput, InlineEditTextArea } fra '@norges-domstoler/dds-components';

const [value, setValue] = useState('');

<InlineEditInput value={value} onSetValue={setValue} />
<InlineEditTextArea value={value} onSetValue={setValue} />

`}),`
`,e(t.h2,{id:"api",children:"API"}),`
`,e(t.h3,{id:"inlineedittextarea",children:"InlineEditTextArea"}),`
`,n(t.p,{children:["Inputfeltet. Returnerer ",e(t.code,{children:"<textarea>"}),"."]}),`
`,e(d,{of:I}),`
`,n(t.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",e(t.code,{children:"TextareaHTMLAttributes<HTMLTextAreaElement>"}),"-interface."]}),`
`,e(t.h3,{id:"inlineeditinput",children:"InlineEditInput"}),`
`,n(t.p,{children:["Inputfeltet. Returnerer ",e(t.code,{children:"<input>"}),"."]}),`
`,e(d,{of:g}),`
`,n(t.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",e(t.code,{children:"InputHTMLAttributes<HTMLInputElement>"}),"-interface."]})]})}function ne(i={}){const{wrapper:t}=Object.assign({},p(),i.components);return t?e(t,Object.assign({},i,{children:e(l,i)})):l(i)}export{ne as default};
//# sourceMappingURL=InlineEdit-dfc8313a.js.map
