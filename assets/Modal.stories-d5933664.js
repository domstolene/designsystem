import{a as e,j as l}from"./jsx-runtime-e43ccb36.js";import{S as C}from"./StoryTemplate-a536eef8.js";import{r}from"./index-1b03fe98.js";import{s as L}from"./ddsReferenceTokens-f9f5a4e4.js";import{m as P,a as p,M}from"./ModalBody-6bf40129.js";import{B as o}from"./Button-cdaa071a.js";const D=L.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${P.actionsContainer.gap};
`,u=r.forwardRef(({children:c,...d},t)=>{const s={ref:t,...d};return e(D,{...s,children:c})});u.displayName="ModalActions";try{u.displayName="ModalActions",u.__docgenInfo={description:"",displayName:"ModalActions",props:{}}}catch{}const j={title:"dds-components/Modal",component:p,argTypes:{header:{control:{type:"text"}}}},k=()=>{const[c,d]=r.useState(!0),t=()=>d(!1),s=()=>{var f;d(!0),(f=g.current)==null||f.focus()},[n,a]=r.useState(!0),i=()=>a(!1),y=()=>{var f;a(!0),(f=v.current)==null||f.focus()},g=r.useRef(null),v=r.useRef(null);return l(C,{title:"Modal - overview",children:[e(o,{"aria-haspopup":"dialog",label:"Åpne lukkbar",onClick:t,ref:g}),l(p,{isOpen:!c,onClose:s,header:"Tittel",children:[e(M,{children:"Lukkbar modal"}),l(u,{children:[e(o,{label:"OK",onClick:s}),e(o,{purpose:"secondary",label:"Avbryt",onClick:s})]})]}),e(o,{"aria-haspopup":"dialog",label:"Åpne ikke lukkbar",onClick:i,ref:v}),l(p,{isOpen:!n,header:"Tittel",children:[e(M,{children:"Ikke lukkbar modal"}),l(u,{children:[e(o,{label:"OK",onClick:y}),e(o,{purpose:"secondary",label:"Avbryt",onClick:y})]})]})]})},b=c=>{const[d,t]=r.useState(!0),s=()=>t(!1),n=()=>{var i;t(!0),(i=a.current)==null||i.focus()},a=r.useRef(null);return l(C,{title:"Modal - default",children:[e(o,{"aria-haspopup":"dialog",label:"Åpne",onClick:s,ref:a}),l(p,{...c,isOpen:!d,onClose:n,children:[e(M,{children:"Modal"}),l(u,{children:[e(o,{label:"OK",onClick:n}),e(o,{purpose:"secondary",label:"Avbryt",onClick:n})]})]})]})},h=c=>{const[d,t]=r.useState(!0),s=()=>t(!1),n=()=>t(!0),a=r.useRef(null);return l(C,{title:"Modal - no action buttons",children:[e(o,{"aria-haspopup":"dialog",label:"Åpne",onClick:s,ref:a}),e(p,{...c,isOpen:!d,triggerRef:a,onClose:n,header:"Info",children:e(M,{children:"Infotekst"})})]})},m=c=>{const[d,t]=r.useState(!0),s=()=>t(!1),n=()=>{var i;t(!0),(i=a.current)==null||i.focus()},a=r.useRef(null);return l(C,{title:"Modal - scrollable",children:[e(o,{"aria-haspopup":"dialog",label:"Åpne scrollable",onClick:s,ref:a}),l(p,{...c,isOpen:!d,onClose:n,htmlProps:{style:{width:"300px"}},header:"Fritt valg av forsvarer",children:[e(M,{scrollable:!0,height:"100px",children:"Du kan vanligvis fritt velge hvilken advokat du vil ha som forsvarer i saken. Det må spesielle grunner til for at du ikke skal få oppfylt ditt ønske, for eksempel at advokaten er opptatt i lang tid slik at rettssaken din vil bli veldig forsinket."}),l(u,{children:[e(o,{label:"OK",onClick:n}),e(o,{purpose:"secondary",label:"Avbryt",onClick:n})]})]})]})};var B,R,S;k.parameters={...k.parameters,docs:{...(B=k.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
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
}`,...(S=(R=k.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var w,O,A;b.parameters={...b.parameters,docs:{...(w=b.parameters)==null?void 0:w.docs,source:{originalSource:`(args: ModalProps) => {
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
}`,...(A=(O=b.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var T,_,x;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`(args: ModalProps) => {
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
}`,...(x=(_=h.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};var K,E,I;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`(args: ModalProps) => {
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
}`,...(I=(E=m.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};const H=["Overview","Default","NoActionButtons","Scrollable"],J=Object.freeze(Object.defineProperty({__proto__:null,Default:b,NoActionButtons:h,Overview:k,Scrollable:m,__namedExportsOrder:H,default:j},Symbol.toStringTag,{value:"Module"}));export{J as M};
//# sourceMappingURL=Modal.stories-d5933664.js.map
