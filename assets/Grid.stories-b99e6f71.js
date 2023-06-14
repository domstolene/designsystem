import{d as $,s as w,C as B,j as l,b as m,F as A}from"./focus-visible-17f12d09.js";import{R as j}from"./storybook-components-b7b7a39c.js";import{S as F}from"./index-ad7d97f2.js";import{T as a}from"./index-43c465b1.js";import{S as r,u as O}from"./useScreenSize-37d4038e.js";import{r as R}from"./index-c6dae603.js";import{g as T}from"./BaseComponentProps-bb0d5515.js";import{I as N}from"./InternalHeader-aea13cfc.js";import{F as _,P as E}from"./plus-2a8d030f.js";import{T as y}from"./Tag-3ff4056f.js";import{P as V}from"./Pagination-9c933989.js";import{H as W}from"./Heading-9cc58db7.js";import{T as f}from"./TextInput-b44fae05.js";import{B as P}from"./Button-4fdfc19e.js";const u=e=>{switch(e){case r.XLarge:return"xl";case r.Large:return"lg";case r.Medium:return"md";case r.Small:return"sm";case r.XSmall:return"xs"}},{grid:n,spacing:d}=$,L="1 / -1",c={[r.XSmall]:n.DdsGridXs0599Count/2+1,[r.Small]:n.DdsGridSm600959Count/2+1,[r.Medium]:n.DdsGridMd9601279Count/2+1,[r.Large]:n.DdsGridLg12801919Count/2+1,[r.XLarge]:n.DdsGridXl1920Count/2+1},M={[r.XSmall]:{grid:{columns:n.DdsGridXs0599Count,columnGap:n.DdsGridXs0599GutterSize,marginLeft:d.SizesDdsSpacingLayoutX1,marginRight:d.SizesDdsSpacingLayoutX1},columns:{firstHalf:{gridColumn:L},secondHalf:{gridColumn:L}}},[r.Small]:{grid:{columns:n.DdsGridSm600959Count,columnGap:n.DdsGridSm600959GutterSize,marginLeft:d.SizesDdsSpacingLayoutX2,marginRight:d.SizesDdsSpacingLayoutX2},columns:{firstHalf:{gridColumn:`1 / ${c[r.Small]}`},secondHalf:{gridColumn:`${c[r.Small]} / -1`}}},[r.Medium]:{grid:{columns:n.DdsGridMd9601279Count,columnGap:n.DdsGridMd9601279GutterSize,marginLeft:d.SizesDdsSpacingLayoutX4,marginRight:d.SizesDdsSpacingLayoutX4},columns:{firstHalf:{gridColumn:`1 / ${c[r.Medium]}`},secondHalf:{gridColumn:`${c[r.Medium]} / -1`}}},[r.Large]:{grid:{columns:n.DdsGridLg12801919Count,columnGap:n.DdsGridLg12801919GutterSize,marginLeft:d.SizesDdsSpacingLayoutX6,marginRight:d.SizesDdsSpacingLayoutX6},columns:{firstHalf:{gridColumn:`1 / ${c[r.Large]}`},secondHalf:{gridColumn:`${c[r.Large]} / -1`}}},[r.XLarge]:{grid:{columns:n.DdsGridXl1920Count,columnGap:n.DdsGridXl1920GutterSize,marginLeft:d.SizesDdsSpacingLayoutX10,marginRight:d.SizesDdsSpacingLayoutX10},columns:{firstHalf:{gridColumn:`1 / ${c[r.XLarge]}`},secondHalf:{gridColumn:`${c[r.XLarge]} / -1`}}}},I=R.createContext({screenSize:r.Large}),J=()=>R.useContext(I),K=(e,i,s)=>{const t=M[e].grid;return{gridTemplateColumns:`repeat(${t.columns}, minmax(0, 1fr))`,columnGap:t.columnGap,marginLeft:t.marginLeft,marginRight:t.marginRight,rowGap:s&&s[u(e)]?s[u(e)]:t.columnGap,maxWidth:i&&i[u(e)]&&i[u(e)]}},x=w.div`
  display: grid;
  ${({maxWidth:e})=>B`
      max-width: ${e};
    `}
  ${({screenSize:e,maxWidth:i,rowGap:s})=>K(e,i,s)}
`,G=e=>{const{id:i,className:s,children:t,htmlProps:h,as:C,...S}=e,b=O();return l(I.Provider,{value:{screenSize:b},children:C==="div"?l(x,{...T(i,s,h,S),screenSize:b,children:t}):l(x,{...T(i,s,h,S),screenSize:b,as:C,children:t})})};G.displayName="Grid";const q=e=>e==="all"||e==="firstHalf"||e==="secondHalf",Q=e=>e.xs!==void 0||e.sm!==void 0||e.md!==void 0||e.lg!==void 0||e.xl!==void 0,U=w.div`
  grid-column: ${({screenSize:e,columnsOccupied:i})=>i==="all"?"1 / -1":Q(i)?i[u(e)]:q(i)?M[e].columns[i].gridColumn:""};

  justify-self: ${({justifySelf:e})=>e&&e};
  grid-row: ${({gridRow:e})=>e&&e};
`,o=e=>{const{id:i,className:s,htmlProps:t,children:h,...C}=e,{screenSize:S}=J();return l(U,{...T(i,s,t,C),screenSize:S,children:h})};o.displayName="GridChild";const Y={title:"dds-components/Grid",component:G},p=e=>{const s=O()===r.XSmall,t=s?!0:void 0;return m(A,{children:[l(N,{applicationName:"Applikasjon",applicationDesc:"Beskrivelse",navigationElements:[{title:"Advokater",href:"/"},{title:"Saker",href:"/"}],smallScreen:t}),m(G,{...e,style:{marginTop:s?"16px":"32px"},children:[l(o,{columnsOccupied:{xs:"1/-1",sm:"1/7",md:"1/11",lg:"1/11",xl:"1/9"},children:l(F,{buttonProps:{onClick:()=>{}}})}),l(o,{columnsOccupied:{xs:"1/-1",sm:"7/9",md:"11/13",lg:"11/13",xl:"9/13"},children:l(P,{icon:_,label:"Filter",appearance:"borderless",purpose:"secondary"})}),l(o,{columnsOccupied:"all",children:l(a.Wrapper,{children:m(a,{style:{width:"100%"},children:[l(a.Head,{children:m(a.Row,{type:"head",children:[l(a.Cell,{type:"head",children:"Navn"}),l(a.Cell,{type:"head",children:"Firma"}),l(a.Cell,{type:"head",children:"Status"})]})}),m(a.Body,{children:[m(a.Row,{type:"body",children:[l(a.Cell,{children:" Marie Bjerke "}),l(a.Cell,{children:"Advokat Firma "}),l(a.Cell,{children:l(y,{text:"Møterett",purpose:"success"})})]}),m(a.Row,{type:"body",children:[l(a.Cell,{children:"Sandra-Katrine Ingvaldsen Lovsetter"}),l(a.Cell,{children:"Advokatene AS"}),l(a.Cell,{children:l(y,{text:"Ikke møterett",purpose:"danger"})})]})]})]})})}),l(o,{columnsOccupied:"all",children:l(V,{itemsAmount:20,withCounter:!0,smallScreen:t})})]})]})},g=e=>l(j,{title:"Grid - default",display:"block",children:m(G,{...e,children:[l(o,{columnsOccupied:"all",children:l(W,{level:2,withMargins:!0,children:"Opplysninger"})}),l(o,{columnsOccupied:"all",children:l(f,{label:"Label",width:"100%"})}),l(o,{columnsOccupied:"firstHalf",children:l(f,{label:"Label",width:"100%"})}),l(o,{columnsOccupied:"secondHalf",children:l(f,{label:"Label",width:"100%"})}),l(o,{columnsOccupied:"all",justifySelf:"right",children:l(P,{label:"Legg til",icon:E,purpose:"secondary"})})]})});var v,X,D;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`(args: GridProps) => {
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
}`,...(D=(X=p.parameters)==null?void 0:X.docs)==null?void 0:D.source}}};var H,k,z;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`(args: GridProps) => <StoryTemplate title="Grid - default" display="block">
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
  </StoryTemplate>`,...(z=(k=g.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};const Z=["PageExample","JustRelativeColumns"],ge=Object.freeze(Object.defineProperty({__proto__:null,JustRelativeColumns:g,PageExample:p,__namedExportsOrder:Z,default:Y},Symbol.toStringTag,{value:"Module"}));export{ge as G,o as a};
//# sourceMappingURL=Grid.stories-b99e6f71.js.map
