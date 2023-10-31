import{j as m,a as r}from"./jsx-runtime-e43ccb36.js";import{S as o}from"./StoryTemplate-d3d045d5.js";import{S as t}from"./index-638e8f98.js";const j={title:"dds-components/Search",component:t,argTypes:{tip:{control:{type:"text"}},label:{control:{type:"text"}}},parameters:{controls:{exclude:["style","className","buttonProps"]}}},p=["lala","ghostbusters","ghostbusters A","buardi","ghost3","ghost","ost","too","ghostbusters B","ghos","to ord","ghost2","Jan-Ole Olsen","Øst-Agder"],a=e=>m(o,{title:"Search - overview",children:[r(t,{...e,componentSize:"medium"}),r(t,{...e,componentSize:"medium",tip:"Dette er en hjelpetekst"}),r(t,{...e,label:e.label??"Label"}),r(t,{...e,componentSize:"medium",buttonProps:{onClick:()=>{},label:"Søk"}}),r(t,{...e,componentSize:"medium",buttonProps:{onClick:()=>{},label:"Secondary",purpose:"secondary"}}),r(t,{...e,componentSize:"medium",buttonProps:{onClick:()=>{},label:"Custom label"}}),r(t,{...e,componentSize:"medium",tip:"Dette er en hjelpetekst",buttonProps:{onClick:()=>{}}}),r(t,{...e,label:e.label??"Label",buttonProps:{onClick:()=>{}}}),r(t,{...e,componentSize:"medium",buttonProps:{onClick:()=>{},loading:!0}})]}),n=e=>m(o,{title:"Search - overview sizes",display:"grid",columnsAmount:2,children:[r(t,{...e,componentSize:"small"}),r(t,{...e,componentSize:"small",buttonProps:{onClick:()=>{},label:"Søk"}}),r(t,{...e,componentSize:"medium"}),r(t,{...e,componentSize:"medium",buttonProps:{onClick:()=>{},label:"Søk"}}),r(t,{...e,componentSize:"large"}),r(t,{...e,componentSize:"large",buttonProps:{onClick:()=>{},label:"Søk"}})]}),c=e=>m(o,{title:"Search - overview with suggestions",children:[r(t.AutocompleteWrapper,{data:{array:p},children:r(t,{...e,componentSize:"large"})}),r(t.AutocompleteWrapper,{data:{array:p},children:r(t,{...e,componentSize:"medium"})}),r(t.AutocompleteWrapper,{data:{array:p},children:r(t,{...e,componentSize:"small"})})]}),s=e=>r(o,{title:"Search - default",display:"block",children:r(t,{...e})}),l=e=>r(o,{title:"Search - with button",display:"block",children:r(t,{...e,buttonProps:{onClick:()=>{},label:"Søk"}})}),i=e=>r(o,{title:"Search - with suggestions",display:"block",children:r(t.AutocompleteWrapper,{data:{array:p},children:r(t,{...e})})});var S,u,d;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`(args: SearchProps) => {
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
      label: 'Secondary',
      purpose: 'secondary'
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
}`,...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var h,b,g;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`(args: SearchProps) => {
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
}`,...(g=(b=n.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var k,z,y;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`(args: SearchProps) => {
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
}`,...(y=(z=c.parameters)==null?void 0:z.docs)==null?void 0:y.source}}};var P,v,C;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`(args: SearchProps) => {
  return <StoryTemplate title="Search - default" display="block">
      <Search {...args} />
    </StoryTemplate>;
}`,...(C=(v=s.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var w,W,A;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`(args: SearchProps) => {
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
}`,...(f=(O=i.parameters)==null?void 0:O.docs)==null?void 0:f.source}}};const x=["Overview","OverviewSizes","OverviewWithSuggestions","Default","WithButton","WithSuggestions"],B=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Overview:a,OverviewSizes:n,OverviewWithSuggestions:c,WithButton:l,WithSuggestions:i,__namedExportsOrder:x,default:j},Symbol.toStringTag,{value:"Module"}));export{B as S};
//# sourceMappingURL=Search.stories-75f068ad.js.map
