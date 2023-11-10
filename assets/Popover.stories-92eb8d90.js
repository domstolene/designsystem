import{j as r,a as t,F as oe}from"./jsx-runtime-e43ccb36.js";import{S as w}from"./StoryTemplate-63bfa922.js";import"./Caption-a006c5bc.js";import"./Heading-3ac6a2d9.js";import"./Label-60a960ab.js";import"./Legend-bad3d4ec.js";import"./Link-bef7f478.js";import"./Paragraph-f6678e05.js";import"./TextOverflowEllipsis-c2a9fc8f.js";import{T as g}from"./Typography-9d6edb9c.js";import{d as S,s as C,n as Y,a as re}from"./ddsReferenceTokens-fe3c594e.js";import{o as ne,v as ie,b as le,e as ae,l as se,g as pe,P as de,f as ue}from"./BaseComponentProps-b46a4458.js";import{r as ce}from"./removeButtonStyling-867d6ba4.js";import{r as s}from"./index-1b03fe98.js";import{u as me}from"./useFloatPosition-8db71a9f.js";import{C as ve}from"./libraryAdd-dfc2ed03.js";import"./Icon-e72250a3.js";import{f as fe}from"./Input.styles-c3e229ec.js";import{B as p}from"./Button-7239ff93.js";function ge(e,n,d){const i=s.useRef(null);return s.useEffect(()=>{function h(l){if(l.key!=="Tab"||!e||!i.current||!d)return;const c=ne(i),a=c[c.length-1],k=c[0];(!l.shiftKey&&document.activeElement===a||l.shiftKey&&document.activeElement===k||l.shiftKey&&document.activeElement===o)&&(d.focus(),l.preventDefault(),n())}const o=i.current;return o&&e&&(o.focus(),o.addEventListener("keydown",h)),()=>{o==null||o.removeEventListener("keydown",h)}},[e]),i}const{spacing:f}=S,he={padding:`${f.SizesDdsSpacingLocalX075} ${f.SizesDdsSpacingLocalX1} ${f.SizesDdsSpacingLocalX15} ${f.SizesDdsSpacingLocalX1}`},ke={top:f.SizesDdsSpacingLocalX025,right:f.SizesDdsSpacingLocalX025},ye={marginRight:f.SizesDdsSpacingLocalX2},Pe={noTitle:{marginTop:f.SizesDdsSpacingLocalX2}},xe={content:Pe,wrapper:he,closeButton:ke,title:ye},{spacing:Te}=S,{wrapper:Be,content:be,closeButton:M,title:Se}=xe,we=C(de)`
  opacity: 0;
  ${({hasTransitionedIn:e,isOpen:n})=>e&&ie(e&&n)}
  position: absolute;
  width: fit-content;
  z-index: 100;
  padding: ${Be.padding};

  &:focus-visible {
    ${fe}
  }
  ${({sizeProps:e})=>e&&Y`
      width: ${e.width};
      height: ${e.height};
      min-width: ${e.minWidth};
      min-height: ${e.minHeight};
      max-width: ${e.maxWidth};
      max-height: ${e.maxHeight};
    `}
`,Ce=C.div`
  margin-right: ${Se.marginRight};
`,De=C.div`
  ${({withCloseButton:e,hasTitle:n})=>e&&!n&&Y`
      margin-top: ${be.noTitle.marginTop};
    `}
`,Ee=C(p)`
  position: absolute;
  top: ${M.top};
  right: ${M.right};
`,u=s.forwardRef((e,n)=>{const{title:d,isOpen:i=!1,withCloseButton:h=!0,onBlur:o,onCloseButtonClick:l,onClose:c,anchorElement:a,children:k,placement:$="bottom",offset:y=Te.SizesDdsSpacingLocalX05NumberPx,id:O,className:_,htmlProps:D={},...v}=e,E=ge(i,()=>{c&&c(),o&&o()},a&&a),{refs:V,styles:Z}=me(null,{placement:$,offset:y}),ee=le(n,E,V.setFloating);s.useEffect(()=>{a?V.setReference(a):V.setReference(null)},[a]);const G=[E.current];a&&G.push(a),ae(G,()=>{i&&c&&c()});const j=se(i,400),te={...pe(O,_,D,v),ref:ee,isOpen:i,hasTransitionedIn:j,tabIndex:-1,style:{...D.style,...Z.floating},role:"dialog"};return i||j?r(we,{...te,elevation:3,border:"light",children:[d&&t(Ce,{children:typeof d=="string"?t(g,{typographyType:"headingSans02",children:d}):d}),t(De,{hasTitle:!!d,withCloseButton:h,children:k}),h&&t(Ee,{icon:ve,appearance:"borderless",purpose:"secondary",size:"small",onClick:l,"aria-label":"Lukk"})]}):null});u.displayName="Popover";try{u.displayName="Popover",u.__docgenInfo={description:"",displayName:"Popover",props:{title:{defaultValue:null,description:"Tittel.",name:"title",required:!1,type:{name:"ReactNode"}},isOpen:{defaultValue:null,description:"**OBS!** Propen settes automatisk av `<PopoverGroup />`. Spesifiserer om `<Popover />` skal vises.",name:"isOpen",required:!1,type:{name:"boolean | undefined"}},withCloseButton:{defaultValue:null,description:"Om lukkeknapp skal vises.",name:"withCloseButton",required:!1,type:{name:"boolean | undefined"}},anchorElement:{defaultValue:null,description:"**OBS!** Propen settes automatisk av `<PopoverGroup />`. Anchor-elementet.",name:"anchorElement",required:!1,type:{name:"HTMLElement | undefined"}},placement:{defaultValue:null,description:"Spesifiserer hvor komponenten skal plasseres i forhold til anchor-elementet.",name:"placement",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"left"'},{value:'"right"'},{value:'"bottom"'},{value:'"top"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},offset:{defaultValue:null,description:"Avstand fra anchor-elementet i px.",name:"offset",required:!1,type:{name:"number | undefined"}},onCloseButtonClick:{defaultValue:null,description:"Ekstra logikk kjørt når lukkeknappen trykkes.",name:"onCloseButtonClick",required:!1,type:{name:"(() => void) | undefined"}},onBlur:{defaultValue:null,description:"Ekstra logikk kjørt når popover mister fokus.",name:"onBlur",required:!1,type:{name:"(() => void) | undefined"}},sizeProps:{defaultValue:null,description:"Custom størrelse.",name:"sizeProps",required:!1,type:{name:"PopoverSizeProps | undefined"}},onClose:{defaultValue:null,description:"**OBS!** Propen settes automatisk av `<PopoverGroup />`. Funksjon kjørt ved lukking.",name:"onClose",required:!1,type:{name:"(() => void) | undefined"}},htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:"HTMLAttributes<HTMLDivElement> | undefined"}}}}}catch{}const m=({isOpen:e=!1,onCloseButtonClick:n,onTriggerClick:d,children:i,popoverId:h})=>{const[o,l]=s.useState(e),c=s.useId(),a=h??`${c}-popover`,k=()=>{l(!1),n&&n()},$=()=>{l(!o),d&&d()},y=s.useRef(null),O=s.useRef(null);ue(["Esc","Escape"],()=>{var v;o&&(l(!1),(v=y.current)==null||v.focus())});const _=()=>l(!1),D=s.Children.map(i,(v,E)=>s.isValidElement(v)&&(E===0?s.cloneElement(v,{"aria-haspopup":"dialog","aria-controls":a,"aria-expanded":o,onClick:$,ref:y}):s.cloneElement(v,{isOpen:o,"aria-hidden":!o,id:a,onCloseButtonClick:k,anchorElement:y.current,ref:O,onClose:_})));return t(oe,{children:D})};m.displayName="PopoverGroup";try{m.displayName="PopoverGroup",m.__docgenInfo={description:"",displayName:"PopoverGroup",props:{onCloseButtonClick:{defaultValue:null,description:"Callback når det trykkes på lukkeknappen.",name:"onCloseButtonClick",required:!1,type:{name:"(() => void) | undefined"}},onTriggerClick:{defaultValue:null,description:"Callback når det trykkes på anchor-elementet (trigger-elementet).",name:"onTriggerClick",required:!1,type:{name:"(() => void) | undefined"}},isOpen:{defaultValue:{value:"false"},description:"Forteller `<Popover />` om den skal være åpen.",name:"isOpen",required:!1,type:{name:"boolean | undefined"}},popoverId:{defaultValue:null,description:"`id` til `<Popover />.`",name:"popoverId",required:!1,type:{name:"string | undefined"}},children:{defaultValue:null,description:"Barna til wrapperen: anchor-element som det første og `<Popover />` so det adnre.",name:"children",required:!0,type:{name:"ReactNode"}}}}}catch{}const $e={title:"dds-components/Popover",component:u,argTypes:{withCloseButton:{control:{type:"boolean"}},placement:{control:{type:"text"}},title:{control:{type:"text"}},offset:{control:{type:"number"}}},parameters:{controls:{exclude:["onCloseButton","anchorElement"]}}},P=e=>r(w,{title:"Popover - content overview",display:"grid",children:[t("div",{children:r(m,{children:[t(p,{children:"Åpne"}),t(u,{...e,title:"Tittel",children:r("div",{style:{display:"flex",flexDirection:"column",paddingTop:"16px"},children:[t(g,{withMargins:!0,children:"Dette er en popover med tittel, innhold og lukkeknapp"}),t(p,{children:"Klikk"})]})})]})}),t("div",{children:r(m,{children:[t(p,{children:"Åpne"}),t(u,{...e,title:"Tittel",withCloseButton:!1,children:r("div",{style:{display:"flex",flexDirection:"column"},children:[t(g,{withMargins:!0,children:"Dette er en popover med tittel og innhold"}),t(p,{children:"Klikk"})]})})]})}),t("div",{children:r(m,{children:[t(p,{children:"Åpne"}),t(u,{...e,children:r("div",{style:{display:"flex",flexDirection:"column"},children:[t(g,{withMargins:!0,children:"Dette er en popover med innhold og lukkeknapp"}),t(p,{children:"Klikk"})]})})]})})]}),x=()=>{const e=n=>t("div",{children:r(m,{children:[t(p,{children:"Åpne"}),t(u,{placement:n,children:n})]})});return r(w,{title:"Popover - placement overview",display:"grid",columnsAmount:4,containerStyle:{alignContent:"center",justifyContent:"center",padding:"150px 40px 200px 40px"},children:[e("top-start"),e("bottom-start"),e("left-start"),e("right-start"),e("top"),e("bottom"),e("right"),e("left"),e("top-end"),e("bottom-end"),e("right-end"),e("left-end")]})},T=e=>t(w,{title:"Popover - default",display:"block",children:r(m,{children:[t(p,{children:"Åpne"}),t(u,{...e,children:r("div",{style:{display:"flex",flexDirection:"column"},children:[t(g,{withMargins:!0,children:"Dette er en popover med tekst og knapp"}),t(p,{children:"Klikk"})]})})]})}),B=e=>t(w,{title:"Popover - overflow",display:"block",children:r(m,{children:[t(p,{children:"Åpne"}),t(u,{...e,sizeProps:{maxWidth:"150px",maxHeight:"200px"},children:r("div",{style:{display:"flex",flexDirection:"column"},children:[t(g,{withMargins:!0,style:{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},children:"Dette er en popover med tekst og knapp"}),t(p,{children:"Klikk"})]})})]})}),b=e=>{const n=C.button`
    ${ce}
    user-select: text;
    text-decoration: underline;
    color: ${S.colors.DdsColorInteractiveBase};
    &:hover {
      color: ${S.colors.DdsColorInteractiveDark};
    }
    &:focus {
      color: ${S.colors.DdsColorNeutralsWhite};
      background-color: ${re.focus.colorDefault};
      text-decoration: none;
    }
  `;return t(w,{title:"Popover - inline example",display:"block",children:r(g,{children:["Når du kommer til domstolen er det viktig at du finner rettssalen der innkallingen sier du skal møte. Vent utenfor salen, du blir hentet når det er din tur. Vær forberedt på å vente, siden rettssaken allerede er i gang når du skal inn. Før du og andre vitner slipper til, skal retten få en redegjørelse fra"," ",r(m,{children:[t(n,{children:"advokatene"}),t(u,{...e,title:"Advokat",children:t(g,{withMargins:!0,children:"Dette er en definisjon"})})]})," ","(eller fra aktor i straffesaker) om hva saken gjelder og hva man er uenige om. Deretter skal partene (i sivile saker) eller tiltalte (i straffesaker) gi sin forklaring. Dette får vitner ikke høre på fordi de skal være upåvirket av det som er sagt tidligere i saken. Det er vanskelig å beregne hvor lang tid dette tar. Hvis spesielle årsaker gjør det vanskelig for deg å vente, så ta det opp på forhånd med den som har innkalt deg."]})})};var R,q,L;P.parameters={...P.parameters,docs:{...(R=P.parameters)==null?void 0:R.docs,source:{originalSource:`(args: PopoverProps) => {
  return <StoryTemplate title="Popover - content overview" display="grid">
      <div>
        <PopoverGroup>
          <Button>Åpne</Button>
          <Popover {...args} title="Tittel">
            <div style={{
            display: 'flex',
            flexDirection: 'column',
            paddingTop: '16px'
          }}>
              <Typography withMargins>
                Dette er en popover med tittel, innhold og lukkeknapp
              </Typography>
              <Button>Klikk</Button>
            </div>
          </Popover>
        </PopoverGroup>
      </div>
      <div>
        <PopoverGroup>
          <Button>Åpne</Button>
          <Popover {...args} title="Tittel" withCloseButton={false}>
            <div style={{
            display: 'flex',
            flexDirection: 'column'
          }}>
              <Typography withMargins>
                Dette er en popover med tittel og innhold
              </Typography>
              <Button>Klikk</Button>
            </div>
          </Popover>
        </PopoverGroup>
      </div>
      <div>
        <PopoverGroup>
          <Button>Åpne</Button>
          <Popover {...args}>
            <div style={{
            display: 'flex',
            flexDirection: 'column'
          }}>
              <Typography withMargins>
                Dette er en popover med innhold og lukkeknapp
              </Typography>
              <Button>Klikk</Button>
            </div>
          </Popover>
        </PopoverGroup>
      </div>
    </StoryTemplate>;
}`,...(L=(q=P.parameters)==null?void 0:q.docs)==null?void 0:L.source}}};var F,I,N;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
  const popover = (placement: Placement) => <div>
      <PopoverGroup>
        <Button>Åpne</Button>
        <Popover placement={placement}>{placement}</Popover>
      </PopoverGroup>
    </div>;
  return <StoryTemplate title="Popover - placement overview" display="grid" columnsAmount={4} containerStyle={{
    alignContent: 'center',
    justifyContent: 'center',
    padding: '150px 40px 200px 40px'
  }}>
      {popover('top-start')}
      {popover('bottom-start')}
      {popover('left-start')}
      {popover('right-start')}
      {popover('top')}
      {popover('bottom')}
      {popover('right')}
      {popover('left')}
      {popover('top-end')}
      {popover('bottom-end')}
      {popover('right-end')}
      {popover('left-end')}
    </StoryTemplate>;
}`,...(N=(I=x.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var K,z,H;T.parameters={...T.parameters,docs:{...(K=T.parameters)==null?void 0:K.docs,source:{originalSource:`(args: PopoverProps) => {
  return <StoryTemplate title="Popover - default" display="block">
      <PopoverGroup>
        <Button>Åpne</Button>
        <Popover {...args}>
          <div style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
            <Typography withMargins>
              Dette er en popover med tekst og knapp
            </Typography>
            <Button>Klikk</Button>
          </div>
        </Popover>
      </PopoverGroup>
    </StoryTemplate>;
}`,...(H=(z=T.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};var X,A,W;B.parameters={...B.parameters,docs:{...(X=B.parameters)==null?void 0:X.docs,source:{originalSource:`(args: PopoverProps) => {
  return <StoryTemplate title="Popover - overflow" display="block">
      <PopoverGroup>
        <Button>Åpne</Button>
        <Popover {...args} sizeProps={{
        maxWidth: '150px',
        maxHeight: '200px'
      }}>
          <div style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
            <Typography withMargins style={{
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap'
          }}>
              Dette er en popover med tekst og knapp
            </Typography>
            <Button>Klikk</Button>
          </div>
        </Popover>
      </PopoverGroup>
    </StoryTemplate>;
}`,...(W=(A=B.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};var U,J,Q;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`(args: PopoverProps) => {
  const Trigger = styled.button\`
    \${removeButtonStyling}
    user-select: text;
    text-decoration: underline;
    color: \${ddsBaseTokens.colors.DdsColorInteractiveBase};
    &:hover {
      color: \${ddsBaseTokens.colors.DdsColorInteractiveDark};
    }
    &:focus {
      color: \${ddsBaseTokens.colors.DdsColorNeutralsWhite};
      background-color: \${ddsReferenceTokens.focus.colorDefault};
      text-decoration: none;
    }
  \`;
  return <StoryTemplate title="Popover - inline example" display="block">
      <Typography>
        Når du kommer til domstolen er det viktig at du finner rettssalen der
        innkallingen sier du skal møte. Vent utenfor salen, du blir hentet når
        det er din tur. Vær forberedt på å vente, siden rettssaken allerede er i
        gang når du skal inn. Før du og andre vitner slipper til, skal retten få
        en redegjørelse fra{' '}
        <PopoverGroup>
          <Trigger>advokatene</Trigger>
          <Popover {...args} title="Advokat">
            <Typography withMargins>Dette er en definisjon</Typography>
          </Popover>
        </PopoverGroup>{' '}
        (eller fra aktor i straffesaker) om hva saken gjelder og hva man er
        uenige om. Deretter skal partene (i sivile saker) eller tiltalte (i
        straffesaker) gi sin forklaring. Dette får vitner ikke høre på fordi de
        skal være upåvirket av det som er sagt tidligere i saken. Det er
        vanskelig å beregne hvor lang tid dette tar. Hvis spesielle årsaker gjør
        det vanskelig for deg å vente, så ta det opp på forhånd med den som har
        innkalt deg.
      </Typography>
    </StoryTemplate>;
}`,...(Q=(J=b.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const Oe=["ContentOverview","PlacementOverview","Default","Overflow","InlineExample"],Qe=Object.freeze(Object.defineProperty({__proto__:null,ContentOverview:P,Default:T,InlineExample:b,Overflow:B,PlacementOverview:x,__namedExportsOrder:Oe,default:$e},Symbol.toStringTag,{value:"Module"}));export{Qe as P,m as a};
//# sourceMappingURL=Popover.stories-92eb8d90.js.map
