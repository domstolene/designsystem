import{a as t,j as p}from"./jsx-runtime-e43ccb36.js";import{S as c}from"./StoryTemplate-2c894fa9.js";import{s as l,d as g}from"./ddsReferenceTokens-fe3c594e.js";import"./Caption-848a816b.js";import"./Heading-9ec1ef64.js";import"./Label-393cff6f.js";import"./Legend-6f4c2491.js";import"./Link-e04d3bba.js";import"./Paragraph-ba6a9c6f.js";import"./TextOverflowEllipsis-c2a9fc8f.js";import{T as a}from"./Typography-dcf6ef21.js";const{colors:y,spacing:r}=g,v=l.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${r.SizesDdsSpacingLayoutX10};
  height: 100%;
  width: 100%;
  background-color: ${y.DdsColorNeutralsGray1};
  padding: ${r.SizesDdsSpacingLayoutX15};
`,h=l.div`
  max-width: 70ch;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: ${r.SizesDdsSpacingLayoutX1};
`;function i({title:e,message:u,...d}){return t(v,{...d,children:p(h,{children:[e&&t(a,{typographyType:"headingSans02",children:e}),t(a,{typographyType:"bodySans02",children:u})]})})}i.displayName="EmptyContent";try{i.displayName="EmptyContent",i.__docgenInfo={description:"",displayName:"EmptyContent",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | undefined"}},message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}}}}}catch{}const C={title:"dds-components/EmptyContent",component:i,argTypes:{title:{name:"title",type:{name:"string",required:!1}}}},s=e=>p(c,{title:"EmptyContent",children:[t(i,{...e,title:"Tittel",message:"Dette er en tekst."}),t(i,{...e,message:"Kort melding."}),t(i,{...e,message:`Dette er en lang tekst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Donec tempus imperdiet leo, eget tempus nulla suscipit vel. 
        Curabitur accumsan dapibus elit, eu semper massa pulvinar vitae.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Donec tempus imperdiet leo, eget tempus nulla suscipit vel. 
        Curabitur accumsan dapibus elit, eu semper massa pulvinar vitae.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Donec tempus imperdiet leo, eget tempus nulla suscipit vel. 
        Curabitur accumsan dapibus elit, eu semper massa pulvinar vitae.`}),t("div",{style:{height:"25rem",width:"100%"},children:t(i,{...e,message:"Ligger inne i et element med definert høyde og bredde."})})]});var n,o,m;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`(args: EmptyContentProps) => {
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
}`,...(m=(o=s.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const f=["Overview"],O=Object.freeze(Object.defineProperty({__proto__:null,Overview:s,__namedExportsOrder:f,default:C},Symbol.toStringTag,{value:"Module"}));export{O as E,s as O};
//# sourceMappingURL=EmptyContent.stories-09855fc2.js.map
