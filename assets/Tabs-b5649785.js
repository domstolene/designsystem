import{j as n,b as t,F as o}from"./focus-visible-17f12d09.js";import{M as d,e as s,f as c,g as i,P as h}from"./index-c0e0960b.js";import{p as b,S as m,M as p,F as T}from"./storybook-components-b7b7a39c.js";import{T as f,a as u,b as g}from"./Tabs.stories-3ced7fa0.js";import{u as l}from"./index-09fac16e.js";import"./index-c6dae603.js";import"./iframe-6efa2ccf.js";import"../sb-preview/runtime.js";import"./index-519f2600.js";import"./index-eb008d06.js";import"./BaseComponentProps-bb0d5515.js";import"./scrollbarStyling-27f949d7.js";import"./ScrollableContainer.tokens-3dce5c89.js";import"./focusVisible-bd00be70.js";import"./useRoveFocus-01d68aa4.js";import"./useCombinedRefs-764cd8e8.js";import"./useOnKeyDown-77bae070.js";import"./useOnClickOutside-08b83e6f.js";import"./Typography.utils-3c68477b.js";import"./normalize-f756ee4b.js";import"./removeButtonStyling-867d6ba4.js";import"./Icon-a968456f.js";import"./notifications-f8589a7b.js";import"./SvgWrapper-0812a1f2.js";function a(r){const e=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",code:"code",h3:"h3"},l(),r.components);return t(o,{children:[n(d,{of:f}),`
`,n(e.h1,{id:"tabs",children:"Tabs"}),`
`,n(b,{docsHref:"https://design.domstol.no/987b33f71/p/206fdc-skiptocontent/b/11d1c4",figmaHref:"https://www.figma.com/file/ewqSDmkgqDQ5PyOsRp4V5b/?node-id=7003%3A143267",githubHref:"https://github.com/domstolene/designsystem/tree/master/components/src/components/Tabs"}),`
`,n(e.h2,{id:"demo",children:"Demo"}),`
`,n(s,{children:n(c,{id:"dds-components-tabs--default"})}),`
`,n(m,{href:`${p}dds-components-tabs`}),`
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
`,n(T,{code:`import { Tabs, Tab } from '@norges-domstoler/dds-components';
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
`,t(e.p,{children:["Det støttes alle native HTML-attributter som er en del av ",n(e.code,{children:"HTMLAttributes<HTMLDivElement>"}),"-interface i ",n(e.code,{children:"htmlProps"}),"."]})]})}function V(r={}){const{wrapper:e}=Object.assign({},l(),r.components);return e?n(e,Object.assign({},r,{children:n(a,r)})):a(r)}export{V as default};
//# sourceMappingURL=Tabs-b5649785.js.map
