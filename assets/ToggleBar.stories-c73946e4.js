import{d as pe,s as x,A as P,a as e,j as r}from"./ddsReferenceTokens-647ce456.js";import{S as h}from"./StoryTemplate-ef3899a2.js";import{g as i}from"./libraryAdd-35e18a4f.js";import{I as Te}from"./Icon-42793503.js";import{r as g}from"./index-ebeaab24.js";import{c as N,s as he,g as ve}from"./BaseComponentProps-a100791d.js";import{c as Ae}from"./combineHandlers-f6d4455a.js";import"./Caption-9d9a71c0.js";import"./Heading-b4646737.js";import"./Label-470a2743.js";import"./Legend-6fbf6204.js";import"./Link-3e1e1a74.js";import"./Paragraph-ff3eeae6.js";import"./TextOverflowEllipsis-e3546c5b.js";import{T as ye,a as fe}from"./Typography-b6b10a83.js";import{a as Se,H as q,f as Ce}from"./Input.styles-01f05292.js";const me=g.createContext({size:"medium"}),Be=()=>g.useContext(me),{colors:c,spacing:d,border:w,borderRadius:k,fontPackages:T}=pe,Re={large:"bodySans04",medium:"bodySans02",small:"bodySans01",tiny:"supportingStyleTiny01"},_e=`${N(T.supportingStyle_tiny_01.numbers.lineHeightNumber,T.supportingStyle_tiny_01.numbers.fontSizeNumber)}px`,ze=`${N(T.body_sans_01.numbers.lineHeightNumber,T.body_sans_01.numbers.fontSizeNumber)}px`,Ie=`${N(T.body_sans_02.numbers.lineHeightNumber,T.body_sans_02.numbers.fontSizeNumber)}px`,$e=`${N(T.body_sans_04.numbers.lineHeightNumber,T.body_sans_04.numbers.fontSizeNumber)}px`,Le={gap:d.SizesDdsSpacingLocalX0125},Ve={base:{borderColor:c.DdsColorNeutralsGray5,borderRight:`${w.BordersDdsBorderStyleLightStrokeWeight} solid ${c.DdsColorNeutralsGray5}`,borderTop:`${w.BordersDdsBorderStyleLightStrokeWeight} solid ${c.DdsColorNeutralsGray5}`,borderBottom:`${w.BordersDdsBorderStyleLightStrokeWeight} solid ${c.DdsColorNeutralsGray5}`},hover:{color:c.DdsColorInteractiveDark,borderColor:c.DdsColorInteractiveDark},firstChild:{borderLeft:`${w.BordersDdsBorderStyleLightStrokeWeight} solid ${c.DdsColorNeutralsGray5}`,borderTopLeftRadius:k.RadiiDdsBorderRadius1Radius,borderBottomLeftRadius:k.RadiiDdsBorderRadius1Radius},lastChild:{borderTopRightRadius:k.RadiiDdsBorderRadius1Radius,borderBottomRightRadius:k.RadiiDdsBorderRadius1Radius}},De={base:{backgroundColor:c.DdsColorNeutralsGray1},active:{color:c.DdsColorInteractiveDarkest,borderColor:c.DdsColorInteractiveDarker,backgroundColor:c.DdsColorInteractiveLightest,boxShadow:`inset 0 0 0 1px ${c.DdsColorInteractiveDarker}`},size:{tiny:{justIcon:{padding:d.SizesDdsSpacingLocalX025,fontSize:_e},withText:{padding:`${d.SizesDdsSpacingLocalX025} ${d.SizesDdsSpacingLocalX075}`,gap:d.SizesDdsSpacingLocalX05}},small:{justIcon:{padding:d.SizesDdsSpacingLocalX05,fontSize:ze},withText:{padding:`${d.SizesDdsSpacingLocalX05} ${d.SizesDdsSpacingLocalX1}`,gap:d.SizesDdsSpacingLocalX05}},medium:{justIcon:{padding:d.SizesDdsSpacingLocalX075,fontSize:Ie},withText:{padding:`${d.SizesDdsSpacingLocalX075} ${d.SizesDdsSpacingLocalX15}`,gap:d.SizesDdsSpacingLocalX05}},large:{justIcon:{padding:d.SizesDdsSpacingLocalX1,fontSize:$e},withText:{padding:`${d.SizesDdsSpacingLocalX1} ${d.SizesDdsSpacingLocalX2}`,gap:d.SizesDdsSpacingLocalX1}}}},be={outerContainer:Le,content:De,label:Ve},we=x.div`
  display: flex;
  flex-direction: column;
  gap: ${be.outerContainer.gap};
  &::selection,
  *::selection {
    ${he}
  }
  ${({width:a})=>a&&P`
      width: ${a};
    `}
`,ke=x.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
`,s=a=>{const{children:o,size:n="medium",label:u,onChange:t,value:W,name:y,width:f,htmlProps:A,className:H,id:$,...X}=a,j=g.useId(),L=$??`${j}-ToggleBar`,[m,E]=g.useState(W),V=Ae(D=>E(D.target.value),D=>t&&t(D,D.target.value)),M=u&&`${L}-label`;return e(me.Provider,{value:{size:n,onChange:V,name:y,value:m},children:r(we,{...ve($,H,A,X),role:"radiogroup","aria-labelledby":M??(A==null?void 0:A["aria-labelledby"]),width:f,children:[u&&e(ye,{typographyType:"supportingStyleLabel01",id:M,children:u}),e(ke,{children:o})]})})};s.displayName="ToggleBar";try{s.displayName="ToggleBar",s.__docgenInfo={description:"",displayName:"ToggleBar",props:{size:{defaultValue:null,description:"Størrelse på komponenten.",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"tiny"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},label:{defaultValue:null,description:"Ledetekst for hele gruppen.",name:"label",required:!1,type:{name:"string | undefined"}},onChange:{defaultValue:null,description:"Funksjonen for `onChange`-event for barna.",name:"onChange",required:!1,type:{name:"((event: ChangeEvent<HTMLInputElement>, value?: T | undefined) => void) | undefined"}},value:{defaultValue:null,description:"Den valgte verdien i gruppen. Hvis satt ved innlastning blir en `<ToggleRadio />` forhåndsvalgt.",name:"value",required:!1,type:{name:"string | number | undefined"}},name:{defaultValue:null,description:"Gir alle barna samme `name` prop.",name:"name",required:!1,type:{name:"string | undefined"}},width:{defaultValue:null,description:"Bredden til komponenten. Bredden fordeles likt mellom barna.",name:"width",required:!1,type:{name:"Width<0 | (string & {})> | undefined"}},htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:"HTMLAttributes<HTMLDivElement> | undefined"}}}}}catch{}const{content:b,label:v}=be,p=x.span`
  display: flex;
  justify-content: center;
  align-items: center;
  word-break: break-word;
  height: 100%;
  box-sizing: border-box;
  cursor: pointer;
  @media (prefers-reduced-motion: no-preference) {
    transition: border-color 0.2s, background-color 0.2s, box-shadow 0.2s,
      color 0.2s, ${Se};
  }
  background-color: ${b.base.backgroundColor};

  ${({size:a,justIcon:o})=>P`
    ${o?P`
          font-size: ${b.size[a].justIcon.fontSize};
          padding: ${b.size[a].justIcon.padding};
        `:P`
          gap: ${b.size[a].withText.gap};
          padding: ${b.size[a].withText.padding};
          ${fe(Re[a])}
        `}
  `}
