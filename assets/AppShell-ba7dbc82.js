import{a as e,j as i,F as p}from"./focus-visible-8467fd8b.js";import{M as a,C as l,e as m,A as c}from"./chunk-PCJTTTQV-aabcbb96.js";import{p as d,S as h,M as f,F as g}from"./storybook-components-76b2a6b1.js";import{A as u,D as t}from"./AppShell.stories-2d31c033.js";import{u as s}from"./index-6fa374d0.js";import"./index-d47b1f5a.js";import"./iframe-59584ab4.js";import"../sb-preview/runtime.js";import"./index-db9ff070.js";import"./index-d475d2ea.js";import"./index-356e4a49.js";import"./dds-icons-f9255b51.js";import"./dds-core-b89b291f.js";import"./Divider-1feea3ff.js";function r(n){const o=Object.assign({h1:"h1",h2:"h2"},s(),n.components);return i(p,{children:[e(a,{of:u}),`
`,e(o.h1,{id:"appshell",children:"AppShell"}),`
`,e(d,{docsHref:"https://design.domstol.no/987b33f71/p/14204f-appshell",figmaHref:"https://www.figma.com/file/ewqSDmkgqDQ5PyOsRp4V5b/DDS-Komponenter?type=design&node-id=13559%3A226257&mode=design&t=Ogap795lEH2RYDhQ-1",githubHref:"https://github.com/domstolene/designsystem/tree/master/packages/components/src/components/AppShell/AppShell"}),`
`,e(o.h2,{id:"demo",children:"Demo"}),`
`,e(l,{children:e(m,{of:t})}),`
`,e(h,{href:`${f}dds-components-backbutton`}),`
`,e(o.h2,{id:"bruk-i-koden",children:"Bruk i koden"}),`
`,e(g,{code:`
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
`,e(o.h2,{id:"api",children:"API"}),`
`,e(c,{of:t})]})}function I(n={}){const{wrapper:o}=Object.assign({},s(),n.components);return o?e(o,Object.assign({},n,{children:e(r,n)})):r(n)}export{I as default};
//# sourceMappingURL=AppShell-ba7dbc82.js.map
