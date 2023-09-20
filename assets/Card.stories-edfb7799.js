import{d as J,b as ve,s as m,A as $,a as e,j as n}from"./ddsReferenceTokens-f1d35829.js";import{r as a}from"./index-d47b1f5a.js";import{R as B}from"./storybook-components-e6e74b30.js";import{O as K,A as De,T as i}from"./dds-typography-cc6cb429.js";import{Q as Ae,a as O,b as Se,w as xe,C as Le,H as $e}from"./dds-core-c67132cd.js";import{P as Be,R as we}from"./dds-form-9b45fc8d.js";import{a as Y,b as Z,D as ee}from"./DescriptionListDesc-559bec8b.js";import{D as He}from"./Divider-1dae9af4.js";const{colors:S,border:Q}=J,{textDefault:G}=ve,Ee={border:`${Q.BordersDdsBorderStyleLightStrokeWeight} solid`},Ie={filledLight:{backgroundColor:S.DdsColorPrimaryLightest,borderColor:S.DdsColorPrimaryLightest,color:G.textColor},filledDark:{backgroundColor:S.DdsColorPrimaryBase,borderColor:S.DdsColorPrimaryBase,color:S.DdsColorNeutralsWhite},strokeDark:{backgroundColor:S.DdsColorNeutralsWhite,borderColor:Q.BordersDdsBorderStyleLightStroke,color:G.textColor},strokeLight:{backgroundColor:S.DdsColorNeutralsWhite,borderColor:Q.BordersDdsBorderStyleLightStroke,color:G.textColor}},N={base:Ee,colors:Ie},re=m.div`
  border: ${N.base.border};
  ${K(De)};
  &::selection,
  *::selection {
    ${Ae}
  }
  @media (prefers-reduced-motion: no-preference) {
    transition: box-shadow 0.2s, border-color 0.2s;
  }
  ${({color:r})=>r&&$`
      color: ${N.colors[r].color};
      background-color: ${N.colors[r].backgroundColor};
      border-color: ${N.colors[r].borderColor};
    `}
  ${({cardType:r})=>r==="navigation"?$`
          text-decoration: none;
          &:hover {
            ${Be}
          }
          &:focus {
            ${we}
          }
        `:r==="expandable"?$`
          width: 100%;
          box-sizing: border-box;
          &:not(:first-of-type) {
            border-top: none;
          }
        `:""}
`,o=r=>{const{color:t="filledLight",cardType:s,cardRef:d,children:h,id:f,className:u,htmlProps:k,...T}=r;if(s==="navigation"){const{href:y,target:b}=r;return e(re,{...O(f,u,k,T),cardType:s,color:t,as:"a",ref:d,href:y,target:b,children:h})}return e(re,{...O(f,u,k,T),cardType:s,color:t,as:"div",ref:d,children:h})};o.displayName="Card";const Pe=m.div``,l=a.forwardRef((r,t)=>{const{isExpanded:s=!1,onChange:d,id:h,children:f,className:u,htmlProps:k,...T}=r,[y,b]=a.useState(s),v=a.useId(),A=h??`${v}-cardAccordion`;a.useEffect(()=>{b(s)},[s]);const w=a.useCallback(()=>{const D=!y;b(D),d&&d(D)},[y,d]),x=a.Children.map(f,(D,M)=>{const W=`${A}-header`,_=`${A}-body`;return a.isValidElement(D)&&(M===0?a.cloneElement(D,{isExpanded:y,toggleExpanded:w,id:W,bodyId:_}):a.cloneElement(D,{isExpanded:y,id:_,headerId:W}))}),H={...O(h,u,k,T),ref:t};return e(Pe,{...H,children:x})});l.displayName="CardAccordion";const{spacing:c,border:F,iconSizes:U}=J,be={body:"bodySans03",header:"headingSans03"},ze={padding:`${c.SizesDdsSpacingLocalX1} ${c.SizesDdsSpacingLocalX075} ${c.SizesDdsSpacingLocalX1} ${c.SizesDdsSpacingLocalX15}`,hover:{boxShadow:`0 0 0 ${F.BordersDdsBorderFocusInputfieldStrokeWeight} ${F.BordersDdsBorderFocusInputfieldStroke}`},focus:{boxShadow:`0 0 0 ${F.BordersDdsBorderFocusCardStrokeWeight} ${F.BordersDdsBorderFocusCardStroke}`}},je={width:U.DdsIconsizeMedium,height:U.DdsIconsizeMedium,marginLeft:c.SizesDdsSpacingLocalX05},Re={padding:`${c.SizesDdsSpacingLocalX1} ${c.SizesDdsSpacingLocalX2NumberPx+c.SizesDdsSpacingLocalX075NumberPx}px ${c.SizesDdsSpacingLocalX2} ${c.SizesDdsSpacingLocalX15}`},X={header:ze,body:Re,chevronWrapper:je,chevron:{width:U.DdsIconsizeMedium,height:c.SizesDdsSpacingLocalX05}},{header:q,chevronWrapper:V}=X,Oe=m.div`
  text-align: left;
`;function We(r){const{padding:t}=r;return t||q.padding}function Ne(r){const{typographyType:t}=r;return t||be.header}const Fe=m.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (prefers-reduced-motion: no-preference) {
    transition: box-shadow 0.2s;
  }
  padding: ${We};
  ${r=>K(Ne(r))}
  ${r=>r.bold&&$`
      font-weight: 600;
    `}
