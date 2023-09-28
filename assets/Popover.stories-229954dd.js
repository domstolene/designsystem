import{d as C,s as D,A as Y,j as r,a as t,F as re,b as ne}from"./ddsReferenceTokens-647ce456.js";import{S as w}from"./StoryTemplate-28ced27f.js";import"./Caption-5c254d72.js";import"./Heading-dc72d0b9.js";import"./Label-23c96940.js";import"./Legend-dbc3ced6.js";import"./Link-9aff7843.js";import"./Paragraph-3340e0ea.js";import"./TextOverflowEllipsis-e3546c5b.js";import{T as g}from"./Typography-1747463b.js";import{o as le,v as ie,b as ae,e as se,l as pe,g as de,P as ue,f as ce}from"./BaseComponentProps-a100791d.js";import{r as me}from"./removeButtonStyling-867d6ba4.js";import{r as s}from"./index-ebeaab24.js";import{u as ve}from"./useFloatPosition-2dd03182.js";import{C as fe}from"./libraryAdd-1e72c15a.js";import"./Icon-42793503.js";import{f as ge}from"./Input.styles-711330f2.js";import{B as p}from"./Button-86a288bf.js";function ke(e,n,d){const l=s.useRef(null);return s.useEffect(()=>{function k(i){if(i.key!=="Tab"||!e||!l.current||!d)return;const c=le(l),a=c[c.length-1],h=c[0];(!i.shiftKey&&document.activeElement===a||i.shiftKey&&document.activeElement===h||i.shiftKey&&document.activeElement===o)&&(d.focus(),i.preventDefault(),n())}const o=l.current;return o&&e&&(o.focus(),o.addEventListener("keydown",k)),()=>{o==null||o.removeEventListener("keydown",k)}},[e]),l}const{spacing:f}=C,he={padding:`${f.SizesDdsSpacingLocalX075} ${f.SizesDdsSpacingLocalX1} ${f.SizesDdsSpacingLocalX15} ${f.SizesDdsSpacingLocalX1}`},ye={top:f.SizesDdsSpacingLocalX025,right:f.SizesDdsSpacingLocalX025},Pe={marginRight:f.SizesDdsSpacingLocalX2},be={noTitle:{marginTop:f.SizesDdsSpacingLocalX2}},Te={content:be,wrapper:he,closeButton:ye,title:Pe},{spacing:xe}=C,{wrapper:Se,content:Ce,closeButton:M,title:De}=Te,we=D(ue)`
  opacity: 0;
  ${({hasTransitionedIn:e,isOpen:n})=>e&&ie(e&&n)}
  position: absolute;
  width: fit-content;
  z-index: 100;
  padding: ${Se.padding};

  &:focus-visible {
    ${ge}
  }
  ${({sizeProps:e})=>e&&Y`
      ${e}
    `}
`,Be=D.div`
  margin-right: ${De.marginRight};
`,Ee=D.div`
  ${({withCloseButton:e,hasTitle:n})=>e&&!n&&Y`
      margin-top: ${Ce.noTitle.marginTop};
    `}
`,$e=D(p)`
  position: absolute;
  top: ${M.top};
  right: ${M.right};
`,u=s.forwardRef((e,n)=>{const{title:d,isOpen:l=!1,withCloseButton:k=!0,onBlur:o,onCloseButtonClick:i,onClose:c,anchorElement:a,children:h,placement:$="bottom",offset:y=xe.SizesDdsSpacingLocalX05NumberPx,id:O,className:_,htmlProps:B={},...v}=e,E=ke(l,()=>{c&&c(),o&&o()},a&&a),{reference:V,floating:Z,styles:ee}=ve(null,{placement:$,offset:y}),te=ae(n,E,Z);s.useEffect(()=>{V(a||null)},[a]);const G=[E.current];a&&G.push(a),se(G,()=>{l&&c&&c()});const j=pe(l,400),oe={...de(O,_,B,v),ref:te,isOpen:l,hasTransitionedIn:j,tabIndex:-1,style:{...B.style,...ee.floating},role:"dialog"};return l||j?r(we,{...oe,elevation:3,border:"light",children:[d&&t(Be,{children:typeof d=="string"?t(g,{typographyType:"headingSans02",children:d}):d}),t(Ee,{hasTitle:!!d,withCloseButton:k,children:h}),k&&t($e,{icon:fe,appearance:"borderless",purpose:"secondary",size:"small",onClick:i,"aria-label":"Lukk"})]}):null});u.displayName="Popover";try{u.displayName="Popover",u.__docgenInfo={description:"",displayName:"Popover",props:{title:{defaultValue:null,description:"Tittel.",name:"title",required:!1,type:{name:"ReactNode"}},isOpen:{defaultValue:null,description:"**OBS!** Propen settes automatisk av `<PopoverGroup />`. Spesifiserer om `<Popover />` skal vises.",name:"isOpen",required:!1,type:{name:"boolean | undefined"}},withCloseButton:{defaultValue:null,description:"Om lukkeknapp skal vises.",name:"withCloseButton",required:!1,type:{name:"boolean | undefined"}},anchorElement:{defaultValue:null,description:"**OBS!** Propen settes automatisk av `<PopoverGroup />`. Anchor-elementet.",name:"anchorElement",required:!1,type:{name:"HTMLElement | undefined"}},placement:{defaultValue:null,description:"Spesifiserer hvor komponenten skal plasseres i forhold til anchor-elementet.",name:"placement",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"left"'},{value:'"right"'},{value:'"bottom"'},{value:'"top"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},offset:{defaultValue:null,description:"Avstand fra anchor-elementet i px.",name:"offset",required:!1,type:{name:"number | undefined"}},onCloseButtonClick:{defaultValue:null,description:"Ekstra logikk kjørt når lukkeknappen trykkes.",name:"onCloseButtonClick",required:!1,type:{name:"(() => void) | undefined"}},onBlur:{defaultValue:null,description:"Ekstra logikk kjørt når popover mister fokus.",name:"onBlur",required:!1,type:{name:"(() => void) | undefined"}},sizeProps:{defaultValue:null,description:"Custom størrelse.",name:"sizeProps",required:!1,type:{name:"PopoverSizeProps | undefined"}},onClose:{defaultValue:null,description:"**OBS!** Propen settes automatisk av `<PopoverGroup />`. Funksjon kjørt ved lukking.",name:"onClose",required:!1,type:{name:"(() => void) | undefined"}},htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:"HTMLAttributes<HTMLDivElement> | undefined"}}}}}catch{}const m=({isOpen:e=!1,onCloseButtonClick:n,onTriggerClick:d,children:l,popoverId:k})=>{const[o,i]=s.useState(e),c=s.useId(),a=k??`${c}-popover`,h=()=>{i(!1),n&&n()},$=()=>{i(!o),d&&d()},y=s.useRef(null),O=s.useRef(null);ce(["Esc","Escape"],()=>{var v;o&&(i(!1),(v=y.current)==null||v.focus())});const _=()=>i(!1),B=s.Children.map(l,(v,E)=>s.isValidElement(v)&&(E===0?s.cloneElement(v,{"aria-haspopup":"dialog","aria-controls":a,"aria-expanded":o,onClick:$,ref:y}):s.cloneElement(v,{isOpen:o,"aria-hidden":!o,id:a,onCloseButtonClick:h,anchorElement:y.current,ref:O,onClose:_})));return t(re,{children:B})};m.displayName="PopoverGroup";try{m.displayName="PopoverGroup",m.__docgenInfo={description:"",displayName:"PopoverGroup",props:{onCloseButtonClick:{defaultValue:null,description:"Callback når det trykkes på lukkeknappen.",name:"onCloseButtonClick",required:!1,type:{name:"(() => void) | undefined"}},onTriggerClick:{defaultValue:null,description:"Callback når det trykkes på anchor-elementet (trigger-elementet).",name:"onTriggerClick",required:!1,type:{name:"(() => void) | undefined"}},isOpen:{defaultValue:{value:"false"},description:"Forteller `<Popover />` om den skal være åpen.",name:"isOpen",required:!1,type:{name:"boolean | undefined"}},popoverId:{defaultValue:null,description:"`id` til `<Popover />.`",name:"popoverId",required:!1,type:{name:"string | undefined"}},children:{defaultValue:null,description:"Barna til wrapperen: anchor-element som det første og `<Popover />` so det adnre.",name:"children",required:!0,type:{name:"ReactNode"}}}}}catch{}const Oe={title:"dds-components/Popover",component:u,argTypes:{withCloseButton:{control:{type:"boolean"}},placement:{control:{type:"text"}},title:{control:{type:"text"}},offset:{control:{type:"number"}}},parameters:{controls:{exclude:["onCloseButton","anchorElement"]}}},P=e=>r(w,{title:"Popover - content overview",display:"grid",children:[t("div",{children:r(m,{children:[t(p,{label:"Åpne"}),t(u,{...e,title:"Tittel",children:r("div",{style:{display:"flex",flexDirection:"column",paddingTop:"16px"},children:[t(g,{withMargins:!0,children:"Dette er en popover med tittel, innhold og lukkeknapp"}),t(p,{label:"Klikk"})]})})]})}),t("div",{children:r(m,{children:[t(p,{label:"Åpne"}),t(u,{...e,title:"Tittel",withCloseButton:!1,children:r("div",{style:{display:"flex",flexDirection:"column"},children:[t(g,{withMargins:!0,children:"Dette er en popover med tittel og innhold"}),t(p,{label:"Klikk"})]})})]})}),t("div",{children:r(m,{children:[t(p,{label:"Åpne"}),t(u,{...e,children:r("div",{style:{display:"flex",flexDirection:"column"},children:[t(g,{withMargins:!0,children:"Dette er en popover med innhold og lukkeknapp"}),t(p,{label:"Klikk"})]})})]})})]}),b=()=>{const e=n=>t("div",{children:r(m,{children:[t(p,{label:"Åpne"}),t(u,{placement:n,children:n})]})});return r(w,{title:"Popover - placement overview",display:"grid",columnsAmount:4,containerStyle:{alignContent:"center",justifyContent:"center",padding:"150px 40px 200px 40px"},children:[e("top-start"),e("bottom-start"),e("left-start"),e("right-start"),e("top"),e("bottom"),e("right"),e("left"),e("top-end"),e("bottom-end"),e("right-end"),e("left-end")]})},T=e=>t(w,{title:"Popover - default",display:"block",children:r(m,{children:[t(p,{label:"Åpne"}),t(u,{...e,children:r("div",{style:{display:"flex",flexDirection:"column"},children:[t(g,{withMargins:!0,children:"Dette er en popover med tekst og knapp"}),t(p,{label:"Klikk"})]})})]})}),x=e=>t(w,{title:"Popover - overflow",display:"block",children:r(m,{children:[t(p,{label:"Åpne"}),t(u,{...e,sizeProps:{maxWidth:"150px",maxHeight:"200px"},children:r("div",{style:{display:"flex",flexDirection:"column"},children:[t(g,{withMargins:!0,style:{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},children:"Dette er en popover med tekst og knapp"}),t(p,{label:"Klikk"})]})})]})}),S=e=>{const n=D.button`
    ${me}
    user-select: text;
    text-decoration: underline;
    color: ${C.colors.DdsColorInteractiveBase};
    &:hover {
      color: ${C.colors.DdsColorInteractiveDark};
    }
    &:focus {
      color: ${C.colors.DdsColorNeutralsWhite};
      background-color: ${ne.focus.colorDefault};
      text-decoration: none;
    }
  `;return t(w,{title:"Popover - inline example",display:"block",children:r(g,{children:["Når du kommer til domstolen er det viktig at du finner rettssalen der innkallingen sier du skal møte. Vent utenfor salen, du blir hentet når det er din tur. Vær forberedt på å vente, siden rettssaken allerede er i gang når du skal inn. Før du og andre vitner slipper til, skal retten få en redegjørelse fra"," ",r(m,{children:[t(n,{children:"advokatene"}),t(u,{...e,title:"Advokat",children:t(g,{withMargins:!0,children:"Dette er en definisjon"})})]})," ","(eller fra aktor i straffesaker) om hva saken gjelder og hva man er uenige om. Deretter skal partene (i sivile saker) eller tiltalte (i straffesaker) gi sin forklaring. Dette får vitner ikke høre på fordi de skal være upåvirket av det som er sagt tidligere i saken. Det er vanskelig å beregne hvor lang tid dette tar. Hvis spesielle årsaker gjør det vanskelig for deg å vente, så ta det opp på forhånd med den som har innkalt deg."]})})};var q,L,R;P.parameters={...P.parameters,docs:{...(q=P.parameters)==null?void 0:q.docs,source:{originalSource:`(args: PopoverProps) => {
  return <StoryTemplate title="Popover - content overview" display="grid">
      <div>
        <PopoverGroup>
          <Button label="Åpne" />
          <Popover {...args} title="Tittel">
            <div style={{
            display: 'flex',
            flexDirection: 'column',
            paddingTop: '16px'
          }}>
              <Typography withMargins>
                Dette er en popover med tittel, innhold og lukkeknapp
              </Typography>
              <Button label="Klikk" />
            </div>
          </Popover>
        </PopoverGroup>
      </div>
      <div>
        <PopoverGroup>
          <Button label="Åpne" />
          <Popover {...args} title="Tittel" withCloseButton={false}>
            <div style={{
            display: 'flex',
            flexDirection: 'column'
          }}>
              <Typography withMargins>
                Dette er en popover med tittel og innhold
              </Typography>
              <Button label="Klikk" />
            </div>
          </Popover>
        </PopoverGroup>
      </div>
      <div>
        <PopoverGroup>
          <Button label="Åpne" />
          <Popover {...args}>
            <div style={{
            display: 'flex',
            flexDirection: 'column'
          }}>
              <Typography withMargins>
                Dette er en popover med innhold og lukkeknapp
              </Typography>
              <Button label="Klikk" />
            </div>
          </Popover>
        </PopoverGroup>
      </div>
    </StoryTemplate>;
}`,...(R=(L=P.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var z,F,I;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
  const popover = (placement: Placement) => <div>
      <PopoverGroup>
        <Button label="Åpne" />
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
}`,...(I=(F=b.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var N,K,A;T.parameters={...T.parameters,docs:{...(N=T.parameters)==null?void 0:N.docs,source:{originalSource:`(args: PopoverProps) => {
  return <StoryTemplate title="Popover - default" display="block">
      <PopoverGroup>
        <Button label="Åpne" />
        <Popover {...args}>
          <div style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
            <Typography withMargins>
              Dette er en popover med tekst og knapp
            </Typography>
            <Button label="Klikk" />
          </div>
        </Popover>
      </PopoverGroup>
    </StoryTemplate>;
}`,...(A=(K=T.parameters)==null?void 0:K.docs)==null?void 0:A.source}}};var H,X,W;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`(args: PopoverProps) => {
  return <StoryTemplate title="Popover - overflow" display="block">
      <PopoverGroup>
        <Button label="Åpne" />
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
            <Button label="Klikk" />
          </div>
        </Popover>
      </PopoverGroup>
    </StoryTemplate>;
}`,...(W=(X=x.parameters)==null?void 0:X.docs)==null?void 0:W.source}}};var U,J,Q;S.parameters={...S.parameters,docs:{...(U=S.parameters)==null?void 0:U.docs,source:{originalSource:`(args: PopoverProps) => {
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
}`,...(Q=(J=S.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const _e=["ContentOverview","PlacementOverview","Default","Overflow","InlineExample"],Qe=Object.freeze(Object.defineProperty({__proto__:null,ContentOverview:P,Default:T,InlineExample:S,Overflow:x,PlacementOverview:b,__namedExportsOrder:_e,default:Oe},Symbol.toStringTag,{value:"Module"}));export{Qe as P,m as a};
//# sourceMappingURL=Popover.stories-229954dd.js.map
