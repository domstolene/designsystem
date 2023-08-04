import{s as k,j as m,a as n,d as l}from"./ddsReferenceTokens-f1d35829.js";import{R as u}from"./storybook-components-c346f0a4.js";import{a as M}from"./dds-core-c67132cd.js";const p=24,I=`${p}px`,b=k.svg.attrs(({height:e,width:t,fill:o})=>({height:e||I,width:t||I,fill:o||"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${p} ${p}`}))`
  display: inline-block;
  transition: fill 0.2s;
  flex-shrink: 0;
`;function V(e){const{title:t,children:o,...d}=e;return m(b,{...d,children:[t&&n("title",{children:t}),o]})}function i(e){return n(V,{...e,children:n("path",{d:"M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"})})}const H=e=>{switch(e){case"small":return l.iconSizes.DdsIconsizeSmall;case"medium":return l.iconSizes.DdsIconsizeMedium;case"large":return l.iconSizes.DdsIconsizeLarge;case"inherit":return"1em";default:return l.iconSizes.DdsIconsizeMedium}};function r(e){const{id:t,iconSize:o="medium",color:d="currentcolor",icon:E,className:_,htmlProps:S={},...D}=e,{title:P,"aria-hidden":j=!0}=S,h=H(o);return E({...M(t,_,S,D),title:P,height:h,width:h,fill:d,"aria-hidden":j})}r.displayName="Icon";const N={title:"dds-components/Icon",component:r,argTypes:{color:{control:{type:"text"}}},parameters:{controls:{exclude:["className"]}}},s=e=>m(u,{title:"Icon - overview",display:"grid",columnsAmount:4,children:[n(r,{...e,iconSize:"inherit",icon:i}),n(r,{...e,iconSize:"small",icon:i}),n(r,{...e,iconSize:"medium",icon:i}),n(r,{...e,iconSize:"large",icon:i})]}),c=e=>n(u,{title:"Icon - default",children:n(r,{...e,icon:i})}),a=e=>n(u,{title:"Icon - inherit",children:m("p",{style:{display:"flex",alignItems:"center",fontSize:"20px"},children:[n(r,{...e,icon:i,iconSize:"inherit"}),"Tekst"]})});var z,g,x;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`(args: IconProps) => {
  return <StoryTemplate title="Icon - overview" display="grid" columnsAmount={4}>
      <Icon {...args} iconSize="inherit" icon={OpenExternal} />
      <Icon {...args} iconSize="small" icon={OpenExternal} />
      <Icon {...args} iconSize="medium" icon={OpenExternal} />
      <Icon {...args} iconSize="large" icon={OpenExternal} />
    </StoryTemplate>;
}`,...(x=(g=s.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var f,y,v;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`(args: IconProps) => {
  return <StoryTemplate title="Icon - default">
      <Icon {...args} icon={OpenExternal} />
    </StoryTemplate>;
}`,...(v=(y=c.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var O,w,T;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:`(args: IconProps) => {
  return <StoryTemplate title="Icon - inherit">
      <p style={{
      display: 'flex',
      alignItems: 'center',
      fontSize: '20px'
    }}>
        <Icon {...args} icon={OpenExternal} iconSize="inherit" />
        Tekst
      </p>
    </StoryTemplate>;
}`,...(T=(w=a.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};const $=["Overview","Default","Inherit"],C=Object.freeze(Object.defineProperty({__proto__:null,Default:c,Inherit:a,Overview:s,__namedExportsOrder:$,default:N},Symbol.toStringTag,{value:"Module"}));export{C as I};
//# sourceMappingURL=Icon.stories-e933eba4.js.map
