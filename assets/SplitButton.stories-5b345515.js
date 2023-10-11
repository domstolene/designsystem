import{d as V,s as d,j as c,a as t,F as $}from"./ddsReferenceTokens-ceb64027.js";import{$ as E,R as F,g as n}from"./libraryAdd-931d79ee.js";import"./Icon-72ef85ba.js";import{S as u}from"./StoryTemplate-a2fc1fbf.js";import{r as S}from"./index-1b03fe98.js";import{O as I}from"./OverflowMenuGroup-db34324f.js";import{O as j}from"./OverflowMenu-8a9c8cee.js";import{B as O}from"./Button-da201b9b.js";const M={primary:{borderLeft:`1px solid ${V.colors.DdsColorNeutralsWhite}`}},p={mainButton:M},W=d.div`
  display: flex;
`,q=d(O)`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: none;
  &:focus {
    position: relative;
    z-index: 0;
  }
`,D=d(O)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;

  ${e=>e.purpose==="primary"&&`
      border-left: ${p.mainButton.primary.borderLeft};
      &:hover {
        border-left: ${p.mainButton.primary.borderLeft};
      }
    `}

  &:focus {
    position: relative;
    z-index: 0;

    ${e=>e.purpose==="primary"&&`border-left: ${p.mainButton.primary.borderLeft}`};
  }
`,r=S.forwardRef((e,o)=>{const{size:w,primaryAction:x,secondaryActions:P,purpose:m="primary"}=e,[y,C]=S.useState(!1),f={appearance:"filled",purpose:m,size:w};return c(W,{ref:o,children:[t(q,{...f,...x,iconPosition:"left"}),c(I,{onToggle:()=>C(!y),children:[t(D,{...f,icon:y?E:F,"aria-label":"Åpne liste med flere valg",purpose:m}),t(j,{items:P,placement:"bottom-end"})]})]})});r.displayName="SplitButton";try{r.displayName="SplitButton",r.__docgenInfo={description:"",displayName:"SplitButton",props:{size:{defaultValue:null,description:"Størrelse på komponenten.",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"tiny"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},primaryAction:{defaultValue:null,description:"Props for primær handling. Samme props som for `<Button />` unntatt `size`, `purpose`, og `appearance`.",name:"primaryAction",required:!0,type:{name:'Omit<ButtonProps, "size" | "purpose" | "apperance">'}},secondaryActions:{defaultValue:null,description:"Props for sekunære handlinger.",name:"secondaryActions",required:!0,type:{name:"OverflowMenuButtonItem[]"}},purpose:{defaultValue:null,description:"Formål med knappen",name:"purpose",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"primary"'},{value:'"secondary"'}]}}}}}catch{}const L={title:"dds-components/SplitButton",component:r},i=[{title:"Sekundær handling",onClick:()=>{}},{title:"Sekundær handling 2",onClick:()=>{},icon:n}],a=e=>c(u,{title:"SplitButton - overview",display:"grid",children:[t(b,{args:e,purpose:"primary"}),t(b,{args:e,purpose:"secondary"})]}),s=e=>t(u,{title:"SplitButton - default",display:"block",children:t(r,{...e,primaryAction:{label:"Tekst"},secondaryActions:i})}),l=()=>t(u,{title:"SplitButton - full width",display:"block",children:t(r,{primaryAction:{label:"Tekst",fullWidth:!0},secondaryActions:i})}),b=({args:e,purpose:o})=>c($,{children:[t(r,{...e,primaryAction:{label:"Tekst"},secondaryActions:i,size:"large",purpose:o}),t(r,{...e,primaryAction:{label:"Tekst",icon:n},secondaryActions:i,size:"large",purpose:o}),t(r,{...e,primaryAction:{label:"Tekst",loading:!0},secondaryActions:i,size:"large",purpose:o}),t(r,{...e,primaryAction:{label:"Tekst"},secondaryActions:i,size:"medium",purpose:o}),t(r,{...e,primaryAction:{label:"Tekst",icon:n},secondaryActions:i,size:"medium",purpose:o}),t(r,{...e,primaryAction:{label:"Tekst",loading:!0},secondaryActions:i,size:"medium",purpose:o}),t(r,{...e,primaryAction:{label:"Tekst"},secondaryActions:i,size:"small",purpose:o}),t(r,{...e,primaryAction:{label:"Tekst",icon:n},secondaryActions:i,size:"small",purpose:o}),t(r,{...e,primaryAction:{label:"Tekst",loading:!0},secondaryActions:i,size:"small",purpose:o}),t(r,{...e,primaryAction:{label:"Tekst"},secondaryActions:i,size:"tiny",purpose:o}),t(r,{...e,primaryAction:{label:"Tekst",icon:n},secondaryActions:i,size:"tiny",purpose:o}),t(r,{...e,primaryAction:{label:"Tekst",loading:!0},secondaryActions:i,size:"tiny",purpose:o})]});var A,B,k;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`(args: SplitButtonProps) => <StoryTemplate title="SplitButton - overview" display="grid">
    <SplitButtonVariants args={args} purpose="primary" />
    <SplitButtonVariants args={args} purpose="secondary" />
  </StoryTemplate>`,...(k=(B=a.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var v,T,g;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`(args: SplitButtonProps) => <StoryTemplate title="SplitButton - default" display="block">
    <SplitButton {...args} primaryAction={{
    label: 'Tekst'
  }} secondaryActions={items} />
  </StoryTemplate>`,...(g=(T=s.parameters)==null?void 0:T.docs)==null?void 0:g.source}}};var h,z,_;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`() => <StoryTemplate title="SplitButton - full width" display="block">
    <SplitButton primaryAction={{
    label: 'Tekst',
    fullWidth: true
  }} secondaryActions={items} />
  </StoryTemplate>`,...(_=(z=l.parameters)==null?void 0:z.docs)==null?void 0:_.source}}};const N=["Overview","Default","FullWidth"],Y=Object.freeze(Object.defineProperty({__proto__:null,Default:s,FullWidth:l,Overview:a,__namedExportsOrder:N,default:L},Symbol.toStringTag,{value:"Module"}));export{Y as S};
//# sourceMappingURL=SplitButton.stories-5b345515.js.map
