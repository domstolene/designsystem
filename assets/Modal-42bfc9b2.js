import{j as n,b as o,F as s}from"./focus-visible-17f12d09.js";import{M as a,e as c,f as m,g as i,P as p}from"./index-c0e0960b.js";import{p as h,S as u,M as g,F as r}from"./storybook-components-b7b7a39c.js";import{M as f}from"./Modal.stories-187e0478.js";import{u as d}from"./index-09fac16e.js";import{a as k}from"./ModalBody-f9de15ce.js";import"./index-c6dae603.js";import"./iframe-6efa2ccf.js";import"../sb-preview/runtime.js";import"./index-519f2600.js";import"./index-eb008d06.js";import"./Button-4fdfc19e.js";import"./Button.tokens-82906d32.js";import"./text-20d7ad40.js";import"./Typography.utils-3c68477b.js";import"./focusVisible-bd00be70.js";import"./normalize-f756ee4b.js";import"./selection-dced972e.js";import"./Spinner-7298b3ed.js";import"./color-0daeea22.js";import"./BaseComponentProps-bb0d5515.js";import"./Icon-a968456f.js";import"./useMountTransition-ab1b2779.js";import"./useFocusTrap-754ba609.js";import"./useCombinedRefs-764cd8e8.js";import"./useOnClickOutside-08b83e6f.js";import"./useOnKeyDown-77bae070.js";import"./Typography-ddbe86f6.js";import"./close-bbf4cbe9.js";import"./SvgWrapper-0812a1f2.js";import"./Paper-19f1cdc7.js";import"./ScrollableContainer-339b79b4.js";import"./ScrollableContainer.tokens-3dce5c89.js";function l(t){const e=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",strong:"strong",code:"code",h3:"h3"},d(),t.components);return o(s,{children:[n(a,{of:f}),`
`,n(e.h1,{id:"modal",children:"Modal"}),`
`,n(h,{docsHref:"https://design.domstol.no/987b33f71/p/257775-modal/b/8773a7",figmaHref:"https://www.figma.com/file/ewqSDmkgqDQ5PyOsRp4V5b/?node-id=3767%3A95031",githubHref:"https://github.com/domstolene/designsystem/tree/master/components/src/components/Modal"}),`
`,n(e.h2,{id:"demo",children:"Demo"}),`
`,n(c,{children:n(m,{id:"dds-components-modal--default"})}),`
`,n(u,{href:`${g}dds-components-modal`}),`
`,n(e.h2,{id:"oversikt",children:"Oversikt"}),`
`,n(e.p,{children:"En modal kan ha valgfritt innhold, men for å simplifisere implementasjonen av vanlige mønstre har vi predefinert visuell formatering av typiske elementer i en modal:"}),`
`,o(e.ul,{children:[`
`,o(e.li,{children:[n(e.strong,{children:"tittel"}),", settes via ",n(e.code,{children:"header"}),"-prop"]}),`
`,o(e.li,{children:[n(e.strong,{children:"hovedinnhold"}),", legges i ",n(e.code,{children:"<ModalBody />"}),"-subkomponent"]}),`
`,o(e.li,{children:[n(e.strong,{children:"handlingselementer"})," (knapper), legges i ",n(e.code,{children:"<ModalActions />"}),"-subkomponent"]}),`
`]}),`
`,o(e.p,{children:["Ved bruk av disse elementene vil innholdet i ",n(e.code,{children:"<Modal />"})," få spacing utav boksen vha. CSS grid."]}),`
`,n(e.p,{children:"Siden modal er en komponent som låser sideinnholdet idet den dukker opp er det viktig å sørge for at det er mulig å lukke modalen, enten ved å gjøre den generelt lukkbar (se API) og/eller ved interaksjon med handlingselementene."}),`
`,n(e.h2,{id:"bruk-i-koden",children:"Bruk i koden"}),`
`,n(r,{code:`import { Modal, ModalBody, ModalActions, Button } from '@norges-domstoler/dds-components';
  import { useState } from 'react';

const [open, setOpen] = useState(false);
const show = () => setOpen(true);
const close = () => setOpen(false);

<Button label="Åpne" onClick={show} />

<Modal header="Tittel" isOpen={open} onClose={close}>
  <ModalBody>Innhold</ModalBody>
  <ModalActions>
    <Button label="OK" onClick={close} />
  </ModalActions>
</Modal>
`}),`
`,o(e.p,{children:["Det støttes ikke å ha marginer på ",n(e.code,{children:"parentElement"}),`.
De vil forsvinner når modalen åpnes pga. `,n(e.code,{children:"position: fixed"}),`.
Hvis man ikke sender inn `,n(e.code,{children:"parentElement"}),", så brukes ",n(e.code,{children:"document.body"}),`.
Da må man sette `,n(e.code,{children:"width: 100%"})," på ",n(e.code,{children:"<body>"}),", og unngå marginer, slik at sideinnholdet ikke flytter på seg når modalen er åpen."]}),`
`,n(e.h3,{id:"returnering-av-fokus",children:"Returnering av fokus"}),`
`,o(e.p,{children:["Når modalen lukkes skal fokus returneres til elementet som åpnet den. Hvis det brukes en lukkbar variant av ",n(e.code,{children:"<Modal />"})," (se API) og det er ingen handlingselementer som skal lukke den er returnering av fokus håndtert internt i komponenten. Bruk ",n(e.code,{children:"triggerRef"}),"-prop for å aktivere det:"]}),`
`,n(r,{code:`
  const [open, setOpen] = useState(false);
  const show = () => setOpen(true);
  const close = () => setOpen(false);

const buttonRef = useRef(null);

<Button label="Åpne" ref={buttonRef} onClick={show} />

<Modal isOpen={open} onClose={close} triggerRef={buttonRef}>
  <ModalBody>Innhold</ModalBody>
</Modal>
`}),`
`,o(e.p,{children:["Hvis du bruker handlingselementer i ",n(e.code,{children:"<Modal />"})," kan det håndteres for eksempel slik:"]}),`
`,n(r,{code:`const [open, setOpen] = useState(false);
  const show = () => setOpen(true);
  const close = () => {
  setOpen(false);
  buttonRef.current?.focus(); // <--- gir åpningsknappen focus når modal lukkes
  }

const buttonRef = useRef(null);

<Button label="Åpne" ref={buttonRef} onClick={show} />

<Modal isOpen={open}>
  <Button label="OK" onClick={close} />
</Modal>
`}),`
`,n(e.h2,{id:"api",children:"API"}),`
`,n(e.h3,{id:"modal-1",children:"Modal"}),`
`,o(e.p,{children:["Hovedkomponenten for modal. Kan ha ",n(e.code,{children:"<ModalBody />"}),", ",n(e.code,{children:"<ModalActions />"})," og ellers fritt valgt innhold som barn. Legger vertikal spacing mellom barn."]}),`
`,n(i,{story:p}),`
`,o(e.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",n(e.code,{children:"HTMLAttributes<HTMLDivElement>"}),"-interface i ",n(e.code,{children:"htmlProps"}),"."]}),`
`,n(e.h3,{id:"modalbody",children:"ModalBody"}),`
`,o(e.p,{children:["Subkomponent for hovedinnhold i modal (tekstlig informasjon o.l.). Brukes som barn i ",n(e.code,{children:"<Modal />"}),"."]}),`
`,n(i,{of:k}),`
`,o(e.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",n(e.code,{children:"HTMLAttributes<HTMLDivElement>"}),"-interface i ",n(e.code,{children:"htmlProps"}),"."]}),`
`,n(e.h3,{id:"modalactions",children:"ModalActions"}),`
`,o(e.p,{children:["Subkomponent for handlingselementer, typisk knapper. Brukes som barn i ",n(e.code,{children:"<Modal />"}),". Legger horisontal spacing mellom barn og legger de over flere rader ved behov."]}),`
`,o(e.p,{children:["Det støttes alle native HTML-attributter som er en del av ",n(e.code,{children:"HTMLAttributes<HTMLDivElement>"}),"-interface i ",n(e.code,{children:"htmlProps"}),"."]})]})}function U(t={}){const{wrapper:e}=Object.assign({},d(),t.components);return e?n(e,Object.assign({},t,{children:n(l,t)})):l(t)}export{U as default};
//# sourceMappingURL=Modal-42bfc9b2.js.map
