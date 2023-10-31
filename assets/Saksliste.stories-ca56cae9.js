import{j as r,a as e}from"./jsx-runtime-e43ccb36.js";import{G as b,a as t}from"./GridChild-3faaf073.js";import{H as i}from"./Heading-0c5437bc.js";import{T as l}from"./index-529abd06.js";import{T as s}from"./Tag-f6a10b74.js";import{A as T,M as h}from"./libraryAdd-72c0bfa3.js";import{B as d}from"./Button-32ef9fe8.js";import{D as u}from"./Divider-ffd037d3.js";import{T as S}from"./Typography-d13ef156.js";import{O as y}from"./OverflowMenuGroup-fec72746.js";import{O as f}from"./OverflowMenu-a3528fee.js";import"./index-1b03fe98.js";import"./ddsReferenceTokens-a28ebf03.js";import"./BaseComponentProps-b6ad9f7d.js";import"./TextOverflowEllipsis-6cc9a60a.js";import"./scrollbarStyling-c2e6e782.js";import"./ScrollableContainer.tokens-fec9d215.js";import"./Caption-d810b87c.js";import"./Label-05114518.js";import"./Legend-9969638c.js";import"./Link-c264ab95.js";import"./Paragraph-88055bd8.js";import"./Input.styles-6b8ed75e.js";import"./removeButtonStyling-867d6ba4.js";import"./DescriptionListDesc-a1f8265e.js";import"./Icon-eb542f51.js";import"./normalize-f756ee4b.js";import"./VisuallyHidden-e3800c53.js";import"./LocalMessage.tokens-cfdb2440.js";import"./Button.tokens-aa4a9c73.js";import"./Spinner-842be24a.js";import"./useFloatPosition-50e3a2ff.js";import"./floating-ui.dom-a5fd4560.js";import"./index-6fd5a17b.js";import"./OverflowMenuItem-7e972be0.js";const ie={title:"Playground"},g=[{innkommet:"01.01.2000",saksnummer:"12-34567/TRD",status:"Påbegynt",saksbehandler:"Ola Olavsen",avdød:"Gunnar Gunnarsen",fødselsdato:"01.01.1950",dødsdato:"01.01.1999"},{innkommet:"02.02.2000",saksnummer:"12-98765/TRD",status:"Ikke påbegynt",saksbehandler:"Kari Nordmann",avdød:"Johanne Johansen",fødselsdato:"01.01.1950",dødsdato:"01.01.1999"},{innkommet:"10.10.1990",saksnummer:"12-24680/TRD",status:"Ikke påbegynt",saksbehandler:"Ola Olavsen",avdød:"Pernille Pernillesen",fødselsdato:"01.01.1950",dødsdato:"01.01.1999"}],v=[{innkommet:"01.01.2000",saksnummer:"12-34567/TRD",status:"Påbegynt",saksbehandler:"Ola Olavsen",siktede:"Gunnar Gunnarsen",utløpsfrist:"01.01.1950",aktivitet:"Registrer parter",dokumenter:3},{innkommet:"02.02.2000",saksnummer:"12-98765/TRD",status:"Ikke påbegynt",saksbehandler:"Kari Nordmann",siktede:"Johanne Johansen",utløpsfrist:"01.01.1950",aktivitet:"Til registrering",dokumenter:1},{innkommet:"10.10.1990",saksnummer:"12-24680/TRD",status:"Ikke påbegynt",saksbehandler:"Ola Olavsen",siktede:"Pernille Pernillesen",utløpsfrist:"01.01.1950",aktivitet:"Til registrering",dokumenter:1}],w=[{title:"Vis sak"},{title:"Tildel sak til meg"},{title:"Avslutt sak"}],m={width:"100%"},R={cursor:"pointer"},o=()=>r(b,{as:"div",children:[e(t,{columnsOccupied:"all",children:e(i,{level:3,children:"Saksliste - Dødsfall"})}),e(t,{columnsOccupied:"all",children:e(l.Wrapper,{children:r(l,{style:m,children:[e(l.Head,{children:r(l.Row,{type:"head",children:[e(l.SortCell,{onClick:()=>{},children:"Innkommet"}),e(l.SortCell,{onClick:()=>{},children:"Saksnummer"}),e(l.SortCell,{onClick:()=>{},children:"Status"}),e(l.SortCell,{onClick:()=>{},children:"Saksbehandler"}),e(l.SortCell,{onClick:()=>{},children:"Avdød"}),e(l.SortCell,{onClick:()=>{},children:"Fødselsdato"}),e(l.SortCell,{onClick:()=>{},children:"Dødsdato"}),e(l.Cell,{type:"head",children:"Vis mer"})]})}),e(l.Body,{children:g.map((n,a)=>r(l.Row,{children:[e(l.Cell,{children:n.innkommet}),e(l.Cell,{children:n.saksnummer}),e(l.Cell,{children:e(s,{text:n.status,purpose:a===0?"info":"warning"})}),e(l.Cell,{children:n.saksbehandler}),e(l.Cell,{children:n.avdød}),e(l.Cell,{children:n.fødselsdato}),e(l.Cell,{children:n.dødsdato}),e(l.Cell,{children:e(d,{icon:T,purpose:"primary",appearance:"borderless"})})]},a))})]})})}),e(u,{}),e(t,{columnsOccupied:"all",children:e(i,{level:3,children:"Saksliste - Fengsling"})}),e(t,{columnsOccupied:"all",children:e(l.Wrapper,{children:r(l,{style:m,children:[e(l.Head,{children:r(l.Row,{type:"head",children:[e(l.SortCell,{onClick:()=>{},children:"Innkommet"}),e(l.SortCell,{onClick:()=>{},children:"Saksnummer"}),e(l.SortCell,{onClick:()=>{},children:"Status"}),e(l.SortCell,{onClick:()=>{},children:"Saksbehandler"}),e(l.SortCell,{onClick:()=>{},children:"Siktede"}),e(l.SortCell,{onClick:()=>{},children:"Utløpsfrist"}),e(l.SortCell,{onClick:()=>{},children:"Aktivitet"}),e(l.SortCell,{onClick:()=>{},children:"Dokumenter"}),e(l.Cell,{type:"head",children:"Valg"})]})}),e(l.Body,{children:v.map((n,a)=>r(l.Row,{children:[e(l.Cell,{children:n.innkommet}),e(l.Cell,{children:n.saksnummer}),e(l.Cell,{children:e(s,{text:n.status,purpose:a===0?"info":"warning"})}),e(l.Cell,{children:n.saksbehandler}),e(l.Cell,{children:n.siktede}),e(l.Cell,{children:n.utløpsfrist}),e(l.Cell,{children:n.aktivitet}),e(l.Cell,{children:e(S,{style:R,typographyType:"a",children:"Vis dokumenter("+n.dokumenter+")"})}),e(l.Cell,{children:r(y,{children:[e(d,{icon:h,purpose:"secondary",appearance:"borderless"}),e(f,{items:w,onClose:function(){},onToggle:function(){}})]})})]},a))})]})})})]});var c,C,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  return <Grid as="div">
      <GridChild columnsOccupied="all">
        <Heading level={3}>Saksliste - Dødsfall</Heading>
      </GridChild>
      <GridChild columnsOccupied="all">
        <Table.Wrapper>
          <Table style={wrapperStyle}>
            <Table.Head>
              <Table.Row type="head">
                <Table.SortCell onClick={() => {}}>Innkommet</Table.SortCell>
                <Table.SortCell onClick={() => {}}>Saksnummer</Table.SortCell>
                <Table.SortCell onClick={() => {}}>Status</Table.SortCell>
                <Table.SortCell onClick={() => {}}>
                  Saksbehandler
                </Table.SortCell>
                <Table.SortCell onClick={() => {}}>Avdød</Table.SortCell>
                <Table.SortCell onClick={() => {}}>Fødselsdato</Table.SortCell>
                <Table.SortCell onClick={() => {}}>Dødsdato</Table.SortCell>
                <Table.Cell type="head">Vis mer</Table.Cell>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              {dødsfallItems.map((item, index: number) => <Table.Row key={index}>
                  <Table.Cell>{item.innkommet}</Table.Cell>
                  <Table.Cell>{item.saksnummer}</Table.Cell>
                  <Table.Cell>
                    <Tag text={item.status} purpose={index === 0 ? "info" : "warning"}></Tag>
                  </Table.Cell>
                  <Table.Cell>{item.saksbehandler}</Table.Cell>
                  <Table.Cell>{item.avdød}</Table.Cell>
                  <Table.Cell>{item.fødselsdato}</Table.Cell>
                  <Table.Cell>{item.dødsdato}</Table.Cell>
                  <Table.Cell>
                    <Button icon={ArrowRightIcon} purpose="primary" appearance="borderless" />
                  </Table.Cell>
                </Table.Row>)}
            </Table.Body>
          </Table>
        </Table.Wrapper>
      </GridChild>
      <Divider />
      <GridChild columnsOccupied="all">
        <Heading level={3}>Saksliste - Fengsling</Heading>
      </GridChild>
      <GridChild columnsOccupied="all">
        <Table.Wrapper>
          <Table style={wrapperStyle}>
            <Table.Head>
              <Table.Row type="head">
                <Table.SortCell onClick={() => {}}>Innkommet</Table.SortCell>
                <Table.SortCell onClick={() => {}}>Saksnummer</Table.SortCell>
                <Table.SortCell onClick={() => {}}>Status</Table.SortCell>
                <Table.SortCell onClick={() => {}}>
                  Saksbehandler
                </Table.SortCell>
                <Table.SortCell onClick={() => {}}>Siktede</Table.SortCell>
                <Table.SortCell onClick={() => {}}>Utløpsfrist</Table.SortCell>
                <Table.SortCell onClick={() => {}}>Aktivitet</Table.SortCell>
                <Table.SortCell onClick={() => {}}>Dokumenter</Table.SortCell>
                <Table.Cell type="head">Valg</Table.Cell>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              {fengslingItems.map((item, index: number) => <Table.Row key={index}>
                  <Table.Cell>{item.innkommet}</Table.Cell>
                  <Table.Cell>{item.saksnummer}</Table.Cell>
                  <Table.Cell>
                    <Tag text={item.status} purpose={index === 0 ? "info" : "warning"}></Tag>
                  </Table.Cell>
                  <Table.Cell>{item.saksbehandler}</Table.Cell>
                  <Table.Cell>{item.siktede}</Table.Cell>
                  <Table.Cell>{item.utløpsfrist}</Table.Cell>
                  <Table.Cell>{item.aktivitet}</Table.Cell>
                  <Table.Cell>
                    <Typography style={linkStyle} typographyType="a">
                      {"Vis dokumenter(" + item.dokumenter + ")"}
                    </Typography>
                  </Table.Cell>
                  <Table.Cell>
                    <OverflowMenuGroup>
                      <Button icon={MoreVerticalIcon} purpose="secondary" appearance="borderless" />
                      <OverflowMenu items={overflowItems} onClose={function noRefCheck() {}} onToggle={function noRefCheck() {}} />
                    </OverflowMenuGroup>
                  </Table.Cell>
                </Table.Row>)}
            </Table.Body>
          </Table>
        </Table.Wrapper>
      </GridChild>
    </Grid>;
}`,...(p=(C=o.parameters)==null?void 0:C.docs)==null?void 0:p.source}}};const se=["Saksliste"];export{o as Saksliste,se as __namedExportsOrder,ie as default};
//# sourceMappingURL=Saksliste.stories-ca56cae9.js.map