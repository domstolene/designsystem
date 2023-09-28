import{a as r,j as n,F as s}from"./ddsReferenceTokens-647ce456.js";import{M as c,C as m,b as l,A as a}from"./chunk-PCJTTTQV-961cba5e.js";import{C as h,L as p,c as b}from"./StoryTemplate-ccc1e3e8.js";import{S as u}from"./constants-69754a51.js";import{B as f,D as t}from"./Breadcrumbs.stories-12d9608c.js";import{u as o}from"./index-bda0bad7.js";import"./index-ebeaab24.js";import"./iframe-1ae61cdb.js";import"../sb-preview/runtime.js";import"./index-72bda2b9.js";import"./index-9c09ad76.js";import"./index-d475d2ea.js";import"./index-356e4a49.js";import"./Breadcrumbs-47ebf496.js";import"./Caption-5c254d72.js";import"./BaseComponentProps-a100791d.js";import"./TextOverflowEllipsis-e3546c5b.js";import"./Typography-1747463b.js";import"./Heading-dc72d0b9.js";import"./Label-23c96940.js";import"./Legend-dbc3ced6.js";import"./Link-9aff7843.js";import"./Paragraph-3340e0ea.js";import"./libraryAdd-15469728.js";import"./Icon-e6324a43.js";import"./removeListStyling-80ec5e55.js";function d(i){const e=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",code:"code",h3:"h3",strong:"strong"},o(),i.components);return n(s,{children:[r(c,{of:f}),`
`,r(e.h1,{id:"breadcrumbs",children:"Breadcrumbs"}),`
`,r(h,{docsHref:"https://design.domstol.no/987b33f71/p/376bad-breadcrumbs/b/719cb3",figmaHref:"https://www.figma.com/file/ewqSDmkgqDQ5PyOsRp4V5b/?node-id=1676%3A0",githubHref:"https://github.com/domstolene/designsystem/tree/main/packages/components/src/components/Breadcrumbs"}),`
`,r(e.h2,{id:"demo",children:"Demo"}),`
`,r(m,{children:r(l,{of:t})}),`
`,r(p,{href:`${u}dds-components-breadcrumbs`}),`
`,r(e.h2,{id:"oversikt",children:"Oversikt"}),`
`,r(e.p,{children:"Komponenten består av to subkomponenter:"}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:[r(e.code,{children:"<Breadcrumbs />"})," som er selve brødsmulestien"]}),`
`,n(e.li,{children:[r(e.code,{children:"<Breadcrumb />"})," som er barna i brødsmulestien"]}),`
`]}),`
`,n(e.p,{children:["Siste ",r(e.code,{children:"<Breadcrumb />"})," skal være den siden brukeren er på, uten oppgitt URL."]}),`
`,r(e.h2,{id:"bruk-i-koden",children:"Bruk i koden"}),`
`,r(b,{code:`
  import { Breadcrumb, Breadcrumbs } from '@norges-domstoler/dds-components';

<Breadcrumbs>
  <Breadcrumb href="#">Side 1</Breadcrumb>
  <Breadcrumb href="#">Side 2</Breadcrumb>
  <Breadcrumb>Side 3</Breadcrumb>
</Breadcrumbs>
`}),`
`,r(e.h2,{id:"api",children:"API"}),`
`,r(e.h3,{id:"breadcrumbs-1",children:"Breadcrumbs"}),`
`,n(e.p,{children:["Selve brødsmulestien. Skal ha ",r(e.code,{children:"<Breadcrumb />"})," som barn."]}),`
`,r(a,{of:t}),`
`,n(e.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",r(e.code,{children:"HTMLAttributes<HTMLElement>"}),"-interface i ",r(e.code,{children:"htmlProps"}),"."]}),`
`,r(e.h3,{id:"breadcrumb",children:"Breadcrumb"}),`
`,n(e.p,{children:["Brødsmule. Returnerer ",r(e.code,{children:"<a>"})," hvis ",r(e.code,{children:"href"}),"-prop er oppgitt eller ",r(e.code,{children:"<span>"}),` hvis ikke.
`,r(e.strong,{children:"OBS!"})," Alle ",r(e.code,{children:"<Breadcrumb>"}),"-komponenter bør være lenker bortsett fra den siste som tilsvarer siden brukeren er inne på."]}),`
`,n(e.p,{children:["Det støttes alle native HTML-attributter som er en del av ",r(e.code,{children:"AnchorHTMLAttributes<HTMLAnchorElement>"})," eller ",r(e.code,{children:"HTMLAttributes<HTMLSpanElement>"})," -interface."]}),`
`,r(e.h2,{id:"retningslinjer",children:"Retningslinjer"}),`
`,n(e.ul,{children:[`
`,r(e.li,{children:"Helst unngå at brødsmulene legger seg over flere linjer. Test på mindre skjermer."}),`
`,r(e.li,{children:"Ikke bruk sesjonshistorikken i brødsmulene."}),`
`,n(e.li,{children:["Den siste brødsmulen skal tilsvare nåværende siden og bør dermed ikke være en lenke. Det er valgfritt å bruke ",r(e.code,{children:'aria-current="page"'})," på den."]}),`
`]})]})}function G(i={}){const{wrapper:e}=Object.assign({},o(),i.components);return e?r(e,Object.assign({},i,{children:r(d,i)})):d(i)}export{G as default};
//# sourceMappingURL=Breadcrumbs-656e4a29.js.map
