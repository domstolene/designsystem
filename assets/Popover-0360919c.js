import{j as r,b as o,F as h}from"./focus-visible-17f12d09.js";import{M as a,e as i,f as p,g as l,P as m}from"./index-c0e0960b.js";import{p as v,S as k,M as g,F as t}from"./storybook-components-b7b7a39c.js";import{P as u,a as s}from"./Popover.stories-b05e85ad.js";import{u as c}from"./index-09fac16e.js";import"./index-c6dae603.js";import"./iframe-6efa2ccf.js";import"../sb-preview/runtime.js";import"./index-519f2600.js";import"./index-eb008d06.js";import"./useMountTransition-ab1b2779.js";import"./visibilityTransition-86c3da85.js";import"./focusVisible-bd00be70.js";import"./useFloatPosition-f4d76573.js";import"./floating-ui.react-dom.esm-68eb967a.js";import"./floating-ui.dom.browser.min-bfaefb31.js";import"./useCombinedRefs-764cd8e8.js";import"./useOnClickOutside-08b83e6f.js";import"./BaseComponentProps-bb0d5515.js";import"./Typography-ddbe86f6.js";import"./Typography.utils-3c68477b.js";import"./selection-dced972e.js";import"./color-0daeea22.js";import"./close-bbf4cbe9.js";import"./SvgWrapper-0812a1f2.js";import"./Paper-19f1cdc7.js";import"./Button-4fdfc19e.js";import"./Button.tokens-82906d32.js";import"./text-20d7ad40.js";import"./normalize-f756ee4b.js";import"./Spinner-7298b3ed.js";import"./Icon-a968456f.js";import"./useOnKeyDown-77bae070.js";import"./removeButtonStyling-867d6ba4.js";function d(n){const e=Object.assign({h1:"h1",h2:"h2",p:"p",ul:"ul",li:"li",strong:"strong",code:"code",h3:"h3",h4:"h4"},c(),n.components);return o(h,{children:[r(a,{of:u}),`
`,r(e.h1,{id:"popover",children:"Popover"}),`
`,r(v,{docsHref:"https://design.domstol.no/987b33f71/p/185219-popover/b/656a67",figmaHref:"https://www.figma.com/file/ewqSDmkgqDQ5PyOsRp4V5b/?node-id=4988%3A128366",githubHref:"https://github.com/domstolene/designsystem/tree/master/components/src/components/Popover"}),`
`,r(e.h2,{id:"demo",children:"Demo"}),`
`,r(i,{children:r(p,{id:"dds-components-popover--default",height:"350px"})}),`
`,r(k,{href:`${g}dds-components-popover`}),`
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
  <Button label="Åpne" />
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
`]})]})}function U(n={}){const{wrapper:e}=Object.assign({},c(),n.components);return e?r(e,Object.assign({},n,{children:r(d,n)})):d(n)}export{U as default};
//# sourceMappingURL=Popover-0360919c.js.map
