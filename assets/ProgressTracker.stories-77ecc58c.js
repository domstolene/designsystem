import{a as t,j as m}from"./jsx-runtime-e43ccb36.js";import{r as a}from"./index-1b03fe98.js";import{O as U,b as X,k as Q,au as J,Q as K}from"./libraryAdd-7ba549de.js";import{I as $}from"./Icon-c6fb2d87.js";import{S as x}from"./StoryTemplate-2c894fa9.js";import{d as Y,s as k,n as g}from"./ddsReferenceTokens-fe3c594e.js";import{g as Z}from"./BaseComponentProps-3902fbf1.js";import"./Caption-848a816b.js";import"./Heading-9ec1ef64.js";import"./Label-393cff6f.js";import"./Legend-6f4c2491.js";import"./Link-e04d3bba.js";import"./Paragraph-ba6a9c6f.js";import"./TextOverflowEllipsis-c2a9fc8f.js";import{a as M}from"./Typography-dcf6ef21.js";import{a as ee,f as te}from"./Input.styles-d07d27d7.js";import{V as re}from"./VisuallyHidden-99534ff4.js";import{B as P}from"./Button-b5f31bb8.js";const L=a.createContext({activeStep:0}),oe=()=>a.useContext(L),{colors:s,spacing:F}=Y,H={number:"bodySans01",label:"bodySans03"},se={gap:F.SizesDdsSpacingLocalX0125},ie={gap:F.SizesDdsSpacingLocalX05},ne={color:s.DdsColorNeutralsGray5,height:"18px",width:"1px"},ae={size:"28px",borderWidth:"2px",iconSize:"small",active:{borderColor:s.DdsColorInteractiveBase,color:s.DdsColorNeutralsWhite,backgroundColor:s.DdsColorInteractiveBase},completed:{borderColor:s.DdsColorInteractiveBase,color:s.DdsColorNeutralsWhite,backgroundColor:s.DdsColorInteractiveBase,hover:{borderColor:s.DdsColorInteractiveDark,color:s.DdsColorNeutralsWhite,backgroundColor:s.DdsColorInteractiveDark}},inactive:{borderColor:s.DdsColorInteractiveBase,color:s.DdsColorInteractiveBase,backgroundColor:s.DdsColorNeutralsWhite,hover:{borderColor:s.DdsColorInteractiveBase,color:s.DdsColorInteractiveBase,backgroundColor:s.DdsColorInteractiveLightest}},disabled:{borderColor:s.DdsColorNeutralsGray5,color:s.DdsColorNeutralsGray5,backgroundColor:s.DdsColorNeutralsWhite}},ce={textDecoration:"underline",active:{color:s.DdsColorNeutralsGray9,textDecorationColor:s.DdsColorNeutralsGray9},inactive:{color:s.DdsColorNeutralsGray7,textDecorationColor:"transparent",hover:{textDecorationColor:s.DdsColorNeutralsGray7}},disabled:{color:s.DdsColorNeutralsGray6,textDecoration:"none"}},v={itemsWrapper:se,itemContentWrapper:ie,connector:ne,itemNumber:ae,itemText:ce},le=(r,e,o)=>o?"disabled":r?e?"activeCompleted":"activeIncomplete":e?"inactiveCompleted":"inactiveIncomplete",{itemNumber:i,itemText:S,itemContentWrapper:de}=v,pe=k.li`
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
`,me=k.div`
  transition:
    background-color 0.2s,
    border-color 0.2s,
    color 0.2s;
  border-radius: 50%;
  border: ${i.borderWidth} solid;
  width: ${i.size};
  height: ${i.size};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  ${M(H.number)}
  font-weight: 600;

  ${({state:r})=>{switch(r){case"activeIncomplete":return g`
          border-color: ${i.active.borderColor};
          color: ${i.active.color};
          background-color: ${i.active.backgroundColor};
        `;case"activeCompleted":return g`
          border-color: ${i.completed.borderColor};
          color: ${i.completed.color};
          background-color: ${i.completed.backgroundColor};
        `;case"inactiveCompleted":return g`
          border-color: ${i.completed.borderColor};
          color: ${i.completed.color};
          background-color: ${i.completed.backgroundColor};
        `;case"inactiveIncomplete":return g`
          border-color: ${i.inactive.borderColor};
          color: ${i.inactive.color};
          background-color: ${i.inactive.backgroundColor};
        `;case"disabled":return g`
          border-color: ${i.disabled.borderColor};
          color: ${i.disabled.color};
          background-color: ${i.disabled.backgroundColor};
        `}}}
`,ue=k.div`
  ${M(H.label)}
  text-align: start;
  text-decoration: ${S.textDecoration};
  transition: text-decoration-color 0.2s;

  ${({state:r})=>{switch(r){case"activeCompleted":case"activeIncomplete":return g`
          color: ${S.active.color};
          text-decoration-color: ${S.active.textDecorationColor};
        `;case"inactiveCompleted":case"inactiveIncomplete":return g`
          color: ${S.inactive.color};
          text-decoration-color: ${S.inactive.textDecorationColor};
        `;case"disabled":return g`
          color: ${S.disabled.color};
          text-decoration: ${S.disabled.textDecoration};
        `}}};
`,ge=k.button`
  background: none;
  border: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: ${i.size} 1fr;
  justify-content: flex-start;
  align-items: center;
  font-family: inherit;
  gap: ${de.gap};
  transition: ${ee};

  :focus-visible {
    ${te}
  }

  ${({state:r})=>r!=="disabled"&&g`
      cursor: pointer;
    `}
`,Se=(r,e,o)=>`${o+1}, ${r?"":"Trinn, "}${e?"Ferdig, ":"Ikke ferdig, "}`,q=r=>{const{index:e=0,completed:o=!1,disabled:n=!1,icon:d,children:c}=r,{activeStep:h,handleStepChange:u}=oe(),p=h===e,b={state:le(p,o,n)},C=a.useMemo(()=>o?t($,{icon:U,iconSize:i.iconSize}):d!==void 0?t($,{icon:d,iconSize:i.iconSize}):e+1,[o,d,e]);return t(pe,{"aria-current":p?"step":void 0,children:m(ge,{...b,as:u?"button":"div",onClick:!n&&u?()=>u(e):void 0,disabled:n,children:[t(me,{...b,"aria-hidden":!0,children:C}),m(ue,{...b,children:[t(re,{as:"span",children:Se(p,o,e)}),c]})]})})};q.displayName="ProgressTracker.Item";try{ProgressTracker.Item.displayName="ProgressTracker.Item",ProgressTracker.Item.__docgenInfo={description:"",displayName:"ProgressTracker.Item",props:{onClick:{defaultValue:null,description:"Click-handler som gjør det mulig for bruker å klikke på steget for å navigere. Valgfri.",name:"onClick",required:!1,type:{name:"((index: number) => void) | undefined"}},active:{defaultValue:null,description:"Om steget er valgt eller ikke. Settes av konsument.",name:"active",required:!1,type:{name:"boolean | undefined"}},completed:{defaultValue:null,description:"Om steget er ferdig eller ikke. Settes av konsument.",name:"completed",required:!1,type:{name:"boolean | undefined"}},disabled:{defaultValue:{value:"false"},description:"Om steget skal være disabled. Settes av konsument.",name:"disabled",required:!1,type:{name:"boolean | undefined"}},icon:{defaultValue:null,description:"Ikon som skal vises istedenfor stegnummeret. Settes av konument.",name:"icon",required:!1,type:{name:"SvgIcon | undefined"}},index:{defaultValue:null,description:"Indeksen til steget. NB! Denne settes automatisk av `<ProgressTracker />` og skal ikke settes manuelt.",name:"index",required:!1,type:{name:"number | undefined"}},htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:"HTMLAttributes<HTMLButtonElement> | HTMLAttributes<HTMLDivElement> | undefined"}}}}}catch{}const ve=k.ol`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${v.itemsWrapper.gap};
  margin: 0;
  padding: 0;
`,he=k.div`
  margin-left: calc(
    (${v.itemNumber.size} / 2) -
      (${v.connector.width} / 2)
  );
  height: ${v.connector.height};
  border-right: ${v.connector.width} solid
    ${v.connector.color};
`,l=(()=>{const r=a.forwardRef((e,o)=>{const{id:n,activeStep:d=0,onStepChange:c,children:h,className:u,htmlProps:p,...b}=e,[C,D]=a.useState(d),G=T=>{D(T),c&&c(T)};a.useEffect(()=>{d!==void 0&&d!=C&&D(d)},[d,C]);const j={...Z(n,u,p,b),ref:o},O=a.useMemo(()=>{const T=ke(h),R=be(T);return Ce(R)},[h]);return t(L.Provider,{value:{activeStep:C,handleStepChange:G},children:t("div",{role:"group","aria-label":"progress",...j,children:t(ve,{children:O})})})});return r.Item=q,r.displayName="ProgressTracker",r})(),ke=r=>a.Children.toArray(r).filter(a.isValidElement),be=r=>a.Children.map(r,(e,o)=>a.cloneElement(e,{...e.props,index:o})),Ce=r=>a.Children.map(r,(e,o)=>o===0?e:m(a.Fragment,{children:[t(he,{"aria-hidden":!0}),e]},o));try{l.displayName="ProgressTracker",l.__docgenInfo={description:"",displayName:"ProgressTracker",props:{activeStep:{defaultValue:null,description:"Indeksen til det aktive steget.",name:"activeStep",required:!1,type:{name:"number | undefined"}},onStepChange:{defaultValue:null,description:"Ekstra logikk ved klikking på et steg.",name:"onStepChange",required:!1,type:{name:"((step: number) => void) | undefined"}},htmlProps:{defaultValue:null,description:"Ekstra HTML-attributter som vil settes på elementet som genereres. Untatt `id` og `className` som settes på toppnivå.",name:"htmlProps",required:!1,type:{name:"HTMLAttributes<HTMLDivElement> | undefined"}}}}}catch{}const fe={title:"dds-components/ProgressTracker",component:l},f=()=>{const[e,o]=a.useState(0),[n,d]=a.useState(new Set);return m(x,{title:"ProgressTracker - overview",display:"block",children:[m(l,{activeStep:e,onStepChange:c=>o(c),htmlProps:{style:{maxWidth:"800px"}},children:[t(l.Item,{completed:n.has(0),children:"Partopplysninger"}),t(l.Item,{completed:n.has(1),children:"Slutning"}),t(l.Item,{completed:n.has(2),children:"Vedlegg"}),t(l.Item,{completed:n.has(3),disabled:!0,children:"Sammendrag"})]}),m("div",{style:{margin:"10px"},children:[e===0&&t("div",{children:"Steg 1"}),e===1&&t("div",{children:"Steg 2"}),e===2&&t("div",{children:"Steg 3"}),e===3&&t("div",{children:"Steg 4"})]}),t(P,{onClick:()=>{d(c=>new Set([...c,e])),e<3-1&&o(c=>c+1)},children:"Sett som ferdig"})]})},I=()=>{const[e,o]=a.useState(0),[n,d]=a.useState(new Set);return m(x,{title:"ProgressTracker - with icons",display:"block",children:[m(l,{activeStep:e,htmlProps:{style:{maxWidth:"800px"}},onStepChange:c=>o(c),children:[t(l.Item,{icon:X,completed:n.has(0),children:"Partopplysninger"}),t(l.Item,{icon:Q,completed:n.has(1),children:"Vedlegg"}),t(l.Item,{icon:J,completed:n.has(2),children:"Slutning"}),t(l.Item,{icon:K,completed:n.has(3),disabled:!0,children:"Sammendrag"})]}),m("div",{style:{margin:"10px"},children:[e===0&&t("div",{children:"Steg 1"}),e===1&&t("div",{children:"Steg 2"}),e===2&&t("div",{children:"Steg 3"}),e===3&&t("div",{children:"Steg 4"})]}),t(P,{onClick:()=>{d(c=>new Set([...c,e])),e<3-1&&o(c=>c+1)},children:"Sett som ferdig"})]})},y=()=>{const[e,o]=a.useState(0),[n,d]=a.useState(new Set),c=Math.max(...Array.from(n),-1),h=()=>{d(p=>new Set([...p,e])),e<3-1&&o(p=>p+1)},u=p=>p>c+1;return m(x,{title:"ProgressTracker - disabled steps",display:"block",children:[m(l,{activeStep:e,htmlProps:{style:{maxWidth:"800px"}},onStepChange:p=>o(p),children:[t(l.Item,{disabled:u(0),completed:n.has(0),children:"Partopplysninger"}),t(l.Item,{disabled:u(1),completed:n.has(1),children:"Slutning"}),t(l.Item,{disabled:u(2),completed:n.has(2),children:"Vedlegg"})]}),m("div",{style:{margin:"10px"},children:[e===0&&t("div",{children:"Steg 1"}),e===1&&t("div",{children:"Steg 2"}),e===2&&t("div",{children:"Steg 3"})]}),t(P,{onClick:()=>e>0&&o(p=>p-1),children:"Forrige steg"}),t(P,{onClick:h,children:"Neste steg"})]})};var N,w,B;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  const numSteps = 3;
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(new Set());
  return <StoryTemplate title="ProgressTracker - overview" display="block">
      <ProgressTracker activeStep={activeStep} onStepChange={step => setActiveStep(step)} htmlProps={{
      style: {
        maxWidth: '800px'
      }
    }}>
        <ProgressTracker.Item completed={completedSteps.has(0)}>
          Partopplysninger
        </ProgressTracker.Item>
        <ProgressTracker.Item completed={completedSteps.has(1)}>
          Slutning
        </ProgressTracker.Item>
        <ProgressTracker.Item completed={completedSteps.has(2)}>
          Vedlegg
        </ProgressTracker.Item>
        <ProgressTracker.Item completed={completedSteps.has(3)} disabled>
          Sammendrag
        </ProgressTracker.Item>
      </ProgressTracker>

      <div style={{
      margin: '10px'
    }}>
        {activeStep === 0 && <div>Steg 1</div>}
        {activeStep === 1 && <div>Steg 2</div>}
        {activeStep === 2 && <div>Steg 3</div>}
        {activeStep === 3 && <div>Steg 4</div>}
      </div>

      <Button onClick={() => {
      setCompletedSteps(s => new Set([...s, activeStep]));
      if (activeStep < numSteps - 1) {
        setActiveStep(s => s + 1);
      }
    }}>
        Sett som ferdig
      </Button>
    </StoryTemplate>;
}`,...(B=(w=f.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var W,V,A;I.parameters={...I.parameters,docs:{...(W=I.parameters)==null?void 0:W.docs,source:{originalSource:`() => {
  const numSteps = 3;
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(new Set());
  return <StoryTemplate title="ProgressTracker - with icons" display="block">
      <ProgressTracker activeStep={activeStep} htmlProps={{
      style: {
        maxWidth: '800px'
      }
    }} onStepChange={step => setActiveStep(step)}>
        <ProgressTracker.Item icon={PersonIcon} completed={completedSteps.has(0)}>
          Partopplysninger
        </ProgressTracker.Item>
        <ProgressTracker.Item icon={AttachmentIcon} completed={completedSteps.has(1)}>
          Vedlegg
        </ProgressTracker.Item>
        <ProgressTracker.Item icon={GavelIcon} completed={completedSteps.has(2)}>
          Slutning
        </ProgressTracker.Item>
        <ProgressTracker.Item icon={ChecklistIcon} completed={completedSteps.has(3)} disabled>
          Sammendrag
        </ProgressTracker.Item>
      </ProgressTracker>

      <div style={{
      margin: '10px'
    }}>
        {activeStep === 0 && <div>Steg 1</div>}
        {activeStep === 1 && <div>Steg 2</div>}
        {activeStep === 2 && <div>Steg 3</div>}
        {activeStep === 3 && <div>Steg 4</div>}
      </div>

      <Button onClick={() => {
      setCompletedSteps(s => new Set([...s, activeStep]));
      if (activeStep < numSteps - 1) {
        setActiveStep(s => s + 1);
      }
    }}>
        Sett som ferdig
      </Button>
    </StoryTemplate>;
}`,...(A=(V=I.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};var _,E,z;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`() => {
  const numSteps = 3;
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(new Set<number>());
  const highestCompletedStep = Math.max(...Array.from(completedSteps), -1);
  const handleSetFinishedButtonClick = () => {
    setCompletedSteps(s => new Set([...s, activeStep]));
    if (activeStep < numSteps - 1) {
      setActiveStep(s => s + 1);
    }
  };
  const isDisabled = (index: number) => index > highestCompletedStep + 1;
  return <StoryTemplate title="ProgressTracker - disabled steps" display="block">
      <ProgressTracker activeStep={activeStep} htmlProps={{
      style: {
        maxWidth: '800px'
      }
    }} onStepChange={step => setActiveStep(step)}>
        <ProgressTracker.Item disabled={isDisabled(0)} completed={completedSteps.has(0)}>
          Partopplysninger
        </ProgressTracker.Item>
        <ProgressTracker.Item disabled={isDisabled(1)} completed={completedSteps.has(1)}>
          Slutning
        </ProgressTracker.Item>
        <ProgressTracker.Item disabled={isDisabled(2)} completed={completedSteps.has(2)}>
          Vedlegg
        </ProgressTracker.Item>
      </ProgressTracker>
      <div style={{
      margin: '10px'
    }}>
        {activeStep === 0 && <div>Steg 1</div>}
        {activeStep === 1 && <div>Steg 2</div>}
        {activeStep === 2 && <div>Steg 3</div>}
      </div>

      <Button onClick={() => activeStep > 0 && setActiveStep(s => s - 1)}>
        Forrige steg
      </Button>
      <Button onClick={handleSetFinishedButtonClick}>Neste steg</Button>
    </StoryTemplate>;
}`,...(z=(E=y.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};const Ie=["Overview","WithIcons","FutureStepsDisabled"],qe=Object.freeze(Object.defineProperty({__proto__:null,FutureStepsDisabled:y,Overview:f,WithIcons:I,__namedExportsOrder:Ie,default:fe},Symbol.toStringTag,{value:"Module"}));export{qe as P,l as a};
//# sourceMappingURL=ProgressTracker.stories-77ecc58c.js.map
