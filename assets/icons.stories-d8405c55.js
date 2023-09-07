import{d as j,s as t,a as n,j as l}from"./ddsReferenceTokens-f1d35829.js";import{r as s,a as Z}from"./index-d47b1f5a.js";import{R as ee}from"./storybook-components-be8d83b8.js";import{T as S}from"./dds-typography-cc6cb429.js";import{q as ne,a as R,i as N,A as P}from"./dds-icons-265d9665.js";import"./focus-visible-bfce03b6.js";import{G as oe,x as te,Q as ie,X as ae,S as re,_ as se,O as ce,K as de,a as V}from"./dds-core-c67132cd.js";import{_ as le}from"./dds-form-9b45fc8d.js";import{B as _}from"./LocalMessage.tokens-d952e602.js";import{L as pe}from"./LocalMessage-97c12a2a.js";import{_ as q}from"./tslib.es6-49c71693.js";import{S as me}from"./ScrollableContainer-fdff97a3.js";import"./chunk-PCJTTTQV-6c404da6.js";import"./iframe-e2c2ba07.js";import"../sb-preview/runtime.js";import"./index-db9ff070.js";import"./index-d475d2ea.js";import"./index-356e4a49.js";import"./ScrollableContainer.tokens-85e346c5.js";var u=j.spacing,ye={padding:"".concat(u.SizesDdsSpacingLocalX1," ").concat(u.SizesDdsSpacingLocalX1," ").concat(u.SizesDdsSpacingLocalX15," ").concat(u.SizesDdsSpacingLocalX15)},ge={paddingRight:u.SizesDdsSpacingLocalX1,gap:u.SizesDdsSpacingLocalX1},ue={gap:u.SizesDdsSpacingLocalX1},J={container:ye,contentContainer:ge,actionsContainer:ue},he=t.div.withConfig({displayName:"Backdrop",componentId:"sc-xbvk9r-0"})(["position:fixed;display:flex;align-items:center;justify-content:center;background-color:",";overflow-y:auto;top:0;right:0;bottom:0;left:0;z-index:200;opacity:",";@media (prefers-reduced-motion:no-preference){transition:opacity 0.2s;}"],oe(j.colors.DdsColorNeutralsGray9,.5),function(e){var i=e.isOpen;return i?1:0}),fe=function(i){return i.clientHeight>window.innerHeight};function ve(e){if(fe(e)){var i=Math.round(window.scrollY);e.style.overflowY="scroll",e.style.position="fixed",e.style.top="-".concat(i,"px")}}function H(e){var i=parseInt(document.body.style.top)||0;e.style.removeProperty("overflow-y"),e.style.removeProperty("position"),e.style.removeProperty("top"),window.scrollTo(0,i*-1)}var Ce=J.container,U=J.contentContainer,Se=t(te).withConfig({displayName:"Modal__Container",componentId:"sc-12c14zx-0"})(["display:flex;flex-direction:column-reverse;min-width:200px;padding:",";&::selection,*::selection{","}:focus-visible,&.focus-visible{","}"],Ce.padding,ie,le),xe=t.div.withConfig({displayName:"Modal__ContentContainer",componentId:"sc-12c14zx-1"})(["display:grid;padding-right:",";gap:",";"],U.paddingRight,U.gap),we=t.div.withConfig({displayName:"Modal__HeaderContainer",componentId:"sc-12c14zx-2"})([""]),Ie=t(_).withConfig({displayName:"Modal__StyledButton",componentId:"sc-12c14zx-3"})(["align-self:flex-end;"]),X=s.forwardRef(function(e,i){var p=e.isOpen,a=p===void 0?!1:p,m=e.parentElement,h=m===void 0?document.body:m,f=e.children,c=e.header,y=e.onClose,d=e.id,x=e.triggerRef,b=e.className,D=e.htmlProps,$=q(e,["isOpen","parentElement","children","header","onClose","id","triggerRef","className","htmlProps"]),w=s.useId(),k=d??"".concat(w,"-modal"),T="".concat(k,"-header"),I=ae(a),z=re(i,I),v=function(){var M;y&&a&&(x&&((M=x.current)===null||M===void 0||M.focus()),y())};s.useEffect(function(){return a?ve(document.body):H(document.body),function(){return H(document.body)}},[a]),se(I.current,function(){return v()}),ce(["Escape","Esc"],function(){return v()});var o=de(a,200),g={isOpen:o&&a},C=Object.assign(Object.assign({},V(d,b,D,$)),{ref:z,role:"dialog","aria-modal":!0,"aria-hidden":!a,tabIndex:-1,"aria-labelledby":T,id:k}),O={id:T};return a||o?Z.createPortal(n(he,Object.assign({},g,{children:l(Se,Object.assign({},C,{elevation:4,children:[l(xe,{children:[c&&n(we,Object.assign({},O,{children:typeof c=="string"?n(S,{typographyType:"headingSans03",children:c}):c})),f]}),y&&n(Ie,{size:"small",appearance:"borderless",purpose:"secondary",icon:ne,onClick:v,"aria-label":"Lukk dialog"})]}))})),h):null});X.displayName="Modal";X.__docgenInfo={description:"",methods:[],displayName:"Modal"};var G=t.div.withConfig({displayName:"ModalBody__Container",componentId:"sc-134o0zg-0"})([""]),E=s.forwardRef(function(e,i){var p=e.children,a=e.scrollable,m=e.id,h=e.className,f=e.htmlProps,c=e.height,y=q(e,["children","scrollable","id","className","htmlProps","height"]),d=Object.assign(Object.assign({},V(m,h,f,y)),{ref:i});return a?n(G,Object.assign({},d,{children:n(me,{contentHeight:c,children:p})})):n(G,Object.assign({},d,{children:p}))});E.displayName="ModalBody";E.__docgenInfo={description:"",methods:[],displayName:"ModalBody"};const{colors:F,spacing:r,borderRadius:be}=j,qe={title:"Icons/Overview"},ke=t.div`
  padding: ${r.SizesDdsSpacingLocalX05}
    ${r.SizesDdsSpacingLocalX025};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: ${r.SizesDdsSpacingLocalX075};
  width: 80px;
  @media only screen and (min-width: 1400px) {
    width: 100px;
  }
  transition: background-color 0.2s;
  &:hover {
    background-color: ${F.DdsColorInteractiveLightest};
  }
`,Te=t.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: ${r.SizesDdsSpacingLocalX05};
`,ze=t.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${r.SizesDdsSpacingLayoutX15};
  max-width: 800px;
  margin: auto;
  @media only screen and (min-width: 1400px) {
    max-width: 1150px;
  }
  @media only screen and (min-width: 1600px) {
    max-width: 1350px;
  }
`,Oe=t(S)`
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  text-align: center;
`,Ne=t.div`
  position: absolute;
  right: 50%;
`,K=t.div`
  display: flex;
  align-items: center;
  gap: ${r.SizesDdsSpacingLocalX025};
  position: relative;
`,W=t.div`
  background-color: ${F.DdsColorNeutralsGray8};
  padding: ${r.SizesDdsSpacingLocalX05} ${r.SizesDdsSpacingLocalX1};
  margin: ${r.SizesDdsSpacingLayoutX1} 0;
  border-radius: ${be.RadiiDdsBorderRadius1Radius};
  code {
    color: white;
  }
`,Be=t.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${r.SizesDdsSpacingLocalX05};
  margin-bottom: ${r.SizesDdsSpacingLocalX1};
