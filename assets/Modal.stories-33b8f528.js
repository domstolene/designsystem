import{d as G,s as k,a as e,j as i}from"./focus-visible-8467fd8b.js";import{R}from"./storybook-components-3257698a.js";import{r,a as ee}from"./index-d47b1f5a.js";import{T as oe}from"./dds-typography-4e6445f7.js";import{G as te,Q as ne,X as se,S as le,_ as ae,O as re,K as ce,a as F,x as ie}from"./dds-core-b89b291f.js";import{q as de}from"./dds-icons-57b6044b.js";import{_ as ue}from"./dds-form-9dbc5b3d.js";import{B as c}from"./Button-2e8b5f50.js";import{S as pe}from"./ScrollableContainer-10fabcf9.js";const{spacing:b}=G,fe={padding:`${b.SizesDdsSpacingLocalX1} ${b.SizesDdsSpacingLocalX1} ${b.SizesDdsSpacingLocalX15} ${b.SizesDdsSpacingLocalX15}`},he={paddingRight:b.SizesDdsSpacingLocalX1,gap:b.SizesDdsSpacingLocalX1},be={gap:b.SizesDdsSpacingLocalX1},Q={container:fe,contentContainer:he,actionsContainer:be},me=k.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${te(G.colors.DdsColorNeutralsGray9,.5)};
  overflow-y: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 200;
  opacity: ${({isOpen:o})=>o?1:0};
  @media (prefers-reduced-motion: no-preference) {
    transition: opacity 0.2s;
  }
`,ke=o=>o.clientHeight>window.innerHeight;function ge(o){if(ke(o)){const n=Math.round(window.scrollY);o.style.overflowY="scroll",o.style.position="fixed",o.style.top=`-${n}px`}}function ye(o){const n=parseInt(document.body.style.top)||0;o.style.removeProperty("overflow-y"),o.style.removeProperty("position"),o.style.removeProperty("top"),window.scrollTo(0,n*-1)}const{container:Ce,contentContainer:$}=Q,Me=k(ie)`
  display: flex;
  flex-direction: column-reverse;
  min-width: 200px;
  padding: ${Ce.padding};
  &::selection,
  *::selection {
    ${ne}
  }
  :focus-visible,
  &.focus-visible {
    ${ue}
  }
`,ve=k.div`
  display: grid;
  padding-right: ${$.paddingRight};
  gap: ${$.gap};
`,Se=k.div``,Re=k(c)`
  align-self: flex-end;
