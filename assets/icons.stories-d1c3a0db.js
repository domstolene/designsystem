import{s as a,j as n,a as f,d as F}from"./focus-visible-35158c22.js";import{r as i,a as Oe}from"./index-d47b1f5a.js";import{R as Re}from"./storybook-components-cc5979ee.js";import{T as M}from"./dds-typography-e761338c.js";import{q as He,a as re,z as U,A as ae}from"./dds-icons-7a922c3a.js";import{a as Y,G as Le,D as De,Z as Me,H as Ee,S as $e,O as Be,j as je,W as Pe}from"./dds-core-29d22035.js";import{R as Xe,V as J}from"./dds-form-b2eacd8d.js";import{_ as D,B as K}from"./LocalMessage.tokens-64bf0896.js";import{L as Ue}from"./LocalMessage-515d6ad5.js";import{_ as A}from"./tslib.es6-b1ce3a18.js";import{s as E}from"./ScrollableContainer.tokens-c566b166.js";import"./chunk-PCJTTTQV-321daf3b.js";import"./iframe-6f267a68.js";import"../sb-preview/runtime.js";import"./index-db9ff070.js";import"./index-d475d2ea.js";import"./index-356e4a49.js";var q=E.track,G=E.thumb,se=E.minThumbHeightPx,Ge=a.div.withConfig({displayName:"Scrollbar__ScrollbarOuterWrapper",componentId:"sc-mphi5n-0"})([""]),We=a.div.withConfig({displayName:"Scrollbar__ScrollbarElements",componentId:"sc-mphi5n-1"})(["display:block;height:100%;position:relative;display:grid;justify-items:center;"]),Ke=a.div.withConfig({displayName:"Scrollbar__Track",componentId:"sc-mphi5n-2"})(["bottom:0;top:0;position:absolute;background-color:",";border-radius:",";width:",";"],q.backgroundColor,q.borderRadius,q.width),Ye=a.div.withConfig({displayName:"Scrollbar__Thumb",componentId:"sc-mphi5n-3"})(["position:absolute;background-color:",";border-radius:",";width:",";transition:background-color 0.2s;&:hover{background-color:",";}"],G.base.backgroundColor,G.base.borderRadius,G.base.width,G.hover.backgroundColor),ge=function(o){var u=o.id,l=o.className,h=o.htmlProps,t=o.contentRef,b=A(o,["id","className","htmlProps","contentRef"]),s=i.useRef(null),m=i.useRef(null),d=i.useState(se),k=D(d,2),g=k[0],$=k[1],B=i.useState(!0),w=D(B,2),R=w[0],H=w[1],x=i.useState(0),_=D(x,2),I=_[0],r=_[1],v=i.useRef(null),T=i.useState(0),z=D(T,2),L=z[0],j=z[1],Se=i.useState(0),ne=D(Se,2),be=ne[0],Ce=ne[1],ke=i.useState(!1),oe=D(ke,2),X=oe[0],te=oe[1];function we(c,y){var p=c.clientHeight,C=c.scrollHeight;H(p!==C),$(Math.max(p/C*y,se))}var Ie=i.useCallback(function(c){if(t&&t.current){var y=s.current,p=t.current;if(y&&p){var C=c.clientY,N=c.target,Z=N.getBoundingClientRect(),xe=Z.top,_e=-(g/2),ze=(C-xe+_e)/y.clientHeight,Ne=Math.floor(ze*p.scrollHeight);p.scrollTo({top:Ne,behavior:"smooth"})}}},[g]),ie=i.useCallback(function(){if(!(!(t!=null&&t.current)||!s.current||!m.current)){var c=t.current,y=c.scrollTop,p=c.scrollHeight,C=s.current.clientHeight,N=+y/+p*C;N=Math.min(N,C-g),r(N)}},[]);i.useEffect(function(){if(t&&t.current&&s.current){var c=t.current,y=s.current.clientHeight;return v.current=new ResizeObserver(function(){we(c,y)}),v.current.observe(c),c.addEventListener("scroll",ie),function(){var p;(p=v.current)===null||p===void 0||p.unobserve(c),c.removeEventListener("scroll",ie)}}},[]);var Te=i.useCallback(function(c){j(c.clientY),t&&t.current&&Ce(t.current.scrollTop),te(!0)},[]),P=i.useCallback(function(){X&&te(!1)},[X]),V=i.useCallback(function(c){if(t&&t.current&&X){var y=t.current,p=y.scrollHeight,C=y.offsetHeight,N=(c.clientY-L)*(C/g),Z=Math.min(be+N,p-C);t.current.scrollTop=Z}},[X,L,g]);return i.useEffect(function(){return document.addEventListener("mousemove",V),document.addEventListener("mouseup",P),document.addEventListener("mouseleave",P),function(){document.removeEventListener("mousemove",V),document.removeEventListener("mouseup",P),document.removeEventListener("mouseleave",P)}},[V,P]),R?n(Ge,Object.assign({},Y(u,l,h,b),{children:f(We,{children:[n(Ke,{ref:s,onClick:Ie}),n(Ye,{style:{height:g,top:I},ref:m,onMouseDown:Te})]})})):null};ge.displayName="Scrollbar";var Ae=E.track,Ve=E.content,Ze=E.outerContainer,qe=a.div.withConfig({displayName:"ScrollableContainer__StyledScrollableContainer",componentId:"sc-t0dczu-0"})(["grid-template:auto / 1fr ",";overflow:hidden;position:relative;display:grid;padding:",";"],Ae.width,Ze.padding),Je=a.div.withConfig({displayName:"ScrollableContainer__Content",componentId:"sc-t0dczu-1"})(["height:",";overflow:auto;scrollbar-width:none;::-webkit-scrollbar{display:none;}padding-right:",";@media (prefers-reduced-motion:no-preference){transition:",";}:focus-visible,.focus-visible{outline:",";outline-offset:",";}"],function(e){var o=e.height;return o},Ve.paddingRight,Xe,J.outline,J.outlineOffset),ve=function(o){var u=o.children,l=o.id,h=o.className,t=o.contentHeight,b=t===void 0?"90vh":t,s=o.htmlProps,m=A(o,["children","id","className","contentHeight","htmlProps"]),d=i.useRef(null);return f(qe,Object.assign({},Y(l,h,s,m),{children:[n(Je,{height:b,ref:d,tabIndex:0,children:u}),n(ge,{contentRef:d})]}))};ve.displayName="ScrollableContainer";var O=F.spacing,Fe={padding:"".concat(O.SizesDdsSpacingLocalX1," ").concat(O.SizesDdsSpacingLocalX1," ").concat(O.SizesDdsSpacingLocalX15," ").concat(O.SizesDdsSpacingLocalX15)},Qe={paddingRight:O.SizesDdsSpacingLocalX1,gap:O.SizesDdsSpacingLocalX1},en={gap:O.SizesDdsSpacingLocalX1},ye={container:Fe,contentContainer:Qe,actionsContainer:en},nn=a.div.withConfig({displayName:"Backdrop",componentId:"sc-xbvk9r-0"})(["position:fixed;display:flex;align-items:center;justify-content:center;background-color:",";overflow-y:auto;top:0;right:0;bottom:0;left:0;z-index:200;opacity:",";@media (prefers-reduced-motion:no-preference){transition:opacity 0.2s;}"],Le(F.colors.DdsColorNeutralsGray9,.5),function(e){var o=e.isOpen;return o?1:0}),on=function(o){return o.clientHeight>window.innerHeight};function tn(e){if(on(e)){var o=Math.round(window.scrollY);e.style.overflowY="scroll",e.style.position="fixed",e.style.top="-".concat(o,"px")}}function rn(e){var o=parseInt(document.body.style.top)||0;e.style.removeProperty("overflow-y"),e.style.removeProperty("position"),e.style.removeProperty("top"),window.scrollTo(0,o*-1)}var an=ye.container,ce=ye.contentContainer,sn=a(De).withConfig({displayName:"Modal__Container",componentId:"sc-12c14zx-0"})(["display:flex;flex-direction:column-reverse;min-width:200px;padding:",";&::selection,*::selection{","}:focus-visible,&.focus-visible{","}"],an.padding,Me,J),cn=a.div.withConfig({displayName:"Modal__ContentContainer",componentId:"sc-12c14zx-1"})(["display:grid;padding-right:",";gap:",";"],ce.paddingRight,ce.gap),ln=a.div.withConfig({displayName:"Modal__HeaderContainer",componentId:"sc-12c14zx-2"})([""]),dn=a(K).withConfig({displayName:"Modal__StyledButton",componentId:"sc-12c14zx-3"})(["align-self:flex-end;"]),Q=i.forwardRef(function(e,o){var u=e.isOpen,l=u===void 0?!1:u,h=e.parentElement,t=h===void 0?document.body:h,b=e.children,s=e.header,m=e.onClose,d=e.id,k=e.triggerRef,g=e.className,$=e.htmlProps,B=A(e,["isOpen","parentElement","children","header","onClose","id","triggerRef","className","htmlProps"]),w=i.useId(),R=d??"".concat(w,"-modal"),H="".concat(R,"-header"),x=Ee(l),_=$e(o,x),I=function(){var j;m&&l&&(k&&((j=k.current)===null||j===void 0||j.focus()),m())};i.useEffect(function(){l?tn(document.body):rn(document.body)},[l]),Be(x.current,function(){return I()}),je(["Escape","Esc"],function(){return I()});var r=Pe(l,200),v={isOpen:r&&l},T=Object.assign(Object.assign({},Y(d,g,$,B)),{ref:_,role:"dialog","aria-modal":!0,"aria-hidden":!l,tabIndex:-1,"aria-labelledby":H,id:R}),z={id:H};return l||r?Oe.createPortal(n(nn,Object.assign({},v,{children:f(sn,Object.assign({},T,{elevation:4,children:[f(cn,{children:[s&&n(ln,Object.assign({},z,{children:typeof s=="string"?n(M,{typographyType:"headingSans03",children:s}):s})),b]}),m&&n(dn,{size:"small",appearance:"borderless",purpose:"secondary",icon:He,onClick:I,"aria-label":"Lukk dialog"})]}))})),t):null});Q.displayName="Modal";Q.__docgenInfo={description:"",methods:[],displayName:"Modal"};var le=a.div.withConfig({displayName:"ModalBody__Container",componentId:"sc-134o0zg-0"})([""]),ee=i.forwardRef(function(e,o){var u=e.children,l=e.scrollable,h=e.id,t=e.className,b=e.htmlProps,s=e.height,m=A(e,["children","scrollable","id","className","htmlProps","height"]),d=Object.assign(Object.assign({},Y(h,t,b,m)),{ref:o});return l?n(le,Object.assign({},d,{children:n(ve,{contentHeight:s,children:u})})):n(le,Object.assign({},d,{children:u}))});ee.displayName="ModalBody";ee.__docgenInfo={description:"",methods:[],displayName:"ModalBody"};const{colors:fe,spacing:S,borderRadius:pn}=F,Mn={title:"Icons/Overview"},mn=a.div`
  padding: ${S.SizesDdsSpacingLocalX05}
    ${S.SizesDdsSpacingLocalX025};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: ${S.SizesDdsSpacingLocalX075};
  width: 80px;
  @media only screen and (min-width: 1400px) {
    width: 100px;
  }
  transition: background-color 0.2s;
  &:hover {
    background-color: ${fe.DdsColorInteractiveLightest};
  }
`,un=a.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: ${S.SizesDdsSpacingLocalX05};
`,hn=a.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${S.SizesDdsSpacingLayoutX15};
  max-width: 800px;
  margin: auto;
  @media only screen and (min-width: 1400px) {
    max-width: 1150px;
  }
  @media only screen and (min-width: 1600px) {
    max-width: 1350px;
  }
`,gn=a(M)`
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  text-align: center;
`,vn=a.div`
  position: absolute;
  right: 50%;
`,de=a.div`
  display: flex;
  align-items: center;
  gap: ${S.SizesDdsSpacingLocalX025};
  position: relative;
`,pe=a.div`
  background-color: ${fe.DdsColorNeutralsGray8};
  padding: ${S.SizesDdsSpacingLocalX05} ${S.SizesDdsSpacingLocalX1};
  margin: ${S.SizesDdsSpacingLayoutX1} 0;
  border-radius: ${pn.RadiiDdsBorderRadius1Radius};
  code {
    color: white;
  }
`,yn=a.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${S.SizesDdsSpacingLocalX05};
  margin-bottom: ${S.SizesDdsSpacingLocalX1};
