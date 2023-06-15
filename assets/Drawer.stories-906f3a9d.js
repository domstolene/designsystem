import{d as ee,s as R,C as S,b as t,j as e,F as ne}from"./focus-visible-17f12d09.js";import{R as x}from"./storybook-components-54c9cf1b.js";import{r as l}from"./index-c6dae603.js";import{r as re}from"./index-eb008d06.js";import{u as te}from"./useFocusTrap-754ba609.js";import{u as ae}from"./useCombinedRefs-764cd8e8.js";import{u as ie}from"./useOnKeyDown-77bae070.js";import{u as le}from"./useOnClickOutside-08b83e6f.js";import{u as se}from"./useMountTransition-ab1b2779.js";import{S as oe}from"./ScrollableContainer-339b79b4.js";import{P as me}from"./Paper-19f1cdc7.js";import{c as de}from"./focusVisible-bd00be70.js";import{g as pe}from"./BaseComponentProps-bb0d5515.js";import{T as r}from"./Typography-ddbe86f6.js";import{C as ge}from"./close-bbf4cbe9.js";import{B as a}from"./Button-4fdfc19e.js";const{spacing:k}=ee,h=k.SizesDdsSpacingLocalX025NumberPx,ke=`${h}px`,fe={padding:`${k.SizesDdsSpacingLocalX1NumberPx-h}px ${k.SizesDdsSpacingLocalX1NumberPx-h}px ${k.SizesDdsSpacingLocalX1NumberPx-h}px ${k.SizesDdsSpacingLocalX15NumberPx-h}px`},he={gap:k.SizesDdsSpacingLocalX1,padding:ke},ve={container:fe,contentContainer:he},{container:ue,contentContainer:A}=ve,ce=n=>n==="large"?"800px":n==="medium"?"600px":"400px",be=R(me)`
  position: fixed;
  top: 0;
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  min-width: 300px;
  z-index: 100;
  padding: ${ue.padding};

  ${({size:n})=>S`
    max-width: ${ce(n)};
  `}

  ${({widthProps:n})=>n&&S`
      ${n}
    `}

  ${({placement:n,isOpen:d})=>n==="left"?S`
          left: 0;
          transform: ${d?"translate(0px)":"translateX(-100%)"};
        `:n==="right"?S`
          right: 0;
          transform: ${d?"translate(0px)":"translateX(100%)"};
        `:""}

  @media (prefers-reduced-motion: no-preference) {
    transition: transform 0.5s;
  }

  &:focus-visible,
  &.focus-visible {
    ${de}
  }
`,ye=R.div`
  display: flex;
  flex-direction: column;
  gap: ${A.gap};
  padding: ${A.padding};
`,De=R.div``,Te=R(a)`
  align-self: flex-end;
`,s=l.forwardRef((n,d)=>{const{children:y,onClose:o,header:p,isOpen:i=!1,placement:D="right",parentElement:T=document.body,size:w="small",triggerRef:g,id:G,className:C,htmlProps:P,...E}=n,f=l.useId(),j=G??`${f}-drawer`,$=!!p,B=$?`${j}-header`:void 0,I=te(i),U=ae(d,I);ie(["Esc","Escape"],()=>{var O;i&&(g&&((O=g.current)==null||O.focus()),o&&o())});const z=[I.current];g&&z.push(g.current),le(z,()=>i&&o&&o());const H=se(i,500),Y={...pe(j,C,P,E),placement:D,ref:U,isOpen:H&&i,tabIndex:-1,role:"dialog","aria-labelledby":B,size:w},Z={id:B};return i||H?re.createPortal(t(be,{...Y,elevation:4,children:[e(oe,{children:t(ye,{children:[$&&e(De,{...Z,children:typeof p=="string"?e(r,{typographyType:"headingSans03",children:p}):p}),y]})}),e(Te,{"data-testid":"drawer-close-btn",size:"small",purpose:"secondary",appearance:"borderless",onClick:o,"aria-label":"Lukk",icon:ge})]}),T):null});s.displayName="Drawer";const m=({children:n,drawerId:d,onOpen:y,onClose:o})=>{const p=l.useId(),i=d??`${p}-drawer`,D=l.useRef(null),[T,w]=l.useState(!0),g=()=>w(!1),G=()=>w(!0),C=()=>{g(),y&&y()},P=()=>{G(),o&&o()},E=l.Children.map(n,(f,j)=>l.isValidElement(f)&&(j===0?l.cloneElement(f,{"aria-haspopup":"dialog","aria-controls":i,"aria-expanded":!T,ref:D,onClick:C}):l.cloneElement(f,{id:i,triggerRef:D,isOpen:!T,onClose:P})));return t(ne,{children:[" ",E," "]})};m.displayName="DrawerGroup";const we={title:"dds-components/Drawer",component:s},v=n=>t(x,{title:"Drawer - placement overview",children:[t(m,{children:[e(a,{label:"Åpne høyre"}),t(s,{...n,header:"Tittel",children:["Innhold",e(a,{label:"Gjør noe"})]})]}),t(m,{children:[e(a,{label:"Åpne venstre"}),t(s,{...n,header:"Tittel",placement:"left",children:["Innhold",e(a,{label:"Gjør noe"})]})]})]}),u=n=>t(x,{title:"Drawer - size overview",children:[t(m,{children:[e(a,{label:"Åpne liten"}),t(s,{...n,header:"Rettsmekling",children:[e(r,{children:"En sivil tvist kan løses ved hjelp av rettsmekling i stedet for hovedforhandling og dom. Det går ut på at partene kommer fram til en avtale, kalt rettsforlik, ved hjelp av en mekler. Dette er en raskere, mer effektiv og billigere måte å løse konflikten på."}),e(r,{typographyType:"headingSans02",children:"Hva er rettsmekling?"}),e(r,{children:"Rettsmekling går ut på at partene selv finner en løsning på konflikten ved å bruke en mekler (vanligvis en dommer i domstolen som behandler saken). Avtalen man kommer fram til, blir rettskraftig på lik linje med en dom. Rettsmekling kan bare brukes i sivile saker, ikke i straffesaker."}),e(a,{label:"Gjør noe"})]})]}),t(m,{children:[e(a,{label:"Åpne medium"}),t(s,{...n,header:"Rettsmekling",size:"medium",children:[e(r,{children:"En sivil tvist kan løses ved hjelp av rettsmekling i stedet for hovedforhandling og dom. Det går ut på at partene kommer fram til en avtale, kalt rettsforlik, ved hjelp av en mekler. Dette er en raskere, mer effektiv og billigere måte å løse konflikten på."}),e(r,{typographyType:"headingSans02",children:"Hva er rettsmekling?"}),e(r,{children:"Rettsmekling går ut på at partene selv finner en løsning på konflikten ved å bruke en mekler (vanligvis en dommer i domstolen som behandler saken). Avtalen man kommer fram til, blir rettskraftig på lik linje med en dom. Rettsmekling kan bare brukes i sivile saker, ikke i straffesaker."}),e(a,{label:"Gjør noe"})]})]}),t(m,{children:[e(a,{label:"Åpne stor"}),t(s,{...n,header:"Rettsmekling",size:"large",children:[e(r,{children:"En sivil tvist kan løses ved hjelp av rettsmekling i stedet for hovedforhandling og dom. Det går ut på at partene kommer fram til en avtale, kalt rettsforlik, ved hjelp av en mekler. Dette er en raskere, mer effektiv og billigere måte å løse konflikten på."}),e(r,{typographyType:"headingSans02",children:"Hva er rettsmekling?"}),e(r,{children:"Rettsmekling går ut på at partene selv finner en løsning på konflikten ved å bruke en mekler (vanligvis en dommer i domstolen som behandler saken). Avtalen man kommer fram til, blir rettskraftig på lik linje med en dom. Rettsmekling kan bare brukes i sivile saker, ikke i straffesaker."}),e(a,{label:"Gjør noe"})]})]})]}),c=n=>e(x,{title:"Drawer - default",children:t(m,{children:[e(a,{label:"Åpne"}),t(s,{...n,header:"Tittel",children:["Innhold",e(a,{label:"Gjør noe"})]})]})}),b=n=>e(x,{title:"Drawer - long content",children:t(m,{children:[e(a,{label:"Åpne"}),t(s,{...n,header:"Rettsmekling",children:[e(r,{children:"En sivil tvist kan løses ved hjelp av rettsmekling i stedet for hovedforhandling og dom. Det går ut på at partene kommer fram til en avtale, kalt rettsforlik, ved hjelp av en mekler. Dette er en raskere, mer effektiv og billigere måte å løse konflikten på."}),e(r,{typographyType:"headingSans02",children:"Hva er rettsmekling?"}),e(r,{children:"Rettsmekling går ut på at partene selv finner en løsning på konflikten ved å bruke en mekler (vanligvis en dommer i domstolen som behandler saken). Avtalen man kommer fram til, blir rettskraftig på lik linje med en dom. Rettsmekling kan bare brukes i sivile saker, ikke i straffesaker."}),e(r,{typographyType:"headingSans02",children:"Hva er fordelene med rettsmekling?"}),e(r,{children:"Formålet med rettsmekling er at partene blir enige om en løsning som alle partene kan leve med. En mekler hjelper partene til å komme fram til enighet ved å få innblikk i hva slags interesser og behov partene har, og vil prøve å skape en dialog preget av forståelse og enighet. Det innebærer som regel at partene må være innstilt på et kompromiss sammenlignet med sitt opprinnelige standpunkt."}),e(r,{children:'I et meklingsresultat blir ingen av partene "vinner" eller "taper". Hensikten er at begge parter skal vinne på denne metoden og at resultatet blir lettere å leve med i ettertid.'}),e(r,{children:"Rettsmekling egner seg derfor særlig godt som metode hvis partene fortsatt skal ha kontakt i tiden framover (for eksempel forretningsforbindelser, naboer eller i arbeids- og husleieforhold). Rettsmekling kan uansett være et godt alternativ også i de fleste andre typer konflikter. En mekling er raskere, enklere og vanligvis billigere for partene enn ordinær domstolsbehandling."}),e(r,{children:"Gjennom meklingen bidrar dommeren til å sette partenes faktiske interesser og behov i fokus, mer enn de rent juridiske argumentene. Dermed blir det også lettere å finne en skreddersydd løsning på tvisten. Andre tema enn det saken gjelder kan trekkes inn i rettsmeklingen. Dette gjør at rettsmeklingen kan bidra til løsning av flere konflikter mellom partene enn det saken i utgangspunktet gjelder."}),e(r,{children:"Rettsmekling foregår for lukkede dører og uten rettsmøte. Partene unngår dermed den publisiteten som ordinær rettsbehandling kan medføre."}),e(a,{label:"Gjør noe"})]})]})});var L,N,X;v.parameters={...v.parameters,docs:{...(L=v.parameters)==null?void 0:L.docs,source:{originalSource:`(args: DrawerProps) => {
  return <StoryTemplate title="Drawer - placement overview">
      <DrawerGroup>
        <Button label="Åpne høyre" />
        <Drawer {...args} header="Tittel">
          Innhold
          <Button label="Gjør noe" />
        </Drawer>
      </DrawerGroup>
      <DrawerGroup>
        <Button label="Åpne venstre" />
        <Drawer {...args} header="Tittel" placement="left">
          Innhold
          <Button label="Gjør noe" />
        </Drawer>
      </DrawerGroup>
    </StoryTemplate>;
}`,...(X=(N=v.parameters)==null?void 0:N.docs)==null?void 0:X.source}}};var _,F,M;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`(args: DrawerProps) => {
  return <StoryTemplate title="Drawer - size overview">
      <DrawerGroup>
        <Button label="Åpne liten" />
        <Drawer {...args} header="Rettsmekling">
          <Typography>
            En sivil tvist kan løses ved hjelp av rettsmekling i stedet for
            hovedforhandling og dom. Det går ut på at partene kommer fram til en
            avtale, kalt rettsforlik, ved hjelp av en mekler. Dette er en
            raskere, mer effektiv og billigere måte å løse konflikten på.
          </Typography>
          <Typography typographyType="headingSans02">
            Hva er rettsmekling?
          </Typography>
          <Typography>
            Rettsmekling går ut på at partene selv finner en løsning på
            konflikten ved å bruke en mekler (vanligvis en dommer i domstolen
            som behandler saken). Avtalen man kommer fram til, blir rettskraftig
            på lik linje med en dom. Rettsmekling kan bare brukes i sivile
            saker, ikke i straffesaker.
          </Typography>
          <Button label="Gjør noe" />
        </Drawer>
      </DrawerGroup>
      <DrawerGroup>
        <Button label="Åpne medium" />
        <Drawer {...args} header="Rettsmekling" size="medium">
          <Typography>
            En sivil tvist kan løses ved hjelp av rettsmekling i stedet for
            hovedforhandling og dom. Det går ut på at partene kommer fram til en
            avtale, kalt rettsforlik, ved hjelp av en mekler. Dette er en
            raskere, mer effektiv og billigere måte å løse konflikten på.
          </Typography>
          <Typography typographyType="headingSans02">
            Hva er rettsmekling?
          </Typography>
          <Typography>
            Rettsmekling går ut på at partene selv finner en løsning på
            konflikten ved å bruke en mekler (vanligvis en dommer i domstolen
            som behandler saken). Avtalen man kommer fram til, blir rettskraftig
            på lik linje med en dom. Rettsmekling kan bare brukes i sivile
            saker, ikke i straffesaker.
          </Typography>
          <Button label="Gjør noe" />
        </Drawer>
      </DrawerGroup>
      <DrawerGroup>
        <Button label="Åpne stor" />
        <Drawer {...args} header="Rettsmekling" size="large">
          <Typography>
            En sivil tvist kan løses ved hjelp av rettsmekling i stedet for
            hovedforhandling og dom. Det går ut på at partene kommer fram til en
            avtale, kalt rettsforlik, ved hjelp av en mekler. Dette er en
            raskere, mer effektiv og billigere måte å løse konflikten på.
          </Typography>
          <Typography typographyType="headingSans02">
            Hva er rettsmekling?
          </Typography>
          <Typography>
            Rettsmekling går ut på at partene selv finner en løsning på
            konflikten ved å bruke en mekler (vanligvis en dommer i domstolen
            som behandler saken). Avtalen man kommer fram til, blir rettskraftig
            på lik linje med en dom. Rettsmekling kan bare brukes i sivile
            saker, ikke i straffesaker.
          </Typography>
          <Button label="Gjør noe" />
        </Drawer>
      </DrawerGroup>
    </StoryTemplate>;
}`,...(M=(F=u.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var q,V,K;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`(args: DrawerProps) => {
  return <StoryTemplate title="Drawer - default">
      <DrawerGroup>
        <Button label="Åpne" />
        <Drawer {...args} header="Tittel">
          Innhold
          <Button label="Gjør noe" />
        </Drawer>
      </DrawerGroup>
    </StoryTemplate>;
}`,...(K=(V=c.parameters)==null?void 0:V.docs)==null?void 0:K.source}}};var W,J,Q;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`(args: DrawerProps) => {
  return <StoryTemplate title="Drawer - long content">
      <DrawerGroup>
        <Button label="Åpne" />
        <Drawer {...args} header="Rettsmekling">
          <Typography>
            En sivil tvist kan løses ved hjelp av rettsmekling i stedet for
            hovedforhandling og dom. Det går ut på at partene kommer fram til en
            avtale, kalt rettsforlik, ved hjelp av en mekler. Dette er en
            raskere, mer effektiv og billigere måte å løse konflikten på.
          </Typography>
          <Typography typographyType="headingSans02">
            Hva er rettsmekling?
          </Typography>
          <Typography>
            Rettsmekling går ut på at partene selv finner en løsning på
            konflikten ved å bruke en mekler (vanligvis en dommer i domstolen
            som behandler saken). Avtalen man kommer fram til, blir rettskraftig
            på lik linje med en dom. Rettsmekling kan bare brukes i sivile
            saker, ikke i straffesaker.
          </Typography>
          <Typography typographyType="headingSans02">
            Hva er fordelene med rettsmekling?
          </Typography>
          <Typography>
            Formålet med rettsmekling er at partene blir enige om en løsning som
            alle partene kan leve med. En mekler hjelper partene til å komme
            fram til enighet ved å få innblikk i hva slags interesser og behov
            partene har, og vil prøve å skape en dialog preget av forståelse og
            enighet. Det innebærer som regel at partene må være innstilt på et
            kompromiss sammenlignet med sitt opprinnelige standpunkt.
          </Typography>
          <Typography>
            I et meklingsresultat blir ingen av partene "vinner" eller "taper".
            Hensikten er at begge parter skal vinne på denne metoden og at
            resultatet blir lettere å leve med i ettertid.
          </Typography>
          <Typography>
            Rettsmekling egner seg derfor særlig godt som metode hvis partene
            fortsatt skal ha kontakt i tiden framover (for eksempel
            forretningsforbindelser, naboer eller i arbeids- og husleieforhold).
            Rettsmekling kan uansett være et godt alternativ også i de fleste
            andre typer konflikter. En mekling er raskere, enklere og vanligvis
            billigere for partene enn ordinær domstolsbehandling.
          </Typography>
          <Typography>
            Gjennom meklingen bidrar dommeren til å sette partenes faktiske
            interesser og behov i fokus, mer enn de rent juridiske argumentene.
            Dermed blir det også lettere å finne en skreddersydd løsning på
            tvisten. Andre tema enn det saken gjelder kan trekkes inn i
            rettsmeklingen. Dette gjør at rettsmeklingen kan bidra til løsning
            av flere konflikter mellom partene enn det saken i utgangspunktet
            gjelder.
          </Typography>
          <Typography>
            Rettsmekling foregår for lukkede dører og uten rettsmøte. Partene
            unngår dermed den publisiteten som ordinær rettsbehandling kan
            medføre.
          </Typography>
          <Button label="Gjør noe" />
        </Drawer>
      </DrawerGroup>
    </StoryTemplate>;
}`,...(Q=(J=b.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const je=["OverviewPlacement","OverviewSizes","Default","LongContent"],Xe=Object.freeze(Object.defineProperty({__proto__:null,Default:c,LongContent:b,OverviewPlacement:v,OverviewSizes:u,__namedExportsOrder:je,default:we},Symbol.toStringTag,{value:"Module"}));export{Xe as D,c as a,m as b};
//# sourceMappingURL=Drawer.stories-906f3a9d.js.map
