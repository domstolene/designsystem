import{d as So,b as mo,s as v,A as C,j as R,a as s}from"./ddsReferenceTokens-f1d35829.js";import{R as ho,r as Do}from"./index-d47b1f5a.js";import{S as $o,c as Co}from"./react-select.esm-e19593b2.js";import{i as D,U as yo,m as A,n as fo}from"./dds-icons-265d9665.js";import{Q as vo,W as Ro,N as xo,E as T}from"./dds-core-c67132cd.js";import{B as G,h as zo,F as Lo,k as Q,w as Io}from"./dds-form-9b45fc8d.js";import{O as g,M as wo}from"./dds-typography-cc6cb429.js";import{s as P}from"./scrollbarStyling-5cc839fb.js";import{g as f}from"./icon-aa5b86b3.js";import{r as Xo}from"./renderInputMessage-d83d5631.js";const{colors:a,spacing:r,borderRadius:h,border:ko}=So,{textDefault:W}=mo,H={medium:"supportingStylePlaceholderText01",small:"supportingStylePlaceholderText02",tiny:"supportingStylePlaceholderText03"},Vo={medium:"bodySans01",small:"bodySans01",tiny:"supportingStyleTiny01"},b={control:G,option:G,placeholder:H,noOptionsMessage:H,groupHeading:"supportingStyleHelperText01",multiValueLabel:Vo},Mo={borderRadius:h.RadiiDdsBorderRadius1Radius,border:`${ko.BordersDdsBorderStyleLightStrokeWeight} solid`,borderColor:a.DdsColorNeutralsGray5,backgroundColor:a.DdsColorNeutralsWhite,color:a.DdsColorNeutralsGray9,disabled:{backgroundColor:a.DdsColorNeutralsGray1,borderColor:a.DdsColorNeutralsGray5},readOnly:{borderColor:"transparent",backgroundColor:"transparent"},isMulti:{sizes:{medium:{padding:`${r.SizesDdsSpacingLocalX075} ${r.SizesDdsSpacingLocalX05} ${r.SizesDdsSpacingLocalX075} ${r.SizesDdsSpacingLocalX075}`},small:{padding:`${r.SizesDdsSpacingLocalX05} ${r.SizesDdsSpacingLocalX05} ${r.SizesDdsSpacingLocalX05} ${r.SizesDdsSpacingLocalX075}`},tiny:{padding:`${r.SizesDdsSpacingLocalX025} ${r.SizesDdsSpacingLocalX05}`}}},sizes:{medium:{padding:`${r.SizesDdsSpacingLocalX075} ${r.SizesDdsSpacingLocalX05} ${r.SizesDdsSpacingLocalX075} ${r.SizesDdsSpacingLocalX075}`},small:{padding:`${r.SizesDdsSpacingLocalX05} ${r.SizesDdsSpacingLocalX05} ${r.SizesDdsSpacingLocalX05} ${r.SizesDdsSpacingLocalX075}`},tiny:{padding:`${r.SizesDdsSpacingLocalX025} ${r.SizesDdsSpacingLocalX05} ${r.SizesDdsSpacingLocalX025} ${r.SizesDdsSpacingLocalX05}`}}},_o={color:a.DdsColorNeutralsGray6},No={base:{color:a.DdsColorNeutralsGray6},hover:{color:a.DdsColorInteractiveBase},readOnly:{color:"transparent"}},Oo={base:{color:a.DdsColorNeutralsGray6},hover:{color:a.DdsColorInteractiveBase}},Bo={color:a.DdsColorNeutralsGray6},To={border:"1px solid",borderColor:a.DdsColorInteractiveBase,backgroundColor:a.DdsColorNeutralsWhite,borderRadius:h.RadiiDdsBorderRadius1Radius,marginTop:r.SizesDdsSpacingLocalX025,marginBottom:r.SizesDdsSpacingLocalX025},Go={color:a.DdsColorNeutralsGray7,padding:`${r.SizesDdsSpacingLocalX05}  ${r.SizesDdsSpacingLocalX075} ${r.SizesDdsSpacingLocalX0125} ${r.SizesDdsSpacingLocalX075}`},Po={base:{gap:r.SizesDdsSpacingLocalX05,padding:`${r.SizesDdsSpacingLocalX075}`,backgroundColor:a.DdsColorNeutralsWhite},hover:{color:W.textColor,backgroundColor:a.DdsColorInteractiveLightest},focus:{color:W.textColor,backgroundColor:a.DdsColorInteractiveLightest},selected:{backgroundColor:a.DdsColorNeutralsWhite}},Wo={padding:`${r.SizesDdsSpacingLocalX05} ${r.SizesDdsSpacingLocalX1}`,color:a.DdsColorNeutralsGray6},Ho={borderRadius:h.RadiiDdsBorderRadius1Radius,backgroundColor:a.DdsColorNeutralsGray2},qo={padding:`0 ${r.SizesDdsSpacingLocalX025}`,color:a.DdsColorNeutralsGray9},Eo={base:{color:a.DdsColorNeutralsGray9,padding:`0 ${r.SizesDdsSpacingLocalX025}`,borderTopRightRadius:h.RadiiDdsBorderRadius1Radius,borderBottomRightRadius:h.RadiiDdsBorderRadius1Radius},hover:{color:a.DdsColorNeutralsWhite,backgroundColor:a.DdsColorInteractiveBase,boxShadow:`inset 0 0 0 1px ${a.DdsColorNeutralsGray9}`}},jo={isMulti:{gap:r.SizesDdsSpacingLocalX025}},Fo={marginRight:r.SizesDdsSpacingLocalX05},U={control:Mo,dropdownIndicator:No,placeholder:_o,menu:To,groupHeading:Go,option:Po,valueContainer:jo,multiValue:Ho,multiValueLabel:qo,multiValueRemove:Eo,noOptionsMessage:Wo,clearIndicator:Oo,loadingIndicator:Bo,icon:Fo},{control:d,menu:c,groupHeading:q,option:t,dropdownIndicator:y,loadingIndicator:Ao,clearIndicator:E,multiValue:Qo,multiValueLabel:j,multiValueRemove:m,noOptionsMessage:F,placeholder:Uo,icon:Yo,valueContainer:Jo}=U,l="dds-select";function Ko(o,e){return e?d.isMulti.sizes[o].padding:d.sizes[o].padding}const Zo=v.div`
  margin: 0;
  width: ${({width:o})=>o};
  position: relative;

  *::selection {
    ${vo}
  }

  ${({componentSize:o,isMulti:e})=>C`
    .${l}__control {
      padding: ${Ko(o,e)};
      ${g(b.control[o],!0)}
    }
    .${l}__option {
      ${g(b.option[o],!0)}
    }
    .${l}__placeholder {
      ${g(b.placeholder[o])}
    }
    .${l}__menu-notice--no-options {
      ${g(b.noOptionsMessage[o])}
    }
  `}

  ${({errorMessage:o})=>o&&C`
      .${l}__control {
        ${zo}
      }
      .${l}__control:hover {
        ${Lo}
      }
      .${l}__control:focus-within {
        ${Q}
      }
    `}

  &:hover
    .${l}__dropdown-indicator,
    &:focus-within
    .${l}__dropdown-indicator {
    color: ${y.hover.color};
  }

  ${({isDisabled:o,readOnly:e})=>e?C`
          .${l}__control {
            border-color: ${d.readOnly.borderColor};
            background-color: ${d.readOnly.backgroundColor};
          }
          .${l}__dropdown-indicator,
            &:hover
            .${l}__dropdown-indicator {
            color: ${y.readOnly.color};
          }
        `:o?C`
          cursor: not-allowed;
          .${l}__control {
            border-color: ${d.disabled.borderColor};
            background-color: ${d.disabled.backgroundColor};
          }
          &:hover .${l}__dropdown-indicator {
            color: ${y.base.color};
          }
        `:""}
`,oe=v.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  box-sizing: border-box;
  max-width: 100%;
