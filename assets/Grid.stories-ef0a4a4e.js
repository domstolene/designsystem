import{d as M,s as z,A as P,a as l,j as m,F as B}from"./ddsReferenceTokens-f1d35829.js";import{l as r,U as O,a as T,q as u}from"./dds-core-c67132cd.js";import{I as j,f as N}from"./dds-icons-265d9665.js";import{R as F}from"./storybook-components-e6e74b30.js";import{S as _}from"./index-45112774.js";import{T as a}from"./index-9e7a0ef7.js";import{N as E}from"./dds-typography-cc6cb429.js";import{r as R}from"./index-d47b1f5a.js";import{I as V}from"./InternalHeader-f60a6bb4.js";import{T as y}from"./Tag-f57d0e31.js";import{P as W}from"./Pagination-4c069ff3.js";import{T as f}from"./TextInput-93111124.js";import{B as I}from"./Button-aa30c63f.js";const{grid:n,spacing:d}=M,L="1 / -1",c={[r.XSmall]:n.DdsGridXs0599Count/2+1,[r.Small]:n.DdsGridSm600959Count/2+1,[r.Medium]:n.DdsGridMd9601279Count/2+1,[r.Large]:n.DdsGridLg12801919Count/2+1,[r.XLarge]:n.DdsGridXl1920Count/2+1},$={[r.XSmall]:{grid:{columns:n.DdsGridXs0599Count,columnGap:n.DdsGridXs0599GutterSize,marginLeft:d.SizesDdsSpacingLayoutX1,marginRight:d.SizesDdsSpacingLayoutX1},columns:{firstHalf:{gridColumn:L},secondHalf:{gridColumn:L}}},[r.Small]:{grid:{columns:n.DdsGridSm600959Count,columnGap:n.DdsGridSm600959GutterSize,marginLeft:d.SizesDdsSpacingLayoutX2,marginRight:d.SizesDdsSpacingLayoutX2},columns:{firstHalf:{gridColumn:`1 / ${c[r.Small]}`},secondHalf:{gridColumn:`${c[r.Small]} / -1`}}},[r.Medium]:{grid:{columns:n.DdsGridMd9601279Count,columnGap:n.DdsGridMd9601279GutterSize,marginLeft:d.SizesDdsSpacingLayoutX4,marginRight:d.SizesDdsSpacingLayoutX4},columns:{firstHalf:{gridColumn:`1 / ${c[r.Medium]}`},secondHalf:{gridColumn:`${c[r.Medium]} / -1`}}},[r.Large]:{grid:{columns:n.DdsGridLg12801919Count,columnGap:n.DdsGridLg12801919GutterSize,marginLeft:d.SizesDdsSpacingLayoutX6,marginRight:d.SizesDdsSpacingLayoutX6},columns:{firstHalf:{gridColumn:`1 / ${c[r.Large]}`},secondHalf:{gridColumn:`${c[r.Large]} / -1`}}},[r.XLarge]:{grid:{columns:n.DdsGridXl1920Count,columnGap:n.DdsGridXl1920GutterSize,marginLeft:d.SizesDdsSpacingLayoutX10,marginRight:d.SizesDdsSpacingLayoutX10},columns:{firstHalf:{gridColumn:`1 / ${c[r.XLarge]}`},secondHalf:{gridColumn:`${c[r.XLarge]} / -1`}}}},A=R.createContext({screenSize:r.Large}),q=()=>R.useContext(A),J=(e,i,s)=>{const t=$[e].grid;return{gridTemplateColumns:`repeat(${t.columns}, minmax(0, 1fr))`,columnGap:t.columnGap,marginLeft:t.marginLeft,marginRight:t.marginRight,rowGap:s&&s[u(e)]?s[u(e)]:t.columnGap,maxWidth:i&&i[u(e)]&&i[u(e)]}},x=z.div`
  display: grid;
  ${({maxWidth:e})=>P`
      max-width: ${e};
    `}
  ${({screenSize:e,maxWidth:i,rowGap:s})=>J(e,i,s)}
`,G=e=>{const{id:i,className:s,children:t,htmlProps:h,as:C,...S}=e,b=O();return l(A.Provider,{value:{screenSize:b},children:C==="div"?l(x,{...T(i,s,h,S),screenSize:b,children:t}):l(x,{...T(i,s,h,S),screenSize:b,as:C,children:t})})};G.displayName="Grid";const K=e=>e==="all"||e==="firstHalf"||e==="secondHalf",U=e=>e.xs!==void 0||e.sm!==void 0||e.md!==void 0||e.lg!==void 0||e.xl!==void 0,Q=z.div`
  grid-column: ${({screenSize:e,columnsOccupied:i})=>i==="all"?"1 / -1":U(i)?i[u(e)]:K(i)?$[e].columns[i].gridColumn:""};

  justify-self: ${({justifySelf:e})=>e&&e};
  grid-row: ${({gridRow:e})=>e&&e};
`,o=e=>{const{id:i,className:s,htmlProps:t,children:h,...C}=e,{screenSize:S}=q();return l(Q,{...T(i,s,t,C),screenSize:S,children:h})};o.displayName="GridChild";const Y={title:"dds-components/Grid",component:G},p=e=>{const s=O()===r.XSmall,t=s?!0:void 0;return m(B,{children:[l(V,{applicationName:"Applikasjon",applicationDesc:"Beskrivelse",navigationElements:[{title:"Advokater",href:"/"},{title:"Saker",href:"/"}],smallScreen:t}),m(G,{...e,style:{marginTop:s?"16px":"32px"},children:[l(o,{columnsOccupied:{xs:"1/-1",sm:"1/7",md:"1/11",lg:"1/11",xl:"1/9"},children:l(_,{buttonProps:{onClick:()=>{}}})}),l(o,{columnsOccupied:{xs:"1/-1",sm:"7/9",md:"11/13",lg:"11/13",xl:"9/13"},children:l(I,{icon:j,label:"Filter",appearance:"borderless",purpose:"secondary"})}),l(o,{columnsOccupied:"all",children:l(a.Wrapper,{children:m(a,{style:{width:"100%"},children:[l(a.Head,{children:m(a.Row,{type:"head",children:[l(a.Cell,{type:"head",children:"Navn"}),l(a.Cell,{type:"head",children:"Firma"}),l(a.Cell,{type:"head",children:"Status"})]})}),m(a.Body,{children:[m(a.Row,{type:"body",children:[l(a.Cell,{children:" Marie Bjerke "}),l(a.Cell,{children:"Advokat Firma "}),l(a.Cell,{children:l(y,{text:"Møterett",purpose:"success"})})]}),m(a.Row,{type:"body",children:[l(a.Cell,{children:"Sandra-Katrine Ingvaldsen Lovsetter"}),l(a.Cell,{children:"Advokatene AS"}),l(a.Cell,{children:l(y,{text:"Ikke møterett",purpose:"danger"})})]})]})]})})}),l(o,{columnsOccupied:"all",children:l(W,{itemsAmount:20,withCounter:!0,smallScreen:t})})]})]})},g=e=>l(F,{title:"Grid - default",display:"block",children:m(G,{...e,children:[l(o,{columnsOccupied:"all",children:l(E,{level:2,withMargins:!0,children:"Opplysninger"})}),l(o,{columnsOccupied:"all",children:l(f,{label:"Label",width:"100%"})}),l(o,{columnsOccupied:"firstHalf",children:l(f,{label:"Label",width:"100%"})}),l(o,{columnsOccupied:"secondHalf",children:l(f,{label:"Label",width:"100%"})}),l(o,{columnsOccupied:"all",justifySelf:"right",children:l(I,{label:"Legg til",icon:N,purpose:"secondary"})})]})});var v,X,D;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`(args: GridProps) => {
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
}`,...(D=(X=p.parameters)==null?void 0:X.docs)==null?void 0:D.source}}};var k,H,w;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`(args: GridProps) => <StoryTemplate title="Grid - default" display="block">
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
  </StoryTemplate>`,...(w=(H=g.parameters)==null?void 0:H.docs)==null?void 0:w.source}}};const Z=["PageExample","JustRelativeColumns"],pe=Object.freeze(Object.defineProperty({__proto__:null,JustRelativeColumns:g,PageExample:p,__namedExportsOrder:Z,default:Y},Symbol.toStringTag,{value:"Module"}));export{pe as G,o as a};
//# sourceMappingURL=Grid.stories-ef0a4a4e.js.map
