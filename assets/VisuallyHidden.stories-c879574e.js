import{j as r,a as e}from"./jsx-runtime-e43ccb36.js";import{S as i}from"./StoryTemplate-73234f44.js";import"./Caption-d810b87c.js";import"./Heading-0c5437bc.js";import"./Label-05114518.js";import"./Legend-9969638c.js";import"./Link-c264ab95.js";import"./Paragraph-88055bd8.js";import"./TextOverflowEllipsis-6cc9a60a.js";import{T as o}from"./Typography-d13ef156.js";import{T as l}from"./index-ce6bd898.js";import{V as s}from"./VisuallyHidden-e3800c53.js";import{B as d}from"./Button-ba8adec5.js";const C={title:"dds-components/VisuallyHidden",component:s,argTypes:{as:{control:{type:"text"}}}},a=f=>r(i,{title:"VisuallyHidden - default",children:[e(o,{children:"Teksten under er usynlig."}),e(s,{...f,children:"Denne teksten er usynlig."})]}),n=()=>e(i,{title:"VisuallyHidden - link example",children:r(o,{children:["I foreldretvister kan du søke fri rettshjelp hvis du har lav inntekt og formue. På sivilrett.no finner du"," ",r(o,{typographyType:"a",children:["mer informasjon og søknadsskjema"," ",e(s,{as:"span",children:"i forbindelse med fri rettshjelp"})]}),"."]})}),t=()=>e(i,{title:"VisuallyHidden - table example",children:e(l.Wrapper,{children:r(l,{density:"compact",children:[e(l.Head,{children:r(l.Row,{type:"head",children:[e(l.Cell,{type:"head",children:"Navn"}),e(l.Cell,{type:"head",children:"Rolle"}),e(l.Cell,{type:"head",children:e(s,{as:"span",children:"Aksjoner"})})]})}),r(l.Body,{children:[r(l.Row,{type:"body",children:[e(l.Cell,{children:"Ane Bjerke"}),e(l.Cell,{children:"Administrator"}),e(l.Cell,{children:e(d,{size:"small",purpose:"danger",children:"Slett"})})]}),r(l.Row,{type:"body",children:[e(l.Cell,{children:"Sandra Lovsetter"}),e(l.Cell,{children:"Bruker"}),e(l.Cell,{children:e(d,{size:"small",purpose:"danger",children:"Slett"})})]})]})]})})});var p,y,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`(args: VisuallyHiddenProps) => <StoryTemplate title="VisuallyHidden - default">
    <Typography>Teksten under er usynlig.</Typography>
    <VisuallyHidden {...args}>Denne teksten er usynlig.</VisuallyHidden>
  </StoryTemplate>`,...(m=(y=a.parameters)==null?void 0:y.docs)==null?void 0:m.source}}};var u,c,T;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`() => <StoryTemplate title="VisuallyHidden - link example">
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
  </StoryTemplate>`,...(T=(c=n.parameters)==null?void 0:c.docs)==null?void 0:T.source}}};var h,b,g;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`() => <StoryTemplate title="VisuallyHidden - table example">
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
              <Button size="small" purpose="danger">
                Slett
              </Button>
            </Table.Cell>
          </Table.Row>
          <Table.Row type="body">
            <Table.Cell>Sandra Lovsetter</Table.Cell>
            <Table.Cell>Bruker</Table.Cell>
            <Table.Cell>
              <Button size="small" purpose="danger">
                Slett
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Table.Wrapper>
  </StoryTemplate>`,...(g=(b=t.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const k=["Default","Link","TableButtons"],L=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Link:n,TableButtons:t,__namedExportsOrder:k,default:C},Symbol.toStringTag,{value:"Module"}));export{a as D,L as V};
//# sourceMappingURL=VisuallyHidden.stories-c879574e.js.map
