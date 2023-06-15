import{d as $,s as p,b as c,j as e,F as j}from"./focus-visible-17f12d09.js";import{R as m}from"./storybook-components-54c9cf1b.js";import{r as f}from"./index-c6dae603.js";import{O as W}from"./OverflowMenuGroup-46b69d4a.js";import{C as D}from"./chevronUp-e61fcd7c.js";import{C as F}from"./chevronDown-dd1c1a45.js";import{O as I}from"./OverflowMenu-a7b3adb0.js";import{B as w}from"./Button-4fdfc19e.js";import{P as n}from"./plusCircled-2a049c6a.js";const L={primary:{borderLeft:`1px solid ${$.colors.DdsColorNeutralsWhite}`}},d={mainButton:L},M=p.div`
  display: flex;
`,V=p(w)`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: none;
  &:focus {
    position: relative;
    z-index: 0;
  }
`,E=p(w)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;

  ${t=>t.purpose==="primary"&&`
      border-left: ${d.mainButton.primary.borderLeft};
      &:hover {
        border-left: ${d.mainButton.primary.borderLeft};
      }
    `}

  &:focus {
    position: relative;
    z-index: 0;

    ${t=>t.purpose==="primary"&&`border-left: ${d.mainButton.primary.borderLeft}`};
  }
`,o=f.forwardRef((t,r)=>{const{size:x,primaryAction:C,secondaryActions:P,purpose:u="primary"}=t,[y,_]=f.useState(!1),b={appearance:"filled",purpose:u,size:x};return c(M,{ref:r,children:[e(V,{...b,...C,iconPosition:"left"}),c(W,{onToggle:()=>_(!y),children:[e(E,{...b,icon:y?D:F,"aria-label":"Åpne liste med flere valg",purpose:u}),e(I,{items:P,placement:"bottom-end"})]})]})});o.displayName="SplitButton";const N={title:"dds-components/SplitButton",component:o},i=[{title:"Sekundær handling",onClick:()=>{}},{title:"Sekundær handling 2",onClick:()=>{},icon:n}],s=t=>c(m,{title:"SplitButton - overview",display:"grid",children:[e(S,{args:t,purpose:"primary"}),e(S,{args:t,purpose:"secondary"})]}),a=t=>e(m,{title:"SplitButton - default",display:"block",children:e(o,{...t,primaryAction:{label:"Tekst"},secondaryActions:i})}),l=()=>e(m,{title:"SplitButton - full width",display:"block",children:e(o,{primaryAction:{label:"Tekst",fullWidth:!0},secondaryActions:i})}),S=({args:t,purpose:r})=>c(j,{children:[e(o,{...t,primaryAction:{label:"Tekst"},secondaryActions:i,size:"large",purpose:r}),e(o,{...t,primaryAction:{label:"Tekst",icon:n},secondaryActions:i,size:"large",purpose:r}),e(o,{...t,primaryAction:{label:"Tekst",loading:!0},secondaryActions:i,size:"large",purpose:r}),e(o,{...t,primaryAction:{label:"Tekst"},secondaryActions:i,size:"medium",purpose:r}),e(o,{...t,primaryAction:{label:"Tekst",icon:n},secondaryActions:i,size:"medium",purpose:r}),e(o,{...t,primaryAction:{label:"Tekst",loading:!0},secondaryActions:i,size:"medium",purpose:r}),e(o,{...t,primaryAction:{label:"Tekst"},secondaryActions:i,size:"small",purpose:r}),e(o,{...t,primaryAction:{label:"Tekst",icon:n},secondaryActions:i,size:"small",purpose:r}),e(o,{...t,primaryAction:{label:"Tekst",loading:!0},secondaryActions:i,size:"small",purpose:r}),e(o,{...t,primaryAction:{label:"Tekst"},secondaryActions:i,size:"tiny",purpose:r}),e(o,{...t,primaryAction:{label:"Tekst",icon:n},secondaryActions:i,size:"tiny",purpose:r}),e(o,{...t,primaryAction:{label:"Tekst",loading:!0},secondaryActions:i,size:"tiny",purpose:r})]});var A,B,k;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`(args: SplitButtonProps) => <StoryTemplate title="SplitButton - overview" display="grid">
    <SplitButtonVariants args={args} purpose="primary" />
    <SplitButtonVariants args={args} purpose="secondary" />
  </StoryTemplate>`,...(k=(B=s.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var T,h,g;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`(args: SplitButtonProps) => <StoryTemplate title="SplitButton - default" display="block">
    <SplitButton {...args} primaryAction={{
    label: 'Tekst'
  }} secondaryActions={items} />
  </StoryTemplate>`,...(g=(h=a.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var v,z,O;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`() => <StoryTemplate title="SplitButton - full width" display="block">
    <SplitButton primaryAction={{
    label: 'Tekst',
    fullWidth: true
  }} secondaryActions={items} />
  </StoryTemplate>`,...(O=(z=l.parameters)==null?void 0:z.docs)==null?void 0:O.source}}};const R=["Overview","Default","FullWidth"],Z=Object.freeze(Object.defineProperty({__proto__:null,Default:a,FullWidth:l,Overview:s,__namedExportsOrder:R,default:N},Symbol.toStringTag,{value:"Module"}));export{Z as S};
//# sourceMappingURL=SplitButton.stories-44b7faee.js.map
