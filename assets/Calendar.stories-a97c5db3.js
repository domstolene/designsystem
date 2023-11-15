import{j as r,a as c}from"./jsx-runtime-e43ccb36.js";import{r as f}from"./index-1b03fe98.js";import{C as d,$ as S,a as D,b as O}from"./Calendar-85523535.js";import{S as C}from"./StoryTemplate-6a95b3b2.js";import"./ddsReferenceTokens-cf345c8b.js";import"./Input.styles-4ebb4961.js";import"./BaseComponentProps-77dc9c6e.js";import"./Caption-956f7c23.js";import"./TextOverflowEllipsis-5f7b5b23.js";import"./Typography-aec60abc.js";import"./Heading-1a21ccc8.js";import"./Label-1e45d63d.js";import"./Legend-8f4b1074.js";import"./Link-1d242339.js";import"./Paragraph-6d49c218.js";import"./normalize-f756ee4b.js";import"./Button-ce4ef2c9.js";import"./libraryAdd-1d1f72ea.js";import"./Icon-764411b5.js";import"./Button.tokens-a9a7352b.js";import"./Spinner-b213abf0.js";import"./chunk-HLWAVYOI-3e05d052.js";import"./iframe-32b856a7.js";import"../sb-preview/runtime.js";import"./index-6d191f71.js";import"./index-6fd5a17b.js";import"./index-356e4a49.js";const K={title:"ALPHA/dds-datepicker/Calendar",component:d,argTypes:{}},g=new S("no-NO",{dateStyle:"full"}),a=o=>{const[e,s]=f.useState(D("Europe/Oslo"));return r(C,{title:"Calendar - default",children:[c(d,{...o,value:e,onChange:s}),r("p",{children:["Valgt dato:"," ",e?g.format(e.toDate("Europe/Oslo")):""]})]})},t=o=>{const[e,s]=f.useState(D("Europe/Oslo").add({days:1}));return r(C,{title:"Calendar - weekends unavailable",children:[c(d,{...o,value:e,onChange:s,isDateUnavailable:y=>O(y,"no-NO")}),r("p",{children:["Valgt dato:"," ",e?g.format(e.toDate("Europe/Oslo")):""]})]})};var n,l,p;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`(args: Partial<ComponentProps<typeof Calendar>>) => {
  const [date, setDate] = useState<CalendarDate | ZonedDateTime | CalendarDateTime>(today('Europe/Oslo'));
  return <StoryTemplate title="Calendar - default">
      <Calendar {...args} value={date} onChange={setDate} />
      <p>
        Valgt dato:{' '}
        {date ? norwegianDateFormatter.format(date.toDate('Europe/Oslo')) : ''}
      </p>
    </StoryTemplate>;
}`,...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var i,m,u;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`(args: Partial<ComponentProps<typeof Calendar>>) => {
  const [date, setDate] = useState<CalendarDate | ZonedDateTime | CalendarDateTime>(today('Europe/Oslo').add({
    days: 1
  }));
  return <StoryTemplate title="Calendar - weekends unavailable">
      <Calendar {...args} value={date} onChange={setDate} isDateUnavailable={date => isWeekend(date, 'no-NO')} />
      <p>
        Valgt dato:{' '}
        {date ? norwegianDateFormatter.format(date.toDate('Europe/Oslo')) : ''}
      </p>
    </StoryTemplate>;
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const M=["Default","UnavailableWeekends"];export{a as Default,t as UnavailableWeekends,M as __namedExportsOrder,K as default};
//# sourceMappingURL=Calendar.stories-a97c5db3.js.map
