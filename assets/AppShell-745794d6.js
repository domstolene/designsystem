import{a as o,j as p,F as m}from"./jsx-runtime-e43ccb36.js";import{M as s,C as a,b as l,A as c}from"./chunk-HLWAVYOI-ec38f660.js";import{C as d,L as h,c as f}from"./StoryTemplate-63bfa922.js";import{S as g}from"./constants-69754a51.js";import{A as S,D as r}from"./AppShell.stories-e9b86c29.js";import{u as n}from"./index-2ef8b458.js";import"./index-1b03fe98.js";import"./iframe-665932c2.js";import"../sb-preview/runtime.js";import"./index-6d191f71.js";import"./index-6fd5a17b.js";import"./index-356e4a49.js";import"./ddsReferenceTokens-fe3c594e.js";import"./libraryAdd-dfc2ed03.js";import"./Icon-e72250a3.js";import"./BaseComponentProps-b46a4458.js";import"./Button-7239ff93.js";import"./Button.tokens-f2748afe.js";import"./normalize-f756ee4b.js";import"./Caption-a006c5bc.js";import"./TextOverflowEllipsis-c2a9fc8f.js";import"./Typography-9d6edb9c.js";import"./Heading-3ac6a2d9.js";import"./Label-60a960ab.js";import"./Legend-bad3d4ec.js";import"./Link-bef7f478.js";import"./Paragraph-f6678e05.js";import"./Input.styles-c3e229ec.js";import"./Spinner-c9e13f0c.js";import"./OverflowMenuGroup-fec72746.js";import"./OverflowMenu-21b24d70.js";import"./useFloatPosition-8db71a9f.js";import"./floating-ui.dom-a5fd4560.js";import"./OverflowMenuItem-62fa7173.js";import"./scrollbarStyling-6a0ce14f.js";import"./ScrollableContainer.tokens-f54e5649.js";import"./Divider-1e1d271f.js";function i(e){const t=Object.assign({h1:"h1",h2:"h2"},n(),e.components);return p(m,{children:[o(s,{of:S}),`
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
//# sourceMappingURL=AppShell-745794d6.js.map
