import{j as i,a as t}from"./ddsReferenceTokens-647ce456.js";import{S as l}from"./StoryTemplate-ef3899a2.js";import"./Caption-9d9a71c0.js";import"./Heading-b4646737.js";import"./Label-470a2743.js";import"./Legend-6fbf6204.js";import"./Link-3e1e1a74.js";import"./Paragraph-ff3eeae6.js";import"./TextOverflowEllipsis-e3546c5b.js";import{T as L}from"./Typography-b6b10a83.js";import{L as n,a as e}from"./ListItem-e6aad30c.js";const b={title:"dds-components/List",component:n},r=s=>i(l,{title:"List - overview",display:"grid",columnsAmount:4,children:[i(n,{...s,typographyType:"bodySans01",children:[t(e,{children:"Item"}),t(e,{children:"Item"}),i(e,{children:["Item",i(n,{typographyType:"bodySans01",children:[t(e,{children:"Item"}),i(e,{children:["Item",i(n,{children:[t(e,{children:"Item"}),t(e,{children:"Item"})]})]})]})]})]}),i(n,{...s,listType:"ordered",typographyType:"bodySans01",children:[t(e,{children:"Item"}),t(e,{children:"Item"}),i(e,{children:["Item",i(n,{listType:"ordered",typographyType:"bodySans01",children:[t(e,{children:"Item"}),i(e,{children:["Item",i(n,{listType:"ordered",children:[t(e,{children:"Item"}),t(e,{children:"Item"})]})]})]})]})]}),i(n,{...s,children:[t(e,{children:"Item"}),t(e,{children:"Item"}),i(e,{children:["Item",i(n,{children:[t(e,{children:"Item"}),i(e,{children:["Item",i(n,{children:[t(e,{children:"Item"}),t(e,{children:"Item"})]})]})]})]})]}),i(n,{...s,listType:"ordered",children:[t(e,{children:"Item"}),t(e,{children:"Item"}),i(e,{children:["Item",i(n,{listType:"ordered",children:[t(e,{children:"Item"}),i(e,{children:["Item",i(n,{listType:"ordered",children:[t(e,{children:"Item"}),t(e,{children:"Item"})]})]})]})]})]}),i(n,{...s,typographyType:"bodySans03",children:[t(e,{children:"Item"}),t(e,{children:"Item"}),i(e,{children:["Item",i(n,{children:[t(e,{children:"Item"}),i(e,{children:["Item",i(n,{children:[t(e,{children:"Item"}),t(e,{children:"Item"})]})]})]})]})]}),i(n,{...s,listType:"ordered",typographyType:"bodySans03",children:[t(e,{children:"Item"}),t(e,{children:"Item"}),i(e,{children:["Item",i(n,{listType:"ordered",children:[t(e,{children:"Item"}),i(e,{children:["Item",i(n,{listType:"ordered",children:[t(e,{children:"Item"}),t(e,{children:"Item"})]})]})]})]})]}),i(n,{...s,typographyType:"bodySans04",children:[t(e,{children:"Item"}),t(e,{children:"Item"}),i(e,{children:["Item",i(n,{children:[t(e,{children:"Item"}),i(e,{children:["Item",i(n,{children:[t(e,{children:"Item"}),t(e,{children:"Item"})]})]})]})]})]}),i(n,{...s,listType:"ordered",typographyType:"bodySans04",children:[t(e,{children:"Item"}),t(e,{children:"Item"}),i(e,{children:["Item",i(n,{listType:"ordered",children:[t(e,{children:"Item"}),i(e,{children:["Item",i(n,{listType:"ordered",children:[t(e,{children:"Item"}),t(e,{children:"Item"})]})]})]})]})]})]}),m=s=>t(l,{title:"List - default",children:i(n,{...s,children:[t(e,{children:"Item"}),t(e,{children:"Item"})]})}),I=s=>t(l,{title:"List - nested",children:i(n,{...s,children:[t(e,{children:"Item"}),t(e,{children:"Item"}),i(e,{children:["Item",i(n,{...s,children:[t(e,{children:"Item"}),i(e,{children:["Item",i(n,{...s,children:[t(e,{children:"Item"}),t(e,{children:"Item"})]})]})]})]})]})}),d=s=>t(l,{title:"List - example",children:i("div",{style:{maxWidth:"700px"},children:[t(L,{withMargins:!0,children:"Første gang du gjør tjeneste som arbeidslivskyndig meddommer, vil rettens leder be deg om:"}),i(n,{...s,children:[t(e,{children:"å følge nøye med i forhandlingen"}),t(e,{children:"merke deg forklaringene som blir gitt og bevisene som blir fremlagt"}),t(e,{children:"å gi uttrykk for hvordan du vurderer saken etter at bevisene er lagt frem"}),t(e,{children:"å ikke legge vekt på andre forhold enn bevisene som er ført i saken"})]}),t(L,{withMargins:!0,children:"Første gang du er i retten må du også avgi en forsikring. Den sier at du både i den aktuelle saken og i fremtidige saker vil gi vel akt på alt som fremkommer gjennom forhandlingene i retten, og at du vil dømme slik du finner sannest å rettest å være etter loven og sakens bevisligheter. På oppfordring fra dommeren, skal du til dette svare: «Det forsikrer jeg.»"})]})});var o,a,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`(args: ListProps) => {
  return <StoryTemplate title="List - overview" display="grid" columnsAmount={4}>
      <List {...args} typographyType="bodySans01">
        <ListItem>Item</ListItem>
        <ListItem>Item</ListItem>
        <ListItem>
          Item
          <List typographyType="bodySans01">
            <ListItem>Item</ListItem>
            <ListItem>
              Item
              <List>
                <ListItem>Item</ListItem>
                <ListItem>Item</ListItem>
              </List>
            </ListItem>
          </List>
        </ListItem>
      </List>

      <List {...args} listType="ordered" typographyType="bodySans01">
        <ListItem>Item</ListItem>
        <ListItem>Item</ListItem>
        <ListItem>
          Item
          <List listType="ordered" typographyType="bodySans01">
            <ListItem>Item</ListItem>
            <ListItem>
              Item
              <List listType="ordered">
                <ListItem>Item</ListItem>
                <ListItem>Item</ListItem>
              </List>
            </ListItem>
          </List>
        </ListItem>
      </List>

      <List {...args}>
        <ListItem>Item</ListItem>
        <ListItem>Item</ListItem>
        <ListItem>
          Item
          <List>
            <ListItem>Item</ListItem>
            <ListItem>
              Item
              <List>
                <ListItem>Item</ListItem>
                <ListItem>Item</ListItem>
              </List>
            </ListItem>
          </List>
        </ListItem>
      </List>

      <List {...args} listType="ordered">
        <ListItem>Item</ListItem>
        <ListItem>Item</ListItem>
        <ListItem>
          Item
          <List listType="ordered">
            <ListItem>Item</ListItem>
            <ListItem>
              Item
              <List listType="ordered">
                <ListItem>Item</ListItem>
                <ListItem>Item</ListItem>
              </List>
            </ListItem>
          </List>
        </ListItem>
      </List>

      <List {...args} typographyType="bodySans03">
        <ListItem>Item</ListItem>
        <ListItem>Item</ListItem>
        <ListItem>
          Item
          <List>
            <ListItem>Item</ListItem>
            <ListItem>
              Item
              <List>
                <ListItem>Item</ListItem>
                <ListItem>Item</ListItem>
              </List>
            </ListItem>
          </List>
        </ListItem>
      </List>

      <List {...args} listType="ordered" typographyType="bodySans03">
        <ListItem>Item</ListItem>
        <ListItem>Item</ListItem>
        <ListItem>
          Item
          <List listType="ordered">
            <ListItem>Item</ListItem>
            <ListItem>
              Item
              <List listType="ordered">
                <ListItem>Item</ListItem>
                <ListItem>Item</ListItem>
              </List>
            </ListItem>
          </List>
        </ListItem>
      </List>

      <List {...args} typographyType="bodySans04">
        <ListItem>Item</ListItem>
        <ListItem>Item</ListItem>
        <ListItem>
          Item
          <List>
            <ListItem>Item</ListItem>
            <ListItem>
              Item
              <List>
                <ListItem>Item</ListItem>
                <ListItem>Item</ListItem>
              </List>
            </ListItem>
          </List>
        </ListItem>
      </List>

      <List {...args} listType="ordered" typographyType="bodySans04">
        <ListItem>Item</ListItem>
        <ListItem>Item</ListItem>
        <ListItem>
          Item
          <List listType="ordered">
            <ListItem>Item</ListItem>
            <ListItem>
              Item
              <List listType="ordered">
                <ListItem>Item</ListItem>
                <ListItem>Item</ListItem>
              </List>
            </ListItem>
          </List>
        </ListItem>
      </List>
    </StoryTemplate>;
}`,...(p=(a=r.parameters)==null?void 0:a.docs)==null?void 0:p.source}}};var c,h,y;m.parameters={...m.parameters,docs:{...(c=m.parameters)==null?void 0:c.docs,source:{originalSource:`(args: ListProps) => {
  return <StoryTemplate title="List - default">
      <List {...args}>
        <ListItem>Item</ListItem>
        <ListItem>Item</ListItem>
      </List>
    </StoryTemplate>;
}`,...(y=(h=m.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var g,u,T;I.parameters={...I.parameters,docs:{...(g=I.parameters)==null?void 0:g.docs,source:{originalSource:`(args: ListProps) => {
  return <StoryTemplate title="List - nested">
      <List {...args}>
        <ListItem>Item</ListItem>
        <ListItem>Item</ListItem>
        <ListItem>
          Item
          <List {...args}>
            <ListItem>Item</ListItem>
            <ListItem>
              Item
              <List {...args}>
                <ListItem>Item</ListItem>
                <ListItem>Item</ListItem>
              </List>
            </ListItem>
          </List>
        </ListItem>
      </List>
    </StoryTemplate>;
}`,...(T=(u=I.parameters)==null?void 0:u.docs)==null?void 0:T.source}}};var v,f,k;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`(args: ListProps) => {
  return <StoryTemplate title="List - example">
      <div style={{
      maxWidth: '700px'
    }}>
        <Typography withMargins>
          Første gang du gjør tjeneste som arbeidslivskyndig meddommer, vil
          rettens leder be deg om:
        </Typography>
        <List {...args}>
          <ListItem>å følge nøye med i forhandlingen</ListItem>
          <ListItem>
            merke deg forklaringene som blir gitt og bevisene som blir fremlagt
          </ListItem>
          <ListItem>
            å gi uttrykk for hvordan du vurderer saken etter at bevisene er lagt
            frem
          </ListItem>
          <ListItem>
            å ikke legge vekt på andre forhold enn bevisene som er ført i saken
          </ListItem>
        </List>
        <Typography withMargins>
          Første gang du er i retten må du også avgi en forsikring. Den sier at
          du både i den aktuelle saken og i fremtidige saker vil gi vel akt på
          alt som fremkommer gjennom forhandlingene i retten, og at du vil dømme
          slik du finner sannest å rettest å være etter loven og sakens
          bevisligheter. På oppfordring fra dommeren, skal du til dette svare:
          «Det forsikrer jeg.»
        </Typography>
      </div>
    </StoryTemplate>;
}`,...(k=(f=d.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};const S=["Overview","Default","Nested","Example"],N=Object.freeze(Object.defineProperty({__proto__:null,Default:m,Example:d,Nested:I,Overview:r,__namedExportsOrder:S,default:b},Symbol.toStringTag,{value:"Module"}));export{N as L};
//# sourceMappingURL=List.stories-b0f4dacd.js.map
