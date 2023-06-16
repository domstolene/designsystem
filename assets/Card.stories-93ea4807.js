import{d as K,b as be,s as C,A as L,j as e,a as n}from"./focus-visible-c2e9b88d.js";import{r as t}from"./index-ebeaab24.js";import{R as $}from"./storybook-components-91f985f3.js";import{d as Q,e as De}from"./Typography.utils-99dd1e07.js";import{b as Se}from"./hover-d616d034.js";import{e as Ae}from"./focusVisible-75802ac7.js";import{s as xe}from"./selection-fae9d0a8.js";import{g as O}from"./BaseComponentProps-bb0d5515.js";import{r as Be}from"./removeButtonStyling-867d6ba4.js";import{A as Le}from"./AnimatedChevronUpDown-4430134c.js";import{n as $e}from"./normalize-f756ee4b.js";import{a as Y,b as Z,D as ee}from"./DescriptionListDesc-d92b631c.js";import{D as we}from"./Divider-ed4eb34e.js";import{T as d}from"./Typography-9f10a259.js";const{colors:A,border:U}=K,{textDefault:G}=be,Ee={border:`${U.BordersDdsBorderStyleLightStrokeWeight} solid`},He={filledLight:{backgroundColor:A.DdsColorPrimaryLightest,borderColor:A.DdsColorPrimaryLightest,color:G.textColor},filledDark:{backgroundColor:A.DdsColorPrimaryBase,borderColor:A.DdsColorPrimaryBase,color:A.DdsColorNeutralsWhite},strokeDark:{backgroundColor:A.DdsColorNeutralsWhite,borderColor:U.BordersDdsBorderStyleLightStroke,color:G.textColor},strokeLight:{backgroundColor:A.DdsColorNeutralsWhite,borderColor:U.BordersDdsBorderStyleLightStroke,color:G.textColor}},F={base:Ee,colors:He},re=C.div`
  border: ${F.base.border};
  ${Q(De)};
  &::selection,
  *::selection {
    ${xe}
  }
  @media (prefers-reduced-motion: no-preference) {
    transition: box-shadow 0.2s, border-color 0.2s;
  }
  ${({color:r})=>r&&L`
      color: ${F.colors[r].color};
      background-color: ${F.colors[r].backgroundColor};
      border-color: ${F.colors[r].borderColor};
    `}
  ${({cardType:r})=>r==="navigation"?L`
          text-decoration: none;
          &:hover {
            ${Se}
          }
          &:focus {
            ${Ae}
          }
        `:r==="expandable"?L`
          width: 100%;
          box-sizing: border-box;
          &:not(:first-of-type) {
            border-top: none;
          }
        `:""}
`,o=r=>{const{color:a="filledLight",cardType:s,cardRef:i,children:h,id:f,className:u,htmlProps:k,...T}=r;if(s==="navigation"){const{href:y,target:v}=r;return e(re,{...O(f,u,k,T),cardType:s,color:a,as:"a",ref:i,href:y,target:v,children:h})}return e(re,{...O(f,u,k,T),cardType:s,color:a,as:"div",ref:i,children:h})};o.displayName="Card";const Ie=C.div``,l=t.forwardRef((r,a)=>{const{isExpanded:s=!1,onChange:i,id:h,children:f,className:u,htmlProps:k,...T}=r,[y,v]=t.useState(s),b=t.useId(),S=h??`${b}-cardAccordion`;t.useEffect(()=>{v(s)},[s]);const w=t.useCallback(()=>{const D=!y;v(D),i&&i(D)},[y,i]),x=t.Children.map(f,(D,X)=>{const W=`${S}-header`,_=`${S}-body`;return t.isValidElement(D)&&(X===0?t.cloneElement(D,{isExpanded:y,toggleExpanded:w,id:W,bodyId:_}):t.cloneElement(D,{isExpanded:y,id:_,headerId:W}))}),E={...O(h,u,k,T),ref:a};return e(Ie,{...E,children:x})});l.displayName="CardAccordion";const{spacing:c,border:M,iconSizes:q}=K,ve={body:"bodySans03",header:"headingSans03"},Pe={padding:`${c.SizesDdsSpacingLocalX1} ${c.SizesDdsSpacingLocalX075} ${c.SizesDdsSpacingLocalX1} ${c.SizesDdsSpacingLocalX15}`,hover:{boxShadow:`0 0 0 ${M.BordersDdsBorderFocusInputfieldStrokeWeight} ${M.BordersDdsBorderFocusInputfieldStroke}`},focus:{boxShadow:`0 0 0 ${M.BordersDdsBorderFocusCardStrokeWeight} ${M.BordersDdsBorderFocusCardStroke}`}},ze={width:q.DdsIconsizeMedium,height:q.DdsIconsizeMedium,marginLeft:c.SizesDdsSpacingLocalX05},je={padding:`${c.SizesDdsSpacingLocalX1} ${c.SizesDdsSpacingLocalX2NumberPx+c.SizesDdsSpacingLocalX075NumberPx}px ${c.SizesDdsSpacingLocalX2} ${c.SizesDdsSpacingLocalX15}`},N={header:Pe,body:je,chevronWrapper:ze,chevron:{width:q.DdsIconsizeMedium,height:c.SizesDdsSpacingLocalX05}},{header:J,chevronWrapper:V}=N,Re=C.div`
  text-align: left;
`;function Oe(r){const{padding:a}=r;return a||J.padding}function We(r){const{typographyType:a}=r;return a||ve.header}const Fe=C.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (prefers-reduced-motion: no-preference) {
    transition: box-shadow 0.2s;
  }
  padding: ${Oe};
  ${r=>Q(We(r))}
  ${r=>r.bold&&L`
      font-weight: 600;
    `}
