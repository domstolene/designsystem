import{j as S,a as e}from"./ddsReferenceTokens-f1d35829.js";import{R as s}from"./storybook-components-97b79dd9.js";import{P as o}from"./Pagination-2462a1e1.js";const d={title:"dds-components/Pagination",component:o,argTypes:{withCounter:{control:"boolean"},withPagination:{control:"boolean"},withSelect:{control:"boolean"},smallScreen:{control:"boolean"},defaultItemsPerPage:{control:"number"},defaultActivePage:{control:"number"}},parameters:{controls:{exclude:["onChange","selectOptions"]}}},r=100,m=[17,32,r].map(t=>({label:t===r?"Alle":t.toString(),value:t})),i=t=>S(s,{title:"Pagination - overview",gap:"50px",containerStyle:{alignItems:"stretch"},children:[e(o,{...t,itemsAmount:70}),e(o,{...t,itemsAmount:100}),e(o,{...t,defaultActivePage:6,itemsAmount:100}),e(o,{...t,withCounter:!0,itemsAmount:100}),e(o,{...t,withCounter:!0,defaultItemsPerPage:20,itemsAmount:100}),e(o,{...t,withPagination:!1,withCounter:!0,itemsAmount:100}),e(o,{...t,withSelect:!0,itemsAmount:100}),e(o,{...t,withCounter:!0,withSelect:!0,itemsAmount:100}),e(o,{...t,withCounter:!0,withSelect:!0,withPagination:!1,itemsAmount:100}),e(o,{...t,withCounter:!0,withSelect:!0,defaultItemsPerPage:m[0].value,selectOptions:m,itemsAmount:r})]}),n=t=>S(s,{title:"Pagination - mobile overview",gap:"50px",children:[e(o,{...t,smallScreen:!0,itemsAmount:100}),e(o,{...t,smallScreen:!0,withCounter:!0,itemsAmount:100}),e(o,{...t,smallScreen:!0,withSelect:!0,itemsAmount:t.itemsAmount||100}),e(o,{...t,smallScreen:!0,withCounter:!0,withSelect:!0,itemsAmount:t.itemsAmount||100})]}),a=t=>e(s,{title:"Pagination - default",display:"block",children:e(o,{...t,itemsAmount:t.itemsAmount||100})});var u,l,c;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`(args: PaginationProps) => <StoryTemplate title="Pagination - overview" gap="50px" containerStyle={{
  alignItems: 'stretch'
}}>
    <Pagination {...args} itemsAmount={70} />
    <Pagination {...args} itemsAmount={100} />
    <Pagination {...args} defaultActivePage={6} itemsAmount={100} />
    <Pagination {...args} withCounter itemsAmount={100} />
    <Pagination {...args} withCounter defaultItemsPerPage={20} itemsAmount={100} />
    <Pagination {...args} withPagination={false} withCounter itemsAmount={100} />
    <Pagination {...args} withSelect itemsAmount={100} />
    <Pagination {...args} withCounter withSelect itemsAmount={100} />
    <Pagination {...args} withCounter withSelect withPagination={false} itemsAmount={100} />
    <Pagination {...args} withCounter withSelect defaultItemsPerPage={customOptions[0].value} selectOptions={customOptions} itemsAmount={customOptionsItemsAmount} />
  </StoryTemplate>`,...(c=(l=i.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var g,P,p;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`(args: PaginationProps) => <StoryTemplate title="Pagination - mobile overview" gap="50px">
    <Pagination {...args} smallScreen itemsAmount={100} />
    <Pagination {...args} smallScreen withCounter itemsAmount={100} />
    <Pagination {...args} smallScreen withSelect itemsAmount={args.itemsAmount || 100} />
    <Pagination {...args} smallScreen withCounter withSelect itemsAmount={args.itemsAmount || 100} />
  </StoryTemplate>`,...(p=(P=n.parameters)==null?void 0:P.docs)==null?void 0:p.source}}};var w,A,h;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`(args: PaginationProps) => <StoryTemplate title="Pagination - default" display="block">
    <Pagination {...args} itemsAmount={args.itemsAmount || 100} />
  </StoryTemplate>`,...(h=(A=a.parameters)==null?void 0:A.docs)==null?void 0:h.source}}};const v=["Overview","OverviewMobile","Default"],O=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Overview:i,OverviewMobile:n,__namedExportsOrder:v,default:d},Symbol.toStringTag,{value:"Module"}));export{O as P};
//# sourceMappingURL=Pagination.stories-644195f1.js.map
