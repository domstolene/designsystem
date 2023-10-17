import{a as e,j as r}from"./jsx-runtime-e43ccb36.js";import{C as a,T as l}from"./index-1c6af8f4.js";import{h as s,m as c,d}from"./tableData-67b3b250.js";import{S as p}from"./StoryTemplate-a53b4a90.js";import{S as z,j as se,J as de,k as pe,b as ce,d as be}from"./libraryAdd-5ac12ed0.js";import{I as T}from"./Icon-1678d620.js";import{u as I,S as h}from"./BaseComponentProps-9c025471.js";import"./index-1b03fe98.js";import"./Caption-c3e5a7e9.js";import"./Heading-3c0ada0f.js";import"./Label-56d59f5f.js";import"./Legend-c9e1505c.js";import{L as V}from"./Link-1f045fc3.js";import"./Paragraph-68d1c0c0.js";import"./TextOverflowEllipsis-1edb8626.js";import"./Typography-e1773316.js";import{B as Ce}from"./Button-8a98ed6d.js";import{V as B}from"./VisuallyHidden-297bf54e.js";import"./ddsReferenceTokens-f9f5a4e4.js";import"./scrollbarStyling-6511712a.js";import"./ScrollableContainer.tokens-17f22553.js";import"./Input.styles-d3b58308.js";import"./removeButtonStyling-867d6ba4.js";import"./DescriptionListDesc-d0c82072.js";import"./normalize-f756ee4b.js";import"./chunk-S4VUQJ4A-35572fc3.js";import"./iframe-65979afa.js";import"../sb-preview/runtime.js";import"./index-4a89c107.js";import"./index-6fd5a17b.js";import"./index-356e4a49.js";import"./Button.tokens-4b98f929.js";import"./Spinner-50e72058.js";const _e={title:"dds-components/Table/CollapsibleTable BETA",component:a,argTypes:{isCollapsed:{control:{type:"boolean"}},stickyHeader:{control:{type:"boolean"}}},parameters:{controls:{exclude:["headerValues","definingColumnIndex"]}}},C=s.map(o=>e(l.Cell,{type:"head",children:o.name},`head-${o.dataName}`)),m=s.map(o=>({content:o.name,key:o.name})),y=o=>e(p,{title:"CollapsibleTable - single defining column",display:"block",children:r(a,{...o,headerValues:m,isCollapsed:o.isCollapsed!==!1&&!0,children:[e(l.Head,{children:e(a.Row,{type:"head",children:C})}),e(l.Body,{children:c(d,s).map(n=>e(a.Row,{children:n.map(t=>e(l.Cell,{children:t},`body-${t}`))},n.toString()))})]})}),u=o=>e(p,{title:"CollapsibleTable - multiple defining columns",display:"block",children:e(l.Wrapper,{style:{width:"100%"},children:r(a,{...o,style:{width:"100%"},isCollapsed:o.isCollapsed!==!1&&!0,headerValues:m,definingColumnIndex:[0,2],children:[e(l.Head,{children:e(a.Row,{type:"head",children:C})}),e(l.Body,{children:c(d,s).map(n=>e(a.Row,{children:n.map(t=>e(l.Cell,{children:t},`body-${t}`))},n.toString()))})]})})}),k=o=>e(p,{title:"CollapsibleTable - prioritized defining columns",display:"block",children:e(l.Wrapper,{style:{width:"100%"},children:r(a,{...o,style:{width:"100%"},isCollapsed:o.isCollapsed!==!1&&!0,headerValues:m,definingColumnIndex:[2,0],children:[e(l.Head,{children:e(a.Row,{type:"head",children:C})}),e(l.Body,{children:c(d,s).map(n=>e(a.Row,{children:n.map(t=>e(l.Cell,{children:t},`body-${t}`))},n.toString()))})]})})}),S=o=>e(p,{title:"CollapsibleTable - with dividers",display:"block",children:r(a,{...o,withDividers:!0,headerValues:m,isCollapsed:o.isCollapsed!==!1&&!0,children:[e(l.Head,{children:e(a.Row,{type:"head",children:C})}),e(l.Body,{children:c(d,s).map(n=>e(a.Row,{children:n.map(t=>e(l.Cell,{children:t},`body-${t}`))},n.toString()))})]})}),w=o=>e(p,{title:"CollapsibleTable - compact",display:"block",children:r(a,{...o,density:"compact",headerValues:m,isCollapsed:o.isCollapsed!==!1&&!0,children:[e(l.Head,{children:e(a.Row,{type:"head",children:C})}),e(l.Body,{children:c(d,s).map(n=>e(a.Row,{children:n.map(t=>e(l.Cell,{children:t},`body-${t}`))},n.toString()))})]})}),g=o=>e(p,{title:"CollapsibleTable - sticky header",display:"block",children:r(a,{...o,stickyHeader:!0,isCollapsed:o.isCollapsed!==!1&&!0,headerValues:m,definingColumnIndex:[0,2],children:[e(l.Head,{children:e(a.Row,{type:"head",children:C})}),r(l.Body,{children:[c(d,s).map(n=>e(a.Row,{children:n.map(t=>e(l.Cell,{children:t},`body-${t}`))},n.toString())),c(d,s).map(n=>e(a.Row,{children:n.map(t=>e(l.Cell,{children:t},`body-${t}`))},n.toString()))]})]})}),R=o=>{const n=e(T,{icon:ce}),t=[{content:"Navn til venstre",key:"Navn til venstre"},{content:"Navn til høyre",key:"Navn til høyre"},{content:"Rolle",key:"Rolle"},{content:"Aksjoner",key:"Aksjoner"}],b=e(Ce,{appearance:"borderless",icon:be,iconPosition:"left",children:"Fjern tilgang"});return e(p,{title:"Table - with buttons and icons",display:"block",children:r(a,{...o,headerValues:t,isCollapsed:!0,children:[e(l.Head,{children:e(a.Row,{type:"head",children:t.map(i=>e(l.Cell,{type:"head",children:i.content},`head-${i.key}`))})}),e(l.Body,{children:d.map(i=>r(a.Row,{children:[r(l.Cell,{layout:"text and icon",children:[n," ",i.name]}),r(l.Cell,{layout:"text and icon",children:[i.name," ",n]}),e(l.Cell,{children:"Admin"}),e(l.Cell,{layout:"center",children:b})]},i.name))})]})})},f=o=>{const n=I();return e(p,{title:"CollapsibleTable - responsive",display:"block",children:e(l.Wrapper,{style:{width:"100%"},children:r(a,{...o,isCollapsed:n<=h.Small,headerValues:m,children:[e(l.Head,{children:e(a.Row,{type:"head",children:C})}),e(l.Body,{children:c(d,s).map(t=>e(a.Row,{children:t.map(b=>e(l.Cell,{children:b},`body-${b}`))},t.toString()))})]})})})},H=o=>{const n=I();return e(p,{title:"CollapsibleTable - responsive multiple breakpoints",display:"block",children:e(l.Wrapper,{style:{width:"100%"},children:r(a,{...o,style:{width:"100%"},isCollapsed:n<=h.Small,headerValues:m,definingColumnIndex:n===h.XSmall?[2]:[2,0],children:[e(l.Head,{children:e(a.Row,{type:"head",children:C})}),e(l.Body,{children:c(d,s).map(t=>e(a.Row,{children:t.map(b=>e(l.Cell,{children:b},`body-${b}`))},t.toString()))})]})})})},v=()=>{const o=[{key:"fav",content:e(B,{as:"span",children:"Velg som favoritt"})},{key:"Dokumenttype",content:e(B,{as:"span",children:"Dokumenttype"})},{key:"Nummer",content:"Nr."},{key:"Lest status",content:e(B,{as:"span",children:"Lest status"})},{key:"Dokumentnavn",content:"Dokumentnavn"},{key:"Avsender",content:"Avsender"},{key:"Mottakere",content:"Mottakere"},{key:"Sendt",content:"Sendt"}],n=I(),t=n<=h.Small,i=n<=h.XSmall?"small":"medium";return e(p,{title:"CollapsibleTable - Example",display:"block",children:r(a,{isCollapsed:t,headerValues:o,definingColumnIndex:[0,1,2,3,4],children:[e(l.Head,{children:e(a.Row,{type:"head",children:o.map(ie=>r(l.Cell,{type:"head",children:[" ",ie.content," "]}))})}),r(l.Body,{children:[r(a.Row,{children:[e(l.Cell,{children:e(T,{icon:z,iconSize:i})}),e(l.Cell,{children:e(T,{icon:se,iconSize:i})}),e(l.Cell,{children:"1"}),e(l.Cell,{children:e(T,{icon:de,iconSize:i})}),e(l.Cell,{children:e(V,{external:!0,href:"/",children:"Krav om sak fra Marie Luneby, Knut-Håkon Dagsvik, Sonja Luneby og Petter Olaf Jensen.pdf"})}),e(l.Cell,{children:" Maake Karl "}),e(l.Cell,{children:" Akershus og Oslo jordskifterett "}),e(l.Cell,{children:" 17.12.2018 "})]}),r(a.Row,{children:[e(l.Cell,{children:e(T,{icon:z,iconSize:i})}),e(l.Cell,{children:e(T,{icon:pe,iconSize:i})}),e(l.Cell,{children:"1-2"}),e(l.Cell,{}),e(l.Cell,{children:e(V,{external:!0,href:"/",children:"Merknader fra Knut-Håkon Dagsvik.pdf"})}),e(l.Cell,{children:"Akershus og Oslo jordskifterett"}),e(l.Cell,{children:" Maake Karl"}),e(l.Cell,{children:" 17.12.2018 "})]})]})]})})};var x,D,$;y.parameters={...y.parameters,docs:{...(x=y.parameters)==null?void 0:x.docs,source:{originalSource:`(args: CollapsibleTableProps) => {
  return <StoryTemplate title="CollapsibleTable - single defining column" display="block">
      <CollapsibleTable {...args} headerValues={headerValues} isCollapsed={args.isCollapsed !== false && true}>
        <Table.Head>
          <CollapsibleTable.Row type="head">
            {mappedHeaderCells}
          </CollapsibleTable.Row>
        </Table.Head>
        <Table.Body>
          {mapCellContents(data, headerCells).map(row => <CollapsibleTable.Row key={row.toString()}>
              {row.map(cellContent => <Table.Cell key={\`body-\${cellContent}\`}>
                  {cellContent}
                </Table.Cell>)}
            </CollapsibleTable.Row>)}
        </Table.Body>
      </CollapsibleTable>
    </StoryTemplate>;
}`,...($=(D=y.parameters)==null?void 0:D.docs)==null?void 0:$.source}}};var A,P,j;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`(args: CollapsibleTableProps) => {
  return <StoryTemplate title="CollapsibleTable - multiple defining columns" display="block">
      <Table.Wrapper style={{
      width: '100%'
    }}>
        <CollapsibleTable {...args} style={{
        width: '100%'
      }} isCollapsed={args.isCollapsed !== false && true} headerValues={headerValues} definingColumnIndex={[0, 2]}>
          <Table.Head>
            <CollapsibleTable.Row type="head">
              {mappedHeaderCells}
            </CollapsibleTable.Row>
          </Table.Head>
          <Table.Body>
            {mapCellContents(data, headerCells).map(row => <CollapsibleTable.Row key={row.toString()}>
                {row.map(cellContent => <Table.Cell key={\`body-\${cellContent}\`}>
                    {cellContent}
                  </Table.Cell>)}
              </CollapsibleTable.Row>)}
          </Table.Body>
        </CollapsibleTable>
      </Table.Wrapper>
    </StoryTemplate>;
}`,...(j=(P=u.parameters)==null?void 0:P.docs)==null?void 0:j.source}}};var M,W,L;k.parameters={...k.parameters,docs:{...(M=k.parameters)==null?void 0:M.docs,source:{originalSource:`(args: CollapsibleTableProps) => {
  return <StoryTemplate title="CollapsibleTable - prioritized defining columns" display="block">
      <Table.Wrapper style={{
      width: '100%'
    }}>
        <CollapsibleTable {...args} style={{
        width: '100%'
      }} isCollapsed={args.isCollapsed !== false && true} headerValues={headerValues} definingColumnIndex={[2, 0]}>
          <Table.Head>
            <CollapsibleTable.Row type="head">
              {mappedHeaderCells}
            </CollapsibleTable.Row>
          </Table.Head>
          <Table.Body>
            {mapCellContents(data, headerCells).map(row => <CollapsibleTable.Row key={row.toString()}>
                {row.map(cellContent => <Table.Cell key={\`body-\${cellContent}\`}>
                    {cellContent}
                  </Table.Cell>)}
              </CollapsibleTable.Row>)}
          </Table.Body>
        </CollapsibleTable>
      </Table.Wrapper>
    </StoryTemplate>;
}`,...(L=(W=k.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};var N,K,X;S.parameters={...S.parameters,docs:{...(N=S.parameters)==null?void 0:N.docs,source:{originalSource:`(args: CollapsibleTableProps) => {
  return <StoryTemplate title="CollapsibleTable - with dividers" display="block">
      <CollapsibleTable {...args} withDividers headerValues={headerValues} isCollapsed={args.isCollapsed !== false && true}>
        <Table.Head>
          <CollapsibleTable.Row type="head">
            {mappedHeaderCells}
          </CollapsibleTable.Row>
        </Table.Head>
        <Table.Body>
          {mapCellContents(data, headerCells).map(row => <CollapsibleTable.Row key={row.toString()}>
              {row.map(cellContent => <Table.Cell key={\`body-\${cellContent}\`}>
                  {cellContent}
                </Table.Cell>)}
            </CollapsibleTable.Row>)}
        </Table.Body>
      </CollapsibleTable>
    </StoryTemplate>;
}`,...(X=(K=S.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var O,E,J;w.parameters={...w.parameters,docs:{...(O=w.parameters)==null?void 0:O.docs,source:{originalSource:`(args: CollapsibleTableProps) => {
  return <StoryTemplate title="CollapsibleTable - compact" display="block">
      <CollapsibleTable {...args} density="compact" headerValues={headerValues} isCollapsed={args.isCollapsed !== false && true}>
        <Table.Head>
          <CollapsibleTable.Row type="head">
            {mappedHeaderCells}
          </CollapsibleTable.Row>
        </Table.Head>
        <Table.Body>
          {mapCellContents(data, headerCells).map(row => <CollapsibleTable.Row key={row.toString()}>
              {row.map(cellContent => <Table.Cell key={\`body-\${cellContent}\`}>
                  {cellContent}
                </Table.Cell>)}
            </CollapsibleTable.Row>)}
        </Table.Body>
      </CollapsibleTable>
    </StoryTemplate>;
}`,...(J=(E=w.parameters)==null?void 0:E.docs)==null?void 0:J.source}}};var F,_,q;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`(args: CollapsibleTableProps) => {
  return <StoryTemplate title="CollapsibleTable - sticky header" display="block">
      <CollapsibleTable {...args} stickyHeader isCollapsed={args.isCollapsed !== false && true} headerValues={headerValues} definingColumnIndex={[0, 2]}>
        <Table.Head>
          <CollapsibleTable.Row type="head">
            {mappedHeaderCells}
          </CollapsibleTable.Row>
        </Table.Head>
        <Table.Body>
          {mapCellContents(data, headerCells).map(row => <CollapsibleTable.Row key={row.toString()}>
              {row.map(cellContent => <Table.Cell key={\`body-\${cellContent}\`}>
                  {cellContent}
                </Table.Cell>)}
            </CollapsibleTable.Row>)}
          {mapCellContents(data, headerCells).map(row => <CollapsibleTable.Row key={row.toString()}>
              {row.map(cellContent => <Table.Cell key={\`body-\${cellContent}\`}>
                  {cellContent}
                </Table.Cell>)}
            </CollapsibleTable.Row>)}
        </Table.Body>
      </CollapsibleTable>
    </StoryTemplate>;
}`,...(q=(_=g.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var G,Q,U;R.parameters={...R.parameters,docs:{...(G=R.parameters)==null?void 0:G.docs,source:{originalSource:`(args: CollapsibleTableProps) => {
  const adminIcon = <Icon icon={PersonIcon} />;
  const headerValues = [{
    content: 'Navn til venstre',
    key: 'Navn til venstre'
  }, {
    content: 'Navn til høyre',
    key: 'Navn til høyre'
  }, {
    content: 'Rolle',
    key: 'Rolle'
  }, {
    content: 'Aksjoner',
    key: 'Aksjoner'
  }];
  const deleteButton = <Button appearance="borderless" icon={TrashIcon} iconPosition="left">
      Fjern tilgang
    </Button>;
  return <StoryTemplate title="Table - with buttons and icons" display="block">
      <CollapsibleTable {...args} headerValues={headerValues} isCollapsed>
        <Table.Head>
          <CollapsibleTable.Row type="head">
            {headerValues.map(headerCell => {
            return <Table.Cell key={\`head-\${headerCell.key}\`} type="head">
                  {headerCell.content}
                </Table.Cell>;
          })}
          </CollapsibleTable.Row>
        </Table.Head>
        <Table.Body>
          {data.map(item => <CollapsibleTable.Row key={item.name}>
              <Table.Cell layout="text and icon">
                {adminIcon} {item.name}
              </Table.Cell>
              <Table.Cell layout="text and icon">
                {item.name} {adminIcon}
              </Table.Cell>
              <Table.Cell>Admin</Table.Cell>
              <Table.Cell layout="center">{deleteButton}</Table.Cell>
            </CollapsibleTable.Row>)}
        </Table.Body>
      </CollapsibleTable>
    </StoryTemplate>;
}`,...(U=(Q=R.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var Y,Z,ee;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`(args: CollapsibleTableProps) => {
  const screenSize = useScreenSize();
  return <StoryTemplate title="CollapsibleTable - responsive" display="block">
      <Table.Wrapper style={{
      width: '100%'
    }}>
        <CollapsibleTable {...args} isCollapsed={screenSize <= ScreenSize.Small} headerValues={headerValues}>
          <Table.Head>
            <CollapsibleTable.Row type="head">
              {mappedHeaderCells}
            </CollapsibleTable.Row>
          </Table.Head>
          <Table.Body>
            {mapCellContents(data, headerCells).map(row => <CollapsibleTable.Row key={row.toString()}>
                {row.map(cellContent => <Table.Cell key={\`body-\${cellContent}\`}>
                    {cellContent}
                  </Table.Cell>)}
              </CollapsibleTable.Row>)}
          </Table.Body>
        </CollapsibleTable>
      </Table.Wrapper>
    </StoryTemplate>;
}`,...(ee=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var le,ae,oe;H.parameters={...H.parameters,docs:{...(le=H.parameters)==null?void 0:le.docs,source:{originalSource:`(args: CollapsibleTableProps) => {
  const screenSize = useScreenSize();
  return <StoryTemplate title="CollapsibleTable - responsive multiple breakpoints" display="block">
      <Table.Wrapper style={{
      width: '100%'
    }}>
        <CollapsibleTable {...args} style={{
        width: '100%'
      }} isCollapsed={screenSize <= ScreenSize.Small} headerValues={headerValues} definingColumnIndex={screenSize === ScreenSize.XSmall ? [2] : [2, 0]}>
          <Table.Head>
            <CollapsibleTable.Row type="head">
              {mappedHeaderCells}
            </CollapsibleTable.Row>
          </Table.Head>
          <Table.Body>
            {mapCellContents(data, headerCells).map(row => <CollapsibleTable.Row key={row.toString()}>
                {row.map(cellContent => <Table.Cell key={\`body-\${cellContent}\`}>
                    {cellContent}
                  </Table.Cell>)}
              </CollapsibleTable.Row>)}
          </Table.Body>
        </CollapsibleTable>
      </Table.Wrapper>
    </StoryTemplate>;
}`,...(oe=(ae=H.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var ne,te,re;v.parameters={...v.parameters,docs:{...(ne=v.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
  const headers = [{
    key: 'fav',
    content: <VisuallyHidden as="span">Velg som favoritt</VisuallyHidden>
  }, {
    key: 'Dokumenttype',
    content: <VisuallyHidden as="span">Dokumenttype</VisuallyHidden>
  }, {
    key: 'Nummer',
    content: 'Nr.'
  }, {
    key: 'Lest status',
    content: <VisuallyHidden as="span">Lest status</VisuallyHidden>
  }, {
    key: 'Dokumentnavn',
    content: 'Dokumentnavn'
  }, {
    key: 'Avsender',
    content: 'Avsender'
  }, {
    key: 'Mottakere',
    content: 'Mottakere'
  }, {
    key: 'Sendt',
    content: 'Sendt'
  }];
  const screenSize = useScreenSize();
  const isSmall = screenSize <= ScreenSize.Small;
  const isXSmall = screenSize <= ScreenSize.XSmall;
  const iconSize = isXSmall ? 'small' : 'medium';
  return <StoryTemplate title="CollapsibleTable - Example" display="block">
      <CollapsibleTable isCollapsed={isSmall} headerValues={headers} definingColumnIndex={[0, 1, 2, 3, 4]}>
        <Table.Head>
          <CollapsibleTable.Row type="head">
            {headers.map(i => <Table.Cell type="head"> {i.content} </Table.Cell>)}
          </CollapsibleTable.Row>
        </Table.Head>
        <Table.Body>
          <CollapsibleTable.Row>
            <Table.Cell>
              <Icon icon={StarIcon} iconSize={iconSize} />
            </Table.Cell>
            <Table.Cell>
              <Icon icon={FileIcon} iconSize={iconSize} />
            </Table.Cell>
            <Table.Cell>1</Table.Cell>
            <Table.Cell>
              <Icon icon={JordskifterettIcon} iconSize={iconSize} />
            </Table.Cell>
            <Table.Cell>
              <Link external href="/">
                Krav om sak fra Marie Luneby, Knut-Håkon Dagsvik, Sonja Luneby
                og Petter Olaf Jensen.pdf
              </Link>
            </Table.Cell>
            <Table.Cell> Maake Karl </Table.Cell>
            <Table.Cell> Akershus og Oslo jordskifterett </Table.Cell>
            <Table.Cell> 17.12.2018 </Table.Cell>
          </CollapsibleTable.Row>
          <CollapsibleTable.Row>
            <Table.Cell>
              <Icon icon={StarIcon} iconSize={iconSize} />
            </Table.Cell>
            <Table.Cell>
              <Icon icon={AttachmentIcon} iconSize={iconSize} />
            </Table.Cell>
            <Table.Cell>1-2</Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell>
              <Link external href="/">
                Merknader fra Knut-Håkon Dagsvik.pdf
              </Link>
            </Table.Cell>
            <Table.Cell>Akershus og Oslo jordskifterett</Table.Cell>
            <Table.Cell> Maake Karl</Table.Cell>
            <Table.Cell> 17.12.2018 </Table.Cell>
          </CollapsibleTable.Row>
        </Table.Body>
      </CollapsibleTable>
    </StoryTemplate>;
}`,...(re=(te=v.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};const qe=["SingleDefiningColumn","MultipleDefiningColumns","PrioritizedDefiningColumns","WithDividers","Compact","StickyHeader","WithButtonAndIcons","Responsive","ResposiveMultipleBreakpoints","Example"];export{w as Compact,v as Example,u as MultipleDefiningColumns,k as PrioritizedDefiningColumns,f as Responsive,H as ResposiveMultipleBreakpoints,y as SingleDefiningColumn,g as StickyHeader,R as WithButtonAndIcons,S as WithDividers,qe as __namedExportsOrder,_e as default};
//# sourceMappingURL=CollapsibleTable.stories-0b91f973.js.map
