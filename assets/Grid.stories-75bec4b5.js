import{j as a,F as g,a as e}from"./jsx-runtime-e43ccb36.js";import{u as y,S as f}from"./BaseComponentProps-5f9a30f8.js";import"./index-1b03fe98.js";import{F as G,P as x}from"./libraryAdd-923f0275.js";import"./Icon-3ee4d35b.js";import{S as O}from"./StoryTemplate-d3d045d5.js";import{S as k}from"./index-638e8f98.js";import{T as l}from"./index-2040439a.js";import"./Caption-f392befe.js";import{H as v}from"./Heading-ad44a14c.js";import"./Label-2f40b05d.js";import"./Legend-4a50a7d7.js";import"./Link-53575534.js";import"./Paragraph-ea3f8ca3.js";import"./TextOverflowEllipsis-6cc9a60a.js";import"./Typography-2f5b7ed6.js";import{G as s,a as r}from"./GridChild-e74432f0.js";import{I as w}from"./InternalHeader-5dbe774c.js";import{B as T}from"./Button-5add3b32.js";import{T as p}from"./Tag-451d8b54.js";import{P as I}from"./Pagination-411e3656.js";import{T as o}from"./TextInput-7e0b695b.js";const H={title:"dds-components/Grid",component:s},i=n=>{const d=y()===f.XSmall,c=d?!0:void 0;return a(g,{children:[e(w,{applicationName:"Applikasjon",applicationDesc:"Beskrivelse",navigationElements:[{title:"Advokater",href:"/"},{title:"Saker",href:"/"}],smallScreen:c}),a(s,{...n,style:{marginTop:d?"16px":"32px"},children:[e(r,{columnsOccupied:{xs:"1/-1",sm:"1/7",md:"1/11",lg:"1/11",xl:"1/9"},children:e(k,{buttonProps:{onClick:()=>{}}})}),e(r,{columnsOccupied:{xs:"1/-1",sm:"7/9",md:"11/13",lg:"11/13",xl:"9/13"},children:e(T,{icon:G,label:"Filter",appearance:"borderless",purpose:"secondary"})}),e(r,{columnsOccupied:"all",children:e(l.Wrapper,{children:a(l,{style:{width:"100%"},children:[e(l.Head,{children:a(l.Row,{type:"head",children:[e(l.Cell,{type:"head",children:"Navn"}),e(l.Cell,{type:"head",children:"Firma"}),e(l.Cell,{type:"head",children:"Status"})]})}),a(l.Body,{children:[a(l.Row,{type:"body",children:[e(l.Cell,{children:" Marie Bjerke "}),e(l.Cell,{children:"Advokat Firma "}),e(l.Cell,{children:e(p,{text:"Møterett",purpose:"success"})})]}),a(l.Row,{type:"body",children:[e(l.Cell,{children:"Sandra-Katrine Ingvaldsen Lovsetter"}),e(l.Cell,{children:"Advokatene AS"}),e(l.Cell,{children:e(p,{text:"Ikke møterett",purpose:"danger"})})]})]})]})})}),e(r,{columnsOccupied:"all",children:e(I,{itemsAmount:20,withCounter:!0,smallScreen:c})})]})]})},t=n=>e(O,{title:"Grid - default",display:"block",children:a(s,{...n,children:[e(r,{columnsOccupied:"all",children:e(v,{level:2,withMargins:!0,children:"Opplysninger"})}),e(r,{columnsOccupied:"all",children:e(o,{label:"Label",width:"100%"})}),e(r,{columnsOccupied:"firstHalf",children:e(o,{label:"Label",width:"100%"})}),e(r,{columnsOccupied:"secondHalf",children:e(o,{label:"Label",width:"100%"})}),e(r,{columnsOccupied:"all",justifySelf:"right",children:e(T,{label:"Legg til",icon:x,purpose:"secondary"})})]})});var m,u,h;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`(args: GridProps) => {
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
//# sourceMappingURL=Grid.stories-75bec4b5.js.map