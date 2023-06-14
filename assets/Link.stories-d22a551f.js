import{b as i,j as e}from"./focus-visible-17f12d09.js";import{R as d}from"./storybook-components-b7b7a39c.js";import{T as a}from"./index-43c465b1.js";import{L as s}from"./Link-a3416982.js";import{P as l}from"./Paragraph-0668154f.js";import{L as n}from"./LocalMessage-03c4d58c.js";const T={title:"dds-components/Typography/Link",component:s,argTypes:{typographyType:{control:{type:"select"}},withMargins:{control:{type:"boolean"}},text:{control:{type:"text"}},href:{control:{type:"text"}}}},k=t=>{const{text:r,href:p,...h}=t;return i(d,{title:"Link - default",children:[e(s,{...h,href:p||"https://www.domstol.no",children:r||"Link"}),e(s,{...h,external:!0,href:p||"https://www.domstol.no",children:r||"Link"})]})},o=t=>{const{text:r,href:p,...h}=t;return e(d,{title:"Link - default",children:e(s,{...h,href:p||"https://www.domstol.no",children:r||"Link"})})},x="tekst",P=e(s,{href:"http://localhost:6006/?path=/story/dds-components-typography-link--overview",external:!0,children:"sivile saker sivile sakersivile saker sivile saker sivile saker sivile saker sivile saker sivile saker sivile saker sivile saker sivile saker sivile saker sivile saker sivile saker sivile saker"});function R(){const t=[];for(let r=0;r<5;r++)t.push(e(a.Cell,{type:"head",style:{minWidth:"150px"},children:x}));return t}function M(){const t=[];for(let r=0;r<5;r++)t.push(i(a.Cell,{children:[" ",P]}));return t}const v=()=>i(d,{title:"Link - examples",display:"block",children:[i(l,{withMargins:!0,children:["Rettsmekling går ut på at partene selv finner en løsning på konflikten ved å bruke en mekler (vanligvis en dommer i domstolen som behandler saken). Avtalen man kommer fram til, blir rettskraftig på lik linje med en dom. Rettsmekling kan bare brukes i"," ",e(s,{href:"http://localhost:6006/?path=/story/dds-components-typography-link--overview",children:"sivile saker"}),", ikke i straffesaker. Hvis konflikten ikke løses ved mekling, avgjøres saken ved hovedforhandling (rettssak). Rettsmekling er regulert i"," ",e(s,{href:"https://lovdata.no/dokument/NL/lov/2005-06-17-90/KAPITTEL_2-4-2#%C2%A78-3",external:!0,children:"tvisteloven §§ 8-3"}),". Litt mer tekst."," ",e(s,{href:"http://localhost:6006/?path=/story/dds-components-typography-link--overview",external:!0,children:"sivile saker sivile sakersivile saker sivile saker sivile saker sivile saker sivile saker sivile saker sivile saker sivile saker sivile saker sivile saker sivile saker sivile saker sivile saker sivile saker sivile sakersivile saker sivile saker sivile saker sivile saker sivile sakersivile saker sivile saker sivile saker sivile saker sivile saker sivile saker sivile saker sivile saker sivile saker sivile saker sivile saker"}),"."]}),i(l,{typographyType:"bodySans04",withMargins:!0,children:["Rettsmekling går ut på at partene selv finner en løsning på konflikten ved å bruke en mekler (vanligvis en dommer i domstolen som behandler saken). Avtalen man kommer fram til, blir rettskraftig på lik linje med en dom. Rettsmekling kan bare brukes i"," ",e(s,{href:"http://localhost:6006/?path=/story/dds-components-typography-link--overview",children:"sivile saker"}),", ikke i straffesaker. Hvis konflikten ikke løses ved mekling, avgjøres saken ved hovedforhandling (rettssak). Rettsmekling er regulert i"," ",e(s,{href:"https://lovdata.no/dokument/NL/lov/2005-06-17-90/KAPITTEL_2-4-2#%C2%A78-3",external:!0,children:"tvisteloven §§ 8-3"}),". Litt mer tekst."," ",e(s,{href:"http://localhost:6006/?path=/story/dds-components-typography-link--overview",external:!0,children:"sivile saker sivile sakersivile saker sivile saker sivile saker sivile saker sivile saker sivile saker sivile saker sivile saker sivile saker sivile saker sivile saker sivile saker sivile saker sivile saker sivile sakersivile saker sivile saker sivile saker sivile saker sivile sakersivile saker sivile saker sivile saker sivile saker sivile saker sivile saker sivile saker sivile saker sivile saker sivile saker sivile saker"}),"."]}),e(n,{children:i(l,{children:["Dette er tekst med"," ",e(s,{href:"http://localhost:6006/?path=/story/dds-components-typography-link--overview",children:"lenke"}),"."]})}),e(n,{purpose:"danger",children:i(l,{children:["Dette er tekst med"," ",e(s,{href:"http://localhost:6006/?path=/story/dds-components-typography-link--overview",children:"lenke"}),"."]})}),e(n,{purpose:"success",children:i(l,{children:["Dette er tekst med"," ",e(s,{href:"http://localhost:6006/?path=/story/dds-components-typography-link--overview",children:"lenke"}),"."]})}),e(n,{purpose:"tips",children:i(l,{children:["Dette er tekst med"," ",e(s,{href:"http://localhost:6006/?path=/story/dds-components-typography-link--overview",children:"lenke"}),"."]})}),e(n,{purpose:"warning",children:i(l,{children:["Dette er tekst med"," ",e(s,{href:"http://localhost:6006/?path=/story/dds-components-typography-link--overview",children:"lenke"}),"."]})}),e(a.Wrapper,{children:i(a,{children:[e(a.Head,{children:e(a.Row,{type:"head",children:R()})}),e(a.Body,{children:i(a.Row,{children:[" ",M()," "]})})]})})]});var m,c,g;k.parameters={...k.parameters,docs:{...(m=k.parameters)==null?void 0:m.docs,source:{originalSource:`(args: StoryTProps) => {
  const {
    text,
    href,
    ...rest
  } = args;
  return <StoryTemplate title="Link - default">
      <Link {...rest} href={href || 'https://www.domstol.no'}>
        {text || 'Link'}
      </Link>
      <Link {...rest} external href={href || 'https://www.domstol.no'}>
        {text || 'Link'}
      </Link>
    </StoryTemplate>;
}`,...(g=(c=k.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var y,f,L;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`(args: StoryTProps) => {
  const {
    text,
    href,
    ...rest
  } = args;
  return <StoryTemplate title="Link - default">
      <Link {...rest} href={href || 'https://www.domstol.no'}>
        {text || 'Link'}
      </Link>
    </StoryTemplate>;
}`,...(L=(f=o.parameters)==null?void 0:f.docs)==null?void 0:L.source}}};var u,w,b;v.parameters={...v.parameters,docs:{...(u=v.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  return <StoryTemplate title="Link - examples" display="block">
      <Paragraph withMargins>
        Rettsmekling går ut på at partene selv finner en løsning på konflikten
        ved å bruke en mekler (vanligvis en dommer i domstolen som behandler
        saken). Avtalen man kommer fram til, blir rettskraftig på lik linje med
        en dom. Rettsmekling kan bare brukes i{' '}
        <Link href="http://localhost:6006/?path=/story/dds-components-typography-link--overview">
          sivile saker
        </Link>
        , ikke i straffesaker. Hvis konflikten ikke løses ved mekling, avgjøres
        saken ved hovedforhandling (rettssak). Rettsmekling er regulert i{' '}
        <Link href="https://lovdata.no/dokument/NL/lov/2005-06-17-90/KAPITTEL_2-4-2#%C2%A78-3" external>
          tvisteloven §§ 8-3
        </Link>
        . Litt mer tekst.{' '}
        <Link href="http://localhost:6006/?path=/story/dds-components-typography-link--overview" external>
          sivile saker sivile sakersivile saker sivile saker sivile saker sivile
          saker sivile saker sivile saker sivile saker sivile saker sivile saker
          sivile saker sivile saker sivile saker sivile saker sivile saker
          sivile sakersivile saker sivile saker sivile saker sivile saker sivile
          sakersivile saker sivile saker sivile saker sivile saker sivile saker
          sivile saker sivile saker sivile saker sivile saker sivile saker
          sivile saker
        </Link>
        .
      </Paragraph>
      <Paragraph typographyType="bodySans04" withMargins>
        Rettsmekling går ut på at partene selv finner en løsning på konflikten
        ved å bruke en mekler (vanligvis en dommer i domstolen som behandler
        saken). Avtalen man kommer fram til, blir rettskraftig på lik linje med
        en dom. Rettsmekling kan bare brukes i{' '}
        <Link href="http://localhost:6006/?path=/story/dds-components-typography-link--overview">
          sivile saker
        </Link>
        , ikke i straffesaker. Hvis konflikten ikke løses ved mekling, avgjøres
        saken ved hovedforhandling (rettssak). Rettsmekling er regulert i{' '}
        <Link href="https://lovdata.no/dokument/NL/lov/2005-06-17-90/KAPITTEL_2-4-2#%C2%A78-3" external>
          tvisteloven §§ 8-3
        </Link>
        . Litt mer tekst.{' '}
        <Link href="http://localhost:6006/?path=/story/dds-components-typography-link--overview" external>
          sivile saker sivile sakersivile saker sivile saker sivile saker sivile
          saker sivile saker sivile saker sivile saker sivile saker sivile saker
          sivile saker sivile saker sivile saker sivile saker sivile saker
          sivile sakersivile saker sivile saker sivile saker sivile saker sivile
          sakersivile saker sivile saker sivile saker sivile saker sivile saker
          sivile saker sivile saker sivile saker sivile saker sivile saker
          sivile saker
        </Link>
        .
      </Paragraph>
      <LocalMessage>
        <Paragraph>
          Dette er tekst med{' '}
          <Link href="http://localhost:6006/?path=/story/dds-components-typography-link--overview">
            lenke
          </Link>
          .
        </Paragraph>
      </LocalMessage>
      <LocalMessage purpose="danger">
        <Paragraph>
          Dette er tekst med{' '}
          <Link href="http://localhost:6006/?path=/story/dds-components-typography-link--overview">
            lenke
          </Link>
          .
        </Paragraph>
      </LocalMessage>
      <LocalMessage purpose="success">
        <Paragraph>
          Dette er tekst med{' '}
          <Link href="http://localhost:6006/?path=/story/dds-components-typography-link--overview">
            lenke
          </Link>
          .
        </Paragraph>
      </LocalMessage>
      <LocalMessage purpose="tips">
        <Paragraph>
          Dette er tekst med{' '}
          <Link href="http://localhost:6006/?path=/story/dds-components-typography-link--overview">
            lenke
          </Link>
          .
        </Paragraph>
      </LocalMessage>
      <LocalMessage purpose="warning">
        <Paragraph>
          Dette er tekst med{' '}
          <Link href="http://localhost:6006/?path=/story/dds-components-typography-link--overview">
            lenke
          </Link>
          .
        </Paragraph>
      </LocalMessage>
      <Table.Wrapper>
        <Table>
          <Table.Head>
            <Table.Row type="head">{headers()}</Table.Row>
          </Table.Head>
          <Table.Body>
            <Table.Row> {cells()} </Table.Row>
          </Table.Body>
        </Table>
      </Table.Wrapper>
    </StoryTemplate>;
}`,...(b=(w=v.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};const S=["Overview","Default","Examples"],C=Object.freeze(Object.defineProperty({__proto__:null,Default:o,Examples:v,Overview:k,__namedExportsOrder:S,default:T},Symbol.toStringTag,{value:"Module"}));export{C as L};
//# sourceMappingURL=Link.stories-d22a551f.js.map
