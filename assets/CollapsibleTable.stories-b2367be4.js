import{a as e,j as r}from"./ddsReferenceTokens-f1d35829.js";import{C as a,T as l}from"./index-9e7a0ef7.js";import{h as i,m as c,d}from"./tableData-67b3b250.js";import{R as p}from"./storybook-components-c346f0a4.js";import{i as T,k as z,p as ie,d as de,w as pe,L as ce,_ as be}from"./dds-icons-265d9665.js";import{U as V,l as h}from"./dds-core-c67132cd.js";import{$ as I}from"./dds-typography-cc6cb429.js";import{B as Ce}from"./Button-aa30c63f.js";import{V as B}from"./VisuallyHidden-15b316c1.js";import"./index-d47b1f5a.js";import"./scrollbarStyling-5cc839fb.js";import"./ScrollableContainer.tokens-c202eeaf.js";import"./dds-form-9b45fc8d.js";import"./DescriptionListDesc-559bec8b.js";import"./chunk-PCJTTTQV-ce1fad4e.js";import"./iframe-a8da6729.js";import"../sb-preview/runtime.js";import"./index-db9ff070.js";import"./index-d475d2ea.js";import"./index-356e4a49.js";import"./focus-visible-bfce03b6.js";import"./Button.tokens-d278b944.js";import"./Spinner-dd54de98.js";const Pe={title:"dds-components/Table/CollapsibleTable BETA",component:a,argTypes:{isCollapsed:{control:{type:"boolean"}},stickyHeader:{control:{type:"boolean"}}},parameters:{controls:{exclude:["headerValues","definingColumnIndex"]}}},C=i.map(o=>e(l.Cell,{type:"head",children:o.name},`head-${o.dataName}`)),m=i.map(o=>({content:o.name,key:o.name})),y=o=>e(p,{title:"CollapsibleTable - single defining column",display:"block",children:r(a,{...o,headerValues:m,isCollapsed:o.isCollapsed!==!1&&!0,children:[e(l.Head,{children:e(a.Row,{type:"head",children:C})}),e(l.Body,{children:c(d,i).map(n=>e(a.Row,{children:n.map(t=>e(l.Cell,{children:t},`body-${t}`))},n.toString()))})]})}),u=o=>e(p,{title:"CollapsibleTable - multiple defining columns",display:"block",children:e(l.Wrapper,{style:{width:"100%"},children:r(a,{...o,style:{width:"100%"},isCollapsed:o.isCollapsed!==!1&&!0,headerValues:m,definingColumnIndex:[0,2],children:[e(l.Head,{children:e(a.Row,{type:"head",children:C})}),e(l.Body,{children:c(d,i).map(n=>e(a.Row,{children:n.map(t=>e(l.Cell,{children:t},`body-${t}`))},n.toString()))})]})})}),k=o=>e(p,{title:"CollapsibleTable - prioritized defining columns",display:"block",children:e(l.Wrapper,{style:{width:"100%"},children:r(a,{...o,style:{width:"100%"},isCollapsed:o.isCollapsed!==!1&&!0,headerValues:m,definingColumnIndex:[2,0],children:[e(l.Head,{children:e(a.Row,{type:"head",children:C})}),e(l.Body,{children:c(d,i).map(n=>e(a.Row,{children:n.map(t=>e(l.Cell,{children:t},`body-${t}`))},n.toString()))})]})})}),S=o=>e(p,{title:"CollapsibleTable - with dividers",display:"block",children:r(a,{...o,withDividers:!0,headerValues:m,isCollapsed:o.isCollapsed!==!1&&!0,children:[e(l.Head,{children:e(a.Row,{type:"head",children:C})}),e(l.Body,{children:c(d,i).map(n=>e(a.Row,{children:n.map(t=>e(l.Cell,{children:t},`body-${t}`))},n.toString()))})]})}),w=o=>e(p,{title:"CollapsibleTable - compact",display:"block",children:r(a,{...o,density:"compact",headerValues:m,isCollapsed:o.isCollapsed!==!1&&!0,children:[e(l.Head,{children:e(a.Row,{type:"head",children:C})}),e(l.Body,{children:c(d,i).map(n=>e(a.Row,{children:n.map(t=>e(l.Cell,{children:t},`body-${t}`))},n.toString()))})]})}),g=o=>e(p,{title:"CollapsibleTable - sticky header",display:"block",children:r(a,{...o,stickyHeader:!0,isCollapsed:o.isCollapsed!==!1&&!0,headerValues:m,definingColumnIndex:[0,2],children:[e(l.Head,{children:e(a.Row,{type:"head",children:C})}),r(l.Body,{children:[c(d,i).map(n=>e(a.Row,{children:n.map(t=>e(l.Cell,{children:t},`body-${t}`))},n.toString())),c(d,i).map(n=>e(a.Row,{children:n.map(t=>e(l.Cell,{children:t},`body-${t}`))},n.toString()))]})]})}),R=o=>{const n=e(T,{icon:ce}),t=[{content:"Navn til venstre",key:"Navn til venstre"},{content:"Navn til høyre",key:"Navn til høyre"},{content:"Rolle",key:"Rolle"},{content:"Aksjoner",key:"Aksjoner"}],b=e(Ce,{label:"Fjern tilgang",appearance:"borderless",icon:be,iconPosition:"left"});return e(p,{title:"Table - with buttons and icons",display:"block",children:r(a,{...o,headerValues:t,isCollapsed:!0,children:[e(l.Head,{children:e(a.Row,{type:"head",children:t.map(s=>e(l.Cell,{type:"head",children:s.content},`head-${s.key}`))})}),e(l.Body,{children:d.map(s=>r(a.Row,{children:[r(l.Cell,{layout:"text and icon",children:[n," ",s.name]}),r(l.Cell,{layout:"text and icon",children:[s.name," ",n]}),e(l.Cell,{children:"Admin"}),e(l.Cell,{layout:"center",children:b})]},s.name))})]})})},f=o=>{const n=V();return e(p,{title:"CollapsibleTable - responsive",display:"block",children:e(l.Wrapper,{style:{width:"100%"},children:r(a,{...o,isCollapsed:n<=h.Small,headerValues:m,children:[e(l.Head,{children:e(a.Row,{type:"head",children:C})}),e(l.Body,{children:c(d,i).map(t=>e(a.Row,{children:t.map(b=>e(l.Cell,{children:b},`body-${b}`))},t.toString()))})]})})})},H=o=>{const n=V();return e(p,{title:"CollapsibleTable - responsive multiple breakpoints",display:"block",children:e(l.Wrapper,{style:{width:"100%"},children:r(a,{...o,style:{width:"100%"},isCollapsed:n<=h.Small,headerValues:m,definingColumnIndex:n===h.XSmall?[2]:[2,0],children:[e(l.Head,{children:e(a.Row,{type:"head",children:C})}),e(l.Body,{children:c(d,i).map(t=>e(a.Row,{children:t.map(b=>e(l.Cell,{children:b},`body-${b}`))},t.toString()))})]})})})},v=()=>{const o=[{key:"fav",content:e(B,{as:"span",children:"Velg som favoritt"})},{key:"Dokumenttype",content:e(B,{as:"span",children:"Dokumenttype"})},{key:"Nummer",content:"Nr."},{key:"Lest status",content:e(B,{as:"span",children:"Lest status"})},{key:"Dokumentnavn",content:"Dokumentnavn"},{key:"Avsender",content:"Avsender"},{key:"Mottakere",content:"Mottakere"},{key:"Sendt",content:"Sendt"}],n=V(),t=n<=h.Small,s=n<=h.XSmall?"small":"medium";return e(p,{title:"CollapsibleTable - Example",display:"block",children:r(a,{isCollapsed:t,headerValues:o,definingColumnIndex:[0,1,2,3,4],children:[e(l.Head,{children:e(a.Row,{type:"head",children:o.map(se=>r(l.Cell,{type:"head",children:[" ",se.content," "]}))})}),r(l.Body,{children:[r(a.Row,{children:[e(l.Cell,{children:e(T,{icon:z,iconSize:s})}),e(l.Cell,{children:e(T,{icon:ie,iconSize:s})}),e(l.Cell,{children:"1"}),e(l.Cell,{children:e(T,{icon:de,iconSize:s})}),e(l.Cell,{children:e(I,{external:!0,href:"/",children:"Krav om sak fra Marie Luneby, Knut-Håkon Dagsvik, Sonja Luneby og Petter Olaf Jensen.pdf"})}),e(l.Cell,{children:" Maake Karl "}),e(l.Cell,{children:" Akershus og Oslo jordskifterett "}),e(l.Cell,{children:" 17.12.2018 "})]}),r(a.Row,{children:[e(l.Cell,{children:e(T,{icon:z,iconSize:s})}),e(l.Cell,{children:e(T,{icon:pe,iconSize:s})}),e(l.Cell,{children:"1-2"}),e(l.Cell,{}),e(l.Cell,{children:e(I,{external:!0,href:"/",children:"Merknader fra Knut-Håkon Dagsvik.pdf"})}),e(l.Cell,{children:"Akershus og Oslo jordskifterett"}),e(l.Cell,{children:" Maake Karl"}),e(l.Cell,{children:" 17.12.2018 "})]})]})]})})};var x,$,D;y.parameters={...y.parameters,docs:{...(x=y.parameters)==null?void 0:x.docs,source:{originalSource:`(args: CollapsibleTableProps) => {
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
}`,...(D=($=y.parameters)==null?void 0:$.docs)==null?void 0:D.source}}};var A,j,M;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`(args: CollapsibleTableProps) => {
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
}`,...(M=(j=u.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};var P,W,L;k.parameters={...k.parameters,docs:{...(P=k.parameters)==null?void 0:P.docs,source:{originalSource:`(args: CollapsibleTableProps) => {
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
}`,...(X=(K=S.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var O,E,_;w.parameters={...w.parameters,docs:{...(O=w.parameters)==null?void 0:O.docs,source:{originalSource:`(args: CollapsibleTableProps) => {
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
}`,...(_=(E=w.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var F,J,U;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`(args: CollapsibleTableProps) => {
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
}`,...(U=(J=g.parameters)==null?void 0:J.docs)==null?void 0:U.source}}};var q,G,Q;R.parameters={...R.parameters,docs:{...(q=R.parameters)==null?void 0:q.docs,source:{originalSource:`(args: CollapsibleTableProps) => {
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
}`,...(Q=(G=R.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var Y,Z,ee;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`(args: CollapsibleTableProps) => {
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
}`,...(re=(te=v.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};const We=["SingleDefiningColumn","MultipleDefiningColumns","PrioritizedDefiningColumns","WithDividers","Compact","StickyHeader","WithButtonAndIcons","Responsive","ResposiveMultipleBreakpoints","Example"];export{w as Compact,v as Example,u as MultipleDefiningColumns,k as PrioritizedDefiningColumns,f as Responsive,H as ResposiveMultipleBreakpoints,y as SingleDefiningColumn,g as StickyHeader,R as WithButtonAndIcons,S as WithDividers,We as __namedExportsOrder,Pe as default};
//# sourceMappingURL=CollapsibleTable.stories-b2367be4.js.map
