import{a as o,j as p,F as m}from"./ddsReferenceTokens-ceb64027.js";import{M as s,C as a,b as l,A as c}from"./chunk-S4VUQJ4A-ad672bc2.js";import{C as d,L as h,c as f}from"./StoryTemplate-a2fc1fbf.js";import{S as g}from"./constants-69754a51.js";import{A as S,D as r}from"./AppShell.stories-b13838b3.js";import{u as n}from"./index-2ef8b458.js";import"./index-1b03fe98.js";import"./iframe-a8fd349f.js";import"../sb-preview/runtime.js";import"./index-4a89c107.js";import"./index-6fd5a17b.js";import"./index-356e4a49.js";import"./libraryAdd-931d79ee.js";import"./Icon-72ef85ba.js";import"./BaseComponentProps-d435d0d0.js";import"./Button-da201b9b.js";import"./Button.tokens-be477cbd.js";import"./normalize-f756ee4b.js";import"./Caption-d066edab.js";import"./TextOverflowEllipsis-e584ab25.js";import"./Typography-56baa34a.js";import"./Heading-d8600f49.js";import"./Label-10c93eb5.js";import"./Legend-0cba57ca.js";import"./Link-7a88da71.js";import"./Paragraph-5ad16720.js";import"./Input.styles-82cfcbdb.js";import"./Spinner-250d1fa4.js";import"./OverflowMenuGroup-db34324f.js";import"./OverflowMenu-8a9c8cee.js";import"./useFloatPosition-f5da9dbf.js";import"./floating-ui.dom-a5fd4560.js";import"./OverflowMenuItem-63502423.js";import"./scrollbarStyling-ac52fe06.js";import"./ScrollableContainer.tokens-ffb04a93.js";import"./Divider-d499a68f.js";function i(e){const t=Object.assign({h1:"h1",h2:"h2"},n(),e.components);return p(m,{children:[o(s,{of:S}),`
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
//# sourceMappingURL=AppShell-f4f659c3.js.map
