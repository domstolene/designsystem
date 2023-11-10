import{a as e,j as l}from"./jsx-runtime-e43ccb36.js";import{S as u}from"./StoryTemplate-1f1a752a.js";import{f as c,g as W}from"./libraryAdd-37aef24e.js";import"./Icon-56c20d0c.js";import{O as t}from"./OverflowMenu-da9e1c40.js";import{O as p}from"./OverflowMenuGroup-fec72746.js";import{B as m}from"./Button-65c43571.js";const j={title:"dds-components/OverflowMenu",component:t},v=[{title:"Handling",onClick:()=>{}},{title:"Handling 2",onClick:()=>{},icon:W},{title:"Lenke 1",href:"#"}],G=[{title:"Navigasjon",href:"#"},{title:"Navigasjon 2",href:"#"}],n=r=>e(u,{title:"OverflowMenu - default",display:"flex-centered",children:l(p,{children:[e(m,{icon:c}),e(t,{...r,items:v})]})}),o=r=>e(u,{title:"OverflowMenu - with static user",display:"flex-centered",children:l(p,{children:[e(m,{icon:c}),e(t,{...r,items:v,userProps:{name:"Brukernavn"}})]})}),a=r=>e(u,{title:"OverflowMenu - with interactive user",display:"flex-centered",children:l(p,{children:[e(m,{icon:c}),e(t,{...r,items:v,userProps:{name:"Brukernavn",onClick:()=>{}}})]})}),s=r=>e(u,{title:"OverflowMenu - with navigation",display:"flex-centered",children:l(p,{children:[e(m,{icon:c}),e(t,{...r,items:v,navItems:G})]})}),i=r=>e(u,{title:"OverflowMenu - with navigation and interactive user",display:"flex-centered",children:l(p,{children:[e(m,{icon:c}),e(t,{...r,items:v,navItems:G,userProps:{name:"Brukernavn",onClick:()=>{}}})]})});var f,d,w;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`(args: OverflowMenuProps) => {
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
}`,...(S=(y=a.parameters)==null?void 0:y.docs)==null?void 0:S.source}}};var I,x,k;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`(args: OverflowMenuProps) => {
  return <StoryTemplate title="OverflowMenu - with navigation" display="flex-centered">
      <OverflowMenuGroup>
        <Button icon={MenuIcon} />
        <OverflowMenu {...args} items={items} navItems={navItems} />
      </OverflowMenuGroup>
    </StoryTemplate>;
}`,...(k=(x=s.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var B,P,T;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`(args: OverflowMenuProps) => {
  return <StoryTemplate title="OverflowMenu - with navigation and interactive user" display="flex-centered">
      <OverflowMenuGroup>
        <Button icon={MenuIcon} />
        <OverflowMenu {...args} items={items} navItems={navItems} userProps={{
        name: 'Brukernavn',
        onClick: () => {}
      }}></OverflowMenu>
      </OverflowMenuGroup>
    </StoryTemplate>;
}`,...(T=(P=i.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};const C=["Default","WithStaticUser","WithInteractiveUser","WithNavigation","WithNavigationAndInteractiveUser"],z=Object.freeze(Object.defineProperty({__proto__:null,Default:n,WithInteractiveUser:a,WithNavigation:s,WithNavigationAndInteractiveUser:i,WithStaticUser:o,__namedExportsOrder:C,default:j},Symbol.toStringTag,{value:"Module"}));export{z as O};
//# sourceMappingURL=OverflowMenu.stories-cc7574f7.js.map
