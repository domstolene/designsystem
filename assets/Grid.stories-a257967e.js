import{j as a,F as g,a as e}from"./ddsReferenceTokens-647ce456.js";import{u as y,S as f}from"./BaseComponentProps-a100791d.js";import"./index-ebeaab24.js";import{F as G,P as x}from"./libraryAdd-4099b973.js";import"./Icon-e6324a43.js";import{S as O}from"./StoryTemplate-eb861f3f.js";import{S as k}from"./index-a19211b0.js";import{T as l}from"./index-7dce1b68.js";import"./Caption-5c254d72.js";import{H as v}from"./Heading-dc72d0b9.js";import"./Label-23c96940.js";import"./Legend-dbc3ced6.js";import"./Link-9aff7843.js";import"./Paragraph-3340e0ea.js";import"./TextOverflowEllipsis-e3546c5b.js";import"./Typography-1747463b.js";import{I as w}from"./InternalHeader-2784ee7a.js";import{P as I}from"./Pagination-367d653d.js";import{G as s,a as r}from"./GridChild-3a6cdb3d.js";import{B as T}from"./Button-07f0874b.js";import{T as p}from"./Tag-e9aeae10.js";import{T as o}from"./TextInput-17d90669.js";const H={title:"dds-components/Grid",component:s},i=n=>{const d=y()===f.XSmall,c=d?!0:void 0;return a(g,{children:[e(w,{applicationName:"Applikasjon",applicationDesc:"Beskrivelse",navigationElements:[{title:"Advokater",href:"/"},{title:"Saker",href:"/"}],smallScreen:c}),a(s,{...n,style:{marginTop:d?"16px":"32px"},children:[e(r,{columnsOccupied:{xs:"1/-1",sm:"1/7",md:"1/11",lg:"1/11",xl:"1/9"},children:e(k,{buttonProps:{onClick:()=>{}}})}),e(r,{columnsOccupied:{xs:"1/-1",sm:"7/9",md:"11/13",lg:"11/13",xl:"9/13"},children:e(T,{icon:G,label:"Filter",appearance:"borderless",purpose:"secondary"})}),e(r,{columnsOccupied:"all",children:e(l.Wrapper,{children:a(l,{style:{width:"100%"},children:[e(l.Head,{children:a(l.Row,{type:"head",children:[e(l.Cell,{type:"head",children:"Navn"}),e(l.Cell,{type:"head",children:"Firma"}),e(l.Cell,{type:"head",children:"Status"})]})}),a(l.Body,{children:[a(l.Row,{type:"body",children:[e(l.Cell,{children:" Marie Bjerke "}),e(l.Cell,{children:"Advokat Firma "}),e(l.Cell,{children:e(p,{text:"Møterett",purpose:"success"})})]}),a(l.Row,{type:"body",children:[e(l.Cell,{children:"Sandra-Katrine Ingvaldsen Lovsetter"}),e(l.Cell,{children:"Advokatene AS"}),e(l.Cell,{children:e(p,{text:"Ikke møterett",purpose:"danger"})})]})]})]})})}),e(r,{columnsOccupied:"all",children:e(I,{itemsAmount:20,withCounter:!0,smallScreen:c})})]})]})},t=n=>e(O,{title:"Grid - default",display:"block",children:a(s,{...n,children:[e(r,{columnsOccupied:"all",children:e(v,{level:2,withMargins:!0,children:"Opplysninger"})}),e(r,{columnsOccupied:"all",children:e(o,{label:"Label",width:"100%"})}),e(r,{columnsOccupied:"firstHalf",children:e(o,{label:"Label",width:"100%"})}),e(r,{columnsOccupied:"secondHalf",children:e(o,{label:"Label",width:"100%"})}),e(r,{columnsOccupied:"all",justifySelf:"right",children:e(T,{label:"Legg til",icon:x,purpose:"secondary"})})]})});var m,u,h;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`(args: GridProps) => {
  const screenSize = useScreenSize();
  const isXSmall = screenSize === ScreenSize.XSmall;
  const smallScreenVersion = isXSmall ? true : undefined;
  return <>
      <InternalHeader applicationName="Applikasjon" applicationDesc="Beskrivelse" navigationElements={[{
      title: 'Advokater',
      href: '/'
    }, {
      title: 'Saker',
      href: '/'
    }]} smallScreen={smallScreenVersion} />
      <Grid {...args} style={{
      marginTop: isXSmall ? '16px' : '32px'
    }}>
        <GridChild columnsOccupied={{
        xs: '1/-1',
        sm: '1/7',
        md: '1/11',
        lg: '1/11',
        xl: '1/9'
      }}>
          <Search buttonProps={{
          onClick: () => {}
        }} />
        </GridChild>
        <GridChild columnsOccupied={{
        xs: '1/-1',
        sm: '7/9',
        md: '11/13',
        lg: '11/13',
        xl: '9/13'
      }}>
          <Button icon={FilterIcon} label="Filter" appearance="borderless" purpose="secondary" />
        </GridChild>
        <GridChild columnsOccupied="all">
          <Table.Wrapper>
            <Table style={{
            width: '100%'
          }}>
              <Table.Head>
                <Table.Row type="head">
                  <Table.Cell type="head">Navn</Table.Cell>
                  <Table.Cell type="head">Firma</Table.Cell>
                  <Table.Cell type="head">Status</Table.Cell>
                </Table.Row>
              </Table.Head>
              <Table.Body>
                <Table.Row type="body">
                  <Table.Cell> Marie Bjerke </Table.Cell>
                  <Table.Cell>Advokat Firma </Table.Cell>
                  <Table.Cell>
                    <Tag text="Møterett" purpose="success" />
                  </Table.Cell>
                </Table.Row>
                <Table.Row type="body">
                  <Table.Cell>Sandra-Katrine Ingvaldsen Lovsetter</Table.Cell>
                  <Table.Cell>Advokatene AS</Table.Cell>
                  <Table.Cell>
                    <Tag text="Ikke møterett" purpose="danger" />
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Table.Wrapper>
        </GridChild>
        <GridChild columnsOccupied="all">
          <Pagination itemsAmount={20} withCounter smallScreen={smallScreenVersion} />
        </GridChild>
      </Grid>
    </>;
}`,...(h=(u=i.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var b,C,S;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`(args: GridProps) => <StoryTemplate title="Grid - default" display="block">
    <Grid {...args}>
      <GridChild columnsOccupied="all">
        <Heading level={2} withMargins>
          Opplysninger
        </Heading>
      </GridChild>
      <GridChild columnsOccupied="all">
        <TextInput label="Label" width="100%" />
      </GridChild>
      <GridChild columnsOccupied="firstHalf">
        <TextInput label="Label" width="100%" />
      </GridChild>
      <GridChild columnsOccupied="secondHalf">
        <TextInput label="Label" width="100%" />
      </GridChild>
      <GridChild columnsOccupied="all" justifySelf="right">
        <Button label="Legg til" icon={PlusIcon} purpose="secondary" />
      </GridChild>
    </Grid>
  </StoryTemplate>`,...(S=(C=t.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};const P=["PageExample","JustRelativeColumns"],ee=Object.freeze(Object.defineProperty({__proto__:null,JustRelativeColumns:t,PageExample:i,__namedExportsOrder:P,default:H},Symbol.toStringTag,{value:"Module"}));export{ee as G};
//# sourceMappingURL=Grid.stories-a257967e.js.map
