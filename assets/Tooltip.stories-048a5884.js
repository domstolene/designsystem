import{j as V,a as e}from"./ddsReferenceTokens-f1d35829.js";import{R as c}from"./storybook-components-c346f0a4.js";import{x as o}from"./dds-icons-265d9665.js";import{T as t}from"./Tooltip-8f8a02ef.js";import{B as a}from"./Button-aa30c63f.js";const z={title:"dds-components/Tooltip",component:t,argTypes:{text:{control:{type:"text"}}},parameters:{controls:{exclude:["style","className"]}}},l=()=>V(c,{title:"Tooltip - overview",display:"grid",containerStyle:{alignContent:"center",justifyContent:"center",padding:"70px 40px 70px 40px"},children:[e(t,{placement:"top",text:"top",children:e(a,{size:"large",icon:o,appearance:"rounded","aria-label":"Vis forklaring"})}),e(t,{placement:"top-start",text:"top-start",children:e(a,{size:"large",icon:o,appearance:"rounded","aria-label":"Vis forklaring"})}),e(t,{placement:"top-end",text:"top-end",children:e(a,{size:"large",icon:o,appearance:"rounded","aria-label":"Vis forklaring"})}),e(t,{placement:"bottom",text:"bottom",children:e(a,{size:"large",icon:o,appearance:"rounded","aria-label":"Vis forklaring"})}),e(t,{placement:"bottom-start",text:"bottom-start",children:e(a,{size:"large",icon:o,appearance:"rounded","aria-label":"Vis forklaring"})}),e(t,{placement:"bottom-end",text:"bottom-end",children:e(a,{size:"large",icon:o,appearance:"rounded","aria-label":"Vis forklaring"})}),e(t,{placement:"left",text:"left",children:e(a,{size:"large",icon:o,appearance:"rounded","aria-label":"Vis forklaring"})}),e(t,{placement:"left-start",text:"left-start",children:e(a,{size:"large",icon:o,appearance:"rounded","aria-label":"Vis forklaring"})}),e(t,{placement:"left-end",text:"left-end",children:e(a,{size:"large",icon:o,appearance:"rounded","aria-label":"Vis forklaring"})}),e(t,{placement:"right",text:"right",children:e(a,{size:"large",icon:o,appearance:"rounded","aria-label":"Vis forklaring"})}),e(t,{placement:"right-start",text:"right-start",children:e(a,{size:"large",icon:o,appearance:"rounded","aria-label":"Vis forklaring"})}),e(t,{placement:"right-end",text:"right-end",children:e(a,{size:"large",icon:o,appearance:"rounded","aria-label":"Vis forklaring"})})]}),n=r=>e(c,{title:"Tooltip - default",display:"block",children:e(t,{...r,text:"dette er en tooltip",children:e(a,{icon:o,appearance:"rounded","aria-label":"Vis forklaring"})})}),i=r=>e(c,{title:"Tooltip - centered",display:"block",containerStyle:{alignContent:"center",justifyContent:"center",padding:" 100px 50%"},children:e(t,{...r,text:"dette er en tooltip",children:e(a,{icon:o,appearance:"rounded","aria-label":"Vis forklaring"})})}),p=r=>e(c,{title:"Tooltip - text button",display:"block",children:e(t,{...r,text:"dette er en tooltip",children:e(a,{label:"Knapp"})})});var s,d,g;l.parameters={...l.parameters,docs:{...(s=l.parameters)==null?void 0:s.docs,source:{originalSource:`() => <StoryTemplate title="Tooltip - overview" display="grid" containerStyle={{
  alignContent: 'center',
  justifyContent: 'center',
  padding: '70px 40px 70px 40px'
}}>
    <Tooltip placement="top" text="top">
      <Button size="large" icon={HelpIcon} appearance="rounded" aria-label="Vis forklaring" />
    </Tooltip>
    <Tooltip placement="top-start" text="top-start">
      <Button size="large" icon={HelpIcon} appearance="rounded" aria-label="Vis forklaring" />
    </Tooltip>
    <Tooltip placement="top-end" text="top-end">
      <Button size="large" icon={HelpIcon} appearance="rounded" aria-label="Vis forklaring" />
    </Tooltip>
    <Tooltip placement="bottom" text="bottom">
      <Button size="large" icon={HelpIcon} appearance="rounded" aria-label="Vis forklaring" />
    </Tooltip>
    <Tooltip placement="bottom-start" text="bottom-start">
      <Button size="large" icon={HelpIcon} appearance="rounded" aria-label="Vis forklaring" />
    </Tooltip>
    <Tooltip placement="bottom-end" text="bottom-end">
      <Button size="large" icon={HelpIcon} appearance="rounded" aria-label="Vis forklaring" />
    </Tooltip>
    <Tooltip placement="left" text="left">
      <Button size="large" icon={HelpIcon} appearance="rounded" aria-label="Vis forklaring" />
    </Tooltip>
    <Tooltip placement="left-start" text="left-start">
      <Button size="large" icon={HelpIcon} appearance="rounded" aria-label="Vis forklaring" />
    </Tooltip>
    <Tooltip placement="left-end" text="left-end">
      <Button size="large" icon={HelpIcon} appearance="rounded" aria-label="Vis forklaring" />
    </Tooltip>
    <Tooltip placement="right" text="right">
      <Button size="large" icon={HelpIcon} appearance="rounded" aria-label="Vis forklaring" />
    </Tooltip>
    <Tooltip placement="right-start" text="right-start">
      <Button size="large" icon={HelpIcon} appearance="rounded" aria-label="Vis forklaring" />
    </Tooltip>
    <Tooltip placement="right-end" text="right-end">
      <Button size="large" icon={HelpIcon} appearance="rounded" aria-label="Vis forklaring" />
    </Tooltip>
  </StoryTemplate>`,...(g=(d=l.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var m,u,T;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`(args: TooltipProps) => <StoryTemplate title="Tooltip - default" display="block">
    <Tooltip {...args} text="dette er en tooltip">
      <Button icon={HelpIcon} appearance="rounded" aria-label="Vis forklaring" />
    </Tooltip>
  </StoryTemplate>`,...(T=(u=n.parameters)==null?void 0:u.docs)==null?void 0:T.source}}};var f,b,x;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`(args: TooltipProps) => <StoryTemplate title="Tooltip - centered" display="block" containerStyle={{
  alignContent: 'center',
  justifyContent: 'center',
  padding: ' 100px 50%'
}}>
    <Tooltip {...args} text="dette er en tooltip">
      <Button icon={HelpIcon} appearance="rounded" aria-label="Vis forklaring" />
    </Tooltip>
  </StoryTemplate>`,...(x=(b=i.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var k,h,y;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`(args: TooltipProps) => <StoryTemplate title="Tooltip - text button" display="block">
    <Tooltip {...args} text="dette er en tooltip">
      <Button label="Knapp" />
    </Tooltip>
  </StoryTemplate>`,...(y=(h=p.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const B=["Overview","Default","Centered","TextButton"],v=Object.freeze(Object.defineProperty({__proto__:null,Centered:i,Default:n,Overview:l,TextButton:p,__namedExportsOrder:B,default:z},Symbol.toStringTag,{value:"Module"}));export{v as T};
//# sourceMappingURL=Tooltip.stories-048a5884.js.map
