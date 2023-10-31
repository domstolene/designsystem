import{a as e,j as t,F as s}from"./jsx-runtime-e43ccb36.js";import{M as d,C as m,b as p,A as a,P as l}from"./chunk-HLWAVYOI-3e0a616d.js";import{C as c,L as h,c as k}from"./StoryTemplate-fe1f5a61.js";import{S as g}from"./constants-69754a51.js";import{S as u}from"./SkipToContent.stories-e3af0e95.js";import{u as r}from"./index-2ef8b458.js";import"./index-1b03fe98.js";import"./iframe-35bb3082.js";import"../sb-preview/runtime.js";import"./index-6d191f71.js";import"./index-6fd5a17b.js";import"./index-356e4a49.js";import"./ddsReferenceTokens-a28ebf03.js";import"./Caption-d810b87c.js";import"./BaseComponentProps-b6ad9f7d.js";import"./TextOverflowEllipsis-6cc9a60a.js";import"./Typography-d13ef156.js";import"./Heading-0c5437bc.js";import"./Label-05114518.js";import"./Legend-9969638c.js";import"./Link-c264ab95.js";import"./Paragraph-88055bd8.js";import"./Input.styles-6b8ed75e.js";function i(o){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",ul:"ul",li:"li"},r(),o.components);return t(s,{children:[e(d,{of:u}),`
`,e(n.h1,{id:"skiptocontent",children:"SkipToContent"}),`
`,e(c,{docsHref:"https://design.domstol.no/987b33f71/p/206fdc-skiptocontent/b/11d1c4",figmaHref:"https://www.figma.com/file/ewqSDmkgqDQ5PyOsRp4V5b/?node-id=4695%3A96825",githubHref:"https://github.com/domstolene/designsystem/tree/main/packages/components/src/components/SkipToContent"}),`
`,e(n.h2,{id:"demo",children:"Demo"}),`
`,e(m,{children:e(p,{id:"dds-components-skiptocontent--default"})}),`
`,e(h,{href:`${g}dds-components-skiptocontent`}),`
`,e(n.h2,{id:"bruk-i-koden",children:"Bruk i koden"}),`
`,e(k,{code:`import { SkipToContent } from '@norges-domstoler/dds-components';

<body>
  <SkipToContent {...args} href="#innhold" />
  {/* navigasjon o.l. */}
  <Typography id="innhold">Innhold</Typography>
</body>
`}),`
`,e(n.h2,{id:"api",children:"API"}),`
`,e(a,{story:l}),`
`,t(n.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",e(n.code,{children:"HTMLAttributes<HTMLAnchorElement>"}),"-interface i ",e(n.code,{children:"htmlProps"}),"."]}),`
`,e(n.h2,{id:"retningslinjer",children:"Retningslinjer"}),`
`,t(n.ul,{children:[`
`,e(n.li,{children:"Komponenten skal brukes i alle løsninger som har navigasjon og annet sekunært innhold som kan hopper over."}),`
`,t(n.li,{children:["Legg ",e(n.code,{children:"<SkipToContent />"})," inn som første fokuserbart element i koden."]}),`
`,t(n.li,{children:["Komponenten bruker CSS-reglene ",e(n.code,{children:"position: absolute"}),", ",e(n.code,{children:"top: 0"})," (som default) og ",e(n.code,{children:"width: 100%"}),", og det er i utgangspunktet meningen at den skal dekke hele bredden på siden. Sørg for at komponenten har riktig plass i hierarkiet med tanke på posisjonering."]}),`
`,t(n.li,{children:["Hvis nettsiden er kompleks og består av mange seksjoner kan det være relevant å bruke flere ",e(n.code,{children:"<SkipToContent />"})," komponenter. Det er som regel ikke nødvendig, men det bør tas en individuell vurdering."]}),`
`]})]})}function q(o={}){const{wrapper:n}=Object.assign({},r(),o.components);return n?e(n,Object.assign({},o,{children:e(i,o)})):i(o)}export{q as default};
//# sourceMappingURL=SkipToContent-a2180125.js.map
