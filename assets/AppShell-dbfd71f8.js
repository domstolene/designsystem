import{a as o,j as p,F as m}from"./jsx-runtime-e43ccb36.js";import{M as s,C as a,b as l,A as c}from"./chunk-HLWAVYOI-64354447.js";import{C as d,L as h,c as f}from"./StoryTemplate-dc809fd5.js";import{S as g}from"./constants-69754a51.js";import{A as S,D as r}from"./AppShell.stories-c83a2199.js";import{u as n}from"./index-2ef8b458.js";import"./index-1b03fe98.js";import"./iframe-5a5f529d.js";import"../sb-preview/runtime.js";import"./index-6d191f71.js";import"./index-6fd5a17b.js";import"./index-356e4a49.js";import"./ddsReferenceTokens-baf3ad90.js";import"./libraryAdd-ba36db88.js";import"./Icon-169fc8ae.js";import"./BaseComponentProps-46424d28.js";import"./Button-7f7a38c8.js";import"./Button.tokens-33bf137d.js";import"./normalize-f756ee4b.js";import"./Caption-1d5aeb22.js";import"./TextOverflowEllipsis-05821fa6.js";import"./Typography-9e3266f4.js";import"./Heading-862bf652.js";import"./Label-5ae0c148.js";import"./Legend-a1cc5017.js";import"./Link-15befa1a.js";import"./Paragraph-53be9306.js";import"./Input.styles-4c4ddd98.js";import"./Spinner-657d5c3d.js";import"./OverflowMenuGroup-fec72746.js";import"./OverflowMenu-ea73b702.js";import"./useFloatPosition-ae95f346.js";import"./floating-ui.dom-a5fd4560.js";import"./OverflowMenuItem-101a1d0b.js";import"./scrollbarStyling-4847117a.js";import"./ScrollableContainer.tokens-9daa2b8a.js";import"./Divider-8c3c7dc7.js";function i(e){const t=Object.assign({h1:"h1",h2:"h2"},n(),e.components);return p(m,{children:[o(s,{of:S}),`
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
//# sourceMappingURL=AppShell-dbfd71f8.js.map
