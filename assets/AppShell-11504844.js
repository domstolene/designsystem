import{a as o,j as p,F as s}from"./ddsReferenceTokens-f1d35829.js";import{M as m,C as a,e as l,A as c}from"./chunk-PCJTTTQV-28eb6f85.js";import{p as d,S as h,M as f,F as g}from"./storybook-components-e6e74b30.js";import{A as u,D as n}from"./AppShell.stories-6ec29585.js";import{u as i}from"./index-6fa374d0.js";import"./index-d47b1f5a.js";import"./iframe-516cb8b3.js";import"../sb-preview/runtime.js";import"./index-db9ff070.js";import"./index-d475d2ea.js";import"./index-356e4a49.js";import"./focus-visible-bfce03b6.js";import"./dds-icons-265d9665.js";import"./dds-core-c67132cd.js";import"./Button-aa30c63f.js";import"./Button.tokens-d278b944.js";import"./dds-typography-cc6cb429.js";import"./dds-form-9b45fc8d.js";import"./Spinner-dd54de98.js";import"./OverflowMenuGroup-d39ab7ad.js";import"./OverflowMenu-c583f668.js";import"./OverflowMenuItem-c1dda316.js";import"./scrollbarStyling-5cc839fb.js";import"./ScrollableContainer.tokens-c202eeaf.js";import"./Divider-1dae9af4.js";function r(t){const e=Object.assign({h1:"h1",h2:"h2"},i(),t.components);return p(s,{children:[o(m,{of:u}),`
`,o(e.h1,{id:"appshell",children:"AppShell"}),`
`,o(d,{docsHref:"https://design.domstol.no/987b33f71/p/14204f-appshell",figmaHref:"https://www.figma.com/file/ewqSDmkgqDQ5PyOsRp4V5b/DDS-Komponenter?type=design&node-id=13559%3A226257&mode=design&t=Ogap795lEH2RYDhQ-1",githubHref:"https://github.com/domstolene/designsystem/tree/main/packages/components/src/components/AppShell/AppShell"}),`
`,o(e.h2,{id:"demo",children:"Demo"}),`
`,o(a,{children:o(l,{of:n})}),`
`,o(h,{href:`${f}dds-components-backbutton`}),`
`,o(e.h2,{id:"bruk-i-koden",children:"Bruk i koden"}),`
`,o(g,{code:`
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
`,o(e.h2,{id:"api",children:"API"}),`
`,o(c,{of:n})]})}function K(t={}){const{wrapper:e}=Object.assign({},i(),t.components);return e?o(e,Object.assign({},t,{children:o(r,t)})):r(t)}export{K as default};
//# sourceMappingURL=AppShell-11504844.js.map