`,Me=C.button`
  ${$e}
  user-select: text;
  position: relative;
  cursor: pointer;
  @media (prefers-reduced-motion: no-preference) {
    transition: box-shadow 0.2s;
  }
  ${Be}
  display: block;
  width: 100%;
  &:hover {
    box-shadow: ${J.hover.boxShadow};
  }

  &:focus-visible,
  &.focus-visible {
    outline: none;
    box-shadow: ${J.focus.boxShadow};
  }
`,Ne=C.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${V.width};
  height: ${V.height};
  margin-left: ${V.marginLeft};
`,p=t.forwardRef((r,a)=>{const{children:s,isExpanded:i=!1,toggleExpanded:h,bodyId:f,id:u,className:k,htmlProps:T,padding:y,typographyType:v,bold:b,...S}=r,w=()=>{h&&h()},x={...O(u,k,T,S),"aria-expanded":i,"aria-controls":f,ref:a,onClick:w},E={isUp:i,width:N.chevron.width,height:N.chevron.height};return e(Me,{...x,type:"button",children:n(Fe,{typographyType:v,padding:y,bold:b,children:[e(Re,{children:s}),e(Ne,{children:e(Le,{...E})})]})})});p.displayName="CardAccordionHeader";const Xe=()=>{const r=t.useRef(!1);return t.useEffect(()=>(r.current=!0,()=>{r.current=!1}),[]),t.useCallback(()=>r.current,[])},_e=Xe;function Ge(r){const[a,s]=t.useState(null);return t.useEffect(()=>{if(!r)return;const i=new ResizeObserver(()=>{s(r.offsetHeight)});return i.observe(r),()=>i.disconnect()},[r]),a}const Ve=L`
  @media (prefers-reduced-motion: no-preference) {
    transition: height 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;function Ue(r){const{padding:a}=r;return a||N.body.padding}const qe=C.div`
  @media (prefers-reduced-motion: no-preference) {
    ${({animate:r})=>r&&Ve}
  }
  ${Q(ve.body)}
  height: ${({height:r,isExpanded:a})=>a?r:0}px;
  overflow: hidden;
`,Je=C.div`
  padding: ${Ue};

  ${({paddingTop:r})=>r&&L`
      padding-top: ${r};
    `}
`,g=t.forwardRef((r,a)=>{const{children:s,isExpanded:i,headerId:h,id:f,className:u,htmlProps:k,padding:T,paddingTop:y,...v}=r,b=t.useRef(null),[S,w]=t.useState(!1),x=_e(),E=Ge(b.current),[D,X]=t.useState(null);t.useLayoutEffect(()=>{b.current&&i&&X(b.current.scrollHeight)},[]),t.useEffect(()=>{x()&&w(!0)},[x]);const W={...O(f,u,k,v),ref:a,isExpanded:i,role:"region",height:E||D||0};return e(qe,{...W,animate:S,"aria-labelledby":h,"aria-hidden":!i,children:e(Je,{...{ref:b,isExpanded:i,padding:T,paddingTop:y},animate:S,children:s})})});g.displayName="CardAccordionBody";const Ke={title:"dds-components/Card",component:o},B=e(d,{children:"Content Content Content Content Content Content Content Content"}),ne=e(d,{color:"onDark",children:"Content Content Content Content Content Content Content Content"}),m=C.div`
  padding: ${K.spacing.SizesDdsSpacingLocalX075};
