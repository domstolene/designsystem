import{d as ee,s as R,A as S,j as t,a as e,F as ne}from"./ddsReferenceTokens-f1d35829.js";import{R as x}from"./storybook-components-e6e74b30.js";import{T as r}from"./dds-typography-cc6cb429.js";import{r as i,a as re}from"./index-d47b1f5a.js";import{X as te,S as ae,O as le,_ as ie,K as se,a as oe,x as de}from"./dds-core-c67132cd.js";import{q as me}from"./dds-icons-265d9665.js";import{_ as pe}from"./dds-form-9b45fc8d.js";import{S as ge}from"./ScrollableContainer-c51c141e.js";import{B as a}from"./Button-aa30c63f.js";const{spacing:k}=ee,f=k.SizesDdsSpacingLocalX025NumberPx,ke=`${f}px`,he={padding:`${k.SizesDdsSpacingLocalX1NumberPx-f}px ${k.SizesDdsSpacingLocalX1NumberPx-f}px ${k.SizesDdsSpacingLocalX1NumberPx-f}px ${k.SizesDdsSpacingLocalX15NumberPx-f}px`},fe={gap:k.SizesDdsSpacingLocalX1,padding:ke},ve={container:he,contentContainer:fe},{container:ce,contentContainer:O}=ve,ue=n=>n==="large"?"800px":n==="medium"?"600px":"400px",be=R(de)`
  position: fixed;
  top: 0;
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  min-width: 300px;
  z-index: 100;
  padding: ${ce.padding};

  ${({size:n})=>S`
    max-width: ${ue(n)};
  `}

  ${({widthProps:n})=>n&&S`
      ${n}
    `}

  ${({placement:n,isOpen:m})=>n==="left"?S`
          left: 0;
          transform: ${m?"translate(0px)":"translateX(-100%)"};
        `:n==="right"?S`
          right: 0;
          transform: ${m?"translate(0px)":"translateX(100%)"};
        `:""}

  @media (prefers-reduced-motion: no-preference) {
    transition: transform 0.5s;
  }

  &:focus-visible,
  &.focus-visible {
    ${pe}
  }
`,ye=R.div`
  display: flex;
  flex-direction: column;
  gap: ${O.gap};
  padding: ${O.padding};
`,De=R.div``,Te=R(a)`
  align-self: flex-end;
`,s=i.forwardRef((n,m)=>{const{children:y,onClose:o,header:p,isOpen:l=!1,placement:D="right",parentElement:T=document.body,size:w="small",triggerRef:g,id:G,className:E,htmlProps:$,...C}=n,h=i.useId(),j=G??`${h}-drawer`,P=!!p,B=P?`${j}-header`:void 0,z=te(l),U=ae(m,z);le(["Esc","Escape"],()=>{var A;l&&(g&&((A=g.current)==null||A.focus()),o&&o())});const I=[z.current];g&&I.push(g.current),ie(I,()=>l&&o&&o());const H=se(l,500),Y={...oe(j,E,$,C),placement:D,ref:U,isOpen:H&&l,tabIndex:-1,role:"dialog","aria-labelledby":B,size:w},Z={id:B};return l||H?re.createPortal(t(be,{...Y,elevation:4,children:[e(ge,{children:t(ye,{children:[P&&e(De,{...Z,children:typeof p=="string"?e(r,{typographyType:"headingSans03",children:p}):p}),y]})}),e(Te,{"data-testid":"drawer-close-btn",size:"small",purpose:"secondary",appearance:"borderless",onClick:o,"aria-label":"Lukk",icon:me})]}),T):null});s.displayName="Drawer";const d=({children:n,drawerId:m,onOpen:y,onClose:o})=>{const p=i.useId(),l=m??`${p}-drawer`,D=i.useRef(null),[T,w]=i.useState(!0),g=()=>w(!1),G=()=>w(!0),E=()=>{g(),y&&y()},$=()=>{G(),o&&o()},C=i.Children.map(n,(h,j)=>i.isValidElement(h)&&(j===0?i.cloneElement(h,{"aria-haspopup":"dialog","aria-controls":l,"aria-expanded":!T,ref:D,onClick:E}):i.cloneElement(h,{id:l,triggerRef:D,isOpen:!T,onClose:$})));return t(ne,{children:[" ",C," "]})};d.displayName="DrawerGroup";const we={title:"dds-components/Drawer",component:s},v=n=>t(x,{title:"Drawer - placement overview",children:[t(d,{children:[e(a,{label:"Åpne høyre"}),t(s,{...n,header:"Tittel",children:["Innhold",e(a,{label:"Gjør noe"})]})]}),t(d,{children:[e(a,{label:"Åpne venstre"}),t(s,{...n,header:"Tittel",placement:"left",children:["Innhold",e(a,{label:"Gjør noe"})]})]})]}),c=n=>t(x,{title:"Drawer - size overview",children:[t(d,{children:[e(a,{label:"Åpne liten"}),t(s,{...n,header:"Rettsmekling",children:[e(r,{children:"En sivil tvist kan løses ved hjelp av rettsmekling i stedet for hovedforhandling og dom. Det går ut på at partene kommer fram til en avtale, kalt rettsforlik, ved hjelp av en mekler. Dette er en raskere, mer effektiv og billigere måte å løse konflikten på."}),e(r,{typographyType:"headingSans02",children:"Hva er rettsmekling?"}),e(r,{children:"Rettsmekling går ut på at partene selv finner en løsning på konflikten ved å bruke en mekler (vanligvis en dommer i domstolen som behandler saken). Avtalen man kommer fram til, blir rettskraftig på lik linje med en dom. Rettsmekling kan bare brukes i sivile saker, ikke i straffesaker."}),e(a,{label:"Gjør noe"})]})]}),t(d,{children:[e(a,{label:"Åpne medium"}),t(s,{...n,header:"Rettsmekling",size:"medium",children:[e(r,{children:"En sivil tvist kan løses ved hjelp av rettsmekling i stedet for hovedforhandling og dom. Det går ut på at partene kommer fram til en avtale, kalt rettsforlik, ved hjelp av en mekler. Dette er en raskere, mer effektiv og billigere måte å løse konflikten på."}),e(r,{typographyType:"headingSans02",children:"Hva er rettsmekling?"}),e(r,{children:"Rettsmekling går ut på at partene selv finner en løsning på konflikten ved å bruke en mekler (vanligvis en dommer i domstolen som behandler saken). Avtalen man kommer fram til, blir rettskraftig på lik linje med en dom. Rettsmekling kan bare brukes i sivile saker, ikke i straffesaker."}),e(a,{label:"Gjør noe"})]})]}),t(d,{children:[e(a,{label:"Åpne stor"}),t(s,{...n,header:"Rettsmekling",size:"large",children:[e(r,{children:"En sivil tvist kan løses ved hjelp av rettsmekling i stedet for hovedforhandling og dom. Det går ut på at partene kommer fram til en avtale, kalt rettsforlik, ved hjelp av en mekler. Dette er en raskere, mer effektiv og billigere måte å løse konflikten på."}),e(r,{typographyType:"headingSans02",children:"Hva er rettsmekling?"}),e(r,{children:"Rettsmekling går ut på at partene selv finner en løsning på konflikten ved å bruke en mekler (vanligvis en dommer i domstolen som behandler saken). Avtalen man kommer fram til, blir rettskraftig på lik linje med en dom. Rettsmekling kan bare brukes i sivile saker, ikke i straffesaker."}),e(a,{label:"Gjør noe"})]})]})]}),u=n=>e(x,{title:"Drawer - default",children:t(d,{children:[e(a,{label:"Åpne"}),t(s,{...n,header:"Tittel",children:["Innhold",e(a,{label:"Gjør noe"})]})]})}),b=n=>e(x,{title:"Drawer - long content",children:t(d,{children:[e(a,{label:"Åpne"}),t(s,{...n,header:"Rettsmekling",children:[e(r,{children:"En sivil tvist kan løses ved hjelp av rettsmekling i stedet for hovedforhandling og dom. Det går ut på at partene kommer fram til en avtale, kalt rettsforlik, ved hjelp av en mekler. Dette er en raskere, mer effektiv og billigere måte å løse konflikten på."}),e(r,{typographyType:"headingSans02",children:"Hva er rettsmekling?"}),e(r,{children:"Rettsmekling går ut på at partene selv finner en løsning på konflikten ved å bruke en mekler (vanligvis en dommer i domstolen som behandler saken). Avtalen man kommer fram til, blir rettskraftig på lik linje med en dom. Rettsmekling kan bare brukes i sivile saker, ikke i straffesaker."}),e(r,{typographyType:"headingSans02",children:"Hva er fordelene med rettsmekling?"}),e(r,{children:"Formålet med rettsmekling er at partene blir enige om en løsning som alle partene kan leve med. En mekler hjelper partene til å komme fram til enighet ved å få innblikk i hva slags interesser og behov partene har, og vil prøve å skape en dialog preget av forståelse og enighet. Det innebærer som regel at partene må være innstilt på et kompromiss sammenlignet med sitt opprinnelige standpunkt."}),e(r,{children:'I et meklingsresultat blir ingen av partene "vinner" eller "taper". Hensikten er at begge parter skal vinne på denne metoden og at resultatet blir lettere å leve med i ettertid.'}),e(r,{children:"Rettsmekling egner seg derfor særlig godt som metode hvis partene fortsatt skal ha kontakt i tiden framover (for eksempel forretningsforbindelser, naboer eller i arbeids- og husleieforhold). Rettsmekling kan uansett være et godt alternativ også i de fleste andre typer konflikter. En mekling er raskere, enklere og vanligvis billigere for partene enn ordinær domstolsbehandling."}),e(r,{children:"Gjennom meklingen bidrar dommeren til å sette partenes faktiske interesser og behov i fokus, mer enn de rent juridiske argumentene. Dermed blir det også lettere å finne en skreddersydd løsning på tvisten. Andre tema enn det saken gjelder kan trekkes inn i rettsmeklingen. Dette gjør at rettsmeklingen kan bidra til løsning av flere konflikter mellom partene enn det saken i utgangspunktet gjelder."}),e(r,{children:"Rettsmekling foregår for lukkede dører og uten rettsmøte. Partene unngår dermed den publisiteten som ordinær rettsbehandling kan medføre."}),e(a,{label:"Gjør noe"})]})]})});var X,_,L;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`(args: DrawerProps) => {
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
}`,...(L=(_=v.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var N,F,q;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`(args: DrawerProps) => {
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
}`,...(q=(F=c.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};var K,M,Q;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`(args: DrawerProps) => {
  return <StoryTemplate title="Drawer - default">
      <DrawerGroup>
        <Button label="Åpne" />
        <Drawer {...args} header="Tittel">
          Innhold
          <Button label="Gjør noe" />
        </Drawer>
      </DrawerGroup>
    </StoryTemplate>;
}`,...(Q=(M=u.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};var V,W,J;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`(args: DrawerProps) => {
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
}`,...(J=(W=b.parameters)==null?void 0:W.docs)==null?void 0:J.source}}};const je=["OverviewPlacement","OverviewSizes","Default","LongContent"],ze=Object.freeze(Object.defineProperty({__proto__:null,Default:u,LongContent:b,OverviewPlacement:v,OverviewSizes:c,__namedExportsOrder:je,default:we},Symbol.toStringTag,{value:"Module"}));export{ze as D,u as a,d as b};
//# sourceMappingURL=Drawer.stories-142aef51.js.map
