import{j as r,a as c}from"./jsx-runtime-e43ccb36.js";import{r as f}from"./index-1b03fe98.js";import{C as d,$ as S,a as D,b as O}from"./Calendar-7d46d9dc.js";import{S as C}from"./StoryTemplate-b1805fe5.js";import"./ddsReferenceTokens-cf345c8b.js";import"./Input.styles-9955857c.js";import"./BaseComponentProps-217bcb03.js";import"./Caption-7324954d.js";import"./TextOverflowEllipsis-5f7b5b23.js";import"./Typography-37e894bc.js";import"./Heading-a143a4ab.js";import"./Label-e6c412e2.js";import"./Legend-8686145c.js";import"./Link-0af95a08.js";import"./Paragraph-67d8f149.js";import"./normalize-f756ee4b.js";import"./Button-8ec36c15.js";import"./libraryAdd-792d55f1.js";import"./Icon-96508a26.js";import"./Button.tokens-a4431843.js";import"./Spinner-3b81cc2b.js";import"./chunk-HLWAVYOI-adac57c3.js";import"./iframe-7f7b0921.js";import"../sb-preview/runtime.js";import"./index-6d191f71.js";import"./index-6fd5a17b.js";import"./index-356e4a49.js";const K={title:"ALPHA/dds-datepicker/Calendar",component:d,argTypes:{}},g=new S("no-NO",{dateStyle:"full"}),a=o=>{const[e,s]=f.useState(D("Europe/Oslo"));return r(C,{title:"Calendar - default",children:[c(d,{...o,value:e,onChange:s}),r("p",{children:["Valgt dato:"," ",e?g.format(e.toDate("Europe/Oslo")):""]})]})},t=o=>{const[e,s]=f.useState(D("Europe/Oslo").add({days:1}));return r(C,{title:"Calendar - weekends unavailable",children:[c(d,{...o,value:e,onChange:s,isDateUnavailable:y=>O(y,"no-NO")}),r("p",{children:["Valgt dato:"," ",e?g.format(e.toDate("Europe/Oslo")):""]})]})};var n,l,p;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`(args: Partial<ComponentProps<typeof Calendar>>) => {
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
//# sourceMappingURL=Calendar.stories-78e39674.js.map
