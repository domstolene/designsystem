import{j as e,a as l}from"./focus-visible-c2e9b88d.js";import{R as u}from"./storybook-components-91f985f3.js";import{O as c}from"./OverflowMenuGroup-b288a120.js";import{O as t}from"./OverflowMenu-2e2bc8b2.js";import{B as p}from"./Button-2e74127f.js";import{M as m}from"./menu-35d03998.js";import{P as W}from"./plusCircled-05259c8d.js";const j={title:"dds-components/OverflowMenu",component:t},v=[{title:"Handling",onClick:()=>{}},{title:"Handling 2",onClick:()=>{},icon:W},{title:"Lenke 1",href:"#"}],T=[{title:"Navigasjon",href:"#"},{title:"Navigasjon 2",href:"#"}],n=r=>e(u,{title:"OverflowMenu - default",display:"flex-centered",children:l(c,{children:[e(p,{icon:m}),e(t,{...r,items:v})]})}),o=r=>e(u,{title:"OverflowMenu - with static user",display:"flex-centered",children:l(c,{children:[e(p,{icon:m}),e(t,{...r,items:v,userProps:{name:"Brukernavn"}})]})}),a=r=>e(u,{title:"OverflowMenu - with interactive user",display:"flex-centered",children:l(c,{children:[e(p,{icon:m}),e(t,{...r,items:v,userProps:{name:"Brukernavn",onClick:()=>{}}})]})}),s=r=>e(u,{title:"OverflowMenu - with navigation",display:"flex-centered",children:l(c,{children:[e(p,{icon:m}),e(t,{...r,items:v,navItems:T})]})}),i=r=>e(u,{title:"OverflowMenu - with navigation and interactive user",display:"flex-centered",children:l(c,{children:[e(p,{icon:m}),e(t,{...r,items:v,navItems:T,userProps:{name:"Brukernavn",onClick:()=>{}}})]})});var f,d,w;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`(args: OverflowMenuProps) => {
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
}`,...(S=(y=a.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var I,x,P;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`(args: OverflowMenuProps) => {
  return <StoryTemplate title="OverflowMenu - with navigation" display="flex-centered">
      <OverflowMenuGroup>
        <Button icon={MenuIcon} />
        <OverflowMenu {...args} items={items} navItems={navItems} />
      </OverflowMenuGroup>
    </StoryTemplate>;
}`,...(P=(x=s.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};var k,B,G;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`(args: OverflowMenuProps) => {
  return <StoryTemplate title="OverflowMenu - with navigation and interactive user" display="flex-centered">
      <OverflowMenuGroup>
        <Button icon={MenuIcon} />
        <OverflowMenu {...args} items={items} navItems={navItems} userProps={{
        name: 'Brukernavn',
        onClick: () => {}
      }}></OverflowMenu>
      </OverflowMenuGroup>
    </StoryTemplate>;
}`,...(G=(B=i.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};const C=["Default","WithStaticUser","WithInteractiveUser","WithNavigation","WithNavigationAndInteractiveUser"],z=Object.freeze(Object.defineProperty({__proto__:null,Default:n,WithInteractiveUser:a,WithNavigation:s,WithNavigationAndInteractiveUser:i,WithStaticUser:o,__namedExportsOrder:C,default:j},Symbol.toStringTag,{value:"Module"}));export{z as O};
//# sourceMappingURL=OverflowMenu.stories-e94e0b74.js.map