`,H=()=>n($,{title:"Card - overview",display:"grid",columnsAmount:4,children:[e(o,{cardType:"info",children:n(m,{children:[e(d,{typographyType:"headingSans03",children:"Title"}),B]})}),e(o,{cardType:"info",color:"filledDark",children:n(m,{children:[e(d,{color:"onDark",typographyType:"headingSans03",children:"Title"}),ne]})}),e(o,{cardType:"info",color:"strokeDark",children:n(m,{children:[e(d,{typographyType:"headingSans03",children:"Title"}),B]})}),e(o,{cardType:"info",color:"strokeLight",children:n(m,{children:[e(d,{typographyType:"headingSans03",children:"Title"}),B]})}),e(o,{cardType:"navigation",href:"#",children:n(m,{children:[e(d,{typographyType:"headingSans03",children:"Title"}),B]})}),e(o,{color:"filledDark",cardType:"navigation",href:"#",children:n(m,{children:[e(d,{color:"onDark",typographyType:"headingSans03",children:"Title"}),ne]})}),e(o,{color:"strokeDark",cardType:"navigation",href:"#",children:n(m,{children:[e(d,{typographyType:"headingSans03",children:"Title"}),B]})}),e(o,{color:"strokeLight",cardType:"navigation",href:"#",children:n(m,{children:[e(d,{typographyType:"headingSans03",children:"Title"}),B]})}),e(o,{cardType:"info",color:"filledLight",children:n(l,{children:[e(p,{children:" Title "}),e(g,{children:"Content"})]})}),e(o,{cardType:"info",color:"filledDark",children:n(l,{children:[e(p,{children:" Title "}),e(g,{children:"Content"})]})}),e(o,{cardType:"info",color:"strokeDark",children:n(l,{children:[e(p,{children:" Title "}),e(g,{children:"Content"})]})}),e(o,{cardType:"info",color:"strokeLight",children:n(l,{children:[e(p,{children:" Title "}),e(g,{children:"Content"})]})})]}),I=r=>e($,{title:"Card - default",children:e(o,{...r,children:"Content"})}),P=r=>n($,{title:"Card - accordion",gap:"0",children:[e(o,{...r,cardType:"expandable",children:n(l,{children:[e(p,{children:"Dekning av reiseutgifter"}),n(g,{children:["I sivile saker avtales dekning av utgifter med den part som innkalte deg. I straffesaker har du krav på reise- og kostgodtgjørelse (",e(d,{typographyType:"a",href:"#",children:"særavtale om dekning av utgifter til reise og kost"}),"). Reisen skal foretas på raskeste og rimeligste måte for staten. Offentlig transport må benyttes der det er tilgjengelig. Godtgjørelse for bruk av egen bil godtas bare i den utstrekning det er rimeligst for det offentlige, med mindre særlige grunner tilsier at du må bruke bil.Reiseutgiftene må dokumenteres med kvitteringer, unntatt for rimeligste offentlig transport, for eksempel buss, tog og så videre. For reiser over 15 km og som varer utover 6 timer, dekkes utgifter til måltider etter satsene i særavtalen om dekning av utgifter til reise og kost. Dersom enkeltmåltider er dekket av andre enn deg selv, må du registrere måltidsfradrag."]})]})}),e(o,{...r,cardType:"expandable",children:n(l,{children:[e(p,{children:"Ansvar for behandlingen"}),n(g,{children:["DA er behandlingsansvarlig for opplysningene som registreres i Aktørportalen og avdelingsdirektør for IT-avdelingen har det daglige ansvaret for Aktørportalen. Selskapet Bekk utvikler Aktørportalen for oss."," ",e(d,{typographyType:"a",href:"#",children:"Lenke"})]})]})}),e(o,{...r,cardType:"expandable",children:n(l,{children:[e(p,{children:"Bli vitnestøtte?"}),n(g,{paddingTop:"4px",children:[e(d,{typographyType:"headingSans02",withMargins:!0,children:"Opplæringsfilm"}),e(d,{withMargins:!0,children:"Film «Vitnestøtte» viser fire problemstillinger for hvordan man møter vitner med ulike behov. Den viser både gode og mindre gode løsninger, vitnestøtter kan diskutere."}),e(d,{children:"Filmen viser altså ikke «beste praksis», men er en opplæringsfilm."})]})]})}),e(o,{...r,cardType:"expandable",children:n(l,{children:[e(p,{children:"Header"}),e(g,{children:"Content"})]})})]}),z=r=>{const[a,s]=t.useState(!0);return e($,{title:"Card - accordion",gap:"0",children:e(o,{...r,cardType:"expandable",children:n(l,{isExpanded:a,onChange:()=>s(!a),children:[e(p,{children:"Header"}),e(g,{children:"Content"})]})})})},j=r=>e($,{title:"Card - accordion",gap:"0",children:e(o,{...r,cardType:"expandable",color:"strokeLight",children:n(l,{children:[e(p,{typographyType:"bodySans01",padding:"4px 12px",bold:!0,children:"Dekning av reiseutgifter"}),e(g,{padding:"16px 12px",children:n(d,{typographyType:"bodySans01",children:["I sivile saker avtales dekning av utgifter med den part som innkalte deg. I straffesaker har du krav på reise- og kostgodtgjørelse (",e(d,{typographyType:"a",href:"#",children:"særavtale om dekning av utgifter til reise og kost"}),"). Reisen skal foretas på raskeste og rimeligste måte for staten. Offentlig transport må benyttes der det er tilgjengelig. Godtgjørelse for bruk av egen bil godtas bare i den utstrekning det er rimeligst for det offentlige, med mindre særlige grunner tilsier at du må bruke bil.Reiseutgiftene må dokumenteres med kvitteringer, unntatt for rimeligste offentlig transport, for eksempel buss, tog og så videre. For reiser over 15 km og som varer utover 6 timer, dekkes utgifter til måltider etter satsene i særavtalen om dekning av utgifter til reise og kost. Dersom enkeltmåltider er dekket av andre enn deg selv, må du registrere måltidsfradrag."]})})]})})}),R=r=>e($,{title:"Card - examples",children:e(o,{...r,children:n(m,{children:[n(Y,{children:[e(Z,{children:"Title"}),e(ee,{children:"Description"})]}),e(we,{}),n(Y,{children:[e(Z,{children:"Title"}),e(ee,{children:"Description"})]})]})})});var oe,te,ae;H.parameters={...H.parameters,docs:{...(oe=H.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
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
}`,...(ae=(te=H.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var ie,de,se;I.parameters={...I.parameters,docs:{...(ie=I.parameters)==null?void 0:ie.docs,source:{originalSource:`(args: CardProps) => {
  return <StoryTemplate title="Card - default">
      <Card {...args}>Content</Card>
    </StoryTemplate>;
}`,...(se=(de=I.parameters)==null?void 0:de.docs)==null?void 0:se.source}}};var ce,le,pe;P.parameters={...P.parameters,docs:{...(ce=P.parameters)==null?void 0:ce.docs,source:{originalSource:`(args: ExpandableCardProps) => {
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
}`,...(ye=(he=z.parameters)==null?void 0:he.docs)==null?void 0:ye.source}}};var me,Ce,fe;j.parameters={...j.parameters,docs:{...(me=j.parameters)==null?void 0:me.docs,source:{originalSource:`(args: ExpandableCardProps) => {
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
}`,...(fe=(Ce=j.parameters)==null?void 0:Ce.docs)==null?void 0:fe.source}}};var ue,ke,Te;R.parameters={...R.parameters,docs:{...(ue=R.parameters)==null?void 0:ue.docs,source:{originalSource:`(args: CardProps) => {
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
}`,...(Te=(ke=R.parameters)==null?void 0:ke.docs)==null?void 0:Te.source}}};const Qe=["Overview","Default","Accordion","AccordionControlled","AccordionCustom","Examples"],gr=Object.freeze(Object.defineProperty({__proto__:null,Accordion:P,AccordionControlled:z,AccordionCustom:j,Default:I,Examples:R,Overview:H,__namedExportsOrder:Qe,default:Ke},Symbol.toStringTag,{value:"Module"}));export{gr as C,I as D,l as a,g as b};
//# sourceMappingURL=Card.stories-93ea4807.js.map
