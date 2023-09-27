import{s as m,a as e,j as C}from"./ddsReferenceTokens-647ce456.js";import{S as f}from"./StoryTemplate-aaf2c38c.js";import{r as t}from"./index-ebeaab24.js";import"./BaseComponentProps-a100791d.js";import{r as y}from"./removeListStyling-80ec5e55.js";import{c as _,C as i}from"./Chip-26f840b7.js";const G=m.ul`
  ${y}
  display: flex;
  gap: ${_.group.gap};
`,o=t.forwardRef(({children:p,...c},l)=>{const h=t.Children.toArray(p).map((d,u)=>e("li",{children:d},`chip-${u}`));return e(G,{...c,ref:l,children:h})});o.displayName="ChipGroup";try{o.displayName="ChipGroup",o.__docgenInfo={description:"",displayName:"ChipGroup",props:{}}}catch{}const g={title:"dds-components/Chip/ChipGroup",component:o},r=p=>e(f,{title:"ChipGroup - default",children:C(o,{...p,children:[e(i,{text:"Chip 1"}),e(i,{text:"Chip 2"})]})});var a,s,n;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`(args: ChipGroupProps) => <StoryTemplate title="ChipGroup - default">
    <ChipGroup {...args}>
      <Chip text="Chip 1" />
      <Chip text="Chip 2" />
    </ChipGroup>
  </StoryTemplate>`,...(n=(s=r.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const x=["Default"],O=Object.freeze(Object.defineProperty({__proto__:null,Default:r,__namedExportsOrder:x,default:g},Symbol.toStringTag,{value:"Module"}));export{O as C,r as D};
//# sourceMappingURL=ChipGroup.stories-04e31ab9.js.map
