import{a as n,j as r,F as c}from"./jsx-runtime-e43ccb36.js";import{M as s,C as i,b as t,A as l,P as g}from"./chunk-HLWAVYOI-3e0a616d.js";import{C as m,L as h,c as p}from"./StoryTemplate-fe1f5a61.js";import{S as u}from"./constants-69754a51.js";import{T as b,a as T}from"./ToggleBar.stories-46eecbed.js";import{u as a}from"./index-2ef8b458.js";import"./index-1b03fe98.js";import"./iframe-35bb3082.js";import"../sb-preview/runtime.js";import"./index-6d191f71.js";import"./index-6fd5a17b.js";import"./index-356e4a49.js";import"./ddsReferenceTokens-a28ebf03.js";import"./libraryAdd-72c0bfa3.js";import"./Icon-eb542f51.js";import"./BaseComponentProps-b6ad9f7d.js";import"./combineHandlers-f6d4455a.js";import"./Caption-d810b87c.js";import"./TextOverflowEllipsis-6cc9a60a.js";import"./Typography-d13ef156.js";import"./Heading-0c5437bc.js";import"./Label-05114518.js";import"./Legend-9969638c.js";import"./Link-c264ab95.js";import"./Paragraph-88055bd8.js";import"./Input.styles-6b8ed75e.js";function d(o){const e=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",code:"code",h3:"h3",h4:"h4"},a(),o.components);return r(c,{children:[n(s,{of:b}),`
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
//# sourceMappingURL=ToggleBar-ea35b611.js.map