`,ee=v(D)`
  margin-right: ${Yo.marginRight};
`,re=o=>({control:()=>({position:"relative",display:"flex",alignItems:"center",flexWrap:"wrap",borderRadius:d.borderRadius,border:d.border,borderColor:d.borderColor,backgroundColor:d.backgroundColor,transition:"box-shadow 0.2s, border-color 0.2s","&:hover":{...Io},"&:focus-within":{...Q}}),placeholder:e=>({...e,color:Uo.color,margin:0}),input:e=>({...e,margin:0,padding:0}),indicatorSeparator:()=>({}),dropdownIndicator:(e,i)=>({display:"inline-flex",transform:i.selectProps.menuIsOpen?"rotate(180deg)":"","@media (prefers-reduced-motion: no-preference)":{transition:"color 0.2s, transform 0.2s"},padding:0,color:y.base.color}),valueContainer:(e,i)=>({...e,...i.selectProps.isMulti&&{gap:Jo.isMulti.gap},padding:0}),singleValue:()=>({gridArea:"1/1/2/3",overflow:"hidden",boxSizing:"border-box"}),multiValue:()=>({boxSizing:"border-box",minWidth:0,display:"flex",borderRadius:Qo.borderRadius,backgroundColor:U.multiValue.backgroundColor}),multiValueLabel:e=>({...e,padding:j.padding,...g(b.multiValueLabel[o]),color:j.color}),multiValueRemove:(e,i)=>i.selectProps.isDisabled?{display:"none"}:{boxSizing:"border-box",display:"flex",alignItems:"center","@media (prefers-reduced-motion: no-preference)":{transition:"color 0.2s, background-color 0.2s, box-shadow 0.2s"},color:m.base.color,padding:m.base.padding,borderTopRightRadius:m.base.borderTopRightRadius,borderBottomRightRadius:m.base.borderBottomRightRadius,"&:hover":{boxShadow:m.hover.boxShadow}},menu:e=>({...e,zIndex:100,transition:"0.2s",width:"calc(100% + 2px)",transform:"translate(-1px)",boxShadow:` 0 0 0 1px ${c.borderColor}`,border:c.border,borderColor:c.borderColor,backgroundColor:c.backgroundColor,borderRadius:c.borderRadius,marginTop:c.marginTop,marginBottom:c.marginBottom}),group:()=>({boxSizing:"border-box"}),groupHeading:()=>({...g(b.groupHeading),color:q.color,padding:q.padding}),menuList:()=>({maxHeight:"300px",overflowY:"auto",position:"relative",boxSizing:"border-box",...P.webkit,...P.firefox}),option:(e,i)=>({...e,cursor:"pointer",display:"flex",alignItems:"center",gap:t.base.gap,padding:t.base.padding,backgroundColor:t.base.backgroundColor,"@media (prefers-reduced-motion: no-preference)":{transition:"color 0.2s, background-color 0.2s"},"&:hover":{color:t.hover.color,backgroundColor:t.hover.backgroundColor},...i.isSelected&&{backgroundColor:t.selected.backgroundColor},...i.isFocused&&{color:t.focus.color,backgroundColor:t.focus.backgroundColor}}),noOptionsMessage:()=>({padding:F.padding,color:F.color}),clearIndicator:()=>({display:"inline-flex",color:E.base.color,"@media (prefers-reduced-motion: no-preference)":{transition:"color 0.2s"},"&:hover":{color:E.hover.color}}),loadingIndicator:e=>({...e,padding:0,color:Ao.color})}),{Option:Y,NoOptionsMessage:ae,Input:ie,SingleValue:se,ClearIndicator:ne,DropdownIndicator:le,MultiValueRemove:de,Control:te}=Co,Me=(...o)=>o.map(e=>({label:e,value:e})),ce=(o,e)=>R(Y,{...o,children:[o.isSelected&&s(D,{icon:yo,iconSize:f(e)}),o.children]}),ue=(o,e)=>s(Y,{...o,children:s(e,{...o})}),pe=(o,e,i)=>s(se,{...o,children:s(oe,{id:e,children:i?s(i,{...o}):o.children})}),ge=o=>s(ae,{...o,children:"Ingen treff"}),be=(o,e)=>s(ne,{...o,children:s(D,{icon:A,iconSize:f(e)})}),Se=o=>s(de,{...o,children:s(D,{icon:A,iconSize:"small"})}),me=(o,e)=>s(le,{...o,children:s(D,{icon:fo,iconSize:f(e)})}),he=(o,e,i)=>s(ie,{...o,"aria-invalid":e,"aria-describedby":i}),De=(o,e,i)=>R(te,{...o,children:[i&&s(ee,{icon:i,iconSize:f(e)}),o.children]}),$e="320px",Ce=(o,e)=>o||(e?"-- Velg en eller flere --":"-- Velg fra listen --"),ye=(o,e)=>{const{id:i,label:x,componentSize:u="medium",errorMessage:$,tip:z,required:L,"aria-required":I,readOnly:w,options:J,isMulti:S,value:K,icon:Z,defaultValue:oo,width:eo=$e,closeMenuOnSelect:X,className:ro,style:ao,isDisabled:k,isClearable:io=!0,placeholder:so,customOptionElement:V,customSingleValueElement:no,...lo}=o,to=Do.useId(),p=i??`${to}-select`,M=S?void 0:`${p}-singleValue`,co=!!x,_=!!$,uo=!!(L||I),N=T(p,"tip"),O=T(p,"errorMessage"),po={width:eo,componentSize:u,errorMessage:$,isDisabled:k,readOnly:w,isMulti:S,className:ro,style:ao},go={options:J,value:K,defaultValue:oo,isDisabled:k||w,isClearable:io,placeholder:Ce(so,S),closeMenuOnSelect:X||!S,isMulti:S,inputId:p,name:p,classNamePrefix:l,styles:re(u),filterOption:(n,B)=>{const{label:bo}=n;return Ro(bo,B)||B===""},components:{Option:V?n=>ue(n,V):n=>ce(n,u),NoOptionsMessage:ge,Input:n=>he({...n,"aria-required":I},_,xo([M,z?N:void 0,$?O:void 0])),SingleValue:n=>pe(n,M,no),ClearIndicator:n=>be(n,u),DropdownIndicator:n=>me(n,u),MultiValueRemove:Se,Control:n=>De(n,u,Z)},"aria-invalid":_?!0:void 0,required:L,...lo};return R(Zo,{...po,children:[co&&s(wo,{htmlFor:p,showRequiredStyling:uo,children:x}),s($o,{...go,ref:e}),Xo(z,N,$,O)]})},fe=ho.forwardRef(ye);fe.displayName="Select";export{fe as S,Me as c};
//# sourceMappingURL=Select-95dff212.js.map
