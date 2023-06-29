import{d as Y,s as k,j as e,a as i}from"./focus-visible-35158c22.js";import{R}from"./storybook-components-cc5979ee.js";import{r,a as ee}from"./index-d47b1f5a.js";import{T as oe}from"./dds-typography-e761338c.js";import{G as te,Z as ne,H as se,S as le,O as ae,j as re,W as ce,a as G,D as ie}from"./dds-core-29d22035.js";import{q as de}from"./dds-icons-7a922c3a.js";import{V as ue}from"./dds-form-b2eacd8d.js";import{B as c}from"./Button-2404c0e2.js";import{S as pe}from"./ScrollableContainer-da1eb4f4.js";const{spacing:b}=Y,fe={padding:`${b.SizesDdsSpacingLocalX1} ${b.SizesDdsSpacingLocalX1} ${b.SizesDdsSpacingLocalX15} ${b.SizesDdsSpacingLocalX15}`},he={paddingRight:b.SizesDdsSpacingLocalX1,gap:b.SizesDdsSpacingLocalX1},be={gap:b.SizesDdsSpacingLocalX1},F={container:fe,contentContainer:he,actionsContainer:be},me=k.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${te(Y.colors.DdsColorNeutralsGray9,.5)};
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
`,ke=o=>o.clientHeight>window.innerHeight;function ge(o){if(ke(o)){const n=Math.round(window.scrollY);o.style.overflowY="scroll",o.style.position="fixed",o.style.top=`-${n}px`}}function ye(o){const n=parseInt(document.body.style.top)||0;o.style.removeProperty("overflow-y"),o.style.removeProperty("position"),o.style.removeProperty("top"),window.scrollTo(0,n*-1)}const{container:Ce,contentContainer:$}=F,Me=k(ie)`
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
`,m=r.forwardRef((o,n)=>{const{isOpen:t=!1,parentElement:l=document.body,children:a,header:s,onClose:d,id:u,triggerRef:p,className:f,htmlProps:h,...V}=o,Z=r.useId(),w=u??`${Z}-modal`,O=`${w}-header`,T=se(t),q=le(n,T),B=()=>{var A;d&&t&&(p&&((A=p.current)==null||A.focus()),d())};r.useEffect(()=>{t?ge(document.body):ye(document.body)},[t]),ae(T.current,()=>B()),re(["Escape","Esc"],()=>B());const x=ce(t,200),U={isOpen:x&&t},J={...G(u,f,h,V),ref:q,role:"dialog","aria-modal":!0,"aria-hidden":!t,tabIndex:-1,"aria-labelledby":O,id:w},Q={id:O};return t||x?ee.createPortal(e(me,{...U,children:i(Me,{...J,elevation:4,children:[i(ve,{children:[s&&e(Se,{...Q,children:typeof s=="string"?e(oe,{typographyType:"headingSans03",children:s}):s}),a]}),d&&e(Re,{size:"small",appearance:"borderless",purpose:"secondary",icon:de,onClick:B,"aria-label":"Lukk dialog"})]})}),l):null});m.displayName="Modal";const D=k.div``,g=r.forwardRef((o,n)=>{const{children:t,scrollable:l,id:a,className:s,htmlProps:d,height:u,...p}=o,f={...G(a,s,d,p),ref:n};return l?e(D,{...f,children:e(pe,{contentHeight:u,children:t})}):e(D,{...f,children:t})});g.displayName="ModalBody";const Be=k.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${F.actionsContainer.gap};
`,S=r.forwardRef(({children:o,...n},t)=>{const l={ref:t,...n};return e(Be,{...l,children:o})});S.displayName="ModalActions";const we={title:"dds-components/Modal",component:m,argTypes:{header:{control:{type:"text"}}}},y=()=>{const[o,n]=r.useState(!0),t=()=>n(!1),l=()=>{var h;n(!0),(h=p.current)==null||h.focus()},[a,s]=r.useState(!0),d=()=>s(!1),u=()=>{var h;s(!0),(h=f.current)==null||h.focus()},p=r.useRef(null),f=r.useRef(null);return i(R,{title:"Modal - overview",children:[e(c,{"aria-haspopup":"dialog",label:"Åpne lukkbar",onClick:t,ref:p}),i(m,{isOpen:!o,onClose:l,header:"Tittel",children:[e(g,{children:"Lukkbar modal"}),i(S,{children:[e(c,{label:"OK",onClick:l}),e(c,{purpose:"secondary",label:"Avbryt",onClick:l})]})]}),e(c,{"aria-haspopup":"dialog",label:"Åpne ikke lukkbar",onClick:d,ref:f}),i(m,{isOpen:!a,header:"Tittel",children:[e(g,{children:"Ikke lukkbar modal"}),i(S,{children:[e(c,{label:"OK",onClick:u}),e(c,{purpose:"secondary",label:"Avbryt",onClick:u})]})]})]})},C=o=>{const[n,t]=r.useState(!0),l=()=>t(!1),a=()=>{var d;t(!0),(d=s.current)==null||d.focus()},s=r.useRef(null);return i(R,{title:"Modal - default",children:[e(c,{"aria-haspopup":"dialog",label:"Åpne",onClick:l,ref:s}),i(m,{...o,isOpen:!n,onClose:a,children:[e(g,{children:"Modal"}),i(S,{children:[e(c,{label:"OK",onClick:a}),e(c,{purpose:"secondary",label:"Avbryt",onClick:a})]})]})]})},M=o=>{const[n,t]=r.useState(!0),l=()=>t(!1),a=()=>t(!0),s=r.useRef(null);return i(R,{title:"Modal - no action buttons",children:[e(c,{"aria-haspopup":"dialog",label:"Åpne",onClick:l,ref:s}),e(m,{...o,isOpen:!n,triggerRef:s,onClose:a,header:"Info",children:e(g,{children:"Infotekst"})})]})},v=o=>{const[n,t]=r.useState(!0),l=()=>t(!1),a=()=>{var d;t(!0),(d=s.current)==null||d.focus()},s=r.useRef(null);return i(R,{title:"Modal - scrollable",children:[e(c,{"aria-haspopup":"dialog",label:"Åpne scrollable",onClick:l,ref:s}),i(m,{...o,isOpen:!n,onClose:a,htmlProps:{style:{width:"300px"}},header:"Fritt valg av forsvarer",children:[e(g,{scrollable:!0,height:"100px",children:"Du kan vanligvis fritt velge hvilken advokat du vil ha som forsvarer i saken. Det må spesielle grunner til for at du ikke skal få oppfylt ditt ønske, for eksempel at advokaten er opptatt i lang tid slik at rettssaken din vil bli veldig forsinket."}),i(S,{children:[e(c,{label:"OK",onClick:a}),e(c,{purpose:"secondary",label:"Avbryt",onClick:a})]})]})]})};var P,L,E;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
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
}`,...(E=(L=y.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var I,H,z;C.parameters={...C.parameters,docs:{...(I=C.parameters)==null?void 0:I.docs,source:{originalSource:`(args: ModalProps) => {
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
}`,...(z=(H=C.parameters)==null?void 0:H.docs)==null?void 0:z.source}}};var j,K,N;M.parameters={...M.parameters,docs:{...(j=M.parameters)==null?void 0:j.docs,source:{originalSource:`(args: ModalProps) => {
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
}`,...(N=(K=M.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var X,_,W;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`(args: ModalProps) => {
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
}`,...(W=(_=v.parameters)==null?void 0:_.docs)==null?void 0:W.source}}};const Oe=["Overview","Default","NoActionButtons","Scrollable"],He=Object.freeze(Object.defineProperty({__proto__:null,Default:C,NoActionButtons:M,Overview:y,Scrollable:v,__namedExportsOrder:Oe,default:we},Symbol.toStringTag,{value:"Module"}));export{He as M,g as a};
//# sourceMappingURL=Modal.stories-86452efa.js.map
