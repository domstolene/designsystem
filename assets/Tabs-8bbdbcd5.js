import{a as n,j as t,F as l}from"./ddsReferenceTokens-647ce456.js";import{M as d,C as s,b as c,A as i,P as h}from"./chunk-S4VUQJ4A-39e56a04.js";import{C as m,L as b,c as p}from"./StoryTemplate-f07ce782.js";import{S as T}from"./constants-69754a51.js";import{T as f,a as u,b as g}from"./Tabs.stories-640537b1.js";import{u as o}from"./index-bda0bad7.js";import"./index-ebeaab24.js";import"./iframe-66fd7205.js";import"../sb-preview/runtime.js";import"./index-72bda2b9.js";import"./index-9c09ad76.js";import"./index-356e4a49.js";import"./libraryAdd-35e18a4f.js";import"./Icon-42793503.js";import"./BaseComponentProps-a100791d.js";import"./Input.styles-01f05292.js";import"./Caption-9d9a71c0.js";import"./TextOverflowEllipsis-e3546c5b.js";import"./Typography-b6b10a83.js";import"./Heading-b4646737.js";import"./Label-470a2743.js";import"./Legend-6fbf6204.js";import"./Link-3e1e1a74.js";import"./Paragraph-ff3eeae6.js";import"./scrollbarStyling-d0d816c9.js";import"./ScrollableContainer.tokens-e480b498.js";import"./normalize-f756ee4b.js";import"./removeButtonStyling-867d6ba4.js";function a(r){const e=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",code:"code",h3:"h3"},o(),r.components);return t(l,{children:[n(d,{of:f}),`
`,n(e.h1,{id:"tabs",children:"Tabs"}),`
`,n(m,{docsHref:"https://design.domstol.no/987b33f71/p/206fdc-skiptocontent/b/11d1c4",figmaHref:"https://www.figma.com/file/ewqSDmkgqDQ5PyOsRp4V5b/?node-id=7003%3A143267",githubHref:"https://github.com/domstolene/designsystem/tree/main/packages/components/src/components/Tabs"}),`
`,n(e.h2,{id:"demo",children:"Demo"}),`
`,n(s,{children:n(c,{id:"dds-components-tabs--default"})}),`
`,n(b,{href:`${T}dds-components-tabs`}),`
`,n(e.h2,{id:"oversikt",children:"Oversikt"}),`
`,n(e.p,{children:"Komponenten består av flere subkomponenter:"}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:[n(e.code,{children:"<Tabs />"})," - ytterste container for andre subkomponenter. Håndterer oppførsel og eventuelt litt styling. Har ",n(e.code,{children:"<TabList />"})," og ",n(e.code,{children:"<TabPanels />"})," som barn."]}),`
`,t(e.li,{children:[n(e.code,{children:"<Tab />"})," - en fane."]}),`
`,t(e.li,{children:[n(e.code,{children:"<TabList />"})," - liste med faner. Håndterer ARIA-attributter og ",n(e.code,{children:"id"})," for barna."]}),`
`,t(e.li,{children:[n(e.code,{children:"<TabPanel />"})," - panel med innhold som hører til en spesifikk fane."]}),`
`,t(e.li,{children:[n(e.code,{children:"<TabPanels />"})," - liste med paneler. Håndterer ARIA-attributter og ",n(e.code,{children:"id"})," for barna."]}),`
`]}),`
`,n(e.h2,{id:"bruk-i-koden",children:"Bruk i koden"}),`
`,n(p,{code:`import { Tabs, Tab } from '@norges-domstoler/dds-components';
   <Tabs>
       <TabList>
           <Tab> Tab 1 </Tab>
           <Tab> Tab 2 </Tab>
       </TabList>
       <TabPanels>
           <TabPanel> Innhold 1 </TabPanel>
           <TabPanel> Innhold 2 </TabPanel>
       </TabPanels>
   </Tabs>

`}),`
`,n(e.h2,{id:"api",children:"API"}),`
`,n(e.h3,{id:"tabs-1",children:"Tabs"}),`
`,t(e.p,{children:["Ytterste container som styrer hvilket panel skal vises via indeks. Har ",n(e.code,{children:"<TabList />"})," og ",n(e.code,{children:"<TabPanels />"})," som barn."]}),`
`,n(i,{story:h}),`
`,t(e.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",n(e.code,{children:"HTMLAttributes<HTMLDivElement>"}),"-interface i ",n(e.code,{children:"htmlProps"}),"."]}),`
`,n(e.h3,{id:"tab",children:"Tab"}),`
`,t(e.p,{children:["En fane. Tilhørende ",n(e.code,{children:"<TabPanel />"})," vises ved museklikk."]}),`
`,n(i,{of:u}),`
`,t(e.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",n(e.code,{children:"ButtonHTMLAttributes<HTMLButtonElement>"}),"-interface i ",n(e.code,{children:"htmlProps"}),"."]}),`
`,n(e.h3,{id:"tablist",children:"TabList"}),`
`,t(e.p,{children:["En liste med ",n(e.code,{children:"<Tab />"}),". Setter attributter som ",n(e.code,{children:"aria-controls"})," og roving focus for barna. ",n(e.code,{children:"<TabList />"})," skal ha ",n(e.code,{children:"<Tab />"})," som barn i samme rekkefølge som tilhørende paneler i ",n(e.code,{children:"<TabPanels />"}),"."]}),`
`,t(e.p,{children:["Det støttes alle native HTML-attributter som er en del av ",n(e.code,{children:"HTMLAttributes<HTMLDivElement>"}),"-interface i ",n(e.code,{children:"htmlProps"}),"."]}),`
`,n(e.h3,{id:"tabpanel",children:"TabPanel"}),`
`,t(e.p,{children:["Panel med innhold. Vises ved museklikk på tilhørende ",n(e.code,{children:"<Tab />"}),"."]}),`
`,n(i,{of:g}),`
`,t(e.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",n(e.code,{children:"ButtonHTMLAttributes<HTMLButtonElement>"}),"-interface i ",n(e.code,{children:"htmlProps"}),"."]}),`
`,n(e.h3,{id:"tabpanels",children:"TabPanels"}),`
`,t(e.p,{children:["En liste med ",n(e.code,{children:"<TabPanel />"}),". Setter attributter som ",n(e.code,{children:"aria-labelledby"})," for barna. ",n(e.code,{children:"<TabPanels />"})," skal ha ",n(e.code,{children:"<TabPanel />"})," som barn i samme rekkefølge som tilhørende paneler i ",n(e.code,{children:"<TabList />"}),"."]}),`
`,t(e.p,{children:["Det støttes alle native HTML-attributter som er en del av ",n(e.code,{children:"HTMLAttributes<HTMLDivElement>"}),"-interface i ",n(e.code,{children:"htmlProps"}),"."]})]})}function Q(r={}){const{wrapper:e}=Object.assign({},o(),r.components);return e?n(e,Object.assign({},r,{children:n(a,r)})):a(r)}export{Q as default};
//# sourceMappingURL=Tabs-8bbdbcd5.js.map
