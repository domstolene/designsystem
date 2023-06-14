import{j as e,b as t}from"./focus-visible-17f12d09.js";import{C as a,T as l}from"./index-43c465b1.js";import{h as s,m as c,d}from"./tableData-67b3b250.js";import{R as p}from"./storybook-components-b7b7a39c.js";import{S as z,F as se,J as de}from"./star-98053209.js";import{L as V}from"./Link-a3416982.js";import{T as pe}from"./trash-fea1209a.js";import{u as I,S as h}from"./useScreenSize-37d4038e.js";import{I as T}from"./Icon-a968456f.js";import{A as ce}from"./attachment-e46272fc.js";import{P as be}from"./person-f585b587.js";import{B as Ce}from"./Button-4fdfc19e.js";import{V as B}from"./VisuallyHidden-68635a7d.js";import"./index-c6dae603.js";import"./selection-dced972e.js";import"./scrollbarStyling-27f949d7.js";import"./ScrollableContainer.tokens-3dce5c89.js";import"./Typography.utils-3c68477b.js";import"./focusVisible-bd00be70.js";import"./DescriptionListDesc-7709b81f.js";import"./BaseComponentProps-bb0d5515.js";import"./unfoldMore-3c6d2d1a.js";import"./SvgWrapper-0812a1f2.js";import"./chevronUp-e61fcd7c.js";import"./normalize-f756ee4b.js";import"./removeButtonStyling-867d6ba4.js";import"./chevronDown-dd1c1a45.js";import"./idGenerator-c29473b2.js";import"./AnimatedChevronUpDown-bc7745fb.js";import"./index-c0e0960b.js";import"./iframe-6efa2ccf.js";import"../sb-preview/runtime.js";import"./index-519f2600.js";import"./index-eb008d06.js";import"./Button.tokens-82906d32.js";import"./text-20d7ad40.js";import"./Spinner-7298b3ed.js";import"./color-0daeea22.js";const Ye={title:"dds-components/Table/CollapsibleTable BETA",component:a,argTypes:{isCollapsed:{control:{type:"boolean"}},stickyHeader:{control:{type:"boolean"}}},parameters:{controls:{exclude:["headerValues","definingColumnIndex"]}}},C=s.map(o=>e(l.Cell,{type:"head",children:o.name},`head-${o.dataName}`)),m=s.map(o=>({content:o.name,key:o.name})),y=o=>e(p,{title:"CollapsibleTable - single defining column",display:"block",children:t(a,{...o,headerValues:m,isCollapsed:o.isCollapsed!==!1&&!0,children:[e(l.Head,{children:e(a.Row,{type:"head",children:C})}),e(l.Body,{children:c(d,s).map(n=>e(a.Row,{children:n.map(r=>e(l.Cell,{children:r},`body-${r}`))},n.toString()))})]})}),u=o=>e(p,{title:"CollapsibleTable - multiple defining columns",display:"block",children:e(l.Wrapper,{style:{width:"100%"},children:t(a,{...o,style:{width:"100%"},isCollapsed:o.isCollapsed!==!1&&!0,headerValues:m,definingColumnIndex:[0,2],children:[e(l.Head,{children:e(a.Row,{type:"head",children:C})}),e(l.Body,{children:c(d,s).map(n=>e(a.Row,{children:n.map(r=>e(l.Cell,{children:r},`body-${r}`))},n.toString()))})]})})}),k=o=>e(p,{title:"CollapsibleTable - prioritized defining columns",display:"block",children:e(l.Wrapper,{style:{width:"100%"},children:t(a,{...o,style:{width:"100%"},isCollapsed:o.isCollapsed!==!1&&!0,headerValues:m,definingColumnIndex:[2,0],children:[e(l.Head,{children:e(a.Row,{type:"head",children:C})}),e(l.Body,{children:c(d,s).map(n=>e(a.Row,{children:n.map(r=>e(l.Cell,{children:r},`body-${r}`))},n.toString()))})]})})}),S=o=>e(p,{title:"CollapsibleTable - with dividers",display:"block",children:t(a,{...o,withDividers:!0,headerValues:m,isCollapsed:o.isCollapsed!==!1&&!0,children:[e(l.Head,{children:e(a.Row,{type:"head",children:C})}),e(l.Body,{children:c(d,s).map(n=>e(a.Row,{children:n.map(r=>e(l.Cell,{children:r},`body-${r}`))},n.toString()))})]})}),w=o=>e(p,{title:"CollapsibleTable - compact",display:"block",children:t(a,{...o,density:"compact",headerValues:m,isCollapsed:o.isCollapsed!==!1&&!0,children:[e(l.Head,{children:e(a.Row,{type:"head",children:C})}),e(l.Body,{children:c(d,s).map(n=>e(a.Row,{children:n.map(r=>e(l.Cell,{children:r},`body-${r}`))},n.toString()))})]})}),g=o=>e(p,{title:"CollapsibleTable - sticky header",display:"block",children:t(a,{...o,stickyHeader:!0,isCollapsed:o.isCollapsed!==!1&&!0,headerValues:m,definingColumnIndex:[0,2],children:[e(l.Head,{children:e(a.Row,{type:"head",children:C})}),t(l.Body,{children:[c(d,s).map(n=>e(a.Row,{children:n.map(r=>e(l.Cell,{children:r},`body-${r}`))},n.toString())),c(d,s).map(n=>e(a.Row,{children:n.map(r=>e(l.Cell,{children:r},`body-${r}`))},n.toString()))]})]})}),f=o=>{const n=e(T,{icon:be}),r=[{content:"Navn til venstre",key:"Navn til venstre"},{content:"Navn til høyre",key:"Navn til høyre"},{content:"Rolle",key:"Rolle"},{content:"Aksjoner",key:"Aksjoner"}],b=e(Ce,{label:"Fjern tilgang",appearance:"borderless",icon:pe,iconPosition:"left"});return e(p,{title:"Table - with buttons and icons",display:"block",children:t(a,{...o,headerValues:r,isCollapsed:!0,children:[e(l.Head,{children:e(a.Row,{type:"head",children:r.map(i=>e(l.Cell,{type:"head",children:i.content},`head-${i.key}`))})}),e(l.Body,{children:d.map(i=>t(a.Row,{children:[t(l.Cell,{layout:"text and icon",children:[n," ",i.name]}),t(l.Cell,{layout:"text and icon",children:[i.name," ",n]}),e(l.Cell,{children:"Admin"}),e(l.Cell,{layout:"center",children:b})]},i.name))})]})})},R=o=>{const n=I();return e(p,{title:"CollapsibleTable - responsive",display:"block",children:e(l.Wrapper,{style:{width:"100%"},children:t(a,{...o,isCollapsed:n<=h.Small,headerValues:m,children:[e(l.Head,{children:e(a.Row,{type:"head",children:C})}),e(l.Body,{children:c(d,s).map(r=>e(a.Row,{children:r.map(b=>e(l.Cell,{children:b},`body-${b}`))},r.toString()))})]})})})},H=o=>{const n=I();return e(p,{title:"CollapsibleTable - responsive multiple breakpoints",display:"block",children:e(l.Wrapper,{style:{width:"100%"},children:t(a,{...o,style:{width:"100%"},isCollapsed:n<=h.Small,headerValues:m,definingColumnIndex:n===h.XSmall?[2]:[2,0],children:[e(l.Head,{children:e(a.Row,{type:"head",children:C})}),e(l.Body,{children:c(d,s).map(r=>e(a.Row,{children:r.map(b=>e(l.Cell,{children:b},`body-${b}`))},r.toString()))})]})})})},v=()=>{const o=[{key:"fav",content:e(B,{as:"span",children:"Velg som favoritt"})},{key:"Dokumenttype",content:e(B,{as:"span",children:"Dokumenttype"})},{key:"Nummer",content:"Nr."},{key:"Lest status",content:e(B,{as:"span",children:"Lest status"})},{key:"Dokumentnavn",content:"Dokumentnavn"},{key:"Avsender",content:"Avsender"},{key:"Mottakere",content:"Mottakere"},{key:"Sendt",content:"Sendt"}],n=I(),r=n<=h.Small,i=n<=h.XSmall?"small":"medium";return e(p,{title:"CollapsibleTable - Example",display:"block",children:t(a,{isCollapsed:r,headerValues:o,definingColumnIndex:[0,1,2,3,4],children:[e(l.Head,{children:e(a.Row,{type:"head",children:o.map(ie=>t(l.Cell,{type:"head",children:[" ",ie.content," "]}))})}),t(l.Body,{children:[t(a.Row,{children:[e(l.Cell,{children:e(T,{icon:z,iconSize:i})}),e(l.Cell,{children:e(T,{icon:se,iconSize:i})}),e(l.Cell,{children:"1"}),e(l.Cell,{children:e(T,{icon:de,iconSize:i})}),e(l.Cell,{children:e(V,{external:!0,href:"/",children:"Krav om sak fra Marie Luneby, Knut-Håkon Dagsvik, Sonja Luneby og Petter Olaf Jensen.pdf"})}),e(l.Cell,{children:" Maake Karl "}),e(l.Cell,{children:" Akershus og Oslo jordskifterett "}),e(l.Cell,{children:" 17.12.2018 "})]}),t(a.Row,{children:[e(l.Cell,{children:e(T,{icon:z,iconSize:i})}),e(l.Cell,{children:e(T,{icon:ce,iconSize:i})}),e(l.Cell,{children:"1-2"}),e(l.Cell,{}),e(l.Cell,{children:e(V,{external:!0,href:"/",children:"Merknader fra Knut-Håkon Dagsvik.pdf"})}),e(l.Cell,{children:"Akershus og Oslo jordskifterett"}),e(l.Cell,{children:" Maake Karl"}),e(l.Cell,{children:" 17.12.2018 "})]})]})]})})};var x,D,$;y.parameters={...y.parameters,docs:{...(x=y.parameters)==null?void 0:x.docs,source:{originalSource:`(args: CollapsibleTableProps) => {
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
}`,...($=(D=y.parameters)==null?void 0:D.docs)==null?void 0:$.source}}};var A,P,M;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`(args: CollapsibleTableProps) => {
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
}`,...(M=(P=u.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var W,j,L;k.parameters={...k.parameters,docs:{...(W=k.parameters)==null?void 0:W.docs,source:{originalSource:`(args: CollapsibleTableProps) => {
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
}`,...(L=(j=k.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var N,K,X;S.parameters={...S.parameters,docs:{...(N=S.parameters)==null?void 0:N.docs,source:{originalSource:`(args: CollapsibleTableProps) => {
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
}`,...(X=(K=S.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var O,E,F;w.parameters={...w.parameters,docs:{...(O=w.parameters)==null?void 0:O.docs,source:{originalSource:`(args: CollapsibleTableProps) => {
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
}`,...(F=(E=w.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var J,_,q;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`(args: CollapsibleTableProps) => {
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
}`,...(q=(_=g.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var G,Q,U;f.parameters={...f.parameters,docs:{...(G=f.parameters)==null?void 0:G.docs,source:{originalSource:`(args: CollapsibleTableProps) => {
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
  const deleteButton = <Button label="Fjern tilgang" appearance="borderless" icon={TrashIcon} iconPosition="left" />;
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
}`,...(U=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var Y,Z,ee;R.parameters={...R.parameters,docs:{...(Y=R.parameters)==null?void 0:Y.docs,source:{originalSource:`(args: CollapsibleTableProps) => {
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
}`,...(ee=(Z=R.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var le,ae,oe;H.parameters={...H.parameters,docs:{...(le=H.parameters)==null?void 0:le.docs,source:{originalSource:`(args: CollapsibleTableProps) => {
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
}`,...(oe=(ae=H.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var ne,re,te;v.parameters={...v.parameters,docs:{...(ne=v.parameters)==null?void 0:ne.docs,source:{originalSource:`() => {
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
}`,...(te=(re=v.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};const Ze=["SingleDefiningColumn","MultipleDefiningColumns","PrioritizedDefiningColumns","WithDividers","Compact","StickyHeader","WithButtonAndIcons","Responsive","ResposiveMultipleBreakpoints","Example"];export{w as Compact,v as Example,u as MultipleDefiningColumns,k as PrioritizedDefiningColumns,R as Responsive,H as ResposiveMultipleBreakpoints,y as SingleDefiningColumn,g as StickyHeader,f as WithButtonAndIcons,S as WithDividers,Ze as __namedExportsOrder,Ye as default};
//# sourceMappingURL=CollapsibleTable.stories-8d105901.js.map