`,Xe=m.button`
  ${Se}
  user-select: text;
  position: relative;
  cursor: pointer;
  @media (prefers-reduced-motion: no-preference) {
    transition: box-shadow 0.2s;
  }
  ${xe}
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
`,Me=m.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${V.width};
  height: ${V.height};
  margin-left: ${V.marginLeft};
`,p=a.forwardRef((r,t)=>{const{children:s,isExpanded:d=!1,toggleExpanded:h,bodyId:f,id:u,className:k,htmlProps:T,padding:y,typographyType:b,bold:v,...A}=r,w=()=>{h&&h()},x={...O(u,k,T,A),"aria-expanded":d,"aria-controls":f,ref:t,onClick:w},H={isUp:d,width:X.chevron.width,height:X.chevron.height};return e(Xe,{...x,type:"button",children:n(Fe,{typographyType:b,padding:y,bold:v,children:[e(Oe,{children:s}),e(Me,{children:e(Le,{...H})})]})})});p.displayName="CardAccordionHeader";function _e(r){const[t,s]=a.useState(null);return a.useEffect(()=>{if(!r)return;const d=new ResizeObserver(()=>{s(r.offsetHeight)});return d.observe(r),()=>d.disconnect()},[r]),t}const Ge=$`
  @media (prefers-reduced-motion: no-preference) {
    transition: height 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;function Ve(r){const{padding:t}=r;return t||X.body.padding}const Qe=m.div`
  @media (prefers-reduced-motion: no-preference) {
    ${({animate:r})=>r&&Ge}
  }
  ${K(be.body)}
  height: ${({height:r,isExpanded:t})=>t?r:0}px;
  overflow: hidden;
`,Ue=m.div`
  padding: ${Ve};

  ${({paddingTop:r})=>r&&$`
      padding-top: ${r};
    `}
`,g=a.forwardRef((r,t)=>{const{children:s,isExpanded:d,headerId:h,id:f,className:u,htmlProps:k,padding:T,paddingTop:y,...b}=r,v=a.useRef(null),[A,w]=a.useState(!1),x=$e(),H=_e(v.current),[D,M]=a.useState(null);a.useLayoutEffect(()=>{v.current&&d&&M(v.current.scrollHeight)},[]),a.useEffect(()=>{x()&&w(!0)},[x]);const W={...O(f,u,k,b),ref:t,isExpanded:d,role:"region",height:H||D||0};return e(Qe,{...W,animate:A,"aria-labelledby":h,"aria-hidden":!d,children:e(Ue,{...{ref:v,isExpanded:d,padding:T,paddingTop:y},animate:A,children:s})})});g.displayName="CardAccordionBody";const qe={title:"dds-components/Card",component:o},L=e(i,{children:"Content Content Content Content Content Content Content Content"}),ne=e(i,{color:"onDark",children:"Content Content Content Content Content Content Content Content"}),C=m.div`
  padding: ${J.spacing.SizesDdsSpacingLocalX075};
