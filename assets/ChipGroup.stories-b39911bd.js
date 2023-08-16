import{s as m,a as e,j as C}from"./ddsReferenceTokens-f1d35829.js";import{R as f}from"./storybook-components-930ad3ec.js";import{r as t}from"./index-d47b1f5a.js";import{D as G}from"./dds-core-c67132cd.js";import{c as x,C as i}from"./Chip-48245d85.js";const y=m.ul`
  ${G}
  display: flex;
  gap: ${x.group.gap};
`,p=t.forwardRef(({children:o,...l},c)=>{const h=t.Children.toArray(o).map((u,d)=>e("li",{children:u},`chip-${d}`));return e(y,{...l,ref:c,children:h})});p.displayName="ChipGroup";const g={title:"dds-components/Chip/ChipGroup",component:p},r=o=>e(f,{title:"ChipGroup - default",children:C(p,{...o,children:[e(i,{text:"Chip 1"}),e(i,{text:"Chip 2"})]})});var s,a,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`(args: ChipGroupProps) => <StoryTemplate title="ChipGroup - default">
    <ChipGroup {...args}>
      <Chip text="Chip 1" />
      <Chip text="Chip 2" />
    </ChipGroup>
  </StoryTemplate>`,...(n=(a=r.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const _=["Default"],O=Object.freeze(Object.defineProperty({__proto__:null,Default:r,__namedExportsOrder:_,default:g},Symbol.toStringTag,{value:"Module"}));export{O as C,r as D};
//# sourceMappingURL=ChipGroup.stories-b39911bd.js.map
