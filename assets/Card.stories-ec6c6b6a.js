import{s as f,a as e,d as ye,A as R,j as n}from"./ddsReferenceTokens-647ce456.js";import{r as t}from"./index-ebeaab24.js";import{S}from"./StoryTemplate-eb861f3f.js";import"./Caption-5c254d72.js";import"./Heading-dc72d0b9.js";import"./Label-23c96940.js";import"./Legend-dbc3ced6.js";import"./Link-9aff7843.js";import"./Paragraph-3340e0ea.js";import"./TextOverflowEllipsis-e3546c5b.js";import{g as he,T as d}from"./Typography-1747463b.js";import{g as X,A as fe}from"./BaseComponentProps-a100791d.js";import{n as Ce}from"./normalize-f756ee4b.js";import{r as ke}from"./removeButtonStyling-867d6ba4.js";import{C as a}from"./Card-04d00477.js";import{D as W,a as U,b as G}from"./DescriptionListDesc-9319d6fe.js";import{D as ve}from"./Divider-97c7888f.js";const Te=()=>{const r=t.useRef(!1);return t.useEffect(()=>(r.current=!0,()=>{r.current=!1}),[]),t.useCallback(()=>r.current,[])},be=f.div``,s=t.forwardRef((r,o)=>{const{isExpanded:c=!1,onChange:i,id:C,children:A,className:x,htmlProps:D,...E}=r,[y,v]=t.useState(c),h=t.useId(),k=C??`${h}-cardAccordion`;t.useEffect(()=>{v(c)},[c]);const L=t.useCallback(()=>{const m=!y;v(m),i&&i(m)},[y,i]),T=t.Children.map(A,(m,j)=>{const O=`${k}-header`,F=`${k}-body`;return t.isValidElement(m)&&(j===0?t.cloneElement(m,{isExpanded:y,toggleExpanded:L,id:O,bodyId:F}):t.cloneElement(m,{isExpanded:y,id:F,headerId:O}))}),B={...X(C,x,D,E),ref:o};return e(be,{...B,children:T})});s.displayName="CardAccordion";try{s.displayName="CardAccordion",s.__docgenInfo={description:"",displayName:"CardAccordion",props:{isExpanded:{defaultValue:null,description:"Spesifiserer om body skal være utvidet ved innlastning.",name:"isExpanded",required:!1,type:{name:"boolean | undefined"}},onChange:{defaultValue:null,description:"For å lytte til endringer i expanded-state.",name:"onChange",required:!1,type:{name:"((expanded: boolean) => void) | undefined"}},htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:"HTMLAttributes<HTMLDivElement> | undefined"}}}}}catch{}const{spacing:g,border:z,iconSizes:N}=ye,me={body:"bodySans03",header:"headingSans03"},Se={padding:`${g.SizesDdsSpacingLocalX1} ${g.SizesDdsSpacingLocalX075} ${g.SizesDdsSpacingLocalX1} ${g.SizesDdsSpacingLocalX15}`,hover:{boxShadow:`0 0 0 ${z.BordersDdsBorderFocusInputfieldStrokeWeight} ${z.BordersDdsBorderFocusInputfieldStroke}`},focus:{boxShadow:`0 0 0 ${z.BordersDdsBorderFocusCardStrokeWeight} ${z.BordersDdsBorderFocusCardStroke}`}},Ae={width:N.DdsIconsizeMedium,height:N.DdsIconsizeMedium,marginLeft:g.SizesDdsSpacingLocalX05},xe={padding:`${g.SizesDdsSpacingLocalX1} ${g.SizesDdsSpacingLocalX2NumberPx+g.SizesDdsSpacingLocalX075NumberPx}px ${g.SizesDdsSpacingLocalX2} ${g.SizesDdsSpacingLocalX15}`},M={header:Se,body:xe,chevronWrapper:Ae,chevron:{width:N.DdsIconsizeMedium,height:g.SizesDdsSpacingLocalX05}},{header:q,chevronWrapper:V}=M,De=f.div`
  text-align: left;
`;function Ee(r){const{padding:o}=r;return o||q.padding}function Le(r){const{typographyType:o}=r;return o||me.header}const Be=f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (prefers-reduced-motion: no-preference) {
    transition: box-shadow 0.2s;
  }
  padding: ${Ee};
  ${r=>he(Le(r))}
  ${r=>r.bold&&R`
      font-weight: 600;
    `}
