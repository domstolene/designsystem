import{a as e,j as t,F as c}from"./ddsReferenceTokens-647ce456.js";import{M as a,C as m,b as l,A as n,P as d}from"./chunk-PCJTTTQV-53147d3e.js";import{P as p,a as g}from"./ProgressTracker.stories-4d4e22c9.js";import{C as h,L as k,c as T}from"./StoryTemplate-aaf2c38c.js";import{S as P}from"./constants-69754a51.js";import{u as i}from"./index-bda0bad7.js";import"./index-ebeaab24.js";import"./iframe-765586b9.js";import"../sb-preview/runtime.js";import"./index-72bda2b9.js";import"./index-9c09ad76.js";import"./index-d475d2ea.js";import"./index-356e4a49.js";import"./libraryAdd-4099b973.js";import"./Icon-e6324a43.js";import"./BaseComponentProps-a100791d.js";import"./Caption-5c254d72.js";import"./TextOverflowEllipsis-e3546c5b.js";import"./Typography-1747463b.js";import"./Heading-dc72d0b9.js";import"./Label-23c96940.js";import"./Legend-dbc3ced6.js";import"./Link-9aff7843.js";import"./Paragraph-3340e0ea.js";import"./Input.styles-711330f2.js";import"./VisuallyHidden-d3f4e065.js";import"./Button-07f0874b.js";import"./Button.tokens-cb9e169d.js";import"./normalize-f756ee4b.js";import"./Spinner-866d56ff.js";function s(o){const r=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",code:"code",h3:"h3"},i(),o.components);return t(c,{children:[e(a,{of:p}),`
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
//# sourceMappingURL=ProgressTracker-42dfe28d.js.map