`,E=()=>n(B,{title:"Card - overview",display:"grid",columnsAmount:4,children:[e(o,{cardType:"info",children:n(C,{children:[e(i,{typographyType:"headingSans03",children:"Title"}),L]})}),e(o,{cardType:"info",color:"filledDark",children:n(C,{children:[e(i,{color:"onDark",typographyType:"headingSans03",children:"Title"}),ne]})}),e(o,{cardType:"info",color:"strokeDark",children:n(C,{children:[e(i,{typographyType:"headingSans03",children:"Title"}),L]})}),e(o,{cardType:"info",color:"strokeLight",children:n(C,{children:[e(i,{typographyType:"headingSans03",children:"Title"}),L]})}),e(o,{cardType:"navigation",href:"#",children:n(C,{children:[e(i,{typographyType:"headingSans03",children:"Title"}),L]})}),e(o,{color:"filledDark",cardType:"navigation",href:"#",children:n(C,{children:[e(i,{color:"onDark",typographyType:"headingSans03",children:"Title"}),ne]})}),e(o,{color:"strokeDark",cardType:"navigation",href:"#",children:n(C,{children:[e(i,{typographyType:"headingSans03",children:"Title"}),L]})}),e(o,{color:"strokeLight",cardType:"navigation",href:"#",children:n(C,{children:[e(i,{typographyType:"headingSans03",children:"Title"}),L]})}),e(o,{cardType:"info",color:"filledLight",children:n(l,{children:[e(p,{children:" Title "}),e(g,{children:"Content"})]})}),e(o,{cardType:"info",color:"filledDark",children:n(l,{children:[e(p,{children:" Title "}),e(g,{children:"Content"})]})}),e(o,{cardType:"info",color:"strokeDark",children:n(l,{children:[e(p,{children:" Title "}),e(g,{children:"Content"})]})}),e(o,{cardType:"info",color:"strokeLight",children:n(l,{children:[e(p,{children:" Title "}),e(g,{children:"Content"})]})})]}),I=r=>e(B,{title:"Card - default",children:e(o,{...r,children:"Content"})}),P=r=>n(B,{title:"Card - accordion",gap:"0",children:[e(o,{...r,cardType:"expandable",children:n(l,{children:[e(p,{children:"Dekning av reiseutgifter"}),n(g,{children:["I sivile saker avtales dekning av utgifter med den part som innkalte deg. I straffesaker har du krav på reise- og kostgodtgjørelse (",e(i,{typographyType:"a",href:"#",children:"særavtale om dekning av utgifter til reise og kost"}),"). Reisen skal foretas på raskeste og rimeligste måte for staten. Offentlig transport må benyttes der det er tilgjengelig. Godtgjørelse for bruk av egen bil godtas bare i den utstrekning det er rimeligst for det offentlige, med mindre særlige grunner tilsier at du må bruke bil.Reiseutgiftene må dokumenteres med kvitteringer, unntatt for rimeligste offentlig transport, for eksempel buss, tog og så videre. For reiser over 15 km og som varer utover 6 timer, dekkes utgifter til måltider etter satsene i særavtalen om dekning av utgifter til reise og kost. Dersom enkeltmåltider er dekket av andre enn deg selv, må du registrere måltidsfradrag."]})]})}),e(o,{...r,cardType:"expandable",children:n(l,{children:[e(p,{children:"Ansvar for behandlingen"}),n(g,{children:["DA er behandlingsansvarlig for opplysningene som registreres i Aktørportalen og avdelingsdirektør for IT-avdelingen har det daglige ansvaret for Aktørportalen. Selskapet Bekk utvikler Aktørportalen for oss."," ",e(i,{typographyType:"a",href:"#",children:"Lenke"})]})]})}),e(o,{...r,cardType:"expandable",children:n(l,{children:[e(p,{children:"Bli vitnestøtte?"}),n(g,{paddingTop:"4px",children:[e(i,{typographyType:"headingSans02",withMargins:!0,children:"Opplæringsfilm"}),e(i,{withMargins:!0,children:"Film «Vitnestøtte» viser fire problemstillinger for hvordan man møter vitner med ulike behov. Den viser både gode og mindre gode løsninger, vitnestøtter kan diskutere."}),e(i,{children:"Filmen viser altså ikke «beste praksis», men er en opplæringsfilm."})]})]})}),e(o,{...r,cardType:"expandable",children:n(l,{children:[e(p,{children:"Header"}),e(g,{children:"Content"})]})})]}),z=r=>{const[t,s]=a.useState(!0);return e(B,{title:"Card - accordion",gap:"0",children:e(o,{...r,cardType:"expandable",children:n(l,{isExpanded:t,onChange:()=>s(!t),children:[e(p,{children:"Header"}),e(g,{children:"Content"})]})})})},j=r=>e(B,{title:"Card - accordion",gap:"0",children:e(o,{...r,cardType:"expandable",color:"strokeLight",children:n(l,{children:[e(p,{typographyType:"bodySans01",padding:"4px 12px",bold:!0,children:"Dekning av reiseutgifter"}),e(g,{padding:"16px 12px",children:n(i,{typographyType:"bodySans01",children:["I sivile saker avtales dekning av utgifter med den part som innkalte deg. I straffesaker har du krav på reise- og kostgodtgjørelse (",e(i,{typographyType:"a",href:"#",children:"særavtale om dekning av utgifter til reise og kost"}),"). Reisen skal foretas på raskeste og rimeligste måte for staten. Offentlig transport må benyttes der det er tilgjengelig. Godtgjørelse for bruk av egen bil godtas bare i den utstrekning det er rimeligst for det offentlige, med mindre særlige grunner tilsier at du må bruke bil.Reiseutgiftene må dokumenteres med kvitteringer, unntatt for rimeligste offentlig transport, for eksempel buss, tog og så videre. For reiser over 15 km og som varer utover 6 timer, dekkes utgifter til måltider etter satsene i særavtalen om dekning av utgifter til reise og kost. Dersom enkeltmåltider er dekket av andre enn deg selv, må du registrere måltidsfradrag."]})})]})})}),R=r=>e(B,{title:"Card - examples",children:e(o,{...r,children:n(C,{children:[n(Y,{children:[e(Z,{children:"Title"}),e(ee,{children:"Description"})]}),e(He,{}),n(Y,{children:[e(Z,{children:"Title"}),e(ee,{children:"Description"})]})]})})});var oe,te,ae;E.parameters={...E.parameters,docs:{...(oe=E.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
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
}`,...(ae=(te=E.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var de,ie,se;I.parameters={...I.parameters,docs:{...(de=I.parameters)==null?void 0:de.docs,source:{originalSource:`(args: CardProps) => {
  return <StoryTemplate title="Card - default">
      <Card {...args}>Content</Card>
    </StoryTemplate>;
}`,...(se=(ie=I.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var ce,le,pe;P.parameters={...P.parameters,docs:{...(ce=P.parameters)==null?void 0:ce.docs,source:{originalSource:`(args: ExpandableCardProps) => {
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
}`,...(pe=(le=P.parameters)==null?void 0:le.docs)==null?void 0:pe.source}}};var ge,he,ye;z.parameters={...z.parameters,docs:{...(ge=z.parameters)==null?void 0:ge.docs,source:{originalSource:`(args: ExpandableCardProps) => {
  const [isExpanded, setIsExpanded] = useState(true);
  return <StoryTemplate title="Card - accordion" gap="0">
      <Card {...args} cardType="expandable">
        <CardAccordion isExpanded={isExpanded} onChange={() => setIsExpanded(!isExpanded)}>
          <CardAccordionHeader>Header</CardAccordionHeader>
          <CardAccordionBody>Content</CardAccordionBody>
        </CardAccordion>
      </Card>
    </StoryTemplate>;
}`,...(ye=(he=z.parameters)==null?void 0:he.docs)==null?void 0:ye.source}}};var Ce,me,fe;j.parameters={...j.parameters,docs:{...(Ce=j.parameters)==null?void 0:Ce.docs,source:{originalSource:`(args: ExpandableCardProps) => {
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
}`,...(fe=(me=j.parameters)==null?void 0:me.docs)==null?void 0:fe.source}}};var ue,ke,Te;R.parameters={...R.parameters,docs:{...(ue=R.parameters)==null?void 0:ue.docs,source:{originalSource:`(args: CardProps) => {
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
}`,...(Te=(ke=R.parameters)==null?void 0:ke.docs)==null?void 0:Te.source}}};const Je=["Overview","Default","Accordion","AccordionControlled","AccordionCustom","Examples"],ar=Object.freeze(Object.defineProperty({__proto__:null,Accordion:P,AccordionControlled:z,AccordionCustom:j,Default:I,Examples:R,Overview:E,__namedExportsOrder:Je,default:qe},Symbol.toStringTag,{value:"Module"}));export{ar as C,I as D,l as a,g as b};
//# sourceMappingURL=Card.stories-edfb7799.js.map
