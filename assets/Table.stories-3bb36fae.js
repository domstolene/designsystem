import{a as l,j as n}from"./ddsReferenceTokens-647ce456.js";import{r as $}from"./index-ebeaab24.js";import{T as e}from"./index-248c1776.js";import"./Caption-5c254d72.js";import"./Heading-dc72d0b9.js";import"./Label-23c96940.js";import"./Legend-dbc3ced6.js";import"./Link-9aff7843.js";import{P as We}from"./Paragraph-3340e0ea.js";import"./TextOverflowEllipsis-e3546c5b.js";import"./Typography-1747463b.js";import{h as b,m as T,d as s}from"./tableData-67b3b250.js";import{S as i}from"./StoryTemplate-ccc1e3e8.js";import{b as xe,j as ve}from"./libraryAdd-15469728.js";import{I as Ie}from"./Icon-e6324a43.js";import{C as A}from"./Checkbox-6136d8db.js";import{S as Pe}from"./ScrollableContainer-805201ff.js";import{B as $e}from"./Button-c6f32940.js";const De={title:"dds-components/Table/Table",component:e,argTypes:{stickyHeader:{control:{type:"boolean"}},withDividers:{control:{type:"boolean"}}}},C=b.map(t=>l(e.Cell,{type:"head",children:t.name},`head-${t.dataName}`)),m=t=>l(i,{title:"Table - default",children:l(e.Wrapper,{children:n(e,{...t,children:[l(e.Head,{children:l(e.Row,{type:"head",children:C})}),l(e.Body,{children:T(s,b).map(a=>l(e.Row,{children:a.map(r=>l(e.Cell,{children:r},`body-${r}`))},a.toString()))})]})})}),u=t=>l(i,{title:"Table - with dividers",children:l(e.Wrapper,{children:n(e,{...t,withDividers:!0,children:[l(e.Head,{children:l(e.Row,{type:"head",children:C})}),l(e.Body,{children:T(s,b).map(a=>l(e.Row,{children:a.map(r=>l(e.Cell,{children:r},`body-${r}`))},a.toString()))})]})})}),y=t=>l(i,{title:"Table - focusable",children:l(e.Wrapper,{children:n(e,{...t,children:[l(e.Head,{children:l(e.Row,{type:"head",children:C})}),l(e.Body,{children:T(s,b).map(a=>l(e.Row,{tabIndex:0,onClick:()=>{console.log("click")},children:a.map(r=>l(e.Cell,{children:r},`body-${r}`))},a.toString()))})]})})}),w=t=>l(i,{title:"Table - compact",children:l(e.Wrapper,{children:n(e,{...t,density:"compact",children:[l(e.Head,{children:l(e.Row,{type:"head",children:C})}),l(e.Body,{children:T(s,b).map(a=>l(e.Row,{children:a.map(r=>l(e.Cell,{children:r},`body-${r}`))},a.toString()))})]})})}),g=t=>l(i,{title:"Table - extraCompact",children:l(e.Wrapper,{children:n(e,{...t,density:"extraCompact",children:[l(e.Head,{children:l(e.Row,{type:"head",children:C})}),l(e.Body,{children:T(s,b).map(a=>l(e.Row,{children:a.map(r=>l(e.Cell,{children:r},`body-${r}`))},a.toString()))})]})})}),S=t=>l(i,{title:"Table - sticky header",children:l(e.Wrapper,{children:n(e,{...t,stickyHeader:!0,children:[l(e.Head,{children:l(e.Row,{type:"head",children:C})}),n(e.Body,{children:[T(s,b).map(a=>l(e.Row,{children:a.map(r=>l(e.Cell,{children:r},`body-${r}`))},a.toString())),T(s,b).map(a=>l(e.Row,{children:a.map(r=>l(e.Cell,{children:r},`body-${r}`))},a.toString()))]})]})})}),R=t=>l(i,{title:"Table - hoverable",children:l(e.Wrapper,{children:n(e,{...t,children:[l(e.Head,{children:l(e.Row,{type:"head",children:C})}),l(e.Body,{children:T(s,b).map(a=>l(e.Row,{hoverable:!0,children:a.map(r=>l(e.Cell,{children:r},`body-${r}`))},a.toString()))})]})})}),k=t=>{const a=l(Ie,{icon:xe}),r=l($e,{label:"Fjern tilgang",appearance:"borderless",icon:ve,iconPosition:"left"});return l(i,{title:"Table - with buttons and icons",children:l(e.Wrapper,{children:n(e,{...t,children:[l(e.Head,{children:n(e.Row,{type:"head",children:[l(e.Cell,{type:"head",children:"Navn"}),l(e.Cell,{type:"head",children:"Navn"}),l(e.Cell,{type:"head",children:"Rolle"}),l(e.Cell,{type:"head"})]})}),l(e.Body,{children:s.map(p=>n(e.Row,{children:[n(e.Cell,{layout:"text and icon",children:[a," ",p.name]}),n(e.Cell,{layout:"text and icon",children:[p.name," ",a]}),l(e.Cell,{children:"Admin"}),l(e.Cell,{layout:"center",children:r})]},p.name))})]})})})},f=t=>{const a=[{id:"20-1234531TVI",amount:472},{id:"21-4317383TVI",amount:4},{id:"89-9204832TVI",amount:56},{id:"30-9204712TVI",amount:23}];return l(i,{title:"Table - sum",children:l(e.Wrapper,{children:n(e,{...t,children:[l(e.Head,{children:n(e.Row,{type:"head",children:[l(e.Cell,{type:"head",children:"Saksnummer"}),l(e.Cell,{type:"head",layout:"right",children:"Antall dokumenter"})]})}),l(e.Body,{children:a.map(r=>n(e.Row,{children:[l(e.Cell,{children:r.id}),l(e.Cell,{layout:"right",children:r.amount})]},r.id))}),l(e.Foot,{children:n(e.Row,{mode:"sum",children:[l(e.Cell,{children:"Totalt"}),l(e.Cell,{layout:"right",children:a.reduce((r,p)=>r+(p.amount||0),0)})]})})]})})})},H=t=>{const a=[{id:"ch-1",...s[0]},{id:"ch-2",...s[1]},{id:"ch-3",...s[2]},{id:"ch-4",...s[3]}],[r,p]=$.useState([]);function D(d,o){const c=[...r];if(d.target.checked)c.push(o);else{const h=c.findIndex(I=>I.id===o.id);c.splice(h,1)}p(c)}function O(d){d.target.checked?p([...a]):p([])}return l(i,{title:"Table - with checkboxes",children:l(e.Wrapper,{children:n(e,{...t,children:[l(e.Head,{children:n(e.Row,{type:"head",children:[l(e.Cell,{type:"head",children:l(A,{indeterminate:(r==null?void 0:r.length)>0&&(r==null?void 0:r.length)!==a.length,checked:(r==null?void 0:r.length)===a.length,onChange:d=>O(d)})}),C]})}),l(e.Body,{children:a.map(d=>{const o=!!r.find(c=>d.id===c.id);return n(e.Row,{hoverable:!0,selected:o,children:[l(e.Cell,{children:l(A,{id:d.id,name:d.name,checked:o,onChange:c=>D(c,d)})}),l(e.Cell,{children:d.name}),l(e.Cell,{children:d.fnumber}),l(e.Cell,{children:d.employer}),l(e.Cell,{children:d.orgnumber}),l(e.Cell,{children:d.percentage})]},`row-${d.id}`)})})]})})})},B=t=>l(i,{title:"Table - complex",children:l(e.Wrapper,{children:n(e,{...t,stickyHeader:!0,children:[l("colgroup",{children:l("col",{})}),l("colgroup",{span:2}),l("colgroup",{span:2}),n(e.Body,{children:[n(e.Row,{type:"head",children:[l(e.Cell,{rowSpan:2}),l(e.Cell,{type:"head",colSpan:2,scope:"colgroup",children:"Mars"}),l(e.Cell,{type:"head",colSpan:2,scope:"colgroup",children:"Venus"})]}),n(e.Row,{type:"head",children:[l(e.Cell,{type:"head",scope:"col",children:"Produced"}),l(e.Cell,{type:"head",scope:"col",children:"Sold"}),l(e.Cell,{type:"head",scope:"col",children:"Produced"}),l(e.Cell,{type:"head",scope:"col",children:"Sold"})]}),n(e.Row,{children:[l(e.Cell,{type:"head",scope:"row",children:"Teddy Bears"}),l(e.Cell,{children:"50,000"}),l(e.Cell,{children:"30,000"}),l(e.Cell,{children:"100,000"}),l(e.Cell,{children:"80,000"})]}),n(e.Row,{children:[l(e.Cell,{type:"head",scope:"row",children:"Board Games"}),l(e.Cell,{children:"10,000"}),l(e.Cell,{children:"5,000"}),l(e.Cell,{children:"12,000"}),l(e.Cell,{children:"9,000"})]}),n(e.Row,{children:[l(e.Cell,{type:"head",scope:"row",children:"Dolls"}),l(e.Cell,{children:"50,000"}),l(e.Cell,{children:"30,000"}),l(e.Cell,{children:"100,000"}),l(e.Cell,{children:"80,000"})]}),n(e.Row,{children:[l(e.Cell,{type:"head",scope:"row",children:"Action Figures"}),l(e.Cell,{children:"10,000"}),l(e.Cell,{children:"5,000"}),l(e.Cell,{children:"12,000"}),l(e.Cell,{children:"9,000"})]})]})]})})}),W=t=>{const[a,r]=$.useState(b),[p,D]=$.useState();$.useEffect(()=>{if(a){const o=d(s),c=T(o,a);D(c)}},[a]);const O=o=>{const c=a.map(h=>o.dataName===h.dataName?{...o,isSorted:!0,sortOrder:o.sortOrder==="ascending"?"descending":"ascending"}:{...h,isSorted:!1,sortOrder:h.sortOrder?"none":void 0});r(c)},d=o=>o.sort((c,h)=>{const I=a.find(Be=>Be.isSorted);if(!I)return 1;const{sortOrder:N,dataName:He}=I,P=He;return N==="ascending"?c[P]>h[P]?1:-1:N==="descending"?c[P]<h[P]?1:-1:0});return l(i,{title:"Table - sortable",children:l(e.Wrapper,{children:n(e,{...t,children:[l(e.Head,{children:l(e.Row,{type:"head",children:a.map(o=>o.sortOrder?l(e.SortCell,{onClick:()=>O(o),isSorted:o.isSorted,sortOrder:o.sortOrder==="none"?void 0:o.sortOrder,children:o.name},`head-${o.dataName}`):l(e.Cell,{type:"head",children:o.name},`head-${o.dataName}`))})}),l(e.Body,{children:p==null?void 0:p.map(o=>l(e.Row,{children:o.map(c=>l(e.Cell,{children:c},`body-${c}`))},o.toString()))})]})})})},x=t=>l(i,{title:"Table - column and row headers",children:l(e.Wrapper,{children:l(e,{...t,children:n(e.Body,{children:[n(e.Row,{children:[l(e.Cell,{}),b.map(a=>l(e.Cell,{type:"head",scope:"col",children:a.name},`head-${a.dataName}`))]}),s.map(a=>n(e.Row,{children:[l(e.Cell,{type:"head",scope:"row",children:"Header"}),n(e.Cell,{children:[" ",a.name," "]}),n(e.Cell,{children:[" ",a.fnumber," "]}),n(e.Cell,{children:[" ",a.employer," "]}),n(e.Cell,{children:[" ",a.orgnumber," "]}),n(e.Cell,{children:[" ",a.percentage," "]})]},a.name))]})})})}),v=t=>n(i,{title:"Table - with scroll",children:[l(We,{children:"Her brukes komponenten ScrollableContainer for å gjøre det mulig å scrolle i tabellen når den blir bredere enn vinduets bredde. Du kan teste ut dette ved å gjøre nettleservinduet ditt mindre."}),l(Pe,{children:l(e.Wrapper,{children:l(e,{...t,children:n(e.Body,{children:[n(e.Row,{children:[l(e.Cell,{}),b.map(a=>l(e.Cell,{type:"head",scope:"col",children:a.name},`head-${a.dataName}`))]}),s.map(a=>n(e.Row,{children:[l(e.Cell,{type:"head",scope:"row",children:"Header"}),n(e.Cell,{children:[" ",a.name," "]}),n(e.Cell,{children:[" ",a.fnumber," "]}),n(e.Cell,{children:[" ",a.employer," "]}),n(e.Cell,{children:[" ",a.orgnumber," "]}),n(e.Cell,{children:[" ",a.percentage," "]})]},a.name))]})})})})]});var E,j,V;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`(args: TableProps) => {
  return <StoryTemplate title="Table - default">
      <Table.Wrapper>
        <Table {...args}>
          <Table.Head>
            <Table.Row type="head">{mappedHeaderCells}</Table.Row>
          </Table.Head>
          <Table.Body>
            {mapCellContents(data, headerCells).map(row => <Table.Row key={row.toString()}>
                {row.map(cellContent => <Table.Cell key={\`body-\${cellContent}\`}>
                    {cellContent}
                  </Table.Cell>)}
              </Table.Row>)}
          </Table.Body>
        </Table>
      </Table.Wrapper>
    </StoryTemplate>;
}`,...(V=(j=m.parameters)==null?void 0:j.docs)==null?void 0:V.source}}};var F,M,_;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`(args: TableProps) => {
  return <StoryTemplate title="Table - with dividers">
      <Table.Wrapper>
        <Table {...args} withDividers>
          <Table.Head>
            <Table.Row type="head">{mappedHeaderCells}</Table.Row>
          </Table.Head>
          <Table.Body>
            {mapCellContents(data, headerCells).map(row => <Table.Row key={row.toString()}>
                {row.map(cellContent => <Table.Cell key={\`body-\${cellContent}\`}>
                    {cellContent}
                  </Table.Cell>)}
              </Table.Row>)}
          </Table.Body>
        </Table>
      </Table.Wrapper>
    </StoryTemplate>;
}`,...(_=(M=u.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var L,G,z;y.parameters={...y.parameters,docs:{...(L=y.parameters)==null?void 0:L.docs,source:{originalSource:`(args: TableProps) => {
  return <StoryTemplate title="Table - focusable">
      <Table.Wrapper>
        <Table {...args}>
          <Table.Head>
            <Table.Row type="head">{mappedHeaderCells}</Table.Row>
          </Table.Head>
          <Table.Body>
            {mapCellContents(data, headerCells).map(row => <Table.Row key={row.toString()} tabIndex={0} onClick={() => {
            console.log('click');
          }}>
                {row.map(cellContent => <Table.Cell key={\`body-\${cellContent}\`}>
                    {cellContent}
                  </Table.Cell>)}
              </Table.Row>)}
          </Table.Body>
        </Table>
      </Table.Wrapper>
    </StoryTemplate>;
}`,...(z=(G=y.parameters)==null?void 0:G.docs)==null?void 0:z.source}}};var q,J,K;w.parameters={...w.parameters,docs:{...(q=w.parameters)==null?void 0:q.docs,source:{originalSource:`(args: TableProps) => {
  return <StoryTemplate title="Table - compact">
      <Table.Wrapper>
        <Table {...args} density="compact">
          <Table.Head>
            <Table.Row type="head">{mappedHeaderCells}</Table.Row>
          </Table.Head>
          <Table.Body>
            {mapCellContents(data, headerCells).map(row => <Table.Row key={row.toString()}>
                {row.map(cellContent => <Table.Cell key={\`body-\${cellContent}\`}>
                    {cellContent}
                  </Table.Cell>)}
              </Table.Row>)}
          </Table.Body>
        </Table>
      </Table.Wrapper>
    </StoryTemplate>;
}`,...(K=(J=w.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`(args: TableProps) => {
  return <StoryTemplate title="Table - extraCompact">
      <Table.Wrapper>
        <Table {...args} density="extraCompact">
          <Table.Head>
            <Table.Row type="head">{mappedHeaderCells}</Table.Row>
          </Table.Head>
          <Table.Body>
            {mapCellContents(data, headerCells).map(row => <Table.Row key={row.toString()}>
                {row.map(cellContent => <Table.Cell key={\`body-\${cellContent}\`}>
                    {cellContent}
                  </Table.Cell>)}
              </Table.Row>)}
          </Table.Body>
        </Table>
      </Table.Wrapper>
    </StoryTemplate>;
}`,...(X=(U=g.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,ee;S.parameters={...S.parameters,docs:{...(Y=S.parameters)==null?void 0:Y.docs,source:{originalSource:`(args: TableProps) => {
  return <StoryTemplate title="Table - sticky header">
      <Table.Wrapper>
        <Table {...args} stickyHeader>
          <Table.Head>
            <Table.Row type="head">{mappedHeaderCells}</Table.Row>
          </Table.Head>
          <Table.Body>
            {mapCellContents(data, headerCells).map(row => <Table.Row key={row.toString()}>
                {row.map(cellContent => <Table.Cell key={\`body-\${cellContent}\`}>
                    {cellContent}
                  </Table.Cell>)}
              </Table.Row>)}
            {mapCellContents(data, headerCells).map(row => <Table.Row key={row.toString()}>
                {row.map(cellContent => <Table.Cell key={\`body-\${cellContent}\`}>
                    {cellContent}
                  </Table.Cell>)}
              </Table.Row>)}
          </Table.Body>
        </Table>
      </Table.Wrapper>
    </StoryTemplate>;
}`,...(ee=(Z=S.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var le,ae,ne;R.parameters={...R.parameters,docs:{...(le=R.parameters)==null?void 0:le.docs,source:{originalSource:`(args: TableProps) => {
  return <StoryTemplate title="Table - hoverable">
      <Table.Wrapper>
        <Table {...args}>
          <Table.Head>
            <Table.Row type="head">{mappedHeaderCells}</Table.Row>
          </Table.Head>
          <Table.Body>
            {mapCellContents(data, headerCells).map(row => <Table.Row key={row.toString()} hoverable>
                {row.map(cellContent => <Table.Cell key={\`body-\${cellContent}\`}>
                    {cellContent}
                  </Table.Cell>)}
              </Table.Row>)}
          </Table.Body>
        </Table>
      </Table.Wrapper>
    </StoryTemplate>;
}`,...(ne=(ae=R.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var re,te,oe;k.parameters={...k.parameters,docs:{...(re=k.parameters)==null?void 0:re.docs,source:{originalSource:`(args: TableProps) => {
  const adminIcon = <Icon icon={PersonIcon} />;
  const deleteButton = <Button label="Fjern tilgang" appearance="borderless" icon={TrashIcon} iconPosition="left" />;
  return <StoryTemplate title="Table - with buttons and icons">
      <Table.Wrapper>
        <Table {...args}>
          <Table.Head>
            <Table.Row type="head">
              <Table.Cell type="head">Navn</Table.Cell>
              <Table.Cell type="head">Navn</Table.Cell>
              <Table.Cell type="head">Rolle</Table.Cell>
              <Table.Cell type="head"></Table.Cell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {data.map(item => <Table.Row key={item.name}>
                <Table.Cell layout="text and icon">
                  {adminIcon} {item.name}
                </Table.Cell>
                <Table.Cell layout="text and icon">
                  {item.name} {adminIcon}
                </Table.Cell>
                <Table.Cell>Admin</Table.Cell>
                <Table.Cell layout="center">{deleteButton}</Table.Cell>
              </Table.Row>)}
          </Table.Body>
        </Table>
      </Table.Wrapper>
    </StoryTemplate>;
}`,...(oe=(te=k.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var de,ce,se;f.parameters={...f.parameters,docs:{...(de=f.parameters)==null?void 0:de.docs,source:{originalSource:`(args: TableProps) => {
  const sumData = [{
    id: '20-1234531TVI',
    amount: 472
  }, {
    id: '21-4317383TVI',
    amount: 4
  }, {
    id: '89-9204832TVI',
    amount: 56
  }, {
    id: '30-9204712TVI',
    amount: 23
  }];
  return <StoryTemplate title="Table - sum">
      <Table.Wrapper>
        <Table {...args}>
          <Table.Head>
            <Table.Row type="head">
              <Table.Cell type="head">Saksnummer</Table.Cell>
              <Table.Cell type="head" layout="right">
                Antall dokumenter
              </Table.Cell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {sumData.map(item => <Table.Row key={item.id}>
                <Table.Cell>{item.id}</Table.Cell>
                <Table.Cell layout="right">{item.amount}</Table.Cell>
              </Table.Row>)}
          </Table.Body>
          <Table.Foot>
            <Table.Row mode="sum">
              <Table.Cell>Totalt</Table.Cell>
              <Table.Cell layout="right">
                {sumData.reduce((a, b) => a + (b.amount || 0), 0)}
              </Table.Cell>
            </Table.Row>
          </Table.Foot>
        </Table>
      </Table.Wrapper>
    </StoryTemplate>;
}`,...(se=(ce=f.parameters)==null?void 0:ce.docs)==null?void 0:se.source}}};var ie,pe,be;H.parameters={...H.parameters,docs:{...(ie=H.parameters)==null?void 0:ie.docs,source:{originalSource:`(args: TableProps) => {
  type chechboxRow = {
    id: string;
  } & CellDataToSort;
  const rows: chechboxRow[] = [{
    id: 'ch-1',
    ...data[0]
  }, {
    id: 'ch-2',
    ...data[1]
  }, {
    id: 'ch-3',
    ...data[2]
  }, {
    id: 'ch-4',
    ...data[3]
  }];
  const [selectedRows, setselectedRows] = useState<chechboxRow[]>([]);
  function handleChange(e: ChangeEvent<HTMLInputElement>, row: chechboxRow) {
    const currentRows = [...selectedRows];
    if (e.target.checked) {
      currentRows.push(row);
    } else {
      const index = currentRows.findIndex(selectedRow => selectedRow.id === row.id);
      currentRows.splice(index, 1);
    }
    setselectedRows(currentRows);
  }

  // function handleClick(row: chechboxRow) {
  //   const currentRows = [...selectedRows];
  //   const index = currentRows.findIndex(
  //     selectedRow => selectedRow.id === row.id
  //   );
  //   if (index >= 0) {
  //     currentRows.splice(index, 1);
  //   } else {
  //     currentRows.push(row);
  //   }
  //   setselectedRows(currentRows);
  // }

  // function handleCheckboxClick(e: React.MouseEvent<HTMLInputElement>) {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   e.nativeEvent.stopImmediatePropagation();
  // }

  function changeAll(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      setselectedRows([...rows]);
    } else {
      setselectedRows([]);
    }
  }
  return <StoryTemplate title="Table - with checkboxes">
      <Table.Wrapper>
        <Table {...args}>
          <Table.Head>
            <Table.Row type="head">
              <Table.Cell type="head">
                <Checkbox indeterminate={selectedRows?.length > 0 && selectedRows?.length !== rows.length ? true : false} checked={selectedRows?.length === rows.length ? true : false} onChange={e => changeAll(e)}
              // onClick={(e) => handleCheckboxClick(e)}
              />
              </Table.Cell>
              {mappedHeaderCells}
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {rows.map(row => {
            const isSelected = selectedRows.find(selectedRow => row.id === selectedRow.id) ? true : false;
            return <Table.Row key={\`row-\${row.id}\`} hoverable selected={isSelected}
            // onClick={() => handleClick(row)}
            >
                  <Table.Cell>
                    <Checkbox id={row.id} name={row.name} checked={isSelected} onChange={e => handleChange(e, row)}
                // onClick={(e) => handleCheckboxClick(e)}
                />
                  </Table.Cell>
                  <Table.Cell>{row.name}</Table.Cell>
                  <Table.Cell>{row.fnumber}</Table.Cell>
                  <Table.Cell>{row.employer}</Table.Cell>
                  <Table.Cell>{row.orgnumber}</Table.Cell>
                  <Table.Cell>{row.percentage}</Table.Cell>
                </Table.Row>;
          })}
          </Table.Body>
        </Table>
      </Table.Wrapper>
    </StoryTemplate>;
}`,...(be=(pe=H.parameters)==null?void 0:pe.docs)==null?void 0:be.source}}};var Te,he,Ce;B.parameters={...B.parameters,docs:{...(Te=B.parameters)==null?void 0:Te.docs,source:{originalSource:`(args: TableProps) => {
  return <StoryTemplate title="Table - complex">
      <Table.Wrapper>
        <Table {...args} stickyHeader>
          <colgroup>
            <col />
          </colgroup>
          <colgroup span={2}></colgroup>
          <colgroup span={2}></colgroup>
          <Table.Body>
            <Table.Row type="head">
              <Table.Cell rowSpan={2}></Table.Cell>
              <Table.Cell type="head" colSpan={2} scope="colgroup">
                Mars
              </Table.Cell>
              <Table.Cell type="head" colSpan={2} scope="colgroup">
                Venus
              </Table.Cell>
            </Table.Row>
            <Table.Row type="head">
              <Table.Cell type="head" scope="col">
                Produced
              </Table.Cell>
              <Table.Cell type="head" scope="col">
                Sold
              </Table.Cell>
              <Table.Cell type="head" scope="col">
                Produced
              </Table.Cell>
              <Table.Cell type="head" scope="col">
                Sold
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell type="head" scope="row">
                Teddy Bears
              </Table.Cell>
              <Table.Cell>50,000</Table.Cell>
              <Table.Cell>30,000</Table.Cell>
              <Table.Cell>100,000</Table.Cell>
              <Table.Cell>80,000</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell type="head" scope="row">
                Board Games
              </Table.Cell>
              <Table.Cell>10,000</Table.Cell>
              <Table.Cell>5,000</Table.Cell>
              <Table.Cell>12,000</Table.Cell>
              <Table.Cell>9,000</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell type="head" scope="row">
                Dolls
              </Table.Cell>
              <Table.Cell>50,000</Table.Cell>
              <Table.Cell>30,000</Table.Cell>
              <Table.Cell>100,000</Table.Cell>
              <Table.Cell>80,000</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell type="head" scope="row">
                Action Figures
              </Table.Cell>
              <Table.Cell>10,000</Table.Cell>
              <Table.Cell>5,000</Table.Cell>
              <Table.Cell>12,000</Table.Cell>
              <Table.Cell>9,000</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Table.Wrapper>
    </StoryTemplate>;
}`,...(Ce=(he=B.parameters)==null?void 0:he.docs)==null?void 0:Ce.source}}};var me,ue,ye;W.parameters={...W.parameters,docs:{...(me=W.parameters)==null?void 0:me.docs,source:{originalSource:`(args: TableProps) => {
  const [headerSortCells, setHeaderSortCells] = useState<HeaderCellToSort[]>(headerCells);
  const [dataCellContents, setDataCellContents] = useState<string[][]>();
  useEffect(() => {
    if (headerSortCells) {
      const sortedData = handleSort(data);
      const mappedCellContents = mapCellContents(sortedData, headerSortCells);
      setDataCellContents(mappedCellContents);
    }
  }, [headerSortCells]);
  const onClickSort = (sortHeaderCell: HeaderCellToSort) => {
    const updateSortInfo = headerSortCells.map((headerCell): HeaderCellToSort => {
      if (sortHeaderCell.dataName === headerCell.dataName) {
        return {
          ...sortHeaderCell,
          isSorted: true,
          sortOrder: sortHeaderCell.sortOrder === 'ascending' ? 'descending' : 'ascending'
        };
      }
      return {
        ...headerCell,
        isSorted: false,
        sortOrder: headerCell.sortOrder ? ('none' as SortOrder) : undefined
      };
    });
    setHeaderSortCells(updateSortInfo);
  };
  const handleSort = (data: CellDataToSort[]) => data.sort((a, b) => {
    const sorted = headerSortCells.find(headerCell => headerCell.isSorted);
    if (!sorted) return 1;
    const {
      sortOrder,
      dataName
    } = sorted;
    const name = (dataName as keyof CellDataToSort);
    if (sortOrder === 'ascending') return a[name] > b[name] ? 1 : -1;
    if (sortOrder === 'descending') return a[name] < b[name] ? 1 : -1;
    return 0;
  });
  return <StoryTemplate title="Table - sortable">
      <Table.Wrapper>
        <Table {...args}>
          <Table.Head>
            <Table.Row type="head">
              {headerSortCells.map(headerCell => {
              if (!headerCell.sortOrder) {
                return <Table.Cell type="head" key={\`head-\${headerCell.dataName}\`}>
                      {headerCell.name}
                    </Table.Cell>;
              }
              return <Table.SortCell key={\`head-\${headerCell.dataName}\`} onClick={() => onClickSort(headerCell)} isSorted={headerCell.isSorted} sortOrder={headerCell.sortOrder === 'none' ? undefined : headerCell.sortOrder}>
                    {headerCell.name}
                  </Table.SortCell>;
            })}
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {dataCellContents?.map(row => <Table.Row key={row.toString()}>
                {row.map(cellContent => <Table.Cell key={\`body-\${cellContent}\`}>
                    {cellContent}
                  </Table.Cell>)}
              </Table.Row>)}
          </Table.Body>
        </Table>
      </Table.Wrapper>
    </StoryTemplate>;
}`,...(ye=(ue=W.parameters)==null?void 0:ue.docs)==null?void 0:ye.source}}};var we,ge,Se;x.parameters={...x.parameters,docs:{...(we=x.parameters)==null?void 0:we.docs,source:{originalSource:`(args: TableProps) => {
  return <StoryTemplate title="Table - column and row headers">
      <Table.Wrapper>
        <Table {...args}>
          <Table.Body>
            <Table.Row>
              <Table.Cell></Table.Cell>
              {headerCells.map(headerCell => <Table.Cell key={\`head-\${headerCell.dataName}\`} type="head" scope="col">
                  {headerCell.name}
                </Table.Cell>)}
            </Table.Row>
            {data.map(item => <Table.Row key={item.name}>
                <Table.Cell type="head" scope="row">
                  Header
                </Table.Cell>
                <Table.Cell> {item.name} </Table.Cell>
                <Table.Cell> {item.fnumber} </Table.Cell>
                <Table.Cell> {item.employer} </Table.Cell>
                <Table.Cell> {item.orgnumber} </Table.Cell>
                <Table.Cell> {item.percentage} </Table.Cell>
              </Table.Row>)}
          </Table.Body>
        </Table>
      </Table.Wrapper>
    </StoryTemplate>;
}`,...(Se=(ge=x.parameters)==null?void 0:ge.docs)==null?void 0:Se.source}}};var Re,ke,fe;v.parameters={...v.parameters,docs:{...(Re=v.parameters)==null?void 0:Re.docs,source:{originalSource:`(args: TableProps) => {
  return <StoryTemplate title="Table - with scroll">
      <Paragraph>
        Her brukes komponenten ScrollableContainer for å gjøre det mulig å
        scrolle i tabellen når den blir bredere enn vinduets bredde. Du kan
        teste ut dette ved å gjøre nettleservinduet ditt mindre.
      </Paragraph>
      <ScrollableContainer>
        <Table.Wrapper>
          <Table {...args}>
            <Table.Body>
              <Table.Row>
                <Table.Cell></Table.Cell>
                {headerCells.map(headerCell => <Table.Cell key={\`head-\${headerCell.dataName}\`} type="head" scope="col">
                    {headerCell.name}
                  </Table.Cell>)}
              </Table.Row>
              {data.map(item => <Table.Row key={item.name}>
                  <Table.Cell type="head" scope="row">
                    Header
                  </Table.Cell>
                  <Table.Cell> {item.name} </Table.Cell>
                  <Table.Cell> {item.fnumber} </Table.Cell>
                  <Table.Cell> {item.employer} </Table.Cell>
                  <Table.Cell> {item.orgnumber} </Table.Cell>
                  <Table.Cell> {item.percentage} </Table.Cell>
                </Table.Row>)}
            </Table.Body>
          </Table>
        </Table.Wrapper>
      </ScrollableContainer>
    </StoryTemplate>;
}`,...(fe=(ke=v.parameters)==null?void 0:ke.docs)==null?void 0:fe.source}}};const Oe=["Default","WithDividers","Focusable","Compact","ExtraCompact","StickyHeader","Hoverable","WithButtonAndIcons","WithSum","WithCheckbox","Complex","Sortable","ColumnAndRowHeaders","WithScroll"],Ze=Object.freeze(Object.defineProperty({__proto__:null,ColumnAndRowHeaders:x,Compact:w,Complex:B,Default:m,ExtraCompact:g,Focusable:y,Hoverable:R,Sortable:W,StickyHeader:S,WithButtonAndIcons:k,WithCheckbox:H,WithDividers:u,WithScroll:v,WithSum:f,__namedExportsOrder:Oe,default:De},Symbol.toStringTag,{value:"Module"}));export{Ze as T};
//# sourceMappingURL=Table.stories-3bb36fae.js.map
