import{a as n,j as o,F as s}from"./jsx-runtime-e43ccb36.js";import{M as a,C as c,b as m,A as i,P as p}from"./chunk-HLWAVYOI-3e0a616d.js";import{C as h,L as u,c as r}from"./StoryTemplate-fe1f5a61.js";import{S as g}from"./constants-69754a51.js";import{M as k}from"./Modal.stories-8dd728bb.js";import{u as l}from"./index-2ef8b458.js";import{M as f}from"./ModalBody-1253745f.js";import"./index-1b03fe98.js";import"./iframe-35bb3082.js";import"../sb-preview/runtime.js";import"./index-6d191f71.js";import"./index-6fd5a17b.js";import"./index-356e4a49.js";import"./ddsReferenceTokens-a28ebf03.js";import"./Button-32ef9fe8.js";import"./libraryAdd-72c0bfa3.js";import"./Icon-eb542f51.js";import"./BaseComponentProps-b6ad9f7d.js";import"./Button.tokens-aa4a9c73.js";import"./normalize-f756ee4b.js";import"./Caption-d810b87c.js";import"./TextOverflowEllipsis-6cc9a60a.js";import"./Typography-d13ef156.js";import"./Heading-0c5437bc.js";import"./Label-05114518.js";import"./Legend-9969638c.js";import"./Link-c264ab95.js";import"./Paragraph-88055bd8.js";import"./Input.styles-6b8ed75e.js";import"./Spinner-842be24a.js";import"./ScrollableContainer-0f39a7d7.js";import"./ScrollableContainer.tokens-fec9d215.js";function d(t){const e=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",strong:"strong",code:"code",h3:"h3"},l(),t.components);return o(s,{children:[n(a,{of:k}),`
`,n(e.h1,{id:"modal",children:"Modal"}),`
`,n(h,{docsHref:"https://design.domstol.no/987b33f71/p/257775-modal/b/8773a7",figmaHref:"https://www.figma.com/file/ewqSDmkgqDQ5PyOsRp4V5b/?node-id=3767%3A95031",githubHref:"https://github.com/domstolene/designsystem/tree/main/packages/components/src/components/Modal"}),`
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

<Button onClick={show}>Åpne</Button>

<Modal header="Tittel" isOpen={open} onClose={close}>
  <ModalBody>Innhold</ModalBody>
  <ModalActions>
    <Button onClick={close}>OK</Button>
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

<Button ref={buttonRef} onClick={show}>
  Åpne
</Button>

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

<Button ref={buttonRef} onClick={show}>
  Åpne
</Button>

<Modal isOpen={open}>
  <Button onClick={close}>OK</Button>
</Modal>
`}),`
`,n(e.h2,{id:"api",children:"API"}),`
`,n(e.h3,{id:"modal-1",children:"Modal"}),`
`,o(e.p,{children:["Hovedkomponenten for modal. Kan ha ",n(e.code,{children:"<ModalBody />"}),", ",n(e.code,{children:"<ModalActions />"})," og ellers fritt valgt innhold som barn. Legger vertikal spacing mellom barn."]}),`
`,n(i,{story:p}),`
`,o(e.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",n(e.code,{children:"HTMLAttributes<HTMLDivElement>"}),"-interface i ",n(e.code,{children:"htmlProps"}),"."]}),`
`,n(e.h3,{id:"modalbody",children:"ModalBody"}),`
`,o(e.p,{children:["Subkomponent for hovedinnhold i modal (tekstlig informasjon o.l.). Brukes som barn i ",n(e.code,{children:"<Modal />"}),"."]}),`
`,n(i,{of:f}),`
`,o(e.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",n(e.code,{children:"HTMLAttributes<HTMLDivElement>"}),"-interface i ",n(e.code,{children:"htmlProps"}),"."]}),`
`,n(e.h3,{id:"modalactions",children:"ModalActions"}),`
`,o(e.p,{children:["Subkomponent for handlingselementer, typisk knapper. Brukes som barn i ",n(e.code,{children:"<Modal />"}),". Legger horisontal spacing mellom barn og legger de over flere rader ved behov."]}),`
`,o(e.p,{children:["Det støttes alle native HTML-attributter som er en del av ",n(e.code,{children:"HTMLAttributes<HTMLDivElement>"}),"-interface i ",n(e.code,{children:"htmlProps"}),"."]})]})}function z(t={}){const{wrapper:e}=Object.assign({},l(),t.components);return e?n(e,Object.assign({},t,{children:n(d,t)})):d(t)}export{z as default};
//# sourceMappingURL=Modal-1d897022.js.map