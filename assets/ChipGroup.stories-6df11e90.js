import{s as m,j as e,a as C}from"./focus-visible-35158c22.js";import{R as f}from"./storybook-components-e24cb579.js";import{r as t}from"./index-d47b1f5a.js";import{w as G}from"./dds-core-29d22035.js";import{c as x,C as i}from"./Chip-555548d4.js";const y=m.ul`
  ${G}
  display: flex;
  gap: ${x.group.gap};
`,p=t.forwardRef(({children:o,...l},c)=>{const h=t.Children.toArray(o).map((u,d)=>e("li",{children:u},`chip-${d}`));return e(y,{...l,ref:c,children:h})});p.displayName="ChipGroup";const g={title:"dds-components/Chip/ChipGroup",component:p},r=o=>e(f,{title:"ChipGroup - default",children:C(p,{...o,children:[e(i,{text:"Chip 1"}),e(i,{text:"Chip 2"})]})});var s,a,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`(args: ChipGroupProps) => <StoryTemplate title="ChipGroup - default">
    <ChipGroup {...args}>
      <Chip text="Chip 1" />
      <Chip text="Chip 2" />
    </ChipGroup>
  </StoryTemplate>`,...(n=(a=r.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const _=["Default"],D=Object.freeze(Object.defineProperty({__proto__:null,Default:r,__namedExportsOrder:_,default:g},Symbol.toStringTag,{value:"Module"}));export{D as C,r as D};
//# sourceMappingURL=ChipGroup.stories-6df11e90.js.map
