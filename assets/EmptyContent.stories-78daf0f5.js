import{a as t,j as p}from"./jsx-runtime-e43ccb36.js";import{S as c}from"./StoryTemplate-a536eef8.js";import{s as l,d as g}from"./ddsReferenceTokens-f9f5a4e4.js";import"./Caption-6d408196.js";import"./Heading-5f7faa2b.js";import"./Label-9dee7f37.js";import"./Legend-41f9f05c.js";import"./Link-1567bf4e.js";import"./Paragraph-998f64b8.js";import"./TextOverflowEllipsis-1edb8626.js";import{T as a}from"./Typography-e857479c.js";const{colors:y,spacing:r}=g,v=l.div`
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
//# sourceMappingURL=EmptyContent.stories-78daf0f5.js.map
