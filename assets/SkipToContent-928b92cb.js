import{a as e,j as t,F as s}from"./ddsReferenceTokens-f1d35829.js";import{M as d,C as l,e as p,A as m,P as a}from"./chunk-PCJTTTQV-a2e28881.js";import{p as c,S as h,M as g,F as k}from"./storybook-components-930ad3ec.js";import{S as u}from"./SkipToContent.stories-5ea8f0c3.js";import{u as r}from"./index-6fa374d0.js";import"./index-d47b1f5a.js";import"./iframe-5d1d47d2.js";import"../sb-preview/runtime.js";import"./index-db9ff070.js";import"./index-d475d2ea.js";import"./index-356e4a49.js";import"./focus-visible-bfce03b6.js";import"./dds-typography-cc6cb429.js";import"./dds-core-c67132cd.js";import"./dds-form-9b45fc8d.js";function i(o){const n=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",ul:"ul",li:"li"},r(),o.components);return t(s,{children:[e(d,{of:u}),`
`,e(n.h1,{id:"skiptocontent",children:"SkipToContent"}),`
`,e(c,{docsHref:"https://design.domstol.no/987b33f71/p/206fdc-skiptocontent/b/11d1c4",figmaHref:"https://www.figma.com/file/ewqSDmkgqDQ5PyOsRp4V5b/?node-id=4695%3A96825",githubHref:"https://github.com/domstolene/designsystem/tree/master/components/src/components/SkipToContent"}),`
`,e(n.h2,{id:"demo",children:"Demo"}),`
`,e(l,{children:e(p,{id:"dds-components-skiptocontent--default"})}),`
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
`,e(m,{story:a}),`
`,t(n.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",e(n.code,{children:"HTMLAttributes<HTMLAnchorElement>"}),"-interface i ",e(n.code,{children:"htmlProps"}),"."]}),`
`,e(n.h2,{id:"retningslinjer",children:"Retningslinjer"}),`
`,t(n.ul,{children:[`
`,e(n.li,{children:"Komponenten skal brukes i alle løsninger som har navigasjon og annet sekunært innhold som kan hopper over."}),`
`,t(n.li,{children:["Legg ",e(n.code,{children:"<SkipToContent />"})," inn som første fokuserbart element i koden."]}),`
`,t(n.li,{children:["Komponenten bruker CSS-reglene ",e(n.code,{children:"position: absolute"}),", ",e(n.code,{children:"top: 0"})," (som default) og ",e(n.code,{children:"width: 100%"}),", og det er i utgangspunktet meningen at den skal dekke hele bredden på siden. Sørg for at komponenten har riktig plass i hierarkiet med tanke på posisjonering."]}),`
`,t(n.li,{children:["Hvis nettsiden er kompleks og består av mange seksjoner kan det være relevant å bruke flere ",e(n.code,{children:"<SkipToContent />"})," komponenter. Det er som regel ikke nødvendig, men det bør tas en individuell vurdering."]}),`
`]})]})}function P(o={}){const{wrapper:n}=Object.assign({},r(),o.components);return n?e(n,Object.assign({},o,{children:e(i,o)})):i(o)}export{P as default};
//# sourceMappingURL=SkipToContent-928b92cb.js.map
