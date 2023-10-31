import{a as e,j as p}from"./jsx-runtime-e43ccb36.js";import{S as l}from"./StoryTemplate-d3d045d5.js";import"./Caption-f392befe.js";import"./Heading-ad44a14c.js";import"./Label-2f40b05d.js";import"./Legend-4a50a7d7.js";import"./Link-53575534.js";import"./Paragraph-ea3f8ca3.js";import"./TextOverflowEllipsis-6cc9a60a.js";import{a as L,d as I,T as a}from"./Typography-2f5b7ed6.js";import{r as V}from"./index-1b03fe98.js";import{d as S,s as x}from"./ddsReferenceTokens-a28ebf03.js";import{j as O,g as A}from"./BaseComponentProps-5f9a30f8.js";import{a as H,e as q}from"./Input.styles-61cf55a8.js";const{colors:s,spacing:z}=S,B={base:{color:s.DdsColorNeutralsWhite},hover:{color:s.DdsColorNeutralsWhite}},W={backgroundColor:s.DdsColorPrimaryBase,padding:z.SizesDdsSpacingLocalX025},F={link:B,wrapper:W},{wrapper:d,link:c}=F,R=x.div`
  box-sizing: border-box;
  position: absolute;
  top: ${({top:o})=>o};
  text-align: center;
  overflow: hidden;
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  width: 1px;
  white-space: nowrap;
  background-color: ${d.backgroundColor};
  padding: ${d.padding};
  opacity: 0;

  @media (prefers-reduced-motion: no-preference) {
    transition: opacity 0.2s;
  }

  &:focus-within {
    clip: auto;
    height: auto;
    overflow: auto;
    width: 100%;
    z-index: 250;
    opacity: 1;
  }
`,U=x.a`
  text-decoration: none;
  color: ${c.base.color};
  ${L(I)}

  @media (prefers-reduced-motion: no-preference) {
    transition: ${H};
  }
  &:focus {
    ${q}
  }
  &:hover {
    color: ${c.base.color};
  }
`,t=V.forwardRef((o,b)=>{const{text:C="Til hovedinnhold",top:w=0,id:P,className:_,htmlProps:E={},...N}=o,{className:$,style:D,...M}=E,j={top:w,className:O(_,$),style:D};return e(R,{...j,children:e(U,{...A(P,M,N),ref:b,children:C})})});t.displayName="SkipToContent";try{t.displayName="SkipToContent",t.__docgenInfo={description:"",displayName:"SkipToContent",props:{text:{defaultValue:null,description:"Teksten som vises i lenka.",name:"text",required:!1,type:{name:"string | undefined"}},href:{defaultValue:null,description:"Spesifiserer hvor det skal hoppes til via `id`-attributtet til innholdet.",name:"href",required:!0,type:{name:"string"}},top:{defaultValue:null,description:"Avstand fra top i nærmeste posisjonert container.",name:"top",required:!1,type:{name:"Top<0 | (string & {})> | undefined"}},htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:"HTMLAttributes<HTMLAnchorElement> | undefined"}}}}}catch{}const{colors:X}=S,G={title:"dds-components/SkipToContent",component:t,argTypes:{text:{control:{type:"text"}},top:{control:{type:"text"}}},parameters:{controls:{exclude:["style","className","href"]}}},r=()=>e(l,{title:"Skip to content - overview",display:"block",children:p("div",{style:{position:"relative"},children:[e(t,{href:"#innhold"}),e(t,{href:"#innhold",top:"30px",text:"Alternativ tekst"}),"'Tab' når du er i frame for å se varianter av komponenten",e(a,{id:"innhold",children:"Innhold"})]})}),n=o=>e(l,{title:"Skip to content - default",display:"block",children:p("div",{style:{position:"relative"},children:[e(t,{...o,href:"#innhold"}),"'Tab' når du er i frame for å se komponenten",e(a,{id:"innhold",children:"Innhold"})]})}),i=o=>e(l,{title:"Skip to content - example",display:"block",children:p("div",{style:{position:"relative"},children:[e(t,{...o,href:"#innhold"}),"'Tab' når du er i frame for å se komponenten; 'Enter' for å åpne i ny side og teste",e(a,{typographyType:"headingSans08",withMargins:!0,children:"Placeholder"}),e("div",{style:{height:"800px",backgroundColor:X.DdsColorPrimaryLightest},children:"Placeholder"}),e(a,{id:"innhold",withMargins:!0,children:"Innhold"})]})});var m,h,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`() => <StoryTemplate title="Skip to content - overview" display="block">
    <div style={{
    position: 'relative'
  }}>
      <SkipToContent href="#innhold" />
      <SkipToContent href="#innhold" top={'30px'} text="Alternativ tekst" />
      'Tab' når du er i frame for å se varianter av komponenten
      <Typography id="innhold">Innhold</Typography>
    </div>
  </StoryTemplate>`,...(u=(h=r.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var y,f,g;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`(args: SkipToContentProps) => <StoryTemplate title="Skip to content - default" display="block">
    <div style={{
    position: 'relative'
  }}>
      <SkipToContent {...args} href="#innhold" />
      'Tab' når du er i frame for å se komponenten
      <Typography id="innhold">Innhold</Typography>
    </div>
  </StoryTemplate>`,...(g=(f=n.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var T,k,v;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`(args: SkipToContentProps) => <StoryTemplate title="Skip to content - example" display="block">
    <div style={{
    position: 'relative'
  }}>
      <SkipToContent {...args} href="#innhold" />
      'Tab' når du er i frame for å se komponenten; 'Enter' for å åpne i ny side
      og teste
      <Typography typographyType="headingSans08" withMargins>
        Placeholder
      </Typography>
      <div style={{
      height: '800px',
      backgroundColor: Colors.DdsColorPrimaryLightest
    }}>
        Placeholder
      </div>
      <Typography id="innhold" withMargins>
        Innhold
      </Typography>
    </div>
  </StoryTemplate>`,...(v=(k=i.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};const J=["Overview","Default","Example"],de=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Example:i,Overview:r,__namedExportsOrder:J,default:G},Symbol.toStringTag,{value:"Module"}));export{de as S};
//# sourceMappingURL=SkipToContent.stories-af085852.js.map
