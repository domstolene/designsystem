import{a as e,j as k}from"./jsx-runtime-e43ccb36.js";import{s as h}from"./ddsReferenceTokens-fe3c594e.js";import"./Caption-a006c5bc.js";import"./Heading-3ac6a2d9.js";import"./Label-60a960ab.js";import"./Legend-bad3d4ec.js";import"./Link-bef7f478.js";import"./Paragraph-f6678e05.js";import"./TextOverflowEllipsis-c2a9fc8f.js";import{T as t}from"./Typography-9d6edb9c.js";import{S as g}from"./StoryTemplate-63bfa922.js";const u={title:"dds-components/Typography/Typography",component:t,argTypes:{typographyType:{control:{type:"select"}},bold:{control:{type:"boolean"}},italic:{control:{type:"boolean"}},withMargins:{control:{type:"boolean"}},externalLink:{control:{type:"boolean"}},color:{control:{type:"text"}},href:{control:{type:"text"}},text:{control:{type:"text"}},as:{control:{type:"text"}}},parameters:{controls:{exclude:["style","target"]}}},r=d=>{const{text:y,...m}=d;return e(g,{title:"Typography - default",children:e(t,{...m,children:y||"default"})})},f=h.div`
  max-width: 700px;
`,n=()=>e(g,{title:"Article - example",children:k(f,{children:[e(t,{typographyType:"headingSans06",withMargins:!0,children:"Vitne"}),e(t,{typographyType:"leadSans03",withMargins:!0,children:"Et vitne har sett, hørt eller erfart noe av betydning for en rettssak. Denne siden er for deg som skal vitne i en straffesak eller en sivil sak."}),e(t,{typographyType:"headingSans05",as:"h2",withMargins:!0,children:"Hvorfor vitne?"}),e(t,{typographyType:"bodySans02",withMargins:!0,children:"Vitner er svært viktige for rettssikkerheten i samfunnet. Du har fått en innkalling (kalles stevning) til saken fordi partene eller retten mener du kjenner til noe som kan være viktig for retten å vite. Du har plikt til å møte opp i tråd med innkallingen og forklare deg for retten."}),e(t,{typographyType:"bodySans02",withMargins:!0,children:"En rettssak avgjøres med bakgrunn i det som er kommet fram i rettssalen. Derfor må vitner forklare seg for retten slik at dommerne hører vitneforklaringen. Det gjelder selv om man tidligere ha forklart seg for politiet eller partenes advokat. En vitneforklaring kan avgjøre utfallet av en sak, derfor har vitner plikt til å snakke sant."}),e(t,{typographyType:"headingSans05",as:"h2",withMargins:!0,children:"Møteplikt og fritak"}),e(t,{typographyType:"headingSans04",as:"h3",withMargins:!0,children:"Lang reisevei"}),e(t,{typographyType:"bodySans02",withMargins:!0,children:"Det viktig at du møter opp i tråd med det som står i innkallingen du har fått. Du har i utgangspunktet plikt til å møte som vitne uansett hvor langt du må reise. Retten kan imidlertid gi fritak hvis reiseveien én vei er mer enn 800 km med rutegående transport eller 125 km på annen måte. Slikt fritak kan gis dersom ditt oppmøte medfører uforholdsmessige ulemper eller kostnader sammenlignet med din betydning for å få belyst saken. Dersom du tror slikt fritak kan være aktuelt, må du straks ta kontakt med domstolen. Du kan ikke la være å møte uten at du har fått klar beskjed om at du er fritatt."}),e(t,{typographyType:"headingSans04",as:"h3",withMargins:!0,children:"Sykdom"}),e(t,{typographyType:"bodySans02",withMargins:!0,children:"Blir du syk eller det av andre grunner er umulig for deg å møte, må du gi beskjed til domstolene så snart du kan. Dersom du mener du har lovlig forfall på grunn av sykdom, må du få en legeerklæring og sende den til retten. Det er domstolen som avgjør om sykdommen utgjør et lovlig forfall. Hvis du ikke gir retten beskjed om forfallet så snart som mulig, risikerer du også bot og erstatningsansvar. Innkallingen gjelder inntil du eventuelt har fått beskjed fra retten om at du er blitt fritatt for å møte."})]})});var a,i,o;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`(args: StoryTProps) => {
  const {
    text,
    ...rest
  } = args;
  return <StoryTemplate title="Typography - default">
      <Typography {...rest}>{text || 'default'}</Typography>
    </StoryTemplate>;
}`,...(o=(i=r.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var s,l,p;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  return <StoryTemplate title="Article - example">
      <ArticleContainer>
        <Typography typographyType="headingSans06" withMargins>
          Vitne
        </Typography>
        <Typography typographyType="leadSans03" withMargins>
          Et vitne har sett, hørt eller erfart noe av betydning for en rettssak.
          Denne siden er for deg som skal vitne i en straffesak eller en sivil
          sak.
        </Typography>
        <Typography typographyType="headingSans05" as="h2" withMargins>
          Hvorfor vitne?
        </Typography>
        <Typography typographyType="bodySans02" withMargins>
          Vitner er svært viktige for rettssikkerheten i samfunnet. Du har fått
          en innkalling (kalles stevning) til saken fordi partene eller retten
          mener du kjenner til noe som kan være viktig for retten å vite. Du har
          plikt til å møte opp i tråd med innkallingen og forklare deg for
          retten.
        </Typography>
        <Typography typographyType="bodySans02" withMargins>
          En rettssak avgjøres med bakgrunn i det som er kommet fram i
          rettssalen. Derfor må vitner forklare seg for retten slik at dommerne
          hører vitneforklaringen. Det gjelder selv om man tidligere ha forklart
          seg for politiet eller partenes advokat. En vitneforklaring kan
          avgjøre utfallet av en sak, derfor har vitner plikt til å snakke sant.
        </Typography>
        <Typography typographyType="headingSans05" as="h2" withMargins>
          Møteplikt og fritak
        </Typography>
        <Typography typographyType="headingSans04" as="h3" withMargins>
          Lang reisevei
        </Typography>
        <Typography typographyType="bodySans02" withMargins>
          Det viktig at du møter opp i tråd med det som står i innkallingen du
          har fått. Du har i utgangspunktet plikt til å møte som vitne uansett
          hvor langt du må reise. Retten kan imidlertid gi fritak hvis
          reiseveien én vei er mer enn 800 km med rutegående transport eller 125
          km på annen måte. Slikt fritak kan gis dersom ditt oppmøte medfører
          uforholdsmessige ulemper eller kostnader sammenlignet med din
          betydning for å få belyst saken. Dersom du tror slikt fritak kan være
          aktuelt, må du straks ta kontakt med domstolen. Du kan ikke la være å
          møte uten at du har fått klar beskjed om at du er fritatt.
        </Typography>
        <Typography typographyType="headingSans04" as="h3" withMargins>
          Sykdom
        </Typography>
        <Typography typographyType="bodySans02" withMargins>
          Blir du syk eller det av andre grunner er umulig for deg å møte, må du
          gi beskjed til domstolene så snart du kan. Dersom du mener du har
          lovlig forfall på grunn av sykdom, må du få en legeerklæring og sende
          den til retten. Det er domstolen som avgjør om sykdommen utgjør et
          lovlig forfall. Hvis du ikke gir retten beskjed om forfallet så snart
          som mulig, risikerer du også bot og erstatningsansvar. Innkallingen
          gjelder inntil du eventuelt har fått beskjed fra retten om at du er
          blitt fritatt for å møte.
        </Typography>
      </ArticleContainer>
    </StoryTemplate>;
}`,...(p=(l=n.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const v=["Default","Article"],_=Object.freeze(Object.defineProperty({__proto__:null,Article:n,Default:r,__namedExportsOrder:v,default:u},Symbol.toStringTag,{value:"Module"}));export{_ as T};
//# sourceMappingURL=Typography.stories-4fc69299.js.map
