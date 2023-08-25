import{d as S,s as x,a as e,j as l}from"./ddsReferenceTokens-f1d35829.js";import{R as p}from"./storybook-components-eb38b664.js";import{O as j,A as M,T as a}from"./dds-typography-cc6cb429.js";import{r as z}from"./index-d47b1f5a.js";import{f as A,a as L}from"./dds-core-c67132cd.js";import{V as W,W as B}from"./dds-form-9b45fc8d.js";const{colors:s,spacing:R}=S,H={base:{color:s.DdsColorNeutralsWhite},hover:{color:s.DdsColorNeutralsWhite}},Q={backgroundColor:s.DdsColorPrimaryBase,padding:R.SizesDdsSpacingLocalX025},V={link:H,wrapper:Q},{wrapper:d,link:c}=V,X=x.div`
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
`,q=x.a`
  text-decoration: none;
  color: ${c.base.color};
  ${j(M)}

  @media (prefers-reduced-motion: no-preference) {
    transition: ${W};
  }
  &:focus {
    ${B}
  }
  &:hover {
    color: ${c.base.color};
  }
`,t=z.forwardRef((o,b)=>{const{text:C="Til hovedinnhold",top:w=0,id:P,className:$,htmlProps:D={},...N}=o,{className:O,style:_,...E}=D,I={top:w,className:A($,O),style:_};return e(X,{...I,children:e(q,{...L(P,E,N),ref:b,children:C})})});t.displayName="SkipToContent";const{colors:F}=S,G={title:"dds-components/SkipToContent",component:t,argTypes:{text:{control:{type:"text"}},top:{control:{type:"text"}}},parameters:{controls:{exclude:["style","className","href"]}}},r=()=>e(p,{title:"Skip to content - overview",display:"block",children:l("div",{style:{position:"relative"},children:[e(t,{href:"#innhold"}),e(t,{href:"#innhold",top:"30px",text:"Alternativ tekst"}),"'Tab' når du er i frame for å se varianter av komponenten",e(a,{id:"innhold",children:"Innhold"})]})}),n=o=>e(p,{title:"Skip to content - default",display:"block",children:l("div",{style:{position:"relative"},children:[e(t,{...o,href:"#innhold"}),"'Tab' når du er i frame for å se komponenten",e(a,{id:"innhold",children:"Innhold"})]})}),i=o=>e(p,{title:"Skip to content - example",display:"block",children:l("div",{style:{position:"relative"},children:[e(t,{...o,href:"#innhold"}),"'Tab' når du er i frame for å se komponenten; 'Enter' for å åpne i ny side og teste",e(a,{typographyType:"headingSans08",withMargins:!0,children:"Placeholder"}),e("div",{style:{height:"800px",backgroundColor:F.DdsColorPrimaryLightest},children:"Placeholder"}),e(a,{id:"innhold",withMargins:!0,children:"Innhold"})]})});var h,m,y;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`() => <StoryTemplate title="Skip to content - overview" display="block">
    <div style={{
    position: 'relative'
  }}>
      <SkipToContent href="#innhold" />
      <SkipToContent href="#innhold" top={'30px'} text="Alternativ tekst" />
      'Tab' når du er i frame for å se varianter av komponenten
      <Typography id="innhold">Innhold</Typography>
    </div>
  </StoryTemplate>`,...(y=(m=r.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var f,g,k;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`(args: SkipToContentProps) => <StoryTemplate title="Skip to content - default" display="block">
    <div style={{
    position: 'relative'
  }}>
      <SkipToContent {...args} href="#innhold" />
      'Tab' når du er i frame for å se komponenten
      <Typography id="innhold">Innhold</Typography>
    </div>
  </StoryTemplate>`,...(k=(g=n.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};var u,T,v;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`(args: SkipToContentProps) => <StoryTemplate title="Skip to content - example" display="block">
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
  </StoryTemplate>`,...(v=(T=i.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};const J=["Overview","Default","Example"],te=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Example:i,Overview:r,__namedExportsOrder:J,default:G},Symbol.toStringTag,{value:"Module"}));export{te as S};
//# sourceMappingURL=SkipToContent.stories-61b0ef8c.js.map
