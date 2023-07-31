import{d as X,s as w,A as d,a as t,j as E}from"./focus-visible-8467fd8b.js";import{R as z}from"./storybook-components-76b2a6b1.js";import{r as f}from"./index-d47b1f5a.js";import{a as D}from"./dds-core-b89b291f.js";const{spacing:a}=X,h={"local-x0.125":a.SizesDdsSpacingLocalX0125,"local-x0.25":a.SizesDdsSpacingLocalX025,"local-x0.5":a.SizesDdsSpacingLocalX05,"local-x0.75":a.SizesDdsSpacingLocalX075,"local-x1":a.SizesDdsSpacingLocalX1,"local-x1.5":a.SizesDdsSpacingLocalX15,"local-x2":a.SizesDdsSpacingLocalX2,"local-x2.5":a.SizesDdsSpacingLocalX25,"local-x3":a.SizesDdsSpacingLocalX3,"layout-x1":a.SizesDdsSpacingLayoutX1,"layout-x1.5":a.SizesDdsSpacingLayoutX15,"layout-x2":a.SizesDdsSpacingLayoutX2,"layout-x3":a.SizesDdsSpacingLayoutX3,"layout-x4":a.SizesDdsSpacingLayoutX4,"layout-x6":a.SizesDdsSpacingLayoutX6,"layout-x10":a.SizesDdsSpacingLayoutX10},m={spacing:h},S=w.div`
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
`;S.defaultProps={align:"center",justify:"flex-start"};const L=f.forwardRef(({id:e,className:i,htmlProps:l,...n},r)=>t(S,{direction:"horizontal",ref:r,...D(e,i,l,n)}));L.displayName="HStack";const p=f.forwardRef(({id:e,className:i,htmlProps:l,...n},r)=>t(S,{direction:"vertical",ref:r,...D(e,i,l,n)}));p.displayName="VStack";const j={title:"dds-components/Stack",component:p},o=()=>t("div",{style:{width:"100px",height:"100px",border:"2px dashed black"}}),s=e=>t(z,{title:"VStack - overview",children:E(p,{...e,children:[t(o,{}),t(o,{}),t(o,{}),t(o,{})]})}),c=e=>t(z,{title:"HStack - overview",children:E(L,{...e,children:[t(o,{}),t(o,{}),t(o,{}),t(o,{})]})});var x,g,u;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`(args: StackProps) => <StoryTemplate title="VStack - overview">
    <VStack {...args}>
      <ExampleElement />
      <ExampleElement />
      <ExampleElement />
      <ExampleElement />
    </VStack>
  </StoryTemplate>`,...(u=(g=s.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var y,k,v;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`(args: StackProps) => <StoryTemplate title="HStack - overview">
    <HStack {...args}>
      <ExampleElement />
      <ExampleElement />
      <ExampleElement />
      <ExampleElement />
    </HStack>
  </StoryTemplate>`,...(v=(k=c.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};const H=["VStackOverview","HStackOverview"],$=Object.freeze(Object.defineProperty({__proto__:null,HStackOverview:c,VStackOverview:s,__namedExportsOrder:H,default:j},Symbol.toStringTag,{value:"Module"}));export{$ as S};
//# sourceMappingURL=Stack.stories-c94c7d10.js.map
