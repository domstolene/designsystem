import{a as e,j as l}from"./ddsReferenceTokens-f1d35829.js";import{R as u}from"./storybook-components-be8d83b8.js";import{r as c,s as W}from"./dds-icons-265d9665.js";import{O as t}from"./OverflowMenu-c583f668.js";import{O as p}from"./OverflowMenuGroup-d39ab7ad.js";import{B as m}from"./Button-aa30c63f.js";const j={title:"dds-components/OverflowMenu",component:t},v=[{title:"Handling",onClick:()=>{}},{title:"Handling 2",onClick:()=>{},icon:W},{title:"Lenke 1",href:"#"}],T=[{title:"Navigasjon",href:"#"},{title:"Navigasjon 2",href:"#"}],n=r=>e(u,{title:"OverflowMenu - default",display:"flex-centered",children:l(p,{children:[e(m,{icon:c}),e(t,{...r,items:v})]})}),o=r=>e(u,{title:"OverflowMenu - with static user",display:"flex-centered",children:l(p,{children:[e(m,{icon:c}),e(t,{...r,items:v,userProps:{name:"Brukernavn"}})]})}),a=r=>e(u,{title:"OverflowMenu - with interactive user",display:"flex-centered",children:l(p,{children:[e(m,{icon:c}),e(t,{...r,items:v,userProps:{name:"Brukernavn",onClick:()=>{}}})]})}),s=r=>e(u,{title:"OverflowMenu - with navigation",display:"flex-centered",children:l(p,{children:[e(m,{icon:c}),e(t,{...r,items:v,navItems:T})]})}),i=r=>e(u,{title:"OverflowMenu - with navigation and interactive user",display:"flex-centered",children:l(p,{children:[e(m,{icon:c}),e(t,{...r,items:v,navItems:T,userProps:{name:"Brukernavn",onClick:()=>{}}})]})});var f,d,w;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`(args: OverflowMenuProps) => {
  return <StoryTemplate title="OverflowMenu - default" display="flex-centered">
      <OverflowMenuGroup>
        <Button icon={MenuIcon} />
        <OverflowMenu {...args} items={items} />
      </OverflowMenuGroup>
    </StoryTemplate>;
}`,...(w=(d=n.parameters)==null?void 0:d.docs)==null?void 0:w.source}}};var M,O,g;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`(args: OverflowMenuProps) => {
  return <StoryTemplate title="OverflowMenu - with static user" display="flex-centered">
      <OverflowMenuGroup>
        <Button icon={MenuIcon} />
        <OverflowMenu {...args} items={items} userProps={{
        name: 'Brukernavn'
      }} />
      </OverflowMenuGroup>
    </StoryTemplate>;
}`,...(g=(O=o.parameters)==null?void 0:O.docs)==null?void 0:g.source}}};var h,y,S;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`(args: OverflowMenuProps) => {
  return <StoryTemplate title="OverflowMenu - with interactive user" display="flex-centered">
      <OverflowMenuGroup>
        <Button icon={MenuIcon} />
        <OverflowMenu {...args} items={items} userProps={{
        name: 'Brukernavn',
        onClick: () => {}
      }} />
      </OverflowMenuGroup>
    </StoryTemplate>;
}`,...(S=(y=a.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var x,I,k;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`(args: OverflowMenuProps) => {
  return <StoryTemplate title="OverflowMenu - with navigation" display="flex-centered">
      <OverflowMenuGroup>
        <Button icon={MenuIcon} />
        <OverflowMenu {...args} items={items} navItems={navItems} />
      </OverflowMenuGroup>
    </StoryTemplate>;
}`,...(k=(I=s.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var B,P,G;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`(args: OverflowMenuProps) => {
  return <StoryTemplate title="OverflowMenu - with navigation and interactive user" display="flex-centered">
      <OverflowMenuGroup>
        <Button icon={MenuIcon} />
        <OverflowMenu {...args} items={items} navItems={navItems} userProps={{
        name: 'Brukernavn',
        onClick: () => {}
      }}></OverflowMenu>
      </OverflowMenuGroup>
    </StoryTemplate>;
}`,...(G=(P=i.parameters)==null?void 0:P.docs)==null?void 0:G.source}}};const _=["Default","WithStaticUser","WithInteractiveUser","WithNavigation","WithNavigationAndInteractiveUser"],H=Object.freeze(Object.defineProperty({__proto__:null,Default:n,WithInteractiveUser:a,WithNavigation:s,WithNavigationAndInteractiveUser:i,WithStaticUser:o,__namedExportsOrder:_,default:j},Symbol.toStringTag,{value:"Module"}));export{H as O};
//# sourceMappingURL=OverflowMenu.stories-aafec961.js.map
