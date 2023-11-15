import{a as e,j as o,F as n}from"./jsx-runtime-e43ccb36.js";import{M as m,C as p,b as s,A as c,P as d}from"./chunk-HLWAVYOI-3e05d052.js";import{C as l,L as h,c as f}from"./StoryTemplate-6a95b3b2.js";import{S as u}from"./constants-c672c5f8.js";import{D as k,a as D}from"./DatePicker.stories-bf64e65e.js";import"./index-1b03fe98.js";import"./Calendar-85523535.js";import{u as i}from"./index-2ef8b458.js";import"./iframe-32b856a7.js";import"../sb-preview/runtime.js";import"./index-6d191f71.js";import"./index-6fd5a17b.js";import"./index-356e4a49.js";import"./ddsReferenceTokens-cf345c8b.js";import"./Input.styles-4ebb4961.js";import"./BaseComponentProps-77dc9c6e.js";import"./Caption-956f7c23.js";import"./TextOverflowEllipsis-5f7b5b23.js";import"./Typography-aec60abc.js";import"./Heading-1a21ccc8.js";import"./Label-1e45d63d.js";import"./Legend-8f4b1074.js";import"./Link-1d242339.js";import"./Paragraph-6d49c218.js";import"./libraryAdd-1d1f72ea.js";import"./Icon-764411b5.js";import"./normalize-f756ee4b.js";import"./InputMessage-8b65ffa3.js";import"./useFloatPosition-8239dfed.js";import"./floating-ui.dom-a5fd4560.js";import"./Button-ce4ef2c9.js";import"./Button.tokens-a9a7352b.js";import"./Spinner-b213abf0.js";function a(t){const r=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",a:"a"},i(),t.components);return o(n,{children:[e(m,{of:k}),`
`,e(r.h1,{id:"datepicker",children:"DatePicker"}),`
`,e(l,{docsHref:"TODO",figmaHref:"https://www.figma.com/file/ewqSDmkgqDQ5PyOsRp4V5b/DDS-Komponenter?type=design&node-id=13559%3A226257&mode=design&t=Ogap795lEH2RYDhQ-1",githubHref:"https://github.com/domstolene/designsystem/tree/main/packages/datepicker"}),`
`,e(r.h2,{id:"demo",children:"Demo"}),`
`,e(p,{children:e(s,{of:D})}),`
`,e(h,{href:`${u}dds-datepicker-datepicker`}),`
`,e(r.h2,{id:"bruk-i-koden",children:"Bruk i koden"}),`
`,e(f,{code:`
import { useState } from 'react';
import { DatePicker } from '@norges-domstoler/dds-datepicker';
import { CalendarDate } from '@internationalized/date';

const [value, setValue] = useState<CalendarDate | undefined>(
new CalendarDate(2023, 8, 28)
);

<DatePicker label="Velg dato" value={value} onChange={setValue} />
`}),`
`,e(r.h2,{id:"api",children:"API"}),`
`,o(r.p,{children:[e(r.code,{children:"DatePicker"}),"-komponenten er implementert vha. ",e(r.a,{href:"https://react-spectrum.adobe.com/react-aria",target:"_blank",rel:"nofollow noopener noreferrer",children:"react-aria"}),`.
For mer utfyllende dokumentasjon av props referrerer vi deg til `,o(r.a,{href:"https://react-spectrum.adobe.com/react-aria/DatePicker.html#props",target:"_blank",rel:"nofollow noopener noreferrer",children:[e(r.code,{children:"DatePicker"})," dokumentasjon til react-aria"]}),"."]}),`
`,e(c,{story:d})]})}function J(t={}){const{wrapper:r}=Object.assign({},i(),t.components);return r?e(r,Object.assign({},t,{children:e(a,t)})):a(t)}export{J as default};
//# sourceMappingURL=DatePicker-61d7c20c.js.map
