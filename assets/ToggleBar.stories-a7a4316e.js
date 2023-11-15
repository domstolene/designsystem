import{a as e,j as r}from"./jsx-runtime-e43ccb36.js";import{S as h}from"./StoryTemplate-6a95b3b2.js";import{g as i}from"./libraryAdd-1d1f72ea.js";import{I as pe}from"./Icon-764411b5.js";import{r as g}from"./index-1b03fe98.js";import{d as Te,s as x,n as P}from"./ddsReferenceTokens-cf345c8b.js";import{c as N,s as he,g as ve}from"./BaseComponentProps-77dc9c6e.js";import{c as Ae}from"./combineHandlers-f6d4455a.js";import"./Caption-956f7c23.js";import"./Heading-1a21ccc8.js";import"./Label-1e45d63d.js";import"./Legend-8f4b1074.js";import"./Link-1d242339.js";import"./Paragraph-6d49c218.js";import"./TextOverflowEllipsis-5f7b5b23.js";import{T as fe,a as ye}from"./Typography-aec60abc.js";import{a as Se,H as j,f as Ce}from"./Input.styles-4ebb4961.js";const me=g.createContext({size:"medium"}),Be=()=>g.useContext(me),{colors:c,spacing:u,border:D,borderRadius:k,fontPackages:T}=Te,Re={large:"bodySans04",medium:"bodySans02",small:"bodySans01",tiny:"supportingStyleTiny01"},_e=`${N(T.supportingStyle_tiny_01.numbers.lineHeightNumber,T.supportingStyle_tiny_01.numbers.fontSizeNumber)}px`,ze=`${N(T.body_sans_01.numbers.lineHeightNumber,T.body_sans_01.numbers.fontSizeNumber)}px`,Ie=`${N(T.body_sans_02.numbers.lineHeightNumber,T.body_sans_02.numbers.fontSizeNumber)}px`,$e=`${N(T.body_sans_04.numbers.lineHeightNumber,T.body_sans_04.numbers.fontSizeNumber)}px`,Le={gap:u.SizesDdsSpacingLocalX0125},Ve={base:{borderColor:c.DdsColorNeutralsGray5,borderRight:`${D.BordersDdsBorderStyleLightStrokeWeight} solid ${c.DdsColorNeutralsGray5}`,borderTop:`${D.BordersDdsBorderStyleLightStrokeWeight} solid ${c.DdsColorNeutralsGray5}`,borderBottom:`${D.BordersDdsBorderStyleLightStrokeWeight} solid ${c.DdsColorNeutralsGray5}`},hover:{color:c.DdsColorInteractiveDark,borderColor:c.DdsColorInteractiveDark},firstChild:{borderLeft:`${D.BordersDdsBorderStyleLightStrokeWeight} solid ${c.DdsColorNeutralsGray5}`,borderTopLeftRadius:k.RadiiDdsBorderRadius1Radius,borderBottomLeftRadius:k.RadiiDdsBorderRadius1Radius},lastChild:{borderTopRightRadius:k.RadiiDdsBorderRadius1Radius,borderBottomRightRadius:k.RadiiDdsBorderRadius1Radius}},we={base:{backgroundColor:c.DdsColorNeutralsGray1},active:{color:c.DdsColorInteractiveDarkest,borderColor:c.DdsColorInteractiveDarker,backgroundColor:c.DdsColorInteractiveLightest,boxShadow:`inset 0 0 0 1px ${c.DdsColorInteractiveDarker}`},size:{tiny:{justIcon:{padding:u.SizesDdsSpacingLocalX025,fontSize:_e},withText:{padding:`${u.SizesDdsSpacingLocalX025} ${u.SizesDdsSpacingLocalX075}`,gap:u.SizesDdsSpacingLocalX05}},small:{justIcon:{padding:u.SizesDdsSpacingLocalX05,fontSize:ze},withText:{padding:`${u.SizesDdsSpacingLocalX05} ${u.SizesDdsSpacingLocalX1}`,gap:u.SizesDdsSpacingLocalX05}},medium:{justIcon:{padding:u.SizesDdsSpacingLocalX075,fontSize:Ie},withText:{padding:`${u.SizesDdsSpacingLocalX075} ${u.SizesDdsSpacingLocalX15}`,gap:u.SizesDdsSpacingLocalX05}},large:{justIcon:{padding:u.SizesDdsSpacingLocalX1,fontSize:$e},withText:{padding:`${u.SizesDdsSpacingLocalX1} ${u.SizesDdsSpacingLocalX2}`,gap:u.SizesDdsSpacingLocalX1}}}},be={outerContainer:Le,content:we,label:Ve},De=x.div`
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
`,s=a=>{const{children:n,size:o="medium",label:d,onChange:t,value:W,name:f,width:y,htmlProps:A,className:q,id:$,...H}=a,X=g.useId(),L=$??`${X}-ToggleBar`,[v,E]=g.useState(W),V=Ae(w=>E(w.target.value),w=>t&&t(w,w.target.value)),M=d&&`${L}-label`;return e(me.Provider,{value:{size:o,onChange:V,name:f,value:v},children:r(De,{...ve($,q,A,H),role:"radiogroup","aria-labelledby":M??(A==null?void 0:A["aria-labelledby"]),width:y,children:[d&&e(fe,{typographyType:"supportingStyleLabel01",id:M,children:d}),e(ke,{children:n})]})})};s.displayName="ToggleBar";try{s.displayName="ToggleBar",s.__docgenInfo={description:"",displayName:"ToggleBar",props:{size:{defaultValue:null,description:"Størrelse på komponenten.",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"tiny"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},label:{defaultValue:null,description:"Ledetekst for hele gruppen.",name:"label",required:!1,type:{name:"string | undefined"}},onChange:{defaultValue:null,description:"Funksjonen for `onChange`-event for barna.",name:"onChange",required:!1,type:{name:"((event: ChangeEvent<HTMLInputElement>, value?: T | undefined) => void) | undefined"}},value:{defaultValue:null,description:"Den valgte verdien i gruppen. Hvis satt ved innlastning blir en `<ToggleRadio />` forhåndsvalgt.",name:"value",required:!1,type:{name:"string | number | undefined"}},name:{defaultValue:null,description:"Gir alle barna samme `name` prop.",name:"name",required:!1,type:{name:"string | undefined"}},width:{defaultValue:null,description:"Bredden til komponenten. Bredden fordeles likt mellom barna.",name:"width",required:!1,type:{name:"Width<0 | (string & {})> | undefined"}},htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:"HTMLAttributes<HTMLDivElement> | undefined"}}}}}catch{}const{content:b,label:m}=be,p=x.span`
  display: flex;
  justify-content: center;
  align-items: center;
  word-break: break-word;
  height: 100%;
  box-sizing: border-box;
  cursor: pointer;
  @media (prefers-reduced-motion: no-preference) {
    transition:
      border-color 0.2s,
      background-color 0.2s,
      box-shadow 0.2s,
      color 0.2s,
      ${Se};
  }
  background-color: ${b.base.backgroundColor};

  ${({size:a,justIcon:n})=>P`
    ${n?P`
          font-size: ${b.size[a].justIcon.fontSize};
          padding: ${b.size[a].justIcon.padding};
        `:P`
          gap: ${b.size[a].withText.gap};
          padding: ${b.size[a].withText.padding};
          ${ye(Re[a])}
        `}
  `}
`,O=x.label`
  ${p} {
    border-right: ${m.base.borderRight};
    border-top: ${m.base.borderTop};
    border-bottom: ${m.base.borderBottom};
  }
  &:first-child ${p} {
    border-left: ${m.firstChild.borderLeft};
    border-top-left-radius: ${m.firstChild.borderTopLeftRadius};
    border-bottom-left-radius: ${m.firstChild.borderBottomLeftRadius};
  }
  &:last-child ${p} {
    border-top-right-radius: ${m.lastChild.borderTopRightRadius};
    border-bottom-right-radius: ${m.lastChild.borderBottomRightRadius};
  }

  ${j}:checked + ${p} {
    color: ${b.active.color};
    border-color: ${b.active.borderColor};
    background-color: ${b.active.backgroundColor};
    box-shadow: ${b.active.boxShadow};
    position: relative;
    z-index: 0;
  }

  ${j}:focus-visible + ${p} {
    ${Ce}
    position: relative;
    z-index: 0;
  }

  &:hover {
    color: ${m.hover.color};
    border-color: ${m.hover.borderColor};
  }
`;try{p.displayName="Content",p.__docgenInfo={description:"",displayName:"Content",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}}}catch{}try{O.displayName="Label",O.__docgenInfo={description:"",displayName:"Label",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme | undefined"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget | undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget | undefined"}}}}}catch{}const Pe=(a,n,o)=>typeof o<"u"?o:typeof a<"u"&&a!==null&&n?typeof a=="number"?a===Number(n==null?void 0:n.value):a===(n==null?void 0:n.value):!!a,l=g.forwardRef((a,n)=>{const{value:o,name:d,onChange:t,checked:W,icon:f,label:y,htmlProps:A,className:q,id:$,...H}=a,X=g.useId(),L=$??`${X}-ToggleRadio`,v=Be(),E=V=>{t&&t(V),v!=null&&v.onChange&&v.onChange(V)};return r(O,{size:v.size,htmlFor:L,children:[e(j,{...ve(L,q,A,H),type:"radio",ref:n,name:d??v.name,onChange:E,value:o,checked:Pe(o,v,W)}),r(p,{size:v.size,justIcon:!!f&&!y,children:[f&&e(pe,{icon:f,iconSize:"inherit"}),y&&e("span",{children:y})]})]})});l.displayName="ToggleRadio";try{l.displayName="ToggleRadio",l.__docgenInfo={description:"",displayName:"ToggleRadio",props:{label:{defaultValue:null,description:"Ledetekst som vises i komponenten.",name:"label",required:!1,type:{name:"string | undefined"}},icon:{defaultValue:null,description:"Ikonet som vises i komponenten.",name:"icon",required:!1,type:{name:"SvgIcon | undefined"}},htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:'Omit<InputHTMLAttributes<HTMLInputElement>, "name" | "value" | "aria-label" | "aria-labelledby" | "onChange" | "checked"> | undefined'}}}}}catch{}const xe={title:"dds-components/ToggleBar",component:s,argTypes:{label:{control:{type:"text"}}}},S=a=>{const[n,o]=g.useState();return e(h,{title:"ToggleBar - default",display:"block",children:r(s,{...a,name:"test",value:n,onChange:(d,t)=>{o(t)},children:[e(l,{value:"alt1",label:"Alt"}),e(l,{value:"alt2",label:"Alt"}),e(l,{value:"alt3",label:"Alt"})]})})},C=a=>{const[n,o]=g.useState();return r(h,{title:"ToggleBar - overview with text",display:"grid",columnsAmount:2,children:[r(s,{...a,name:"test",size:"tiny",value:n,onChange:(d,t)=>{o(t)},children:[e(l,{label:"Alt1",value:"Alt1"}),e(l,{label:"Alt2",value:"Alt2"}),e(l,{label:"Alt3",value:"Alt3"})]}),r(s,{...a,name:"test1",size:"tiny",value:n,onChange:(d,t)=>{o(t)},children:[e(l,{icon:i,label:"Alt1",value:"Alt1"}),e(l,{icon:i,label:"Alt2",value:"Alt2"}),e(l,{icon:i,label:"Alt3",value:"Alt3"})]}),r(s,{...a,name:"test2",size:"small",value:n,onChange:(d,t)=>{o(t)},children:[e(l,{label:"Alt1",value:"Alt1"}),e(l,{label:"Alt2",value:"Alt2"}),e(l,{label:"Alt3",value:"Alt3"})]}),r(s,{...a,name:"test3",size:"small",value:n,onChange:(d,t)=>{o(t)},children:[e(l,{icon:i,label:"Alt1",value:"Alt1"}),e(l,{icon:i,label:"Alt2",value:"Alt2"}),e(l,{icon:i,label:"Alt3",value:"Alt3"})]}),r(s,{...a,name:"test4",size:"medium",value:n,onChange:(d,t)=>{o(t)},children:[e(l,{label:"Alt1",value:"Alt1"}),e(l,{label:"Alt2",value:"Alt2"}),e(l,{label:"Alt3",value:"Alt3"})]}),r(s,{...a,name:"test5",size:"medium",value:n,onChange:(d,t)=>{o(t)},children:[e(l,{icon:i,label:"Alt1",value:"Alt1"}),e(l,{icon:i,label:"Alt2",value:"Alt2"}),e(l,{icon:i,label:"Alt3",value:"Alt3"})]}),r(s,{...a,name:"test6",size:"large",value:n,onChange:(d,t)=>{o(t)},children:[e(l,{label:"Alt1",value:"Alt1"}),e(l,{label:"Alt2",value:"Alt2"}),e(l,{label:"Alt3",value:"Alt3"})]}),r(s,{...a,name:"test7",size:"large",value:n,onChange:(d,t)=>{o(t)},children:[e(l,{icon:i,label:"Alt1",value:"Alt1"}),e(l,{icon:i,label:"Alt2",value:"Alt2"}),e(l,{icon:i,label:"Alt3",value:"Alt3"})]})]})},B=a=>{const[n,o]=g.useState();return r(h,{title:"ToggleBar - overview with Icon",children:[r(s,{...a,name:"test",size:"tiny",value:n,onChange:(d,t)=>{o(t)},children:[e(l,{icon:i,value:"alt1"}),e(l,{icon:i,value:"alt2"}),e(l,{icon:i,value:"alt3"})]}),r(s,{...a,name:"test1",size:"small",children:[e(l,{icon:i,value:"alt1"}),e(l,{icon:i,value:"alt2"}),e(l,{icon:i,value:"alt3"})]}),r(s,{...a,name:"test2",size:"medium",children:[e(l,{icon:i,value:"alt1"}),e(l,{icon:i,value:"alt2"}),e(l,{icon:i,value:"alt3"})]}),r(s,{...a,name:"test3",size:"large",children:[e(l,{icon:i,value:"alt1"}),e(l,{icon:i,value:"alt2"}),e(l,{icon:i,value:"alt3"})]})]})},R=a=>{const[n,o]=g.useState();return r(h,{title:"ToggleBar - overview with label",children:[r(s,{...a,label:a.label??"Label",size:"tiny",value:n,onChange:(d,t)=>{o(t)},name:"test",children:[e(l,{label:"Alt1",value:"alt1"}),e(l,{label:"Alt2",value:"alt2"}),e(l,{label:"Alt3",value:"alt3"})]}),r(s,{...a,label:a.label??"Label",size:"small",value:n,onChange:(d,t)=>{o(t)},name:"test1",children:[e(l,{label:"Alt1",value:"alt1"}),e(l,{label:"Alt2",value:"alt2"}),e(l,{label:"Alt3",value:"alt3"})]}),r(s,{...a,label:a.label??"Label",size:"medium",value:n,onChange:(d,t)=>{o(t)},name:"test2",children:[e(l,{label:"Alt1",value:"alt1"}),e(l,{label:"Alt2",value:"alt2"}),e(l,{label:"Alt3",value:"alt3"})]}),r(s,{...a,label:a.label??"Label",size:"large",value:n,onChange:(d,t)=>{o(t)},name:"test3",children:[e(l,{label:"Alt1",value:"alt1"}),e(l,{label:"Alt2",value:"alt2"}),e(l,{label:"Alt3",value:"alt3"})]})]})},_=a=>{const[n,o]=g.useState("alt1");return e(h,{title:"ToggleBar - with default value",display:"block",children:r(s,{...a,name:"test",value:n,onChange:(d,t)=>{o(t)},children:[e(l,{value:"alt1",label:"Alt"}),e(l,{value:"alt2",label:"Alt"}),e(l,{value:"alt3",label:"Alt"})]})})},z=a=>{const[n,o]=g.useState();return e(h,{title:"ToggleBar - with long words",display:"block",children:r(s,{...a,name:"test",value:n,onChange:(d,t)=>{o(t)},children:[e(l,{value:"alt1",label:"Partsopplysninger"}),e(l,{value:"alt2",label:"Slutning"}),e(l,{value:"alt3",label:"Vedlegg"})]})})},I=a=>{const[n,o]=g.useState();return e(h,{title:"ToggleBar - with width",display:"block",children:r(s,{...a,name:"test",value:n,onChange:(d,t)=>{o(t)},width:"320px",children:[e(l,{value:"alt1",label:"Alt"}),e(l,{value:"alt2",label:"Alt"}),e(l,{value:"alt3",label:"Alt"})]})})};var G,F,U;S.parameters={...S.parameters,docs:{...(G=S.parameters)==null?void 0:G.docs,source:{originalSource:`(args: ToggleBarProps<string>) => {
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
}`,...(te=(ae=R.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var ne,oe,re;_.parameters={..._.parameters,docs:{...(ne=_.parameters)==null?void 0:ne.docs,source:{originalSource:`(args: ToggleBarProps<string>) => {
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
}`,...(re=(oe=_.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};var ie,se,de;z.parameters={...z.parameters,docs:{...(ie=z.parameters)==null?void 0:ie.docs,source:{originalSource:`(args: ToggleBarProps<string>) => {
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
}`,...(de=(se=z.parameters)==null?void 0:se.docs)==null?void 0:de.source}}};var ue,ge,ce;I.parameters={...I.parameters,docs:{...(ue=I.parameters)==null?void 0:ue.docs,source:{originalSource:`(args: ToggleBarProps<string>) => {
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
}`,...(ce=(ge=I.parameters)==null?void 0:ge.docs)==null?void 0:ce.source}}};const Ne=["Default","OverviewWithText","OverviewWithIcon","OverviewWithLabel","WithDefaultValue","WithLongWords","WithWidth"],ll=Object.freeze(Object.defineProperty({__proto__:null,Default:S,OverviewWithIcon:B,OverviewWithLabel:R,OverviewWithText:C,WithDefaultValue:_,WithLongWords:z,WithWidth:I,__namedExportsOrder:Ne,default:xe},Symbol.toStringTag,{value:"Module"}));export{ll as T,l as a};
//# sourceMappingURL=ToggleBar.stories-a7a4316e.js.map
