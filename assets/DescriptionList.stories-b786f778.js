import{s as F,j as i,a as r,d as M}from"./focus-visible-c2e9b88d.js";import{R as T}from"./storybook-components-045061bd.js";import{C as p}from"./call-adc50a8d.js";import{r as N}from"./index-ebeaab24.js";import{d as W,a as o,b as s,D as e}from"./DescriptionListDesc-d92b631c.js";import{g as X}from"./BaseComponentProps-bb0d5515.js";import{T as l}from"./Typography-9f10a259.js";const H=F.div`
  margin: ${({margin:t})=>t||W.group.base.margin};
  ${({minWidth:t})=>t&&`min-width: ${t}`}
  ${({maxWidth:t})=>t&&`max-width: ${t}`}
`,n=N.forwardRef((t,c)=>{const{children:h,margin:b,minWidth:j,maxWidth:O,id:$,className:E,htmlProps:R,...z}=t,A={...X($,E,R,z),children:h,ref:c,margin:b,minWidth:j,maxWidth:O};return i(H,{...A,children:h})});n.displayName="DescriptionListGroup";const q={title:"dds-components/DescriptionList",component:o},D=()=>r(T,{display:"grid",title:"DescriptionList - overview",gap:"30px",columnsAmount:2,children:[r(o,{children:[i(s,{children:"Tittel"}),i(e,{children:"Beskrivelse"}),i(s,{children:"Tittel"}),i(e,{children:"Beskrivelse"}),i(e,{children:"Beskrivelse"})]}),r(o,{appearance:"small",children:[i(s,{children:"Tittel"}),i(e,{children:"Beskrivelse"}),i(s,{children:"Tittel"}),i(e,{children:"Beskrivelse"}),i(e,{children:"Beskrivelse"})]}),r(o,{children:[i(s,{children:"Tittel"}),i(e,{icon:p,children:i(l,{typographyType:"a",children:"+47 123 45 678"})}),i(s,{children:"Tittel"}),i(e,{icon:p,children:i(l,{typographyType:"a",children:"+47 123 45 678"})})]}),r(o,{appearance:"small",children:[i(s,{children:"Tittel"}),i(e,{icon:p,children:i(l,{typographyType:"a",children:"+47 123 45 678"})}),i(s,{children:"Tittel"}),i(e,{icon:p,children:i(l,{typographyType:"a",children:"+47 123 45 678"})})]})]}),a=t=>i(T,{title:"DescriptionList - default",children:r(o,{...t,children:[i(s,{children:"Tittel"}),i(e,{children:"Beskrivelse"}),i(s,{children:"Tittel"}),i(e,{children:"Beskrivelse"})]})}),L=t=>i(T,{title:"DescriptionList - group",gap:"0px",children:i("div",{children:r(o,{...t,children:[r(n,{children:[i(s,{children:"Tittel 1"}),i(e,{children:"Beskrivelse 1"}),i(e,{children:"Beskrivelse 1"})]}),r(n,{children:[i(s,{children:"Tittel 2"}),i(e,{children:"Beskrivelse 2"})]}),r(n,{children:[i(s,{children:"Tittel 3"}),i(e,{children:"Beskrivelse 3"})]}),r(n,{children:[i(s,{children:"Tittel 4"}),i(e,{children:"Beskrivelse 4"})]})]})})}),d=t=>i(T,{title:"DescriptionList - with icon",children:r(o,{...t,children:[i(s,{children:"Tittel"}),i(e,{icon:p,children:i(l,{typographyType:"a",children:"+47 123 45 678"})})]})}),m=t=>{const c=M.spacing.SizesDdsSpacingLocalX1;return i(T,{title:"DescriptionList - Flere kolonner",children:i("div",{children:r(o,{...t,direction:"row",children:[r(n,{margin:c,children:[i(s,{children:"Tittel 1"}),i(e,{children:"Beskrivelse 1"})]}),r(n,{margin:c,children:[i(s,{children:"Tittel 2"}),i(e,{children:"Beskrivelse 2"})]}),r(n,{margin:c,children:[i(s,{children:"Tittel 3"}),i(e,{children:"Beskrivelse 3"})]}),r(n,{margin:c,children:[i(s,{children:"Tittel 4"}),i(e,{children:"Beskrivelse 4"})]}),r(n,{margin:c,children:[i(s,{children:"Tittel 5"}),i(e,{children:"Beskrivelse 5"})]}),r(n,{margin:c,children:[i(s,{children:"Tittel 6"}),i(e,{children:"Beskrivelse 6"})]}),r(n,{margin:c,children:[i(s,{children:"Tittel 7"}),i(e,{children:"Beskrivelse 7"})]}),r(n,{margin:c,children:[i(s,{children:"Tittel 8"}),i(e,{children:"Beskrivelse 8"})]})]})})})};var g,u,y;D.parameters={...D.parameters,docs:{...(g=D.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
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
}`,...(y=(u=D.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var v,k,B;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`(args: DescriptionListProps) => {
  return <StoryTemplate title="DescriptionList - default">
      <DescriptionList {...args}>
        <DescriptionListTerm>Tittel</DescriptionListTerm>
        <DescriptionListDesc>Beskrivelse</DescriptionListDesc>
        <DescriptionListTerm>Tittel</DescriptionListTerm>
        <DescriptionListDesc>Beskrivelse</DescriptionListDesc>
      </DescriptionList>
    </StoryTemplate>;
}`,...(B=(k=a.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var G,S,f;L.parameters={...L.parameters,docs:{...(G=L.parameters)==null?void 0:G.docs,source:{originalSource:`(args: DescriptionListProps) => {
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
}`,...(f=(S=L.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var w,x,I;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`(args: DescriptionListProps) => {
  return <StoryTemplate title="DescriptionList - with icon">
      <DescriptionList {...args}>
        <DescriptionListTerm>Tittel</DescriptionListTerm>
        <DescriptionListDesc icon={CallIcon}>
          <Typography typographyType="a">+47 123 45 678</Typography>
        </DescriptionListDesc>
      </DescriptionList>
    </StoryTemplate>;
}`,...(I=(x=d.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var P,C,_;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`(args: DescriptionListProps) => {
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
}`,...(_=(C=m.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};const J=["Overview","Default","Group","WithIcon","RowDirectionExample"],ei=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Group:L,Overview:D,RowDirectionExample:m,WithIcon:d,__namedExportsOrder:J,default:q},Symbol.toStringTag,{value:"Module"}));export{ei as D,a,n as b};
//# sourceMappingURL=DescriptionList.stories-b786f778.js.map
