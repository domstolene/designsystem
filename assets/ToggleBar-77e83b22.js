import{j as n,a as r,F as c}from"./focus-visible-c2e9b88d.js";import{M as g,C as i,e as t,A as l,P as s}from"./chunk-PCJTTTQV-8e0a624c.js";import{p as m,S as h,M as p,F as u}from"./storybook-components-91f985f3.js";import{T as b,a as T}from"./ToggleBar.stories-4d0985e1.js";import{u as a}from"./index-bda0bad7.js";import"./index-ebeaab24.js";import"./iframe-f298dfc5.js";import"../sb-preview/runtime.js";import"./index-72bda2b9.js";import"./index-9c09ad76.js";import"./index-d475d2ea.js";import"./index-356e4a49.js";import"./text-20d7ad40.js";import"./selection-fae9d0a8.js";import"./BaseComponentProps-bb0d5515.js";import"./Typography-9f10a259.js";import"./Typography.utils-99dd1e07.js";import"./focusVisible-75802ac7.js";import"./color-a12930ac.js";import"./combineHandlers-f6d4455a.js";import"./HiddenInput-5633a577.js";import"./Icon-819df738.js";import"./plusCircled-05259c8d.js";import"./SvgWrapper-cd7fa512.js";function d(o){const e=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",code:"code",h3:"h3",h4:"h4"},a(),o.components);return r(c,{children:[n(g,{of:b}),`
`,n(e.h1,{id:"togglebar",children:"ToggleBar"}),`
`,n(m,{docsHref:"https://design.domstol.no/987b33f71/p/73884a-togglebar",figmaHref:"https://www.figma.com/file/ewqSDmkgqDQ5PyOsRp4V5b/?node-id=155%3A38",githubHref:"https://github.com/domstolene/designsystem/tree/master/components/src/components/ToggleBar"}),`
`,n(e.h2,{id:"demo",children:"Demo"}),`
`,n(i,{children:n(t,{id:"dds-components-togglebar--default"})}),`
`,n(h,{href:`${p}dds-components-togglebar`}),`
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
`,n(l,{story:s}),`
`,r(e.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",n(e.code,{children:"DivHTMLAttributes<HTMLInputElement>"}),"-interface i ",n(e.code,{children:"htmlProps"}),"."]}),`
`,n(e.h4,{id:"bredde",children:"Bredde"}),`
`,r(e.p,{children:["Bredden på alle ",n(e.code,{children:"<ToggleRadio />"})," i en ",n(e.code,{children:"<ToggleBar />"})," skal være den samme. ",n(e.code,{children:"<ToggleBar />"})," tar i utganspunktet hele tigjengelige bredden og fordeler den likt mellom barna. Spesifikk bredde kan settes enten i ",n(e.code,{children:"<ToggleBar />"})," eller i selvutviklede wrapperen til ",n(e.code,{children:"<ToggleBar />"}),"."]}),`
`,n(i,{children:n(t,{id:"dds-components-togglebar--with-width"})}),`
`,n(e.h3,{id:"toggleradio",children:"ToggleRadio"}),`
`,n(l,{of:T}),`
`,r(e.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",n(e.code,{children:"InputHTMLAttributes<HTMLDivElement>"}),"-interface på følgende måte:"]}),`
`,r(e.ul,{children:[`
`,r(e.li,{children:[n(e.code,{children:"'name'"}),", ",n(e.code,{children:"'checked'"}),", ",n(e.code,{children:"'value'"}),", ",n(e.code,{children:"'onChange'"}),", ",n(e.code,{children:"'aria-labelledby'"}),", ",n(e.code,{children:"'aria-label'"})," på toppnivå."]}),`
`,r(e.li,{children:["resterende i ",n(e.code,{children:"htmlProps"}),"."]}),`
`]})]})}function q(o={}){const{wrapper:e}=Object.assign({},a(),o.components);return e?n(e,Object.assign({},o,{children:n(d,o)})):d(o)}export{q as default};
//# sourceMappingURL=ToggleBar-77e83b22.js.map