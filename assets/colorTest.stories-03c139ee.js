import{a,d as f,s as o,j as s,A as l,F as J}from"./focus-visible-8467fd8b.js";import{D as Q,a as U}from"./dds-core-b89b291f.js";import"./dds-form-9dbc5b3d.js";import{i as q,a as H}from"./dds-icons-f9255b51.js";import{T as g,O as K}from"./dds-typography-4e6445f7.js";import{C as V,R as W,G as Y,a as Z,b as ee}from"./GlobalMessage-28b9b816.js";import{B as re}from"./LocalMessage.tokens-f6935001.js";import{T as ae}from"./TextInput-1950dba2.js";import{L as w}from"./LocalMessage-52fb4517.js";import{_ as T}from"./tslib.es6-49c71693.js";import{r as h}from"./index-d47b1f5a.js";import{R as oe}from"./storybook-components-76b2a6b1.js";import"./chunk-PCJTTTQV-aabcbb96.js";import"./iframe-59584ab4.js";import"../sb-preview/runtime.js";import"./index-db9ff070.js";import"./index-d475d2ea.js";import"./index-356e4a49.js";var te=function(t){return t.href!=null},n=h.forwardRef(function(e,t){var i=e.children,d=T(e,["children"]);return te(e)?a(g,{htmlProps:d,ref:t,typographyType:"a",children:i}):a(g,{htmlProps:d,ref:t,as:"span",color:"interactive",children:i})});n.displayName="Breadcrumb";n.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb"};var se=f.colors,A=f.spacing,le="bodySans02",ne={color:se.DdsColorInteractiveBase},ie={gap:A.SizesDdsSpacingLocalX05},de={gap:A.SizesDdsSpacingLocalX05},u={list:de,listItem:ie,icon:ne},ce=u.icon,me=u.list,pe=u.listItem,E=o.ol.withConfig({displayName:"Breadcrumbs__List",componentId:"sc-xdj21o-0"})([""," display:flex;flex-wrap:wrap;align-items:center;gap:",";"],Q,me.gap);E.displayName="List";var L=o.li.withConfig({displayName:"Breadcrumbs__ListItem",componentId:"sc-xdj21o-1"})(["align-items:center;display:flex;gap:",";",""],pe.gap,K(le));L.displayName="ListItem";var be=o(q).withConfig({displayName:"Breadcrumbs__StyledIcon",componentId:"sc-xdj21o-2"})(["color:",";"],ce.color),v=h.forwardRef(function(e,t){var i=e.children,d=e.id,R=e.className,G=e.htmlProps,M=T(e,["children","id","className","htmlProps"]),O=h.Children.toArray(i),z=O.map(function(X,y){return s(L,{children:[y!==0&&a(be,{icon:H.ChevronRightIcon}),X]},"breadcrumb-".concat(y))});return a("nav",Object.assign({},U(d,R,G,M),{ref:t,"aria-label":"brødsmulesti",children:a(E,{children:z})}))});v.displayName="Breadcrumbs";v.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs"};const Xe={title:"Playground/color test"},{colors:ge}=f,r={colors7:{light:"#5DA1CE",lighter:"#A3C9E3",lightest:"#E8F2F8",base:"#1878b9",dark:"#136094",darker:"#0E486F"},colors6:{light:"#6DA1C4",lighter:"#ABC9DD",lightest:"#EAF2F7",base:"#2E78AA",dark:"#256088",darker:"#1C4866"},colors5:{light:"#78B1D7",lighter:"#B2D3E8",lightest:"#ECF4F9",base:"#006DB6",dark:"#005792",darker:"#00416D",darkest:"#002C49"},infoNew:{light:"rgba(158, 206, 238, 1)",lighter:"rgba(200, 227, 245, 1)",lightest:"rgba(241, 248, 253, 1)",base:"rgba(117, 185, 230, 1)",dark:"rgba(94, 148, 184, 1)",darker:"rgba(70, 111, 138, 1)",darkest:"rgba(47, 74, 92, 1)"}},he=l`
  background-color: ${r.infoNew.lightest};
  border-color: ${r.infoNew.light};
  svg {
    color: ${r.infoNew.darkest};
  }
`,fe=o(w)`
  ${({purpose:e})=>e==="info"&&he}
`,ue=e=>l`
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
  `,ve=o(re)`
  ${({colorpalette:e})=>e&&ue(e)}
`,P=e=>l`
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
`,c=o(V)`
  ${({colorpalette:e})=>e&&P(e)}
`,$=o(W)`
  ${({colorpalette:e})=>e&&P(e)}
`,ke=(e,t)=>t==="a"&&l`
    color: ${r[e].base};
    &:hover {
      color: ${r[e].dark};
    }
  `,ye=o(g)`
  ${({colorpalette:e,typographyType:t})=>e&&ke(e,t)}
`,$e=e=>l`
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
`,S=o(ae)`
  ${({colorpalette:e})=>e&&$e(e)}
`,Se=e=>l`
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
`,Ce=o(v)`
  ${({colorpalette:e})=>e&&Se(e)}
`,Be=o.div`
  color: white;
  height: 100px;
  background-color: ${ge.DdsColorSecondaryDark};
`,k=e=>s(J,{children:[a(Y,{purpose:"warning",children:"Dette er en viktig melding"}),s(Ce,{colorpalette:e,children:[a(n,{href:"#",children:"Norges domstoler"}),a(n,{href:"#",children:"Arv og skifte"}),a(n,{children:"Skjema"})]}),s(oe,{title:"Skjema",children:[a(S,{colorpalette:e,label:"Fornavn"}),a(S,{colorpalette:e,label:"Etternavn"}),s(Z,{label:"Interesser",children:[a(c,{colorpalette:e,label:"Bøker"}),a(c,{colorpalette:e,label:"Film"}),a(c,{colorpalette:e,label:"Sport"})]}),s(g,{children:["De fleste arvinger velger å stå for skiftet selv. Privat skifte kan først starte når du har fått skifteattest. Skjemaet"," ",a(ye,{typographyType:"a",colorpalette:e,children:"Erklæring om privat skifte av dødsbo"})," ","må fylles ut. På skjemaet må en eller flere av arvingene overta ansvaret for avdødes gjeld. Den eller de som sender inn skjemaet, er selv ansvarlig for at retten har fått en fullstendig oversikt over hvem som er arvinger. Det er egne skjema for gjenlevende ektefelle/arveberettig samboer som mener å være enearving etter bestemmelsene om minstearv."]}),a(fe,{purpose:"info",children:"Dette er en infomelding"}),s(ee,{label:"Sivilstand",children:[a($,{name:"test",colorpalette:e,label:"Ugift"}),a($,{name:"test",colorpalette:e,label:"Gift"})]}),a(w,{purpose:"danger",children:"Dette er en danger-melding for testing"}),a(c,{colorpalette:e,label:"Jeg bekrefter noe"}),a(ve,{colorpalette:e,label:"Send"})]}),a(Be,{})]}),m=()=>k("colors5"),p=()=>k("colors6"),b=()=>k("colors7");var C,B,D;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:'() => TestForm("colors5")',...(D=(B=m.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var x,I,F;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:'() => TestForm("colors6")',...(F=(I=p.parameters)==null?void 0:I.docs)==null?void 0:F.source}}};var N,_,j;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:'() => TestForm("colors7")',...(j=(_=b.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};const Je=["Color5","Color6","Color7"];export{m as Color5,p as Color6,b as Color7,Je as __namedExportsOrder,Xe as default};
//# sourceMappingURL=colorTest.stories-03c139ee.js.map
