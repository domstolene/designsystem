import{a as e,j as t,F as s}from"./ddsReferenceTokens-647ce456.js";import{M as d,C as m,b as p,A as a,P as l}from"./chunk-S4VUQJ4A-80f24beb.js";import{C as c,L as h,c as k}from"./StoryTemplate-a06893d1.js";import{S as g}from"./constants-69754a51.js";import{S as u}from"./SkipToContent.stories-7b8eb1a8.js";import{u as r}from"./index-bda0bad7.js";import"./index-ebeaab24.js";import"./iframe-c84e3ef2.js";import"../sb-preview/runtime.js";import"./index-72bda2b9.js";import"./index-9c09ad76.js";import"./index-356e4a49.js";import"./Caption-0ff47cfa.js";import"./BaseComponentProps-a100791d.js";import"./TextOverflowEllipsis-e3546c5b.js";import"./Typography-d54ea9fd.js";import"./Heading-ded557b4.js";import"./Label-b7852367.js";import"./Legend-d58c0461.js";import"./Link-037ca604.js";import"./Paragraph-a74f99d8.js";import"./Input.styles-115c96a3.js";function i(o){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",ul:"ul",li:"li"},r(),o.components);return t(s,{children:[e(d,{of:u}),`
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
`]})]})}function Y(o={}){const{wrapper:n}=Object.assign({},r(),o.components);return n?e(n,Object.assign({},o,{children:e(i,o)})):i(o)}export{Y as default};
//# sourceMappingURL=SkipToContent-e5fd3d42.js.map
