import{a as e,j as t,F as c}from"./focus-visible-8467fd8b.js";import{M as a,C as l,e as d,A as s,P as m}from"./chunk-PCJTTTQV-784d8e4f.js";import{P as p,a as g}from"./ProgressTracker.stories-2e6160db.js";import{p as h,S as k,M as P,F as T}from"./storybook-components-dc8c0578.js";import{u as i}from"./index-6fa374d0.js";import"./index-d47b1f5a.js";import"./iframe-35f96930.js";import"../sb-preview/runtime.js";import"./index-db9ff070.js";import"./index-d475d2ea.js";import"./index-356e4a49.js";import"./dds-icons-f9255b51.js";import"./dds-core-b89b291f.js";import"./dds-typography-4e6445f7.js";import"./dds-form-9dbc5b3d.js";import"./VisuallyHidden-0fcd4355.js";import"./Button-ca35c045.js";import"./Button.tokens-f3dda1de.js";import"./Spinner-28eec8a8.js";function n(o){const r=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",code:"code",h3:"h3"},i(),o.components);return t(c,{children:[e(a,{of:p}),`
`,e(r.h1,{id:"progresstracker",children:"ProgressTracker"}),`
`,e(h,{docsHref:"https://design.domstol.no/987b33f71/p/206fdc-skiptocontent/b/11d1c4",figmaHref:"https://www.figma.com/file/ewqSDmkgqDQ5PyOsRp4V5b/DDS-Komponenter?node-id=10018%3A211463",githubHref:"https://github.com/domstolene/designsystem/tree/master/components/src/components/ProgressTracker"}),`
`,e(r.h2,{id:"demo",children:"Demo"}),`
`,e(l,{children:e(d,{id:"dds-components-progresstracker--overview"})}),`
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
`,e(s,{story:m}),`
`,t(r.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",e(r.code,{children:"HTMLAttributes<HTMLDivElement>"}),"-interface i ",e(r.code,{children:"htmlProps"}),"."]}),`
`,e(r.h3,{id:"progresstrackeritem",children:"ProgressTracker.Item"}),`
`,e(r.p,{children:"Et steg."}),`
`,e(s,{of:g.Item}),`
`,t(r.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",e(r.code,{children:"ButtonHTMLAttributes<HTMLButtonElement>"}),"-interface i ",e(r.code,{children:"htmlProps"}),"."]})]})}function E(o={}){const{wrapper:r}=Object.assign({},i(),o.components);return r?e(r,Object.assign({},o,{children:e(n,o)})):n(o)}export{E as default};
//# sourceMappingURL=ProgressTracker-8b6da592.js.map
