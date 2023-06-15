import{j as e,b as n,F as m}from"./focus-visible-17f12d09.js";import{M as a,e as r,f as o,g as d}from"./index-cbcf5b87.js";import{p as s,S as c,M as h,F as u}from"./storybook-components-8785bb6b.js";import{I as f}from"./InlineEdit.stories-1c6c8434.js";import{I}from"./InlineEditTextArea-00a58acc.js";import{I as g}from"./InlineEditInput-60ce2c71.js";import{u as p}from"./index-09fac16e.js";import"./index-c6dae603.js";import"./iframe-b00db7cd.js";import"../sb-preview/runtime.js";import"./index-519f2600.js";import"./index-eb008d06.js";import"./InlineEdit.utils-6a3e4808.js";import"./useOnKeyDown-77bae070.js";import"./useOnClickOutside-08b83e6f.js";import"./Input.styles-b4f9abd1.js";import"./Input.tokens-b59eb2e2.js";import"./Typography.utils-3c68477b.js";import"./focusVisible-bd00be70.js";import"./hover-cea7b82c.js";import"./danger-18d99756.js";import"./selection-dced972e.js";import"./scrollbarStyling-27f949d7.js";import"./ScrollableContainer.tokens-3dce5c89.js";import"./VisuallyHidden-68635a7d.js";import"./BaseComponentProps-bb0d5515.js";import"./edit-c057d412.js";import"./SvgWrapper-0812a1f2.js";import"./useCombinedRefs-764cd8e8.js";import"./Icon-a968456f.js";import"./idGenerator-c29473b2.js";import"./Input.utils-c0cbaed7.js";import"./InputMessage-ec06a7ed.js";import"./error-f74b99a0.js";import"./Typography-ddbe86f6.js";import"./color-0daeea22.js";function l(i){const t=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",ul:"ul",li:"li",h3:"h3"},p(),i.components);return n(m,{children:[e(a,{of:f}),`
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
`,n(t.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",e(t.code,{children:"InputHTMLAttributes<HTMLInputElement>"}),"-interface."]})]})}function ee(i={}){const{wrapper:t}=Object.assign({},p(),i.components);return t?e(t,Object.assign({},i,{children:e(l,i)})):l(i)}export{ee as default};
//# sourceMappingURL=InlineEdit-b977c17d.js.map
