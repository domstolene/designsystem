import{a as o,j as u}from"./jsx-runtime-e43ccb36.js";import{S as C}from"./StoryTemplate-dc809fd5.js";import{r as t}from"./index-1b03fe98.js";import{s as f}from"./ddsReferenceTokens-baf3ad90.js";import"./BaseComponentProps-46424d28.js";import{r as y}from"./removeListStyling-80ec5e55.js";import{c as _,C as i}from"./Chip-01aac4ea.js";const G=f.ul`
  ${y}
  display: flex;
  gap: ${_.group.gap};
`,e=t.forwardRef(({children:p,...c},l)=>{const h=t.Children.toArray(p).map((d,m)=>o("li",{children:d},`chip-${m}`));return o(G,{...c,ref:l,children:h})});e.displayName="ChipGroup";try{e.displayName="ChipGroup",e.__docgenInfo={description:"",displayName:"ChipGroup",props:{}}}catch{}const g={title:"dds-components/Chip/ChipGroup",component:e},r=p=>o(C,{title:"ChipGroup - default",children:u(e,{...p,children:[o(i,{text:"Chip 1"}),o(i,{text:"Chip 2"})]})});var a,s,n;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`(args: ChipGroupProps) => <StoryTemplate title="ChipGroup - default">
    <ChipGroup {...args}>
      <Chip text="Chip 1" />
      <Chip text="Chip 2" />
    </ChipGroup>
  </StoryTemplate>`,...(n=(s=r.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const x=["Default"],$=Object.freeze(Object.defineProperty({__proto__:null,Default:r,__namedExportsOrder:x,default:g},Symbol.toStringTag,{value:"Module"}));export{$ as C,r as D};
//# sourceMappingURL=ChipGroup.stories-ed8db69c.js.map
