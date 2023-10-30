import{j as s,a as e}from"./jsx-runtime-e43ccb36.js";import{S as l}from"./StoryTemplate-8b46689b.js";import{D as t}from"./Datepicker-d9c0fffc.js";const _={title:"dds-components/Datepicker",component:t,argTypes:{label:{control:{type:"text"}},tip:{control:{type:"text"}},errorMessage:{control:{type:"text"}},width:{control:{type:"text"}},required:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}}}},i=()=>s(l,{display:"grid",columnsAmount:2,title:"Datepicker - date overview",children:[e(t,{label:"Label"}),e(t,{}),e(t,{label:"Label",disabled:!0}),e(t,{disabled:!0}),e(t,{label:"Label",readOnly:!0}),e(t,{readOnly:!0}),e(t,{label:"Label",errorMessage:"Feilmelding"}),e(t,{errorMessage:"Feilmelding"}),e(t,{label:"Label",tip:"Hjelpetekst"}),e(t,{tip:"Hjelpetekst"}),e(t,{label:"Label",min:"2021-11-11",max:"2021-12-11"}),e(t,{min:"2021-11-11",max:"2021-12-11"})]}),r=()=>s(l,{display:"grid",columnsAmount:2,title:"Datepicker - datetime overview",children:[e(t,{type:"datetime-local",label:"Label"}),e(t,{type:"datetime-local"}),e(t,{type:"datetime-local",label:"Label",disabled:!0}),e(t,{type:"datetime-local",disabled:!0}),e(t,{type:"datetime-local",label:"Label",readOnly:!0}),e(t,{type:"datetime-local",readOnly:!0}),e(t,{type:"datetime-local",label:"Label",errorMessage:"Feilmelding"}),e(t,{type:"datetime-local",errorMessage:"Feilmelding"}),e(t,{type:"datetime-local",label:"Label",tip:"Hjelpetekst"}),e(t,{type:"datetime-local",tip:"Hjelpetekst"}),e(t,{type:"datetime-local",label:"Label",min:"2021-11-11T00:00",max:"2021-12-11T23:59"}),e(t,{type:"datetime-local",min:"2021-11-11T00:00",max:"2021-12-11T23:59"})]}),o=()=>s(l,{display:"grid",columnsAmount:2,title:"Datepicker - sizes overview",children:[e(t,{label:"Label",componentSize:"medium"}),e(t,{componentSize:"medium"}),e(t,{label:"Label",componentSize:"small"}),e(t,{componentSize:"small"}),e(t,{label:"Label",componentSize:"tiny"}),e(t,{componentSize:"tiny"}),e(t,{type:"datetime-local",label:"Label",componentSize:"medium"}),e(t,{type:"datetime-local",componentSize:"medium"}),e(t,{type:"datetime-local",label:"Label",componentSize:"small"}),e(t,{type:"datetime-local",componentSize:"small"}),e(t,{type:"datetime-local",label:"Label",componentSize:"tiny"}),e(t,{type:"datetime-local",componentSize:"tiny"})]}),p=a=>e(l,{title:"Datepicker - default",children:e(t,{...a})}),c=a=>e(l,{title:"Datepicker - with label",children:e(t,{...a,label:a.label??"Label"})}),m=a=>e(l,{title:"Datepicker - datetime",children:e(t,{...a,type:"datetime-local"})}),n=a=>e(l,{title:"Datepicker - datetime with label",children:e(t,{...a,type:"datetime-local",label:a.label??"Label"})});var d,b,y;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`() => <StoryTemplate display="grid" columnsAmount={2} title="Datepicker - date overview">
    <Datepicker label="Label" />
    <Datepicker />
    <Datepicker label="Label" disabled />
    <Datepicker disabled />
    <Datepicker label="Label" readOnly />
    <Datepicker readOnly />
    <Datepicker label="Label" errorMessage="Feilmelding" />
    <Datepicker errorMessage="Feilmelding" />
    <Datepicker label="Label" tip="Hjelpetekst" />
    <Datepicker tip="Hjelpetekst" />
    <Datepicker label="Label" min="2021-11-11" max="2021-12-11" />
    <Datepicker min="2021-11-11" max="2021-12-11" />
  </StoryTemplate>`,...(y=(b=i.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var D,k,u;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`() => <StoryTemplate display="grid" columnsAmount={2} title="Datepicker - datetime overview">
    <Datepicker type="datetime-local" label="Label" />
    <Datepicker type="datetime-local" />
    <Datepicker type="datetime-local" label="Label" disabled />
    <Datepicker type="datetime-local" disabled />
    <Datepicker type="datetime-local" label="Label" readOnly />
    <Datepicker type="datetime-local" readOnly />
    <Datepicker type="datetime-local" label="Label" errorMessage="Feilmelding" />
    <Datepicker type="datetime-local" errorMessage="Feilmelding" />
    <Datepicker type="datetime-local" label="Label" tip="Hjelpetekst" />
    <Datepicker type="datetime-local" tip="Hjelpetekst" />
    <Datepicker type="datetime-local" label="Label" min="2021-11-11T00:00" max="2021-12-11T23:59" />
    <Datepicker type="datetime-local" min="2021-11-11T00:00" max="2021-12-11T23:59" />
  </StoryTemplate>`,...(u=(k=r.parameters)==null?void 0:k.docs)==null?void 0:u.source}}};var S,L,g;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`() => <StoryTemplate display="grid" columnsAmount={2} title="Datepicker - sizes overview">
    <Datepicker label="Label" componentSize="medium" />
    <Datepicker componentSize="medium" />
    <Datepicker label="Label" componentSize="small" />
    <Datepicker componentSize="small" />
    <Datepicker label="Label" componentSize="tiny" />
    <Datepicker componentSize="tiny" />
    <Datepicker type="datetime-local" label="Label" componentSize="medium" />
    <Datepicker type="datetime-local" componentSize="medium" />
    <Datepicker type="datetime-local" label="Label" componentSize="small" />
    <Datepicker type="datetime-local" componentSize="small" />
    <Datepicker type="datetime-local" label="Label" componentSize="tiny" />
    <Datepicker type="datetime-local" componentSize="tiny" />
  </StoryTemplate>`,...(g=(L=o.parameters)==null?void 0:L.docs)==null?void 0:g.source}}};var z,v,T;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`(args: DatepickerProps) => <StoryTemplate title="Datepicker - default">
    <Datepicker {...args} />
  </StoryTemplate>`,...(T=(v=p.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var O,w,h;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`(args: DatepickerProps) => <StoryTemplate title="Datepicker - with label">
    <Datepicker {...args} label={args.label ?? 'Label'} />
  </StoryTemplate>`,...(h=(w=c.parameters)==null?void 0:w.docs)==null?void 0:h.source}}};var x,j,f;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`(args: DatepickerProps) => <StoryTemplate title="Datepicker - datetime">
    <Datepicker {...args} type="datetime-local" />
  </StoryTemplate>`,...(f=(j=m.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var M,F,H;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`(args: DatepickerProps) => <StoryTemplate title="Datepicker - datetime with label">
    <Datepicker {...args} type="datetime-local" label={args.label ?? 'Label'} />
  </StoryTemplate>`,...(H=(F=n.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};const A=["OverviewDate","OverviewDatetime","OverviewSizes","Default","WithLabel","Datetime","DatetimeWithLabel"],E=Object.freeze(Object.defineProperty({__proto__:null,Datetime:m,DatetimeWithLabel:n,Default:p,OverviewDate:i,OverviewDatetime:r,OverviewSizes:o,WithLabel:c,__namedExportsOrder:A,default:_},Symbol.toStringTag,{value:"Module"}));export{E as D,c as W,p as a,m as b,n as c};
//# sourceMappingURL=Datepicker.stories-3d6dce7a.js.map
