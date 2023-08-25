import{d as P,s as p,j as c,a as e,F as W}from"./ddsReferenceTokens-f1d35829.js";import{Q as C,n as F,s as n}from"./dds-icons-265d9665.js";import{R as m}from"./storybook-components-eb38b664.js";import{r as f}from"./index-d47b1f5a.js";import{O as L}from"./OverflowMenuGroup-d39ab7ad.js";import{O as M}from"./OverflowMenu-c583f668.js";import{B as w}from"./Button-aa30c63f.js";const D={primary:{borderLeft:`1px solid ${P.colors.DdsColorNeutralsWhite}`}},d={mainButton:D},V=p.div`
  display: flex;
`,E=p(w)`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: none;
  &:focus {
    position: relative;
    z-index: 0;
  }
`,N=p(w)`
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
`,o=f.forwardRef((t,r)=>{const{size:x,primaryAction:_,secondaryActions:j,purpose:u="primary"}=t,[y,$]=f.useState(!1),b={appearance:"filled",purpose:u,size:x};return c(V,{ref:r,children:[e(E,{...b,..._,iconPosition:"left"}),c(L,{onToggle:()=>$(!y),children:[e(N,{...b,icon:y?C:F,"aria-label":"Åpne liste med flere valg",purpose:u}),e(M,{items:j,placement:"bottom-end"})]})]})});o.displayName="SplitButton";const R={title:"dds-components/SplitButton",component:o},i=[{title:"Sekundær handling",onClick:()=>{}},{title:"Sekundær handling 2",onClick:()=>{},icon:n}],s=t=>c(m,{title:"SplitButton - overview",display:"grid",children:[e(S,{args:t,purpose:"primary"}),e(S,{args:t,purpose:"secondary"})]}),a=t=>e(m,{title:"SplitButton - default",display:"block",children:e(o,{...t,primaryAction:{label:"Tekst"},secondaryActions:i})}),l=()=>e(m,{title:"SplitButton - full width",display:"block",children:e(o,{primaryAction:{label:"Tekst",fullWidth:!0},secondaryActions:i})}),S=({args:t,purpose:r})=>c(W,{children:[e(o,{...t,primaryAction:{label:"Tekst"},secondaryActions:i,size:"large",purpose:r}),e(o,{...t,primaryAction:{label:"Tekst",icon:n},secondaryActions:i,size:"large",purpose:r}),e(o,{...t,primaryAction:{label:"Tekst",loading:!0},secondaryActions:i,size:"large",purpose:r}),e(o,{...t,primaryAction:{label:"Tekst"},secondaryActions:i,size:"medium",purpose:r}),e(o,{...t,primaryAction:{label:"Tekst",icon:n},secondaryActions:i,size:"medium",purpose:r}),e(o,{...t,primaryAction:{label:"Tekst",loading:!0},secondaryActions:i,size:"medium",purpose:r}),e(o,{...t,primaryAction:{label:"Tekst"},secondaryActions:i,size:"small",purpose:r}),e(o,{...t,primaryAction:{label:"Tekst",icon:n},secondaryActions:i,size:"small",purpose:r}),e(o,{...t,primaryAction:{label:"Tekst",loading:!0},secondaryActions:i,size:"small",purpose:r}),e(o,{...t,primaryAction:{label:"Tekst"},secondaryActions:i,size:"tiny",purpose:r}),e(o,{...t,primaryAction:{label:"Tekst",icon:n},secondaryActions:i,size:"tiny",purpose:r}),e(o,{...t,primaryAction:{label:"Tekst",loading:!0},secondaryActions:i,size:"tiny",purpose:r})]});var A,B,k;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`(args: SplitButtonProps) => <StoryTemplate title="SplitButton - overview" display="grid">
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
  </StoryTemplate>`,...(O=(z=l.parameters)==null?void 0:z.docs)==null?void 0:O.source}}};const G=["Overview","Default","FullWidth"],X=Object.freeze(Object.defineProperty({__proto__:null,Default:a,FullWidth:l,Overview:s,__namedExportsOrder:G,default:R},Symbol.toStringTag,{value:"Module"}));export{X as S};
//# sourceMappingURL=SplitButton.stories-5dc1e3dd.js.map
