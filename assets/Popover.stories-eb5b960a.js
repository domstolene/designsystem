import{d as S,s as w,A as Y,a as r,j as t,F as re,b as ne}from"./focus-visible-c2e9b88d.js";import{R as B}from"./storybook-components-91f985f3.js";import{r as a}from"./index-ebeaab24.js";import{g as le,u as ie}from"./useMountTransition-15033165.js";import{v as se}from"./visibilityTransition-933c6349.js";import{f as ae}from"./focusVisible-75802ac7.js";import{u as pe}from"./useFloatPosition-f03daf4a.js";import{u as de}from"./useCombinedRefs-40b11bb4.js";import{u as ce}from"./useOnClickOutside-1aed2959.js";import{g as ue}from"./BaseComponentProps-bb0d5515.js";import{T as g}from"./Typography-9f10a259.js";import{C as ve}from"./close-10bf9508.js";import{P as me}from"./Paper-12ce52e7.js";import{B as p}from"./Button-2e74127f.js";import{u as ge}from"./useOnKeyDown-4552d984.js";import{r as fe}from"./removeButtonStyling-867d6ba4.js";function he(e,n,d){const l=a.useRef(null);return a.useEffect(()=>{function h(i){if(i.key!=="Tab"||!e||!l.current||!d)return;const c=le(l),s=c[c.length-1],k=c[0];(!i.shiftKey&&document.activeElement===s||i.shiftKey&&document.activeElement===k||i.shiftKey&&document.activeElement===o)&&(d.focus(),i.preventDefault(),n())}const o=l.current;return o&&e&&(o.focus(),o.addEventListener("keydown",h)),()=>{o==null||o.removeEventListener("keydown",h)}},[e]),l}const{spacing:m}=S,ke={padding:`${m.SizesDdsSpacingLocalX075} ${m.SizesDdsSpacingLocalX1} ${m.SizesDdsSpacingLocalX15} ${m.SizesDdsSpacingLocalX1}`},ye={top:m.SizesDdsSpacingLocalX025,right:m.SizesDdsSpacingLocalX025},Pe={marginRight:m.SizesDdsSpacingLocalX2},be={noTitle:{marginTop:m.SizesDdsSpacingLocalX2}},xe={content:be,wrapper:ke,closeButton:ye,title:Pe},{spacing:Te}=S,{wrapper:De,content:Se,closeButton:K,title:we}=xe,Be=w(me)`
  opacity: 0;
  ${({hasTransitionedIn:e,isOpen:n})=>e&&se(e&&n)}
  position: absolute;
  width: fit-content;
  z-index: 100;
  padding: ${De.padding};

  &:focus-visible {
    ${ae}
  }
  ${({sizeProps:e})=>e&&Y`
      ${e}
    `}
`,Ce=w.div`
  margin-right: ${we.marginRight};
`,$e=w.div`
  ${({withCloseButton:e,hasTitle:n})=>e&&!n&&Y`
      margin-top: ${Se.noTitle.marginTop};
    `}
`,Ee=w(p)`
  position: absolute;
  top: ${K.top};
  right: ${K.right};
`,u=a.forwardRef((e,n)=>{const{title:d,isOpen:l=!1,withCloseButton:h=!0,onBlur:o,onCloseButtonClick:i,onClose:c,anchorElement:s,children:k,placement:E="bottom",offset:y=Te.SizesDdsSpacingLocalX05NumberPx,id:O,className:G,htmlProps:C={},...v}=e,$=he(l,()=>{c&&c(),o&&o()},s&&s),{reference:R,floating:Z,styles:ee}=pe(null,{placement:E,offset:y}),te=de(n,$,Z);a.useEffect(()=>{R(s||null)},[s]);const j=[$.current];s&&j.push(s),ce(j,()=>{l&&c&&c()});const M=ie(l,400),oe={...ue(O,G,C,v),ref:te,isOpen:l,hasTransitionedIn:M,tabIndex:-1,style:{...C.style,...ee.floating},role:"dialog"};return l||M?r(Be,{...oe,elevation:3,border:"light",children:[d&&t(Ce,{children:typeof d=="string"?t(g,{typographyType:"headingSans02",children:d}):d}),t($e,{hasTitle:!!d,withCloseButton:h,children:k}),h&&t(Ee,{icon:ve,appearance:"borderless",purpose:"secondary",size:"small",onClick:i,"aria-label":"Lukk"})]}):null});u.displayName="Popover";const f=({isOpen:e=!1,onCloseButtonClick:n,onTriggerClick:d,children:l,popoverId:h})=>{const[o,i]=a.useState(e),c=a.useId(),s=h??`${c}-popover`,k=()=>{i(!1),n&&n()},E=()=>{i(!o),d&&d()},y=a.useRef(null),O=a.useRef(null);ge(["Esc","Escape"],()=>{var v;o&&(i(!1),(v=y.current)==null||v.focus())});const G=()=>i(!1),C=a.Children.map(l,(v,$)=>a.isValidElement(v)&&($===0?a.cloneElement(v,{"aria-haspopup":"dialog","aria-controls":s,"aria-expanded":o,onClick:E,ref:y}):a.cloneElement(v,{isOpen:o,"aria-hidden":!o,id:s,onCloseButtonClick:k,anchorElement:y.current,ref:O,onClose:G})));return t(re,{children:C})};f.displayName="PopoverGroup";const Oe={title:"dds-components/Popover",component:u,argTypes:{withCloseButton:{control:{type:"boolean"}},placement:{control:{type:"text"}},title:{control:{type:"text"}},offset:{control:{type:"number"}}},parameters:{controls:{exclude:["onCloseButton","anchorElement"]}}},P=e=>r(B,{title:"Popover - content overview",display:"grid",children:[t("div",{children:r(f,{children:[t(p,{label:"Åpne"}),t(u,{...e,title:"Tittel",children:r("div",{style:{display:"flex",flexDirection:"column",paddingTop:"16px"},children:[t(g,{withMargins:!0,children:"Dette er en popover med tittel, innhold og lukkeknapp"}),t(p,{label:"Klikk"})]})})]})}),t("div",{children:r(f,{children:[t(p,{label:"Åpne"}),t(u,{...e,title:"Tittel",withCloseButton:!1,children:r("div",{style:{display:"flex",flexDirection:"column"},children:[t(g,{withMargins:!0,children:"Dette er en popover med tittel og innhold"}),t(p,{label:"Klikk"})]})})]})}),t("div",{children:r(f,{children:[t(p,{label:"Åpne"}),t(u,{...e,children:r("div",{style:{display:"flex",flexDirection:"column"},children:[t(g,{withMargins:!0,children:"Dette er en popover med innhold og lukkeknapp"}),t(p,{label:"Klikk"})]})})]})})]}),b=()=>{const e=n=>t("div",{children:r(f,{children:[t(p,{label:"Åpne"}),t(u,{placement:n,children:n})]})});return r(B,{title:"Popover - placement overview",display:"grid",columnsAmount:4,containerStyle:{alignContent:"center",justifyContent:"center",padding:"150px 40px 200px 40px"},children:[e("top-start"),e("bottom-start"),e("left-start"),e("right-start"),e("top"),e("bottom"),e("right"),e("left"),e("top-end"),e("bottom-end"),e("right-end"),e("left-end")]})},x=e=>t(B,{title:"Popover - default",display:"block",children:r(f,{children:[t(p,{label:"Åpne"}),t(u,{...e,children:r("div",{style:{display:"flex",flexDirection:"column"},children:[t(g,{withMargins:!0,children:"Dette er en popover med tekst og knapp"}),t(p,{label:"Klikk"})]})})]})}),T=e=>t(B,{title:"Popover - overflow",display:"block",children:r(f,{children:[t(p,{label:"Åpne"}),t(u,{...e,sizeProps:{maxWidth:"150px",maxHeight:"200px"},children:r("div",{style:{display:"flex",flexDirection:"column"},children:[t(g,{withMargins:!0,style:{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},children:"Dette er en popover med tekst og knapp"}),t(p,{label:"Klikk"})]})})]})}),D=e=>{const n=w.button`
    ${fe}
    user-select: text;
    text-decoration: underline;
    color: ${S.colors.DdsColorInteractiveBase};
    &:hover {
      color: ${S.colors.DdsColorInteractiveDark};
    }
    &:focus {
      color: ${S.colors.DdsColorNeutralsWhite};
      background-color: ${ne.focus.colorDefault};
      text-decoration: none;
    }
  `;return t(B,{title:"Popover - inline example",display:"block",children:r(g,{children:["Når du kommer til domstolen er det viktig at du finner rettssalen der innkallingen sier du skal møte. Vent utenfor salen, du blir hentet når det er din tur. Vær forberedt på å vente, siden rettssaken allerede er i gang når du skal inn. Før du og andre vitner slipper til, skal retten få en redegjørelse fra"," ",r(f,{children:[t(n,{children:"advokatene"}),t(u,{...e,title:"Advokat",children:t(g,{withMargins:!0,children:"Dette er en definisjon"})})]})," ","(eller fra aktor i straffesaker) om hva saken gjelder og hva man er uenige om. Deretter skal partene (i sivile saker) eller tiltalte (i straffesaker) gi sin forklaring. Dette får vitner ikke høre på fordi de skal være upåvirket av det som er sagt tidligere i saken. Det er vanskelig å beregne hvor lang tid dette tar. Hvis spesielle årsaker gjør det vanskelig for deg å vente, så ta det opp på forhånd med den som har innkalt deg."]})})};var z,L,I;P.parameters={...P.parameters,docs:{...(z=P.parameters)==null?void 0:z.docs,source:{originalSource:`(args: PopoverProps) => {
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
}`,...(I=(L=P.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};var X,F,N;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
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
}`,...(N=(F=b.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var _,A,V;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`(args: PopoverProps) => {
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
}`,...(V=(A=x.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};var H,W,q;T.parameters={...T.parameters,docs:{...(H=T.parameters)==null?void 0:H.docs,source:{originalSource:`(args: PopoverProps) => {
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
}`,...(q=(W=T.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var J,Q,U;D.parameters={...D.parameters,docs:{...(J=D.parameters)==null?void 0:J.docs,source:{originalSource:`(args: PopoverProps) => {
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
}`,...(U=(Q=D.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const Ge=["ContentOverview","PlacementOverview","Default","Overflow","InlineExample"],Je=Object.freeze(Object.defineProperty({__proto__:null,ContentOverview:P,Default:x,InlineExample:D,Overflow:T,PlacementOverview:b,__namedExportsOrder:Ge,default:Oe},Symbol.toStringTag,{value:"Module"}));export{Je as P,f as a};
//# sourceMappingURL=Popover.stories-eb5b960a.js.map
