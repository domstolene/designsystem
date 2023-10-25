import{a as e,j as n}from"./jsx-runtime-e43ccb36.js";import{S as b}from"./StoryTemplate-093416fc.js";import{r as a}from"./index-1b03fe98.js";import{s as L}from"./ddsReferenceTokens-a28ebf03.js";import{m as P,a as p,M as C}from"./ModalBody-56038f10.js";import{B as o}from"./Button-ba8adec5.js";const D=L.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${P.actionsContainer.gap};
`,u=a.forwardRef(({children:c,...d},t)=>{const s={ref:t,...d};return e(D,{...s,children:c})});u.displayName="ModalActions";try{u.displayName="ModalActions",u.__docgenInfo={description:"",displayName:"ModalActions",props:{}}}catch{}const j={title:"dds-components/Modal",component:p,argTypes:{header:{control:{type:"text"}}}},k=()=>{const[c,d]=a.useState(!0),t=()=>d(!1),s=()=>{var f;d(!0),(f=B.current)==null||f.focus()},[l,r]=a.useState(!0),i=()=>r(!1),y=()=>{var f;r(!0),(f=g.current)==null||f.focus()},B=a.useRef(null),g=a.useRef(null);return n(b,{title:"Modal - overview",children:[e(o,{"aria-haspopup":"dialog",onClick:t,ref:B,children:"Åpne lukkbar"}),n(p,{isOpen:!c,onClose:s,header:"Tittel",children:[e(C,{children:"Lukkbar modal"}),n(u,{children:[e(o,{onClick:s,children:"OK"}),e(o,{purpose:"secondary",onClick:s,children:"Avbryt"})]})]}),e(o,{"aria-haspopup":"dialog",onClick:i,ref:g,children:"Åpne ikke lukkbar"}),n(p,{isOpen:!l,header:"Tittel",children:[e(C,{children:"Ikke lukkbar modal"}),n(u,{children:[e(o,{onClick:y,children:"OK"}),e(o,{purpose:"secondary",onClick:y,children:"Avbryt"})]})]})]})},h=c=>{const[d,t]=a.useState(!0),s=()=>t(!1),l=()=>{var i;t(!0),(i=r.current)==null||i.focus()},r=a.useRef(null);return n(b,{title:"Modal - default",children:[e(o,{"aria-haspopup":"dialog",onClick:s,ref:r,children:"Åpne"}),n(p,{...c,isOpen:!d,onClose:l,children:[e(C,{children:"Modal"}),n(u,{children:[e(o,{onClick:l,children:"OK"}),e(o,{purpose:"secondary",onClick:l,children:"Avbryt"})]})]})]})},m=c=>{const[d,t]=a.useState(!0),s=()=>t(!1),l=()=>t(!0),r=a.useRef(null);return n(b,{title:"Modal - no action buttons",children:[e(o,{"aria-haspopup":"dialog",onClick:s,ref:r,children:"Åpne"}),e(p,{...c,isOpen:!d,triggerRef:r,onClose:l,header:"Info",children:e(C,{children:"Infotekst"})})]})},M=c=>{const[d,t]=a.useState(!0),s=()=>t(!1),l=()=>{var i;t(!0),(i=r.current)==null||i.focus()},r=a.useRef(null);return n(b,{title:"Modal - scrollable",children:[e(o,{"aria-haspopup":"dialog",onClick:s,ref:r,children:"Åpne scrollable"}),n(p,{...c,isOpen:!d,onClose:l,htmlProps:{style:{width:"300px"}},header:"Fritt valg av forsvarer",children:[e(C,{scrollable:!0,height:"100px",children:"Du kan vanligvis fritt velge hvilken advokat du vil ha som forsvarer i saken. Det må spesielle grunner til for at du ikke skal få oppfylt ditt ønske, for eksempel at advokaten er opptatt i lang tid slik at rettssaken din vil bli veldig forsinket."}),n(u,{children:[e(o,{onClick:l,children:"OK"}),e(o,{purpose:"secondary",onClick:l,children:"Avbryt"})]})]})]})};var v,R,S;k.parameters={...k.parameters,docs:{...(v=k.parameters)==null?void 0:v.docs,source:{originalSource:`() => {
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
      <Button aria-haspopup="dialog" onClick={show} ref={buttonRef}>
        Åpne lukkbar
      </Button>
      <Modal isOpen={!closed} onClose={close} header="Tittel">
        <ModalBody>Lukkbar modal</ModalBody>
        <ModalActions>
          <Button onClick={close}>OK</Button>
          <Button purpose="secondary" onClick={close}>
            Avbryt
          </Button>
        </ModalActions>
      </Modal>
      <Button aria-haspopup="dialog" onClick={show2} ref={buttonRef2}>
        Åpne ikke lukkbar
      </Button>
      <Modal isOpen={!closed2} header="Tittel">
        <ModalBody>Ikke lukkbar modal</ModalBody>
        <ModalActions>
          <Button onClick={close2}>OK</Button>

          <Button purpose="secondary" onClick={close2}>
            Avbryt
          </Button>
        </ModalActions>
      </Modal>
    </StoryTemplate>;
}`,...(S=(R=k.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var w,O,A;h.parameters={...h.parameters,docs:{...(w=h.parameters)==null?void 0:w.docs,source:{originalSource:`(args: ModalProps) => {
  const [closed, setClosed] = useState(true);
  const show = () => setClosed(false);
  const close = () => {
    setClosed(true);
    buttonRef.current?.focus();
  };
  const buttonRef = useRef<HTMLButtonElement>(null);
  return <StoryTemplate title="Modal - default">
      <Button aria-haspopup="dialog" onClick={show} ref={buttonRef}>
        Åpne
      </Button>
      <Modal {...args} isOpen={!closed} onClose={close}>
        <ModalBody>Modal</ModalBody>
        <ModalActions>
          <Button onClick={close}>OK</Button>
          <Button purpose="secondary" onClick={close}>
            Avbryt
          </Button>
        </ModalActions>
      </Modal>
    </StoryTemplate>;
}`,...(A=(O=h.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var T,_,x;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`(args: ModalProps) => {
  const [closed, setClosed] = useState(true);
  const show = () => setClosed(false);
  const close = () => setClosed(true);
  const buttonRef = useRef<HTMLButtonElement>(null);
  return <StoryTemplate title="Modal - no action buttons">
      <Button aria-haspopup="dialog" onClick={show} ref={buttonRef}>
        Åpne
      </Button>
      <Modal {...args} isOpen={!closed} triggerRef={buttonRef} onClose={close} header="Info">
        <ModalBody>Infotekst</ModalBody>
      </Modal>
    </StoryTemplate>;
}`,...(x=(_=m.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};var K,E,I;M.parameters={...M.parameters,docs:{...(K=M.parameters)==null?void 0:K.docs,source:{originalSource:`(args: ModalProps) => {
  const [closed, setClosed] = useState(true);
  const show = () => setClosed(false);
  const close = () => {
    setClosed(true);
    buttonRef.current?.focus();
  };
  const buttonRef = useRef<HTMLButtonElement>(null);
  return <StoryTemplate title="Modal - scrollable">
      <Button aria-haspopup="dialog" onClick={show} ref={buttonRef}>
        Åpne scrollable
      </Button>
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
          <Button onClick={close}>OK</Button>
          <Button purpose="secondary" onClick={close}>
            Avbryt
          </Button>
        </ModalActions>
      </Modal>
    </StoryTemplate>;
}`,...(I=(E=M.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};const H=["Overview","Default","NoActionButtons","Scrollable"],J=Object.freeze(Object.defineProperty({__proto__:null,Default:h,NoActionButtons:m,Overview:k,Scrollable:M,__namedExportsOrder:H,default:j},Symbol.toStringTag,{value:"Module"}));export{J as M};
//# sourceMappingURL=Modal.stories-4e3746ae.js.map
