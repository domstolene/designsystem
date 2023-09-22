import{j as a,a as e}from"./ddsReferenceTokens-f1d35829.js";import{R as d}from"./storybook-components-97b79dd9.js";import{T as i}from"./dds-typography-cc6cb429.js";import{T as l}from"./index-9e7a0ef7.js";import{V as s}from"./VisuallyHidden-15b316c1.js";import{B as o}from"./Button-aa30c63f.js";const C={title:"dds-components/VisuallyHidden",component:s,argTypes:{as:{control:{type:"text"}}}},r=f=>a(d,{title:"VisuallyHidden - default",children:[e(i,{children:"Teksten under er usynlig."}),e(s,{...f,children:"Denne teksten er usynlig."})]}),n=()=>e(d,{title:"VisuallyHidden - link example",children:a(i,{children:["I foreldretvister kan du søke fri rettshjelp hvis du har lav inntekt og formue. På sivilrett.no finner du"," ",a(i,{typographyType:"a",children:["mer informasjon og søknadsskjema"," ",e(s,{as:"span",children:"i forbindelse med fri rettshjelp"})]}),"."]})}),t=()=>e(d,{title:"VisuallyHidden - table example",children:e(l.Wrapper,{children:a(l,{density:"compact",children:[e(l.Head,{children:a(l.Row,{type:"head",children:[e(l.Cell,{type:"head",children:"Navn"}),e(l.Cell,{type:"head",children:"Rolle"}),e(l.Cell,{type:"head",children:e(s,{as:"span",children:"Aksjoner"})})]})}),a(l.Body,{children:[a(l.Row,{type:"body",children:[e(l.Cell,{children:"Ane Bjerke"}),e(l.Cell,{children:"Administrator"}),e(l.Cell,{children:e(o,{label:"Slett",size:"small",purpose:"danger"})})]}),a(l.Row,{type:"body",children:[e(l.Cell,{children:"Sandra Lovsetter"}),e(l.Cell,{children:"Bruker"}),e(l.Cell,{children:e(o,{label:"Slett",size:"small",purpose:"danger"})})]})]})]})})});var p,y,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`(args: VisuallyHiddenProps) => <StoryTemplate title="VisuallyHidden - default">
    <Typography>Teksten under er usynlig.</Typography>
    <VisuallyHidden {...args}>Denne teksten er usynlig.</VisuallyHidden>
  </StoryTemplate>`,...(u=(y=r.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};var c,m,T;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`() => <StoryTemplate title="VisuallyHidden - link example">
    <Typography>
      I foreldretvister kan du søke fri rettshjelp hvis du har lav inntekt og
      formue. På sivilrett.no finner du{' '}
      <Typography typographyType="a">
        mer informasjon og søknadsskjema{' '}
        <VisuallyHidden as="span">
          i forbindelse med fri rettshjelp
        </VisuallyHidden>
      </Typography>
      .
    </Typography>
  </StoryTemplate>`,...(T=(m=n.parameters)==null?void 0:m.docs)==null?void 0:T.source}}};var b,h,g;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`() => <StoryTemplate title="VisuallyHidden - table example">
    <Table.Wrapper>
      <Table density="compact">
        <Table.Head>
          <Table.Row type="head">
            <Table.Cell type="head">Navn</Table.Cell>
            <Table.Cell type="head">Rolle</Table.Cell>
            <Table.Cell type="head">
              <VisuallyHidden as="span">Aksjoner</VisuallyHidden>
            </Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <Table.Row type="body">
            <Table.Cell>Ane Bjerke</Table.Cell>
            <Table.Cell>Administrator</Table.Cell>
            <Table.Cell>
              <Button label="Slett" size="small" purpose="danger" />
            </Table.Cell>
          </Table.Row>
          <Table.Row type="body">
            <Table.Cell>Sandra Lovsetter</Table.Cell>
            <Table.Cell>Bruker</Table.Cell>
            <Table.Cell>
              <Button label="Slett" size="small" purpose="danger" />
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Table.Wrapper>
  </StoryTemplate>`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const k=["Default","Link","TableButtons"],R=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Link:n,TableButtons:t,__namedExportsOrder:k,default:C},Symbol.toStringTag,{value:"Module"}));export{r as D,R as V};
//# sourceMappingURL=VisuallyHidden.stories-b169cf99.js.map
