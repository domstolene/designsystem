import{a as n,j as t,F as d}from"./focus-visible-8467fd8b.js";import{M as o,C as s,e as c,A as i,P as h}from"./chunk-PCJTTTQV-c7922745.js";import{p as b,S as m,M as T,F as p}from"./storybook-components-3257698a.js";import{T as f,a as u,b as g}from"./Tabs.stories-04ba8c6d.js";import{u as l}from"./index-6fa374d0.js";import"./index-d47b1f5a.js";import"./iframe-c1e4a10a.js";import"../sb-preview/runtime.js";import"./index-db9ff070.js";import"./index-d475d2ea.js";import"./index-356e4a49.js";import"./dds-icons-57b6044b.js";import"./dds-core-b89b291f.js";import"./dds-form-9dbc5b3d.js";import"./dds-typography-4e6445f7.js";import"./scrollbarStyling-b67d8d39.js";import"./ScrollableContainer.tokens-a52bc549.js";function a(r){const e=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",code:"code",h3:"h3"},l(),r.components);return t(d,{children:[n(o,{of:f}),`
`,n(e.h1,{id:"tabs",children:"Tabs"}),`
`,n(b,{docsHref:"https://design.domstol.no/987b33f71/p/206fdc-skiptocontent/b/11d1c4",figmaHref:"https://www.figma.com/file/ewqSDmkgqDQ5PyOsRp4V5b/?node-id=7003%3A143267",githubHref:"https://github.com/domstolene/designsystem/tree/master/components/src/components/Tabs"}),`
`,n(e.h2,{id:"demo",children:"Demo"}),`
`,n(s,{children:n(c,{id:"dds-components-tabs--default"})}),`
`,n(m,{href:`${T}dds-components-tabs`}),`
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
`,t(e.p,{children:["Det støttes alle native HTML-attributter som er en del av ",n(e.code,{children:"HTMLAttributes<HTMLDivElement>"}),"-interface i ",n(e.code,{children:"htmlProps"}),"."]})]})}function C(r={}){const{wrapper:e}=Object.assign({},l(),r.components);return e?n(e,Object.assign({},r,{children:n(a,r)})):a(r)}export{C as default};
//# sourceMappingURL=Tabs-450ad2a7.js.map
