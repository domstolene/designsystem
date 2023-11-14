import{a as o,j as p,F as m}from"./jsx-runtime-e43ccb36.js";import{M as s,C as a,b as l,A as c}from"./chunk-HLWAVYOI-1a3dfe52.js";import{C as d,L as h,c as f}from"./StoryTemplate-f63f16be.js";import{S as g}from"./constants-69754a51.js";import{A as S,D as r}from"./AppShell.stories-a687e331.js";import{u as n}from"./index-2ef8b458.js";import"./index-1b03fe98.js";import"./iframe-25d93a6c.js";import"../sb-preview/runtime.js";import"./index-6d191f71.js";import"./index-6fd5a17b.js";import"./index-356e4a49.js";import"./ddsReferenceTokens-cf345c8b.js";import"./libraryAdd-bb03a5d3.js";import"./Icon-feef9230.js";import"./BaseComponentProps-c04e3b0f.js";import"./Button-db658d75.js";import"./Button.tokens-f72962cb.js";import"./normalize-f756ee4b.js";import"./Caption-c95a25e6.js";import"./TextOverflowEllipsis-a0e35774.js";import"./Typography-8df5b43e.js";import"./Heading-eb094a5f.js";import"./Label-7698c3d3.js";import"./Legend-90ca2ccd.js";import"./Link-a0d6f9b6.js";import"./Paragraph-74ee9681.js";import"./Input.styles-cd9d8463.js";import"./Spinner-94763e78.js";import"./OverflowMenuGroup-fec72746.js";import"./OverflowMenu-9b386850.js";import"./useFloatPosition-8239dfed.js";import"./floating-ui.dom-a5fd4560.js";import"./OverflowMenuItem-47b49390.js";import"./scrollbarStyling-5c8dd8e6.js";import"./ScrollableContainer.tokens-2f8b82e4.js";import"./Divider-42cd3281.js";function i(e){const t=Object.assign({h1:"h1",h2:"h2"},n(),e.components);return p(m,{children:[o(s,{of:S}),`
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
//# sourceMappingURL=AppShell-669a06ce.js.map