`,B=()=>{const[e,i]=s.useState(),[p,a]=s.useState(!0),[m,h]=s.useState(!1),[f,c]=s.useState(!1),y=()=>{a(!0)};s.useEffect(()=>{const o=setTimeout(()=>h(!1),2e3);return()=>clearTimeout(o)},[m]),s.useEffect(()=>{const o=setTimeout(()=>c(!1),2e3);return()=>clearTimeout(o)},[f]);const d=(o,g)=>{i({name:o,icon:g}),a(!1)},x=o=>{navigator.clipboard.writeText(o)},b=o=>o.replace("Icon",""),D=o=>{x(o),h(!0)},$=o=>{x(o),c(!0)},w=Object.keys(R).sort(),k=R,T=()=>{const o=[];for(let g=0;g<w.length;g++){const C=w[g],O=k[C],L=b(C);o.push(l(ke,{onClick:()=>d(C,O),title:L,children:[n(N,{iconSize:"large",icon:O}),n(Oe,{typographyType:"supportingStyleTiny01",children:L})]},C))}return o},I=`import { ${e==null?void 0:e.name} } from '@norges-domstoler/dds-components';`,z=`<Icon icon={${e==null?void 0:e.name}} />`,v=n(Ne,{children:n(pe,{width:"fit-content",message:"kopiert",purpose:"success"})});return n(ee,{title:"Icons - overview",display:"block",children:l(ze,{children:[n(S,{typographyType:"bodySans03",children:"Klikk på ikonet for mer info."}),l(S,{typographyType:"supportingStyleHelperText01",children:["Antall ikoner: ",w.length]}),n(Te,{children:T()}),n(X,{isOpen:!p,onClose:y,header:(e==null?void 0:e.name)&&b(e.name),children:l(E,{children:[e&&l(Be,{children:[n(N,{icon:e.icon,iconSize:"small"}),n(N,{icon:e.icon,iconSize:"medium"}),n(N,{icon:e.icon,iconSize:"large"}),n(_,{icon:e.icon})]}),l(K,{children:[n(S,{typographyType:"headingSans02",children:"Import"}),n(_,{icon:P,size:"tiny",appearance:"borderless",onClick:()=>$(I)}),f&&v]}),n(W,{className:"icon-code",children:n("code",{children:I})}),l(K,{children:[n(S,{typographyType:"headingSans02",children:"Bruk"}),n(_,{icon:P,size:"tiny",appearance:"borderless",onClick:()=>D(z)}),m&&v]}),n(W,{className:"icon-code",children:n("code",{children:z})})]})})]})})};var A,Y,Q;B.parameters={...B.parameters,docs:{...(A=B.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
  const [iconState, setIconState] = useState<{
    name: string;
    icon: SvgIcon;
  } | undefined>();
  const [closed, setClosed] = useState(true);
  const [copiedUse, setCopiedUse] = useState(false);
  const [copiedImport, setCopiedImport] = useState(false);
  const close = () => {
    setClosed(true);
  };
  useEffect(() => {
    const timer = setTimeout(() => setCopiedUse(false), 2000);
    return () => clearTimeout(timer);
  }, [copiedUse]);
  useEffect(() => {
    const timer = setTimeout(() => setCopiedImport(false), 2000);
    return () => clearTimeout(timer);
  }, [copiedImport]);
  const onIconClick = (name: string, icon: SvgIcon) => {
    setIconState({
      name: name,
      icon: icon
    });
    setClosed(false);
  };
  const copy = (text: string) => {
    navigator.clipboard.writeText(text);
  };
  const trim = (name: string) => {
    return name.replace("Icon", "");
  };
  const handleCopyUse = (text: string) => {
    copy(text);
    setCopiedUse(true);
  };
  const handleCopyImport = (text: string) => {
    copy(text);
    setCopiedImport(true);
  };
  const iconKeys = Object.keys(icons).sort();
  const iconsObject = (icons as {
    [key: string]: (props: SvgProps) => JSX.Element;
  });
  const iconOverview = () => {
    const overview = [];
    for (let i = 0; i < iconKeys.length; i++) {
      const key = iconKeys[i];
      const value = iconsObject[key];
      const trimmedName = trim(key);
      overview.push(<IconContainer key={key} onClick={() => onIconClick(key, value)} title={trimmedName}>
          <Icon iconSize="large" icon={value} />
          <Name typographyType="supportingStyleTiny01">{trimmedName}</Name>
        </IconContainer>);
    }
    return overview;
  };
  const importCode = \`import { \${iconState?.name} } from '@norges-domstoler/dds-components';\`;
  const useCode = \`<Icon icon={\${iconState?.name}} />\`;
  const copyConfirmation = <MessageWrapper>
      <LocalMessage width="fit-content" message="kopiert" purpose="success" />
    </MessageWrapper>;
  return <StoryTemplate title="Icons - overview" display="block">
      <Container>
        <Typography typographyType="bodySans03">
          Klikk på ikonet for mer info.
        </Typography>
        <Typography typographyType="supportingStyleHelperText01">
          Antall ikoner: {iconKeys.length}
        </Typography>
        <OverviewContainer>{iconOverview()}</OverviewContainer>
        <Modal isOpen={!closed} onClose={close} header={iconState?.name && trim(iconState.name)}>
          <ModalBody>
            {iconState && <IconRow>
                <Icon icon={iconState.icon} iconSize="small" />
                <Icon icon={iconState.icon} iconSize="medium" />
                <Icon icon={iconState.icon} iconSize="large" />
                <Button icon={iconState.icon} />
              </IconRow>}
            <GroupHeader>
              <Typography typographyType="headingSans02">Import</Typography>
              <Button icon={CopyIcon} size="tiny" appearance="borderless" onClick={() => handleCopyImport(importCode)} />
              {copiedImport && copyConfirmation}
            </GroupHeader>
            <CodeBlock className="icon-code">
              <code>{importCode}</code>
            </CodeBlock>
            <GroupHeader>
              <Typography typographyType="headingSans02">Bruk</Typography>
              <Button icon={CopyIcon} size="tiny" appearance="borderless" onClick={() => handleCopyUse(useCode)} />
              {copiedUse && copyConfirmation}
            </GroupHeader>
            <CodeBlock className="icon-code">
              <code>{useCode}</code>
            </CodeBlock>
          </ModalBody>
        </Modal>
      </Container>
    </StoryTemplate>;
}`,...(Q=(Y=B.parameters)==null?void 0:Y.docs)==null?void 0:Q.source}}};const Je=["Overview"];export{B as Overview,Je as __namedExportsOrder,qe as default};
//# sourceMappingURL=icons.stories-d8405c55.js.map
