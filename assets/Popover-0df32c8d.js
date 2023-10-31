import{a as r,j as o,F as a}from"./jsx-runtime-e43ccb36.js";import{M as h,C as i,b as p,A as l,P as m}from"./chunk-HLWAVYOI-68fcc65d.js";import{C as k,L as v,c as t}from"./StoryTemplate-2b95dd38.js";import{S as g}from"./constants-69754a51.js";import{P as u,a as s}from"./Popover.stories-8f8d9db7.js";import{u as c}from"./index-2ef8b458.js";import"./index-1b03fe98.js";import"./iframe-8f736c6d.js";import"../sb-preview/runtime.js";import"./index-6d191f71.js";import"./index-6fd5a17b.js";import"./index-356e4a49.js";import"./ddsReferenceTokens-a28ebf03.js";import"./Caption-f392befe.js";import"./BaseComponentProps-5f9a30f8.js";import"./TextOverflowEllipsis-6cc9a60a.js";import"./Typography-2f5b7ed6.js";import"./Heading-ad44a14c.js";import"./Label-2f40b05d.js";import"./Legend-4a50a7d7.js";import"./Link-53575534.js";import"./Paragraph-ea3f8ca3.js";import"./removeButtonStyling-867d6ba4.js";import"./useFloatPosition-50e3a2ff.js";import"./floating-ui.dom-a5fd4560.js";import"./libraryAdd-923f0275.js";import"./Icon-3ee4d35b.js";import"./Input.styles-61cf55a8.js";import"./Button-5add3b32.js";import"./Button.tokens-48945bc8.js";import"./normalize-f756ee4b.js";import"./Spinner-e224c804.js";function d(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",strong:"strong",code:"code",h3:"h3",h4:"h4"},c(),n.components);return o(a,{children:[r(h,{of:u}),`
`,r(e.h1,{id:"popover",children:"Popover"}),`
`,r(k,{docsHref:"https://design.domstol.no/987b33f71/p/185219-popover/b/656a67",figmaHref:"https://www.figma.com/file/ewqSDmkgqDQ5PyOsRp4V5b/?node-id=4988%3A128366",githubHref:"https://github.com/domstolene/designsystem/tree/main/packages/components/src/components/Popover"}),`
`,r(e.h2,{id:"demo",children:"Demo"}),`
`,r(i,{children:r(p,{id:"dds-components-popover--default",height:"350px"})}),`
`,r(v,{href:`${g}dds-components-popover`}),`
`,r(e.h2,{id:"oversikt",children:"Oversikt"}),`
`,r(e.p,{children:"Komponenten består av tre elementer:"}),`
`,o(e.ul,{children:[`
`,o(e.li,{children:[r(e.strong,{children:r(e.code,{children:"<PopoverGroup />"})})," - wrapper for to barn: et anchor-element som styrer popover og selve popover-elementet: ",r(e.code,{children:"<Popover />"}),"."]}),`
`,o(e.li,{children:[r(e.strong,{children:"Anchor-element"}),", som er også et trigger-element. Et valgfritt interaktivt element, typisk en knapp, som åpner og lukker popover. Elementet får attributtene ",r(e.code,{children:"onClick"}),", ",r(e.code,{children:"ref"}),", ",r(e.code,{children:"aria-haspopup"})," og ",r(e.code,{children:"aria-controls"})," fra ",r(e.code,{children:"<PopoverGroup />"}),"."]}),`
`,o(e.li,{children:[r(e.strong,{children:r(e.code,{children:"<Popover />"})})," - en komponent som dukker opp via museklikk på anchor-elementet. Får enkelte props fra ",r(e.code,{children:"<PopoverGroup />"})," som ikke kan overskrives."]}),`
`]}),`
`,r(e.h2,{id:"bruk-i-koden",children:"Bruk i koden"}),`
`,r(t,{code:`import { Button, Popover, PopoverGroup } from '@norges-domstoler/dds-components';

<PopoverGroup>
  <Button>Åpne</Button>
  <Popover title="Tittel">Dette er en popover</Popover>
</PopoverGroup>
`}),`
`,r(e.h2,{id:"api",children:"API"}),`
`,r(e.h3,{id:"popovergroup",children:"PopoverGroup"}),`
`,o(e.p,{children:["Wrapper der anchor-elementet skal være første barnet og ",r(e.code,{children:"<Popover />"})," skal være andre barnet. ",r(e.code,{children:"<PopoverGroup />"})," har to funksjoner:"]}),`
`,o(e.ul,{children:[`
`,r(e.li,{children:"Håndtering av barnas oppførsel: åpning og lukking av popover, eventuelle ekstra callbacks."}),`
`,r(e.li,{children:"Automatisk forplanting av enkelte props hos barna: referanse til anchor-elementet for å simplifisere bruken av komponenten, aria-attributter for å oppfylle brukervennlighetskrav osv."}),`
`]}),`
`,o(e.p,{children:[r(e.code,{children:"<PopoverGroup />"})," returnerer kun barna uten en HTML-tag rundt dem."]}),`
`,o(e.p,{children:[r(e.strong,{children:"OBS!"})," all kontroll av ",r(e.code,{children:"<Popover />"})," som onClick events implementeres i ",r(e.code,{children:"<PopoverGroup />"}),", ikke direkte i ",r(e.code,{children:"<Popover />"}),"."]}),`
`,r(l,{of:s}),`
`,r(e.h3,{id:"popover-1",children:"Popover"}),`
`,r(e.p,{children:"Selve popover-elementet. Den åpnes når anchor-elementet trykkes, og den lukkes ved å trykke på anchor-elementet igjen, Esc-tast, lukkeknapptrykk og onBlur."}),`
`,r(l,{story:m}),`
`,o(e.p,{children:["I tillegg støttes alle native HTML-attributter som er en del av ",r(e.code,{children:"HTMLAttributes<HTMLDivElement>"}),"-interface i ",r(e.code,{children:"htmlProps"}),". ",r(e.strong,{children:"OBS!"})," ",r(e.code,{children:"id"})," er ekskludert da den blir sendt som prop fra ",r(s,{})," for å sørge for riktig oppførsel. ",r(e.code,{children:"id"})," settes via ",r(e.code,{children:"<PopoverGroup />"})," ",r(e.code,{children:"popoverId"}),"-prop."]}),`
`,r(e.h4,{id:"types",children:"Types"}),`
`,r(t,{code:`
  export type PopoverSizeProps = {
  width?: CSS.Property.Width<string>;
  height?: CSS.Property.Height<string>;
  minWidth?: CSS.Property.MinWidth<string>;
  minHeight?: CSS.Property.MinHeight<string>;
  maxWidth?: CSS.Property.MaxWidth<string>;
  maxHeight?: CSS.Property.MaxHeight<string>;
  };
  `}),`
`,r(e.h4,{id:"overflow",children:"Overflow"}),`
`,r(e.p,{children:"Det kan være relevant å begrense størrelsen på Popover slik at ikke hele teksten vises ved overflow. Da bør den synlige teksten avsluttes med en ellipse:"}),`
`,r(i,{children:r(p,{height:"350px",id:"dds-components-popover--overflow"})}),`
`,o(e.p,{children:[`For å oppnå det kan du sette sizeProps til ønskede verdier og gi tekstelementet som
er barnet i `,r(e.code,{children:"<Popover />"})," følgende CSS:"]}),`
`,r(t,{language:"css",code:`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  `}),`
`,r(e.h2,{id:"retningslinjer",children:"Retningslinjer"}),`
`,o(e.ul,{children:[`
`,o(e.li,{children:[r(e.code,{children:"<Popover />"})," skal dukke opp kun via eksplisitt interaksjon fra brukeren; Den skal for eksempel ikke vises når siden lastes inn - den kan bli plassert feil eller være i veien."]}),`
`,o(e.li,{children:[r(e.code,{children:"<Popover />"})," skal brukes på en måte som ikke forstyrrer brukeren."]}),`
`,o(e.li,{children:["Hvis anchor-elementet ikke er en knapp bør det settes ",r(e.code,{children:"role='button'"})," på den i de fleste tilfeller."]}),`
`]})]})}function V(n={}){const{wrapper:e}=Object.assign({},c(),n.components);return e?r(e,Object.assign({},n,{children:r(d,n)})):d(n)}export{V as default};
//# sourceMappingURL=Popover-0df32c8d.js.map
