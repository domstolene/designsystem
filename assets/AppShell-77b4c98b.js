import{a as o,j as p,F as m}from"./ddsReferenceTokens-647ce456.js";import{M as s,C as a,b as l,A as c}from"./chunk-S4VUQJ4A-39e56a04.js";import{C as d,L as h,c as f}from"./StoryTemplate-f07ce782.js";import{S as g}from"./constants-69754a51.js";import{A as S,D as r}from"./AppShell.stories-f6f3f35a.js";import{u as n}from"./index-bda0bad7.js";import"./index-ebeaab24.js";import"./iframe-66fd7205.js";import"../sb-preview/runtime.js";import"./index-72bda2b9.js";import"./index-9c09ad76.js";import"./index-356e4a49.js";import"./libraryAdd-35e18a4f.js";import"./Icon-42793503.js";import"./BaseComponentProps-a100791d.js";import"./Button-09f75747.js";import"./Button.tokens-cb9e169d.js";import"./normalize-f756ee4b.js";import"./Caption-9d9a71c0.js";import"./TextOverflowEllipsis-e3546c5b.js";import"./Typography-b6b10a83.js";import"./Heading-b4646737.js";import"./Label-470a2743.js";import"./Legend-6fbf6204.js";import"./Link-3e1e1a74.js";import"./Paragraph-ff3eeae6.js";import"./Input.styles-01f05292.js";import"./Spinner-866d56ff.js";import"./OverflowMenuGroup-f2dacde7.js";import"./OverflowMenu-9c02bbdc.js";import"./useFloatPosition-16b5a301.js";import"./floating-ui.dom-a5fd4560.js";import"./OverflowMenuItem-5fa82ba8.js";import"./scrollbarStyling-d0d816c9.js";import"./ScrollableContainer.tokens-e480b498.js";import"./Divider-97c7888f.js";function i(e){const t=Object.assign({h1:"h1",h2:"h2"},n(),e.components);return p(m,{children:[o(s,{of:S}),`
`,o(t.h1,{id:"appshell",children:"AppShell"}),`
`,o(d,{docsHref:"https://design.domstol.no/987b33f71/p/14204f-appshell",figmaHref:"https://www.figma.com/file/ewqSDmkgqDQ5PyOsRp4V5b/DDS-Komponenter?type=design&node-id=13559%3A226257&mode=design&t=Ogap795lEH2RYDhQ-1",githubHref:"https://github.com/domstolene/designsystem/tree/main/packages/components/src/components/AppShell/AppShell"}),`
`,o(t.h2,{id:"demo",children:"Demo"}),`
`,o(a,{children:o(l,{of:r})}),`
`,o(h,{href:`${g}dds-components-backbutton`}),`
`,o(t.h2,{id:"bruk-i-koden",children:"Bruk i koden"}),`
`,o(f,{code:`
import { Link } from 'react-router-dom'
import { AppShell, FolderIcon, ChecklistIcon } from '@norges-domstoler/dds-components'

<AppShell
  version="1.0.0"
  navigation={{
    internal: [
      {
        as: Link,
        to: '/saker',
        icon: FolderIcon,
        label: 'Saker',
        active: true,
      },
      { as: Link, to: '/oppgaver', icon: ChecklistIcon, label: 'Oppgaver' },
    ],
    external: [{ href: '...', external: true, label: 'Registeroppslag' }],
  }}
>
  Applikasjonskoden din her...
</AppShell>
`}),`
`,o(t.h2,{id:"api",children:"API"}),`
`,o(c,{of:r})]})}function Z(e={}){const{wrapper:t}=Object.assign({},n(),e.components);return t?o(t,Object.assign({},e,{children:o(i,e)})):i(e)}export{Z as default};
//# sourceMappingURL=AppShell-77b4c98b.js.map
