import{s as _,j as e,b as l}from"./focus-visible-17f12d09.js";import{R as M}from"./storybook-components-b7b7a39c.js";import{r}from"./index-c6dae603.js";import{m as D,M as u,a as m}from"./ModalBody-f9de15ce.js";import{B as o}from"./Button-4fdfc19e.js";const I=_.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${D.actionsContainer.gap};
`,C=r.forwardRef(({children:d,...c},t)=>{const s={ref:t,...c};return e(I,{...s,children:d})});C.displayName="ModalActions";const j={title:"dds-components/Modal",component:u,argTypes:{header:{control:{type:"text"}}}},f=()=>{const[d,c]=r.useState(!0),t=()=>c(!1),s=()=>{var p;c(!0),(p=v.current)==null||p.focus()},[n,a]=r.useState(!0),i=()=>a(!1),y=()=>{var p;a(!0),(p=g.current)==null||p.focus()},v=r.useRef(null),g=r.useRef(null);return l(M,{title:"Modal - overview",children:[e(o,{"aria-haspopup":"dialog",label:"Åpne lukkbar",onClick:t,ref:v}),l(u,{isOpen:!d,onClose:s,header:"Tittel",children:[e(m,{children:"Lukkbar modal"}),l(C,{children:[e(o,{label:"OK",onClick:s}),e(o,{purpose:"secondary",label:"Avbryt",onClick:s})]})]}),e(o,{"aria-haspopup":"dialog",label:"Åpne ikke lukkbar",onClick:i,ref:g}),l(u,{isOpen:!n,header:"Tittel",children:[e(m,{children:"Ikke lukkbar modal"}),l(C,{children:[e(o,{label:"OK",onClick:y}),e(o,{purpose:"secondary",label:"Avbryt",onClick:y})]})]})]})},k=d=>{const[c,t]=r.useState(!0),s=()=>t(!1),n=()=>{var i;t(!0),(i=a.current)==null||i.focus()},a=r.useRef(null);return l(M,{title:"Modal - default",children:[e(o,{"aria-haspopup":"dialog",label:"Åpne",onClick:s,ref:a}),l(u,{...d,isOpen:!c,onClose:n,children:[e(m,{children:"Modal"}),l(C,{children:[e(o,{label:"OK",onClick:n}),e(o,{purpose:"secondary",label:"Avbryt",onClick:n})]})]})]})},b=d=>{const[c,t]=r.useState(!0),s=()=>t(!1),n=()=>t(!0),a=r.useRef(null);return l(M,{title:"Modal - no action buttons",children:[e(o,{"aria-haspopup":"dialog",label:"Åpne",onClick:s,ref:a}),e(u,{...d,isOpen:!c,triggerRef:a,onClose:n,header:"Info",children:e(m,{children:"Infotekst"})})]})},h=d=>{const[c,t]=r.useState(!0),s=()=>t(!1),n=()=>{var i;t(!0),(i=a.current)==null||i.focus()},a=r.useRef(null);return l(M,{title:"Modal - scrollable",children:[e(o,{"aria-haspopup":"dialog",label:"Åpne scrollable",onClick:s,ref:a}),l(u,{...d,isOpen:!c,onClose:n,htmlProps:{style:{width:"300px"}},header:"Fritt valg av forsvarer",children:[e(m,{scrollable:!0,height:"100px",children:"Du kan vanligvis fritt velge hvilken advokat du vil ha som forsvarer i saken. Det må spesielle grunner til for at du ikke skal få oppfylt ditt ønske, for eksempel at advokaten er opptatt i lang tid slik at rettssaken din vil bli veldig forsinket."}),l(C,{children:[e(o,{label:"OK",onClick:n}),e(o,{purpose:"secondary",label:"Avbryt",onClick:n})]})]})]})};var R,B,S;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
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
}`,...(S=(B=f.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var w,O,A;k.parameters={...k.parameters,docs:{...(w=k.parameters)==null?void 0:w.docs,source:{originalSource:`(args: ModalProps) => {
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
}`,...(A=(O=k.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var T,x,K;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:`(args: ModalProps) => {
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
}`,...(K=(x=b.parameters)==null?void 0:x.docs)==null?void 0:K.source}}};var E,L,P;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`(args: ModalProps) => {
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
}`,...(P=(L=h.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};const H=["Overview","Default","NoActionButtons","Scrollable"],G=Object.freeze(Object.defineProperty({__proto__:null,Default:k,NoActionButtons:b,Overview:f,Scrollable:h,__namedExportsOrder:H,default:j},Symbol.toStringTag,{value:"Module"}));export{G as M};
//# sourceMappingURL=Modal.stories-187e0478.js.map
