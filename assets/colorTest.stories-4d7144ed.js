import{A as s,s as t,d as x,j as a,F as T,a as o}from"./ddsReferenceTokens-647ce456.js";import{S as j}from"./StoryTemplate-1d63849e.js";import{C as E}from"./Checkbox-9b783ae7.js";import{R as A}from"./RadioButton-0a2ffd21.js";import{B as w,a as c}from"./Breadcrumbs-81117673.js";import{G}from"./GlobalMessage-eb8f22f7.js";import{C as N}from"./CheckboxGroup-bac79c69.js";import{R}from"./RadioButtonGroup-7e7baaf2.js";import{L as B}from"./LocalMessage-f73e9916.js";import{B as L}from"./Button-f2a6066f.js";import{T as D}from"./Typography-d54ea9fd.js";import{T as M}from"./TextInput-1767b74e.js";import"./index-ebeaab24.js";import"./chunk-S4VUQJ4A-a3a44c7b.js";import"./iframe-c30bd5c4.js";import"../sb-preview/runtime.js";import"./index-72bda2b9.js";import"./index-9c09ad76.js";import"./index-356e4a49.js";import"./BaseComponentProps-a100791d.js";import"./Caption-0ff47cfa.js";import"./TextOverflowEllipsis-e3546c5b.js";import"./Heading-ded557b4.js";import"./Label-b7852367.js";import"./Legend-d58c0461.js";import"./Link-037ca604.js";import"./Paragraph-a74f99d8.js";import"./SelectionControl.styles-15780012.js";import"./Input.styles-115c96a3.js";import"./SelectionControl.tokens-e5dfef0c.js";import"./libraryAdd-35e18a4f.js";import"./Icon-42793503.js";import"./removeListStyling-80ec5e55.js";import"./renderInputMessage-cc09d168.js";import"./InputMessage-53e4c8ef.js";import"./combineHandlers-f6d4455a.js";import"./LocalMessage.tokens-59426b17.js";import"./Button.tokens-cb9e169d.js";import"./normalize-f756ee4b.js";import"./Spinner-866d56ff.js";import"./Input.utils-1d79ab61.js";import"./icon-aa5b86b3.js";const Me={title:"Playground/color test"},{colors:I}=x,r={colors7:{light:"#5DA1CE",lighter:"#A3C9E3",lightest:"#E8F2F8",base:"#1878b9",dark:"#136094",darker:"#0E486F"},colors6:{light:"#6DA1C4",lighter:"#ABC9DD",lightest:"#EAF2F7",base:"#2E78AA",dark:"#256088",darker:"#1C4866"},colors5:{light:"#78B1D7",lighter:"#B2D3E8",lightest:"#ECF4F9",base:"#006DB6",dark:"#005792",darker:"#00416D",darkest:"#002C49"},infoNew:{light:"rgba(158, 206, 238, 1)",lighter:"rgba(200, 227, 245, 1)",lightest:"rgba(241, 248, 253, 1)",base:"rgba(117, 185, 230, 1)",dark:"rgba(94, 148, 184, 1)",darker:"rgba(70, 111, 138, 1)",darkest:"rgba(47, 74, 92, 1)"}},P=s`
  background-color: ${r.infoNew.lightest};
  border-color: ${r.infoNew.light};
  svg {
    color: ${r.infoNew.darkest};
  }
`,_=t(B)`
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
`,l=t(E)`
  ${({colorpalette:e})=>e&&F(e)}
`,b=t(A)`
  ${({colorpalette:e})=>e&&F(e)}
`,U=(e,m)=>m==="a"&&s`
    color: ${r[e].base};
    &:hover {
      color: ${r[e].dark};
    }
  `,q=t(D)`
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
`,p=e=>a(T,{children:[o(G,{purpose:"warning",children:"Dette er en viktig melding"}),a(K,{colorpalette:e,children:[o(c,{href:"#",children:"Norges domstoler"}),o(c,{href:"#",children:"Arv og skifte"}),o(c,{children:"Skjema"})]}),a(j,{title:"Skjema",children:[o(g,{colorpalette:e,label:"Fornavn"}),o(g,{colorpalette:e,label:"Etternavn"}),a(N,{label:"Interesser",children:[o(l,{colorpalette:e,label:"Bøker"}),o(l,{colorpalette:e,label:"Film"}),o(l,{colorpalette:e,label:"Sport"})]}),a(D,{children:["De fleste arvinger velger å stå for skiftet selv. Privat skifte kan først starte når du har fått skifteattest. Skjemaet"," ",o(q,{typographyType:"a",colorpalette:e,children:"Erklæring om privat skifte av dødsbo"})," ","må fylles ut. På skjemaet må en eller flere av arvingene overta ansvaret for avdødes gjeld. Den eller de som sender inn skjemaet, er selv ansvarlig for at retten har fått en fullstendig oversikt over hvem som er arvinger. Det er egne skjema for gjenlevende ektefelle/arveberettig samboer som mener å være enearving etter bestemmelsene om minstearv."]}),o(_,{purpose:"info",children:"Dette er en infomelding"}),a(R,{label:"Sivilstand",children:[o(b,{name:"test",colorpalette:e,label:"Ugift"}),o(b,{name:"test",colorpalette:e,label:"Gift"})]}),o(B,{purpose:"danger",children:"Dette er en danger-melding for testing"}),o(l,{colorpalette:e,label:"Jeg bekrefter noe"}),o(O,{colorpalette:e,label:"Send"})]}),o(Q,{})]}),i=()=>p("colors5"),n=()=>p("colors6"),d=()=>p("colors7");var k,h,f;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:'() => TestForm("colors5")',...(f=(h=i.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var u,v,$;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:'() => TestForm("colors6")',...($=(v=n.parameters)==null?void 0:v.docs)==null?void 0:$.source}}};var y,S,C;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:'() => TestForm("colors7")',...(C=(S=d.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};const Ie=["Color5","Color6","Color7"];export{i as Color5,n as Color6,d as Color7,Ie as __namedExportsOrder,Me as default};
//# sourceMappingURL=colorTest.stories-4d7144ed.js.map
