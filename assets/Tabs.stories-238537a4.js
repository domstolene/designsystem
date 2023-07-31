import{s as X,A as H,a,d as ka,j as t}from"./focus-visible-8467fd8b.js";import{R as D}from"./storybook-components-76b2a6b1.js";import{r}from"./index-d47b1f5a.js";import{i as Sa,e as y}from"./dds-icons-f9255b51.js";import{a as M,b as $a,w as La,S as q,O as Ia,Y as wa,_ as Ca}from"./dds-core-b89b291f.js";import{V as Y,_ as G}from"./dds-form-9dbc5b3d.js";import{s as U}from"./scrollbarStyling-b67d8d39.js";import{O as Da,A as Ra}from"./dds-typography-4e6445f7.js";const va=r.createContext({activeTab:0,tabsId:"",handleTabChange:()=>null,tabListRef:null,tabPanelsRef:null,hasTabFocus:!1,setHasTabFocus:()=>null,tabContentDirection:"row"}),Q=()=>r.useContext(va),xa=X.div`
  ${({width:n})=>n&&H`
      width: ${n};
    `};
`,P=r.forwardRef((n,b)=>{const{id:l,activeTab:s,onChange:d,tabContentDirection:T="row",width:i,children:h,className:c,htmlProps:p,...I}=n,$=r.useId(),R=l??`${$}-tabs`,[L,w]=r.useState(s||0),[N,C]=r.useState(!1),x=r.useRef(null),z=r.useRef(null),A=m=>{w(m),d&&d(m)};r.useEffect(()=>{s!==void 0&&s!==L&&w(s)},[s,L]);const u={...M(R,c,p,I),ref:b};return a(va.Provider,{value:{tabsId:R,activeTab:L,handleTabChange:A,tabListRef:x,tabPanelsRef:z,hasTabFocus:N,setHasTabFocus:C,tabContentDirection:T},children:a(xa,{...u,width:i,children:h})})});P.displayName="Tabs";const{border:K,spacing:V,colors:k}=ka,Aa={borderBottom:`${K.BordersDdsBorderStyleLightStrokeWeight} solid ${K.BordersDdsBorderStyleLightStroke}`},Na={base:{borderBottom:`${K.BordersDdsBorderStyleLightStrokeWeight} solid transparent`,color:k.DdsColorNeutralsGray7,padding:V.SizesDdsSpacingLocalX05},row:{gap:V.SizesDdsSpacingLocalX05},column:{gap:V.SizesDdsSpacingLocalX025},active:{backgroundColor:k.DdsColorInteractiveLightest,color:k.DdsColorInteractiveDarkest,boxShadow:`inset 0 -2px 0 0 ${k.DdsColorInteractiveDarker}`,borderColor:k.DdsColorInteractiveDarker},hover:{color:k.DdsColorInteractiveDarkest,boxShadow:`inset 0 -2px 0 0 ${k.DdsColorInteractiveDarker}`,borderColor:k.DdsColorInteractiveDarker}},ja={padding:V.SizesDdsSpacingLocalX025},J={tabList:Aa,tab:Na,panel:ja},{tab:f}=J,Ba=X.button`
  ${$a}
  ${La}
  user-select: text;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: ${f.base.borderBottom};
  color: ${f.base.color};
  padding: ${f.base.padding};
  ${Da(Ra)}

  @media (prefers-reduced-motion: no-preference) {
    transition: box-shadow 0.2s, border-bottom 0.2s, color 0.2s,
      ${Y};
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
`,e=r.forwardRef((n,b)=>{const{active:l=!1,icon:s,children:d,focus:T,setFocus:i,index:h,onClick:c,onKeyDown:p,id:I,className:$,htmlProps:R,...L}=n,w=r.useRef(null),N=q(b,w),{tabPanelsRef:C,setHasTabFocus:x,tabContentDirection:z}=Q();r.useEffect(()=>{var v;T&&((v=w.current)==null||v.focus(),x(!0))},[T]),Ia("Tab",()=>{var v;x(!1),(v=C==null?void 0:C.current)==null||v.focus()});const A=r.useCallback(()=>{i&&h&&i(h)},[h,i]),u=v=>{A(),c&&c(v)},m=v=>{A(),p&&p(v)},ya={...M(I,$,R,L),ref:N,"aria-selected":l,role:"tab",active:l,direction:z,onClick:u,onKeyDown:m,tabIndex:T?0:-1};return t(Ba,{...ya,children:[s&&a(Sa,{icon:s,iconSize:"inherit"}),a("span",{children:d})]})});e.displayName="Tab";const{tabList:Oa}=J,Fa=X.div`
  border-bottom: ${Oa.borderBottom};
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  overflow-x: auto;
  ${U.webkit}
  ${U.firefox}
  scroll-snap-type: x mandatory;
  @media (prefers-reduced-motion: no-preference) {
    scroll-behavior: smooth;
    transition: ${Y};
  }
  &:focus-visible {
    ${G}
  }
  &:focus-visible button {
    outline: none;
  }
`,g=r.forwardRef(({children:n,id:b,onFocus:l,...s},d)=>{const{activeTab:T,tabsId:i,handleTabChange:h,tabListRef:c,hasTabFocus:p,tabPanelsRef:I,setHasTabFocus:$}=Q(),R=b??`${i}-tablist`,L=r.Children.toArray(n).length,[w,N]=wa(L,!p,"row"),C=q(d,c),x=r.Children.map(n,(u,m)=>r.isValidElement(u)&&r.cloneElement(u,{id:`${i}-tab-${m}`,"aria-controls":`${i}-panel-${m}`,active:T===m,index:m,focus:w===m&&p,setFocus:N,onClick:()=>h(m)}));Ia("Tab",()=>{var u;$(!1),(u=I==null?void 0:I.current)==null||u.focus()}),Ca((c==null?void 0:c.current)||null,()=>{$(!1)});const A={...s,ref:C,role:"tablist","aria-label":"Bruk venste og høyre piltast for å bla",id:R,tabIndex:0,onFocus:u=>{$(!0),l&&l(u)}};return a(Fa,{...A,children:x})});g.displayName="TabList";const{panel:_a}=J,Wa=X.div`
  padding: ${_a.padding};
  @media (prefers-reduced-motion: no-preference) {
    transition: ${Y};
  }

  ${({active:n})=>!n&&H`
      display: none;
    `}
  &:focus-visible {
    ${G}
  }
`,o=r.forwardRef(({active:n=!1,children:b,id:l,className:s,htmlProps:d,...T},i)=>{const h={...M(l,s,d,T),ref:i,tabIndex:0,role:"tabpanel",active:n};return a(Wa,{...h,children:b})});o.displayName="TabPanel";const S=r.forwardRef(({children:n,...b},l)=>{const{activeTab:s,tabsId:d,tabPanelsRef:T}=Q(),i=q(l,T),h=r.Children.map(n,(c,p)=>{const I=p===s;return r.isValidElement(c)&&r.cloneElement(c,{id:`${d}-panel-${p}`,"aria-labelledby":`${d}-tab-${p}`,active:I,"aria-expanded":I})});return a("div",{ref:i,...b,children:h})});S.displayName="TabPanels";const Ea={title:"dds-components/Tabs",component:P,subcomponents:{TabList:g,Tab:e,TabPanel:o,TabPanels:S},argTypes:{activeTab:{control:"number"},tabWidth:{control:"text"}}},j=()=>t(D,{title:"Tabs - overview",children:[a(P,{children:t(g,{children:[a(e,{children:"Restriksjoner"}),a(e,{children:"Aktører"}),a(e,{children:"Logg"})]})}),a(P,{children:t(g,{children:[a(e,{icon:y,children:"Restriksjoner"}),a(e,{icon:y,children:"Aktører"}),a(e,{icon:y,children:"Logg"})]})}),a(P,{tabContentDirection:"column",children:t(g,{children:[a(e,{icon:y,children:"Restriksjoner"}),a(e,{icon:y,children:"Aktører"}),a(e,{icon:y,children:"Logg"})]})})]}),B=n=>a(D,{title:"Tabs - default",display:"block",children:t(P,{...n,children:[t(g,{children:[a(e,{children:"Tab 1"}),a(e,{children:"Tab 2"}),a(e,{children:"Tab 3"})]}),t(S,{children:[a(o,{children:"Innhold 1"}),a(o,{children:"Innhold 2"}),a(o,{children:"Innhold 3"})]})]})}),O=n=>a(D,{title:"Tabs - with icon",children:t(P,{...n,children:[t(g,{children:[a(e,{icon:y,children:"Tab 1"}),a(e,{icon:y,children:"Tab 2"}),a(e,{icon:y,children:"Tab 3"})]}),t(S,{children:[a(o,{children:"Innhold 1"}),a(o,{children:"Innhold 2"}),a(o,{children:"Innhold 3"})]})]})}),F=n=>{const[b,l]=r.useState(1);return a(D,{title:"Tabs - active tab",display:"block",children:t(P,{...n,activeTab:b,onChange:s=>l(s),children:[t(g,{children:[a(e,{children:"Tab 1"}),a(e,{children:"Tab 2"}),a(e,{children:"Tab 3"})]}),t(S,{children:[a(o,{children:"Innhold 1"}),a(o,{children:"Innhold 2"}),a(o,{children:"Innhold 3"})]})]})})},_=n=>a(D,{title:"Tabs - tab width",display:"block",children:t(P,{...n,width:"500px",children:[t(g,{children:[a(e,{children:"Tab 1"}),a(e,{children:"Tab 2"}),a(e,{children:"Tab 3"})]}),t(S,{children:[a(o,{children:"Innhold 1"}),a(o,{children:"Innhold 2"}),a(o,{children:"Innhold 3"})]})]})}),W=n=>a(D,{title:"Tabs - tab width",display:"block",children:t(P,{...n,children:[t(g,{children:[a(e,{children:"Partsopplysninger"}),a(e,{children:"Restriksjoner"}),a(e,{children:"Vedlegg"})]}),t(S,{children:[a(o,{children:"Innhold 1"}),a(o,{children:"Innhold 2"}),a(o,{children:"Innhold 3"})]})]})}),E=n=>a(D,{title:"Tabs - many tabs",display:"block",children:t(P,{...n,htmlProps:{style:{width:"400px"}},children:[t(g,{children:[a(e,{children:"Tab1"}),a(e,{children:"Restriksjoner"}),a(e,{children:"Tab3"}),a(e,{children:"Aktører"}),a(e,{children:"Tab5"}),a(e,{children:"Restriksjoner"}),a(e,{children:"Tab7"}),a(e,{children:"Tab8"}),a(e,{children:"Tab9"}),a(e,{children:"Tab10"})]}),t(S,{children:[a(o,{children:"Innhold 1"}),a(o,{children:"Innhold 2"}),a(o,{children:"Innhold 3"}),a(o,{children:"Innhold 4"}),a(o,{children:"Innhold 5"}),a(o,{children:"Innhold 6"}),a(o,{children:"Innhold 7"}),a(o,{children:"Innhold 8"}),a(o,{children:"Innhold 9"}),a(o,{children:"Innhold 10"})]})]})});var Z,aa,ea;j.parameters={...j.parameters,docs:{...(Z=j.parameters)==null?void 0:Z.docs,source:{originalSource:`() => <StoryTemplate title="Tabs - overview">
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
  </StoryTemplate>`,...(ea=(aa=j.parameters)==null?void 0:aa.docs)==null?void 0:ea.source}}};var na,oa,ra;B.parameters={...B.parameters,docs:{...(na=B.parameters)==null?void 0:na.docs,source:{originalSource:`(args: TabsProps) => <StoryTemplate title="Tabs - default" display="block">
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
  </StoryTemplate>`,...(ra=(oa=B.parameters)==null?void 0:oa.docs)==null?void 0:ra.source}}};var ta,sa,la;O.parameters={...O.parameters,docs:{...(ta=O.parameters)==null?void 0:ta.docs,source:{originalSource:`(args: TabsProps) => <StoryTemplate title="Tabs - with icon">
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
  </StoryTemplate>`,...(la=(sa=O.parameters)==null?void 0:sa.docs)==null?void 0:la.source}}};var ia,ca,ba;F.parameters={...F.parameters,docs:{...(ia=F.parameters)==null?void 0:ia.docs,source:{originalSource:`(args: TabsProps) => {
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
}`,...(ba=(ca=F.parameters)==null?void 0:ca.docs)==null?void 0:ba.source}}};var da,Ta,ha;_.parameters={..._.parameters,docs:{...(da=_.parameters)==null?void 0:da.docs,source:{originalSource:`(args: TabsProps) => <StoryTemplate title="Tabs - tab width" display="block">
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
  </StoryTemplate>`,...(ha=(Ta=_.parameters)==null?void 0:Ta.docs)==null?void 0:ha.source}}};var pa,ua,ma;W.parameters={...W.parameters,docs:{...(pa=W.parameters)==null?void 0:pa.docs,source:{originalSource:`(args: TabsProps) => <StoryTemplate title="Tabs - tab width" display="block">
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
  </StoryTemplate>`,...(ma=(ua=W.parameters)==null?void 0:ua.docs)==null?void 0:ma.source}}};var fa,Pa,ga;E.parameters={...E.parameters,docs:{...(fa=E.parameters)==null?void 0:fa.docs,source:{originalSource:`(args: TabsProps) => <StoryTemplate title="Tabs - many tabs" display="block">
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
  </StoryTemplate>`,...(ga=(Pa=E.parameters)==null?void 0:Pa.docs)==null?void 0:ga.source}}};const za=["Overview","Default","WithIcon","ActiveTab","WithWidth","TabLongNames","ManyTabs"],Qa=Object.freeze(Object.defineProperty({__proto__:null,ActiveTab:F,Default:B,ManyTabs:E,Overview:j,TabLongNames:W,WithIcon:O,WithWidth:_,__namedExportsOrder:za,default:Ea},Symbol.toStringTag,{value:"Module"}));export{Qa as T,e as a,o as b};
//# sourceMappingURL=Tabs.stories-238537a4.js.map
