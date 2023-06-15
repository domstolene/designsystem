import{d as ge,s as T,a as f,j as e}from"./focus-visible-c2e9b88d.js";import{R as b}from"./storybook-components-045061bd.js";import{r as a}from"./index-ebeaab24.js";import{d as me,e as fe}from"./Typography.utils-99dd1e07.js";import{P as Te}from"./Paper-12ce52e7.js";import{v as be}from"./visibilityTransition-933c6349.js";import{u as xe}from"./useFloatPosition-f03daf4a.js";import{u as he}from"./useCombinedRefs-40b11bb4.js";import{u as ye}from"./useOnKeyDown-4552d984.js";import{c as m}from"./combineHandlers-f6d4455a.js";import{g as ke}from"./BaseComponentProps-bb0d5515.js";import{H as r}from"./help-e23054c9.js";import{B as o}from"./Button-2e74127f.js";const{colors:I,spacing:ve}=ge,Ve={padding:`${ve.SizesDdsSpacingLocalX075}`},we={border:{fill:I.DdsColorPrimaryLighter},background:{fill:I.DdsColorNeutralsWhite}},N={wrapper:Ve,svgArrow:we},{wrapper:ze}=N,Se=T.svg`
  width: 36px;
  height: 9px;
`,Be=T.div``,Ie=T.div`
  width: fit-content;
`,He=T(Te)`
  ${({open:n})=>be(n)}
  width: fit-content;
  position: absolute;
  z-index: 80;
  text-align: center;
  padding: ${ze.padding};
  ${me(fe)};
`,{svgArrow:H}=N,t=a.forwardRef((n,W)=>{const{text:F,placement:K="bottom",children:x,tooltipId:q,delay:X=100,style:G,onMouseLeave:J,onMouseOver:Q,id:U,className:Y,htmlProps:Z,...ee}=n,te=a.useId(),v=q??`${te}-tooltip`,[u,h]=a.useState(!1),[oe,V]=a.useState(!1),[re,ae]=a.useState(null),{reference:ne,floating:le,styles:w}=xe(re,{placement:K}),i=a.useRef(null),ie=he(W,le,i),pe=k=>{const[l]=k;l.isIntersecting?V(!0):V(!1)};a.useEffect(()=>{const k={root:null,rootMargin:"0px"},l=i.current,B=new IntersectionObserver(pe,k);return l&&B.observe(l),()=>{l&&B.unobserve(l)}},[i]),a.useEffect(()=>(i.current&&window.addEventListener("scroll",()=>{y()}),()=>{i.current&&window.removeEventListener("scroll",()=>{})}),[]);let g;a.useEffect(()=>()=>{clearTimeout(g)},[]),ye(["Escape","Esc"],()=>{u&&h(!1)});const y=()=>{clearTimeout(g),h(!1)},z=()=>{u||(clearTimeout(g),g=setTimeout(()=>h(!0),X))},S=x.props,se=a.Children.only(a.isValidElement(x)&&a.cloneElement(x,{ref:ne,onFocus:m(z,S.onFocus),onBlur:m(y,S.onBlur),"aria-describedby":v})),ce={...ke(U,Y,Z,ee),style:G,onMouseLeave:m(y,J),onMouseOver:m(z,Q)},de={id:v,ref:ie,role:"tooltip","aria-hidden":!u,open:u&&oe,style:{...w.floating}},ue={ref:ae,style:w.arrow};return f(Ie,{...ce,children:[se,f(He,{...de,elevation:1,border:"light",children:[F,e(Be,{...ue,children:f(Se,{children:[e("path",{d:"M16.586 6.586L10 0h16.154a.373.373 0 00-.263.11l-6.477 6.476a2 2 0 01-2.828 0z",fill:H.background.fill}),e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M26.5.5l-6.732 6.94a2.5 2.5 0 01-3.536 0L9.5.5H11l5.94 6.232a1.5 1.5 0 002.12 0L25 .5h1.5z",fill:H.border.fill})]})})]})]})});t.displayName="Tooltip";const Ce={title:"dds-components/Tooltip",component:t,argTypes:{text:{control:{type:"text"}}},parameters:{controls:{exclude:["style","className"]}}},p=()=>f(b,{title:"Tooltip - overview",display:"grid",containerStyle:{alignContent:"center",justifyContent:"center",padding:"70px 40px 70px 40px"},children:[e(t,{placement:"top",text:"top",children:e(o,{size:"large",icon:r,appearance:"rounded","aria-label":"Vis forklaring"})}),e(t,{placement:"top-start",text:"top-start",children:e(o,{size:"large",icon:r,appearance:"rounded","aria-label":"Vis forklaring"})}),e(t,{placement:"top-end",text:"top-end",children:e(o,{size:"large",icon:r,appearance:"rounded","aria-label":"Vis forklaring"})}),e(t,{placement:"bottom",text:"bottom",children:e(o,{size:"large",icon:r,appearance:"rounded","aria-label":"Vis forklaring"})}),e(t,{placement:"bottom-start",text:"bottom-start",children:e(o,{size:"large",icon:r,appearance:"rounded","aria-label":"Vis forklaring"})}),e(t,{placement:"bottom-end",text:"bottom-end",children:e(o,{size:"large",icon:r,appearance:"rounded","aria-label":"Vis forklaring"})}),e(t,{placement:"left",text:"left",children:e(o,{size:"large",icon:r,appearance:"rounded","aria-label":"Vis forklaring"})}),e(t,{placement:"left-start",text:"left-start",children:e(o,{size:"large",icon:r,appearance:"rounded","aria-label":"Vis forklaring"})}),e(t,{placement:"left-end",text:"left-end",children:e(o,{size:"large",icon:r,appearance:"rounded","aria-label":"Vis forklaring"})}),e(t,{placement:"right",text:"right",children:e(o,{size:"large",icon:r,appearance:"rounded","aria-label":"Vis forklaring"})}),e(t,{placement:"right-start",text:"right-start",children:e(o,{size:"large",icon:r,appearance:"rounded","aria-label":"Vis forklaring"})}),e(t,{placement:"right-end",text:"right-end",children:e(o,{size:"large",icon:r,appearance:"rounded","aria-label":"Vis forklaring"})})]}),s=n=>e(b,{title:"Tooltip - default",display:"block",children:e(t,{...n,text:"dette er en tooltip",children:e(o,{icon:r,appearance:"rounded","aria-label":"Vis forklaring"})})}),c=n=>e(b,{title:"Tooltip - centered",display:"block",containerStyle:{alignContent:"center",justifyContent:"center",padding:" 100px 50%"},children:e(t,{...n,text:"dette er en tooltip",children:e(o,{icon:r,appearance:"rounded","aria-label":"Vis forklaring"})})}),d=n=>e(b,{title:"Tooltip - text button",display:"block",children:e(t,{...n,text:"dette er en tooltip",children:e(o,{label:"Knapp"})})});var C,E,P;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`() => <StoryTemplate title="Tooltip - overview" display="grid" containerStyle={{
  alignContent: 'center',
  justifyContent: 'center',
  padding: '70px 40px 70px 40px'
}}>
    <Tooltip placement="top" text="top">
      <Button size="large" icon={HelpIcon} appearance="rounded" aria-label="Vis forklaring" />
    </Tooltip>
    <Tooltip placement="top-start" text="top-start">
      <Button size="large" icon={HelpIcon} appearance="rounded" aria-label="Vis forklaring" />
    </Tooltip>
    <Tooltip placement="top-end" text="top-end">
      <Button size="large" icon={HelpIcon} appearance="rounded" aria-label="Vis forklaring" />
    </Tooltip>
    <Tooltip placement="bottom" text="bottom">
      <Button size="large" icon={HelpIcon} appearance="rounded" aria-label="Vis forklaring" />
    </Tooltip>
    <Tooltip placement="bottom-start" text="bottom-start">
      <Button size="large" icon={HelpIcon} appearance="rounded" aria-label="Vis forklaring" />
    </Tooltip>
    <Tooltip placement="bottom-end" text="bottom-end">
      <Button size="large" icon={HelpIcon} appearance="rounded" aria-label="Vis forklaring" />
    </Tooltip>
    <Tooltip placement="left" text="left">
      <Button size="large" icon={HelpIcon} appearance="rounded" aria-label="Vis forklaring" />
    </Tooltip>
    <Tooltip placement="left-start" text="left-start">
      <Button size="large" icon={HelpIcon} appearance="rounded" aria-label="Vis forklaring" />
    </Tooltip>
    <Tooltip placement="left-end" text="left-end">
      <Button size="large" icon={HelpIcon} appearance="rounded" aria-label="Vis forklaring" />
    </Tooltip>
    <Tooltip placement="right" text="right">
      <Button size="large" icon={HelpIcon} appearance="rounded" aria-label="Vis forklaring" />
    </Tooltip>
    <Tooltip placement="right-start" text="right-start">
      <Button size="large" icon={HelpIcon} appearance="rounded" aria-label="Vis forklaring" />
    </Tooltip>
    <Tooltip placement="right-end" text="right-end">
      <Button size="large" icon={HelpIcon} appearance="rounded" aria-label="Vis forklaring" />
    </Tooltip>
  </StoryTemplate>`,...(P=(E=p.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var L,O,j;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`(args: TooltipProps) => <StoryTemplate title="Tooltip - default" display="block">
    <Tooltip {...args} text="dette er en tooltip">
      <Button icon={HelpIcon} appearance="rounded" aria-label="Vis forklaring" />
    </Tooltip>
  </StoryTemplate>`,...(j=(O=s.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var M,R,_;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`(args: TooltipProps) => <StoryTemplate title="Tooltip - centered" display="block" containerStyle={{
  alignContent: 'center',
  justifyContent: 'center',
  padding: ' 100px 50%'
}}>
    <Tooltip {...args} text="dette er en tooltip">
      <Button icon={HelpIcon} appearance="rounded" aria-label="Vis forklaring" />
    </Tooltip>
  </StoryTemplate>`,...(_=(R=c.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var $,A,D;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`(args: TooltipProps) => <StoryTemplate title="Tooltip - text button" display="block">
    <Tooltip {...args} text="dette er en tooltip">
      <Button label="Knapp" />
    </Tooltip>
  </StoryTemplate>`,...(D=(A=d.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};const Ee=["Overview","Default","Centered","TextButton"],Ke=Object.freeze(Object.defineProperty({__proto__:null,Centered:c,Default:s,Overview:p,TextButton:d,__namedExportsOrder:Ee,default:Ce},Symbol.toStringTag,{value:"Module"}));export{Ke as T};
//# sourceMappingURL=Tooltip.stories-b8b550e4.js.map
