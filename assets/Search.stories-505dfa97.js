import{a as m,j as t}from"./focus-visible-c2e9b88d.js";import{R as o}from"./storybook-components-c9cbefc3.js";import{S as r}from"./index-08797c9c.js";const j={title:"dds-components/Search",component:r,argTypes:{tip:{control:{type:"text"}},label:{control:{type:"text"}}},parameters:{controls:{exclude:["style","className","buttonProps"]}}},p=["lala","ghostbusters","ghostbusters A","buardi","ghost3","ghost","ost","too","ghostbusters B","ghos","to ord","ghost2","Jan-Ole Olsen","Øst-Agder"],a=e=>m(o,{title:"Search - overview",children:[t(r,{...e,componentSize:"medium"}),t(r,{...e,componentSize:"medium",tip:"Dette er en hjelpetekst"}),t(r,{...e,label:e.label??"Label"}),t(r,{...e,componentSize:"medium",buttonProps:{onClick:()=>{},label:"Søk"}}),t(r,{...e,componentSize:"medium",buttonProps:{onClick:()=>{},label:"Custom label"}}),t(r,{...e,componentSize:"medium",tip:"Dette er en hjelpetekst",buttonProps:{onClick:()=>{}}}),t(r,{...e,label:e.label??"Label",buttonProps:{onClick:()=>{}}}),t(r,{...e,componentSize:"medium",buttonProps:{onClick:()=>{},loading:!0}})]}),n=e=>m(o,{title:"Search - overview sizes",display:"grid",columnsAmount:2,children:[t(r,{...e,componentSize:"small"}),t(r,{...e,componentSize:"small",buttonProps:{onClick:()=>{},label:"Søk"}}),t(r,{...e,componentSize:"medium"}),t(r,{...e,componentSize:"medium",buttonProps:{onClick:()=>{},label:"Søk"}}),t(r,{...e,componentSize:"large"}),t(r,{...e,componentSize:"large",buttonProps:{onClick:()=>{},label:"Søk"}})]}),s=e=>m(o,{title:"Search - overview with suggestions",children:[t(r.AutocompleteWrapper,{data:{array:p},children:t(r,{...e,componentSize:"large"})}),t(r.AutocompleteWrapper,{data:{array:p},children:t(r,{...e,componentSize:"medium"})}),t(r.AutocompleteWrapper,{data:{array:p},children:t(r,{...e,componentSize:"small"})})]}),c=e=>t(o,{title:"Search - default",display:"block",children:t(r,{...e})}),l=e=>t(o,{title:"Search - with button",display:"block",children:t(r,{...e,buttonProps:{onClick:()=>{},label:"Søk"}})}),i=e=>t(o,{title:"Search - with suggestions",display:"block",children:t(r.AutocompleteWrapper,{data:{array:p},children:t(r,{...e})})});var S,u,h;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`(args: SearchProps) => {
  return <StoryTemplate title="Search - overview">
      <Search {...args} componentSize="medium" />
      <Search {...args} componentSize="medium" tip="Dette er en hjelpetekst" />
      <Search {...args} label={args.label ?? 'Label'} />
      <Search {...args} componentSize="medium" buttonProps={{
      onClick: () => {},
      label: 'Søk'
    }} />
      <Search {...args} componentSize="medium" buttonProps={{
      onClick: () => {},
      label: 'Custom label'
    }} />
      <Search {...args} componentSize="medium" tip="Dette er en hjelpetekst" buttonProps={{
      onClick: () => {}
    }} />
      <Search {...args} label={args.label ?? 'Label'} buttonProps={{
      onClick: () => {}
    }} />
      <Search {...args} componentSize="medium" buttonProps={{
      onClick: () => {},
      loading: true
    }} />
    </StoryTemplate>;
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var d,b,g;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`(args: SearchProps) => {
  return <StoryTemplate title="Search - overview sizes" display="grid" columnsAmount={2}>
      <Search {...args} componentSize="small" />
      <Search {...args} componentSize="small" buttonProps={{
      onClick: () => {},
      label: 'Søk'
    }} />
      <Search {...args} componentSize="medium" />
      <Search {...args} componentSize="medium" buttonProps={{
      onClick: () => {},
      label: 'Søk'
    }} />
      <Search {...args} componentSize="large" />
      <Search {...args} componentSize="large" buttonProps={{
      onClick: () => {},
      label: 'Søk'
    }} />
    </StoryTemplate>;
}`,...(g=(b=n.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var k,z,y;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`(args: SearchProps) => {
  return <StoryTemplate title="Search - overview with suggestions">
      <Search.AutocompleteWrapper data={{
      array
    }}>
        <Search {...args} componentSize="large" />
      </Search.AutocompleteWrapper>
      <Search.AutocompleteWrapper data={{
      array
    }}>
        <Search {...args} componentSize="medium" />
      </Search.AutocompleteWrapper>
      <Search.AutocompleteWrapper data={{
      array
    }}>
        <Search {...args} componentSize="small" />
      </Search.AutocompleteWrapper>
    </StoryTemplate>;
}`,...(y=(z=s.parameters)==null?void 0:z.docs)==null?void 0:y.source}}};var P,v,C;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`(args: SearchProps) => {
  return <StoryTemplate title="Search - default" display="block">
      <Search {...args} />
    </StoryTemplate>;
}`,...(C=(v=c.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var w,W,A;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`(args: SearchProps) => {
  return <StoryTemplate title="Search - with button" display="block">
      <Search {...args} buttonProps={{
      onClick: () => {},
      label: 'Søk'
    }} />
    </StoryTemplate>;
}`,...(A=(W=l.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var T,O,f;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`(args: SearchProps) => {
  return <StoryTemplate title="Search - with suggestions" display="block">
      <Search.AutocompleteWrapper data={{
      array
    }}>
        <Search {...args} />
      </Search.AutocompleteWrapper>
    </StoryTemplate>;
}`,...(f=(O=i.parameters)==null?void 0:O.docs)==null?void 0:f.source}}};const x=["Overview","OverviewSizes","OverviewWithSuggestions","Default","WithButton","WithSuggestions"],B=Object.freeze(Object.defineProperty({__proto__:null,Default:c,Overview:a,OverviewSizes:n,OverviewWithSuggestions:s,WithButton:l,WithSuggestions:i,__namedExportsOrder:x,default:j},Symbol.toStringTag,{value:"Module"}));export{B as S};
//# sourceMappingURL=Search.stories-505dfa97.js.map
