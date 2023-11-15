import{a as e,j as t,F as c}from"./jsx-runtime-e43ccb36.js";import{M as a,C as m,b as l,A as n,P as d}from"./chunk-HLWAVYOI-adac57c3.js";import{P as p,a as g}from"./ProgressTracker.stories-19638905.js";import{C as h,L as k,c as T}from"./StoryTemplate-b1805fe5.js";import{S as P}from"./constants-c672c5f8.js";import{u as i}from"./index-2ef8b458.js";import"./index-1b03fe98.js";import"./iframe-7f7b0921.js";import"../sb-preview/runtime.js";import"./index-6d191f71.js";import"./index-6fd5a17b.js";import"./index-356e4a49.js";import"./libraryAdd-792d55f1.js";import"./Icon-96508a26.js";import"./ddsReferenceTokens-cf345c8b.js";import"./BaseComponentProps-217bcb03.js";import"./Caption-7324954d.js";import"./TextOverflowEllipsis-5f7b5b23.js";import"./Typography-37e894bc.js";import"./Heading-a143a4ab.js";import"./Label-e6c412e2.js";import"./Legend-8686145c.js";import"./Link-0af95a08.js";import"./Paragraph-67d8f149.js";import"./Input.styles-9955857c.js";import"./VisuallyHidden-d23941f1.js";import"./Button-8ec36c15.js";import"./Button.tokens-a4431843.js";import"./normalize-f756ee4b.js";import"./Spinner-3b81cc2b.js";function s(o){const r=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",code:"code",h3:"h3"},i(),o.components);return t(c,{children:[e(a,{of:p}),`
`,e(r.h1,{id:"progresstracker",children:"ProgressTracker"}),`
`,e(h,{docsHref:"https://design.domstol.no/987b33f71/p/206fdc-skiptocontent/b/11d1c4",figmaHref:"https://www.figma.com/file/ewqSDmkgqDQ5PyOsRp4V5b/DDS-Komponenter?node-id=10018%3A211463",githubHref:"https://github.com/domstolene/designsystem/tree/main/packages/components/src/components/ProgressTracker"}),`
`,e(r.h2,{id:"demo",children:"Demo"}),`
`,e(m,{children:e(l,{id:"dds-components-progresstracker--overview"})}),`
`,e(k,{href:`${P}dds-components-progresstracker`}),`
`,e(r.h2,{id:"oversikt",children:"Oversikt"}),`
`,e(r.p,{children:"Komponenten består av:"}),`
`,t(r.ul,{children:[`
`,t(r.li,{children:[e(r.code,{children:"<ProgressTracker />"})," - ytterste container for andre subkomponenter. Håndterer oppførsel og eventuelt litt styling. Har to eller flere ",e(r.code,{children:"<ProgressTracker.Item />"})," som barn."]}),`
`,t(r.li,{children:[e(r.code,{children:"<ProgressTracker.Item />"})," - et steg."]}),`
`]}),`
`,e(r.h2,{id:"bruk-i-koden",children:"Bruk i koden"}),`
`,e(T,{code:`import { ProgressTracker } from '.';

function handleProgressTrackerItemClick(index: number) {
console.log(index)
}

<ProgressTracker activeStep={activeStep}>
  <ProgressTracker.Item completed onClick={handleProgressTrackerItemClick}>
    Partopplysninger
  </ProgressTracker.Item>
  <ProgressTracker.Item active onClick={handleProgressTrackerItemClick}>
    Slutning
  </ProgressTracker.Item>
  <ProgressTracker.Item onClick={handleProgressTrackerItemClick}>
    Vedlegg
  </ProgressTracker.Item>
</ProgressTracker>
`}),`
`,e(r.h2,{id:"api",children:"API"}),`
`,e(r.h3,{id:"progresstracker-1",children:"ProgressTracker"}),`
`,t(r.p,{children:["Ytterste container som styrer hvilket steg skal vises via indeks. Har to eller flere ",e(r.code,{children:"<ProgressTracker.Item />"})," som barn."]}),`
`,e(n,{story:d}),`
`,t(r.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",e(r.code,{children:"HTMLAttributes<HTMLDivElement>"}),"-interface i ",e(r.code,{children:"htmlProps"}),"."]}),`
`,e(r.h3,{id:"progresstrackeritem",children:"ProgressTracker.Item"}),`
`,e(r.p,{children:"Et steg."}),`
`,e(n,{of:g.Item}),`
`,t(r.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",e(r.code,{children:"ButtonHTMLAttributes<HTMLButtonElement>"}),"-interface i ",e(r.code,{children:"htmlProps"}),"."]})]})}function U(o={}){const{wrapper:r}=Object.assign({},i(),o.components);return r?e(r,Object.assign({},o,{children:e(s,o)})):s(o)}export{U as default};
//# sourceMappingURL=ProgressTracker-890162e7.js.map