`,He=f.button`
  ${Ce}
  user-select: text;
  position: relative;
  cursor: pointer;
  @media (prefers-reduced-motion: no-preference) {
    transition: box-shadow 0.2s;
  }
  ${ke}
  display: block;
  width: 100%;
  &:hover {
    box-shadow: ${q.hover.boxShadow};
  }

  &:focus-visible,
  &.focus-visible {
    outline: none;
    box-shadow: ${q.focus.boxShadow};
  }
`,$e=f.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${V.width};
  height: ${V.height};
  margin-left: ${V.marginLeft};
`,l=t.forwardRef((r,o)=>{const{children:c,isExpanded:i=!1,toggleExpanded:C,bodyId:A,id:x,className:D,htmlProps:E,padding:y,typographyType:v,bold:h,...k}=r,L=()=>{C&&C()},T={...X(x,D,E,k),"aria-expanded":i,"aria-controls":A,ref:o,onClick:L},B={isUp:i,width:M.chevron.width,height:M.chevron.height};return e(He,{...T,type:"button",children:n(Be,{typographyType:v,padding:y,bold:h,children:[e(De,{children:c}),e($e,{children:e(fe,{...B})})]})})});l.displayName="CardAccordionHeader";try{l.displayName="CardAccordionHeader",l.__docgenInfo={description:"",displayName:"CardAccordionHeader",props:{isExpanded:{defaultValue:null,description:"**OBS!** denne propen blir satt automatisk av forelder. Forteller body er utvidet.",name:"isExpanded",required:!1,type:{name:"boolean | undefined"}},toggleExpanded:{defaultValue:null,description:"**OBS!** denne propen blir satt automatisk av forelder. Callback for å styre utvidelse og sammentrukking.",name:"toggleExpanded",required:!1,type:{name:"(() => void) | undefined"}},bodyId:{defaultValue:null,description:"**OBS!** denne propen blir satt automatisk av forelder. Forteller `id` til `<CardAccordionBody />`.",name:"bodyId",required:!1,type:{name:"string | undefined"}},padding:{defaultValue:null,description:"Overskriver default padding.",name:"padding",required:!1,type:{name:"Padding<string> | undefined"}},typographyType:{defaultValue:null,description:"Overskriver default teksttype.",name:"typographyType",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"bodySans01"'},{value:'"bodySans02"'},{value:'"bodySans03"'},{value:'"bodySans04"'},{value:'"headingSans01"'},{value:'"headingSans02"'},{value:'"headingSans03"'},{value:'"headingSans04"'},{value:'"headingSans05"'},{value:'"headingSans06"'},{value:'"headingSans07"'},{value:'"headingSans08"'},{value:'"leadSans01"'},{value:'"leadSans02"'},{value:'"leadSans03"'},{value:'"leadSans04"'},{value:'"leadSans05"'},{value:'"supportingStyleHelperText01"'},{value:'"supportingStylePlaceholderText01"'},{value:'"supportingStylePlaceholderText02"'},{value:'"supportingStylePlaceholderText03"'},{value:'"supportingStyleTiny01"'},{value:'"supportingStyleTiny02"'},{value:'"supportingStyleLabel01"'}]}},bold:{defaultValue:null,description:'Angir om teksten skal være i "bold"-format.',name:"bold",required:!1,type:{name:"boolean | undefined"}},htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:"ButtonHTMLAttributes<HTMLButtonElement> | undefined"}}}}}catch{}function Ie(r){const[o,c]=t.useState(null);return t.useEffect(()=>{if(!r)return;const i=new ResizeObserver(()=>{c(r.offsetHeight)});return i.observe(r),()=>i.disconnect()},[r]),o}const we=R`
  @media (prefers-reduced-motion: no-preference) {
    transition: height 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;function Pe(r){const{padding:o}=r;return o||M.body.padding}const _e=f.div`
  @media (prefers-reduced-motion: no-preference) {
    ${({animate:r})=>r&&we}
  }
  ${he(me.body)}
  height: ${({height:r,isExpanded:o})=>o?r:0}px;
  overflow: hidden;
`,Oe=f.div`
  padding: ${Pe};

  ${({paddingTop:r})=>r&&R`
      padding-top: ${r};
    `}
`,p=t.forwardRef((r,o)=>{const{children:c,isExpanded:i,headerId:C,id:A,className:x,htmlProps:D,padding:E,paddingTop:y,...v}=r,h=t.useRef(null),[k,L]=t.useState(!1),T=Te(),B=Ie(h.current),[m,j]=t.useState(null);t.useLayoutEffect(()=>{h.current&&i&&j(h.current.scrollHeight)},[]),t.useEffect(()=>{T()&&L(!0)},[T]);const O={...X(A,x,D,v),ref:o,isExpanded:i,role:"region",height:B||m||0};return e(_e,{...O,animate:k,"aria-labelledby":C,"aria-hidden":!i,children:e(Oe,{...{ref:h,isExpanded:i,padding:E,paddingTop:y},animate:k,children:c})})});p.displayName="CardAccordionBody";try{p.displayName="CardAccordionBody",p.__docgenInfo={description:"",displayName:"CardAccordionBody",props:{isExpanded:{defaultValue:null,description:"**OBS!** denne propen blir satt automatisk av forelder. Forteller komponenten om den skal utvides.",name:"isExpanded",required:!1,type:{name:"boolean | undefined"}},headerId:{defaultValue:null,description:"**OBS!** denne propen blir satt automatisk av forelder. Forteller `id` til `<CardAccordionHeader />`.",name:"headerId",required:!1,type:{name:"string | undefined"}},paddingTop:{defaultValue:null,description:"Overskriver default padding på toppen. Brukes når barn har spacing på toppen, f.eks. en overskrift.",name:"paddingTop",required:!1,type:{name:"PaddingTop<string> | undefined"}},padding:{defaultValue:null,description:"Overskriver default padding.",name:"padding",required:!1,type:{name:"Padding<string> | undefined"}},htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:"HTMLAttributes<HTMLDivElement> | undefined"}}}}}catch{}const ze={title:"dds-components/Card",component:a},b=e(d,{children:"Content Content Content Content Content Content Content Content"}),J=e(d,{color:"onDark",children:"Content Content Content Content Content Content Content Content"}),u=f.div`
  padding: ${ye.spacing.SizesDdsSpacingLocalX075};
`,H=()=>n(S,{title:"Card - overview",display:"grid",columnsAmount:4,children:[e(a,{cardType:"info",children:n(u,{children:[e(d,{typographyType:"headingSans03",children:"Title"}),b]})}),e(a,{cardType:"info",color:"filledDark",children:n(u,{children:[e(d,{color:"onDark",typographyType:"headingSans03",children:"Title"}),J]})}),e(a,{cardType:"info",color:"strokeDark",children:n(u,{children:[e(d,{typographyType:"headingSans03",children:"Title"}),b]})}),e(a,{cardType:"info",color:"strokeLight",children:n(u,{children:[e(d,{typographyType:"headingSans03",children:"Title"}),b]})}),e(a,{cardType:"navigation",href:"#",children:n(u,{children:[e(d,{typographyType:"headingSans03",children:"Title"}),b]})}),e(a,{color:"filledDark",cardType:"navigation",href:"#",children:n(u,{children:[e(d,{color:"onDark",typographyType:"headingSans03",children:"Title"}),J]})}),e(a,{color:"strokeDark",cardType:"navigation",href:"#",children:n(u,{children:[e(d,{typographyType:"headingSans03",children:"Title"}),b]})}),e(a,{color:"strokeLight",cardType:"navigation",href:"#",children:n(u,{children:[e(d,{typographyType:"headingSans03",children:"Title"}),b]})}),e(a,{cardType:"info",color:"filledLight",children:n(s,{children:[e(l,{children:" Title "}),e(p,{children:"Content"})]})}),e(a,{cardType:"info",color:"filledDark",children:n(s,{children:[e(l,{children:" Title "}),e(p,{children:"Content"})]})}),e(a,{cardType:"info",color:"strokeDark",children:n(s,{children:[e(l,{children:" Title "}),e(p,{children:"Content"})]})}),e(a,{cardType:"info",color:"strokeLight",children:n(s,{children:[e(l,{children:" Title "}),e(p,{children:"Content"})]})})]}),$=r=>e(S,{title:"Card - default",children:e(a,{...r,children:"Content"})}),I=r=>n(S,{title:"Card - accordion",gap:"0",children:[e(a,{...r,cardType:"expandable",children:n(s,{children:[e(l,{children:"Dekning av reiseutgifter"}),n(p,{children:["I sivile saker avtales dekning av utgifter med den part som innkalte deg. I straffesaker har du krav på reise- og kostgodtgjørelse (",e(d,{typographyType:"a",href:"#",children:"særavtale om dekning av utgifter til reise og kost"}),"). Reisen skal foretas på raskeste og rimeligste måte for staten. Offentlig transport må benyttes der det er tilgjengelig. Godtgjørelse for bruk av egen bil godtas bare i den utstrekning det er rimeligst for det offentlige, med mindre særlige grunner tilsier at du må bruke bil.Reiseutgiftene må dokumenteres med kvitteringer, unntatt for rimeligste offentlig transport, for eksempel buss, tog og så videre. For reiser over 15 km og som varer utover 6 timer, dekkes utgifter til måltider etter satsene i særavtalen om dekning av utgifter til reise og kost. Dersom enkeltmåltider er dekket av andre enn deg selv, må du registrere måltidsfradrag."]})]})}),e(a,{...r,cardType:"expandable",children:n(s,{children:[e(l,{children:"Ansvar for behandlingen"}),n(p,{children:["DA er behandlingsansvarlig for opplysningene som registreres i Aktørportalen og avdelingsdirektør for IT-avdelingen har det daglige ansvaret for Aktørportalen. Selskapet Bekk utvikler Aktørportalen for oss."," ",e(d,{typographyType:"a",href:"#",children:"Lenke"})]})]})}),e(a,{...r,cardType:"expandable",children:n(s,{children:[e(l,{children:"Bli vitnestøtte?"}),n(p,{paddingTop:"4px",children:[e(d,{typographyType:"headingSans02",withMargins:!0,children:"Opplæringsfilm"}),e(d,{withMargins:!0,children:"Film «Vitnestøtte» viser fire problemstillinger for hvordan man møter vitner med ulike behov. Den viser både gode og mindre gode løsninger, vitnestøtter kan diskutere."}),e(d,{children:"Filmen viser altså ikke «beste praksis», men er en opplæringsfilm."})]})]})}),e(a,{...r,cardType:"expandable",children:n(s,{children:[e(l,{children:"Header"}),e(p,{children:"Content"})]})})]}),w=r=>{const[o,c]=t.useState(!0);return e(S,{title:"Card - accordion",gap:"0",children:e(a,{...r,cardType:"expandable",children:n(s,{isExpanded:o,onChange:()=>c(!o),children:[e(l,{children:"Header"}),e(p,{children:"Content"})]})})})},P=r=>e(S,{title:"Card - accordion",gap:"0",children:e(a,{...r,cardType:"expandable",color:"strokeLight",children:n(s,{children:[e(l,{typographyType:"bodySans01",padding:"4px 12px",bold:!0,children:"Dekning av reiseutgifter"}),e(p,{padding:"16px 12px",children:n(d,{typographyType:"bodySans01",children:["I sivile saker avtales dekning av utgifter med den part som innkalte deg. I straffesaker har du krav på reise- og kostgodtgjørelse (",e(d,{typographyType:"a",href:"#",children:"særavtale om dekning av utgifter til reise og kost"}),"). Reisen skal foretas på raskeste og rimeligste måte for staten. Offentlig transport må benyttes der det er tilgjengelig. Godtgjørelse for bruk av egen bil godtas bare i den utstrekning det er rimeligst for det offentlige, med mindre særlige grunner tilsier at du må bruke bil.Reiseutgiftene må dokumenteres med kvitteringer, unntatt for rimeligste offentlig transport, for eksempel buss, tog og så videre. For reiser over 15 km og som varer utover 6 timer, dekkes utgifter til måltider etter satsene i særavtalen om dekning av utgifter til reise og kost. Dersom enkeltmåltider er dekket av andre enn deg selv, må du registrere måltidsfradrag."]})})]})})}),_=r=>e(S,{title:"Card - examples",children:e(a,{...r,children:n(u,{children:[n(W,{children:[e(U,{children:"Title"}),e(G,{children:"Description"})]}),e(ve,{}),n(W,{children:[e(U,{children:"Title"}),e(G,{children:"Description"})]})]})})});var K,Q,Y;H.parameters={...H.parameters,docs:{...(K=H.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
  return <StoryTemplate title="Card - overview" display="grid" columnsAmount={4}>
      <Card cardType="info">
        <ContentContainer>
          <Typography typographyType="headingSans03">Title</Typography>
          {body}
        </ContentContainer>
      </Card>
      <Card cardType="info" color="filledDark">
        <ContentContainer>
          <Typography color="onDark" typographyType="headingSans03">
            Title
          </Typography>
          {bodyOnDark}
        </ContentContainer>
      </Card>
      <Card cardType="info" color="strokeDark">
        <ContentContainer>
          <Typography typographyType="headingSans03">Title</Typography>
          {body}
        </ContentContainer>
      </Card>
      <Card cardType="info" color="strokeLight">
        <ContentContainer>
          <Typography typographyType="headingSans03">Title</Typography>
          {body}
        </ContentContainer>
      </Card>
      <Card cardType="navigation" href="#">
        <ContentContainer>
          <Typography typographyType="headingSans03">Title</Typography>
          {body}
        </ContentContainer>
      </Card>
      <Card color="filledDark" cardType="navigation" href="#">
        <ContentContainer>
          <Typography color="onDark" typographyType="headingSans03">
            Title
          </Typography>
          {bodyOnDark}
        </ContentContainer>
      </Card>
      <Card color="strokeDark" cardType="navigation" href="#">
        <ContentContainer>
          <Typography typographyType="headingSans03">Title</Typography>
          {body}
        </ContentContainer>
      </Card>
      <Card color="strokeLight" cardType="navigation" href="#">
        <ContentContainer>
          <Typography typographyType="headingSans03">Title</Typography>
          {body}
        </ContentContainer>
      </Card>
      <Card cardType="info" color="filledLight">
        <CardAccordion>
          <CardAccordionHeader> Title </CardAccordionHeader>
          <CardAccordionBody>Content</CardAccordionBody>
        </CardAccordion>
      </Card>
      <Card cardType="info" color="filledDark">
        <CardAccordion>
          <CardAccordionHeader> Title </CardAccordionHeader>
          <CardAccordionBody>Content</CardAccordionBody>
        </CardAccordion>
      </Card>
      <Card cardType="info" color="strokeDark">
        <CardAccordion>
          <CardAccordionHeader> Title </CardAccordionHeader>
          <CardAccordionBody>Content</CardAccordionBody>
        </CardAccordion>
      </Card>
      <Card cardType="info" color="strokeLight">
        <CardAccordion>
          <CardAccordionHeader> Title </CardAccordionHeader>
          <CardAccordionBody>Content</CardAccordionBody>
        </CardAccordion>
      </Card>
    </StoryTemplate>;
}`,...(Y=(Q=H.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,ee,re;$.parameters={...$.parameters,docs:{...(Z=$.parameters)==null?void 0:Z.docs,source:{originalSource:`(args: CardProps) => {
  return <StoryTemplate title="Card - default">
      <Card {...args}>Content</Card>
    </StoryTemplate>;
}`,...(re=(ee=$.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ne,te,ae;I.parameters={...I.parameters,docs:{...(ne=I.parameters)==null?void 0:ne.docs,source:{originalSource:`(args: ExpandableCardProps) => {
  return <StoryTemplate title="Card - accordion" gap="0">
      <Card {...args} cardType="expandable">
        <CardAccordion>
          <CardAccordionHeader>Dekning av reiseutgifter</CardAccordionHeader>
          <CardAccordionBody>
            I sivile saker avtales dekning av utgifter med den part som innkalte
            deg. I straffesaker har du krav på reise- og kostgodtgjørelse (
            <Typography typographyType="a" href="#">
              særavtale om dekning av utgifter til reise og kost
            </Typography>
            ). Reisen skal foretas på raskeste og rimeligste måte for staten.
            Offentlig transport må benyttes der det er tilgjengelig.
            Godtgjørelse for bruk av egen bil godtas bare i den utstrekning det
            er rimeligst for det offentlige, med mindre særlige grunner tilsier
            at du må bruke bil.Reiseutgiftene må dokumenteres med kvitteringer,
            unntatt for rimeligste offentlig transport, for eksempel buss, tog
            og så videre. For reiser over 15 km og som varer utover 6 timer,
            dekkes utgifter til måltider etter satsene i særavtalen om dekning
            av utgifter til reise og kost. Dersom enkeltmåltider er dekket av
            andre enn deg selv, må du registrere måltidsfradrag.
          </CardAccordionBody>
        </CardAccordion>
      </Card>
      <Card {...args} cardType="expandable">
        <CardAccordion>
          <CardAccordionHeader>Ansvar for behandlingen</CardAccordionHeader>
          <CardAccordionBody>
            DA er behandlingsansvarlig for opplysningene som registreres i
            Aktørportalen og avdelingsdirektør for IT-avdelingen har det daglige
            ansvaret for Aktørportalen. Selskapet Bekk utvikler Aktørportalen
            for oss.{' '}
            <Typography typographyType="a" href="#">
              Lenke
            </Typography>
          </CardAccordionBody>
        </CardAccordion>
      </Card>
      <Card {...args} cardType="expandable">
        <CardAccordion>
          <CardAccordionHeader>Bli vitnestøtte?</CardAccordionHeader>
          <CardAccordionBody paddingTop="4px">
            <Typography typographyType="headingSans02" withMargins>
              Opplæringsfilm
            </Typography>
            <Typography withMargins>
              Film «Vitnestøtte» viser fire problemstillinger for hvordan man
              møter vitner med ulike behov. Den viser både gode og mindre gode
              løsninger, vitnestøtter kan diskutere.
            </Typography>
            <Typography>
              Filmen viser altså ikke «beste praksis», men er en opplæringsfilm.
            </Typography>
          </CardAccordionBody>
        </CardAccordion>
      </Card>
      <Card {...args} cardType="expandable">
        <CardAccordion>
          <CardAccordionHeader>Header</CardAccordionHeader>
          <CardAccordionBody>Content</CardAccordionBody>
        </CardAccordion>
      </Card>
    </StoryTemplate>;
}`,...(ae=(te=I.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var oe,de,ie;w.parameters={...w.parameters,docs:{...(oe=w.parameters)==null?void 0:oe.docs,source:{originalSource:`(args: ExpandableCardProps) => {
  const [isExpanded, setIsExpanded] = useState(true);
  return <StoryTemplate title="Card - accordion" gap="0">
      <Card {...args} cardType="expandable">
        <CardAccordion isExpanded={isExpanded} onChange={() => setIsExpanded(!isExpanded)}>
          <CardAccordionHeader>Header</CardAccordionHeader>
          <CardAccordionBody>Content</CardAccordionBody>
        </CardAccordion>
      </Card>
    </StoryTemplate>;
}`,...(ie=(de=w.parameters)==null?void 0:de.docs)==null?void 0:ie.source}}};var se,le,pe;P.parameters={...P.parameters,docs:{...(se=P.parameters)==null?void 0:se.docs,source:{originalSource:`(args: ExpandableCardProps) => {
  return <StoryTemplate title="Card - accordion" gap="0">
      <Card {...args} cardType="expandable" color="strokeLight">
        <CardAccordion>
          <CardAccordionHeader typographyType="bodySans01" padding="4px 12px" bold>
            Dekning av reiseutgifter
          </CardAccordionHeader>
          <CardAccordionBody padding="16px 12px">
            <Typography typographyType="bodySans01">
              I sivile saker avtales dekning av utgifter med den part som
              innkalte deg. I straffesaker har du krav på reise- og
              kostgodtgjørelse (
              <Typography typographyType="a" href="#">
                særavtale om dekning av utgifter til reise og kost
              </Typography>
              ). Reisen skal foretas på raskeste og rimeligste måte for staten.
              Offentlig transport må benyttes der det er tilgjengelig.
              Godtgjørelse for bruk av egen bil godtas bare i den utstrekning
              det er rimeligst for det offentlige, med mindre særlige grunner
              tilsier at du må bruke bil.Reiseutgiftene må dokumenteres med
              kvitteringer, unntatt for rimeligste offentlig transport, for
              eksempel buss, tog og så videre. For reiser over 15 km og som
              varer utover 6 timer, dekkes utgifter til måltider etter satsene i
              særavtalen om dekning av utgifter til reise og kost. Dersom
              enkeltmåltider er dekket av andre enn deg selv, må du registrere
              måltidsfradrag.
            </Typography>
          </CardAccordionBody>
        </CardAccordion>
      </Card>
    </StoryTemplate>;
}`,...(pe=(le=P.parameters)==null?void 0:le.docs)==null?void 0:pe.source}}};var ce,ge,ue;_.parameters={..._.parameters,docs:{...(ce=_.parameters)==null?void 0:ce.docs,source:{originalSource:`(args: CardProps) => {
  return <StoryTemplate title="Card - examples">
      <Card {...args}>
        <ContentContainer>
          <DescriptionList>
            <DescriptionListTerm>Title</DescriptionListTerm>
            <DescriptionListDesc>Description</DescriptionListDesc>
          </DescriptionList>
          <Divider />
          <DescriptionList>
            <DescriptionListTerm>Title</DescriptionListTerm>
            <DescriptionListDesc>Description</DescriptionListDesc>
          </DescriptionList>
        </ContentContainer>
      </Card>
    </StoryTemplate>;
}`,...(ue=(ge=_.parameters)==null?void 0:ge.docs)==null?void 0:ue.source}}};const Me=["Overview","Default","Accordion","AccordionControlled","AccordionCustom","Examples"],nr=Object.freeze(Object.defineProperty({__proto__:null,Accordion:I,AccordionControlled:w,AccordionCustom:P,Default:$,Examples:_,Overview:H,__namedExportsOrder:Me,default:ze},Symbol.toStringTag,{value:"Module"}));export{nr as C,$ as D,s as a,p as b};
//# sourceMappingURL=Card.stories-ec6c6b6a.js.map
