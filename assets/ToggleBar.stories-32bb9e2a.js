import{d as me,s as k,C as x,j as e,b as r}from"./focus-visible-17f12d09.js";import{R as p}from"./storybook-components-b7b7a39c.js";import{r as d}from"./index-c6dae603.js";import{c as W}from"./text-20d7ad40.js";import{s as Te}from"./selection-dced972e.js";import{g as ce}from"./BaseComponentProps-bb0d5515.js";import{T as pe}from"./Typography-ddbe86f6.js";import{c as he}from"./combineHandlers-f6d4455a.js";import{d as Ae}from"./Typography.utils-3c68477b.js";import{b as Se,c as Ce}from"./focusVisible-bd00be70.js";import{H as G}from"./HiddenInput-280c3e4e.js";import{I as Re}from"./Icon-a968456f.js";import{P as i}from"./plusCircled-2a049c6a.js";const ve=d.createContext({size:"medium"}),Be=()=>d.useContext(ve),{colors:c,spacing:u,border:V,borderRadius:P,fontPackages:T}=me,ye={large:"bodySans04",medium:"bodySans02",small:"bodySans01",tiny:"supportingStyleTiny01"},fe=`${W(T.supportingStyle_tiny_01.numbers.lineHeightNumber,T.supportingStyle_tiny_01.numbers.fontSizeNumber)}px`,ze=`${W(T.body_sans_01.numbers.lineHeightNumber,T.body_sans_01.numbers.fontSizeNumber)}px`,$e=`${W(T.body_sans_02.numbers.lineHeightNumber,T.body_sans_02.numbers.fontSizeNumber)}px`,_e=`${W(T.body_sans_04.numbers.lineHeightNumber,T.body_sans_04.numbers.fontSizeNumber)}px`,Ie={gap:u.SizesDdsSpacingLocalX0125},De={base:{borderColor:c.DdsColorNeutralsGray5,borderRight:`${V.BordersDdsBorderStyleLightStrokeWeight} solid ${c.DdsColorNeutralsGray5}`,borderTop:`${V.BordersDdsBorderStyleLightStrokeWeight} solid ${c.DdsColorNeutralsGray5}`,borderBottom:`${V.BordersDdsBorderStyleLightStrokeWeight} solid ${c.DdsColorNeutralsGray5}`},hover:{color:c.DdsColorInteractiveDark,borderColor:c.DdsColorInteractiveDark},firstChild:{borderLeft:`${V.BordersDdsBorderStyleLightStrokeWeight} solid ${c.DdsColorNeutralsGray5}`,borderTopLeftRadius:P.RadiiDdsBorderRadius1Radius,borderBottomLeftRadius:P.RadiiDdsBorderRadius1Radius},lastChild:{borderTopRightRadius:P.RadiiDdsBorderRadius1Radius,borderBottomRightRadius:P.RadiiDdsBorderRadius1Radius}},we={base:{backgroundColor:c.DdsColorNeutralsGray1},active:{color:c.DdsColorInteractiveDarkest,borderColor:c.DdsColorInteractiveDarker,backgroundColor:c.DdsColorInteractiveLightest,boxShadow:`inset 0 0 0 1px ${c.DdsColorInteractiveDarker}`},size:{tiny:{justIcon:{padding:u.SizesDdsSpacingLocalX025,fontSize:fe},withText:{padding:`${u.SizesDdsSpacingLocalX025} ${u.SizesDdsSpacingLocalX075}`,gap:u.SizesDdsSpacingLocalX05}},small:{justIcon:{padding:u.SizesDdsSpacingLocalX05,fontSize:ze},withText:{padding:`${u.SizesDdsSpacingLocalX05} ${u.SizesDdsSpacingLocalX1}`,gap:u.SizesDdsSpacingLocalX05}},medium:{justIcon:{padding:u.SizesDdsSpacingLocalX075,fontSize:$e},withText:{padding:`${u.SizesDdsSpacingLocalX075} ${u.SizesDdsSpacingLocalX15}`,gap:u.SizesDdsSpacingLocalX05}},large:{justIcon:{padding:u.SizesDdsSpacingLocalX1,fontSize:_e},withText:{padding:`${u.SizesDdsSpacingLocalX1} ${u.SizesDdsSpacingLocalX2}`,gap:u.SizesDdsSpacingLocalX1}}}},be={outerContainer:Ie,content:we,label:De},Le=k.div`
  display: flex;
  flex-direction: column;
  gap: ${be.outerContainer.gap};
  &::selection,
  *::selection {
    ${Te}
  }
  ${({width:a})=>a&&x`
      width: ${a};
    `}
`,Ve=k.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
`,g=a=>{const{children:o,size:n="medium",label:s,onChange:t,value:N,name:S,width:C,htmlProps:h,className:X,id:I,...j}=a,H=d.useId(),D=I??`${H}-ToggleBar`,[b,O]=d.useState(N),w=he(L=>O(L.target.value),L=>t&&t(L,L.target.value)),M=s&&`${D}-label`;return e(ve.Provider,{value:{size:n,onChange:w,name:S,value:b},children:r(Le,{...ce(I,X,h,j),role:"radiogroup","aria-labelledby":M??(h==null?void 0:h["aria-labelledby"]),width:C,children:[s&&e(pe,{typographyType:"supportingStyleLabel01",id:M,children:s}),e(Ve,{children:o})]})})};g.displayName="ToggleBar";const{content:m,label:v}=be,A=k.span`
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
  background-color: ${m.base.backgroundColor};

  ${({size:a,justIcon:o})=>x`
    ${o?x`
          font-size: ${m.size[a].justIcon.fontSize};
          padding: ${m.size[a].justIcon.padding};
        `:x`
          gap: ${m.size[a].withText.gap};
          padding: ${m.size[a].withText.padding};
          ${Ae(ye[a])}
        `}
  `}
