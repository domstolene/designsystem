import{a as n,j as t,F as l}from"./jsx-runtime-e43ccb36.js";import{M as d,C as s,b as c,A as i,P as h}from"./chunk-HLWAVYOI-ec38f660.js";import{C as m,L as b,c as p}from"./StoryTemplate-63bfa922.js";import{S as T}from"./constants-69754a51.js";import{T as f,a as u,b as g}from"./Tabs.stories-6dde9d00.js";import{u as o}from"./index-2ef8b458.js";import"./index-1b03fe98.js";import"./iframe-665932c2.js";import"../sb-preview/runtime.js";import"./index-6d191f71.js";import"./index-6fd5a17b.js";import"./index-356e4a49.js";import"./ddsReferenceTokens-fe3c594e.js";import"./libraryAdd-dfc2ed03.js";import"./Icon-e72250a3.js";import"./BaseComponentProps-b46a4458.js";import"./Input.styles-c3e229ec.js";import"./Caption-a006c5bc.js";import"./TextOverflowEllipsis-c2a9fc8f.js";import"./Typography-9d6edb9c.js";import"./Heading-3ac6a2d9.js";import"./Label-60a960ab.js";import"./Legend-bad3d4ec.js";import"./Link-bef7f478.js";import"./Paragraph-f6678e05.js";import"./scrollbarStyling-6a0ce14f.js";import"./ScrollableContainer.tokens-f54e5649.js";import"./normalize-f756ee4b.js";import"./removeButtonStyling-867d6ba4.js";function a(r){const e=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",code:"code",h3:"h3"},o(),r.components);return t(l,{children:[n(d,{of:f}),`
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
`,t(e.p,{children:["Det støttes alle native HTML-attributter som er en del av ",n(e.code,{children:"HTMLAttributes<HTMLDivElement>"}),"-interface i ",n(e.code,{children:"htmlProps"}),"."]})]})}function U(r={}){const{wrapper:e}=Object.assign({},o(),r.components);return e?n(e,Object.assign({},r,{children:n(a,r)})):a(r)}export{U as default};
//# sourceMappingURL=Tabs-8fe68abf.js.map