`,W=()=>{const[e,o]=i.useState(),[u,l]=i.useState(!0),[h,t]=i.useState(!1),[b,s]=i.useState(!1),m=()=>{l(!0)};i.useEffect(()=>{const r=setTimeout(()=>t(!1),2e3);return()=>clearTimeout(r)},[h]),i.useEffect(()=>{const r=setTimeout(()=>s(!1),2e3);return()=>clearTimeout(r)},[b]);const d=(r,v)=>{o({name:r,icon:v}),l(!1)},k=r=>{navigator.clipboard.writeText(r)},g=r=>r.replace("Icon",""),$=r=>{k(r),t(!0)},B=r=>{k(r),s(!0)},w=Object.keys(re).sort(),R=re,H=()=>{const r=[];for(let v=0;v<w.length;v++){const T=w[v],z=R[T],L=g(T);r.push(f(mn,{onClick:()=>d(T,z),title:L,children:[n(U,{iconSize:"large",icon:z}),n(gn,{typographyType:"supportingStyleTiny01",children:L})]},T))}return r},x=`import { ${e==null?void 0:e.name} } from '@norges-domstoler/dds-components';`,_=`<Icon icon={${e==null?void 0:e.name}} />`,I=n(vn,{children:n(Ue,{width:"fit-content",message:"kopiert",purpose:"success"})});return n(Re,{title:"Icons - overview",display:"block",children:f(hn,{children:[n(M,{typographyType:"bodySans03",children:"Klikk på ikonet for mer info."}),f(M,{typographyType:"supportingStyleHelperText01",children:["Antall ikoner: ",w.length]}),n(un,{children:H()}),n(Q,{isOpen:!u,onClose:m,header:(e==null?void 0:e.name)&&g(e.name),children:f(ee,{children:[e&&f(yn,{children:[n(U,{icon:e.icon,iconSize:"small"}),n(U,{icon:e.icon,iconSize:"medium"}),n(U,{icon:e.icon,iconSize:"large"}),n(K,{icon:e.icon})]}),f(de,{children:[n(M,{typographyType:"headingSans02",children:"Import"}),n(K,{icon:ae,size:"tiny",appearance:"borderless",onClick:()=>B(x)}),b&&I]}),n(pe,{className:"icon-code",children:n("code",{children:x})}),f(de,{children:[n(M,{typographyType:"headingSans02",children:"Bruk"}),n(K,{icon:ae,size:"tiny",appearance:"borderless",onClick:()=>$(_)}),h&&I]}),n(pe,{className:"icon-code",children:n("code",{children:_})})]})})]})})};var me,ue,he;W.parameters={...W.parameters,docs:{...(me=W.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
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
}`,...(he=(ue=W.parameters)==null?void 0:ue.docs)==null?void 0:he.source}}};const En=["Overview"];export{W as Overview,En as __namedExportsOrder,Mn as default};
//# sourceMappingURL=icons.stories-d1c3a0db.js.map
