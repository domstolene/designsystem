import{d as Q,s as C,A as g,a as t,j as m}from"./ddsReferenceTokens-f1d35829.js";import{r as a}from"./index-d47b1f5a.js";import{i as D,U,L as Z,w as q,y as J,Z as K}from"./dds-icons-265d9665.js";import{R as f}from"./storybook-components-be8d83b8.js";import{a as Y}from"./dds-core-c67132cd.js";import{O as j}from"./dds-typography-cc6cb429.js";import{V as ee,_ as te}from"./dds-form-9b45fc8d.js";import{V as re}from"./VisuallyHidden-15b316c1.js";import{B as T}from"./Button-aa30c63f.js";const _=a.createContext({activeStep:0}),oe=()=>a.useContext(_),{colors:s,spacing:O}=Q,E={number:"bodySans01",label:"bodySans03"},se={gap:O.SizesDdsSpacingLocalX0125},ie={gap:O.SizesDdsSpacingLocalX05},ce={color:s.DdsColorNeutralsGray5,height:"18px",width:"1px"},ae={size:"28px",borderWidth:"2px",iconSize:"small",active:{borderColor:s.DdsColorInteractiveBase,color:s.DdsColorNeutralsWhite,backgroundColor:s.DdsColorInteractiveBase},completed:{borderColor:s.DdsColorInteractiveBase,color:s.DdsColorNeutralsWhite,backgroundColor:s.DdsColorInteractiveBase,hover:{borderColor:s.DdsColorInteractiveDark,color:s.DdsColorNeutralsWhite,backgroundColor:s.DdsColorInteractiveDark}},inactive:{borderColor:s.DdsColorInteractiveBase,color:s.DdsColorInteractiveBase,backgroundColor:s.DdsColorNeutralsWhite,hover:{borderColor:s.DdsColorInteractiveBase,color:s.DdsColorInteractiveBase,backgroundColor:s.DdsColorInteractiveLightest}},disabled:{borderColor:s.DdsColorNeutralsGray5,color:s.DdsColorNeutralsGray5,backgroundColor:s.DdsColorNeutralsWhite}},ne={textDecoration:"underline",active:{color:s.DdsColorNeutralsGray9,textDecorationColor:s.DdsColorNeutralsGray9},inactive:{color:s.DdsColorNeutralsGray7,textDecorationColor:"transparent",hover:{textDecorationColor:s.DdsColorNeutralsGray7}},disabled:{color:s.DdsColorNeutralsGray6,textDecoration:"none"}},h={itemsWrapper:se,itemContentWrapper:ie,connector:ce,itemNumber:ae,itemText:ne},le=(o,e,r)=>r?"disabled":o?e?"activeCompleted":"activeIncomplete":e?"inactiveCompleted":"inactiveIncomplete",{itemNumber:i,itemText:v,itemContentWrapper:de}=h,pe=C.li`
  flex: 1;
  position: relative;
  display: flex;
  justify-content: center;
`,me=C.div`
  transition: background-color 0.2s, border-color 0.2s, color 0.2s;
  border-radius: 50%;
  border: ${i.borderWidth} solid;
  width: ${i.size};
  height: ${i.size};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  ${j(E.number)}
  font-weight: 600;

  ${({state:o})=>{switch(o){case"activeIncomplete":return g`
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
`,Se=C.div`
  ${j(E.label)}
  text-align: start;
  text-decoration: ${v.textDecoration};
  transition: text-decoration-color 0.2s;

  ${({state:o})=>{switch(o){case"activeCompleted":case"activeIncomplete":return g`
          color: ${v.active.color};
          text-decoration-color: ${v.active.textDecorationColor};
        `;case"inactiveCompleted":case"inactiveIncomplete":return g`
          color: ${v.inactive.color};
          text-decoration-color: ${v.inactive.textDecorationColor};
        `;case"disabled":return g`
          color: ${v.disabled.color};
          text-decoration: ${v.disabled.textDecoration};
        `}}};
`,ge=C.button`
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

  ${({state:o})=>o!=="disabled"&&g`
      cursor: pointer;
    `}
`,ve=(o,e,r)=>`${r+1}, ${o?"":"Trinn, "}${e?"Ferdig, ":"Ikke ferdig, "}`,L=o=>{const{index:e=0,completed:r=!1,disabled:c=!1,icon:l,children:n}=o,{activeStep:u,handleStepChange:S}=oe(),d=u===e,b={state:le(d,r,c)},k=a.useMemo(()=>r?t(D,{icon:U,iconSize:i.iconSize}):l!==void 0?t(D,{icon:l,iconSize:i.iconSize}):e+1,[r,l,e]);return t(pe,{"aria-current":d?"step":void 0,children:m(ge,{...b,as:S?"button":"div",onClick:!c&&S?()=>S(e):void 0,disabled:c,children:[t(me,{...b,"aria-hidden":!0,children:k}),m(Se,{...b,children:[t(re,{as:"span",children:ve(d,r,e)}),n]})]})})};L.displayName="ProgressTracker.Item";const he=C.ol`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${h.itemsWrapper.gap};
  margin: 0;
  padding: 0;
`,ue=C.div`
  margin-left: calc(
    (${h.itemNumber.size} / 2) -
      (${h.connector.width} / 2)
  );
  height: ${h.connector.height};
  border-right: ${h.connector.width} solid
    ${h.connector.color};
