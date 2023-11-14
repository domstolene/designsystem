import{j as r,a as c}from"./jsx-runtime-e43ccb36.js";import{r as f}from"./index-1b03fe98.js";import{C as d,$ as S,a as D,b as O}from"./Calendar-74fdbc07.js";import{S as C}from"./StoryTemplate-f63f16be.js";import"./ddsReferenceTokens-cf345c8b.js";import"./Input.styles-cd9d8463.js";import"./BaseComponentProps-c04e3b0f.js";import"./Caption-c95a25e6.js";import"./TextOverflowEllipsis-a0e35774.js";import"./Typography-8df5b43e.js";import"./Heading-eb094a5f.js";import"./Label-7698c3d3.js";import"./Legend-90ca2ccd.js";import"./Link-a0d6f9b6.js";import"./Paragraph-74ee9681.js";import"./normalize-f756ee4b.js";import"./Button-db658d75.js";import"./libraryAdd-bb03a5d3.js";import"./Icon-feef9230.js";import"./Button.tokens-f72962cb.js";import"./Spinner-94763e78.js";import"./chunk-HLWAVYOI-1a3dfe52.js";import"./iframe-25d93a6c.js";import"../sb-preview/runtime.js";import"./index-6d191f71.js";import"./index-6fd5a17b.js";import"./index-356e4a49.js";const K={title:"ALPHA/dds-datepicker/Calendar",component:d,argTypes:{}},g=new S("no-NO",{dateStyle:"full"}),a=o=>{const[e,s]=f.useState(D("Europe/Oslo"));return r(C,{title:"Calendar - default",children:[c(d,{...o,value:e,onChange:s}),r("p",{children:["Valgt dato:"," ",e?g.format(e.toDate("Europe/Oslo")):""]})]})},t=o=>{const[e,s]=f.useState(D("Europe/Oslo").add({days:1}));return r(C,{title:"Calendar - weekends unavailable",children:[c(d,{...o,value:e,onChange:s,isDateUnavailable:y=>O(y,"no-NO")}),r("p",{children:["Valgt dato:"," ",e?g.format(e.toDate("Europe/Oslo")):""]})]})};var n,l,p;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`(args: Partial<ComponentProps<typeof Calendar>>) => {
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
//# sourceMappingURL=Calendar.stories-6bf78106.js.map
