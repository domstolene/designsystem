import{d as S,s as b,j as e,b as l}from"./focus-visible-17f12d09.js";import{R as p}from"./storybook-components-8785bb6b.js";import{r as M}from"./index-c6dae603.js";import{d as O,e as L}from"./Typography.utils-3c68477b.js";import{b as z,g as B}from"./focusVisible-bd00be70.js";import{j as V,g as W}from"./BaseComponentProps-bb0d5515.js";import{T as a}from"./Typography-ddbe86f6.js";const{colors:s,spacing:A}=S,H={base:{color:s.DdsColorNeutralsWhite},hover:{color:s.DdsColorNeutralsWhite}},R={backgroundColor:s.DdsColorPrimaryBase,padding:A.SizesDdsSpacingLocalX025},F={link:H,wrapper:R},{wrapper:d,link:c}=F,X=b.div`
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
`,q=b.a`
  text-decoration: none;
  color: ${c.base.color};
  ${O(L)}

  @media (prefers-reduced-motion: no-preference) {
    transition: ${z};
  }
  &:focus {
    ${B}
  }
  &:hover {
    color: ${c.base.color};
  }
`,t=M.forwardRef((o,x)=>{const{text:C="Til hovedinnhold",top:w=0,id:P,className:$,htmlProps:D={},...N}=o,{className:j,style:_,...E}=D,I={top:w,className:V($,j),style:_};return e(X,{...I,children:e(q,{...W(P,E,N),ref:x,children:C})})});t.displayName="SkipToContent";const{colors:G}=S,J={title:"dds-components/SkipToContent",component:t,argTypes:{text:{control:{type:"text"}},top:{control:{type:"text"}}},parameters:{controls:{exclude:["style","className","href"]}}},r=()=>e(p,{title:"Skip to content - overview",display:"block",children:l("div",{style:{position:"relative"},children:[e(t,{href:"#innhold"}),e(t,{href:"#innhold",top:"30px",text:"Alternativ tekst"}),"'Tab' når du er i frame for å se varianter av komponenten",e(a,{id:"innhold",children:"Innhold"})]})}),n=o=>e(p,{title:"Skip to content - default",display:"block",children:l("div",{style:{position:"relative"},children:[e(t,{...o,href:"#innhold"}),"'Tab' når du er i frame for å se komponenten",e(a,{id:"innhold",children:"Innhold"})]})}),i=o=>e(p,{title:"Skip to content - example",display:"block",children:l("div",{style:{position:"relative"},children:[e(t,{...o,href:"#innhold"}),"'Tab' når du er i frame for å se komponenten; 'Enter' for å åpne i ny side og teste",e(a,{typographyType:"headingSans08",withMargins:!0,children:"Placeholder"}),e("div",{style:{height:"800px",backgroundColor:G.DdsColorPrimaryLightest},children:"Placeholder"}),e(a,{id:"innhold",withMargins:!0,children:"Innhold"})]})});var h,m,y;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`() => <StoryTemplate title="Skip to content - overview" display="block">
    <div style={{
    position: 'relative'
  }}>
      <SkipToContent href="#innhold" />
      <SkipToContent href="#innhold" top={'30px'} text="Alternativ tekst" />
      'Tab' når du er i frame for å se varianter av komponenten
      <Typography id="innhold">Innhold</Typography>
    </div>
  </StoryTemplate>`,...(y=(m=r.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var g,f,u;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`(args: SkipToContentProps) => <StoryTemplate title="Skip to content - default" display="block">
    <div style={{
    position: 'relative'
  }}>
      <SkipToContent {...args} href="#innhold" />
      'Tab' når du er i frame for å se komponenten
      <Typography id="innhold">Innhold</Typography>
    </div>
  </StoryTemplate>`,...(u=(f=n.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};var T,k,v;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`(args: SkipToContentProps) => <StoryTemplate title="Skip to content - example" display="block">
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
  </StoryTemplate>`,...(v=(k=i.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};const K=["Overview","Default","Example"],re=Object.freeze(Object.defineProperty({__proto__:null,Default:n,Example:i,Overview:r,__namedExportsOrder:K,default:J},Symbol.toStringTag,{value:"Module"}));export{re as S};
//# sourceMappingURL=SkipToContent.stories-7634775e.js.map
