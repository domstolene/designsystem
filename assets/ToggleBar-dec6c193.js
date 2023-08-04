import{a as n,j as r,F as c}from"./ddsReferenceTokens-f1d35829.js";import{M as g,C as o,e as i,A as t,P as s}from"./chunk-PCJTTTQV-0127294b.js";import{p as h,S as m,M as p,F as u}from"./storybook-components-b14ef24f.js";import{T as b,a as T}from"./ToggleBar.stories-298ec56b.js";import{u as a}from"./index-6fa374d0.js";import"./index-d47b1f5a.js";import"./iframe-3cdea761.js";import"../sb-preview/runtime.js";import"./index-db9ff070.js";import"./index-d475d2ea.js";import"./index-356e4a49.js";import"./focus-visible-bfce03b6.js";import"./dds-icons-265d9665.js";import"./dds-core-c67132cd.js";import"./dds-typography-cc6cb429.js";import"./dds-form-9b45fc8d.js";function d(l){const e=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",code:"code",h3:"h3",h4:"h4"},a(),l.components);return r(c,{children:[n(g,{of:b}),`
`,n(e.h1,{id:"togglebar",children:"ToggleBar"}),`
`,n(h,{docsHref:"https://design.domstol.no/987b33f71/p/73884a-togglebar",figmaHref:"https://www.figma.com/file/ewqSDmkgqDQ5PyOsRp4V5b/?node-id=155%3A38",githubHref:"https://github.com/domstolene/designsystem/tree/master/components/src/components/ToggleBar"}),`
`,n(e.h2,{id:"demo",children:"Demo"}),`
`,n(o,{children:n(i,{id:"dds-components-togglebar--default"})}),`
`,n(m,{href:`${p}dds-components-togglebar`}),`
`,n(e.h2,{id:"oversikt",children:"Oversikt"}),`
`,n(e.p,{children:"ToggleBar er en rad med semantiske radioknapper. Den består av følgende subkomponenter:"}),`
`,r(e.ul,{children:[`
`,r(e.li,{children:[n(e.code,{children:"<ToggleBar />"})," - wrapper for barna."]}),`
`,r(e.li,{children:[n(e.code,{children:"<ToggleRadio />"})," - elementer å velge mellom."]}),`
`]}),`
`,n(e.h2,{id:"bruk-i-koden",children:"Bruk i koden"}),`
`,n(u,{code:`import { ToggleRadio, ToggleBar } from '@norges-domstoler/dds-components';

const [value, setValue] = useState<string | undefined>();

<ToggleBar
  label="Gruppe"
  name="navn"
  value={value}
  onChange={(event, value) => {
    setValue(value);
  }}
>
  <ToggleRadio value="alt1" label="Alternativ 1" />
  <ToggleRadio value="alt2" label="Alternativ 2" />
</ToggleBar>
`}),`
`,n(e.h2,{id:"api",children:"API"}),`
`,n(e.h3,{id:"togglebar-1",children:"ToggleBar"}),`
`,r(e.p,{children:["En rad med ",n(e.code,{children:"<ToggleRadio />"}),"."]}),`
`,n(t,{story:s}),`
`,r(e.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",n(e.code,{children:"DivHTMLAttributes<HTMLInputElement>"}),"-interface i ",n(e.code,{children:"htmlProps"}),"."]}),`
`,n(e.h4,{id:"bredde",children:"Bredde"}),`
`,r(e.p,{children:["Bredden på alle ",n(e.code,{children:"<ToggleRadio />"})," i en ",n(e.code,{children:"<ToggleBar />"})," skal være den samme. ",n(e.code,{children:"<ToggleBar />"})," tar i utganspunktet hele tigjengelige bredden og fordeler den likt mellom barna. Spesifikk bredde kan settes enten i ",n(e.code,{children:"<ToggleBar />"})," eller i selvutviklede wrapperen til ",n(e.code,{children:"<ToggleBar />"}),"."]}),`
`,n(o,{children:n(i,{id:"dds-components-togglebar--with-width"})}),`
`,n(e.h3,{id:"toggleradio",children:"ToggleRadio"}),`
`,n(t,{of:T}),`
`,r(e.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",n(e.code,{children:"InputHTMLAttributes<HTMLDivElement>"}),"-interface på følgende måte:"]}),`
`,r(e.ul,{children:[`
`,r(e.li,{children:[n(e.code,{children:"'name'"}),", ",n(e.code,{children:"'checked'"}),", ",n(e.code,{children:"'value'"}),", ",n(e.code,{children:"'onChange'"}),", ",n(e.code,{children:"'aria-labelledby'"}),", ",n(e.code,{children:"'aria-label'"})," på toppnivå."]}),`
`,r(e.li,{children:["resterende i ",n(e.code,{children:"htmlProps"}),"."]}),`
`]})]})}function O(l={}){const{wrapper:e}=Object.assign({},a(),l.components);return e?n(e,Object.assign({},l,{children:n(d,l)})):d(l)}export{O as default};
//# sourceMappingURL=ToggleBar-dec6c193.js.map
