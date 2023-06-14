import{s as K,C as H,j as a,d as ka,b as t}from"./focus-visible-17f12d09.js";import{R as D}from"./storybook-components-b7b7a39c.js";import{r}from"./index-c6dae603.js";import{g as X}from"./BaseComponentProps-bb0d5515.js";import{s as Y}from"./scrollbarStyling-27f949d7.js";import{b as q,c as G}from"./focusVisible-bd00be70.js";import{u as Sa}from"./useRoveFocus-01d68aa4.js";import{u as J}from"./useCombinedRefs-764cd8e8.js";import{u as Ia}from"./useOnKeyDown-77bae070.js";import{u as $a}from"./useOnClickOutside-08b83e6f.js";import{d as Ca,e as La}from"./Typography.utils-3c68477b.js";import{n as wa}from"./normalize-f756ee4b.js";import{r as Da}from"./removeButtonStyling-867d6ba4.js";import{I as Ra}from"./Icon-a968456f.js";import{N as v}from"./notifications-f8589a7b.js";const ya=r.createContext({activeTab:0,tabsId:"",handleTabChange:()=>null,tabListRef:null,tabPanelsRef:null,hasTabFocus:!1,setHasTabFocus:()=>null,tabContentDirection:"row"}),Q=()=>r.useContext(ya),xa=K.div`
  ${({width:n})=>n&&H`
      width: ${n};
    `};
`,P=r.forwardRef((n,b)=>{const{id:l,activeTab:s,onChange:d,tabContentDirection:T="row",width:i,children:h,className:c,htmlProps:p,...I}=n,$=r.useId(),R=l??`${$}-tabs`,[C,L]=r.useState(s||0),[j,w]=r.useState(!1),x=r.useRef(null),V=r.useRef(null),N=m=>{L(m),d&&d(m)};r.useEffect(()=>{s!==void 0&&s!==C&&L(s)},[s,C]);const u={...X(R,c,p,I),ref:b};return a(ya.Provider,{value:{tabsId:R,activeTab:C,handleTabChange:N,tabListRef:x,tabPanelsRef:V,hasTabFocus:j,setHasTabFocus:w,tabContentDirection:T},children:a(xa,{...u,width:i,children:h})})});P.displayName="Tabs";const{border:M,spacing:_,colors:k}=ka,Na={borderBottom:`${M.BordersDdsBorderStyleLightStrokeWeight} solid ${M.BordersDdsBorderStyleLightStroke}`},ja={base:{borderBottom:`${M.BordersDdsBorderStyleLightStrokeWeight} solid transparent`,color:k.DdsColorNeutralsGray7,padding:_.SizesDdsSpacingLocalX05},row:{gap:_.SizesDdsSpacingLocalX05},column:{gap:_.SizesDdsSpacingLocalX025},active:{backgroundColor:k.DdsColorInteractiveLightest,color:k.DdsColorInteractiveDarkest,boxShadow:`inset 0 -2px 0 0 ${k.DdsColorInteractiveDarker}`,borderColor:k.DdsColorInteractiveDarker},hover:{color:k.DdsColorInteractiveDarkest,boxShadow:`inset 0 -2px 0 0 ${k.DdsColorInteractiveDarker}`,borderColor:k.DdsColorInteractiveDarker}},Aa={padding:_.SizesDdsSpacingLocalX025},U={tabList:Na,tab:ja,panel:Aa},{tab:f}=U,Ba=K.button`
  ${wa}
  ${Da}
  user-select: text;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: ${f.base.borderBottom};
  color: ${f.base.color};
  padding: ${f.base.padding};
  ${Ca(La)}

  @media (prefers-reduced-motion: no-preference) {
    transition: box-shadow 0.2s, border-bottom 0.2s, color 0.2s,
      ${q};
  }

  ${({direction:n})=>H`
    flex-direction: ${n};
    gap: ${f[n].gap};
  `};

  ${({active:n})=>n&&H`
      background-color: ${f.active.backgroundColor};
      border-color: ${f.active.borderColor};
      color: ${f.active.color};
      box-shadow: ${f.active.boxShadow};
    `}

  &:focus-visible {
    ${G}
    outline-offset: -1px;
  }

  &:hover {
    border-color: ${f.hover.borderColor};
    color: ${f.hover.color};
    box-shadow: ${f.hover.boxShadow};
  }
`,e=r.forwardRef((n,b)=>{const{active:l=!1,icon:s,children:d,focus:T,setFocus:i,index:h,onClick:c,onKeyDown:p,id:I,className:$,htmlProps:R,...C}=n,L=r.useRef(null),j=J(b,L),{tabPanelsRef:w,setHasTabFocus:x,tabContentDirection:V}=Q();r.useEffect(()=>{var y;T&&((y=L.current)==null||y.focus(),x(!0))},[T]),Ia("Tab",()=>{var y;x(!1),(y=w==null?void 0:w.current)==null||y.focus()});const N=r.useCallback(()=>{i&&h&&i(h)},[h,i]),u=y=>{N(),c&&c(y)},m=y=>{N(),p&&p(y)},va={...X(I,$,R,C),ref:j,"aria-selected":l,role:"tab",active:l,direction:V,onClick:u,onKeyDown:m,tabIndex:T?0:-1};return t(Ba,{...va,children:[s&&a(Ra,{icon:s,iconSize:"inherit"}),a("span",{children:d})]})});e.displayName="Tab";const{tabList:Fa}=U,Oa=K.div`
  border-bottom: ${Fa.borderBottom};
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  overflow-x: auto;
  ${Y.webkit}
  ${Y.firefox}
  scroll-snap-type: x mandatory;
  @media (prefers-reduced-motion: no-preference) {
    scroll-behavior: smooth;
    transition: ${q};
  }
  &:focus-visible {
    ${G}
  }
  &:focus-visible button {
    outline: none;
  }
`,g=r.forwardRef(({children:n,id:b,onFocus:l,...s},d)=>{const{activeTab:T,tabsId:i,handleTabChange:h,tabListRef:c,hasTabFocus:p,tabPanelsRef:I,setHasTabFocus:$}=Q(),R=b??`${i}-tablist`,C=r.Children.toArray(n).length,[L,j]=Sa(C,!p,"row"),w=J(d,c),x=r.Children.map(n,(u,m)=>r.isValidElement(u)&&r.cloneElement(u,{id:`${i}-tab-${m}`,"aria-controls":`${i}-panel-${m}`,active:T===m,index:m,focus:L===m&&p,setFocus:j,onClick:()=>h(m)}));Ia("Tab",()=>{var u;$(!1),(u=I==null?void 0:I.current)==null||u.focus()}),$a((c==null?void 0:c.current)||null,()=>{$(!1)});const N={...s,ref:w,role:"tablist","aria-label":"Bruk venste og høyre piltast for å bla",id:R,tabIndex:0,onFocus:u=>{$(!0),l&&l(u)}};return a(Oa,{...N,children:x})});g.displayName="TabList";const{panel:Wa}=U,Ea=K.div`
  padding: ${Wa.padding};
  @media (prefers-reduced-motion: no-preference) {
    transition: ${q};
  }

  ${({active:n})=>!n&&H`
      display: none;
    `}
  &:focus-visible {
    ${G}
  }
`,o=r.forwardRef(({active:n=!1,children:b,id:l,className:s,htmlProps:d,...T},i)=>{const h={...X(l,s,d,T),ref:i,tabIndex:0,role:"tabpanel",active:n};return a(Ea,{...h,children:b})});o.displayName="TabPanel";const S=r.forwardRef(({children:n,...b},l)=>{const{activeTab:s,tabsId:d,tabPanelsRef:T}=Q(),i=J(l,T),h=r.Children.map(n,(c,p)=>{const I=p===s;return r.isValidElement(c)&&r.cloneElement(c,{id:`${d}-panel-${p}`,"aria-labelledby":`${d}-tab-${p}`,active:I,"aria-expanded":I})});return a("div",{ref:i,...b,children:h})});S.displayName="TabPanels";const za={title:"dds-components/Tabs",component:P,subcomponents:{TabList:g,Tab:e,TabPanel:o,TabPanels:S},argTypes:{activeTab:{control:"number"},tabWidth:{control:"text"}}},A=()=>t(D,{title:"Tabs - overview",children:[a(P,{children:t(g,{children:[a(e,{children:"Restriksjoner"}),a(e,{children:"Aktører"}),a(e,{children:"Logg"})]})}),a(P,{children:t(g,{children:[a(e,{icon:v,children:"Restriksjoner"}),a(e,{icon:v,children:"Aktører"}),a(e,{icon:v,children:"Logg"})]})}),a(P,{tabContentDirection:"column",children:t(g,{children:[a(e,{icon:v,children:"Restriksjoner"}),a(e,{icon:v,children:"Aktører"}),a(e,{icon:v,children:"Logg"})]})})]}),B=n=>a(D,{title:"Tabs - default",display:"block",children:t(P,{...n,children:[t(g,{children:[a(e,{children:"Tab 1"}),a(e,{children:"Tab 2"}),a(e,{children:"Tab 3"})]}),t(S,{children:[a(o,{children:"Innhold 1"}),a(o,{children:"Innhold 2"}),a(o,{children:"Innhold 3"})]})]})}),F=n=>a(D,{title:"Tabs - with icon",children:t(P,{...n,children:[t(g,{children:[a(e,{icon:v,children:"Tab 1"}),a(e,{icon:v,children:"Tab 2"}),a(e,{icon:v,children:"Tab 3"})]}),t(S,{children:[a(o,{children:"Innhold 1"}),a(o,{children:"Innhold 2"}),a(o,{children:"Innhold 3"})]})]})}),O=n=>{const[b,l]=r.useState(1);return a(D,{title:"Tabs - active tab",display:"block",children:t(P,{...n,activeTab:b,onChange:s=>l(s),children:[t(g,{children:[a(e,{children:"Tab 1"}),a(e,{children:"Tab 2"}),a(e,{children:"Tab 3"})]}),t(S,{children:[a(o,{children:"Innhold 1"}),a(o,{children:"Innhold 2"}),a(o,{children:"Innhold 3"})]})]})})},W=n=>a(D,{title:"Tabs - tab width",display:"block",children:t(P,{...n,width:"500px",children:[t(g,{children:[a(e,{children:"Tab 1"}),a(e,{children:"Tab 2"}),a(e,{children:"Tab 3"})]}),t(S,{children:[a(o,{children:"Innhold 1"}),a(o,{children:"Innhold 2"}),a(o,{children:"Innhold 3"})]})]})}),E=n=>a(D,{title:"Tabs - tab width",display:"block",children:t(P,{...n,children:[t(g,{children:[a(e,{children:"Partsopplysninger"}),a(e,{children:"Restriksjoner"}),a(e,{children:"Vedlegg"})]}),t(S,{children:[a(o,{children:"Innhold 1"}),a(o,{children:"Innhold 2"}),a(o,{children:"Innhold 3"})]})]})}),z=n=>a(D,{title:"Tabs - many tabs",display:"block",children:t(P,{...n,htmlProps:{style:{width:"400px"}},children:[t(g,{children:[a(e,{children:"Tab1"}),a(e,{children:"Restriksjoner"}),a(e,{children:"Tab3"}),a(e,{children:"Aktører"}),a(e,{children:"Tab5"}),a(e,{children:"Restriksjoner"}),a(e,{children:"Tab7"}),a(e,{children:"Tab8"}),a(e,{children:"Tab9"}),a(e,{children:"Tab10"})]}),t(S,{children:[a(o,{children:"Innhold 1"}),a(o,{children:"Innhold 2"}),a(o,{children:"Innhold 3"}),a(o,{children:"Innhold 4"}),a(o,{children:"Innhold 5"}),a(o,{children:"Innhold 6"}),a(o,{children:"Innhold 7"}),a(o,{children:"Innhold 8"}),a(o,{children:"Innhold 9"}),a(o,{children:"Innhold 10"})]})]})});var Z,aa,ea;A.parameters={...A.parameters,docs:{...(Z=A.parameters)==null?void 0:Z.docs,source:{originalSource:`() => <StoryTemplate title="Tabs - overview">
    <Tabs>
      <TabList>
        <Tab>Restriksjoner</Tab>
        <Tab>Aktører</Tab>
        <Tab>Logg</Tab>
      </TabList>
    </Tabs>
    <Tabs>
      <TabList>
        <Tab icon={NotificationsIcon}>Restriksjoner</Tab>
        <Tab icon={NotificationsIcon}>Aktører</Tab>
        <Tab icon={NotificationsIcon}>Logg</Tab>
      </TabList>
    </Tabs>
    <Tabs tabContentDirection="column">
      <TabList>
        <Tab icon={NotificationsIcon}>Restriksjoner</Tab>
        <Tab icon={NotificationsIcon}>Aktører</Tab>
        <Tab icon={NotificationsIcon}>Logg</Tab>
      </TabList>
    </Tabs>
  </StoryTemplate>`,...(ea=(aa=A.parameters)==null?void 0:aa.docs)==null?void 0:ea.source}}};var na,oa,ra;B.parameters={...B.parameters,docs:{...(na=B.parameters)==null?void 0:na.docs,source:{originalSource:`(args: TabsProps) => <StoryTemplate title="Tabs - default" display="block">
    <Tabs {...args}>
      <TabList>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>Innhold 1</TabPanel>
        <TabPanel>Innhold 2</TabPanel>
        <TabPanel>Innhold 3</TabPanel>
      </TabPanels>
    </Tabs>
  </StoryTemplate>`,...(ra=(oa=B.parameters)==null?void 0:oa.docs)==null?void 0:ra.source}}};var ta,sa,la;F.parameters={...F.parameters,docs:{...(ta=F.parameters)==null?void 0:ta.docs,source:{originalSource:`(args: TabsProps) => <StoryTemplate title="Tabs - with icon">
    <Tabs {...args}>
      <TabList>
        <Tab icon={NotificationsIcon}>Tab 1</Tab>
        <Tab icon={NotificationsIcon}>Tab 2</Tab>
        <Tab icon={NotificationsIcon}>Tab 3</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>Innhold 1</TabPanel>
        <TabPanel>Innhold 2</TabPanel>
        <TabPanel>Innhold 3</TabPanel>
      </TabPanels>
    </Tabs>
  </StoryTemplate>`,...(la=(sa=F.parameters)==null?void 0:sa.docs)==null?void 0:la.source}}};var ia,ca,ba;O.parameters={...O.parameters,docs:{...(ia=O.parameters)==null?void 0:ia.docs,source:{originalSource:`(args: TabsProps) => {
  const [activeTab, setActiveTab] = useState(1);
  return <StoryTemplate title="Tabs - active tab" display="block">
      <Tabs {...args} activeTab={activeTab} onChange={tab => setActiveTab(tab)}>
        <TabList>
          <Tab>Tab 1</Tab>
          <Tab>Tab 2</Tab>
          <Tab>Tab 3</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>Innhold 1</TabPanel>
          <TabPanel>Innhold 2</TabPanel>
          <TabPanel>Innhold 3</TabPanel>
        </TabPanels>
      </Tabs>
    </StoryTemplate>;
}`,...(ba=(ca=O.parameters)==null?void 0:ca.docs)==null?void 0:ba.source}}};var da,Ta,ha;W.parameters={...W.parameters,docs:{...(da=W.parameters)==null?void 0:da.docs,source:{originalSource:`(args: TabsProps) => <StoryTemplate title="Tabs - tab width" display="block">
    <Tabs {...args} width="500px">
      <TabList>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>Innhold 1</TabPanel>
        <TabPanel>Innhold 2</TabPanel>
        <TabPanel>Innhold 3</TabPanel>
      </TabPanels>
    </Tabs>
  </StoryTemplate>`,...(ha=(Ta=W.parameters)==null?void 0:Ta.docs)==null?void 0:ha.source}}};var pa,ua,ma;E.parameters={...E.parameters,docs:{...(pa=E.parameters)==null?void 0:pa.docs,source:{originalSource:`(args: TabsProps) => <StoryTemplate title="Tabs - tab width" display="block">
    <Tabs {...args}>
      <TabList>
        <Tab>Partsopplysninger</Tab>
        <Tab>Restriksjoner</Tab>
        <Tab>Vedlegg</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>Innhold 1</TabPanel>
        <TabPanel>Innhold 2</TabPanel>
        <TabPanel>Innhold 3</TabPanel>
      </TabPanels>
    </Tabs>
  </StoryTemplate>`,...(ma=(ua=E.parameters)==null?void 0:ua.docs)==null?void 0:ma.source}}};var fa,Pa,ga;z.parameters={...z.parameters,docs:{...(fa=z.parameters)==null?void 0:fa.docs,source:{originalSource:`(args: TabsProps) => <StoryTemplate title="Tabs - many tabs" display="block">
    <Tabs {...args} htmlProps={{
    style: {
      width: '400px'
    }
  }}>
      <TabList>
        <Tab>Tab1</Tab>
        <Tab>Restriksjoner</Tab>
        <Tab>Tab3</Tab>
        <Tab>Aktører</Tab>
        <Tab>Tab5</Tab>
        <Tab>Restriksjoner</Tab>
        <Tab>Tab7</Tab>
        <Tab>Tab8</Tab>
        <Tab>Tab9</Tab>
        <Tab>Tab10</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>Innhold 1</TabPanel>
        <TabPanel>Innhold 2</TabPanel>
        <TabPanel>Innhold 3</TabPanel>
        <TabPanel>Innhold 4</TabPanel>
        <TabPanel>Innhold 5</TabPanel>
        <TabPanel>Innhold 6</TabPanel>
        <TabPanel>Innhold 7</TabPanel>
        <TabPanel>Innhold 8</TabPanel>
        <TabPanel>Innhold 9</TabPanel>
        <TabPanel>Innhold 10</TabPanel>
      </TabPanels>
    </Tabs>
  </StoryTemplate>`,...(ga=(Pa=z.parameters)==null?void 0:Pa.docs)==null?void 0:ga.source}}};const Va=["Overview","Default","WithIcon","ActiveTab","WithWidth","TabLongNames","ManyTabs"],oe=Object.freeze(Object.defineProperty({__proto__:null,ActiveTab:O,Default:B,ManyTabs:z,Overview:A,TabLongNames:E,WithIcon:F,WithWidth:W,__namedExportsOrder:Va,default:za},Symbol.toStringTag,{value:"Module"}));export{oe as T,e as a,o as b};
//# sourceMappingURL=Tabs.stories-3ced7fa0.js.map
