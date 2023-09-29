import{j as a,a as e}from"./ddsReferenceTokens-647ce456.js";import{S as i}from"./StoryTemplate-1d63849e.js";import"./Caption-0ff47cfa.js";import"./Heading-ded557b4.js";import"./Label-b7852367.js";import"./Legend-d58c0461.js";import"./Link-037ca604.js";import"./Paragraph-a74f99d8.js";import"./TextOverflowEllipsis-e3546c5b.js";import{T as o}from"./Typography-d54ea9fd.js";import{T as l}from"./index-9f954475.js";import{V as s}from"./VisuallyHidden-d3f4e065.js";import{B as d}from"./Button-f2a6066f.js";const C={title:"dds-components/VisuallyHidden",component:s,argTypes:{as:{control:{type:"text"}}}},r=f=>a(i,{title:"VisuallyHidden - default",children:[e(o,{children:"Teksten under er usynlig."}),e(s,{...f,children:"Denne teksten er usynlig."})]}),n=()=>e(i,{title:"VisuallyHidden - link example",children:a(o,{children:["I foreldretvister kan du søke fri rettshjelp hvis du har lav inntekt og formue. På sivilrett.no finner du"," ",a(o,{typographyType:"a",children:["mer informasjon og søknadsskjema"," ",e(s,{as:"span",children:"i forbindelse med fri rettshjelp"})]}),"."]})}),t=()=>e(i,{title:"VisuallyHidden - table example",children:e(l.Wrapper,{children:a(l,{density:"compact",children:[e(l.Head,{children:a(l.Row,{type:"head",children:[e(l.Cell,{type:"head",children:"Navn"}),e(l.Cell,{type:"head",children:"Rolle"}),e(l.Cell,{type:"head",children:e(s,{as:"span",children:"Aksjoner"})})]})}),a(l.Body,{children:[a(l.Row,{type:"body",children:[e(l.Cell,{children:"Ane Bjerke"}),e(l.Cell,{children:"Administrator"}),e(l.Cell,{children:e(d,{label:"Slett",size:"small",purpose:"danger"})})]}),a(l.Row,{type:"body",children:[e(l.Cell,{children:"Sandra Lovsetter"}),e(l.Cell,{children:"Bruker"}),e(l.Cell,{children:e(d,{label:"Slett",size:"small",purpose:"danger"})})]})]})]})})});var p,y,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`(args: VisuallyHiddenProps) => <StoryTemplate title="VisuallyHidden - default">
    <Typography>Teksten under er usynlig.</Typography>
    <VisuallyHidden {...args}>Denne teksten er usynlig.</VisuallyHidden>
  </StoryTemplate>`,...(m=(y=r.parameters)==null?void 0:y.docs)==null?void 0:m.source}}};var u,c,T;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`() => <StoryTemplate title="VisuallyHidden - link example">
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
  </StoryTemplate>`,...(T=(c=n.parameters)==null?void 0:c.docs)==null?void 0:T.source}}};var b,h,g;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`() => <StoryTemplate title="VisuallyHidden - table example">
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
  </StoryTemplate>`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const k=["Default","Link","TableButtons"],L=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Link:n,TableButtons:t,__namedExportsOrder:k,default:C},Symbol.toStringTag,{value:"Module"}));export{r as D,L as V};
//# sourceMappingURL=VisuallyHidden.stories-4995fc19.js.map
