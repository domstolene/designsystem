import{d as F,s as k,a as e,j as i}from"./ddsReferenceTokens-f1d35829.js";import{R}from"./storybook-components-e6e74b30.js";import{r,a as oe}from"./index-d47b1f5a.js";import{T as te}from"./dds-typography-cc6cb429.js";import{G as ne,Q as se,X as le,S as ae,_ as re,O as ce,K as ie,a as Q,x as de}from"./dds-core-c67132cd.js";import{q as ue}from"./dds-icons-265d9665.js";import{_ as pe}from"./dds-form-9b45fc8d.js";import{B as c}from"./Button-aa30c63f.js";import{S as fe}from"./ScrollableContainer-c51c141e.js";const{spacing:b}=F,he={padding:`${b.SizesDdsSpacingLocalX1} ${b.SizesDdsSpacingLocalX1} ${b.SizesDdsSpacingLocalX15} ${b.SizesDdsSpacingLocalX15}`},be={paddingRight:b.SizesDdsSpacingLocalX1,gap:b.SizesDdsSpacingLocalX1},me={gap:b.SizesDdsSpacingLocalX1},W={container:he,contentContainer:be,actionsContainer:me},ke=k.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${ne(F.colors.DdsColorNeutralsGray9,.5)};
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
`,ge=o=>o.clientHeight>window.innerHeight;function ye(o){if(ge(o)){const n=Math.round(window.scrollY);o.style.overflowY="scroll",o.style.position="fixed",o.style.top=`-${n}px`}}function $(o){const n=parseInt(document.body.style.top)||0;o.style.removeProperty("overflow-y"),o.style.removeProperty("position"),o.style.removeProperty("top"),window.scrollTo(0,n*-1)}const{container:Ce,contentContainer:P}=W,Me=k(de)`
  display: flex;
  flex-direction: column-reverse;
  min-width: 200px;
  padding: ${Ce.padding};
  &::selection,
  *::selection {
    ${se}
  }
  :focus-visible,
  &.focus-visible {
    ${pe}
  }
`,ve=k.div`
  display: grid;
  padding-right: ${P.paddingRight};
  gap: ${P.gap};
`,Se=k.div``,Re=k(c)`
  align-self: flex-end;
