import{s as W,A as M,a as e,d as ke,j as r}from"./ddsReferenceTokens-647ce456.js";import{S as w}from"./StoryTemplate-1d63849e.js";import{r as o}from"./index-ebeaab24.js";import{N as k}from"./libraryAdd-35e18a4f.js";import{I as Se}from"./Icon-42793503.js";import{g as K,b as X,f as ve,h as Le,e as Ce}from"./BaseComponentProps-a100791d.js";import{a as U,f as G}from"./Input.styles-115c96a3.js";import{s as Y}from"./scrollbarStyling-d0d816c9.js";import{n as $e}from"./normalize-f756ee4b.js";import{r as _e}from"./removeButtonStyling-867d6ba4.js";import"./Caption-0ff47cfa.js";import"./Heading-ded557b4.js";import"./Label-b7852367.js";import"./Legend-d58c0461.js";import"./Link-037ca604.js";import"./Paragraph-a74f99d8.js";import"./TextOverflowEllipsis-e3546c5b.js";import{a as we,d as De}from"./Typography-d54ea9fd.js";const Pe=o.createContext({activeTab:0,tabsId:"",handleTabChange:()=>null,tabListRef:null,tabPanelsRef:null,hasTabFocus:!1,setHasTabFocus:()=>null,tabContentDirection:"row"}),J=()=>o.useContext(Pe),Ne=W.div`
  ${({width:n})=>n&&M`
      width: ${n};
    `};
`,c=o.forwardRef((n,T)=>{const{id:i,activeTab:s,onChange:p,tabContentDirection:u="row",width:l,children:h,className:b,htmlProps:m,...v}=n,L=o.useId(),D=i??`${L}-tabs`,[C,$]=o.useState(s||0),[R,_]=o.useState(!1),N=o.useRef(null),F=o.useRef(null),x=g=>{$(g),p&&p(g)};o.useEffect(()=>{s!==void 0&&s!==C&&$(s)},[s,C]);const f={...K(D,b,m,v),ref:T};return e(Pe.Provider,{value:{tabsId:D,activeTab:C,handleTabChange:x,tabListRef:N,tabPanelsRef:F,hasTabFocus:R,setHasTabFocus:_,tabContentDirection:u},children:e(Ne,{...f,width:l,children:h})})});c.displayName="Tabs";try{c.displayName="Tabs",c.__docgenInfo={description:"",displayName:"Tabs",props:{activeTab:{defaultValue:null,description:"Indeksen til den aktive fanen. **OBS!** Ved å sette denne vil brukere aldri kunne endre tab uten at du også registrerer en `onChange`-lytter for å ta vare på aktiv tab utenfor komponenten.",name:"activeTab",required:!1,type:{name:"number | undefined"}},onChange:{defaultValue:null,description:"Ekstra logikk ved endring av aktiv fane.",name:"onChange",required:!1,type:{name:"((index: number) => void) | undefined"}},tabContentDirection:{defaultValue:null,description:"Retningen ikon og tekst vises i `<Tab />`-elementer.",name:"tabContentDirection",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"row"'},{value:'"column"'}]}},width:{defaultValue:null,description:"Bredde for hele komponenten.",name:"width",required:!1,type:{name:"Width<0 | (string & {})> | undefined"}},htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:'Omit<HTMLAttributes<HTMLDivElement>, "onChange"> | undefined'}}}}}catch{}const{border:z,spacing:H,colors:S}=ke,xe={borderBottom:`${z.BordersDdsBorderStyleLightStrokeWeight} solid ${z.BordersDdsBorderStyleLightStroke}`},Re={base:{borderBottom:`${z.BordersDdsBorderStyleLightStrokeWeight} solid transparent`,color:S.DdsColorNeutralsGray7,padding:H.SizesDdsSpacingLocalX05},row:{gap:H.SizesDdsSpacingLocalX05},column:{gap:H.SizesDdsSpacingLocalX025},active:{backgroundColor:S.DdsColorInteractiveLightest,color:S.DdsColorInteractiveDarkest,boxShadow:`inset 0 -2px 0 0 ${S.DdsColorInteractiveDarker}`,borderColor:S.DdsColorInteractiveDarker},hover:{color:S.DdsColorInteractiveDarkest,boxShadow:`inset 0 -2px 0 0 ${S.DdsColorInteractiveDarker}`,borderColor:S.DdsColorInteractiveDarker}},Ee={padding:H.SizesDdsSpacingLocalX025},Q={tabList:xe,tab:Re,panel:Ee},{tab:y}=Q,Ae=W.button`
  ${$e}
  ${_e}
  user-select: text;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: ${y.base.borderBottom};
  color: ${y.base.color};
  padding: ${y.base.padding};
  ${we(De)}

  @media (prefers-reduced-motion: no-preference) {
    transition: box-shadow 0.2s, border-bottom 0.2s, color 0.2s,
      ${U};
  }

  ${({direction:n})=>M`
    flex-direction: ${n};
    gap: ${y[n].gap};
  `};

  ${({active:n})=>n&&M`
      background-color: ${y.active.backgroundColor};
      border-color: ${y.active.borderColor};
      color: ${y.active.color};
      box-shadow: ${y.active.boxShadow};
    `}

  &:focus-visible {
    ${G}
    outline-offset: -1px;
  }

  &:hover {
    border-color: ${y.hover.borderColor};
    color: ${y.hover.color};
    box-shadow: ${y.hover.boxShadow};
  }
`,a=o.forwardRef((n,T)=>{const{active:i=!1,icon:s,children:p,focus:u,setFocus:l,index:h,onClick:b,onKeyDown:m,id:v,className:L,htmlProps:D,...C}=n,$=o.useRef(null),R=X(T,$),{tabPanelsRef:_,setHasTabFocus:N,tabContentDirection:F}=J();o.useEffect(()=>{var I;u&&((I=$.current)==null||I.focus(),N(!0))},[u]),ve("Tab",()=>{var I;N(!1),(I=_==null?void 0:_.current)==null||I.focus()});const x=o.useCallback(()=>{l&&h&&l(h)},[h,l]),f=I=>{x(),b&&b(I)},g=I=>{x(),m&&m(I)},Ie={...K(v,L,D,C),ref:R,"aria-selected":i,role:"tab",active:i,direction:F,onClick:f,onKeyDown:g,tabIndex:u?0:-1};return r(Ae,{...Ie,children:[s&&e(Se,{icon:s,iconSize:"inherit"}),e("span",{children:p})]})});a.displayName="Tab";try{a.displayName="Tab",a.__docgenInfo={description:"",displayName:"Tab",props:{active:{defaultValue:null,description:"Spesifiserer om fanen er aktiv.",name:"active",required:!1,type:{name:"boolean | undefined"}},icon:{defaultValue:null,description:"Ikon.",name:"icon",required:!1,type:{name:"SvgIcon | undefined"}},focus:{defaultValue:null,description:"Spesifiserer om `<Tab />` skal ha fokus. **OBS!** settes automatisk av forelder.",name:"focus",required:!1,type:{name:"boolean | undefined"}},setFocus:{defaultValue:null,description:"Callback som setter fokus. **OBS!** settes automatisk av forelder.",name:"setFocus",required:!1,type:{name:"Dispatch<SetStateAction<number>> | undefined"}},index:{defaultValue:null,description:"Indeksen til `<Tab />`. **OBS!** settes automatisk av forelder.",name:"index",required:!1,type:{name:"number | undefined"}},htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:'Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onClick" | "onKeyDown"> | undefined'}}}}}catch{}const{tabList:Be}=Q,Ve=W.div`
  border-bottom: ${Be.borderBottom};
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  overflow-x: auto;
  ${Y.webkit}
  ${Y.firefox}
  scroll-snap-type: x mandatory;
  @media (prefers-reduced-motion: no-preference) {
    scroll-behavior: smooth;
    transition: ${U};
  }
  &:focus-visible {
    ${G}
  }
  &:focus-visible button {
    outline: none;
  }
`,d=o.forwardRef(({children:n,id:T,onFocus:i,...s},p)=>{const{activeTab:u,tabsId:l,handleTabChange:h,tabListRef:b,hasTabFocus:m,tabPanelsRef:v,setHasTabFocus:L}=J(),D=T??`${l}-tablist`,C=o.Children.toArray(n).length,[$,R]=Le(C,!m,"row"),_=X(p,b),N=o.Children.map(n,(f,g)=>o.isValidElement(f)&&o.cloneElement(f,{id:`${l}-tab-${g}`,"aria-controls":`${l}-panel-${g}`,active:u===g,index:g,focus:$===g&&m,setFocus:R,onClick:()=>h(g)}));ve("Tab",()=>{var f;L(!1),(f=v==null?void 0:v.current)==null||f.focus()}),Ce((b==null?void 0:b.current)||null,()=>{L(!1)});const x={...s,ref:_,role:"tablist","aria-label":"Bruk venste og høyre piltast for å bla",id:D,tabIndex:0,onFocus:f=>{L(!0),i&&i(f)}};return e(Ve,{...x,children:N})});d.displayName="TabList";try{d.displayName="TabList",d.__docgenInfo={description:"",displayName:"TabList",props:{}}}catch{}const{panel:je}=Q,Oe=W.div`
  padding: ${je.padding};
  @media (prefers-reduced-motion: no-preference) {
    transition: ${U};
  }

  ${({active:n})=>!n&&M`
      display: none;
    `}
  &:focus-visible {
    ${G}
  }
`,t=o.forwardRef(({active:n=!1,children:T,id:i,className:s,htmlProps:p,...u},l)=>{const h={...K(i,s,p,u),ref:l,tabIndex:0,role:"tabpanel",active:n};return e(Oe,{...h,children:T})});t.displayName="TabPanel";try{t.displayName="TabPanel",t.__docgenInfo={description:"",displayName:"TabPanel",props:{active:{defaultValue:{value:"false"},description:"Spesifiserer om panelet skal vises basert på aktiv fane.",name:"active",required:!1,type:{name:"boolean | undefined"}},htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:"HTMLAttributes<HTMLDivElement> | undefined"}}}}}catch{}const P=o.forwardRef(({children:n,...T},i)=>{const{activeTab:s,tabsId:p,tabPanelsRef:u}=J(),l=X(i,u),h=o.Children.map(n,(b,m)=>{const v=m===s;return o.isValidElement(b)&&o.cloneElement(b,{id:`${p}-panel-${m}`,"aria-labelledby":`${p}-tab-${m}`,active:v,"aria-expanded":v})});return e("div",{ref:l,...T,children:h})});P.displayName="TabPanels";try{P.displayName="TabPanels",P.__docgenInfo={description:"",displayName:"TabPanels",props:{}}}catch{}const qe={title:"dds-components/Tabs",component:c,subcomponents:{TabList:d,Tab:a,TabPanel:t,TabPanels:P},argTypes:{activeTab:{control:"number"},tabWidth:{control:"text"}}},E=()=>r(w,{title:"Tabs - overview",children:[e(c,{children:r(d,{children:[e(a,{children:"Restriksjoner"}),e(a,{children:"Aktører"}),e(a,{children:"Logg"})]})}),e(c,{children:r(d,{children:[e(a,{icon:k,children:"Restriksjoner"}),e(a,{icon:k,children:"Aktører"}),e(a,{icon:k,children:"Logg"})]})}),e(c,{tabContentDirection:"column",children:r(d,{children:[e(a,{icon:k,children:"Restriksjoner"}),e(a,{icon:k,children:"Aktører"}),e(a,{icon:k,children:"Logg"})]})})]}),A=n=>e(w,{title:"Tabs - default",display:"block",children:r(c,{...n,children:[r(d,{children:[e(a,{children:"Tab 1"}),e(a,{children:"Tab 2"}),e(a,{children:"Tab 3"})]}),r(P,{children:[e(t,{children:"Innhold 1"}),e(t,{children:"Innhold 2"}),e(t,{children:"Innhold 3"})]})]})}),B=n=>e(w,{title:"Tabs - with icon",children:r(c,{...n,children:[r(d,{children:[e(a,{icon:k,children:"Tab 1"}),e(a,{icon:k,children:"Tab 2"}),e(a,{icon:k,children:"Tab 3"})]}),r(P,{children:[e(t,{children:"Innhold 1"}),e(t,{children:"Innhold 2"}),e(t,{children:"Innhold 3"})]})]})}),V=n=>{const[T,i]=o.useState(1);return e(w,{title:"Tabs - active tab",display:"block",children:r(c,{...n,activeTab:T,onChange:s=>i(s),children:[r(d,{children:[e(a,{children:"Tab 1"}),e(a,{children:"Tab 2"}),e(a,{children:"Tab 3"})]}),r(P,{children:[e(t,{children:"Innhold 1"}),e(t,{children:"Innhold 2"}),e(t,{children:"Innhold 3"})]})]})})},j=n=>e(w,{title:"Tabs - tab width",display:"block",children:r(c,{...n,width:"500px",children:[r(d,{children:[e(a,{children:"Tab 1"}),e(a,{children:"Tab 2"}),e(a,{children:"Tab 3"})]}),r(P,{children:[e(t,{children:"Innhold 1"}),e(t,{children:"Innhold 2"}),e(t,{children:"Innhold 3"})]})]})}),O=n=>e(w,{title:"Tabs - tab width",display:"block",children:r(c,{...n,children:[r(d,{children:[e(a,{children:"Partsopplysninger"}),e(a,{children:"Restriksjoner"}),e(a,{children:"Vedlegg"})]}),r(P,{children:[e(t,{children:"Innhold 1"}),e(t,{children:"Innhold 2"}),e(t,{children:"Innhold 3"})]})]})}),q=n=>e(w,{title:"Tabs - many tabs",display:"block",children:r(c,{...n,htmlProps:{style:{width:"400px"}},children:[r(d,{children:[e(a,{children:"Tab1"}),e(a,{children:"Restriksjoner"}),e(a,{children:"Tab3"}),e(a,{children:"Aktører"}),e(a,{children:"Tab5"}),e(a,{children:"Restriksjoner"}),e(a,{children:"Tab7"}),e(a,{children:"Tab8"}),e(a,{children:"Tab9"}),e(a,{children:"Tab10"})]}),r(P,{children:[e(t,{children:"Innhold 1"}),e(t,{children:"Innhold 2"}),e(t,{children:"Innhold 3"}),e(t,{children:"Innhold 4"}),e(t,{children:"Innhold 5"}),e(t,{children:"Innhold 6"}),e(t,{children:"Innhold 7"}),e(t,{children:"Innhold 8"}),e(t,{children:"Innhold 9"}),e(t,{children:"Innhold 10"})]})]})});var Z,ee,ae;E.parameters={...E.parameters,docs:{...(Z=E.parameters)==null?void 0:Z.docs,source:{originalSource:`() => <StoryTemplate title="Tabs - overview">
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
  </StoryTemplate>`,...(ae=(ee=E.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var ne,te,oe;A.parameters={...A.parameters,docs:{...(ne=A.parameters)==null?void 0:ne.docs,source:{originalSource:`(args: TabsProps) => <StoryTemplate title="Tabs - default" display="block">
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
  </StoryTemplate>`,...(oe=(te=A.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var re,se,ie;B.parameters={...B.parameters,docs:{...(re=B.parameters)==null?void 0:re.docs,source:{originalSource:`(args: TabsProps) => <StoryTemplate title="Tabs - with icon">
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
  </StoryTemplate>`,...(ie=(se=B.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var le,ce,de;V.parameters={...V.parameters,docs:{...(le=V.parameters)==null?void 0:le.docs,source:{originalSource:`(args: TabsProps) => {
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
}`,...(de=(ce=V.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var be,Te,pe;j.parameters={...j.parameters,docs:{...(be=j.parameters)==null?void 0:be.docs,source:{originalSource:`(args: TabsProps) => <StoryTemplate title="Tabs - tab width" display="block">
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
  </StoryTemplate>`,...(pe=(Te=j.parameters)==null?void 0:Te.docs)==null?void 0:pe.source}}};var ue,he,me;O.parameters={...O.parameters,docs:{...(ue=O.parameters)==null?void 0:ue.docs,source:{originalSource:`(args: TabsProps) => <StoryTemplate title="Tabs - tab width" display="block">
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
  </StoryTemplate>`,...(me=(he=O.parameters)==null?void 0:he.docs)==null?void 0:me.source}}};var fe,ge,ye;q.parameters={...q.parameters,docs:{...(fe=q.parameters)==null?void 0:fe.docs,source:{originalSource:`(args: TabsProps) => <StoryTemplate title="Tabs - many tabs" display="block">
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
  </StoryTemplate>`,...(ye=(ge=q.parameters)==null?void 0:ge.docs)==null?void 0:ye.source}}};const Fe=["Overview","Default","WithIcon","ActiveTab","WithWidth","TabLongNames","ManyTabs"],sa=Object.freeze(Object.defineProperty({__proto__:null,ActiveTab:V,Default:A,ManyTabs:q,Overview:E,TabLongNames:O,WithIcon:B,WithWidth:j,__namedExportsOrder:Fe,default:qe},Symbol.toStringTag,{value:"Module"}));export{sa as T,a,t as b};
//# sourceMappingURL=Tabs.stories-2bdbae58.js.map
