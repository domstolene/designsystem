import{d as T,s as D,A as Y,j as t,a as e,F as re,b as ne}from"./ddsReferenceTokens-f1d35829.js";import{R as S}from"./storybook-components-930ad3ec.js";import{T as v}from"./dds-typography-cc6cb429.js";import{L as le,j as ie,$ as ae,S as se,_ as pe,K as de,a as ce,x as ve,O as ue,w as ge}from"./dds-core-c67132cd.js";import{r as i}from"./index-d47b1f5a.js";import{q as me}from"./dds-icons-265d9665.js";import{_ as he}from"./dds-form-9b45fc8d.js";import{B as n}from"./Button-aa30c63f.js";const{spacing:c}=T,fe={padding:`${c.SizesDdsSpacingLocalX075} ${c.SizesDdsSpacingLocalX1} ${c.SizesDdsSpacingLocalX15} ${c.SizesDdsSpacingLocalX1}`},ke={top:c.SizesDdsSpacingLocalX025,right:c.SizesDdsSpacingLocalX025},ye={marginRight:c.SizesDdsSpacingLocalX2},xe={noTitle:{marginTop:c.SizesDdsSpacingLocalX2}},Pe={content:xe,wrapper:fe,closeButton:ke,title:ye},{spacing:be}=T,{wrapper:Te,content:De,closeButton:K,title:Se}=Pe,we=D(ve)`
  opacity: 0;
  ${({hasTransitionedIn:o,isOpen:r})=>o&&le(o&&r)}
  position: absolute;
  width: fit-content;
  z-index: 100;
  padding: ${Te.padding};

  &:focus-visible {
    ${he}
  }
  ${({sizeProps:o})=>o&&Y`
      ${o}
    `}
`,Be=D.div`
  margin-right: ${Se.marginRight};
`,Ce=D.div`
  ${({withCloseButton:o,hasTitle:r})=>o&&!r&&Y`
      margin-top: ${De.noTitle.marginTop};
    `}
`,$e=D(n)`
  position: absolute;
  top: ${K.top};
  right: ${K.right};
`,a=i.forwardRef((o,r)=>{const{title:s,isOpen:g=!1,withCloseButton:w=!0,onBlur:p,onCloseButtonClick:m,onClose:h,anchorElement:l,children:$,placement:O="bottom",offset:f=be.SizesDdsSpacingLocalX05NumberPx,id:j,className:G,htmlProps:B={},...d}=o,C=ie(g,()=>{h&&h(),p&&p()},l&&l),{reference:z,floating:Z,styles:ee}=ae(null,{placement:O,offset:f}),oe=se(r,C,Z);i.useEffect(()=>{z(l||null)},[l]);const E=[C.current];l&&E.push(l),pe(E,()=>{g&&h&&h()});const M=de(g,400),te={...ce(j,G,B,d),ref:oe,isOpen:g,hasTransitionedIn:M,tabIndex:-1,style:{...B.style,...ee.floating},role:"dialog"};return g||M?t(we,{...te,elevation:3,border:"light",children:[s&&e(Be,{children:typeof s=="string"?e(v,{typographyType:"headingSans02",children:s}):s}),e(Ce,{hasTitle:!!s,withCloseButton:w,children:$}),w&&e($e,{icon:me,appearance:"borderless",purpose:"secondary",size:"small",onClick:m,"aria-label":"Lukk"})]}):null});a.displayName="Popover";const u=({isOpen:o=!1,onCloseButtonClick:r,onTriggerClick:s,children:g,popoverId:w})=>{const[p,m]=i.useState(o),h=i.useId(),l=w??`${h}-popover`,$=()=>{m(!1),r&&r()},O=()=>{m(!p),s&&s()},f=i.useRef(null),j=i.useRef(null);ue(["Esc","Escape"],()=>{var d;p&&(m(!1),(d=f.current)==null||d.focus())});const G=()=>m(!1),B=i.Children.map(g,(d,C)=>i.isValidElement(d)&&(C===0?i.cloneElement(d,{"aria-haspopup":"dialog","aria-controls":l,"aria-expanded":p,onClick:O,ref:f}):i.cloneElement(d,{isOpen:p,"aria-hidden":!p,id:l,onCloseButtonClick:$,anchorElement:f.current,ref:j,onClose:G})));return e(re,{children:B})};u.displayName="PopoverGroup";const Oe={title:"dds-components/Popover",component:a,argTypes:{withCloseButton:{control:{type:"boolean"}},placement:{control:{type:"text"}},title:{control:{type:"text"}},offset:{control:{type:"number"}}},parameters:{controls:{exclude:["onCloseButton","anchorElement"]}}},k=o=>t(S,{title:"Popover - content overview",display:"grid",children:[e("div",{children:t(u,{children:[e(n,{label:"Åpne"}),e(a,{...o,title:"Tittel",children:t("div",{style:{display:"flex",flexDirection:"column",paddingTop:"16px"},children:[e(v,{withMargins:!0,children:"Dette er en popover med tittel, innhold og lukkeknapp"}),e(n,{label:"Klikk"})]})})]})}),e("div",{children:t(u,{children:[e(n,{label:"Åpne"}),e(a,{...o,title:"Tittel",withCloseButton:!1,children:t("div",{style:{display:"flex",flexDirection:"column"},children:[e(v,{withMargins:!0,children:"Dette er en popover med tittel og innhold"}),e(n,{label:"Klikk"})]})})]})}),e("div",{children:t(u,{children:[e(n,{label:"Åpne"}),e(a,{...o,children:t("div",{style:{display:"flex",flexDirection:"column"},children:[e(v,{withMargins:!0,children:"Dette er en popover med innhold og lukkeknapp"}),e(n,{label:"Klikk"})]})})]})})]}),y=()=>{const o=r=>e("div",{children:t(u,{children:[e(n,{label:"Åpne"}),e(a,{placement:r,children:r})]})});return t(S,{title:"Popover - placement overview",display:"grid",columnsAmount:4,containerStyle:{alignContent:"center",justifyContent:"center",padding:"150px 40px 200px 40px"},children:[o("top-start"),o("bottom-start"),o("left-start"),o("right-start"),o("top"),o("bottom"),o("right"),o("left"),o("top-end"),o("bottom-end"),o("right-end"),o("left-end")]})},x=o=>e(S,{title:"Popover - default",display:"block",children:t(u,{children:[e(n,{label:"Åpne"}),e(a,{...o,children:t("div",{style:{display:"flex",flexDirection:"column"},children:[e(v,{withMargins:!0,children:"Dette er en popover med tekst og knapp"}),e(n,{label:"Klikk"})]})})]})}),P=o=>e(S,{title:"Popover - overflow",display:"block",children:t(u,{children:[e(n,{label:"Åpne"}),e(a,{...o,sizeProps:{maxWidth:"150px",maxHeight:"200px"},children:t("div",{style:{display:"flex",flexDirection:"column"},children:[e(v,{withMargins:!0,style:{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},children:"Dette er en popover med tekst og knapp"}),e(n,{label:"Klikk"})]})})]})}),b=o=>{const r=D.button`
    ${ge}
    user-select: text;
    text-decoration: underline;
    color: ${T.colors.DdsColorInteractiveBase};
    &:hover {
      color: ${T.colors.DdsColorInteractiveDark};
    }
    &:focus {
      color: ${T.colors.DdsColorNeutralsWhite};
      background-color: ${ne.focus.colorDefault};
      text-decoration: none;
    }
  `;return e(S,{title:"Popover - inline example",display:"block",children:t(v,{children:["Når du kommer til domstolen er det viktig at du finner rettssalen der innkallingen sier du skal møte. Vent utenfor salen, du blir hentet når det er din tur. Vær forberedt på å vente, siden rettssaken allerede er i gang når du skal inn. Før du og andre vitner slipper til, skal retten få en redegjørelse fra"," ",t(u,{children:[e(r,{children:"advokatene"}),e(a,{...o,title:"Advokat",children:e(v,{withMargins:!0,children:"Dette er en definisjon"})})]})," ","(eller fra aktor i straffesaker) om hva saken gjelder og hva man er uenige om. Deretter skal partene (i sivile saker) eller tiltalte (i straffesaker) gi sin forklaring. Dette får vitner ikke høre på fordi de skal være upåvirket av det som er sagt tidligere i saken. Det er vanskelig å beregne hvor lang tid dette tar. Hvis spesielle årsaker gjør det vanskelig for deg å vente, så ta det opp på forhånd med den som har innkalt deg."]})})};var L,R,I;k.parameters={...k.parameters,docs:{...(L=k.parameters)==null?void 0:L.docs,source:{originalSource:`(args: PopoverProps) => {
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
}`,...(I=(R=k.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};var _,X,N;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
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
}`,...(N=(X=y.parameters)==null?void 0:X.docs)==null?void 0:N.source}}};var A,V,W;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`(args: PopoverProps) => {
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
}`,...(W=(V=x.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var F,H,q;P.parameters={...P.parameters,docs:{...(F=P.parameters)==null?void 0:F.docs,source:{originalSource:`(args: PopoverProps) => {
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
}`,...(q=(H=P.parameters)==null?void 0:H.docs)==null?void 0:q.source}}};var Q,J,U;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`(args: PopoverProps) => {
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
}`,...(U=(J=b.parameters)==null?void 0:J.docs)==null?void 0:U.source}}};const je=["ContentOverview","PlacementOverview","Default","Overflow","InlineExample"],_e=Object.freeze(Object.defineProperty({__proto__:null,ContentOverview:k,Default:x,InlineExample:b,Overflow:P,PlacementOverview:y,__namedExportsOrder:je,default:Oe},Symbol.toStringTag,{value:"Module"}));export{_e as P,u as a};
//# sourceMappingURL=Popover.stories-220b51be.js.map
