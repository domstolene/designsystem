import{j as e,a as t,F as c}from"./focus-visible-c2e9b88d.js";import{M as a,C as m,e as l,A as s,P as d}from"./chunk-PCJTTTQV-80a74cac.js";import{P as p,a as g}from"./ProgressTracker.stories-5c1a8e36.js";import{p as h,S as k,M as P,F as T}from"./storybook-components-045061bd.js";import{u as i}from"./index-bda0bad7.js";import"./index-ebeaab24.js";import"./iframe-00013f19.js";import"../sb-preview/runtime.js";import"./index-40534236.js";import"./index-9c09ad76.js";import"./Typography.utils-99dd1e07.js";import"./focusVisible-75802ac7.js";import"./Icon-819df738.js";import"./BaseComponentProps-bb0d5515.js";import"./check-6e9d4d4d.js";import"./SvgWrapper-cd7fa512.js";import"./VisuallyHidden-9c195a2c.js";import"./attachment-c45a1188.js";import"./gavel-e419e1a8.js";import"./Button-2e74127f.js";import"./Button.tokens-a196263c.js";import"./text-20d7ad40.js";import"./normalize-f756ee4b.js";import"./selection-fae9d0a8.js";import"./Spinner-deb75053.js";import"./color-a12930ac.js";import"./person-eb4bd89d.js";function n(o){const r=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",code:"code",h3:"h3"},i(),o.components);return t(c,{children:[e(a,{of:p}),`
`,e(r.h1,{id:"progresstracker",children:"ProgressTracker"}),`
`,e(h,{docsHref:"https://design.domstol.no/987b33f71/p/206fdc-skiptocontent/b/11d1c4",figmaHref:"https://www.figma.com/file/ewqSDmkgqDQ5PyOsRp4V5b/DDS-Komponenter?node-id=10018%3A211463",githubHref:"https://github.com/domstolene/designsystem/tree/master/components/src/components/ProgressTracker"}),`
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
`,e(s,{story:d}),`
`,t(r.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",e(r.code,{children:"HTMLAttributes<HTMLDivElement>"}),"-interface i ",e(r.code,{children:"htmlProps"}),"."]}),`
`,e(r.h3,{id:"progresstrackeritem",children:"ProgressTracker.Item"}),`
`,e(r.p,{children:"Et steg."}),`
`,e(s,{of:g.Item}),`
`,t(r.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",e(r.code,{children:"ButtonHTMLAttributes<HTMLButtonElement>"}),"-interface i ",e(r.code,{children:"htmlProps"}),"."]})]})}function Q(o={}){const{wrapper:r}=Object.assign({},i(),o.components);return r?e(r,Object.assign({},o,{children:e(n,o)})):n(o)}export{Q as default};
//# sourceMappingURL=ProgressTracker-0bea3465.js.map