`,O=x.label`
  ${p} {
    border-right: ${v.base.borderRight};
    border-top: ${v.base.borderTop};
    border-bottom: ${v.base.borderBottom};
  }
  &:first-child ${p} {
    border-left: ${v.firstChild.borderLeft};
    border-top-left-radius: ${v.firstChild.borderTopLeftRadius};
    border-bottom-left-radius: ${v.firstChild.borderBottomLeftRadius};
  }
  &:last-child ${p} {
    border-top-right-radius: ${v.lastChild.borderTopRightRadius};
    border-bottom-right-radius: ${v.lastChild.borderBottomRightRadius};
  }

  ${q}:checked + ${p} {
    color: ${b.active.color};
    border-color: ${b.active.borderColor};
    background-color: ${b.active.backgroundColor};
    box-shadow: ${b.active.boxShadow};
    position: relative;
    z-index: 0;
  }

  ${q}:focus-visible + ${p} {
    ${Ce}
    position: relative;
    z-index: 0;
  }

  &:hover {
    color: ${v.hover.color};
    border-color: ${v.hover.borderColor};
  }
`;try{p.displayName="Content",p.__docgenInfo={description:"",displayName:"Content",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"tiny"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},justIcon:{defaultValue:null,description:"",name:"justIcon",required:!0,type:{name:"boolean"}}}}}catch{}try{O.displayName="Label",O.__docgenInfo={description:"",displayName:"Label",props:{size:{defaultValue:null,description:"",name:"size",required:!0,type:{name:"enum",value:[{value:'"tiny"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}}}}}catch{}const Pe=(a,o,n)=>typeof n<"u"?n:typeof a<"u"&&a!==null&&o?typeof a=="number"?a===Number(o==null?void 0:o.value):a===(o==null?void 0:o.value):!!a,l=g.forwardRef((a,o)=>{const{value:n,name:u,onChange:t,checked:W,icon:y,label:f,htmlProps:A,className:H,id:$,...X}=a,j=g.useId(),L=$??`${j}-ToggleRadio`,m=Be(),E=V=>{t&&t(V),m&&m.onChange&&m.onChange(V)};return r(O,{size:m.size,htmlFor:L,children:[e(q,{...ve(L,H,A,X),type:"radio",ref:o,name:u??m.name,onChange:E,value:n,checked:Pe(n,m,W)}),r(p,{size:m.size,justIcon:!!y&&!f,children:[y&&e(Te,{icon:y,iconSize:"inherit"}),f&&e("span",{children:f})]})]})});l.displayName="ToggleRadio";try{l.displayName="ToggleRadio",l.__docgenInfo={description:"",displayName:"ToggleRadio",props:{label:{defaultValue:null,description:"Ledetekst som vises i komponenten.",name:"label",required:!1,type:{name:"string | undefined"}},icon:{defaultValue:null,description:"Ikonet som vises i komponenten.",name:"icon",required:!1,type:{name:"SvgIcon | undefined"}},htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:'Omit<InputHTMLAttributes<HTMLInputElement>, "name" | "value" | "aria-label" | "aria-labelledby" | "onChange" | "checked"> | undefined'}}}}}catch{}const xe={title:"dds-components/ToggleBar",component:s,argTypes:{label:{control:{type:"text"}}}},S=a=>{const[o,n]=g.useState();return e(h,{title:"ToggleBar - default",display:"block",children:r(s,{...a,name:"test",value:o,onChange:(u,t)=>{n(t)},children:[e(l,{value:"alt1",label:"Alt"}),e(l,{value:"alt2",label:"Alt"}),e(l,{value:"alt3",label:"Alt"})]})})},C=a=>{const[o,n]=g.useState();return r(h,{title:"ToggleBar - overview with text",display:"grid",columnsAmount:2,children:[r(s,{...a,name:"test",size:"tiny",value:o,onChange:(u,t)=>{n(t)},children:[e(l,{label:"Alt1",value:"Alt1"}),e(l,{label:"Alt2",value:"Alt2"}),e(l,{label:"Alt3",value:"Alt3"})]}),r(s,{...a,name:"test1",size:"tiny",value:o,onChange:(u,t)=>{n(t)},children:[e(l,{icon:i,label:"Alt1",value:"Alt1"}),e(l,{icon:i,label:"Alt2",value:"Alt2"}),e(l,{icon:i,label:"Alt3",value:"Alt3"})]}),r(s,{...a,name:"test2",size:"small",value:o,onChange:(u,t)=>{n(t)},children:[e(l,{label:"Alt1",value:"Alt1"}),e(l,{label:"Alt2",value:"Alt2"}),e(l,{label:"Alt3",value:"Alt3"})]}),r(s,{...a,name:"test3",size:"small",value:o,onChange:(u,t)=>{n(t)},children:[e(l,{icon:i,label:"Alt1",value:"Alt1"}),e(l,{icon:i,label:"Alt2",value:"Alt2"}),e(l,{icon:i,label:"Alt3",value:"Alt3"})]}),r(s,{...a,name:"test4",size:"medium",value:o,onChange:(u,t)=>{n(t)},children:[e(l,{label:"Alt1",value:"Alt1"}),e(l,{label:"Alt2",value:"Alt2"}),e(l,{label:"Alt3",value:"Alt3"})]}),r(s,{...a,name:"test5",size:"medium",value:o,onChange:(u,t)=>{n(t)},children:[e(l,{icon:i,label:"Alt1",value:"Alt1"}),e(l,{icon:i,label:"Alt2",value:"Alt2"}),e(l,{icon:i,label:"Alt3",value:"Alt3"})]}),r(s,{...a,name:"test6",size:"large",value:o,onChange:(u,t)=>{n(t)},children:[e(l,{label:"Alt1",value:"Alt1"}),e(l,{label:"Alt2",value:"Alt2"}),e(l,{label:"Alt3",value:"Alt3"})]}),r(s,{...a,name:"test7",size:"large",value:o,onChange:(u,t)=>{n(t)},children:[e(l,{icon:i,label:"Alt1",value:"Alt1"}),e(l,{icon:i,label:"Alt2",value:"Alt2"}),e(l,{icon:i,label:"Alt3",value:"Alt3"})]})]})},B=a=>{const[o,n]=g.useState();return r(h,{title:"ToggleBar - overview with Icon",children:[r(s,{...a,name:"test",size:"tiny",value:o,onChange:(u,t)=>{n(t)},children:[e(l,{icon:i,value:"alt1"}),e(l,{icon:i,value:"alt2"}),e(l,{icon:i,value:"alt3"})]}),r(s,{...a,name:"test1",size:"small",children:[e(l,{icon:i,value:"alt1"}),e(l,{icon:i,value:"alt2"}),e(l,{icon:i,value:"alt3"})]}),r(s,{...a,name:"test2",size:"medium",children:[e(l,{icon:i,value:"alt1"}),e(l,{icon:i,value:"alt2"}),e(l,{icon:i,value:"alt3"})]}),r(s,{...a,name:"test3",size:"large",children:[e(l,{icon:i,value:"alt1"}),e(l,{icon:i,value:"alt2"}),e(l,{icon:i,value:"alt3"})]})]})},R=a=>{const[o,n]=g.useState();return r(h,{title:"ToggleBar - overview with label",children:[r(s,{...a,label:a.label??"Label",size:"tiny",value:o,onChange:(u,t)=>{n(t)},name:"test",children:[e(l,{label:"Alt1",value:"alt1"}),e(l,{label:"Alt2",value:"alt2"}),e(l,{label:"Alt3",value:"alt3"})]}),r(s,{...a,label:a.label??"Label",size:"small",value:o,onChange:(u,t)=>{n(t)},name:"test1",children:[e(l,{label:"Alt1",value:"alt1"}),e(l,{label:"Alt2",value:"alt2"}),e(l,{label:"Alt3",value:"alt3"})]}),r(s,{...a,label:a.label??"Label",size:"medium",value:o,onChange:(u,t)=>{n(t)},name:"test2",children:[e(l,{label:"Alt1",value:"alt1"}),e(l,{label:"Alt2",value:"alt2"}),e(l,{label:"Alt3",value:"alt3"})]}),r(s,{...a,label:a.label??"Label",size:"large",value:o,onChange:(u,t)=>{n(t)},name:"test3",children:[e(l,{label:"Alt1",value:"alt1"}),e(l,{label:"Alt2",value:"alt2"}),e(l,{label:"Alt3",value:"alt3"})]})]})},_=a=>{const[o,n]=g.useState("alt1");return e(h,{title:"ToggleBar - with default value",display:"block",children:r(s,{...a,name:"test",value:o,onChange:(u,t)=>{n(t)},children:[e(l,{value:"alt1",label:"Alt"}),e(l,{value:"alt2",label:"Alt"}),e(l,{value:"alt3",label:"Alt"})]})})},z=a=>{const[o,n]=g.useState();return e(h,{title:"ToggleBar - with long words",display:"block",children:r(s,{...a,name:"test",value:o,onChange:(u,t)=>{n(t)},children:[e(l,{value:"alt1",label:"Partsopplysninger"}),e(l,{value:"alt2",label:"Slutning"}),e(l,{value:"alt3",label:"Vedlegg"})]})})},I=a=>{const[o,n]=g.useState();return e(h,{title:"ToggleBar - with width",display:"block",children:r(s,{...a,name:"test",value:o,onChange:(u,t)=>{n(t)},width:"320px",children:[e(l,{value:"alt1",label:"Alt"}),e(l,{value:"alt2",label:"Alt"}),e(l,{value:"alt3",label:"Alt"})]})})};var G,F,U;S.parameters={...S.parameters,docs:{...(G=S.parameters)==null?void 0:G.docs,source:{originalSource:`(args: ToggleBarProps<string>) => {
  const [value, setValue] = useState<string | undefined>();
  return <StoryTemplate title="ToggleBar - default" display="block">
      <ToggleBar {...args} name="test" value={value} onChange={(_event, value) => {
      setValue(value);
    }}>
        <ToggleRadio value="alt1" label="Alt" />
        <ToggleRadio value="alt2" label="Alt" />
        <ToggleRadio value="alt3" label="Alt" />
      </ToggleBar>
    </StoryTemplate>;
}`,...(U=(F=S.parameters)==null?void 0:F.docs)==null?void 0:U.source}}};var J,K,Q;C.parameters={...C.parameters,docs:{...(J=C.parameters)==null?void 0:J.docs,source:{originalSource:`(args: ToggleBarProps<string>) => {
  const [value, setValue] = useState<string | undefined>();
  return <StoryTemplate title="ToggleBar - overview with text" display="grid" columnsAmount={2}>
      <ToggleBar {...args} name="test" size="tiny" value={value} onChange={(_event, value) => {
      setValue(value);
    }}>
        <ToggleRadio label="Alt1" value="Alt1" />
        <ToggleRadio label="Alt2" value="Alt2" />
        <ToggleRadio label="Alt3" value="Alt3" />
      </ToggleBar>
      <ToggleBar {...args} name="test1" size="tiny" value={value} onChange={(_event, value) => {
      setValue(value);
    }}>
        <ToggleRadio icon={PlusCircledIcon} label="Alt1" value="Alt1" />
        <ToggleRadio icon={PlusCircledIcon} label="Alt2" value="Alt2" />
        <ToggleRadio icon={PlusCircledIcon} label="Alt3" value="Alt3" />
      </ToggleBar>
      <ToggleBar {...args} name="test2" size="small" value={value} onChange={(_event, value) => {
      setValue(value);
    }}>
        <ToggleRadio label="Alt1" value="Alt1" />
        <ToggleRadio label="Alt2" value="Alt2" />
        <ToggleRadio label="Alt3" value="Alt3" />
      </ToggleBar>
      <ToggleBar {...args} name="test3" size="small" value={value} onChange={(_event, value) => {
      setValue(value);
    }}>
        <ToggleRadio icon={PlusCircledIcon} label="Alt1" value="Alt1" />
        <ToggleRadio icon={PlusCircledIcon} label="Alt2" value="Alt2" />
        <ToggleRadio icon={PlusCircledIcon} label="Alt3" value="Alt3" />
      </ToggleBar>
      <ToggleBar {...args} name="test4" size="medium" value={value} onChange={(_event, value) => {
      setValue(value);
    }}>
        <ToggleRadio label="Alt1" value="Alt1" />
        <ToggleRadio label="Alt2" value="Alt2" />
        <ToggleRadio label="Alt3" value="Alt3" />
      </ToggleBar>
      <ToggleBar {...args} name="test5" size="medium" value={value} onChange={(_event, value) => {
      setValue(value);
    }}>
        <ToggleRadio icon={PlusCircledIcon} label="Alt1" value="Alt1" />
        <ToggleRadio icon={PlusCircledIcon} label="Alt2" value="Alt2" />
        <ToggleRadio icon={PlusCircledIcon} label="Alt3" value="Alt3" />
      </ToggleBar>
      <ToggleBar {...args} name="test6" size="large" value={value} onChange={(_event, value) => {
      setValue(value);
    }}>
        <ToggleRadio label="Alt1" value="Alt1" />
        <ToggleRadio label="Alt2" value="Alt2" />
        <ToggleRadio label="Alt3" value="Alt3" />
      </ToggleBar>
      <ToggleBar {...args} name="test7" size="large" value={value} onChange={(_event, value) => {
      setValue(value);
    }}>
        <ToggleRadio icon={PlusCircledIcon} label="Alt1" value="Alt1" />
        <ToggleRadio icon={PlusCircledIcon} label="Alt2" value="Alt2" />
        <ToggleRadio icon={PlusCircledIcon} label="Alt3" value="Alt3" />
      </ToggleBar>
    </StoryTemplate>;
}`,...(Q=(K=C.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Y,Z,ee;B.parameters={...B.parameters,docs:{...(Y=B.parameters)==null?void 0:Y.docs,source:{originalSource:`(args: ToggleBarProps<string>) => {
  const [value, setValue] = useState<string | undefined>();
  return <StoryTemplate title="ToggleBar - overview with Icon">
      <ToggleBar {...args} name="test" size="tiny" value={value} onChange={(_event, value) => {
      setValue(value);
    }}>
        <ToggleRadio icon={PlusCircledIcon} value="alt1" />
        <ToggleRadio icon={PlusCircledIcon} value="alt2" />
        <ToggleRadio icon={PlusCircledIcon} value="alt3" />
      </ToggleBar>

      <ToggleBar {...args} name="test1" size="small">
        <ToggleRadio icon={PlusCircledIcon} value="alt1" />
        <ToggleRadio icon={PlusCircledIcon} value="alt2" />
        <ToggleRadio icon={PlusCircledIcon} value="alt3" />
      </ToggleBar>

      <ToggleBar {...args} name="test2" size="medium">
        <ToggleRadio icon={PlusCircledIcon} value="alt1" />
        <ToggleRadio icon={PlusCircledIcon} value="alt2" />
        <ToggleRadio icon={PlusCircledIcon} value="alt3" />
      </ToggleBar>
      <ToggleBar {...args} name="test3" size="large">
        <ToggleRadio icon={PlusCircledIcon} value="alt1" />
        <ToggleRadio icon={PlusCircledIcon} value="alt2" />
        <ToggleRadio icon={PlusCircledIcon} value="alt3" />
      </ToggleBar>
    </StoryTemplate>;
}`,...(ee=(Z=B.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var le,ae,te;R.parameters={...R.parameters,docs:{...(le=R.parameters)==null?void 0:le.docs,source:{originalSource:`(args: ToggleBarProps<string>) => {
  const [value, setValue] = useState<string | undefined>();
  return <StoryTemplate title="ToggleBar - overview with label">
      <ToggleBar {...args} label={args.label ?? 'Label'} size="tiny" value={value} onChange={(_event, value) => {
      setValue(value);
    }} name="test">
        <ToggleRadio label="Alt1" value="alt1" />
        <ToggleRadio label="Alt2" value="alt2" />
        <ToggleRadio label="Alt3" value="alt3" />
      </ToggleBar>
      <ToggleBar {...args} label={args.label ?? 'Label'} size="small" value={value} onChange={(_event, value) => {
      setValue(value);
    }} name="test1">
        <ToggleRadio label="Alt1" value="alt1" />
        <ToggleRadio label="Alt2" value="alt2" />
        <ToggleRadio label="Alt3" value="alt3" />
      </ToggleBar>
      <ToggleBar {...args} label={args.label ?? 'Label'} size="medium" value={value} onChange={(_event, value) => {
      setValue(value);
    }} name="test2">
        <ToggleRadio label="Alt1" value="alt1" />
        <ToggleRadio label="Alt2" value="alt2" />
        <ToggleRadio label="Alt3" value="alt3" />
      </ToggleBar>
      <ToggleBar {...args} label={args.label ?? 'Label'} size="large" value={value} onChange={(_event, value) => {
      setValue(value);
    }} name="test3">
        <ToggleRadio label="Alt1" value="alt1" />
        <ToggleRadio label="Alt2" value="alt2" />
        <ToggleRadio label="Alt3" value="alt3" />
      </ToggleBar>
    </StoryTemplate>;
}`,...(te=(ae=R.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var oe,ne,re;_.parameters={..._.parameters,docs:{...(oe=_.parameters)==null?void 0:oe.docs,source:{originalSource:`(args: ToggleBarProps<string>) => {
  const [value, setValue] = useState<string | undefined>('alt1');
  return <StoryTemplate title="ToggleBar - with default value" display="block">
      <ToggleBar {...args} name="test" value={value} onChange={(_event, value) => {
      setValue(value);
    }}>
        <ToggleRadio value="alt1" label="Alt" />
        <ToggleRadio value="alt2" label="Alt" />
        <ToggleRadio value="alt3" label="Alt" />
      </ToggleBar>
    </StoryTemplate>;
}`,...(re=(ne=_.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var ie,se,ue;z.parameters={...z.parameters,docs:{...(ie=z.parameters)==null?void 0:ie.docs,source:{originalSource:`(args: ToggleBarProps<string>) => {
  const [value, setValue] = useState<string | undefined>();
  return <StoryTemplate title="ToggleBar - with long words" display="block">
      <ToggleBar {...args} name="test" value={value} onChange={(_event, value) => {
      setValue(value);
    }}>
        <ToggleRadio value="alt1" label="Partsopplysninger" />
        <ToggleRadio value="alt2" label="Slutning" />
        <ToggleRadio value="alt3" label="Vedlegg" />
      </ToggleBar>
    </StoryTemplate>;
}`,...(ue=(se=z.parameters)==null?void 0:se.docs)==null?void 0:ue.source}}};var de,ge,ce;I.parameters={...I.parameters,docs:{...(de=I.parameters)==null?void 0:de.docs,source:{originalSource:`(args: ToggleBarProps<string>) => {
  const [value, setValue] = useState<string | undefined>();
  return <StoryTemplate title="ToggleBar - with width" display="block">
      <ToggleBar {...args} name="test" value={value} onChange={(_event, value) => {
      setValue(value);
    }} width="320px">
        <ToggleRadio value="alt1" label="Alt" />
        <ToggleRadio value="alt2" label="Alt" />
        <ToggleRadio value="alt3" label="Alt" />
      </ToggleBar>
    </StoryTemplate>;
}`,...(ce=(ge=I.parameters)==null?void 0:ge.docs)==null?void 0:ce.source}}};const Ne=["Default","OverviewWithText","OverviewWithIcon","OverviewWithLabel","WithDefaultValue","WithLongWords","WithWidth"],el=Object.freeze(Object.defineProperty({__proto__:null,Default:S,OverviewWithIcon:B,OverviewWithLabel:R,OverviewWithText:C,WithDefaultValue:_,WithLongWords:z,WithWidth:I,__namedExportsOrder:Ne,default:xe},Symbol.toStringTag,{value:"Module"}));export{el as T,l as a};
//# sourceMappingURL=ToggleBar.stories-c73946e4.js.map