`,m=r.forwardRef((o,n)=>{const{isOpen:t=!1,parentElement:l=document.body,children:a,header:s,onClose:d,id:u,triggerRef:p,className:f,htmlProps:h,...q}=o,U=r.useId(),w=u??`${U}-modal`,O=`${w}-header`,x=le(t),V=ae(n,x),B=()=>{var A;d&&t&&(p&&((A=p.current)==null||A.focus()),d())};r.useEffect(()=>(t?ye(document.body):$(document.body),()=>$(document.body)),[t]),re(x.current,()=>B()),ce(["Escape","Esc"],()=>B());const T=ie(t,200),J={isOpen:T&&t},Z={...Q(u,f,h,q),ref:V,role:"dialog","aria-modal":!0,"aria-hidden":!t,tabIndex:-1,"aria-labelledby":O,id:w},ee={id:O};return t||T?oe.createPortal(e(ke,{...J,children:i(Me,{...Z,elevation:4,children:[i(ve,{children:[s&&e(Se,{...ee,children:typeof s=="string"?e(te,{typographyType:"headingSans03",children:s}):s}),a]}),d&&e(Re,{size:"small",appearance:"borderless",purpose:"secondary",icon:ue,onClick:B,"aria-label":"Lukk dialog"})]})}),l):null});m.displayName="Modal";const D=k.div``,g=r.forwardRef((o,n)=>{const{children:t,scrollable:l,id:a,className:s,htmlProps:d,height:u,...p}=o,f={...Q(a,s,d,p),ref:n};return l?e(D,{...f,children:e(fe,{contentHeight:u,children:t})}):e(D,{...f,children:t})});g.displayName="ModalBody";const Be=k.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${W.actionsContainer.gap};
`,S=r.forwardRef(({children:o,...n},t)=>{const l={ref:t,...n};return e(Be,{...l,children:o})});S.displayName="ModalActions";const we={title:"dds-components/Modal",component:m,argTypes:{header:{control:{type:"text"}}}},y=()=>{const[o,n]=r.useState(!0),t=()=>n(!1),l=()=>{var h;n(!0),(h=p.current)==null||h.focus()},[a,s]=r.useState(!0),d=()=>s(!1),u=()=>{var h;s(!0),(h=f.current)==null||h.focus()},p=r.useRef(null),f=r.useRef(null);return i(R,{title:"Modal - overview",children:[e(c,{"aria-haspopup":"dialog",label:"Åpne lukkbar",onClick:t,ref:p}),i(m,{isOpen:!o,onClose:l,header:"Tittel",children:[e(g,{children:"Lukkbar modal"}),i(S,{children:[e(c,{label:"OK",onClick:l}),e(c,{purpose:"secondary",label:"Avbryt",onClick:l})]})]}),e(c,{"aria-haspopup":"dialog",label:"Åpne ikke lukkbar",onClick:d,ref:f}),i(m,{isOpen:!a,header:"Tittel",children:[e(g,{children:"Ikke lukkbar modal"}),i(S,{children:[e(c,{label:"OK",onClick:u}),e(c,{purpose:"secondary",label:"Avbryt",onClick:u})]})]})]})},C=o=>{const[n,t]=r.useState(!0),l=()=>t(!1),a=()=>{var d;t(!0),(d=s.current)==null||d.focus()},s=r.useRef(null);return i(R,{title:"Modal - default",children:[e(c,{"aria-haspopup":"dialog",label:"Åpne",onClick:l,ref:s}),i(m,{...o,isOpen:!n,onClose:a,children:[e(g,{children:"Modal"}),i(S,{children:[e(c,{label:"OK",onClick:a}),e(c,{purpose:"secondary",label:"Avbryt",onClick:a})]})]})]})},M=o=>{const[n,t]=r.useState(!0),l=()=>t(!1),a=()=>t(!0),s=r.useRef(null);return i(R,{title:"Modal - no action buttons",children:[e(c,{"aria-haspopup":"dialog",label:"Åpne",onClick:l,ref:s}),e(m,{...o,isOpen:!n,triggerRef:s,onClose:a,header:"Info",children:e(g,{children:"Infotekst"})})]})},v=o=>{const[n,t]=r.useState(!0),l=()=>t(!1),a=()=>{var d;t(!0),(d=s.current)==null||d.focus()},s=r.useRef(null);return i(R,{title:"Modal - scrollable",children:[e(c,{"aria-haspopup":"dialog",label:"Åpne scrollable",onClick:l,ref:s}),i(m,{...o,isOpen:!n,onClose:a,htmlProps:{style:{width:"300px"}},header:"Fritt valg av forsvarer",children:[e(g,{scrollable:!0,height:"100px",children:"Du kan vanligvis fritt velge hvilken advokat du vil ha som forsvarer i saken. Det må spesielle grunner til for at du ikke skal få oppfylt ditt ønske, for eksempel at advokaten er opptatt i lang tid slik at rettssaken din vil bli veldig forsinket."}),i(S,{children:[e(c,{label:"OK",onClick:a}),e(c,{purpose:"secondary",label:"Avbryt",onClick:a})]})]})]})};var L,E,I;y.parameters={...y.parameters,docs:{...(L=y.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
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
}`,...(I=(E=y.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var z,K,_;C.parameters={...C.parameters,docs:{...(z=C.parameters)==null?void 0:z.docs,source:{originalSource:`(args: ModalProps) => {
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
}`,...(_=(K=C.parameters)==null?void 0:K.docs)==null?void 0:_.source}}};var H,X,N;M.parameters={...M.parameters,docs:{...(H=M.parameters)==null?void 0:H.docs,source:{originalSource:`(args: ModalProps) => {
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
}`,...(N=(X=M.parameters)==null?void 0:X.docs)==null?void 0:N.source}}};var j,Y,G;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`(args: ModalProps) => {
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
}`,...(G=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:G.source}}};const Oe=["Overview","Default","NoActionButtons","Scrollable"],ze=Object.freeze(Object.defineProperty({__proto__:null,Default:C,NoActionButtons:M,Overview:y,Scrollable:v,__namedExportsOrder:Oe,default:we},Symbol.toStringTag,{value:"Module"}));export{ze as M,g as a};
//# sourceMappingURL=Modal.stories-45d77e8a.js.map
