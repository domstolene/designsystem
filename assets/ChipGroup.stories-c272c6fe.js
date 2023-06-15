import{s as m,j as e,a as C}from"./focus-visible-c2e9b88d.js";import{R as f}from"./storybook-components-045061bd.js";import{r as p}from"./index-ebeaab24.js";import{r as y}from"./removeListStyling-80ec5e55.js";import{c as G,C as i}from"./Chip-17a90c00.js";const g=m.ul`
  ${y}
  display: flex;
  gap: ${G.group.gap};
`,t=p.forwardRef(({children:o,...l},c)=>{const h=p.Children.toArray(o).map((u,d)=>e("li",{children:u},`chip-${d}`));return e(g,{...l,ref:c,children:h})});t.displayName="ChipGroup";const x={title:"dds-components/Chip/ChipGroup",component:t},r=o=>e(f,{title:"ChipGroup - default",children:C(t,{...o,children:[e(i,{text:"Chip 1"}),e(i,{text:"Chip 2"})]})});var s,a,n;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`(args: ChipGroupProps) => <StoryTemplate title="ChipGroup - default">
    <ChipGroup {...args}>
      <Chip text="Chip 1" />
      <Chip text="Chip 2" />
    </ChipGroup>
  </StoryTemplate>`,...(n=(a=r.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const S=["Default"],O=Object.freeze(Object.defineProperty({__proto__:null,Default:r,__namedExportsOrder:S,default:x},Symbol.toStringTag,{value:"Module"}));export{O as C,r as D};
//# sourceMappingURL=ChipGroup.stories-c272c6fe.js.map
