import{a as o,j as p,F as m}from"./jsx-runtime-e43ccb36.js";import{M as s,C as a,b as l,A as c}from"./chunk-S4VUQJ4A-35572fc3.js";import{C as d,L as h,c as f}from"./StoryTemplate-a53b4a90.js";import{S as g}from"./constants-69754a51.js";import{A as S,D as r}from"./AppShell.stories-6d24c67c.js";import{u as n}from"./index-2ef8b458.js";import"./index-1b03fe98.js";import"./iframe-65979afa.js";import"../sb-preview/runtime.js";import"./index-4a89c107.js";import"./index-6fd5a17b.js";import"./index-356e4a49.js";import"./ddsReferenceTokens-f9f5a4e4.js";import"./libraryAdd-5ac12ed0.js";import"./Icon-1678d620.js";import"./BaseComponentProps-9c025471.js";import"./Button-8a98ed6d.js";import"./Button.tokens-4b98f929.js";import"./normalize-f756ee4b.js";import"./Caption-c3e5a7e9.js";import"./TextOverflowEllipsis-1edb8626.js";import"./Typography-e1773316.js";import"./Heading-3c0ada0f.js";import"./Label-56d59f5f.js";import"./Legend-c9e1505c.js";import"./Link-1f045fc3.js";import"./Paragraph-68d1c0c0.js";import"./Input.styles-d3b58308.js";import"./Spinner-50e72058.js";import"./OverflowMenuGroup-fec72746.js";import"./OverflowMenu-e8d9d058.js";import"./useFloatPosition-da47bd7f.js";import"./floating-ui.dom-a5fd4560.js";import"./OverflowMenuItem-cae2f042.js";import"./scrollbarStyling-6511712a.js";import"./ScrollableContainer.tokens-17f22553.js";import"./Divider-c974f361.js";function i(e){const t=Object.assign({h1:"h1",h2:"h2"},n(),e.components);return p(m,{children:[o(s,{of:S}),`
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
`,o(c,{of:r})]})}function oo(e={}){const{wrapper:t}=Object.assign({},n(),e.components);return t?o(t,Object.assign({},e,{children:o(i,e)})):i(e)}export{oo as default};
//# sourceMappingURL=AppShell-8a9762d0.js.map
