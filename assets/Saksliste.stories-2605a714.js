import{j as r,a as e}from"./ddsReferenceTokens-ceb64027.js";import{G as b,a as t}from"./GridChild-39750f00.js";import{H as i}from"./Heading-d8600f49.js";import{T as l}from"./index-1408ca13.js";import{T as s}from"./Tag-ab392595.js";import{A as T,M as h}from"./libraryAdd-21442db5.js";import{B as d}from"./Button-2c1b8733.js";import{D as u}from"./Divider-d499a68f.js";import{T as S}from"./Typography-56baa34a.js";import{O as y}from"./OverflowMenuGroup-db34324f.js";import{O as f}from"./OverflowMenu-1c15e1b8.js";import"./index-1b03fe98.js";import"./BaseComponentProps-d435d0d0.js";import"./TextOverflowEllipsis-e584ab25.js";import"./scrollbarStyling-ac52fe06.js";import"./ScrollableContainer.tokens-ffb04a93.js";import"./Caption-d066edab.js";import"./Label-10c93eb5.js";import"./Legend-0cba57ca.js";import"./Link-7a88da71.js";import"./Paragraph-5ad16720.js";import"./Input.styles-82cfcbdb.js";import"./removeButtonStyling-867d6ba4.js";import"./DescriptionListDesc-ba1fb86b.js";import"./Icon-db6dd7fc.js";import"./normalize-f756ee4b.js";import"./VisuallyHidden-3f82ce01.js";import"./LocalMessage.tokens-30c1a305.js";import"./Button.tokens-be477cbd.js";import"./Spinner-250d1fa4.js";import"./useFloatPosition-f5da9dbf.js";import"./floating-ui.dom-a5fd4560.js";import"./index-6fd5a17b.js";import"./OverflowMenuItem-39993784.js";const oe={title:"Playground"},g=[{innkommet:"01.01.2000",saksnummer:"12-34567/TRD",status:"Påbegynt",saksbehandler:"Ola Olavsen",avdød:"Gunnar Gunnarsen",fødselsdato:"01.01.1950",dødsdato:"01.01.1999"},{innkommet:"02.02.2000",saksnummer:"12-98765/TRD",status:"Ikke påbegynt",saksbehandler:"Kari Nordmann",avdød:"Johanne Johansen",fødselsdato:"01.01.1950",dødsdato:"01.01.1999"},{innkommet:"10.10.1990",saksnummer:"12-24680/TRD",status:"Ikke påbegynt",saksbehandler:"Ola Olavsen",avdød:"Pernille Pernillesen",fødselsdato:"01.01.1950",dødsdato:"01.01.1999"}],v=[{innkommet:"01.01.2000",saksnummer:"12-34567/TRD",status:"Påbegynt",saksbehandler:"Ola Olavsen",siktede:"Gunnar Gunnarsen",utløpsfrist:"01.01.1950",aktivitet:"Registrer parter",dokumenter:3},{innkommet:"02.02.2000",saksnummer:"12-98765/TRD",status:"Ikke påbegynt",saksbehandler:"Kari Nordmann",siktede:"Johanne Johansen",utløpsfrist:"01.01.1950",aktivitet:"Til registrering",dokumenter:1},{innkommet:"10.10.1990",saksnummer:"12-24680/TRD",status:"Ikke påbegynt",saksbehandler:"Ola Olavsen",siktede:"Pernille Pernillesen",utløpsfrist:"01.01.1950",aktivitet:"Til registrering",dokumenter:1}],w=[{title:"Vis sak"},{title:"Tildel sak til meg"},{title:"Avslutt sak"}],c={width:"100%"},R={cursor:"pointer"},o=()=>r(b,{as:"div",children:[e(t,{columnsOccupied:"all",children:e(i,{level:3,children:"Saksliste - Dødsfall"})}),e(t,{columnsOccupied:"all",children:e(l.Wrapper,{children:r(l,{style:c,children:[e(l.Head,{children:r(l.Row,{type:"head",children:[e(l.SortCell,{onClick:()=>{},children:"Innkommet"}),e(l.SortCell,{onClick:()=>{},children:"Saksnummer"}),e(l.SortCell,{onClick:()=>{},children:"Status"}),e(l.SortCell,{onClick:()=>{},children:"Saksbehandler"}),e(l.SortCell,{onClick:()=>{},children:"Avdød"}),e(l.SortCell,{onClick:()=>{},children:"Fødselsdato"}),e(l.SortCell,{onClick:()=>{},children:"Dødsdato"}),e(l.Cell,{type:"head",children:"Vis mer"})]})}),e(l.Body,{children:g.map((n,a)=>r(l.Row,{children:[e(l.Cell,{children:n.innkommet}),e(l.Cell,{children:n.saksnummer}),e(l.Cell,{children:e(s,{text:n.status,purpose:a===0?"info":"warning"})}),e(l.Cell,{children:n.saksbehandler}),e(l.Cell,{children:n.avdød}),e(l.Cell,{children:n.fødselsdato}),e(l.Cell,{children:n.dødsdato}),e(l.Cell,{children:e(d,{icon:T,purpose:"primary",appearance:"borderless"})})]},a))})]})})}),e(u,{}),e(t,{columnsOccupied:"all",children:e(i,{level:3,children:"Saksliste - Fengsling"})}),e(t,{columnsOccupied:"all",children:e(l.Wrapper,{children:r(l,{style:c,children:[e(l.Head,{children:r(l.Row,{type:"head",children:[e(l.SortCell,{onClick:()=>{},children:"Innkommet"}),e(l.SortCell,{onClick:()=>{},children:"Saksnummer"}),e(l.SortCell,{onClick:()=>{},children:"Status"}),e(l.SortCell,{onClick:()=>{},children:"Saksbehandler"}),e(l.SortCell,{onClick:()=>{},children:"Siktede"}),e(l.SortCell,{onClick:()=>{},children:"Utløpsfrist"}),e(l.SortCell,{onClick:()=>{},children:"Aktivitet"}),e(l.SortCell,{onClick:()=>{},children:"Dokumenter"}),e(l.Cell,{type:"head",children:"Valg"})]})}),e(l.Body,{children:v.map((n,a)=>r(l.Row,{children:[e(l.Cell,{children:n.innkommet}),e(l.Cell,{children:n.saksnummer}),e(l.Cell,{children:e(s,{text:n.status,purpose:a===0?"info":"warning"})}),e(l.Cell,{children:n.saksbehandler}),e(l.Cell,{children:n.siktede}),e(l.Cell,{children:n.utløpsfrist}),e(l.Cell,{children:n.aktivitet}),e(l.Cell,{children:e(S,{style:R,typographyType:"a",children:"Vis dokumenter("+n.dokumenter+")"})}),e(l.Cell,{children:r(y,{children:[e(d,{icon:h,purpose:"secondary",appearance:"borderless"}),e(f,{items:w,onClose:function(){},onToggle:function(){}})]})})]},a))})]})})})]});var m,C,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`() => {
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
}`,...(p=(C=o.parameters)==null?void 0:C.docs)==null?void 0:p.source}}};const ie=["Saksliste"];export{o as Saksliste,ie as __namedExportsOrder,oe as default};
//# sourceMappingURL=Saksliste.stories-2605a714.js.map
