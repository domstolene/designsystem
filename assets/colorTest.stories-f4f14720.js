import{j as a,F as x,a as o}from"./jsx-runtime-e43ccb36.js";import{n as s,s as t,d as T}from"./ddsReferenceTokens-a28ebf03.js";import{S as j}from"./StoryTemplate-093416fc.js";import{G as E}from"./GlobalMessage-4e9f5bbb.js";import{B as c,a as w}from"./Breadcrumbs-ac825576.js";import{C as A}from"./CheckboxGroup-29c60af7.js";import{R as G}from"./RadioButtonGroup-7f270cf8.js";import{C as N}from"./Checkbox-c33ff1bf.js";import{R}from"./RadioButton-71beef05.js";import{T as B}from"./Typography-d13ef156.js";import{L as D}from"./LocalMessage-91b004b6.js";import{B as L}from"./Button-ba8adec5.js";import{T as M}from"./TextInput-8b03cfba.js";import"./index-1b03fe98.js";import"./chunk-HLWAVYOI-0b8d4c76.js";import"./iframe-8b23edcd.js";import"../sb-preview/runtime.js";import"./index-6d191f71.js";import"./index-6fd5a17b.js";import"./index-356e4a49.js";import"./libraryAdd-72c0bfa3.js";import"./Icon-eb542f51.js";import"./BaseComponentProps-b6ad9f7d.js";import"./Caption-d810b87c.js";import"./TextOverflowEllipsis-6cc9a60a.js";import"./Heading-0c5437bc.js";import"./Label-05114518.js";import"./Legend-9969638c.js";import"./Link-c264ab95.js";import"./Paragraph-88055bd8.js";import"./removeListStyling-80ec5e55.js";import"./renderInputMessage-4f5fcc5d.js";import"./InputMessage-235fa100.js";import"./SelectionControl.styles-cff04831.js";import"./Input.styles-97d4f19a.js";import"./SelectionControl.tokens-35db2359.js";import"./combineHandlers-f6d4455a.js";import"./LocalMessage.tokens-cfdb2440.js";import"./Button.tokens-aa4a9c73.js";import"./normalize-f756ee4b.js";import"./Spinner-842be24a.js";import"./Input.utils-1d79ab61.js";import"./icon-aa5b86b3.js";const Ie={title:"Playground/color test"},{colors:I}=T,r={colors7:{light:"#5DA1CE",lighter:"#A3C9E3",lightest:"#E8F2F8",base:"#1878b9",dark:"#136094",darker:"#0E486F"},colors6:{light:"#6DA1C4",lighter:"#ABC9DD",lightest:"#EAF2F7",base:"#2E78AA",dark:"#256088",darker:"#1C4866"},colors5:{light:"#78B1D7",lighter:"#B2D3E8",lightest:"#ECF4F9",base:"#006DB6",dark:"#005792",darker:"#00416D",darkest:"#002C49"},infoNew:{light:"rgba(158, 206, 238, 1)",lighter:"rgba(200, 227, 245, 1)",lightest:"rgba(241, 248, 253, 1)",base:"rgba(117, 185, 230, 1)",dark:"rgba(94, 148, 184, 1)",darker:"rgba(70, 111, 138, 1)",darkest:"rgba(47, 74, 92, 1)"}},P=s`
  background-color: ${r.infoNew.lightest};
  border-color: ${r.infoNew.light};
  svg {
    color: ${r.infoNew.darkest};
  }
`,_=t(D)`
  ${({purpose:e})=>e==="info"&&P}
`,J=e=>s`
    background-color: ${r[e].base};
    border-color: ${r[e].base};
    &:hover {
      background-color: ${r[e].dark};
      border-color: ${r[e].dark};
    }
    &:active {
      background-color: ${r[e].darker};
      border-color: ${r[e].darker};
    }
  `,O=t(L)`
  ${({colorpalette:e})=>e&&J(e)}
`,F=e=>s`
  &:hover input:enabled ~ span:first-of-type {
    background-color: ${r[e].lightest};
    border-color: ${r[e].base};
  }
  input:checked:enabled ~ span:first-of-type {
    background-color: ${r[e].base};
    border-color: ${r[e].base};
  }
  &:hover input:checked:enabled ~ span:first-of-type {
    background-color: ${r[e].dark};
    border-color: ${r[e].dark};
  }
`,l=t(N)`
  ${({colorpalette:e})=>e&&F(e)}
`,b=t(R)`
  ${({colorpalette:e})=>e&&F(e)}
`,U=(e,m)=>m==="a"&&s`
    color: ${r[e].base};
    &:hover {
      color: ${r[e].dark};
    }
  `,q=t(B)`
  ${({colorpalette:e,typographyType:m})=>e&&U(e,m)}
`,z=e=>s`
  input {
    &:hover:enabled {
      border-color: ${r[e].base};
      box-shadow: 0 0 0 1px ${r[e].base};
      background-color: ${r[e].lightest};
    }
    &:focus:enabled {
      border-color: ${r[e].base};
      box-shadow: 0 0 0 1px ${r[e].base};
    }
    &:hover:enabled ~ label,
    &:focus:enabled ~ label {
      color: ${r[e].base};
    }
  }
`,g=t(M)`
  ${({colorpalette:e})=>e&&z(e)}
`,H=e=>s`
  a {
    color: ${r[e].base};
    &:hover {
      color: ${r[e].dark};
    }
  }
  p,
  svg {
    color: ${r[e].base};
  }
`,K=t(w)`
  ${({colorpalette:e})=>e&&H(e)}
`,Q=t.div`
  color: white;
  height: 100px;
  background-color: ${I.DdsColorSecondaryDark};
`,p=e=>a(x,{children:[o(E,{purpose:"warning",children:"Dette er en viktig melding"}),a(K,{colorpalette:e,children:[o(c,{href:"#",children:"Norges domstoler"}),o(c,{href:"#",children:"Arv og skifte"}),o(c,{children:"Skjema"})]}),a(j,{title:"Skjema",children:[o(g,{colorpalette:e,label:"Fornavn"}),o(g,{colorpalette:e,label:"Etternavn"}),a(A,{label:"Interesser",children:[o(l,{colorpalette:e,label:"Bøker"}),o(l,{colorpalette:e,label:"Film"}),o(l,{colorpalette:e,label:"Sport"})]}),a(B,{children:["De fleste arvinger velger å stå for skiftet selv. Privat skifte kan først starte når du har fått skifteattest. Skjemaet"," ",o(q,{typographyType:"a",colorpalette:e,children:"Erklæring om privat skifte av dødsbo"})," ","må fylles ut. På skjemaet må en eller flere av arvingene overta ansvaret for avdødes gjeld. Den eller de som sender inn skjemaet, er selv ansvarlig for at retten har fått en fullstendig oversikt over hvem som er arvinger. Det er egne skjema for gjenlevende ektefelle/arveberettig samboer som mener å være enearving etter bestemmelsene om minstearv."]}),o(_,{purpose:"info",children:"Dette er en infomelding"}),a(G,{label:"Sivilstand",children:[o(b,{name:"test",colorpalette:e,label:"Ugift"}),o(b,{name:"test",colorpalette:e,label:"Gift"})]}),o(D,{purpose:"danger",children:"Dette er en danger-melding for testing"}),o(l,{colorpalette:e,label:"Jeg bekrefter noe"}),o(O,{colorpalette:e,label:"Send"})]}),o(Q,{})]}),i=()=>p("colors5"),n=()=>p("colors6"),d=()=>p("colors7");var k,f,h;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:'() => TestForm("colors5")',...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var u,v,$;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:'() => TestForm("colors6")',...($=(v=n.parameters)==null?void 0:v.docs)==null?void 0:$.source}}};var y,S,C;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:'() => TestForm("colors7")',...(C=(S=d.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};const Pe=["Color5","Color6","Color7"];export{i as Color5,n as Color6,d as Color7,Pe as __namedExportsOrder,Ie as default};
//# sourceMappingURL=colorTest.stories-f4f14720.js.map