`,m=r.forwardRef((o,n)=>{const{isOpen:t=!1,parentElement:l=document.body,children:a,header:s,onClose:d,id:u,triggerRef:p,className:f,htmlProps:h,...W}=o,q=r.useId(),w=u??`${q}-modal`,O=`${w}-header`,x=se(t),U=le(n,x),B=()=>{var A;d&&t&&(p&&((A=p.current)==null||A.focus()),d())};r.useEffect(()=>{t?ge(document.body):ye(document.body)},[t]),ae(x.current,()=>B()),re(["Escape","Esc"],()=>B());const T=ce(t,200),V={isOpen:T&&t},J={...F(u,f,h,W),ref:U,role:"dialog","aria-modal":!0,"aria-hidden":!t,tabIndex:-1,"aria-labelledby":O,id:w},Z={id:O};return t||T?ee.createPortal(e(me,{...V,children:i(Me,{...J,elevation:4,children:[i(ve,{children:[s&&e(Se,{...Z,children:typeof s=="string"?e(oe,{typographyType:"headingSans03",children:s}):s}),a]}),d&&e(Re,{size:"small",appearance:"borderless",purpose:"secondary",icon:de,onClick:B,"aria-label":"Lukk dialog"})]})}),l):null});m.displayName="Modal";const P=k.div``,g=r.forwardRef((o,n)=>{const{children:t,scrollable:l,id:a,className:s,htmlProps:d,height:u,...p}=o,f={...F(a,s,d,p),ref:n};return l?e(P,{...f,children:e(pe,{contentHeight:u,children:t})}):e(P,{...f,children:t})});g.displayName="ModalBody";const Be=k.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${Q.actionsContainer.gap};
`,S=r.forwardRef(({children:o,...n},t)=>{const l={ref:t,...n};return e(Be,{...l,children:o})});S.displayName="ModalActions";const we={title:"dds-components/Modal",component:m,argTypes:{header:{control:{type:"text"}}}},y=()=>{const[o,n]=r.useState(!0),t=()=>n(!1),l=()=>{var h;n(!0),(h=p.current)==null||h.focus()},[a,s]=r.useState(!0),d=()=>s(!1),u=()=>{var h;s(!0),(h=f.current)==null||h.focus()},p=r.useRef(null),f=r.useRef(null);return i(R,{title:"Modal - overview",children:[e(c,{"aria-haspopup":"dialog",label:"Åpne lukkbar",onClick:t,ref:p}),i(m,{isOpen:!o,onClose:l,header:"Tittel",children:[e(g,{children:"Lukkbar modal"}),i(S,{children:[e(c,{label:"OK",onClick:l}),e(c,{purpose:"secondary",label:"Avbryt",onClick:l})]})]}),e(c,{"aria-haspopup":"dialog",label:"Åpne ikke lukkbar",onClick:d,ref:f}),i(m,{isOpen:!a,header:"Tittel",children:[e(g,{children:"Ikke lukkbar modal"}),i(S,{children:[e(c,{label:"OK",onClick:u}),e(c,{purpose:"secondary",label:"Avbryt",onClick:u})]})]})]})},C=o=>{const[n,t]=r.useState(!0),l=()=>t(!1),a=()=>{var d;t(!0),(d=s.current)==null||d.focus()},s=r.useRef(null);return i(R,{title:"Modal - default",children:[e(c,{"aria-haspopup":"dialog",label:"Åpne",onClick:l,ref:s}),i(m,{...o,isOpen:!n,onClose:a,children:[e(g,{children:"Modal"}),i(S,{children:[e(c,{label:"OK",onClick:a}),e(c,{purpose:"secondary",label:"Avbryt",onClick:a})]})]})]})},M=o=>{const[n,t]=r.useState(!0),l=()=>t(!1),a=()=>t(!0),s=r.useRef(null);return i(R,{title:"Modal - no action buttons",children:[e(c,{"aria-haspopup":"dialog",label:"Åpne",onClick:l,ref:s}),e(m,{...o,isOpen:!n,triggerRef:s,onClose:a,header:"Info",children:e(g,{children:"Infotekst"})})]})},v=o=>{const[n,t]=r.useState(!0),l=()=>t(!1),a=()=>{var d;t(!0),(d=s.current)==null||d.focus()},s=r.useRef(null);return i(R,{title:"Modal - scrollable",children:[e(c,{"aria-haspopup":"dialog",label:"Åpne scrollable",onClick:l,ref:s}),i(m,{...o,isOpen:!n,onClose:a,htmlProps:{style:{width:"300px"}},header:"Fritt valg av forsvarer",children:[e(g,{scrollable:!0,height:"100px",children:"Du kan vanligvis fritt velge hvilken advokat du vil ha som forsvarer i saken. Det må spesielle grunner til for at du ikke skal få oppfylt ditt ønske, for eksempel at advokaten er opptatt i lang tid slik at rettssaken din vil bli veldig forsinket."}),i(S,{children:[e(c,{label:"OK",onClick:a}),e(c,{purpose:"secondary",label:"Avbryt",onClick:a})]})]})]})};var D,L,E;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  const [closed, setClosed] = useState(true);
  const show = () => setClosed(false);
  const close = () => {
    setClosed(true);
    buttonRef.current?.focus();
  };
  const [closed2, setClosed2] = useState(true);
  const show2 = () => setClosed2(false);
  const close2 = () => {
    setClosed2(true);
    buttonRef2.current?.focus();
  };
  const buttonRef = useRef<HTMLButtonElement>(null);
  const buttonRef2 = useRef<HTMLButtonElement>(null);
  return <StoryTemplate title="Modal - overview">
      <Button aria-haspopup="dialog" label="Åpne lukkbar" onClick={show} ref={buttonRef} />
      <Modal isOpen={!closed} onClose={close} header="Tittel">
        <ModalBody>Lukkbar modal</ModalBody>
        <ModalActions>
          <Button label="OK" onClick={close} />
          <Button purpose="secondary" label="Avbryt" onClick={close} />
        </ModalActions>
      </Modal>
      <Button aria-haspopup="dialog" label="Åpne ikke lukkbar" onClick={show2} ref={buttonRef2} />
      <Modal isOpen={!closed2} header="Tittel">
        <ModalBody>Ikke lukkbar modal</ModalBody>
        <ModalActions>
          <Button label="OK" onClick={close2} />

          <Button purpose="secondary" label="Avbryt" onClick={close2} />
        </ModalActions>
      </Modal>
    </StoryTemplate>;
}`,...(E=(L=y.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var I,z,K;C.parameters={...C.parameters,docs:{...(I=C.parameters)==null?void 0:I.docs,source:{originalSource:`(args: ModalProps) => {
  const [closed, setClosed] = useState(true);
  const show = () => setClosed(false);
  const close = () => {
    setClosed(true);
    buttonRef.current?.focus();
  };
  const buttonRef = useRef<HTMLButtonElement>(null);
  return <StoryTemplate title="Modal - default">
      <Button aria-haspopup="dialog" label="Åpne" onClick={show} ref={buttonRef} />
      <Modal {...args} isOpen={!closed} onClose={close}>
        <ModalBody>Modal</ModalBody>
        <ModalActions>
          <Button label="OK" onClick={close} />
          <Button purpose="secondary" label="Avbryt" onClick={close} />
        </ModalActions>
      </Modal>
    </StoryTemplate>;
}`,...(K=(z=C.parameters)==null?void 0:z.docs)==null?void 0:K.source}}};var _,H,X;M.parameters={...M.parameters,docs:{...(_=M.parameters)==null?void 0:_.docs,source:{originalSource:`(args: ModalProps) => {
  const [closed, setClosed] = useState(true);
  const show = () => setClosed(false);
  const close = () => setClosed(true);
  const buttonRef = useRef<HTMLButtonElement>(null);
  return <StoryTemplate title="Modal - no action buttons">
      <Button aria-haspopup="dialog" label="Åpne" onClick={show} ref={buttonRef} />
      <Modal {...args} isOpen={!closed} triggerRef={buttonRef} onClose={close} header="Info">
        <ModalBody>Infotekst</ModalBody>
      </Modal>
    </StoryTemplate>;
}`,...(X=(H=M.parameters)==null?void 0:H.docs)==null?void 0:X.source}}};var N,j,Y;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`(args: ModalProps) => {
  const [closed, setClosed] = useState(true);
  const show = () => setClosed(false);
  const close = () => {
    setClosed(true);
    buttonRef.current?.focus();
  };
  const buttonRef = useRef<HTMLButtonElement>(null);
  return <StoryTemplate title="Modal - scrollable">
      <Button aria-haspopup="dialog" label="Åpne scrollable" onClick={show} ref={buttonRef} />
      <Modal {...args} isOpen={!closed} onClose={close} htmlProps={{
      style: {
        width: '300px'
      }
    }} header="Fritt valg av forsvarer">
        <ModalBody scrollable height="100px">
          Du kan vanligvis fritt velge hvilken advokat du vil ha som forsvarer i
          saken. Det må spesielle grunner til for at du ikke skal få oppfylt
          ditt ønske, for eksempel at advokaten er opptatt i lang tid slik at
          rettssaken din vil bli veldig forsinket.
        </ModalBody>
        <ModalActions>
          <Button label="OK" onClick={close} />
          <Button purpose="secondary" label="Avbryt" onClick={close} />
        </ModalActions>
      </Modal>
    </StoryTemplate>;
}`,...(Y=(j=v.parameters)==null?void 0:j.docs)==null?void 0:Y.source}}};const Oe=["Overview","Default","NoActionButtons","Scrollable"],ze=Object.freeze(Object.defineProperty({__proto__:null,Default:C,NoActionButtons:M,Overview:y,Scrollable:v,__namedExportsOrder:Oe,default:we},Symbol.toStringTag,{value:"Module"}));export{ze as M,g as a};
//# sourceMappingURL=Modal.stories-33b8f528.js.map
