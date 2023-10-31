import{j as r,a as i}from"./jsx-runtime-e43ccb36.js";import{S as d}from"./StoryTemplate-1e37a8e1.js";import"./Caption-f392befe.js";import"./Heading-ad44a14c.js";import"./Label-2f40b05d.js";import"./Legend-4a50a7d7.js";import"./Link-53575534.js";import"./Paragraph-ea3f8ca3.js";import"./TextOverflowEllipsis-6cc9a60a.js";import{T as p}from"./Typography-2f5b7ed6.js";import{i as l}from"./libraryAdd-923f0275.js";import"./Icon-3ee4d35b.js";import{d as j}from"./ddsReferenceTokens-a28ebf03.js";import{D as n,a as s,b as e}from"./DescriptionListDesc-2468e8cd.js";import{D as t}from"./DescriptionListGroup-355f0770.js";const O={title:"dds-components/DescriptionList",component:n},D=()=>r(d,{display:"grid",title:"DescriptionList - overview",gap:"30px",columnsAmount:2,children:[r(n,{children:[i(s,{children:"Tittel"}),i(e,{children:"Beskrivelse"}),i(s,{children:"Tittel"}),i(e,{children:"Beskrivelse"}),i(e,{children:"Beskrivelse"})]}),r(n,{appearance:"small",children:[i(s,{children:"Tittel"}),i(e,{children:"Beskrivelse"}),i(s,{children:"Tittel"}),i(e,{children:"Beskrivelse"}),i(e,{children:"Beskrivelse"})]}),r(n,{children:[i(s,{children:"Tittel"}),i(e,{icon:l,children:i(p,{typographyType:"a",children:"+47 123 45 678"})}),i(s,{children:"Tittel"}),i(e,{icon:l,children:i(p,{typographyType:"a",children:"+47 123 45 678"})})]}),r(n,{appearance:"small",children:[i(s,{children:"Tittel"}),i(e,{icon:l,children:i(p,{typographyType:"a",children:"+47 123 45 678"})}),i(s,{children:"Tittel"}),i(e,{icon:l,children:i(p,{typographyType:"a",children:"+47 123 45 678"})})]})]}),a=o=>i(d,{title:"DescriptionList - default",children:r(n,{...o,children:[i(s,{children:"Tittel"}),i(e,{children:"Beskrivelse"}),i(s,{children:"Tittel"}),i(e,{children:"Beskrivelse"})]})}),L=o=>i(d,{title:"DescriptionList - group",gap:"0px",children:i("div",{children:r(n,{...o,children:[r(t,{children:[i(s,{children:"Tittel 1"}),i(e,{children:"Beskrivelse 1"}),i(e,{children:"Beskrivelse 1"})]}),r(t,{children:[i(s,{children:"Tittel 2"}),i(e,{children:"Beskrivelse 2"})]}),r(t,{children:[i(s,{children:"Tittel 3"}),i(e,{children:"Beskrivelse 3"})]}),r(t,{children:[i(s,{children:"Tittel 4"}),i(e,{children:"Beskrivelse 4"})]})]})})}),m=o=>i(d,{title:"DescriptionList - with icon",children:r(n,{...o,children:[i(s,{children:"Tittel"}),i(e,{icon:l,children:i(p,{typographyType:"a",children:"+47 123 45 678"})})]})}),T=o=>{const c=j.spacing.SizesDdsSpacingLocalX1;return i(d,{title:"DescriptionList - Flere kolonner",children:i("div",{children:r(n,{...o,direction:"row",children:[r(t,{margin:c,children:[i(s,{children:"Tittel 1"}),i(e,{children:"Beskrivelse 1"})]}),r(t,{margin:c,children:[i(s,{children:"Tittel 2"}),i(e,{children:"Beskrivelse 2"})]}),r(t,{margin:c,children:[i(s,{children:"Tittel 3"}),i(e,{children:"Beskrivelse 3"})]}),r(t,{margin:c,children:[i(s,{children:"Tittel 4"}),i(e,{children:"Beskrivelse 4"})]}),r(t,{margin:c,children:[i(s,{children:"Tittel 5"}),i(e,{children:"Beskrivelse 5"})]}),r(t,{margin:c,children:[i(s,{children:"Tittel 6"}),i(e,{children:"Beskrivelse 6"})]}),r(t,{margin:c,children:[i(s,{children:"Tittel 7"}),i(e,{children:"Beskrivelse 7"})]}),r(t,{margin:c,children:[i(s,{children:"Tittel 8"}),i(e,{children:"Beskrivelse 8"})]})]})})})};var h,y,g;D.parameters={...D.parameters,docs:{...(h=D.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  return <StoryTemplate display="grid" title="DescriptionList - overview" gap="30px" columnsAmount={2}>
      <DescriptionList>
        <DescriptionListTerm>Tittel</DescriptionListTerm>
        <DescriptionListDesc>Beskrivelse</DescriptionListDesc>

        <DescriptionListTerm>Tittel</DescriptionListTerm>
        <DescriptionListDesc>Beskrivelse</DescriptionListDesc>
        <DescriptionListDesc>Beskrivelse</DescriptionListDesc>
      </DescriptionList>
      <DescriptionList appearance="small">
        <DescriptionListTerm>Tittel</DescriptionListTerm>
        <DescriptionListDesc>Beskrivelse</DescriptionListDesc>

        <DescriptionListTerm>Tittel</DescriptionListTerm>
        <DescriptionListDesc>Beskrivelse</DescriptionListDesc>
        <DescriptionListDesc>Beskrivelse</DescriptionListDesc>
      </DescriptionList>

      <DescriptionList>
        <DescriptionListTerm>Tittel</DescriptionListTerm>
        <DescriptionListDesc icon={CallIcon}>
          <Typography typographyType="a">+47 123 45 678</Typography>
        </DescriptionListDesc>
        <DescriptionListTerm>Tittel</DescriptionListTerm>
        <DescriptionListDesc icon={CallIcon}>
          <Typography typographyType="a">+47 123 45 678</Typography>
        </DescriptionListDesc>
      </DescriptionList>

      <DescriptionList appearance="small">
        <DescriptionListTerm>Tittel</DescriptionListTerm>
        <DescriptionListDesc icon={CallIcon}>
          <Typography typographyType="a">+47 123 45 678</Typography>
        </DescriptionListDesc>
        <DescriptionListTerm>Tittel</DescriptionListTerm>
        <DescriptionListDesc icon={CallIcon}>
          <Typography typographyType="a">+47 123 45 678</Typography>
        </DescriptionListDesc>
      </DescriptionList>
    </StoryTemplate>;
}`,...(g=(y=D.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var u,v,k;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`(args: DescriptionListProps) => {
  return <StoryTemplate title="DescriptionList - default">
      <DescriptionList {...args}>
        <DescriptionListTerm>Tittel</DescriptionListTerm>
        <DescriptionListDesc>Beskrivelse</DescriptionListDesc>
        <DescriptionListTerm>Tittel</DescriptionListTerm>
        <DescriptionListDesc>Beskrivelse</DescriptionListDesc>
      </DescriptionList>
    </StoryTemplate>;
}`,...(k=(v=a.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var B,G,S;L.parameters={...L.parameters,docs:{...(B=L.parameters)==null?void 0:B.docs,source:{originalSource:`(args: DescriptionListProps) => {
  return <StoryTemplate title="DescriptionList - group" gap="0px">
      <div>
        <DescriptionList {...args}>
          <DescriptionListGroup>
            <DescriptionListTerm>Tittel 1</DescriptionListTerm>
            <DescriptionListDesc>Beskrivelse 1</DescriptionListDesc>
            <DescriptionListDesc>Beskrivelse 1</DescriptionListDesc>
          </DescriptionListGroup>
          <DescriptionListGroup>
            <DescriptionListTerm>Tittel 2</DescriptionListTerm>
            <DescriptionListDesc>Beskrivelse 2</DescriptionListDesc>
          </DescriptionListGroup>
          <DescriptionListGroup>
            <DescriptionListTerm>Tittel 3</DescriptionListTerm>
            <DescriptionListDesc>Beskrivelse 3</DescriptionListDesc>
          </DescriptionListGroup>
          <DescriptionListGroup>
            <DescriptionListTerm>Tittel 4</DescriptionListTerm>
            <DescriptionListDesc>Beskrivelse 4</DescriptionListDesc>
          </DescriptionListGroup>
        </DescriptionList>
      </div>
    </StoryTemplate>;
}`,...(S=(G=L.parameters)==null?void 0:G.docs)==null?void 0:S.source}}};var f,w,x;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`(args: DescriptionListProps) => {
  return <StoryTemplate title="DescriptionList - with icon">
      <DescriptionList {...args}>
        <DescriptionListTerm>Tittel</DescriptionListTerm>
        <DescriptionListDesc icon={CallIcon}>
          <Typography typographyType="a">+47 123 45 678</Typography>
        </DescriptionListDesc>
      </DescriptionList>
    </StoryTemplate>;
}`,...(x=(w=m.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var I,_,C;T.parameters={...T.parameters,docs:{...(I=T.parameters)==null?void 0:I.docs,source:{originalSource:`(args: DescriptionListProps) => {
  const margin = tokens.spacing.SizesDdsSpacingLocalX1;
  return <StoryTemplate title="DescriptionList - Flere kolonner">
      <div>
        <DescriptionList {...args} direction="row">
          <DescriptionListGroup margin={margin}>
            <DescriptionListTerm>Tittel 1</DescriptionListTerm>
            <DescriptionListDesc>Beskrivelse 1</DescriptionListDesc>
          </DescriptionListGroup>
          <DescriptionListGroup margin={margin}>
            <DescriptionListTerm>Tittel 2</DescriptionListTerm>
            <DescriptionListDesc>Beskrivelse 2</DescriptionListDesc>
          </DescriptionListGroup>
          <DescriptionListGroup margin={margin}>
            <DescriptionListTerm>Tittel 3</DescriptionListTerm>
            <DescriptionListDesc>Beskrivelse 3</DescriptionListDesc>
          </DescriptionListGroup>
          <DescriptionListGroup margin={margin}>
            <DescriptionListTerm>Tittel 4</DescriptionListTerm>
            <DescriptionListDesc>Beskrivelse 4</DescriptionListDesc>
          </DescriptionListGroup>
          <DescriptionListGroup margin={margin}>
            <DescriptionListTerm>Tittel 5</DescriptionListTerm>
            <DescriptionListDesc>Beskrivelse 5</DescriptionListDesc>
          </DescriptionListGroup>
          <DescriptionListGroup margin={margin}>
            <DescriptionListTerm>Tittel 6</DescriptionListTerm>
            <DescriptionListDesc>Beskrivelse 6</DescriptionListDesc>
          </DescriptionListGroup>
          <DescriptionListGroup margin={margin}>
            <DescriptionListTerm>Tittel 7</DescriptionListTerm>
            <DescriptionListDesc>Beskrivelse 7</DescriptionListDesc>
          </DescriptionListGroup>
          <DescriptionListGroup margin={margin}>
            <DescriptionListTerm>Tittel 8</DescriptionListTerm>
            <DescriptionListDesc>Beskrivelse 8</DescriptionListDesc>
          </DescriptionListGroup>
        </DescriptionList>
      </div>
    </StoryTemplate>;
}`,...(C=(_=T.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};const P=["Overview","Default","Group","WithIcon","RowDirectionExample"],U=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Group:L,Overview:D,RowDirectionExample:T,WithIcon:m,__namedExportsOrder:P,default:O},Symbol.toStringTag,{value:"Module"}));export{U as D,a};
//# sourceMappingURL=DescriptionList.stories-c9a356a7.js.map
