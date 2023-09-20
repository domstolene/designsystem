import{s as p,a as e,j as l,d as c}from"./ddsReferenceTokens-f1d35829.js";import{R as g}from"./storybook-components-e6e74b30.js";import{T as a}from"./dds-typography-cc6cb429.js";const{colors:y,spacing:n}=c,v=p.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${n.SizesDdsSpacingLayoutX10};
  height: 100%;
  width: 100%;
  background-color: ${y.DdsColorNeutralsGray1};
  padding: ${n.SizesDdsSpacingLayoutX15};
`,h=p.div`
  max-width: 70ch;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: ${n.SizesDdsSpacingLayoutX1};
`;function i({title:t,message:u,...d}){return e(v,{...d,children:l(h,{children:[t&&e(a,{typographyType:"headingSans02",children:t}),e(a,{typographyType:"bodySans02",children:u})]})})}i.displayName="EmptyContent";const C={title:"dds-components/EmptyContent",component:i,argTypes:{title:{name:"title",type:{name:"string",required:!1}}}},s=t=>l(g,{title:"EmptyContent",children:[e(i,{...t,title:"Tittel",message:"Dette er en tekst."}),e(i,{...t,message:"Kort melding."}),e(i,{...t,message:`Dette er en lang tekst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Donec tempus imperdiet leo, eget tempus nulla suscipit vel. 
        Curabitur accumsan dapibus elit, eu semper massa pulvinar vitae.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Donec tempus imperdiet leo, eget tempus nulla suscipit vel. 
        Curabitur accumsan dapibus elit, eu semper massa pulvinar vitae.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Donec tempus imperdiet leo, eget tempus nulla suscipit vel. 
        Curabitur accumsan dapibus elit, eu semper massa pulvinar vitae.`}),e("div",{style:{height:"25rem",width:"100%"},children:e(i,{...t,message:"Ligger inne i et element med definert høyde og bredde."})})]});var r,o,m;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`(args: EmptyContentProps) => {
  return <StoryTemplate title="EmptyContent">
      <EmptyContent {...args} title="Tittel" message="Dette er en tekst." />

      <EmptyContent {...args} message="Kort melding." />

      <EmptyContent {...args} message={\`Dette er en lang tekst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Donec tempus imperdiet leo, eget tempus nulla suscipit vel. 
        Curabitur accumsan dapibus elit, eu semper massa pulvinar vitae.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Donec tempus imperdiet leo, eget tempus nulla suscipit vel. 
        Curabitur accumsan dapibus elit, eu semper massa pulvinar vitae.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Donec tempus imperdiet leo, eget tempus nulla suscipit vel. 
        Curabitur accumsan dapibus elit, eu semper massa pulvinar vitae.\`} />

      <div style={{
      height: '25rem',
      width: '100%'
    }}>
        <EmptyContent {...args} message="Ligger inne i et element med definert høyde og bredde." />
      </div>
    </StoryTemplate>;
}`,...(m=(o=s.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const b=["Overview"],D=Object.freeze(Object.defineProperty({__proto__:null,Overview:s,__namedExportsOrder:b,default:C},Symbol.toStringTag,{value:"Module"}));export{D as E,s as O};
//# sourceMappingURL=EmptyContent.stories-145da8f3.js.map
