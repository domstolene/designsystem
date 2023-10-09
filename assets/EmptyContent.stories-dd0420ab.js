import{s as p,a as t,j as l,d as c}from"./ddsReferenceTokens-647ce456.js";import{S as g}from"./StoryTemplate-40ed0c91.js";import"./Caption-0ff47cfa.js";import"./Heading-ded557b4.js";import"./Label-b7852367.js";import"./Legend-d58c0461.js";import"./Link-037ca604.js";import"./Paragraph-a74f99d8.js";import"./TextOverflowEllipsis-e3546c5b.js";import{T as a}from"./Typography-d54ea9fd.js";const{colors:y,spacing:r}=c,v=p.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: ${r.SizesDdsSpacingLayoutX10};
  height: 100%;
  width: 100%;
  background-color: ${y.DdsColorNeutralsGray1};
  padding: ${r.SizesDdsSpacingLayoutX15};
`,h=p.div`
  max-width: 70ch;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: ${r.SizesDdsSpacingLayoutX1};
`;function i({title:e,message:u,...d}){return t(v,{...d,children:l(h,{children:[e&&t(a,{typographyType:"headingSans02",children:e}),t(a,{typographyType:"bodySans02",children:u})]})})}i.displayName="EmptyContent";try{i.displayName="EmptyContent",i.__docgenInfo={description:"",displayName:"EmptyContent",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | undefined"}},message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}}}}}catch{}const C={title:"dds-components/EmptyContent",component:i,argTypes:{title:{name:"title",type:{name:"string",required:!1}}}},s=e=>l(g,{title:"EmptyContent",children:[t(i,{...e,title:"Tittel",message:"Dette er en tekst."}),t(i,{...e,message:"Kort melding."}),t(i,{...e,message:`Dette er en lang tekst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
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
}`,...(m=(o=s.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const b=["Overview"],w=Object.freeze(Object.defineProperty({__proto__:null,Overview:s,__namedExportsOrder:b,default:C},Symbol.toStringTag,{value:"Module"}));export{w as E,s as O};
//# sourceMappingURL=EmptyContent.stories-dd0420ab.js.map