`,p=(()=>{const o=a.forwardRef((e,r)=>{const{id:c,activeStep:l=0,onStepChange:n,children:u,className:S,htmlProps:d,...b}=e,[k,$]=a.useState(l),M=y=>{$(y),n&&n(y)};a.useEffect(()=>{l!==void 0&&l!=k&&$(l)},[l,k]);const R={...Y(c,S,d,b),ref:r},H=a.useMemo(()=>{const y=Ce(u),X=be(y);return ke(X)},[u]);return t(_.Provider,{value:{activeStep:k,handleStepChange:M},children:t("div",{role:"group","aria-label":"progress",...R,children:t(he,{children:H})})})});return o.Item=L,o.displayName="ProgressTracker",o})(),Ce=o=>a.Children.toArray(o).filter(a.isValidElement),be=o=>a.Children.map(o,(e,r)=>a.cloneElement(e,{...e.props,index:r})),ke=o=>a.Children.map(o,(e,r)=>r===0?e:m(a.Fragment,{children:[t(ue,{"aria-hidden":!0}),e]},r)),Ie={title:"dds-components/ProgressTracker",component:p},I=()=>{const[e,r]=a.useState(0),[c,l]=a.useState(new Set);return m(f,{title:"ProgressTracker - overview",display:"block",children:[m(p,{activeStep:e,onStepChange:n=>r(n),htmlProps:{style:{maxWidth:"800px"}},children:[t(p.Item,{completed:c.has(0),children:"Partopplysninger"}),t(p.Item,{completed:c.has(1),children:"Slutning"}),t(p.Item,{completed:c.has(2),children:"Vedlegg"}),t(p.Item,{completed:c.has(3),disabled:!0,children:"Sammendrag"})]}),m("div",{style:{margin:"10px"},children:[e===0&&t("div",{children:"Steg 1"}),e===1&&t("div",{children:"Steg 2"}),e===2&&t("div",{children:"Steg 3"}),e===3&&t("div",{children:"Steg 4"})]}),t(T,{onClick:()=>{l(n=>new Set([...n,e])),e<3-1&&r(n=>n+1)},label:"Sett som ferdig"})]})},x=()=>{const[e,r]=a.useState(0),[c,l]=a.useState(new Set);return m(f,{title:"ProgressTracker - with icons",display:"block",children:[m(p,{activeStep:e,htmlProps:{style:{maxWidth:"800px"}},onStepChange:n=>r(n),children:[t(p.Item,{icon:Z,completed:c.has(0),children:"Partopplysninger"}),t(p.Item,{icon:q,completed:c.has(1),children:"Vedlegg"}),t(p.Item,{icon:J,completed:c.has(2),children:"Slutning"}),t(p.Item,{icon:K,completed:c.has(3),disabled:!0,children:"Sammendrag"})]}),m("div",{style:{margin:"10px"},children:[e===0&&t("div",{children:"Steg 1"}),e===1&&t("div",{children:"Steg 2"}),e===2&&t("div",{children:"Steg 3"}),e===3&&t("div",{children:"Steg 4"})]}),t(T,{onClick:()=>{l(n=>new Set([...n,e])),e<3-1&&r(n=>n+1)},label:"Sett som ferdig"})]})},P=()=>{const[e,r]=a.useState(0),[c,l]=a.useState(new Set),n=Math.max(...Array.from(c),-1),u=()=>{l(d=>new Set([...d,e])),e<3-1&&r(d=>d+1)},S=d=>d>n+1;return m(f,{title:"ProgressTracker - disabled steps",display:"block",children:[m(p,{activeStep:e,htmlProps:{style:{maxWidth:"800px"}},onStepChange:d=>r(d),children:[t(p.Item,{disabled:S(0),completed:c.has(0),children:"Partopplysninger"}),t(p.Item,{disabled:S(1),completed:c.has(1),children:"Slutning"}),t(p.Item,{disabled:S(2),completed:c.has(2),children:"Vedlegg"})]}),m("div",{style:{margin:"10px"},children:[e===0&&t("div",{children:"Steg 1"}),e===1&&t("div",{children:"Steg 2"}),e===2&&t("div",{children:"Steg 3"})]}),t(T,{onClick:()=>e>0&&r(d=>d-1),label:"Forrige steg"}),t(T,{onClick:u,label:"Neste steg"})]})};var w,W,N;I.parameters={...I.parameters,docs:{...(w=I.parameters)==null?void 0:w.docs,source:{originalSource:`() => {
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
    }} label="Sett som ferdig" />
    </StoryTemplate>;
}`,...(N=(W=I.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var A,B,z;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
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
    }} label="Sett som ferdig" />
    </StoryTemplate>;
}`,...(z=(B=x.parameters)==null?void 0:B.docs)==null?void 0:z.source}}};var V,F,G;P.parameters={...P.parameters,docs:{...(V=P.parameters)==null?void 0:V.docs,source:{originalSource:`() => {
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

      <Button onClick={() => activeStep > 0 && setActiveStep(s => s - 1)} label="Forrige steg" />
      <Button onClick={handleSetFinishedButtonClick} label="Neste steg" />
    </StoryTemplate>;
}`,...(G=(F=P.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};const xe=["Overview","WithIcons","FutureStepsDisabled"],Be=Object.freeze(Object.defineProperty({__proto__:null,FutureStepsDisabled:P,Overview:I,WithIcons:x,__namedExportsOrder:xe,default:Ie},Symbol.toStringTag,{value:"Module"}));export{Be as P,p as a};
//# sourceMappingURL=ProgressTracker.stories-5841eb8b.js.map
