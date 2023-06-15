import{d as X,s as w,C as d,j as t,b as E}from"./focus-visible-17f12d09.js";import{R as z}from"./storybook-components-8785bb6b.js";import{r as f}from"./index-c6dae603.js";import{g as L}from"./BaseComponentProps-bb0d5515.js";const{spacing:a}=X,h={"local-x0.125":a.SizesDdsSpacingLocalX0125,"local-x0.25":a.SizesDdsSpacingLocalX025,"local-x0.5":a.SizesDdsSpacingLocalX05,"local-x0.75":a.SizesDdsSpacingLocalX075,"local-x1":a.SizesDdsSpacingLocalX1,"local-x1.5":a.SizesDdsSpacingLocalX15,"local-x2":a.SizesDdsSpacingLocalX2,"local-x2.5":a.SizesDdsSpacingLocalX25,"local-x3":a.SizesDdsSpacingLocalX3,"layout-x1":a.SizesDdsSpacingLayoutX1,"layout-x1.5":a.SizesDdsSpacingLayoutX15,"layout-x2":a.SizesDdsSpacingLayoutX2,"layout-x3":a.SizesDdsSpacingLayoutX3,"layout-x4":a.SizesDdsSpacingLayoutX4,"layout-x6":a.SizesDdsSpacingLayoutX6,"layout-x10":a.SizesDdsSpacingLayoutX10},m={spacing:h},S=w.div`
  display: flex;
  flex-direction: ${({direction:e})=>e==="horizontal"?"row":"column"};
  align-items: ${e=>e.align};
  justify-content: ${e=>e.justify};

  ${({gap:e})=>e!==void 0&&d`
      gap: ${e===0?"0":m.spacing[e]};
    `}

  ${({padding:e})=>e!==void 0&&d`
      padding: ${e===0?"0":m.spacing[e]};
    `}
`;S.defaultProps={align:"center",justify:"flex-start"};const D=f.forwardRef(({id:e,className:i,htmlProps:l,...r},n)=>t(S,{direction:"horizontal",ref:n,...L(e,i,l,r)}));D.displayName="HStack";const p=f.forwardRef(({id:e,className:i,htmlProps:l,...r},n)=>t(S,{direction:"vertical",ref:n,...L(e,i,l,r)}));p.displayName="VStack";const H={title:"dds-components/Stack",component:p},s=()=>t("div",{style:{width:"100px",height:"100px",border:"2px dashed black"}}),o=e=>t(z,{title:"VStack - overview",children:E(p,{...e,children:[t(s,{}),t(s,{}),t(s,{}),t(s,{})]})}),c=e=>t(z,{title:"HStack - overview",children:E(D,{...e,children:[t(s,{}),t(s,{}),t(s,{}),t(s,{})]})});var x,g,u;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`(args: StackProps) => <StoryTemplate title="VStack - overview">
    <VStack {...args}>
      <ExampleElement />
      <ExampleElement />
      <ExampleElement />
      <ExampleElement />
    </VStack>
  </StoryTemplate>`,...(u=(g=o.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var y,k,v;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`(args: StackProps) => <StoryTemplate title="HStack - overview">
    <HStack {...args}>
      <ExampleElement />
      <ExampleElement />
      <ExampleElement />
      <ExampleElement />
    </HStack>
  </StoryTemplate>`,...(v=(k=c.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};const T=["VStackOverview","HStackOverview"],$=Object.freeze(Object.defineProperty({__proto__:null,HStackOverview:c,VStackOverview:o,__namedExportsOrder:T,default:H},Symbol.toStringTag,{value:"Module"}));export{$ as S};
//# sourceMappingURL=Stack.stories-379535d6.js.map