`,Pe=k.label`
  ${A} {
    border-right: ${v.base.borderRight};
    border-top: ${v.base.borderTop};
    border-bottom: ${v.base.borderBottom};
  }
  &:first-child ${A} {
    border-left: ${v.firstChild.borderLeft};
    border-top-left-radius: ${v.firstChild.borderTopLeftRadius};
    border-bottom-left-radius: ${v.firstChild.borderBottomLeftRadius};
  }
  &:last-child ${A} {
    border-top-right-radius: ${v.lastChild.borderTopRightRadius};
    border-bottom-right-radius: ${v.lastChild.borderBottomRightRadius};
  }

  ${G}:checked + ${A} {
    color: ${m.active.color};
    border-color: ${m.active.borderColor};
    background-color: ${m.active.backgroundColor};
    box-shadow: ${m.active.boxShadow};
    position: relative;
    z-index: 0;
  }

  ${G}:focus-visible + ${A} {
    ${Ce}
    position: relative;
    z-index: 0;
  }

  &:hover {
    color: ${v.hover.color};
    border-color: ${v.hover.borderColor};
  }
`,xe=(a,o,n)=>typeof n<"u"?n:typeof a<"u"&&a!==null&&o?typeof a=="number"?a===Number(o==null?void 0:o.value):a===(o==null?void 0:o.value):!!a,l=d.forwardRef((a,o)=>{const{value:n,name:s,onChange:t,checked:N,icon:S,label:C,htmlProps:h,className:X,id:I,...j}=a,H=d.useId(),D=I??`${H}-ToggleRadio`,b=Be(),O=w=>{t&&t(w),b&&b.onChange&&b.onChange(w)};return r(Pe,{size:b.size,htmlFor:D,children:[e(G,{...ce(D,X,h,j),type:"radio",ref:o,name:s??b.name,onChange:O,value:n,checked:xe(n,b,N)}),r(A,{size:b.size,justIcon:!!S&&!C,children:[S&&e(Re,{icon:S,iconSize:"inherit"}),C&&e("span",{children:C})]})]})});l.displayName="ToggleRadio";const ke={title:"dds-components/ToggleBar",component:g,argTypes:{label:{control:{type:"text"}}}},R=a=>{const[o,n]=d.useState();return e(p,{title:"ToggleBar - default",display:"block",children:r(g,{...a,name:"test",value:o,onChange:(s,t)=>{n(t)},children:[e(l,{value:"alt1",label:"Alt"}),e(l,{value:"alt2",label:"Alt"}),e(l,{value:"alt3",label:"Alt"})]})})},B=a=>{const[o,n]=d.useState();return r(p,{title:"ToggleBar - overview with text",display:"grid",columnsAmount:2,children:[r(g,{...a,name:"test",size:"tiny",value:o,onChange:(s,t)=>{n(t)},children:[e(l,{label:"Alt1",value:"Alt1"}),e(l,{label:"Alt2",value:"Alt2"}),e(l,{label:"Alt3",value:"Alt3"})]}),r(g,{...a,name:"test1",size:"tiny",value:o,onChange:(s,t)=>{n(t)},children:[e(l,{icon:i,label:"Alt1",value:"Alt1"}),e(l,{icon:i,label:"Alt2",value:"Alt2"}),e(l,{icon:i,label:"Alt3",value:"Alt3"})]}),r(g,{...a,name:"test2",size:"small",value:o,onChange:(s,t)=>{n(t)},children:[e(l,{label:"Alt1",value:"Alt1"}),e(l,{label:"Alt2",value:"Alt2"}),e(l,{label:"Alt3",value:"Alt3"})]}),r(g,{...a,name:"test3",size:"small",value:o,onChange:(s,t)=>{n(t)},children:[e(l,{icon:i,label:"Alt1",value:"Alt1"}),e(l,{icon:i,label:"Alt2",value:"Alt2"}),e(l,{icon:i,label:"Alt3",value:"Alt3"})]}),r(g,{...a,name:"test4",size:"medium",value:o,onChange:(s,t)=>{n(t)},children:[e(l,{label:"Alt1",value:"Alt1"}),e(l,{label:"Alt2",value:"Alt2"}),e(l,{label:"Alt3",value:"Alt3"})]}),r(g,{...a,name:"test5",size:"medium",value:o,onChange:(s,t)=>{n(t)},children:[e(l,{icon:i,label:"Alt1",value:"Alt1"}),e(l,{icon:i,label:"Alt2",value:"Alt2"}),e(l,{icon:i,label:"Alt3",value:"Alt3"})]}),r(g,{...a,name:"test6",size:"large",value:o,onChange:(s,t)=>{n(t)},children:[e(l,{label:"Alt1",value:"Alt1"}),e(l,{label:"Alt2",value:"Alt2"}),e(l,{label:"Alt3",value:"Alt3"})]}),r(g,{...a,name:"test7",size:"large",value:o,onChange:(s,t)=>{n(t)},children:[e(l,{icon:i,label:"Alt1",value:"Alt1"}),e(l,{icon:i,label:"Alt2",value:"Alt2"}),e(l,{icon:i,label:"Alt3",value:"Alt3"})]})]})},y=a=>{const[o,n]=d.useState();return r(p,{title:"ToggleBar - overview with Icon",children:[r(g,{...a,name:"test",size:"tiny",value:o,onChange:(s,t)=>{n(t)},children:[e(l,{icon:i,value:"alt1"}),e(l,{icon:i,value:"alt2"}),e(l,{icon:i,value:"alt3"})]}),r(g,{...a,name:"test1",size:"small",children:[e(l,{icon:i,value:"alt1"}),e(l,{icon:i,value:"alt2"}),e(l,{icon:i,value:"alt3"})]}),r(g,{...a,name:"test2",size:"medium",children:[e(l,{icon:i,value:"alt1"}),e(l,{icon:i,value:"alt2"}),e(l,{icon:i,value:"alt3"})]}),r(g,{...a,name:"test3",size:"large",children:[e(l,{icon:i,value:"alt1"}),e(l,{icon:i,value:"alt2"}),e(l,{icon:i,value:"alt3"})]})]})},f=a=>{const[o,n]=d.useState();return r(p,{title:"ToggleBar - overview with label",children:[r(g,{...a,label:a.label??"Label",size:"tiny",value:o,onChange:(s,t)=>{n(t)},name:"test",children:[e(l,{label:"Alt1",value:"alt1"}),e(l,{label:"Alt2",value:"alt2"}),e(l,{label:"Alt3",value:"alt3"})]}),r(g,{...a,label:a.label??"Label",size:"small",value:o,onChange:(s,t)=>{n(t)},name:"test1",children:[e(l,{label:"Alt1",value:"alt1"}),e(l,{label:"Alt2",value:"alt2"}),e(l,{label:"Alt3",value:"alt3"})]}),r(g,{...a,label:a.label??"Label",size:"medium",value:o,onChange:(s,t)=>{n(t)},name:"test2",children:[e(l,{label:"Alt1",value:"alt1"}),e(l,{label:"Alt2",value:"alt2"}),e(l,{label:"Alt3",value:"alt3"})]}),r(g,{...a,label:a.label??"Label",size:"large",value:o,onChange:(s,t)=>{n(t)},name:"test3",children:[e(l,{label:"Alt1",value:"alt1"}),e(l,{label:"Alt2",value:"alt2"}),e(l,{label:"Alt3",value:"alt3"})]})]})},z=a=>{const[o,n]=d.useState("alt1");return e(p,{title:"ToggleBar - with default value",display:"block",children:r(g,{...a,name:"test",value:o,onChange:(s,t)=>{n(t)},children:[e(l,{value:"alt1",label:"Alt"}),e(l,{value:"alt2",label:"Alt"}),e(l,{value:"alt3",label:"Alt"})]})})},$=a=>{const[o,n]=d.useState();return e(p,{title:"ToggleBar - with long words",display:"block",children:r(g,{...a,name:"test",value:o,onChange:(s,t)=>{n(t)},children:[e(l,{value:"alt1",label:"Partsopplysninger"}),e(l,{value:"alt2",label:"Slutning"}),e(l,{value:"alt3",label:"Vedlegg"})]})})},_=a=>{const[o,n]=d.useState();return e(p,{title:"ToggleBar - with width",display:"block",children:r(g,{...a,name:"test",value:o,onChange:(s,t)=>{n(t)},width:"320px",children:[e(l,{value:"alt1",label:"Alt"}),e(l,{value:"alt2",label:"Alt"}),e(l,{value:"alt3",label:"Alt"})]})})};var q,E,F;R.parameters={...R.parameters,docs:{...(q=R.parameters)==null?void 0:q.docs,source:{originalSource:`(args: ToggleBarProps<string>) => {
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
}`,...(F=(E=R.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var J,K,Q;B.parameters={...B.parameters,docs:{...(J=B.parameters)==null?void 0:J.docs,source:{originalSource:`(args: ToggleBarProps<string>) => {
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
}`,...(Q=(K=B.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,Y,Z;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`(args: ToggleBarProps<string>) => {
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
}`,...(Z=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,le,ae;f.parameters={...f.parameters,docs:{...(ee=f.parameters)==null?void 0:ee.docs,source:{originalSource:`(args: ToggleBarProps<string>) => {
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
}`,...(ae=(le=f.parameters)==null?void 0:le.docs)==null?void 0:ae.source}}};var te,oe,ne;z.parameters={...z.parameters,docs:{...(te=z.parameters)==null?void 0:te.docs,source:{originalSource:`(args: ToggleBarProps<string>) => {
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
}`,...(ne=(oe=z.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var re,ie,se;$.parameters={...$.parameters,docs:{...(re=$.parameters)==null?void 0:re.docs,source:{originalSource:`(args: ToggleBarProps<string>) => {
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
}`,...(se=(ie=$.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var ge,ue,de;_.parameters={..._.parameters,docs:{...(ge=_.parameters)==null?void 0:ge.docs,source:{originalSource:`(args: ToggleBarProps<string>) => {
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
}`,...(de=(ue=_.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};const We=["Default","OverviewWithText","OverviewWithIcon","OverviewWithLabel","WithDefaultValue","WithLongWords","WithWidth"],Ue=Object.freeze(Object.defineProperty({__proto__:null,Default:R,OverviewWithIcon:y,OverviewWithLabel:f,OverviewWithText:B,WithDefaultValue:z,WithLongWords:$,WithWidth:_,__namedExportsOrder:We,default:ke},Symbol.toStringTag,{value:"Module"}));export{Ue as T,l as a};
//# sourceMappingURL=ToggleBar.stories-32bb9e2a.js.map
