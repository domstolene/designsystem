import{a as n,j as r,F as c}from"./jsx-runtime-e43ccb36.js";import{M as s,C as i,b as t,A as l,P as g}from"./chunk-S4VUQJ4A-35572fc3.js";import{C as m,L as h,c as p}from"./StoryTemplate-a53b4a90.js";import{S as u}from"./constants-69754a51.js";import{T as b,a as T}from"./ToggleBar.stories-546628a0.js";import{u as a}from"./index-2ef8b458.js";import"./index-1b03fe98.js";import"./iframe-65979afa.js";import"../sb-preview/runtime.js";import"./index-4a89c107.js";import"./index-6fd5a17b.js";import"./index-356e4a49.js";import"./ddsReferenceTokens-f9f5a4e4.js";import"./libraryAdd-5ac12ed0.js";import"./Icon-1678d620.js";import"./BaseComponentProps-9c025471.js";import"./combineHandlers-f6d4455a.js";import"./Caption-c3e5a7e9.js";import"./TextOverflowEllipsis-1edb8626.js";import"./Typography-e1773316.js";import"./Heading-3c0ada0f.js";import"./Label-56d59f5f.js";import"./Legend-c9e1505c.js";import"./Link-1f045fc3.js";import"./Paragraph-68d1c0c0.js";import"./Input.styles-d3b58308.js";function d(o){const e=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",code:"code",h3:"h3",h4:"h4"},a(),o.components);return r(c,{children:[n(s,{of:b}),`
`,n(e.h1,{id:"togglebar",children:"ToggleBar"}),`
`,n(m,{docsHref:"https://design.domstol.no/987b33f71/p/73884a-togglebar",figmaHref:"https://www.figma.com/file/ewqSDmkgqDQ5PyOsRp4V5b/?node-id=155%3A38",githubHref:"https://github.com/domstolene/designsystem/tree/main/packages/components/src/components/ToggleBar"}),`
`,n(e.h2,{id:"demo",children:"Demo"}),`
`,n(i,{children:n(t,{id:"dds-components-togglebar--default"})}),`
`,n(h,{href:`${u}dds-components-togglebar`}),`
`,n(e.h2,{id:"oversikt",children:"Oversikt"}),`
`,n(e.p,{children:"ToggleBar er en rad med semantiske radioknapper. Den består av følgende subkomponenter:"}),`
`,r(e.ul,{children:[`
`,r(e.li,{children:[n(e.code,{children:"<ToggleBar />"})," - wrapper for barna."]}),`
`,r(e.li,{children:[n(e.code,{children:"<ToggleRadio />"})," - elementer å velge mellom."]}),`
`]}),`
`,n(e.h2,{id:"bruk-i-koden",children:"Bruk i koden"}),`
`,n(p,{code:`import { ToggleRadio, ToggleBar } from '@norges-domstoler/dds-components';

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
`,n(l,{story:g}),`
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
`]})]})}function G(o={}){const{wrapper:e}=Object.assign({},a(),o.components);return e?n(e,Object.assign({},o,{children:n(d,o)})):d(o)}export{G as default};
//# sourceMappingURL=ToggleBar-f4d734ad.js.map
