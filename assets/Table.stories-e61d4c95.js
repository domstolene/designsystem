import{j as l,b as r}from"./focus-visible-17f12d09.js";import{r as $}from"./index-c6dae603.js";import{T as e}from"./index-43c465b1.js";import{h as b,m as T,d as s}from"./tableData-67b3b250.js";import{R as p}from"./storybook-components-b7b7a39c.js";import{C as N}from"./Checkbox-b52e1b33.js";import{I as fe}from"./Icon-a968456f.js";import{P as ke}from"./person-f585b587.js";import{B as He}from"./Button-4fdfc19e.js";import{T as Be}from"./trash-fea1209a.js";const We={title:"dds-components/Table/Table",component:e,argTypes:{stickyHeader:{control:{type:"boolean"}},withDividers:{control:{type:"boolean"}}}},C=b.map(o=>l(e.Cell,{type:"head",children:o.name},`head-${o.dataName}`)),m=o=>l(p,{title:"Table - default",children:l(e.Wrapper,{children:r(e,{...o,children:[l(e.Head,{children:l(e.Row,{type:"head",children:C})}),l(e.Body,{children:T(s,b).map(a=>l(e.Row,{children:a.map(n=>l(e.Cell,{children:n},`body-${n}`))},a.toString()))})]})})}),u=o=>l(p,{title:"Table - with dividers",children:l(e.Wrapper,{children:r(e,{...o,withDividers:!0,children:[l(e.Head,{children:l(e.Row,{type:"head",children:C})}),l(e.Body,{children:T(s,b).map(a=>l(e.Row,{children:a.map(n=>l(e.Cell,{children:n},`body-${n}`))},a.toString()))})]})})}),y=o=>l(p,{title:"Table - focusable",children:l(e.Wrapper,{children:r(e,{...o,children:[l(e.Head,{children:l(e.Row,{type:"head",children:C})}),l(e.Body,{children:T(s,b).map(a=>l(e.Row,{tabIndex:0,onClick:()=>{console.log("click")},children:a.map(n=>l(e.Cell,{children:n},`body-${n}`))},a.toString()))})]})})}),w=o=>l(p,{title:"Table - compact",children:l(e.Wrapper,{children:r(e,{...o,density:"compact",children:[l(e.Head,{children:l(e.Row,{type:"head",children:C})}),l(e.Body,{children:T(s,b).map(a=>l(e.Row,{children:a.map(n=>l(e.Cell,{children:n},`body-${n}`))},a.toString()))})]})})}),g=o=>l(p,{title:"Table - extraCompact",children:l(e.Wrapper,{children:r(e,{...o,density:"extraCompact",children:[l(e.Head,{children:l(e.Row,{type:"head",children:C})}),l(e.Body,{children:T(s,b).map(a=>l(e.Row,{children:a.map(n=>l(e.Cell,{children:n},`body-${n}`))},a.toString()))})]})})}),R=o=>l(p,{title:"Table - sticky header",children:l(e.Wrapper,{children:r(e,{...o,stickyHeader:!0,children:[l(e.Head,{children:l(e.Row,{type:"head",children:C})}),r(e.Body,{children:[T(s,b).map(a=>l(e.Row,{children:a.map(n=>l(e.Cell,{children:n},`body-${n}`))},a.toString())),T(s,b).map(a=>l(e.Row,{children:a.map(n=>l(e.Cell,{children:n},`body-${n}`))},a.toString()))]})]})})}),S=o=>l(p,{title:"Table - hoverable",children:l(e.Wrapper,{children:r(e,{...o,children:[l(e.Head,{children:l(e.Row,{type:"head",children:C})}),l(e.Body,{children:T(s,b).map(a=>l(e.Row,{hoverable:!0,children:a.map(n=>l(e.Cell,{children:n},`body-${n}`))},a.toString()))})]})})}),f=o=>{const a=l(fe,{icon:ke}),n=l(He,{label:"Fjern tilgang",appearance:"borderless",icon:Be,iconPosition:"left"});return l(p,{title:"Table - with buttons and icons",children:l(e.Wrapper,{children:r(e,{...o,children:[l(e.Head,{children:r(e.Row,{type:"head",children:[l(e.Cell,{type:"head",children:"Navn"}),l(e.Cell,{type:"head",children:"Navn"}),l(e.Cell,{type:"head",children:"Rolle"}),l(e.Cell,{type:"head"})]})}),l(e.Body,{children:s.map(i=>r(e.Row,{children:[r(e.Cell,{layout:"text and icon",children:[a," ",i.name]}),r(e.Cell,{layout:"text and icon",children:[i.name," ",a]}),l(e.Cell,{children:"Admin"}),l(e.Cell,{layout:"center",children:n})]},i.name))})]})})})},k=o=>{const a=[{id:"20-1234531TVI",amount:472},{id:"21-4317383TVI",amount:4},{id:"89-9204832TVI",amount:56},{id:"30-9204712TVI",amount:23}];return l(p,{title:"Table - sum",children:l(e.Wrapper,{children:r(e,{...o,children:[l(e.Head,{children:r(e.Row,{type:"head",children:[l(e.Cell,{type:"head",children:"Saksnummer"}),l(e.Cell,{type:"head",layout:"right",children:"Antall dokumenter"})]})}),l(e.Body,{children:a.map(n=>r(e.Row,{children:[l(e.Cell,{children:n.id}),l(e.Cell,{layout:"right",children:n.amount})]},n.id))}),l(e.Foot,{children:r(e.Row,{mode:"sum",children:[l(e.Cell,{children:"Totalt"}),l(e.Cell,{layout:"right",children:a.reduce((n,i)=>n+(i.amount||0),0)})]})})]})})})},H=o=>{const a=[{id:"ch-1",...s[0]},{id:"ch-2",...s[1]},{id:"ch-3",...s[2]},{id:"ch-4",...s[3]}],[n,i]=$.useState([]);function P(d,t){const c=[...n];if(d.target.checked)c.push(t);else{const h=c.findIndex(I=>I.id===t.id);c.splice(h,1)}i(c)}function O(d){d.target.checked?i([...a]):i([])}return l(p,{title:"Table - with checkboxes",children:l(e.Wrapper,{children:r(e,{...o,children:[l(e.Head,{children:r(e.Row,{type:"head",children:[l(e.Cell,{type:"head",children:l(N,{indeterminate:(n==null?void 0:n.length)>0&&(n==null?void 0:n.length)!==a.length,checked:(n==null?void 0:n.length)===a.length,onChange:d=>O(d)})}),C]})}),l(e.Body,{children:a.map(d=>{const t=!!n.find(c=>d.id===c.id);return r(e.Row,{hoverable:!0,selected:t,children:[l(e.Cell,{children:l(N,{id:d.id,name:d.name,checked:t,onChange:c=>P(c,d)})}),l(e.Cell,{children:d.name}),l(e.Cell,{children:d.fnumber}),l(e.Cell,{children:d.employer}),l(e.Cell,{children:d.orgnumber}),l(e.Cell,{children:d.percentage})]},`row-${d.id}`)})})]})})})},B=o=>l(p,{title:"Table - complex",children:l(e.Wrapper,{children:r(e,{...o,stickyHeader:!0,children:[l("colgroup",{children:l("col",{})}),l("colgroup",{span:2}),l("colgroup",{span:2}),r(e.Body,{children:[r(e.Row,{type:"head",children:[l(e.Cell,{rowSpan:2}),l(e.Cell,{type:"head",colSpan:2,scope:"colgroup",children:"Mars"}),l(e.Cell,{type:"head",colSpan:2,scope:"colgroup",children:"Venus"})]}),r(e.Row,{type:"head",children:[l(e.Cell,{type:"head",scope:"col",children:"Produced"}),l(e.Cell,{type:"head",scope:"col",children:"Sold"}),l(e.Cell,{type:"head",scope:"col",children:"Produced"}),l(e.Cell,{type:"head",scope:"col",children:"Sold"})]}),r(e.Row,{children:[l(e.Cell,{type:"head",scope:"row",children:"Teddy Bears"}),l(e.Cell,{children:"50,000"}),l(e.Cell,{children:"30,000"}),l(e.Cell,{children:"100,000"}),l(e.Cell,{children:"80,000"})]}),r(e.Row,{children:[l(e.Cell,{type:"head",scope:"row",children:"Board Games"}),l(e.Cell,{children:"10,000"}),l(e.Cell,{children:"5,000"}),l(e.Cell,{children:"12,000"}),l(e.Cell,{children:"9,000"})]}),r(e.Row,{children:[l(e.Cell,{type:"head",scope:"row",children:"Dolls"}),l(e.Cell,{children:"50,000"}),l(e.Cell,{children:"30,000"}),l(e.Cell,{children:"100,000"}),l(e.Cell,{children:"80,000"})]}),r(e.Row,{children:[l(e.Cell,{type:"head",scope:"row",children:"Action Figures"}),l(e.Cell,{children:"10,000"}),l(e.Cell,{children:"5,000"}),l(e.Cell,{children:"12,000"}),l(e.Cell,{children:"9,000"})]})]})]})})}),W=o=>{const[a,n]=$.useState(b),[i,P]=$.useState();$.useEffect(()=>{if(a){const t=d(s),c=T(t,a);P(c)}},[a]);const O=t=>{const c=a.map(h=>t.dataName===h.dataName?{...t,isSorted:!0,sortOrder:t.sortOrder==="ascending"?"descending":"ascending"}:{...h,isSorted:!1,sortOrder:h.sortOrder?"none":void 0});n(c)},d=t=>t.sort((c,h)=>{const I=a.find(Se=>Se.isSorted);if(!I)return 1;const{sortOrder:D,dataName:Re}=I,v=Re;return D==="ascending"?c[v]>h[v]?1:-1:D==="descending"?c[v]<h[v]?1:-1:0});return l(p,{title:"Table - sortable",children:l(e.Wrapper,{children:r(e,{...o,children:[l(e.Head,{children:l(e.Row,{type:"head",children:a.map(t=>t.sortOrder?l(e.SortCell,{onClick:()=>O(t),isSorted:t.isSorted,sortOrder:t.sortOrder==="none"?void 0:t.sortOrder,children:t.name},`head-${t.dataName}`):l(e.Cell,{type:"head",children:t.name},`head-${t.dataName}`))})}),l(e.Body,{children:i==null?void 0:i.map(t=>l(e.Row,{children:t.map(c=>l(e.Cell,{children:c},`body-${c}`))},t.toString()))})]})})})},x=o=>l(p,{title:"Table - column and row headers",children:l(e.Wrapper,{children:l(e,{...o,children:r(e.Body,{children:[r(e.Row,{children:[l(e.Cell,{}),b.map(a=>l(e.Cell,{type:"head",scope:"col",children:a.name},`head-${a.dataName}`))]}),s.map(a=>r(e.Row,{children:[l(e.Cell,{type:"head",scope:"row",children:"Header"}),r(e.Cell,{children:[" ",a.name," "]}),r(e.Cell,{children:[" ",a.fnumber," "]}),r(e.Cell,{children:[" ",a.employer," "]}),r(e.Cell,{children:[" ",a.orgnumber," "]}),r(e.Cell,{children:[" ",a.percentage," "]})]},a.name))]})})})});var A,E,V;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`(args: TableProps) => {
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
}`,...(V=(E=m.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var F,j,M;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`(args: TableProps) => {
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
}`,...(M=(j=u.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};var _,L,G;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`(args: TableProps) => {
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
}`,...(G=(L=y.parameters)==null?void 0:L.docs)==null?void 0:G.source}}};var z,q,J;w.parameters={...w.parameters,docs:{...(z=w.parameters)==null?void 0:z.docs,source:{originalSource:`(args: TableProps) => {
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
}`,...(J=(q=w.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var K,Q,U;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`(args: TableProps) => {
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
}`,...(U=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;R.parameters={...R.parameters,docs:{...(X=R.parameters)==null?void 0:X.docs,source:{originalSource:`(args: TableProps) => {
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
}`,...(Z=(Y=R.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,le,ae;S.parameters={...S.parameters,docs:{...(ee=S.parameters)==null?void 0:ee.docs,source:{originalSource:`(args: TableProps) => {
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
}`,...(ae=(le=S.parameters)==null?void 0:le.docs)==null?void 0:ae.source}}};var ne,re,oe;f.parameters={...f.parameters,docs:{...(ne=f.parameters)==null?void 0:ne.docs,source:{originalSource:`(args: TableProps) => {
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
}`,...(oe=(re=f.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var te,de,ce;k.parameters={...k.parameters,docs:{...(te=k.parameters)==null?void 0:te.docs,source:{originalSource:`(args: TableProps) => {
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
}`,...(ce=(de=k.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var se,ie,pe;H.parameters={...H.parameters,docs:{...(se=H.parameters)==null?void 0:se.docs,source:{originalSource:`(args: TableProps) => {
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
}`,...(pe=(ie=H.parameters)==null?void 0:ie.docs)==null?void 0:pe.source}}};var be,Te,he;B.parameters={...B.parameters,docs:{...(be=B.parameters)==null?void 0:be.docs,source:{originalSource:`(args: TableProps) => {
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
}`,...(he=(Te=B.parameters)==null?void 0:Te.docs)==null?void 0:he.source}}};var Ce,me,ue;W.parameters={...W.parameters,docs:{...(Ce=W.parameters)==null?void 0:Ce.docs,source:{originalSource:`(args: TableProps) => {
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
}`,...(ue=(me=W.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var ye,we,ge;x.parameters={...x.parameters,docs:{...(ye=x.parameters)==null?void 0:ye.docs,source:{originalSource:`(args: TableProps) => {
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
}`,...(ge=(we=x.parameters)==null?void 0:we.docs)==null?void 0:ge.source}}};const xe=["Default","WithDividers","Focusable","Compact","ExtraCompact","StickyHeader","Hoverable","WithButtonAndIcons","WithSum","WithCheckbox","Complex","Sortable","ColumnAndRowHeaders"],Fe=Object.freeze(Object.defineProperty({__proto__:null,ColumnAndRowHeaders:x,Compact:w,Complex:B,Default:m,ExtraCompact:g,Focusable:y,Hoverable:S,Sortable:W,StickyHeader:R,WithButtonAndIcons:f,WithCheckbox:H,WithDividers:u,WithSum:k,__namedExportsOrder:xe,default:We},Symbol.toStringTag,{value:"Module"}));export{Fe as T};
//# sourceMappingURL=Table.stories-e61d4c95.js.map
