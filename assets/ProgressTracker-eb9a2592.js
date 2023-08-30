import{a as e,j as t,F as c}from"./ddsReferenceTokens-f1d35829.js";import{M as a,C as l,e as m,A as s,P as d}from"./chunk-PCJTTTQV-e1bcdff1.js";import{P as p,a as g}from"./ProgressTracker.stories-70f0c11f.js";import{p as h,S as k,M as P,F as T}from"./storybook-components-6981d325.js";import{u as i}from"./index-6fa374d0.js";import"./index-d47b1f5a.js";import"./iframe-90c43884.js";import"../sb-preview/runtime.js";import"./index-db9ff070.js";import"./index-d475d2ea.js";import"./index-356e4a49.js";import"./dds-icons-265d9665.js";import"./dds-core-c67132cd.js";import"./dds-typography-cc6cb429.js";import"./dds-form-9b45fc8d.js";import"./VisuallyHidden-15b316c1.js";import"./Button-aa30c63f.js";import"./Button.tokens-d278b944.js";import"./Spinner-dd54de98.js";import"./focus-visible-bfce03b6.js";function n(o){const r=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",code:"code",h3:"h3"},i(),o.components);return t(c,{children:[e(a,{of:p}),`
`,e(r.h1,{id:"progresstracker",children:"ProgressTracker"}),`
`,e(h,{docsHref:"https://design.domstol.no/987b33f71/p/206fdc-skiptocontent/b/11d1c4",figmaHref:"https://www.figma.com/file/ewqSDmkgqDQ5PyOsRp4V5b/DDS-Komponenter?node-id=10018%3A211463",githubHref:"https://github.com/domstolene/designsystem/tree/master/packages/components/src/components/ProgressTracker"}),`
`,e(r.h2,{id:"demo",children:"Demo"}),`
`,e(l,{children:e(m,{id:"dds-components-progresstracker--overview"})}),`
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
`,e(s,{story:d}),`
`,t(r.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",e(r.code,{children:"HTMLAttributes<HTMLDivElement>"}),"-interface i ",e(r.code,{children:"htmlProps"}),"."]}),`
`,e(r.h3,{id:"progresstrackeritem",children:"ProgressTracker.Item"}),`
`,e(r.p,{children:"Et steg."}),`
`,e(s,{of:g.Item}),`
`,t(r.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",e(r.code,{children:"ButtonHTMLAttributes<HTMLButtonElement>"}),"-interface i ",e(r.code,{children:"htmlProps"}),"."]})]})}function F(o={}){const{wrapper:r}=Object.assign({},i(),o.components);return r?e(r,Object.assign({},o,{children:e(n,o)})):n(o)}export{F as default};
//# sourceMappingURL=ProgressTracker-eb9a2592.js.map
